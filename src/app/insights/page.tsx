import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { insightPosts } from "@/lib/siteContent";

export default function InsightsPage() {
  return (
    <main className="py-16 md:py-24">
      <Container>
        <SectionTitle
          eyebrow="Insights"
          title="Short notes on automation, rebuilds, and performance"
          desc="Focused writing for teams deciding what to optimize next."
        />

        <div className="mt-10 grid gap-4 md:grid-cols-2">
          {insightPosts.map((post) => (
            <article key={post.slug} className="rounded-2xl bg-white/5 p-7 ring-1 ring-white/10">
              <p className="text-xs uppercase tracking-[0.2em] text-white/45">{post.readTime}</p>
              <h2 className="mt-3 text-xl font-semibold text-white">{post.title}</h2>
              <p className="mt-4 text-sm text-white/65">{post.excerpt}</p>
              <Link href={`/insights/${post.slug}`} className="mt-5 inline-flex text-sm text-emerald-300 hover:text-emerald-200">
                Read post
              </Link>
            </article>
          ))}
        </div>
      </Container>
    </main>
  );
}
