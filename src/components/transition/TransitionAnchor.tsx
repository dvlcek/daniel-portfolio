"use client";

import Link from "next/link";
import React from "react";
import { useTransitionLink } from "@/components/transition/useTransitionLink";

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
  const handleClick = useTransitionLink({ href, onClick, target });

  return (
    <Link
      href={href}
      className={className}
      prefetch={prefetch}
      target={target}
      rel={rel}
      onClick={handleClick}
    >
      {children}
    </Link>
  );
}
