import type { Metadata } from "next";
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
        <section className="border-b border-line bg-surface">
          <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 sm:py-20 lg:px-8">
            <p className="font-mono text-xs uppercase tracking-[0.2em] text-gold">Destination directory</p>
            <h1 className="mt-4 max-w-4xl font-display text-3xl font-semibold leading-tight min-[400px]:text-4xl sm:text-5xl lg:text-6xl">Which destination is your community exploring this time?</h1>
            <p className="mt-5 max-w-2xl leading-7 text-sand">Search twelve curated destinations and find a place to begin planning your next shared journey.</p>
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
