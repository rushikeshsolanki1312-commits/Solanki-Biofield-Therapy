import { site } from "@/lib/site";
import Reveal from "./Reveal";

export default function Contact() {
  const wa = `https://wa.me/${site.whatsapp}?text=${encodeURIComponent(
    "Hello Solanki! I'd like to book a wellness appointment."
  )}`;
  const addr = site.address;

  return (
    <section id="contact" className="section-pad mx-auto max-w-7xl">
      <Reveal>
        <div className="text-center max-w-2xl mx-auto">
          <span className="text-sm font-semibold uppercase tracking-[0.25em] text-brand-gold">
            Get In Touch
          </span>
          <h2 className="mt-3 font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-brand-dark">
            Book Your Wellness Appointment
          </h2>
          <p className="mt-4 text-slate-600">
            Call or WhatsApp us to order products or get personal wellness
            guidance — we&apos;re here to help.
          </p>
        </div>
      </Reveal>

      <div className="mt-12 grid lg:grid-cols-2 gap-8">
        <Reveal>
          <div className="rounded-3xl bg-gradient-to-br from-brand to-brand-dark p-8 text-white shadow-xl">
            <div className="space-y-6">
              <a href={`tel:${site.phone}`} className="flex items-start gap-4 group">
                <span className="grid h-12 w-12 shrink-0 place-items-center rounded-xl bg-white/15 text-xl">📞</span>
                <span>
                  <span className="block text-sm text-white/60">Call / WhatsApp</span>
                  <span className="block text-lg font-semibold group-hover:text-brand-goldLight transition-colors">
                    {site.phoneDisplay}
                  </span>
                </span>
              </a>

              <a href={`mailto:${site.email}`} className="flex items-start gap-4 group">
                <span className="grid h-12 w-12 shrink-0 place-items-center rounded-xl bg-white/15 text-xl">✉️</span>
                <span>
                  <span className="block text-sm text-white/60">Email</span>
                  <span className="block text-lg font-semibold break-all group-hover:text-brand-goldLight transition-colors">
                    {site.email}
                  </span>
                </span>
              </a>

              <a href={site.mapLink} target="_blank" rel="noopener noreferrer" className="flex items-start gap-4 group">
                <span className="grid h-12 w-12 shrink-0 place-items-center rounded-xl bg-white/15 text-xl">📍</span>
                <span>
                  <span className="block text-sm text-white/60">Visit Us</span>
                  <span className="block font-medium leading-snug group-hover:text-brand-goldLight transition-colors">
                    {addr.line1}, {addr.line2}, {addr.city}, {addr.state} {addr.zip}
                  </span>
                </span>
              </a>
            </div>

            <div className="mt-8 flex flex-col sm:flex-row gap-3">
              <a
                href={wa}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 rounded-xl bg-[#25D366] px-5 py-3.5 text-center font-semibold text-white shadow-lg hover:brightness-110 transition"
              >
                💬 WhatsApp Us
              </a>
              <a
                href={`tel:${site.phone}`}
                className="flex-1 rounded-xl bg-brand-gold px-5 py-3.5 text-center font-semibold text-brand-dark shadow-lg hover:bg-brand-goldLight transition"
              >
                📞 Call Now
              </a>
            </div>
          </div>
        </Reveal>

        <Reveal delay={120}>
          <div className="overflow-hidden rounded-3xl shadow-xl ring-1 ring-black/5 h-full min-h-[340px]">
            <iframe
              title="Solanki Biofield Therapy location map"
              src={site.mapEmbed}
              className="h-full w-full min-h-[340px]"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              allowFullScreen
            />
          </div>
        </Reveal>
      </div>
    </section>
  );
}
