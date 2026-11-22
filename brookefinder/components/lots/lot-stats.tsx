import { STATUS_META } from "@/components/lots/status-badge";
import { cn } from "@/lib/utils";
import type { LotStatus } from "@/lib/types";

export function LotStats({ lots }: { lots: { status: LotStatus }[] }) {
  const count = (s: LotStatus) => lots.filter((l) => l.status === s).length;
  const items: { label: string; value: number; dot?: string }[] = [
    { label: "Total lots", value: lots.length },
    { label: "Available", value: count("AVAILABLE"), dot: STATUS_META.AVAILABLE.dot },
    { label: "Reserved", value: count("RESERVED"), dot: STATUS_META.RESERVED.dot },
    { label: "Sold", value: count("SOLD"), dot: STATUS_META.SOLD.dot },
  ];

  return (
    <div className="grid grid-cols-2 gap-3 lg:grid-cols-4">
      {items.map((i) => (
        <div key={i.label} className="rounded-2xl border bg-card p-4 shadow-sm">
          <p className="flex items-center gap-2 text-sm text-muted-foreground">
            {i.dot && <span className={cn("size-2 rounded-full", i.dot)} />}
            {i.label}
          </p>
          <p className="mt-1 font-[family-name:var(--font-display)] text-3xl font-semibold tabular-nums">
            {i.value}
          </p>
        </div>
      ))}
    </div>
  );
}