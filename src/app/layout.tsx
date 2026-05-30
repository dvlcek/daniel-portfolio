import type { Metadata } from "next";
import { Space_Grotesk, Instrument_Sans } from "next/font/google";
import "./globals.css";
import { SiteHeader } from "@/components/site/SiteHeader";
import { SiteFooter } from "@/components/site/SiteFooter";
import { PageTransition } from "@/components/transition/PageTransitionFour";
import { TransitionProvider } from "@/components/transition/TransitionProvider";

const headingFont = Space_Grotesk({
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
    default: "Daniel Vlcek | Software Developer & Automation Architect",
    template: "%s | Daniel Vlcek",
  },
  description:
    "Premium websites, automation systems, internal dashboards, CRM workflows, and custom business systems for companies in Austria and Europe.",
  keywords: [
    "Daniel Vlcek",
    "Software Developer Vienna",
    "Automation Architect",
    "Next.js Developer Vienna",
    "Automation Developer Austria",
    "Business Automation Austria",
    "Business Automation Systems",
    "Website Rebuild Austria",
    "Internal Dashboard Developer",
    "CRM Automation Developer",
    "Custom Business Systems",
    "Premium Website Developer Austria",
  ],
  authors: [{ name: "Daniel Vlcek" }],
  creator: "Daniel Vlcek",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Daniel Vlcek | Software Developer & Automation Architect",
    description:
      "Premium websites, platform rebuilds, automation systems, internal dashboards, CRM workflows, and custom business systems for companies in Austria and Europe.",
    url: "https://danielvlcek.com",
    siteName: "Daniel Vlcek",
    type: "website",
    locale: "en_US",
    images: [
      {
        url: "/images/daniel-vlcek.jpg",
        width: 1200,
        height: 1600,
        alt: "Daniel Vlcek - Software Developer and Automation Architect",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Daniel Vlcek | Software Developer & Automation Architect",
    description:
      "Premium websites, business automation, internal dashboards, CRM workflows, and custom business systems for companies in Austria and Europe.",
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
  jobTitle: "Software Developer & Automation Architect",
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
  name: "Daniel Vlcek - Software Developer & Automation Architect",
  url: "https://danielvlcek.com",
  areaServed: ["Austria", "Europe"],
  address: {
    "@type": "PostalAddress",
    addressLocality: "Vienna",
    addressCountry: "AT",
  },
  serviceType: [
    "Premium website development",
    "Platform rebuilds",
    "Business automation",
    "Internal dashboard development",
    "CRM automation",
    "Custom business systems",
  ],
};

const websiteJsonLd = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: "Daniel Vlcek",
  url: "https://danielvlcek.com",
  description:
    "Software Developer & Automation Architect building premium websites, automation systems, internal dashboards, CRM workflows, and custom business systems.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${headingFont.variable} ${bodyFont.variable} tech-bg min-h-screen overflow-x-hidden bg-site-bg text-white antialiased`}
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

        <TransitionProvider>
          <PageTransition />

          <SiteHeader />

          <main id="main-content" tabIndex={-1}>
            {children}
          </main>

          <SiteFooter />
        </TransitionProvider>
      </body>
    </html>
  );
}
