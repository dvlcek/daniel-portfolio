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
    <section id="contact" className="relative overflow-hidden bg-site-bg py-20 md:py-28">
      <Container>
        <Reveal className="relative overflow-hidden rounded-[2.5rem] border border-white/[0.10] bg-[radial-gradient(circle_at_25%_20%,rgba(193,106,58,0.14),transparent_34%),radial-gradient(circle_at_75%_30%,rgba(143,163,177,0.12),transparent_38%),linear-gradient(180deg,#11120F_0%,#050505_100%)] p-7 text-[#F7F4EC] shadow-[0_32px_100px_rgba(0,0,0,0.38)] md:p-10">
          <div className="pointer-events-none absolute inset-0 opacity-[0.16] [background-image:linear-gradient(rgba(242,239,230,0.08)_1px,transparent_1px),linear-gradient(90deg,rgba(242,239,230,0.08)_1px,transparent_1px)] [background-size:64px_64px]" />
          <div className="relative z-10 grid gap-10 lg:grid-cols-[1fr_0.72fr] lg:items-center">
            <div>
              <p className="font-mono text-xs font-semibold uppercase tracking-[0.26em] text-clay">
                Start with clarity
              </p>
              <h2 className="mt-5 max-w-3xl text-balance text-[clamp(2.5rem,5vw,5.4rem)] font-medium leading-[0.98] tracking-[-0.045em] text-[#F7F4EC]">
                Let&apos;s map the system your business actually needs.
              </h2>
              <p className="mt-6 max-w-2xl text-base leading-8 text-[#D8D2C4]/72">
                Tell me what you are building, what feels manual, and where
                your current tools stop supporting growth. I will help identify
                what kind of website, platform, or automation system makes
                sense.
              </p>

              <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:items-center">
                <Button href="/contact" variant="primary" className="bg-site-bg text-cream before:hidden hover:bg-white">
                  Book a Strategy Call
                  <ArrowUpRight size={15} />
                </Button>
                <Button href="/work" variant="secondary" className="border-white/[0.12] bg-white/[0.08] text-[#F7F4EC] ring-white/[0.12] hover:bg-white/[0.13]">
                  View Work
                </Button>
              </div>
            </div>

            <div className="rounded-[2rem] border border-white/[0.10] bg-white/[0.055] p-5 backdrop-blur-xl">
              <p className="text-sm font-semibold text-[#F7F4EC]">
                What we&apos;ll clarify
              </p>
              <div className="mt-5 space-y-4">
                {callPoints.map((item, index) => (
                  <div key={item} className="flex gap-4">
                    <span className="w-6 shrink-0 font-mono text-xs text-clay">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                    <p className="text-sm leading-7 text-[#D8D2C4]/70">{item}</p>
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
