import { Suspense } from "react";
import { getLots, getPaymentTerms } from "@/lib/lot-queries";
import { InterestCalculator } from "@/components/calculator/interest-calculator";
import { PageHeader } from "@/components/PageHeader";
import { Skeleton } from "@/components/ui/skeleton";

async function CalculatorContent() {
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
    <div className="mx-auto max-w-6xl space-y-6 p-4 sm:p-8">
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