import Link from "next/link";

export default function Footer() {
  return (
    <footer className=" bg-[#001828] text-white">
      <div className="mx-auto grid max-w-7xl gap-10 px-6 py-12 md:grid-cols-[1.2fr_2fr]">
        <div>
          <h3 className="mb-3 text-lg font-semibold text-[#00C8C8]">
            SCADA Fortis
          </h3>
          <p className="max-w-sm text-sm leading-6 text-slate-300">
            Independent Owner’s Engineer for offshore wind projects.
          </p>
        </div>

        <div className="grid gap-8 sm:grid-cols-3">
          <div>
            <h4 className="mb-3 text-sm font-semibold uppercase tracking-[0.12em] text-[#00C8C8]">
              Navigation
            </h4>
            <ul className="space-y-2 text-sm text-slate-300">
              <li><Link href="/" className="hover:text-[#00C8C8]">Home</Link></li>
              <li><Link href="/about" className="hover:text-[#00C8C8]">About Us</Link></li>
              <li><Link href="/services" className="hover:text-[#00C8C8]">Services</Link></li>
              <li><Link href="/expertise" className="hover:text-[#00C8C8]">Expertise</Link></li>
              <li><Link href="/projects" className="hover:text-[#00C8C8]">Projects</Link></li>
              <li><Link href="/ressources" className="hover:text-[#00C8C8]">Ressources</Link></li>
              <li><Link href="/contact" className="hover:text-[#00C8C8]">Contact</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="mb-3 text-sm font-semibold uppercase tracking-[0.12em] text-[#00C8C8]">
              Legal
            </h4>
            <ul className="space-y-2 text-sm text-slate-300">
              <li><Link href="/privacy-policy" className="hover:text-[#00C8C8]">Privacy Policy</Link></li>
              <li><Link href="/terms-of-service" className="hover:text-[#00C8C8]">Terms of Service</Link></li>
              <li><Link href="/cookie-policy" className="hover:text-[#00C8C8]">Cookie Policy</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="mb-3 text-sm font-semibold uppercase tracking-[0.12em] text-[#00C8C8]">
              Contact
            </h4>
            <ul className="space-y-2 text-sm text-slate-300">
              <li>
                <a href="mailto:info@scadafortis.com" className="hover:text-[#00C8C8]">
                  info@scadafortis.com (à revoir)
                </a>
              </li>
              <li>
                <a
                  href="https://www.linkedin.com/company/nayma-commissioning-engineering-inspection/"
                  target="_blank"
                  rel="noreferrer"
                  className="hover:text-[#00C8C8]"
                >
                  LinkedIn
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="border-t border-white/10 px-6 py-4 text-center text-sm text-slate-400">
        © 2026 SCADA Fortis Engineering Solutions. All rights reserved.
      </div>
    </footer>
  );
}