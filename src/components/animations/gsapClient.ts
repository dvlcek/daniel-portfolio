"use client";

import { registerGsap } from "@/lib/gsap";

export function ensureGsap() {
  registerGsap();
}

export { gsap, ScrollTrigger, useGSAP, registerGsap } from "@/lib/gsap";
