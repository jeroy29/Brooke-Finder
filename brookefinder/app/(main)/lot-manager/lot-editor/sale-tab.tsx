
"use client";

import { format, parseISO } from "date-fns";
import { CalendarIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";import { useMemo } from "react";
import type { LotEditData } from "@/lib/lot-editor";
import { computeContract } from "@/lib/lot-editor";
import { formatPeso } from "@/lib/finance";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Field, NEEDS_SALE } from "./shared";
import type { LotForm, SaleForm } from "./types";

export function SaleTab({
  data,
  lotForm,
  form,
  onChange,
}: {
  data: LotEditData;
  lotForm: LotForm;
  form: SaleForm;
  onChange: (patch: Partial<SaleForm>) => void;
}) {
  const needsSale = NEEDS_SALE.includes(lotForm.status);
  const type = data.lotTypes.find((t) => String(t.id) === lotForm.lotTypeId);
  const term = data.terms.find((t) => String(t.termMonths) === form.termMonths);

  const preview = useMemo(() => {
    const s = Number(lotForm.sqm);
    const fee = Number(form.reservationFee || 0);
    if (!type || !term || !(s > 0) || fee < 0) return null;
    return computeContract({
      sqm: s,
      pricePerSqm: type.pricePerSqm,
      interestRate: term.interestRate,
      termMonths: term.termMonths,
      reservationFee: fee,
    });
  }, [lotForm.sqm, type, term, form.reservationFee]);

  if (!needsSale) {
    return (
      <p className="rounded-md bg-muted p-4 text-sm text-muted-foreground">
        Set the status to Reserved or Sold (Lot tab) to add a homeowner and contract details.
      </p>
    );
  }

  return (
    <div className="space-y-4">
      <Field label="Homeowner full name">
        <Input value={form.fullName} onChange={(e) => onChange({ fullName: e.target.value })} />
      </Field>
      <div className="grid gap-3 sm:grid-cols-2">
        <Field label="Phone">
          <Input value={form.phone} onChange={(e) => onChange({ phone: e.target.value })} />
        </Field>
        <Field label="Email">
          <Input type="email" value={form.email} onChange={(e) => onChange({ email: e.target.value })} />
        </Field>
      </div>

      <div className="grid gap-3 sm:grid-cols-3">
        <Field label="Term">
          <Select value={form.termMonths} onValueChange={(v) => onChange({ termMonths: v })}>
            <SelectTrigger className="w-full">
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              {data.terms.map((t) => (
                <SelectItem key={t.termMonths} value={String(t.termMonths)}>
                  {t.termMonths} months
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </Field>
        <Field label="Reservation fee">
          <Input
            type="number"
            step="0.01"
            value={form.reservationFee}
            onChange={(e) => onChange({ reservationFee: e.target.value })}
          />
        </Field>
        <Field label="Start date">
        <Popover>
            <PopoverTrigger asChild>
            <Button
                type="button"
                variant="outline"
                className="w-full justify-start text-left font-normal"
            >
                <CalendarIcon className="mr-2 size-4" />
                {form.startDate
                ? format(parseISO(form.startDate), "PPP")
                : "Select start date"}
            </Button>
            </PopoverTrigger>

            <PopoverContent className="w-auto p-0" align="start">
            <Calendar
                mode="single"
                selected={
                form.startDate ? parseISO(form.startDate) : undefined
                }
                onSelect={(date) => {
                if (date) {
                    onChange({
                    startDate: format(date, "yyyy-MM-dd"),
                    });
                }
                }}
            />
            </PopoverContent>
        </Popover>
        </Field>
      </div>

      <div className="rounded-lg border bg-muted/40 p-3 text-sm">
        <p className="mb-2 text-xs font-medium text-muted-foreground">Calculated when you save</p>
        {preview ? (
          <dl className="space-y-1">
            {(
              [
                ["Full lot price", preview.origTcp],
                ["Down payment (30% after reservation)", preview.dpAmount],
                ["Monthly down payment (12 months)", preview.dpMonthly],
                ["Balance after reservation and down payment", preview.balanceAmount],
                [`Monthly payment (${form.termMonths} months, with interest)`, preview.monthlyAmort],
                ["Total with interest", preview.totalTcp],
              ] as const
            ).map(([label, value]) => (
              <div key={label} className="flex justify-between gap-4">
                <dt className="text-muted-foreground">{label}</dt>
                <dd className="font-medium tabular-nums">{formatPeso(value)}</dd>
              </div>
            ))}
          </dl>
        ) : (
          <p className="text-muted-foreground">Fill in the size, term and reservation fee.</p>
        )}
      </div>
    </div>
  );
}
