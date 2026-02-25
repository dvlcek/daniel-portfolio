"use client";

import { useEffect, useRef } from "react";
import { gsap } from "@/components/animations/gsapClient";

export default function Template({ children }: { children: React.ReactNode }) {
  const wrapRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = wrapRef.current;
    if (!el) return;

    const ctx = gsap.context(() => {
      gsap.fromTo(
        el,
        { autoAlpha: 0, y: 14, filter: "blur(3px)" },
        {
          autoAlpha: 1,
          y: 0,
          filter: "blur(0px)",
          duration: 0.42,
          ease: "power2.out",
        }
      );
    }, el);

    return () => ctx.revert();
  }, []);

  return <div ref={wrapRef}>{children}</div>;
}
