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
  ShieldCheck,
  Sparkles,
  Target,
  TrendingUp,
  Workflow,
} from "lucide-react";
import { HeroScrollScene } from "@/components/sections/HeroScrollScene";
import { HomeExperience } from "@/components/sections/HomeExperience";
import { caseStudies } from "@/lib/siteContent";

const capabilities = [
  {
    icon: Network,
    title: "Custom Business Software",
    text: "Web apps and internal platforms tailored to your operation, data and workflows.",
  },
  {
    icon: Bot,
    title: "Automation & Applied AI",
    text: "Automation that removes repetitive work and applies AI where it creates measurable value.",
  },
  {
    icon: Globe2,
    title: "Web & Client Platforms",
    text: "Customer-facing platforms that make buying, booking and working with your company easier.",
  },
] as const;

const process = [
  {
    number: "01",
    icon: Search,
    title: "Understand",
    text: "Learn how the business actually works and where friction is created.",
  },
  {
    number: "02",
    icon: Target,
    title: "Find the leverage",
    text: "Identify the opportunity that creates the most meaningful improvement first.",
  },
  {
    number: "03",
    icon: Code2,
    title: "Build",
    text: "Design and build the system, automation and integrations as one coherent flow.",
  },
  {
    number: "04",
    icon: TrendingUp,
    title: "Improve",
    text: "Use real usage and business feedback to optimize what deserves to evolve next.",
  },
] as const;

const trust = [
  {
    icon: BriefcaseBusiness,
    title: "Direct technical ownership",
    text: "You work directly with the person understanding and building the system.",
  },
  {
    icon: Target,
    title: "Business-first thinking",
    text: "Decisions start with outcomes, bottlenecks and leverage — not features.",
  },
  {
    icon: ShieldCheck,
    title: "Clean engineering",
    text: "Maintainable architecture, clear workflows and systems built to last.",
  },
  {
    icon: Workflow,
    title: "Long-term partnership",
    text: "Launch is the first feedback loop, not the end of the relationship.",
  },
] as const;

const engagements = [
  {
    number: "01",
    title: "Systems Audit",
    text: "Map how the operation works, identify friction and define the highest-leverage opportunity.",
  },
  {
    number: "02",
    title: "High-Leverage Build",
    text: "Design and build the system that solves the right problem first and creates measurable value.",
  },
  {
    number: "03",
    title: "Ongoing Optimization",
    text: "Improve and expand the system as usage, bottlenecks and business needs evolve.",
  },
] as const;

function Label({ children, dark = false }: { children: React.ReactNode; dark?: boolean }) {
  return (
    <p className={`text-[9px] font-semibold uppercase tracking-[0.18em] ${dark ? "text-[#ff7a1a]" : "text-[#e75f00]"}`}>
      {children}
    </p>
  );
}

function ProblemDiagram() {
  const before = ["Spreadsheets", "Email & Chat", "Manual Work", "Siloed Systems"];
  const after = ["One source of truth", "Automated workflows", "Real-time insight", "Scalable operations"];

  return (
    <div className="grid gap-6 lg:grid-cols-[1fr_76px_1fr] lg:items-center">
      <div>
        <p className="mb-3 text-[8px] font-semibold uppercase tracking-[0.16em] text-white/35">Before · disconnected & manual</p>
        <div className="space-y-2">
          {before.map((item) => (
            <div key={item} className="flex items-center gap-3">
              <div className="min-w-[126px] rounded-[9px] border border-white/12 bg-white/[0.025] px-3 py-2 text-[10px] text-white/58">
                {item}
              </div>
              <div className="relative h-px flex-1 bg-white/10">
                <span className="absolute left-[42%] top-1/2 h-1.5 w-1.5 -translate-y-1/2 rounded-full border border-white/25 bg-[#09111a]" />
                <span className="absolute right-[18%] top-1/2 h-1 w-1 -translate-y-1/2 rounded-full bg-white/24" />
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="hidden items-center justify-center lg:flex">
        <ArrowRight size={23} className="text-white/42" />
      </div>

      <div>
        <p className="mb-3 text-[8px] font-semibold uppercase tracking-[0.16em] text-[#ff7a1a]">After · connected & automated</p>
        <div className="grid grid-cols-[58px_1fr] items-stretch gap-3">
          <div className="flex items-center justify-center">
            <div className="flex h-12 w-12 items-center justify-center rounded-full border border-[#ff6a00] bg-[#ff6a00]/5 shadow-[0_0_34px_rgba(255,106,0,0.16)]">
              <Sparkles size={15} className="text-[#ff7a1a]" />
            </div>
          </div>
          <div className="space-y-2">
            {after.map((item) => (
              <div key={item} className="rounded-[9px] border border-white/12 bg-white/[0.025] px-3 py-2 text-[10px] text-white/66">
                {item}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

function StackVisual() {
  const layers = [
    ["Customer Experience", "Delight customers and drive loyalty."],
    ["Operations", "Streamline workflows and reduce friction."],
    ["Automation", "Eliminate manual work and human error."],
    ["Data & Insights", "Turn data into real-time intelligence."],
    ["Business Foundation", "A strong, secure foundation that scales."],
  ] as const;

  return (
    <div className="grid gap-10 lg:grid-cols-[0.85fr_1.2fr] lg:items-center">
      <div className="space-y-4">
        {layers.map(([title, text], index) => (
          <div key={title} className="grid grid-cols-[150px_1fr] gap-5 border-b border-[#dedbd6] pb-3 last:border-b-0">
            <div className="flex items-center gap-3">
              <span className={`h-1.5 w-1.5 rounded-full ${index === 2 ? "bg-[#ff6a00]" : "bg-[#b9b6b1]"}`} />
              <span className={`text-[10px] font-semibold ${index === 2 ? "text-[#e85f00]" : "text-[#343331]"}`}>{title}</span>
            </div>
            <p className="text-[9px] leading-4 text-[#79756f]">{text}</p>
          </div>
        ))}
      </div>

      <div className="relative mx-auto h-[330px] w-full max-w-[500px]">
        {[0, 1, 2, 3, 4].map((layer) => (
          <div
            key={layer}
            className={`absolute left-1/2 h-[84px] w-[70%] -translate-x-1/2 -skew-x-[18deg] rounded-[14px] border shadow-[0_16px_36px_rgba(42,36,30,0.07)] ${layer === 2 ? "border-[#e96812]/70 bg-[linear-gradient(145deg,#ff8c3a,#ef6b12)] shadow-[0_18px_45px_rgba(239,107,18,0.20)]" : "border-[#dedbd6] bg-[linear-gradient(145deg,#ffffff,#efeeeb)]"}`}
            style={{ top: `${28 + layer * 47}px`, zIndex: 10 - layer }}
          >
            <div className={`absolute inset-x-4 bottom-2 h-px ${layer === 2 ? "bg-white/28" : "bg-black/[0.035]"}`} />
          </div>
        ))}
      </div>
    </div>
  );
}

function CaseStudyStage() {
  const featured = caseStudies[0];

  return (
    <div data-work-stage className="grid overflow-hidden rounded-[18px] border border-white/8 bg-[#07111a] text-white shadow-[0_30px_70px_rgba(18,24,30,0.12)] lg:grid-cols-[0.72fr_1.48fr]">
      <div className="flex flex-col border-b border-white/8 p-6 sm:p-8 lg:border-b-0 lg:border-r">
        <Label dark>Featured work</Label>
        <h2 className="mt-3 text-[30px] font-medium tracking-[-0.04em]">Mini Sklady</h2>
        <p className="mt-2 max-w-[310px] text-[12px] leading-5 text-white/50">
          From manual rental administration to one connected operating platform.
        </p>

        <ul className="mt-7 space-y-3">
          {["36 customers managed", "~30 active monthly rentals", "End-to-end rental lifecycle automated", "One dashboard for daily operations"].map((item) => (
            <li key={item} className="flex items-center gap-2.5 text-[11px] text-white/64">
              <Check size={13} className="text-[#ff6a00]" />
              {item}
            </li>
          ))}
        </ul>

        <div className="mt-auto pt-7">
          <Link
            href={featured ? `/work/${featured.slug}` : "/work"}
            className="group inline-flex h-10 items-center gap-2 rounded-full border border-white/18 px-4 text-[10px] font-semibold text-white/78 transition hover:border-white/35 hover:text-white"
          >
            View Case Study
            <ArrowRight size={12} className="transition-transform group-hover:translate-x-0.5" />
          </Link>
        </div>
      </div>

      <div data-dashboard-preview className="relative min-h-[360px] overflow-hidden bg-[#0b141e] p-4 sm:p-6">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_85%_10%,rgba(255,106,0,0.06),transparent_32%)]" />
        <div className="relative h-full min-h-[320px] overflow-hidden rounded-[14px] border border-white/8 bg-[#0c1722]">
          {featured ? (
            <Image
              src={featured.image}
              alt="Mini Sklady operations platform"
              fill
              sizes="(max-width: 1024px) 100vw, 65vw"
              className="object-cover object-top opacity-88"
            />
          ) : null}
          <div className="absolute inset-0 bg-gradient-to-t from-[#08111a]/40 via-transparent to-transparent" />
          <div className="absolute left-4 top-4 rounded-full border border-white/10 bg-[#07111a]/75 px-3 py-1.5 text-[8px] font-semibold uppercase tracking-[0.12em] text-white/56 backdrop-blur-md">
            Live operating platform
          </div>
        </div>
      </div>
    </div>
  );
}

export function HomeRedesign() {
  return (
    <div className="home-redesign overflow-hidden bg-[#f7f4ef] text-[#111318]">
      <HomeExperience />
      <HeroScrollScene />

      <section className="relative bg-[#07111a] px-5 py-20 text-white sm:px-8 md:py-24 lg:px-14 xl:px-20">
        <div className="mx-auto grid max-w-[1180px] gap-12 lg:grid-cols-[0.82fr_1.18fr] lg:items-center">
          <div data-reveal>
            <Label dark>The problem</Label>
            <h2 className="mt-4 max-w-[480px] text-[clamp(2.05rem,3.5vw,3.25rem)] font-medium leading-[1.04] tracking-[-0.045em]">
              Most companies don&apos;t have a software problem.
              <br />They have a <span className="text-[#ff6a00]">system problem.</span>
            </h2>
            <p className="mt-5 max-w-[420px] text-[12px] leading-5.5 text-white/47">
              Disconnected tools. Manual handoffs. Hidden work. It&apos;s not just inefficient — it becomes expensive as the business grows.
            </p>
          </div>
          <div data-reveal>
            <ProblemDiagram />
          </div>
        </div>
      </section>

      <section id="services" className="relative bg-[#f7f4ef] px-5 py-22 sm:px-8 md:py-28 lg:px-14 xl:px-20">
        <div className="mx-auto max-w-[1180px]">
          <div className="grid gap-10 lg:grid-cols-[0.72fr_1.28fr] lg:items-center">
            <div data-reveal>
              <Label>The shift</Label>
              <h2 className="mt-4 text-[clamp(2.1rem,3.8vw,3.4rem)] font-medium leading-[1.02] tracking-[-0.05em]">
                Software isn&apos;t the goal.
                <br />A better-running business is.
              </h2>
              <p className="mt-5 max-w-[430px] text-[12px] leading-5.5 text-[#706c66]">
                The right systems, built in the right order, create clarity, speed and compounding operational leverage.
              </p>
              <Link href="/services" className="group mt-6 inline-flex items-center gap-2 text-[10px] font-semibold text-[#111318]">
                Learn how it works
                <ArrowRight size={11} className="text-[#ff6a00] transition-transform group-hover:translate-x-0.5" />
              </Link>
            </div>
            <div data-reveal>
              <StackVisual />
            </div>
          </div>

          <div className="mt-14 border-t border-[#dcd7d0] pt-7">
            <div className="grid gap-8 md:grid-cols-[0.65fr_2.35fr]">
              <Label>What I build</Label>
              <div className="grid gap-7 md:grid-cols-3">
                {capabilities.map((item) => {
                  const Icon = item.icon;
                  return (
                    <article key={item.title} data-service-card className="border-l border-[#dcd7d0] pl-5 first:border-l-0 first:pl-0 md:first:border-l md:first:pl-5">
                      <div className="flex items-start gap-3">
                        <Icon size={18} strokeWidth={1.5} className="mt-0.5 shrink-0 text-[#ff6a00]" />
                        <div>
                          <h3 className="text-[12px] font-semibold tracking-[-0.02em]">{item.title}</h3>
                          <p className="mt-2 text-[10px] leading-[1.55] text-[#77726c]">{item.text}</p>
                          <Link href="/services" className="group mt-4 inline-flex items-center gap-2 text-[9px] font-semibold text-[#262523]">
                            Learn more
                            <ArrowRight size={10} className="text-[#ff6a00] transition-transform group-hover:translate-x-0.5" />
                          </Link>
                        </div>
                      </div>
                    </article>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="work" className="bg-[#f7f4ef] px-5 pb-20 sm:px-8 md:pb-28 lg:px-14 xl:px-20">
        <div className="mx-auto max-w-[1180px]">
          <CaseStudyStage />
        </div>
      </section>

      <section id="process" className="bg-[#f7f4ef] px-5 pb-18 sm:px-8 md:pb-24 lg:px-14 xl:px-20">
        <div className="mx-auto max-w-[1180px] border-y border-[#dcd7d0] py-8">
          <div className="grid gap-8 lg:grid-cols-[0.62fr_2.38fr]">
            <div>
              <Label>My process</Label>
              <h2 className="mt-3 text-[26px] font-medium leading-[1.05] tracking-[-0.04em]">A clear process.<br />Built around your business.</h2>
            </div>

            <div data-process-track className="relative grid gap-7 md:grid-cols-4">
              <div className="absolute left-5 right-5 top-[21px] hidden h-px bg-[#d2cec8] md:block" />
              <div data-process-progress className="absolute left-5 right-5 top-[21px] hidden h-px origin-left bg-[#ff6a00] md:block" />
              {process.map((step) => {
                const Icon = step.icon;
                return (
                  <article key={step.number} data-process-step className="relative">
                    <div className="flex items-center gap-3">
                      <span className="relative z-10 flex h-10 w-10 items-center justify-center rounded-full border border-[#d6d2cb] bg-[#f7f4ef] text-[10px] font-semibold text-[#111318]">
                        {step.number.slice(1)}
                      </span>
                      <Icon size={17} strokeWidth={1.4} className="text-[#8b8781]" />
                    </div>
                    <h3 className="mt-4 text-[11px] font-semibold">{step.title}</h3>
                    <p className="mt-2 max-w-[190px] text-[9px] leading-4 text-[#76716b]">{step.text}</p>
                  </article>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      <section id="about" className="bg-[#07111a] px-5 py-10 text-white sm:px-8 lg:px-14 xl:px-20">
        <div className="mx-auto grid max-w-[1180px] gap-8 lg:grid-cols-[0.72fr_2.28fr] lg:items-center">
          <div>
            <Label dark>Working with me</Label>
            <h2 className="mt-3 max-w-[340px] text-[26px] font-medium leading-[1.06] tracking-[-0.04em]">
              A partner you can trust to build what matters.
            </h2>
          </div>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {trust.map((item) => {
              const Icon = item.icon;
              return (
                <div key={item.title} className="border-l border-white/10 pl-5 first:border-l-0 first:pl-0 lg:first:border-l lg:first:pl-5">
                  <Icon size={17} strokeWidth={1.45} className="text-[#ff6a00]" />
                  <h3 className="mt-3 text-[10px] font-semibold text-white/86">{item.title}</h3>
                  <p className="mt-1.5 text-[8px] leading-4 text-white/42">{item.text}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="bg-[#f7f4ef] px-5 py-18 sm:px-8 md:py-22 lg:px-14 xl:px-20">
        <div className="mx-auto max-w-[1180px]">
          <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr]">
            <div>
              <Label>A good fit when</Label>
              <h2 className="mt-3 max-w-[460px] text-[30px] font-medium leading-[1.05] tracking-[-0.04em]">
                Your business has outgrown the way it currently works.
              </h2>
              <ul className="mt-6 space-y-2.5">
                {["Your team repeats the same admin every day.", "Important information lives across too many tools.", "Growth creates more manual work instead of leverage.", "Customers experience unnecessary friction."].map((item) => (
                  <li key={item} className="flex items-start gap-2.5 text-[10px] leading-4.5 text-[#6f6a64]">
                    <Check size={12} className="mt-0.5 shrink-0 text-[#ff6a00]" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <Label>How engagements start</Label>
              <h2 className="mt-3 max-w-[580px] text-[25px] font-medium leading-[1.08] tracking-[-0.035em]">
                Every engagement starts by understanding the system before defining the solution.
              </h2>
              <div className="mt-7 grid gap-5 md:grid-cols-3">
                {engagements.map((item) => (
                  <article key={item.number} data-engagement-step className="border-t border-[#d5d0c9] pt-4">
                    <p className="text-[9px] font-semibold text-[#111318]">{item.number}</p>
                    <h3 className="mt-2 text-[11px] font-semibold">{item.title}</h3>
                    <p className="mt-2 text-[9px] leading-4.5 text-[#77726b]">{item.text}</p>
                  </article>
                ))}
              </div>
              <div className="mt-7 rounded-[10px] bg-[#ece8e2] px-4 py-3.5 text-[9px] leading-4 text-[#615d57]">
                Most implementation engagements start from €5k. Scope depends on the complexity and leverage of the system.
              </div>
            </div>
          </div>
        </div>
      </section>

      <section data-final-scene className="relative overflow-hidden bg-[#07111a] px-5 py-16 text-center text-white sm:px-8 md:py-20 lg:px-14">
        <div data-final-glow className="pointer-events-none absolute inset-x-0 bottom-[-110px] mx-auto h-[220px] max-w-[1300px] rounded-[50%] border-t border-[#ff7a1a]/20 bg-[radial-gradient(ellipse_at_center,rgba(255,106,0,0.10),transparent_65%)]" />
        <div className="relative z-10 mx-auto max-w-[760px]">
          <h2 className="text-balance text-[clamp(2rem,3.7vw,3.25rem)] font-medium leading-[1.03] tracking-[-0.045em]">
            Your business already has a system.
            <br />The question is whether it&apos;s helping you grow — or quietly slowing you down.
          </h2>
          <p className="mx-auto mt-4 max-w-[540px] text-[11px] leading-5 text-white/44">
            Show me how your operation works. We&apos;ll find the friction, define what deserves investment and decide the smartest next move.
          </p>
          <div className="mt-7 flex flex-col items-center justify-center gap-2.5 sm:flex-row">
            <Link href="/contact" className="group inline-flex h-11 items-center gap-2 rounded-full bg-[#ff6a00] px-5 text-[11px] font-semibold text-white transition hover:-translate-y-0.5 hover:bg-[#ff781f]">
              Discuss Your Business
              <ArrowRight size={13} className="transition-transform group-hover:translate-x-0.5" />
            </Link>
            <Link href="/work" className="group inline-flex h-11 items-center gap-2 rounded-full border border-white/18 px-5 text-[11px] font-semibold text-white/72 transition hover:border-white/32 hover:text-white">
              See Real Systems
              <ArrowRight size={13} className="transition-transform group-hover:translate-x-0.5" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
