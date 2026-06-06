import { ArrowUpRight } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { Badge } from "@/components/ui/Badge";
import { SystemFlow } from "@/components/visuals/SystemFlow";

const proof = ["Premium Websites", "Business Platforms", "Automation Systems", "CRM & Lead Systems", "Internal Dashboards"];

export function Hero() {
  return (
    <section className="hero-section relative overflow-hidden">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(5,5,5,0.14)_0%,rgba(5,5,5,0.82)_88%),radial-gradient(circle_at_50%_18%,rgba(143,163,177,0.22),transparent_42%),linear-gradient(180deg,#8FA3B1_0%,#2F3A3F_48%,#050505_100%)]" />
        <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-[#050505] to-transparent" />
      </div>
      <Container className="relative z-10">
        <div className="grid min-h-[calc(100svh-12rem)] gap-10 lg:grid-cols-[1fr_0.86fr] lg:items-center">
          <div>
            <Badge>Software Developer & Automation Architect</Badge>
            <h1 className="hero-heading mt-8 max-w-6xl">Digital systems for companies that want to move faster.</h1>
            <p className="body-large mt-7 max-w-3xl text-[#E5E0D4]">
              I design and build high-performing websites, business platforms, automation systems, CRM workflows, dashboards, and scalable digital infrastructure that connect leads, data, workflows, and operations into one calm operating layer.
            </p>
            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <Button href="/contact">Book a Strategy Call <ArrowUpRight size={16} /></Button>
              <Button href="/services" variant="secondary">Explore Systems</Button>
            </div>
            <div className="mt-10 flex flex-wrap gap-2">
              {proof.map((item) => (
                <span key={item} className="rounded-full border border-[rgba(242,239,230,0.10)] bg-[rgba(8,8,7,0.38)] px-3 py-2 text-xs text-[#B8B1A4] backdrop-blur-xl">{item}</span>
              ))}
            </div>
          </div>
          <div className="relative">
            <SystemFlow compact />
            <div className="glass-panel absolute -bottom-7 left-5 hidden rounded-3xl p-5 md:block">
              <p className="micro-label">System signal</p>
              <p className="mt-2 text-2xl font-semibold text-[#F2EFE6]">Less manual work</p>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
