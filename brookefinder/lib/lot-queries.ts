import { prisma } from "@/lib/prisma";
import { DP_MONTHS, addMonths } from "@/lib/finance";
import type { LotDTO, LotStatus, MapShape, PaymentTermDTO } from "@/lib/types";

function parseShape(v: unknown): MapShape | null {
  if (!v || typeof v !== "object") return null;
  const s = v as Record<string, unknown>;
  if (s.type === "rect" && ["x", "y", "width", "height"].every((k) => typeof s[k] === "number")) {
    return s as unknown as MapShape;
  }
  if (s.type === "polygon" && Array.isArray(s.points) && s.points.length >= 3) {
    return s as unknown as MapShape;
  }
  return null;
}

/** Every lot with its block, type, homeowner and contract. Decimals become plain numbers. */
export async function getLots(): Promise<LotDTO[]> {
  const lots = await prisma.lot.findMany({
    include: {
      block: true,
      lotType: true,
      contract: {
        include: {
          homeowner: true,
          payments: { select: { amount: true } },
        },
      },
    },
    orderBy: [{ block: { blockNo: "asc" } }, { lotNo: "asc" }],
  });

  return lots.map((l) => {
    const sqm = l.sqm.toNumber();
    const pricePerSqm = l.lotType.pricePerSqm.toNumber();
    const c = l.contract;
    return {
      id: l.id,
      blockNo: l.block.blockNo,
      lotNo: l.lotNo,
      lotType: l.lotType.name,
      sqm,
      pricePerSqm,
      fullPrice: Math.round(sqm * pricePerSqm * 100) / 100,
      status: l.status as LotStatus,
      streetName: l.streetName,
      mapShape: parseShape(l.mapShape),
      contract: c
        ? {
            homeownerName: c.homeowner.fullName,
            phone: c.homeowner.phone,
            email: c.homeowner.email,
            homeAddress: c.homeowner.homeAddress,
            termMonths: c.termMonths,
            reservationFee: c.reservationFee.toNumber(),
            origTcp: c.origTcp.toNumber(),
            dpAmount: c.dpAmount.toNumber(),
            dpMonthly: c.dpMonthly.toNumber(),
            balanceAmount: c.balanceAmount.toNumber(),
            monthlyAmort: c.monthlyAmort.toNumber(),
            totalTcp: c.totalTcp.toNumber(),
            amountPaid: c.payments.reduce((sum, p) => sum + p.amount.toNumber(), 0),
            startDate: c.startDate.toISOString(),
            endsOn: addMonths(c.startDate, DP_MONTHS + c.termMonths).toISOString(),
          }
        : null,
    };
  });
}

export async function getPaymentTerms(): Promise<PaymentTermDTO[]> {
  const terms = await prisma.paymentTerm.findMany({ orderBy: { termMonths: "asc" } });
  return terms.map((t) => ({ termMonths: t.termMonths, interestRate: t.interestRate.toNumber() }));
}