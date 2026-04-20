"use client";

import { useEffect } from "react";
import { ensureGsap, gsap } from "./gsapClient";
import { usePrefersReducedMotion } from "./usePrefersReducedMotion";

export function useReveal<T extends HTMLElement>(
  ref: React.RefObject<T | null>,
  opts?: { delay?: number }
) {
  const prefersReducedMotion = usePrefersReducedMotion();

  useEffect(() => {
    const el = ref.current;
    if (!el || prefersReducedMotion) return;

    ensureGsap();

    const ctx = gsap.context(() => {
      gsap.fromTo(
        el,
        { autoAlpha: 0, y: 24 },
        {
          autoAlpha: 1,
          y: 0,
          duration: 0.8,
          ease: "power3.out",
          delay: opts?.delay ?? 0,
          scrollTrigger: {
            trigger: el,
            start: "top 80%",
          },
        }
      );
    }, el);

    return () => ctx.revert();
  }, [prefersReducedMotion, ref, opts?.delay]);
}
