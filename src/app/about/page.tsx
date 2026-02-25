import { Container } from "@/components/ui/Container";
import { SectionTitle } from "@/components/ui/SectionTitle";

const principles = [
  "Systems over surface-level fixes",
  "Outcome-first execution",
  "Clean architecture and maintainability",
  "Clear communication and ownership",
];

export default function AboutPage() {
  return (
    <main className="py-16 md:py-24">
      <Container>
        <SectionTitle
          eyebrow="About"
          title="Technical growth partner with an operator mindset"
          desc="I help teams build the infrastructure behind speed: automation workflows, modern web architecture, and scalable handover standards."
        />

        <div className="mt-10 grid gap-4 md:grid-cols-3">
          <article className="rounded-2xl bg-white/5 p-7 ring-1 ring-white/10 md:col-span-2">
            <h2 className="text-lg font-semibold text-white">How I approach engagements</h2>
            <p className="mt-4 text-sm leading-relaxed text-white/70">
              I focus on bottlenecks that directly affect execution speed and conversion. Projects are structured as systems work: diagnose friction, design architecture, ship in phases, then transfer ownership with documentation.
            </p>
            <p className="mt-4 text-sm leading-relaxed text-white/70">
              The goal is durable infrastructure, not short-term patches. Teams should be faster and less dependent after the engagement.
            </p>
          </article>

          <article className="rounded-2xl bg-white/5 p-7 ring-1 ring-white/10">
            <h2 className="text-lg font-semibold text-white">Working principles</h2>
            <ul className="mt-4 space-y-2 text-sm text-white/70">
              {principles.map((principle) => (
                <li key={principle}>- {principle}</li>
              ))}
            </ul>
          </article>
        </div>
      </Container>
    </main>
  );
}
