import Link from "next/link";

const links = [
  { href: "/groups", label: "Groups" },
  { href: "/accommodations", label: "Accommodations" },
  { href: "/experiences", label: "Experiences" },
  { href: "/destinations", label: "Destinations" },
  { href: "/events", label: "Events" }
];

export default function NavBar() {
  return (
    <header className="sticky top-0 z-40 border-b border-line bg-ink/90 backdrop-blur-md">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-8 py-4">
        <Link href="/" className="flex items-center gap-2.5 font-display text-lg font-semibold">
          <span className="flex h-[30px] w-[30px] items-center justify-center rounded-lg bg-gradient-to-br from-gold to-clay font-mono text-sm font-bold text-ink">
            Z
          </span>
          Ziarra
        </Link>
        <nav className="hidden gap-8 text-sm text-sand md:flex">
          {links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className={
                l.href === "/destinations"
                  ? "border-b-2 border-gold pb-1 text-cream"
                  : "border-b-2 border-transparent pb-1 hover:text-cream"
              }
            >
              {l.label}
            </Link>
          ))}
        </nav>
        <div className="flex items-center gap-4">
          <div className="hidden h-9 w-9 items-center justify-center rounded-full border border-lineStrong text-sand sm:flex">
            ♡
          </div>
          <Link
            href="#"
            className="rounded-lg bg-gold px-4 py-2.5 text-sm font-semibold text-[#231A08]"
          >
            Earn with Ziarra
          </Link>
        </div>
      </div>
    </header>
  );
}
