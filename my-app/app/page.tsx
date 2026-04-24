import Link from "next/link";
import Image from "next/image";

export default function HomePage() {
  return (
    <main className="bg-[#001828] text-white">

    <section className="relative overflow-hidden">
      <div className="mx-auto grid min-h-[85vh] max-w-7xl items-center gap-12 px-6 py-20 lg:grid-cols-2 lg:px-8">
        
        {/* intro */}
        <div className="max-w-2xl">
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.22em] text-[#00C8C8]">
            Independent Owner’s Engineer
          </p>

          <h1 className="max-w-2xl text-3xl font-semibold leading-tight text-white md:text-6xl">
            Nobody owns your SCADA integration layer
            <span className="mt-2 block text-xl text-[#00C8C8] md:text-3xl">
              We do, from day one of design to final commissioning.
            </span>
          </h1>

          <p className="mt-6 max-w-3xl text-base leading-7 text-[#B7C7D9] md:text-lg">
            SCADA Fortis supports offshore wind developers with an independent
            voice across integration, interfaces, commissioning, and delivery.
            No vendor to protect. No platform to sell.
          </p>

          <div className="mt-8 flex flex-wrap gap-4">
            <Link
              href="/contact"
              className="rounded-full bg-[#00A0A0] px-6 py-3 text-sm font-semibold text-[#001828] transition hover:bg-[#00C8C8]"
            >
              Request a Consultation
            </Link>

            <Link
              href="/services"
              className="rounded-full border border-[#00A0A0] px-6 py-3 text-sm font-semibold text-white transition hover:bg-[#00A0A0]/10"
            >
              Services
            </Link>
          </div>
        </div>

        {/*  image */}
        <div className="relative">
          <div className="rounded-[2rem] border border-white/10 bg-[#003057]/30 p-4 shadow-2xl shadow-black/30">
            <div className="relative aspect-[4/3] overflow-hidden rounded-[1.5rem]">
              <Image
                src="/noright1.jpg"
                alt="Offshore wind engineering visual"
                fill
                className="object-cover"
                priority
              />
            </div>
          </div>

          <div className="absolute -bottom-6 -left-6 hidden rounded-2xl border border-white/10 bg-[#00233A] p-4 lg:block">
            <p className="text-xs uppercase tracking-[0.2em] text-[#7A9BB5]">
              Focus
            </p>
            <p className="mt-2 text-sm font-semibold text-white">
              SCADA integration
            </p>
            <p className="text-sm font-semibold text-white">IEC 62443</p>
            <p className="text-sm font-semibold text-white">
              Offshore commissioning
            </p>
          </div>
        </div>
      </div>
    </section>
      {/* base*/}
      <section className="border-y border-white/10 bg-[#00233A]">
        <div className="mx-auto grid max-w-7xl gap-6 px-6 py-10 md:grid-cols-2 xl:grid-cols-5 xl:px-8">
          <div>
            <p className="text-3xl font-semibold text-[#00C8C8]">10+</p>
            <p className="mt-2 text-sm text-[#B7C7D9]">
              Projects across offshore wind and HVDC environments
            </p>
          </div>

          <div>
            <p className="text-3xl font-semibold text-[#00C8C8]">3+ GW</p>
            <p className="mt-2 text-sm text-[#B7C7D9]">
              Experience across complex project delivery scopes
            </p>
          </div>

          <div>
            <p className="text-3xl font-semibold text-[#00C8C8]">Multi-country</p>
            <p className="mt-2 text-sm text-[#B7C7D9]">
              Offshore project exposure across several European markets
            </p>
          </div>

          <div>
            <p className="text-3xl font-semibold text-[#00C8C8]">SCADA / Telecoms</p>
            <p className="mt-2 text-sm text-[#B7C7D9]">
              Integration, networking, cybersecurity, and commissioning
            </p>
          </div>

          <div>
            <p className="text-3xl font-semibold text-[#00C8C8]">IEC 62443</p>
            <p className="mt-2 text-sm text-[#B7C7D9]">
              Compliance-oriented engineering approach for critical systems
            </p>
          </div>
        </div>
      </section>

      {/* la solution */}
      <section className="mx-auto grid max-w-7xl gap-10 px-6 py-20 lg:grid-cols-2 lg:px-8">
        <div className="rounded-[2rem] border border-white/10 bg-[#00233A] p-8">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#00C8C8]">
            The challenge
          </p>
          <h2 className="mt-4 text-3xl font-semibold text-white">
            Offshore SCADA gaps are rarely visible until delivery is at risk.
          </h2>
          <ul className="mt-6 space-y-4 text-[#B7C7D9]">
            <li>• No single owner of the integration layer</li>
            <li>• Interface failures discovered too late</li>
            <li>• Vendor interests misaligned with project interests</li>
            <li>• Commissioning pressure creates reactive decisions</li>
          </ul>
        </div>

        <div className="rounded-[2rem] border border-white/10 bg-[#003057]/40 p-8">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#00C8C8]">
            Our solution
          </p>
          <h2 className="mt-4 text-3xl font-semibold text-white">
            An independent owner’s engineer focused on SCADA from day one.
          </h2>
          <ul className="mt-6 space-y-4 text-[#B7C7D9]">
            <li>• Independent technical oversight</li>
            <li>• Interface management across disciplines and vendors</li>
            <li>• Support from design through commissioning</li>
            <li>• Technical depth without platform bias</li>
          </ul>
        </div>
      </section>

      {/* services */}
      <section className="mx-auto max-w-7xl px-6 py-8 lg:px-8">
        <div className="mb-10 max-w-2xl">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#00C8C8]">
            Core scope
          </p>
          <h2 className="mt-3 text-3xl font-semibold text-white md:text-4xl">
            Where SCADA Fortis creates value
          </h2>
          <p className="mt-4 text-[#B7C7D9]">
            A focused engineering offer built around integration ownership,
            delivery risk reduction, and technical clarity.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {[
            "The Owner’s Engineer",
            "SCADA Engineering & Design",
            "Commissioning Management",
            "Interface Management",
            "Cybersecurity & Compliance",
            "Operational Support",
          ].map((item) => (
            <div
              key={item}
              className="group rounded-[1.5rem] border border-white/10 bg-[#00233A] p-6 transition hover:-translate-y-1 hover:border-[#00A0A0]/40"
            >
              <div className="mb-5 h-12 w-12 rounded-xl bg-[#00A0A0]/10 ring-1 ring-[#00A0A0]/30" />
              <h3 className="text-xl font-semibold text-white">{item}</h3>
              <p className="mt-3 text-sm leading-6 text-[#B7C7D9]">
                Placeholder text describing this service and its value for
                offshore wind developers and EPC contractors.
              </p>
              <div className="mt-6 text-sm font-semibold text-[#00C8C8]">
                Learn more →
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* les projets */}
      <section className="mx-auto grid max-w-7xl gap-10 px-6 py-20 lg:grid-cols-[1.1fr_0.9fr] lg:px-8">
        <div className="rounded-[2rem] border border-white/10 bg-[#00233A] p-8">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#00C8C8]">
            Track record
          </p>
          <h2 className="mt-4 text-3xl font-semibold text-white">
            Project experience should be visible, not implied.
          </h2>
          <p className="mt-4 max-w-2xl text-[#B7C7D9]">
            This section can highlight one key case study with project scope,
            challenge, SCADA role, and results.
          </p>

          <div className="mt-8 grid gap-6 md:grid-cols-3">
            <div className="rounded-2xl border border-white/10 bg-[#001828] p-5">
              <p className="text-xs uppercase tracking-[0.18em] text-[#7A9BB5]">
                Project
              </p>
              <p className="mt-3 font-semibold text-white">Project label</p>
            </div>

            <div className="rounded-2xl border border-white/10 bg-[#001828] p-5">
              <p className="text-xs uppercase tracking-[0.18em] text-[#7A9BB5]">
                Scope
              </p>
              <p className="mt-3 font-semibold text-white">SCADA integration</p>
            </div>

            <div className="rounded-2xl border border-white/10 bg-[#001828] p-5">
              <p className="text-xs uppercase tracking-[0.18em] text-[#7A9BB5]">
                Outcome
              </p>
              <p className="mt-3 font-semibold text-white">Delivery support</p>
            </div>
          </div>
        </div>

        <div className="flex items-center">
          <div className="w-full rounded-[2rem] border border-white/10 bg-[#003057]/30 p-4">
            <div className="flex aspect-[4/3] items-center justify-center rounded-[1.5rem] border border-dashed border-[#00A0A0]/40 bg-[#003057]/40 text-center text-sm uppercase tracking-[0.2em] text-[#7A9BB5]">
              Case study image label
              <br />
              Offshore wind / substation / project visual
            </div>
          </div>
        </div>
      </section>

      {/* final  */}
      <section className="pb-24 pt-6">
        <div className="mx-auto max-w-5xl rounded-[2rem] border border-white/10 bg-gradient-to-r from-[#00233A] to-[#003057] px-8 py-14 text-center shadow-2xl shadow-black/20">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#00C8C8]">
            Start the conversation
          </p>
          <h2 className="mt-4 text-3xl font-semibold text-white md:text-4xl">
            Bring independent SCADA oversight into your offshore wind project.
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-[#D3DEE9]">
            Placeholder CTA text for consultation request, contact action, or
            company profile download.
          </p>

          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <Link
              href="/contact"
              className="rounded-full bg-[#00A0A0] px-6 py-3 text-sm font-semibold text-[#001828] transition hover:bg-[#00C8C8]"
            >
              Request a Consultation
            </Link>

            <Link
              href="/projects"
              className="rounded-full border border-white/20 px-6 py-3 text-sm font-semibold text-white transition hover:bg-white/5"
            >
              View Projects
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}