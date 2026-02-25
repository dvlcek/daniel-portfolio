"use client";

import React, { useEffect, useRef } from "react";
import * as THREE from "three";
import { cn } from "@/app/lib/cn";

type DottedSurfaceProps = Omit<React.ComponentProps<"div">, "ref"> & {
  /** Set true if you want it only inside hero (absolute), false for full-screen */
  mode?: "hero" | "fullscreen";
  /** Dark-first by default */
  theme?: "dark" | "light";
};

export function DottedSurface({
  className,
  mode = "hero",
  theme = "dark",
  ...props
}: DottedSurfaceProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const rafRef = useRef<number | null>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    // ---- Grid config ----
    const SEPARATION = 120;
    const AMOUNTX = 64;
    const AMOUNTY = 64;

    // ---- Scene ----
    const scene = new THREE.Scene();
    const fogColor = theme === "dark" ? 0x0a0a0c : 0xffffff;
    scene.fog = new THREE.Fog(fogColor, 2000, 10000);

    // Camera uses container aspect (not window)
    const camera = new THREE.PerspectiveCamera(50, 1, 1, 10000);
    camera.position.set(0, 200, 900);

    const renderer = new THREE.WebGLRenderer({
      alpha: true,
      antialias: true,
      powerPreference: "high-performance",
    });

    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.setClearColor(fogColor, 0);
    container.appendChild(renderer.domElement);

    // ---- Geometry ----
    const positions: number[] = [];
    const colors: number[] = [];

    const geometry = new THREE.BufferGeometry();

    // Color must be 0..1
    const c = theme === "dark" ? 0.78 : 0.08;

    for (let ix = 0; ix < AMOUNTX; ix++) {
      for (let iy = 0; iy < AMOUNTY; iy++) {
        const x = ix * SEPARATION - (AMOUNTX * SEPARATION) / 2;
        const y = 0;
        const z = iy * SEPARATION - (AMOUNTY * SEPARATION) / 2;

        positions.push(x, y, z);
        colors.push(c, c, c);
      }
    }

    geometry.setAttribute(
      "position",
      new THREE.Float32BufferAttribute(positions, 3)
    );
    geometry.setAttribute("color", new THREE.Float32BufferAttribute(colors, 3));

    const material = new THREE.PointsMaterial({
      size: 6,
      vertexColors: true,
      transparent: true,
      opacity: theme === "dark" ? 0.55 : 0.35,
      sizeAttenuation: true,
      depthWrite: false,
    });

    const points = new THREE.Points(geometry, material);
    scene.add(points);

    // ---- Resize (container-based) ----
    const resize = () => {
      const w = container.clientWidth;
      const h = container.clientHeight;

      renderer.setSize(w, h, false);
      camera.aspect = w / h;
      camera.updateProjectionMatrix();
    };

    // Ensure container has size before first render
    resize();

    // ---- Animate ----
    let count = 0;

    const animate = () => {
      rafRef.current = requestAnimationFrame(animate);

      const posAttr = geometry.attributes.position;
      const arr = posAttr.array as Float32Array;

      let i = 0;
      for (let ix = 0; ix < AMOUNTX; ix++) {
        for (let iy = 0; iy < AMOUNTY; iy++) {
          const idx = i * 3;
          arr[idx + 1] =
            Math.sin((ix + count) * 0.28) * 60 +
            Math.sin((iy + count) * 0.42) * 60;
          i++;
        }
      }

      posAttr.needsUpdate = true;
      renderer.render(scene, camera);
      count += 0.03;
    };

    animate();

    // ResizeObserver for hero sections (better than window resize)
    const ro = new ResizeObserver(() => resize());
    ro.observe(container);

    return () => {
      ro.disconnect();
      if (rafRef.current) cancelAnimationFrame(rafRef.current);

      geometry.dispose();
      material.dispose();
      renderer.dispose();

      if (renderer.domElement && container.contains(renderer.domElement)) {
        container.removeChild(renderer.domElement);
      }
    };
  }, [theme]);

  return (
    <div
      ref={containerRef}
      className={cn(
        "pointer-events-none",
        mode === "fullscreen"
          ? "fixed inset-0 -z-10"
          : "absolute inset-0 -z-10",
        className
      )}
      {...props}
    />
  );
}