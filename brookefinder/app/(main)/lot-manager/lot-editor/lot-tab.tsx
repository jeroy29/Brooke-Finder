
"use client";

import type { LotStatus } from "@/lib/types";
import type { LotEditData } from "@/lib/lot-editor";
import { formatPeso } from "@/lib/finance";
import { STATUS_META, STATUS_ORDER } from "@/components/lots/status-badge";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Field } from "./shared";
import { ReleaseLot } from "./release-button";
import type { LotForm } from "./types";

export function LotTab({
  data,
  form,
  onChange,
  onReleased,
}: {
  data: LotEditData;
  form: LotForm;
  onChange: (patch: Partial<LotForm>) => void;
  onReleased: () => void;
}) {
  return (
    <div className="space-y-4">
      <Field label="Status">
        <Select value={form.status} onValueChange={(v) => onChange({ status: v as LotStatus })}>
          <SelectTrigger className="w-full">
            <SelectValue />
          </SelectTrigger>
          <SelectContent>
            {STATUS_ORDER.map((s) => (
              <SelectItem key={s} value={s}>
                {STATUS_META[s].label}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </Field>

      {data.sale && form.status === "AVAILABLE" && (
        <p className="rounded-md bg-amber-50 p-3 text-xs text-amber-800">
          Saving as Available removes the homeowner and contract from this lot. This only works if it has no
          payments.
        </p>
      )}

      <div className="grid gap-3 sm:grid-cols-2">
        <Field label="Size (sqm)">
          <Input type="number" step="0.01" value={form.sqm} onChange={(e) => onChange({ sqm: e.target.value })} />
        </Field>
        <Field label="Lot type">
          <Select value={form.lotTypeId} onValueChange={(v) => onChange({ lotTypeId: v })}>
            <SelectTrigger className="w-full">
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              {data.lotTypes.map((t) => (
                <SelectItem key={t.id} value={String(t.id)}>
                  {t.name === "CORNER" ? "Corner" : "Inner"} ({formatPeso(t.pricePerSqm)}/sqm)
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </Field>
      </div>

      <ReleaseLot data={data} onReleased={onReleased} />
    </div>
  );
}
