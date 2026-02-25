import { Container } from "@/components/ui/Container";
import { SectionTitle } from "@/components/ui/SectionTitle";

export default function CVPage() {
  return (
    <main className="py-16 md:py-24">
      <Container>
        <SectionTitle
          eyebrow="CV"
          title="Daniel Vlcek"
          desc="Software Developer focused on automation systems and modern web engineering."
        />

        <div className="mt-10 grid gap-6 md:grid-cols-3">
          <div className="rounded-2xl bg-white/5 p-6 ring-1 ring-white/10 md:col-span-1">
            <p className="text-sm font-semibold text-white">Contact</p>

            <div className="mt-3 space-y-2 text-sm text-white/70">
              <p>Vienna, Austria</p>
              <p>
                <a className="hover:text-white" href="mailto:danielvlcekbusiness@gmail.com">
                  danielvlcekbusiness@gmail.com
                </a>
              </p>
              <p>
                <a className="hover:text-white" href="tel:+421915324822">
                  +421 915 324 822
                </a>
              </p>
            </div>

            <div className="mt-6">
              <a
                className="inline-flex rounded-2xl bg-white px-5 py-3 text-sm font-medium text-black transition hover:opacity-90"
                href="/Resume%20Daniel%20Vlcek.pdf"
                target="_blank"
                rel="noreferrer"
              >
                Download PDF
              </a>
            </div>
          </div>

          <div className="md:col-span-2 space-y-10">

            <section className="rounded-2xl bg-white/5 p-6 ring-1 ring-white/10">
              <h2 className="text-lg font-semibold text-white">Work Experience</h2>

              <div className="mt-4 space-y-6 text-sm text-white/70">
                <div>
                  <p className="text-white font-semibold">
                    Self-Employed — Full-Stack Development
                  </p>
                  <p className="text-white/55">
                    Aug 2023 – Present • Remote
                  </p>

                  <ul className="mt-3 list-disc pl-5 space-y-2">
                    <li>Storage rental platform with Stripe billing automation and VPS deployment.</li>
                    <li>Interactive trading company website with animation-heavy UI.</li>
                    <li>Recording studio site with automated booking and Google Maps integration.</li>
                    <li>Creator platform with ChatGPT API integration and workflow automation.</li>
                    <li>Telegram automation bot deployed on AWS EC2.</li>
                    <li>C# + Selenium automation desktop application with DB integration.</li>
                  </ul>
                </div>
              </div>
            </section>

            <section className="rounded-2xl bg-white/5 p-6 ring-1 ring-white/10">
              <h2 className="text-lg font-semibold text-white">Education</h2>
              <div className="mt-4 space-y-4 text-sm text-white/70">
                <div>
                  <p className="font-semibold text-white">Brno University of Technology</p>
                  <p className="text-white/55">Faculty of Information Technology</p>
                </div>
                <div>
                  <p className="font-semibold text-white">
                    Secondary Vocational School of Information & Network Technologies
                  </p>
                  <p className="text-white/55">High School Diploma</p>
                </div>
              </div>
            </section>

            <section className="rounded-2xl bg-white/5 p-6 ring-1 ring-white/10">
              <h2 className="text-lg font-semibold text-white">Certifications</h2>
              <ul className="mt-4 list-disc pl-5 text-sm text-white/70 space-y-2">
                <li>Cisco Networking Academy IT Essentials</li>
                <li>ESET Technical Certification (Basic & Advanced)</li>
              </ul>
            </section>

          </div>
        </div>
      </Container>
    </main>
  );
}