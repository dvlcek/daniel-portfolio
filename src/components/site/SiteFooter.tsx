import Link from "next/link";

export function SiteFooter() {
  return (
    <footer className="border-t border-white/[0.055] bg-[#06101b] text-white">
      <div className="mx-auto flex max-w-[1160px] flex-col gap-4 px-5 py-7 text-[10px] sm:px-8 md:flex-row md:items-center md:justify-between lg:px-14 xl:px-0">
        <Link href="/" className="font-semibold uppercase tracking-[0.2em] text-white/86 transition hover:text-white">
          Daniel Vlcek
        </Link>

        <p className="text-white/28">© {new Date().getFullYear()} Daniel Vlcek. All rights reserved.</p>

        <div className="flex items-center gap-5 text-white/40">
          <Link href="/work" className="transition hover:text-white/84">Work</Link>
          <Link href="/contact" className="transition hover:text-white/84">Contact</Link>
        </div>
      </div>
    </footer>
  );
}
