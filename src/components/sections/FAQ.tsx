"use client";

import { useRef } from "react";
import { Container } from "@/components/ui/Container";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { useStagger } from "@/components/animations/useStagger";
import { faqItems } from "@/lib/siteContent";

export function FAQ() {
  const ref = useRef<HTMLDivElement>(null);
  useStagger(ref, ".faq-item", { y: 14, stagger: 0.06 });

  return (
    <section className="py-20 md:py-28">
      <Container>
        <div ref={ref}>
          <SectionTitle eyebrow="FAQ" title="Answers before we start" />
          <div className="space-y-3">
            {faqItems.map((item) => (
              <article key={item.question} className="faq-item rounded-xl bg-white/5 p-5 ring-1 ring-white/10">
                <h3 className="text-sm font-semibold text-white">{item.question}</h3>
                <p className="mt-2 text-sm text-white/65">{item.answer}</p>
              </article>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
