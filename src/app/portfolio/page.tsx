"use client";

import { useState, useEffect, useRef } from "react";

interface ProjectStat {
  label: string;
  value: string;
}

interface ProjectLinks {
  github: string | null;
  live: string | null;
}

interface TechItem {
  name: string;
  description: string;
}

interface Project {
  id: number;
  name: string;
  headline: string;
  description: string;
  longDescription: string;
  problem: string;
  solution: string;
  tech: string[];
  techStack: TechItem[];
  year: string;
  role: string;
  status: string;
  color: string;
  image: string;
  gallery: string[];
  stats: ProjectStat[];
  links: ProjectLinks;
}

const projects: Project[] = [
  {
    id: 1,
    name: "G Trader",
    headline: "Automated Trading Platform & Brand",
    description:
      "Full trading platform with Telegram bot automation, monthly giveaways, and a complete brand — website, Instagram, emails, all running without staff.",
    longDescription:
      "G Trader was a fully branded trading platform built end-to-end — from the website and visual identity to the backend infrastructure. The platform connected users to live trading via a Telegram bot that executed trades automatically, managed monthly giveaway campaigns, and sent automated email sequences.",
    problem:
      "The client needed a way to offer trading signals and automated execution to retail users — but had zero technical staff and no budget for a full ops team. Manual management of users, payouts, and signal delivery was completely unscalable.",
    solution:
      "Built a fully automated stack: a PHP/JS website for onboarding and the brand face, a Python bot connected to the trading platform API for automatic signal execution, a Telegram bot for user communication and alerts, and an email automation pipeline for campaigns and giveaways. Every user action — from signup to trade confirmation — required zero human involvement.",
    tech: ["PHP", "Python", "JavaScript", "Telegram API", "MySQL"],
    techStack: [
      {
        name: "PHP + MySQL",
        description:
          "Core backend handling user accounts, subscription management, and dashboard. Custom-built without a framework to keep the footprint minimal and fast.",
      },
      {
        name: "Python Automation",
        description:
          "The trading engine. Pulled signals, executed orders via the broker API, logged results, and triggered notifications — running 24/7 on a VPS with no downtime.",
      },
      {
        name: "Telegram Bot API",
        description:
          "Primary user communication channel. Delivered trade alerts, onboarding flows, giveaway entries, and support — replacing the need for any support staff.",
      },
      {
        name: "HTML / CSS / JS",
        description:
          "A fully custom frontend built for visual impact — rich CSS transitions, animated elements, and a dark-navy-gold brand aesthetic that matched the premium positioning.",
      },
      {
        name: "Email Automation",
        description:
          "SMTP-based pipeline for onboarding sequences, monthly giveaway campaigns, and trade summaries — all triggered automatically based on user actions.",
      },
    ],
    year: "",
    role: "Full Stack + Brand",
    status: "Production",
    color: "#c9a84c",
    image:
      "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=800&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1640340434855-6084b1f4901c?w=600&q=80",
      "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=600&q=80",
      "https://images.unsplash.com/photo-1642790551116-18e4f6e3c3f9?w=600&q=80",
      "https://images.unsplash.com/photo-1607863680198-23d4b2565df0?w=600&q=80",
      "https://images.unsplash.com/photo-1559526324-4b87b5e36e44?w=600&q=80",
    ],
    stats: [
      { label: "Launch Users", value: "50" },
      { label: "Month 1 Volume", value: "$100k" },
      { label: "Staff Needed", value: "0" },
    ],
    links: { github: null, live: null },
  },
  // ─── Add more projects here ───────────────────────────────────────────────
];

// ─── Detail Modal ────────────────────────────────────────────────────────────

function DetailModal({
  project,
  onClose,
}: {
  project: Project;
  onClose: () => void;
}) {
  const galleryRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };

    // Block wheel/touch scroll unless the event originates inside the modal box
    const blockScroll = (e: WheelEvent | TouchEvent) => {
      const modal = document.getElementById("modal-scroll-box");
      if (modal && modal.contains(e.target as Node)) return;
      e.preventDefault();
      e.stopPropagation();
    };

    window.addEventListener("keydown", handleKey);
    window.addEventListener("wheel", blockScroll as EventListener, { passive: false, capture: true });
    window.addEventListener("touchmove", blockScroll as EventListener, { passive: false, capture: true });

    return () => {
      window.removeEventListener("keydown", handleKey);
      window.removeEventListener("wheel", blockScroll as EventListener, { capture: true });
      window.removeEventListener("touchmove", blockScroll as EventListener, { capture: true });
    };
  }, [onClose]);

  const c = project.color;

  return (
    <div
      onClick={onClose}
      className="fixed inset-0 z-50 flex items-start justify-center"
      style={{
        background: "rgba(0,0,0,0.92)",
        backdropFilter: "blur(20px)",
        WebkitBackdropFilter: "blur(20px)",
        animation: "modalFadeIn 0.3s ease",
        overflowY: "hidden",
        padding: "2rem",
      }}
    >
      <div
        onClick={(e) => e.stopPropagation()}
        id="modal-scroll-box"
        className="w-full rounded-2xl modal-inner"
        style={{
          maxWidth: "860px",
          maxHeight: "90vh",
          overflowY: "scroll",
          scrollBehavior: "smooth",
          background: "#0d0d14",
          border: `1px solid ${c}25`,
          boxShadow: `0 0 120px ${c}10, 0 50px 100px rgba(0,0,0,0.9)`,
          animation: "modalSlideUp 0.38s cubic-bezier(0.4,0,0.2,1)",
          scrollbarWidth: "none",
        }}
        onWheel={(e) => e.stopPropagation()}
        onTouchMove={(e) => e.stopPropagation()}
      >
        {/* ── Hero ── */}
        <div className="relative overflow-hidden" style={{ height: "220px" }}>
          <img
            src={project.image}
            alt={project.name}
            className="absolute inset-0 h-full w-full object-cover"
            style={{ opacity: 0.4, filter: "saturate(0.6)" }}
          />
          <div
            className="absolute inset-0"
            style={{
              background: `linear-gradient(to bottom, ${c}20 0%, #0d0d14 100%)`,
            }}
          />
          {/* Top-right close */}
          <button
            onClick={onClose}
            className="absolute right-4 top-4 rounded-lg transition-colors hover:bg-white/10"
            style={{
              background: "rgba(0,0,0,0.4)",
              border: "1px solid rgba(255,255,255,0.1)",
              color: "rgba(255,255,255,0.5)",
              cursor: "pointer",
              fontSize: "1rem",
              padding: "0.35rem 0.6rem",
              fontFamily: "monospace",
              lineHeight: 1,
              backdropFilter: "blur(8px)",
            }}
          >
            ✕
          </button>
          <div className="absolute bottom-6 left-8 right-16">
            <div className="mb-2 flex flex-wrap gap-2">
              <span
                className="rounded-full px-3 py-0.5 uppercase tracking-widest"
                style={{
                  fontFamily: "'Space Mono', monospace",
                  fontSize: "0.5rem",
                  border: `1px solid ${c}55`,
                  color: c,
                  background: `${c}15`,
                }}
              >
                {project.status}
              </span>
              {project.year && (
                <span
                  className="rounded-full px-3 py-0.5 tracking-widest"
                  style={{
                    fontFamily: "'Space Mono', monospace",
                    fontSize: "0.5rem",
                    border: "1px solid rgba(255,255,255,0.12)",
                    color: "rgba(255,255,255,0.35)",
                  }}
                >
                  {project.year}
                </span>
              )}
              <span
                className="rounded-full px-3 py-0.5 tracking-widest"
                style={{
                  fontFamily: "'Space Mono', monospace",
                  fontSize: "0.5rem",
                  border: "1px solid rgba(255,255,255,0.08)",
                  color: "rgba(255,255,255,0.25)",
                }}
              >
                {project.role}
              </span>
            </div>
            <h2
              className="text-white"
              style={{
                fontFamily: "'Syne', sans-serif",
                fontSize: "2rem",
                fontWeight: 800,
                lineHeight: 1,
              }}
            >
              {project.name}
            </h2>
            <p
              className="mt-1.5"
              style={{
                fontFamily: "'Space Mono', monospace",
                fontSize: "0.65rem",
                color: c,
              }}
            >
              {project.headline}
            </p>
          </div>
        </div>

        {/* ── Stats bar ── */}
        <div
          className="flex"
          style={{ gap: "1px", background: "rgba(255,255,255,0.04)" }}
        >
          {project.stats.map((s) => (
            <div
              key={s.label}
              className="flex-1 py-4 text-center"
              style={{ background: "#0d0d14" }}
            >
              <div
                style={{
                  fontFamily: "'Syne', sans-serif",
                  fontSize: "1.4rem",
                  fontWeight: 800,
                  color: c,
                }}
              >
                {s.value}
              </div>
              <div
                className="mt-0.5 uppercase tracking-widest"
                style={{
                  fontFamily: "'Space Mono', monospace",
                  fontSize: "0.48rem",
                  color: "rgba(255,255,255,0.25)",
                }}
              >
                {s.label}
              </div>
            </div>
          ))}
        </div>

        {/* ── Body ── */}
        <div className="px-8 pb-10 pt-8 flex flex-col gap-10">

          {/* ── Gallery ── */}
          <section>
            <SectionLabel color={c} number="01" label="Gallery" />
            <div
              ref={galleryRef}
              className="flex gap-3 overflow-x-auto pb-3"
              style={{
                scrollbarWidth: "none",
                msOverflowStyle: "none",
                cursor: "grab",
              }}
              onMouseDown={(e) => {
                const el = galleryRef.current;
                if (!el) return;
                el.style.cursor = "grabbing";
                const startX = e.pageX - el.offsetLeft;
                const scrollLeft = el.scrollLeft;
                const onMove = (ev: MouseEvent) => {
                  const x = ev.pageX - el.offsetLeft;
                  el.scrollLeft = scrollLeft - (x - startX);
                };
                const onUp = () => {
                  el.style.cursor = "grab";
                  window.removeEventListener("mousemove", onMove);
                  window.removeEventListener("mouseup", onUp);
                };
                window.addEventListener("mousemove", onMove);
                window.addEventListener("mouseup", onUp);
              }}
            >
              {project.gallery.map((src, i) => (
                <div
                  key={i}
                  className="flex-shrink-0 overflow-hidden rounded-xl"
                  style={{
                    width: "260px",
                    height: "160px",
                    border: "1px solid rgba(255,255,255,0.06)",
                  }}
                >
                  <img
                    src={src}
                    alt={`${project.name} screenshot ${i + 1}`}
                    className="h-full w-full object-cover transition-transform duration-500 hover:scale-105"
                    style={{ filter: "saturate(0.85)" }}
                    draggable={false}
                  />
                </div>
              ))}
            </div>
            <p
              className="mt-2 text-center"
              style={{
                fontFamily: "'Space Mono', monospace",
                fontSize: "0.48rem",
                color: "rgba(255,255,255,0.18)",
                letterSpacing: "0.1em",
              }}
            >
              drag to scroll
            </p>
          </section>

          {/* ── Problem & Solution ── */}
          <section>
            <SectionLabel color={c} number="02" label="Problem & Solution" />
            <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
              <div
                className="rounded-xl p-5"
                style={{
                  background: "rgba(255,80,80,0.04)",
                  border: "1px solid rgba(255,80,80,0.12)",
                }}
              >
                <div className="mb-3 flex items-center gap-2">
                  <div
                    className="rounded-full px-2 py-0.5 uppercase tracking-widest"
                    style={{
                      fontFamily: "'Space Mono', monospace",
                      fontSize: "0.48rem",
                      background: "rgba(255,80,80,0.1)",
                      border: "1px solid rgba(255,80,80,0.2)",
                      color: "rgba(255,120,120,0.9)",
                    }}
                  >
                    Problem
                  </div>
                </div>
                <p
                  style={{
                    fontFamily: "'Space Mono', monospace",
                    fontSize: "0.68rem",
                    color: "rgba(255,255,255,0.5)",
                    lineHeight: 1.8,
                  }}
                >
                  {project.problem}
                </p>
              </div>
              <div
                className="rounded-xl p-5"
                style={{
                  background: `${c}06`,
                  border: `1px solid ${c}18`,
                }}
              >
                <div className="mb-3 flex items-center gap-2">
                  <div
                    className="rounded-full px-2 py-0.5 uppercase tracking-widest"
                    style={{
                      fontFamily: "'Space Mono', monospace",
                      fontSize: "0.48rem",
                      background: `${c}12`,
                      border: `1px solid ${c}30`,
                      color: c,
                    }}
                  >
                    Solution
                  </div>
                </div>
                <p
                  style={{
                    fontFamily: "'Space Mono', monospace",
                    fontSize: "0.68rem",
                    color: "rgba(255,255,255,0.5)",
                    lineHeight: 1.8,
                  }}
                >
                  {project.solution}
                </p>
              </div>
            </div>
          </section>

          {/* ── Tech Stack ── */}
          <section>
            <SectionLabel color={c} number="03" label="Tech Stack" />
            <div className="flex flex-col gap-3">
              {project.techStack.map((item, i) => (
                <div
                  key={i}
                  className="flex items-start gap-4 rounded-xl p-4 transition-colors"
                  style={{
                    background: "rgba(255,255,255,0.02)",
                    border: "1px solid rgba(255,255,255,0.05)",
                  }}
                >
                  <div
                    className="flex-shrink-0 rounded-lg px-2.5 py-1 text-center"
                    style={{
                      minWidth: "36px",
                      background: `${c}10`,
                      border: `1px solid ${c}25`,
                      fontFamily: "'Syne', sans-serif",
                      fontSize: "0.65rem",
                      fontWeight: 800,
                      color: c,
                    }}
                  >
                    {String(i + 1).padStart(2, "0")}
                  </div>
                  <div className="flex-1 min-w-0">
                    <p
                      className="mb-1"
                      style={{
                        fontFamily: "'Syne', sans-serif",
                        fontSize: "0.85rem",
                        fontWeight: 700,
                        color: "#fff",
                      }}
                    >
                      {item.name}
                    </p>
                    <p
                      style={{
                        fontFamily: "'Space Mono', monospace",
                        fontSize: "0.63rem",
                        color: "rgba(255,255,255,0.4)",
                        lineHeight: 1.7,
                      }}
                    >
                      {item.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* ── Links ── */}
          {(project.links.github || project.links.live) && (
            <div className="flex gap-3 pt-2">
              {project.links.github && (
                <a
                  href={project.links.github}
                  className="rounded-xl transition-colors hover:bg-white/10"
                  style={{
                    fontFamily: "'Space Mono', monospace",
                    fontSize: "0.6rem",
                    padding: "10px 20px",
                    border: "1px solid rgba(255,255,255,0.1)",
                    color: "rgba(255,255,255,0.5)",
                    textDecoration: "none",
                    letterSpacing: "0.05em",
                  }}
                >
                  GitHub →
                </a>
              )}
              {project.links.live && (
                <a
                  href={project.links.live}
                  className="rounded-xl font-bold transition-opacity hover:opacity-80"
                  style={{
                    fontFamily: "'Space Mono', monospace",
                    fontSize: "0.6rem",
                    padding: "10px 20px",
                    background: c,
                    color: "#000",
                    textDecoration: "none",
                    letterSpacing: "0.05em",
                  }}
                >
                  Live Site →
                </a>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

function SectionLabel({
  color,
  number,
  label,
}: {
  color: string;
  number: string;
  label: string;
}) {
  return (
    <div className="mb-4 flex items-center gap-3">
      <span
        style={{
          fontFamily: "'Space Mono', monospace",
          fontSize: "0.5rem",
          color: color,
          opacity: 0.6,
          letterSpacing: "0.1em",
        }}
      >
        {number}
      </span>
      <span
        style={{
          fontFamily: "'Syne', sans-serif",
          fontSize: "0.8rem",
          fontWeight: 700,
          color: "rgba(255,255,255,0.7)",
          letterSpacing: "0.08em",
          textTransform: "uppercase",
        }}
      >
        {label}
      </span>
      <div
        className="flex-1"
        style={{ height: "1px", background: "rgba(255,255,255,0.06)" }}
      />
    </div>
  );
}

// ─── Project Card ────────────────────────────────────────────────────────────

function ProjectCard({
  project,
  isHovered,
  onMouseEnter,
  onMouseLeave,
  onClick,
}: {
  project: Project;
  isHovered: boolean;
  onMouseEnter: () => void;
  onMouseLeave: () => void;
  onClick: () => void;
}) {
  const c = project.color;
  const h = isHovered;

  return (
    <div
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
      onClick={onClick}
      className="relative flex-shrink-0 cursor-pointer overflow-hidden rounded-2xl"
      style={{
        width: "170px",
        height: "235px",
        border: `1.5px solid ${h ? c + "65" : "rgba(255,255,255,0.07)"}`,
        background: "#0e0e16",
        transition:
          "transform 0.45s cubic-bezier(0.34,1.2,0.64,1), box-shadow 0.4s ease, border-color 0.35s",
        transform: h
          ? "translateY(-32px) skewY(0deg) rotate(0deg) scale(1.2)"
          : "translateY(0) skewY(-4deg) rotate(-1deg) scale(1)",
        boxShadow: h
          ? `0 0 50px ${c}28, 0 35px 70px rgba(0,0,0,0.75), inset 0 1px 0 ${c}20`
          : "0 6px 28px rgba(0,0,0,0.5)",
        zIndex: h ? 20 : 1,
      }}
    >
      <img
        src={project.image}
        alt={project.name}
        className="absolute inset-0 h-full w-full object-cover"
        style={{
          opacity: h ? 0.5 : 0.1,
          filter: h ? "saturate(0.85)" : "saturate(0.2) grayscale(0.6)",
          transition: "opacity 0.45s, filter 0.45s",
        }}
      />
      <div
        className="absolute inset-0"
        style={{
          background: `linear-gradient(155deg, ${c}${h ? "1a" : "07"} 0%, transparent 55%, rgba(0,0,0,0.75) 100%)`,
          transition: "background 0.45s",
        }}
      />
      <div
        className="absolute bottom-0 left-0 right-0"
        style={{
          height: "75%",
          background: "linear-gradient(to top, rgba(5,5,10,0.98) 30%, transparent)",
        }}
      />
      <div
        className="absolute left-0 right-0 top-0"
        style={{
          height: "1px",
          background: h ? `linear-gradient(90deg, transparent, ${c}80, transparent)` : "transparent",
          transition: "background 0.4s",
        }}
      />
      <div className="absolute inset-0 flex flex-col justify-between p-3.5">
        <div className="flex items-center gap-1.5">
          <div
            className="rounded-full"
            style={{
              width: "5px",
              height: "5px",
              background: c,
              boxShadow: `0 0 ${h ? "10px" : "4px"} ${c}`,
              transition: "box-shadow 0.4s",
            }}
          />
          <span
            style={{
              fontFamily: "'Space Mono', monospace",
              fontSize: "0.52rem",
              color: c,
              letterSpacing: "0.14em",
            }}
          >
            {project.year || project.role}
          </span>
        </div>
        <div>
          <h3
            className="mb-1 text-white"
            style={{
              fontFamily: "'Syne', sans-serif",
              fontSize: "1rem",
              fontWeight: 800,
              lineHeight: 1.15,
            }}
          >
            {project.name}
          </h3>
          <div
            style={{
              overflow: "hidden",
              maxHeight: h ? "80px" : "0px",
              opacity: h ? 1 : 0,
              transition: "max-height 0.4s ease, opacity 0.35s ease",
            }}
          >
            <p
              className="mb-2"
              style={{
                fontFamily: "'Space Mono', monospace",
                fontSize: "0.55rem",
                color: "rgba(255,255,255,0.55)",
                lineHeight: 1.55,
              }}
            >
              {project.description}
            </p>
          </div>
          <div className="flex flex-wrap gap-1">
            {project.tech.slice(0, 2).map((t) => (
              <span
                key={t}
                className="rounded-full px-1.5 py-0.5"
                style={{
                  fontFamily: "'Space Mono', monospace",
                  fontSize: "0.47rem",
                  border: `1px solid ${c}${h ? "40" : "20"}`,
                  color: c,
                  background: `${c}08`,
                  transition: "border-color 0.3s",
                }}
              >
                {t}
              </span>
            ))}
            {project.tech.length > 2 && (
              <span
                style={{
                  fontFamily: "'Space Mono', monospace",
                  fontSize: "0.47rem",
                  color: "rgba(255,255,255,0.2)",
                  padding: "2px 4px",
                }}
              >
                +{project.tech.length - 2}
              </span>
            )}
          </div>
          <div
            style={{
              marginTop: "0.45rem",
              maxHeight: h ? "20px" : "0px",
              opacity: h ? 0.7 : 0,
              overflow: "hidden",
              transition: "max-height 0.3s ease 0.1s, opacity 0.3s ease 0.1s",
              fontFamily: "'Space Mono', monospace",
              fontSize: "0.47rem",
              color: c,
              letterSpacing: "0.1em",
            }}
          >
            open details →
          </div>
        </div>
      </div>
    </div>
  );
}

// ─── Page ────────────────────────────────────────────────────────────────────

export default function PortfolioPage() {
  const [hovered, setHovered] = useState<number | null>(null);
  const [opened, setOpened] = useState<number | null>(null);

  const openedProject = projects.find((p) => p.id === opened) ?? null;

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Syne:wght@400;700;800&family=Space+Mono:wght@400;700&display=swap');

        @keyframes modalFadeIn {
          from { opacity: 0 }
          to   { opacity: 1 }
        }
        @keyframes modalSlideUp {
          from { opacity: 0; transform: translateY(24px) }
          to   { opacity: 1; transform: translateY(0) }
        }

        /* Hide scrollbar inside gallery */
        .gallery-scroll::-webkit-scrollbar { display: none; }
        /* Hide scrollbar inside modal */
        .modal-inner::-webkit-scrollbar { display: none; }
      `}</style>

      <main
        className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden px-8 py-20"
        style={{ background: "#09090f" }}
      >
        <div
          className="pointer-events-none absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"
          style={{
            width: "800px",
            height: "400px",
            background: "radial-gradient(ellipse, rgba(80,80,200,0.05) 0%, transparent 70%)",
          }}
        />
        <div
          className="pointer-events-none absolute inset-0"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='0.04'/%3E%3C/svg%3E")`,
            backgroundRepeat: "repeat",
            backgroundSize: "256px",
          }}
        />

        <div className="relative z-10 mb-20 text-center">
          <p
            className="mb-2.5 uppercase tracking-[0.28em]"
            style={{
              fontFamily: "'Space Mono', monospace",
              fontSize: "0.58rem",
              color: "rgba(255,255,255,0.18)",
            }}
          >
            Selected Work
          </p>
          <h1
            className="text-white"
            style={{
              fontFamily: "'Syne', sans-serif",
              fontSize: "clamp(2.5rem, 5vw, 3.75rem)",
              fontWeight: 800,
              lineHeight: 1,
              letterSpacing: "-0.03em",
            }}
          >
            Projects
            <span style={{ color: "rgba(255,255,255,0.12)" }}>.</span>
          </h1>
          <p
            className="mt-3"
            style={{
              fontFamily: "'Space Mono', monospace",
              fontSize: "0.6rem",
              color: "rgba(255,255,255,0.18)",
              letterSpacing: "0.06em",
            }}
          >
            Hover to preview · Click to open
          </p>
        </div>

        <div
          className="relative z-10 flex items-end gap-0"
          style={{ paddingTop: "40px", paddingBottom: "40px" }}
          onMouseLeave={() => setHovered(null)}
        >
          {projects.map((project) => (
            <ProjectCard
              key={project.id}
              project={project}
              isHovered={hovered === project.id}
              onMouseEnter={() => setHovered(project.id)}
              onMouseLeave={() => setHovered(null)}
              onClick={() => setOpened(project.id)}
            />
          ))}
        </div>

        <p
          className="absolute bottom-8"
          style={{
            fontFamily: "'Space Mono', monospace",
            fontSize: "0.52rem",
            color: "rgba(255,255,255,0.1)",
            letterSpacing: "0.15em",
          }}
        >
          {projects.length} projects · {new Date().getFullYear()}
        </p>
      </main>

      {openedProject && (
        <DetailModal project={openedProject} onClose={() => setOpened(null)} />
      )}
    </>
  );
}