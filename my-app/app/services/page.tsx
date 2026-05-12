import PhaseStep from "@/components/phasecard";

const phases = [
  {
    number: "01",
    title: "Tender",
    description: "Technical specifications and bid evaluation.",
  },
  {
    number: "02",
    title: "Design",
    description: "SCADA architecture and interface validation.",
  },
  {
    number: "03",
    title: "Procurement",
    description: "Supplier coordination and technical review.",
  },
  {
    number: "04",
    title: "Installation",
    description: "Progress monitoring and quality assurance.",
  },
  {
    number: "05",
    title: "Commissioning",
    description: "Testing coordination and documentation follow-up.",
  },
  {
    number: "06",
    title: "Operations",
    description: "Handover and long-term technical support.",
  },
];

export default function ServicesPage() {
  return (
    <main className="min-h-screen bg-[#0B1F3A] text-white">
      <section className="mx-auto max-w-6xl px-6 py-24">
        {/* INTRO */}
        <div className="max-w-2xl">
          <p className="mb-4 text-xs font-semibold uppercase tracking-[0.25em] text-[#00C8C8]">
            Services
          </p>

          <h1 className="text-3xl font-semibold leading-tight md:text-5xl">
            Independent SCADA support from design to operations.
          </h1>

          <p className="mt-5 max-w-xl text-base leading-7 text-[#B7C7D9]">
            SCADA Fortis supports offshore wind projects through a structured
            lifecycle approach, focused on clarity, coordination, and technical
            control.
          </p>
        </div>

        {/* PHASES */}
        <section className="mt-20">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-[#00C8C8]">
            Project lifecycle
          </p>

          <h2 className="mt-3 text-2xl font-semibold">
            Six phases. One continuous SCADA perspective.
          </h2>

          <div className="mt-12 grid gap-x-10 gap-y-14 md:grid-cols-2 lg:grid-cols-3">
            {phases.map((phase) => (
              <PhaseStep
                key={phase.number}
                number={phase.number}
                title={phase.title}
                description={phase.description}
              />
            ))}
          </div>
        </section>

        {/* POSITIONING */}
        <section className="mt-20 grid gap-10 border-t border-white/10 pt-12 md:grid-cols-2">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-[#00C8C8]">
              Positioning
            </p>

            <h2 className="mt-3 text-2xl font-semibold">
              No vendor to protect. No platform to sell.
            </h2>
          </div>

          <p className="leading-7 text-[#B7C7D9]">
            SCADA Fortis acts as an independent engineering partner for project
            owners. The objective is to keep control of the SCADA integration
            layer from the beginning of the project, rather than discovering
            integration issues too late.
          </p>
        </section>
      </section>
    </main>
  );
}