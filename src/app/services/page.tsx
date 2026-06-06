import type { Metadata } from "next";
import { ArrowUpRight } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { PageHero } from "@/components/ui/PageHero";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { SystemCard } from "@/components/ui/SystemCard";
import { CtaPanel } from "@/components/ui/CtaPanel";
import { SystemFlow } from "@/components/visuals/SystemFlow";
import { services } from "@/components/sections/PackagesSection";

export const metadata: Metadata = {
  title: "Services | Premium Websites, Platforms & Automation Systems",
  description:
    "Premium websites, business platforms, automation systems, CRM and lead systems, and internal dashboards built as connected digital infrastructure.",
  alternates: { canonical: "/services" },
  openGraph: {
    title: "Services | Daniel Vlcek",
    description:
      "Websites, platforms, automations, CRM workflows, and dashboards designed as one business system.",
    url: "/services",
    type: "website",
  },
};

const details = [
  { label: "Premium websites", problem: "Your public site does not create enough trust, clarity, or qualified inquiry flow.", builds: "Positioning, page structure, responsive UI, performance, SEO foundations, analytics, and lead intake.", outcome: "A stronger first impression and a cleaner path from visitor interest to business conversation." },
  { label: "Business platforms", problem: "Customers, operations, payments, bookings, or admin work depend on disconnected manual steps.", builds: "Custom frontend, backend logic, user flows, data models, portals, admin controls, and integrations.", outcome: "A scalable operating layer that gives the business more control and less operational chaos." },
  { label: "Automation systems", problem: "Teams repeat tasks across email, spreadsheets, CRM, support, or administration.", builds: "Workflow mapping, routing logic, notifications, AI-assisted steps, system triggers, and review flows.", outcome: "Faster execution, fewer repeated tasks, and more consistent customer handling." },
  { label: "CRM & lead systems", problem: "Leads arrive from multiple places and follow-up depends on memory or manual updates.", builds: "Lead capture, qualification, routing, pipeline logic, follow-up workflows, and reporting views.", outcome: "Less lost revenue, clearer pipeline visibility, and structured follow-up." },
  { label: "Internal dashboards", problem: "Important data exists, but owners and teams cannot see it in one clean operational view.", builds: "Dashboards, internal tools, reporting layers, status views, and operational interfaces.", outcome: "Better visibility, faster decisions, and less internal confusion." },
];

export default function ServicesPage() {
  return (
    <main className="site-page">
      <PageHero
        eyebrow="Services"
        title="Websites, platforms, and automations designed as one business system."
        description="I help companies replace scattered tools and manual workflows with connected digital systems built for clarity, speed, and scalable growth."
      />
      <section className="section-compact">
        <Container>
          <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-5">
            {services.map((service, index) => (
              <SystemCard key={service.title}>
                <p className="micro-label text-[#C16A3A]">{String(index + 1).padStart(2, "0")}</p>
                <h2 className="mt-5 text-xl font-semibold leading-tight text-[#F2EFE6]">{service.title}</h2>
                <p className="mt-4 text-sm leading-7 text-[#B8B1A4]">{service.text}</p>
              </SystemCard>
            ))}
          </div>
        </Container>
      </section>
      <section className="section">
        <Container>
          <SectionTitle eyebrow="Service architecture" title="Business value first. Technical execution second." desc="Every service detail starts from the operational problem. The technical layer exists to create clarity, speed, conversion, and reliable daily execution." />
          <div className="grid gap-5">
            {details.map((item, index) => (
              <article key={item.label} className="glass-panel grid gap-6 rounded-[28px] p-6 md:p-8 lg:grid-cols-[0.7fr_1fr] lg:items-start">
                <div>
                  <p className="micro-label text-[#C16A3A]">{String(index + 1).padStart(2, "0")} / {item.label}</p>
                  <h2 className="mt-4 text-3xl font-semibold tracking-[-0.04em] text-[#F2EFE6]">{item.label}</h2>
                  <Button href="/contact" variant="secondary" className="mt-6 w-fit">Discuss this system <ArrowUpRight size={15} /></Button>
                </div>
                <div className="grid gap-4 md:grid-cols-3">
                  {[['Problem it solves', item.problem], ['What I build', item.builds], ['Business outcome', item.outcome]].map(([label, text]) => (
                    <div key={label} className="rounded-2xl border border-[rgba(242,239,230,0.08)] bg-[#050505]/35 p-5">
                      <p className="micro-label text-[#8E9188]">{label}</p>
                      <p className="mt-3 text-sm leading-7 text-[#B8B1A4]">{text}</p>
                    </div>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </Container>
      </section>
      <section className="section-compact">
        <Container>
          <div className="grid gap-10 lg:grid-cols-[0.82fr_1.18fr] lg:items-center">
            <SectionTitle eyebrow="How it connects" title="One system can start small and expand into the operating layer." desc="A website can become a lead system. A lead system can connect to CRM logic. CRM logic can trigger automations. Automations can feed dashboards and reporting." className="mb-0" />
            <SystemFlow />
          </div>
        </Container>
      </section>
      <section className="section-compact"><Container><CtaPanel title="Ready to define the right system?" description="Share the current bottleneck and I will help identify whether the next step is a website, platform, automation workflow, CRM system, or dashboard." /></Container></section>
    </main>
  );
}
