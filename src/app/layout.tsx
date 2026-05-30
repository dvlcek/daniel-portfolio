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
    "I build digital systems that help businesses scale faster — from high-performing websites and Next.js rebuilds to automation workflows and scalable technical infrastructure.",
  keywords: [
    "Daniel Vlcek",
    "Software Developer",
    "Automation Architect",
    "Next.js Developer",
    "Business Automation",
    "Web Development",
    "Digital Systems",
    "Workflow Automation",
  ],
  authors: [{ name: "Daniel Vlcek" }],
  creator: "Daniel Vlcek",
  openGraph: {
    title: "Daniel Vlcek | Software Developer & Automation Architect",
    description:
      "Digital systems, automation workflows, and scalable web platforms for businesses that want to operate faster and grow more efficiently.",
    url: "https://danielvlcek.com",
    siteName: "Daniel Vlcek",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Daniel Vlcek | Software Developer & Automation Architect",
    description:
      "I build digital systems that help businesses scale faster.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${headingFont.variable} ${bodyFont.variable} tech-bg min-h-screen overflow-x-hidden bg-[#080616] text-white antialiased`}
      >
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