import { Container } from "@/components/ui/Container";
import { caseStudies } from "@/lib/siteContent";
import { WorkFilterGrid } from "./WorkFilterGrid";

const pageSignals = [
  "Premium websites",
  "Custom business systems",
  "CRM automation",
  "Internal dashboards",
];

export default function WorkPage() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-site-bg py-16 md:py-24">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute inset-x-0 top-0 h-px bg-linear-to-r from-transparent via-white/10 to-transparent" />
        <div className="absolute -left-40 top-20 h-96 w-96 rounded-full bg-brand-blue/7 blur-3xl" />
        <div className="absolute -right-40 top-80 h-[28rem] w-[28rem] rounded-full bg-brand-blue-deep/18 blur-3xl" />
        <div className="absolute inset-x-0 bottom-0 h-72 bg-linear-to-t from-site-bg-deep/55 to-transparent" />
      </div>

      <Container className="relative z-10 max-w-7xl">
        <header className="border-b border-white/[0.08] pb-12 md:pb-14">
          <div className="grid gap-10 lg:grid-cols-[0.95fr_0.72fr] lg:items-end">
            <div>
              <p className="text-xs font-medium uppercase tracking-[0.32em] text-brand-blue md:text-sm">
                Selected Work
              </p>

              <h1 className="mt-5 max-w-4xl text-balance text-4xl font-semibold tracking-tight text-white md:text-6xl md:leading-[1.05]">
                Case studies built around business outcomes.
              </h1>
            </div>

            <p className="max-w-xl text-base leading-relaxed text-white/60 md:text-lg lg:justify-self-end">
              A portfolio of premium websites, custom business systems,
              internal dashboards, CRM automation, and platform rebuilds
              designed to improve trust and create cleaner operations.
            </p>
          </div>

          <div className="mt-10 flex flex-wrap gap-2">
            {pageSignals.map((item) => (
              <span
                key={item}
                className="rounded-full border border-white/[0.08] bg-white/[0.018] px-4 py-2 text-sm text-white/48 backdrop-blur-xl"
              >
                {item}
              </span>
            ))}
          </div>
        </header>

        <WorkFilterGrid studies={caseStudies} />

        <footer className="mt-12 border-t border-white/[0.08] pt-6">
          <p className="max-w-3xl text-sm leading-relaxed text-white/42">
            Each project is presented as a business system, not just a visual
            build. The focus is always on structure, operational value, and what
            the solution makes easier for the company.
          </p>
        </footer>
      </Container>
    </main>
  );
}
