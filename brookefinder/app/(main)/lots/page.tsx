import { Suspense } from "react";
import { requireAdmin } from "@/lib/auth";
import { getLots } from "@/lib/lot-queries";
import { LotsTable } from "@/components/lots/lots-table";
import { PageHeader } from "@/components/PageHeader";
import { Skeleton } from "@/components/ui/skeleton";

type SearchParams = Promise<{ q?: string }>;

async function LotsContent({ searchParams }: { searchParams: SearchParams }) {
  await requireAdmin();

  const { q } = await searchParams;
  const lots = await getLots();

  return <LotsTable key={q ?? ""} lots={lots} initialQuery={q ?? ""} />;
}

export default function LotsPage({ searchParams }: { searchParams: SearchParams }) {
  return (
    <div className="mx-auto w-full max-w-[120rem] space-y-4 p-4 sm:p-5">
      <PageHeader
        title="All blocks and lots"
        description="Every lot with its homeowner and payment progress. Select a row for full details."
      />
      <Suspense fallback={<Skeleton className="h-[32rem] rounded-2xl" />}>
        <LotsContent searchParams={searchParams} />
      </Suspense>
    </div>
  );
}