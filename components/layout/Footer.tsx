import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="border-t border-line bg-[#100d08]">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 py-12 sm:px-6 md:grid-cols-2 lg:px-8">
        <div>
          <Link href="/" className="inline-flex items-center gap-2 font-display text-xl font-semibold"><Image src="/images/ziarra-logo.jpeg" alt="" width={40} height={40} className="h-10 w-10 rounded-lg object-contain" />Ziarra</Link>
          <p className="mt-3 max-w-sm text-sm leading-6 text-sand">Explore activities, day trips and packages across a carefully selected group of African destinations.</p>
        </div>
        <div className="grid gap-8 min-[400px]:grid-cols-2 md:justify-self-end">
          <div>
            <h2 className="text-sm font-semibold text-cream">Navigate</h2>
            <div className="mt-3 flex flex-col gap-2 text-sm text-sand">
              <Link href="/groups">Groups</Link><Link href="/destinations">Destinations</Link><Link href="/accommodation">Accommodation</Link><Link href="/events">Events</Link>
            </div>
          </div>
          <div>
            <h2 className="text-sm font-semibold text-cream">Contact</h2>
            <a href="mailto:info@ziarra.world" className="mt-3 block text-sm text-sand">info@ziarra.world</a>
          </div>
        </div>
      </div>
      <div className="border-t border-line px-4 py-5 text-center text-xs text-sandDim">© {new Date().getFullYear()} Ziarra. All rights reserved.</div>
    </footer>
  );
}
