import { Container } from "@/components/ui/Container";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { SystemCard } from "@/components/ui/SystemCard";

const problems = [
  {
    id: "manual-work",
    title: "Manual Work",
    problem: "Teams repeat the same operational tasks every week.",
    cost: "Slow response times, inconsistent handoffs, and senior people stuck doing admin instead of growth work.",
    fix: "Automated intake, routing, follow-up, notifications, and reporting workflows.",
    rotate: -2,
  },
  {
    id: "crm",
    title: "Scattered Tools",
    problem: "Your website, CRM, inboxes, spreadsheets, and internal tools all hold different parts of the truth.",
    cost: "Nobody has a reliable view of what happened, what is next, or what needs attention.",
    fix: "A connected operating layer that keeps data and actions moving through one structure.",
    rotate: 1.5,
  },
  {
    id: "leads",
    title: "Lost Leads",
    problem: "Requests arrive, but the next step depends on someone remembering to follow up manually.",
    cost: "Good opportunities cool down, pipeline visibility gets weaker, and revenue leaks quietly.",
    fix: "Lead capture, qualification, CRM logic, and automated next-step communication.",
    rotate: -1,
  },
  {
    id: "dashboard",
    title: "No Operational Clarity",
    problem: "Important data exists somewhere, but it is not visible where decisions are made.",
    cost: "Teams guess instead of seeing bottlenecks, workload, performance, and customer status clearly.",
    fix: "Internal dashboards and reporting layers that make operations easier to understand.",
    rotate: 2,
  },
];

const targetPositions = ["left-[7%] top-[18%]", "right-[8%] top-[16%]", "left-[13%] bottom-[15%]", "right-[12%] bottom-[12%]"];

export function Problem() {
  return (
    <section data-section="problem" className="section relative overflow-hidden">
      <div className="pointer-events-none absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-[#050505] to-transparent" />
      <Container>
        <div className="relative">
          <div className="pointer-events-none absolute inset-0 hidden lg:block" aria-hidden="true">
            <svg data-flow-lines="problem-scribble-lines" className="absolute inset-0 h-full w-full text-[#C16A3A]/30 opacity-0" viewBox="0 0 1200 720" fill="none">
              <path d="M148 188 C310 110 448 174 592 326 C732 474 884 532 1050 214" stroke="currentColor" strokeWidth="1.2" />
              <path d="M220 560 C358 404 516 462 626 338 C766 182 924 322 1014 586" stroke="currentColor" strokeWidth="1.2" />
              <path d="M170 210 C360 310 424 470 612 350 C784 240 904 284 1032 198" stroke="currentColor" strokeWidth="1" />
            </svg>
            {problems.map((item, index) => (
              <div
                key={item.id}
                data-flow-target={item.id}
                data-flow-rotate={item.rotate}
                className={`${targetPositions[index]} absolute rounded-2xl border border-[#C16A3A]/24 bg-[#C16A3A]/10 px-4 py-3 text-sm font-semibold text-[#F2EFE6] opacity-0 backdrop-blur-xl`}
              >
                <span className="mr-2 inline-block h-1.5 w-1.5 rounded-full bg-[#C16A3A]" />
                {item.title}
              </div>
            ))}
          </div>

          <div className="relative z-10">
            <SectionTitle
              eyebrow="The real bottleneck"
              title="Most companies do not have a website problem. They have a system problem."
              desc="A website can look good and still fail operationally. Leads get handled manually, follow-ups depend on memory, tools do not talk to each other, and important business data stays scattered across inboxes, spreadsheets, and disconnected platforms."
            />
            <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
              {problems.map((item, index) => (
                <SystemCard key={item.title} className="min-h-full">
                  <div data-flow-problem-node className="inline-flex items-center gap-2 rounded-full border border-[#C16A3A]/22 bg-[#C16A3A]/10 px-3 py-1.5 opacity-100">
                    <span className="h-1.5 w-1.5 rounded-full bg-[#C16A3A] shadow-[0_0_18px_rgba(193,106,58,0.55)]" />
                    <p className="micro-label text-[#E5E0D4]">{String(index + 1).padStart(2, "0")}</p>
                  </div>
                  <h3 className="card-heading mt-5">{item.title}</h3>
                  <div className="mt-5 grid gap-4 text-sm leading-7">
                    <ProblemLine label="Problem" text={item.problem} />
                    <ProblemLine label="Business cost" text={item.cost} />
                    <ProblemLine label="System fix" text={item.fix} accent />
                  </div>
                </SystemCard>
              ))}
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}

function ProblemLine({ label, text, accent = false }: { label: string; text: string; accent?: boolean }) {
  return (
    <div>
      <p className={accent ? "micro-label text-[#C16A3A]" : "micro-label text-[#6F766E]"}>{label}</p>
      <p className="mt-2 text-[#B8B1A4]">{text}</p>
    </div>
  );
}
