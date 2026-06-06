import type { Metadata } from "next";
import { Container } from "@/components/ui/Container";
import { SectionTitle } from "@/components/ui/SectionTitle";

export const metadata: Metadata = {
  title: "CV",
  description:
    "CV for Daniel Vlcek, focused on websites, automation systems, internal tools, and modern web engineering.",
  robots: {
    index: false,
    follow: true,
  },
};

export default function CVPage() {
  return (
    <main className="site-page pt-36 pb-20 md:pt-44">
      <Container>
        <SectionTitle
          eyebrow="CV"
          title="Daniel Vlcek"
          desc="Developer focused on websites, automation systems, internal tools, and modern web engineering."
        />

        <div className="mt-10 grid gap-6 md:grid-cols-3">
          <div className="glass-panel rounded-[28px] p-6 md:col-span-1">
            <p className="text-sm font-semibold text-[#F2EFE6]">Contact</p>

            <div className="mt-3 space-y-2 text-sm text-[#B8B1A4]">
              <p>Vienna, Austria</p>
              <p>
                <a className="hover:text-[#F2EFE6]" href="mailto:danielvlcekbusiness@gmail.com">
                  danielvlcekbusiness@gmail.com
                </a>
              </p>
              <p>
                <a className="hover:text-[#F2EFE6]" href="tel:+421915324822">
                  +421 915 324 822
                </a>
              </p>
            </div>

            <div className="mt-6">
              <a
                className="inline-flex rounded-2xl bg-[#F2EFE6] px-5 py-3 text-sm font-medium text-[#050505] transition hover:opacity-90"
                href="/Resume%20Daniel%20Vlcek.pdf"
                target="_blank"
                rel="noopener noreferrer"
              >
                Download PDF
              </a>
            </div>
          </div>

          <div className="md:col-span-2 space-y-10">

            <section className="glass-panel rounded-[28px] p-6">
              <h2 className="text-lg font-semibold text-[#F2EFE6]">Work Experience</h2>

              <div className="mt-4 space-y-6 text-sm text-[#B8B1A4]">
                <div>
                  <p className="text-[#F2EFE6] font-semibold">
                    Self-Employed - Full-Stack Development
                  </p>
                  <p className="text-[#8E9188]">
                    Aug 2023 - Present - Remote
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

            <section className="glass-panel rounded-[28px] p-6">
              <h2 className="text-lg font-semibold text-[#F2EFE6]">Education</h2>
              <div className="mt-4 space-y-4 text-sm text-[#B8B1A4]">
                <div>
                  <p className="font-semibold text-[#F2EFE6]">Brno University of Technology</p>
                  <p className="text-[#8E9188]">Faculty of Information Technology</p>
                </div>
                <div>
                  <p className="font-semibold text-[#F2EFE6]">
                    Secondary Vocational School of Information & Network Technologies
                  </p>
                  <p className="text-[#8E9188]">High School Diploma</p>
                </div>
              </div>
            </section>

            <section className="glass-panel rounded-[28px] p-6">
              <h2 className="text-lg font-semibold text-[#F2EFE6]">Certifications</h2>
              <ul className="mt-4 list-disc pl-5 text-sm text-[#B8B1A4] space-y-2">
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
