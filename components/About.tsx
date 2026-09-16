import { Award, Languages, GraduationCap } from "lucide-react";
import SectionHeading from "./SectionHeading";
import Reveal from "./Reveal";

export default function About() {
  return (
    <section id="about" className="mx-auto max-w-6xl px-5 md:px-8 py-16 md:py-24">
      <SectionHeading
        no="01"
        eyebrow="About"
        title="Precision with a human touch."
        desc="M.Sc Statistics student blending rigorous statistical training with business sense and leadership — from classrooms in Delhi to Bengaluru."
      />
      <div className="mt-10 grid gap-6 md:grid-cols-[1.2fr_0.8fr]">
        <Reveal>
          <div className="rounded-2xl border border-line bg-white p-7 md:p-9 shadow-[0_20px_60px_rgba(14,59,46,0.06)]">
            <p className="text-[16px] leading-relaxed text-ink/75">
              I&apos;m <strong className="text-pine">Niyati Sharma</strong>, currently pursuing{" "}
              <strong>M.Sc. Statistics at Pondicherry University</strong> after a{" "}
              <strong>B.Sc. (Hons.) Statistics from the University of Delhi</strong>.
              My work spans geospatial analysis, Markov modelling, search analytics
              and survey research — always grounded in sound statistical thinking.
            </p>
            <p className="mt-4 text-[16px] leading-relaxed text-ink/75">
              Beyond models and dashboards, I&apos;ve led as Class Representative and
              Student Council President, trained in Official Statistics with the
              Government of India, and built an AI agent that automates EDA.
            </p>
            <div className="mt-6 flex flex-wrap gap-2">
              {["Statistical Modelling", "Machine Learning", "Geospatial Analysis", "Dashboards & Storytelling", "Business Communication"].map((t) => (
                <span key={t} className="rounded-full border border-line bg-cream px-4 py-1.5 text-[13px] font-medium text-pine">
                  {t}
                </span>
              ))}
            </div>
          </div>
        </Reveal>
        <div className="flex flex-col gap-6">
          <Reveal delay={0.1}>
            <div className="rounded-2xl bg-pine-deep p-7 text-ivory">
              <Award className="text-gold-light" size={22} />
              <p className="font-display mt-3 text-xl">All-Rounder Award</p>
              <p className="mt-1 text-[14px] text-ivory/70">Dept. of Statistics, 2022–23 — for academics, leadership & contribution.</p>
            </div>
          </Reveal>
          <Reveal delay={0.18}>
            <div className="rounded-2xl border border-line bg-white p-7">
              <Languages className="text-gold-deep" size={22} />
              <p className="font-display mt-3 text-xl text-ink">English · Hindi</p>
              <p className="mt-1 text-[14px] text-ink/60">Comfortable presenting, counselling & collaborating.</p>
              <p className="mt-4 flex items-start gap-2 text-[14px] text-ink/65">
                <GraduationCap size={16} className="mt-0.5 text-pine" />
                Open to Data Analyst / Statistician / Research roles.
              </p>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
