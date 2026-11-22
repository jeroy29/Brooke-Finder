export const DP_RATE = 0.3;
export const DP_MONTHS = 12;
export const MONTHLY_RATE = 0.0175; // default; the real value comes from PaymentTerm.interestRate
export const PAYMENT_STEP = 5; // monthly payments are rounded to the nearest PHP 5

const round2 = (n: number) => Math.round((n + Number.EPSILON) * 100) / 100;

function loanPayment(principal: number, monthlyRate: number, months: number): number {
  if (principal <= 0) return 0;
  if (monthlyRate === 0) return principal / months;
  return (principal * monthlyRate) / (1 - Math.pow(1 + monthlyRate, -months));
}

export type InstallmentInput = {
  tcp: number; // lot price before interest
  termMonths: number;
  interestRate: number; // MONTHLY rate, e.g. 0.0175
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
  if (!Number.isInteger(i.termMonths) || i.termMonths <= 0) {
    throw new Error("termMonths must be a positive whole number");
  }
  const dpAmount = round2(i.tcp * DP_RATE);
  const dpMonthly = round2(dpAmount / DP_MONTHS);
  // Capital balance: reservation is deducted from the balance, not from the down payment.
  const balanceAmount = Math.max(round2(i.tcp - dpAmount - i.reservationFee), 0);
  const monthlyAmort =
    Math.round(loanPayment(balanceAmount, i.interestRate, i.termMonths) / PAYMENT_STEP) * PAYMENT_STEP;
  const balanceWithInterest = round2(monthlyAmort * i.termMonths);
  const interestAmount = round2(balanceWithInterest - balanceAmount);
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

// Adds whole months without skipping a month (Jan 31 + 1 month = Feb 28, not Mar 3).
export function addMonths(date: Date, months: number): Date {
  const d = new Date(date);
  const day = d.getDate();
  d.setDate(1);
  d.setMonth(d.getMonth() + months);
  const lastDay = new Date(d.getFullYear(), d.getMonth() + 1, 0).getDate();
  d.setDate(Math.min(day, lastDay));
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