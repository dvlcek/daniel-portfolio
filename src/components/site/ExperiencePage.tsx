import Link from "next/link";
import { ArrowRight } from "lucide-react";

export function PageEyebrow({ children, light = false }: { children: React.ReactNode; light?: boolean }) {
  return (
    <p className={`text-[10px] font-semibold uppercase tracking-[0.22em] ${light ? "text-white/38" : "text-[#738096]"}`}>
      {children}
    </p>
  );
}

export function ExperienceHero({
  eyebrow,
  title,
  description,
  aside,
}: {
  eyebrow: string;
  title: string;
  description: string;
  aside?: React.ReactNode;
}) {
  return (
    <section className="experience-page-hero relative isolate overflow-hidden bg-[#06101b] px-5 pb-20 pt-32 text-white sm:px-8 md:pb-24 md:pt-36 lg:px-14 xl:px-20">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_4%,rgba(73,132,194,0.14),transparent_32%),linear-gradient(180deg,#07111d_0%,#06101b_100%)]" />
      <div className="experience-page-horizon absolute inset-x-[-18%] bottom-[-72%] h-[112%] rounded-[50%]" aria-hidden="true" />
      <div className="experience-page-grid pointer-events-none absolute inset-0" aria-hidden="true" />

      <div className="relative z-10 mx-auto max-w-[1160px]">
        <div className={`grid gap-10 ${aside ? "lg:grid-cols-[1fr_0.48fr] lg:items-end" : ""}`}>
          <div data-page-hero-copy className="max-w-[900px]">
            <PageEyebrow light>{eyebrow}</PageEyebrow>
            <h1 className="mt-5 text-balance text-[clamp(2.7rem,6vw,5.4rem)] font-semibold leading-[0.96] tracking-[-0.055em]">
              {title}
            </h1>
            <p className="mt-6 max-w-[690px] text-balance text-[14px] leading-7 text-white/56 sm:text-[16px]">
              {description}
            </p>
          </div>
          {aside ? <div data-page-reveal>{aside}</div> : null}
        </div>
      </div>
    </section>
  );
}

export function ExperienceClose({
  eyebrow = "Next Step",
  title,
  description,
  primaryLabel = "Discuss your system",
  primaryHref = "/contact",
  secondaryLabel,
  secondaryHref,
}: {
  eyebrow?: string;
  title: string;
  description: string;
  primaryLabel?: string;
  primaryHref?: string;
  secondaryLabel?: string;
  secondaryHref?: string;
}) {
  return (
    <section className="relative isolate overflow-hidden bg-[#06101b] px-5 py-24 text-white sm:px-8 md:py-28 lg:px-14 xl:px-20">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_18%,rgba(73,132,194,0.13),transparent_32%),linear-gradient(180deg,#07111d,#06101b)]" />
      <div className="experience-page-horizon absolute inset-x-[-12%] bottom-[-85%] h-[118%] rounded-[50%] opacity-70" aria-hidden="true" />
      <div data-page-reveal className="relative z-10 mx-auto max-w-[820px] text-center">
        <PageEyebrow light>{eyebrow}</PageEyebrow>
        <h2 className="mt-5 text-balance text-[clamp(2rem,4vw,3.6rem)] font-semibold leading-[1] tracking-[-0.05em]">{title}</h2>
        <p className="mx-auto mt-5 max-w-[620px] text-[13px] leading-6 text-white/50 sm:text-[14px]">{description}</p>
        <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <Link href={primaryHref} className="group inline-flex h-12 items-center gap-2 rounded-full bg-white px-6 text-[12px] font-semibold text-[#07111d] shadow-[0_16px_40px_rgba(0,0,0,0.2)] transition hover:-translate-y-0.5">
            {primaryLabel}
            <ArrowRight size={14} className="transition-transform group-hover:translate-x-0.5" />
          </Link>
          {secondaryLabel && secondaryHref ? (
            <Link href={secondaryHref} className="group inline-flex h-12 items-center gap-2 rounded-full border border-white/14 bg-white/[0.035] px-6 text-[12px] font-semibold text-white/72 backdrop-blur-xl transition hover:bg-white/[0.07] hover:text-white">
              {secondaryLabel}
              <ArrowRight size={14} className="transition-transform group-hover:translate-x-0.5" />
            </Link>
          ) : null}
        </div>
      </div>
    </section>
  );
}
