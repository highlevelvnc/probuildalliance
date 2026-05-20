import Image from "next/image";
import { COMPANY } from "@/lib/constants";

export function Logo({ compact = false }: { compact?: boolean }) {
  return (
    <div className="flex items-center gap-3">
      <Image
        src="/logo.png"
        alt={COMPANY.name}
        width={48}
        height={48}
        priority
        className="rounded-full shadow-[0_0_0_1px_rgba(255,255,255,0.06),0_6px_22px_rgba(199,18,31,0.18),0_4px_18px_rgba(29,78,203,0.14)]"
      />
      {!compact && (
        <div className="flex flex-col leading-none">
          <span className="font-display font-extrabold text-[0.95rem] tracking-[0.22em] text-cream">
            PA <span className="text-brand-red">REMODELAÇÕES</span>
          </span>
          <span className="font-body text-[0.55rem] uppercase tracking-[0.34em] text-mist mt-1">
            Construímos Confiança
          </span>
        </div>
      )}
    </div>
  );
}
