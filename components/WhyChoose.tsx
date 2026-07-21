import { whyChoose } from "@/lib/site";
import Reveal from "./Reveal";

export default function WhyChoose() {
  return (
    <section id="why" className="section-pad mx-auto max-w-7xl">
      <Reveal>
        <div className="text-center max-w-2xl mx-auto">
          <span className="text-sm font-semibold uppercase tracking-[0.25em] text-brand-gold">
            Why Solanki
          </span>
          <h2 className="mt-3 font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-brand-dark">
            Wellness You Can Trust
          </h2>
        </div>
      </Reveal>

      <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {whyChoose.map((w, i) => (
          <Reveal key={w.title} delay={i * 70}>
            <div className="flex h-full items-start gap-4 rounded-2xl border border-brand/10 bg-white p-6 shadow-sm transition-shadow hover:shadow-md">
              <div className="grid h-12 w-12 shrink-0 place-items-center rounded-xl bg-brand-cream text-2xl">
                {w.icon}
              </div>
              <div>
                <h3 className="font-semibold text-brand-dark">{w.title}</h3>
                <p className="mt-1 text-sm text-slate-600">{w.desc}</p>
              </div>
            </div>
          </Reveal>
        ))}
      </div>

      {/* Stats strip */}
      <Reveal>
        <div className="mt-14 grid grid-cols-2 gap-4 rounded-3xl bg-gradient-to-r from-brand to-brand-dark p-8 text-center text-white sm:grid-cols-4">
          {[
            { n: "6+", l: "Wellness Formulas" },
            { n: "100%", l: "Natural Ingredients" },
            { n: "0", l: "Harmful Chemicals" },
            { n: "All Ages", l: "Kids to Adults" },
          ].map((s) => (
            <div key={s.l}>
              <div className="font-display text-3xl sm:text-4xl font-extrabold text-brand-goldLight">
                {s.n}
              </div>
              <div className="mt-1 text-xs sm:text-sm text-white/70">{s.l}</div>
            </div>
          ))}
        </div>
      </Reveal>
    </section>
  );
}
