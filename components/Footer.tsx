import { site, products } from "@/lib/site";

export default function Footer() {
  const year = 2026;
  return (
    <footer className="bg-brand-dark text-white/80">
      <div className="mx-auto max-w-7xl px-5 lg:px-8 py-14 grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
        <div>
          <div className="flex items-center gap-2.5">
            <span className="grid h-10 w-10 place-items-center rounded-xl bg-brand-gold text-brand-dark font-display text-xl font-extrabold">
              S
            </span>
            <span className="leading-tight">
              <span className="block font-display text-lg font-bold text-white">Solanki</span>
              <span className="block text-[10px] uppercase tracking-[0.2em] text-brand-goldLight">
                Biofield Therapy
              </span>
            </span>
          </div>
          <p className="mt-4 text-sm text-white/60 leading-relaxed">
            Frequency-infused natural wellness supplements for vitality, focus,
            sleep, immunity, weight & blood-sugar wellness.
          </p>
        </div>

        <div>
          <h4 className="font-semibold text-white">Products</h4>
          <ul className="mt-4 space-y-2 text-sm">
            {products.map((p) => (
              <li key={p.slug}>
                <a href="#products" className="hover:text-brand-goldLight transition-colors">
                  {p.name}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="font-semibold text-white">Quick Links</h4>
          <ul className="mt-4 space-y-2 text-sm">
            <li><a href="#technology" className="hover:text-brand-goldLight">Technology</a></li>
            <li><a href="#why" className="hover:text-brand-goldLight">Why Us</a></li>
            <li><a href="#about" className="hover:text-brand-goldLight">About</a></li>
            <li><a href="#contact" className="hover:text-brand-goldLight">Contact</a></li>
          </ul>
        </div>

        <div>
          <h4 className="font-semibold text-white">Reach Us</h4>
          <ul className="mt-4 space-y-3 text-sm text-white/60">
            <li className="flex gap-2">📞 <a href={`tel:${site.phone}`} className="hover:text-brand-goldLight">{site.phoneDisplay}</a></li>
            <li className="flex gap-2">✉️ <a href={`mailto:${site.email}`} className="hover:text-brand-goldLight break-all">{site.email}</a></li>
            <li className="flex gap-2">📍 {site.address.city}, {site.address.state} {site.address.zip}</li>
          </ul>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="mx-auto max-w-7xl px-5 lg:px-8 py-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-white/50">
          <p>© {year} {site.name}. All rights reserved.</p>
          <p className="text-center sm:text-right">
            * Not intended to diagnose, treat, cure or prevent any disease.
          </p>
        </div>
      </div>
    </footer>
  );
}
