"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

export default function Header() {
  const [open, setOpen] = useState(false);
  const active = usePathname().startsWith("/destinations");

  return (
    <header className="sticky top-0 z-50 border-b border-line bg-ink/95 backdrop-blur-xl">
      <div className="mx-auto flex min-h-16 max-w-7xl items-center justify-between gap-4 px-4 sm:px-6 lg:px-8">
        <Link href="/" className="flex items-center gap-2 rounded focus:outline-none focus-visible:ring-2 focus-visible:ring-gold">
          <span className="grid h-9 w-9 place-items-center rounded-xl bg-gold font-bold text-ink">Z</span>
          <span className="font-display text-xl font-semibold">Ziarra</span>
        </Link>
        <nav aria-label="Primary" className="hidden md:block">
          <Link href="/destinations" className={`rounded px-2 py-2 text-sm ${active ? "text-gold" : "text-sand hover:text-cream"}`}>
            Destinations
          </Link>
        </nav>
        <button type="button" onClick={() => setOpen(!open)} aria-expanded={open} aria-controls="mobile-nav" aria-label={open ? "Close navigation" : "Open navigation"} className="grid h-11 w-11 place-items-center rounded-lg border border-lineStrong md:hidden">
          {open ? "×" : "☰"}
        </button>
      </div>
      {open ? (
        <nav id="mobile-nav" aria-label="Mobile" className="border-t border-line bg-surface p-4 md:hidden">
          <Link href="/destinations" onClick={() => setOpen(false)} className="block rounded-lg px-4 py-3 text-sand hover:bg-surface2 hover:text-cream">Destinations</Link>
        </nav>
      ) : null}
    </header>
  );
}
