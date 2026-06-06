import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Container } from "@/components/ui/Container";
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
      robots: {
        index: false,
        follow: false,
      },
    };
  }

  const canonical = `/insights/${post.slug}`;

  return {
    title: post.title,
    description: post.excerpt,
    alternates: {
      canonical,
    },
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

  if (!post) {
    notFound();
  }

  return (
    <main className="relative min-h-screen overflow-hidden bg-site-bg pt-28 pb-16 md:pt-32 md:pb-24">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_18%_12%,rgba(143,163,177,0.10),transparent_34%),radial-gradient(circle_at_82%_18%,rgba(193,106,58,0.08),transparent_30%)]" />
      <Container className="relative z-10 max-w-3xl">
        <p className="font-mono text-xs uppercase tracking-[0.2em] text-ash">Insights / {post.readTime}</p>
        <h1 className="mt-4 text-[clamp(2.8rem,7vw,5.8rem)] font-medium leading-[0.98] tracking-[-0.045em] text-cream">{post.title}</h1>
        <p className="mt-6 text-lg leading-8 text-stone">{post.excerpt}</p>

        <div className="mt-10 space-y-4">
          {post.body.map((paragraph) => (
            <p key={paragraph} className="text-base leading-8 text-muted-cream/80">{paragraph}</p>
          ))}
        </div>
      </Container>
    </main>
  );
}
