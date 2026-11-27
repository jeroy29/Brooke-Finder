"use client";

import { useState } from "react";
import { toast } from "sonner";
import { releaseLot } from "@/actions/release-lot";
import { formatPeso } from "@/lib/finance";
import type { LotEditData } from "@/lib/lot-editor";
import {
  AlertDialog,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from "@/components/ui/alert-dialog";
import { Button } from "@/components/ui/button";
import { runAction } from "./shared";

/** "Danger zone" card on the Lot tab. Only shown when the lot has a homeowner. */
export function ReleaseLot({ data, onReleased }: { data: LotEditData; onReleased: () => void }) {
  const [open, setOpen] = useState(false);
  const [busy, setBusy] = useState(false);
  const { sale, payments } = data;
  if (!sale) return null;

  const paid = payments.reduce((s, p) => s + p.amount, 0);

  async function confirm() {
    setBusy(true);
    const res = await runAction(() => releaseLot(data.lot.id), "Could not release this lot. Nothing was changed.");
    setBusy(false);
    if (!res) return;
    toast.success("Lot released and set to Available");
    setOpen(false);
    onReleased();
  }

  return (
    <>
      <div className="space-y-2 rounded-lg border border-destructive/30 p-3">
        <p className="text-sm font-medium">Release this lot</p>
        <p className="text-xs text-muted-foreground">
          Use this if the buyer walked away. It removes {sale.homeowner.fullName || "the homeowner"}, the
          contract and all recorded payments, and sets the lot back to Available.
        </p>
        <Button variant="outline" size="sm" className="text-destructive" onClick={() => setOpen(true)}>
          Release lot
        </Button>
      </div>

      <AlertDialog open={open} onOpenChange={(o) => !busy && setOpen(o)}>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>
              Release Block {data.lot.blockNo}, Lot {data.lot.lotNo}?
            </AlertDialogTitle>
            <AlertDialogDescription>
              This permanently deletes {sale.homeowner.fullName || "the homeowner"}&apos;s record, the contract,
              and {payments.length} payment{payments.length === 1 ? "" : "s"} totalling {formatPeso(paid)}.
              It cannot be undone. Write down or export anything you need to keep first.
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel disabled={busy}>Keep it</AlertDialogCancel>
            <Button variant="destructive" disabled={busy} onClick={confirm}>
              {busy ? "Releasing..." : "Yes, release the lot"}
            </Button>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </>
  );
}