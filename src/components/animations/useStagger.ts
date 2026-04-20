"use client";

import { useEffect } from "react";
import { ensureGsap, gsap } from "./gsapClient";
import { usePrefersReducedMotion } from "./usePrefersReducedMotion";

export function useStagger<T extends HTMLElement>(
  containerRef: React.RefObject<T | null>,
  itemSelector: string,
  opts?: { y?: number; stagger?: number }
) {
  const prefersReducedMotion = usePrefersReducedMotion();

  useEffect(() => {
    const el = containerRef.current;
    if (!el || prefersReducedMotion) return;

    ensureGsap();

    const ctx = gsap.context(() => {
      const items = gsap.utils.toArray<HTMLElement>(itemSelector);
      if (!items.length) return;

      gsap.fromTo(
        items,
        { autoAlpha: 0, y: opts?.y ?? 20 },
        {
          autoAlpha: 1,
          y: 0,
          duration: 0.7,
          ease: "power3.out",
          stagger: opts?.stagger ?? 0.08,
          scrollTrigger: {
            trigger: el,
            start: "top 80%",
          },
        }
      );
    }, el);

    return () => ctx.revert();
  }, [containerRef, itemSelector, opts?.stagger, opts?.y, prefersReducedMotion]);
}
