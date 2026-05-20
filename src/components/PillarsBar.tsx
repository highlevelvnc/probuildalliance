import { PILLARS } from "@/lib/constants";
import { IconShield, IconBolt, IconStar, IconDiamond } from "./Icons";

const ICONS = [IconShield, IconBolt, IconStar, IconDiamond];
const COLORS = ["text-brand-red", "text-cream", "text-brand-royal", "text-cream"];

export function PillarsBar() {
  return (
    <section className="relative border-y border-ink-border bg-ink-panel">
      <div className="container-x grid grid-cols-2 lg:grid-cols-4 divide-x divide-ink-border">
        {PILLARS.map((p, i) => {
          const Icon = ICONS[i];
          return (
            <div
              key={p.label}
              data-reveal
              className="flex items-center gap-4 px-6 py-8 sm:px-8 sm:py-10 first:pl-0 last:pr-0"
            >
              <Icon className={`h-7 w-7 shrink-0 ${COLORS[i]}`} />
              <div className="flex flex-col">
                <span className="font-display font-extrabold uppercase tracking-[0.18em] text-cream text-sm sm:text-base">
                  {p.label}
                </span>
                <span className="text-[10px] uppercase tracking-[0.3em] text-mist mt-1">
                  PA · 0{i + 1}
                </span>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
