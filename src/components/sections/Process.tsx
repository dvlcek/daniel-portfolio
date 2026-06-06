import { Container } from "@/components/ui/Container";
import { SectionTitle } from "@/components/ui/SectionTitle";

const steps = [
  ["Diagnose", "Understand the business model, website, current tools, workflows, bottlenecks, and growth goals."],
  ["Architect", "Define the website, platform, automation logic, CRM flow, dashboard, and data structure."],
  ["Build", "Develop the frontend, backend logic, integrations, automations, and internal tools."],
  ["Connect", "Connect systems, test workflows, validate user journeys, and prepare launch."],
  ["Improve", "Measure real usage, optimize the system, and expand it over time."],
];

export function Process() {
  return (
    <section className="section-compact relative" id="process">
      <Container>
        <SectionTitle eyebrow="Process" title="A structured process for building systems that actually work." desc="The process keeps the work business-first: understand the bottleneck, design the operating layer, build it cleanly, connect the workflows, and improve from real usage." />
        <div className="relative grid gap-4 lg:grid-cols-5">
          <div className="absolute left-0 right-0 top-8 hidden h-px bg-gradient-to-r from-transparent via-[rgba(242,239,230,0.18)] to-transparent lg:block" />
          {steps.map(([title, text], index) => (
            <article key={title} className="relative rounded-[24px] border border-[rgba(242,239,230,0.10)] bg-[rgba(242,239,230,0.04)] p-5 backdrop-blur-xl">
              <span className="flex h-10 w-10 items-center justify-center rounded-full border border-[#C16A3A]/30 bg-[#C16A3A]/12 font-mono text-xs text-[#E5E0D4]">{String(index + 1).padStart(2, "0")}</span>
              <h3 className="mt-6 text-xl font-semibold text-[#F2EFE6]">{title}</h3>
              <p className="mt-3 text-sm leading-7 text-[#B8B1A4]">{text}</p>
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
}
