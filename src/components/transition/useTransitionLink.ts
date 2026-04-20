"use client";

import { useCallback } from "react";
import type {
  HTMLAttributeAnchorTarget,
  MouseEvent,
  MouseEventHandler,
} from "react";
import { usePrefersReducedMotion } from "@/components/animations/usePrefersReducedMotion";
import { usePageTransition } from "@/components/transition/TransitionProvider";

type TransitionLinkOptions = {
  href: string;
  onClick?: MouseEventHandler<HTMLAnchorElement>;
  target?: HTMLAttributeAnchorTarget;
};

const EXTERNAL_PROTOCOL_PREFIXES = [
  "http://",
  "https://",
  "mailto:",
  "tel:",
];

function isModifiedEvent(event: MouseEvent<HTMLAnchorElement>) {
  return (
    event.button !== 0 ||
    event.metaKey ||
    event.altKey ||
    event.ctrlKey ||
    event.shiftKey
  );
}

function getHashTargetId(href: string) {
  if (href.startsWith("/#")) {
    return href.slice(2);
  }

  if (href.startsWith("#")) {
    return href.slice(1);
  }

  return null;
}

function isExternalHref(href: string) {
  return EXTERNAL_PROTOCOL_PREFIXES.some((prefix) => href.startsWith(prefix));
}

export function hrefToString(href: string | URL | { pathname?: string; query?: Record<string, string | string[]>; hash?: string }) {
  if (typeof href === "string") {
    return href;
  }

  if (href instanceof URL) {
    return href.toString();
  }

  const pathname = href.pathname ?? "/";
  const searchParams = new URLSearchParams();

  if (href.query) {
    for (const [key, value] of Object.entries(href.query)) {
      if (Array.isArray(value)) {
        for (const item of value) {
          searchParams.append(key, item);
        }
      } else if (value) {
        searchParams.set(key, value);
      }
    }
  }

  const query = searchParams.size ? `?${searchParams.toString()}` : "";
  const hash = href.hash ? `#${href.hash}`.replace("##", "#") : "";

  return `${pathname}${query}${hash}`;
}

export function useTransitionLink({
  href,
  onClick,
  target,
}: TransitionLinkOptions) {
  const prefersReducedMotion = usePrefersReducedMotion();
  const { start, isTransitioning } = usePageTransition();

  return useCallback<MouseEventHandler<HTMLAnchorElement>>(
    (event) => {
      onClick?.(event);

      if (event.defaultPrevented || isModifiedEvent(event)) {
        return;
      }

      const hashTargetId = getHashTargetId(href);
      if (hashTargetId) {
        const element = document.getElementById(hashTargetId);
        if (!element) {
          return;
        }

        event.preventDefault();
        element.scrollIntoView({
          behavior: prefersReducedMotion ? "auto" : "smooth",
          block: "start",
        });
        return;
      }

      if (target || isExternalHref(href)) {
        return;
      }

      event.preventDefault();
      if (isTransitioning) {
        return;
      }

      start(href);
    },
    [href, isTransitioning, onClick, prefersReducedMotion, start, target]
  );
}
