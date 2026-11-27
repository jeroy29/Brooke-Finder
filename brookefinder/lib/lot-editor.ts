
import type { LotStatus, PaymentType } from "@/lib/types";

export type ActionResult = { ok: true } | { ok: false; error: string };

export type LotEditData = {
  lot: {
    id: string;
    blockNo: number;
    lotNo: number;
    sqm: number;
    status: LotStatus;
    lotTypeId: number;
  };
  lotTypes: { id: number; name: string; pricePerSqm: number }[];
  terms: { termMonths: number; interestRate: number }[];
  sale: null | {
    contractId: string;
    homeowner: {
      fullName: string;
      phone: string;
      email: string;
    };
    termMonths: number;
    reservationFee: number;
    startDate: string;
    totalTcp: number;
  };
  payments: {
    id: string;
    amount: number;
    paidOn: string;
    paymentType: PaymentType;
  }[];
};

export type SaveLotInput = {
  lotId: string;
  status: LotStatus;
  sqm: number;
  lotTypeId: number;
  /** null when the lot has no homeowner (status Available, Hold or Closed). */
  sale: null | {
    fullName: string;
    phone: string;
    email: string;
    termMonths: number;
    reservationFee: number;
    startDate: string;
  };
};

const round2 = (n: number) => Math.round(n * 100) / 100;

/**
 * Contract figures. Compare this with your Calculator page and copy its
 * formula here if anything differs, so both pages always agree.
 */
export function computeContract(a: {
  sqm: number;
  pricePerSqm: number;
  interestRate: number;
  termMonths: number;
  reservationFee: number;
}) {
  const rate = a.interestRate > 1 ? a.interestRate / 100 : a.interestRate;
  const origTcp = round2(a.sqm * a.pricePerSqm);
  const dpAmount = round2(origTcp * 0.3);
  const dpMonthly = round2(dpAmount / 12);
  const balanceAmount = round2(
    Math.max(origTcp - dpAmount - a.reservationFee, 0),
  );
  const interest = round2(balanceAmount * rate);
  const monthlyAmort = round2((balanceAmount + interest) / a.termMonths);
  const totalTcp = round2(origTcp + interest);

  return {
    origTcp,
    dpAmount,
    dpMonthly,
    balanceAmount,
    monthlyAmort,
    totalTcp,
  };
}
