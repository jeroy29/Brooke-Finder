
"use client";

import { useState } from "react";
import { Trash2, CalendarIcon } from "lucide-react";
import { format, parseISO } from "date-fns";
import { toast } from "sonner";
import type { PaymentType } from "@/lib/types";
import type { LotEditData } from "@/lib/lot-editor";
import { addPayment, deletePayment } from "@/actions/lot-editor";
import { formatPeso } from "@/lib/finance";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Calendar } from "@/components/ui/calendar";
import { Field, PAYMENT_LABEL, runAction, today } from "./shared";

export function PaymentsTab({
  data,
  onRefresh,
}: {
  data: LotEditData;
  onRefresh: () => Promise<void>;
}) {
  const { sale, payments } = data;

  const [amount, setAmount] = useState("");
  const [paidOn, setPaidOn] = useState(today());
  const [paymentType, setPaymentType] =
    useState<PaymentType>("AMORTIZATION");
  const [busy, setBusy] = useState(false);

  if (!sale) {
    return (
      <p className="rounded-md bg-muted p-4 text-sm text-muted-foreground">
        Save the homeowner first (Homeowner &amp; price tab). Payments can be
        added after that.
      </p>
    );
  }

  const paid = payments.reduce((s, p) => s + p.amount, 0);

  async function add() {
    if (!sale) return;

    if (!(Number(amount) > 0)) {
      toast.error("Enter a payment amount greater than zero.");
      return;
    }

    if (!paidOn) {
      toast.error("Choose the date the payment was made.");
      return;
    }

    setBusy(true);

    const res = await runAction(
      () =>
        addPayment({
          contractId: sale.contractId,
          amount: Number(amount),
          paidOn,
          paymentType,
        }),
      "Could not add the payment. Please try again.",
    );

    setBusy(false);

    if (!res) return;

    toast.success("Payment added");
    setAmount("");
    await onRefresh();
  }

  async function remove(id: string) {
    if (!window.confirm("Delete this payment? This cannot be undone.")) return;

    setBusy(true);

    const res = await runAction(
      () => deletePayment(id),
      "Could not delete the payment. Please try again.",
    );

    setBusy(false);

    if (!res) return;

    toast.success("Payment deleted");
    await onRefresh();
  }

  return (
    <div className="space-y-4">
      <div className="grid grid-cols-2 gap-3 text-sm">
        <div className="rounded-lg border p-3">
          <p className="text-xs text-muted-foreground">Paid so far</p>
          <p className="font-semibold tabular-nums">{formatPeso(paid)}</p>
        </div>

        <div className="rounded-lg border p-3">
          <p className="text-xs text-muted-foreground">Remaining</p>
          <p className="font-semibold tabular-nums">
            {formatPeso(Math.max(sale.totalTcp - paid, 0))}
          </p>
        </div>
      </div>

      <div className="space-y-3 rounded-lg border p-3">
        <p className="text-sm font-medium">Add a payment</p>

        <div className="grid grid-cols-2 gap-3">
          <Field label="Amount">
            <Input
              type="number"
              step="0.01"
              value={amount}
              onChange={(e) => setAmount(e.target.value)}
            />
          </Field>

          <Field label="Date paid">
            <Popover>
              <PopoverTrigger asChild>
                <Button
                  type="button"
                  variant="outline"
                  className="w-full justify-start text-left font-normal"
                >
                  <CalendarIcon className="mr-2 size-4" />
                  {paidOn ? format(parseISO(paidOn), "PPP") : "Select date"}
                </Button>
              </PopoverTrigger>

              <PopoverContent className="w-auto p-0" align="start">
                <Calendar
                  mode="single"
                  selected={paidOn ? parseISO(paidOn) : undefined}
                  onSelect={(date) => {
                    if (date) {
                      setPaidOn(format(date, "yyyy-MM-dd"));
                    }
                  }}
                />
              </PopoverContent>
            </Popover>
          </Field>

          <Field label="Type">
            <Select
              value={paymentType}
              onValueChange={(v) => setPaymentType(v as PaymentType)}
            >
              <SelectTrigger className="w-full">
                <SelectValue />
              </SelectTrigger>

              <SelectContent>
                {(Object.keys(PAYMENT_LABEL) as PaymentType[]).map((t) => (
                  <SelectItem key={t} value={t}>
                    {PAYMENT_LABEL[t]}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </Field>
        </div>

        <Button size="sm" disabled={busy || !amount} onClick={add}>
          Add payment
        </Button>
      </div>

      <ul className="divide-y rounded-lg border">
        {payments.length === 0 && (
          <li className="p-4 text-center text-sm text-muted-foreground">
            No payments yet.
          </li>
        )}

        {payments.map((p) => (
          <li
            key={p.id}
            className="flex items-center gap-3 px-3 py-2.5"
          >
            <div className="min-w-0 flex-1">
              <p className="text-sm font-medium tabular-nums">
                {formatPeso(p.amount)}
              </p>

              <p className="truncate text-xs text-muted-foreground">
                {PAYMENT_LABEL[p.paymentType]} · {p.paidOn}
              </p>
            </div>

            <Button
              variant="ghost"
              size="icon"
              className="size-8 text-muted-foreground hover:text-destructive"
              disabled={busy}
              onClick={() => remove(p.id)}
              aria-label="Delete payment"
            >
              <Trash2 className="size-4" />
            </Button>
          </li>
        ))}
      </ul>
    </div>
  );
}
