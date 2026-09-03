import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { notFound } from "next/navigation";
import { ExperienceClose, ExperienceHero } from "@/components/site/ExperiencePage";
import { insightPosts } from "@/lib/siteContent";

type Props = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return insightPosts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }: Props) {
  const { slug } = await params;
  const post = insightPosts.find((entry) => entry.slug === slug);

  if (!post) {
    return {
      title: "Insight Not Found",
      robots: { index: false, follow: false },
    };
  }

  const canonical = `/insights/${post.slug}`;

  return {
    title: post.title,
    description: post.excerpt,
    alternates: { canonical },
    openGraph: {
      title: `${post.title} | Daniel Vlcek`,
      description: post.excerpt,
      url: canonical,
      type: "article",
    },
  } satisfies Metadata;
}

export default async function InsightPostPage({ params }: Props) {
  const { slug } = await params;
  const post = insightPosts.find((entry) => entry.slug === slug);

  if (!post) notFound();

  return (
    <main className="experience-page">
      <ExperienceHero
        eyebrow={`Insight · ${post.readTime}`}
        title={post.title}
        description={post.excerpt}
      />

      <article className="relative overflow-hidden bg-[#f8f8f6] px-5 py-20 sm:px-8 md:py-28 lg:px-14 xl:px-20">
        <div className="experience-ambient experience-ambient-a" aria-hidden="true" />
        <div className="mx-auto max-w-[760px]">
          <Link href="/insights" className="group inline-flex items-center gap-2 text-[10px] font-semibold text-[#677386] transition hover:text-[#101722]">
            <ArrowLeft size={12} className="transition-transform group-hover:-translate-x-0.5" />
            Back to insights
          </Link>

          <div data-page-reveal className="mt-9 border-l border-[#d8e0e8] pl-5 sm:pl-7">
            <p className="text-[15px] font-medium leading-7 tracking-[-0.015em] text-[#344154] sm:text-[17px] sm:leading-8">{post.excerpt}</p>
          </div>

          <div className="mt-12 space-y-7">
            {post.body.map((paragraph, index) => (
              <p key={paragraph} data-page-reveal className="text-[14px] leading-7 text-[#596678] sm:text-[15px] sm:leading-8">
                {paragraph}
                {index === post.body.length - 1 ? null : ""}
              </p>
            ))}
          </div>
        </div>
      </article>

      <ExperienceClose
        eyebrow="Apply The Thinking"
        title="If this sounds familiar, the useful question is what it means inside your own operation."
        description="Show me the current process and the constraint. We can work out whether the answer is a workflow change, automation, software or something simpler."
        primaryLabel="Discuss your operation"
        secondaryLabel="More insights"
        secondaryHref="/insights"
      />
    </main>
  );
}
