"use client";

import { useState } from "react";

const sections = {
  privacy: {
    title: "Privacy Policy",
    content: [
      {
        heading: "Information Collection",
        text: "SCADA Fortis may collect personal information submitted through the contact form, including name, email address, company information, and project-related enquiries.",
      },
      {
        heading: "Use of Information",
        text: "Information submitted through the website is used only to respond to professional enquiries and project-related communication.",
      },
      {
        heading: "Data Protection",
        text: "SCADA Fortis takes reasonable measures to protect submitted information and does not sell or distribute personal data to third parties.",
      },
      {
        heading: "Third-Party Services",
        text: "Some website services may rely on third-party providers such as hosting, analytics, or email services.",
      },
      {
        heading: "Contact",
        text: "For any privacy-related request, users may contact SCADA Fortis directly through the contact page.",
      },
    ],
  },

  terms: {
    title: "Terms of Service",
    content: [
      {
        heading: "Website Usage",
        text: "This website is provided for informational purposes regarding SCADA Fortis engineering activities and services.",
      },
      {
        heading: "Intellectual Property",
        text: "All website content, including text, visuals, branding, and technical materials, remains the property of SCADA Fortis unless stated otherwise.",
      },
      {
        heading: "Accuracy of Information",
        text: "SCADA Fortis makes reasonable efforts to maintain accurate and updated information but does not guarantee completeness.",
      },
      {
        heading: "Liability",
        text: "SCADA Fortis shall not be held responsible for indirect damages resulting from the use of this website or external linked resources.",
      },
      {
        heading: "External Links",
        text: "The website may contain links to third-party resources or external websites for reference purposes.",
      },
    ],
  },

  cookies: {
    title: "Cookie Policy",
    content: [
      {
        heading: "What Are Cookies",
        text: "Cookies are small files stored on a device to improve browsing experience and website functionality.",
      },
      {
        heading: "Analytics",
        text: "Basic analytics cookies may be used to understand website traffic and improve performance.",
      },
      {
        heading: "Functional Cookies",
        text: "Certain cookies may be required for navigation, page transitions, or interface preferences.",
      },
      {
        heading: "Browser Settings",
        text: "Users may disable cookies through their browser settings if preferred.",
      },
    ],
  },
};

export default function LegalPage() {
  const [active, setActive] =
    useState<keyof typeof sections>("privacy");

  return (
    <main className="min-h-screen bg-[#0B1F3A] text-white">
      <section className="mx-auto flex max-w-7xl gap-16 px-6 py-32">
        {/* SIDEBAR */}
        <aside className="sticky top-32 h-fit w-[260px] shrink-0">
          <p className="mb-8 text-xs font-semibold uppercase tracking-[0.3em] text-[#00C8C8]">
            Legal
          </p>

          <div className="flex flex-col gap-3">
            <button
              onClick={() => setActive("privacy")}
              className={`text-left text-4xl font-light transition ${
                active === "privacy"
                  ? "text-white"
                  : "text-[#9FB3C8] hover:text-white"
              }`}
            >
              Privacy Policy
            </button>

            <button
              onClick={() => setActive("terms")}
              className={`text-left text-4xl font-light transition ${
                active === "terms"
                  ? "text-white"
                  : "text-[#9FB3C8] hover:text-white"
              }`}
            >
              Terms of Service
            </button>

            <button
              onClick={() => setActive("cookies")}
              className={`text-left text-4xl font-light transition ${
                active === "cookies"
                  ? "text-white"
                  : "text-[#9FB3C8] hover:text-white"
              }`}
            >
              Cookie Policy
            </button>
          </div>
        </aside>

        {/* CONTENT */}
        <div className="max-w-3xl flex-1">
          <div className="border-b border-white/10 pb-8">
            <p className="text-xs uppercase tracking-[0.25em] text-[#00C8C8]">
              SCADA Fortis
            </p>

            <h1 className="mt-4 text-5xl font-semibold tracking-tight">
              {sections[active].title}
            </h1>
          </div>

          <div className="mt-14 space-y-14">
            {sections[active].content.map((item) => (
              <div key={item.heading}>
                <h2 className="text-xl font-semibold text-white">
                  {item.heading}
                </h2>

                <p className="mt-4 max-w-2xl text-base leading-8 text-[#B7C7D9]">
                  {item.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}