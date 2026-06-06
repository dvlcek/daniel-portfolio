import { ArrowUpRight } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { Reveal } from "@/components/animations/ScrollAnimation";

const callPoints = [
  "What currently feels messy, manual, or unclear",
  "Which part of the workflow should be improved first",
  "Whether the next step is a website, platform, automation, or remake",
];

export function FinalCTA() {
  return (
    <section
      id="contact"
      className="relative overflow-hidden bg-white py-20 md:py-24"
    >
      <Container>
        <Reveal className="overflow-hidden rounded-[2.5rem] border border-[#C9D4FF] bg-[#0E1B56] p-7 text-white shadow-[0_28px_90px_rgba(18,56,242,0.22)] md:p-10">
          <div className="grid gap-10 lg:grid-cols-[1fr_0.72fr] lg:items-center">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.26em] text-[#C9D4FF]">
                Start with clarity
              </p>
              <h2 className="mt-5 max-w-2xl text-balance text-4xl font-semibold tracking-tight md:text-5xl md:leading-[1.05]">
                Tell me what part of your business you want to improve.
              </h2>
              <p className="mt-5 max-w-2xl text-base leading-8 text-white/72">
                We can look at your current website, tools, lead flow, admin
                work, or client process and decide what system would make the
                next step easier.
              </p>

              <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:items-center">
                <Button
                  href="/contact"
                  variant="primary"
                  className="bg-white text-[#0E1B56] before:bg-[#C9D4FF] hover:text-[#0E1B56]"
                >
                  Let&apos;s look at your setup
                  <ArrowUpRight size={15} />
                </Button>
                <p className="max-w-sm text-sm leading-7 text-white/58">
                  Clear direction, honest feedback, and no oversized scope.
                </p>
              </div>
            </div>

            <div className="rounded-[2rem] border border-white/12 bg-white/8 p-5 backdrop-blur-xl">
              <p className="text-sm font-semibold text-white">
                What we&apos;ll clarify
              </p>
              <div className="mt-5 space-y-4">
                {callPoints.map((item, index) => (
                  <div key={item} className="flex gap-4">
                    <span className="w-6 shrink-0 font-mono text-xs text-[#C9D4FF]">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                    <p className="text-sm leading-7 text-white/68">{item}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
