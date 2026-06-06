import { Container } from "@/components/ui/Container";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { SystemFlow } from "@/components/visuals/SystemFlow";

export function Mindset() {
  return (
    <section className="section relative">
      <Container>
        <div className="grid gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:items-center">
          <SectionTitle
            eyebrow="Operating infrastructure"
            title="The website is only the visible layer. The real value is the system behind it."
            desc="A modern business needs more than a clean interface. It needs lead flows, data structure, automation logic, internal dashboards, and reliable workflows that support daily operations."
            className="mb-0"
          />
          <SystemFlow />
        </div>
      </Container>
    </section>
  );
}
