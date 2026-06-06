import { ArrowUpRight } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { Badge } from "@/components/ui/Badge";
import { BusinessOperatingSystem } from "@/components/visuals/BusinessOperatingSystem";

const proof = ["Premium Websites", "Business Platforms", "Automation Systems", "CRM & Lead Systems", "Internal Dashboards"];

export function Hero() {
  return (
    <section data-section="hero" className="hero-section relative overflow-hidden">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(5,5,5,0.18)_0%,rgba(5,5,5,0.88)_92%),radial-gradient(circle_at_50%_12%,rgba(193,106,58,0.13),transparent_34%),radial-gradient(circle_at_50%_42%,rgba(143,163,177,0.16),transparent_44%),linear-gradient(180deg,#151713_0%,#0D0E0C_48%,#050505_100%)]" />
        <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-[#050505] to-transparent" />
      </div>
      <Container className="relative z-10" size="wide">
        <div className="mx-auto max-w-6xl text-center">
          <Badge className="mx-auto">Software Developer & Automation Architect</Badge>
          <h1 className="hero-heading mx-auto mt-8 max-w-6xl">Digital systems for companies that want to move faster.</h1>
          <p className="body-large mx-auto mt-7 max-w-4xl text-[#E5E0D4]">
            I design and build high-performing websites, business platforms, and automation systems that connect your leads, workflows, data, and operations into one scalable digital foundation.
          </p>
          <div className="mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <Button href="/contact">Book a Strategy Call <ArrowUpRight size={16} /></Button>
            <Button href="/services" variant="secondary">Explore Systems</Button>
          </div>
          <div className="mx-auto mt-10 flex max-w-4xl flex-wrap justify-center gap-2">
            {proof.map((item) => (
              <span key={item} className="rounded-full border border-[rgba(242,239,230,0.10)] bg-[rgba(8,8,7,0.38)] px-3 py-2 text-xs text-[#B8B1A4] backdrop-blur-xl">{item}</span>
            ))}
          </div>
        </div>
        <BusinessOperatingSystem />
      </Container>
    </section>
  );
}
