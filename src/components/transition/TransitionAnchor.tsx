"use client";

import Link from "next/link";
import React from "react";
import { usePageTransition } from "@/components/transition/TransitionProvider";

type Props = React.PropsWithChildren<{
  href: string;
  className?: string;
  prefetch?: boolean;
  target?: React.HTMLAttributeAnchorTarget;
  rel?: string;
  onClick?: React.MouseEventHandler<HTMLAnchorElement>;
}>;

export function TransitionAnchor({
  href,
  className,
  prefetch = true,
  target,
  rel,
  onClick,
  children,
}: Props) {
  const { start, isTransitioning } = usePageTransition();

  const isHashOnly = href.startsWith("#");
  const isSamePageAnchor = href.startsWith("/#");
  const isExternal =
    href.startsWith("http://") ||
    href.startsWith("https://") ||
    href.startsWith("mailto:") ||
    href.startsWith("tel:");

  const shouldUseTransition = !target && !isHashOnly && !isSamePageAnchor && !isExternal;

  return (
    <Link
      href={href}
      className={className}
      prefetch={prefetch}
      target={target}
      rel={rel}
      onClick={(e) => {
        onClick?.(e);
        if (e.defaultPrevented) return;

        if (!shouldUseTransition) return;

        e.preventDefault();
        if (isTransitioning) return;

        start(href);
      }}
    >
      {children}
    </Link>
  );
}