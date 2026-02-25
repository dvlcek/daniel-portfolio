import { Container } from "@/components/ui/Container";

export function SiteFooter() {
  return (
    <footer className="border-t border-white/5 py-10">
      <Container className="flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
        <p className="text-sm text-white/55">
          © {new Date().getFullYear()} Daniel Vlcek. Built with Next.js + GSAP.
        </p>
        <div className="flex gap-4 text-sm text-white/60">
          <a className="hover:text-white" href="#work">Work</a>
          <a className="hover:text-white" href="#services">Services</a>
          <a className="hover:text-white" href="#contact">Contact</a>
        </div>
      </Container>
    </footer>
  );
}