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

  const hasLiveUrl = Boolean(study.liveUrl);

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

          <section className="mt-8 grid gap-10 lg:grid-cols-[1.15fr_0.85fr] lg:items-start">
            <div>
              <div className="flex flex-wrap gap-3">
                <span className="rounded-full border border-white/10 bg-white/[0.04] px-4 py-2 text-xs uppercase tracking-[0.18em] text-white/55">
                  {study.categoryLabel}
                </span>

                <span className="rounded-full border border-white/10 bg-white/[0.04] px-4 py-2 text-xs uppercase tracking-[0.18em] text-white/55">
                  {study.industry}
                </span>
              </div>

              <h1 className="mt-6 text-3xl font-semibold tracking-tight text-white md:text-5xl md:leading-tight">
                {study.title}
              </h1>

              <p className="mt-6 max-w-3xl text-base leading-7 text-white/70 md:text-lg">
                {study.subtitle}
              </p>

              <div className="mt-8 flex flex-wrap gap-4">
                {hasLiveUrl ? (
                  <Link
                    href={study.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex rounded-2xl bg-white px-5 py-3 text-sm font-medium text-black transition hover:opacity-90"
                  >
                    {study.projectAccess.label}
                  </Link>
                ) : (
                  <span className="inline-flex rounded-2xl border border-white/10 bg-white/[0.04] px-5 py-3 text-sm font-medium text-white/75">
                    {study.projectAccess.label}
                  </span>
                )}

                <Link
                  href="/contact"
                  className="inline-flex rounded-2xl border border-white/10 px-5 py-3 text-sm font-medium text-white/80 transition hover:border-white/20 hover:text-white"
                >
                  {study.cta.primaryText}
                </Link>
              </div>

              {!hasLiveUrl && study.projectAccess.description && (
                <p className="mt-4 max-w-2xl text-sm leading-6 text-white/50">
                  {study.projectAccess.description}
                </p>
              )}
            </div>

            <aside className="rounded-[28px] border border-white/10 bg-white/[0.035] p-6 backdrop-blur-sm">
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

              <div className="mt-6">
                <p className="text-xs uppercase tracking-[0.18em] text-white/40">
                  Access
                </p>
                <p className="mt-2 text-base font-medium text-white">
                  {hasLiveUrl
                    ? "Public live project"
                    : study.projectAccess.label}
                </p>
              </div>

              <div className="mt-6 rounded-2xl border border-white/10 bg-white/[0.05] p-5">
                <p className="text-xs uppercase tracking-[0.18em] text-white/40">
                  Main Result
                </p>
                <p className="mt-3 text-xl font-semibold leading-snug text-white">
                  {study.featuredMetric}
                </p>
              </div>

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
          </section>

          <section className="relative mt-12 overflow-hidden rounded-[32px] border border-white/10 bg-white/[0.03] transition duration-500 hover:border-white/25 hover:bg-white/[0.06] hover:shadow-[0_24px_80px_rgba(0,0,0,0.45)]">
            <Link
              href={hasLiveUrl ? study.liveUrl : study.image}
              target="_blank"
              rel="noopener noreferrer"
              className="group block"
            >
              <div className="relative aspect-[16/9] cursor-pointer overflow-hidden">
                <Image
                  src={study.image}
                  alt={`${study.company} case study preview`}
                  fill
                  className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                  priority
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent transition duration-500 group-hover:from-black/80" />

                <div className="absolute bottom-6 left-6 right-6 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
                  <div>
                    <p className="text-xs uppercase tracking-[0.18em] text-white/50">
                      {study.preview.label}
                    </p>
                    <p className="mt-2 max-w-xl text-lg font-medium text-white">
                      {study.preview.title}
                    </p>
                  </div>

                  <span className="w-fit rounded-full bg-white px-5 py-3 text-sm font-medium text-black shadow-2xl transition duration-300 group-hover:scale-105">
                    {hasLiveUrl ? "Open Full Project →" : "View System Preview →"}
                  </span>
                </div>
              </div>
            </Link>
          </section>

          <section className="mt-14 grid gap-4 md:grid-cols-3">
            {study.proof.map((card) => (
              <article
                key={`${card.label}-${card.value}`}
                className="rounded-2xl border border-white/10 bg-white/[0.03] p-6"
              >
                <p className="text-xs uppercase tracking-[0.18em] text-white/40">
                  {card.label}
                </p>
                <p className="mt-3 text-2xl font-semibold text-white">
                  {card.value}
                </p>
                <p className="mt-4 text-sm leading-7 text-white/65">
                  {card.text}
                </p>
              </article>
            ))}
          </section>

          <section className="mt-14 rounded-[28px] border border-white/10 bg-white/[0.03] p-7 md:p-10">
            <div className="max-w-3xl">
              <p className="text-xs uppercase tracking-[0.18em] text-white/40">
                {study.summarySection.label}
              </p>
              <h2 className="mt-4 text-2xl font-semibold text-white md:text-3xl">
                {study.summarySection.title}
              </h2>
              <p className="mt-6 text-base leading-8 text-white/70">
                {study.summary}
              </p>
            </div>
          </section>

          <section className="mt-14">
            <div className="max-w-3xl">
              <p className="text-xs uppercase tracking-[0.18em] text-white/40">
                {study.transformation.label}
              </p>
              <h2 className="mt-4 text-2xl font-semibold text-white md:text-3xl">
                {study.transformation.title}
              </h2>
            </div>

            <div className="mt-8 grid gap-6 md:grid-cols-2">
              <article className="rounded-[28px] border border-white/10 bg-white/[0.03] p-7">
                <p className="text-sm font-medium text-white">
                  {study.transformation.beforeTitle}
                </p>
                <ul className="mt-5 space-y-4 text-sm leading-7 text-white/68">
                  {study.transformation.before.map((item) => (
                    <li key={item} className="flex gap-3">
                      <span className="mt-[10px] h-1.5 w-1.5 shrink-0 rounded-full bg-white/35" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </article>

              <article className="rounded-[28px] border border-white/10 bg-white/[0.05] p-7">
                <p className="text-sm font-medium text-white">
                  {study.transformation.afterTitle}
                </p>
                <ul className="mt-5 space-y-4 text-sm leading-7 text-white/75">
                  {study.transformation.after.map((item) => (
                    <li key={item} className="flex gap-3">
                      <span className="mt-[10px] h-1.5 w-1.5 shrink-0 rounded-full bg-white" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </article>
            </div>
          </section>

          <section className="mt-14 grid gap-6 md:grid-cols-3">
            <article className="rounded-2xl border border-white/10 bg-white/[0.03] p-6">
              <p className="text-xs uppercase tracking-[0.18em] text-white/40">
                {study.detailSections.challengeLabel}
              </p>
              <p className="mt-4 text-sm leading-7 text-white/72">
                {study.challenge}
              </p>
            </article>

            <article className="rounded-2xl border border-white/10 bg-white/[0.03] p-6">
              <p className="text-xs uppercase tracking-[0.18em] text-white/40">
                {study.detailSections.solutionLabel}
              </p>
              <p className="mt-4 text-sm leading-7 text-white/72">
                {study.solution}
              </p>
            </article>

            <article className="rounded-2xl border border-white/10 bg-white/[0.03] p-6">
              <p className="text-xs uppercase tracking-[0.18em] text-white/40">
                {study.detailSections.componentsLabel}
              </p>
              <ul className="mt-4 space-y-3 text-sm leading-7 text-white/72">
                {study.whatIDid.map((item) => (
                  <li key={item} className="flex gap-3">
                    <span className="mt-[10px] h-1.5 w-1.5 shrink-0 rounded-full bg-white/45" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </article>
          </section>

          <section className="mt-14 rounded-[28px] border border-white/10 bg-white/[0.04] p-7 md:p-10">
            <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
              <div>
                <p className="text-xs uppercase tracking-[0.18em] text-white/40">
                  {study.impact.label}
                </p>
                <h2 className="mt-4 text-2xl font-semibold text-white md:text-3xl">
                  {study.impact.title}
                </h2>
                <p className="mt-6 text-base leading-8 text-white/70">
                  {study.impact.description}
                </p>
              </div>

              <div className="grid gap-4 sm:grid-cols-2">
                {study.impact.items.map((item) => (
                  <div
                    key={item}
                    className="rounded-2xl border border-white/10 bg-black/20 p-4"
                  >
                    <p className="text-sm font-medium text-white/80">{item}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>

          <section className="mt-14">
            <div>
              <p className="text-xs uppercase tracking-[0.18em] text-white/40">
                {study.outcomesSection.label}
              </p>
              <h2 className="mt-3 text-2xl font-semibold text-white md:text-3xl">
                {study.outcomesSection.title}
              </h2>
            </div>

            <div className="mt-8 grid gap-4 md:grid-cols-2">
              {study.outcome.map((item) => (
                <article
                  key={item}
                  className="rounded-2xl border border-white/10 bg-white/[0.03] p-6 transition hover:border-white/20 hover:bg-white/[0.05]"
                >
                  <p className="text-sm leading-7 text-white/78">{item}</p>
                </article>
              ))}
            </div>
          </section>

          <section className="mt-16 overflow-hidden rounded-[32px] border border-white/10 bg-white/[0.05] p-8 md:p-10">
            <div className="max-w-3xl">
              <p className="text-xs uppercase tracking-[0.18em] text-white/40">
                {study.cta.label}
              </p>
              <h2 className="mt-4 text-2xl font-semibold text-white md:text-4xl md:leading-tight">
                {study.cta.title}
              </h2>
              <p className="mt-5 text-base leading-8 text-white/70">
                {study.cta.description}
              </p>

              <div className="mt-8 flex flex-wrap gap-4">
                <Link
                  href="/contact"
                  className="inline-flex rounded-2xl bg-white px-5 py-3 text-sm font-medium text-black transition hover:opacity-90"
                >
                  {study.cta.primaryText}
                </Link>

                <Link
                  href="/work"
                  className="inline-flex rounded-2xl border border-white/10 px-5 py-3 text-sm font-medium text-white/80 transition hover:border-white/20 hover:text-white"
                >
                  {study.cta.secondaryText}
                </Link>
              </div>
            </div>
          </section>
        </div>
      </Container>
    </main>
  );
}