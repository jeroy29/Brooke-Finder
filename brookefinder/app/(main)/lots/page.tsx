import { Suspense } from "react";
import { getLots } from "@/lib/lot-queries";
import { LotsTable } from "@/components/lots/lots-table";
import { PageHeader } from "@/components/PageHeader";
import { Skeleton } from "@/components/ui/skeleton";

type SearchParams = Promise<{ q?: string }>;

async function LotsContent({ searchParams }: { searchParams: SearchParams }) {
  const { q } = await searchParams;
  const lots = await getLots();

  return <LotsTable key={q ?? ""} lots={lots} initialQuery={q ?? ""} />;
}

export default function LotsPage({ searchParams }: { searchParams: SearchParams }) {
  return (
    <div className="mx-auto max-w-[90rem] space-y-6 p-4 sm:p-8">
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