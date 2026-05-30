import { ArrowUpRight } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { Reveal } from "@/components/animations/ScrollAnimation";

const callPoints = [
  "Where your website, lead flow, or internal tools slow the team down",
  "What should be improved first for the highest leverage",
  "Whether the next step is a rebuild, dashboard, CRM flow, or automation",
];

export function FinalCTA() {
  return (
    <section
      id="contact"
      className="relative overflow-hidden bg-site-bg py-16 md:py-20"
    >
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute inset-x-0 top-0 h-px bg-linear-to-r from-transparent via-white/10 to-transparent" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_24%_18%,rgba(47,47,228,0.035),transparent_32%)]" />
      </div>

      <Container>
        <Reveal className="relative z-10 border-y border-white/[0.08] py-10 md:py-12">
          <div className="grid gap-10 lg:grid-cols-[1fr_0.72fr] lg:items-center">
            <div>
              <p className="text-xs font-medium uppercase tracking-[0.32em] text-brand-blue">
                Start with clarity
              </p>

              <h2 className="mt-5 max-w-2xl text-balance text-3xl font-semibold tracking-tight text-white md:text-4xl">
                Need a clearer digital setup behind your company?
              </h2>

              <p className="mt-4 max-w-2xl text-sm leading-relaxed text-white/62 md:text-base">
                Book a short strategy call and identify the highest-leverage
                improvements across your website, lead intake, CRM pipeline,
                dashboard needs, or repeated admin work.
              </p>

              <div className="mt-7 flex flex-col gap-4 sm:flex-row sm:items-center">
                <Button href="/contact" variant="primary">
                  <span>Book a Strategy Call</span>
                  <ArrowUpRight size={15} />
                </Button>

                <p className="max-w-sm text-sm leading-relaxed text-white/45">
                  Clear direction, honest feedback, and a realistic next step.
                </p>
              </div>
            </div>

            <div className="lg:border-l lg:border-white/[0.08] lg:pl-10">
              <p className="text-sm font-medium text-white">
                What we’ll clarify
              </p>

              <div className="mt-5 space-y-4">
                {callPoints.map((item, index) => (
                  <div key={item} className="flex gap-4">
                    <span className="w-6 shrink-0 font-mono text-xs text-brand-blue">
                      {String(index + 1).padStart(2, "0")}
                    </span>

                    <p className="text-sm leading-relaxed text-white/58">
                      {item}
                    </p>
                  </div>
                ))}
              </div>

              <p className="mt-6 max-w-xl text-sm leading-relaxed text-white/42">
                No bloated feature list. No unclear scope. Just a practical
                starting point for improving the part of your digital setup
                that creates the most friction.
              </p>
            </div>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
