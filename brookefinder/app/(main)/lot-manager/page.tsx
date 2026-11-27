import { Suspense } from "react";
import { requireAdmin } from "@/lib/auth";
import { getStatusLots } from "@/lib/lot-queries";
import { updateLotStatuses } from "@/actions/update-lot-status";
import { PageHeader } from "@/components/PageHeader";
import { LotStatusManager } from "./lot-status-manager";
import { Skeleton } from "@/components/ui/skeleton";

async function ManagerContent() {
  await requireAdmin();
  const lots = await getStatusLots();
  return <LotStatusManager lots={lots} onSave={updateLotStatuses} />;
}

export default function LotManagerPage() {
  return (
    <div className="mx-auto w-full max-w-[120rem] space-y-4 p-4 sm:p-5">
      <PageHeader
        title="Lot manager"
        description="Change the status of one lot, or select several and update them together."
      />
      <Suspense fallback={<Skeleton className="h-[32rem] rounded-xl" />}>
        <ManagerContent />
      </Suspense>
    </div>
  );
}