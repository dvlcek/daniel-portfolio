import type { Metadata } from "next";
import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { insightPosts } from "@/lib/siteContent";

export const metadata: Metadata = {
  title: "Insights | Websites, Automation & Business Systems",
  description:
    "Practical insights on business automation, website rebuilds, operational systems, CRM workflows, and platform decisions for growing companies.",
  alternates: {
    canonical: "/insights",
  },
  openGraph: {
    title: "Insights | Daniel Vlcek",
    description:
      "Practical notes on automation, platform rebuilds, business operations, and systems that make companies easier to run.",
    url: "/insights",
    type: "website",
  },
};

export default function InsightsPage() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-site-bg pt-28 pb-16 md:pt-32 md:pb-24">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_18%_12%,rgba(143,163,177,0.10),transparent_34%),radial-gradient(circle_at_82%_18%,rgba(193,106,58,0.08),transparent_30%)]" />
      <Container className="relative z-10">
        <SectionTitle
          eyebrow="Insights"
          title="Practical thinking on websites, systems, automation, and digital infrastructure."
          desc="Notes for businesses deciding what to improve, rebuild, connect, or automate next."
        />

        <div className="mt-10 grid gap-4 md:grid-cols-2">
          {insightPosts.map((post) => (
            <article key={post.slug} className="rounded-[2rem] border border-black/[0.10] bg-white/62 p-7 shadow-[0_18px_60px_rgba(0,0,0,0.22)]">
              <p className="font-mono text-xs uppercase tracking-[0.2em] text-ash">{post.readTime}</p>
              <h2 className="mt-3 text-2xl font-semibold tracking-[-0.025em] text-cream">{post.title}</h2>
              <p className="mt-4 text-sm leading-7 text-stone">{post.excerpt}</p>
              <Link href={`/insights/${post.slug}`} className="mt-5 inline-flex text-sm font-semibold text-clay hover:text-cream">
                Read post
              </Link>
            </article>
          ))}
        </div>
      </Container>
    </main>
  );
}
