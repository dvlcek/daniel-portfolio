import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { caseStudies } from "@/lib/siteContent";

export function FeaturedOutcomes() {
  const featured = caseStudies.slice(0, 3);
  return (
    <section className="section relative" id="work">
      <Container>
        <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <SectionTitle eyebrow="Selected systems" title="Systems built for clarity, conversion, and operational speed." desc="Each project is framed around the business problem, the system architecture, and what became easier after delivery." className="mb-0" />
          <Link href="/work" className="inline-flex w-fit items-center gap-2 text-sm font-semibold text-[#E5E0D4] transition hover:text-white">View all work <ArrowUpRight size={16} /></Link>
        </div>
        <div className="mt-10 grid gap-5 lg:grid-cols-3">
          {featured.map((study) => (
            <Link key={study.slug} href={`/work/${study.slug}`} className="group glass-panel relative overflow-hidden rounded-[28px] transition duration-300 hover:-translate-y-1 hover:border-[rgba(242,239,230,0.22)]">
              <div className="relative aspect-[16/10] overflow-hidden border-b border-[rgba(242,239,230,0.08)]">
                <Image src={study.image} alt={`${study.company} preview`} fill className="object-cover opacity-78 transition duration-700 group-hover:scale-[1.025]" sizes="(min-width:1024px) 33vw, 100vw" />
                <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-[#050505]/20 to-transparent" />
                <span className="absolute left-4 top-4 rounded-full border border-[rgba(242,239,230,0.14)] bg-[#050505]/55 px-3 py-1.5 font-mono text-[0.65rem] uppercase tracking-[0.08em] text-[#E5E0D4] backdrop-blur-xl">{study.categoryLabel}</span>
              </div>
              <article className="p-6">
                <p className="micro-label text-[#8E9188]">{study.company}</p>
                <h3 className="mt-4 text-2xl font-semibold leading-tight tracking-[-0.03em] text-[#F2EFE6]">{study.title}</h3>
                <p className="mt-4 line-clamp-3 text-sm leading-7 text-[#B8B1A4]">{study.result}</p>
                <div className="mt-5 flex flex-wrap gap-2">
                  {study.stack.slice(0, 3).map((item) => <span key={item} className="rounded-full border border-[rgba(242,239,230,0.09)] px-3 py-1 text-xs text-[#8E9188]">{item}</span>)}
                </div>
                <div className="mt-6 flex items-center justify-between border-t border-[rgba(242,239,230,0.08)] pt-5 text-sm font-semibold text-[#E5E0D4]">
                  View system <ArrowUpRight size={15} className="transition group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </div>
              </article>
            </Link>
          ))}
        </div>
      </Container>
    </section>
  );
}
