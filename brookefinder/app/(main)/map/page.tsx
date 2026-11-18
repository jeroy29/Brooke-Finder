import { Suspense } from "react";
import { getLots } from "@/lib/lot-queries";
import { LotMap } from "@/components/map/lot-map";
import { LotStats } from "@/components/lots/lot-stats";
import { PageHeader } from "@/components/PageHeader";
import { Skeleton } from "@/components/ui/skeleton";

async function MapContent() {
  const lots = await getLots();

  return (
    <div className="space-y-6">
      <LotStats lots={lots} />
      {lots.length === 0 ? (
        <div className="rounded-2xl border border-dashed p-10 text-center text-sm text-muted-foreground">
          No lots yet. Add blocks and lots in the database and they will appear here.
        </div>
      ) : (
        <LotMap lots={lots} />
      )}
    </div>
  );
}

export default function MapPage() {
  return (
    <div className="mx-auto max-w-6xl space-y-6 p-4 sm:p-8">
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