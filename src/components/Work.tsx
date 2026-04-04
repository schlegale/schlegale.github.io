const data = [
  {
    name: "WELBO",
    url: "https://www.welbo.eu/en",
    image: "/work/welbo.png",
    desc: "Social robotics platform. Contributed to real-time dashboards and the Android application."
  },
  {
    name: "Kenjo",
    url: "https://www.kenjo.io/es",
    image: "/work/kenjo.png",
    desc: "All-in-one HR Software designed to manage and empower frontline workforces."
  },
  {
    name: "bonprix",
    url: "https://www.bonprix.de/",
    image: "/work/bonprix.png",
    desc: "High-traffic international fashion e-commerce platform processing thousands of requests."
  },
  {
    name: "Global Fund for Coral Reefs",
    url: "https://globalfundcoralreefs.org/",
    image: "/work/coral.png",
    desc: "Platform for the UN-backed initiative focused on coral reef conservation."
  },
  {
    name: "SEI",
    url: "https://www.sei.com/",
    image: "/work/sei.png",
    desc: "Global provider of wealth management and investment processing solutions."
  },
  {
    name: "Ruby's Rainbow",
    url: "https://rubysrainbow.org/",
    image: "/work/ruby.png",
    desc: "Non-profit platform supporting individuals with Down syndrome."
  }
];

export default function Portfolio() {
  return (
    <section id="portfolio" className="relative z-30 bg-[#F8F9FA] w-full py-20 border-t border-gray-100">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-[#1A1A1A] tracking-tight mb-4">Platforms I've Contributed To</h2>
          <p className="text-gray-500 text-lg max-w-2xl mx-auto">From high-traffic e-commerce to social robotics and global tech initiatives.</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {data.map((item, index) => (
            <a key={index} href={item.url} target="_blank" rel="noopener noreferrer" className="group flex flex-col bg-white rounded-2xl border border-gray-200 overflow-hidden hover:shadow-2xl transition-all duration-300 hover:-translate-y-1">
              {/* Local Image Preview */}
              <div className="relative w-full h-48 bg-gray-100 overflow-hidden border-b border-gray-100">
                <div className="absolute inset-0 bg-black/5 group-hover:bg-transparent transition-colors z-10" />
                <img src={item.image} alt={`Preview of ${item.name}`} className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500" loading="lazy" />
              </div>

              <div className="p-6 flex flex-col flex-grow">
                <div className="flex items-center justify-between mb-3">
                  <h3 className="text-xl font-bold text-[#1A1A1A]">{item.name}</h3>
                  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-gray-400 group-hover:text-[#615EFC] transition-colors">
                    <line x1="7" y1="17" x2="17" y2="7"></line>
                    <polyline points="7 7 17 7 17 17"></polyline>
                  </svg>
                </div>
                <p className="text-gray-600 text-sm leading-relaxed flex-grow">{item.desc}</p>
                <div className="mt-6 text-xs font-semibold text-[#615EFC] uppercase tracking-wider">Visit Website &rarr;</div>
              </div>
            </a>
          ))}
        </div>

        <div className="text-center mt-16">
          <p className="text-gray-400 text-sm mb-4">Want the standard technical timeline?</p>
          <a href="/Alejo_Schlegel_Resume.pdf" download="Alejo_Schlegel_Resume.pdf" className="text-[#615EFC] font-semibold hover:underline">
            Download my Resume instead.
          </a>
        </div>
      </div>
    </section>
  );
}
