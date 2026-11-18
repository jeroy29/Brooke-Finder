export type LotStatus = "AVAILABLE" | "RESERVED" | "SOLD" | "HOLD" | "CLOSED";

/**
 * Stored in Lot.mapShape (Json). Coordinates are in the map's own viewBox
 * (default 0 0 1500 1500, see LotMap props).
 */
export type MapShape =
  | { type: "rect"; x: number; y: number; width: number; height: number; rotate?: number }
  | { type: "polygon"; points: [number, number][] };

export type ContractDTO = {
  homeownerName: string;
  phone: string | null;
  email: string | null;
  homeAddress: string | null;
  termMonths: number;
  reservationFee: number;
  origTcp: number;
  dpAmount: number;
  dpMonthly: number;
  balanceAmount: number;
  monthlyAmort: number;
  totalTcp: number;
  amountPaid: number;
  startDate: string; // ISO
  endsOn: string; // ISO
};

export type LotDTO = {
  id: string;
  blockNo: number;
  lotNo: number;
  lotType: string; // CORNER | INNER
  sqm: number;
  pricePerSqm: number;
  fullPrice: number; // sqm x price per sqm, before interest
  status: LotStatus;
  streetName: string | null;
  mapShape: MapShape | null;
  contract: ContractDTO | null;
};

export type PaymentTermDTO = { termMonths: number; interestRate: number };