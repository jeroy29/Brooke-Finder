"use server";

import { revalidatePath } from "next/cache";
import { prisma } from "@/lib/prisma";
import { requireAdmin } from "@/lib/auth";

type Result = { ok: true } | { ok: false; error: string };

/**
 * Admin only. Takes a lot back after a buyer walks away.
 * Deletes the lot's payments, its contract, and the homeowner (unless they own another lot),
 * then sets the lot back to AVAILABLE. All or nothing: if any step fails, nothing changes.
 */
export async function releaseLot(lotId: string): Promise<Result> {
  await requireAdmin();

  try {
    await prisma.$transaction(async (tx) => {
      const contract = await tx.contract.findUnique({
        where: { lotId },
        select: { id: true, homeownerId: true },
      });

      if (contract) {
        await tx.payment.deleteMany({ where: { contractId: contract.id } });
        await tx.contract.delete({ where: { id: contract.id } });

        const otherContracts = await tx.contract.count({ where: { homeownerId: contract.homeownerId } });
        if (otherContracts === 0) await tx.homeowner.delete({ where: { id: contract.homeownerId } });
      }

      await tx.lot.update({ where: { id: lotId }, data: { status: "AVAILABLE" } });
    });
  } catch {
    return { ok: false, error: "Could not release this lot. Nothing was changed." };
  }

  revalidatePath("/", "layout");
  return { ok: true };
}