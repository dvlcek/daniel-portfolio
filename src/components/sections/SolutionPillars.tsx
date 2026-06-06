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

const systemFlow = [
  "First impression",
  "Lead intake",
  "Workflow logic",
  "Admin view",
  "Follow-up",
];

export function SolutionPillars() {
  return (
    <section className="relative overflow-hidden bg-[#F8F8F5] py-20 md:py-28">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(18,56,242,0.08),transparent_34%)]" />

      <Container>
        <Stagger itemSelector=".pillar-card" y={18} stagger={0.08} className="relative z-10">
          <div className="grid gap-10 lg:grid-cols-[0.95fr_0.7fr] lg:items-end">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.24em] text-[#1238F2]">
                The solution
              </p>
              <h2 className="mt-5 max-w-3xl text-balance text-4xl font-semibold tracking-tight text-[#10131A] md:text-5xl md:leading-[1.05]">
                I look at the workflow first, then build the right system
                around it.
              </h2>
            </div>
            <p className="max-w-xl text-lg leading-8 text-[#566176] lg:justify-self-end">
              Sometimes that means a website. Sometimes it means a dashboard,
              CRM flow, booking system, automation, or full platform. The tool
              follows the business problem.
            </p>
          </div>

          <div className="mt-14 grid gap-6 lg:grid-cols-[0.78fr_1fr]">
            <div className="rounded-[2rem] border border-[#DDE2EE] bg-white/78 p-6 shadow-[0_24px_70px_rgba(16,19,26,0.08)] backdrop-blur-xl">
              <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#7A8497]">
                Connected path
              </p>
              <h3 className="mt-3 text-2xl font-semibold tracking-tight text-[#10131A]">
                From first contact to daily work
              </h3>

              <div className="relative mt-8 space-y-4">
                <div className="absolute bottom-8 left-[18px] top-8 w-px bg-linear-to-b from-transparent via-[#1238F2]/35 to-transparent" />
                {systemFlow.map((item, index) => (
                  <div key={item} className="relative flex items-center gap-4">
                    <span className="relative z-10 flex h-10 w-10 shrink-0 items-center justify-center rounded-2xl bg-[#1238F2] font-mono text-[11px] text-white shadow-[0_12px_26px_rgba(18,56,242,0.22)]">
                      0{index + 1}
                    </span>
                    <div className="flex-1 rounded-2xl border border-[#E3E7F0] bg-[#FAFAF8] px-4 py-3 text-sm font-medium text-[#333B4D]">
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
                  className="pillar-card rounded-[2rem] border border-[#DDE2EE] bg-white p-6 shadow-[0_16px_48px_rgba(16,19,26,0.06)] transition duration-300 hover:-translate-y-1 hover:border-[#1238F2]/25 hover:shadow-[0_22px_60px_rgba(16,19,26,0.10)]"
                >
                  <div className="grid gap-5 md:grid-cols-[auto_1fr]">
                    <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#F1F4FB] font-mono text-xs font-semibold text-[#1238F2]">
                      {pillar.number}
                    </div>
                    <div>
                      <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#7A8497]">
                        {pillar.layer}
                      </p>
                      <h3 className="mt-2 text-2xl font-semibold tracking-tight text-[#10131A]">
                        {pillar.title}
                      </h3>
                      <p className="mt-4 max-w-2xl text-sm leading-7 text-[#566176]">
                        {pillar.description}
                      </p>
                      <div className="mt-5 flex flex-wrap gap-2">
                        {pillar.points.map((point) => (
                          <span
                            key={point}
                            className="inline-flex items-center gap-1.5 rounded-full border border-[#DDE2EE] bg-[#FAFAF8] px-3 py-1.5 text-xs font-medium text-[#42506A]"
                          >
                            <CheckCircle2 size={13} className="text-[#1238F2]" />
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

          <div className="mt-10 flex flex-col items-start gap-5 rounded-[2rem] border border-[#DDE2EE] bg-white/78 p-6 shadow-[0_16px_48px_rgba(16,19,26,0.06)] backdrop-blur-xl md:flex-row md:items-center md:justify-between">
            <p className="max-w-2xl text-sm leading-7 text-[#566176] md:text-base">
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
