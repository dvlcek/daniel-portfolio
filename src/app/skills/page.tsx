import type { Metadata } from "next";
import { Container } from "@/components/ui/Container";
import { SectionTitle } from "@/components/ui/SectionTitle";

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
    <main className="site-page pt-36 pb-20 md:pt-44">
      <Container>
        <SectionTitle
          eyebrow="Skills"
          title="Stack & Capabilities"
          desc="Focused on building practical websites, platforms, automations, and internal tools."
        />

        <div className="mt-10 grid gap-4 md:grid-cols-2">
          {groups.map((g) => (
            <section
              key={g.title}
              className="glass-panel rounded-[28px] p-6"
            >
              <h2 className="text-lg font-semibold text-[#F2EFE6]">{g.title}</h2>
              <div className="mt-4 flex flex-wrap gap-2">
                {g.items.map((it) => (
                  <span
                    key={it}
                    className="rounded-full bg-[rgba(242,239,230,0.06)] px-3 py-1 text-xs text-[#B8B1A4] ring-1 ring-[rgba(242,239,230,0.10)]"
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
