import { notFound } from "next/navigation";
import { Container } from "@/components/ui/Container";
import { caseStudies, primaryCta } from "@/lib/siteContent";
import Link from "next/link";

type Props = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return caseStudies.map((study) => ({ slug: study.slug }));
}

export default async function CaseStudyPage({ params }: Props) {
  const { slug } = await params;
  const study = caseStudies.find((entry) => entry.slug === slug);

  if (!study) {
    notFound();
  }

  return (
    <main className="py-16 md:py-24">
      <Container>
        <p className="text-xs uppercase tracking-[0.2em] text-white/45">Case Study</p>
        <h1 className="mt-4 max-w-4xl text-3xl font-semibold tracking-tight text-white md:text-5xl">{study.result}</h1>
        <p className="mt-6 max-w-3xl text-base text-white/70">{study.summary}</p>

        <div className="mt-10 grid gap-4 md:grid-cols-3">
          <div className="rounded-2xl bg-white/5 p-6 ring-1 ring-white/10 md:col-span-2">
            <h2 className="text-lg font-semibold text-white">Challenge</h2>
            <p className="mt-3 text-sm leading-relaxed text-white/70">{study.challenge}</p>

            <h2 className="mt-7 text-lg font-semibold text-white">Solution</h2>
            <p className="mt-3 text-sm leading-relaxed text-white/70">{study.solution}</p>

            <h2 className="mt-7 text-lg font-semibold text-white">Outcome</h2>
            <ul className="mt-3 space-y-2 text-sm text-white/70">
              {study.outcome.map((item) => (
                <li key={item}>- {item}</li>
              ))}
            </ul>
          </div>

          <aside className="rounded-2xl bg-white/5 p-6 ring-1 ring-white/10">
            <p className="text-xs uppercase tracking-[0.2em] text-white/45">Project Snapshot</p>
            <p className="mt-4 text-sm text-white/65"><span className="text-white/45">Company:</span> {study.company}</p>
            <p className="mt-2 text-sm text-white/65"><span className="text-white/45">Industry:</span> {study.industry}</p>
            <p className="mt-2 text-sm text-white/65"><span className="text-white/45">What I did:</span> {study.whatIDid.join(", ")}</p>
            <p className="mt-2 text-sm text-white/65"><span className="text-white/45">Stack:</span> {study.stack.join(", ")}</p>

            <Link href={primaryCta.href} className="mt-6 inline-flex rounded-2xl bg-white px-4 py-2 text-sm font-medium text-black transition hover:opacity-90">
              {primaryCta.label}
            </Link>
          </aside>
        </div>
      </Container>
    </main>
  );
}
