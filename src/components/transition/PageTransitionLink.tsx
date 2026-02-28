"use client";

import React from "react";
import Link, { type LinkProps } from "next/link";
import { usePageTransition } from "./TransitionProvider";

type Props = LinkProps &
  React.AnchorHTMLAttributes<HTMLAnchorElement> & {
    children: React.ReactNode;
  };

function hrefToString(href: LinkProps["href"]) {
  if (typeof href === "string") return href;

  // URL instance
  if (href instanceof URL) return href.toString();

  // UrlObject
  const pathname = href.pathname ?? "/";
  const query =
    href.query && Object.keys(href.query).length
      ? `?${new URLSearchParams(href.query as Record<string, string>).toString()}`
      : "";
  const hash = href.hash ? `#${href.hash}`.replace("##", "#") : "";

  return `${pathname}${query}${hash}`;
}

export function TransitionLink({ href, onClick, children, ...rest }: Props) {
  const { start, isTransitioning } = usePageTransition();

  return (
    <Link
      href={href}
      {...rest}
      onClick={(e) => {
        onClick?.(e);
        if (e.defaultPrevented) return;

        e.preventDefault();
        if (isTransitioning) return;

        start(hrefToString(href));
      }}
    >
      {children}
    </Link>
  );
}