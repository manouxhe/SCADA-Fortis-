import Image from "next/image";
import AboutValue from "@/components/aboutvalue";

const values = [
  {
    number: "01",
    title: "Owner-side perspective",
    description:
      "SCADA Fortis works from the project owner’s point of view, with no platform or vendor interest behind the recommendation.",
  },
  {
    number: "02",
    title: "Integration first",
    description:
      "The focus is on the interfaces between systems, suppliers and project phases, where most late-stage SCADA issues appear.",
  },
  {
    number: "03",
    title: "Field-tested judgement",
    description:
      "The approach is based on real commissioning, site coordination and offshore wind delivery experience.",
  },
];
export default function AboutPage() {
  return (
    <main className="min-h-screen bg-[#0B1F3A] text-white">
      <section className="mx-auto max-w-6xl px-6 py-24">
        {/* HERO */}
        <div className="grid gap-12 lg:grid-cols-[1fr_0.9fr] lg:items-center">
          <div>
            <p className="mb-4 text-xs font-semibold uppercase tracking-[0.25em] text-[#00C8C8]">
              About Us
            </p>

            <h1 className="text-3xl font-semibold leading-tight md:text-5xl">
              Independent SCADA engineering for offshore wind projects.
            </h1>

            <p className="mt-6 max-w-xl text-base leading-7 text-[#B7C7D9]">
              SCADA Fortis supports offshore wind developers and project owners
              with independent expertise across SCADA integration, interfaces,
              commissioning, and technical delivery.
            </p>
          </div>

          <div className="rounded-[2rem] border border-white/10 bg-white/[0.04] p-4">
            <div className="relative aspect-[4/3] overflow-hidden rounded-[1.5rem] bg-[#122848]">
              <Image
                src="/nor5.jpg"
                alt="Offshore wind engineering environment"
                fill
                className="object-cover opacity-90"
              />
            </div>
          </div>
        </div>

        {/* WHO WE ARE */}
        <section className="mt-24 grid gap-10 border-t border-white/10 pt-14 lg:grid-cols-[0.8fr_1.2fr]">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-[#00C8C8]">
              Who we are
            </p>
            <h2 className="mt-3 text-2xl font-semibold">
              A focused engineering partner.
            </h2>
          </div>

          <div className="space-y-5 text-base leading-8 text-[#D7E2EE]">
            <p>
              SCADA Fortis is an engineering consultancy focused on the SCADA
              layer of offshore wind projects. The company supports clients by
              bringing technical clarity where several systems, suppliers, and
              interfaces must work together.
            </p>

            <p>
              Its role is not to sell a platform or protect a vendor. Its role
              is to provide independent engineering judgement and help project
              owners keep control of their integration scope.
            </p>
          </div>
        </section>

        {/* VALUES */}
        <section className="mt-20">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-[#00C8C8]">
            Mission and values
          </p>

          <h2 className="mt-3 text-2xl font-semibold">
            Built around independence, expertise, and trust.
          </h2>

          <div className="mt-10 grid gap-10 md:grid-cols-3">
  {values.map((value) => (
        <AboutValue
          key={value.number}
          number={value.number}
          title={value.title}
          description={value.description}
        />
      ))}
    </div>
        </section>

        {/* IMAGE + TEXT */}
        <section className="mt-24 grid gap-12 lg:grid-cols-[0.9fr_1fr] lg:items-center">
          <div className="rounded-[2rem] border border-white/10 bg-white/[0.04] p-4">
            <div className="relative aspect-[4/3] overflow-hidden rounded-[1.5rem] bg-[#122848]">
              <Image
                src="/nor3.jpg"
                alt="Technical offshore wind infrastructure"
                fill
                className="object-cover opacity-90"
              />
            </div>
          </div>

          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-[#00C8C8]">
              Why SCADA Fortis
            </p>

            <h2 className="mt-3 text-2xl font-semibold">
              Because the integration layer needs an owner.
            </h2>

            <p className="mt-5 leading-7 text-[#B7C7D9]">
              Offshore wind projects involve multiple contractors, control
              systems, telecom networks, cybersecurity requirements, and
              commissioning activities. Without clear ownership, SCADA
              integration issues can appear too late in the project.
            </p>

            <p className="mt-5 leading-7 text-[#B7C7D9]">
              SCADA Fortis helps clients identify these risks earlier and
              manage the technical interfaces with an independent perspective.
            </p>
          </div>
        </section>
      </section>
    </main>
  );
}