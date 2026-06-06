"use client";

import { type FormEvent, useState } from "react";
import { ArrowRight, Check } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { PageHero } from "@/components/ui/PageHero";
import { CtaPanel } from "@/components/ui/CtaPanel";

const bestFit = ["Premium business website", "Custom business platform", "Automation workflow", "CRM / lead system", "Internal dashboard", "Technical rebuild"];
const nextSteps = ["You send the project context", "I review the business problem", "We discuss the possible system direction", "If it fits, the scope is defined clearly"];
const notFit = ["Cheap template websites", "One-off small fixes", "Projects without business context", "Projects where only price matters"];

export default function ContactPage() {
  const [sent, setSent] = useState(false);
  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setSent(true);
  }

  return (
    <main className="site-page">
      <PageHero eyebrow="Contact" title="Let’s map the system your business actually needs." description="Share what you are building, what feels manual, and where your current tools stop supporting growth. I will help you identify the right website, platform, automation, CRM workflow, or dashboard system." />
      <section className="section-compact">
        <Container>
          <div className="grid gap-6 lg:grid-cols-[1.08fr_0.72fr] lg:items-start">
            <div className="glass-panel rounded-[28px] p-6 md:p-8">
              <p className="micro-label text-[#C16A3A]">Project context</p>
              <h2 className="mt-4 text-3xl font-semibold tracking-[-0.04em] text-[#F2EFE6]">Send the business problem, not a perfect brief.</h2>
              {sent ? (
                <div className="mt-8 rounded-3xl border border-[#C16A3A]/24 bg-[#C16A3A]/10 p-6">
                  <h3 className="text-xl font-semibold text-[#F2EFE6]">Context prepared.</h3>
                  <p className="mt-3 text-sm leading-7 text-[#B8B1A4]">This workspace demo does not submit to a backend. Use the same project context when booking or emailing Daniel.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="mt-8 grid gap-5">
                  <div className="grid gap-5 sm:grid-cols-2"><Field label="Name" name="name" placeholder="Jane Smith" required /><Field label="Email" name="email" type="email" placeholder="jane@company.com" required /></div>
                  <div className="grid gap-5 sm:grid-cols-2"><Field label="Company" name="company" placeholder="Company name" /><Select label="Project type" name="projectType" options={bestFit} /></div>
                  <div className="grid gap-5 sm:grid-cols-2"><Select label="Current bottleneck" name="bottleneck" options={["Scattered tools", "Manual follow-up", "Weak website conversion", "No dashboard visibility", "Outdated platform", "Not sure yet"]} /><Select label="Budget range" name="budget" options={["€3k–€7k", "€7k–€15k", "€15k+", "Need guidance"]} /></div>
                  <label className="grid gap-2 text-sm font-medium text-[#E5E0D4]">Message<textarea name="message" required placeholder="Describe the website, workflow, CRM, dashboard, platform, or repeated task you want to improve." className="min-h-36 resize-y rounded-2xl border border-[rgba(242,239,230,0.12)] bg-[rgba(242,239,230,0.045)] px-4 py-3 text-sm text-[#F2EFE6] outline-none transition placeholder:text-[#8E9188]/60 focus:border-[#C16A3A]/55 focus:ring-4 focus:ring-[#C16A3A]/10" /></label>
                  <button type="submit" className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full bg-[#F2EFE6] px-6 py-3 text-sm font-semibold text-[#050505] transition hover:-translate-y-0.5 hover:bg-white">Send Project Context <ArrowRight size={15} /></button>
                </form>
              )}
            </div>
            <aside className="grid gap-5">
              <InfoCard title="Best-fit projects" items={bestFit} />
              <InfoCard title="What happens next" items={nextSteps} numbered />
              <InfoCard title="Not a fit" items={notFit} muted />
            </aside>
          </div>
        </Container>
      </section>
      <section className="section-compact"><Container><CtaPanel title="Prefer to start with a strategy call?" description="Bring the current website, tools, workflows, and bottlenecks. The goal is to identify the highest-value next system before anything is scoped." primaryLabel="Book a Strategy Call" /></Container></section>
    </main>
  );
}

function Field({ label, name, type = "text", placeholder, required }: { label: string; name: string; type?: string; placeholder?: string; required?: boolean }) {
  return <label className="grid gap-2 text-sm font-medium text-[#E5E0D4]">{label}<input name={name} type={type} placeholder={placeholder} required={required} className="rounded-2xl border border-[rgba(242,239,230,0.12)] bg-[rgba(242,239,230,0.045)] px-4 py-3 text-sm text-[#F2EFE6] outline-none transition placeholder:text-[#8E9188]/60 focus:border-[#C16A3A]/55 focus:ring-4 focus:ring-[#C16A3A]/10" /></label>;
}
function Select({ label, name, options }: { label: string; name: string; options: string[] }) {
  return <label className="grid gap-2 text-sm font-medium text-[#E5E0D4]">{label}<select name={name} className="rounded-2xl border border-[rgba(242,239,230,0.12)] bg-[#151713] px-4 py-3 text-sm text-[#F2EFE6] outline-none transition focus:border-[#C16A3A]/55 focus:ring-4 focus:ring-[#C16A3A]/10">{options.map((option) => <option key={option}>{option}</option>)}</select></label>;
}
function InfoCard({ title, items, numbered, muted }: { title: string; items: string[]; numbered?: boolean; muted?: boolean }) {
  return <div className="glass-panel rounded-[28px] p-6"><h3 className="text-xl font-semibold text-[#F2EFE6]">{title}</h3><div className="mt-5 grid gap-3">{items.map((item, index) => <p key={item} className="flex gap-3 text-sm leading-7 text-[#B8B1A4]"><span className={`mt-1 flex h-5 w-5 shrink-0 items-center justify-center rounded-full ${muted ? "bg-[rgba(242,239,230,0.06)] text-[#8E9188]" : "bg-[#C16A3A]/12 text-[#E5E0D4]"}`}>{numbered ? index + 1 : <Check size={13} />}</span>{item}</p>)}</div></div>;
}
