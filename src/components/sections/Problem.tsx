import { Container } from "@/components/ui/Container";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { SystemCard } from "@/components/ui/SystemCard";

const painPoints = [
  {
    id: "context",
    title: "Context gets buried across tools and conversations",
    description:
      "Customer details, notes, files, and updates live in separate places, so every next step starts with a search.",
  },
  {
    id: "decisions",
    title: "Decisions happen without a durable record",
    description:
      "The reason behind a choice disappears into chats, meetings, and inboxes, leaving the team to re-ask what was already decided.",
  },
  {
    id: "ownership",
    title: "Ownership becomes unclear between handoffs",
    description:
      "Work moves between people and tools without a visible owner, status, or next action at every stage.",
  },
  {
    id: "execution",
    title: "Execution slows while people reconstruct history",
    description:
      "Teams lose momentum because they have to rebuild context before they can confidently move the work forward.",
  },
  {
    id: "manual",
    title: "Manual tasks multiply because nothing is truly connected",
    description:
      "Copy-paste updates, reminders, spreadsheet fixes, and status checks quietly become the operating system.",
  },
];

const chaosNodes = [
  { id: "website", label: "Website", position: "left-[8%] top-[13%]", rotate: -4 },
  { id: "crm", label: "CRM", position: "left-[24%] top-[33%]", rotate: 3 },
  { id: "emails", label: "Emails", position: "left-[6%] top-[56%]", rotate: -2 },
  { id: "booking", label: "Booking", position: "left-[22%] bottom-[13%]", rotate: 4 },
  { id: "payments", label: "Payments", position: "left-[7%] bottom-[10%]", rotate: -5 },
  { id: "manual-tasks", label: "Manual tasks", position: "left-[31%] top-[12%]", rotate: 5 },
  { id: "notion", label: "Notion", position: "right-[31%] top-[11%]", rotate: 3 },
  { id: "telegram", label: "Telegram", position: "right-[8%] top-[17%]", rotate: -4 },
  { id: "gmail", label: "Gmail", position: "right-[24%] top-[36%]", rotate: 5 },
  { id: "slack", label: "Slack", position: "right-[8%] top-[57%]", rotate: -2 },
  { id: "drive", label: "Drive", position: "right-[27%] bottom-[13%]", rotate: 4 },
  { id: "automation", label: "Automation", position: "right-[6%] bottom-[10%]", rotate: -4 },
];

const fragments = [
  "Who owns this?",
  "Same update again",
  "Waiting on context",
  "Manual reminder",
  "No source of truth",
];

export function Problem() {
  return (
    <section
      data-section="problem"
      className="relative overflow-hidden bg-[#080807] pb-20 pt-0 md:pb-28"
    >
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute inset-x-0 top-0 h-28 bg-gradient-to-b from-[#080807] via-[#080807]/82 to-transparent" />
        <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[#C16A3A]/24 to-transparent" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(193,106,58,0.10),transparent_31%),radial-gradient(circle_at_18%_36%,rgba(124,132,100,0.07),transparent_30%),radial-gradient(circle_at_82%_46%,rgba(143,163,177,0.06),transparent_30%),linear-gradient(180deg,#080807_0%,#050505_100%)]" />
      </div>

      <Container className="relative z-10" size="wide">
        <div className="relative mx-auto max-w-7xl">
          <div className="relative min-h-[28rem] overflow-hidden rounded-b-[34px] border-x border-b border-[rgba(242,239,230,0.09)] bg-[rgba(8,8,7,0.34)] px-5 pb-6 pt-0 shadow-[0_28px_100px_rgba(0,0,0,0.28)] backdrop-blur-xl md:px-7 lg:min-h-[31rem]">
            <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_50%_30%,rgba(193,106,58,0.10),transparent_26%),radial-gradient(circle_at_28%_18%,rgba(242,239,230,0.035),transparent_20%),radial-gradient(circle_at_70%_74%,rgba(201,166,107,0.055),transparent_24%)]" />
            <div className="pointer-events-none absolute inset-0 opacity-45 [background-image:radial-gradient(rgba(242,239,230,0.10)_1px,transparent_1px)] [background-size:28px_28px] [mask-image:linear-gradient(to_bottom,black,transparent_88%)]" />

            <svg
              data-flow-lines="problem-scribble-lines"
              className="pointer-events-none absolute inset-0 hidden h-full w-full text-[#C9A66B]/30 opacity-0 lg:block"
              viewBox="0 0 1200 520"
              fill="none"
              aria-hidden="true"
            >
              <path d="M106 120 C250 58 330 190 454 146 C590 92 612 252 746 218 C874 164 920 58 1056 124" stroke="currentColor" strokeWidth="1.15" strokeDasharray="8 10" />
              <path d="M118 330 C258 280 330 412 486 354 C620 292 708 420 826 336 C936 258 1018 332 1100 270" stroke="currentColor" strokeWidth="1.1" strokeDasharray="5 13" />
              <path d="M180 456 C280 402 426 494 526 430 C662 330 740 486 898 428 C998 392 1044 452 1110 398" stroke="currentColor" strokeWidth="1" strokeDasharray="2 12" />
              <path d="M390 88 C438 150 382 196 448 230 C510 260 462 314 540 348" stroke="#C16A3A" strokeOpacity="0.32" strokeWidth="1.15" />
              <path d="M764 104 C704 160 790 208 724 250 C662 294 734 340 650 382" stroke="#C16A3A" strokeOpacity="0.30" strokeWidth="1.15" />
            </svg>

            <div className="pointer-events-none absolute left-1/2 top-[43%] hidden -translate-x-1/2 -translate-y-1/2 text-center lg:block">
              <div className="rounded-full border border-[#C16A3A]/18 bg-[#050505]/42 px-5 py-3 text-sm font-semibold text-[#E5E0D4] backdrop-blur-xl">
                Too many tools. Zero connection.
              </div>
            </div>

            <div className="hidden lg:block" aria-hidden="true">
              {chaosNodes.map((node) => (
                <div
                  key={node.id}
                  data-flow-target={node.id}
                  data-flow-rotate={node.rotate}
                  className={`${node.position} absolute z-20 rounded-2xl border border-[rgba(242,239,230,0.10)] bg-[rgba(8,8,7,0.62)] px-3.5 py-2.5 text-sm font-semibold text-[#E5E0D4] shadow-[0_18px_52px_rgba(0,0,0,0.22)] backdrop-blur-xl`}
                  style={{ transform: `rotate(${node.rotate}deg)` }}
                >
                  <span className="mr-2 inline-block h-1.5 w-1.5 rounded-full bg-[#C16A3A]/80" />
                  {node.label}
                </div>
              ))}

              {fragments.map((fragment, index) => (
                <div
                  key={fragment}
                  className="absolute z-10 rounded-full border border-[#C16A3A]/14 bg-[#C16A3A]/7 px-3 py-1.5 font-mono text-[0.64rem] uppercase tracking-[0.08em] text-[#8E9188] backdrop-blur-xl"
                  style={{
                    left: `${22 + ((index * 13) % 48)}%`,
                    top: `${18 + ((index * 17) % 52)}%`,
                    transform: `rotate(${index % 2 ? -5 : 4}deg)`,
                  }}
                >
                  {fragment}
                </div>
              ))}

              <span className="absolute left-[47%] top-[22%] z-10 font-serif text-5xl text-[#C16A3A]/24">?</span>
              <span className="absolute left-[58%] top-[56%] z-10 font-serif text-5xl text-[#C16A3A]/22">?</span>
            </div>
          </div>
        </div>

        <div className="relative z-20 mx-auto mt-14 max-w-6xl md:mt-16">
          <div className="mx-auto mb-8 flex w-fit items-center gap-3 rounded-full border border-[#C16A3A]/20 bg-[#C16A3A]/9 px-4 py-2 text-xs text-[#B8B1A4] backdrop-blur-xl">
            <span className="h-1.5 w-1.5 rounded-full bg-[#C16A3A] shadow-[0_0_18px_rgba(193,106,58,0.55)]" />
            Operational drag appears when work starts moving
          </div>

          <SectionTitle
            eyebrow="The real bottleneck"
            title="Most systems look organized — until the work starts moving."
            desc="Teams don’t lose momentum because they lack tools. They lose it because context, decisions, ownership, and execution live in separate places."
            align="center"
          />

          <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-5">
            {painPoints.map((item, index) => (
              <SystemCard
                key={item.id}
                className="min-h-full bg-[linear-gradient(180deg,rgba(242,239,230,0.055),rgba(242,239,230,0.022)),rgba(8,8,7,0.66)] lg:backdrop-blur-2xl"
              >
                <div
                  data-flow-problem-node
                  className="inline-flex items-center gap-2 rounded-full border border-[#C16A3A]/22 bg-[#C16A3A]/10 px-3 py-1.5"
                >
                  <span className="h-1.5 w-1.5 rounded-full bg-[#C16A3A] shadow-[0_0_18px_rgba(193,106,58,0.55)]" />
                  <p className="micro-label text-[#E5E0D4]">
                    {String(index + 1).padStart(2, "0")}
                  </p>
                </div>
                <h3 className="mt-5 text-lg font-semibold leading-tight tracking-[-0.03em] text-[#F2EFE6]">
                  {item.title}
                </h3>
                <p className="mt-4 text-sm leading-7 text-[#B8B1A4]">
                  {item.description}
                </p>
              </SystemCard>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
