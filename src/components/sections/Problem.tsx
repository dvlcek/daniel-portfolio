import { Container } from "@/components/ui/Container";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { SystemCard } from "@/components/ui/SystemCard";

const problems = [
  {
    id: "context",
    title: "Context gets buried",
    problem:
      "Important details spread across tools, meetings, messages, forms, and inboxes.",
    cost: "Teams spend energy reconstructing the situation instead of moving the work forward with confidence.",
    fix: "A structured operating layer keeps context attached to the lead, project, customer, or workflow.",
    rotate: -2,
  },
  {
    id: "decisions",
    title: "Decisions disappear",
    problem:
      "Decisions happen in conversations, but rarely become a durable system of record.",
    cost: "People revisit the same questions, lose the reasoning, and execute from different versions of the truth.",
    fix: "Decision surfaces capture what changed, why it matters, who owns it, and what happens next.",
    rotate: 1.5,
  },
  {
    id: "ownership",
    title: "Ownership gets unclear",
    problem:
      "Work moves between people, departments, and tools without a clear owner at every step.",
    cost: "Handoffs slow down, accountability gets fuzzy, and small delays quietly become operational drag.",
    fix: "Routing logic and dashboards make the owner, status, and next action visible before momentum drops.",
    rotate: -1,
  },
  {
    id: "execution",
    title: "Execution slows down",
    problem:
      "Teams have to reconstruct what already happened before they can decide what to do next.",
    cost: "Response times stretch, follow-ups become inconsistent, and growth work gets buried under admin.",
    fix: "Automations, alerts, and reporting keep repeatable work moving through a reliable system.",
    rotate: 2,
  },
];

const targetPositions = [
  "left-[7%] top-[18%]",
  "right-[8%] top-[16%]",
  "left-[13%] bottom-[15%]",
  "right-[12%] bottom-[12%]",
];

export function Problem() {
  return (
    <section
      data-section="problem"
      className="section relative overflow-hidden bg-[#080807] pt-8 md:pt-14"
    >
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute inset-x-0 top-0 h-40 bg-gradient-to-b from-[#080807] via-[#080807]/86 to-transparent" />
        <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[#C16A3A]/30 to-transparent" />
        <div className="absolute left-1/2 top-0 h-32 w-px -translate-x-1/2 bg-gradient-to-b from-[#C16A3A]/45 to-transparent" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(193,106,58,0.10),transparent_34%),radial-gradient(circle_at_16%_42%,rgba(143,163,177,0.07),transparent_32%)]" />
      </div>
      <Container>
        <div className="relative">
          <div
            className="pointer-events-none absolute inset-0 hidden lg:block"
            aria-hidden="true"
          >
            <svg
              data-flow-lines="problem-scribble-lines"
              className="absolute inset-0 h-full w-full text-[#C16A3A]/30 opacity-70"
              viewBox="0 0 1200 720"
              fill="none"
            >
              <path
                d="M148 188 C310 110 448 174 592 326 C732 474 884 532 1050 214"
                stroke="currentColor"
                strokeWidth="1.2"
              />
              <path
                d="M220 560 C358 404 516 462 626 338 C766 182 924 322 1014 586"
                stroke="currentColor"
                strokeWidth="1.2"
              />
              <path
                d="M170 210 C360 310 424 470 612 350 C784 240 904 284 1032 198"
                stroke="currentColor"
                strokeWidth="1"
              />
            </svg>
            {problems.map((item, index) => (
              <div
                key={item.id}
                data-flow-target={item.id}
                data-flow-rotate={item.rotate}
                className={`${targetPositions[index]} absolute rounded-2xl border border-[#C16A3A]/24 bg-[#C16A3A]/10 px-4 py-3 text-sm font-semibold text-[#F2EFE6] backdrop-blur-xl`}
              >
                <span className="mr-2 inline-block h-1.5 w-1.5 rounded-full bg-[#C16A3A]" />
                {item.title}
              </div>
            ))}
          </div>

          <div className="relative z-10">
            <div className="mx-auto mb-8 flex w-fit items-center gap-3 rounded-full border border-[#C16A3A]/22 bg-[#C16A3A]/10 px-4 py-2 text-xs text-[#B8B1A4] backdrop-blur-xl">
              <span className="h-1.5 w-1.5 rounded-full bg-[#C16A3A] shadow-[0_0_18px_rgba(193,106,58,0.55)]" />
              System scan complete: friction points identified
            </div>
            <SectionTitle
              eyebrow="The real bottleneck"
              title="Most systems look organized — until the work starts moving."
              desc="Teams don’t usually lose momentum because they lack tools. They lose it because context, decisions, ownership, and execution live in separate places."
              align="center"
            />
            <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
              {problems.map((item, index) => (
                <SystemCard key={item.title} className="min-h-full">
                  <div
                    data-flow-problem-node
                    className="inline-flex items-center gap-2 rounded-full border border-[#C16A3A]/22 bg-[#C16A3A]/10 px-3 py-1.5 opacity-100"
                  >
                    <span className="h-1.5 w-1.5 rounded-full bg-[#C16A3A] shadow-[0_0_18px_rgba(193,106,58,0.55)]" />
                    <p className="micro-label text-[#E5E0D4]">
                      {String(index + 1).padStart(2, "0")}
                    </p>
                  </div>
                  <h3 className="card-heading mt-5">{item.title}</h3>
                  <div className="mt-5 grid gap-4 text-sm leading-7">
                    <ProblemLine label="Pain point" text={item.problem} />
                    <ProblemLine label="Business cost" text={item.cost} />
                    <ProblemLine
                      label="System response"
                      text={item.fix}
                      accent
                    />
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

function ProblemLine({
  label,
  text,
  accent = false,
}: {
  label: string;
  text: string;
  accent?: boolean;
}) {
  return (
    <div>
      <p
        className={
          accent ? "micro-label text-[#C16A3A]" : "micro-label text-[#6F766E]"
        }
      >
        {label}
      </p>
      <p className="mt-2 text-[#B8B1A4]">{text}</p>
    </div>
  );
}
