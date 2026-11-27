"use server";

import { revalidatePath } from "next/cache";
import { requireAdmin } from "@/lib/auth";
import { prisma } from "@/lib/prisma";
import type { LotStatus } from "@/lib/types";
import type { ActionResult } from "@/lib/lot-editor";
import type { StatusChange } from "@/app/(main)/lot-manager/lot-status-manager";

const VALID: LotStatus[] = ["AVAILABLE", "RESERVED", "SOLD", "HOLD", "CLOSED"]; // remove any you dropped
const NEEDS_SALE: LotStatus[] = ["RESERVED", "SOLD"];

export async function updateLotStatuses(changes: StatusChange[]): Promise<ActionResult> {
  await requireAdmin();

  if (changes.some((c) => !VALID.includes(c.status))) {
    return { ok: false, error: "Invalid status." };
  }

  const lots = await prisma.lot.findMany({
    where: { id: { in: changes.map((c) => c.lotId) } },
    select: { id: true, lotNo: true, block: { select: { blockNo: true } }, contract: { select: { id: true } } },
  });
  const byId = new Map(lots.map((l) => [l.id, l]));

  for (const c of changes) {
    const lot = byId.get(c.lotId);
    if (!lot) return { ok: false, error: "A lot was not found." };
    const name = `Block ${lot.block.blockNo}, Lot ${lot.lotNo}`;
    if (NEEDS_SALE.includes(c.status) && !lot.contract) {
      return { ok: false, error: `${name} has no homeowner yet. Use its edit button to add one first.` };
    }
    if (c.status === "AVAILABLE" && lot.contract) {
      return { ok: false, error: `${name} has a homeowner. Use its edit button to release it.` };
    }
  }

  await prisma.$transaction(
    changes.map((c) => prisma.lot.update({ where: { id: c.lotId }, data: { status: c.status } })),
  );

  for (const p of ["/map", "/dashboard", "/lot-manager"]) revalidatePath(p);
  return { ok: true };
}