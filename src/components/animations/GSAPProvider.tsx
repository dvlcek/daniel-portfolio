"use client";

import { type ReactNode } from "react";
import { ensureGsap, useGSAP } from "@/components/animations/gsapClient";

type GSAPProviderProps = {
  children: ReactNode;
};

export function GSAPProvider({ children }: GSAPProviderProps) {
  useGSAP(() => {
    ensureGsap();
  }, { dependencies: [] });

  return children;
}
