"use client";

import React from "react";
import Link, { type LinkProps } from "next/link";
import {
  hrefToString,
  useTransitionLink,
} from "./useTransitionLink";

type Props = LinkProps &
  React.AnchorHTMLAttributes<HTMLAnchorElement> & {
    children: React.ReactNode;
};

export function TransitionLink({ href, onClick, children, ...rest }: Props) {
  const hrefString = hrefToString(href);
  const handleClick = useTransitionLink({
    href: hrefString,
    onClick,
    target: rest.target,
  });

  return (
    <Link
      href={href}
      {...rest}
      onClick={handleClick}
    >
      {children}
    </Link>
  );
}
