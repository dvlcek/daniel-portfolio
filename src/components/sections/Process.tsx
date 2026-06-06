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
    <section id="process" className="relative overflow-hidden bg-site-bg py-20 md:py-28">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_15%_20%,rgba(95,116,128,0.10),transparent_34%),radial-gradient(circle_at_84%_88%,rgba(184,100,63,0.08),transparent_32%)]" />
      <Container>
        <Stagger itemSelector=".process-step" y={22} stagger={0.08} className="relative z-10">
          <div className="grid gap-10 lg:grid-cols-[0.9fr_0.72fr] lg:items-end">
            <div>
              <p className="font-mono text-xs font-semibold uppercase tracking-[0.24em] text-clay">
                Process
              </p>
              <h2 className="mt-5 max-w-4xl text-balance text-[clamp(2.5rem,5vw,5.4rem)] font-medium leading-[0.98] tracking-[-0.045em] text-cream">
                A structured process for building systems that actually work.
              </h2>
            </div>
            <p className="max-w-xl text-lg leading-8 text-stone lg:justify-self-end">
              Every project starts by understanding how the business works.
              Then the right website, platform, dashboard, CRM flow, or
              automation is planned and built around the real bottleneck.
            </p>
          </div>

          <div className="mt-14 grid gap-5">
            {processSteps.map((step, index) => (
              <article
                key={step.title}
                className="process-step grid gap-6 rounded-[2rem] border border-black/[0.08] bg-white/64 p-6 shadow-[0_18px_50px_rgba(21,21,18,0.06)] md:grid-cols-[auto_1fr_0.8fr] md:items-start"
              >
                <span className="flex h-12 w-12 items-center justify-center rounded-2xl border border-clay/25 bg-clay/10 font-mono text-xs font-semibold text-clay">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <div>
                  <p className="font-mono text-xs font-semibold uppercase tracking-[0.2em] text-ash">
                    Phase {String(index + 1).padStart(2, "0")}
                  </p>
                  <h3 className="mt-2 text-2xl font-semibold tracking-[-0.025em] text-cream">
                    {step.title}
                  </h3>
                  <p className="mt-4 text-sm leading-7 text-stone">
                    {step.description}
                  </p>
                </div>
                <div className="rounded-2xl border border-black/[0.07] bg-site-bg/70 p-4 shadow-[inset_0_1px_0_rgba(255,255,255,0.75)]">
                  <p className="font-mono text-[11px] font-semibold uppercase tracking-[0.18em] text-ash">
                    Output
                  </p>
                  <div className="mt-3 space-y-2">
                    {(phaseOutputs[index] ?? phaseOutputs[0]).map((item) => (
                      <div key={item} className="flex items-center gap-2 text-sm text-stone">
                        <Check size={14} className="text-clay" />
                        {item}
                      </div>
                    ))}
                  </div>
                </div>
              </article>
            ))}
          </div>

          <div className="mt-10 flex flex-col gap-5 rounded-[2rem] border border-black/[0.08] bg-white/64 p-6 shadow-[0_18px_50px_rgba(21,21,18,0.06)] md:flex-row md:items-center md:justify-between">
            <p className="max-w-3xl text-lg leading-8 text-stone">
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
