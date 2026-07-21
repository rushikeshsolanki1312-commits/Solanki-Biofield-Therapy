"use client";

import { useEffect, useState } from "react";
import { site } from "@/lib/site";

const links = [
  { href: "#products", label: "Products" },
  { href: "#services", label: "Therapies" },
  { href: "#technology", label: "Technology" },
  { href: "#about", label: "About" },
  { href: "#contact", label: "Contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-brand/95 backdrop-blur-md shadow-lg py-2"
          : "bg-transparent py-4"
      }`}
    >
      <nav className="mx-auto max-w-7xl px-5 lg:px-8 flex items-center justify-between">
        <a href="#top" className="flex items-center gap-2.5 group">
          <span className="grid h-10 w-10 place-items-center rounded-xl bg-brand-gold text-brand-dark font-display text-xl font-extrabold shadow-md">
            S
          </span>
          <span className="leading-tight">
            <span className="block font-display text-lg font-bold text-white">
              Solanki
            </span>
            <span className="block text-[10px] uppercase tracking-[0.2em] text-brand-goldLight">
              Biofield Therapy
            </span>
          </span>
        </a>

        <ul className="hidden md:flex items-center gap-7">
          {links.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                className="text-sm font-medium text-white/90 hover:text-brand-goldLight transition-colors"
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-3">
          <a
            href={`tel:${site.phone}`}
            className="hidden sm:inline-flex items-center gap-2 rounded-full bg-brand-gold px-5 py-2.5 text-sm font-semibold text-brand-dark shadow-md hover:bg-brand-goldLight transition-colors"
          >
            📞 {site.phoneDisplay}
          </a>
          <button
            aria-label="Toggle menu"
            onClick={() => setOpen((v) => !v)}
            className="md:hidden grid h-10 w-10 place-items-center rounded-lg bg-white/15 text-white"
          >
            <span className="text-xl">{open ? "✕" : "☰"}</span>
          </button>
        </div>
      </nav>

      {open && (
        <div className="md:hidden mx-4 mt-2 rounded-2xl bg-brand-dark/95 backdrop-blur p-4 shadow-xl">
          <ul className="flex flex-col gap-1">
            {links.map((l) => (
              <li key={l.href}>
                <a
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className="block rounded-lg px-4 py-3 text-white/90 hover:bg-white/10"
                >
                  {l.label}
                </a>
              </li>
            ))}
            <li>
              <a
                href={`tel:${site.phone}`}
                className="mt-2 block rounded-lg bg-brand-gold px-4 py-3 text-center font-semibold text-brand-dark"
              >
                📞 Call {site.phoneDisplay}
              </a>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
}
