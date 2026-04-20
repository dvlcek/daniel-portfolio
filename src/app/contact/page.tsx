"use client";

import { useEffect, useId, useState } from "react";
import Cal, { getCalApi } from "@calcom/embed-react";
import { Container } from "@/components/ui/Container";
import { SectionTitle } from "@/components/ui/SectionTitle";

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
  projectGoal: string;
}

const fieldClassName =
  "w-full rounded-xl border border-white/15 bg-black/20 px-3 py-2 text-sm text-white transition-colors placeholder:text-white/30 focus-visible:border-blue-400/60 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-400/35";

interface SelectFieldProps {
  label: string;
  name: keyof FormState;
  options: string[];
  value: string;
  onChange: (value: string) => void;
}

function SelectField({
  label,
  name,
  options,
  value,
  onChange,
}: SelectFieldProps) {
  const id = useId();

  return (
    <div className="flex flex-col gap-2">
      <label htmlFor={id} className="text-sm text-white/75">
        {label}
      </label>
      <div className="relative">
        <select
          id={id}
          name={name}
          value={value}
          onChange={(event) => onChange(event.target.value)}
          className={`${fieldClassName} appearance-none pr-10`}
        >
          {options.map((option) => (
            <option key={option} value={option} className="bg-zinc-950 text-white">
              {option}
            </option>
          ))}
        </select>
        <svg
          aria-hidden="true"
          className="pointer-events-none absolute right-3 top-1/2 h-4 w-4 -translate-y-1/2 text-white/40"
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
      </div>
    </div>
  );
}

interface FieldProps {
  label: string;
  name: keyof FormState;
  type?: string;
  placeholder?: string;
  required?: boolean;
  value: string;
  onChange: (value: string) => void;
  autoComplete?: string;
  inputMode?:
    | "text"
    | "email"
    | "tel"
    | "url"
    | "search"
    | "numeric"
    | "decimal"
    | "none";
  spellCheck?: boolean;
}

function Field({
  label,
  name,
  type = "text",
  placeholder,
  required,
  value,
  onChange,
  autoComplete,
  inputMode,
  spellCheck,
}: FieldProps) {
  const id = useId();

  return (
    <div className="flex flex-col gap-2">
      <label htmlFor={id} className="text-sm text-white/75">
        {label}
        {required ? <span className="ml-0.5 text-blue-400">*</span> : null}
      </label>
      <input
        id={id}
        name={name}
        type={type}
        required={required}
        autoComplete={autoComplete}
        inputMode={inputMode}
        spellCheck={spellCheck}
        placeholder={placeholder}
        value={value}
        onChange={(event) => onChange(event.target.value)}
        className={fieldClassName}
      />
    </div>
  );
}

interface TextareaFieldProps {
  label: string;
  name: keyof FormState;
  placeholder?: string;
  required?: boolean;
  value: string;
  onChange: (value: string) => void;
}

function TextareaField({
  label,
  name,
  placeholder,
  required,
  value,
  onChange,
}: TextareaFieldProps) {
  const id = useId();

  return (
    <div className="flex flex-col gap-2">
      <label htmlFor={id} className="text-sm text-white/75">
        {label}
        {required ? <span className="ml-0.5 text-blue-400">*</span> : null}
      </label>
      <textarea
        id={id}
        name={name}
        required={required}
        placeholder={placeholder}
        value={value}
        onChange={(event) => onChange(event.target.value)}
        rows={4}
        className={`${fieldClassName} resize-none`}
      />
    </div>
  );
}

function StepIndicator({ step }: { step: 1 | 2 }) {
  return (
    <div className="mb-8 flex items-center gap-3">
      {([1, 2] as const).map((currentStep) => (
        <div key={currentStep} className="flex items-center gap-2">
          <div
            className={`flex h-7 w-7 items-center justify-center rounded-full text-xs font-semibold transition-all duration-300 ${
              step >= currentStep
                ? "bg-blue-500 text-white"
                : "bg-white/10 text-white/40"
            }`}
          >
            {step > currentStep ? (
              <svg className="h-3.5 w-3.5" fill="none" viewBox="0 0 24 24">
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2.5"
                  d="M5 13l4 4L19 7"
                />
              </svg>
            ) : (
              currentStep
            )}
          </div>
          <span
            className={`text-xs font-medium ${
              step >= currentStep ? "text-white/80" : "text-white/30"
            }`}
          >
            {currentStep === 1 ? "Your details" : "Pick a time"}
          </span>
          {currentStep < 2 ? (
            <div
              className={`mx-1 h-px w-8 ${
                step > currentStep ? "bg-blue-500/50" : "bg-white/10"
              }`}
            />
          ) : null}
        </div>
      ))}
    </div>
  );
}

export default function ContactPage() {
  const [step, setStep] = useState<1 | 2>(1);
  const [submitting, setSubmitting] = useState(false);

  const [form, setForm] = useState<FormState>({
    fullName: "",
    companyName: "",
    email: "",
    phone: "",
    companySize: "",
    bottleneck: "Automation / Workflows",
    timeline: "As soon as possible",
    budgetRange: "",
    currentSite: "",
    projectGoal: "",
  });

  const set = (field: keyof FormState) => (value: string) =>
    setForm((current) => ({ ...current, [field]: value }));

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setSubmitting(true);

    try {
      console.log("New lead:", form);
      await new Promise((resolve) => setTimeout(resolve, 400));
      setStep(2);
    } catch (error) {
      console.error("Submit error:", error);
    } finally {
      setSubmitting(false);
    }
  };

  const CAL_LINK = "daniel-i0cc0w/30min";
  const CAL_NAMESPACE = "30min";

  useEffect(() => {
    if (step !== 2) {
      return;
    }

    void (async () => {
      const cal = await getCalApi({ namespace: CAL_NAMESPACE });
      cal("ui", {
        theme: "dark",
        styles: {
          branding: { brandColor: "#3B82F6" },
        },
        layout: "month_view",
      });
    })();
  }, [step]);

  const calOpenUrl = "https://cal.com/daniel-i0cc0w/30min";

  const expectations = [
    {
      icon: "M9 12l2 2 4-4",
      text: "Clear milestones and structured communication",
    },
    {
      icon: "M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z",
      text: "Clean documentation and handover planning",
    },
    {
      icon: "M13 7h8m0 0v8m0-8l-8 8-4-4-6 6",
      text: "Focus on measurable business improvements",
    },
    {
      icon: "M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15",
      text: "Clear scope before any build starts",
    },
  ];

  return (
    <main className="py-16 md:py-24">
      <Container>
        <SectionTitle
          eyebrow="Contact"
          title="Start with a strategy call"
          desc="A short call to understand your business, current bottlenecks, and whether the right next step is a platform build, rebuild, or automation project."
        />

        <p className="mt-4 max-w-2xl text-sm text-white/55">
          Best fit for businesses looking for a serious website, platform, or
          automation build.
        </p>

        <div className="mt-10 grid gap-4 md:grid-cols-2">
          <section className="rounded-2xl bg-white/5 p-7 ring-1 ring-white/10">
            <StepIndicator step={step} />

            {step === 1 ? (
              <form onSubmit={handleSubmit} className="space-y-4">
                <h2 className="mb-5 text-lg font-semibold text-white">
                  A few details before we speak
                </h2>

                <div className="grid gap-4 sm:grid-cols-2">
                  <Field
                    label="Full name"
                    name="fullName"
                    placeholder="Jane Smith…"
                    required
                    autoComplete="name"
                    value={form.fullName}
                    onChange={set("fullName")}
                  />
                  <Field
                    label="Company name"
                    name="companyName"
                    placeholder="Acme Inc.…"
                    required
                    autoComplete="organization"
                    value={form.companyName}
                    onChange={set("companyName")}
                  />
                </div>

                <Field
                  label="Email"
                  name="email"
                  type="email"
                  placeholder="jane@acme.com…"
                  required
                  autoComplete="email"
                  inputMode="email"
                  spellCheck={false}
                  value={form.email}
                  onChange={set("email")}
                />

                <Field
                  label="Phone number"
                  name="phone"
                  type="tel"
                  placeholder="+43 15123457…"
                  autoComplete="tel"
                  inputMode="tel"
                  spellCheck={false}
                  value={form.phone}
                  onChange={set("phone")}
                />

                <div className="flex items-center gap-3 py-1">
                  <div className="h-px flex-1 bg-white/10" />
                  <span className="text-xs font-medium text-white/30">
                    Project context
                  </span>
                  <div className="h-px flex-1 bg-white/10" />
                </div>

                <TextareaField
                  label="Project goal"
                  name="projectGoal"
                  placeholder="Briefly describe what you want to improve, build, or automate…"
                  value={form.projectGoal}
                  onChange={set("projectGoal")}
                />

                <Field
                  label="Company size"
                  name="companySize"
                  placeholder="e.g. 10–50 employees…"
                  value={form.companySize}
                  onChange={set("companySize")}
                />

                <SelectField
                  label="Biggest bottleneck"
                  name="bottleneck"
                  options={[
                    "Website / Platform",
                    "Automation / Workflows",
                    "Both",
                  ]}
                  value={form.bottleneck}
                  onChange={set("bottleneck")}
                />

                <SelectField
                  label="Timeline urgency"
                  name="timeline"
                  options={[
                    "As soon as possible",
                    "Within 1–2 months",
                    "Planning for a later phase",
                  ]}
                  value={form.timeline}
                  onChange={set("timeline")}
                />

                <Field
                  label="Planned budget range"
                  name="budgetRange"
                  placeholder="e.g. €5k–€15k…"
                  value={form.budgetRange}
                  onChange={set("budgetRange")}
                />

                <Field
                  label="Current site / tools"
                  name="currentSite"
                  type="url"
                  placeholder="https://…"
                  autoComplete="url"
                  inputMode="url"
                  spellCheck={false}
                  value={form.currentSite}
                  onChange={set("currentSite")}
                />

                <button
                  type="submit"
                  disabled={submitting}
                  className="mt-2 w-full rounded-2xl bg-white px-5 py-3 text-sm font-semibold text-black transition hover:opacity-90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-400/80 focus-visible:ring-offset-2 focus-visible:ring-offset-black disabled:cursor-not-allowed disabled:opacity-50"
                >
                  {submitting ? "Saving…" : "Continue to Scheduling"}
                </button>
              </form>
            ) : (
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <h2 className="text-lg font-semibold text-white">
                    Pick a time that works
                  </h2>
                  <button
                    type="button"
                    onClick={() => setStep(1)}
                    className="flex items-center gap-1 text-xs text-white/40 transition-colors hover:text-white/70 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-400/80 focus-visible:ring-offset-2 focus-visible:ring-offset-black"
                  >
                    <svg className="h-3.5 w-3.5" fill="none" viewBox="0 0 24 24">
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

                <div className="relative overflow-hidden rounded-xl border border-white/10 bg-black/20">
                  <div className="flex items-center justify-between border-b border-white/10 bg-black/30 px-4 py-3">
                    <span className="text-xs text-white/50">Booking</span>
                    <a
                      href={calOpenUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="text-xs text-white/50 transition hover:text-white/80"
                    >
                      Open in new tab →
                    </a>
                  </div>

                  <Cal
                    namespace={CAL_NAMESPACE}
                    calLink={CAL_LINK}
                    style={{ width: "100%", height: "480px", overflow: "auto" }}
                    config={{
                      name: form.fullName || "",
                      email: form.email || "",
                      "metadata[fullName]": form.fullName || "",
                      "metadata[companyName]": form.companyName || "",
                      "metadata[phone]": form.phone || "",
                      "metadata[companySize]": form.companySize || "",
                      "metadata[bottleneck]": form.bottleneck || "",
                      "metadata[timeline]": form.timeline || "",
                      "metadata[budgetRange]": form.budgetRange || "",
                      "metadata[currentSite]": form.currentSite || "",
                      "metadata[projectGoal]": form.projectGoal || "",
                    }}
                  />
                </div>

                <p className="text-center text-xs text-white/30" aria-live="polite">
                  A confirmation will be sent to{" "}
                  <span className="text-white/50">{form.email}</span>
                </p>
              </div>
            )}
          </section>

          <section className="flex flex-col justify-between rounded-2xl bg-white/5 p-7 ring-1 ring-white/10">
            <div>
              <h2 className="text-lg font-semibold text-white">
                What working together looks like
              </h2>
              <ul className="mt-5 space-y-3.5">
                {expectations.map(({ icon, text }) => (
                  <li key={text} className="flex items-start gap-3">
                    <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-lg border border-blue-500/20 bg-blue-500/10">
                      <svg
                        className="h-3.5 w-3.5 text-blue-400"
                        fill="none"
                        viewBox="0 0 24 24"
                        aria-hidden="true"
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
                    <span className="text-sm leading-relaxed text-white/70">
                      {text}
                    </span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="mt-8 rounded-xl border border-white/10 bg-black/20 px-5 py-4">
              <p className="mb-1 text-xs font-medium uppercase tracking-widest text-white/40">
                What to expect
              </p>
              <p className="text-sm leading-relaxed text-white/70">
                A focused 20-minute call to review your current setup, identify
                the main bottleneck, and clarify the most realistic next step.
              </p>
            </div>
          </section>
        </div>
      </Container>
    </main>
  );
}
