import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Container } from "@/components/ui/Container";
import { caseStudies } from "@/lib/siteContent";

type PageProps = {
  params: Promise<{
    slug: string;
  }>;
};

function getCategoryLabel(
  category: "system_build" | "websites" | "automation" | "rebuilds"
) {
  switch (category) {
    case "system_build":
      return "Business System Build";

    case "automation":
      return "Operations Optimization";

    case "rebuilds":
      return "Platform Rebuild";

    case "websites":
      return "Growth Platform";

    default:
      return "Project";
  }
}
export async function generateStaticParams() {
  return caseStudies.map((study) => ({
    slug: study.slug,
  }));
}

export async function generateMetadata({ params }: PageProps) {
  const { slug } = await params;
  const study = caseStudies.find((item) => item.slug === slug);

  if (!study) {
    return {
      title: "Case Study Not Found",
    };
  }

  return {
    title: `${study.company} | Case Study`,
    description: study.summary,
  };
}

export default async function CaseStudyDetailPage({ params }: PageProps) {
  const { slug } = await params;
  const study = caseStudies.find((item) => item.slug === slug);

  if (!study) {
    notFound();
  }

  return (
    <main className="min-h-screen overflow-x-hidden py-16 md:py-24">
      <Container className="max-w-6xl">
        <div className="mx-auto max-w-5xl">
          <Link
            href="/work"
            className="inline-flex text-sm text-white/55 transition hover:text-white"
          >
            ← Back to case studies
          </Link>

          <div className="mt-8 grid gap-10 lg:grid-cols-[1.2fr_0.8fr] lg:items-start">
            <div>
              <p className="text-xs uppercase tracking-[0.22em] text-white/45">
                {getCategoryLabel(study.category)}
              </p>

              <h1 className="mt-4 text-3xl font-semibold tracking-tight text-white md:text-5xl md:leading-tight">
                {study.result}
              </h1>

              <p className="mt-6 max-w-3xl text-base leading-7 text-white/70 md:text-lg">
                {study.intro || study.summary}
              </p>

              <div className="mt-8 flex flex-wrap gap-3">
                {study.whatIDid.map((item) => (
                  <span
                    key={item}
                    className="rounded-full border border-white/10 bg-white/[0.03] px-4 py-2 text-sm text-white/75"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>

            <aside className="rounded-3xl border border-white/10 bg-white/[0.03] p-6 backdrop-blur-sm">
              <div>
                <p className="text-xs uppercase tracking-[0.18em] text-white/40">
                  Client
                </p>
                <p className="mt-2 text-base font-medium text-white">
                  {study.company}
                </p>
              </div>

              <div className="mt-6">
                <p className="text-xs uppercase tracking-[0.18em] text-white/40">
                  Industry
                </p>
                <p className="mt-2 text-base font-medium text-white">
                  {study.industry}
                </p>
              </div>

              {study.featuredMetric && (
                <div className="mt-6 rounded-2xl border border-white/10 bg-white/[0.03] p-4">
                  <p className="text-xs uppercase tracking-[0.18em] text-white/40">
                    Highlight
                  </p>
                  <p className="mt-2 text-lg font-semibold text-white">
                    {study.featuredMetric}
                  </p>
                </div>
              )}

              <div className="mt-6">
                <p className="text-xs uppercase tracking-[0.18em] text-white/40">
                  Stack
                </p>
                <div className="mt-3 flex flex-wrap gap-2">
                  {study.stack.map((item) => (
                    <span
                      key={item}
                      className="rounded-full border border-white/10 px-3 py-1 text-xs text-white/65"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            </aside>
          </div>

          <div className="relative mt-12 overflow-hidden rounded-[28px] border border-white/10 bg-white/[0.03]">
            <div className="relative aspect-[16/9]">
              <Image
                src={study.image}
                alt={`${study.company} case study preview`}
                fill
                className="object-cover"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-black/10 to-transparent" />
            </div>
          </div>

          <div className="mt-14 grid gap-6 md:grid-cols-3">
            <article className="rounded-3xl border border-white/10 bg-white/[0.03] p-6">
              <p className="text-xs uppercase tracking-[0.18em] text-white/40">
                Challenge
              </p>
              <p className="mt-4 text-sm leading-7 text-white/72">
                {study.challenge}
              </p>
            </article>

            <article className="rounded-3xl border border-white/10 bg-white/[0.03] p-6">
              <p className="text-xs uppercase tracking-[0.18em] text-white/40">
                Solution
              </p>
              <p className="mt-4 text-sm leading-7 text-white/72">
                {study.solution}
              </p>
            </article>

            <article className="rounded-3xl border border-white/10 bg-white/[0.03] p-6">
              <p className="text-xs uppercase tracking-[0.18em] text-white/40">
                System Components
              </p>
              <ul className="mt-4 space-y-3 text-sm leading-7 text-white/72">
                {study.whatIDid.map((item) => (
                  <li key={item}>• {item}</li>
                ))}
              </ul>
            </article>
          </div>

          <section className="mt-14 rounded-[28px] border border-white/10 bg-white/[0.03] p-7 md:p-10">
            <div className="max-w-3xl">
              <p className="text-xs uppercase tracking-[0.18em] text-white/40">
                Project Summary
              </p>
              <h2 className="mt-4 text-2xl font-semibold text-white md:text-3xl">
                Building the business infrastructure from day one.
              </h2>
              <p className="mt-6 text-base leading-8 text-white/70">
                {study.summary}
              </p>
            </div>
          </section>

          <section className="mt-14">
            <div className="flex items-end justify-between gap-6">
              <div>
                <p className="text-xs uppercase tracking-[0.18em] text-white/40">
                  Outcomes
                </p>
                <h2 className="mt-3 text-2xl font-semibold text-white md:text-3xl">
                  What changed after delivery
                </h2>
              </div>
            </div>

            <div className="mt-8 grid gap-4 md:grid-cols-2">
              {study.outcome.map((item) => (
                <article
                  key={item}
                  className="rounded-3xl border border-white/10 bg-white/[0.03] p-6"
                >
                  <p className="text-sm leading-7 text-white/78">{item}</p>
                </article>
              ))}
            </div>
          </section>

          <section className="mt-16 rounded-[28px] border border-white/10 bg-white/[0.04] p-8 md:p-10">
            <div className="max-w-3xl">
              <p className="text-xs uppercase tracking-[0.18em] text-white/40">
                Next Step
              </p>
              <h2 className="mt-4 text-2xl font-semibold text-white md:text-3xl">
                Need a system that improves operations, not just appearance?
              </h2>
              <p className="mt-5 text-base leading-8 text-white/70">
                I design and build the systems businesses run on — combining websites, platforms, and automation into a single operational infrastructure that reduces manual work and supports growth.
              </p>

              <div className="mt-8 flex flex-wrap gap-4">
                <Link
                  href="/contact"
                  className="inline-flex rounded-2xl bg-white px-5 py-3 text-sm font-medium text-black transition hover:opacity-90"
                >
                  Book a 20-min Systems Call
                </Link>

                <Link
                  href="/work"
                  className="inline-flex rounded-2xl border border-white/10 px-5 py-3 text-sm font-medium text-white/80 transition hover:border-white/20 hover:text-white"
                >
                  View more case studies
                </Link>
              </div>
            </div>
          </section>
        </div>
      </Container>
    </main>
  );
}
