
export const DP_RATE = 0.3;
export const DP_MONTHS = 12;
export const ANNUAL_INTEREST_RATE = 0.21; // Fixed 21% annual interest
export const MONTHLY_RATE = ANNUAL_INTEREST_RATE / 12; // 1.75% monthly
export const PAYMENT_STEP = 5; // Round monthly payments to nearest PHP 5

const round2 = (n: number) =>
  Math.round((n + Number.EPSILON) * 100) / 100;

function loanPayment(
  principal: number,
  monthlyRate: number,
  months: number
): number {
  if (principal <= 0) return 0;
  if (monthlyRate === 0) return principal / months;

  return (
    (principal * monthlyRate) /
    (1 - Math.pow(1 + monthlyRate, -months))
  );
}

export type InstallmentInput = {
  tcp: number;
  termMonths: number;
  interestRate: number; // Retained for compatibility; fixed 21% is applied
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

// ==========================================
// INSTALLMENT COMPUTATION
// ==========================================

export function computeInstallment(
  i: InstallmentInput
): InstallmentResult {
  if (!Number.isInteger(i.termMonths) || i.termMonths <= 0) {
    throw new Error("termMonths must be a positive whole number");
  }

  if (i.tcp < 0 || i.reservationFee < 0) {
    throw new Error("TCP and reservation fee cannot be negative");
  }

  if (i.reservationFee > i.tcp) {
    throw new Error("Reservation fee cannot exceed TCP");
  }

  // 1. Deduct reservation fee from original TCP
  const adjustedTcp = round2(i.tcp - i.reservationFee);

  // 2. Calculate 30% downpayment from adjusted TCP
  const dpAmount = round2(adjustedTcp * DP_RATE);

  // 3. Divide downpayment into 12 monthly payments
  const dpMonthly = round2(dpAmount / DP_MONTHS);

  // 4. Calculate remaining 70% balance
  const balanceAmount = round2(adjustedTcp - dpAmount);

  // 5. Apply fixed 21% annual interest (1.75% monthly)
  const interestRate = MONTHLY_RATE;

  const monthlyAmort =
    Math.round(
      loanPayment(
        balanceAmount,
        interestRate,
        i.termMonths
      ) / PAYMENT_STEP
    ) * PAYMENT_STEP;

  // 6. Calculate total amortization with interest
  const balanceWithInterest = round2(
    monthlyAmort * i.termMonths
  );

  // 7. Calculate total interest
  const interestAmount = round2(
    balanceWithInterest - balanceAmount
  );

  // 8. Calculate total payment including reservation fee
  const totalTcp = round2(
    i.reservationFee +
    dpAmount +
    balanceWithInterest
  );

  return {
    tcp: i.tcp,
    dpAmount,
    reservationFee: i.reservationFee,
    dpMonthly,
    balanceAmount,
    interestRate,
    interestAmount,
    balanceWithInterest,
    termMonths: i.termMonths,
    monthlyAmort,
    totalTcp,
  };
}

// ==========================================
// PAYMENT SCHEDULE
// ==========================================

export type ScheduleRow = {
  n: number;
  phase: "Down payment" | "Amortization";
  amount: number;
  remaining: number;
};

export function buildSchedule(
  r: InstallmentResult
): ScheduleRow[] {
  const rows: ScheduleRow[] = [];

  // Reservation fee has already been paid upfront.
  // Remaining amount includes downpayment and amortization.
  let remaining = round2(
    r.dpAmount + r.balanceWithInterest
  );

  let n = 1;

  // Down payment schedule (12 months)
  if (r.dpMonthly > 0) {
    for (let i = 0; i < DP_MONTHS; i++, n++) {
      const amount =
        i === DP_MONTHS - 1
          ? round2(r.dpAmount - r.dpMonthly * (DP_MONTHS - 1))
          : r.dpMonthly;

      remaining = Math.max(
        round2(remaining - amount),
        0
      );

      rows.push({
        n,
        phase: "Down payment",
        amount,
        remaining,
      });
    }
  }

  // Monthly amortization schedule
  for (let i = 0; i < r.termMonths; i++, n++) {
    const amount =
      i === r.termMonths - 1
        ? round2(
            r.balanceWithInterest -
            r.monthlyAmort * (r.termMonths - 1)
          )
        : r.monthlyAmort;

    remaining = Math.max(
      round2(remaining - amount),
      0
    );

    rows.push({
      n,
      phase: "Amortization",
      amount,
      remaining,
    });
  }

  return rows;
}

// ==========================================
// DATE UTILITIES
// ==========================================

// Adds whole months without skipping a month.
// Example: January 31 + 1 month = February 28.
export function addMonths(
  date: Date,
  months: number
): Date {
  const d = new Date(date);
  const day = d.getDate();

  d.setDate(1);
  d.setMonth(d.getMonth() + months);

  const lastDay = new Date(
    d.getFullYear(),
    d.getMonth() + 1,
    0
  ).getDate();

  d.setDate(Math.min(day, lastDay));

  return d;
}

// ==========================================
// CURRENCY FORMATTERS
// ==========================================

export function formatPeso(n: number): string {
  return new Intl.NumberFormat("en-PH", {
    style: "currency",
    currency: "PHP",
    minimumFractionDigits: 2,
  }).format(n);
}

export function formatMonthYear(iso: string): string {
  return new Date(iso).toLocaleDateString("en-PH", {
    month: "long",
    year: "numeric",
  });
}

export function formatPesoCompact(n: number): string {
  return new Intl.NumberFormat("en-PH", {
    style: "currency",
    currency: "PHP",
    notation: "compact",
    maximumFractionDigits: 1,
  }).format(n);
}
