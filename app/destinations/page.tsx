import type { Metadata } from "next";
import Image from "next/image";
import DestinationSearch from "@/components/destinations/DestinationSearch";
import Footer from "@/components/layout/Footer";
import Header from "@/components/layout/Header";
import { getDestinations } from "@/lib/services/destinations";

export const metadata: Metadata = {
  title: "Destinations | Ziarra",
  description: "Explore twelve carefully selected African travel destinations."
};

export default function DestinationsPage() {
  return (
    <div className="min-h-screen bg-ink text-cream">
      <Header />
      <main>
        <section className="relative isolate overflow-hidden border-b border-line">
          <Image src="/images/destinations/india-hero.webp" alt="Scenic destination landscape" fill priority sizes="100vw" className="z-0 object-cover object-center" />
          <div aria-hidden="true" className="absolute inset-0 z-10 bg-gradient-to-r from-ink via-ink/80 to-ink/40" />
          <div aria-hidden="true" className="absolute inset-0 z-10 bg-gradient-to-t from-ink/70 via-transparent to-ink/25" />
          <div className="relative z-20 mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-24 lg:px-8 lg:py-28">
            <p className="font-mono text-xs uppercase tracking-[0.2em] text-gold">Destination directory</p>
            <h1 className="mt-4 max-w-4xl font-display text-3xl font-semibold leading-tight min-[400px]:text-4xl sm:text-5xl lg:text-6xl">Which destination is your community exploring this time?</h1>
          </div>
        </section>
        <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 sm:py-16 lg:px-8">
          <DestinationSearch destinations={getDestinations()} />
        </div>
      </main>
      <Footer />
    </div>
  );
}
