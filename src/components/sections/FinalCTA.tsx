import { Container } from "@/components/ui/Container";
import { CtaPanel } from "@/components/ui/CtaPanel";

export function FinalCTA() {
  return (
    <section className="section-compact relative">
      <Container>
        <CtaPanel
          title="Let’s map the system your business actually needs."
          description="Tell me what you are building, what feels manual, and where your current tools stop supporting growth. I will help you identify what kind of website, platform, or automation system makes sense."
        />
      </Container>
    </section>
  );
}
