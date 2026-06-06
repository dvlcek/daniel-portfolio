import { Container } from "@/components/ui/Container";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { SystemCard } from "@/components/ui/SystemCard";

const values = [
  ["Direct Collaboration", "You work directly with the person who understands, designs, builds, and improves the system."],
  ["System Thinking", "Every project is designed around business workflows, not only visual appearance."],
  ["Scalable Architecture", "The goal is to build foundations that can grow with your business."],
  ["Long-Term Value", "The result should improve conversion, clarity, speed, and operations."],
];

export function Testimonials() {
  return (
    <section className="section-compact relative">
      <Container>
        <SectionTitle eyebrow="Why Daniel" title="Technical execution with business-level thinking." desc="This is not a handoff-heavy agency process or a task-based freelancer engagement. It is direct technical partnership around the systems that support growth." />
        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
          {values.map(([title, text]) => (
            <SystemCard key={title}>
              <h3 className="card-heading">{title}</h3>
              <p className="mt-4 text-sm leading-7 text-[#B8B1A4]">{text}</p>
            </SystemCard>
          ))}
        </div>
      </Container>
    </section>
  );
}
