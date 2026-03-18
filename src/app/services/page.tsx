import { Container } from "@/components/ui/Container";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { packages, primaryCta } from "@/lib/siteContent";
import Link from "next/link";

const pillars = [
  "Web Platforms",
  "Automation Systems",
  "Rebuilds & Upgrades",
];

export default function ServicesPage() {
  return (
    <main className="py-16 md:py-24">
      <Container>
        <SectionTitle
          eyebrow="Services"
          title="Web platforms, rebuilds, and automation systems"
          desc="Clear scope, measurable outcomes, and maintainable delivery."
        />

        <div className="mt-10 grid gap-4 md:grid-cols-3">
          {pillars.map((pillar) => (
            <article key={pillar} className="rounded-2xl bg-white/5 p-6 ring-1 ring-white/10">
              <h2 className="text-lg font-semibold text-white">{pillar}</h2>
            </article>
          ))}
        </div>

        <div className="mt-10 grid gap-4 md:grid-cols-2">
          {packages.map((pkg) => (
            <article key={pkg.name} className="rounded-2xl bg-white/5 p-7 ring-1 ring-white/10">
              {/* <p className="text-xs uppercase tracking-[0.2em] text-white/45">{pkg.level}</p> */}
              <h3 className="mt-3 text-xl font-semibold text-white">{pkg.name}</h3>
              <p className="mt-3 text-sm text-white/65"><span className="text-white/45">Best for:</span> {pkg.bestFor}</p>
              <ul className="mt-4 space-y-2 text-sm text-white/70">
                {pkg.includes.map((item) => (
                  <li key={item}>- {item}</li>
                ))}
              </ul>
              <Link href={pkg.cta.href} className="mt-5 inline-flex rounded-2xl bg-white/10 px-5 py-3 text-sm font-medium text-white ring-1 ring-white/15 hover:bg-white/15">
                {pkg.cta.label}
              </Link>
            </article>
          ))}
        </div>

        <div className="mt-10 rounded-2xl bg-white/5 p-7 ring-1 ring-white/10">
          <h3 className="text-xl font-semibold text-white">Primary engagement path</h3>
          <p className="mt-3 text-sm text-white/65">Most projects start with a short strategy call to identify the business bottleneck, define scope, and decide whether the right next step is a rebuild, platform build, or automation project.</p>
          <Link href={primaryCta.href} className="mt-5 inline-flex rounded-2xl bg-white px-5 py-3 text-sm font-medium text-black transition hover:opacity-90">
            {primaryCta.label}
          </Link>
        </div>
      </Container>
    </main>
  );
}
