import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";
import type { LotStatus } from "@/lib/types";

export const STATUS_ORDER: LotStatus[] = ["AVAILABLE", "RESERVED", "SOLD", "HOLD", "CLOSED"];

// Full class strings so Tailwind can see them.
export const STATUS_META: Record<
  LotStatus,
  { label: string; badge: string; shape: string; dot: string }
> = {
  AVAILABLE: {
    label: "Available",
    badge: "border-emerald-300 bg-emerald-50 text-emerald-800",
    shape: "fill-emerald-100 stroke-emerald-500",
    dot: "bg-emerald-400",
  },
  RESERVED: {
    label: "Reserved",
    badge: "border-amber-300 bg-amber-50 text-amber-800",
    shape: "fill-amber-100 stroke-amber-500",
    dot: "bg-amber-400",
  },
  SOLD: {
    label: "Sold",
    badge: "border-violet-300 bg-violet-100 text-violet-800",
    shape: "fill-violet-200 stroke-violet-600",
    dot: "bg-violet-500",
  },
  HOLD: {
    label: "On hold",
    badge: "border-slate-300 bg-slate-100 text-slate-700",
    shape: "fill-slate-200 stroke-slate-400",
    dot: "bg-slate-400",
  },
  CLOSED: {
    label: "Closed",
    badge: "border-rose-300 bg-rose-50 text-rose-800",
    shape: "fill-rose-100 stroke-rose-400",
    dot: "bg-rose-400",
  },
};

export function StatusBadge({ status }: { status: LotStatus }) {
  return (
    <Badge variant="outline" className={cn("font-medium", STATUS_META[status].badge)}>
      {STATUS_META[status].label}
    </Badge>
  );
}