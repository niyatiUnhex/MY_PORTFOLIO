"use client";
import { motion } from "framer-motion";
import { MapPin, Mail, Phone, ArrowDown, Sparkles } from "lucide-react";
import { profile, stats } from "@/data/portfolio";

export default function Hero() {
  return (
    <section id="top" className="relative overflow-hidden pt-[68px]">
      <div className="bg-blueprint absolute inset-0" />
      <div className="absolute -top-32 left-1/2 h-[420px] w-[720px] -translate-x-1/2 rounded-full bg-gold-light/40 blur-[120px]" />

      <div className="relative mx-auto max-w-6xl px-5 md:px-8 pt-14 md:pt-20 pb-12 text-center">
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="mx-auto grid h-20 w-20 place-items-center rounded-full border border-gold bg-ivory shadow-[0_0_0_6px_rgba(198,166,100,0.15),0_20px_50px_rgba(14,59,46,0.12)]"
        >
          <span className="font-display text-2xl text-pine">NS</span>
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.15 }}
          className="mt-6 inline-flex items-center gap-2 rounded-full border border-line bg-white/70 px-4 py-1.5 text-[12px] font-semibold uppercase tracking-[0.22em] text-pine"
        >
          <Sparkles size={13} className="text-gold-deep" />
          {profile.location} · M.Sc Statistics
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.25, duration: 0.8 }}
          className="font-display mx-auto mt-5 max-w-4xl text-5xl md:text-7xl leading-[1.02] tracking-tight text-ink"
        >
          Niyati <span className="italic font-light text-pine">Sharma</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="mt-4 text-[17px] md:text-lg font-medium text-ink/70"
        >
          {profile.role} — {profile.tagline}
        </motion.p>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="mx-auto mt-4 max-w-2xl text-[15px] leading-relaxed text-ink/60"
        >
          I turn data into decisions — from spatial statistics and time-series
          modelling to machine learning and elegant dashboards.
        </motion.p>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
          className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-3"
        >
          <a
            href="#projects"
            className="rounded-full bg-pine px-7 py-3.5 text-[15px] font-semibold text-ivory hover:bg-pine-soft transition-colors"
          >
            View Projects
          </a>
          <a
            href="#contact"
            className="rounded-full border border-pine/25 bg-white px-7 py-3.5 text-[15px] font-semibold text-pine hover:border-pine hover:bg-cream transition-colors"
          >
            Get in Touch
          </a>
        </motion.div>

        <div className="mt-6 flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-[13.5px] text-ink/60">
          <span className="inline-flex items-center gap-1.5">
            <MapPin size={14} className="text-gold-deep" /> {profile.location}
          </span>
          <a href={`mailto:${profile.email}`} className="inline-flex items-center gap-1.5 hover:text-pine">
            <Mail size={14} className="text-gold-deep" /> {profile.email}
          </a>
          <span className="inline-flex items-center gap-1.5">
            <Phone size={14} className="text-gold-deep" /> {profile.phone}
          </span>
        </div>

        <div className="mx-auto mt-10 grid max-w-4xl grid-cols-2 md:grid-cols-4 overflow-hidden rounded-2xl border border-line bg-white/80 backdrop-blur">
          {stats.map((s, i) => (
            <div
              key={s.label}
              className={`px-4 py-5 ${i !== 0 ? "border-l border-line" : ""} ${
                i >= 2 ? "max-md:border-t max-md:border-line max-md:[&:nth-child(3)]:border-l-0" : ""
              }`}
            >
              <p className="font-display text-3xl text-pine">{s.value}</p>
              <p className="mt-1 text-[11.5px] uppercase tracking-[0.16em] text-ink/55">
                {s.label}
              </p>
            </div>
          ))}
        </div>

        <a href="#about" className="mt-8 inline-flex items-center gap-2 text-[12px] uppercase tracking-[0.24em] text-ink/45 hover:text-pine">
          Scroll <ArrowDown size={14} className="animate-bounce" />
        </a>
      </div>
    </section>
  );
}
