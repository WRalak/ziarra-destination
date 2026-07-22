import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import CountryHero from "@/components/destinations/CountryHero";
import OfferingsSection from "@/components/destinations/OfferingsSection";
import Footer from "@/components/layout/Footer";
import Header from "@/components/layout/Header";
import { getDestinationBySlug, getDestinations } from "@/lib/services/destinations";

type CountryPageProps = { params: { country: string } };

export function generateStaticParams() {
  return getDestinations().map((destination) => ({ country: destination.slug }));
}

export function generateMetadata({ params }: CountryPageProps): Metadata {
  const destination = getDestinationBySlug(params.country);
  if (!destination) return { title: "Destination not found" };
  return {
    title: `Explore ${destination.name} | Destinations`,
    description: `Explore activities, day trips and travel packages available in ${destination.name}.`
  };
}

export default function CountryPage({ params }: CountryPageProps) {
  const destination = getDestinationBySlug(params.country);
  if (!destination) notFound();
  return (
    <div className="min-h-screen bg-ink text-cream">
      <Header />
      <main>
        <nav aria-label="Breadcrumb" className="mx-auto max-w-7xl px-4 py-4 text-sm text-sand sm:px-6 lg:px-8">
          <ol className="flex flex-wrap items-center gap-2"><li><Link href="/destinations" className="rounded hover:text-cream focus:outline-none focus-visible:ring-2 focus-visible:ring-gold">Destinations</Link></li><li aria-hidden="true">/</li><li aria-current="page" className="text-cream">{destination.name}</li></ol>
        </nav>
        <CountryHero destination={destination} />
        <section className="mx-auto grid max-w-7xl gap-5 px-4 py-10 sm:grid-cols-2 sm:px-6 lg:px-8"><div className="rounded-xl border border-line bg-surface p-5"><span className="text-xs text-sandDim">Capital</span><p className="mt-1 font-semibold">{destination.capital}</p></div><div className="rounded-xl border border-line bg-surface p-5"><span className="text-xs text-sandDim">Region</span><p className="mt-1 font-semibold">{destination.region}</p></div></section>
        <OfferingsSection eyebrow="Things to do" title={`Activities in ${destination.name}`} offerings={destination.activities} />
        <OfferingsSection eyebrow="A day away" title={`Day trips in ${destination.name}`} offerings={destination.dayTrips} />
        <OfferingsSection eyebrow="Longer journeys" title={`Packages in ${destination.name}`} offerings={destination.packages} />
        <div className="mx-auto max-w-7xl px-4 pb-16 sm:px-6 lg:px-8"><Link href="/destinations" className="inline-flex rounded-lg border border-lineStrong px-4 py-2.5 text-sm font-semibold text-gold transition hover:bg-surface focus:outline-none focus-visible:ring-2 focus-visible:ring-gold"><span aria-hidden="true">←</span>&nbsp; Back to destinations</Link></div>
      </main>
      <Footer />
    </div>
  );
}
