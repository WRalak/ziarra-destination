import Link from "next/link";

export default function NavBar() {
  return (
    <header className="sticky top-0 z-40 border-b border-line bg-ink/90 backdrop-blur-md">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-8 py-4">
        <Link href="/destinations" className="flex items-center gap-2.5 font-display text-lg font-semibold">
          <span className="flex h-[30px] w-[30px] items-center justify-center rounded-lg bg-gradient-to-br from-gold to-clay font-mono text-sm font-bold text-ink">Z</span>
          Ziarra
        </Link>
        <nav className="text-sm text-sand">
          <Link href="/destinations" className="border-b-2 border-gold pb-1 text-cream">Destinations</Link>
        </nav>
      </div>
    </header>
  );
}
