import type { Metadata } from "next";
import Link from "next/link";
import DestinationGrid from "@/components/destinations/DestinationGrid";
import OfferingCard from "@/components/destinations/OfferingCard";
import HeroSearch from "@/components/search/HeroSearch";
import Footer from "@/components/layout/Footer";
import Header from "@/components/layout/Header";
import { getDestinations, getFeaturedOfferings } from "@/lib/services/destinations";

export const metadata: Metadata = {
  title: "Explore Africa | Ziarra",
  description: "Discover activities, day trips and travel packages across twelve carefully selected African destinations."
};

const values = [
  { title: "Activities", symbol: "✦", copy: "Find experiences shaped around local places, interests and communities." },
  { title: "Day Trips", symbol: "↗", copy: "Explore nearby highlights with plans designed to fit into a single day." },
  { title: "Packages", symbol: "◇", copy: "Bring multiple parts of a journey together in one considered travel plan." }
];

export default function HomePage() {
  const featured = getDestinations().slice(0, 4);
  const featuredSections = [
    { title: "Featured activities", items: getFeaturedOfferings("activity").slice(0, 3) },
    { title: "Popular day trips", items: getFeaturedOfferings("day-trip").slice(0, 3) },
    { title: "Recommended packages", items: getFeaturedOfferings("package").slice(0, 3) }
  ];
  return (
    <div className="min-h-screen bg-ink text-cream">
      <Header />
      <main>
        <section className="relative isolate overflow-hidden border-b border-line">
          <div aria-hidden="true" className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_75%_25%,rgba(227,165,48,0.20),transparent_30%),radial-gradient(circle_at_15%_80%,rgba(124,140,87,0.14),transparent_35%)]" />
          <div aria-hidden="true" className="absolute inset-0 -z-10 opacity-30 [background-image:linear-gradient(rgba(244,238,225,.06)_1px,transparent_1px),linear-gradient(90deg,rgba(244,238,225,.06)_1px,transparent_1px)] [background-size:48px_48px]" />
          <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 sm:py-28 lg:px-8 lg:py-36">
            <p className="font-mono text-xs uppercase tracking-[0.22em] text-gold">Twelve destinations · one continent</p>
            <h1 className="mt-5 max-w-4xl font-display text-4xl font-semibold leading-[1.08] min-[400px]:text-5xl sm:text-6xl lg:text-7xl">Discover your next unforgettable experience</h1>
            <p className="mt-6 max-w-2xl text-base leading-7 text-sand sm:text-lg">Discover unforgettable activities, day trips and travel packages across twelve carefully selected African destinations.</p>
            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <Link href="/destinations" className="rounded-xl bg-gold px-6 py-3.5 text-center text-sm font-semibold text-ink transition hover:bg-[#f0b545] focus:outline-none focus-visible:ring-2 focus-visible:ring-cream focus-visible:ring-offset-2 focus-visible:ring-offset-ink">Explore destinations</Link>
              <Link href="#about" className="rounded-xl border border-lineStrong bg-surface/70 px-6 py-3.5 text-center text-sm font-semibold text-cream transition hover:bg-surface2 focus:outline-none focus-visible:ring-2 focus-visible:ring-gold">How Ziarra helps</Link>
            </div>
            <HeroSearch countries={getDestinations().map(item=>item.name)} />
            <div aria-hidden="true" className="mt-16 flex max-w-3xl flex-wrap gap-3 text-3xl sm:text-4xl">{featured.map((item) => <span key={item.code} className="grid h-16 w-16 place-items-center rounded-2xl border border-lineStrong bg-surface/70">{item.flag}</span>)}</div>
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
          <div className="mb-9 flex flex-col justify-between gap-4 sm:flex-row sm:items-end">
            <div><p className="font-mono text-xs uppercase tracking-[0.2em] text-gold">Start somewhere memorable</p><h2 className="mt-3 font-display text-3xl font-semibold sm:text-4xl">Featured destinations</h2></div>
            <Link href="/destinations" className="w-fit rounded-md text-sm font-semibold text-gold focus:outline-none focus-visible:ring-2 focus-visible:ring-gold">View all 12 <span aria-hidden="true">→</span></Link>
          </div>
          <DestinationGrid destinations={featured} />
        </section>

        <div className="mx-auto max-w-7xl px-4 pb-16 sm:px-6 lg:px-8">
          <p className="mb-2 rounded-xl border border-gold/20 bg-gold/10 p-4 text-sm text-gold">Preview data — live availability and pricing will be connected later.</p>
          {featuredSections.map((section) => <section key={section.title} className="pt-14"><h2 className="mb-7 font-display text-2xl font-semibold sm:text-3xl">{section.title}</h2><div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">{section.items.map(item=><OfferingCard key={item.id} offering={item}/>)}</div></section>)}
        </div>

        <section id="about" className="border-y border-line bg-surface">
          <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
            <div className="max-w-2xl"><p className="font-mono text-xs uppercase tracking-[0.2em] text-gold">Travel your way</p><h2 className="mt-3 font-display text-3xl font-semibold sm:text-4xl">Three ways to shape the journey</h2></div>
            <div className="mt-10 grid gap-5 md:grid-cols-3">{values.map((value) => <article key={value.title} className="rounded-2xl border border-lineStrong bg-ink p-6"><span aria-hidden="true" className="text-2xl text-gold">{value.symbol}</span><h3 className="mt-6 font-display text-xl font-semibold">{value.title}</h3><p className="mt-3 text-sm leading-6 text-sand">{value.copy}</p></article>)}</div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
