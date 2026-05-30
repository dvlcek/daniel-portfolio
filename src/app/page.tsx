import type { Metadata } from "next";
import { Hero } from "@/components/sections/Hero";
import { Problem } from "@/components/sections/Problem";
import { SolutionPillars } from "@/components/sections/SolutionPillars";
import { FeaturedOutcomes } from "@/components/sections/FeaturedOutcomes";
import { Process } from "@/components/sections/Process";
import { PackagesSection } from "@/components/sections/PackagesSection";
import { Testimonials } from "@/components/sections/Testimonials";
import { FAQ } from "@/components/sections/FAQ";
import { FinalCTA } from "@/components/sections/FinalCTA";

export const metadata: Metadata = {
  title: "Software Developer & Automation Architect",
  description:
    "Daniel Vlcek builds premium websites, business automation, internal dashboards, CRM workflows, and custom business operating systems for companies in Austria and Europe.",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Daniel Vlcek | Software Developer & Automation Architect",
    description:
      "Premium websites, platform rebuilds, business automation, dashboards, CRM workflows, and custom business systems for companies that need cleaner operations.",
    url: "/",
    type: "website",
  },
};

export default function Home() {
  return (
    <main>
      <Hero />
      <Problem />
      <FeaturedOutcomes />
      <SolutionPillars />
      <Process />
      <Testimonials />
      <PackagesSection />
      <FAQ />
      <FinalCTA />
    </main>
  );
}
