import { prisma } from "@/lib/prisma";
import { requireAdmin, requireUser } from "@/lib/auth";
import { DP_MONTHS, addMonths } from "@/lib/finance";
import type {
  LotDTO,
  LotStatus,
  MapShape,
  PaymentSummaryDTO,
  PaymentTermDTO,
  PaymentType,
  PublicLotDTO,
} from "@/lib/types";

function parseShape(v: unknown): MapShape | null {
  if (!v || typeof v !== "object") return null;
  const s = v as Record<string, unknown>;
  if (s.type === "rect" && ["x", "y", "width", "height"].every((k) => typeof s[k] === "number")) {
    return s as unknown as MapShape;
  }
  if (s.type === "polygon" && Array.isArray(s.points) && s.points.length >= 3) {
    return s as unknown as MapShape;
  }
  return null;
}

/** ADMIN ONLY. Every lot with its block, type, homeowner and contract. Decimals become plain numbers. */
export async function getLots(): Promise<LotDTO[]> {
  await requireAdmin();

  const lots = await prisma.lot.findMany({
    include: {
      block: true,
      lotType: true,
      contract: {
        include: {
          homeowner: true,
          payments: { select: { amount: true } },
        },
      },
    },
    orderBy: [{ block: { blockNo: "asc" } }, { lotNo: "asc" }],
  });

  return lots.map((l) => {
    const sqm = l.sqm.toNumber();
    const pricePerSqm = l.lotType.pricePerSqm.toNumber();
    const c = l.contract;
    return {
      id: l.id,
      blockNo: l.block.blockNo,
      lotNo: l.lotNo,
      lotType: l.lotType.name,
      sqm,
      pricePerSqm,
      fullPrice: Math.round(sqm * pricePerSqm * 100) / 100,
      status: l.status as LotStatus,
      contract: c
        ? {
            homeownerName: c.homeowner.fullName,
            phone: c.homeowner.phone,
            email: c.homeowner.email,
            termMonths: c.termMonths,
            reservationFee: c.reservationFee.toNumber(),
            origTcp: c.origTcp.toNumber(),
            dpAmount: c.dpAmount.toNumber(),
            dpMonthly: c.dpMonthly.toNumber(),
            balanceAmount: c.balanceAmount.toNumber(),
            monthlyAmort: c.monthlyAmort.toNumber(),
            totalTcp: c.totalTcp.toNumber(),
            amountPaid: c.payments.reduce((sum, p) => sum + p.amount.toNumber(), 0),
            startDate: c.startDate.toISOString(),
            endsOn: addMonths(c.startDate, DP_MONTHS + c.termMonths).toISOString(),
          }
        : null,
    };
  });
}

/** Any signed-in user. No prices, homeowners, contracts or payments are ever loaded. */
export async function getPublicLots(): Promise<PublicLotDTO[]> {
  await requireUser();

  const lots = await prisma.lot.findMany({
    select: {
      id: true,
      lotNo: true,
      sqm: true,
      status: true,
      block: { select: { blockNo: true } },
      lotType: { select: { name: true } },
    },
    orderBy: [{ block: { blockNo: "asc" } }, { lotNo: "asc" }],
  });

  return lots.map((l) => ({
    id: l.id,
    blockNo: l.block.blockNo,
    lotNo: l.lotNo,
    lotType: l.lotType.name,
    sqm: l.sqm.toNumber(),
    status: l.status as LotStatus,
  }));
}

/** ADMIN ONLY. */
export async function getPaymentTerms(): Promise<PaymentTermDTO[]> {
  await requireAdmin();

  const terms = await prisma.paymentTerm.findMany({ orderBy: { termMonths: "asc" } });
  return terms.map((t) => ({ termMonths: t.termMonths, interestRate: t.interestRate.toNumber() }));
}

/** ADMIN ONLY. Totals and recent payments for the dashboard. */
export async function getPaymentSummary(): Promise<PaymentSummaryDTO> {
  await requireAdmin();

  const now = new Date();
  // paidOn is a Postgres DATE, so bucket by UTC month to avoid timezone shifts.
  const start = new Date(Date.UTC(now.getUTCFullYear(), now.getUTCMonth() - 11, 1));

  const [rows, grouped, recent] = await Promise.all([
    prisma.payment.findMany({
      where: { paidOn: { gte: start } },
      select: { amount: true, paidOn: true },
    }),
    prisma.payment.groupBy({ by: ["paymentType"], _sum: { amount: true } }),
    prisma.payment.findMany({
      orderBy: [{ paidOn: "desc" }, { createdAt: "desc" }],
      take: 6,
      include: { contract: { include: { homeowner: true, lot: { include: { block: true } } } } },
    }),
  ]);

  const monthly = Array.from({ length: 12 }, (_, i) => {
    const d = new Date(Date.UTC(start.getUTCFullYear(), start.getUTCMonth() + i, 1));
    return {
      month: d.toISOString().slice(0, 7),
      label: d.toLocaleDateString("en-PH", { month: "short", timeZone: "UTC" }),
      amount: 0,
    };
  });
  const byMonth = new Map(monthly.map((m) => [m.month, m]));
  for (const r of rows) {
    const bucket = byMonth.get(r.paidOn.toISOString().slice(0, 7));
    if (bucket) bucket.amount += r.amount.toNumber();
  }

  const byType: Record<PaymentType, number> = { RESERVATION: 0, DOWN_PAYMENT: 0, AMORTIZATION: 0 };
  for (const g of grouped) byType[g.paymentType as PaymentType] = g._sum.amount?.toNumber() ?? 0;

  return {
    monthly,
    byType,
    thisMonth: monthly[11].amount,
    lastMonth: monthly[10].amount,
    recent: recent.map((p) => ({
      id: p.id,
      amount: p.amount.toNumber(),
      paidOn: p.paidOn.toISOString(),
      paymentType: p.paymentType as PaymentType,
      homeownerName: p.contract.homeowner.fullName,
      blockNo: p.contract.lot.block.blockNo,
      lotNo: p.contract.lot.lotNo,
    })),
  };
}


export async function getStatusLots() {
  await requireAdmin();

  const lots = await prisma.lot.findMany({
    select: {
      id: true,
      block: {
        select: {
          blockNo: true,
        },
      },
      lotNo: true,
      sqm: true,
      status: true,
    },
    orderBy: [
      { block: { blockNo: "asc" } },
      { lotNo: "asc" },
    ],
  });

  return lots.map((l) => ({
    id: String(l.id),
    blockNo: l.block.blockNo,
    lotNo: l.lotNo,
    sqm: Number(l.sqm),
    status: l.status,
  }));
}
