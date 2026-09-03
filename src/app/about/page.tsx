import type { Metadata } from "next";
import { BriefcaseBusiness, Check, Code2, Search, Sparkles, Workflow } from "lucide-react";
import { ExperienceClose, ExperienceHero, PageEyebrow } from "@/components/site/ExperiencePage";

export const metadata: Metadata = {
  title: "About Daniel Vlcek | Software Developer & Automation Architect",
  description:
    "How Daniel Vlcek combines software development, automation, and business thinking to design systems around real company operations.",
  alternates: { canonical: "/about" },
  openGraph: {
    title: "About Daniel Vlcek | Software Developer & Automation Architect",
    description:
      "A technical partner focused on understanding operations, finding leverage, and building systems that make companies easier to run.",
    url: "/about",
    type: "website",
  },
};

const principles = [
  {
    icon: Search,
    title: "Understand before building",
    text: "I want to know why a process exists, who touches it, what information moves through it and where people lose time before deciding what the software should be.",
  },
  {
    icon: BriefcaseBusiness,
    title: "Business value before features",
    text: "A feature earns its place when it removes friction, improves the customer journey, gives the team more control or creates a better foundation for growth.",
  },
  {
    icon: Workflow,
    title: "Think in systems",
    text: "The website, payment flow, CRM, dashboard, emails and internal admin are often one process seen from different angles. I design them to work together.",
  },
] as const;

const workingStyle = [
  "Question the process, not only the interface",
  "Explain technical decisions in business language",
  "Build maintainable systems the company can own",
  "Prefer one coherent workflow over disconnected tools",
  "Use automation and AI only when they create real leverage",
  "Stay close enough to improve what happens after launch",
] as const;

export default function AboutPage() {
  return (
    <main className="experience-page">
      <ExperienceHero
        eyebrow="About"
        title="I like understanding how a business works — then making it work better."
        description="Software is the craft. Systems thinking is the real work. I combine development, automation and business context to turn messy processes into digital infrastructure people can actually use every day."
        aside={
          <div data-optical-glass className="apple-glass-dark optical-glass rounded-[28px] p-6 text-white">
            <div className="flex items-center gap-4">
              <div className="flex h-20 w-20 shrink-0 items-center justify-center rounded-full border border-white/12 bg-white/[0.045] text-[25px] font-semibold tracking-[-0.05em] text-white">DV</div>
              <div>
                <p className="text-[13px] font-semibold text-white/88">Daniel Vlcek</p>
                <p className="mt-1 text-[9px] leading-4 text-white/42">Software Developer<br />& Automation Architect</p>
              </div>
            </div>
            <p className="mt-5 border-t border-white/[0.08] pt-4 text-[10px] leading-5 text-white/46">Direct collaboration, technical depth and the mindset of someone who cares about the operation behind the build.</p>
          </div>
        }
      />

      <section className="relative overflow-hidden bg-[#f8f8f6] px-5 py-20 sm:px-8 md:py-28 lg:px-14 xl:px-20">
        <div className="experience-ambient experience-ambient-a" aria-hidden="true" />
        <div className="mx-auto max-w-[1160px]">
          <div data-page-reveal className="grid gap-8 lg:grid-cols-[0.68fr_1.32fr] lg:items-start">
            <div className="lg:sticky lg:top-28">
              <PageEyebrow>Why I Work This Way</PageEyebrow>
              <h2 className="mt-4 text-[clamp(2rem,4vw,3.15rem)] font-semibold leading-[1.02] tracking-[-0.048em] text-[#101722]">
                The code matters. What it changes matters more.
              </h2>
              <p className="mt-5 max-w-[470px] text-[12px] leading-5.5 text-[#687486]">
                I enjoy the technical side deeply, but the most interesting part is seeing how the pieces affect a real company: what a customer experiences, what the team has to do next, and what becomes possible once the process is cleaner.
              </p>
            </div>

            <div className="grid gap-5">
              {principles.map((item, index) => {
                const Icon = item.icon;
                return (
                  <article key={item.title} data-page-reveal data-optical-glass className="apple-glass optical-glass grid gap-5 rounded-[28px] p-6 sm:grid-cols-[auto_1fr_auto] sm:items-start md:p-7">
                    <span className="glass-icon flex h-11 w-11 items-center justify-center rounded-[14px] text-[#315fae]"><Icon size={18} /></span>
                    <div>
                      <h3 className="text-[20px] font-semibold tracking-[-0.035em] text-[#101722]">{item.title}</h3>
                      <p className="mt-3 max-w-[620px] text-[11px] leading-5 text-[#6c7788]">{item.text}</p>
                    </div>
                    <span className="text-[9px] font-semibold tracking-[0.16em] text-[#a0aab7]">0{index + 1}</span>
                  </article>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      <section className="relative bg-[#f8f8f6] px-5 pb-28 sm:px-8 md:pb-36 lg:px-14 xl:px-20">
        <div className="mx-auto max-w-[1160px]">
          <div className="grid gap-5 lg:grid-cols-[0.88fr_1.12fr]">
            <article data-page-reveal data-optical-glass className="apple-glass optical-glass rounded-[30px] p-6 md:p-8">
              <PageEyebrow>What You Get</PageEyebrow>
              <h2 className="mt-4 text-[clamp(1.9rem,3vw,2.6rem)] font-semibold leading-[1.03] tracking-[-0.045em] text-[#101722]">One person who can connect the business conversation to the technical implementation.</h2>
              <p className="mt-4 text-[12px] leading-5.5 text-[#687486]">That means fewer translation layers between “this is what is painful” and “this is how the system should work.”</p>
              <div className="mt-7 grid gap-3 sm:grid-cols-2">
                {workingStyle.map((item) => (
                  <div key={item} className="flex gap-2.5 rounded-[16px] border border-[#e2e7ed] bg-white/55 p-3.5">
                    <span className="mt-0.5 flex h-4 w-4 shrink-0 items-center justify-center rounded-full border border-[#cfd9e4] bg-white text-[#2563eb]"><Check size={8} /></span>
                    <p className="text-[9px] leading-4 text-[#5f6c7e]">{item}</p>
                  </div>
                ))}
              </div>
            </article>

            <article data-page-reveal className="relative min-h-[430px] overflow-hidden rounded-[30px] bg-[#07111d] p-6 text-white shadow-[0_24px_80px_rgba(7,17,29,0.15)] md:p-8">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_76%_18%,rgba(86,151,215,0.19),transparent_30%),linear-gradient(145deg,rgba(255,255,255,0.018),transparent_50%)]" />
              <div className="relative z-10 flex h-full flex-col">
                <PageEyebrow light>My Role</PageEyebrow>
                <h2 className="mt-5 max-w-[560px] text-[clamp(2rem,3.4vw,3rem)] font-semibold leading-[1.01] tracking-[-0.05em]">Not an extra pair of hands. A technical owner for the problem.</h2>
                <p className="mt-5 max-w-[560px] text-[12px] leading-6 text-white/50">I want enough context to challenge the brief when there is a better way, enough technical control to implement the answer properly, and enough continuity to improve it after real users touch it.</p>

                <div className="mt-auto grid gap-3 pt-9 sm:grid-cols-3">
                  {[
                    [Code2, "Build", "Production-ready implementation"],
                    [Sparkles, "Simplify", "Less friction and clearer flows"],
                    [Workflow, "Connect", "Systems that work together"],
                  ].map(([Icon, title, text]) => {
                    const Component = Icon as typeof Code2;
                    return (
                      <div key={String(title)} className="rounded-[17px] border border-white/[0.08] bg-white/[0.035] p-4 backdrop-blur-xl">
                        <Component size={15} className="text-[#acd5ff]" />
                        <p className="mt-3 text-[10px] font-semibold text-white/80">{String(title)}</p>
                        <p className="mt-1 text-[8px] leading-4 text-white/38">{String(text)}</p>
                      </div>
                    );
                  })}
                </div>
              </div>
            </article>
          </div>
        </div>
      </section>

      <ExperienceClose
        eyebrow="Work Together"
        title="The best starting point is not a feature list. It is the thing in your business that should work better."
        description="Bring the current process, the constraints and what you want to improve. I can help turn that into a realistic technical direction."
        primaryLabel="Discuss the problem"
        secondaryLabel="See case studies"
        secondaryHref="/work"
      />
    </main>
  );
}
