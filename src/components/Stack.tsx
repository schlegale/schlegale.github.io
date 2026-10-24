const groups = [
  { title: "Frontend", items: ["React", "TypeScript", "JavaScript", "React Native", "Next.js", "Angular", "Tailwind CSS"] },
  { title: "Backend & APIs", items: ["Node.js", "REST APIs", "Microservices", "RabbitMQ", "FastAPI (Python)", "PHP", "Kotlin"] },
  { title: "Cloud & DevOps", items: ["AWS (Lambda, S3)", "Terraform", "Google Cloud", "Docker", "CI/CD", "Git"] },
  { title: "Data & Realtime", items: ["PostgreSQL", "DynamoDB", "Redis", "SpacetimeDB", "SQL"] }
];

export default function Stack() {
  return (
    <section id="stack" className="relative z-30 bg-[#F8F9FA] w-full py-20 border-t border-gray-100">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-ink mb-14 tracking-tight">Toolbox</h2>
        <div className="grid md:grid-cols-2 gap-6">
          {groups.map((g) => (
            <div key={g.title} className="bg-white rounded-3xl border border-gray-100 p-8">
              <h3 className="text-xs font-bold uppercase tracking-widest text-accent mb-5">{g.title}</h3>
              <div className="flex flex-wrap gap-2">
                {g.items.map((i) => (
                  <span key={i} className="rounded-full bg-ink/5 px-3.5 py-1.5 text-sm font-medium text-ink">
                    {i}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
