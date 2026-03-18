"use client";

import { useRef } from "react";
import { Container } from "@/components/ui/Container";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { useReveal } from "@/components/animations/useReveal";

export function Problem() {
  const ref = useRef<HTMLDivElement>(null);
  useReveal(ref);

  return (
    <section className=" py-20 md:py-28">
      <Container>
        <div ref={ref}>
          <SectionTitle
            eyebrow="The Problem"
            title="Most small companies don’t need more effort. They need better systems."
            desc="When tasks are handled manually, tools don’t connect, and the website is not built around real operations, growth starts depending on extra effort instead of better systems."
          />

          <div className="grid gap-4 md:grid-cols-2">
            {[
              { t: "Repetitive admin tasks eating hours every week" },
              { t: "Tools and processes that don’t connect properly" },
              { t: "Websites that look acceptable but don’t support growth" },
              { t: "No clear tracking, workflow structure, or scalable backend" },
            ].map((x) => (
              <div
                key={x.t}
                className="rounded-2xl bg-white/3 backdrop-blur-sm p-6 ring-1 ring-white/10"
              >
                <p className="text-base font-semibold text-white">{x.t}</p>
              </div>
            ))}
          </div>

          <p className="mt-8 text-lg text-white/75">
            You don&apos;t need more hustle. You need better infrastructure.
          </p>
        </div>
      </Container>
    </section>
  );
}
