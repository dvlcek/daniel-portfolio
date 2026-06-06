import type { Metadata } from "next";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { PageHero } from "@/components/ui/PageHero";
import { CtaPanel } from "@/components/ui/CtaPanel";
import { insightPosts } from "@/lib/siteContent";

export const metadata: Metadata = {
  title: "Insights | Websites, Automation & Digital Infrastructure",
  description:
    "Practical thinking on websites, systems, automation, CRM workflows, business platforms, process optimization, and digital infrastructure.",
  alternates: { canonical: "/insights" },
  openGraph: { title: "Insights | Daniel Vlcek", description: "Practical thinking on digital systems and automation.", url: "/insights", type: "website" },
};

const categories = ["Automation", "Web Strategy", "Business Platforms", "CRM Systems", "Process Optimization", "Technical Architecture"];

export default function InsightsPage() {
  return (
    <main className="site-page">
      <PageHero eyebrow="Insights" title="Practical thinking on websites, systems, automation, and digital infrastructure." description="Notes for companies deciding what to improve, rebuild, automate, or connect next. The focus is practical business infrastructure, not generic technology commentary." />
      <section className="section-compact">
        <Container>
          <div className="flex flex-wrap gap-2">{categories.map((item) => <span key={item} className="rounded-full border border-[rgba(242,239,230,0.10)] bg-[rgba(242,239,230,0.04)] px-3.5 py-2 text-sm text-[#B8B1A4]">{item}</span>)}</div>
          <div className="mt-10 grid gap-5 md:grid-cols-2">
            {insightPosts.map((post, index) => (
              <article key={post.slug} className="glass-panel rounded-[28px] p-6 transition duration-300 hover:-translate-y-1 hover:border-[rgba(242,239,230,0.22)] md:p-8">
                <p className="micro-label text-[#C16A3A]">{categories[index % categories.length]} / {post.readTime}</p>
                <h2 className="mt-5 text-3xl font-semibold leading-tight tracking-[-0.04em] text-[#F2EFE6]">{post.title}</h2>
                <p className="mt-5 text-sm leading-7 text-[#B8B1A4]">{post.excerpt}</p>
                <Link href={`/insights/${post.slug}`} className="mt-7 inline-flex items-center gap-2 text-sm font-semibold text-[#E5E0D4] transition hover:text-white">Read insight <ArrowUpRight size={15} /></Link>
              </article>
            ))}
          </div>
        </Container>
      </section>
      <section className="section-compact"><Container><CtaPanel title="Want to apply this thinking to your business?" description="If your website, CRM, dashboard, or workflow feels disconnected, the next step is mapping the system behind the problem." /></Container></section>
    </main>
  );
}
