"use client";

import { animationConfig } from "@/lib/animation";
import { gsap, useGSAP } from "./gsapClient";
import { usePrefersReducedMotion } from "./usePrefersReducedMotion";

export function useMagnetic<T extends HTMLElement>(
  ref: React.RefObject<T | null>,
  strength = 0.25
) {
  const prefersReducedMotion = usePrefersReducedMotion();

  useGSAP(() => {
    const el = ref.current;
    if (!el || prefersReducedMotion) return;

    const onMove = (e: MouseEvent) => {
      const r = el.getBoundingClientRect();
      const x = e.clientX - (r.left + r.width / 2);
      const y = e.clientY - (r.top + r.height / 2);

      gsap.to(el, {
        x: x * strength,
        y: y * strength,
        duration: 0.35,
        ease: animationConfig.ease.default,
      });
    };

    const onLeave = () => {
      gsap.to(el, {
        x: 0,
        y: 0,
        duration: 0.5,
        ease: animationConfig.ease.default,
      });
    };

    el.addEventListener("mousemove", onMove);
    el.addEventListener("mouseleave", onLeave);
    return () => {
      el.removeEventListener("mousemove", onMove);
      el.removeEventListener("mouseleave", onLeave);
    };
  }, {
    scope: ref,
    dependencies: [prefersReducedMotion, strength],
    revertOnUpdate: true,
  });
}
