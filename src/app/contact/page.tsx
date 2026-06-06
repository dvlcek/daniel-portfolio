"use client";

import {
  type FormEvent,
  useEffect,
  useId,
  useRef,
  useState,
} from "react";
import dynamic from "next/dynamic";
import { ArrowLeft, ArrowRight, Check, ExternalLink } from "lucide-react";
import { Container } from "@/components/ui/Container";

interface FormState {
  fullName: string;
  companyName: string;
  email: string;
  bottleneck: string;
  timeline: string;
  currentSite: string;
  projectGoal: string;
}

type SelectFieldProps = {
  label: string;
  name: keyof FormState;
  options: string[];
  value: string;
  onChange: (value: string) => void;
};

type FieldProps = {
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
};

type TextareaFieldProps = {
  label: string;
  name: keyof FormState;
  placeholder?: string;
  required?: boolean;
  value: string;
  onChange: (value: string) => void;
};

const CAL_LINK = "daniel-i0cc0w/30min";
const CAL_NAMESPACE = "30min";
const CAL_OPEN_URL = "https://cal.com/daniel-i0cc0w/30min";

const CalEmbed = dynamic(() => import("@calcom/embed-react"), {
  ssr: false,
  loading: () => (
    <div className="flex h-[540px] items-center justify-center text-sm text-white/42">
      Loading calendar...
    </div>
  ),
});

const fieldClassName =
  "w-full appearance-none rounded-2xl border border-white/[0.08] bg-white/[0.018] px-4 py-3 text-sm text-white outline-none transition-[background-color,border-color,box-shadow] duration-300 placeholder:text-white/28 hover:border-white/[0.12] hover:bg-white/[0.026] focus:border-brand-blue/40 focus:bg-white/[0.028] focus:ring-2 focus:ring-brand-blue/10";

const expectations = [
  "Your current website, tools, and lead handling process",
  "Where manual work, scattered tools, or weak structure create friction",
  "Whether a website, platform, automation, or remake is the right next step",
  "A realistic next step based on priority, timeline, and scope",
];

const callFit = [
  "Companies that need a clearer website or lead path",
  "Businesses losing time through repeated admin or disconnected tools",
  "Owners planning a platform, workflow, automation, or website remake",
];

function SelectField({
  label,
  name,
  options,
  value,
  onChange,
}: SelectFieldProps) {
  const id = useId();
  const listboxId = useId();
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
    <div ref={wrapperRef} className="flex flex-col gap-2">
      <label htmlFor={id} className="text-sm font-medium text-white/68">
        {label}
      </label>

      <input type="hidden" name={name} value={value} />

      <div className="relative">
        <button
          id={id}
          type="button"
          aria-expanded={open}
          aria-haspopup="listbox"
          aria-controls={listboxId}
          onClick={() => setOpen((current) => !current)}
          onKeyDown={(event) => {
            if (event.key === "Escape") {
              setOpen(false);
            }
          }}
          className={[
            "group flex w-full items-center justify-between gap-4 rounded-2xl border px-4 py-3 text-left text-sm text-white outline-none transition-[background-color,border-color,box-shadow] duration-300 focus-visible:ring-2 focus-visible:ring-brand-blue/35 focus-visible:ring-offset-2 focus-visible:ring-offset-site-bg",
            open
              ? "border-brand-blue/35 bg-brand-blue/[0.055] ring-2 ring-brand-blue/10"
              : "border-white/[0.08] bg-white/[0.018] hover:border-white/[0.12] hover:bg-white/[0.026]",
          ].join(" ")}
        >
          <span className="truncate">{value}</span>

          <span
            className={[
              "flex h-5 w-5 shrink-0 items-center justify-center text-white/38 transition-transform duration-300 group-hover:text-brand-blue-light",
              open ? "rotate-180 text-brand-blue-light" : "",
            ].join(" ")}
          >
            <svg
              aria-hidden="true"
              className="h-4 w-4"
              fill="none"
              viewBox="0 0 24 24"
            >
              <path
                d="m19 9-7 7-7-7"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
              />
            </svg>
          </span>
        </button>

        <div
          id={listboxId}
          role="listbox"
          aria-label={label}
          className={[
            "absolute left-0 right-0 top-[calc(100%+8px)] z-50 origin-top overflow-hidden rounded-2xl border border-white/[0.10] bg-site-bg-deep/95 p-1.5 shadow-[0_24px_70px_rgba(0,0,0,0.45)] backdrop-blur-xl transition-all duration-200",
            open
              ? "pointer-events-auto translate-y-0 opacity-100"
              : "pointer-events-none -translate-y-1 opacity-0",
          ].join(" ")}
        >
          {options.map((option) => {
            const selected = value === option;

            return (
              <button
                key={option}
                type="button"
                role="option"
                aria-selected={selected}
                tabIndex={open ? 0 : -1}
                onClick={() => {
                  onChange(option);
                  setOpen(false);
                }}
                onKeyDown={(event) => {
                  if (event.key === "Escape") {
                    setOpen(false);
                  }
                }}
                className={[
                  "flex w-full items-center justify-between rounded-xl px-3 py-2.5 text-sm transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-blue/30",
                  selected
                    ? "bg-brand-blue/10 text-brand-blue-light"
                    : "text-white/68 hover:bg-white/[0.045] hover:text-white",
                ].join(" ")}
              >
                <span className="truncate">{option}</span>

                {selected ? <Check size={14} /> : null}
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
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
      <label htmlFor={id} className="text-sm font-medium text-white/68">
        {label}
        {required ? <span className="ml-1 text-brand-blue-light">*</span> : null}
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
      <label htmlFor={id} className="text-sm font-medium text-white/68">
        {label}
        {required ? <span className="ml-1 text-brand-blue-light">*</span> : null}
      </label>

      <textarea
        id={id}
        name={name}
        required={required}
        placeholder={placeholder}
        value={value}
        onChange={(event) => onChange(event.target.value)}
        rows={5}
        className={`${fieldClassName} resize-none`}
      />
    </div>
  );
}

function StepIndicator({ step }: { step: 1 | 2 }) {
  const steps = [
    { value: 1, label: "Project details" },
    { value: 2, label: "Schedule call" },
  ] as const;

  return (
    <div className="flex items-center gap-3">
      {steps.map((item, index) => {
        const active = step >= item.value;
        const completed = step > item.value;

        return (
          <div key={item.value} className="flex items-center gap-3">
            <div className="flex items-center gap-3">
              <span
                className={[
                  "flex h-8 w-8 items-center justify-center rounded-full border text-xs font-semibold transition duration-300",
                  active
                    ? "border-brand-blue/35 bg-brand-blue/10 text-brand-blue-light"
                    : "border-white/[0.08] bg-white/[0.018] text-white/32",
                ].join(" ")}
              >
                {completed ? <Check size={14} /> : item.value}
              </span>

              <span
                className={[
                  "text-xs font-medium transition duration-300",
                  active ? "text-white/78" : "text-white/32",
                ].join(" ")}
              >
                {item.label}
              </span>
            </div>

            {index < steps.length - 1 ? (
              <span
                className={[
                  "h-px w-8 transition duration-300",
                  step > item.value ? "bg-brand-blue/40" : "bg-white/[0.08]",
                ].join(" ")}
              />
            ) : null}
          </div>
        );
      })}
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
    bottleneck: "Lead flow or CRM",
    timeline: "As soon as possible",
    currentSite: "",
    projectGoal: "",
  });

  const set = (field: keyof FormState) => (value: string) =>
    setForm((current) => ({ ...current, [field]: value }));

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setSubmitting(true);

    try {
      await new Promise((resolve) => setTimeout(resolve, 400));
      setStep(2);
    } catch (error) {
      console.error("Submit error:", error);
    } finally {
      setSubmitting(false);
    }
  }

  useEffect(() => {
    if (step !== 2) return;

    void (async () => {
      const { getCalApi } = await import("@calcom/embed-react");
      const cal = await getCalApi({ namespace: CAL_NAMESPACE });

      cal("ui", {
        theme: "dark",
        styles: {
          branding: { brandColor: "#1E3CFF" },
        },
        layout: "month_view",
      });
    })();
  }, [step]);

  return (
    <main className="relative min-h-screen overflow-hidden bg-site-bg py-16 md:py-24">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute inset-x-0 top-0 h-px bg-linear-to-r from-transparent via-white/10 to-transparent" />
        <div className="absolute -left-40 top-20 h-96 w-96 rounded-full bg-brand-blue/[0.07] blur-3xl" />
        <div className="absolute -right-44 top-[28rem] h-[34rem] w-[34rem] rounded-full bg-brand-blue-deep/20 blur-3xl" />
        <div className="absolute inset-x-0 bottom-0 h-80 bg-linear-to-t from-site-bg-deep/70 to-transparent" />
      </div>

      <Container className="relative z-10 max-w-7xl">
        <header className="border-b border-white/[0.08] pb-10 md:pb-12">
          <div className="grid gap-8 lg:grid-cols-[1fr_0.72fr] lg:items-end">
            <div>
              <p className="text-xs font-medium uppercase tracking-[0.32em] text-brand-blue md:text-sm">
                Contact
              </p>

              <h1 className="mt-5 max-w-4xl text-balance text-4xl font-semibold tracking-tight text-white md:text-6xl md:leading-[1.05]">
                Tell me what you want to improve.
              </h1>
            </div>

            <p className="max-w-xl text-base leading-relaxed text-white/60 md:text-lg lg:justify-self-end">
              Share a little context about your website, workflow, tools, or
              repeated manual work. Then choose a time to discuss the most
              realistic next step.
            </p>
          </div>
        </header>

        <section className="mt-10 grid gap-6 lg:grid-cols-[1.08fr_0.72fr] lg:items-start">
          <div className="relative overflow-hidden rounded-[2rem] border border-white/[0.08] bg-white/[0.022] p-5 backdrop-blur-xl md:p-7">
            <div className="pointer-events-none absolute inset-x-8 top-0 h-px bg-linear-to-r from-transparent via-brand-blue-soft/60 to-transparent" />

            <div className="relative z-10">
              <div className="flex flex-col gap-5 border-b border-white/[0.08] pb-6 md:flex-row md:items-center md:justify-between">
                <div>
                    <p className="text-sm font-semibold text-white">
                    Project call intake
                  </p>

                  <p className="mt-1 text-sm text-white/42">
                    This prepares the booking context. It is not a separate
                    saved form submission.
                  </p>
                </div>

                <StepIndicator step={step} />
              </div>

              {step === 1 ? (
                <form onSubmit={handleSubmit} className="mt-7 space-y-5">
                  <div className="grid gap-4 sm:grid-cols-2">
                    <Field
                      label="Full name"
                      name="fullName"
                      placeholder="Jane Smith"
                      required
                      autoComplete="name"
                      value={form.fullName}
                      onChange={set("fullName")}
                    />

                    <Field
                      label="Company name"
                      name="companyName"
                      placeholder="Acme Inc."
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
                    placeholder="jane@company.com"
                    required
                    autoComplete="email"
                    inputMode="email"
                    spellCheck={false}
                    value={form.email}
                    onChange={set("email")}
                  />

                  <div className="my-2 flex items-center gap-3">
                    <span className="h-px flex-1 bg-white/[0.08]" />
                    <span className="text-xs uppercase tracking-[0.22em] text-white/30">
                      Project context
                    </span>
                    <span className="h-px flex-1 bg-white/[0.08]" />
                  </div>

                  <TextareaField
                      label="What do you want to improve?"
                    name="projectGoal"
                    placeholder="Briefly describe the website, workflow, dashboard, CRM, platform, or repeated task you want to improve."
                    required
                    value={form.projectGoal}
                    onChange={set("projectGoal")}
                  />

                  <div className="grid gap-4 sm:grid-cols-2">
                    <SelectField
                      label="Biggest bottleneck"
                      name="bottleneck"
                      options={[
                        "Website or landing page",
                        "Lead flow or CRM",
                        "Platform or internal dashboard",
                        "Automation or repeated tasks",
                        "Multiple areas / not sure yet",
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
                  </div>

                  <Field
                    label="Current website, CRM, or tools"
                    name="currentSite"
                    type="url"
                    placeholder="https://..."
                    autoComplete="url"
                    inputMode="url"
                    spellCheck={false}
                    value={form.currentSite}
                    onChange={set("currentSite")}
                  />

                  <button
                    type="submit"
                    disabled={submitting}
                    className="group mt-2 inline-flex w-full items-center justify-center gap-2 rounded-2xl bg-brand-blue-vivid px-5 py-3.5 text-sm font-semibold text-white transition duration-300 hover:bg-brand-blue focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-blue/35 focus-visible:ring-offset-2 focus-visible:ring-offset-site-bg disabled:cursor-not-allowed disabled:opacity-50"
                  >
                    <span>{submitting ? "Preparing booking..." : "Continue to booking"}</span>
                    {!submitting ? (
                      <ArrowRight
                        size={15}
                        className="transition duration-300 group-hover:translate-x-0.5"
                      />
                    ) : null}
                  </button>

                  <p className="text-center text-xs leading-relaxed text-white/34">
                    Your details are attached to the calendar booking in the
                    next step.
                  </p>
                </form>
              ) : (
                <div className="mt-7 space-y-5">
                  <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                    <div>
                      <p className="text-lg font-semibold text-white">
                        Pick a time that works
                      </p>

                      <p className="mt-1 text-sm text-white/42">
                        Your details will be attached to the booking.
                      </p>
                    </div>

                    <button
                      type="button"
                      onClick={() => setStep(1)}
                      className="inline-flex items-center gap-2 rounded-lg text-sm text-white/42 transition-colors duration-300 hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-blue/35 focus-visible:ring-offset-2 focus-visible:ring-offset-site-bg"
                    >
                      <ArrowLeft size={14} />
                      Edit details
                    </button>
                  </div>

                  <div className="overflow-hidden rounded-[1.5rem] border border-white/[0.08] bg-site-bg-deep/55">
                    <div className="flex items-center justify-between border-b border-white/[0.08] px-4 py-3">
                      <span className="text-xs uppercase tracking-[0.2em] text-white/35">
                        Booking
                      </span>

                      <a
                        href={CAL_OPEN_URL}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 rounded-lg text-xs text-white/42 transition-colors duration-300 hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-blue/35 focus-visible:ring-offset-2 focus-visible:ring-offset-site-bg"
                      >
                        Open in new tab
                        <ExternalLink size={12} />
                      </a>
                    </div>

                    <CalEmbed
                      namespace={CAL_NAMESPACE}
                      calLink={CAL_LINK}
                      style={{
                        width: "100%",
                        height: "540px",
                        overflow: "auto",
                      }}
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

                  <p
                    className="text-center text-xs leading-relaxed text-white/34"
                    aria-live="polite"
                  >
                    A confirmation will be sent to{" "}
                    <span className="text-white/55">{form.email}</span>
                  </p>
                </div>
              )}
            </div>
          </div>

          <aside className="relative overflow-hidden rounded-[2rem] border border-white/[0.08] bg-white/[0.018] p-6 backdrop-blur-xl md:p-7 lg:sticky lg:top-28">
            <div className="pointer-events-none absolute inset-x-8 top-0 h-px bg-linear-to-r from-transparent via-brand-blue-soft/45 to-transparent" />

            <div className="relative z-10">
              <p className="text-xs uppercase tracking-[0.24em] text-brand-blue">
                What we clarify
              </p>

              <h2 className="mt-4 max-w-md text-2xl font-semibold tracking-tight text-white">
                The goal is clarity before building.
              </h2>

              <p className="mt-4 text-sm leading-relaxed text-white/52">
                The call is used to understand what is messy, manual, or
                unclear, not to push unnecessary features or oversized scope.
              </p>

              <div className="mt-7 space-y-4">
                {expectations.map((item, index) => (
                  <div key={item} className="flex gap-4">
                    <span className="w-6 shrink-0 font-mono text-xs text-brand-blue-light">
                      {String(index + 1).padStart(2, "0")}
                    </span>

                    <p className="text-sm leading-relaxed text-white/60">
                      {item}
                    </p>
                  </div>
                ))}
              </div>

              <div className="mt-8 rounded-3xl border border-white/[0.08] bg-site-bg/45 p-5">
                <p className="text-xs uppercase tracking-[0.22em] text-white/30">
                  Best fit
                </p>

                <div className="mt-4 space-y-3">
                  {callFit.map((item) => (
                    <div key={item} className="flex gap-3">
                      <span className="mt-1 flex h-5 w-5 shrink-0 items-center justify-center rounded-lg border border-brand-blue/25 bg-brand-blue/10 text-brand-blue-light">
                        <Check size={12} />
                      </span>

                      <p className="text-sm leading-relaxed text-white/58">
                        {item}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              <p className="mt-6 text-sm leading-relaxed text-white/38">
                Clear direction, honest feedback, and a realistic next step for
                your website, platform, workflow, automation, or internal
                operation.
              </p>
            </div>
          </aside>
        </section>
      </Container>
    </main>
  );
}
