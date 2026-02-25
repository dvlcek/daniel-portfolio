import { Container } from "@/components/ui/Container";
import { SectionTitle } from "@/components/ui/SectionTitle";

const groups = [
  {
    title: "Core",
    items: ["JavaScript", "TypeScript", "HTML", "CSS", "SQL", "Python", "C#"],
  },
  {
    title: "Web",
    items: ["Next.js", "React", "Tailwind", "GSAP", "Performance Optimization"],
  },
  {
    title: "Automation",
    items: ["ChatGPT API", "Telegram Bot API", "Selenium", "PyWinAuto"],
  },
  {
    title: "Infrastructure",
    items: ["AWS EC2", "VPS Hosting", "Amazon Linux", "Git", "Database Design"],
  },
  {
    title: "Integrations",
    items: ["Stripe API", "Google Maps API", "EmailJS"],
  },
];

export default function SkillsPage() {
  return (
    <main className="py-16 md:py-24">
      <Container>
        <SectionTitle
          eyebrow="Skills"
          title="Stack & Capabilities"
          desc="Focused on building scalable digital systems."
        />

        <div className="mt-10 grid gap-4 md:grid-cols-2">
          {groups.map((g) => (
            <section
              key={g.title}
              className="rounded-2xl bg-white/5 p-6 ring-1 ring-white/10"
            >
              <h2 className="text-lg font-semibold text-white">{g.title}</h2>
              <div className="mt-4 flex flex-wrap gap-2">
                {g.items.map((it) => (
                  <span
                    key={it}
                    className="rounded-full bg-white/8 px-3 py-1 text-xs text-white/75 ring-1 ring-white/10"
                  >
                    {it}
                  </span>
                ))}
              </div>
            </section>
          ))}
        </div>
      </Container>
    </main>
  );
}