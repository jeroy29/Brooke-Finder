import { Suspense } from "react";
import { requireAdmin } from "@/lib/auth";
import { PageHeader } from "@/components/PageHeader";
import { DashboardOverview } from "@/components/dashboard/overview";
import { Skeleton } from "@/components/ui/skeleton";

async function DashboardContent() {
  await requireAdmin();

  return <DashboardOverview />;
}

function DashboardSkeleton() {
  return (
    <div className="space-y-4">
      <div className="grid grid-cols-2 gap-4 lg:grid-cols-4">
        {Array.from({ length: 4 }).map((_, i) => (
          <Skeleton key={i} className="h-[5.5rem] rounded-xl" />
        ))}
      </div>
      <div className="grid gap-4 lg:grid-cols-3">
        <Skeleton className="h-[26rem] rounded-xl lg:col-span-2" />
        <Skeleton className="h-[26rem] rounded-xl" />
      </div>
      <div className="grid gap-4 lg:grid-cols-3">
        <Skeleton className="h-64 rounded-xl lg:col-span-2" />
        <Skeleton className="h-64 rounded-xl" />
      </div>
    </div>
  );
}

export default function DashboardPage() {
  return (
    <div className="mx-auto w-full max-w-[120rem] space-y-4 p-4 sm:p-5">
      <PageHeader title="Dashboard" description="Where Hidden Brooke stands today." />
      <Suspense fallback={<DashboardSkeleton />}>
        <DashboardContent />
      </Suspense>
    </div>
  );
}