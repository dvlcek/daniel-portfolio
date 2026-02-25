import { SiteHeader } from "@/components/site/SiteHeader";
import { SiteFooter } from "@/components/site/SiteFooter";

import { Hero } from "@/components/sections/Hero";
import { Problem } from "@/components/sections/Problem";
import { Philosophy } from "@/components/sections/Philosophy";
import { Services } from "@/components/sections/Services";
import { Work } from "@/components/sections/Work";
import { Process } from "@/components/sections/Process";
import { Mindset } from "@/components/sections/Mindset";
import { FinalCTA } from "@/components/sections/FinalCTA";

export default function Home() {
  return (
    <main>
      <SiteHeader />
      <Hero />
      <Problem />
      <Philosophy />
      <Services />
      <Work />
      <Process />
      <Mindset />
      <FinalCTA />
      <SiteFooter />
    </main>
  );
}