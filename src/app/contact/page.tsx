import { Container } from "@/components/ui/Container";
import { SectionTitle } from "@/components/ui/SectionTitle";

export default function ContactPage() {
  return (
    <main className="py-16 md:py-24">
      <Container>
        <SectionTitle
          eyebrow="Contact"
          title="Book a 20-min systems call"
          desc="No fluff. You'll leave with a clear next step and highest-leverage priorities."
        />

        <div className="mt-10 grid gap-4 md:grid-cols-2">
          <section className="rounded-2xl bg-white/5 p-7 ring-1 ring-white/10">
            <h2 className="text-lg font-semibold text-white">Qualification form</h2>
            <form className="mt-4 space-y-4">
              <label className="block text-sm text-white/75">
                Company size
                <input className="mt-2 w-full rounded-xl border border-white/15 bg-black/20 px-3 py-2 text-sm text-white outline-none focus:border-emerald-300/60" placeholder="e.g. 10-50 employees" />
              </label>
              <label className="block text-sm text-white/75">
                Biggest bottleneck
                <select className="mt-2 w-full rounded-xl border border-white/15 bg-black/20 px-3 py-2 text-sm text-white outline-none focus:border-emerald-300/60">
                  <option>Automation</option>
                  <option>Website</option>
                  <option>Both</option>
                </select>
              </label>
              <label className="block text-sm text-white/75">
                Timeline urgency
                <select className="mt-2 w-full rounded-xl border border-white/15 bg-black/20 px-3 py-2 text-sm text-white outline-none focus:border-emerald-300/60">
                  <option>ASAP (within 2 weeks)</option>
                  <option>1-2 months</option>
                  <option>Quarter planning</option>
                </select>
              </label>
              <label className="block text-sm text-white/75">
                Budget range (optional)
                <input className="mt-2 w-full rounded-xl border border-white/15 bg-black/20 px-3 py-2 text-sm text-white outline-none focus:border-emerald-300/60" placeholder="e.g. $5k-$15k" />
              </label>
              <label className="block text-sm text-white/75">
                Current site/tools link
                <input className="mt-2 w-full rounded-xl border border-white/15 bg-black/20 px-3 py-2 text-sm text-white outline-none focus:border-emerald-300/60" placeholder="https://" />
              </label>
              <button type="button" className="rounded-2xl bg-white px-5 py-3 text-sm font-medium text-black transition hover:opacity-90">
                Book a 20-min Systems Call
              </button>
            </form>
          </section>

          <section className="rounded-2xl bg-white/5 p-7 ring-1 ring-white/10">
            <h2 className="text-lg font-semibold text-white">Engagement expectations</h2>
            <ul className="mt-4 space-y-2 text-sm text-white/70">
              <li>- Weekly progress updates and clear milestones</li>
              <li>- Documented architecture and handover plan</li>
              <li>- Measurable outcomes tied to operations or conversion</li>
              <li>- Option to continue through monthly retainer</li>
            </ul>
          </section>
        </div>
      </Container>
    </main>
  );
}
