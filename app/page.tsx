import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import DestinationGrid from "@/components/destinations/DestinationGrid";
import Footer from "@/components/layout/Footer";
import Header from "@/components/layout/Header";
import { getDestinations } from "@/lib/services/destinations";

export const metadata: Metadata = {
  title: "Travel together | Ziarra",
  description: "Discover communities, destinations, accommodation and events designed for shared travel experiences."
};

const stays = [
  { title: "Safari lodges", copy: "Stay close to nature with room for the whole community.", image: "/images/destinations/kenya-card.webp" },
  { title: "Coastal stays", copy: "Relax together in apartments, hotels and welcoming beach homes.", image: "/images/destinations/seychelles-card.webp" },
  { title: "City apartments", copy: "Flexible spaces for groups exploring culture, food and city life.", image: "/images/destinations/india-card.webp" }
];

const events = [
  { title: "Culture & heritage", copy: "Share local traditions, stories and memorable cultural moments.", image: "/images/destinations/morocco-card.webp" },
  { title: "Food & community", copy: "Gather around local flavours and community-led experiences.", image: "/images/destinations/south-africa-card.webp" },
  { title: "Outdoor gatherings", copy: "Connect through music, nature and open-air celebrations.", image: "/images/destinations/tanzania-card.webp" }
];

export default function LandingPage() {
  const destinations = getDestinations().slice(0, 12);

  return (
    <div className="min-h-screen bg-ink text-cream">
      <Header />
      <main>
        <section id="groups" className="relative isolate overflow-hidden border-b border-line">
          <Image src="/images/destinations/kenya-hero.webp" alt="Travellers sharing a safari experience at sunset" fill priority sizes="100vw" className="z-0 object-cover object-center" />
          <div aria-hidden="true" className="absolute inset-0 z-10 bg-gradient-to-r from-ink via-ink/90 to-ink/45" />
          <div aria-hidden="true" className="absolute inset-0 z-10 bg-gradient-to-t from-ink via-transparent to-ink/40" />
          <div className="relative z-20 mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-24 lg:px-8 lg:py-28">
            <p className="font-mono text-xs uppercase tracking-[0.22em] text-gold">Groups & communities</p>
            <h1 className="mt-4 max-w-4xl font-display text-4xl font-semibold leading-tight sm:text-5xl lg:text-6xl">Travel is better when your people are part of it.</h1>
            <p className="mt-5 max-w-2xl text-base leading-7 text-cream/85 sm:text-lg">Join groups built around common interests, connect with others, and form a community — or create a community of your own.</p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link href="/groups" className="rounded-xl bg-gold px-5 py-3 text-sm font-semibold text-ink">Explore Groups</Link>
              <Link href="/groups" className="rounded-xl border border-white/25 bg-ink/55 px-5 py-3 text-sm font-semibold text-cream backdrop-blur">Join a Group</Link>
              <button type="button" className="rounded-xl border border-white/25 bg-cream/10 px-5 py-3 text-sm font-semibold text-cream backdrop-blur">Create a Community</button>
            </div>
          </div>
        </section>

        <section id="community-types" className="mx-auto max-w-7xl px-4 py-14 sm:px-6 sm:py-20 lg:px-8">
          <div className="grid gap-5 lg:grid-cols-2">
            <article className="rounded-3xl border border-gold/30 bg-gradient-to-br from-gold/15 to-surface p-6 sm:p-8">
              <div className="flex items-start justify-between gap-4"><span className="grid h-12 w-12 place-items-center rounded-2xl bg-gold text-xl text-ink">◎</span><span className="rounded-full border border-gold/30 px-3 py-1 text-xs font-semibold text-gold">Open community</span></div>
              <h2 className="mt-8 font-display text-3xl font-semibold">Find people who share your interests.</h2>
              <p className="mt-4 max-w-xl leading-7 text-sand">Browse public communities, see what they are planning and join conversations around travel, culture and shared interests.</p>
              <Link href="/groups" className="mt-7 inline-flex rounded-xl bg-gold px-5 py-3 text-sm font-semibold text-ink">Explore Groups</Link>
            </article>
            <article id="closed-groups" className="rounded-3xl border border-lineStrong bg-surface p-6 sm:p-8">
              <div className="flex items-start justify-between gap-4"><span className="grid h-12 w-12 place-items-center rounded-2xl bg-surface2 text-xl text-gold">⌾</span><span className="rounded-full border border-lineStrong px-3 py-1 text-xs font-semibold text-sand">Closed group</span></div>
              <h2 className="mt-8 font-display text-3xl font-semibold">Plan privately with people you know.</h2>
              <p className="mt-4 max-w-xl leading-7 text-sand">Closed groups give friends, families, teams and organisations a focused space for planning trips together.</p>
              <button type="button" className="mt-7 rounded-xl border border-lineStrong px-5 py-3 text-sm font-semibold text-cream">Join a Group</button>
            </article>
          </div>
        </section>

        <section id="destinations" className="border-y border-line bg-surface/55">
          <div className="mx-auto max-w-7xl px-3 py-14 min-[400px]:px-4 sm:px-6 sm:py-20 lg:px-8">
            <div className="mb-9 max-w-3xl">
              <p className="font-mono text-xs uppercase tracking-[0.22em] text-gold">Destinations</p>
              <h2 className="mt-3 font-display text-3xl font-semibold leading-tight sm:text-5xl">Which destination is your community exploring this time?</h2>
            </div>
            <DestinationGrid destinations={destinations} />
            <Link href="/destinations" className="mt-8 inline-flex rounded-xl border border-lineStrong px-5 py-3 text-sm font-semibold text-gold">View Destinations <span aria-hidden="true" className="ml-2">→</span></Link>
          </div>
        </section>

        <section id="accommodation" className="mx-auto max-w-7xl px-4 py-14 sm:px-6 sm:py-20 lg:px-8">
          <div className="flex flex-col justify-between gap-5 sm:flex-row sm:items-end">
            <div className="max-w-3xl"><p className="font-mono text-xs uppercase tracking-[0.22em] text-gold">Accommodation</p><h2 className="mt-3 font-display text-3xl font-semibold leading-tight sm:text-5xl">Find the right place for your community to stay.</h2></div>
            <Link href="/accommodation" className="w-fit shrink-0 rounded-xl bg-gold px-5 py-3 text-sm font-semibold text-ink">Find Accommodation</Link>
          </div>
          <div className="mt-9 grid gap-4 sm:grid-cols-3">{stays.map((stay) => <FeatureCard key={stay.title} {...stay} />)}</div>
        </section>

        <section id="events" className="border-t border-line bg-surface">
          <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 sm:py-20 lg:px-8">
            <div className="grid gap-8 lg:grid-cols-[1fr_auto] lg:items-end">
              <div className="max-w-3xl"><p className="font-mono text-xs uppercase tracking-[0.22em] text-gold">Events</p><h2 className="mt-3 font-display text-3xl font-semibold sm:text-5xl">Enjoy events with your community.</h2><p className="mt-5 max-w-2xl leading-7 text-sand">Discover events your community can attend together and create shared experiences.</p></div>
              <div className="flex flex-wrap gap-3"><Link href="/events" className="rounded-xl bg-gold px-5 py-3 text-sm font-semibold text-ink">Explore Events</Link><button type="button" disabled aria-disabled="true" className="cursor-not-allowed rounded-xl border border-lineStrong px-5 py-3 text-sm font-semibold text-sandDim"><span className="block">Create an Event</span><span className="block text-[10px] uppercase tracking-wider">Coming soon</span></button></div>
            </div>
            <div className="mt-9 grid gap-4 sm:grid-cols-3">{events.map((event) => <FeatureCard key={event.title} {...event} />)}</div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}

function FeatureCard({ title, copy, image }: { title: string; copy: string; image: string }) {
  return <article className="group overflow-hidden rounded-2xl border border-line bg-surface"><div className="relative aspect-[4/3] overflow-hidden"><Image src={image} alt="" fill sizes="(min-width:640px) 33vw, 100vw" className="object-cover transition duration-500 group-hover:scale-105" /></div><div className="p-5"><h3 className="font-display text-xl font-semibold">{title}</h3><p className="mt-2 text-sm leading-6 text-sand">{copy}</p></div></article>;
}
