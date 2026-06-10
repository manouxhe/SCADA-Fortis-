import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import Script from "next/script";

export const metadata: Metadata = {
  title: {
    default: "Scada Fortis — Independent Owner's Engineer for Offshore Wind",
    template: "%s — Scada Fortis",
  },
  description:
    "Vendor-neutral SCADA, telecom and OT cybersecurity Owner's Engineer for offshore wind developers. 15+ years across HVDC and HVAC projects in Europe.",
  keywords: [
    "SCADA Owner's Engineer",
    "offshore wind SCADA",
    "HVDC SCADA",
    "IEC 61850",
    "IEC 62443",
    "offshore wind commissioning",
    "OT cybersecurity offshore wind",
    "SCADA integration offshore",
  ],
  authors: [{ name: "Abdelmounaim Errouchi" }],
  creator: "Scada Fortis Engineering Solutions",
  openGraph: {
    type: "website",
    locale: "en_GB",
    url: "https://www.scadafortis.com",
    siteName: "Scada Fortis Engineering Solutions",
    title: "Scada Fortis — Independent Owner's Engineer for Offshore Wind",
    description:
      "Vendor-neutral SCADA, telecom and OT cybersecurity Owner's Engineer for offshore wind developers. 15+ years across HVDC and HVAC projects in Europe.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Scada Fortis — Independent Owner's Engineer for Offshore Wind",
    description:
      "Vendor-neutral SCADA, telecom and OT cybersecurity Owner's Engineer for offshore wind developers.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="bg-[#001828] text-white antialiased">
        <Script
          src="https://app.secureprivacy.ai/script/6a29046ed14c7b29ea3a380c.js"
          strategy="beforeInteractive"
        />

        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-8B8P7KNWLX"
          strategy="afterInteractive"
        />

        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){window.dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-8B8P7KNWLX');
          `}
        </Script>

        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
