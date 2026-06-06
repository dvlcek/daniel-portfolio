import { ArrowUpRight, CheckCircle2 } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { Stagger } from "@/components/animations/ScrollAnimation";

const pillars = [
  {
    number: "01",
    title: "Website / Landing Page",
    layer: "Public trust layer",
    description:
      "A clear website or landing page that explains the offer, builds trust, captures the right information, and gives visitors a simple next step.",
    points: ["Clear offer", "Lead intake", "Trust building"],
  },
  {
    number: "02",
    title: "Workflow & Automation",
    layer: "Process layer",
    description:
      "CRM steps, email workflows, reminders, notifications, and handoffs connected so leads, clients, and repeated tasks do not disappear in scattered tools.",
    points: ["CRM flow", "Email workflows", "Task automation"],
  },
  {
    number: "03",
    title: "Platform & Internal Tools",
    layer: "Operations layer",
    description:
      "Dashboards, client portals, booking or payment flows, and admin tools that give the business one clearer place to manage the work.",
    points: ["Dashboard", "Client system", "Admin tool"],
  },
];

const systemFlow = ["First impression", "Lead intake", "Workflow logic", "Admin view", "Follow-up"];

export function SolutionPillars() {
  return (
    <section className="relative overflow-hidden bg-site-bg-deep py-20 md:py-28">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_80%_18%,rgba(95,116,128,0.10),transparent_34%),radial-gradient(circle_at_20%_80%,rgba(184,100,63,0.08),transparent_34%)]" />
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-linear-to-r from-transparent via-black/[0.08] to-transparent" />

      <Container>
        <Stagger itemSelector=".pillar-card" y={18} stagger={0.08} className="relative z-10">
          <div className="grid gap-10 lg:grid-cols-[0.95fr_0.7fr] lg:items-end">
            <div>
              <p className="font-mono text-xs font-semibold uppercase tracking-[0.24em] text-clay">
                The solution
              </p>
              <h2 className="mt-5 max-w-4xl text-balance text-[clamp(2.5rem,5vw,5.4rem)] font-medium leading-[0.98] tracking-[-0.045em] text-cream">
                The website is only the visible layer. The real value is the system behind it.
              </h2>
            </div>
            <p className="max-w-xl text-lg leading-8 text-stone lg:justify-self-end">
              Sometimes that means a website. Sometimes it means a dashboard,
              CRM flow, booking system, automation, or full platform. The tool
              follows the business problem.
            </p>
          </div>

          <div className="mt-14 grid gap-6 lg:grid-cols-[0.78fr_1fr]">
            <div className="rounded-[2rem] border border-black/[0.08] bg-white/58 p-6 shadow-[0_24px_70px_rgba(21,21,18,0.07)] backdrop-blur-xl">
              <p className="font-mono text-xs font-semibold uppercase tracking-[0.22em] text-ash">
                Connected path
              </p>
              <h3 className="mt-3 text-3xl font-medium tracking-[-0.035em] text-cream">
                From first contact to daily work
              </h3>

              <div className="relative mt-8 space-y-4">
                <div className="absolute bottom-8 left-[18px] top-8 w-px bg-linear-to-b from-transparent via-clay/40 to-transparent" />
                {systemFlow.map((item, index) => (
                  <div key={item} className="relative flex items-center gap-4">
                    <span className="relative z-10 flex h-10 w-10 shrink-0 items-center justify-center rounded-2xl border border-clay/25 bg-clay/10 font-mono text-[11px] text-clay">
                      0{index + 1}
                    </span>
                    <div className="flex-1 rounded-2xl border border-black/[0.07] bg-site-bg/70 px-4 py-3 text-sm font-medium text-muted-cream shadow-[inset_0_1px_0_rgba(255,255,255,0.75)]">
                      {item}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="grid gap-5">
              {pillars.map((pillar) => (
                <article
                  key={pillar.title}
                  className="pillar-card rounded-[2rem] border border-black/[0.08] bg-white/64 p-6 shadow-[0_18px_50px_rgba(21,21,18,0.06)] transition duration-300 hover:-translate-y-1 hover:border-clay/20 hover:bg-white"
                >
                  <div className="grid gap-5 md:grid-cols-[auto_1fr]">
                    <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-clay/25 bg-clay/10 font-mono text-xs font-semibold text-clay">
                      {pillar.number}
                    </div>
                    <div>
                      <p className="font-mono text-xs font-semibold uppercase tracking-[0.2em] text-ash">
                        {pillar.layer}
                      </p>
                      <h3 className="mt-2 text-2xl font-semibold tracking-[-0.02em] text-cream">
                        {pillar.title}
                      </h3>
                      <p className="mt-4 max-w-2xl text-sm leading-7 text-stone">
                        {pillar.description}
                      </p>
                      <div className="mt-5 flex flex-wrap gap-2">
                        {pillar.points.map((point) => (
                          <span
                            key={point}
                            className="inline-flex items-center gap-1.5 rounded-full border border-black/[0.07] bg-site-bg/70 px-3 py-1.5 text-xs font-medium text-stone"
                          >
                            <CheckCircle2 size={13} className="text-clay" />
                            {point}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>

          <div className="mt-10 flex flex-col items-start gap-5 rounded-[2rem] border border-black/[0.08] bg-white/64 p-6 shadow-[0_18px_50px_rgba(21,21,18,0.06)] backdrop-blur-xl md:flex-row md:items-center md:justify-between">
            <p className="max-w-2xl text-sm leading-7 text-stone md:text-base">
              The final shape depends on the bottleneck. The goal is always the
              same: make the business easier to understand, manage, and improve.
            </p>
            <Button href="/work" variant="primary">
              View real projects
              <ArrowUpRight size={15} />
            </Button>
          </div>
        </Stagger>
      </Container>
    </section>
  );
}
