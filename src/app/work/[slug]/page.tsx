import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowUpRight, Check, ExternalLink } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Badge } from "@/components/ui/Badge";
import { CtaPanel } from "@/components/ui/CtaPanel";
import { SystemCard } from "@/components/ui/SystemCard";
import { SystemFlow } from "@/components/visuals/SystemFlow";
import { caseStudies } from "@/lib/siteContent";

type PageProps = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return caseStudies.map((study) => ({ slug: study.slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const study = caseStudies.find((entry) => entry.slug === slug);
  if (!study) return { title: "Case Study" };
  return {
    title: `${study.title} | Case Study`,
    description: study.subtitle,
    alternates: { canonical: `/work/${study.slug}` },
    openGraph: { title: `${study.title} | Daniel Vlcek`, description: study.subtitle, url: `/work/${study.slug}`, type: "article", images: [{ url: study.image, alt: `${study.company} preview` }] },
  };
}

export default async function CaseStudyDetailPage({ params }: PageProps) {
  const { slug } = await params;
  const study = caseStudies.find((entry) => entry.slug === slug);
  if (!study) notFound();
  const hasLiveUrl = Boolean(study.liveUrl);

  return (
    <main className="site-page">
      <section className="relative overflow-hidden pt-36 pb-14 md:pt-44 md:pb-20">
        <Container>
          <Link href="/work" className="inline-flex items-center gap-2 text-sm text-[#8E9188] transition hover:text-[#F2EFE6]"><ArrowLeft size={15} /> Back to work</Link>
          <div className="mt-10 grid gap-10 lg:grid-cols-[1fr_0.44fr] lg:items-start">
            <div>
              <div className="flex flex-wrap gap-3"><Badge>{study.categoryLabel}</Badge><span className="rounded-full border border-[rgba(242,239,230,0.12)] bg-[rgba(242,239,230,0.04)] px-3.5 py-2 font-mono text-[0.72rem] uppercase tracking-[0.08em] text-[#B8B1A4]">{study.industry}</span></div>
              <h1 className="page-heading mt-7 max-w-6xl">{study.title}</h1>
              <p className="body-large mt-6 max-w-3xl">{study.subtitle}</p>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                {hasLiveUrl ? <Link href={study.liveUrl} target="_blank" rel="noopener noreferrer" className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full bg-[#F2EFE6] px-6 py-3 text-sm font-semibold text-[#050505] transition hover:-translate-y-0.5">{study.projectAccess.label}<ExternalLink size={15} /></Link> : <span className="inline-flex min-h-12 items-center justify-center rounded-full border border-[rgba(242,239,230,0.14)] bg-[rgba(242,239,230,0.06)] px-6 py-3 text-sm font-semibold text-[#E5E0D4]">{study.projectAccess.label}</span>}
                <Link href="/contact" className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full border border-[rgba(242,239,230,0.14)] bg-[rgba(242,239,230,0.06)] px-6 py-3 text-sm font-semibold text-[#F2EFE6] transition hover:-translate-y-0.5">{study.cta.primaryText}<ArrowUpRight size={15} /></Link>
              </div>
            </div>
            <aside className="glass-panel rounded-[28px] p-6">
              <p className="micro-label">Project snapshot</p>
              <div className="mt-6 space-y-5">
                <Meta label="Client" value={study.company} />
                <Meta label="Industry" value={study.industry} />
                <Meta label="System Type" value={study.categoryLabel} />
              </div>
              <div className="mt-6 rounded-2xl border border-[#C16A3A]/20 bg-[#C16A3A]/10 p-5"><p className="micro-label text-[#E5E0D4]">Main result</p><p className="mt-3 text-xl font-semibold text-[#F2EFE6]">{study.featuredMetric}</p></div>
            </aside>
          </div>
        </Container>
      </section>

      <Container>
        <div className="relative overflow-hidden rounded-[32px] border border-[rgba(242,239,230,0.10)] bg-[#0D0E0C]">
          <div className="relative aspect-[16/8] min-h-[320px]"><Image src={study.image} alt={`${study.company} case study visual`} fill priority className="object-cover opacity-80" /><div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-transparent to-[#050505]/20" /></div>
        </div>
      </Container>

      <section className="section">
        <Container>
          <div className="grid gap-5 lg:grid-cols-3">
            {study.proof.map((item) => <SystemCard key={item.label}><p className="micro-label text-[#C16A3A]">{item.label}</p><h2 className="mt-4 text-3xl font-semibold text-[#F2EFE6]">{item.value}</h2><p className="mt-4 text-sm leading-7 text-[#B8B1A4]">{item.text}</p></SystemCard>)}
          </div>
        </Container>
      </section>

      <section className="section-compact">
        <Container>
          <div className="grid gap-5 lg:grid-cols-3">
            <TextBlock label="Context" title={study.summarySection.title} text={study.intro} />
            <TextBlock label={study.detailSections.challengeLabel} title="Business challenge" text={study.challenge} />
            <TextBlock label={study.detailSections.solutionLabel} title="System solution" text={study.solution} />
          </div>
        </Container>
      </section>

      <section className="section-compact">
        <Container>
          <div className="grid gap-10 lg:grid-cols-[0.78fr_1.22fr] lg:items-center">
            <div><p className="micro-label text-[#C16A3A]">System architecture</p><h2 className="section-heading mt-4">Frontend, data, automation, workflow, and reporting layers connected.</h2><p className="body-large mt-6">The project is presented as a business system rather than a screen-only portfolio item.</p></div>
            <SystemFlow />
          </div>
        </Container>
      </section>

      <section className="section-compact">
        <Container>
          <div className="grid gap-5 lg:grid-cols-2">
            <Comparison title={study.transformation.beforeTitle} items={study.transformation.before} />
            <Comparison title={study.transformation.afterTitle} items={study.transformation.after} active />
          </div>
        </Container>
      </section>

      <section className="section-compact">
        <Container>
          <div className="glass-panel rounded-[28px] p-6 md:p-10">
            <p className="micro-label text-[#C16A3A]">{study.outcomesSection.label}</p>
            <h2 className="section-heading mt-4">{study.outcomesSection.title}</h2>
            <div className="mt-8 grid gap-3 md:grid-cols-2">
              {study.outcome.map((item) => <p key={item} className="flex gap-3 rounded-2xl border border-[rgba(242,239,230,0.08)] bg-[#050505]/35 p-4 text-sm leading-7 text-[#B8B1A4]"><Check size={16} className="mt-1 shrink-0 text-[#C16A3A]" />{item}</p>)}
            </div>
          </div>
        </Container>
      </section>
      <section className="section-compact"><Container><CtaPanel eyebrow={study.cta.label} title={study.cta.title} description={study.cta.description} primaryLabel={study.cta.primaryText} secondaryLabel={study.cta.secondaryText} /></Container></section>
    </main>
  );
}

function Meta({ label, value }: { label: string; value: string }) { return <div><p className="micro-label text-[#6F766E]">{label}</p><p className="mt-1 text-sm font-semibold text-[#F2EFE6]">{value}</p></div>; }
function TextBlock({ label, title, text }: { label: string; title: string; text: string }) { return <SystemCard><p className="micro-label text-[#C16A3A]">{label}</p><h2 className="mt-4 text-2xl font-semibold tracking-[-0.03em] text-[#F2EFE6]">{title}</h2><p className="mt-5 text-sm leading-7 text-[#B8B1A4]">{text}</p></SystemCard>; }
function Comparison({ title, items, active }: { title: string; items: string[]; active?: boolean }) { return <div className={`rounded-[28px] border p-6 md:p-8 ${active ? "border-[#C16A3A]/24 bg-[#C16A3A]/[0.045]" : "border-[rgba(242,239,230,0.10)] bg-[rgba(242,239,230,0.035)]"}`}><h3 className="text-2xl font-semibold text-[#F2EFE6]">{title}</h3><div className="mt-6 grid gap-3">{items.map((item) => <p key={item} className="flex gap-3 text-sm leading-7 text-[#B8B1A4]"><span className={`mt-2 h-1.5 w-1.5 shrink-0 rounded-full ${active ? "bg-[#C16A3A]" : "bg-[#6F766E]"}`} />{item}</p>)}</div></div>; }
