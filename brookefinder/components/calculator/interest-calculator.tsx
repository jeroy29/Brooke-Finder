"use client";

import { useMemo, useState } from "react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { DP_MONTHS, DP_RATE, buildSchedule, computeInstallment, formatPeso } from "@/lib/finance";
import type { LotDTO, PaymentTermDTO } from "@/lib/types";

type LotOption = Pick<LotDTO, "id" | "blockNo" | "lotNo" | "lotType" | "sqm" | "fullPrice" | "status">;

function Line({ label, value, strong }: { label: string; value: string; strong?: boolean }) {
  return (
    <div className="flex items-baseline justify-between gap-4 py-2 text-sm">
      <dt className="text-muted-foreground">{label}</dt>
      <dd className={strong ? "font-semibold" : "font-medium"}>{value}</dd>
    </div>
  );
}

export function InterestCalculator({
  lots,
  terms,
}: {
  lots: LotOption[];
  terms: PaymentTermDTO[];
}) {
  const [lotId, setLotId] = useState("custom");
  const [price, setPrice] = useState("");
  const [termMonths, setTermMonths] = useState(terms[0] ? String(terms[0].termMonths) : "");
  const [reservation, setReservation] = useState("10000");

  const term = terms.find((t) => String(t.termMonths) === termMonths);

  const result = useMemo(() => {
    const tcp = parseFloat(price);
    if (!term || !(tcp > 0)) return null;
    return computeInstallment({
      tcp,
      termMonths: term.termMonths,
      interestRate: term.interestRate,
      reservationFee: Math.max(parseFloat(reservation) || 0, 0),
    });
  }, [price, term, reservation]);

  const schedule = useMemo(() => (result ? buildSchedule(result) : []), [result]);

  function onLotChange(id: string) {
    setLotId(id);
    const lot = lots.find((l) => l.id === id);
    if (lot) setPrice(String(lot.fullPrice));
  }

  if (terms.length === 0) {
    return (
      <div className="rounded-xl border border-dashed border-violet-300 p-10 text-center text-sm text-muted-foreground">
        No payment terms yet. Add terms (12, 24, 36, 48 months) with their interest rates to the
        payment_terms table to use the calculator.
      </div>
    );
  }

  return (
    <div className="grid gap-6 lg:grid-cols-[22rem_1fr]">
      <section className="space-y-5 rounded-xl border border-violet-200 bg-white p-5">
        <div className="space-y-2">
          <Label>Lot</Label>
          <Select value={lotId} onValueChange={onLotChange}>
            <SelectTrigger>
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="custom">Enter a price manually</SelectItem>
              {lots.map((l) => (
                <SelectItem key={l.id} value={l.id}>
                  Block {l.blockNo}, Lot {l.lotNo} · {l.sqm} sqm · {l.lotType === "CORNER" ? "Corner" : "Inner"}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>

        <div className="space-y-2">
          <Label htmlFor="price">Lot price before interest (PHP)</Label>
          <Input
            id="price"
            type="number"
            inputMode="decimal"
            min={0}
            value={price}
            onChange={(e) => {
              setPrice(e.target.value);
              setLotId("custom");
            }}
            placeholder="0.00"
          />
        </div>

        <div className="space-y-2">
          <Label>Payment term/Amortization</Label>
          <Select value={termMonths} onValueChange={setTermMonths}>
            <SelectTrigger>
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              {terms.map((t) => (
                <SelectItem key={t.termMonths} value={String(t.termMonths)}>
                  {t.termMonths} months · {(t.interestRate * 100).toFixed(2)}% per month
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>

        <div className="space-y-2">
          <Label htmlFor="reservation">Reservation fee (PHP)</Label>
          <Input
            id="reservation"
            type="number"
            inputMode="decimal"
            min={0}
            value={reservation}
            onChange={(e) => setReservation(e.target.value)}
          />
        </div>
      </section>

      <section className="space-y-5">
        {!result ? (
          <div className="rounded-xl border border-dashed border-violet-300 p-10 text-center text-sm text-muted-foreground">
            Pick a lot or enter a price to see the monthly payment.
          </div>
        ) : (
          <>
            <div className="rounded-xl bg-violet-700 p-6 text-white">
              <p className="text-sm text-violet-200">
                Monthly amortization for {result.termMonths} months
              </p>
              <p className="mt-1 text-4xl font-semibold tabular-nums">{formatPeso(result.monthlyAmort)}</p>
              <p className="mt-2 text-sm text-violet-200">
                after {DP_MONTHS} months of down payment at {formatPeso(result.dpMonthly)} per month
              </p>
            </div>

            <dl className="divide-y rounded-xl border border-violet-200 bg-white px-5">
              <Line label="Lot price before interest" value={formatPeso(result.tcp)} />
              <Line label={`Down payment (${DP_RATE * 100}%, payable in ${DP_MONTHS} months)`} value={formatPeso(result.dpAmount)} />
              <Line label="Reservation fee (deducted from balance)" value={formatPeso(result.reservationFee)} />
              <Line label={`Monthly down payment (${DP_MONTHS} months, no interest)`} value={formatPeso(result.dpMonthly)} />
              <Line label="Capital balance (price - down payment - reservation)" value={formatPeso(result.balanceAmount)} />
              <Line
                label={`Interest (${(result.interestRate * 100).toFixed(2)}% a month on what is still owed)`}
                value={formatPeso(result.interestAmount)}
              />
              <Line label="Balance with interest" value={formatPeso(result.balanceWithInterest)} />
              <Line label="Total contract price" value={formatPeso(result.totalTcp)} strong />
            </dl>

            <details className="rounded-xl border border-violet-200 bg-white">
              <summary className="cursor-pointer px-5 py-3 text-sm font-medium">
                Payment schedule ({schedule.length} months)
              </summary>
              <div className="max-h-96 overflow-auto border-t">
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Month</TableHead>
                      <TableHead>Type</TableHead>
                      <TableHead className="text-right">Payment</TableHead>
                      <TableHead className="text-right">Remaining</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {schedule.map((r) => (
                      <TableRow key={r.n}>
                        <TableCell>{r.n}</TableCell>
                        <TableCell>{r.phase}</TableCell>
                        <TableCell className="text-right tabular-nums">{formatPeso(r.amount)}</TableCell>
                        <TableCell className="text-right tabular-nums">{formatPeso(r.remaining)}</TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </div>
            </details>
          </>
        )}
      </section>
    </div>
  );
}