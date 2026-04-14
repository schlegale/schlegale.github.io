export default function Monorepo() {
  return (
    <section id="monorepo" className="relative z-30 bg-white w-full py-24 border-t border-gray-100">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div className="order-2 md:order-1">
            <div className="inline-block px-4 py-1.5 mb-6 text-xs font-bold tracking-widest text-[#615EFC] uppercase bg-[#615EFC]/10 rounded-full">Experimental Project</div>
            <h2 className="text-4xl md:text-5xl font-bold text-[#1A1A1A] mb-6 tracking-tight">
              Mastering the <span className="text-[#615EFC]">Alan Monorepo</span> Stack.
            </h2>
            <p className="text-lg text-gray-600 leading-relaxed mb-8">
              To prove I can contribute from day one, I built a high-performance geolocation demo using Alan's core architecture. This isn't just a side project—it's a deep dive into the <strong>Python/Flask + React Native + PostgreSQL</strong> ecosystem.
            </p>

            <ul className="space-y-4 mb-10">
              {[
                { title: "Monorepo Structure", desc: "Clean separation of apps/mobile and apps/backend." },
                { title: "Real-time Tracking", desc: "Native geolocation injection into high-FPS Map views." }
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-3">
                  <div className="mt-1.5 w-1.5 h-1.5 rounded-full bg-[#615EFC]" />
                  <p className="text-gray-700 text-sm">
                    <span className="font-bold">{item.title}:</span> {item.desc}
                  </p>
                </li>
              ))}
            </ul>

            <a href="https://github.com/schlegale/map-demo" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-3 bg-[#1A1A1A] text-white px-8 py-4 rounded-2xl font-bold hover:bg-[#333] transition-all shadow-xl hover:-translate-y-1">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" viewBox="0 0 16 16">
                <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z" />
              </svg>
              Explore the Code
            </a>
          </div>

          <div className="order-1 md:order-2 flex justify-center">
            <div className="relative">
              <div className="absolute -inset-4 bg-[#615EFC]/20 blur-3xl rounded-full opacity-50" />

              <div className="relative w-[250px] h-[520px] bg-[#1A1A1A] rounded-[2.5rem] p-2 shadow-2xl border-[6px] border-[#1A1A1A]">
                <div className="w-full h-full rounded-[2rem] overflow-hidden bg-white">
                  <img src="/work/map.png" alt="Map App Preview" className="w-full h-full object-cover" />
                </div>
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-24 h-6 bg-[#1A1A1A] rounded-b-xl" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
