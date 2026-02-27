"use client";

import { useState, useRef, useEffect } from "react";
import { Container } from "@/components/ui/Container";
import { SectionTitle } from "@/components/ui/SectionTitle";

// ✅ Cal.com embed
import Cal, { getCalApi } from "@calcom/embed-react";

// ─── Types ────────────────────────────────────────────────────────────────────

interface FormState {
  fullName: string;
  companyName: string;
  email: string;
  phone: string;
  companySize: string;
  bottleneck: string;
  timeline: string;
  budgetRange: string;
  currentSite: string;
}

// ─── Dropdown ─────────────────────────────────────────────────────────────────

interface DropdownProps {
  label: string;
  options: string[];
  value: string;
  onChange: (v: string) => void;
}

function Dropdown({ label, options, value, onChange }: DropdownProps) {
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) {
        setOpen(false);
      }
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, []);

  return (
    <div className="flex flex-col gap-2">
      <span className="text-sm text-white/75">{label}</span>
      <div className="relative" ref={ref}>
        <button
          type="button"
          onClick={() => setOpen((o) => !o)}
          className="inline-flex items-center justify-between w-full rounded-xl border border-white/15 bg-black/20 px-3 py-2 text-sm text-white outline-none focus:border-blue-400/60 hover:bg-white/5 transition-colors"
        >
          <span>{value}</span>
          <svg
            className={`w-4 h-4 ml-2 shrink-0 transition-transform duration-200 text-white/40 ${
              open ? "rotate-180" : ""
            }`}
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="m19 9-7 7-7-7"
            />
          </svg>
        </button>

        {open && (
          <div className="absolute z-20 mt-1.5 w-full bg-zinc-900 border border-white/10 rounded-xl shadow-xl overflow-hidden">
            <ul className="p-1.5 text-sm font-medium">
              {options.map((option) => (
                <li key={option}>
                  <button
                    type="button"
                    onClick={() => {
                      onChange(option);
                      setOpen(false);
                    }}
                    className={`w-full text-left px-3 py-2 rounded-lg transition-colors hover:bg-white/5 hover:text-white ${
                      value === option ? "bg-white/5 text-white" : "text-white/60"
                    }`}
                  >
                    {option}
                  </button>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </div>
  );
}

// ─── Field ────────────────────────────────────────────────────────────────────

interface FieldProps {
  label: string;
  type?: string;
  placeholder?: string;
  required?: boolean;
  value: string;
  onChange: (v: string) => void;
}

function Field({
  label,
  type = "text",
  placeholder,
  required,
  value,
  onChange,
}: FieldProps) {
  return (
    <div className="flex flex-col gap-2">
      <span className="text-sm text-white/75">
        {label}
        {required && <span className="text-blue-400 ml-0.5">*</span>}
      </span>
      <input
        type={type}
        required={required}
        placeholder={placeholder}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="w-full rounded-xl border border-white/15 bg-black/20 px-3 py-2 text-sm text-white placeholder:text-white/30 outline-none focus:border-blue-400/60 transition-colors"
      />
    </div>
  );
}

// ─── Step Indicator ───────────────────────────────────────────────────────────

function StepIndicator({ step }: { step: 1 | 2 }) {
  return (
    <div className="flex items-center gap-3 mb-8">
      {([1, 2] as const).map((s) => (
        <div key={s} className="flex items-center gap-2">
          <div
            className={`w-7 h-7 rounded-full flex items-center justify-center text-xs font-semibold transition-all duration-300 ${
              step >= s ? "bg-blue-500 text-white" : "bg-white/10 text-white/40"
            }`}
          >
            {step > s ? (
              <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24">
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2.5"
                  d="M5 13l4 4L19 7"
                />
              </svg>
            ) : (
              s
            )}
          </div>
          <span
            className={`text-xs font-medium ${
              step >= s ? "text-white/80" : "text-white/30"
            }`}
          >
            {s === 1 ? "Your details" : "Pick a time"}
          </span>
          {s < 2 && (
            <div
              className={`w-8 h-px mx-1 ${
                step > s ? "bg-blue-500/50" : "bg-white/10"
              }`}
            />
          )}
        </div>
      ))}
    </div>
  );
}

// ─── Page ─────────────────────────────────────────────────────────────────────

export default function ContactPage() {
  const [step, setStep] = useState<1 | 2>(1);
  const [submitting, setSubmitting] = useState(false);

  const [form, setForm] = useState<FormState>({
    fullName: "",
    companyName: "",
    email: "",
    phone: "",
    companySize: "",
    bottleneck: "Automation",
    timeline: "ASAP (within 2 weeks)",
    budgetRange: "",
    currentSite: "",
  });

  const set = (field: keyof FormState) => (v: string) =>
    setForm((f) => ({ ...f, [field]: v }));

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitting(true);
    try {
      console.log("New lead:", form);
      await new Promise((resolve) => setTimeout(resolve, 400));
      setStep(2);
    } catch (err) {
      console.error("Submit error:", err);
    } finally {
      setSubmitting(false);
    }
  };

  // ✅ Replace this with your Cal.com event link slug:
  // Example: "daniel/intro-call"
  const CAL_LINK = "daniel-i0cc0w/test";
  const CAL_NAMESPACE = "test";

  // ✅ Optional: set Cal UI theme when step 2 is shown
  useEffect(() => {
    if (step !== 2) return;

    (async () => {
      const cal = await getCalApi({ namespace: CAL_NAMESPACE });
      cal("ui", {
        theme: "dark",
        styles: {
          branding: { brandColor: "#3B82F6" }, // Tailwind blue-500
        },
        layout: "month_view",
      });
    })();
  }, [step]);

  // Used only for "Open in new tab →" (keeps your existing UI)
  const CAL_OPEN_URL = `https://cal.com/daniel-i0cc0w/30min`;

  const expectations = [
    {
      icon: "M9 12l2 2 4-4",
      text: "Weekly progress updates and clear milestones",
    },
    {
      icon: "M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z",
      text: "Documented architecture and handover plan",
    },
    {
      icon: "M13 7h8m0 0v8m0-8l-8 8-4-4-6 6",
      text: "Measurable outcomes tied to operations or conversion",
    },
    {
      icon: "M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15",
      text: "Option to continue through monthly retainer",
    },
  ];

  return (
    <main className="py-16 md:py-24">
      <Container>
        <SectionTitle
          eyebrow="Contact"
          title="Let's get to work"
          desc="No fluff. You'll leave with a clear next step and highest-leverage priorities."
        />

        <div className="mt-10 grid gap-4 md:grid-cols-2">
          {/* ── Left panel ── */}
          <section className="rounded-2xl bg-white/5 p-7 ring-1 ring-white/10">
            <StepIndicator step={step} />

            {/* STEP 1 */}
            {step === 1 && (
              <form onSubmit={handleSubmit} className="space-y-4">
                <h2 className="text-lg font-semibold text-white mb-5">
                  Tell me about your company
                </h2>

                <div className="grid grid-cols-2 gap-4">
                  <Field
                    label="Full name"
                    placeholder="Jane Smith"
                    required
                    value={form.fullName}
                    onChange={set("fullName")}
                  />
                  <Field
                    label="Company name"
                    placeholder="Acme Inc."
                    required
                    value={form.companyName}
                    onChange={set("companyName")}
                  />
                </div>

                <Field
                  label="Email"
                  type="email"
                  placeholder="jane@acme.com"
                  required
                  value={form.email}
                  onChange={set("email")}
                />

                <Field
                  label="Phone number"
                  type="tel"
                  placeholder="+1 (555) 000-0000"
                  value={form.phone}
                  onChange={set("phone")}
                />

                <div className="flex items-center gap-3 py-1">
                  <div className="flex-1 h-px bg-white/10" />
                  <span className="text-xs text-white/30 font-medium">
                    Project context
                  </span>
                  <div className="flex-1 h-px bg-white/10" />
                </div>

                <Field
                  label="Company size"
                  placeholder="e.g. 10–50 employees"
                  value={form.companySize}
                  onChange={set("companySize")}
                />

                <Dropdown
                  label="Biggest bottleneck"
                  options={["Automation", "Website", "Both"]}
                  value={form.bottleneck}
                  onChange={set("bottleneck")}
                />

                <Dropdown
                  label="Timeline urgency"
                  options={["ASAP (within 2 weeks)", "1–2 months", "Quarter planning"]}
                  value={form.timeline}
                  onChange={set("timeline")}
                />

                <Field
                  label="Budget range"
                  placeholder="e.g. $5k–$15k"
                  value={form.budgetRange}
                  onChange={set("budgetRange")}
                />

                <Field
                  label="Current site / tools"
                  type="url"
                  placeholder="https://"
                  value={form.currentSite}
                  onChange={set("currentSite")}
                />

                <button
                  type="submit"
                  disabled={submitting}
                  className="w-full rounded-2xl bg-white px-5 py-3 text-sm font-semibold text-black transition hover:opacity-90 disabled:opacity-50 disabled:cursor-not-allowed mt-2"
                >
                  {submitting ? "Saving…" : "Continue — Pick a time →"}
                </button>
              </form>
            )}

            {step === 2 && (
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <h2 className="text-lg font-semibold text-white">
                    Pick a time that works
                  </h2>
                  <button
                    type="button"
                    onClick={() => setStep(1)}
                    className="text-xs text-white/40 hover:text-white/70 transition-colors flex items-center gap-1"
                  >
                    <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24">
                      <path
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M15 19l-7-7 7-7"
                      />
                    </svg>
                    Back
                  </button>
                </div>

                {/* Confirmation pill + embed container (keeps your classes/layout) */}
                <div className="rounded-xl overflow-hidden border border-white/10 bg-black/20 relative">
                  <div className="flex items-center justify-between px-4 py-3 border-b border-white/10 bg-black/30">
                    <span className="text-xs text-white/50">Booking</span>
                    <a
                      href={CAL_OPEN_URL}
                      target="_blank"
                      rel="noreferrer"
                      className="text-xs text-white/50 hover:text-white/80 transition"
                    >
                      Open in new tab →
                    </a>
                  </div>

                  {/* ✅ Cal.com inline embed (replaces Google iframe) */}
                  <Cal
                    namespace={CAL_NAMESPACE}
                    calLink={CAL_LINK}
                    style={{ width: "100%", height: "480px", overflow: "auto" }}
                    config={{
                      name: form.fullName || undefined,
                      email: form.email || undefined,

                      // Optional: pass context for your automations/webhooks
                      "metadata[fullName]": form.fullName || "",
                      "metadata[companyName]": form.companyName || "",
                      "metadata[phone]": form.phone || "",
                      "metadata[companySize]": form.companySize || "",
                      "metadata[bottleneck]": form.bottleneck || "",
                      "metadata[timeline]": form.timeline || "",
                      "metadata[budgetRange]": form.budgetRange || "",
                      "metadata[currentSite]": form.currentSite || "",
                    }}
                  />
                </div>

                <p className="text-xs text-white/30 text-center">
                  A confirmation will be sent to{" "}
                  <span className="text-white/50">{form.email}</span>
                </p>
              </div>
            )}
          </section>

          {/* ── Right panel ── */}
          <section className="rounded-2xl bg-white/5 p-7 ring-1 ring-white/10 flex flex-col justify-between">
            <div>
              <h2 className="text-lg font-semibold text-white">
                Engagement expectations
              </h2>
              <ul className="mt-5 space-y-3.5">
                {expectations.map(({ icon, text }) => (
                  <li key={text} className="flex items-start gap-3">
                    <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-lg bg-blue-500/10 border border-blue-500/20">
                      <svg
                        className="w-3.5 h-3.5 text-blue-400"
                        fill="none"
                        viewBox="0 0 24 24"
                      >
                        <path
                          stroke="currentColor"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d={icon}
                        />
                      </svg>
                    </span>
                    <span className="text-sm text-white/70 leading-relaxed">
                      {text}
                    </span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="mt-8 rounded-xl border border-white/10 bg-black/20 px-5 py-4">
              <p className="text-xs text-white/40 uppercase tracking-widest font-medium mb-1">
                What to expect
              </p>
              <p className="text-sm text-white/70 leading-relaxed">
                A focused 20-minute call. No sales pitch — just a clear diagnosis
                of your highest-leverage systems gap and a concrete next step.
              </p>
            </div>
          </section>
        </div>
      </Container>
    </main>
  );
}