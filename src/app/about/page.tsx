import type { Metadata } from "next";
import Image from "next/image";
import { ArrowUpRight, Check } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { PageHero } from "@/components/ui/PageHero";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { SystemCard } from "@/components/ui/SystemCard";
import { CtaPanel } from "@/components/ui/CtaPanel";

export const metadata: Metadata = {
  title: "About Daniel Vlcek | Software Developer & Automation Architect",
  description: "Daniel Vlcek is a technical business partner building premium websites, platforms, automations, dashboards, CRM workflows, and scalable digital systems.",
  alternates: { canonical: "/about" },
};

const principles = [
  ["Workflow before features", "I first look at how leads, clients, tools, data, and admin work move through the business."],
  ["Useful before impressive", "A system should reduce manual steps, improve follow-up, increase clarity, or make operations easier to manage."],
  ["Direct collaboration", "You work directly with the person who thinks, designs, builds, and improves the system."],
  ["Scalable foundations", "The build should support future improvements instead of creating another disconnected tool."],
];

const capabilities = ["Premium websites", "Business platforms", "Lead intake flows", "CRM pipelines", "Internal dashboards", "Client portals", "Booking and payment flows", "Automation workflows", "API integrations"];

export default function AboutPage() {
  return (
    <main className="site-page">
      <PageHero eyebrow="About Daniel Vlcek" title="Technical execution with business-level thinking." description="I work directly with business owners to understand how the company actually works, where time is wasted, where leads get lost, and what kind of website, platform, dashboard, CRM workflow, or automation would make daily work easier." />
      <section className="section-compact">
        <Container>
          <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
            <div className="relative overflow-hidden rounded-[32px] border border-[rgba(242,239,230,0.12)] bg-[#0D0E0C] p-3">
              <div className="image-frame relative aspect-[4/5] overflow-hidden rounded-[24px]"><Image src="/images/daniel-vlcek.jpg" alt="Daniel Vlcek" fill priority className="object-cover object-[75%_center]" /></div>
            </div>
            <div>
              <SectionTitle eyebrow="Core philosophy" title="A developer who thinks beyond the interface." desc="A modern digital presence is not only the public website. It is the lead path, CRM logic, automation layer, internal overview, and data structure behind it." className="mb-0" />
              <div className="mt-8 flex flex-col gap-3 sm:flex-row"><Button href="/contact">Map your system <ArrowUpRight size={16} /></Button><Button href="/work" variant="secondary">View work</Button></div>
            </div>
          </div>
        </Container>
      </section>
      <section className="section">
        <Container>
          <SectionTitle eyebrow="How I think" title="One technical partner for websites, platforms, and automation." desc="The work combines product thinking, frontend execution, backend logic, integrations, automation, and business process clarity." />
          <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">{principles.map(([title, text]) => <SystemCard key={title}><h2 className="card-heading">{title}</h2><p className="mt-4 text-sm leading-7 text-[#B8B1A4]">{text}</p></SystemCard>)}</div>
        </Container>
      </section>
      <section className="section-compact">
        <Container>
          <div className="glass-panel rounded-[28px] p-6 md:p-10">
            <p className="micro-label text-[#C16A3A]">Capabilities</p>
            <h2 className="section-heading mt-4">Systems built around the business model, not a generic service menu.</h2>
            <div className="mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">{capabilities.map((item) => <p key={item} className="flex gap-3 rounded-2xl border border-[rgba(242,239,230,0.08)] bg-[#050505]/35 p-4 text-sm text-[#E5E0D4]"><Check size={16} className="shrink-0 text-[#C16A3A]" />{item}</p>)}</div>
          </div>
        </Container>
      </section>
      <section className="section-compact"><Container><CtaPanel title="Let’s talk about the system behind your next step." description="Share what feels manual, disconnected, unclear, or hard to scale. I will help you identify the right website, platform, automation, CRM, or dashboard direction." /></Container></section>
    </main>
  );
}
