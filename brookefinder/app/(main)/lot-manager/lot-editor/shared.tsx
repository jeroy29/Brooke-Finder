import { toast } from "sonner";
import type { LotStatus, PaymentType } from "@/lib/types";
import { Label } from "@/components/ui/label";

/** Statuses that need a homeowner and contract. */
export const NEEDS_SALE: LotStatus[] = ["RESERVED", "SOLD"];

export const PAYMENT_LABEL: Record<PaymentType, string> = {
  RESERVATION: "Reservation",
  DOWN_PAYMENT: "Down payment",
  AMORTIZATION: "Amortization",
};

export const today = () => new Date().toISOString().slice(0, 10);

export function Field({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <div className="min-w-0 space-y-1.5">
      <Label>{label}</Label>
      {children}
    </div>
  );
}

export async function runAction<T extends { ok: boolean; error?: string }>(
  fn: () => Promise<T>,
  fallback = "Something went wrong. Please try again.",
): Promise<T | null> {
  try {
    const res = await fn();
    if (!res.ok) {
      toast.error(res.error ?? fallback);
      return null;
    }
    return res;
  } catch {
    toast.error(fallback);
    return null;
  }
}