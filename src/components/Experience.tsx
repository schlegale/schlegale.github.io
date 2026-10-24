const jobs = [
  {
    role: "Frontend / Full Stack Engineer",
    company: "Bonprix (Otto Group)",
    period: "Feb 2025 – Present",
    place: "Madrid, Spain · Remote",
    bullets: [
      "Building modular UI components in React and TypeScript for core customer-facing e-commerce applications.",
      "Evaluating and implementing real-time state synchronization across active clients with SpacetimeDB.",
      "Managing cloud environments and deployment workflows with AWS and Terraform.",
      "Working with cross-functional teams to keep component patterns scalable and the architecture clean."
    ]
  },
  {
    role: "Software Developer",
    company: "Terra",
    period: "May 2024 – Feb 2025",
    place: "Remote",
    bullets: [
      "Engineered and deployed web platforms for global enterprise clients and international initiatives, including SEI (fintech) and the UN-backed Global Fund for Coral Reefs.",
      "Focused on Core Web Vitals, asset optimization and query tuning for fast, high-visibility public portals."
    ]
  },
  {
    role: "Software Engineer (Robotics Platform)",
    company: "WELBO",
    period: "Apr 2023 – May 2024",
    place: "Amsterdam, Netherlands · Remote",
    bullets: [
      "Developed cloud-based robot control interfaces in React and supported microservices built on RabbitMQ and Feathers.js.",
      "Contributed to operations dashboards for monitoring fleet activity, device connectivity and logs.",
      "Worked on native Android utilities in Kotlin and maintained chatbot service integrations on Google Cloud."
    ]
  },
  {
    role: "Full Stack JavaScript Developer",
    company: "Kenjo",
    period: "Jun 2022 – Apr 2023",
    place: "Madrid, Spain",
    bullets: [
      "Built features across Angular and React Native apps, plus internal tooling for team workflows.",
      "Implemented backend data import scripts and cloud storage utilities on AWS (S3, Lambda)."
    ]
  }
];

export default function Experience() {
  return (
    <section id="experience" className="relative z-30 bg-white w-full py-20 border-t border-gray-100">
      <div className="max-w-4xl mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-ink mb-14 tracking-tight">Experience</h2>

        <div className="relative border-l-2 border-gray-100 pl-8 space-y-12">
          {jobs.map((j) => (
            <article key={j.company} className="relative">
              <span className="absolute -left-[41px] top-1.5 h-4 w-4 rounded-full border-4 border-white bg-accent shadow" />
              <div className="flex flex-wrap items-baseline justify-between gap-x-4">
                <h3 className="text-xl font-bold text-ink">{j.role}</h3>
                <span className="text-sm font-semibold text-gray-400">{j.period}</span>
              </div>
              <p className="mt-1 text-sm font-semibold text-accent">
                {j.company} <span className="font-normal text-gray-400">· {j.place}</span>
              </p>
              <ul className="mt-4 space-y-2">
                {j.bullets.map((b) => (
                  <li key={b} className="flex gap-3 text-sm leading-relaxed text-gray-600">
                    <span className="mt-2 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-gray-300" />
                    {b}
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
