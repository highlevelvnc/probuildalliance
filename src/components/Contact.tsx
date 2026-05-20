import { WHATSAPP_URL, COMPANY } from "@/lib/constants";
import { IconWhatsApp, IconPhone, IconMail, IconPin, IconArrow } from "./Icons";

export function Contact() {
  return (
    <section id="contact" className="section-y bg-ink-deep relative overflow-hidden border-t border-cream/8">
      <div className="absolute inset-0 bg-blueprint-fine bg-blueprint-fade opacity-50 pointer-events-none" />
      <div className="orb orb-red w-[520px] h-[520px] top-20 -left-20 opacity-50" />
      <div className="orb orb-royal w-[480px] h-[480px] bottom-0 right-[5%] opacity-45" />

      <div className="container-x relative grid lg:grid-cols-[1.05fr_1fr] gap-12 lg:gap-16 items-start">
        <div data-reveal="left">
          <span className="eyebrow eyebrow-line">Falar Connosco</span>
          <h2 className="display-line text-cream mt-5 text-display-xl">
            Próximo projeto,<br />
            <span className="italic text-brand-red">próxima obra séria.</span>
          </h2>
          <p className="text-cream/75 text-base sm:text-[17px] leading-[1.8] mt-7 max-w-prose">
            Conte-nos sobre a sua ideia. Respondemos em minutos por WhatsApp ou telefone,
            e marcamos visita técnica em 48h. Orçamento sempre por escrito.
          </p>

          <div className="mt-10 flex flex-col gap-3">
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener"
              className="group flex items-center gap-4 rounded-xs card-soft p-5 hover:border-brand-red/40 hover:shadow-glow-red transition-all duration-500"
            >
              <span className="w-12 h-12 grid place-items-center bg-brand-red text-white rounded-2xs shrink-0">
                <IconWhatsApp className="h-5 w-5" />
              </span>
              <div className="flex flex-col flex-1 min-w-0">
                <span className="text-[10px] uppercase tracking-[0.3em] text-mist">WhatsApp</span>
                <span className="font-display font-extrabold text-lg text-cream">Resposta imediata</span>
              </div>
              <IconArrow className="h-4 w-4 text-cream/40 group-hover:text-cream group-hover:translate-x-1 transition-all" />
            </a>
            <a
              href={`tel:${COMPANY.phoneRaw}`}
              className="group flex items-center gap-4 rounded-xs card-soft p-5 hover:border-brand-royal/40 hover:shadow-glow-royal transition-all duration-500"
            >
              <span className="w-12 h-12 grid place-items-center bg-brand-royal text-white rounded-2xs shrink-0">
                <IconPhone className="h-5 w-5" />
              </span>
              <div className="flex flex-col flex-1 min-w-0">
                <span className="text-[10px] uppercase tracking-[0.3em] text-mist">Telefone</span>
                <span className="font-display font-extrabold text-lg text-cream">{COMPANY.phone}</span>
              </div>
              <IconArrow className="h-4 w-4 text-cream/40 group-hover:text-cream group-hover:translate-x-1 transition-all" />
            </a>
            <div className="flex items-center gap-4 rounded-xs card-soft p-5">
              <span className="w-12 h-12 grid place-items-center border border-cream/15 text-cream rounded-2xs shrink-0">
                <IconPin className="h-5 w-5" />
              </span>
              <div className="flex flex-col flex-1 min-w-0">
                <span className="text-[10px] uppercase tracking-[0.3em] text-mist">Área de atendimento</span>
                <span className="font-display font-extrabold text-lg text-cream">{COMPANY.region}</span>
              </div>
            </div>
          </div>
        </div>

        <form
          data-reveal="right"
          action={`mailto:${COMPANY.email}`}
          method="post"
          encType="text/plain"
          className="card-soft p-7 sm:p-10 rounded-xs relative overflow-hidden"
        >
          {/* Top accent bar */}
          <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-brand-red via-brand-royal to-transparent" />

          <div className="text-[10px] uppercase tracking-[0.36em] text-brand-red font-semibold mb-3">
            Orçamento grátis · 24h
          </div>
          <div className="font-display font-extrabold text-2xl sm:text-3xl text-cream mb-8 leading-tight">
            Deixe os dados.<br />Voltamos em minutos.
          </div>

          <div className="flex flex-col gap-5">
            <Field name="Nome" type="text" required />
            <Field name="Telefone" type="tel" required />
            <Field name="Email" type="email" />
            <Field name="Tipo de obra" type="text" placeholder="Pintura, drywall, deck, casa de banho…" />
            <div>
              <label className="text-[10px] uppercase tracking-[0.3em] text-mist font-semibold">Descrição</label>
              <textarea
                name="Descrição"
                rows={4}
                className="mt-2 w-full bg-ink-deep/80 border border-cream/10 rounded-2xs text-cream px-4 py-3 outline-none focus:border-brand-red transition-colors resize-none"
              />
            </div>

            <button type="submit" className="btn-primary mt-3 w-full">
              <IconMail className="h-4 w-4" /> Pedir orçamento
            </button>
            <p className="text-[10px] uppercase tracking-[0.24em] text-mist-dim mt-1 text-center">
              Resposta em minutos · Garantia escrita
            </p>
          </div>
        </form>
      </div>
    </section>
  );
}

function Field({
  name,
  type,
  required,
  placeholder,
}: {
  name: string;
  type: string;
  required?: boolean;
  placeholder?: string;
}) {
  return (
    <div>
      <label className="text-[10px] uppercase tracking-[0.3em] text-mist font-semibold">
        {name} {required && <span className="text-brand-red">*</span>}
      </label>
      <input
        type={type}
        name={name}
        required={required}
        placeholder={placeholder}
        className="mt-2 w-full bg-ink-deep/80 border border-cream/10 rounded-2xs text-cream px-4 py-3 outline-none focus:border-brand-red transition-colors placeholder:text-mist-dim"
      />
    </div>
  );
}
