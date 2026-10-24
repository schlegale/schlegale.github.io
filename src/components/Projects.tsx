import { profile } from "../data/profile";

export default function Projects() {
  return (
    <section id="projects" className="relative z-30 bg-white w-full py-24 border-t border-gray-100">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-20">
          <h2 className="text-3xl md:text-4xl font-bold text-ink tracking-tight mb-4">Games & side projects</h2>
          <p className="text-gray-500 text-lg max-w-2xl mx-auto">I studied video game programming, and I never stopped building things for fun.</p>
        </div>

        {/* GAME */}
        <div className="grid md:grid-cols-2 gap-16 items-center mb-28">
          <div>
            <div className="inline-block px-4 py-1.5 mb-6 text-xs font-bold tracking-widest text-accent uppercase bg-accent/10 rounded-full">Playable now</div>
            <h3 className="text-4xl md:text-5xl font-bold text-ink mb-6 tracking-tight">
              KERKER<span className="text-accent">.</span>
            </h3>
            <p className="text-lg text-gray-600 leading-relaxed mb-6">A zero-reflex, turn-based tactics game: chess meets slapstick. Built with Godot 4 and exported to WebAssembly, so it runs in your browser with no downloads.</p>
            <div className="flex flex-wrap gap-2 mb-10">
              {["Godot 4", "GDScript", "WebAssembly", "Vercel"].map((t) => (
                <span key={t} className="rounded-full bg-ink/5 px-3.5 py-1.5 text-sm font-medium text-ink">
                  {t}
                </span>
              ))}
            </div>
            <a href={profile.gameUrl} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-3 bg-accent text-white px-8 py-4 rounded-2xl font-bold hover:bg-accent-dark transition-all shadow-xl hover:-translate-y-1">
              🎮 Play in your browser
            </a>
          </div>

          <a href={profile.gameUrl} target="_blank" rel="noopener noreferrer" className="group relative block overflow-hidden rounded-3xl bg-ink aspect-[4/3] shadow-2xl">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,#6c4dff55,transparent_55%),radial-gradient(circle_at_80%_80%,#10b98133,transparent_50%)]" />
            <div className="absolute inset-0 grid grid-cols-8 grid-rows-8 opacity-20">
              {Array.from({ length: 64 }).map((_, i) => (
                <div key={i} className={`${(Math.floor(i / 8) + i) % 2 === 0 ? "bg-white/10" : ""}`} />
              ))}
            </div>
            <div className="relative flex h-full flex-col items-center justify-center text-center">
              <span className="text-6xl md:text-7xl font-extrabold tracking-[0.2em] text-white">KERKER</span>
              <span className="mt-4 text-sm font-semibold uppercase tracking-widest text-gray-300 transition group-hover:text-white">Press play →</span>
            </div>
          </a>
        </div>

        {/* MAP DEMO */}
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div className="order-2 md:order-1">
            <div className="inline-block px-4 py-1.5 mb-6 text-xs font-bold tracking-widest text-accent uppercase bg-accent/10 rounded-full">Experimental project</div>
            <h3 className="text-4xl md:text-5xl font-bold text-ink mb-6 tracking-tight">
              Real-time <span className="text-accent">geolocation</span> demo.
            </h3>
            <p className="text-lg text-gray-600 leading-relaxed mb-8">
              A monorepo experiment across the <strong>Python/Flask + React Native + PostgreSQL</strong> stack, built to explore native maps and live location tracking on mobile.
            </p>

            <ul className="space-y-4 mb-10">
              {[
                { title: "Monorepo structure", desc: "Clean separation of apps/mobile and apps/backend." },
                { title: "Real-time tracking", desc: "Native geolocation injection into high-FPS map views." }
              ].map((item) => (
                <li key={item.title} className="flex items-start gap-3">
                  <div className="mt-1.5 w-1.5 h-1.5 rounded-full bg-accent" />
                  <p className="text-gray-700 text-sm">
                    <span className="font-bold">{item.title}:</span> {item.desc}
                  </p>
                </li>
              ))}
            </ul>

            <a href={profile.mapDemoUrl} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-3 bg-ink text-white px-8 py-4 rounded-2xl font-bold hover:bg-[#333] transition-all shadow-xl hover:-translate-y-1">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" viewBox="0 0 16 16">
                <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z" />
              </svg>
              Explore the code
            </a>
          </div>

          <div className="order-1 md:order-2 flex justify-center">
            <div className="relative">
              <div className="absolute -inset-4 bg-accent/20 blur-3xl rounded-full opacity-50" />
              <div className="relative w-[250px] h-[520px] bg-ink rounded-[2.5rem] p-2 shadow-2xl border-[6px] border-ink">
                <div className="w-full h-full rounded-[2rem] overflow-hidden bg-white">
                  <img src="/work/map.png" alt="Map app preview" className="w-full h-full object-cover" />
                </div>
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-24 h-6 bg-ink rounded-b-xl" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
