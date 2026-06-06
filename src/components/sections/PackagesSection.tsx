import { ArrowUpRight } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { SystemCard } from "@/components/ui/SystemCard";

export const services = [
  { title: "Premium Websites", text: "High-converting websites built with strong positioning, clean UI, performance, and scalable frontend architecture.", outcomes: ["Stronger first impression", "Higher trust", "Better conversion"] },
  { title: "Business Platforms", text: "Custom platforms that connect users, workflows, data, and internal business logic.", outcomes: ["Less operational chaos", "Better process control", "Scalable infrastructure"] },
  { title: "Automation Systems", text: "AI-powered and rule-based workflows that reduce manual work across sales, support, administration, and operations.", outcomes: ["Faster response times", "Fewer repeated tasks", "Better consistency"] },
  { title: "CRM & Lead Systems", text: "Lead capture, qualification, routing, follow-up, and pipeline systems designed around the real sales process.", outcomes: ["Less lost revenue", "Clearer pipeline visibility", "Structured follow-up"] },
  { title: "Internal Dashboards", text: "Dashboards and tools that give companies clarity over tasks, workflows, performance, and data.", outcomes: ["Better visibility", "Faster decisions", "Clear internal overview"] },
];

export function PackagesSection() {
  return (
    <section className="section relative" id="services">
      <Container>
        <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <SectionTitle eyebrow="What I build" title="Digital systems built around how your business actually works." desc="The work can start as a website, platform, automation, CRM workflow, or dashboard. The goal is always the same: a clearer system that helps the business operate faster." className="mb-0" />
          <Button href="/services" variant="secondary" className="w-fit">View services <ArrowUpRight size={16} /></Button>
        </div>
        <div className="mt-10 grid gap-4 lg:grid-cols-3">
          {services.map((service, index) => (
            <SystemCard key={service.title} className={index === 0 ? "lg:col-span-2" : ""}>
              <p className="micro-label text-[#C16A3A]">{String(index + 1).padStart(2, "0")}</p>
              <h3 className="card-heading mt-5">{service.title}</h3>
              <p className="mt-4 text-sm leading-7 text-[#B8B1A4]">{service.text}</p>
              <div className="mt-6 flex flex-wrap gap-2">
                {service.outcomes.map((outcome) => <span key={outcome} className="rounded-full border border-[rgba(242,239,230,0.10)] bg-[rgba(242,239,230,0.04)] px-3 py-1.5 text-xs text-[#E5E0D4]">{outcome}</span>)}
              </div>
            </SystemCard>
          ))}
        </div>
      </Container>
    </section>
  );
}
