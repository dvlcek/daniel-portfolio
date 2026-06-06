import type { Metadata } from "next";
import { Geist, Instrument_Sans } from "next/font/google";
import "./globals.css";
import { SiteHeader } from "@/components/site/SiteHeader";
import { SiteFooter } from "@/components/site/SiteFooter";
import { PageTransition } from "@/components/transition/PageTransitionFour";
import { TransitionProvider } from "@/components/transition/TransitionProvider";
import { GSAPProvider } from "@/components/animations/GSAPProvider";

const headingFont = Geist({
  subsets: ["latin"],
  variable: "--font-heading",
  display: "swap",
});

const bodyFont = Instrument_Sans({
  subsets: ["latin"],
  variable: "--font-body",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://danielvlcek.com"),
  title: {
    default: "Daniel Vlcek | Websites, Platforms & Business Automation",
    template: "%s | Daniel Vlcek",
  },
  description:
    "Websites, platforms, automations, dashboards, and business systems that make companies easier to run.",
  keywords: [
    "Daniel Vlcek",
    "Software Developer Vienna",
    "Business Systems Developer",
    "Next.js Developer Vienna",
    "Automation Developer Austria",
    "Business Automation Austria",
    "Business Automation Systems",
    "Website Rebuild Austria",
    "Internal Dashboard Developer",
    "CRM Automation Developer",
    "Custom Business Systems",
    "Website Developer Vienna",
    "Business Platform Developer Vienna",
  ],
  authors: [{ name: "Daniel Vlcek" }],
  creator: "Daniel Vlcek",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Daniel Vlcek | Websites, Platforms & Business Automation",
    description:
      "Websites, platforms, automation systems, dashboards, CRM workflows, and practical business systems for companies in Austria and Europe.",
    url: "https://danielvlcek.com",
    siteName: "Daniel Vlcek",
    type: "website",
    locale: "en_US",
    images: [
      {
        url: "/images/daniel-vlcek.jpg",
        width: 1200,
        height: 1600,
        alt: "Daniel Vlcek - business systems developer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Daniel Vlcek | Websites, Platforms & Business Automation",
    description:
      "Websites, business automation, internal dashboards, CRM workflows, and practical business systems for companies in Austria and Europe.",
    images: ["/images/daniel-vlcek.jpg"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

const personJsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Daniel Vlcek",
  url: "https://danielvlcek.com",
  jobTitle: "Business Systems Developer",
  image: "https://danielvlcek.com/images/daniel-vlcek.jpg",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Vienna",
    addressCountry: "AT",
  },
  knowsAbout: [
    "Next.js development",
    "business automation",
    "CRM workflows",
    "internal dashboards",
    "website rebuilds",
    "custom business systems",
  ],
};

const serviceJsonLd = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  name: "Daniel Vlcek - Websites, Platforms & Business Automation",
  url: "https://danielvlcek.com",
  areaServed: ["Austria", "Europe"],
  address: {
    "@type": "PostalAddress",
    addressLocality: "Vienna",
    addressCountry: "AT",
  },
  serviceType: [
    "Website development",
    "Business platform development",
    "Business automation systems",
    "Internal dashboard development",
    "CRM automation",
    "Website redesign",
  ],
};

const websiteJsonLd = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: "Daniel Vlcek",
  url: "https://danielvlcek.com",
  description:
    "Websites, platforms, automation systems, internal dashboards, CRM workflows, and business systems that make companies easier to run.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${headingFont.variable} ${bodyFont.variable} min-h-screen overflow-x-hidden bg-site-bg text-cream antialiased`}
      >
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify([personJsonLd, serviceJsonLd, websiteJsonLd]),
          }}
        />

        <a href="#main-content" className="skip-link">
          Skip to content
        </a>

        <GSAPProvider>
          <TransitionProvider>
            <PageTransition />

            <SiteHeader />

            <main id="main-content" tabIndex={-1}>
              {children}
            </main>

            <SiteFooter />
          </TransitionProvider>
        </GSAPProvider>
      </body>
    </html>
  );
}
