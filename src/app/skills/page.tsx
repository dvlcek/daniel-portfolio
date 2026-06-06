import type { Metadata } from "next";
import { Container } from "@/components/ui/Container";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { Stagger } from "@/components/animations/ScrollAnimation";

export const metadata: Metadata = {
  title: "Skills",
  description:
    "Technical skills and capabilities for Daniel Vlcek, focused on websites, platforms, automations, and business systems.",
  robots: {
    index: false,
    follow: true,
  },
};

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
    <main className="relative min-h-screen overflow-hidden bg-site-bg pt-28 pb-16 md:pt-32 md:pb-24">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_18%_12%,rgba(143,163,177,0.10),transparent_34%),radial-gradient(circle_at_82%_18%,rgba(193,106,58,0.08),transparent_30%)]" />
      <Container className="relative z-10">
        <SectionTitle
          eyebrow="Skills"
          title="Stack & Capabilities"
          desc="Focused on building practical websites, platforms, automations, and internal tools."
        />

        <Stagger itemSelector=".skill-card" className="mt-10 grid gap-4 md:grid-cols-2">
          {groups.map((g) => (
            <section
              key={g.title}
              className="skill-card rounded-[2rem] border border-black/[0.10] bg-white/62 p-6 shadow-[0_18px_60px_rgba(0,0,0,0.22)]"
            >
              <h2 className="text-lg font-semibold text-cream">{g.title}</h2>
              <div className="mt-4 flex flex-wrap gap-2">
                {g.items.map((it) => (
                  <span
                    key={it}
                    className="rounded-full bg-white/68 px-3 py-1 text-xs text-stone ring-1 ring-black/[0.10]"
                  >
                    {it}
                  </span>
                ))}
              </div>
            </section>
          ))}
        </Stagger>
      </Container>
    </main>
  );
}
