import { ArrowRight } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { SectionTitle } from "@/components/ui/SectionTitle";

const before = ["Website", "Forms", "Emails", "Spreadsheets", "Manual follow-up", "No visibility"];
const after = ["Conversion website", "Lead capture", "CRM logic", "Automated workflows", "Internal dashboard", "Reporting layer"];

const layers = [
  ["Website", "Clear positioning, conversion paths, and customer-facing experience."],
  ["Lead capture", "Forms, booking flows, qualification, and structured handoff data."],
  ["CRM logic", "Pipeline rules, customer context, ownership, and next actions."],
  ["Automations", "Follow-ups, notifications, internal tasks, and repeatable workflows."],
  ["Dashboards", "Operational visibility for decisions, workload, status, and performance."],
  ["Reporting", "A clean view of what is happening and what needs to improve."],
];

export function SolutionPillars() {
  return (
    <section className="section-compact relative overflow-hidden">
      <Container>
        <div className="grid gap-10 lg:grid-cols-[0.76fr_1.24fr] lg:items-center">
          <SectionTitle
            eyebrow="Connected operating layer"
            title="From disconnected digital pieces to one structured operating layer."
            desc="I connect your customer-facing website with the systems behind it, so leads, workflows, data, and internal tasks move through a clear digital structure instead of manual fragments."
            className="mb-0"
          />
          <div className="glass-panel relative overflow-hidden rounded-[32px] p-5 md:p-7">
            <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_75%_20%,rgba(193,106,58,0.12),transparent_34%),radial-gradient(circle_at_20%_85%,rgba(143,163,177,0.12),transparent_36%)]" />
            <div className="relative z-10 grid gap-5 lg:grid-cols-[0.9fr_auto_1.1fr] lg:items-stretch">
              <FragmentPanel label="Before" items={before} muted />
              <div className="hidden items-center justify-center lg:flex">
                <div className="flex h-full min-h-64 w-16 items-center justify-center">
                  <div className="relative flex h-12 w-12 items-center justify-center rounded-full border border-[#C16A3A]/30 bg-[#C16A3A]/12 text-[#E5E0D4] shadow-[0_0_50px_rgba(193,106,58,0.18)]">
                    <ArrowRight size={18} />
                    <span className="absolute -left-14 top-1/2 h-px w-14 -translate-y-1/2 bg-gradient-to-r from-transparent to-[#C16A3A]/45" />
                    <span className="absolute -right-14 top-1/2 h-px w-14 -translate-y-1/2 bg-gradient-to-r from-[#C16A3A]/45 to-transparent" />
                  </div>
                </div>
              </div>
              <FragmentPanel label="After" items={after} />
            </div>
          </div>
        </div>

        <div className="mt-8 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
          {layers.map(([title, text], index) => (
            <article key={title} className="rounded-[26px] border border-[rgba(242,239,230,0.10)] bg-[rgba(242,239,230,0.04)] p-5 backdrop-blur-xl transition duration-300 hover:-translate-y-1 hover:border-[#C16A3A]/24">
              <p className="font-mono text-[0.7rem] text-[#C16A3A]">{String(index + 1).padStart(2, "0")}</p>
              <h3 className="mt-4 text-xl font-semibold tracking-[-0.03em] text-[#F2EFE6]">{title}</h3>
              <p className="mt-3 text-sm leading-7 text-[#B8B1A4]">{text}</p>
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
}

function FragmentPanel({ label, items, muted = false }: { label: string; items: string[]; muted?: boolean }) {
  return (
    <div className={muted ? "rounded-[28px] border border-[rgba(242,239,230,0.10)] bg-[rgba(5,5,5,0.32)] p-5" : "rounded-[28px] border border-[#C16A3A]/24 bg-[#C16A3A]/[0.055] p-5"}>
      <p className={muted ? "micro-label text-[#8E9188]" : "micro-label text-[#E5E0D4]"}>{label}</p>
      <div className="mt-5 grid gap-3">
        {items.map((item, index) => (
          <div key={item} className={muted ? "flex items-center justify-between rounded-2xl border border-[rgba(242,239,230,0.08)] bg-[rgba(242,239,230,0.035)] px-4 py-3 text-sm text-[#8E9188]" : "flex items-center justify-between rounded-2xl border border-[#C16A3A]/18 bg-[#C16A3A]/10 px-4 py-3 text-sm text-[#E5E0D4]"}>
            <span>{item}</span>
            <span className="font-mono text-[0.65rem] opacity-60">{String(index + 1).padStart(2, "0")}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
