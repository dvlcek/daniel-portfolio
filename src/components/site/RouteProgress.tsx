"use client";

import { useRef } from "react";
import { usePathname } from "next/navigation";
import { animationConfig } from "@/lib/animation";
import { ensureGsap, gsap, useGSAP } from "@/components/animations/gsapClient";

export function RouteProgress() {
  const pathname = usePathname();
  const barRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    const bar = barRef.current;
    if (!bar) return;

    ensureGsap();

    gsap.killTweensOf(bar);
    gsap.set(bar, {
      scaleX: 0,
      transformOrigin: "left center",
      opacity: 1,
    });

    const tl = gsap.timeline();
    tl.to(bar, {
      scaleX: 1,
      duration: 0.38,
      ease: animationConfig.ease.soft,
    }).to(bar, {
      opacity: 0,
      duration: 0.2,
      ease: "power1.inOut",
    });

    return () => {
      tl.kill();
    };
  }, { scope: barRef, dependencies: [pathname], revertOnUpdate: true });

  return (
    <div className="pointer-events-none fixed left-0 top-0 z-70 h-2px w-full">
      <div
        ref={barRef}
        className="h-full w-full origin-left bg-linear-to-r from-clay/75 via-cream/70 to-clay/75"
      />
    </div>
  );
}
