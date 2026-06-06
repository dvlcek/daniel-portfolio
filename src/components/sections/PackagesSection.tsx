import { ArrowUpRight, Check } from "lucide-react";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { Stagger } from "@/components/animations/ScrollAnimation";
import { Button } from "@/components/ui/Button";

const serviceGroups = [
  {
    name: "Premium Websites",
    value: "Create trust, explain the offer clearly, and turn visitors into structured inquiries.",
    technical: "Next.js websites, landing pages, SEO basics, analytics, forms, booking or inquiry flows.",
    items: ["Clear positioning", "Fast responsive pages", "Lead capture"],
  },
  {
    name: "Business Platforms",
    value: "Give customers, teams, and owners one cleaner place to manage the work behind the website.",
    technical: "Custom portals, admin systems, payment flows, booking systems, customer workflows, backend logic.",
    items: ["Customer workflows", "Admin control", "Operational data"],
  },
  {
    name: "Automation Systems",
    value: "Reduce repeated manual steps across follow-up, reporting, notifications, and internal handoffs.",
    technical: "CRM workflows, email automation, API integrations, n8n/Zapier-style logic, custom scripts.",
    items: ["Workflow logic", "Tool connections", "Reduced admin"],
  },
  {
    name: "CRM & Lead Systems",
    value: "Make sure every inquiry is captured, qualified, routed, followed up, and visible.",
    technical: "Lead intake, CRM stages, qualification forms, notifications, reminders, pipeline views.",
    items: ["Lead routing", "Follow-up structure", "Pipeline clarity"],
  },
  {
    name: "Internal Dashboards",
    value: "Turn scattered business activity into clear views for owners, teams, clients, or operations.",
    technical: "Data views, admin panels, reporting dashboards, status tracking, role-based internal tools.",
    items: ["Business visibility", "Status tracking", "Reporting views"],
  },
];

export function PackagesSection() {
  return (
    <section id="services" className="relative overflow-hidden bg-site-bg py-20 md:py-28">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_18%_18%,rgba(193,106,58,0.08),transparent_30%)]" />
      <Stagger
        itemSelector=".pkg-card"
        y={18}
        stagger={0.08}
        className="relative z-10 mx-auto w-full max-w-[1440px] px-5 sm:px-8 lg:px-10"
      >
        <SectionTitle
          eyebrow="Services"
          title="Connected systems for websites, workflows, and operations."
          desc="The offer depends on the bottleneck: a full platform, automation around manual work, a clean website, or a remake of an outdated setup."
        />

        <div className="mt-12 grid gap-5 md:grid-cols-2 xl:grid-cols-5">
          {serviceGroups.map((service, index) => {
            const mainService = index === 1;

            return (
              <article
                key={service.name}
                className={[
                  "pkg-card flex min-h-[460px] flex-col rounded-[2rem] border p-6 shadow-[0_20px_60px_rgba(21,21,18,0.06)] transition duration-300 hover:-translate-y-1",
                  mainService
                    ? "border-clay/25 bg-[linear-gradient(180deg,rgba(184,100,63,0.10),rgba(255,255,255,0.72)),rgba(255,255,255,0.70)]"
                    : "border-black/[0.08] bg-white/62",
                ].join(" ")}
              >
                <div className="flex items-start justify-between gap-4">
                  <span
                    className={[
                      "flex h-11 w-11 items-center justify-center rounded-2xl border font-mono text-xs font-semibold",
                      mainService
                        ? "border-clay/35 bg-clay/15 text-clay"
                        : "border-black/[0.08] bg-site-bg/70 text-stone",
                    ].join(" ")}
                  >
                    {String(index + 1).padStart(2, "0")}
                  </span>

                  {mainService ? (
                    <span className="rounded-full border border-clay/25 bg-clay/10 px-3 py-1 text-xs font-semibold text-clay">
                      Core
                    </span>
                  ) : null}
                </div>

                <div className="mt-7">
                  <h3 className="text-2xl font-semibold tracking-[-0.025em] text-cream">
                    {service.name}
                  </h3>
                  <p className="mt-4 text-sm leading-7 text-stone">
                    {service.value}
                  </p>
                </div>

                <div className="mt-7 h-px w-full bg-linear-to-r from-black/[0.10] via-black/[0.05] to-transparent" />

                <div className="mt-6 flex-1">
                  <p className="font-mono text-[11px] font-semibold uppercase tracking-[0.22em] text-ash">
                    Technical layer
                  </p>
                  <p className="mt-3 text-sm leading-7 text-stone">
                    {service.technical}
                  </p>
                  <ul className="mt-5 space-y-3">
                    {service.items.map((item) => (
                      <li key={item} className="flex items-start gap-3 text-sm leading-7 text-stone">
                        <span className="mt-1 flex h-5 w-5 shrink-0 items-center justify-center rounded-full border border-clay/25 bg-clay/10 text-clay">
                          <Check size={12} />
                        </span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mt-8">
                  <Button
                    href="/contact"
                    variant={mainService ? "primary" : "secondary"}
                    className="w-full justify-center"
                  >
                    <span>Discuss this system</span>
                    <ArrowUpRight size={15} />
                  </Button>
                </div>
              </article>
            );
          })}
        </div>

        <div className="mt-8 rounded-[2rem] border border-black/[0.08] bg-white/62 p-6 shadow-[0_16px_42px_rgba(21,21,18,0.05)]">
          <p className="max-w-5xl text-sm leading-7 text-stone md:text-base">
            Every engagement starts with the current workflow. The goal is not
            to add features for their own sake, but to make leads, clients,
            admin work, and daily operations easier to handle.
          </p>
        </div>
      </Stagger>
    </section>
  );
}
