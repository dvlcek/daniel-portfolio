import Link from "next/link";

export function SiteFooter() {
  return (
    <footer className="border-t border-[#e2e6eb] bg-[#f8f8f6] text-[#101722]">
      <div className="mx-auto flex max-w-[1160px] flex-col gap-4 px-5 py-6 text-[10px] sm:px-8 md:flex-row md:items-center md:justify-between lg:px-14 xl:px-0">
        <Link href="/" className="font-semibold uppercase tracking-[0.2em] text-[#101722]">
          Daniel Vlcek
        </Link>

        <p className="text-[#8a95a4]">© {new Date().getFullYear()} Daniel Vlcek. All rights reserved.</p>

        <div className="flex items-center gap-5 text-[#7b8797]">
          <Link href="/privacy" className="transition hover:text-[#101722]">Privacy Policy</Link>
          <Link href="/contact" className="transition hover:text-[#101722]">Contact</Link>
        </div>
      </div>
    </footer>
  );
}
