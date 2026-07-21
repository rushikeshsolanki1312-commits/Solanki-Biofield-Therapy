import Reveal from "./Reveal";

export default function About() {
  return (
    <section id="about" className="bg-brand-cream">
      <div className="section-pad mx-auto max-w-7xl grid lg:grid-cols-2 gap-12 items-center">
        <Reveal>
          <div className="relative">
            <div className="aspect-square max-w-md rounded-[2rem] bg-gradient-to-br from-brand to-brand-dark p-10 text-white shadow-xl">
              <div className="flex h-full flex-col justify-between">
                <div className="text-6xl">🌿</div>
                <div>
                  <p className="font-display text-2xl font-bold leading-snug">
                    “Natural wellness, infused with the power of frequency.”
                  </p>
                  <p className="mt-4 text-brand-goldLight font-semibold">
                    — Solanki Biofield Therapy
                  </p>
                </div>
              </div>
            </div>
            <div className="absolute -bottom-5 -right-4 rounded-2xl bg-brand-gold px-6 py-4 text-brand-dark shadow-lg">
              <div className="font-display text-2xl font-extrabold">Trusted</div>
              <div className="text-xs">Local Wellness Brand</div>
            </div>
          </div>
        </Reveal>

        <Reveal delay={120}>
          <div>
            <span className="text-sm font-semibold uppercase tracking-[0.25em] text-brand-gold">
              About Us
            </span>
            <h2 className="mt-3 font-display text-3xl sm:text-4xl font-bold text-brand-dark">
              Holistic Wellness, Rooted in Nature
            </h2>
            <p className="mt-5 text-slate-600 leading-relaxed">
              At <strong>Solanki Biofield Therapy</strong>, we believe true
              wellness begins with the body&apos;s natural balance. Our
              frequency-infused supplements combine time-tested natural
              ingredients with modern biofield infusion technology to support
              vitality, focus, restful sleep, immunity, healthy weight and
              blood-sugar wellness.
            </p>
            <p className="mt-4 text-slate-600 leading-relaxed">
              Based in Chikhali, Pimpri-Chinchwad, we&apos;re committed to
              helping families across Maharashtra feel stronger, sharper and
              healthier — the natural way.
            </p>

            <ul className="mt-6 grid sm:grid-cols-2 gap-3">
              {[
                "Made with natural ingredients",
                "Frequency infusion technology",
                "Safe for the whole family",
                "Personal wellness guidance",
              ].map((f) => (
                <li key={f} className="flex items-center gap-2 text-sm text-brand-dark font-medium">
                  <span className="grid h-6 w-6 place-items-center rounded-full bg-brand text-white text-xs">✓</span>
                  {f}
                </li>
              ))}
            </ul>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
