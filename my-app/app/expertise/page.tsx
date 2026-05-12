import ExpertiseBlock from "@/components/expertiseblock";

const expertiseAreas = [
  {
    image : "/icon1.png",
    title: "SCADA Systems",
    description:
      "Expertise in SCADA architecture, supervision, signal exchange, and integration across offshore wind assets.",
    points: [
      "SCADA architecture review",
      "Signal lists and data mapping",
      "HMI and control room interfaces",
    ],
  },
  {
    image : "/icon2.png",
    title: "Network Infrastructure",
    description:
      "Support for the technical backbone that allows offshore systems, substations, and control rooms to communicate reliably.",
    points: [
      "OT network architecture",
      "Redundancy and availability",
      "Interface with substations and control systems",
    ],
  },
  {
    image : "/icon3.png",
    title: "Telecommunications",
    description:
      "Telecom expertise for offshore wind projects where communication links are critical for monitoring, control, and operations.",
    points: [
      "Fibre and offshore communication systems",
      "Control room connectivity",
      "Vendor interface coordination",
    ],
  },
  {
    image : "/icon4.png",
    title: "Cybersecurity & Compliance",
    description:
      "Support for cybersecurity requirements and compliance-oriented engineering in critical offshore wind environments.",
    points: [
      "IEC 62443 awareness",
      "NIS2-related considerations",
      "OT security and segmentation",
    ],
  },
  {
    image : "/icon4.png",
    title: "Commissioning Support",
    description:
      "Technical support during testing and commissioning to reduce late-stage integration issues.",
    points: [
      "FAT / SAT / SIT coordination",
      "Test documentation review",
      "Punch list follow-up",
    ],
  },
  {
    image : "/icon5.png",
    title: "Interface Management",
    description:
      "Coordination between suppliers, contractors, and project teams to keep the SCADA integration layer under control.",
    points: [
      "Interface registers",
      "Supplier coordination",
      "Technical issue tracking",
    ],
  },
];

export default function ExpertisePage() {
  return (
    <main className="min-h-screen bg-[#0B1F3A] text-white">
      <section className="mx-auto max-w-6xl px-6 py-24">
        {/* HERO */}
        <div className="max-w-2xl">
          <p className="mb-4 text-xs font-semibold uppercase tracking-[0.25em] text-[#00C8C8]">
            Expertise
          </p>

          <h1 className="text-3xl font-semibold leading-tight md:text-5xl">
            Technical expertise for offshore wind SCADA delivery.
          </h1>

          <p className="mt-5 max-w-xl text-base leading-7 text-[#B7C7D9]">
            SCADA Fortis brings independent expertise across the systems,
            networks, interfaces, and compliance topics that shape successful
            offshore wind projects.
          </p>
        </div>

        {/* EXPERTISE GRID */}
        <section className="mt-20">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-[#00C8C8]">
            Technical capabilities
          </p>

          <h2 className="mt-3 text-2xl font-semibold">
            Focused expertise where project risk usually appears.
          </h2>

          <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {expertiseAreas.map((area) => (
              <ExpertiseBlock
                key={area.title}
                image={area.image}
                title={area.title}
                description={area.description}
                points={area.points}
              />
            ))}
          </div>
        </section>

        {/* BOTTOM SECTION */}
        <section className="mt-20 grid gap-10 border-t border-white/10 pt-12 md:grid-cols-2">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-[#00C8C8]">
              Why it matters
            </p>

            <h2 className="mt-3 text-2xl font-semibold">
              SCADA is not only a system. It's an integration layer.
            </h2>
          </div>

          <p className="leading-7 text-[#B7C7D9]">
            Offshore wind projects involve several suppliers, technical
            interfaces, and delivery phases. SCADA Fortis focuses on keeping
            this integration layer visible, controlled, and aligned with the
            project owner’s interests.
          </p>
        </section>
      </section>
    </main>
  );
}