"use client";

import { useEffect, useId, useRef, useState } from "react";
import Cal, { getCalApi } from "@calcom/embed-react";
import { Container } from "@/components/ui/Container";
import { SectionTitle } from "@/components/ui/SectionTitle";

interface FormState {
  fullName: string;
  companyName: string;
  email: string;
  bottleneck: string;
  timeline: string;
  currentSite: string;
  projectGoal: string;
}

const fieldClassName =
  "w-full appearance-none rounded-xl border border-white/8 bg-black/30 px-3 py-2.5 text-sm text-white outline-none transition-colors placeholder:text-white/30 hover:border-white/12 focus:border-white/14 focus:ring-1 focus:ring-white/10";
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
  const [open, setOpen] = useState(false);
  const wrapperRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (!wrapperRef.current) return;
      if (!wrapperRef.current.contains(event.target as Node)) {
        setOpen(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div className="flex flex-col gap-2" ref={wrapperRef}>
      <label htmlFor={id} className="text-sm text-white/75">
        {label}
      </label>

      <div className="relative">
        <button
          id={id}
          type="button"
          onClick={() => setOpen((prev) => !prev)}
          className={`group flex w-full items-center justify-between rounded-xl border px-3 py-2.5 text-left text-sm text-white outline-none transition-all duration-200 ${
            open
              ? "border-white/16 bg-white/[0.05]"
              : "border-white/10 bg-white/[0.03] hover:border-white/16 hover:bg-white/[0.045]"
          } focus-visible:ring-2 focus-visible:ring-white/10`}
          aria-expanded={open}
          aria-haspopup="listbox"
        >
          <span className="truncate">{value}</span>

          <svg
            aria-hidden="true"
            className={`h-4 w-4 shrink-0 text-white/40 transition-transform duration-200 ${
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

        <div
          className={`absolute left-0 right-0 top-[calc(100%+6px)] z-50 origin-top overflow-hidden rounded-xl border border-white/10 bg-zinc-950/98 shadow-[0_20px_60px_rgba(0,0,0,0.45)] backdrop-blur-xl transition-all duration-200 ${
            open
              ? "pointer-events-auto translate-y-0 opacity-100"
              : "pointer-events-none -translate-y-1 opacity-0"
          }`}
        >
          <div className="p-1.5">
            {options.map((option) => {
              const selected = value === option;

              return (
                <button
                  key={option}
                  type="button"
                  onClick={() => {
                    onChange(option);
                    setOpen(false);
                  }}
                  className={`flex w-full items-center rounded-lg px-3 py-2.5 text-sm transition-colors ${
                    selected
                      ? "bg-white/[0.08] text-white"
                      : "text-white/72 hover:bg-white/[0.06] hover:text-white"
                  }`}
                  role="option"
                  aria-selected={selected}
                >
                  <span className="truncate">{option}</span>
                </button>
              );
            })}
          </div>
        </div>
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
        {required ? <span className="ml-0.5 text-white/55">*</span> : null}
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
        {required ? <span className="ml-0.5 text-white/55">*</span> : null}
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
                ? "bg-white text-black"
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
            {currentStep === 1 ? "Project details" : "Schedule call"}
          </span>

          {currentStep < 2 ? (
            <div
              className={`mx-1 h-px w-8 ${
                step > currentStep ? "bg-white/30" : "bg-white/10"
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
  const rightPanelRef = useRef<HTMLElement>(null);

  const [form, setForm] = useState<FormState>({
    fullName: "",
    companyName: "",
    email: "",
    bottleneck: "Automation or workflows",
    timeline: "As soon as possible",
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
    if (step !== 2) return;

    void (async () => {
      const cal = await getCalApi({ namespace: CAL_NAMESPACE });
      cal("ui", {
        theme: "dark",
        styles: {
          branding: { brandColor: "#ffffff" },
        },
        layout: "month_view",
      });
    })();
  }, [step]);

  const calOpenUrl = "https://cal.com/daniel-i0cc0w/30min";

  const expectations = [
    {
      icon: "M4 6h16M4 12h10M4 18h7",
      text: "Clear scope and structured communication from the start",
    },
    {
      icon: "M13 7h8m0 0v8m0-8l-8 8-4-4-6 6",
      text: "Focus on real business improvements, not just visual changes",
    },
    {
      icon: "M4 7h16M7 4v16M17 4v16",
      text: "A system built to be maintainable and usable long-term",
    },
    {
      icon: "M12 8v4l3 3M21 12a9 9 0 11-18 0 9 9 0 0118 0z",
      text: "A realistic next step based on your actual bottleneck",
    },
  ];

  return (
    <main className="py-16 md:py-24">
      <Container>
        <SectionTitle
          eyebrow="Contact"
          title="Start with a strategy call"
          desc="A short call to understand your business, identify the main bottleneck, and decide on the right next step."
        />

        <p className="mt-4 max-w-2xl text-sm text-white/55">
          Best fit for businesses that need stronger systems, less manual work,
          and a clearer digital foundation.
        </p>

        <div className="mt-10 grid gap-4 md:grid-cols-2">
          <section className="relative overflow-hidden rounded-3xl border border-white/6 bg-white/[0.03] p-7 ring-1 ring-white/8 backdrop-blur-sm">
            <div className="absolute inset-0 bg-gradient-to-br from-white/[0.03] to-transparent opacity-80" />

            <div className="relative z-10">
              <StepIndicator step={step} />

              {step === 1 ? (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <h2 className="mb-5 text-lg font-semibold text-white">
                    A few details before the call
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

                  <div className="flex items-center gap-3 py-1">
                    <div className="h-px flex-1 bg-white/10" />
                    <span className="text-xs font-medium text-white/30">
                      Project context
                    </span>
                    <div className="h-px flex-1 bg-white/10" />
                  </div>

                  <TextareaField
                    label="What do you want to improve?"
                    name="projectGoal"
                    placeholder="Briefly describe what you want to improve, build, or automate."
                    required
                    value={form.projectGoal}
                    onChange={set("projectGoal")}
                  />

                  <SelectField
                    label="Biggest bottleneck"
                    name="bottleneck"
                    options={[
                      "Website or platform",
                      "Automation or workflows",
                      "Both",
                    ]}
                    value={form.bottleneck}
                    onChange={set("bottleneck")}
                  />

                  <SelectField
                    label="Timeline"
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
                    label="Current website or tools"
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
                    className="mt-2 w-full rounded-2xl bg-white px-5 py-3 text-sm font-semibold text-black transition hover:opacity-90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/20 focus-visible:ring-offset-2 focus-visible:ring-offset-black disabled:cursor-not-allowed disabled:opacity-50"
                  >
                    {submitting ? "Saving…" : "Continue to booking"}
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
                      className="flex items-center gap-1 text-xs text-white/40 transition-colors hover:text-white/70 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/20 focus-visible:ring-offset-2 focus-visible:ring-offset-black"
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
                        "metadata[bottleneck]": form.bottleneck || "",
                        "metadata[timeline]": form.timeline || "",
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
            </div>
          </section>

          <section
            ref={rightPanelRef}
            className="relative self-start overflow-hidden rounded-3xl border border-white/6 bg-white/[0.03] p-7 ring-1 ring-white/8 backdrop-blur-sm"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-white/[0.03] to-transparent opacity-80" />

            <div className="relative z-10 flex flex-col gap-8">
              <div>
                <h2 className="text-lg font-semibold text-white">What to expect</h2>

                <ul className="mt-5 space-y-3.5">
                  {expectations.map(({ icon, text }) => (
                    <li key={text} className="flex items-start gap-3">
                      <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-lg border border-white/10 bg-white/[0.04]">
                        <svg
                          className="h-3.5 w-3.5 text-white/70"
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

              <div className="rounded-xl border border-white/10 bg-black/20 px-5 py-4">
                <p className="mb-1 text-xs font-medium uppercase tracking-widest text-white/40">
                  On the first call
                </p>
                <p className="text-sm leading-relaxed text-white/70">
                  A focused 20-minute conversation to review your current setup,
                  identify the main bottleneck, and decide on the most realistic
                  next step.
                </p>
              </div>
            </div>
          </section>
        </div>
      </Container>
    </main>
  );
}