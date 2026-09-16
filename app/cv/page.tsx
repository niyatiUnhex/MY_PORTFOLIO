"use client";
import Link from "next/link";
import { profile, education, projects, experience, skillGroups, certifications, leadership } from "@/data/portfolio";

export default function CVPage() {
  return (
    <main className="mx-auto max-w-3xl bg-white px-8 py-12 print:py-0 text-[14px] leading-relaxed text-neutral-900">
      <div className="text-center border-b-2 border-neutral-900 pb-5">
        <h1 className="font-display text-4xl tracking-wide">{profile.name.toUpperCase()}</h1>
        <p className="mt-1">{profile.location}</p>
        <p className="mt-1">
          {profile.email} | {profile.linkedinLabel} | {profile.phone}
        </p>
      </div>

      <section className="mt-6">
        <h2 className="font-bold tracking-widest text-[15px] border-b border-neutral-400 pb-1">EDUCATION</h2>
        <ul className="mt-2 space-y-1.5">
          {education.map((e) => (
            <li key={e.degree}>
              <strong>{e.degree}</strong> — {e.school} · {e.period} · <strong>{e.result}</strong>
            </li>
          ))}
        </ul>
      </section>

      <section className="mt-6">
        <h2 className="font-bold tracking-widest text-[15px] border-b border-neutral-400 pb-1">PROJECTS</h2>
        <div className="mt-2 space-y-4">
          {projects.map((p) => (
            <div key={p.no}>
              <p><strong>{p.title}</strong> | {p.subtitle} | {p.date}</p>
              <p className="text-neutral-600">{p.tags.join(", ")}</p>
              <ul className="list-disc ml-5">
                {p.points.map((pt) => <li key={pt}>{pt}</li>)}
              </ul>
            </div>
          ))}
        </div>
      </section>

      <section className="mt-6">
        <h2 className="font-bold tracking-widest text-[15px] border-b border-neutral-400 pb-1">INTERNSHIPS / TRAININGS</h2>
        <div className="mt-2 space-y-4">
          {experience.map((e) => (
            <div key={e.role}>
              <p><strong>{e.role}</strong> | {e.org} · {e.period}</p>
              <ul className="list-disc ml-5">
                {e.points.map((pt) => <li key={pt}>{pt}</li>)}
              </ul>
            </div>
          ))}
        </div>
      </section>

      <section className="mt-6">
        <h2 className="font-bold tracking-widest text-[15px] border-b border-neutral-400 pb-1">CERTIFICATIONS</h2>
        <ul className="mt-2 list-disc ml-5">
          {certifications.map((c) => <li key={c.title}>{c.title} — {c.date}</li>)}
        </ul>
      </section>

      <section className="mt-6">
        <h2 className="font-bold tracking-widest text-[15px] border-b border-neutral-400 pb-1">POSITIONS OF RESPONSIBILITY</h2>
        <ul className="mt-2">
          {leadership.map((l) => <li key={l.title}><strong>{l.title}</strong> · {l.date}</li>)}
        </ul>
      </section>

      <section className="mt-6">
        <h2 className="font-bold tracking-widest text-[15px] border-b border-neutral-400 pb-1">SKILLS</h2>
        <div className="mt-2 space-y-1">
          {skillGroups.map((g) => (
            <p key={g.title}><strong>{g.title}:</strong> {g.skills.join(", ")}</p>
          ))}
          <p><strong>Languages:</strong> English, Hindi · <strong>Award:</strong> All-Rounder Award, Dept. of Statistics (2022–23)</p>
        </div>
      </section>

      <div className="mt-8 text-center print:hidden">
        <button onClick={() => window.print()} className="rounded-full bg-neutral-900 px-6 py-3 text-white">
          Print / Save as PDF
        </button>
        <Link href="/" className="ml-4 underline">Back to portfolio</Link>
      </div>
    </main>
  );
}
