"use client";

import { useEffect, useState } from "react";
import { toast } from "sonner";
import type { LotEditData } from "@/lib/lot-editor";
import { getLotForEdit } from "@/actions/lot-editor";
import { Sheet, SheetContent, SheetDescription, SheetHeader, SheetTitle } from "@/components/ui/sheet";
import { Skeleton } from "@/components/ui/skeleton";
import { EditorBody } from "./editor-body";

/** The side panel. It loads the lot, then hands it to EditorBody (tabs live in lot-editor/). */
export function LotEditorSheet({
  lotId,
  onOpenChange,
}: {
  lotId: string | null;
  onOpenChange: (open: boolean) => void;
}) {
  const [data, setData] = useState<LotEditData | null>(null);

  useEffect(() => {
    if (!lotId) {
      setData(null);
      return;
    }
    let cancelled = false;
    setData(null);
    getLotForEdit(lotId)
      .then((d) => !cancelled && setData(d))
      .catch(() => toast.error("Could not load this lot."));
    return () => {
      cancelled = true;
    };
  }, [lotId]);

  async function refresh() {
    if (!lotId) return;
    try {
      setData(await getLotForEdit(lotId));
    } catch {
      toast.error("Could not reload this lot. Close and reopen it.");
    }
  }

  return (
    <Sheet open={lotId !== null} onOpenChange={onOpenChange}>
      {/* Inline style on purpose: shadcn's own width classes on the sheet can beat a className override. */}
      <SheetContent
        side="right"
        className="flex flex-col gap-0 p-0"
        style={{ width: "min(100vw, 44rem)", maxWidth: "none" }}
      >
        <SheetHeader className="border-b p-4">
          <SheetTitle>{data ? `Block ${data.lot.blockNo}, Lot ${data.lot.lotNo}` : "Edit lot"}</SheetTitle>
          <SheetDescription>Update the lot, its homeowner and its payments.</SheetDescription>
        </SheetHeader>

        {!data ? (
          <div className="space-y-3 p-4">
            <Skeleton className="h-9" />
            <Skeleton className="h-9" />
            <Skeleton className="h-9" />
          </div>
        ) : (
          <EditorBody key={data.lot.id} data={data} onSaved={() => onOpenChange(false)} onRefresh={refresh} />
        )}
      </SheetContent>
    </Sheet>
  );
}