import type { Metadata } from "next";
import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { SectionTitle } from "@/components/ui/SectionTitle";

export const metadata: Metadata = {
  title: "Website & Systems Audit",
  description:
    "A focused audit for identifying website, workflow, tool, and automation improvements before a rebuild or systems project.",
  robots: {
    index: false,
    follow: true,
  },
};

export default function AuditPage() {
  return (
    <main className="py-16 md:py-24">
      <Container className="max-w-4xl">
        <SectionTitle
          eyebrow="Audit"
          title="Website & Systems Audit"
          desc="A focused review of your website, workflows, tools, and repeated manual work before a rebuild, automation, or platform project."
        />

        <div className="mt-10 grid gap-4 md:grid-cols-2">
          <article className="rounded-2xl bg-white/5 p-7 ring-1 ring-white/10">
            <h2 className="text-lg font-semibold text-white">You get</h2>
            <ul className="mt-4 space-y-2 text-sm text-white/70">
              <li>- Bottleneck map across website and operations</li>
              <li>- Top automation opportunities by practical value</li>
              <li>- Conversion friction analysis</li>
              <li>- Prioritized implementation roadmap</li>
            </ul>
          </article>

          <article className="rounded-2xl bg-white/5 p-7 ring-1 ring-white/10">
            <h2 className="text-lg font-semibold text-white">Best for</h2>
            <p className="mt-4 text-sm text-white/70">
              Teams that know the current setup is messy but are not sure
              whether they need a website, automation, dashboard, or platform
              remake.
            </p>
            <Link href="/contact" className="mt-6 inline-flex rounded-2xl bg-white px-5 py-3 text-sm font-medium text-black transition hover:opacity-90">
              Start with an audit
            </Link>
          </article>
        </div>
      </Container>
    </main>
  );
}
