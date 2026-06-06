import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowUpRight, Check, ExternalLink } from "lucide-react";
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
      robots: {
        index: false,
        follow: false,
      },
    };
  }

  const description = study.result || study.intro || study.summary;
  const canonical = `/work/${study.slug}`;

  return {
    title: `${study.title} Case Study`,
    description,
    alternates: {
      canonical,
    },
    openGraph: {
      title: `${study.title} | Daniel Vlcek Case Study`,
      description,
      url: canonical,
      type: "article",
      images: [
        {
          url: study.image,
          alt: `${study.company} case study preview`,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: `${study.title} | Daniel Vlcek`,
      description,
      images: [study.image],
    },
  } satisfies Metadata;
}

function createBreadcrumbJsonLd(study: (typeof caseStudies)[number]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: "https://danielvlcek.com",
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "Work",
        item: "https://danielvlcek.com/work",
      },
      {
        "@type": "ListItem",
        position: 3,
        name: study.title,
        item: `https://danielvlcek.com/work/${study.slug}`,
      },
    ],
  };
}

export default async function CaseStudyDetailPage({ params }: PageProps) {
  const { slug } = await params;
  const study = caseStudies.find((item) => item.slug === slug);

  if (!study) {
    notFound();
  }

  const liveUrl = study.liveUrl ?? "";
  const hasLiveUrl = Boolean(liveUrl);
  const stackPreview = study.stack.slice(0, 8);
  const breadcrumbJsonLd = createBreadcrumbJsonLd(study);

  return (
    <main className="relative min-h-screen overflow-hidden bg-site-bg pt-28 pb-16 md:pt-32 md:pb-24">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />

      <div className="pointer-events-none absolute inset-0">
        <div className="absolute inset-x-0 top-0 h-px bg-linear-to-r from-transparent via-black/10 to-transparent" />
        <div className="absolute -left-40 top-24 h-96 w-96 rounded-full bg-brand-blue/7 blur-3xl" />
        <div className="absolute -right-48 top-[32rem] h-[32rem] w-[32rem] rounded-full bg-brand-blue-deep/18 blur-3xl" />
        <div className="absolute inset-x-0 bottom-0 h-96 bg-linear-to-t from-site-bg-deep/70 to-transparent" />
      </div>

      <Container className="relative z-10 max-w-7xl">
        <Link
          href="/work"
          className="inline-flex items-center gap-2 text-sm text-cream/48 transition-colors duration-300 hover:text-cream"
        >
          <ArrowLeft size={15} />
          Back to work
        </Link>

        {/* Hero */}
        <section className="mt-10 grid gap-10 border-b border-black/[0.08] pb-12 lg:grid-cols-[1fr_0.42fr] lg:items-start md:pb-14">
          <div>
            <div className="flex flex-wrap gap-3">
              <span className="rounded-full border border-brand-blue/25 bg-brand-blue/10 px-4 py-2 text-xs uppercase tracking-[0.18em] text-brand-blue-light">
                {study.categoryLabel}
              </span>

              <span className="rounded-full border border-black/[0.08] bg-white/55 px-4 py-2 text-xs uppercase tracking-[0.18em] text-cream/52">
                {study.industry}
              </span>
            </div>

            <h1 className="mt-7 max-w-5xl text-balance text-4xl font-semibold tracking-tight text-cream md:text-6xl md:leading-[1.04]">
              {study.title}
            </h1>

            <p className="mt-6 max-w-3xl text-base leading-8 text-cream/62 md:text-lg">
              {study.subtitle}
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              {hasLiveUrl ? (
                <Link
                  href={liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-full bg-cream px-5 py-3 text-sm font-semibold text-site-bg shadow-[0_18px_48px_rgba(242,239,230,0.12)] transition duration-300 hover:-translate-y-0.5 hover:bg-[#0D0E0C]"
                >
                  {study.projectAccess.label}
                  <ExternalLink size={14} />
                </Link>
              ) : (
                <span className="inline-flex rounded-2xl border border-black/[0.08] bg-white/58 px-5 py-3 text-sm font-medium text-cream/65">
                  {study.projectAccess.label}
                </span>
              )}

              <Link
                href="/contact"
                className="inline-flex items-center gap-2 rounded-2xl border border-black/[0.10] bg-white/55 px-5 py-3 text-sm font-medium text-cream/72 transition duration-300 hover:border-brand-blue/25 hover:text-cream"
              >
                {study.cta.primaryText}
                <ArrowUpRight size={14} />
              </Link>
            </div>

            {!hasLiveUrl && study.projectAccess.description ? (
              <p className="mt-4 max-w-2xl text-sm leading-6 text-cream/42">
                {study.projectAccess.description}
              </p>
            ) : null}
          </div>

          <aside className="rounded-[1.75rem] border border-black/[0.08] bg-white/58 p-6 backdrop-blur-xl">
            <p className="text-xs uppercase tracking-[0.22em] text-cream/32">
              Project snapshot
            </p>

            <div className="mt-6 space-y-5">
              <MetaItem label="Client" value={study.company} />
              <MetaItem label="Industry" value={study.industry} />
              <MetaItem
                label="Access"
                value={hasLiveUrl ? "Public live project" : study.projectAccess.label}
              />
            </div>

            {study.featuredMetric ? (
              <div className="mt-6 rounded-2xl border border-brand-blue/20 bg-brand-blue/[0.055] p-5">
                <p className="text-xs uppercase tracking-[0.18em] text-brand-blue-light/75">
                  Main result
                </p>

                <p className="mt-3 text-xl font-semibold leading-snug text-cream">
                  {study.featuredMetric}
                </p>
              </div>
            ) : null}

            <div className="mt-6">
              <p className="text-xs uppercase tracking-[0.18em] text-cream/32">
                Tech used
              </p>

              <div className="mt-3 flex flex-wrap gap-2">
                {stackPreview.map((item) => (
                  <span
                    key={item}
                    className="rounded-full border border-black/[0.08] bg-white/55 px-3 py-1 text-xs text-cream/52"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          </aside>
        </section>

        {/* Preview */}
        <section className="mt-12">
          {hasLiveUrl ? (
            <Link
              href={liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="group block overflow-hidden rounded-[2rem] border border-black/[0.08] bg-white/58 transition-[border-color,background-color,box-shadow] duration-300 hover:border-brand-blue/25 hover:bg-white/72 hover:shadow-[0_24px_90px_rgba(0,0,0,0.28)]"
            >
              <ProjectPreviewImage
                image={study.image}
                alt={`${study.company} case study preview`}
                label={study.preview.label}
                title={study.preview.title}
                action="Open live project"
                clickable
              />
            </Link>
          ) : (
            <div className="overflow-hidden rounded-[2rem] border border-black/[0.08] bg-white/58">
              <ProjectPreviewImage
                image={study.image}
                alt={`${study.company} case study preview`}
                label={study.preview.label}
                title={study.preview.title}
                action="Internal project preview"
              />
            </div>
          )}
        </section>

        {/* Proof */}
        {study.proof.length > 0 ? (
          <section className="mt-8 grid gap-4 md:grid-cols-3">
            {study.proof.map((card) => (
              <article
                key={`${card.label}-${card.value}`}
                className="rounded-3xl border border-black/[0.08] bg-white/58 p-6"
              >
                <p className="text-xs uppercase tracking-[0.18em] text-cream/32">
                  {card.label}
                </p>

                <p className="mt-3 text-2xl font-semibold tracking-tight text-cream">
                  {card.value}
                </p>

                <p className="mt-4 text-sm leading-7 text-cream/55">
                  {card.text}
                </p>
              </article>
            ))}
          </section>
        ) : null}

        {/* Summary */}
        <section className="mt-16 grid gap-8 border-t border-black/[0.08] pt-12 lg:grid-cols-[0.35fr_1fr]">
          <SectionLabel
            eyebrow={study.summarySection.label}
            title={study.summarySection.title}
          />

          <p className="max-w-4xl text-lg leading-9 text-cream/66 md:text-xl">
            {study.summary}
          </p>
        </section>

        {/* Transformation */}
        <section className="mt-16">
          <SectionLabel
            eyebrow={study.transformation.label}
            title={study.transformation.title}
          />

          <div className="mt-8 grid gap-5 md:grid-cols-2">
            <ComparisonCard
              label="Before"
              title={study.transformation.beforeTitle}
              items={study.transformation.before}
              muted
            />

            <ComparisonCard
              label="After"
              title={study.transformation.afterTitle}
              items={study.transformation.after}
            />
          </div>
        </section>

        {/* Challenge / Solution / Components */}
        <section className="mt-16 grid gap-5 lg:grid-cols-3">
            <TextCard
            label="Business problem"
            text={study.challenge}
          />

          <TextCard
            label="System built"
            text={study.solution}
          />

          <article className="rounded-3xl border border-black/[0.08] bg-white/58 p-6 md:p-7">
            <p className="text-xs uppercase tracking-[0.2em] text-cream/32">
              What was included
            </p>

            <ul className="mt-5 space-y-3">
              {study.whatIDid.map((item) => (
                <li
                  key={item}
                  className="flex gap-3 text-sm leading-7 text-cream/62"
                >
                  <span className="mt-[10px] h-1.5 w-1.5 shrink-0 rounded-full bg-brand-blue-light" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </article>
        </section>

        {/* Impact */}
        <section className="mt-16 overflow-hidden rounded-[2rem] border border-black/[0.08] bg-white/58 p-6 md:p-8 lg:p-10">
          <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
            <div>
              <p className="text-xs uppercase tracking-[0.22em] text-brand-blue">
                {study.impact.label}
              </p>

              <h2 className="mt-4 max-w-xl text-3xl font-semibold tracking-tight text-cream md:text-4xl">
                {study.impact.title}
              </h2>

              <p className="mt-6 max-w-2xl text-base leading-8 text-cream/60">
                {study.impact.description}
              </p>
            </div>

            <div className="grid gap-3 sm:grid-cols-2">
              {study.impact.items.map((item) => (
                <div
                  key={item}
                  className="rounded-2xl border border-black/[0.08] bg-site-bg/50 p-4"
                >
                  <div className="flex gap-3">
                    <span className="mt-1 flex h-5 w-5 shrink-0 items-center justify-center rounded-lg border border-brand-blue/25 bg-brand-blue/10 text-brand-blue-light">
                      <Check size={12} />
                    </span>

                    <p className="text-sm leading-6 text-cream/66">{item}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Outcomes */}
        <section className="mt-16 grid gap-8 lg:grid-cols-[0.35fr_1fr]">
          <SectionLabel
            eyebrow={study.outcomesSection.label}
            title={study.outcomesSection.title}
          />

          <div className="grid gap-3">
            {study.outcome.map((item, index) => (
              <article
                key={item}
                className="grid gap-4 border-t border-black/[0.08] py-5 md:grid-cols-[80px_1fr]"
              >
                <p className="font-mono text-xs text-brand-blue-light">
                  {String(index + 1).padStart(2, "0")}
                </p>

                <p className="max-w-3xl text-sm leading-7 text-cream/66 md:text-base">
                  {item}
                </p>
              </article>
            ))}
          </div>
        </section>

        {/* CTA */}
        <section className="mt-18 border-y border-black/[0.08] py-10 md:mt-20 md:py-12">
          <div className="grid gap-8 lg:grid-cols-[1fr_auto] lg:items-center">
            <div>
              <p className="text-xs uppercase tracking-[0.22em] text-brand-blue">
                {study.cta.label}
              </p>

              <h2 className="mt-4 max-w-3xl text-3xl font-semibold tracking-tight text-cream md:text-4xl">
                {study.cta.title}
              </h2>

              <p className="mt-5 max-w-3xl text-base leading-8 text-cream/58">
                {study.cta.description}
              </p>
            </div>

            <div className="flex flex-wrap gap-3 lg:justify-end">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 rounded-full bg-cream px-5 py-3 text-sm font-semibold text-site-bg shadow-[0_18px_48px_rgba(242,239,230,0.12)] transition duration-300 hover:-translate-y-0.5 hover:bg-[#0D0E0C]"
              >
                {study.cta.primaryText}
                <ArrowUpRight size={14} />
              </Link>

              <Link
                href="/work"
                className="inline-flex rounded-2xl border border-black/[0.10] bg-white/55 px-5 py-3 text-sm font-medium text-cream/70 transition duration-300 hover:border-brand-blue/25 hover:text-cream"
              >
                {study.cta.secondaryText}
              </Link>
            </div>
          </div>
        </section>
      </Container>
    </main>
  );
}

function ProjectPreviewImage({
  image,
  alt,
  label,
  title,
  action,
  clickable = false,
}: {
  image: string;
  alt: string;
  label: string;
  title: string;
  action: string;
  clickable?: boolean;
}) {
  return (
    <div className="relative aspect-[16/9] overflow-hidden">
      <Image
        src={image}
        alt={alt}
        fill
        priority
        className={[
          "object-cover transition-transform duration-700 ease-out",
          clickable ? "group-hover:scale-[1.035]" : "",
        ].join(" ")}
      />

      <div className="absolute inset-0 bg-linear-to-t from-site-bg via-site-bg/18 to-transparent" />

      <div className="absolute bottom-5 left-5 right-5 flex flex-col gap-4 md:bottom-6 md:left-6 md:right-6 md:flex-row md:items-end md:justify-between">
        <div>
          <p className="text-xs uppercase tracking-[0.2em] text-cream/45">
            {label}
          </p>

          <p className="mt-2 max-w-2xl text-lg font-medium leading-snug text-cream md:text-xl">
            {title}
          </p>
        </div>

        <span
          className={[
            "w-fit rounded-full border px-4 py-2 text-sm font-medium backdrop-blur-xl",
            clickable
              ? "border-brand-blue/30 bg-brand-blue/10 text-brand-blue-light"
              : "border-black/[0.12] bg-site-bg/55 text-cream/58",
          ].join(" ")}
        >
          {action}
        </span>
      </div>
    </div>
  );
}

function MetaItem({ label, value }: { label: string; value: string }) {
  return (
    <div className="border-b border-black/[0.07] pb-5 last:border-b-0 last:pb-0">
      <p className="text-xs uppercase tracking-[0.18em] text-cream/30">
        {label}
      </p>

      <p className="mt-2 text-sm font-medium text-cream/72">{value}</p>
    </div>
  );
}

function SectionLabel({
  eyebrow,
  title,
}: {
  eyebrow: string;
  title: string;
}) {
  return (
    <div>
      <p className="text-xs uppercase tracking-[0.22em] text-brand-blue">
        {eyebrow}
      </p>

      <h2 className="mt-4 max-w-xl text-2xl font-semibold tracking-tight text-cream md:text-3xl">
        {title}
      </h2>
    </div>
  );
}

function ComparisonCard({
  label,
  title,
  items,
  muted = false,
}: {
  label: string;
  title: string;
  items: string[];
  muted?: boolean;
}) {
  return (
    <article
      className={[
        "rounded-[1.75rem] border p-6 md:p-7",
        muted
          ? "border-black/[0.08] bg-white/55"
          : "border-brand-blue/18 bg-brand-blue/[0.035]",
      ].join(" ")}
    >
      <p
        className={[
          "text-xs uppercase tracking-[0.22em]",
          muted ? "text-cream/32" : "text-brand-blue-light",
        ].join(" ")}
      >
        {label}
      </p>

      <h3 className="mt-4 text-xl font-semibold tracking-tight text-cream">
        {title}
      </h3>

      <ul className="mt-6 space-y-4">
        {items.map((item) => (
          <li key={item} className="flex gap-3 text-sm leading-7 text-cream/62">
            <span
              className={[
                "mt-[10px] h-1.5 w-1.5 shrink-0 rounded-full",
                muted ? "bg-white/35" : "bg-brand-blue-light",
              ].join(" ")}
            />

            <span>{item}</span>
          </li>
        ))}
      </ul>
    </article>
  );
}

function TextCard({ label, text }: { label: string; text: string }) {
  return (
    <article className="rounded-3xl border border-black/[0.08] bg-white/58 p-6 md:p-7">
      <p className="text-xs uppercase tracking-[0.2em] text-cream/32">
        {label}
      </p>

      <p className="mt-5 text-sm leading-7 text-cream/64">{text}</p>
    </article>
  );
}
