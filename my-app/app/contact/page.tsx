"use client";

import { useState } from "react";
import type { ChangeEvent, FormEvent } from "react";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    reason: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [statusMessage, setStatusMessage] = useState("");

  function handleChange(
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>,
  ) {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  }

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setIsSubmitting(true);
    setStatusMessage("");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error("Something went wrong");
      }

      setStatusMessage("Your message has been sent successfully.");

      setFormData({
        name: "",
        email: "",
        company: "",
        reason: "",
        message: "",
      });
    } catch {
      setStatusMessage("An error occurred. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <main className="min-h-screen bg-[#0B1F3A] px-6 py-20 text-white">
      <section className="mx-auto max-w-7xl">
        <div className="mb-12 max-w-3xl">
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-[#00C8C8]">
            Contact
          </p>
          <h1 className="text-3xl font-semibold md:text-4xl">Request a consultation</h1>
          <p className="mt-5 text-[#B7C7D9]">
            Tell us about your project or request.
          </p>
        </div>

        <div className=" grid gap-8 lg:grid-cols-[1.3fr_0.7fr] ">
          {/* FORM */}
          <form
            onSubmit={handleSubmit}
            className="rounded-[2rem] border border-white/10 bg-[#00233A] p-8"
          >
            <div className="grid gap-5 md:grid-cols-2">
              <input
                type="text"
                name="name"
                placeholder="Full name"
                value={formData.name}
                onChange={handleChange}
                className="rounded-xl border border-white/10 bg-[#001828] px-4 py-3 text-white placeholder-[#7A9BB5] outline-none focus:border-[#00C8C8]"
              />

              <input
                type="email"
                name="email"
                placeholder="Email address"
                value={formData.email}
                onChange={handleChange}
                className="rounded-xl border border-white/10 bg-[#001828] px-4 py-3 text-white placeholder-[#7A9BB5] outline-none focus:border-[#00C8C8]"
              />

              <input
                type="text"
                name="company"
                placeholder="Company"
                value={formData.company}
                onChange={handleChange}
                className="rounded-xl border border-white/10 bg-[#001828] px-4 py-3 text-white placeholder-[#7A9BB5] outline-none focus:border-[#00C8C8]"
              />

              <select
                name="reason"
                value={formData.reason}
                onChange={handleChange}
                className="rounded-xl border border-white/10 bg-[#001828] px-4 py-3 text-[#B7C7D9] outline-none focus:border-[#00C8C8]"
              >
                <option value="">Reason </option>
                <option value="owners-engineer">
                  Owner’s Engineer Services
                </option>
                <option value="scada-engineering">
                  SCADA Engineering & Design
                </option>
                <option value="commissioning">Commissioning Management</option>
                <option value="cybersecurity">
                  Cybersecurity & Compliance
                </option>
                <option value="general">General Inquiry</option>
              </select>
            </div>

            <textarea
              name="message"
              placeholder="Additional information about your request"
              value={formData.message}
              onChange={handleChange}
              rows={6}
              className="mt-5 w-full rounded-xl border border-white/10 bg-[#001828] px-4 py-3 text-white placeholder-[#7A9BB5] outline-none focus:border-[#00C8C8]"
            />

            <button
              type="submit"
              disabled={isSubmitting}
              className="mt-6 rounded-full bg-[#00A0A0] px-7 py-3 font-semibold text-[#001828] transition hover:bg-[#00C8C8] disabled:cursor-not-allowed disabled:opacity-60"
            >
              {isSubmitting ? "Sending..." : "Send message"}
            </button>
            {statusMessage && (
              <p className="mt-4 text-sm text-[#00C8C8]">{statusMessage}</p>
            )}
          </form>

          {/* DIRECT CONTACT INFO */}
          <aside className="rounded-[2rem] border border-white/10 bg-[#00233A] p-8">
            <h2 className="text-2xl font-semibold">Direct contact</h2>
            <p className="mt-3 text-[#B7C7D9]">
              For direct enquiries, SCADA Fortis can also be reached through the
              following channels.
            </p>

            <div className="mt-8 space-y-6">
              <div>
                <p className="text-sm uppercase tracking-[0.18em] text-[#00C8C8]">
                  Email
                </p>
                <a
                  href="mailto:info@scadafortis.com"
                  className="mt-1 block text-white hover:text-[#00C8C8]"
                >
                  info@scadafortis.com
                </a>
              </div>

              <div>
                <p className="text-sm uppercase tracking-[0.18em] text-[#00C8C8]">
                  Phone
                </p>
                <a
                  href="tel:+352661323271"
                  className="mt-1 block text-white hover:text-[#00C8C8]"
                >
                  +352 661 32 32 71
                </a>
              </div>

              <div>
                <p className="text-sm uppercase tracking-[0.18em] text-[#00C8C8]">
                  Location
                </p>
                <p className="mt-1 text-white">
                  23, Michel Rodange, 2430 Luxembourg
                </p>
              </div>

              <div>
                <p className="text-sm uppercase tracking-[0.18em] text-[#00C8C8]">
                  LinkedIn
                </p>
                <a
                  href="https://www.linkedin.com/company/nayma-commissioning-engineering-inspection/posts/?feedView=all"
                  className="mt-1 block text-white hover:text-[#00C8C8]"
                >
                  View company profile
                </a>
              </div>
            </div>
          </aside>
        </div>

        {/* FAQ */}
        <section className="mt-20">
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-[#00C8C8]">
            FAQ
          </p>
          <h2 className="text-3xl font-semibold">Frequently asked questions</h2>

          <div className="mt-8 grid gap-5 md:grid-cols-2">
            <div className="rounded-2xl border border-white/10 bg-[#00233A] p-6">
              <h3 className="font-semibold text-white">
                What type of projects does SCADA Fortis support?
              </h3>
              <p className="mt-3 text-sm leading-6 text-[#B7C7D9]">
                SCADA Fortis supports offshore wind projects, especially on
                SCADA integration, interface management, commissioning, and
                technical oversight.
              </p>
            </div>

            <div className="rounded-2xl border border-white/10 bg-[#00233A] p-6">
              <h3 className="font-semibold text-white">
                Is SCADA Fortis a software provider?
              </h3>
              <p className="mt-3 text-sm leading-6 text-[#B7C7D9]">
                No. SCADA Fortis provides independent engineering expertise and
                project support rather than selling a SCADA platform.
              </p>
            </div>

            <div className="rounded-2xl border border-white/10 bg-[#00233A] p-6">
              <h3 className="font-semibold text-white">
                When should SCADA Fortis be involved?
              </h3>
              <p className="mt-3 text-sm leading-6 text-[#B7C7D9]">
                Ideally from the early design phase, before integration issues
                become costly during commissioning.
              </p>
            </div>

            <div className="rounded-2xl border border-white/10 bg-[#00233A] p-6">
              <h3 className="font-semibold text-white">
                Who is this service for?
              </h3>
              <p className="mt-3 text-sm leading-6 text-[#B7C7D9]">
                It is mainly aimed at offshore wind developers, EPC contractors,
                project directors, technical managers, and procurement teams.
              </p>
            </div>
          </div>
        </section>
      </section>
    </main>
  );
}
