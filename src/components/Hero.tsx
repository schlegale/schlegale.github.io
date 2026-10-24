import { profile } from "../data/profile";

const tags = ["React", "TypeScript", "Node.js", "AWS", "React Native"];

export default function Hero() {
  return (
    <section id="top" className="relative w-full pt-28 pb-20 flex flex-col items-center justify-center overflow-hidden">
      <div className="pointer-events-none absolute -top-24 left-1/2 h-[420px] w-[720px] -translate-x-1/2 rounded-full bg-accent/10 blur-3xl" />

      <div className="relative z-20 flex flex-col items-center px-4 text-center max-w-5xl">
        <div className="mb-8 inline-flex items-center gap-2 rounded-full border border-gray-200 bg-white px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-gray-500">
          <span className="h-2 w-2 rounded-full bg-emerald-500" />
          Madrid, Spain · Remote across the EU
        </div>

        <h1 className="text-[44px] md:text-[76px] font-extrabold text-ink tracking-tight leading-[1] mb-8">
          Senior Software Developer building <span className="text-accent">products people actually use.</span>
        </h1>

        <p className="text-lg md:text-2xl text-gray-600 max-w-3xl font-medium leading-relaxed">
          4+ years shipping production software with React, TypeScript, Node.js and AWS — from customer-facing e-commerce to robotics dashboards. Off the clock, I make video games.
        </p>

        <div className="mt-8 flex flex-wrap justify-center gap-2">
          {tags.map((t) => (
            <span key={t} className="rounded-full bg-ink/5 px-4 py-1.5 text-sm font-semibold text-ink">
              {t}
            </span>
          ))}
        </div>

        <div className="mt-10 flex flex-wrap justify-center gap-4">
          <a href={profile.resume} download={profile.resumeFileName} className="rounded-full bg-accent px-8 py-3.5 text-[16px] font-semibold text-white shadow-lg transition hover:bg-accent-dark hover:scale-105 active:scale-95">
            Download CV
          </a>
          <a href={`mailto:${profile.email}`} className="rounded-full border border-gray-300 bg-white px-8 py-3.5 text-[16px] font-semibold text-ink transition hover:border-ink hover:scale-105 active:scale-95">
            Get in touch
          </a>
        </div>
      </div>
    </section>
  );
}
