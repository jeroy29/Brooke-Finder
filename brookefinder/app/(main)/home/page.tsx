import { Suspense } from "react";
import Link from "next/link";
import { redirect } from "next/navigation";
import { ArrowUpRight, Lock, Map as MapIcon } from "lucide-react";
import { requireUser } from "@/lib/auth";
import { getPublicLots } from "@/lib/lot-queries";
import { PageHeader } from "@/components/PageHeader";
import { LotStats } from "@/components/lots/lot-stats";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";

// Mga hindi naa-access ng regular user. Admins lang nakakakita.
const restricted = [
  { title: "Dashboard", text: "Collections, balances and sales totals" },
  { title: "All lots", text: "Homeowners, prices and payment progress" },
  { title: "Calculator", text: "Down payment and monthly amortization" },
];

async function HomeContent() {
  const user = await requireUser();
  if (user.role === "ADMIN") redirect("/dashboard");

  const lots = await getPublicLots();

  const availableByBlock = new Map<number, number>();
  for (const l of lots) {
    if (l.status === "AVAILABLE") availableByBlock.set(l.blockNo, (availableByBlock.get(l.blockNo) ?? 0) + 1);
  }
  const blocks = [...availableByBlock.entries()].sort((a, b) => a[0] - b[0]);

  const first = user.name?.split(" ")[0] ?? user.email.split("@")[0];

  return (
    <div className="space-y-4">
      <PageHeader
        title={`Welcome, ${first}`}
        description="Here is what your account can see in Hidden Brooke."
      />

      <LotStats lots={lots} />

      <div className="grid gap-4 lg:grid-cols-3">
        <Card className="gap-3 py-4 lg:col-span-2">
          <CardHeader className="px-4">
            <CardTitle className="text-base">You can access</CardTitle>
            <CardDescription>Open the map to check which lots are free, reserved or sold</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4 px-4">
            <Link
              href="/map"
              className="group flex items-center gap-3 rounded-xl border p-3 transition-colors hover:border-primary/40"
            >
              <span className="flex size-10 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary">
                <MapIcon className="size-5" />
              </span>
              <span className="min-w-0 flex-1">
                <span className="block text-sm font-medium">Lot map</span>
                <span className="block text-xs text-muted-foreground">
                  Every block and lot with its current status
                </span>
              </span>
              <ArrowUpRight className="size-4 text-muted-foreground transition-colors group-hover:text-primary" />
            </Link>

            <div>
              <p className="mb-2 text-sm font-medium">Available lots by block</p>
              {blocks.length === 0 ? (
                <p className="text-sm text-muted-foreground">No lots are available right now.</p>
              ) : (
                <div className="flex flex-wrap gap-2">
                  {blocks.map(([blockNo, n]) => (
                    <Badge key={blockNo} variant="outline" className="gap-1.5 rounded-md px-2.5 py-1 font-normal">
                      Block {blockNo}
                      <span className="font-semibold tabular-nums">{n}</span>
                    </Badge>
                  ))}
                </div>
              )}
            </div>
          </CardContent>
        </Card>

        <Card className="gap-3 py-4">
          <CardHeader className="px-4">
            <CardTitle className="text-base">Admin only</CardTitle>
            <CardDescription>Ask an administrator if you need access to these</CardDescription>
          </CardHeader>
          <CardContent className="divide-y px-4">
            {restricted.map((r) => (
              <div key={r.title} className="flex items-center gap-3 py-2.5 first:pt-0 last:pb-0">
                <span className="flex size-8 shrink-0 items-center justify-center rounded-lg bg-muted text-muted-foreground">
                  <Lock className="size-4" />
                </span>
                <span className="min-w-0">
                  <span className="block text-sm font-medium text-muted-foreground">{r.title}</span>
                  <span className="block truncate text-xs text-muted-foreground">{r.text}</span>
                </span>
              </div>
            ))}
          </CardContent>
        </Card>
      </div>
    </div>
  );
}

export default function HomePage() {
  return (
    <div className="mx-auto w-full max-w-[120rem] space-y-4 p-4 sm:p-5">
      <Suspense fallback={<Skeleton className="h-[28rem] rounded-xl" />}>
        <HomeContent />
      </Suspense>
    </div>
  );
}