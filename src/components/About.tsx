const cards = [
  {
    icon: "🚀",
    title: "I own it end to end",
    text: "From React components to AWS and Terraform deployments, I take features from idea to production and care about what happens after they ship."
  },
  {
    icon: "🧼",
    title: "Clean, maintainable code",
    text: "I favour clear system design, modular component patterns and code the next person can read. Elegant beats clever."
  },
  {
    icon: "🌱",
    title: "I learn any stack fast",
    text: "When I joined WELBO I had no Kotlin experience. I learned it on the job and shipped Android support utilities. A stack is a tool, not an identity."
  },
  {
    icon: "🗣️",
    title: "I communicate clearly",
    text: "Written-first and async by default: clear docs, direct feedback and decisions explained, so teams move fast without needing more meetings."
  },
  {
    icon: "🤝",
    title: "Product mindset",
    text: "I work side by side with product, design and data so the technical choices serve the user and the business, not just the ticket."
  },
  {
    icon: "🤖",
    title: "I build with AI",
    text: "I use AI tools in my daily workflow to prototype, debug and review faster, and I've worked on chatbot integrations in production."
  }
];

export default function About() {
  return (
    <section id="about" className="relative z-30 bg-white w-full py-20">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-ink mb-4 tracking-tight">How I work</h2>
        <p className="text-center text-gray-500 text-lg max-w-2xl mx-auto mb-14">Full stack by trade, product-minded by habit.</p>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {cards.map((c) => (
            <div key={c.title} className="bg-[#F8F9FA] p-8 rounded-3xl border border-gray-100 hover:shadow-lg transition-shadow">
              <div className="text-4xl mb-4">{c.icon}</div>
              <h3 className="text-xl font-bold text-ink mb-3">{c.title}</h3>
              <p className="text-gray-600 leading-relaxed text-sm">{c.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
