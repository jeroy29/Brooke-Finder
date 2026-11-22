import fs from "node:fs/promises";
import path from "node:path";
import { Suspense } from "react";
import { requireUser } from "@/lib/auth";
import { getLots, getPublicLots } from "@/lib/lot-queries";
import { LotMap } from "@/components/map/lot-map";
import { LotStats } from "@/components/lots/lot-stats";
import { PageHeader } from "@/components/PageHeader";
import { Skeleton } from "@/components/ui/skeleton";
import type { PublicLotDTO } from "@/lib/types";

async function MapContent() {
  const user = await requireUser();
  const isAdmin = user.role === "ADMIN";
  // Admins get the full data (homeowners, prices, payments). Everyone else gets the safe version.
  const lots: PublicLotDTO[] = isAdmin ? await getLots() : await getPublicLots();
  const svg = await fs.readFile(
    path.join(process.cwd(), "public", "map.svg"),
    "utf8",
  );

  return (
    <div className="space-y-6">
      <LotStats lots={lots} />
      {lots.length === 0 ? (
        <div className="rounded-2xl border border-dashed p-10 text-center text-sm text-muted-foreground">
          No lots yet. Add blocks and lots in the database and they will appear here.
        </div>
      ) : (
        <LotMap lots={lots} svg={svg} canViewDetails={isAdmin} />
      )}
    </div>
  );
}

export default function MapPage() {
  return (
    <div className="mx-auto w-full max-w-[120rem] space-y-4 p-4 sm:p-5">
      <PageHeader
        title="Lot map"
        description="Select a lot to see its homeowner, price and payment progress."
      />
      <Suspense fallback={<Skeleton className="h-[32rem] rounded-2xl" />}>
        <MapContent />
      </Suspense>
    </div>
  );
}