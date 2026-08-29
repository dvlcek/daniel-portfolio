import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { SiteHeader } from "@/components/site/SiteHeader";
import { SiteFooter } from "@/components/site/SiteFooter";
import { PageTransition } from "@/components/transition/PageTransitionFour";
import { TransitionProvider } from "@/components/transition/TransitionProvider";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://danielvlcek.com"),
  title: {
    default: "Daniel Vlcek | Software Developer & Automation Architect",
    template: "%s | Daniel Vlcek",
  },
  description:
    "Custom software, automation and applied AI systems for companies that want cleaner operations, less manual work and better digital infrastructure.",
  keywords: [
    "Daniel Vlcek",
    "Software Developer Vienna",
    "Automation Architect",
    "Custom Business Software",
    "Business Automation Austria",
    "Applied AI Systems",
    "Internal Platforms",
    "CRM Automation",
    "Custom Business Systems",
    "Next.js Developer Vienna",
  ],
  authors: [{ name: "Daniel Vlcek" }],
  creator: "Daniel Vlcek",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Daniel Vlcek | Software Developer & Automation Architect",
    description:
      "Custom software, automation and applied AI systems built around how your business actually works.",
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
      "Custom software, automation and applied AI systems built around how your business actually works.",
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
    "custom software development",
    "business automation",
    "applied AI",
    "CRM workflows",
    "internal platforms",
    "business systems architecture",
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
    "Custom business software",
    "Business automation",
    "Applied AI systems",
    "Internal platform development",
    "CRM automation",
    "Web and client platforms",
  ],
};

const websiteJsonLd = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: "Daniel Vlcek",
  url: "https://danielvlcek.com",
  description:
    "Software Developer & Automation Architect building custom software, automation and applied AI systems for companies.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.variable} min-h-screen overflow-x-hidden bg-[#06101b] text-white antialiased`}>
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
