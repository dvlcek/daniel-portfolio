import { Container } from "@/components/ui/Container";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { Stagger } from "@/components/animations/ScrollAnimation";

const outcomes = [
  {
    number: "01",
    title: "Less manual work",
    text: "Repeated admin, follow-up, updates, and handoffs can move into clearer workflows instead of depending on memory.",
  },
  {
    number: "02",
    title: "Clearer lead handling",
    text: "Inquiries can be captured, qualified, routed, and followed up with in a more structured way.",
  },
  {
    number: "03",
    title: "Easier client management",
    text: "Dashboards, portals, booking flows, payment flows, and admin views can give the business one cleaner place to manage work.",
  },
  {
    number: "04",
    title: "Stronger online presence",
    text: "The website can explain the offer clearly while supporting the process that happens after a visitor becomes a lead.",
  },
];

export function Testimonials() {
  return (
    <section className="relative overflow-hidden bg-[#F8F8F5] py-20 md:py-24">
      <Container>
        <Stagger itemSelector=".outcome-item" y={14} stagger={0.06}>
          <SectionTitle
            eyebrow="Business outcomes"
            title="The practical value is in the daily work."
            desc="A good website or platform should not only look better. It should make leads, clients, admin, and follow-up easier to handle."
          />

          <div className="mt-12 grid gap-5 md:grid-cols-2">
            {outcomes.map((item) => (
              <article
                key={item.title}
                className="outcome-item rounded-[2rem] border border-[#E3E7F0] bg-white p-6 shadow-[0_16px_48px_rgba(16,19,26,0.06)]"
              >
                <p className="font-mono text-xs font-semibold text-[#1238F2]">
                  {item.number}
                </p>
                <h3 className="mt-4 text-xl font-semibold tracking-tight text-[#10131A]">
                  {item.title}
                </h3>
                <p className="mt-3 text-sm leading-7 text-[#566176]">
                  {item.text}
                </p>
              </article>
            ))}
          </div>

          <p className="mt-6 max-w-3xl text-sm leading-7 text-[#7A8497]">
            No fake numbers or inflated promises. The work is judged by whether
            the business becomes easier to understand, operate, and improve.
          </p>
        </Stagger>
      </Container>
    </section>
  );
}
