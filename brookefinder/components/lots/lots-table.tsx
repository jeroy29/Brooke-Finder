"use client";

import { useMemo, useState } from "react";
import { Input } from "@/components/ui/input";
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
import { LotDetailsDialog } from "@/components/map/lot-details-dialog";
import { StatusBadge, STATUS_META, STATUS_ORDER } from "@/components/lots/status-badge";
import { formatMonthYear, formatPeso } from "@/lib/finance";
import type { LotDTO } from "@/lib/types";

const dash = <span className="text-muted-foreground">-</span>;

export function LotsTable({ lots, initialQuery = "" }: { lots: LotDTO[]; initialQuery?: string }) {
  const [q, setQ] = useState(initialQuery);
  const [status, setStatus] = useState("ALL");
  const [block, setBlock] = useState("ALL");
  const [selected, setSelected] = useState<LotDTO | null>(null);

  const blockNos = useMemo(() => [...new Set(lots.map((l) => l.blockNo))].sort((a, b) => a - b), [lots]);

  const rows = useMemo(() => {
    const term = q.trim().toLowerCase();
    return lots.filter((l) => {
      if (status !== "ALL" && l.status !== status) return false;
      if (block !== "ALL" && l.blockNo !== Number(block)) return false;
      if (!term) return true;
      const hay = [`block ${l.blockNo}`, `b${l.blockNo}`, `lot ${l.lotNo}`, `l${l.lotNo}`, l.streetName, l.contract?.homeownerName]
        .filter(Boolean)
        .join(" ")
        .toLowerCase();
      return hay.includes(term);
    });
  }, [lots, q, status, block]);

  return (
    <div className="space-y-4">
      <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
        <Input
          value={q}
          onChange={(e) => setQ(e.target.value)}
          placeholder="Search homeowner, street, or block and lot"
          className="sm:max-w-sm"
        />
        <Select value={block} onValueChange={setBlock}>
          <SelectTrigger className="sm:w-40">
            <SelectValue placeholder="Block" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="ALL">All blocks</SelectItem>
            {blockNos.map((n) => (
              <SelectItem key={n} value={String(n)}>
                Block {n}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
        <Select value={status} onValueChange={setStatus}>
          <SelectTrigger className="sm:w-44">
            <SelectValue placeholder="Status" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="ALL">All statuses</SelectItem>
            {STATUS_ORDER.map((s) => (
              <SelectItem key={s} value={s}>
                {STATUS_META[s].label}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
        <p className="text-sm text-muted-foreground sm:ml-auto">
          {rows.length} of {lots.length} lots
        </p>
      </div>

      <div className="rounded-2xl border bg-card shadow-sm">
        <Table>
          <TableHeader>
            <TableRow className="bg-muted/50 hover:bg-muted/50">
              <TableHead>Block</TableHead>
              <TableHead>Lot</TableHead>
              <TableHead>Street</TableHead>
              <TableHead>Type</TableHead>
              <TableHead className="text-right">Sqm</TableHead>
              <TableHead className="text-right">Lot price</TableHead>
              <TableHead>Status</TableHead>
              <TableHead>Homeowner</TableHead>
              <TableHead className="text-right">Paid</TableHead>
              <TableHead className="text-right">Balance</TableHead>
              <TableHead className="text-right">Monthly</TableHead>
              <TableHead>Payment ends</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {rows.length === 0 && (
              <TableRow>
                <TableCell colSpan={12} className="h-24 text-center text-muted-foreground">
                  No lots match these filters.
                </TableCell>
              </TableRow>
            )}
            {rows.map((l) => {
              const c = l.contract;
              return (
                <TableRow
                  key={l.id}
                  tabIndex={0}
                  className="cursor-pointer"
                  onClick={() => setSelected(l)}
                  onKeyDown={(e) => {
                    if (e.key === "Enter") setSelected(l);
                  }}
                >
                  <TableCell className="font-medium">{l.blockNo}</TableCell>
                  <TableCell className="font-medium">{l.lotNo}</TableCell>
                  <TableCell>{l.streetName ?? dash}</TableCell>
                  <TableCell>{l.lotType === "CORNER" ? "Corner" : "Inner"}</TableCell>
                  <TableCell className="text-right tabular-nums">{l.sqm}</TableCell>
                  <TableCell className="text-right tabular-nums">{formatPeso(l.fullPrice)}</TableCell>
                  <TableCell>
                    <StatusBadge status={l.status} />
                  </TableCell>
                  <TableCell>{c ? c.homeownerName : dash}</TableCell>
                  <TableCell className="text-right tabular-nums">{c ? formatPeso(c.amountPaid) : dash}</TableCell>
                  <TableCell className="text-right tabular-nums">
                    {c ? formatPeso(Math.max(c.totalTcp - c.amountPaid, 0)) : dash}
                  </TableCell>
                  <TableCell className="text-right tabular-nums">{c ? formatPeso(c.monthlyAmort) : dash}</TableCell>
                  <TableCell>{c ? formatMonthYear(c.endsOn) : dash}</TableCell>
                </TableRow>
              );
            })}
          </TableBody>
        </Table>
      </div>

      <LotDetailsDialog
        lot={selected}
        open={selected !== null}
        onOpenChange={(o) => {
          if (!o) setSelected(null);
        }}
      />
    </div>
  );
}