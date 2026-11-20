import { BadgeCheck, Hourglass, Lock, MapPin, Pause, type LucideIcon } from "lucide-react";
import { cn } from "@/lib/utils";
import { HeroCta } from "@/components/landing/hero-cta";

// Floating plates: one per lot status, same colors as the map.
const tiles: {
  label: string;
  icon: LucideIcon;
  color: string;
  pos: string;
  outer?: boolean;
}[] = [
  { label: "Sold", icon: BadgeCheck, color: "bg-violet-500", pos: "left-[-3%] top-[8%]", outer: true },
  { label: "Available", icon: MapPin, color: "bg-emerald-400", pos: "left-[16%] top-[32%]" },
  { label: "Reserved", icon: Hourglass, color: "bg-amber-400", pos: "left-1/2 top-[50%] -translate-x-1/2" },
  { label: "On hold", icon: Pause, color: "bg-slate-400", pos: "right-[16%] top-[32%]" },
  { label: "Closed", icon: Lock, color: "bg-rose-400", pos: "right-[-3%] top-[8%]", outer: true },
];

function Tile({ label, icon: Icon, color, pos, outer }: (typeof tiles)[number]) {
  return (
    <div
      className={cn(
        "absolute aspect-square w-[clamp(7rem,17vw,16rem)]",
        pos,
        outer && "hidden md:block",
      )}
    >
      {/* thickness */}
      <div className="absolute inset-0 translate-y-2 rounded-[2rem] bg-violet-100 [transform:perspective(900px)_rotateX(58deg)_rotateZ(45deg)]" />
      {/* top face */}
      <div className="absolute inset-0 rounded-[2rem] bg-white shadow-[0_30px_60px_-24px_rgba(76,29,149,0.35)] ring-1 ring-black/5 [transform:perspective(900px)_rotateX(58deg)_rotateZ(45deg)]" />
      <div className="absolute inset-0 flex flex-col items-center justify-center gap-2">
        <span className={cn("flex size-12 items-center justify-center rounded-2xl text-white shadow-lg sm:size-14", color)}>
          <Icon className="size-6 sm:size-7" />
        </span>
        <span className="rounded-full bg-white px-2.5 py-0.5 text-xs font-medium shadow-sm ring-1 ring-black/5">
          {label}
        </span>
      </div>
    </div>
  );
}

export default function Home() {
  return (
    <main className="w-full px-3 pb-3 sm:px-5 sm:pb-5">
      <section className="relative flex min-h-[calc(100svh-6rem)] flex-col items-center overflow-hidden rounded-[2rem] border bg-gradient-to-b from-violet-50 via-white to-violet-50/70 px-4 pt-14 sm:pt-20">
        <h1 className="max-w-4xl text-center font-[family-name:var(--font-display)] text-5xl leading-[1.08] font-semibold tracking-tight sm:text-6xl lg:text-7xl">
          Every lot. Every owner.
          <br />
          <span className="rounded-xl bg-violet-300/70 px-3 [box-decoration-break:clone]">One map.</span>
        </h1>

        <p className="mt-6 max-w-xl text-center text-base text-muted-foreground sm:text-lg">
          See which lots are open, who owns the rest, and what each homeowner still owes, all in one
          place for Hidden Brooke Executive Village.
        </p>

        <div className="mt-8">
          <HeroCta />
        </div>

        <div aria-hidden className="relative mt-6 w-full flex-1 min-h-[17rem] sm:min-h-[22rem]">
          {tiles.map((t) => (
            <Tile key={t.label} {...t} />
          ))}
        </div>
      </section>
    </main>
  );
}