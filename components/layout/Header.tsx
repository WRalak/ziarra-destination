"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useState } from "react";

const links = [
  { href: "/groups", label: "Groups" },
  { href: "/destinations", label: "Destinations" },
  { href: "/accommodation", label: "Accommodation" },
  { href: "/events", label: "Events" }
];

export default function Header() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-50 border-b border-line bg-ink/95 backdrop-blur-xl">
      <div className="relative mx-auto flex min-h-16 max-w-7xl items-center justify-between gap-4 px-4 sm:px-6 lg:px-8">
        <Link href="/" className="flex items-center gap-2 rounded focus:outline-none focus-visible:ring-2 focus-visible:ring-gold">
          <Image src="/images/ziarra-logo.jpeg" alt="Ziarra" width={44} height={44} priority className="h-10 w-10 rounded-lg object-contain sm:h-11 sm:w-11" />
          <span className="font-display text-xl font-semibold">Ziarra</span>
        </Link>
        <nav aria-label="Primary" className="absolute left-1/2 hidden -translate-x-1/2 items-center gap-1 md:flex lg:gap-3">
          {links.map((link) => <Link key={link.href} href={link.href} className={`rounded px-2 py-2 text-xs lg:text-sm ${pathname.startsWith(link.href) ? "text-gold" : "text-sand hover:text-cream"}`}>{link.label}</Link>)}
        </nav>
        <button type="button" onClick={() => setOpen(!open)} aria-expanded={open} aria-controls="mobile-nav" aria-label={open ? "Close navigation" : "Open navigation"} className="grid h-11 w-11 place-items-center rounded-lg border border-lineStrong md:hidden">
          {open ? "×" : "☰"}
        </button>
      </div>
      {open ? (
        <nav id="mobile-nav" aria-label="Mobile" className="border-t border-line bg-surface p-4 md:hidden">
          <div className="grid gap-1">{links.map((link) => <Link key={link.href} href={link.href} onClick={() => setOpen(false)} className={`block rounded-lg px-4 py-3 ${pathname.startsWith(link.href) ? "bg-surface2 text-gold" : "text-sand hover:bg-surface2 hover:text-cream"}`}>{link.label}</Link>)}</div>
        </nav>
      ) : null}
    </header>
  );
}
