"use client";

import { animationConfig } from "@/lib/animation";
import { ensureGsap, gsap, useGSAP } from "./gsapClient";
import { usePrefersReducedMotion } from "./usePrefersReducedMotion";

export function useStagger<T extends HTMLElement>(
  containerRef: React.RefObject<T | null>,
  itemSelector: string,
  opts?: { y?: number; stagger?: number; duration?: number; start?: string }
) {
  const prefersReducedMotion = usePrefersReducedMotion();

  useGSAP(() => {
    const el = containerRef.current;
    if (!el) return;

    ensureGsap();

    const select = gsap.utils.selector(el);
    const items = select<HTMLElement>(itemSelector);
    if (!items.length) return;

    if (prefersReducedMotion) {
      gsap.set(items, { autoAlpha: 1, y: 0, clearProps: "transform" });
      return;
    }

    gsap.fromTo(
      items,
      { autoAlpha: 0, y: opts?.y ?? animationConfig.distance.cardY },
      {
        autoAlpha: 1,
        y: 0,
        duration: opts?.duration ?? animationConfig.duration.card,
        ease: animationConfig.ease.default,
        stagger: opts?.stagger ?? animationConfig.stagger.default,
        scrollTrigger: {
          trigger: el,
          start: opts?.start ?? animationConfig.scroll.start,
          once: true,
        },
      },
    );
  }, {
    scope: containerRef,
    dependencies: [
      itemSelector,
      opts?.duration,
      opts?.stagger,
      opts?.start,
      opts?.y,
      prefersReducedMotion,
    ],
    revertOnUpdate: true,
  });
}
