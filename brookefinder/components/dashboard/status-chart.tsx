"use client";

import { Label, Pie, PieChart } from "recharts";
import {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
  type ChartConfig,
} from "@/components/ui/chart";
import type { LotStatus } from "@/lib/types";

const META: Record<LotStatus, { label: string; color: string }> = {
  AVAILABLE: { label: "Available", color: "#34d399" },
  RESERVED: { label: "Reserved", color: "#fbbf24" },
  SOLD: { label: "Sold", color: "#8b5cf6" },
  HOLD: { label: "On hold", color: "#94a3b8" },
  CLOSED: { label: "Closed", color: "#fb7185" },
};

const config = {
  count: { label: "Lots" },
  ...Object.fromEntries(
    Object.entries(META).map(([k, v]) => [k, { label: v.label, color: v.color }]),
  ),
} satisfies ChartConfig;

export function StatusChart({ counts }: { counts: Record<LotStatus, number> }) {
  const total = Object.values(counts).reduce((a, b) => a + b, 0);
  const data = (Object.keys(META) as LotStatus[]).map((s) => ({
    status: s,
    count: counts[s],
    fill: `var(--color-${s})`,
  }));

  return (
    <div className="flex flex-col gap-4">
      <ChartContainer config={config} className="mx-auto aspect-square h-44">
        <PieChart>
          <ChartTooltip cursor={false} content={<ChartTooltipContent hideLabel nameKey="status" />} />
          <Pie
            data={data}
            dataKey="count"
            nameKey="status"
            innerRadius={52}
            outerRadius={80}
            paddingAngle={2}
            strokeWidth={2}
          >
            <Label
              content={({ viewBox }) => {
                if (!viewBox || !("cx" in viewBox) || !("cy" in viewBox)) return null;
                const cx = viewBox.cx ?? 0;
                const cy = viewBox.cy ?? 0;
                return (
                  <text x={cx} y={cy} textAnchor="middle" dominantBaseline="middle">
                    <tspan x={cx} y={cy - 2} className="fill-foreground text-2xl font-semibold">
                      {total}
                    </tspan>
                    <tspan x={cx} y={cy + 16} className="fill-muted-foreground text-xs">
                      lots
                    </tspan>
                  </text>
                );
              }}
            />
          </Pie>
        </PieChart>
      </ChartContainer>

      <ul className="grid grid-cols-2 gap-x-4 gap-y-1.5 text-sm">
        {data.map((d) => (
          <li key={d.status} className="flex items-center gap-2">
            <span className="size-2.5 rounded-full" style={{ background: META[d.status].color }} />
            <span className="text-muted-foreground">{META[d.status].label}</span>
            <span className="ml-auto font-medium tabular-nums">{d.count}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}