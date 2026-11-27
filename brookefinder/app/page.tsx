import { LandingExtension } from "@/components/landing/landing-extension";

const statuses = [
  { label: "Available", dot: "bg-emerald-400" },
  { label: "Reserved", dot: "bg-amber-400" },
  { label: "Sold", dot: "bg-violet-400" },
  { label: "On hold", dot: "bg-slate-300" },
  { label: "Closed", dot: "bg-rose-400" },
];

export default function Home() {
  return (
    <main className="w-full px-3 pb-3 sm:px-5 sm:pb-5">
      <section
        className="relative flex min-h-[calc(100svh-6rem)] flex-col justify-end overflow-hidden rounded-[2rem] border bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: "url('/landing.png')" }}
      >
        {/* Gradient overlay: dark at the bottom/left for text, clear up top */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-r from-black/40 via-transparent to-transparent" />

        <div className="relative z-10 flex flex-col items-start gap-6 px-6 pb-10 sm:px-12 sm:pb-14 lg:px-16">
          <span className="rounded-full border border-white/25 bg-white/10 px-3 py-1 text-xs font-medium tracking-wide text-white/90 backdrop-blur-md">
            Hidden Brooke Executive Village
          </span>

          <h1 className="max-w-3xl font-[family-name:var(--font-display)] text-5xl leading-[1.05] font-semibold tracking-tight text-white sm:text-6xl lg:text-7xl">
            Every lot. Every owner.
            <br />
            <span className="bg-gradient-to-r from-violet-200 to-fuchsia-200 bg-clip-text text-transparent">
              One map.
            </span>
          </h1>

          <p className="max-w-xl text-base text-white/85 sm:text-lg">
            See which lots are open, who owns the rest, and what each homeowner
            still owes, all in one place.
          </p>

          <LandingExtension />

          {/* Status legend
          <ul className="mt-2 flex flex-wrap gap-2">
            {statuses.map((s) => (
              <li
                key={s.label}
                className="flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-3 py-1.5 text-xs text-white backdrop-blur-md"
              >
                <span className={`size-2 rounded-full ${s.dot}`} />
                {s.label}
              </li>
            ))}
          </ul> */}
        </div>
      </section>
    </main>
  );
}