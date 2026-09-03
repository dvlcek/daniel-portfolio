import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Bot, Code2, Globe2, Network, Search, Target, TrendingUp } from "lucide-react";
import { ExperienceClose, ExperienceHero, PageEyebrow } from "@/components/site/ExperiencePage";

export const metadata: Metadata = {
  title: "Services | Custom Software, Automation & AI Systems",
  description:
    "Custom business software, automation, applied AI, and client platforms designed around how companies actually operate.",
  alternates: { canonical: "/services" },
  openGraph: {
    title: "Services | Daniel Vlcek",
    description:
      "Custom business systems, automation, applied AI, and client platforms built around real operational bottlenecks.",
    url: "/services",
    type: "website",
  },
};

const capabilities = [
  {
    icon: Network,
    eyebrow: "Custom Business Software",
    title: "Connect the operation.",
    description:
      "Custom platforms, internal tools and operating systems that replace fragmented admin with one structured workflow around your company.",
    examples: ["Internal dashboards", "Operations platforms", "Client portals", "Booking & payment flows"],
  },
  {
    icon: Bot,
    eyebrow: "Automation & Applied AI",
    title: "Remove the work nobody should repeat.",
    description:
      "Integrate the tools you already use, automate repetitive decisions and handoffs, and apply AI where it genuinely improves speed or quality.",
    examples: ["Workflow automation", "API integrations", "CRM flows", "Practical AI systems"],
  },
  {
    icon: Globe2,
    eyebrow: "Web & Client Platforms",
    title: "Make the customer journey easier.",
    description:
      "High-quality websites and client-facing platforms that do more than look polished — they clarify the offer and connect directly to the process behind it.",
    examples: ["Premium websites", "Self-service journeys", "Lead intake", "Platform rebuilds"],
  },
] as const;

const path = [
  { icon: Search, number: "01", title: "Understand", text: "Map the real process, the people involved, the tools and the friction." },
  { icon: Target, number: "02", title: "Prioritize", text: "Choose the highest-leverage problem instead of building a long wishlist." },
  { icon: Code2, number: "03", title: "Implement", text: "Build a complete V1 that can actually be used in day-to-day operations." },
  { icon: TrendingUp, number: "04", title: "Expand", text: "Use real feedback and business data to decide what deserves the next investment." },
] as const;

export default function ServicesPage() {
  return (
    <main className="experience-page">
      <ExperienceHero
        eyebrow="Services"
        title="The technology changes. The goal stays the same: make the business work better."
        description="I use custom software, automation, integrations and applied AI as tools — not as products to push. The right solution depends on where your operation is losing time, clarity or control."
        aside={
          <div data-optical-glass className="apple-glass-dark optical-glass rounded-[26px] p-5 text-white">
            <p className="text-[9px] font-semibold uppercase tracking-[0.2em] text-white/34">Best fit</p>
            <p className="mt-4 text-[20px] font-semibold leading-[1.12] tracking-[-0.035em] text-white/90">When the current way of working has become the bottleneck.</p>
            <p className="mt-3 text-[10px] leading-5 text-white/44">Especially when the answer is bigger than another SaaS subscription or another isolated website.</p>
          </div>
        }
      />

      <section className="relative overflow-hidden bg-[#f8f8f6] px-5 py-20 sm:px-8 md:py-28 lg:px-14 xl:px-20">
        <div className="experience-ambient experience-ambient-a" aria-hidden="true" />
        <div className="mx-auto max-w-[1160px]">
          <div data-page-reveal className="mx-auto max-w-[760px] text-center">
            <PageEyebrow>Three Ways I Create Leverage</PageEyebrow>
            <h2 className="mt-5 text-balance text-[clamp(2rem,4vw,3.3rem)] font-semibold leading-[1.02] tracking-[-0.048em] text-[#101722]">
              Start with the business problem. Choose the technical shape afterwards.
            </h2>
          </div>

          <div className="mt-12 grid gap-5 lg:grid-cols-3">
            {capabilities.map((item, index) => {
              const Icon = item.icon;
              return (
                <article key={item.title} data-page-reveal data-optical-glass className="apple-glass optical-glass flex min-h-[430px] flex-col rounded-[30px] p-6 md:p-7">
                  <div className="flex items-center justify-between">
                    <span className="glass-icon flex h-12 w-12 items-center justify-center rounded-[15px] text-[#2860cf]"><Icon size={21} strokeWidth={1.5} /></span>
                    <span className="text-[9px] font-semibold tracking-[0.17em] text-[#a2acb9]">0{index + 1}</span>
                  </div>
                  <p className="mt-8 text-[8px] font-semibold uppercase tracking-[0.15em] text-[#8792a2]">{item.eyebrow}</p>
                  <h3 className="mt-2 text-[25px] font-semibold leading-[1.05] tracking-[-0.045em] text-[#101722]">{item.title}</h3>
                  <p className="mt-4 text-[12px] leading-5.5 text-[#687486]">{item.description}</p>
                  <div className="mt-6 flex flex-wrap gap-2">
                    {item.examples.map((example) => (
                      <span key={example} className="rounded-full border border-[#dde4eb] bg-white/62 px-3 py-1.5 text-[8px] font-medium text-[#697587]">{example}</span>
                    ))}
                  </div>
                  <Link href="/contact" className="group mt-auto inline-flex items-center gap-2 pt-7 text-[10px] font-semibold text-[#1d4ed8]">
                    Discuss this area <ArrowRight size={11} className="transition-transform group-hover:translate-x-0.5" />
                  </Link>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <section className="relative bg-[#f8f8f6] px-5 pb-28 sm:px-8 md:pb-36 lg:px-14 xl:px-20">
        <div className="mx-auto max-w-[1160px]">
          <div data-page-reveal className="grid gap-7 lg:grid-cols-[0.7fr_1.3fr] lg:items-center">
            <div>
              <PageEyebrow>Engagement Model</PageEyebrow>
              <h2 className="mt-4 text-[clamp(2rem,3.6vw,3rem)] font-semibold leading-[1.02] tracking-[-0.048em] text-[#101722]">Scope follows the system. Not a generic package.</h2>
              <p className="mt-4 max-w-[470px] text-[12px] leading-5.5 text-[#687486]">The first job is understanding what deserves to be changed. Most implementation engagements start from €5k; final scope follows discovery and expected business leverage.</p>
            </div>

            <div data-optical-glass className="apple-glass optical-glass rounded-[30px] p-5 md:p-7">
              <div className="grid gap-5 md:grid-cols-4">
                {path.map((step) => {
                  const Icon = step.icon;
                  return (
                    <div key={step.number} className="border-t border-[#e0e6ec] pt-4 md:border-l md:border-t-0 md:pl-5 md:pt-0 first:md:border-l-0 first:md:pl-0">
                      <div className="flex items-center justify-between">
                        <span className="glass-icon flex h-9 w-9 items-center justify-center rounded-full text-[#2a5fac]"><Icon size={14} /></span>
                        <span className="text-[8px] font-semibold text-[#9aa4b1]">{step.number}</span>
                      </div>
                      <h3 className="mt-4 text-[12px] font-semibold text-[#263244]">{step.title}</h3>
                      <p className="mt-2 text-[9px] leading-4.5 text-[#768192]">{step.text}</p>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </section>

      <ExperienceClose
        eyebrow="Start With Clarity"
        title="You do not need to know what software you need before we talk."
        description="Bring the process, the friction and the goal. We can work backwards from the business problem and decide what the right technical solution should be."
        primaryLabel="Discuss your operation"
        secondaryLabel="See real systems"
        secondaryHref="/work"
      />
    </main>
  );
}
