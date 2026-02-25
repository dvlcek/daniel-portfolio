import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { SectionTitle } from "@/components/ui/SectionTitle";

export default function AuditPage() {
  return (
    <main className="py-16 md:py-24">
      <Container className="max-w-4xl">
        <SectionTitle
          eyebrow="Audit"
          title="Website and System Audit"
          desc="Get a focused bottleneck map, quick wins, and execution roadmap for your growth stack."
        />

        <div className="mt-10 grid gap-4 md:grid-cols-2">
          <article className="rounded-2xl bg-white/5 p-7 ring-1 ring-white/10">
            <h2 className="text-lg font-semibold text-white">You get</h2>
            <ul className="mt-4 space-y-2 text-sm text-white/70">
              <li>- Bottleneck map across website and operations</li>
              <li>- Top automation opportunities by impact</li>
              <li>- Conversion friction analysis</li>
              <li>- Prioritized implementation roadmap</li>
            </ul>
          </article>

          <article className="rounded-2xl bg-white/5 p-7 ring-1 ring-white/10">
            <h2 className="text-lg font-semibold text-white">Best for</h2>
            <p className="mt-4 text-sm text-white/70">
              Teams with clear growth goals but unclear technical priorities. The audit creates decision clarity before a sprint or rebuild.
            </p>
            <Link href="/contact" className="mt-6 inline-flex rounded-2xl bg-white px-5 py-3 text-sm font-medium text-black transition hover:opacity-90">
              Request Audit
            </Link>
          </article>
        </div>
      </Container>
    </main>
  );
}
