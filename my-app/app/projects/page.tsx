"use client";

import { useState } from "react";
import Link from "next/link";
import ProjectCard from "@/components/projectcard";
import StatItem from "@/components/statitem";

const filters = [
  { label: "All", value: "all" },
  { label: "HVDC", value: "hvdc" },
  { label: "FEED / OE", value: "feed" },
  { label: "Commissioning", value: "commissioning" },
];

const stats = [
  { number: "15+", label: "Years offshore experience" },
  { number: "8+", label: "Major European projects" },
  { number: "~10 GW", label: "Capacity represented" },
  { number: "6", label: "Developer clients" },
];

const projects = [
  {
    title: "Hornsea 3 HVDC Offshore Wind",
    client: "Ørsted",
    year: "2024 →",
    status: "Ongoing",
    type: "HVDC · OCS",
    category: ["hvdc", "commissioning"],
    featured: true,
    description:
      "Europe's largest offshore wind project under construction. Site Engineer Representative and Electrical Site Coordinator for the Link 2 Offshore Converter Station.",
    scope: [
      "SER and Electrical Site Coordinator on OCS platform",
      "ITP witness coordination and punch list governance",
      "GPS / IEC 104 timestamp validation",
      "SCS network architecture review",
      "IEC 61850 Edition 2 verification",
      "Nozomi IDS integration and OT architecture review",
    ],
    tech: [
      "IEC 61850",
      "Hitachi Energy HVDC",
      "IEC 104",
      "FortiGate",
      "Nozomi",
      "MicroSCADA",
    ],
  },
  {
    title: "Norfolk Boreas & Norfolk Vanguard",
    client: "Vattenfall / RWE",
    year: "2022 – 2024",
    status: "Completed",
    type: "FEED + Commissioning",
    category: ["feed", "commissioning"],
    description:
      "Dual-project engagement covering FEED design engineering and commissioning phases for two major UK offshore wind projects.",
    scope: [
      "SCADA and telecom specification authoring",
      "OFTO interface requirements",
      "HAZOP/HAZID contribution",
      "OT network architecture design",
      "Vendor offer evaluation",
    ],
    tech: ["IEC 62443", "OPC UA", "IEC 61850", "OFTO Interface"],
  },
  {
    title: "Offshore HVDC Grid Connection",
    client: "50Hertz",
    year: "2020 – 2022",
    status: "Completed",
    type: "HVDC · TSO",
    category: ["hvdc", "commissioning"],
    description:
      "SCADA and telecom commissioning on a German TSO offshore HVDC connection.",
    scope: [
      "Protection relay commissioning",
      "IEC 61850 GOOSE and MMS verification",
      "SCADA / EMS interface testing",
      "Telecom infrastructure commissioning",
    ],
    tech: ["IEC 61850", "MPLS-TP", "SDH", "TSO Interface"],
  },
  {
    title: "Courseulles-sur-Mer Offshore Wind",
    client: "EDF Renewables",
    year: "2019 – 2021",
    status: "Completed",
    type: "SCADA · Commissioning",
    category: ["commissioning", "feed"],
    description:
      "SCADA and protection commissioning on a French offshore wind development.",
    scope: [
      "SCADA integration",
      "HV protection relay testing",
      "Grid code compliance verification",
      "FAT/SAT supervision",
    ],
    tech: ["DNV GL Standards", "Modbus", "IEC 104", "FAT/SAT"],
  },
];

export default function ProjectsPage() {
  const [activeFilter, setActiveFilter] = useState("all");

  const filteredProjects =
    activeFilter === "all"
      ? projects
      : projects.filter((project) => project.category.includes(activeFilter));

  return (
    <main className="min-h-screen bg-[#0B1F3A] text-white">
      <section className="mx-auto max-w-6xl px-6 py-24">
        <div className="max-w-3xl">
          <p className="mb-4 text-xs font-semibold uppercase tracking-[0.25em] text-[#00C8C8]">
            Projects
          </p>

          <h1 className="text-3xl font-semibold leading-tight md:text-5xl">
            Proven experience across offshore wind and HVDC projects.
          </h1>

          <p className="mt-5 max-w-2xl text-base leading-7 text-[#B7C7D9]">
            A selection of project engagements showing SCADA, telecom,
            commissioning, and owner&apos;s engineer experience across complex
            offshore environments.
          </p>
        </div>

        <div className="mt-14 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
          {stats.map((stat) => (
            <StatItem key={stat.label} number={stat.number} label={stat.label} />
          ))}
        </div>

        <section className="mt-20">
          <div className="mb-10 flex flex-col justify-between gap-6 md:flex-row md:items-end">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.25em] text-[#00C8C8]">
                Field record
              </p>
              <h2 className="mt-3 text-2xl font-semibold">
                Project engagements
              </h2>
            </div>

            <div className="flex flex-wrap gap-2">
              {filters.map((filter) => (
                <button
                  key={filter.value}
                  onClick={() => setActiveFilter(filter.value)}
                  className={`rounded-full border px-4 py-2 text-xs uppercase tracking-[0.14em] transition ${
                    activeFilter === filter.value
                      ? "border-[#00C8C8] bg-[#00C8C8]/10 text-[#00C8C8]"
                      : "border-white/10 text-[#B7C7D9] hover:border-[#00C8C8]/50 hover:text-[#00C8C8]"
                  }`}
                >
                  {filter.label}
                </button>
              ))}
            </div>
          </div>

          <div className="grid gap-6 lg:grid-cols-2">
            {filteredProjects.map((project) => (
              <ProjectCard
                key={project.title}
                title={project.title}
                client={project.client}
                year={project.year}
                status={project.status}
                type={project.type}
                description={project.description}
                scope={project.scope}
                tech={project.tech}
                featured={project.featured}
              />
            ))}
          </div>
        </section>

        <section className="mt-20 rounded-[2rem] border border-[#00C8C8]/30 bg-[#00233A] p-8 md:p-10">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-[#00C8C8]">
            SCADA Fortis Product
          </p>

          <div className="mt-6 grid gap-10 md:grid-cols-2">
            <div>
              <h2 className="text-3xl font-semibold">
                FORTIS <span className="text-[#00C8C8]">CONNECT</span>
              </h2>

              <p className="mt-5 leading-7 text-[#B7C7D9]">
                A no-code SCADA integration intelligence platform built for
                offshore wind. It manages signal registers, interface matrices,
                conflict detection, and vendor coordination.
              </p>

              <Link
                href="/contact"
                className="mt-8 inline-flex rounded-full bg-[#00A0A0] px-6 py-3 text-sm font-semibold text-[#001828] transition hover:bg-[#00C8C8]"
              >
                Learn more
              </Link>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              {[
                ["Signal Register", "RDS-PP based signal identity cards."],
                ["Conflict Detection", "Automated alerts on naming clashes."],
                ["Test Readiness", "Readiness tracking tied to milestones."],
                ["Vendor Portal", "Role-based access for stakeholders."],
              ].map(([title, desc]) => (
                <div
                  key={title}
                  className="rounded-2xl border border-white/10 bg-[#001828] p-5"
                >
                  <p className="text-xl text-[#00C8C8]">⬡</p>
                  <h3 className="mt-3 text-sm font-semibold uppercase tracking-[0.14em] text-[#00C8C8]">
                    {title}
                  </h3>
                  <p className="mt-2 text-sm leading-6 text-[#B7C7D9]">
                    {desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="mt-20 rounded-[2rem] border border-white/10 bg-[#003057]/40 px-8 py-14 text-center">
          <p className="mb-4 text-xs font-semibold uppercase tracking-[0.25em] text-[#00C8C8]">
            Next engagement
          </p>

          <h2 className="text-3xl font-semibold">
            Bring us in early. It&apos;s cheaper.
          </h2>

          <p className="mx-auto mt-5 max-w-xl leading-7 text-[#B7C7D9]">
            SCADA and telecom problems found in FEED cost less to fix than the
            same problems discovered during commissioning.
          </p>

          <Link
            href="/contact"
            className="mt-8 inline-flex rounded-full bg-[#00A0A0] px-6 py-3 text-sm font-semibold text-[#001828] transition hover:bg-[#00C8C8]"
          >
            Start a conversation
          </Link>
        </section>
      </section>
    </main>
  );
}