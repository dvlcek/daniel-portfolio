import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  Bot,
  BriefcaseBusiness,
  Check,
  Code2,
  Globe2,
  Network,
  Search,
  Sparkles,
  Target,
  TrendingUp,
  Users,
  Workflow,
} from "lucide-react";
import { HeroScrollScene } from "@/components/sections/HeroScrollScene";
import { caseStudies } from "@/lib/siteContent";

const services = [
  {
    icon: Network,
    title: "Connect the operation",
    label: "Custom business software",
    description:
      "Replace scattered tools, spreadsheets and handoffs with one system built around how your company actually works.",
  },
  {
    icon: Bot,
    title: "Remove repetitive work",
    label: "Automation & applied AI",
    description:
      "Automate the steps that waste time, create errors or slow people down — and use AI only where it adds real value.",
  },
  {
    icon: Globe2,
    title: "Make the journey easier",
    label: "Web & client platforms",
    description:
      "Create customer-facing experiences that make buying, booking, communicating and managing services simpler.",
  },
] as const;

const process = [
  {
    number: "01",
    icon: Search,
    title: "Learn the operation",
    description: "I get close to the real process — what people do, where information moves and where work gets stuck.",
  },
  {
    number: "02",
    icon: Target,
    title: "Find the leverage",
    description: "We decide what removes the most friction or creates the most value first. No feature list for its own sake.",
  },
  {
    number: "03",
    icon: Code2,
    title: "Build the system",
    description: "I design and build the software, automation and integrations as one working flow around the business.",
  },
  {
    number: "04",
    icon: TrendingUp,
    title: "Improve from reality",
    description: "After launch, we use real usage and real bottlenecks to decide what deserves to be improved or expanded.",
  },
] as const;

const partnerItems = [
  {
    icon: Users,
    title: "Direct technical partner",
    description: "You talk to the person understanding, designing and building the system — not through account layers.",
  },
  {
    icon: BriefcaseBusiness,
    title: "Business before tools",
    description: "I care about the bottleneck, outcome and economics first. The technology comes second.",
  },
  {
    icon: Sparkles,
    title: "Built for ownership",
    description: "Clean architecture, clear workflows and systems your company can actually understand and operate.",
  },
  {
    icon: Workflow,
    title: "Long-term improvement",
    description: "Launch is the first feedback loop, not the end. Strong systems evolve with the company using them.",
  },
] as const;

const engagement = [
  {
    number: "01",
    title: "Understand",
    text: "Map the operation, bottlenecks, dependencies and opportunities before deciding what to build.",
  },
  {
    number: "02",
    title: "Build the highest-leverage V1",
    text: "Deliver the smallest complete system that creates meaningful operational or customer value.",
  },
  {
    number: "03",
    title: "Review, improve, expand",
    text: "Use real behavior and business results to decide where the next investment earns its place.",
  },
] as const;

function Eyebrow({ children }: { children: React.ReactNode }) {
  return (
    <p className="text-[10px] font-semibold uppercase tracking-[0.22em] text-[#738096]">
      {children}
    </p>
  );
}

function TextLink({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <Link
      href={href}
      className="group inline-flex items-center gap-2 text-[11px] font-semibold text-[#1d4ed8] transition-colors hover:text-[#123a9c]"
    >
      {children}
      <ArrowRight size={12} className="transition-transform group-hover:translate-x-0.5" />
    </Link>
  );
}

function DashboardPreview() {
  const events = [
    ["Reservation", "Confirmed"],
    ["Payment", "Received"],
    ["Invoice", "Generated"],
    ["Contract", "Prepared"],
    ["Access", "Scheduled"],
  ] as const;

  return (
    <div className="grid min-h-[340px] overflow-hidden rounded-[22px] border border-[#dfe4ea]/90 bg-[#0a1522] shadow-[0_24px_70px_rgba(20,33,50,0.10)] sm:grid-cols-[104px_1fr]">
      <aside className="hidden border-r border-white/7 bg-[#0a1522] p-3.5 sm:block">
        <p className="text-[9px] font-semibold text-white/72">Mini Sklady</p>
        <div className="mt-5 space-y-1 text-[8px] text-white/34">
          {["Overview", "Customers", "Rentals", "Contracts", "Payments", "Units", "Reports"].map((item, index) => (
            <div
              key={item}
              className={`rounded-md px-2 py-1.5 ${index === 0 ? "bg-white/[0.07] text-white/72" : ""}`}
            >
              {item}
            </div>
          ))}
        </div>
      </aside>

      <div className="bg-[#f7f8fa] p-3.5 text-[#101722] sm:p-4.5">
        <div className="flex items-center justify-between">
          <p className="text-[11px] font-semibold">Operations overview</p>
          <span className="rounded-full border border-[#e2e6eb] bg-white px-2 py-1 text-[7px] text-[#8b96a5]">
            Live system
          </span>
        </div>

        <div className="mt-3 grid grid-cols-3 gap-2">
          {[
            ["Customers", "36"],
            ["Active rentals", "~30"],
            ["Rental lifecycle", "Automated"],
          ].map(([label, value]) => (
            <div
              key={label}
              className="rounded-[10px] border border-[#e4e8ed] bg-white p-2.5 shadow-[0_5px_16px_rgba(15,23,42,0.025)]"
            >
              <p className="text-[6px] uppercase tracking-[0.05em] text-[#9aa4b2]">{label}</p>
              <p className="mt-1 text-[11px] font-semibold tracking-[-0.02em] sm:text-[12px]">{value}</p>
            </div>
          ))}
        </div>

        <div className="mt-2.5 rounded-[11px] border border-[#e4e8ed] bg-white p-3 shadow-[0_5px_16px_rgba(15,23,42,0.025)]">
          <div className="flex items-center justify-between">
            <p className="text-[8px] font-semibold">One connected rental flow</p>
            <span className="text-[7px] text-[#9aa4b2]">Triggered automatically</span>
          </div>

          <div className="mt-3 space-y-1.5">
            {events.map(([label, value], index) => (
              <div
                key={label}
                className="flex items-center justify-between rounded-[8px] border border-[#edf0f3] bg-[#fbfcfd] px-2.5 py-2"
              >
                <div className="flex items-center gap-2">
                  <span className="flex h-4 w-4 items-center justify-center rounded-full bg-[#edf4ff] text-[#2563eb]">
                    <Check size={8} strokeWidth={2} />
                  </span>
                  <span className="text-[7px] font-medium text-[#566274]">{label}</span>
                </div>
                <div className="flex items-center gap-2">
                  {index < events.length - 1 ? <span className="text-[7px] text-[#c1c8d1]">→</span> : null}
                  <span className="text-[7px] font-semibold text-[#334155]">{value}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-2 grid grid-cols-2 gap-2 text-[7px] text-[#667085]">
          <div className="rounded-[9px] border border-[#e4e8ed] bg-white px-2.5 py-2">Payments connected to rental status</div>
          <div className="rounded-[9px] border border-[#e4e8ed] bg-white px-2.5 py-2">Availability updated from one system</div>
        </div>
      </div>
    </div>
  );
}

export function HomeRedesign() {
  const featured = caseStudies[0];
  const supporting = caseStudies.slice(1, 3);

  return (
    <div className="home-redesign overflow-hidden bg-[#f8f8f6] text-[#101722]">
      <HeroScrollScene />

      <section id="services" className="relative bg-[#f8f8f6] px-5 py-24 sm:px-8 md:py-28 lg:px-14 xl:px-20">
        <div className="mx-auto max-w-[1160px]">
          <div className="mx-auto max-w-[760px] text-center">
            <Eyebrow>How I Help</Eyebrow>
            <h2 className="mt-5 text-balance text-[clamp(2rem,4vw,3.35rem)] font-semibold leading-[1.02] tracking-[-0.045em] text-[#101722]">
              I don&apos;t start with software. I start with how your business works.
            </h2>
            <p className="mx-auto mt-5 max-w-[650px] text-balance text-[13px] leading-6 text-[#687486] sm:text-[14px]">
              Where does information get copied? What waits for a person? What becomes painful as volume grows?
              Those are usually the places where a better system creates the most leverage.
            </p>
          </div>

          <div className="mt-10 grid gap-4 md:grid-cols-3 md:gap-5">
            {services.map((service) => {
              const Icon = service.icon;
              return (
                <article key={service.title} className="apple-glass group flex min-h-[292px] flex-col rounded-[24px] p-6 md:p-7">
                  <span className="glass-icon flex h-11 w-11 items-center justify-center rounded-[14px] text-[#2860cf]">
                    <Icon size={20} strokeWidth={1.55} />
                  </span>
                  <p className="mt-7 text-[8px] font-semibold uppercase tracking-[0.14em] text-[#8893a3]">{service.label}</p>
                  <h3 className="mt-2 max-w-[250px] text-[19px] font-semibold leading-[1.12] tracking-[-0.03em] text-[#101722]">
                    {service.title}
                  </h3>
                  <p className="mt-3 max-w-[315px] text-[12px] leading-5.5 text-[#677386]">{service.description}</p>
                  <div className="mt-auto pt-6">
                    <TextLink href="/work">See the work</TextLink>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <section id="work" className="relative bg-[#f8f8f6] px-5 pb-24 sm:px-8 md:pb-28 lg:px-14 xl:px-20">
        <div className="mx-auto max-w-[1160px]">
          <div className="mb-7 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <Eyebrow>Proof, Not Promises</Eyebrow>
              <h2 className="mt-3 text-[clamp(1.8rem,3vw,2.6rem)] font-semibold leading-[1.02] tracking-[-0.04em] text-[#101722]">
                Systems already running inside real businesses.
              </h2>
            </div>
            <TextLink href="/work">View all case studies</TextLink>
          </div>

          <div className="apple-glass rounded-[28px] p-4 sm:p-5 md:p-6">
            <div className="grid gap-4 xl:grid-cols-[0.78fr_1.35fr_0.87fr] xl:gap-5">
              <div className="flex min-h-[340px] flex-col rounded-[20px] border border-[#e1e6ec]/85 bg-white/64 p-5 md:p-6">
                <p className="text-[8px] font-semibold uppercase tracking-[0.18em] text-[#7c8798]">Featured transformation</p>
                <h3 className="mt-3 text-[23px] font-semibold tracking-[-0.035em] text-[#101722]">Mini Sklady</h3>
                <p className="mt-3 max-w-[275px] text-[14px] font-semibold leading-[1.35] tracking-[-0.025em] text-[#263244]">
                  From manual rental administration to one connected operating system.
                </p>
                <p className="mt-3 max-w-[280px] text-[10px] leading-[1.7] text-[#677386]">
                  Booking, Stripe payments, invoices, contracts, access delivery, communication, cancellations and internal operations now work as one rental flow.
                </p>
                <ul className="mt-5 space-y-2.5">
                  {["36 customers managed", "~30 active monthly rentals", "Full rental lifecycle automated", "One dashboard for daily operations"].map((item) => (
                    <li key={item} className="flex items-center gap-2 text-[10px] font-medium text-[#4f5d70]">
                      <span className="flex h-4 w-4 items-center justify-center rounded-full border border-[#ced8e4] bg-white text-[#2563eb]">
                        <Check size={9} />
                      </span>
                      {item}
                    </li>
                  ))}
                </ul>
                <div className="mt-auto pt-6">
                  <Link
                    href={featured ? `/work/${featured.slug}` : "/work"}
                    className="group inline-flex h-10 items-center gap-2 rounded-full border border-[#d8dee6] bg-white px-4 text-[10px] font-semibold text-[#101722] shadow-[0_8px_22px_rgba(15,23,42,0.045)] transition hover:-translate-y-0.5 hover:border-[#c5cfdb]"
                  >
                    See the full transformation
                    <ArrowRight size={12} className="transition-transform group-hover:translate-x-0.5" />
                  </Link>
                </div>
              </div>

              <DashboardPreview />

              <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-1">
                {supporting.map((study) => (
                  <Link
                    key={study.slug}
                    href={`/work/${study.slug}`}
                    className="group grid min-h-[162px] overflow-hidden rounded-[20px] border border-[#e1e6ec]/85 bg-white/66 p-4 transition hover:bg-white/82 sm:grid-cols-[1fr_0.8fr] xl:grid-cols-[1fr_0.85fr]"
                  >
                    <div className="flex flex-col pr-3">
                      <p className="text-[7px] font-semibold uppercase tracking-[0.15em] text-[#8993a2]">{study.categoryLabel}</p>
                      <h3 className="mt-2 text-[13px] font-semibold leading-4 tracking-[-0.02em] text-[#101722]">{study.company}</h3>
                      <p className="mt-2 line-clamp-3 text-[9px] leading-4 text-[#6c7788]">{study.result}</p>
                      <span className="mt-auto inline-flex items-center gap-1.5 pt-3 text-[8px] font-semibold text-[#1d4ed8]">
                        View case study
                        <ArrowRight size={9} className="transition-transform group-hover:translate-x-0.5" />
                      </span>
                    </div>
                    <div className="relative min-h-[118px] overflow-hidden rounded-[14px] border border-[#e4e8ed] bg-[#eef2f6]">
                      <Image
                        src={study.image}
                        alt={`${study.company} project preview`}
                        fill
                        sizes="(max-width: 768px) 40vw, 16vw"
                        className="object-cover transition-transform duration-700 group-hover:scale-[1.035]"
                      />
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="process" className="bg-[#f8f8f6] px-5 pb-24 sm:px-8 md:pb-28 lg:px-14 xl:px-20">
        <div className="mx-auto max-w-[1160px]">
          <div className="mx-auto mb-8 max-w-[650px] text-center">
            <Eyebrow>How I Work</Eyebrow>
            <h2 className="mt-4 text-[clamp(1.8rem,3vw,2.55rem)] font-semibold leading-[1.04] tracking-[-0.04em] text-[#101722]">
              Understand first. Build only what earns its place.
            </h2>
          </div>

          <div className="apple-glass rounded-[26px] px-5 py-6 md:px-7 md:py-7">
            <div className="grid gap-7 md:grid-cols-4 md:gap-0">
              {process.map((step, index) => {
                const Icon = step.icon;
                return (
                  <div key={step.title} className="relative min-w-0 md:px-5 first:md:pl-0 last:md:pr-0">
                    {index < process.length - 1 ? (
                      <div className="absolute right-[-4px] top-5 hidden h-px w-7 bg-[#cdd5df] md:block" />
                    ) : null}
                    <div className="flex items-start gap-3">
                      <span className="glass-icon flex h-10 w-10 shrink-0 items-center justify-center rounded-full text-[#1f4fa9]">
                        <Icon size={16} strokeWidth={1.55} />
                      </span>
                      <div>
                        <p className="text-[8px] font-semibold text-[#8b96a5]">{step.number}</p>
                        <h3 className="mt-1 text-[12px] font-semibold tracking-[-0.02em] text-[#101722]">{step.title}</h3>
                      </div>
                    </div>
                    <p className="mt-3 text-[9px] leading-4.5 text-[#6c7788]">{step.description}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      <section id="about" className="bg-[#f8f8f6] px-5 pb-24 sm:px-8 md:pb-28 lg:px-14 xl:px-20">
        <div className="mx-auto max-w-[1160px]">
          <div className="grid gap-5 xl:grid-cols-[0.95fr_1.35fr]">
            <article className="apple-glass rounded-[28px] p-5 md:p-7">
              <Eyebrow>Working With Me</Eyebrow>
              <h2 className="mt-4 max-w-[430px] text-[clamp(1.85rem,3vw,2.55rem)] font-semibold leading-[1.02] tracking-[-0.04em] text-[#101722]">
                You don&apos;t hand me a ticket. We solve the business together.
              </h2>
              <p className="mt-4 max-w-[470px] text-[12px] leading-5.5 text-[#687486]">
                I like getting close to the operation, asking why things work the way they do and finding the part of the system that is actually holding the company back. I&apos;m not interested in adding software for the sake of software. I want the result to make the business feel simpler, faster and more in control.
              </p>

              <div className="mt-7 grid gap-5 sm:grid-cols-[128px_1fr]">
                <div className="relative mx-auto h-[126px] w-[126px] overflow-hidden rounded-full border border-white/80 bg-[#e7ebf0] shadow-[0_12px_34px_rgba(15,23,42,0.08)]">
                  <Image
                    src="/images/daniel-vlcek.jpg"
                    alt="Daniel Vlcek"
                    fill
                    sizes="126px"
                    className="object-cover object-[50%_36%]"
                  />
                </div>
                <div className="grid gap-3 sm:grid-cols-2">
                  {partnerItems.map((item) => {
                    const Icon = item.icon;
                    return (
                      <div key={item.title} className="flex gap-2.5">
                        <span className="glass-icon flex h-8 w-8 shrink-0 items-center justify-center rounded-[10px] text-[#315fae]">
                          <Icon size={13} strokeWidth={1.55} />
                        </span>
                        <div>
                          <h3 className="text-[10px] font-semibold text-[#263244]">{item.title}</h3>
                          <p className="mt-1 text-[8px] leading-4 text-[#7a8595]">{item.description}</p>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </article>

            <div className="grid gap-5 lg:grid-cols-[1.25fr_0.75fr]">
              <article className="apple-glass rounded-[28px] p-5 md:p-7">
                <Eyebrow>How Engagements Start</Eyebrow>
                <h2 className="mt-4 text-[clamp(1.7rem,2.6vw,2.25rem)] font-semibold leading-[1.04] tracking-[-0.04em] text-[#101722]">
                  Scope follows the system. Not a generic package.
                </h2>
                <p className="mt-3 max-w-[520px] text-[11px] leading-5 text-[#687486]">
                  Every company has different constraints, so the first job is to understand the operation and decide what deserves investment.
                </p>

                <div className="mt-6 space-y-3">
                  {engagement.map((item) => (
                    <div key={item.number} className="rounded-[16px] border border-[#e2e7ed]/90 bg-white/58 px-4 py-3.5">
                      <div className="flex gap-3">
                        <span className="text-[8px] font-semibold text-[#2563eb]">{item.number}</span>
                        <div>
                          <h3 className="text-[11px] font-semibold text-[#263244]">{item.title}</h3>
                          <p className="mt-1 text-[9px] leading-4 text-[#758091]">{item.text}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                <p className="mt-5 text-[9px] leading-4 text-[#7a8595]">
                  Most implementation engagements start from €5k. Final scope is defined after discovery, based on the business problem and expected leverage.
                </p>
              </article>

              <article className="relative flex min-h-[360px] flex-col overflow-hidden rounded-[28px] border border-white/10 bg-[#07111d] p-5 text-white shadow-[0_24px_70px_rgba(7,17,29,0.18)] md:p-6">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_16%,rgba(72,129,192,0.22),transparent_34%),linear-gradient(180deg,rgba(255,255,255,0.02),transparent_48%)]" />
                <div className="relative z-10">
                  <p className="text-[9px] font-semibold uppercase tracking-[0.18em] text-white/42">Let&apos;s Work Together</p>
                  <h2 className="mt-5 text-[clamp(1.65rem,2.5vw,2.15rem)] font-semibold leading-[1.02] tracking-[-0.04em]">
                    Show me how your business works. I&apos;ll show you where it can work better.
                  </h2>
                  <p className="mt-4 text-[10px] leading-5 text-white/52">
                    The first conversation is about your operation, bottlenecks and goals — not a sales deck.
                  </p>
                </div>

                <div className="relative z-10 mt-auto pt-8">
                  <Link
                    href="/contact"
                    className="group inline-flex h-11 items-center gap-2 rounded-full bg-white px-5 text-[11px] font-semibold text-[#07111d] shadow-[0_12px_30px_rgba(0,0,0,0.16)] transition hover:-translate-y-0.5"
                  >
                    Discuss your system
                    <ArrowRight size={13} className="transition-transform group-hover:translate-x-0.5" />
                  </Link>
                  <p className="mt-3 text-[8px] text-white/34">No obligation. We start by understanding the problem.</p>
                </div>
              </article>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#f8f8f6] px-5 pb-14 sm:px-8 lg:px-14 xl:px-20">
        <div className="mx-auto max-w-[1160px] border-t border-[#dfe4ea] pt-9 text-center">
          <p className="mx-auto max-w-[760px] text-balance text-[clamp(1.55rem,3vw,2.35rem)] font-semibold leading-[1.05] tracking-[-0.04em] text-[#101722]">
            Better software is useful. A better-running business is the point.
          </p>
        </div>
      </section>
    </div>
  );
}
