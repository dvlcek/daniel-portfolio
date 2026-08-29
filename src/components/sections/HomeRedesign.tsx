import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  Bot,
  BriefcaseBusiness,
  Check,
  Code2,
  FileText,
  Gauge,
  Globe2,
  Mail,
  Network,
  Pencil,
  Search,
  Sparkles,
  TrendingUp,
  Users,
  Workflow,
} from "lucide-react";
import { SystemEarth } from "@/components/visuals/SystemEarth";
import { caseStudies } from "@/lib/siteContent";

const heroMetrics = [
  {
    label: "Leads Captured",
    value: "142",
    meta: "new",
    icon: Users,
    className: "left-[4%] top-[29%] md:left-[7%] md:top-[31%]",
  },
  {
    label: "CRM Updated",
    value: "Synced",
    meta: "live",
    icon: Check,
    className: "left-[3%] top-[58%] md:left-[5%] md:top-[60%]",
  },
  {
    label: "Invoice Generated",
    value: "2,450 €",
    meta: "latest",
    icon: FileText,
    className: "right-[4%] top-[30%] md:right-[6%] md:top-[32%]",
  },
  {
    label: "Report Ready",
    value: "Real-time",
    meta: "live",
    icon: Gauge,
    className: "right-[3%] top-[58%] md:right-[5%] md:top-[61%]",
  },
];

const painCards = [
  { label: "Leads in emails", rotate: "-rotate-3", tone: "bg-[#fffaf8]" },
  { label: "Manual data entry", rotate: "rotate-2", tone: "bg-[#fff3f3]" },
  { label: "Spreadsheets", rotate: "-rotate-1", tone: "bg-white" },
  { label: "No visibility", rotate: "rotate-3", tone: "bg-[#fffbe8]" },
  { label: "Copy & paste", rotate: "rotate-1", tone: "bg-[#f4f7fb]" },
  { label: "Errors", rotate: "-rotate-2", tone: "bg-white" },
  { label: "Delayed follow-ups", rotate: "rotate-2", tone: "bg-[#fafafa]" },
  { label: "Lost opportunities", rotate: "-rotate-4", tone: "bg-[#f9f9f9]" },
];

const services = [
  {
    icon: Network,
    title: "Custom Business Software",
    description:
      "Web applications, client platforms and internal systems built around your exact operations, data and workflow.",
  },
  {
    icon: Bot,
    title: "Automation & Applied AI",
    description:
      "Automate repetitive work, connect tools and use AI where it creates measurable business value.",
  },
  {
    icon: Globe2,
    title: "Web & Client Platforms",
    description:
      "High-performance websites, portals and digital experiences designed to convert, communicate and scale.",
  },
];

const process = [
  {
    number: "01",
    icon: Search,
    title: "Understand",
    description: "I learn your business, processes and goals in depth.",
  },
  {
    number: "02",
    icon: Pencil,
    title: "Design",
    description: "I design the right system, architecture and user experience.",
  },
  {
    number: "03",
    icon: Code2,
    title: "Build",
    description: "I build, integrate and automate with clean, scalable code.",
  },
  {
    number: "04",
    icon: TrendingUp,
    title: "Improve",
    description: "I monitor, optimize and scale as your business grows.",
  },
];

const partnerItems = [
  {
    icon: Users,
    title: "Direct collaboration",
    description: "You work directly with me from start to finish.",
  },
  {
    icon: Sparkles,
    title: "Technical excellence",
    description: "Clean, scalable and future-proof solutions.",
  },
  {
    icon: BriefcaseBusiness,
    title: "Business first",
    description: "I focus on real business outcomes, not just code.",
  },
  {
    icon: Workflow,
    title: "Long-term partner",
    description: "I build systems that can grow with your business.",
  },
];

function ArrowLink({ href, children, inverted = false }: { href: string; children: React.ReactNode; inverted?: boolean }) {
  return (
    <Link
      href={href}
      className={[
        "group inline-flex h-11 items-center justify-center gap-2 rounded-full px-5 text-sm font-medium transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2",
        inverted
          ? "border border-white/20 bg-white text-[#07111d] shadow-[0_12px_40px_rgba(0,0,0,0.18)] hover:-translate-y-0.5 hover:bg-white/92 focus-visible:ring-white focus-visible:ring-offset-[#07111d]"
          : "border border-[#d7dce3] bg-white text-[#0b1118] shadow-[0_10px_28px_rgba(15,23,42,0.07)] hover:-translate-y-0.5 hover:border-[#bec7d2] focus-visible:ring-[#2563eb] focus-visible:ring-offset-white",
      ].join(" ")}
    >
      {children}
      <ArrowRight size={15} className="transition-transform duration-300 group-hover:translate-x-0.5" />
    </Link>
  );
}

function SectionMeta({ index, label, dark = false }: { index: string; label: string; dark?: boolean }) {
  return (
    <div className="flex items-center gap-3 text-[11px] font-semibold uppercase tracking-[0.18em]">
      <span className={dark ? "text-white/85" : "text-[#111827]"}>{index}</span>
      <span className={dark ? "text-white/45" : "text-[#6b7280]"}>{label}</span>
    </div>
  );
}

export function HomeRedesign() {
  const featured = caseStudies[0];
  const supporting = caseStudies.slice(1, 4);

  return (
    <div className="home-redesign bg-[#07111d] text-[#0b1118]">
      <section className="relative isolate min-h-[760px] overflow-hidden bg-[#06101b] pt-16 md:min-h-[820px]">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_18%,rgba(40,96,160,0.16),transparent_32%),linear-gradient(180deg,#07111d_0%,#06101b_64%,#06101b_100%)]" />
        <SystemEarth className="absolute inset-0 z-0" />
        <div className="pointer-events-none absolute inset-0 z-[1] bg-[linear-gradient(180deg,rgba(6,16,27,0.12)_0%,rgba(6,16,27,0.02)_38%,rgba(6,16,27,0.34)_100%)]" />
        <div className="pointer-events-none absolute inset-x-0 bottom-0 z-[2] h-40 bg-gradient-to-t from-[#06101b] to-transparent" />

        {heroMetrics.map((metric) => {
          const Icon = metric.icon;
          return (
            <div
              key={metric.label}
              className={`absolute z-10 hidden w-[178px] rounded-2xl border border-white/12 bg-[#0a1522]/72 p-4 text-white shadow-[0_18px_50px_rgba(0,0,0,0.24)] backdrop-blur-xl sm:block ${metric.className}`}
            >
              <div className="flex items-start gap-3">
                <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl border border-white/10 bg-white/[0.05] text-[#8fc5ff]">
                  <Icon size={17} />
                </span>
                <div>
                  <p className="text-[10px] uppercase tracking-[0.12em] text-white/45">{metric.label}</p>
                  <p className="mt-1 text-[15px] font-semibold tracking-tight text-white">{metric.value}</p>
                  <p className="mt-0.5 text-[10px] text-white/35">{metric.meta}</p>
                </div>
              </div>
            </div>
          );
        })}

        <div className="relative z-20 mx-auto flex min-h-[700px] max-w-[1440px] items-center justify-center px-5 pb-10 pt-24 sm:px-8 md:min-h-[760px] md:px-12">
          <div className="mx-auto max-w-[820px] text-center text-white">
            <h1 className="text-balance text-[clamp(2.65rem,6vw,5.4rem)] font-semibold leading-[0.98] tracking-[-0.045em]">
              I turn operational chaos
              <br className="hidden sm:block" /> into systems that scale.
            </h1>
            <p className="mx-auto mt-7 max-w-[680px] text-balance text-[15px] leading-7 text-white/66 sm:text-base md:text-lg md:leading-8">
              Custom software, automation and applied AI that remove manual work,
              connect operations and make your business easier to run.
            </p>
            <div className="mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <ArrowLink href="/work" inverted>
                View My Work
              </ArrowLink>
              <Link
                href="/contact"
                className="group inline-flex h-11 items-center justify-center gap-2 rounded-full border border-white/18 bg-white/[0.035] px-5 text-sm font-medium text-white/86 backdrop-blur-xl transition-all duration-300 hover:-translate-y-0.5 hover:border-white/30 hover:bg-white/[0.07]"
              >
                Let&apos;s Talk
                <ArrowRight size={15} className="transition-transform duration-300 group-hover:translate-x-0.5" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      <div className="grid bg-[#f7f7f5] lg:grid-cols-2">
        <section id="problem" className="relative overflow-hidden border-b border-[#e4e6e8] px-5 py-20 sm:px-8 md:px-12 md:py-24 lg:border-b-0 lg:border-r lg:px-[clamp(3rem,5vw,5rem)] lg:py-28">
          <div className="mx-auto max-w-[680px] lg:ml-auto lg:mr-0">
            <SectionMeta index="01" label="Problem" />
            <div className="mt-7 grid gap-10 xl:grid-cols-[0.72fr_1fr] xl:items-center">
              <div>
                <h2 className="max-w-md text-balance text-[clamp(2rem,3.6vw,3.7rem)] font-semibold leading-[1.04] tracking-[-0.035em] text-[#0b1118]">
                  Manual work is expensive.
                </h2>
                <p className="mt-5 max-w-md text-[15px] leading-7 text-[#667085]">
                  Disconnected tools, repetitive tasks and scattered data slow your team down and hide what really matters.
                </p>
              </div>

              <div className="relative min-h-[360px] sm:min-h-[410px]">
                <div className="absolute left-0 top-6 w-[58%] sm:left-2 sm:top-3">
                  <div className="relative h-[300px]">
                    {painCards.map((item, index) => (
                      <div
                        key={item.label}
                        className={`absolute rounded-xl border border-[#e8eaed] px-4 py-3 text-[12px] font-medium text-[#4b5563] shadow-[0_12px_30px_rgba(15,23,42,0.06)] ${item.tone} ${item.rotate}`}
                        style={{
                          left: `${(index % 3) * 48 + (index > 4 ? 10 : 0)}px`,
                          top: `${Math.floor(index / 2) * 54 + (index % 2) * 23}px`,
                        }}
                      >
                        {item.label}
                      </div>
                    ))}
                  </div>
                </div>

                <div className="absolute right-0 top-20 w-[42%] min-w-[190px] rounded-2xl border border-[#e5e7eb] bg-white p-5 shadow-[0_16px_50px_rgba(15,23,42,0.07)] sm:top-16 sm:min-w-[210px]">
                  <p className="text-sm font-semibold text-[#111827]">One connected system</p>
                  <div className="mt-5 space-y-4 text-[13px] text-[#667085]">
                    {["Automated workflows", "Real-time data", "Full visibility", "More time to grow"].map((item) => (
                      <div key={item} className="flex items-center gap-3">
                        <span className="flex h-5 w-5 items-center justify-center rounded-full border border-[#cad2dc] text-[#334155]">
                          <Check size={11} />
                        </span>
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <ArrowRight className="absolute left-[53%] top-[48%] -translate-x-1/2 text-[#8090a3]" size={26} strokeWidth={1.35} />
              </div>
            </div>
          </div>
        </section>

        <section id="services" className="relative overflow-hidden px-5 py-20 sm:px-8 md:px-12 md:py-24 lg:px-[clamp(3rem,5vw,5rem)] lg:py-28">
          <div className="mx-auto max-w-[680px] lg:ml-0 lg:mr-auto">
            <SectionMeta index="02" label="What I Build" />
            <div className="mt-7 text-center lg:text-left xl:text-center">
              <h2 className="text-balance text-[clamp(2rem,3.2vw,3.25rem)] font-semibold leading-[1.06] tracking-[-0.035em] text-[#0b1118]">
                Systems that run your business.
              </h2>
              <p className="mx-auto mt-4 max-w-xl text-[15px] leading-7 text-[#667085]">
                Technology should adapt to your business — not the other way around.
              </p>
            </div>

            <div className="mt-10 grid gap-4 sm:grid-cols-3">
              {services.map((service, index) => {
                const Icon = service.icon;
                return (
                  <article
                    key={service.title}
                    className="group flex min-h-[300px] flex-col rounded-2xl border border-[#e5e7eb] bg-white p-5 shadow-[0_14px_38px_rgba(15,23,42,0.045)] transition-all duration-300 hover:-translate-y-1 hover:border-[#d5dae1] hover:shadow-[0_20px_50px_rgba(15,23,42,0.08)] sm:p-6"
                  >
                    <span className="flex h-11 w-11 items-center justify-center rounded-xl border border-[#e2e6eb] bg-[#fbfcfd] text-[#0f172a] transition-colors duration-300 group-hover:border-[#c8d9f4] group-hover:text-[#2563eb]">
                      <Icon size={22} strokeWidth={1.7} />
                    </span>
                    <h3 className="mt-7 text-[17px] font-semibold leading-snug tracking-[-0.02em] text-[#111827]">
                      {service.title}
                    </h3>
                    <p className="mt-3 text-[13px] leading-6 text-[#667085]">{service.description}</p>
                    <span className="mt-auto pt-7 text-[#111827] transition-transform duration-300 group-hover:translate-x-1">
                      <ArrowRight size={16} />
                    </span>
                  </article>
                );
              })}
            </div>
          </div>
        </section>
      </div>

      <section id="work" className="relative overflow-hidden bg-[#07111d] px-5 py-20 text-white sm:px-8 md:px-12 md:py-24 lg:px-16 xl:px-20 xl:py-28">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_72%_16%,rgba(48,97,150,0.11),transparent_34%)]" />
        <div className="relative mx-auto max-w-[1440px]">
          <div className="grid gap-10 lg:grid-cols-[0.34fr_0.66fr] lg:items-start">
            <div>
              <SectionMeta index="03" label="Selected Work" dark />
              <h2 className="mt-7 text-[clamp(2.3rem,4.1vw,4rem)] font-semibold leading-[1.02] tracking-[-0.04em]">
                Real systems.
                <br />
                Real impact.
              </h2>
              <p className="mt-5 max-w-sm text-[14px] leading-6 text-white/48">
                A few examples of how I helped companies simplify operations and grow.
              </p>

              <div className="mt-8 rounded-2xl border border-white/10 bg-white/[0.035] p-5 backdrop-blur-xl sm:p-6">
                <p className="text-[10px] font-semibold uppercase tracking-[0.16em] text-white/35">Featured project</p>
                <h3 className="mt-4 text-2xl font-semibold tracking-[-0.03em]">Mini Sklady</h3>
                <p className="mt-3 text-sm leading-6 text-white/55">
                  Rental management platform that digitized the entire customer lifecycle from booking to payment, billing and access.
                </p>
                <div className="mt-6 grid grid-cols-3 gap-3 border-t border-white/10 pt-5">
                  <div>
                    <p className="text-2xl font-semibold">36+</p>
                    <p className="mt-1 text-[10px] leading-4 text-white/38">Customers</p>
                  </div>
                  <div>
                    <p className="text-2xl font-semibold">~30</p>
                    <p className="mt-1 text-[10px] leading-4 text-white/38">Active rentals</p>
                  </div>
                  <div>
                    <p className="text-2xl font-semibold">Full</p>
                    <p className="mt-1 text-[10px] leading-4 text-white/38">Rental lifecycle</p>
                  </div>
                </div>
                <div className="mt-6">
                  <ArrowLink href={featured ? `/work/${featured.slug}` : "/work"} inverted>
                    View Case Study
                  </ArrowLink>
                </div>
              </div>
            </div>

            <div className="grid gap-4">
              <Link
                href={featured ? `/work/${featured.slug}` : "/work"}
                className="group relative block overflow-hidden rounded-2xl border border-white/10 bg-[#0b1623] shadow-[0_24px_70px_rgba(0,0,0,0.24)]"
              >
                <div className="grid min-h-[430px] md:grid-cols-[170px_1fr]">
                  <div className="hidden border-r border-white/8 bg-[#0b1623] p-4 md:block">
                    <p className="text-xs font-semibold text-white/70">Mini Sklady</p>
                    <div className="mt-7 space-y-4 text-[11px] text-white/36">
                      {["Overview", "Leads", "Rentals", "Contracts", "Payments", "Units", "Reports", "Settings"].map((item, index) => (
                        <div key={item} className={`rounded-lg px-3 py-2 ${index === 0 ? "bg-white/[0.06] text-white/70" : ""}`}>
                          {item}
                        </div>
                      ))}
                    </div>
                  </div>
                  <div className="relative min-h-[400px] overflow-hidden bg-[#edf1f5]">
                    {featured ? (
                      <Image
                        src={featured.image}
                        alt="Mini Sklady platform preview"
                        fill
                        priority
                        sizes="(max-width: 768px) 100vw, 70vw"
                        className="object-cover object-top transition-transform duration-700 group-hover:scale-[1.015]"
                      />
                    ) : null}
                    <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#07111d]/14 via-transparent to-transparent" />
                  </div>
                </div>
              </Link>

              <div className="grid gap-4 md:grid-cols-3">
                {supporting.map((study, index) => (
                  <Link
                    key={study.slug}
                    href={`/work/${study.slug}`}
                    className="group overflow-hidden rounded-2xl border border-white/10 bg-white/[0.03] p-4 transition-all duration-300 hover:-translate-y-1 hover:border-white/18 hover:bg-white/[0.05]"
                  >
                    <div className="relative aspect-[16/9] overflow-hidden rounded-xl border border-white/8 bg-[#0d1724]">
                      <Image
                        src={study.image}
                        alt={`${study.company} project preview`}
                        fill
                        sizes="(max-width: 768px) 100vw, 33vw"
                        className="object-cover opacity-86 transition-transform duration-700 group-hover:scale-[1.04]"
                      />
                    </div>
                    <p className="mt-4 text-[10px] uppercase tracking-[0.14em] text-white/32">
                      {index === 0 ? "Automation" : index === 1 ? "Web platform" : "Business system"}
                    </p>
                    <h3 className="mt-2 line-clamp-2 text-base font-semibold tracking-[-0.02em] text-white/90">
                      {study.company}
                    </h3>
                    <div className="mt-4 flex items-center gap-2 text-xs text-white/52">
                      View project <ArrowRight size={13} />
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="process" className="bg-[#f8f8f6] px-5 py-20 sm:px-8 md:px-12 md:py-24 lg:px-16 xl:px-20 xl:py-28">
        <div className="mx-auto max-w-[1440px]">
          <SectionMeta index="04" label="Process" />
          <div className="mt-7 grid gap-12 lg:grid-cols-[0.32fr_0.68fr] lg:gap-16">
            <div>
              <h2 className="max-w-md text-balance text-[clamp(2.2rem,3.8vw,3.8rem)] font-semibold leading-[1.02] tracking-[-0.04em] text-[#0b1118]">
                From understanding to a system that works.
              </h2>
              <p className="mt-5 max-w-md text-[15px] leading-7 text-[#667085]">
                A clear process that ensures the right solution is delivered the right way.
              </p>
            </div>

            <div className="relative grid gap-8 sm:grid-cols-2 lg:grid-cols-4 lg:gap-5 lg:pt-14">
              <div className="absolute left-0 right-0 top-[85px] hidden h-px bg-[#d4d9e0] lg:block" />
              {process.map((step) => {
                const Icon = step.icon;
                return (
                  <article key={step.number} className="relative">
                    <p className="text-xs font-semibold text-[#6b7280]">{step.number}</p>
                    <div className="relative z-10 mt-5 flex h-10 w-10 items-center justify-center rounded-full border border-[#d9dee5] bg-[#f8f8f6] text-[#111827] lg:mt-8">
                      <Icon size={19} strokeWidth={1.7} />
                    </div>
                    <h3 className="mt-5 text-base font-semibold tracking-[-0.02em] text-[#111827]">{step.title}</h3>
                    <p className="mt-3 max-w-[220px] text-[13px] leading-6 text-[#667085]">{step.description}</p>
                  </article>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      <section id="about" className="border-t border-[#e4e6e8] bg-[#f8f8f6] px-5 py-20 sm:px-8 md:px-12 md:py-24 lg:px-16 xl:px-20">
        <div className="mx-auto max-w-[1440px]">
          <SectionMeta index="05" label="Working With Me" />
          <div className="mt-7 grid gap-12 lg:grid-cols-[0.36fr_0.2fr_0.44fr] lg:items-center">
            <div>
              <h2 className="max-w-lg text-balance text-[clamp(2.15rem,3.4vw,3.45rem)] font-semibold leading-[1.03] tracking-[-0.04em] text-[#0b1118]">
                The focus of an individual.
                <br />
                The standards of a top studio.
              </h2>
              <p className="mt-5 max-w-lg text-[14px] leading-7 text-[#667085]">
                You work directly with me — no account managers, no middle layers. Technical, strategic and hands-on.
              </p>
            </div>

            <div className="flex justify-center lg:justify-start">
              <div className="relative h-44 w-44 overflow-hidden rounded-full bg-[#202b37] shadow-[0_20px_50px_rgba(15,23,42,0.12)] md:h-52 md:w-52">
                <Image
                  src="/images/daniel-vlcek.jpg"
                  alt="Daniel Vlcek"
                  fill
                  sizes="208px"
                  className="object-cover object-[70%_center]"
                />
              </div>
            </div>

            <div className="grid gap-5 sm:grid-cols-2">
              {partnerItems.map((item) => {
                const Icon = item.icon;
                return (
                  <div key={item.title} className="flex gap-4 border-b border-[#e3e6ea] pb-5 last:border-b-0 sm:[&:nth-last-child(-n+2)]:border-b-0">
                    <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-[#e0e4e9] bg-white text-[#111827] shadow-[0_8px_24px_rgba(15,23,42,0.05)]">
                      <Icon size={19} strokeWidth={1.65} />
                    </span>
                    <div>
                      <h3 className="text-[14px] font-semibold text-[#111827]">{item.title}</h3>
                      <p className="mt-1.5 text-[12px] leading-5 text-[#667085]">{item.description}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden bg-[#07111d] px-5 py-20 text-white sm:px-8 md:px-12 md:py-24 lg:px-16 xl:px-20 xl:py-28">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_78%_78%,rgba(66,125,195,0.20),transparent_29%),radial-gradient(ellipse_at_70%_92%,rgba(175,215,255,0.12),transparent_32%)]" />
        <div className="pointer-events-none absolute -bottom-40 right-[-8%] h-[360px] w-[62%] rotate-[-8deg] rounded-[50%] border-t border-[#82b7f4]/45 shadow-[0_-18px_55px_rgba(65,132,217,0.24)]" />
        <div className="relative mx-auto max-w-[1440px]">
          <SectionMeta index="06" label="Let's Build Something That Scales" dark />
          <div className="mt-8 grid gap-8 lg:grid-cols-[1fr_auto] lg:items-end">
            <div>
              <h2 className="max-w-3xl text-balance text-[clamp(2.3rem,4.3vw,4.5rem)] font-semibold leading-[1.02] tracking-[-0.04em]">
                Ready to build a system
                <br className="hidden sm:block" /> that moves your business forward?
              </h2>
              <p className="mt-5 text-[15px] text-white/52">Let&apos;s discuss your project and create a plan.</p>
            </div>
            <div className="flex flex-col gap-3 sm:flex-row lg:pb-1">
              <ArrowLink href="/contact" inverted>
                Let&apos;s Talk
              </ArrowLink>
              <Link
                href="/work"
                className="group inline-flex h-11 items-center justify-center gap-2 rounded-full border border-white/18 bg-transparent px-5 text-sm font-medium text-white/82 transition hover:border-white/30 hover:bg-white/[0.05]"
              >
                View My Work
                <ArrowRight size={15} className="transition-transform duration-300 group-hover:translate-x-0.5" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
