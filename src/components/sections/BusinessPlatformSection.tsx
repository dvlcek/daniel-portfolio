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
                Business platform
              </p>
              <h2 className="mt-5 max-w-3xl text-balance text-[clamp(2.5rem,5vw,5.4rem)] font-medium leading-[0.98] tracking-[-0.045em] text-cream">
                One digital foundation for leads, workflows, data, and operations.
              </h2>
              <p className="mt-6 max-w-xl text-lg leading-8 text-stone">
                The goal is not to add another tool. The goal is to create the
                layer that lets the tools act like one business system.
              </p>
            </div>

            <div className="relative overflow-hidden rounded-[2.25rem] border border-black/[0.08] bg-white/62 p-5 shadow-[0_26px_80px_rgba(21,21,18,0.08)] backdrop-blur-xl md:p-6">
              <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_50%_18%,rgba(184,100,63,0.09),transparent_30%),linear-gradient(180deg,rgba(255,255,255,0.76),rgba(247,244,236,0.44))]" />

              <div className="relative grid gap-4 md:grid-cols-2">
                <div className="platform-layer md:col-span-2 rounded-[1.75rem] border border-clay/18 bg-clay/[0.07] p-5">
                  <div className="flex items-center justify-between gap-4">
                    <div>
                      <p className="font-mono text-[11px] font-semibold uppercase tracking-[0.22em] text-clay">
                        DV Operating Layer
                      </p>
                      <h3 className="mt-2 text-2xl font-semibold tracking-[-0.035em] text-cream">
                        Website in. Workflows out. Clarity everywhere.
                      </h3>
                    </div>
                    <span className="hidden h-12 w-12 shrink-0 items-center justify-center rounded-2xl border border-clay/20 bg-white/62 text-clay md:flex">
                      <BellRing size={21} strokeWidth={1.9} />
                    </span>
                  </div>
                </div>

                {platformLayers.map(({ label, icon: Icon, text }) => (
                  <article
                    key={label}
                    className="platform-layer rounded-[1.35rem] border border-black/[0.07] bg-white/72 p-4 shadow-[0_14px_34px_rgba(21,21,18,0.05)]"
                  >
                    <div className="flex items-start gap-3">
                      <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-2xl border border-black/[0.07] bg-site-bg text-clay">
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
