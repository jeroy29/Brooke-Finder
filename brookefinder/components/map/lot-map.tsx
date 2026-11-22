"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import { cn } from "@/lib/utils";
import type { LotDTO, LotStatus, PublicLotDTO } from "@/lib/types";
import { STATUS_META, STATUS_ORDER } from "@/components/lots/status-badge";
import { LotDetailsDialog } from "./lot-details-dialog";

const SVG_NS = "http://www.w3.org/2000/svg";
// crops the empty margin around the drawing
const VIEWBOX = "70 262 1370 1195";

const lotKey = (l: { blockNo: number; lotNo: number }) => `b${l.blockNo}-l${l.lotNo}`;
const split = (s: string) => s.split(/\s+/).filter(Boolean);
const ALL_SHAPE_CLASSES = STATUS_ORDER.flatMap((s) => split(STATUS_META[s].shape));

export function LotMap({
  lots,
  svg,
  canViewDetails = false,
}: {
  /** Admins pass full lots (LotDTO); everyone else passes the public version. */
  lots: PublicLotDTO[];
  /** Contents of public/map.svg*/
  svg: string;
  /** Only admins may open the lot details dialog. */
  canViewDetails?: boolean;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const [selected, setSelected] = useState<PublicLotDTO | null>(null);
  const [shown, setShown] = useState<Set<LotStatus>>(new Set(STATUS_ORDER));

  const markup = useMemo(() => svg.replace(/viewBox="[^"]*"/, `viewBox="${VIEWBOX}"`), [svg]);
  const byKey = useMemo(() => new Map(lots.map((l) => [lotKey(l), l])), [lots]);

  const counts = useMemo(() => {
    const m = new Map<LotStatus, number>();
    for (const l of lots) m.set(l.status, (m.get(l.status) ?? 0) + 1);
    return m;
  }, [lots]);

  // Paint the drawing from database data
  useEffect(() => {
    const root = ref.current;
    if (!root) return;
    const drawn = new Set<string>();

    root.querySelectorAll<SVGGElement>(".lot").forEach((g) => {
      drawn.add(g.id);
      const poly = g.querySelector("polygon");
      if (!poly) return;

      poly.classList.remove(...ALL_SHAPE_CLASSES);
      g.querySelector(":scope > title")?.remove();
      g.querySelector(".corner-dot")?.remove();
      ["role", "tabindex", "aria-label", "data-dim", "data-selected", "data-clickable", "data-empty"].forEach(
        (a) => g.removeAttribute(a),
      );

      const lot = byKey.get(g.id);
      if (!lot) {
        g.setAttribute("data-empty", "true"); // drawn but no row in the database
        return;
      }

      const meta = STATUS_META[lot.status];
      poly.classList.add(...split(meta.shape));

      const label = `Block ${lot.blockNo}, Lot ${lot.lotNo} · ${lot.sqm} sqm · ${meta.label}`;
      const title = document.createElementNS(SVG_NS, "title");
      title.textContent = label;
      g.prepend(title);
      g.setAttribute("aria-label", label);
      g.setAttribute("role", canViewDetails ? "button" : "img");
      if (canViewDetails) {
        g.setAttribute("tabindex", "0");
        g.setAttribute("data-clickable", "true");
      }
      if (!shown.has(lot.status)) g.setAttribute("data-dim", "true");
      if (canViewDetails && selected?.id === lot.id) g.setAttribute("data-selected", "true");

      // labels come from the database
      const num = root.querySelector(`[id="${g.id}-num"]`);
      if (num) num.textContent = String(lot.lotNo);
      const sqm = root.querySelector<SVGTextElement>(`[id="${g.id}-sqm"]`);
      if (sqm) sqm.textContent = sqm.dataset.wide === "1" ? `${lot.sqm} sqm` : String(lot.sqm);

      // corner lot marker
      if (lot.lotType === "CORNER") {
        const bb = (poly as SVGPolygonElement).getBBox();
        const dot = document.createElementNS(SVG_NS, "circle");
        dot.setAttribute("class", "corner-dot pointer-events-none fill-violet-700");
        dot.setAttribute("cx", String(bb.x + bb.width - 10));
        dot.setAttribute("cy", String(bb.y + 10));
        dot.setAttribute("r", "5");
        g.appendChild(dot);
      }
    });

    if (process.env.NODE_ENV !== "production") {
      const missing = lots.filter((l) => !drawn.has(lotKey(l))).map(lotKey);
      if (missing.length) console.warn("Lots in the database with no drawing on the map:", missing);
    }
  }, [lots, byKey, shown, selected, canViewDetails]);

  function lotFromEvent(e: React.SyntheticEvent) {
    const g = (e.target as Element).closest<SVGGElement>(".lot");
    return g ? byKey.get(g.id) ?? null : null;
  }

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

      <style>{`
        .lot-map svg { display:block; width:100%; height:auto; min-width:680px; }
        .lot-map #legend { display:none; }
        .lot-map .lot polygon { stroke-width:3; transition: fill .15s; }
        .lot-map .lot { outline:none; transition: opacity .15s; }
        .lot-map .lot[data-clickable="true"] { cursor:pointer; }
        .lot-map .lot[data-clickable="true"]:hover polygon { stroke-width:5; }
        .lot-map .lot[data-selected="true"] polygon,
        .lot-map .lot:focus-visible polygon { stroke-width:6; }
        .lot-map .lot[data-dim="true"] { opacity:.2; }
        .lot-map .lot[data-empty="true"] { opacity:.45; }
      `}</style>

      <div className="overflow-auto rounded-xl border border-violet-200 bg-white">
        <div
          ref={ref}
          className="lot-map"
          onClick={(e) => {
            if (!canViewDetails) return;
            const lot = lotFromEvent(e);
            if (lot) setSelected(lot);
          }}
          onKeyDown={(e) => {
            if (!canViewDetails || (e.key !== "Enter" && e.key !== " ")) return;
            const lot = lotFromEvent(e);
            if (lot) {
              e.preventDefault();
              setSelected(lot);
            }
          }}
          dangerouslySetInnerHTML={{ __html: markup }}
        />
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