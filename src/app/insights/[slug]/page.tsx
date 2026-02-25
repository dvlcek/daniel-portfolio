import { notFound } from "next/navigation";
import { Container } from "@/components/ui/Container";
import { insightPosts } from "@/lib/siteContent";

type Props = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return insightPosts.map((post) => ({ slug: post.slug }));
}

export default async function InsightPostPage({ params }: Props) {
  const { slug } = await params;
  const post = insightPosts.find((entry) => entry.slug === slug);

  if (!post) {
    notFound();
  }

  return (
    <main className="py-16 md:py-24">
      <Container className="max-w-3xl">
        <p className="text-xs uppercase tracking-[0.2em] text-white/45">Insights / {post.readTime}</p>
        <h1 className="mt-4 text-3xl font-semibold tracking-tight text-white md:text-5xl">{post.title}</h1>
        <p className="mt-6 text-base text-white/70">{post.excerpt}</p>

        <div className="mt-10 space-y-4">
          {post.body.map((paragraph) => (
            <p key={paragraph} className="text-sm leading-relaxed text-white/75">{paragraph}</p>
          ))}
        </div>
      </Container>
    </main>
  );
}
