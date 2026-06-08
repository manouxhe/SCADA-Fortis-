import ResourceCard from "@/components/ResourceCard";

const resources = [
  {
    category: "Technical note",
    title: "SCADA integration in offshore wind projects",
    description:
      "A short overview of why SCADA integration should be considered from the early project phases.",
    type: "PDF",
  },
  {
    category: "Insight",
    title: "Why interface management matters",
    description:
      "How unclear interfaces between suppliers can create delays during commissioning.",
    type: "Article",
  },
  {
    category: "Cybersecurity",
    title: "IEC 62443 and offshore control systems",
    description:
      "Key cybersecurity considerations for OT systems in offshore wind environments.",
    type: "Guide",
  },
  {
    category: "Commissioning",
    title: "FAT, SAT and SIT explained",
    description:
      "A simple breakdown of the main testing stages used before handover.",
    type: "Explainer",
  },
  {
    category: "Download",
    title: "Company profile",
    description:
      "A downloadable company profile presenting SCADA Fortis, its services, and expertise.",
    type: "PDF",
  },
  {
    category: "Tool",
    title: "Project readiness checklist",
    description:
      "A practical checklist to identify SCADA risks before commissioning starts.",
    type: "Checklist",
  },
];

export default function ResourcesPage() {
  return (
    <main className="min-h-screen bg-[#0B1F3A]  text-white">
      <section className="mx-auto max-w-6xl px-6 py-24">
        {/* HERO */}
        <div className="max-w-2xl">
          <p className="mb-4 text-xs font-semibold uppercase tracking-[0.25em] text-[#00C8C8]">
            Resources
          </p>

          <h1 className="text-3xl font-semibold leading-tight md:text-5xl">
            Technical resources for better SCADA decisions.
          </h1>

          <p className="mt-5 max-w-xl text-base leading-7 text-[#B7C7D9]">
            A collection of insights, technical notes, and practical documents
            to support offshore wind project teams.
          </p>
        </div>

        {/* FEATURED */}
        <section className="mt-20 rounded-[2rem] border border-[#00C8C8]/30 bg-[#00233A] p-8 md:p-10">
          <div className="grid gap-10 md:grid-cols-[0.9fr_1.1fr] md:items-center">
            <div className="rounded-[1.5rem] border border-white/10 bg-[#001828] p-8">
              <p className="text-xs font-semibold uppercase tracking-[0.25em] text-[#00C8C8]">
                Featured resource
              </p>

              <h2 className="mt-5 text-3xl font-semibold">
                Offshore SCADA readiness checklist
              </h2>

              <p className="mt-5 leading-7 text-[#B7C7D9]">
                A practical checklist designed to help teams identify missing
                interfaces, unclear responsibilities, and late-stage technical
                risks before commissioning.
              </p>

              <button className="mt-8 rounded-full bg-[#00A0A0] px-6 py-3 text-sm font-semibold text-[#001828] transition hover:bg-[#00C8C8]">
                Download checklist
              </button>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              {[
                "Interface clarity",
                "Signal registers",
                "Testing readiness",
                "Cybersecurity scope",
              ].map((item) => (
                <div
                  key={item}
                  className="rounded-2xl border border-white/10 bg-[#001828]/70 p-5"
                >
                  <div className="mb-5 h-10 w-10 rounded-full border border-[#00C8C8]/30" />
                  <p className="font-semibold text-white">{item}</p>
                  <p className="mt-2 text-sm leading-6 text-[#B7C7D9]">
                    Key point to review before project delivery pressure
                    increases.
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* RESOURCE GRID */}
        <section className="mt-20">
          <div className="mb-10">
            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-[#00C8C8]">
              Library
            </p>
            <h2 className="mt-3 text-2xl font-semibold">
              Explore resources by topic.
            </h2>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {resources.map((resource) => (
              <ResourceCard
                key={resource.title}
                category={resource.category}
                title={resource.title}
                description={resource.description}
                type={resource.type}
              />
            ))}
          </div>
        </section>

        {/* BOTTOM CTA */}
        <section className="mt-20 rounded-[2rem] border border-white/10 bg-[#003057]/40 px-8 py-14 text-center">
          <p className="mb-4 text-xs font-semibold uppercase tracking-[0.25em] text-[#00C8C8]">
            Need a specific document?
          </p>

          <h2 className="text-3xl font-semibold">
            Request a technical resource or company profile.
          </h2>

          <p className="mx-auto mt-5 max-w-xl leading-7 text-[#B7C7D9]">
            If a project team needs a specific document, SCADA Fortis can
            provide the relevant information through a direct request.
          </p>
        </section>
      </section>
    </main>
  );
}
