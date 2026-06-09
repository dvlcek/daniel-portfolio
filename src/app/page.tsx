import type { Metadata } from "next";
import { Hero } from "@/components/sections/Hero";
import { Problem } from "@/components/sections/Problem";
import { SolutionPillars } from "@/components/sections/SolutionPillars";
import { FeaturedOutcomes } from "@/components/sections/FeaturedOutcomes";
import { Process } from "@/components/sections/Process";
import { PackagesSection } from "@/components/sections/PackagesSection";
import { Testimonials } from "@/components/sections/Testimonials";
import { FinalCTA } from "@/components/sections/FinalCTA";
import { SystemScrollTransition } from "@/components/animations/SystemScrollTransition";
import { BusinessPlatformSection } from "@/components/sections/BusinessPlatformSection";

export const metadata: Metadata = {
  title: "Business Operating System Build",
  description:
    "Daniel Vlcek rebuilds websites, lead capture, CRM workflows, dashboards, automations, and internal tools into one scale-ready business operating system.",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Daniel Vlcek | Business Operating System Build",
    description:
      "From scattered tools to one scale-ready business system: websites, CRM workflows, automations, dashboards, and internal tools connected.",
    url: "/",
    type: "website",
  },
};

export default function Home() {
  return (
    <main>
      <Hero />
      <Problem />
      <SystemScrollTransition />
      <SolutionPillars />
      <PackagesSection />
      <BusinessPlatformSection />
      <FeaturedOutcomes />
      <Process />
      <Testimonials />
      <FinalCTA />
    </main>
  );
}
