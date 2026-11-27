
"use server";

import { revalidatePath } from "next/cache";
import { requireAdmin } from "@/lib/auth";
import { prisma } from "@/lib/prisma";
import type { LotStatus, PaymentType } from "@/lib/types";
import {
  computeContract,
  type ActionResult,
  type LotEditData,
  type SaveLotInput,
} from "@/lib/lot-editor";

const VALID_STATUS: LotStatus[] = ["AVAILABLE", "RESERVED", "SOLD", "HOLD", "CLOSED"];
const NEEDS_SALE: LotStatus[] = ["RESERVED", "SOLD"];
const VALID_PAYMENT: PaymentType[] = ["RESERVATION", "DOWN_PAYMENT", "AMORTIZATION"];

class UserError extends Error {}

function refreshPages() {
  for (const p of ["/map", "/dashboard", "/lot-manager"]) revalidatePath(p);
}

function fail(e: unknown): ActionResult {
  if (e instanceof UserError) return { ok: false, error: e.message };
  console.error(e);
  return { ok: false, error: "Something went wrong. Please try again." };
}

const day = (d: Date) => d.toISOString().slice(0, 10);

/** Loads everything the editor needs for one lot. */
export async function getLotForEdit(lotId: string): Promise<LotEditData> {
  await requireAdmin();

  const [lot, lotTypes, terms] = await Promise.all([
    prisma.lot.findUniqueOrThrow({
      where: { id: lotId },
      include: {
        block: true,
        contract: {
          include: { homeowner: true, payments: { orderBy: { paidOn: "desc" } } },
        },
      },
    }),
    prisma.lotType.findMany({ orderBy: { id: "asc" } }),
    prisma.paymentTerm.findMany({ orderBy: { termMonths: "asc" } }),
  ]);

  const c = lot.contract;

  return {
    lot: {
      id: lot.id,
      blockNo: lot.block.blockNo,
      lotNo: lot.lotNo,
      sqm: Number(lot.sqm),
      status: lot.status,
      lotTypeId: lot.lotTypeId,
    },
    lotTypes: lotTypes.map((t) => ({
      id: t.id,
      name: t.name,
      pricePerSqm: Number(t.pricePerSqm),
    })),
    terms: terms.map((t) => ({
      termMonths: t.termMonths,
      interestRate: Number(t.interestRate),
    })),
    sale: c
      ? {
          contractId: c.id,
          homeowner: {
            fullName: c.homeowner.fullName,
            phone: c.homeowner.phone ?? "",
            email: c.homeowner.email ?? "",
          },
          termMonths: c.termMonths,
          reservationFee: Number(c.reservationFee),
          startDate: day(c.startDate),
          totalTcp: Number(c.totalTcp),
        }
      : null,
    payments: c
      ? c.payments.map((p) => ({
          id: p.id,
          amount: Number(p.amount),
          paidOn: day(p.paidOn),
          paymentType: p.paymentType,
        }))
      : [],
  };
}

/** Saves the lot, its homeowner and its contract together (all or nothing). */
export async function saveLot(input: SaveLotInput): Promise<ActionResult> {
  await requireAdmin();

  try {
    if (!VALID_STATUS.includes(input.status)) throw new UserError("Invalid status.");
    if (!(input.sqm > 0)) throw new UserError("Size must be more than 0 sqm.");

    const needsSale = NEEDS_SALE.includes(input.status);
    const sale = input.sale;

    if (needsSale) {
      if (!sale || !sale.fullName.trim()) {
        throw new UserError("Enter the homeowner's name.");
      }
      if (!(sale.reservationFee >= 0)) {
        throw new UserError("Reservation fee cannot be negative.");
      }
      if (Number.isNaN(Date.parse(sale.startDate))) {
        throw new UserError("Pick a valid start date.");
      }
    }

    await prisma.$transaction(async (tx) => {
      const lot = await tx.lot.findUniqueOrThrow({
        where: { id: input.lotId },
        include: { contract: { include: { payments: { select: { id: true } } } } },
      });

      const lotType = await tx.lotType.findUnique({
        where: { id: input.lotTypeId },
      });

      if (!lotType) throw new UserError("Lot type not found.");

      await tx.lot.update({
        where: { id: input.lotId },
        data: {
          status: input.status,
          sqm: input.sqm,
          lotTypeId: input.lotTypeId,
        },
      });

      // Back to Available: the sale is removed, unless money was already paid.
      if (input.status === "AVAILABLE") {
        if (lot.contract) {
          if (lot.contract.payments.length > 0) {
            throw new UserError(
              "This lot has recorded payments, so it cannot be set back to Available. Delete the payments first.",
            );
          }

          await tx.contract.delete({ where: { id: lot.contract.id } });
        }

        return;
      }

      if (!needsSale || !sale) return;

      const term = await tx.paymentTerm.findUnique({
        where: { termMonths: sale.termMonths },
      });

      if (!term) throw new UserError("Payment term not found.");

      const figures = computeContract({
        sqm: input.sqm,
        pricePerSqm: Number(lotType.pricePerSqm),
        interestRate: Number(term.interestRate),
        termMonths: sale.termMonths,
        reservationFee: sale.reservationFee,
      });

      const owner = {
        fullName: sale.fullName.trim(),
        phone: sale.phone.trim() || null,
        email: sale.email.trim() || null,
      };

      let homeownerId: string;

      if (lot.contract) {
        homeownerId = lot.contract.homeownerId;
        await tx.homeowner.update({
          where: { id: homeownerId },
          data: owner,
        });
      } else {
        homeownerId = (await tx.homeowner.create({ data: owner })).id;
      }

      const contractData = {
        termMonths: sale.termMonths,
        reservationFee: sale.reservationFee,
        startDate: new Date(sale.startDate),
        ...figures,
      };

      await tx.contract.upsert({
        where: { lotId: input.lotId },
        create: { lotId: input.lotId, homeownerId, ...contractData },
        update: contractData,
      });
    });

    refreshPages();
    return { ok: true };
  } catch (e) {
    return fail(e);
  }
}

export async function addPayment(input: {
  contractId: string;
  amount: number;
  paidOn: string;
  paymentType: PaymentType;
}): Promise<ActionResult> {
  const admin = await requireAdmin();

  try {
    if (!(input.amount > 0)) throw new UserError("Amount must be more than 0.");
    if (Number.isNaN(Date.parse(input.paidOn))) {
      throw new UserError("Pick a valid date.");
    }
    if (!VALID_PAYMENT.includes(input.paymentType)) {
      throw new UserError("Invalid payment type.");
    }

    await prisma.payment.create({
      data: {
        contractId: input.contractId,
        recordedBy: admin.id,
        amount: input.amount,
        paidOn: new Date(input.paidOn),
        paymentType: input.paymentType,
      },
    });

    refreshPages();
    return { ok: true };
  } catch (e) {
    return fail(e);
  }
}

export async function deletePayment(paymentId: string): Promise<ActionResult> {
  await requireAdmin();

  try {
    await prisma.payment.delete({ where: { id: paymentId } });
    refreshPages();
    return { ok: true };
  } catch (e) {
    return fail(e);
  }
}
