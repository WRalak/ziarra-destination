import Link from "next/link";
import Image from "next/image";
import type { Destination } from "@/types/destination";

export default function DestinationCard({ destination }: { destination: Destination }) {
  return (
    <Link href={`/destinations/${destination.slug}`} className="group flex flex-col overflow-hidden rounded-xl border border-line bg-surface transition duration-200 hover:-translate-y-1 hover:border-gold/60 hover:bg-surface2 focus:outline-none focus-visible:ring-2 focus-visible:ring-gold">
      <div className="relative aspect-[3/2] overflow-hidden">
        <Image src={destination.cardImage} alt={`Travel landscape in ${destination.name}`} fill sizes="(min-width:1024px) 25vw, (min-width:640px) 50vw, 100vw" className="object-cover transition duration-500 group-hover:scale-105" />
        <span className="absolute right-2.5 top-2.5 overflow-hidden rounded border-2 border-white shadow-lg" role="img" aria-label={`${destination.name} flag`}>
          <Image src={`/images/flags/${destination.code.toLowerCase()}.png`} alt="" width={34} height={23} className="h-[23px] w-[34px] object-cover" />
        </span>
      </div>
      <div className="flex flex-1 flex-col p-4">
        <h2 className="font-display text-xl font-semibold">{destination.name}</h2>
        <p className="mt-1.5 text-xs leading-5 text-sand">{destination.tagline}</p>
        <span className="mt-auto pt-4 text-xs font-semibold text-gold">Explore <span aria-hidden="true" className="inline-block transition-transform group-hover:translate-x-1">→</span></span>
      </div>
    </Link>
  );
}
