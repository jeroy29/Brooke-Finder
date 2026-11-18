import { Suspense } from "react";
import { redirect } from "next/navigation";
import { checkUser } from "@/actions/check-user";
import { PageHeader } from "@/components/PageHeader";
import { DashboardOverview } from "@/components/dashboard/overview";
import { Skeleton } from "@/components/ui/skeleton";

async function DashboardContent() {
  const user = await checkUser();
  if (!user) redirect("/sign-in");

  return <DashboardOverview />;
}

function DashboardSkeleton() {
  return (
    <div className="space-y-6">
      <div className="grid grid-cols-2 gap-3 lg:grid-cols-4">
        {Array.from({ length: 4 }).map((_, i) => (
          <Skeleton key={i} className="h-24 rounded-2xl" />
        ))}
      </div>
      <Skeleton className="h-32 rounded-2xl" />
      <div className="grid gap-3 md:grid-cols-3">
        {Array.from({ length: 3 }).map((_, i) => (
          <Skeleton key={i} className="h-36 rounded-2xl" />
        ))}
      </div>
    </div>
  );
}

export default function DashboardPage() {
  return (
    <div className="mx-auto max-w-6xl space-y-6 p-4 sm:p-8">
      <PageHeader title="Dashboard" description="Where Hidden Brooke stands today." />
      <Suspense fallback={<DashboardSkeleton />}>
        <DashboardContent />
      </Suspense>
    </div>
  );
}