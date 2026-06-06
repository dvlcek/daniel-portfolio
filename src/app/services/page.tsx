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
    <main className="bg-[#FAFAF8] py-16 md:py-24">
      <Container>
        <SectionTitle
          eyebrow="Services"
          title="The offer is simple: build the right system for the business problem."
          desc="I help companies improve websites, platforms, automations, workflows, dashboards, internal tools, and business logic without turning the project into an overwhelming list of services."
        />

        <div className="mt-10 rounded-[2rem] border border-[#C9D4FF] bg-white p-6 shadow-[0_18px_54px_rgba(16,19,26,0.08)] ring-1 ring-[#1238F2]/10 md:p-8">
          <p className="text-xs font-semibold uppercase tracking-[0.24em] text-[#1238F2]">
            Core positioning
          </p>
          <h2 className="mt-4 max-w-4xl text-2xl font-semibold tracking-tight text-[#10131A] md:text-4xl">
            I build websites, platforms, and automations that make businesses
            easier to run.
          </h2>
          <p className="mt-5 max-w-3xl text-sm leading-7 text-[#566176] md:text-base">
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
                  ? "border-[#1238F2]/28 bg-[#F4F7FF] ring-1 ring-[#1238F2]/10"
                  : "border-[#E3E7F0] bg-white",
              ].join(" ")}
            >
              <div className="flex items-start justify-between gap-4">
                <p className="font-mono text-xs font-semibold text-[#1238F2]">
                  {String(index + 1).padStart(2, "0")}
                </p>
                {index === 0 ? (
                  <span className="rounded-full border border-[#C9D4FF] bg-white px-3 py-1 text-xs font-semibold text-[#1238F2]">
                    Flagship offer
                  </span>
                ) : null}
              </div>

              <h3 className="mt-5 text-xl font-semibold text-[#10131A]">
                {pkg.name}
              </h3>
              <p className="mt-3 text-sm leading-7 text-[#566176]">
                <span className="font-semibold text-[#10131A]">Best for:</span> {pkg.bestFor}
              </p>
              <ul className="mt-4 space-y-2 text-sm text-[#42506A]">
                {pkg.includes.map((item) => (
                  <li key={item} className="flex gap-3">
                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[#1238F2]" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <Link href={pkg.cta.href} className="mt-6 inline-flex rounded-full bg-[#1238F2] px-5 py-3 text-sm font-semibold text-white shadow-[0_14px_34px_rgba(18,56,242,0.18)] transition hover:-translate-y-0.5">
                {pkg.cta.label}
              </Link>
            </article>
          ))}
        </div>

        <div className="mt-10 grid gap-6 lg:grid-cols-[0.8fr_1fr]">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.24em] text-[#1238F2]">
              Common starting points
            </p>
            <h2 className="mt-4 text-2xl font-semibold tracking-tight text-[#10131A] md:text-3xl">
              You do not need to know the exact solution before contacting me.
            </h2>
          </div>

          <div className="grid gap-3">
            {useCases.map((item) => (
              <p
                key={item}
                className="rounded-2xl border border-[#E3E7F0] bg-white p-4 text-sm leading-7 text-[#566176]"
              >
                {item}
              </p>
            ))}
          </div>
        </div>

        <div className="mt-10 rounded-[2rem] border border-[#DDE2EE] bg-white p-7 shadow-[0_16px_48px_rgba(16,19,26,0.06)]">
          <h3 className="text-xl font-semibold text-[#10131A]">
            Primary engagement path
          </h3>
          <p className="mt-3 max-w-4xl text-sm leading-7 text-[#566176]">
            Most projects start by looking at the current setup: website,
            inquiry flow, tools, manual work, and the part of the business that
            creates the most friction. From there we decide whether the right
            next step is a website, automation, platform, or remake.
          </p>
          <div className="mt-5 flex flex-wrap gap-3">
            <Link href={primaryCta.href} className="inline-flex rounded-full bg-[#1238F2] px-5 py-3 text-sm font-semibold text-white shadow-[0_14px_34px_rgba(18,56,242,0.18)] transition hover:-translate-y-0.5">
              {primaryCta.label}
            </Link>
            <Link href="/work" className="inline-flex rounded-full bg-white px-5 py-3 text-sm font-semibold text-[#10131A] ring-1 ring-[#DDE2EE] transition hover:-translate-y-0.5">
              View real projects
            </Link>
          </div>
        </div>
      </Container>
    </main>
  );
}
