"use client";

import Image from "next/image";
import { useEffect, useRef, type CSSProperties, type RefObject } from "react";
import { reducedMotionQuery } from "@/lib/animation";

type HeroParallaxBackgroundProps = {
  triggerRef: RefObject<HTMLElement | null>;
};

type ParallaxLayer = {
  height: number;
  imageStyle?: CSSProperties;
  src: string;
  speed: number;
  topClass: string;
  width: number;
  widthClass: string;
  zIndex: number;
};

const PARALLAX_LAYERS: ParallaxLayer[] = [
  {
    height: 587,
    imageStyle: {
      WebkitMaskImage:
        "linear-gradient(to bottom, black 0%, black 54%, transparent 76%)",
      maskImage:
        "linear-gradient(to bottom, black 0%, black 54%, transparent 76%)",
    },
    src: "/images/hero-hills_0003_Layer-4.png",
    speed: 0.32,
    topClass: "top-[-4svh] sm:top-[-6svh]",
    width: 1672,
    widthClass: "w-[330vw] sm:w-[180vw] md:w-[150vw] lg:w-[126vw] 2xl:w-[116vw]",
    zIndex: 1,
  },
  {
    height: 556,
    src: "/images/hero-hills_0002_Layer-3.png",
    speed: 0.2,
    topClass: "top-[42svh] sm:top-[40svh] lg:top-[38svh]",
    width: 1672,
    widthClass: "w-[300vw] sm:w-[165vw] md:w-[140vw] lg:w-[122vw] 2xl:w-[112vw]",
    zIndex: 2,
  },
  {
    height: 557,
    src: "/images/hero-hills_0001_Layer-2.png",
    speed: 0.12,
    topClass: "top-[42svh] sm:top-[40svh] lg:top-[38svh]",
    width: 1672,
    widthClass: "w-[300vw] sm:w-[165vw] md:w-[140vw] lg:w-[122vw] 2xl:w-[112vw]",
    zIndex: 3,
  },
  {
    height: 487,
    src: "/images/hero-hills_0000_Layer-1.png",
    speed: 0.06,
    topClass: "top-[42svh] sm:top-[40svh] lg:top-[38svh]",
    width: 1672,
    widthClass: "w-[300vw] sm:w-[165vw] md:w-[140vw] lg:w-[122vw] 2xl:w-[112vw]",
    zIndex: 4,
  },
];

export function HeroParallaxBackground({
  triggerRef,
}: HeroParallaxBackgroundProps) {
  const rootRef = useRef<HTMLDivElement>(null);
  const layerRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const root = rootRef.current;
    const trigger =
      triggerRef.current ??
      root?.closest<HTMLElement>('[data-section="hero"]') ??
      root?.parentElement;

    if (!root || !trigger) return;

    const motionQuery = window.matchMedia(reducedMotionQuery);
    let frame = 0;

    const resetLayers = () => {
      layerRefs.current.forEach((layer) => {
        if (layer) layer.style.transform = "";
      });
    };

    const updateLayers = () => {
      frame = 0;

      if (motionQuery.matches) {
        resetLayers();
        return;
      }

      const scrollWithinHero = Math.min(
        Math.max(-trigger.getBoundingClientRect().top, 0),
        trigger.offsetHeight,
      );

      PARALLAX_LAYERS.forEach((layer, index) => {
        const element = layerRefs.current[index];

        if (!element) return;

        const y = scrollWithinHero * layer.speed;
        element.style.transform = `translate3d(0, ${y.toFixed(2)}px, 0)`;
      });
    };

    const requestUpdate = () => {
      if (frame) return;
      frame = window.requestAnimationFrame(updateLayers);
    };

    updateLayers();

    window.addEventListener("scroll", requestUpdate, { passive: true });
    window.addEventListener("resize", requestUpdate);
    motionQuery.addEventListener("change", requestUpdate);

    return () => {
      if (frame) window.cancelAnimationFrame(frame);
      window.removeEventListener("scroll", requestUpdate);
      window.removeEventListener("resize", requestUpdate);
      motionQuery.removeEventListener("change", requestUpdate);
      resetLayers();
    };
  }, [triggerRef]);

  return (
    <div
      ref={rootRef}
      className="pointer-events-none absolute inset-0 z-0 overflow-hidden bg-[linear-gradient(180deg,#eadfca_0%,#f4dfb3_34%,#d9c78d_68%,#f7f4ed_100%)]"
      aria-hidden="true"
    >
      {PARALLAX_LAYERS.map((layer, index) => (
        <div
          key={layer.src}
          data-hero-parallax-layer
          ref={(element) => {
            layerRefs.current[index] = element;
          }}
          className={`absolute inset-x-0 h-[72svh] min-h-[460px] overflow-visible will-change-transform sm:min-h-[540px] lg:min-h-[620px] ${layer.topClass}`}
          style={{ zIndex: layer.zIndex }}
        >
          <Image
            src={layer.src}
            alt=""
            width={layer.width}
            height={layer.height}
            priority
            sizes="100vw"
            draggable={false}
            style={layer.imageStyle}
            className={`absolute left-1/2 top-0 h-auto max-w-none -translate-x-1/2 select-none ${layer.widthClass}`}
          />
        </div>
      ))}

      <div className="absolute inset-0 z-10 bg-[radial-gradient(circle_at_50%_18%,rgba(255,255,255,0.20),transparent_36%),radial-gradient(circle_at_76%_18%,rgba(184,100,63,0.07),transparent_30%),radial-gradient(circle_at_18%_36%,rgba(143,163,177,0.08),transparent_34%)]" />
      <div className="absolute inset-0 z-10 bg-[linear-gradient(180deg,rgba(247,244,237,0.03)_0%,rgba(247,244,237,0.34)_47%,rgba(247,244,237,0.10)_66%,transparent_82%)]" />
      <div className="absolute inset-x-0 bottom-0 z-10 h-[38%] bg-[linear-gradient(180deg,transparent_0%,rgba(247,244,237,0.16)_38%,#f7f4ed_100%)]" />
    </div>
  );
}
