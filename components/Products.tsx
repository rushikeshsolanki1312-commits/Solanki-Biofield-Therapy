import { products, site } from "@/lib/site";
import Reveal from "./Reveal";

export default function Products() {
  return (
    <section id="products" className="section-pad mx-auto max-w-7xl">
      <Reveal>
        <div className="text-center max-w-2xl mx-auto">
          <span className="text-sm font-semibold uppercase tracking-[0.25em] text-brand-gold">
            Our Range
          </span>
          <h2 className="mt-3 font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-brand-dark">
            Frequency-Infused Wellness, For Everyone
          </h2>
          <p className="mt-4 text-slate-600">
            Six natural formulas — each crafted to support a specific area of
            your family&apos;s health & well-being.
          </p>
        </div>
      </Reveal>

      <div className="mt-14 grid gap-7 sm:grid-cols-2 lg:grid-cols-3">
        {products.map((p, i) => {
          const wa = `https://wa.me/${site.whatsapp}?text=${encodeURIComponent(
            `Hi Solanki! I'm interested in ${p.name} (${p.category}).`
          )}`;
          return (
            <Reveal key={p.slug} delay={i * 80}>
              <article
                className={`group relative h-full overflow-hidden rounded-3xl bg-white p-6 shadow-lg ${p.glow} ring-1 ring-black/5 transition-transform duration-300 hover:-translate-y-1.5`}
              >
                <div
                  className={`absolute -right-10 -top-10 h-32 w-32 rounded-full bg-gradient-to-br ${p.accent} opacity-20 blur-xl transition-opacity group-hover:opacity-40`}
                />
                <div
                  className={`grid h-16 w-16 place-items-center rounded-2xl bg-gradient-to-br ${p.accent} text-3xl shadow-md`}
                >
                  {p.emoji}
                </div>
                <h3 className="mt-5 font-display text-2xl font-bold text-brand-dark">
                  {p.name}
                </h3>
                <p className="text-sm font-semibold text-brand-gold">
                  {p.category}
                </p>
                <p className="mt-3 text-sm text-slate-600 leading-relaxed">
                  {p.short}
                </p>

                <ul className="mt-4 space-y-1.5">
                  {p.benefits.slice(0, 4).map((b) => (
                    <li
                      key={b}
                      className="flex items-start gap-2 text-sm text-slate-700"
                    >
                      <span className="mt-0.5 text-brand-light">✓</span>
                      {b}
                    </li>
                  ))}
                </ul>

                <a
                  href={wa}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-xl bg-brand px-4 py-3 text-sm font-semibold text-white transition-colors hover:bg-brand-dark"
                >
                  💬 Enquire Now
                </a>
              </article>
            </Reveal>
          );
        })}
      </div>

      <Reveal>
        <p className="mt-10 text-center text-xs text-slate-400 max-w-2xl mx-auto">
          * These products are not intended to diagnose, treat, cure or prevent
          any disease.
        </p>
      </Reveal>
    </section>
  );
}
