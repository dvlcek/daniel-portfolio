import { Hero } from "@/components/sections/Hero";
import { ProofStrip } from "@/components/sections/ProofStrip";
import { Problem } from "@/components/sections/Problem";
import { SolutionPillars } from "@/components/sections/SolutionPillars";
import { FeaturedOutcomes } from "@/components/sections/FeaturedOutcomes";
import { Process } from "@/components/sections/Process";
import { PackagesSection } from "@/components/sections/PackagesSection";
import { Capabilities } from "@/components/sections/Capabilities";
import { Testimonials } from "@/components/sections/Testimonials";
import { FAQ } from "@/components/sections/FAQ";
import { FinalCTA } from "@/components/sections/FinalCTA";

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
