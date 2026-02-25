import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { caseStudies, primaryCta } from "@/lib/siteContent";

export default function WorkPage() {
  return (
    <main className="py-16 md:py-24">
      <Container>
        <SectionTitle
          eyebrow="Work"
          title="Case studies built around measurable outcomes"
          desc="Outcome-first delivery across automation systems, Next.js rebuilds, and operational architecture."
        />

        <div className="mt-10 grid gap-4 md:grid-cols-2">
          {caseStudies.map((study) => (
            <article key={study.slug} className="rounded-2xl bg-white/5 p-7 ring-1 ring-white/10">
              <p className="text-xs uppercase tracking-[0.2em] text-white/45">{study.company} / {study.industry}</p>
              <h2 className="mt-3 text-xl font-semibold text-white">{study.result}</h2>
              <p className="mt-4 text-sm text-white/65">{study.summary}</p>
              <p className="mt-4 text-sm text-white/65"><span className="text-white/45">Stack:</span> {study.stack.join(", ")}</p>
              <Link href={`/work/${study.slug}`} className="mt-5 inline-flex text-sm text-emerald-300 hover:text-emerald-200">
                View Case Study
              </Link>
            </article>
          ))}
        </div>

        <div className="mt-12 rounded-2xl bg-white/5 p-7 ring-1 ring-white/10">
          <h3 className="text-xl font-semibold text-white">Need a similar outcome?</h3>
          <p className="mt-3 text-sm text-white/65">Book a short systems call to scope your highest-leverage bottlenecks.</p>
          <Link href={primaryCta.href} className="mt-5 inline-flex rounded-2xl bg-white px-5 py-3 text-sm font-medium text-black transition hover:opacity-90">
            {primaryCta.label}
          </Link>
        </div>
      </Container>
    </main>
  );
}
