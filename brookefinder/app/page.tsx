import Link from "next/link";
import { Button } from "@/components/ui/button";
import { STATUS_META } from "@/components/lots/status-badge";
import type { LotStatus } from "@/lib/types";

// A small sample of lot tiles, the same look as the real map.
const sample: LotStatus[] = [
  "SOLD", "SOLD", "AVAILABLE", "SOLD", "RESERVED",
  "SOLD", "HOLD", "SOLD", "AVAILABLE", "SOLD",
  "AVAILABLE", "SOLD", "SOLD", "RESERVED", "SOLD",
];

export default function Home() {
  return (
    <main className="mx-auto flex min-h-[calc(100svh-4.5rem)] w-full max-w-5xl flex-col justify-center gap-12 px-6 py-16 lg:flex-row lg:items-center lg:justify-between">
      <div className="max-w-xl">
        <h1 className="font-[family-name:var(--font-display)] text-5xl font-semibold tracking-tight sm:text-6xl">
          Every lot in Hidden Brooke, in one place.
        </h1>
        <p className="mt-5 text-lg text-muted-foreground">
          See which lots are open, who owns the rest, and what each homeowner still owes, all from a single map.
        </p>
        <div className="mt-8 flex flex-wrap gap-3">
          <Button asChild size="lg" className="rounded-xl">
            <Link href="/dashboard">Open dashboard</Link>
          </Button>
          <Button asChild size="lg" variant="outline" className="rounded-xl">
            <Link href="/map">View lot map</Link>
          </Button>
        </div>
      </div>

      <div aria-hidden className="grid w-full max-w-sm grid-cols-5 gap-2.5 rounded-3xl border bg-card p-5 shadow-sm">
        {sample.map((s, i) => (
          <div
            key={i}
            className={`flex aspect-[4/3] items-center justify-center rounded-lg border text-sm font-semibold text-slate-700 ${STATUS_META[s].badge}`}
          >
            {i + 1}
          </div>
        ))}
      </div>
    </main>
  );
}