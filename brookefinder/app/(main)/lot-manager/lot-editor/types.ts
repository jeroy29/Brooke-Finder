import type { LotStatus } from "@/lib/types";

/** Fields on the "Lot" tab. */
export type LotForm = {
  status: LotStatus;
  sqm: string;
  lotTypeId: string;
};

/** Fields on the "Homeowner & price" tab. */
export type SaleForm = {
  fullName: string;
  phone: string;
  email: string;
  termMonths: string;
  reservationFee: string;
  startDate: string;
};