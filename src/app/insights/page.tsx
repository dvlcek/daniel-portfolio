import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { ExperienceClose, ExperienceHero, PageEyebrow } from "@/components/site/ExperiencePage";
import { insightPosts } from "@/lib/siteContent";

export const metadata: Metadata = {
  title: "Insights | Automation, Platforms & Operations",
  description:
    "Practical insights on business automation, platform decisions, operational systems, CRM workflows, and digital infrastructure.",
  alternates: { canonical: "/insights" },
  openGraph: {
    title: "Insights | Daniel Vlcek",
    description:
      "Practical notes on automation, platform decisions, business operations, and digital infrastructure.",
    url: "/insights",
    type: "website",
  },
};

export default function InsightsPage() {
  return (
    <main className="experience-page">
      <ExperienceHero
        eyebrow="Insights"
        title="Notes for people deciding what to improve, automate or rebuild next."
        description="I write about the decisions behind digital systems — how to find the real bottleneck, where automation earns its place, when a custom platform makes sense and how to avoid adding technology without improving the operation."
        aside={
          <div data-optical-glass className="apple-glass-dark optical-glass rounded-[26px] p-5 text-white">
            <p className="text-[9px] font-semibold uppercase tracking-[0.2em] text-white/34">The Lens</p>
            <p className="mt-4 text-[19px] font-semibold leading-[1.12] tracking-[-0.035em] text-white/88">Practical systems thinking. No trend-chasing.</p>
            <p className="mt-3 text-[10px] leading-5 text-white/42">Business context first. Technology second. Real trade-offs over generic best practices.</p>
          </div>
        }
      />

      <section className="relative overflow-hidden bg-[#f8f8f6] px-5 py-20 sm:px-8 md:py-28 lg:px-14 xl:px-20">
        <div className="experience-ambient experience-ambient-b" aria-hidden="true" />
        <div className="mx-auto max-w-[1160px]">
          <div data-page-reveal className="mb-10 max-w-[720px]">
            <PageEyebrow>Systems Journal</PageEyebrow>
            <h2 className="mt-4 text-[clamp(2rem,4vw,3.1rem)] font-semibold leading-[1.02] tracking-[-0.048em] text-[#101722]">Ideas you can use before spending money on the next build.</h2>
          </div>

          <div className="grid gap-5 md:grid-cols-2">
            {insightPosts.map((post, index) => (
              <article key={post.slug} data-page-reveal data-optical-glass className="apple-glass optical-glass group flex min-h-[310px] flex-col rounded-[28px] p-6 md:p-7">
                <div className="flex items-center justify-between">
                  <span className="text-[8px] font-semibold uppercase tracking-[0.16em] text-[#8b96a5]">{post.readTime}</span>
                  <span className="text-[9px] font-semibold tracking-[0.16em] text-[#a2acb9]">{String(index + 1).padStart(2, "0")}</span>
                </div>
                <h2 className="mt-7 max-w-[520px] text-[24px] font-semibold leading-[1.08] tracking-[-0.04em] text-[#101722]">{post.title}</h2>
                <p className="mt-4 max-w-[560px] text-[11px] leading-5.5 text-[#687486]">{post.excerpt}</p>
                <Link href={`/insights/${post.slug}`} className="group/link mt-auto inline-flex items-center gap-2 pt-7 text-[10px] font-semibold text-[#1d4ed8]">
                  Read insight <ArrowRight size={11} className="transition-transform group-hover/link:translate-x-0.5" />
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>

      <ExperienceClose
        eyebrow="From Insight To System"
        title="Reading can clarify the problem. Building the right thing is where the leverage starts."
        description="If one of these ideas sounds uncomfortably familiar in your own operation, show me the current process and we can work out what deserves to change."
        primaryLabel="Discuss your operation"
        secondaryLabel="See case studies"
        secondaryHref="/work"
      />
    </main>
  );
}
