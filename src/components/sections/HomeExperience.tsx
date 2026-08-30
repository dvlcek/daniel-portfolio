"use client";

import { useLayoutEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export function HomeExperience() {
  useLayoutEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const root = document.querySelector<HTMLElement>(".home-redesign");
    if (!root) return;

    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const finePointer = window.matchMedia("(hover: hover) and (pointer: fine)").matches;
    const pointerCleanups: Array<() => void> = [];
    const media = gsap.matchMedia();

    const context = gsap.context(() => {
      if (!reduceMotion) {
        media.add("(min-width: 768px)", () => {
          gsap.utils.toArray<HTMLElement>("[data-reveal]").forEach((element) => {
            gsap.fromTo(
              element,
              { y: 30 },
              {
                y: 0,
                duration: 1.05,
                ease: "power3.out",
                scrollTrigger: {
                  trigger: element,
                  start: "top 88%",
                  once: true,
                },
              },
            );
          });

          const serviceCards = gsap.utils.toArray<HTMLElement>("[data-service-card]");
          if (serviceCards.length) {
            gsap.fromTo(
              serviceCards,
              { y: 38, scale: 0.987 },
              {
                y: 0,
                scale: 1,
                duration: 1,
                stagger: 0.11,
                ease: "power3.out",
                scrollTrigger: {
                  trigger: "[data-services-grid]",
                  start: "top 82%",
                  once: true,
                },
              },
            );
          }

          const workStage = root.querySelector<HTMLElement>("[data-work-stage]");
          if (workStage) {
            gsap.fromTo(
              workStage,
              { scale: 0.97, y: 28, rotateX: 2.1, transformPerspective: 1300 },
              {
                scale: 1,
                y: 0,
                rotateX: 0,
                ease: "none",
                scrollTrigger: {
                  trigger: workStage,
                  start: "top 86%",
                  end: "top 42%",
                  scrub: 0.8,
                },
              },
            );
          }

          const dashboard = root.querySelector<HTMLElement>("[data-dashboard-preview]");
          if (dashboard) {
            gsap.fromTo(
              dashboard,
              { y: 20 },
              {
                y: -12,
                ease: "none",
                scrollTrigger: {
                  trigger: dashboard,
                  start: "top 86%",
                  end: "bottom 34%",
                  scrub: 1,
                },
              },
            );
          }

          const processTrack = root.querySelector<HTMLElement>("[data-process-track]");
          const processProgress = root.querySelector<HTMLElement>("[data-process-progress]");
          if (processTrack && processProgress) {
            gsap.set(processProgress, { transformOrigin: "left center", scaleX: 0 });
            gsap.to(processProgress, {
              scaleX: 1,
              ease: "none",
              scrollTrigger: {
                trigger: processTrack,
                start: "top 72%",
                end: "bottom 48%",
                scrub: 0.7,
              },
            });
          }

          gsap.utils.toArray<HTMLElement>("[data-process-step]").forEach((step, index) => {
            gsap.fromTo(
              step,
              { opacity: 0.72, y: 14 },
              {
                opacity: 1,
                y: 0,
                duration: 0.7,
                delay: index * 0.04,
                ease: "power2.out",
                scrollTrigger: {
                  trigger: step,
                  start: "top 76%",
                  toggleActions: "play none none reverse",
                },
              },
            );
          });

          gsap.utils.toArray<HTMLElement>("[data-engagement-step]").forEach((card, index) => {
            gsap.fromTo(
              card,
              { x: 18 + index * 6 },
              {
                x: 0,
                ease: "none",
                scrollTrigger: {
                  trigger: card,
                  start: "top 88%",
                  end: "top 62%",
                  scrub: 0.65,
                },
              },
            );
          });

          const finalScene = root.querySelector<HTMLElement>("[data-final-scene]");
          const finalGlow = root.querySelector<HTMLElement>("[data-final-glow]");
          if (finalScene && finalGlow) {
            gsap.fromTo(
              finalGlow,
              { yPercent: 16, scale: 0.9, opacity: 0.38 },
              {
                yPercent: -8,
                scale: 1.12,
                opacity: 0.82,
                ease: "none",
                scrollTrigger: {
                  trigger: finalScene,
                  start: "top bottom",
                  end: "bottom bottom",
                  scrub: 1,
                },
              },
            );
          }
        });
      }

      if (finePointer && !reduceMotion) {
        gsap.utils.toArray<HTMLElement>("[data-optical-glass]").forEach((card) => {
          const onMove = (event: PointerEvent) => {
            const rect = card.getBoundingClientRect();
            const x = ((event.clientX - rect.left) / rect.width) * 100;
            const y = ((event.clientY - rect.top) / rect.height) * 100;
            card.style.setProperty("--glass-x", `${x}%`);
            card.style.setProperty("--glass-y", `${y}%`);
            card.style.setProperty("--glass-strength", "1");
          };

          const onLeave = () => {
            card.style.setProperty("--glass-strength", "0");
          };

          card.addEventListener("pointermove", onMove);
          card.addEventListener("pointerleave", onLeave);
          pointerCleanups.push(() => {
            card.removeEventListener("pointermove", onMove);
            card.removeEventListener("pointerleave", onLeave);
          });
        });
      }
    }, root);

    const refresh = window.requestAnimationFrame(() => ScrollTrigger.refresh());

    return () => {
      window.cancelAnimationFrame(refresh);
      pointerCleanups.forEach((cleanup) => cleanup());
      media.revert();
      context.revert();
    };
  }, []);

  return null;
}
