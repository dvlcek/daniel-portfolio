import type { Metadata } from "next";
import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { Stagger } from "@/components/animations/ScrollAnimation";

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
    <main className="relative min-h-screen overflow-hidden bg-site-bg pt-28 pb-16 md:pt-32 md:pb-24">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_18%_12%,rgba(143,163,177,0.10),transparent_34%),radial-gradient(circle_at_82%_18%,rgba(193,106,58,0.08),transparent_30%)]" />
      <Container className="relative z-10 max-w-4xl">
        <SectionTitle
          eyebrow="Audit"
          title="Website & Systems Audit"
          desc="A focused review of your website, workflows, tools, and repeated manual work before a rebuild, automation, or platform project."
        />

        <Stagger itemSelector=".audit-card" className="mt-10 grid gap-4 md:grid-cols-2">
          <article className="audit-card rounded-[2rem] border border-black/[0.10] bg-white/62 p-7 shadow-[0_18px_60px_rgba(0,0,0,0.22)]">
            <h2 className="text-lg font-semibold text-cream">You get</h2>
            <ul className="mt-4 space-y-2 text-sm text-stone">
              <li>- Bottleneck map across website and operations</li>
              <li>- Top automation opportunities by practical value</li>
              <li>- Conversion friction analysis</li>
              <li>- Prioritized implementation roadmap</li>
            </ul>
          </article>

          <article className="audit-card rounded-[2rem] border border-black/[0.10] bg-white/62 p-7 shadow-[0_18px_60px_rgba(0,0,0,0.22)]">
            <h2 className="text-lg font-semibold text-cream">Best for</h2>
            <p className="mt-4 text-sm leading-7 text-stone">
              Teams that know the current setup is messy but are not sure
              whether they need a website, automation, dashboard, or platform
              remake.
            </p>
            <Link href="/contact" className="mt-6 inline-flex rounded-full bg-cream px-5 py-3 text-sm font-semibold text-site-bg transition hover:bg-[#0D0E0C]">
              Start with an audit
            </Link>
          </article>
        </Stagger>
      </Container>
    </main>
  );
}
