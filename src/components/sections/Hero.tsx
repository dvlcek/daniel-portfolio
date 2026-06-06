import { ArrowUpRight } from "lucide-react";
import { HeroProblemBridge } from "@/components/animations/HeroProblemBridge";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { Badge } from "@/components/ui/Badge";
import { BusinessOperatingSystem } from "@/components/visuals/BusinessOperatingSystem";

const proof = ["Connected lead flow", "One source of truth", "Automated handoffs", "Less manual work"];

export function Hero() {
  return (
    <section
      data-section="hero"
      className="relative min-h-[100svh] overflow-hidden pb-7 pt-[calc(var(--nav-height)+0.75rem)] lg:pb-6 lg:pt-[calc(var(--nav-height)+0.5rem)]"
    >
      <HeroProblemBridge />
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(5,5,5,0.08)_0%,rgba(5,5,5,0.70)_88%),radial-gradient(circle_at_50%_10%,rgba(193,106,58,0.14),transparent_31%),radial-gradient(circle_at_50%_45%,rgba(201,166,107,0.08),transparent_35%),radial-gradient(circle_at_50%_60%,rgba(143,163,177,0.10),transparent_43%),linear-gradient(180deg,#151713_0%,#0D0E0C_50%,#050505_100%)]" />
        <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-[#080807] to-transparent" />
      </div>
      <Container className="relative z-10" size="wide">
        <div className="mx-auto max-w-5xl text-center">
          <Badge className="mx-auto">Premium business systems for operators</Badge>
          <h1 className="mx-auto mt-4 max-w-4xl font-[var(--font-display)] text-[clamp(2.65rem,5.2vw,5.4rem)] font-normal leading-[0.94] tracking-[-0.055em] text-[#F2EFE6] text-balance">
            Connect scattered tools into one operating layer.
          </h1>
          <p className="mx-auto mt-4 max-w-3xl text-[clamp(0.98rem,1.18vw,1.1rem)] leading-7 tracking-[-0.01em] text-[#E5E0D4]">
            Premium websites, platforms, CRM workflows, dashboards, and automations that move leads, context, decisions, and execution through one scalable system.
          </p>
          <div className="mt-5 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <Button href="/contact">
              Book a Strategy Call <ArrowUpRight size={16} />
            </Button>
            <Button href="/services" variant="secondary">
              Explore Systems
            </Button>
          </div>
          <div className="mx-auto mt-4 flex max-w-3xl flex-wrap justify-center gap-2">
            {proof.map((item) => (
              <span
                key={item}
                className="rounded-full border border-[rgba(242,239,230,0.10)] bg-[rgba(8,8,7,0.38)] px-3 py-1.5 text-xs text-[#B8B1A4] backdrop-blur-xl"
              >
                {item}
              </span>
            ))}
          </div>
        </div>
        <BusinessOperatingSystem />
      </Container>
    </section>
  );
}
