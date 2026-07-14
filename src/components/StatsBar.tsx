import type { SiteStats } from "@/src/types";

interface StatsBarProps {
  stats: SiteStats[];
}

export default function StatsBar({ stats }: StatsBarProps) {
  return (
    <section className="section-container py-16 md:py-24" id="stats">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-4 max-w-[900px] mx-auto">
        {stats.map((stat, index) => (
          <div
            key={stat.label}
            className="flex flex-col items-center text-center gap-2 relative"
          >
            {/* Divider line between items on desktop */}
            {index > 0 && (
              <div className="hidden md:block absolute left-0 top-1/2 -translate-y-1/2 w-px h-12 bg-[#242424]" />
            )}
            <span className="text-[48px] md:text-[56px] font-bold tracking-[-0.03em] text-[#f5efe6] leading-none">
              {stat.value}
            </span>
            <span className="text-[#5e5e5e] text-[13px] font-medium uppercase tracking-[0.1em]">
              {stat.label}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
}
