import Link from "next/link";
import {
  ArrowUpRight,
  BadgeCheck,
  Calculator,
  Hourglass,
  Map as MapIcon,
  MapPin,
  Table2,
  TrendingDown,
  TrendingUp,
  Wallet,
  type LucideIcon,
} from "lucide-react";
import { getLots, getPaymentSummary } from "@/lib/lot-queries";
import { formatPeso, formatPesoCompact } from "@/lib/finance";
import { cn } from "@/lib/utils";
import type { LotStatus, PaymentType } from "@/lib/types";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { CollectionsChart } from "./collections-chart";
import { StatusChart } from "./status-chart";

const display = "font-[family-name:var(--font-display)]";

const TYPE_META: Record<PaymentType, { label: string; bar: string }> = {
  DOWN_PAYMENT: { label: "Down payments", bar: "border-violet-500" },
  AMORTIZATION: { label: "Amortization", bar: "border-emerald-500" },
  RESERVATION: { label: "Reservations", bar: "border-amber-500" },
};

const links = [
  { href: "/map", title: "Lot map", text: "See who owns each lot", icon: MapIcon },
  { href: "/lots", title: "All lots", text: "Search and filter the table", icon: Table2 },
  { href: "/calculator", title: "Calculator", text: "Down payment and amortization", icon: Calculator },
];

function Delta({ now, prev }: { now: number; prev: number }) {
  if (prev <= 0) return null;
  const pct = ((now - prev) / prev) * 100;
  const up = pct >= 0;
  const Icon = up ? TrendingUp : TrendingDown;
  return (
    <Badge
      variant="secondary"
      className={cn(
        "gap-1 rounded-md px-1.5 py-0 text-xs",
        up ? "bg-emerald-50 text-emerald-700" : "bg-rose-50 text-rose-700",
      )}
    >
      <Icon className="size-3" />
      {Math.abs(pct) > 999 ? ">999%" : `${Math.abs(pct).toFixed(1)}%`}
    </Badge>
  );
}

function Kpi({
  label,
  value,
  sub,
  icon: Icon,
  badge,
}: {
  label: string;
  value: string | number;
  sub: string;
  icon: LucideIcon;
  badge?: React.ReactNode;
}) {
  return (
    <Card className="gap-0 py-4">
      <CardContent className="space-y-1 px-4">
        <div className="flex items-center justify-between text-sm text-muted-foreground">
          {label}
          <Icon className="size-4" />
        </div>
        <div className="flex items-center gap-2">
          <p className={cn(display, "text-2xl font-semibold tabular-nums")}>{value}</p>
          {badge}
        </div>
        <p className="truncate text-xs text-muted-foreground">{sub}</p>
      </CardContent>
    </Card>
  );
}

/** Async server component for app/(main)/dashboard/page.tsx. */
export async function DashboardOverview() {
  const [lots, pay] = await Promise.all([getLots(), getPaymentSummary()]);

  const contracts = lots.flatMap((l) => (l.contract ? [l.contract] : []));
  const total = contracts.reduce((s, c) => s + c.totalTcp, 0);
  const paid = contracts.reduce((s, c) => s + c.amountPaid, 0);
  const outstanding = Math.max(total - paid, 0);
  const pct = total > 0 ? Math.min(100, (paid / total) * 100) : 0;

  const counts: Record<LotStatus, number> = { AVAILABLE: 0, RESERVED: 0, SOLD: 0, HOLD: 0, CLOSED: 0 };
  for (const l of lots) counts[l.status]++;
  const soldShare = lots.length > 0 ? Math.round((counts.SOLD / lots.length) * 100) : 0;

  // Accounts with the most left to pay, biggest first.
  const accounts = lots
    .flatMap((l) => (l.contract ? [{ lot: l, c: l.contract }] : []))
    .map(({ lot, c }) => ({
      name: c.homeownerName,
      block: lot.blockNo,
      lotNo: lot.lotNo,
      remaining: Math.max(c.totalTcp - c.amountPaid, 0),
      pct: c.totalTcp > 0 ? Math.min(100, Math.max(0, (c.amountPaid / c.totalTcp) * 100)) : 0,
    }))
    .sort((a, b) => b.remaining - a.remaining)
    .slice(0, 6);

  return (
    <div className="space-y-4">
      {/* KPI row */}
      <div className="grid grid-cols-2 gap-4 lg:grid-cols-4">
        <Kpi
          label="Collected"
          value={formatPesoCompact(paid)}
          sub={`${contracts.length} active contracts`}
          icon={Wallet}
        />
        <Kpi
          label="Still to collect"
          value={formatPesoCompact(outstanding)}
          sub={`${pct.toFixed(0)}% of contract value paid`}
          icon={Hourglass}
        />
        <Kpi
          label="Sold lots"
          value={counts.SOLD}
          sub={`${soldShare}% of ${lots.length} lots`}
          icon={BadgeCheck}
        />
        <Kpi
          label="Available lots"
          value={counts.AVAILABLE}
          sub={`${counts.RESERVED} reserved, ${counts.HOLD} on hold`}
          icon={MapPin}
        />
      </div>

      {/* Collections + lot status */}
      <div className="grid gap-4 lg:grid-cols-3">
        <Card className="gap-3 py-4 lg:col-span-2">
          <CardHeader className="px-4">
            <CardTitle className="text-base">Collections</CardTitle>
            <CardDescription>
              Total collected so far, with payments per month for the last 12 months
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-3 px-4">
            <div className="flex flex-wrap items-end justify-between gap-x-6 gap-y-1">
              <div className="flex items-center gap-2">
                <p className={cn(display, "text-3xl font-semibold tabular-nums")}>{formatPeso(paid)}</p>
                <Delta now={pay.thisMonth} prev={pay.lastMonth} />
              </div>
              <p className="text-xs text-muted-foreground">
                {formatPeso(pay.thisMonth)} this month vs {formatPeso(pay.lastMonth)} last month
              </p>
            </div>

            <div className="h-1.5 overflow-hidden rounded-full bg-primary/10">
              <div className="h-full rounded-full bg-primary" style={{ width: `${pct}%` }} />
            </div>

            <CollectionsChart data={pay.monthly} />

            <div className="grid grid-cols-3 gap-2">
              {(Object.keys(TYPE_META) as PaymentType[]).map((t) => (
                <div key={t} className={cn("rounded-md border-b-4 bg-muted/50 px-3 py-2", TYPE_META[t].bar)}>
                  <p className="text-xs text-muted-foreground">{TYPE_META[t].label}</p>
                  <p className="text-sm font-semibold tabular-nums">{formatPesoCompact(pay.byType[t])}</p>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        <Card className="gap-3 py-4">
          <CardHeader className="px-4">
            <CardTitle className="text-base">Lot status</CardTitle>
            <CardDescription>Every lot by current status</CardDescription>
          </CardHeader>
          <CardContent className="px-4">
            <StatusChart counts={counts} />
          </CardContent>
        </Card>
      </div>

      {/* Largest balances + shortcuts */}
      <div className="grid gap-4 lg:grid-cols-3">
        <Card className="gap-3 py-4 lg:col-span-2">
          <CardHeader className="px-4">
            <CardTitle className="text-base">Largest balances</CardTitle>
            <CardDescription>Accounts with the most left to pay</CardDescription>
          </CardHeader>
          <CardContent className="divide-y px-4">
            {accounts.length === 0 && (
              <p className="py-6 text-center text-sm text-muted-foreground">No contracts yet.</p>
            )}
            {accounts.map((a) => (
              <div key={`${a.block}-${a.lotNo}`} className="py-2.5 first:pt-0 last:pb-0">
                <div className="flex items-baseline justify-between gap-3">
                  <p className="truncate text-sm font-medium">{a.name}</p>
                  <p className="text-sm font-medium tabular-nums">{formatPeso(a.remaining)}</p>
                </div>
                <div className="mt-1.5 flex items-center gap-3">
                  <div className="h-1.5 flex-1 overflow-hidden rounded-full bg-primary/10">
                    <div className="h-full rounded-full bg-primary" style={{ width: `${a.pct}%` }} />
                  </div>
                  <span className="shrink-0 text-xs text-muted-foreground">
                    Block {a.block}, Lot {a.lotNo} · {a.pct.toFixed(0)}% paid
                  </span>
                </div>
              </div>
            ))}
          </CardContent>
        </Card>

        <Card className="gap-1 py-4">
          <CardHeader className="px-4 pb-2">
            <CardTitle className="text-base">Go to</CardTitle>
          </CardHeader>
          <CardContent className="divide-y px-4">
            {links.map(({ href, title, text, icon: Icon }) => (
              <Link
                key={href}
                href={href}
                className="group flex items-center gap-3 py-3 first:pt-1 last:pb-1"
              >
                <span className="flex size-9 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary">
                  <Icon className="size-4" />
                </span>
                <span className="min-w-0 flex-1">
                  <span className="block text-sm font-medium">{title}</span>
                  <span className="block truncate text-xs text-muted-foreground">{text}</span>
                </span>
                <ArrowUpRight className="size-4 text-muted-foreground transition-colors group-hover:text-primary" />
              </Link>
            ))}
          </CardContent>
        </Card>
      </div>
    </div>
  );
}