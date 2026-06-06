import { Container } from "@/components/ui/Container";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { SystemCard } from "@/components/ui/SystemCard";

const problems = [
  ["Manual Work", "Teams repeat the same tasks every week instead of letting systems handle intake, routing, follow-up, and reporting."],
  ["Scattered Tools", "Your website, CRM, emails, spreadsheets, and internal workflows are not connected into one reliable flow."],
  ["Lost Leads", "Requests come in, but follow-up depends on people remembering tasks manually."],
  ["No Operational Clarity", "Important data exists somewhere, but it is not visible in one clean system."],
];

export function Problem() {
  return (
    <section className="section relative">
      <Container>
        <SectionTitle
          eyebrow="The real bottleneck"
          title="Most companies do not have a website problem. They have a system problem."
          desc="A website can look good and still fail operationally. Leads get handled manually, follow-ups depend on memory, tools do not talk to each other, and important business data stays scattered across inboxes, spreadsheets, and disconnected platforms."
        />
        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
          {problems.map(([title, text], index) => (
            <SystemCard key={title}>
              <p className="micro-label text-[#C16A3A]">{String(index + 1).padStart(2, "0")}</p>
              <h3 className="card-heading mt-5">{title}</h3>
              <p className="mt-4 text-sm leading-7 text-[#B8B1A4]">{text}</p>
            </SystemCard>
          ))}
        </div>
      </Container>
    </section>
  );
}
