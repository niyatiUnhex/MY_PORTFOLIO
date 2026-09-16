import { profile } from "@/data/portfolio";

export default function Footer() {
  return (
    <footer className="bg-pine-deep text-ivory">
      <div className="mx-auto max-w-6xl px-5 md:px-8 py-10 flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-3">
          <span className="grid h-9 w-9 place-items-center rounded-full border border-gold font-display text-[13px]">
            {profile.monogram}
          </span>
          <p className="text-[14px] text-ivory/70">
            © 2026 {profile.name} · Crafted with rigour in {profile.location}
          </p>
        </div>
        <div className="flex gap-6 text-[13.5px] text-ivory/65">
          <a href="#about" className="hover:text-gold-light">About</a>
          <a href="#projects" className="hover:text-gold-light">Projects</a>
          <a href="#contact" className="hover:text-gold-light">Contact</a>
          <a href="/cv" className="hover:text-gold-light">CV</a>
        </div>
      </div>
    </footer>
  );
}
