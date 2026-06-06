import type { Metadata } from "next";
import { Container } from "@/components/ui/Container";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { packages, primaryCta } from "@/lib/siteContent";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Services | Business Platforms, Websites & Automation",
  description:
    "Websites, business platforms, automation systems, and redesigns for companies that want clearer workflows and easier daily operations.",
  alternates: {
    canonical: "/services",
  },
  openGraph: {
    title: "Services | Daniel Vlcek",
    description:
      "Business platform builds, automation systems, websites, landing pages, and platform remakes for companies that need clearer operations.",
    url: "/services",
    type: "website",
  },
};

const useCases = [
  "Outdated website that no longer explains the business clearly",
  "Leads arriving through email, forms, calls, and messages with no clear follow-up",
  "Repeated admin tasks that owners or staff handle manually every week",
  "Bookings, payments, invoices, or client communication spread across too many tools",
  "Existing platform or dashboard that became hard to use, update, or extend",
];

export default function ServicesPage() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-site-bg pt-28 pb-16 md:pt-32 md:pb-24">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_18%_12%,rgba(143,163,177,0.10),transparent_34%),radial-gradient(circle_at_82%_18%,rgba(193,106,58,0.08),transparent_30%)]" />
      <Container>
        <div className="relative z-10">
          <SectionTitle
            eyebrow="Services"
            title="Websites, platforms, and automations designed as one business system."
            desc="I help companies replace scattered tools and manual workflows with connected digital systems built for clarity, speed, and scalable growth."
          />

        <div className="mt-10 rounded-[2rem] border border-black/[0.10] bg-white/62 p-6 shadow-[0_24px_80px_rgba(0,0,0,0.24)] ring-1 ring-clay/10 md:p-8">
          <p className="font-mono text-xs font-semibold uppercase tracking-[0.24em] text-clay">
            Core positioning
          </p>
          <h2 className="mt-4 max-w-4xl text-3xl font-medium tracking-[-0.035em] text-cream md:text-5xl">
            I build websites, platforms, and automations that make businesses
            easier to run.
          </h2>
          <p className="mt-5 max-w-3xl text-sm leading-7 text-stone md:text-base">
            I look at how the business works first: where leads come from, what
            gets repeated manually, where tools do not connect, and what would
            make daily work easier.
          </p>
        </div>

        <div className="mt-10 grid gap-4 md:grid-cols-2">
          {packages.map((pkg, index) => (
            <article
              key={pkg.name}
              className={[
                "rounded-[2rem] border p-7 shadow-[0_16px_48px_rgba(16,19,26,0.06)]",
                index === 0
                  ? "border-clay/30 bg-[linear-gradient(180deg,rgba(184,100,63,0.10),rgba(255,255,255,0.72)),rgba(255,255,255,0.70)] ring-1 ring-clay/10"
                  : "border-black/[0.10] bg-white/62",
              ].join(" ")}
            >
              <div className="flex items-start justify-between gap-4">
                <p className="font-mono text-xs font-semibold text-clay">
                  {String(index + 1).padStart(2, "0")}
                </p>
                {index === 0 ? (
                  <span className="rounded-full border border-clay/25 bg-clay/10 px-3 py-1 text-xs font-semibold text-clay">
                    Flagship offer
                  </span>
                ) : null}
              </div>

              <h3 className="mt-5 text-xl font-semibold text-cream">
                {pkg.name}
              </h3>
              <p className="mt-3 text-sm leading-7 text-stone">
                <span className="font-semibold text-muted-cream">Best for:</span> {pkg.bestFor}
              </p>
              <ul className="mt-4 space-y-2 text-sm text-stone">
                {pkg.includes.map((item) => (
                  <li key={item} className="flex gap-3">
                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-clay" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <Link href={pkg.cta.href} className="mt-6 inline-flex rounded-full bg-cream px-5 py-3 text-sm font-semibold text-site-bg shadow-[0_18px_48px_rgba(242,239,230,0.12)] transition hover:-translate-y-0.5 hover:bg-[#0D0E0C]">
                {pkg.cta.label}
              </Link>
            </article>
          ))}
        </div>

        <div className="mt-10 grid gap-6 lg:grid-cols-[0.8fr_1fr]">
          <div>
            <p className="font-mono text-xs font-semibold uppercase tracking-[0.24em] text-clay">
              Common starting points
            </p>
            <h2 className="mt-4 text-3xl font-medium tracking-[-0.035em] text-cream md:text-4xl">
              You do not need to know the exact solution before contacting me.
            </h2>
          </div>

          <div className="grid gap-3">
            {useCases.map((item) => (
              <p
                key={item}
                className="rounded-2xl border border-black/[0.10] bg-white/62 p-4 text-sm leading-7 text-stone"
              >
                {item}
              </p>
            ))}
          </div>
        </div>

        <div className="mt-10 rounded-[2rem] border border-black/[0.10] bg-white/62 p-7 shadow-[0_18px_60px_rgba(0,0,0,0.22)]">
          <h3 className="text-xl font-semibold text-cream">
            Primary engagement path
          </h3>
          <p className="mt-3 max-w-4xl text-sm leading-7 text-stone">
            Most projects start by looking at the current setup: website,
            inquiry flow, tools, manual work, and the part of the business that
            creates the most friction. From there we decide whether the right
            next step is a website, automation, platform, or remake.
          </p>
          <div className="mt-5 flex flex-wrap gap-3">
            <Link href={primaryCta.href} className="inline-flex rounded-full bg-cream px-5 py-3 text-sm font-semibold text-site-bg shadow-[0_18px_48px_rgba(242,239,230,0.12)] transition hover:-translate-y-0.5 hover:bg-[#0D0E0C]">
              {primaryCta.label}
            </Link>
            <Link href="/work" className="inline-flex rounded-full bg-white/68 px-5 py-3 text-sm font-semibold text-cream ring-1 ring-black/[0.12] transition hover:-translate-y-0.5 hover:bg-white/80">
              View real projects
            </Link>
          </div>
        </div>
        </div>
      </Container>
    </main>
  );
}
