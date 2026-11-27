
"use client";

import { useState } from "react";
import { toast } from "sonner";
import type { LotEditData } from "@/lib/lot-editor";
import { saveLot } from "@/actions/lot-editor";
import { Button } from "@/components/ui/button";
import { SheetFooter } from "@/components/ui/sheet";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { LotTab } from "./lot-tab";
import { SaleTab } from "./sale-tab";
import { PaymentsTab } from "./payments-tab";
import { NEEDS_SALE, runAction, today } from "./shared";
import type { LotForm, SaleForm } from "./types";

/** Holds the form state for all three tabs and saves them together. */
export function EditorBody({
  data,
  onSaved,
  onRefresh,
}: {
  data: LotEditData;
  onSaved: () => void;
  onRefresh: () => Promise<void>;
}) {
  const { lot, sale } = data;

  const [lotForm, setLotForm] = useState<LotForm>({
    status: lot.status,
    sqm: String(lot.sqm),
    lotTypeId: String(lot.lotTypeId),
  });

  const [saleForm, setSaleForm] = useState<SaleForm>({
    fullName: sale?.homeowner.fullName ?? "",
    phone: sale?.homeowner.phone ?? "",
    email: sale?.homeowner.email ?? "",
    termMonths: String(sale?.termMonths ?? data.terms[0]?.termMonths ?? 12),
    reservationFee: String(sale?.reservationFee ?? 0),
    startDate: sale?.startDate ?? today(),
  });

  const [saving, setSaving] = useState(false);

  const patchLot = (p: Partial<LotForm>) => setLotForm((f) => ({ ...f, ...p }));
  const patchSale = (p: Partial<SaleForm>) => setSaleForm((f) => ({ ...f, ...p }));
  const needsSale = NEEDS_SALE.includes(lotForm.status);

  async function save() {
    if (!(Number(lotForm.sqm) > 0)) {
      toast.error("Enter a lot size greater than zero.");
      return;
    }

    if (needsSale && !saleForm.fullName.trim()) {
      toast.error("Enter the homeowner's full name (Homeowner & price tab).");
      return;
    }

    setSaving(true);

    const res = await runAction(
      () =>
        saveLot({
          lotId: lot.id,
          status: lotForm.status,
          sqm: Number(lotForm.sqm),
          lotTypeId: Number(lotForm.lotTypeId),
          sale: needsSale
            ? {
                fullName: saleForm.fullName,
                phone: saleForm.phone,
                email: saleForm.email,
                termMonths: Number(saleForm.termMonths),
                reservationFee: Number(saleForm.reservationFee || 0),
                startDate: saleForm.startDate,
              }
            : null,
        }),
      "Could not save the lot. Please try again.",
    );

    setSaving(false);

    if (!res) return;

    toast.success("Lot saved");
    onSaved();
  }

  return (
    <div className="flex min-h-0 flex-1 flex-col">
      <Tabs defaultValue="lot" className="flex min-h-0 flex-1 flex-col">
        <TabsList className="mx-auto mt-3 grid h-10 w-full max-w-md grid-cols-3">
          <TabsTrigger value="lot" className="px-3 text-xs whitespace-nowrap sm:text-sm">
            Lot
          </TabsTrigger>

          <TabsTrigger value="sale" className="px-3 text-xs whitespace-nowrap sm:text-sm">
            Owner & Price
          </TabsTrigger>

          <TabsTrigger value="payments" className="px-3 text-xs whitespace-nowrap sm:text-sm">
            Payments
          </TabsTrigger>
        </TabsList>

        <div className="min-h-0 flex-1 overflow-y-auto p-4">
          <TabsContent value="lot" className="mt-0">
            <LotTab
              data={data}
              form={lotForm}
              onChange={patchLot}
              onReleased={onSaved}
            />
          </TabsContent>

          <TabsContent value="sale" className="mt-0">
            <SaleTab
              data={data}
              lotForm={lotForm}
              form={saleForm}
              onChange={patchSale}
            />
          </TabsContent>

          <TabsContent value="payments" className="mt-0">
            <PaymentsTab data={data} onRefresh={onRefresh} />
          </TabsContent>
        </div>
      </Tabs>

      <SheetFooter className="flex-row justify-end gap-2 border-t p-4">
        <Button disabled={saving} onClick={save}>
          {saving ? "Saving..." : "Save lot"}
        </Button>
      </SheetFooter>
    </div>
  );
}
