"use client";

import { useRouter } from "next/navigation";
import { useTransition } from "react";
import React from "react";

interface Props {
  href: string;
  children: React.ReactNode;
  className?: string;
}

export function NavLink({ href, children, className }: Props) {
  const router = useRouter();

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    router.push(href);
  };

  return (
    <a href={href} onClick={handleClick} className={className}>
      {children}
    </a>
  );
}