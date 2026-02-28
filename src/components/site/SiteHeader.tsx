import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { primaryCta } from "@/lib/siteContent";
import Image from "next/image"
import {TransitionAnchor} from "@/components/transition/TransitionAnchor"

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-[#0a0d14]/80 backdrop-blur">
      <Container className="flex h-16 items-center justify-between">
        <TransitionAnchor href="/" className="flex items-center gap-3">
          <div className="relative h-8 w-8 overflow-hidden rounded-xl ring-1 ring-white/15 bg-white/5">
            <Image
              src="/logo.svg"
              alt="Daniel Vlcek Logo"
              fill
              className="object-contain p-1"
              priority
            />
          </div>
          <div className="leading-tight">
            <p className="text-sm font-semibold tracking-tight">Daniel Vlcek</p>
            <p className="text-xs text-white/55">Systems Architect</p>
          </div>
        </TransitionAnchor>

        <nav className="hidden items-center gap-2 md:flex">
          <Button href="/#work" variant="ghost">Work</Button>
          <Button href="/#services" variant="ghost">Services</Button>
          <Button href="/about" variant="ghost">About</Button>
          <Button href="/insights" variant="ghost">Insights</Button>
          <Button href="/#contact" variant="ghost">Contact</Button>
          <Button href={primaryCta.href} variant="primary">{primaryCta.label}</Button>
        </nav>

        <div className="md:hidden">
          <Button href={primaryCta.href} variant="secondary">Book Call</Button>
        </div>
      </Container>
    </header>
  );
}
