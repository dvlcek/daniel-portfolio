import type { Metadata } from "next";
import { Hero } from "@/components/sections/Hero";
import { Problem } from "@/components/sections/Problem";
import { SolutionPillars } from "@/components/sections/SolutionPillars";
import { FeaturedOutcomes } from "@/components/sections/FeaturedOutcomes";
import { Process } from "@/components/sections/Process";
import { PackagesSection } from "@/components/sections/PackagesSection";
import { Testimonials } from "@/components/sections/Testimonials";
import { FinalCTA } from "@/components/sections/FinalCTA";
import { HeroProblemBridge } from "@/components/animations/HeroProblemBridge";

export const metadata: Metadata = {
  title: "Websites, Platforms & Business Automation",
  description:
    "Daniel Vlcek builds websites, platforms, automations, dashboards, and business systems that help companies run clearer and grow smarter.",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Daniel Vlcek | Websites, Platforms & Business Automation",
    description:
      "Websites, platforms, dashboards, CRM workflows, and automations for businesses that want clearer daily operations.",
    url: "/",
    type: "website",
  },
};

export default function Home() {
  return (
    <main>
      <Hero />
      <Problem />
      <HeroProblemBridge />
      <SolutionPillars />
      <PackagesSection />
      <Testimonials />
      <FeaturedOutcomes />
      <Process />
      <FinalCTA />
    </main>
  );
}
