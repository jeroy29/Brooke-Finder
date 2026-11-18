import Link from "next/link";
import { ArrowUpRight, Calculator, Map as MapIcon, Table2 } from "lucide-react";
import { getLots } from "@/lib/lot-queries";
import { formatPeso } from "@/lib/finance";
import { LotStats } from "@/components/lots/lot-stats";

const links = [
  { href: "/map", title: "Lot map", text: "Click any lot to see who owns it and what is paid.", icon: MapIcon },
  { href: "/lots", title: "All lots", text: "Search and filter every block and lot in a table.", icon: Table2 },
  { href: "/calculator", title: "Calculator", text: "Work out down payment, interest and monthly amortization.", icon: Calculator },
];

/** Drop <DashboardOverview /> into app/(main)/dashboard/page.tsx (it is an async server component). */
export async function DashboardOverview() {
  const lots = await getLots();
  const contracts = lots.flatMap((l) => (l.contract ? [l.contract] : []));
  const total = contracts.reduce((s, c) => s + c.totalTcp, 0);
  const paid = contracts.reduce((s, c) => s + c.amountPaid, 0);
  const pct = total > 0 ? Math.min(100, (paid / total) * 100) : 0;

  return (
    <div className="space-y-6">
      <LotStats lots={lots} />

      <section className="rounded-2xl border bg-card p-6 shadow-sm">
        <div className="flex flex-wrap items-end justify-between gap-4">
          <div>
            <p className="text-sm text-muted-foreground">Collected so far</p>
            <p className="font-[family-name:var(--font-display)] text-4xl font-semibold tabular-nums">
              {formatPeso(paid)}
            </p>
          </div>
          <p className="text-sm text-muted-foreground">
            {formatPeso(Math.max(total - paid, 0))} still to collect across {contracts.length} contracts
          </p>
        </div>
        <div className="mt-4 h-2 overflow-hidden rounded-full bg-primary/10">
          <div className="h-full rounded-full bg-primary" style={{ width: `${pct}%` }} />
        </div>
      </section>

      <div className="grid gap-3 md:grid-cols-3">
        {links.map(({ href, title, text, icon: Icon }) => (
          <Link
            key={href}
            href={href}
            className="group rounded-2xl border bg-card p-5 shadow-sm transition-colors hover:border-primary/40"
          >
            <div className="flex items-center justify-between">
              <span className="flex size-10 items-center justify-center rounded-xl bg-primary/10 text-primary">
                <Icon className="size-5" />
              </span>
              <ArrowUpRight className="size-4 text-muted-foreground transition-colors group-hover:text-primary" />
            </div>
            <h2 className="mt-4 font-medium">{title}</h2>
            <p className="mt-1 text-sm text-muted-foreground">{text}</p>
          </Link>
        ))}
      </div>
    </div>
  );
}