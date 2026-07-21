import Image from "next/image";
import { site, ctaImage } from "@/lib/site";
import Reveal from "./Reveal";

export default function CtaBand() {
  const wa = `https://wa.me/${site.whatsapp}?text=${encodeURIComponent(
    "Hi Solanki! I'd like to start my wellness journey."
  )}`;

  return (
    <section className="mx-auto max-w-7xl px-5 lg:px-8 py-12">
      <Reveal>
        <div className="relative overflow-hidden rounded-[2rem] bg-brand-dark shadow-xl">
          <Image
            src={ctaImage}
            alt="Balance today, live healthier tomorrow with Solanki Biofield Therapy"
            fill
            sizes="100vw"
            className="object-cover opacity-40"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-brand-dark via-brand-dark/80 to-transparent" />
          <div className="relative grid gap-6 p-8 sm:p-12 lg:grid-cols-2 lg:items-center">
            <div className="text-white">
              <h2 className="font-display text-3xl sm:text-4xl font-bold leading-tight">
                Balance Today.{" "}
                <span className="text-gradient-gold">Live Healthier Tomorrow.</span>
              </h2>
              <p className="mt-4 max-w-lg text-white/80">
                Take the first step towards natural wellness. Order your
                frequency-infused supplements or book a therapy session today.
              </p>
            </div>
            <div className="flex flex-wrap gap-4 lg:justify-end">
              <a
                href={wa}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-full bg-[#25D366] px-7 py-3.5 font-semibold text-white shadow-lg hover:brightness-110 transition"
              >
                💬 WhatsApp Now
              </a>
              <a
                href={`tel:${site.phone}`}
                className="rounded-full bg-brand-gold px-7 py-3.5 font-semibold text-brand-dark shadow-lg hover:bg-brand-goldLight transition"
              >
                📞 {site.phoneDisplay}
              </a>
            </div>
          </div>
        </div>
      </Reveal>
    </section>
  );
}
