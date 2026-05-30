import type { Metadata } from "next";
import { Container } from "@/components/ui/Container";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { packages, primaryCta } from "@/lib/siteContent";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Services | Websites, Automation, Dashboards & CRM",
  description:
    "Services for companies in Austria and Europe that need stronger websites, cleaner lead flow, business automation, internal dashboards, CRM workflows, and custom operating systems.",
  alternates: {
    canonical: "/services",
  },
  openGraph: {
    title: "Services | Daniel Vlcek",
    description:
      "Website rebuilds, business automation systems, internal dashboards, CRM automation, and custom business systems for companies that need cleaner operations.",
    url: "/services",
    type: "website",
  },
};

const pillars = [
  "Custom Business Operating System",
  "Premium Website & Lead Platform",
  "Platform Rebuild",
  "Business Automation",
  "Internal Dashboard / Operations Tool",
  "CRM & Lead Workflow System",
];

export default function ServicesPage() {
  return (
    <main className="py-16 md:py-24">
      <Container>
        <SectionTitle
          eyebrow="Services"
          title="Business operating systems, websites, automation, dashboards, and CRM flows."
          desc="Clear services for improving how customers find you, contact you, get followed up with, and move through the process after they become a lead or customer."
        />

        <div className="mt-10 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {pillars.map((pillar) => (
            <article key={pillar} className="rounded-2xl bg-white/5 p-6 ring-1 ring-white/10">
              <h2 className="text-lg font-semibold text-white">{pillar}</h2>
            </article>
          ))}
        </div>

        <div className="mt-10 grid gap-4 md:grid-cols-2">
          {packages.map((pkg) => (
            <article key={pkg.name} className="rounded-2xl bg-white/5 p-7 ring-1 ring-white/10">
              {/* <p className="text-xs uppercase tracking-[0.2em] text-white/45">{pkg.level}</p> */}
              <h3 className="mt-3 text-xl font-semibold text-white">{pkg.name}</h3>
              <p className="mt-3 text-sm text-white/65"><span className="text-white/45">Best for:</span> {pkg.bestFor}</p>
              <ul className="mt-4 space-y-2 text-sm text-white/70">
                {pkg.includes.map((item) => (
                  <li key={item}>- {item}</li>
                ))}
              </ul>
              <Link href={pkg.cta.href} className="mt-5 inline-flex rounded-2xl bg-white/10 px-5 py-3 text-sm font-medium text-white ring-1 ring-white/15 hover:bg-white/15">
                {pkg.cta.label}
              </Link>
            </article>
          ))}
        </div>

        <div className="mt-10 rounded-2xl bg-white/5 p-7 ring-1 ring-white/10">
          <h3 className="text-xl font-semibold text-white">Primary engagement path</h3>
          <p className="mt-3 text-sm text-white/65">Most projects start with a short strategy call to identify the main bottleneck, define scope, and decide whether the right next step is a website rebuild, lead flow, dashboard, CRM setup, automation project, or connected operating system. Daniel works with companies in Austria and across Europe that want a practical technical partner, not just another vendor.</p>
          <div className="mt-5 flex flex-wrap gap-3">
            <Link href={primaryCta.href} className="inline-flex rounded-2xl bg-white px-5 py-3 text-sm font-medium text-black transition hover:opacity-90">
              {primaryCta.label}
            </Link>
            <Link href="/work" className="inline-flex rounded-2xl bg-white/10 px-5 py-3 text-sm font-medium text-white ring-1 ring-white/15 hover:bg-white/15">
              View Case Studies
            </Link>
          </div>
        </div>
      </Container>
    </main>
  );
}
