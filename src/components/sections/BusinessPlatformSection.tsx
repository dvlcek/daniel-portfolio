import {
  BarChart3,
  BellRing,
  Database,
  FileInput,
  Gauge,
  Globe2,
  Workflow,
} from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Stagger } from "@/components/animations/ScrollAnimation";

const platformLayers = [
  { label: "Website layer", icon: Globe2, text: "Offer, trust, SEO, landing pages, and conversion paths." },
  { label: "Lead capture", icon: FileInput, text: "Forms, bookings, qualification, and inquiry context." },
  { label: "CRM", icon: Database, text: "Stages, ownership, history, and follow-up visibility." },
  { label: "Automation", icon: Workflow, text: "Emails, reminders, handoffs, alerts, and repeated tasks." },
  { label: "Dashboard", icon: Gauge, text: "Owner and team views for active work and bottlenecks." },
  { label: "Reporting", icon: BarChart3, text: "Simple signals for what is working and what should improve." },
];

export function BusinessPlatformSection() {
  return (
    <section className="relative overflow-hidden bg-site-bg-deep py-20 md:py-28">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(184,100,63,0.08),transparent_32%),radial-gradient(circle_at_78%_32%,rgba(95,116,128,0.10),transparent_34%)]" />
      <Container>
        <Stagger itemSelector=".platform-layer" y={18} stagger={0.06} className="relative z-10">
          <div className="grid gap-10 lg:grid-cols-[0.75fr_1fr] lg:items-center">
            <div>
              <p className="font-mono text-xs font-semibold uppercase tracking-[0.24em] text-clay">
                Business Operating System Build
              </p>
              <h2 className="mt-5 max-w-3xl text-balance text-[clamp(2.5rem,5vw,5.4rem)] font-medium leading-[0.98] tracking-[-0.045em] text-cream">
                A full digital foundation for a company that is ready to scale.
              </h2>
              <p className="mt-6 max-w-xl text-lg leading-8 text-stone">
                The goal is not to add another tool. The goal is to rebuild how
                the company captures leads, handles work, manages data, and
                sees operations so the business becomes easier to run.
              </p>
            </div>

            <div className="acrylic-surface-strong relative overflow-hidden rounded-[2.25rem] border p-5 md:p-6">
              <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_50%_18%,rgba(184,100,63,0.09),transparent_30%),linear-gradient(180deg,rgba(255,255,255,0.42),rgba(255,255,255,0.16))]" />

              <div className="relative grid gap-4 md:grid-cols-2">
                <div className="acrylic-accent platform-layer rounded-[1.75rem] border p-5 md:col-span-2">
                  <div className="flex items-center justify-between gap-4">
                    <div>
                      <p className="font-mono text-[11px] font-semibold uppercase tracking-[0.22em] text-clay">
                        DV Operating System
                      </p>
                      <h3 className="mt-2 text-2xl font-semibold tracking-[-0.035em] text-cream">
                        Website in. Leads routed. Work automated. Clarity everywhere.
                      </h3>
                    </div>
                    <span className="acrylic-icon hidden h-12 w-12 shrink-0 items-center justify-center rounded-2xl border text-clay md:flex">
                      <BellRing size={21} strokeWidth={1.9} />
                    </span>
                  </div>
                </div>

                {platformLayers.map(({ label, icon: Icon, text }) => (
                  <article
                    key={label}
                    className="acrylic-inset platform-layer rounded-[1.35rem] border p-4"
                  >
                    <div className="flex items-start gap-3">
                      <span className="acrylic-icon flex h-10 w-10 shrink-0 items-center justify-center rounded-2xl border text-clay">
                        <Icon size={18} strokeWidth={1.9} />
                      </span>
                      <div>
                        <h3 className="text-sm font-semibold text-cream">{label}</h3>
                        <p className="mt-2 text-sm leading-6 text-stone">{text}</p>
                      </div>
                    </div>
                  </article>
                ))}
              </div>
            </div>
          </div>
        </Stagger>
      </Container>
    </section>
  );
}
