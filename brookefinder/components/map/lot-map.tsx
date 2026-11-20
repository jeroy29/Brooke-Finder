"use client";

import { useMemo, useState } from "react";
import { cn } from "@/lib/utils";
import type { LotDTO, LotStatus, MapShape, PublicLotDTO } from "@/lib/types";
import { STATUS_META, STATUS_ORDER } from "@/components/lots/status-badge";
import { LotDetailsDialog } from "./lot-details-dialog";

/* ---------- layout ---------- */

const PER_ROW = 5;
const COLS = 3;
const CELL_W = 84;
const CELL_H = 60;
const CELL_GAP = 8;
const PAD = 16;
const HEADER = 38;
const BLOCK_GAP = 28;
const MARGIN = 20;
const BLOCK_W = PAD * 2 + PER_ROW * CELL_W + (PER_ROW - 1) * CELL_GAP;

type BlockBox = { blockNo: number; x: number; y: number; w: number; h: number };
type Layout = {
  width: number;
  height: number;
  blocks: BlockBox[];
  shapes: Map<string, MapShape>;
};

/** Fallback: blocks as panels in a grid, lots as tiles inside each panel. */
function autoLayout(lots: PublicLotDTO[]): Layout {
  const byBlock = new Map<number, PublicLotDTO[]>();
  for (const l of lots) {
    const arr = byBlock.get(l.blockNo) ?? [];
    arr.push(l);
    byBlock.set(l.blockNo, arr);
  }
  const blockNos = [...byBlock.keys()].sort((a, b) => a - b);
  const heights = blockNos.map((n) => {
    const rows = Math.ceil(byBlock.get(n)!.length / PER_ROW);
    return HEADER + rows * CELL_H + (rows - 1) * CELL_GAP + PAD;
  });

  const rowCount = Math.ceil(blockNos.length / COLS);
  const rowY: number[] = [];
  let y = MARGIN;
  for (let r = 0; r < rowCount; r++) {
    rowY.push(y);
    y += Math.max(...heights.slice(r * COLS, r * COLS + COLS)) + BLOCK_GAP;
  }

  const shapes = new Map<string, MapShape>();
  const blocks: BlockBox[] = [];
  blockNos.forEach((n, i) => {
    const bx = MARGIN + (i % COLS) * (BLOCK_W + BLOCK_GAP);
    const by = rowY[Math.floor(i / COLS)];
    blocks.push({ blockNo: n, x: bx, y: by, w: BLOCK_W, h: heights[i] });
    [...byBlock.get(n)!]
      .sort((a, b) => a.lotNo - b.lotNo)
      .forEach((lot, j) => {
        const c = j % PER_ROW;
        const r = Math.floor(j / PER_ROW);
        shapes.set(lot.id, {
          type: "rect",
          x: bx + PAD + c * (CELL_W + CELL_GAP),
          y: by + HEADER + r * (CELL_H + CELL_GAP),
          width: CELL_W,
          height: CELL_H,
        });
      });
  });

  return {
    width: MARGIN * 2 + COLS * BLOCK_W + (COLS - 1) * BLOCK_GAP,
    height: y - BLOCK_GAP + MARGIN,
    blocks,
    shapes,
  };
}

/** Used once every lot has a mapShape saved in the database. */
function customLayout(lots: PublicLotDTO[], width: number, height: number): Layout {
  const shapes = new Map<string, MapShape>();
  for (const l of lots) if (l.mapShape) shapes.set(l.id, l.mapShape);
  return { width, height, blocks: [], shapes };
}

function center(s: MapShape): [number, number] {
  if (s.type === "rect") return [s.x + s.width / 2, s.y + s.height / 2];
  const xs = s.points.map((p) => p[0]);
  const ys = s.points.map((p) => p[1]);
  return [(Math.min(...xs) + Math.max(...xs)) / 2, (Math.min(...ys) + Math.max(...ys)) / 2];
}

/* ---------- component ---------- */

export function LotMap({
  lots,
  viewBoxSize = { width: 1500, height: 1500 },
  backgroundSrc,
  canViewDetails = false,
}: {
  /** Admins pass full lots (LotDTO); everyone else passes the public version. */
  lots: PublicLotDTO[];
  /** Coordinate space of saved mapShape values. */
  viewBoxSize?: { width: number; height: number };
  /** Optional banner image drawn behind custom shapes, e.g. "/map/hidden-brooke.png". */
  backgroundSrc?: string;
  /** Only admins may open the lot details dialog. */
  canViewDetails?: boolean;
}) {
  const [selected, setSelected] = useState<PublicLotDTO | null>(null);
  const [shown, setShown] = useState<Set<LotStatus>>(new Set(STATUS_ORDER));

  const custom = lots.length > 0 && lots.every((l) => l.mapShape);
  const layout = useMemo(
    () => (custom ? customLayout(lots, viewBoxSize.width, viewBoxSize.height) : autoLayout(lots)),
    [lots, custom, viewBoxSize.width, viewBoxSize.height],
  );

  const counts = useMemo(() => {
    const m = new Map<LotStatus, number>();
    for (const l of lots) m.set(l.status, (m.get(l.status) ?? 0) + 1);
    return m;
  }, [lots]);

  function toggle(s: LotStatus) {
    setShown((prev) => {
      const next = new Set(prev);
      if (next.has(s)) next.delete(s);
      else next.add(s);
      return next;
    });
  }

  // The dialog only ever receives full lot data, and only for admins.
  const detailLot = canViewDetails ? (selected as LotDTO | null) : null;

  return (
    <div className="space-y-4">
      <div className="flex flex-wrap items-center gap-2">
        {STATUS_ORDER.map((s) => (
          <button
            key={s}
            type="button"
            aria-pressed={shown.has(s)}
            onClick={() => toggle(s)}
            className={cn(
              "inline-flex items-center gap-2 rounded-full border px-3 py-1 text-sm transition-opacity",
              shown.has(s) ? "bg-white" : "opacity-40",
            )}
          >
            <span className={cn("size-2.5 rounded-full", STATUS_META[s].dot)} />
            {STATUS_META[s].label}
            <span className="text-muted-foreground">{counts.get(s) ?? 0}</span>
          </button>
        ))}
        <span className="ml-1 inline-flex items-center gap-2 text-sm text-muted-foreground">
          <span className="size-2.5 rounded-full bg-violet-700" /> Corner lot
        </span>
      </div>

      <div className="overflow-auto rounded-xl border border-violet-200 bg-white">
        <svg
          viewBox={`0 0 ${layout.width} ${layout.height}`}
          className="h-auto w-full min-w-[680px]"
          role="group"
          aria-label="Hidden Brooke Executive Village lot map"
        >
          {custom && backgroundSrc && (
            <image
              href={backgroundSrc}
              x={0}
              y={0}
              width={layout.width}
              height={layout.height}
              preserveAspectRatio="xMidYMid meet"
            />
          )}

          {layout.blocks.map((b) => (
            <g key={b.blockNo}>
              <rect
                x={b.x}
                y={b.y}
                width={b.w}
                height={b.h}
                rx={12}
                className="fill-violet-50 stroke-violet-200"
              />
              <text x={b.x + PAD} y={b.y + 25} className="fill-violet-900 text-[16px] font-semibold">
                Block {b.blockNo}
              </text>
            </g>
          ))}

          {lots.map((lot) => {
            const shape = layout.shapes.get(lot.id);
            if (!shape) return null;
            const [cx, cy] = center(shape);
            const meta = STATUS_META[lot.status];
            const isSelected = canViewDetails && selected?.id === lot.id;
            const shapeClass = cn(
              "stroke-1 transition-colors group-hover:stroke-2 group-focus-visible:stroke-[3]",
              meta.shape,
              isSelected && "stroke-[3]",
            );
            return (
              <g
                key={lot.id}
                role={canViewDetails ? "button" : "img"}
                tabIndex={canViewDetails ? 0 : undefined}
                aria-label={`Block ${lot.blockNo} Lot ${lot.lotNo}, ${meta.label}`}
                onClick={canViewDetails ? () => setSelected(lot) : undefined}
                onKeyDown={
                  canViewDetails
                    ? (e) => {
                        if (e.key === "Enter" || e.key === " ") {
                          e.preventDefault();
                          setSelected(lot);
                        }
                      }
                    : undefined
                }
                className={cn(
                  "group outline-none transition-opacity",
                  canViewDetails && "cursor-pointer",
                  !shown.has(lot.status) && "opacity-20",
                )}
              >
                <title>{`Block ${lot.blockNo}, Lot ${lot.lotNo} · ${lot.sqm} sqm · ${meta.label}`}</title>
                {shape.type === "rect" ? (
                  <rect
                    x={shape.x}
                    y={shape.y}
                    width={shape.width}
                    height={shape.height}
                    rx={6}
                    transform={shape.rotate ? `rotate(${shape.rotate} ${cx} ${cy})` : undefined}
                    className={shapeClass}
                  />
                ) : (
                  <polygon points={shape.points.map((p) => p.join(",")).join(" ")} className={shapeClass} />
                )}
                <text
                  x={cx}
                  y={custom ? cy + 4 : cy - 3}
                  textAnchor="middle"
                  className="pointer-events-none fill-slate-800 text-[15px] font-semibold"
                >
                  {lot.lotNo}
                </text>
                {!custom && (
                  <text
                    x={cx}
                    y={cy + 15}
                    textAnchor="middle"
                    className="pointer-events-none fill-slate-600 text-[11px]"
                  >
                    {lot.sqm} sqm
                  </text>
                )}
                {lot.lotType === "CORNER" && shape.type === "rect" && (
                  <circle
                    cx={shape.x + shape.width - 9}
                    cy={shape.y + 9}
                    r={4}
                    className="pointer-events-none fill-violet-700"
                  />
                )}
              </g>
            );
          })}
        </svg>
      </div>

      <LotDetailsDialog
        lot={detailLot}
        open={detailLot !== null}
        onOpenChange={(o) => {
          if (!o) setSelected(null);
        }}
      />
    </div>
  );
}