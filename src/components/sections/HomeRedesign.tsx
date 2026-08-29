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
    className: "left-[6%] top-[27%]",
  },
  {
    label: "CRM Updated",
    value: "Synced",
    meta: "live",
    icon: Check,
    className: "left-[4.5%] top-[59%]",
  },
  {
    label: "Invoice Generated",
    value: "2,450 €",
    meta: "latest",
    icon: FileText,
    className: "right-[6%] top-[27%]",
  },
  {
    label: "Report Ready",
    value: "Real-time",
    meta: "live",
    icon: Gauge,
    className: "right-[4.5%] top-[59%]",
  },
];

const painCards = [
  { label: "Leads in emails", rotate: "-rotate-3", tone: "bg-[#fffaf8]" },
  { label: "Manual data entry", rotate: "rotate-2", tone: "bg-[#fff2f3]" },
  { label: "Spreadsheets", rotate: "-rotate-1", tone: "bg-white" },
  { label: "No visibility", rotate: "rotate-3", tone: "bg-[#fffbe6]" },
  { label: "Copy & paste", rotate: "rotate-1", tone: "bg-[#f5f7fa]" },
  { label: "Errors", rotate: "-rotate-2", tone: "bg-white" },
  { label: "Delayed follow-ups", rotate: "rotate-2", tone: "bg-[#fafafa]" },
  { label: "Lost opportunities", rotate: "-rotate-4", tone: "bg-[#f8f8f8]" },
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
    title: "Business-first thinking",
    description: "I focus on real business outcomes, not just code.",
  },
  {
    icon: Workflow,
    title: "Long-term partner",
    description: "I build systems that can grow with your business.",
  },
];

const packages = [
  {
    title: "Systems Audit & Roadmap",
    price: "€2.5k",
    description: "For companies that need clarity before building.",
    items: ["Process & system audit", "Opportunity mapping", "Prioritized roadmap", "Clear next steps"],
    cta: "Discuss Audit",
  },
  {
    title: "Automation & AI Implementation",
    price: "€5k",
    description: "For companies ready to remove manual work and connect operations.",
    items: ["Workflow automation", "Tool integrations", "Applied AI where it matters", "Efficiency improvements"],
    cta: "Start Project",
    recommended: true,
  },
  {
    title: "Custom Platform Build",
    price: "€10k",
    description: "For companies that need a tailored internal or client-facing platform.",
    items: ["Custom web application", "Scalable architecture", "Integrations & automation", "Support & optimization"],
    cta: "Plan Build",
  },
];

function SectionMeta({ index, label, dark = false }: { index: string; label: string; dark?: boolean }) {
  return (
    <div className="flex items-center gap-3 text-[10px] font-semibold uppercase tracking-[0.19em]">
      <span className={dark ? "text-white/85" : "text-[#111827]"}>{index}</span>
      <span className={dark ? "text-white/42" : "text-[#6b7280]"}>{label}</span>
    </div>
  );
}

function CtaButton({ href, children, light = false }: { href: string; children: React.ReactNode; light?: boolean }) {
  return (
    <Link
      href={href}
      className={[
        "group inline-flex h-10 items-center justify-center gap-2 rounded-full px-5 text-[12px] font-semibold transition-all duration-300",
        light
          ? "bg-white text-[#07111d] shadow-[0_10px_30px_rgba(0,0,0,0.18)] hover:-translate-y-0.5 hover:bg-white/94"
          : "border border-[#d6dbe2] bg-white text-[#111827] shadow-[0_8px_24px_rgba(15,23,42,0.06)] hover:-translate-y-0.5 hover:border-[#bcc6d2]",
      ].join(" ")}
    >
      {children}
      <ArrowRight size={14} className="transition-transform duration-300 group-hover:translate-x-0.5" />
    </Link>
  );
}

function HeroNetworkOverlay() {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 1440 640"
      preserveAspectRatio="none"
      className="pointer-events-none absolute inset-0 z-[2] h-full w-full opacity-55"
    >
      <g fill="none" stroke="rgba(128,177,226,0.23)" strokeWidth="1">
        <path d="M90 205 C220 190 280 220 350 286 S520 300 600 332" />
        <path d="M70 410 C210 396 262 332 392 336 S540 374 626 346" />
        <path d="M1350 206 C1230 196 1180 226 1098 286 S938 302 842 333" />
        <path d="M1372 407 C1248 390 1180 342 1062 338 S920 374 812 347" />
        <path d="M250 106 C420 116 455 184 544 211" />
        <path d="M1190 103 C1032 116 989 185 898 212" />
      </g>
      <g fill="#a9d2ff">
        <circle cx="350" cy="286" r="2.2" />
        <circle cx="392" cy="336" r="2.2" />
        <circle cx="1098" cy="286" r="2.2" />
        <circle cx="1062" cy="338" r="2.2" />
        <circle cx="544" cy="211" r="1.8" />
        <circle cx="898" cy="212" r="1.8" />
      </g>
      <g fill="#ffb468">
        <circle cx="250" cy="106" r="2" />
        <circle cx="1190" cy="103" r="2" />
        <circle cx="626" cy="346" r="2" />
        <circle cx="812" cy="347" r="2" />
      </g>
    </svg>
  );
}

function DashboardPreview() {
  const chart = "M0 92 C36 80 55 45 89 58 C120 70 137 91 170 68 C201 46 225 35 254 56 C285 78 300 85 337 54 C370 27 397 42 430 63 C462 80 491 68 526 35 C554 10 581 31 610 49";

  return (
    <div className="grid min-h-[318px] overflow-hidden rounded-xl border border-white/10 bg-[#0a1522] shadow-[0_20px_55px_rgba(0,0,0,0.26)] sm:grid-cols-[96px_1fr]">
      <aside className="hidden border-r border-white/7 bg-[#0a1522] p-3 sm:block">
        <p className="text-[9px] font-semibold text-white/70">Mini Sklady</p>
        <div className="mt-5 space-y-1 text-[8px] text-white/33">
          {["Overview", "Leads", "Rentals", "Contracts", "Payments", "Units", "Reports", "Settings"].map((item, index) => (
            <div key={item} className={`rounded-md px-2 py-1.5 ${index === 0 ? "bg-white/[0.06] text-white/66" : ""}`}>
              {item}
            </div>
          ))}
        </div>
      </aside>

      <div className="bg-[#f4f6f8] p-3 text-[#111827] sm:p-4">
        <div className="flex items-center justify-between">
          <p className="text-[11px] font-semibold">Dashboard</p>
          <div className="flex gap-1.5">
            <span className="h-5 w-5 rounded-full border border-[#e2e6eb] bg-white" />
            <span className="h-5 w-5 rounded-full border border-[#e2e6eb] bg-white" />
          </div>
        </div>

        <div className="mt-3 grid grid-cols-3 gap-2">
          {[
            ["Active Rentals", "28"],
            ["New Leads", "12"],
            ["Monthly Revenue", "8,540 €"],
          ].map(([label, value]) => (
            <div key={label} className="rounded-lg border border-[#e6e9ed] bg-white p-2.5 shadow-[0_4px_14px_rgba(15,23,42,0.03)]">
              <p className="text-[7px] uppercase tracking-[0.05em] text-[#98a2b3]">{label}</p>
              <p className="mt-1 text-[13px] font-semibold tracking-[-0.02em]">{value}</p>
            </div>
          ))}
        </div>

        <div className="mt-2.5 rounded-lg border border-[#e6e9ed] bg-white p-3 shadow-[0_4px_14px_rgba(15,23,42,0.03)]">
          <div className="flex items-center justify-between">
            <p className="text-[8px] font-semibold">Rental Overview</p>
            <span className="text-[7px] text-[#98a2b3]">Last 7 days</span>
          </div>
          <svg viewBox="0 0 610 120" className="mt-3 h-[116px] w-full" preserveAspectRatio="none">
            <g stroke="#edf0f3" strokeWidth="1">
              <line x1="0" x2="610" y1="30" y2="30" />
              <line x1="0" x2="610" y1="60" y2="60" />
              <line x1="0" x2="610" y1="90" y2="90" />
            </g>
            <path d={chart} fill="none" stroke="#4e8cff" strokeWidth="3" strokeLinecap="round" />
            <circle cx="254" cy="56" r="4" fill="#07111d" />
            <rect x="242" y="30" width="24" height="17" rx="5" fill="#07111d" />
            <text x="254" y="41.5" textAnchor="middle" fill="white" fontSize="7">28</text>
          </svg>
        </div>
      </div>
    </div>
  );
}

export function HomeRedesign() {
  const supporting = caseStudies.slice(1, 4);

  return (
    <div className="home-redesign bg-[#07111d] text-[#0b1118]">
      <section className="relative isolate min-h-[580px] overflow-hidden bg-[#06101b] pt-16 md:min-h-[630px] md:pt-[72px]">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_16%,rgba(38,94,151,0.15),transparent_36%),linear-gradient(180deg,#07111d_0%,#06101b_100%)]" />
        <SystemEarth className="absolute inset-0 z-0" />
        <HeroNetworkOverlay />
        <div className="pointer-events-none absolute inset-x-[5%] bottom-[-126px] z-[3] h-[330px] rounded-[50%] border-t border-[#a9d5ff]/55 shadow-[0_-8px_35px_rgba(84,158,234,0.22)]" />
        <div className="pointer-events-none absolute inset-x-0 bottom-0 z-[4] h-24 bg-gradient-to-t from-[#06101b] to-transparent" />

        {heroMetrics.map((metric) => {
          const Icon = metric.icon;
          return (
            <div
              key={metric.label}
              className={`absolute z-10 hidden w-[168px] rounded-xl border border-white/12 bg-[#0a1522]/72 p-3.5 text-white shadow-[0_16px_45px_rgba(0,0,0,0.22)] backdrop-blur-xl md:block ${metric.className}`}
            >
              <div className="flex items-center gap-3">
                <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg border border-white/9 bg-white/[0.045] text-[#8fc5ff]">
                  <Icon size={15} />
                </span>
                <div>
                  <p className="text-[8px] uppercase tracking-[0.11em] text-white/40">{metric.label}</p>
                  <p className="mt-0.5 text-[13px] font-semibold tracking-tight text-white">{metric.value}</p>
                  <p className="mt-0.5 text-[8px] text-white/30">{metric.meta}</p>
                </div>
              </div>
            </div>
          );
        })}

        <div className="relative z-20 mx-auto flex min-h-[514px] max-w-[1440px] items-center justify-center px-5 pb-12 pt-14 sm:px-8 md:min-h-[558px] md:px-12 md:pt-8">
          <div className="mx-auto max-w-[930px] text-center text-white">
            <h1 className="text-balance text-[clamp(2.2rem,4.2vw,3.8rem)] font-semibold leading-[1.02] tracking-[-0.045em]">
              I turn operational chaos
              <br className="hidden sm:block" /> into systems that scale.
            </h1>
            <p className="mx-auto mt-5 max-w-[620px] text-balance text-[13px] leading-6 text-white/62 sm:text-[14px] md:text-[15px] md:leading-7">
              Custom software, automation and applied AI that remove manual work,
              connect operations and make your business easier to run.
            </p>
            <div className="mt-7 flex flex-col items-center justify-center gap-2.5 sm:flex-row">
              <CtaButton href="/work" light>
                View My Work
              </CtaButton>
              <Link
                href="/contact"
                className="group inline-flex h-10 items-center justify-center gap-2 rounded-full border border-white/17 bg-white/[0.025] px-5 text-[12px] font-semibold text-white/80 backdrop-blur-xl transition-all duration-300 hover:-translate-y-0.5 hover:border-white/28 hover:bg-white/[0.06]"
              >
                Let&apos;s Talk
                <ArrowRight size={14} className="transition-transform duration-300 group-hover:translate-x-0.5" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      <div className="grid bg-[#f7f7f5] lg:grid-cols-2">
        <section id="problem" className="relative overflow-hidden border-b border-[#e5e7ea] px-5 py-16 sm:px-8 md:px-10 md:py-20 lg:border-b-0 lg:border-r lg:px-[clamp(2.5rem,4vw,4.5rem)] lg:py-20 xl:py-24">
          <div className="mx-auto max-w-[650px] lg:ml-auto lg:mr-0">
            <SectionMeta index="01" label="Problem" />
            <div className="mt-6 grid gap-7 xl:grid-cols-[0.68fr_1fr] xl:items-center">
              <div>
                <h2 className="max-w-[300px] text-balance text-[clamp(1.85rem,2.8vw,2.65rem)] font-semibold leading-[1.05] tracking-[-0.035em] text-[#0b1118]">
                  Manual work is expensive.
                </h2>
                <p className="mt-4 max-w-[300px] text-[12px] leading-5.5 text-[#667085] sm:text-[13px]">
                  Disconnected tools, repetitive tasks and scattered data slow your team down and hide what really matters.
                </p>
              </div>

              <div className="relative min-h-[310px]">
                <div className="absolute left-0 top-3 w-[58%]">
                  <div className="relative h-[250px]">
                    {painCards.map((item, index) => (
                      <div
                        key={item.label}
                        className={`absolute whitespace-nowrap rounded-lg border border-[#e8eaed] px-3 py-2.5 text-[9px] font-medium text-[#667085] shadow-[0_10px_25px_rgba(15,23,42,0.05)] ${item.tone} ${item.rotate}`}
                        style={{
                          left: `${(index % 3) * 40 + (index > 4 ? 4 : 0)}px`,
                          top: `${Math.floor(index / 2) * 45 + (index % 2) * 19}px`,
                        }}
                      >
                        {item.label}
                      </div>
                    ))}
                  </div>
                </div>

                <div className="absolute right-0 top-12 w-[42%] min-w-[174px] rounded-xl border border-[#e5e7eb] bg-white p-4 shadow-[0_14px_40px_rgba(15,23,42,0.06)]">
                  <p className="text-[11px] font-semibold text-[#111827]">One connected system</p>
                  <div className="mt-4 space-y-3 text-[9px] text-[#667085]">
                    {["Automated workflows", "Real-time data", "Full visibility", "More time to grow"].map((item) => (
                      <div key={item} className="flex items-center gap-2.5">
                        <span className="flex h-4 w-4 items-center justify-center rounded-full border border-[#cad2dc] text-[#334155]">
                          <Check size={9} />
                        </span>
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
                <ArrowRight className="absolute left-[55%] top-[46%] -translate-x-1/2 text-[#8a98a8]" size={20} strokeWidth={1.2} />
              </div>
            </div>
          </div>
        </section>

        <section id="services" className="relative overflow-hidden px-5 py-16 sm:px-8 md:px-10 md:py-20 lg:px-[clamp(2.5rem,4vw,4.5rem)] lg:py-20 xl:py-24">
          <div className="mx-auto max-w-[650px] lg:ml-0 lg:mr-auto">
            <SectionMeta index="02" label="What I Build" />
            <div className="mt-6 text-center">
              <h2 className="text-balance text-[clamp(1.9rem,2.7vw,2.65rem)] font-semibold leading-[1.06] tracking-[-0.035em] text-[#0b1118]">
                Systems that run your business.
              </h2>
              <p className="mx-auto mt-3 max-w-md text-[12px] leading-5.5 text-[#667085] sm:text-[13px]">
                Technology should adapt to your business — not the other way around.
              </p>
            </div>

            <div className="mt-8 grid gap-3 sm:grid-cols-3">
              {services.map((service) => {
                const Icon = service.icon;
                return (
                  <article
                    key={service.title}
                    className="group flex min-h-[250px] flex-col rounded-xl border border-[#e5e7eb] bg-white p-4 shadow-[0_12px_32px_rgba(15,23,42,0.04)] transition-all duration-300 hover:-translate-y-1 hover:border-[#d5dae1] hover:shadow-[0_18px_42px_rgba(15,23,42,0.07)] sm:p-5"
                  >
                    <span className="flex h-10 w-10 items-center justify-center rounded-lg border border-[#e2e6eb] bg-[#fbfcfd] text-[#0f172a] transition-colors duration-300 group-hover:border-[#c8d9f4] group-hover:text-[#2563eb]">
                      <Icon size={20} strokeWidth={1.65} />
                    </span>
                    <h3 className="mt-5 text-[14px] font-semibold leading-snug tracking-[-0.02em] text-[#111827]">
                      {service.title}
                    </h3>
                    <p className="mt-2.5 text-[10px] leading-[1.65] text-[#667085]">{service.description}</p>
                    <ArrowRight size={14} className="mt-auto pt-0 text-[#111827] transition-transform duration-300 group-hover:translate-x-1" />
                  </article>
                );
              })}
            </div>
          </div>
        </section>
      </div>

      <div className="grid lg:grid-cols-2">
        <section id="work" className="relative overflow-hidden bg-[#07111d] px-5 py-16 text-white sm:px-8 md:px-10 md:py-20 lg:px-[clamp(2.5rem,4vw,4.5rem)] lg:py-20 xl:py-24">
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_72%_18%,rgba(52,102,158,0.10),transparent_32%)]" />
          <div className="relative mx-auto max-w-[650px] lg:ml-auto lg:mr-0">
            <SectionMeta index="03" label="Selected Work" dark />
            <div className="mt-6 grid gap-5 xl:grid-cols-[0.37fr_0.63fr]">
              <div>
                <h2 className="text-[clamp(2rem,3vw,3rem)] font-semibold leading-[1.03] tracking-[-0.04em]">
                  Real systems.
                  <br />
                  Real impact.
                </h2>
                <p className="mt-3 max-w-[230px] text-[10px] leading-5 text-white/43">
                  A few examples of how I helped companies simplify operations and grow.
                </p>

                <div className="mt-5 rounded-xl border border-white/10 bg-white/[0.035] p-4 backdrop-blur-xl">
                  <p className="text-[8px] font-semibold uppercase tracking-[0.15em] text-white/32">Featured project</p>
                  <h3 className="mt-3 text-[18px] font-semibold tracking-[-0.025em]">Mini Sklady</h3>
                  <p className="mt-2 text-[10px] leading-[1.6] text-white/50">
                    Rental management system that digitized the rental process from booking to billing and access.
                  </p>
                  <div className="mt-4 grid grid-cols-3 gap-2 border-t border-white/8 pt-4">
                    <div><p className="text-[16px] font-semibold">36+</p><p className="mt-1 text-[7px] text-white/32">Customers</p></div>
                    <div><p className="text-[16px] font-semibold">~30</p><p className="mt-1 text-[7px] text-white/32">Active rentals</p></div>
                    <div><p className="text-[16px] font-semibold">Full</p><p className="mt-1 text-[7px] text-white/32">Lifecycle</p></div>
                  </div>
                  <div className="mt-4">
                    <CtaButton href={caseStudies[0] ? `/work/${caseStudies[0].slug}` : "/work"} light>
                      View Case Study
                    </CtaButton>
                  </div>
                </div>
              </div>

              <DashboardPreview />
            </div>

            <div className="mt-3 grid gap-3 sm:grid-cols-3">
              {supporting.map((study, index) => (
                <Link
                  key={study.slug}
                  href={`/work/${study.slug}`}
                  className="group overflow-hidden rounded-xl border border-white/9 bg-white/[0.028] p-2.5 transition hover:border-white/16 hover:bg-white/[0.045]"
                >
                  <div className="relative aspect-[16/8.5] overflow-hidden rounded-lg bg-[#0d1724]">
                    <Image
                      src={study.image}
                      alt={`${study.company} project preview`}
                      fill
                      sizes="(max-width: 768px) 100vw, 18vw"
                      className="object-cover opacity-78 transition-transform duration-700 group-hover:scale-[1.04]"
                    />
                  </div>
                  <p className="mt-2 text-[7px] uppercase tracking-[0.13em] text-white/28">
                    {index === 0 ? "Automation" : index === 1 ? "Web platform" : "Business system"}
                  </p>
                  <h3 className="mt-1 line-clamp-1 text-[10px] font-semibold text-white/82">{study.company}</h3>
                  <div className="mt-2 flex items-center gap-1.5 text-[8px] text-white/42">
                    View project <ArrowRight size={9} />
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        <section id="process" className="bg-[#f8f8f6] px-5 py-16 sm:px-8 md:px-10 md:py-20 lg:px-[clamp(2.5rem,4vw,4.5rem)] lg:py-20 xl:py-24">
          <div className="mx-auto max-w-[650px] lg:ml-0 lg:mr-auto">
            <SectionMeta index="04" label="Process" />
            <h2 className="mt-6 max-w-[420px] text-balance text-[clamp(2rem,3vw,3rem)] font-semibold leading-[1.03] tracking-[-0.04em] text-[#0b1118]">
              From understanding to a system that works.
            </h2>
            <p className="mt-3 max-w-sm text-[11px] leading-5.5 text-[#667085]">
              A clear process that ensures the right solution is delivered the right way.
            </p>

            <div className="relative mt-12 grid gap-7 sm:grid-cols-2 lg:mt-20 xl:grid-cols-4 xl:gap-3">
              <div className="absolute left-0 right-0 top-[33px] hidden h-px bg-[#ccd3db] xl:block" />
              {process.map((step) => {
                const Icon = step.icon;
                return (
                  <article key={step.number} className="relative">
                    <p className="text-[9px] font-semibold text-[#667085]">{step.number}</p>
                    <div className="relative z-10 mt-3 flex h-9 w-9 items-center justify-center rounded-full border border-[#d8dde4] bg-[#f8f8f6] text-[#111827] xl:mt-4">
                      <Icon size={17} strokeWidth={1.7} />
                    </div>
                    <h3 className="mt-3 text-[12px] font-semibold text-[#111827]">{step.title}</h3>
                    <p className="mt-2 max-w-[130px] text-[9px] leading-[1.65] text-[#667085]">{step.description}</p>
                  </article>
                );
              })}
            </div>
          </div>
        </section>
      </div>

      <div className="grid bg-[#f8f8f6] lg:grid-cols-2">
        <section id="about" className="border-b border-[#e5e7ea] px-5 py-16 sm:px-8 md:px-10 md:py-20 lg:border-b-0 lg:border-r lg:px-[clamp(2.5rem,4vw,4.5rem)] lg:py-20 xl:py-24">
          <div className="mx-auto max-w-[650px] lg:ml-auto lg:mr-0">
            <SectionMeta index="05" label="Working With Me" />
            <h2 className="mt-6 max-w-lg text-balance text-[clamp(1.95rem,2.8vw,2.75rem)] font-semibold leading-[1.04] tracking-[-0.04em] text-[#0b1118]">
              The focus of an individual.
              <br />
              The standards of a top studio.
            </h2>
            <p className="mt-3 max-w-md text-[11px] leading-5.5 text-[#667085]">
              You work directly with me — no account managers, no middle layers. Technical, strategic and hands-on.
            </p>

            <div className="mt-8 grid gap-x-6 gap-y-5 sm:grid-cols-2">
              {partnerItems.map((item) => {
                const Icon = item.icon;
                return (
                  <div key={item.title} className="flex gap-3">
                    <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg border border-[#e0e4e9] bg-white text-[#111827] shadow-[0_7px_20px_rgba(15,23,42,0.045)]">
                      <Icon size={17} strokeWidth={1.65} />
                    </span>
                    <div>
                      <h3 className="text-[11px] font-semibold text-[#111827]">{item.title}</h3>
                      <p className="mt-1 text-[9px] leading-4.5 text-[#667085]">{item.description}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        <section id="packages" className="relative overflow-hidden px-5 py-16 sm:px-8 md:px-10 md:py-20 lg:px-[clamp(2.5rem,4vw,4.5rem)] lg:py-20 xl:py-24">
          <div className="mx-auto max-w-[650px] lg:ml-0 lg:mr-auto">
            <SectionMeta index="06" label="Packages" />
            <h2 className="mt-6 max-w-xl text-balance text-[clamp(1.95rem,2.7vw,2.65rem)] font-semibold leading-[1.05] tracking-[-0.04em] text-[#0b1118]">
              Engagements built around clarity, impact and long-term value.
            </h2>
            <p className="mt-3 text-[10px] uppercase tracking-[0.06em] text-[#8892a0]">
              Audit-first. Outcome-focused. Built to scale with you.
            </p>

            <div className="mt-7 grid gap-2.5 sm:grid-cols-3">
              {packages.map((pkg) => (
                <article
                  key={pkg.title}
                  className={[
                    "relative flex min-h-[310px] flex-col rounded-xl border p-4 text-white shadow-[0_18px_45px_rgba(7,17,29,0.16)]",
                    pkg.recommended
                      ? "border-[#5796ff]/55 bg-[linear-gradient(145deg,#102541_0%,#0a1727_62%,#08131f_100%)] ring-1 ring-[#4e8cff]/20"
                      : "border-white/9 bg-[linear-gradient(145deg,#111d2a_0%,#0a1522_100%)]",
                  ].join(" ")}
                >
                  {pkg.recommended ? (
                    <span className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full border border-[#78aaff]/35 bg-[#2867d7] px-3 py-1 text-[7px] font-semibold uppercase tracking-[0.13em] text-white shadow-[0_8px_20px_rgba(37,99,235,0.28)]">
                      Recommended
                    </span>
                  ) : null}
                  <h3 className="text-[12px] font-semibold leading-4.5">{pkg.title}</h3>
                  <p className="mt-2 text-[8px] leading-4 text-white/43">{pkg.description}</p>
                  <p className="mt-4 text-[8px] text-white/40">From</p>
                  <p className="mt-0.5 text-[22px] font-semibold tracking-[-0.035em]">{pkg.price}</p>
                  <div className="my-3 h-px bg-white/8" />
                  <ul className="space-y-2">
                    {pkg.items.map((item) => (
                      <li key={item} className="flex items-start gap-2 text-[8px] leading-4 text-white/55">
                        <Check size={10} className="mt-0.5 shrink-0 text-[#84b8ff]" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                  <Link
                    href="/contact"
                    className={[
                      "group mt-auto flex h-8 items-center justify-center gap-1.5 rounded-full border text-[8px] font-semibold transition-all",
                      pkg.recommended
                        ? "border-[#6aa3ff]/30 bg-[#2e70ef] text-white hover:bg-[#3479ff]"
                        : "border-white/15 bg-white/[0.025] text-white/70 hover:bg-white/[0.06] hover:text-white",
                    ].join(" ")}
                  >
                    {pkg.cta} <ArrowRight size={9} className="transition-transform group-hover:translate-x-0.5" />
                  </Link>
                </article>
              ))}
            </div>
          </div>
        </section>
      </div>

      <section className="relative overflow-hidden bg-[#07111d] px-5 py-14 text-white sm:px-8 md:px-10 md:py-16 lg:px-16 xl:px-20">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_56%_100%,rgba(69,137,216,0.24),transparent_28%),radial-gradient(ellipse_at_72%_90%,rgba(155,207,255,0.12),transparent_31%)]" />
        <div className="pointer-events-none absolute -bottom-36 left-[20%] h-[250px] w-[58%] rotate-[-5deg] rounded-[50%] border-t border-[#8ec1fb]/48 shadow-[0_-18px_50px_rgba(65,132,217,0.22)]" />

        <div className="relative mx-auto max-w-[1320px]">
          <SectionMeta index="07" label="Let's Build Something That Scales" dark />
          <div className="mt-6 grid gap-8 lg:grid-cols-[0.58fr_0.42fr] lg:items-end">
            <div>
              <h2 className="max-w-2xl text-balance text-[clamp(2rem,3.6vw,3.55rem)] font-semibold leading-[1.03] tracking-[-0.04em]">
                Ready to build a system that moves your business forward?
              </h2>
              <p className="mt-3 text-[11px] text-white/45">Let&apos;s discuss your project and create a plan.</p>
              <div className="mt-5 flex flex-col gap-2.5 sm:flex-row">
                <CtaButton href="/contact" light>Let&apos;s Talk</CtaButton>
                <Link href="/work" className="group inline-flex h-10 items-center justify-center gap-2 rounded-full border border-white/16 px-5 text-[12px] font-semibold text-white/72 transition hover:border-white/28 hover:bg-white/[0.045] hover:text-white">
                  View My Work <ArrowRight size={13} className="transition-transform group-hover:translate-x-0.5" />
                </Link>
              </div>
            </div>

            <div className="grid gap-2 sm:grid-cols-3">
              {[
                ["Fast response", "Usually within 24h"],
                ["Focused on outcomes", "Not just deliverables"],
                ["Built to scale", "For long-term growth"],
              ].map(([title, desc]) => (
                <div key={title} className="rounded-xl border border-white/10 bg-white/[0.035] p-3 backdrop-blur-xl">
                  <p className="text-[9px] font-semibold text-white/72">{title}</p>
                  <p className="mt-1 text-[8px] leading-4 text-white/32">{desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
