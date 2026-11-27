
"use client";

import { useMemo, useState } from "react";
import { Pencil, RotateCcw, Search } from "lucide-react";
import { toast } from "sonner";
import { cn } from "@/lib/utils";
import type { LotStatus } from "@/lib/types";
import type { ActionResult } from "@/lib/lot-editor";
import { STATUS_META, STATUS_ORDER } from "@/components/lots/status-badge";
import { LotEditorSheet } from "@/app/(main)/lot-manager/lot-editor/lot-editor-sheet";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Checkbox } from "@/components/ui/checkbox";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

export type StatusLot = {
  id: string;
  blockNo: number;
  lotNo: number;
  sqm: number;
  status: LotStatus;
};

export type StatusChange = {
  lotId: string;
  status: LotStatus;
};

function StatusOption({ status }: { status: LotStatus }) {
  return (
    <span className="flex items-center gap-2">
      <span className={cn("size-2.5 rounded-full", STATUS_META[status].dot)} />
      {STATUS_META[status].label}
    </span>
  );
}

export function LotStatusManager({
  lots,
  onSave,
}: {
  lots: StatusLot[];
  onSave: (changes: StatusChange[]) => Promise<ActionResult>;
}) {
  const [block, setBlock] = useState("all");
  const [statusFilter, setStatusFilter] = useState("all");
  const [query, setQuery] = useState("");
  const [selected, setSelected] = useState<Set<string>>(new Set());
  const [pending, setPending] = useState<Map<string, LotStatus>>(new Map());
  const [bulkStatus, setBulkStatus] = useState("");
  const [saving, setSaving] = useState(false);
  const [editingId, setEditingId] = useState<string | null>(null);

  const blocks = useMemo(
    () => [...new Set(lots.map((l) => l.blockNo))].sort((a, b) => a - b),
    [lots],
  );

  const visible = useMemo(() => {
    const q = query.trim();

    return lots
      .filter((l) => block === "all" || l.blockNo === Number(block))
      .filter(
        (l) =>
          statusFilter === "all" ||
          (pending.get(l.id) ?? l.status) === statusFilter,
      )
      .filter((l) => q === "" || String(l.lotNo).includes(q))
      .sort(
        (a, b) => a.blockNo - b.blockNo || a.lotNo - b.lotNo,
      );
  }, [lots, block, statusFilter, query, pending]);

  function setStatus(lot: StatusLot, status: LotStatus) {
    setPending((prev) => {
      const next = new Map(prev);

      if (status === lot.status) {
        next.delete(lot.id);
      } else {
        next.set(lot.id, status);
      }

      return next;
    });
  }

  function toggle(id: string) {
    setSelected((prev) => {
      const next = new Set(prev);

      if (next.has(id)) {
        next.delete(id);
      } else {
        next.add(id);
      }

      return next;
    });
  }

  const allVisibleSelected =
    visible.length > 0 && visible.every((l) => selected.has(l.id));

  const someVisibleSelected = visible.some((l) => selected.has(l.id));

  function toggleAllVisible() {
    setSelected((prev) => {
      const next = new Set(prev);

      if (allVisibleSelected) {
        visible.forEach((l) => next.delete(l.id));
      } else {
        visible.forEach((l) => next.add(l.id));
      }

      return next;
    });
  }

  function applyBulk() {
    if (!bulkStatus) return;

    for (const lot of lots) {
      if (selected.has(lot.id)) {
        setStatus(lot, bulkStatus as LotStatus);
      }
    }

    setSelected(new Set());
    setBulkStatus("");
  }

  function discard() {
    setPending(new Map());
    setSelected(new Set());
    setBulkStatus("");
  }

  async function save() {
    const changes: StatusChange[] = [...pending].map(
      ([lotId, status]) => ({ lotId, status }),
    );

    if (changes.length === 0) return;

    setSaving(true);

    try {
      const res = await onSave(changes);

      if (!res.ok) {
        toast.error(res.error);
        return;
      }

      toast.success(
        `${changes.length} lot${changes.length === 1 ? "" : "s"} updated`,
      );

      discard();
    } catch {
      toast.error("Could not save the changes. Please try again.");
    } finally {
      setSaving(false);
    }
  }

  return (
    <Card className="gap-0 overflow-hidden py-0">
      {/* Filters */}
      <div className="grid gap-2 border-b p-4 sm:grid-cols-3">
        <div className="relative">
          <Search className="pointer-events-none absolute left-2.5 top-2.5 size-4 text-muted-foreground" />

          <Input
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search lot number"
            inputMode="numeric"
            className="pl-8"
          />
        </div>

        <Select value={block} onValueChange={setBlock}>
          <SelectTrigger className="w-full">
            <SelectValue placeholder="Block" />
          </SelectTrigger>

          <SelectContent>
            <SelectItem value="all">All blocks</SelectItem>

            {blocks.map((b) => (
              <SelectItem key={b} value={String(b)}>
                Block {b}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>

        <Select value={statusFilter} onValueChange={setStatusFilter}>
          <SelectTrigger className="w-full">
            <SelectValue placeholder="Status" />
          </SelectTrigger>

          <SelectContent>
            <SelectItem value="all">All statuses</SelectItem>

            {STATUS_ORDER.map((s) => (
              <SelectItem key={s} value={s}>
                <StatusOption status={s} />
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>

      {/* Select all + bulk action */}
      <div className="flex flex-wrap items-center gap-3 border-b bg-muted/40 px-4 py-2.5">
        <label className="flex items-center gap-2 text-sm">
          <Checkbox
            checked={
              allVisibleSelected
                ? true
                : someVisibleSelected
                  ? "indeterminate"
                  : false
            }
            onCheckedChange={toggleAllVisible}
            aria-label="Select all shown lots"
          />

          Select all
        </label>

        <span className="text-xs text-muted-foreground">
          {selected.size > 0
            ? `${selected.size} selected`
            : `${visible.length} of ${lots.length} lots`}
        </span>

        {selected.size > 0 && (
          <div className="ml-auto flex items-center gap-2">
            <Select value={bulkStatus} onValueChange={setBulkStatus}>
              <SelectTrigger className="h-8 w-40">
                <SelectValue placeholder="Set selected to..." />
              </SelectTrigger>

              <SelectContent>
                {STATUS_ORDER.map((s) => (
                  <SelectItem key={s} value={s}>
                    <StatusOption status={s} />
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>

            <Button
              size="sm"
              disabled={!bulkStatus}
              onClick={applyBulk}
            >
              Apply
            </Button>
          </div>
        )}
      </div>

      {/* Lot list */}
      <div className="max-h-[60vh] overflow-y-auto">
        {visible.length === 0 ? (
          <p className="p-10 text-center text-sm text-muted-foreground">
            No lots match your filters.
          </p>
        ) : (
          <ul className="divide-y">
            {visible.map((lot) => {
              const status = pending.get(lot.id) ?? lot.status;
              const changed = pending.has(lot.id);

              return (
                <li
                  key={lot.id}
                  className={cn(
                    "flex items-center gap-3 px-4 py-2.5",
                    changed && "bg-amber-50/70",
                  )}
                >
                  <Checkbox
                    checked={selected.has(lot.id)}
                    onCheckedChange={() => toggle(lot.id)}
                    aria-label={`Select Block ${lot.blockNo} Lot ${lot.lotNo}`}
                  />

                  <div className="min-w-0 flex-1">
                    <p className="text-sm font-medium">
                      Block {lot.blockNo}, Lot {lot.lotNo}
                    </p>

                    <p className="text-xs text-muted-foreground">
                      {lot.sqm} sqm
                      {changed &&
                        ` · was ${STATUS_META[lot.status].label}`}
                    </p>
                  </div>

                  {/* Edit lot button */}
                  <Button
                    variant="ghost"
                    size="icon"
                    className="size-8"
                    onClick={() => setEditingId(lot.id)}
                    aria-label={`Edit Block ${lot.blockNo} Lot ${lot.lotNo}`}
                  >
                    <Pencil className="size-4" />
                  </Button>

                  {/* Lot status dropdown */}
                  <Select
                    value={status}
                    onValueChange={(v) =>
                      setStatus(lot, v as LotStatus)
                    }
                  >
                    <SelectTrigger className="h-8 w-40">
                      <SelectValue />
                    </SelectTrigger>

                    <SelectContent>
                      {STATUS_ORDER.map((s) => (
                        <SelectItem key={s} value={s}>
                          <StatusOption status={s} />
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </li>
              );
            })}
          </ul>
        )}
      </div>

      {/* Save bar */}
      <div className="flex items-center justify-between gap-2 border-t bg-background p-4">
        <span className="text-sm text-muted-foreground">
          {pending.size === 0
            ? "No changes yet"
            : `${pending.size} change${pending.size === 1 ? "" : "s"} to save`}
        </span>

        <div className="flex gap-2">
          <Button
            variant="outline"
            size="sm"
            onClick={discard}
            disabled={pending.size === 0 || saving}
          >
            <RotateCcw className="size-4" />
            Discard
          </Button>

          <Button
            size="sm"
            onClick={save}
            disabled={pending.size === 0 || saving}
          >
            {saving ? "Saving..." : "Save changes"}
          </Button>
        </div>
      </div>

      {/* Lot Editor Sheet */}
      <LotEditorSheet
        lotId={editingId}
        onOpenChange={(open) => {
          if (!open) setEditingId(null);
        }}
      />
    </Card>
  );
}
