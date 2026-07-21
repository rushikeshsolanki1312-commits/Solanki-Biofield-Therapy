import Image from "next/image";
import { services, site } from "@/lib/site";
import Reveal from "./Reveal";

export default function Services() {
  return (
    <section id="services" className="bg-brand-cream">
      <div className="section-pad mx-auto max-w-7xl">
        <Reveal>
          <div className="text-center max-w-2xl mx-auto">
            <span className="text-sm font-semibold uppercase tracking-[0.25em] text-brand-gold">
              Our Therapies
            </span>
            <h2 className="mt-3 font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-brand-dark">
              Healing Therapies at Solanki
            </h2>
            <p className="mt-4 text-slate-600">
              Beyond supplements, we offer professional biofield & natural
              therapies to restore balance and wellness — in a calm, caring
              environment.
            </p>
          </div>
        </Reveal>

        <div className="mt-14 grid gap-7 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((s, i) => {
            const wa = `https://wa.me/${site.whatsapp}?text=${encodeURIComponent(
              `Hi Solanki! I'd like to book ${s.name}.`
            )}`;
            return (
              <Reveal key={s.name} delay={i * 90}>
                <article className="group h-full overflow-hidden rounded-3xl bg-white shadow-lg ring-1 ring-black/5 transition-transform duration-300 hover:-translate-y-1.5">
                  <div className="relative h-52 overflow-hidden">
                    <Image
                      src={s.image}
                      alt={`${s.name} at Solanki Biofield Therapy`}
                      fill
                      sizes="(max-width: 768px) 100vw, 33vw"
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                    <h3 className="absolute bottom-3 left-4 right-4 font-display text-xl font-bold text-white drop-shadow">
                      {s.name}
                    </h3>
                  </div>
                  <div className="p-6">
                    <p className="text-sm text-slate-600 leading-relaxed">
                      {s.tagline}
                    </p>
                    <ul className="mt-4 flex flex-wrap gap-2">
                      {s.points.map((pt) => (
                        <li
                          key={pt}
                          className="rounded-full bg-brand-cream px-3 py-1 text-xs font-medium text-brand-dark"
                        >
                          {pt}
                        </li>
                      ))}
                    </ul>
                    <a
                      href={wa}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-xl border-2 border-brand px-4 py-2.5 text-sm font-semibold text-brand transition-colors hover:bg-brand hover:text-white"
                    >
                      📅 Book Session
                    </a>
                  </div>
                </article>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
