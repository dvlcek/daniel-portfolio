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
  Pencil,
  Search,
  Sparkles,
  TrendingUp,
  Users,
  Workflow,
} from "lucide-react";
import { HeroScrollScene } from "@/components/sections/HeroScrollScene";
import { caseStudies } from "@/lib/siteContent";

const services = [
  {
    icon: Network,
    title: "Custom Business Software",
    description:
      "Web applications and internal platforms built around your operations, your data and your workflow.",
  },
  {
    icon: Bot,
    title: "Automation & Applied AI",
    description:
      "Automate processes, integrate tools and use AI where it creates measurable business value.",
  },
  {
    icon: Globe2,
    title: "Web & Client Platforms",
    description:
      "High-converting websites and client platforms that communicate your value and generate more business.",
  },
] as const;

const process = [
  { number: "01", icon: Search, title: "Understand", description: "I learn your business, processes and goals in depth." },
  { number: "02", icon: Pencil, title: "Design", description: "I design the optimal system, architecture and user experience." },
  { number: "03", icon: Code2, title: "Build", description: "I build, integrate and automate with clean, scalable code." },
  { number: "04", icon: TrendingUp, title: "Improve", description: "I monitor, optimize and scale as your business grows." },
] as const;

const partnerItems = [
  { icon: Users, title: "Focused & independent", description: "You work directly with me from start to finish." },
  { icon: Sparkles, title: "Technical excellence", description: "Clean code, solid architecture and future-proof solutions." },
  { icon: BriefcaseBusiness, title: "Business-first thinking", description: "Solutions designed around your goals and outcomes." },
  { icon: Workflow, title: "Long-term partner", description: "I stay involved to optimize, improve and scale with you." },
] as const;

const packages: Array<{
  title: string;
  price: string;
  description: string;
  items: string[];
  recommended: boolean;
}> = [
  {
    title: "Systems Audit & Roadmap",
    price: "€2.5k",
    description: "Identify opportunities, risks and priorities with a clear action plan.",
    items: ["Process & systems audit", "Opportunity roadmap", "Recommendations report"],
    recommended: false,
  },
  {
    title: "Automation & AI Implementation",
    price: "€5k",
    description: "Automate workflows and integrate tools with practical AI solutions.",
    items: ["Workflow automation", "Tools & system integrations", "AI-powered enhancements"],
    recommended: true,
  },
  {
    title: "Custom Platform Build",
    price: "€10k",
    description: "Custom software and platforms built around your operations.",
    items: ["Custom web applications", "Client portals & dashboards", "Ongoing support"],
    recommended: false,
  },
];

function Eyebrow({ children }: { children: React.ReactNode }) {
  return <p className="text-[10px] font-semibold uppercase tracking-[0.22em] text-[#738096]">{children}</p>;
}

function TextLink({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <Link href={href} className="group inline-flex items-center gap-2 text-[11px] font-semibold text-[#1d4ed8] transition-colors hover:text-[#123a9c]">
      {children}
      <ArrowRight size={12} className="transition-transform group-hover:translate-x-0.5" />
    </Link>
  );
}

function DashboardPreview() {
  const chart = "M0 92 C36 80 55 45 89 58 C120 70 137 91 170 68 C201 46 225 35 254 56 C285 78 300 85 337 54 C370 27 397 42 430 63 C462 80 491 68 526 35 C554 10 581 31 610 49";

  return (
    <div className="grid min-h-[330px] overflow-hidden rounded-[22px] border border-[#dfe4ea]/90 bg-[#0a1522] shadow-[0_24px_70px_rgba(20,33,50,0.10)] sm:grid-cols-[104px_1fr]">
      <aside className="hidden border-r border-white/7 bg-[#0a1522] p-3.5 sm:block">
        <p className="text-[9px] font-semibold text-white/72">Mini Sklady</p>
        <div className="mt-5 space-y-1 text-[8px] text-white/34">
          {["Overview", "Customers", "Rentals", "Contracts", "Payments", "Units", "Reports"].map((item, index) => (
            <div key={item} className={`rounded-md px-2 py-1.5 ${index === 0 ? "bg-white/[0.07] text-white/72" : ""}`}>
              {item}
            </div>
          ))}
        </div>
      </aside>

      <div className="bg-[#f7f8fa] p-3.5 text-[#101722] sm:p-4.5">
        <div className="flex items-center justify-between">
          <p className="text-[11px] font-semibold">Dashboard</p>
          <span className="rounded-full border border-[#e2e6eb] bg-white px-2 py-1 text-[7px] text-[#8b96a5]">Live overview</span>
        </div>

        <div className="mt-3 grid grid-cols-3 gap-2">
          {[["Active Rentals", "30"], ["Occupancy Rate", "73%"], ["Monthly Revenue", "€24,580"]].map(([label, value]) => (
            <div key={label} className="rounded-[10px] border border-[#e4e8ed] bg-white p-2.5 shadow-[0_5px_16px_rgba(15,23,42,0.025)]">
              <p className="text-[6px] uppercase tracking-[0.05em] text-[#9aa4b2]">{label}</p>
              <p className="mt-1 text-[12px] font-semibold tracking-[-0.02em] sm:text-[13px]">{value}</p>
            </div>
          ))}
        </div>

        <div className="mt-2.5 rounded-[11px] border border-[#e4e8ed] bg-white p-3 shadow-[0_5px_16px_rgba(15,23,42,0.025)]">
          <div className="flex items-center justify-between">
            <p className="text-[8px] font-semibold">Rental overview</p>
            <span className="text-[7px] text-[#9aa4b2]">Last 12 months</span>
          </div>
          <svg viewBox="0 0 610 120" className="mt-3 h-[106px] w-full" preserveAspectRatio="none" aria-hidden="true">
            <g stroke="#edf0f3" strokeWidth="1">
              <line x1="0" x2="610" y1="30" y2="30" />
              <line x1="0" x2="610" y1="60" y2="60" />
              <line x1="0" x2="610" y1="90" y2="90" />
            </g>
            <path d={chart} fill="none" stroke="#4e8cff" strokeWidth="3" strokeLinecap="round" />
            <circle cx="254" cy="56" r="3.5" fill="#07111d" />
          </svg>
        </div>

        <div className="mt-2 grid grid-cols-2 gap-2 text-[7px] text-[#667085]">
          <div className="rounded-[9px] border border-[#e4e8ed] bg-white px-2.5 py-2">#3130-041 · Active</div>
          <div className="rounded-[9px] border border-[#e4e8ed] bg-white px-2.5 py-2">#3130-049 · Active</div>
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
          <div className="text-center"><Eyebrow>What I Build</Eyebrow></div>
          <div className="mt-8 grid gap-4 md:grid-cols-3 md:gap-5">
            {services.map((service) => {
              const Icon = service.icon;
              return (
                <article key={service.title} className="apple-glass group flex min-h-[270px] flex-col rounded-[24px] p-6 md:p-7">
                  <span className="glass-icon flex h-11 w-11 items-center justify-center rounded-[14px] text-[#2860cf]">
                    <Icon size={20} strokeWidth={1.55} />
                  </span>
                  <h2 className="mt-7 max-w-[230px] text-[18px] font-semibold leading-[1.14] tracking-[-0.03em] text-[#101722]">{service.title}</h2>
                  <p className="mt-3 max-w-[300px] text-[12px] leading-5.5 text-[#677386]">{service.description}</p>
                  <div className="mt-auto pt-6"><TextLink href="/work">Explore</TextLink></div>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <section id="work" className="relative bg-[#f8f8f6] px-5 pb-24 sm:px-8 md:pb-28 lg:px-14 xl:px-20">
        <div className="mx-auto max-w-[1160px]">
          <div className="mb-7 flex items-end justify-between gap-6">
            <Eyebrow>Selected Work</Eyebrow>
            <TextLink href="/work">View all projects</TextLink>
          </div>

          <div className="apple-glass rounded-[28px] p-4 sm:p-5 md:p-6">
            <div className="grid gap-4 xl:grid-cols-[0.72fr_1.35fr_0.93fr] xl:gap-5">
              <div className="flex min-h-[330px] flex-col rounded-[20px] border border-[#e1e6ec]/85 bg-white/64 p-5 md:p-6">
                <p className="text-[8px] font-semibold uppercase tracking-[0.18em] text-[#7c8798]">Featured case study</p>
                <h2 className="mt-3 text-[23px] font-semibold tracking-[-0.035em] text-[#101722]">Mini Sklady</h2>
                <p className="mt-3 max-w-[260px] text-[11px] leading-5 text-[#677386]">Complete rental management system for storage operations with automated billing, contracts and operations.</p>
                <ul className="mt-5 space-y-2.5">
                  {["36+ customers", "~30 active monthly rentals", "End-to-end automated billing", "End-to-end rental lifecycle"].map((item) => (
                    <li key={item} className="flex items-center gap-2 text-[10px] font-medium text-[#4f5d70]">
                      <span className="flex h-4 w-4 items-center justify-center rounded-full border border-[#ced8e4] bg-white text-[#2563eb]"><Check size={9} /></span>
                      {item}
                    </li>
                  ))}
                </ul>
                <div className="mt-auto pt-6">
                  <Link href={featured ? `/work/${featured.slug}` : "/work"} className="group inline-flex h-10 items-center gap-2 rounded-full border border-[#d8dee6] bg-white px-4 text-[10px] font-semibold text-[#101722] shadow-[0_8px_22px_rgba(15,23,42,0.045)] transition hover:-translate-y-0.5 hover:border-[#c5cfdb]">
                    View Case Study <ArrowRight size={12} className="transition-transform group-hover:translate-x-0.5" />
                  </Link>
                </div>
              </div>

              <DashboardPreview />

              <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-1">
                {supporting.map((study, index) => (
                  <Link key={study.slug} href={`/work/${study.slug}`} className="group grid min-h-[156px] overflow-hidden rounded-[20px] border border-[#e1e6ec]/85 bg-white/66 p-4 transition hover:bg-white/82 sm:grid-cols-[1fr_0.8fr] xl:grid-cols-[1fr_0.85fr]">
                    <div className="flex flex-col pr-3">
                      <p className="text-[7px] font-semibold uppercase tracking-[0.15em] text-[#8993a2]">{index === 0 ? "Automation" : "Web platform"}</p>
                      <h3 className="mt-2 text-[13px] font-semibold leading-4 tracking-[-0.02em] text-[#101722]">{study.company}</h3>
                      <p className="mt-2 line-clamp-2 text-[9px] leading-4 text-[#6c7788]">{study.subtitle}</p>
                      <span className="mt-auto inline-flex items-center gap-1.5 pt-3 text-[8px] font-semibold text-[#1d4ed8]">View project <ArrowRight size={9} className="transition-transform group-hover:translate-x-0.5" /></span>
                    </div>
                    <div className="relative min-h-[116px] overflow-hidden rounded-[14px] border border-[#e4e8ed] bg-[#eef2f6]">
                      <Image src={study.image} alt={`${study.company} project preview`} fill sizes="(max-width: 768px) 40vw, 16vw" className="object-cover transition-transform duration-700 group-hover:scale-[1.035]" />
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
          <div className="mb-7 text-center"><Eyebrow>The Process</Eyebrow></div>
          <div className="apple-glass rounded-[26px] px-5 py-6 md:px-7 md:py-7">
            <div className="grid gap-7 md:grid-cols-4 md:gap-0">
              {process.map((step, index) => {
                const Icon = step.icon;
                return (
                  <div key={step.title} className="relative min-w-0 md:px-5 first:md:pl-0 last:md:pr-0">
                    {index < process.length - 1 ? <div className="absolute right-[-4px] top-5 hidden h-px w-7 bg-[#cdd5df] md:block" /> : null}
                    <div className="flex items-start gap-3">
                      <span className="glass-icon flex h-10 w-10 shrink-0 items-center justify-center rounded-full text-[#1f4fa9]"><Icon size={16} strokeWidth={1.55} /></span>
                      <div>
                        <p className="text-[8px] font-semibold text-[#627086]">{step.number}</p>
                        <h3 className="mt-1 text-[11px] font-semibold text-[#101722]">{step.title}</h3>
                        <p className="mt-2 text-[9px] leading-4 text-[#768294]">{step.description}</p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      <section id="about" className="bg-[#f8f8f6] px-5 pb-24 sm:px-8 md:pb-28 lg:px-14 xl:px-20">
        <div className="mx-auto max-w-[1160px]">
          <div className="grid gap-4 xl:grid-cols-[1fr_1.55fr_0.72fr] xl:gap-5">
            <article className="apple-glass rounded-[26px] p-5 md:p-6">
              <Eyebrow>Working With Me</Eyebrow>
              <div className="mt-5 grid gap-5 sm:grid-cols-[120px_1fr] xl:grid-cols-1 2xl:grid-cols-[120px_1fr]">
                <div className="relative mx-auto h-[118px] w-[118px] overflow-hidden rounded-full border border-white/80 bg-[#e7ebf0] shadow-[0_12px_34px_rgba(15,23,42,0.08)]">
                  <Image src="/images/daniel-vlcek.jpg" alt="Daniel Vlcek" fill sizes="118px" className="object-cover object-top" />
                </div>
                <div className="space-y-3">
                  {partnerItems.map((item) => {
                    const Icon = item.icon;
                    return (
                      <div key={item.title} className="flex gap-2.5">
                        <span className="glass-icon flex h-8 w-8 shrink-0 items-center justify-center rounded-[10px] text-[#315fae]"><Icon size={13} strokeWidth={1.55} /></span>
                        <div>
                          <h3 className="text-[9px] font-semibold text-[#101722]">{item.title}</h3>
                          <p className="mt-0.5 text-[8px] leading-3.5 text-[#778394]">{item.description}</p>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </article>

            <div>
              <div className="mb-4 text-center"><Eyebrow>Packages & Engagements</Eyebrow></div>
              <div className="grid gap-3 md:grid-cols-3">
                {packages.map((pkg) => (
                  <article key={pkg.title} className={`apple-glass relative flex min-h-[310px] flex-col rounded-[24px] p-5 ${pkg.recommended ? "ring-1 ring-[#7ba8ee]/50" : ""}`}>
                    {pkg.recommended ? <span className="absolute -top-2.5 left-1/2 -translate-x-1/2 rounded-full border border-[#b9d4ff] bg-[#edf5ff] px-3 py-1 text-[6px] font-semibold uppercase tracking-[0.14em] text-[#2563eb] shadow-[0_5px_14px_rgba(37,99,235,0.10)]">Most popular</span> : null}
                    <h3 className="text-[11px] font-semibold leading-4 text-[#101722]">{pkg.title}</h3>
                    <p className="mt-2 text-[8px] leading-4 text-[#778394]">{pkg.description}</p>
                    <p className="mt-4 text-[8px] text-[#8a95a4]">From</p>
                    <p className="mt-0.5 text-[24px] font-semibold tracking-[-0.04em] text-[#101722]">{pkg.price}</p>
                    <ul className="mt-4 space-y-2">
                      {pkg.items.map((item) => <li key={item} className="flex items-start gap-2 text-[8px] leading-4 text-[#687486]"><Check size={10} className="mt-0.5 shrink-0 text-[#3e70c9]" />{item}</li>)}
                    </ul>
                    <div className="mt-auto pt-5"><TextLink href="/contact">Let&apos;s Talk</TextLink></div>
                  </article>
                ))}
              </div>
            </div>

            <article className="apple-glass flex min-h-[360px] flex-col items-center justify-center rounded-[26px] p-6 text-center">
              <Eyebrow>Let&apos;s Work Together</Eyebrow>
              <h2 className="mt-5 text-balance text-[20px] font-semibold leading-[1.08] tracking-[-0.035em] text-[#101722]">Ready to bring order to operations and build systems that scale with your business?</h2>
              <Link href="/contact" className="group mt-7 inline-flex h-11 items-center gap-2 rounded-full bg-[#07111d] px-5 text-[11px] font-semibold text-white shadow-[0_12px_30px_rgba(7,17,29,0.18)] transition hover:-translate-y-0.5 hover:bg-[#0c1d30]">
                Let&apos;s Talk <ArrowRight size={12} className="transition-transform group-hover:translate-x-0.5" />
              </Link>
            </article>
          </div>
        </div>
      </section>
    </div>
  );
}
