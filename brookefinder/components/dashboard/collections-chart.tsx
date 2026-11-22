"use client";

import { Area, AreaChart, CartesianGrid, XAxis, YAxis } from "recharts";
import {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
  type ChartConfig,
} from "@/components/ui/chart";

const config = {
  amount: { label: "Collected", color: "var(--chart-1)" },
} satisfies ChartConfig;

const compact = new Intl.NumberFormat("en-PH", { notation: "compact", maximumFractionDigits: 1 });

export function CollectionsChart({ data }: { data: { label: string; amount: number }[] }) {
  return (
    <ChartContainer config={config} className="h-44 w-full xl:h-56">
      <AreaChart data={data} margin={{ left: 0, right: 4, top: 4 }}>
        <defs>
          <linearGradient id="fillCollected" x1="0" y1="0" x2="0" y2="1">
            <stop offset="5%" stopColor="var(--color-amount)" stopOpacity={0.35} />
            <stop offset="95%" stopColor="var(--color-amount)" stopOpacity={0.02} />
          </linearGradient>
        </defs>
        <CartesianGrid vertical={false} strokeDasharray="3 3" />
        <XAxis dataKey="label" tickLine={false} axisLine={false} tickMargin={8} />
        <YAxis
          tickLine={false}
          axisLine={false}
          width={44}
          tickFormatter={(v: number) => compact.format(v)}
        />
        <ChartTooltip cursor={false} content={<ChartTooltipContent indicator="line" />} />
        <Area
          dataKey="amount"
          type="monotone"
          stroke="var(--color-amount)"
          strokeWidth={2}
          fill="url(#fillCollected)"
        />
      </AreaChart>
    </ChartContainer>
  );
}