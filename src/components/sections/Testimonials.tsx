import { Container } from "@/components/ui/Container";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { Stagger } from "@/components/animations/ScrollAnimation";

const outcomes = [
  {
    number: "01",
    title: "One technical owner",
    text: "You work directly with the person mapping the business problem, designing the system, and building the technical layer.",
  },
  {
    number: "02",
    title: "Business systems first",
    text: "The work starts with leads, workflows, tools, data, and operations before deciding whether the answer is a website, dashboard, platform, or automation.",
  },
  {
    number: "03",
    title: "Scalable technical foundation",
    text: "The build is structured so the first useful version does not block future CRM flows, dashboards, integrations, automations, or internal tools.",
  },
  {
    number: "04",
    title: "Practical delivery",
    text: "No inflated agency layers. The goal is a clear, maintainable system that makes the business easier to understand, operate, and improve.",
  },
];

export function Testimonials() {
  return (
    <section className="relative overflow-hidden bg-site-bg-deep py-20 md:py-24">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_12%_16%,rgba(184,100,63,0.07),transparent_32%),radial-gradient(circle_at_84%_12%,rgba(95,116,128,0.08),transparent_34%)]" />
      <Container>
        <Stagger itemSelector=".outcome-item" y={14} stagger={0.06} className="relative z-10">
          <SectionTitle
            eyebrow="Why Daniel"
            title="A premium systems partner without the agency noise."
            desc="The work combines software development, automation architecture, business workflow thinking, and sharp interface design."
          />

          <div className="mt-12 grid gap-5 md:grid-cols-2">
            {outcomes.map((item) => (
              <article
                key={item.title}
                className="outcome-item rounded-[2rem] border border-black/[0.08] bg-white/64 p-6 shadow-[0_18px_50px_rgba(21,21,18,0.06)]"
              >
                <p className="font-mono text-xs font-semibold text-clay">
                  {item.number}
                </p>
                <h3 className="mt-4 text-xl font-semibold tracking-[-0.025em] text-cream">
                  {item.title}
                </h3>
                <p className="mt-3 text-sm leading-7 text-stone">
                  {item.text}
                </p>
              </article>
            ))}
          </div>

          <p className="mt-6 max-w-3xl text-sm leading-7 text-ash">
            No fake numbers or inflated promises. The work is judged by whether
            the business becomes easier to understand, operate, and improve.
          </p>
        </Stagger>
      </Container>
    </section>
  );
}
