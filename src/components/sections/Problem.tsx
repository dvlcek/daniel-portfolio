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
            title="Most companies don't have a growth problem. They have a systems problem."
            desc="Manual processes, disconnected tools, and outdated web experiences force teams to compensate with effort. That works until it doesn't."
          />

          <div className="grid gap-4 md:grid-cols-2">
            {[
              { t: "Repeated admin tasks eating hours every week" },
              { t: "Tools that don't talk to each other" },
              { t: "Websites that look fine but don't convert" },
              { t: "No reliable tracking, handover, or scalability" },
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
