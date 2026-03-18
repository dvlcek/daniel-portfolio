import Image from "next/image";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { TransitionAnchor } from "@/components/transition/TransitionAnchor";

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-[#0a0d14]/80 backdrop-blur">
      <Container className="flex h-16 items-center justify-between">
        <TransitionAnchor href="/" className="flex items-center gap-3">
          <div className="relative h-8 w-8 overflow-hidden rounded-xl bg-white/5 ring-1 ring-white/15">
            <Image
              src="/logo.svg"
              alt="Daniel Vlcek Logo"
              fill
              className="object-contain p-1"
              priority
            />
          </div>

          <div className="leading-tight">
            <p className="text-sm font-semibold tracking-tight text-white">
              Daniel Vlcek
            </p>
            <p className="text-xs text-white/55">Web Platforms & Automation</p>
          </div>
        </TransitionAnchor>

        <nav className="hidden items-center gap-2 md:flex">
          <Button href="/work" variant="ghost">Work</Button>
          <Button href="/services" variant="ghost">Services</Button>
          <Button href="/about" variant="ghost">About</Button>
          <Button href="/insights" variant="ghost">Insights</Button>
          <Button href="/contact" variant="ghost">Contact</Button>
          <Button href="/contact" variant="primary">Book a Call</Button>
        </nav>

        <div className="md:hidden">
          <Button href="/contact" variant="secondary">Book Call</Button>
        </div>
      </Container>
    </header>
  );
}