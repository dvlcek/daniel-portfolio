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
          title="I build the systems behind faster, more efficient businesses"
          desc="I work with businesses that need more than just a nice website. I build web platforms, automation systems, and the technical structure behind smoother operations."
        />

        <div className="mt-10 grid gap-4 md:grid-cols-3">
          <article className="rounded-2xl bg-white/5 p-7 ring-1 ring-white/10 md:col-span-2">
            <h2 className="text-lg font-semibold text-white">How I approach engagements</h2>
            <p className="mt-4 text-sm leading-relaxed text-white/70">
              I focus on the bottlenecks that slow a business down — manual tasks, disconnected tools, weak conversion flows, or outdated digital infrastructure.
            </p>
            <p className="mt-4 text-sm leading-relaxed text-white/70">
              Every project is approached as a system: understand the friction, design the right structure, build cleanly, and leave the client with something reliable and maintainable.
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
