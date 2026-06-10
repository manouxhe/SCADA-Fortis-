const resources = [
  {
    category: "Tool",
    title: "Signal Conflict Mapper",
    description:
      "Free browser tool to detect missing signals, type mismatches, direction conflicts and IEC 61850 violations between two SCADA interfaces. No upload, no login.",
    type: "Tool",
    href: "https://abdelscadafortis.github.io/signal-mapper/",
  },
  {
    category: "Technical note",
    title: "SCADA integration in offshore wind projects",
    description:
      "A short overview of why SCADA integration should be considered from the early project phases.",
    type: "PDF",
    comingSoon: true,
  },
  {
    category: "Insight",
    title: "Why interface management matters",
    description:
      "How unclear interfaces between suppliers can create delays during commissioning.",
    type: "Article",
    comingSoon: true,
  },
];
export default function ResourcesPage() {
  return (
    <main className="min-h-screen bg-[#0B1F3A] px-6 py-20 text-white">
      <section className="mx-auto max-w-7xl">
        <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-[#00C8C8]">
          Resources
        </p>

        <h1 className="text-3xl font-semibold md:text-4xl">
          Technical resources
        </h1>

        <p className="mt-5 max-w-3xl text-[#B7C7D9]">
          Free tools and technical resources for offshore wind SCADA teams.
        </p>

        <div className="mt-10 grid gap-6 md:grid-cols-2">
          {resources.map((resource) => (
            <div
              key={resource.title}
              className="rounded-2xl border border-white/10 bg-[#00233A] p-6"
            >
              <p className="text-sm uppercase tracking-[0.18em] text-[#00C8C8]">
                {resource.category}
              </p>

              <h2 className="mt-3 text-xl font-semibold">{resource.title}</h2>

              <p className="mt-3 text-sm leading-6 text-[#B7C7D9]">
                {resource.description}
              </p>

              {resource.href ? (
                <a
                  href={resource.href}
                  className="mt-5 inline-block text-sm font-semibold text-[#00C8C8] hover:text-white"
                >
                  Open {resource.type}
                </a>
              ) : (
                <p className="mt-5 text-sm text-slate-400">Coming soon</p>
              )}
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}