import { site } from "@/lib/site";

export default function Hero() {
  const wa = `https://wa.me/${site.whatsapp}?text=${encodeURIComponent(
    "Hi Solanki! I'd like to book an appointment / order a product."
  )}`;

  return (
    <section
      id="top"
      className="relative min-h-screen flex items-center overflow-hidden bg-brand-dark text-white"
    >
      {/* Background layers */}
      <div className="absolute inset-0 bg-gradient-to-br from-brand-dark via-brand to-[#0a2e1d]" />
      <div className="absolute -top-32 -right-32 h-96 w-96 rounded-full bg-brand-gold/20 blur-3xl" />
      <div className="absolute -bottom-32 -left-20 h-96 w-96 rounded-full bg-emerald-400/10 blur-3xl" />
      <div
        className="absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage:
            "radial-gradient(circle at 1px 1px, white 1px, transparent 0)",
          backgroundSize: "32px 32px",
        }}
      />

      <div className="relative mx-auto max-w-7xl px-5 lg:px-8 pt-28 pb-16 grid lg:grid-cols-2 gap-12 items-center">
        {/* Left copy */}
        <div className="animate-fadeUp">
          <span className="inline-flex items-center gap-2 rounded-full border border-brand-gold/40 bg-brand-gold/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-brand-goldLight">
            ✦ Frequency Infused Formula
          </span>
          <h1 className="mt-6 font-display text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-[1.05]">
            Revive Your Strength.
            <span className="block text-gradient-gold">
              Reclaim Your Wellness.
            </span>
          </h1>
          <p className="mt-6 max-w-xl text-lg text-white/80 leading-relaxed">
            {site.name} brings you a natural range of{" "}
            <strong className="text-brand-goldLight">
              frequency-infused supplements
            </strong>{" "}
            for vitality, focus, sleep, immunity, weight & blood-sugar wellness —
            crafted to support your whole family, naturally.
          </p>

          <div className="mt-8 flex flex-wrap gap-4">
            <a
              href="#products"
              className="rounded-full bg-brand-gold px-7 py-3.5 font-semibold text-brand-dark shadow-lg shadow-brand-gold/30 hover:bg-brand-goldLight transition-colors"
            >
              Explore Products
            </a>
            <a
              href={wa}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full border border-white/30 bg-white/5 px-7 py-3.5 font-semibold text-white hover:bg-white/15 transition-colors"
            >
              💬 Book on WhatsApp
            </a>
          </div>

          <div className="mt-10 flex flex-wrap gap-x-8 gap-y-3 text-sm text-white/70">
            <span className="flex items-center gap-2">🌱 100% Natural</span>
            <span className="flex items-center gap-2">🚫 No Harmful Chemicals</span>
            <span className="flex items-center gap-2">🔬 Scientifically Inspired</span>
          </div>
        </div>

        {/* Right visual */}
        <div className="relative flex justify-center animate-fadeUp" style={{ animationDelay: "150ms" }}>
          <div className="relative animate-floaty">
            <div className="absolute inset-0 scale-125 rounded-full bg-brand-gold/20 blur-3xl" />
            <div className="relative grid h-72 w-72 sm:h-80 sm:w-80 place-items-center rounded-full border border-brand-gold/30 bg-gradient-to-b from-white/10 to-transparent">
              <div className="grid h-52 w-52 place-items-center rounded-full border border-white/10 bg-brand/40 text-center">
                <div>
                  <div className="text-6xl">🌿</div>
                  <div className="mt-3 font-display text-2xl font-bold text-brand-goldLight">
                    Powered by
                  </div>
                  <div className="font-display text-lg text-white">
                    Frequency Infusion
                  </div>
                  <div className="text-xs uppercase tracking-widest text-white/60">
                    Technology
                  </div>
                </div>
              </div>
            </div>
            {/* orbiting badges */}
            <span className="absolute -top-2 left-6 rounded-full bg-red-500 px-3 py-1 text-xs font-semibold shadow-lg">🐎 Stamina</span>
            <span className="absolute top-1/3 -right-4 rounded-full bg-indigo-500 px-3 py-1 text-xs font-semibold shadow-lg">🌙 Sleep</span>
            <span className="absolute bottom-4 -left-4 rounded-full bg-amber-500 px-3 py-1 text-xs font-semibold text-brand-dark shadow-lg">⚖️ Slim</span>
            <span className="absolute -bottom-1 right-10 rounded-full bg-sky-500 px-3 py-1 text-xs font-semibold shadow-lg">🛡️ Immunity</span>
          </div>
        </div>
      </div>

      {/* wave divider */}
      <div className="absolute bottom-0 inset-x-0 leading-none">
        <svg viewBox="0 0 1440 80" className="w-full h-12 sm:h-20" preserveAspectRatio="none">
          <path d="M0 80 L0 40 Q360 0 720 30 T1440 30 L1440 80 Z" fill="#fbfaf5" />
        </svg>
      </div>
    </section>
  );
}
