"use client";
import { useEffect, useState } from "react";
import { Menu, X, Download } from "lucide-react";
import { profile } from "@/data/portfolio";

const links = [
  { href: "#about", label: "About" },
  { href: "#education", label: "Education" },
  { href: "#projects", label: "Projects" },
  { href: "#experience", label: "Experience" },
  { href: "#skills", label: "Skills" },
  { href: "#contact", label: "Contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 24);
    fn();
    window.addEventListener("scroll", fn);
    return () => window.removeEventListener("scroll", fn);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-40 transition-all ${
        scrolled
          ? "bg-ivory/90 backdrop-blur-md border-b border-line shadow-[0_8px_30px_rgba(14,59,46,0.06)]"
          : "bg-transparent"
      }`}
    >
      <nav className="mx-auto max-w-6xl px-5 md:px-8 h-[68px] flex items-center justify-between">
        <a href="#top" className="flex items-center gap-3">
          <span className="grid h-10 w-10 place-items-center rounded-full border border-gold bg-pine font-display text-[15px] tracking-wide text-ivory shadow-[0_0_0_3px_rgba(198,166,100,0.2)]">
            {profile.monogram}
          </span>
          <span className="hidden sm:block leading-tight">
            <span className="font-display block text-[17px] text-ink">
              {profile.name}
            </span>
            <span className="block text-[11px] uppercase tracking-[0.22em] text-ink/55">
              Statistics · Bengaluru
            </span>
          </span>
        </a>

        <div className="hidden lg:flex items-center gap-7 text-[14px] font-medium text-ink/75">
          {links.map((l) => (
            <a key={l.href} href={l.href} className="hover:text-pine transition-colors">
              {l.label}
            </a>
          ))}
          <a
            href="/cv"
            className="inline-flex items-center gap-2 rounded-full bg-pine px-5 py-2.5 text-ivory hover:bg-pine-soft transition-colors"
          >
            <Download size={15} /> CV
          </a>
        </div>

        <button
          className="lg:hidden p-2 text-pine"
          onClick={() => setOpen(!open)}
          aria-label="Menu"
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </nav>

      {open && (
        <div className="lg:hidden border-t border-line bg-ivory px-5 py-4 flex flex-col gap-3 text-[15px] font-medium">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className="py-1 text-ink/80"
            >
              {l.label}
            </a>
          ))}
          <a
            href="/cv"
            className="mt-2 inline-flex w-fit items-center gap-2 rounded-full bg-pine px-5 py-2.5 text-ivory"
          >
            <Download size={15} /> Download CV
          </a>
        </div>
      )}
    </header>
  );
}
