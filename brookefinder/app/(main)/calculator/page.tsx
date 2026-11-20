import { Suspense } from "react";
import { requireAdmin } from "@/lib/auth";
import { getLots, getPaymentTerms } from "@/lib/lot-queries";
import { InterestCalculator } from "@/components/calculator/interest-calculator";
import { PageHeader } from "@/components/PageHeader";
import { Skeleton } from "@/components/ui/skeleton";

async function CalculatorContent() {
  await requireAdmin();

  const [lots, terms] = await Promise.all([getLots(), getPaymentTerms()]);

  const options = lots.map(({ id, blockNo, lotNo, lotType, sqm, fullPrice, status }) => ({
    id,
    blockNo,
    lotNo,
    lotType,
    sqm,
    fullPrice,
    status,
  }));

  return <InterestCalculator lots={options} terms={terms} />;
}

export default function CalculatorPage() {
  return (
    <div className="mx-auto w-full max-w-[120rem] space-y-4 p-4 sm:p-5">
      <PageHeader
        title="Interest calculator"
        description="Work out the down payment, interest and monthly amortization for a lot."
      />
      <Suspense fallback={<Skeleton className="h-[28rem] rounded-2xl" />}>
        <CalculatorContent />
      </Suspense>
    </div>
  );
}