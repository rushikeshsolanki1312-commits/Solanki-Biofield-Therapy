"use client";

import { site } from "@/lib/site";

export default function WhatsAppFloat() {
  const msg = encodeURIComponent(
    "Hello Solanki Biofield Therapy! I'd like to know more about your frequency-infused supplements."
  );
  return (
    <a
      href={`https://wa.me/${site.whatsapp}?text=${msg}`}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat on WhatsApp"
      className="fixed bottom-5 right-5 z-50 grid h-14 w-14 place-items-center rounded-full bg-[#25D366] shadow-xl shadow-green-600/40"
    >
      <span className="absolute inline-flex h-full w-full rounded-full bg-[#25D366] animate-pulseRing" />
      <svg
        viewBox="0 0 32 32"
        className="relative h-8 w-8 fill-white"
        aria-hidden="true"
      >
        <path d="M16 3C9 3 3.4 8.6 3.4 15.6c0 2.3.6 4.4 1.7 6.3L3 29l7.3-2c1.8 1 3.8 1.5 5.9 1.5 7 0 12.6-5.6 12.6-12.6S23 3 16 3zm0 22.8c-1.9 0-3.7-.5-5.3-1.5l-.4-.2-4.3 1.1 1.2-4.2-.3-.4a10 10 0 0 1-1.6-5.4C5 9.9 9.9 5 16 5s11 4.9 11 10.6-4.9 10.2-11 10.2zm5.7-7.7c-.3-.2-1.8-.9-2.1-1-.3-.1-.5-.2-.7.2s-.8 1-1 1.2c-.2.2-.4.2-.7.1-1.8-.9-3-1.6-4.2-3.6-.3-.5.3-.5.9-1.6.1-.2 0-.4 0-.6-.1-.2-.7-1.7-1-2.3-.3-.6-.5-.5-.7-.5h-.6c-.2 0-.6.1-.9.4-.3.4-1.2 1.2-1.2 2.9s1.2 3.4 1.4 3.6c.2.2 2.5 3.8 6 5.3 2.2.9 3 1 4.1.9.7-.1 1.8-.7 2.1-1.5.3-.7.3-1.4.2-1.5-.1-.2-.3-.3-.6-.4z" />
      </svg>
    </a>
  );
}
