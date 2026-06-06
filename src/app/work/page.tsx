import type { Metadata } from "next";
import { Container } from "@/components/ui/Container";
import { PageHero } from "@/components/ui/PageHero";
import { CtaPanel } from "@/components/ui/CtaPanel";
import { caseStudies } from "@/lib/siteContent";
import { WorkFilterGrid } from "./WorkFilterGrid";

export const metadata: Metadata = {
  title: "Work | Digital Systems & Business Platforms",
  description: "Selected systems built to improve positioning, workflows, automation, dashboards, and business execution.",
  alternates: { canonical: "/work" },
};

export default function WorkPage() {
  return (
    <main className="site-page">
      <PageHero
        eyebrow="Selected Work"
        title="Selected systems built to improve positioning, workflows, and business execution."
        description="A library of digital systems: premium websites, business platforms, automations, internal dashboards, CRM workflows, and rebuilds designed around real operational problems."
      />
      <Container>
        <WorkFilterGrid studies={caseStudies} />
      </Container>
      <section className="section-compact"><Container><CtaPanel title="Need a system with similar clarity?" description="Tell me where your current website, workflow, CRM, dashboard, or platform stops supporting growth. We will map the most useful next system." /></Container></section>
    </main>
  );
}
