import Link from "next/link";
import { Container } from "@/components/ui/Container";

export default function AutomationSystemsLandingPage() {
  return (
    <main className="py-16 md:py-24">
      <Container className="max-w-4xl">
        <p className="text-xs uppercase tracking-[0.2em] text-white/45">Landing Page</p>
        <h1 className="mt-4 text-3xl font-semibold tracking-tight text-white md:text-5xl">Automation Systems for Teams</h1>
        <p className="mt-6 text-base text-white/70">
          Design and ship automation workflows that remove repetitive operations, connect your tools, and make execution reliable.
        </p>

        <div className="mt-10 grid gap-4 md:grid-cols-3">
          {[
            "Workflow mapping and bottleneck diagnosis",
            "End-to-end automation shipping",
            "Monitoring, documentation, and handover",
          ].map((item) => (
            <article key={item} className="rounded-2xl bg-white/5 p-6 ring-1 ring-white/10">
              <p className="text-sm text-white/75">{item}</p>
            </article>
          ))}
        </div>

        <Link href="/contact" className="mt-8 inline-flex rounded-2xl bg-white px-5 py-3 text-sm font-medium text-black transition hover:opacity-90">
          Book a 20-min Systems Call
        </Link>
      </Container>
    </main>
  );
}
