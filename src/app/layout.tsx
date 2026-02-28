import type { Metadata } from "next";
import { Space_Grotesk, Instrument_Sans } from "next/font/google";
import "./globals.css";
import { SiteHeader } from "@/components/site/SiteHeader";
import { SiteFooter } from "@/components/site/SiteFooter";
import { SmoothScroll } from "@/components/site/SmoothScroll";
import { RouteProgress } from "@/components/site/RouteProgress";
import { PageTransition } from "@/components/transition/PageTransitionFour";
import { TransitionProvider } from "@/components/transition/TransitionProvider";

const headingFont = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-heading",
});

const bodyFont = Instrument_Sans({
  subsets: ["latin"],
  variable: "--font-body",
});

export const metadata: Metadata = {
  title: "Daniel Vlcek | Systems, Automation, and Next.js Rebuilds",
  description:
    "Build systems that make your company faster. Automation workflows, Next.js rebuilds, and scalable technical infrastructure.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={`tech-bg ${headingFont.variable} ${bodyFont.variable}`}>
        <TransitionProvider>
          <PageTransition/>
          <SmoothScroll />
          {/* <RouteProgress /> */}
          <SiteHeader />
          {children}
          <SiteFooter />
        </TransitionProvider>
      </body>
    </html>
  );
}
