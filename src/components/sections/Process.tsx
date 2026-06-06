import { Check } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { Stagger } from "@/components/animations/ScrollAnimation";
import { processSteps } from "@/lib/siteContent";

const phaseOutputs = [
  ["Business goals", "Current workflow", "Main friction points"],
  ["Lead path", "Manual steps", "System gaps"],
  ["Pages and features", "Workflow logic", "Integration path"],
  ["Working system", "Connected tools", "Tested flows"],
  ["Real usage feedback", "Better handoffs", "Next useful step"],
];

export function Process() {
  return (
    <section
      id="process"
      className="relative overflow-hidden bg-[#F8F8F5] py-20 md:py-28"
    >
      <Container>
        <Stagger itemSelector=".process-step" y={22} stagger={0.08}>
          <div className="grid gap-10 lg:grid-cols-[0.9fr_0.72fr] lg:items-end">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.24em] text-[#1238F2]">
                Process
              </p>
              <h2 className="mt-5 max-w-3xl text-balance text-4xl font-semibold tracking-tight text-[#10131A] md:text-5xl md:leading-[1.05]">
                A simple process from business clarity to useful systems.
              </h2>
            </div>
            <p className="max-w-xl text-lg leading-8 text-[#566176] lg:justify-self-end">
              Every project starts by understanding how the business works.
              Then the right website, platform, dashboard, CRM flow, or
              automation is planned and built around the real bottleneck.
            </p>
          </div>

          <div className="mt-14 grid gap-5">
            {processSteps.map((step, index) => (
              <article
                key={step.title}
                className="process-step grid gap-6 rounded-[2rem] border border-[#DDE2EE] bg-white p-6 shadow-[0_16px_48px_rgba(16,19,26,0.06)] md:grid-cols-[auto_1fr_0.8fr] md:items-start"
              >
                <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#1238F2] font-mono text-xs font-semibold text-white">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#7A8497]">
                    Phase {String(index + 1).padStart(2, "0")}
                  </p>
                  <h3 className="mt-2 text-2xl font-semibold tracking-tight text-[#10131A]">
                    {step.title}
                  </h3>
                  <p className="mt-4 text-sm leading-7 text-[#566176]">
                    {step.description}
                  </p>
                </div>
                <div className="rounded-2xl bg-[#FAFAF8] p-4">
                  <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-[#7A8497]">
                    Output
                  </p>
                  <div className="mt-3 space-y-2">
                    {(phaseOutputs[index] ?? phaseOutputs[0]).map((item) => (
                      <div
                        key={item}
                        className="flex items-center gap-2 text-sm text-[#42506A]"
                      >
                        <Check size={14} className="text-[#1238F2]" />
                        {item}
                      </div>
                    ))}
                  </div>
                </div>
              </article>
            ))}
          </div>

          <div className="mt-10 flex flex-col gap-5 rounded-[2rem] border border-[#DDE2EE] bg-white p-6 shadow-[0_16px_48px_rgba(16,19,26,0.06)] md:flex-row md:items-center md:justify-between">
            <p className="max-w-3xl text-lg leading-8 text-[#566176]">
              The launch is not the finish line. It is where the website,
              tools, and workflows start showing what should improve next.
            </p>
            <Button href="/contact" variant="primary">
              Tell me what you want to improve
            </Button>
          </div>
        </Stagger>
      </Container>
    </section>
  );
}
