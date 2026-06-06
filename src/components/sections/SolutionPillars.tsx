import { Container } from "@/components/ui/Container";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { SystemFlow } from "@/components/visuals/SystemFlow";

const before = ["Website", "Forms", "Emails", "Spreadsheets", "Manual follow-up", "No visibility"];
const after = ["Conversion website", "Lead capture", "CRM logic", "Automated workflows", "Internal dashboard", "Reporting layer"];

export function SolutionPillars() {
  return (
    <section className="section-compact relative">
      <Container>
        <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:items-center">
          <SectionTitle
            eyebrow="Connected operating layer"
            title="From disconnected digital pieces to one calm operating layer."
            desc="I connect your customer-facing website with the systems behind it, so leads, workflows, data, and internal tasks move through a clear digital structure instead of manual fragments."
            className="mb-0"
          />
          <SystemFlow />
        </div>
        <div className="mt-8 grid gap-4 md:grid-cols-2">
          <div className="rounded-[28px] border border-[rgba(242,239,230,0.10)] bg-[rgba(242,239,230,0.035)] p-6">
            <p className="micro-label">Before</p>
            <div className="mt-5 flex flex-wrap gap-2">{before.map((item) => <span key={item} className="rounded-full border border-[rgba(242,239,230,0.08)] px-3 py-2 text-sm text-[#8E9188]">{item}</span>)}</div>
          </div>
          <div className="rounded-[28px] border border-[#C16A3A]/24 bg-[#C16A3A]/[0.045] p-6">
            <p className="micro-label text-[#E5E0D4]">After</p>
            <div className="mt-5 flex flex-wrap gap-2">{after.map((item) => <span key={item} className="rounded-full border border-[#C16A3A]/18 bg-[#C16A3A]/10 px-3 py-2 text-sm text-[#E5E0D4]">{item}</span>)}</div>
          </div>
        </div>
      </Container>
    </section>
  );
}
