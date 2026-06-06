import { ArrowUpRight } from "lucide-react";
import { HeroProblemBridge } from "@/components/animations/HeroProblemBridge";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { Badge } from "@/components/ui/Badge";
import { BusinessOperatingSystem } from "@/components/visuals/BusinessOperatingSystem";

const proof = [
  "Connected lead flow",
  "One source of truth",
  "Automated handoffs",
  "Decision-ready dashboards",
  "Less manual work",
];

export function Hero() {
  return (
    <section data-section="hero" className="hero-section relative overflow-hidden">
      <HeroProblemBridge />
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(5,5,5,0.10)_0%,rgba(5,5,5,0.72)_88%),radial-gradient(circle_at_50%_10%,rgba(193,106,58,0.15),transparent_33%),radial-gradient(circle_at_50%_44%,rgba(201,166,107,0.09),transparent_36%),radial-gradient(circle_at_50%_58%,rgba(143,163,177,0.13),transparent_46%),linear-gradient(180deg,#151713_0%,#0D0E0C_50%,#050505_100%)]" />
        <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-[#080807] to-transparent" />
      </div>
      <Container className="relative z-10" size="wide">
        <div className="mx-auto max-w-6xl text-center">
          <Badge className="mx-auto">Premium business systems for operators</Badge>
          <h1 className="hero-heading mx-auto mt-7 max-w-5xl">
            Connect scattered tools into one intelligent operating layer.
          </h1>
          <p className="body-large mx-auto mt-6 max-w-3xl text-[#E5E0D4]">
            I design and build premium websites, platforms, CRM workflows, dashboards, and automations that make leads, context, decisions, and execution move through one scalable system.
          </p>
          <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <Button href="/contact">
              Book a Strategy Call <ArrowUpRight size={16} />
            </Button>
            <Button href="/services" variant="secondary">
              Explore Systems
            </Button>
          </div>
          <div className="mx-auto mt-7 flex max-w-4xl flex-wrap justify-center gap-2">
            {proof.map((item) => (
              <span
                key={item}
                className="rounded-full border border-[rgba(242,239,230,0.10)] bg-[rgba(8,8,7,0.38)] px-3 py-2 text-xs text-[#B8B1A4] backdrop-blur-xl"
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
