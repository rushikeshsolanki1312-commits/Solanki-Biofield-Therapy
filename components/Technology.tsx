import { techSteps } from "@/lib/site";
import Reveal from "./Reveal";

export default function Technology() {
  return (
    <section id="technology" className="relative overflow-hidden bg-brand-dark text-white">
      <div className="absolute -top-24 left-1/2 h-72 w-72 -translate-x-1/2 rounded-full bg-brand-gold/15 blur-3xl" />
      <div className="section-pad mx-auto max-w-7xl relative">
        <Reveal>
          <div className="text-center max-w-2xl mx-auto">
            <span className="text-sm font-semibold uppercase tracking-[0.25em] text-brand-goldLight">
              How It Works
            </span>
            <h2 className="mt-3 font-display text-3xl sm:text-4xl lg:text-5xl font-bold">
              Powered by Frequency Infusion Technology
            </h2>
            <p className="mt-4 text-white/70">
              Every Solanki formula is created through a unique biofield
              frequency-infusion process — designed for natural, cellular-level
              support.
            </p>
          </div>
        </Reveal>

        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-5">
          {techSteps.map((s, i) => (
            <Reveal key={s.title} delay={i * 90}>
              <div className="relative h-full rounded-2xl border border-white/10 bg-white/5 p-6 text-center backdrop-blur">
                <div className="mx-auto grid h-14 w-14 place-items-center rounded-full bg-brand-gold/20 text-2xl">
                  {s.icon}
                </div>
                <div className="mt-3 text-xs font-bold text-brand-goldLight">
                  STEP {i + 1}
                </div>
                <h3 className="mt-1 font-semibold">{s.title}</h3>
                <p className="mt-2 text-sm text-white/60">{s.desc}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
