"use client";

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { StatusBadge } from "@/components/lots/status-badge";
import { formatMonthYear, formatPeso } from "@/lib/finance";
import type { LotDTO } from "@/lib/types";

function Row({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <div className="flex items-start justify-between gap-4 py-2 text-sm">
      <dt className="text-muted-foreground">{label}</dt>
      <dd className="text-right font-medium">{children}</dd>
    </div>
  );
}

export function lotAddress(lot: LotDTO) {
  return [`Block ${lot.blockNo}, Lot ${lot.lotNo}`, "Hidden Brooke Executive Village"]
    .filter(Boolean)
    .join(", ");
}

export function LotDetailsDialog({
  lot,
  open,
  onOpenChange,
}: {
  lot: LotDTO | null;
  open: boolean;
  onOpenChange: (open: boolean) => void;
}) {
  const c = lot?.contract ?? null;
  const paidPct = c && c.totalTcp > 0 ? Math.min(100, (c.amountPaid / c.totalTcp) * 100) : 0;

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-h-[90vh] overflow-y-auto sm:max-w-lg">
        {lot && (
          <>
            <DialogHeader>
              <div className="flex items-center gap-3">
                <DialogTitle className="text-xl">
                  Block {lot.blockNo}, Lot {lot.lotNo}
                </DialogTitle>
                <StatusBadge status={lot.status} />
              </div>
              <DialogDescription>{lotAddress(lot)}</DialogDescription>
            </DialogHeader>

            <dl className="divide-y">
              <Row label="Homeowner">
                {c ? (
                  <>
                    {c.homeownerName}
                    {(c.phone || c.email) && (
                      <span className="block text-xs font-normal text-muted-foreground">
                        {[c.phone, c.email].filter(Boolean).join(" · ")}
                      </span>
                    )}
                  </>
                ) : (
                  <span className="font-normal text-muted-foreground">No homeowner yet</span>
                )}
              </Row>
              <Row label="Lot type and size">
                {lot.lotType === "CORNER" ? "Corner" : "Inner"} lot, {lot.sqm} sqm
              </Row>
              <Row label="Price per sqm">{formatPeso(lot.pricePerSqm)}</Row>
              <Row label="Full lot price">{formatPeso(lot.fullPrice)}</Row>

              {c && (
                <>
                  <Row label="Total with interest">{formatPeso(c.totalTcp)}</Row>
                  <Row label="Paid so far">
                    {formatPeso(c.amountPaid)}
                    <span className="mt-1.5 block h-1.5 w-40 overflow-hidden rounded-full bg-violet-100">
                      <span
                        className="block h-full rounded-full bg-violet-600"
                        style={{ width: `${paidPct}%` }}
                      />
                    </span>
                  </Row>
                  <Row label="Remaining">{formatPeso(Math.max(c.totalTcp - c.amountPaid, 0))}</Row>
                  <Row label="Monthly down payment">{formatPeso(c.dpMonthly)}</Row>
                  <Row label={`Monthly payment (${c.termMonths} months, with interest)`}>
                    {formatPeso(c.monthlyAmort)}
                  </Row>
                  <Row label="Payment ends">{formatMonthYear(c.endsOn)}</Row>
                </>
              )}
            </dl>
          </>
        )}
      </DialogContent>
    </Dialog>
  );
}