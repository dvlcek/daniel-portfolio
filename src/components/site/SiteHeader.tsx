import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 border-b border-white/5 bg-black/30 backdrop-blur">
      <Container className="flex h-16 items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="h-8 w-8 rounded-xl bg-white/10 ring-1 ring-white/10" />
          <div className="leading-tight">
            <p className="text-sm font-semibold tracking-tight">Daniel Vlcek</p>
            <p className="text-xs text-white/55">Software Dev • Automation</p>
          </div>
        </div>

        <nav className="hidden items-center gap-2 md:flex">
            <Button href="/work" variant="ghost">Work</Button>
            <Button href="/#services" variant="ghost">Services</Button>
            <Button href="/skills" variant="ghost">Skills</Button>
            <Button href="/cv" variant="ghost">CV</Button>
            <Button href="/#contact" variant="secondary">Book a Call</Button>
        </nav>

        <div className="md:hidden">
          <Button href="#contact" variant="secondary">Book</Button>
        </div>
      </Container>
    </header>
  );
}