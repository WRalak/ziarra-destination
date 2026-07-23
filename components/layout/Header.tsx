"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

type IconName = "groups" | "destinations" | "accommodation" | "events" | "earn" | "login";

const links: { href: string; label: string; icon: IconName }[] = [
  { href: "/groups", label: "Groups", icon: "groups" },
  { href: "/destinations", label: "Destinations", icon: "destinations" },
  { href: "/accommodation", label: "Accommodation", icon: "accommodation" },
  { href: "/events", label: "Events", icon: "events" }
];

export default function Header() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-50 border-b border-line bg-ink/95 backdrop-blur-xl">
      <div className="relative mx-auto flex min-h-[72px] max-w-[1440px] items-center justify-between gap-4 px-4 sm:px-6 lg:px-8">
        <Link href="/" className="flex shrink-0 items-center gap-2 rounded focus:outline-none focus-visible:ring-2 focus-visible:ring-gold">
          <Image src="/images/ziarra-logo.jpeg" alt="Ziarra" width={44} height={44} priority className="h-10 w-10 rounded-lg object-contain sm:h-11 sm:w-11" />
          <span className="font-display text-xl font-semibold">Ziarra</span>
        </Link>

        <nav aria-label="Primary" className="absolute left-1/2 hidden -translate-x-1/2 items-center gap-0.5 lg:flex xl:gap-2">
          {links.map((link) => (
            <Link key={link.href} href={link.href} className={`flex items-center gap-1.5 rounded-lg px-2 py-2 text-xs transition xl:px-3 xl:text-sm ${pathname.startsWith(link.href) ? "bg-gold/10 text-gold" : "text-sand hover:bg-surface2 hover:text-cream"}`}>
              <NavIcon name={link.icon} />
              <span>{link.label}</span>
            </Link>
          ))}
        </nav>

        <div className="hidden shrink-0 items-center gap-2 lg:flex">
          <button type="button" title="Demo only" className="flex items-center gap-2 rounded-lg bg-gold px-3 py-2.5 text-xs font-semibold text-ink xl:px-4 xl:text-sm">
            <NavIcon name="earn" />
            <span>Earn with Ziarra</span>
          </button>
          <button type="button" title="Demo only" className="flex items-center gap-2 rounded-lg border border-lineStrong px-3 py-2.5 text-xs font-semibold text-cream xl:px-4 xl:text-sm">
            <NavIcon name="login" />
            <span>Login</span>
          </button>
        </div>

        <button type="button" onClick={() => setOpen(!open)} aria-expanded={open} aria-controls="mobile-nav" aria-label={open ? "Close navigation" : "Open navigation"} className="grid h-11 w-11 place-items-center rounded-lg border border-lineStrong lg:hidden">
          <span className="text-xl" aria-hidden="true">{open ? "×" : "☰"}</span>
        </button>
      </div>

      {open ? (
        <nav id="mobile-nav" aria-label="Mobile" className="border-t border-line bg-surface p-4 lg:hidden">
          <div className="grid gap-1">
            {links.map((link) => (
              <Link key={link.href} href={link.href} onClick={() => setOpen(false)} className={`flex items-center gap-3 rounded-lg px-4 py-3 ${pathname.startsWith(link.href) ? "bg-surface2 text-gold" : "text-sand hover:bg-surface2 hover:text-cream"}`}>
                <NavIcon name={link.icon} />
                <span>{link.label}</span>
              </Link>
            ))}
          </div>
          <div className="mt-4 grid grid-cols-2 gap-2 border-t border-line pt-4">
            <button type="button" title="Demo only" className="flex items-center justify-center gap-2 rounded-lg bg-gold px-3 py-3 text-center text-xs font-semibold text-ink"><NavIcon name="earn" />Earn with Ziarra</button>
            <button type="button" title="Demo only" className="flex items-center justify-center gap-2 rounded-lg border border-lineStrong px-3 py-3 text-sm font-semibold text-cream"><NavIcon name="login" />Login</button>
          </div>
        </nav>
      ) : null}
    </header>
  );
}

function NavIcon({ name }: { name: IconName }) {
  const common = { width: 17, height: 17, viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: 1.8, strokeLinecap: "round" as const, strokeLinejoin: "round" as const, "aria-hidden": true };
  if (name === "groups") return <svg {...common}><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M22 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75"/></svg>;
  if (name === "destinations") return <svg {...common}><path d="M20 10c0 5-8 12-8 12S4 15 4 10a8 8 0 1 1 16 0Z"/><circle cx="12" cy="10" r="2.5"/></svg>;
  if (name === "accommodation") return <svg {...common}><path d="M2 4v16M22 20v-8a2 2 0 0 0-2-2H2M6 10V6h5a2 2 0 0 1 2 2v2M2 17h20"/></svg>;
  if (name === "events") return <svg {...common}><rect x="3" y="5" width="18" height="16" rx="2"/><path d="M16 3v4M8 3v4M3 11h18"/><path d="M8 15h.01M12 15h.01M16 15h.01"/></svg>;
  if (name === "earn") return <svg {...common}><circle cx="12" cy="12" r="8"/><path d="M15 9.5c-.6-.7-1.5-1-3-1-1.7 0-3 .8-3 2s1.3 1.8 3 2 3 .8 3 2-1.3 2-3 2c-1.5 0-2.4-.3-3-1M12 6.5v11"/></svg>;
  return <svg {...common}><circle cx="12" cy="8" r="4"/><path d="M4 21a8 8 0 0 1 16 0"/></svg>;
}
