"use client";

import { useEffect } from "react";

export function ScrollReset() {
  useEffect(() => {
    // force fresh top position after route mount
    window.scrollTo(0, 0);

    // optional extra safety for browsers restoring position
    if ("scrollRestoration" in window.history) {
      const previous = window.history.scrollRestoration;
      window.history.scrollRestoration = "manual";

      return () => {
        window.history.scrollRestoration = previous;
      };
    }
  }, []);

  return null;
}