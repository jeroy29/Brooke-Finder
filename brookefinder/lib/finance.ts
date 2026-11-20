/**
 * Hidden Brooke computation (from the sales sheet), e.g. TCP 750,000:
 *  1. Down payment = TCP x 30%  -> 225,000, payable in 12 months, no interest
 *  2. Capital balance = TCP - down payment - reservation fee
 *     -> 750,000 - 225,000 - 10,000 = 515,000
 *  3. Monthly amortization = (capital balance + 12% interest) / term months
 *     (12, 24, 36 or 48 depending on the term chosen)
 *
 * Still assumed (not on the sheet): amortization starts after the 12 down
 * payment months, and PaymentTerm.interestRate holds the total add-on rate
 * (0.12 = 12%), so store 0.12 for every term if the rate is flat.
 */
export const DP_RATE = 0.3;
export const DP_MONTHS = 12;

const round2 = (n: number) => Math.round((n + Number.EPSILON) * 100) / 100;

export type InstallmentInput = {
  tcp: number; // lot price before interest
  termMonths: number;
  interestRate: number; // e.g. 0.12
  reservationFee: number;
};

export type InstallmentResult = {
  tcp: number;
  dpAmount: number;
  reservationFee: number;
  dpMonthly: number;
  balanceAmount: number;
  interestRate: number;
  interestAmount: number;
  balanceWithInterest: number;
  termMonths: number;
  monthlyAmort: number;
  totalTcp: number;
};

export function computeInstallment(i: InstallmentInput): InstallmentResult {
  const dpAmount = round2(i.tcp * DP_RATE);
  const dpMonthly = round2(dpAmount / DP_MONTHS);
  // Capital balance: reservation is deducted from the balance, not from the down payment.
  const balanceAmount = Math.max(round2(i.tcp - dpAmount - i.reservationFee), 0);
  const interestAmount = round2(balanceAmount * i.interestRate);
  const balanceWithInterest = round2(balanceAmount + interestAmount);
  const monthlyAmort = round2(balanceWithInterest / i.termMonths);
  const totalTcp = round2(dpAmount + i.reservationFee + balanceWithInterest);
  return {
    tcp: i.tcp,
    dpAmount,
    reservationFee: i.reservationFee,
    dpMonthly,
    balanceAmount,
    interestRate: i.interestRate,
    interestAmount,
    balanceWithInterest,
    termMonths: i.termMonths,
    monthlyAmort,
    totalTcp,
  };
}

export type ScheduleRow = {
  n: number;
  phase: "Down payment" | "Amortization";
  amount: number;
  remaining: number;
};

export function buildSchedule(r: InstallmentResult): ScheduleRow[] {
  const rows: ScheduleRow[] = [];
  let remaining = round2(r.totalTcp - r.reservationFee);
  let n = 1;
  if (r.dpMonthly > 0) {
    for (let i = 0; i < DP_MONTHS; i++, n++) {
      remaining = Math.max(round2(remaining - r.dpMonthly), 0);
      rows.push({ n, phase: "Down payment", amount: r.dpMonthly, remaining });
    }
  }
  for (let i = 0; i < r.termMonths; i++, n++) {
    remaining = Math.max(round2(remaining - r.monthlyAmort), 0);
    rows.push({ n, phase: "Amortization", amount: r.monthlyAmort, remaining });
  }
  return rows;
}

export function addMonths(date: Date, months: number): Date {
  const d = new Date(date);
  d.setMonth(d.getMonth() + months);
  return d;
}

export function formatPeso(n: number): string {
  return new Intl.NumberFormat("en-PH", {
    style: "currency",
    currency: "PHP",
    minimumFractionDigits: 2,
  }).format(n);
}

export function formatMonthYear(iso: string): string {
  return new Date(iso).toLocaleDateString("en-PH", { month: "long", year: "numeric" });
}

export function formatPesoCompact(n: number): string {
  return new Intl.NumberFormat("en-PH", {
    style: "currency",
    currency: "PHP",
    notation: "compact",
    maximumFractionDigits: 1,
  }).format(n);
}
 