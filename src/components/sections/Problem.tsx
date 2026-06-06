import { Container } from "@/components/ui/Container";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { SystemCard } from "@/components/ui/SystemCard";

const painPoints = [
  {
    id: "context",
    title: "Context gets buried across tools and conversations",
    description:
      "Customer details, requirements, notes, files, and updates live in separate places, so every next step starts with a search.",
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
      "Work moves from sales to delivery to operations without a visible owner, status, or next action at every stage.",
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
  { id: "website", label: "Website", position: "left-[8%] top-[12%]", rotate: -4 },
  { id: "crm", label: "CRM", position: "left-[25%] top-[29%]", rotate: 3 },
  { id: "emails", label: "Emails", position: "left-[5%] top-[49%]", rotate: -2 },
  { id: "booking", label: "Booking", position: "left-[20%] bottom-[22%]", rotate: 4 },
  { id: "payments", label: "Payments", position: "left-[7%] bottom-[8%]", rotate: -5 },
  { id: "spreadsheets", label: "Sheets", position: "left-[32%] bottom-[6%]", rotate: 2 },
  { id: "manual-tasks", label: "Manual tasks", position: "left-[34%] top-[10%]", rotate: 5 },
  { id: "client-requests", label: "Client requests", position: "left-[36%] bottom-[32%]", rotate: -3 },
  { id: "notion", label: "Notion", position: "right-[32%] top-[9%]", rotate: 3 },
  { id: "telegram", label: "Telegram", position: "right-[9%] top-[16%]", rotate: -4 },
  { id: "gmail", label: "Gmail", position: "right-[24%] top-[34%]", rotate: 5 },
  { id: "calendar", label: "Calendar", position: "right-[5%] top-[49%]", rotate: -2 },
  { id: "slack", label: "Slack", position: "right-[33%] bottom-[28%]", rotate: -5 },
  { id: "drive", label: "Drive", position: "right-[9%] bottom-[22%]", rotate: 4 },
  { id: "figma", label: "Figma", position: "right-[31%] bottom-[6%]", rotate: 3 },
  { id: "automation", label: "Automation", position: "right-[6%] bottom-[7%]", rotate: -4 },
];

const fragments = [
  "Who owns this?",
  "Same update again",
  "Where did the file go?",
  "Waiting on context",
  "Manual reminder",
  "No source of truth",
];

export function Problem() {
  return (
    <section
      data-section="problem"
      className="section relative overflow-hidden bg-[#080807] pt-14 md:pt-20"
    >
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute inset-x-0 top-0 h-48 bg-gradient-to-b from-[#080807] via-[#080807]/88 to-transparent" />
        <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[#C16A3A]/30 to-transparent" />
        <div className="absolute left-1/2 top-0 h-40 w-px -translate-x-1/2 bg-gradient-to-b from-[#C16A3A]/42 to-transparent" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(193,106,58,0.12),transparent_35%),radial-gradient(circle_at_18%_42%,rgba(124,132,100,0.09),transparent_31%),radial-gradient(circle_at_82%_54%,rgba(143,163,177,0.075),transparent_32%),linear-gradient(180deg,#080807_0%,#050505_100%)]" />
      </div>

      <Container className="relative z-10" size="wide">
        <div className="mx-auto mb-8 flex w-fit items-center gap-3 rounded-full border border-[#C16A3A]/22 bg-[#C16A3A]/10 px-4 py-2 text-xs text-[#B8B1A4] backdrop-blur-xl">
          <span className="h-1.5 w-1.5 rounded-full bg-[#C16A3A] shadow-[0_0_18px_rgba(193,106,58,0.55)]" />
          Clean system map breaking into operational drag
        </div>

        <SectionTitle
          eyebrow="The real bottleneck"
          title="Most systems look organized — until the work starts moving."
          desc="Teams don’t lose momentum because they lack tools. They lose it because context, decisions, ownership, and execution live in separate places."
          align="center"
        />

        <div className="relative mx-auto mt-12 max-w-7xl">
          <div className="relative overflow-hidden rounded-[36px] border border-[rgba(242,239,230,0.11)] bg-[linear-gradient(180deg,rgba(242,239,230,0.055),rgba(242,239,230,0.022)),rgba(8,8,7,0.76)] p-5 shadow-[0_34px_120px_rgba(0,0,0,0.42)] backdrop-blur-2xl md:p-7 lg:min-h-[38rem]">
            <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_50%_48%,rgba(193,106,58,0.12),transparent_24%),radial-gradient(circle_at_28%_20%,rgba(242,239,230,0.05),transparent_20%),radial-gradient(circle_at_70%_78%,rgba(201,166,107,0.07),transparent_24%)]" />
            <div className="pointer-events-none absolute inset-0 opacity-60 [background-image:radial-gradient(rgba(242,239,230,0.11)_1px,transparent_1px)] [background-size:26px_26px] [mask-image:radial-gradient(circle_at_50%_50%,black,transparent_76%)]" />

            <svg
              data-flow-lines="problem-scribble-lines"
              className="pointer-events-none absolute inset-0 hidden h-full w-full text-[#C9A66B]/32 opacity-0 lg:block"
              viewBox="0 0 1200 640"
              fill="none"
              aria-hidden="true"
            >
              <path d="M106 130 C250 58 330 202 454 150 C590 92 612 284 746 222 C874 164 920 52 1056 122" stroke="currentColor" strokeWidth="1.2" strokeDasharray="8 10" />
              <path d="M118 390 C258 306 330 478 486 382 C620 300 708 456 826 344 C936 238 1018 332 1100 254" stroke="currentColor" strokeWidth="1.15" strokeDasharray="5 13" />
              <path d="M164 558 C280 468 426 604 526 492 C662 338 740 598 898 496 C998 430 1044 526 1110 438" stroke="currentColor" strokeWidth="1.1" strokeDasharray="2 12" />
              <path d="M390 95 C438 156 382 210 448 244 C510 276 462 344 540 370" stroke="#C16A3A" strokeOpacity="0.36" strokeWidth="1.2" />
              <path d="M764 118 C704 172 790 224 724 268 C662 310 734 364 650 404" stroke="#C16A3A" strokeOpacity="0.32" strokeWidth="1.2" />
              <path d="M520 210 C536 196 558 196 570 214 C584 236 550 250 572 274 C590 294 620 286 624 314" stroke="#F2EFE6" strokeOpacity="0.22" strokeWidth="1.1" />
            </svg>

            <div className="pointer-events-none absolute left-1/2 top-1/2 hidden h-48 w-48 -translate-x-1/2 -translate-y-1/2 rounded-full border border-[#C16A3A]/14 bg-[radial-gradient(circle_at_50%_50%,rgba(193,106,58,0.14),transparent_56%)] blur-[1px] lg:block" />
            <div className="pointer-events-none absolute left-1/2 top-1/2 hidden -translate-x-1/2 -translate-y-1/2 text-center lg:block">
              <div className="rounded-full border border-[#C16A3A]/20 bg-[#050505]/56 px-5 py-3 text-sm font-semibold text-[#E5E0D4] backdrop-blur-xl">
                No central source of truth
              </div>
            </div>

            <div className="hidden lg:block" aria-hidden="true">
              {chaosNodes.map((node) => (
                <div
                  key={node.id}
                  data-flow-target={node.id}
                  data-flow-rotate={node.rotate}
                  className={`${node.position} absolute z-20 rounded-2xl border border-[rgba(242,239,230,0.105)] bg-[rgba(8,8,7,0.72)] px-3.5 py-2.5 text-sm font-semibold text-[#E5E0D4] shadow-[0_18px_52px_rgba(0,0,0,0.26)] backdrop-blur-xl`}
                  style={{ transform: `rotate(${node.rotate}deg)` }}
                >
                  <span className="mr-2 inline-block h-1.5 w-1.5 rounded-full bg-[#C16A3A]/80" />
                  {node.label}
                </div>
              ))}

              {fragments.map((fragment, index) => (
                <div
                  key={fragment}
                  className="absolute z-10 rounded-full border border-[#C16A3A]/16 bg-[#C16A3A]/8 px-3 py-1.5 font-mono text-[0.66rem] uppercase tracking-[0.08em] text-[#8E9188] backdrop-blur-xl"
                  style={{
                    left: `${18 + ((index * 13) % 60)}%`,
                    top: `${18 + ((index * 19) % 56)}%`,
                    transform: `rotate(${index % 2 ? -6 : 5}deg)`,
                  }}
                >
                  {fragment}
                </div>
              ))}

              {[
                { text: "?", left: "47%", top: "24%" },
                { text: "?", left: "58%", top: "55%" },
                { text: "!", left: "42%", top: "66%" },
              ].map((mark) => (
                <span
                  key={`${mark.text}-${mark.left}`}
                  className="absolute z-10 font-serif text-5xl text-[#C16A3A]/28"
                  style={{ left: mark.left, top: mark.top }}
                >
                  {mark.text}
                </span>
              ))}
            </div>

            <div className="relative z-30 grid gap-4 lg:absolute lg:inset-x-7 lg:bottom-7 lg:grid-cols-5">
              {painPoints.map((item, index) => (
                <SystemCard
                  key={item.id}
                  className="min-h-full bg-[linear-gradient(180deg,rgba(242,239,230,0.065),rgba(242,239,230,0.025)),rgba(8,8,7,0.72)] lg:backdrop-blur-2xl"
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
        </div>
      </Container>
    </section>
  );
}
