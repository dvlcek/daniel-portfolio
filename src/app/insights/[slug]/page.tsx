import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Badge } from "@/components/ui/Badge";
import { CtaPanel } from "@/components/ui/CtaPanel";
import { insightPosts } from "@/lib/siteContent";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return insightPosts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = insightPosts.find((entry) => entry.slug === slug);
  if (!post) return { title: "Insight" };
  return { title: post.title, description: post.excerpt, alternates: { canonical: `/insights/${post.slug}` }, openGraph: { title: post.title, description: post.excerpt, url: `/insights/${post.slug}`, type: "article" } };
}

export default async function InsightPostPage({ params }: Props) {
  const { slug } = await params;
  const post = insightPosts.find((entry) => entry.slug === slug);
  if (!post) notFound();
  const related = insightPosts.filter((entry) => entry.slug !== post.slug).slice(0, 2);

  return (
    <main className="site-page">
      <article className="relative pt-36 pb-14 md:pt-44 md:pb-20">
        <Container size="narrow">
          <Link href="/insights" className="inline-flex items-center gap-2 text-sm text-[#8E9188] transition hover:text-[#F2EFE6]"><ArrowLeft size={15} /> Back to insights</Link>
          <div className="mt-10"><Badge>Insights / {post.readTime}</Badge><h1 className="page-heading mt-7">{post.title}</h1><p className="body-large mt-6">{post.excerpt}</p></div>
          <div className="mt-12 space-y-6 border-y border-[rgba(242,239,230,0.10)] py-10">
            {post.body.map((paragraph) => <p key={paragraph} className="text-lg leading-9 text-[#B8B1A4]">{paragraph}</p>)}
          </div>
          <div className="mt-10 rounded-[28px] border border-[#C16A3A]/24 bg-[#C16A3A]/[0.055] p-6">
            <p className="micro-label text-[#E5E0D4]">Practical takeaway</p>
            <p className="mt-4 text-xl leading-8 text-[#F2EFE6]">Before adding tools or AI, clarify the workflow, the business outcome, and the system that should connect the moving parts.</p>
          </div>
        </Container>
      </article>
      {related.length ? (
        <section className="section-compact pt-0"><Container size="narrow"><h2 className="text-2xl font-semibold text-[#F2EFE6]">Related thinking</h2><div className="mt-5 grid gap-4">{related.map((item) => <Link key={item.slug} href={`/insights/${item.slug}`} className="rounded-2xl border border-[rgba(242,239,230,0.10)] bg-[rgba(242,239,230,0.04)] p-5 transition hover:border-[rgba(242,239,230,0.22)]"><p className="text-lg font-semibold text-[#F2EFE6]">{item.title}</p><p className="mt-2 text-sm text-[#8E9188]">{item.excerpt}</p></Link>)}</div></Container></section>
      ) : null}
      <section className="section-compact"><Container><CtaPanel title="Need to turn this into a real system?" description="Share what feels manual, disconnected, or unclear. I will help map the digital system that should support the business." /></Container></section>
    </main>
  );
}
