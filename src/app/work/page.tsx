import { caseStudies } from "@/lib/siteContent";
import { ExperienceClose, ExperienceHero } from "@/components/site/ExperiencePage";
import { WorkFilterGrid } from "./WorkFilterGrid";

const signals = [
  ["Operating systems", "Connect the full workflow"],
  ["Automation", "Remove repetitive handoffs"],
  ["Client platforms", "Make the customer journey easier"],
] as const;

export default function WorkPage() {
  return (
    <main className="experience-page">
      <ExperienceHero
        eyebrow="Selected Work"
        title="Systems built to make real businesses work better."
        description="The projects here are not presented as design exercises. Each one starts with a real business constraint — manual work, fragmented operations, weak customer flow or a platform that could not scale — and shows what changed after the system was built."
        aside={
          <div data-optical-glass className="apple-glass-dark optical-glass rounded-[26px] p-5 text-white">
            <p className="text-[9px] font-semibold uppercase tracking-[0.2em] text-white/34">What to look for</p>
            <div className="mt-4 space-y-3">
              {signals.map(([label, text]) => (
                <div key={label} className="border-t border-white/[0.08] pt-3 first:border-t-0 first:pt-0">
                  <p className="text-[11px] font-semibold text-white/82">{label}</p>
                  <p className="mt-1 text-[9px] leading-4 text-white/42">{text}</p>
                </div>
              ))}
            </div>
          </div>
        }
      />

      <section className="relative overflow-hidden bg-[#f8f8f6] px-5 py-20 sm:px-8 md:py-28 lg:px-14 xl:px-20">
        <div className="experience-ambient experience-ambient-b" aria-hidden="true" />
        <div className="mx-auto max-w-[1160px]">
          <div data-page-reveal className="mb-10 grid gap-6 lg:grid-cols-[0.75fr_1fr] lg:items-end">
            <div>
              <p className="text-[10px] font-semibold uppercase tracking-[0.22em] text-[#738096]">Case Studies</p>
              <h2 className="mt-4 max-w-[560px] text-[clamp(2rem,4vw,3.15rem)] font-semibold leading-[1.02] tracking-[-0.048em] text-[#101722]">
                Look at the transformation, not just the interface.
              </h2>
            </div>
            <p className="max-w-[580px] text-[13px] leading-6 text-[#687486] lg:justify-self-end">
              A strong build should change something concrete: fewer manual steps, clearer customer journeys, better operational control, faster work or a cleaner foundation for growth.
            </p>
          </div>

          <WorkFilterGrid studies={caseStudies} />
        </div>
      </section>

      <ExperienceClose
        eyebrow="Your Operation"
        title="Have a process that feels more complicated than it should?"
        description="Show me what currently happens from the first customer action to the internal work behind it. We can identify where the friction is and what is actually worth rebuilding."
        primaryLabel="Discuss your system"
        secondaryLabel="How I work"
        secondaryHref="/#process"
      />
    </main>
  );
}
