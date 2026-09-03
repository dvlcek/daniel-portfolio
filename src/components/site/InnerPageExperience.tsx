"use client";

import { useLayoutEffect } from "react";
import { usePathname } from "next/navigation";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export function InnerPageExperience() {
  const pathname = usePathname();

  useLayoutEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const root = document.querySelector<HTMLElement>(".experience-page");
    if (!root) return;

    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const finePointer = window.matchMedia("(hover: hover) and (pointer: fine)").matches;
    const cleanups: Array<() => void> = [];

    const context = gsap.context(() => {
      if (!reduceMotion) {
        const heroCopy = root.querySelector<HTMLElement>("[data-page-hero-copy]");
        if (heroCopy) {
          gsap.fromTo(heroCopy, { y: 18 }, { y: 0, duration: 0.9, ease: "power3.out" });
        }

        gsap.utils.toArray<HTMLElement>("[data-page-reveal]").forEach((element) => {
          gsap.fromTo(
            element,
            { y: 28 },
            {
              y: 0,
              duration: 0.9,
              ease: "power3.out",
              scrollTrigger: {
                trigger: element,
                start: "top 88%",
                once: true,
              },
            },
          );
        });

        const hero = root.querySelector<HTMLElement>(".experience-page-hero");
        if (hero) {
          gsap.to(hero, {
            backgroundPosition: "50% 16%",
            ease: "none",
            scrollTrigger: {
              trigger: hero,
              start: "top top",
              end: "bottom top",
              scrub: 1,
            },
          });
        }
      }

      if (finePointer && !reduceMotion) {
        gsap.utils.toArray<HTMLElement>(".experience-page [data-optical-glass]").forEach((card) => {
          const onMove = (event: PointerEvent) => {
            const rect = card.getBoundingClientRect();
            card.style.setProperty("--glass-x", `${((event.clientX - rect.left) / rect.width) * 100}%`);
            card.style.setProperty("--glass-y", `${((event.clientY - rect.top) / rect.height) * 100}%`);
            card.style.setProperty("--glass-strength", "1");
          };

          const onLeave = () => card.style.setProperty("--glass-strength", "0");
          card.addEventListener("pointermove", onMove);
          card.addEventListener("pointerleave", onLeave);
          cleanups.push(() => {
            card.removeEventListener("pointermove", onMove);
            card.removeEventListener("pointerleave", onLeave);
          });
        });
      }
    }, root);

    const frame = window.requestAnimationFrame(() => ScrollTrigger.refresh());

    return () => {
      window.cancelAnimationFrame(frame);
      cleanups.forEach((cleanup) => cleanup());
      context.revert();
    };
  }, [pathname]);

  return null;
}
