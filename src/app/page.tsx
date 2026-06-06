import type { Metadata } from "next";
import { Hero } from "@/components/sections/Hero";
import { SystemElementsSection } from "@/components/sections/SystemElementsSection";
import { Problem } from "@/components/sections/Problem";
import { SolutionPillars } from "@/components/sections/SolutionPillars";
import { FeaturedOutcomes } from "@/components/sections/FeaturedOutcomes";
import { Process } from "@/components/sections/Process";
import { PackagesSection } from "@/components/sections/PackagesSection";
import { Testimonials } from "@/components/sections/Testimonials";
import { FinalCTA } from "@/components/sections/FinalCTA";
import { Mindset } from "@/components/sections/Mindset";

export const metadata: Metadata = {
  title: "Premium Digital Systems, Websites & Automation",
  description:
    "Daniel Vlcek builds premium websites, business platforms, automation systems, CRM workflows, dashboards, and scalable digital infrastructure.",
  alternates: { canonical: "/" },
  openGraph: {
    title: "Daniel Vlcek | Premium Digital Systems",
    description:
      "Websites, platforms, dashboards, CRM workflows, and automations built as one operating layer for companies.",
    url: "/",
    type: "website",
  },
};

export default function Home() {
  return (
    <main className="site-page">
      <Hero />
      <Problem />
      <SystemElementsSection />
      <SolutionPillars />
      <PackagesSection />
      <Mindset />
      <FeaturedOutcomes />
      <Process />
      <Testimonials />
      <FinalCTA />
    </main>
  );
}
