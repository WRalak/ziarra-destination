import Image from "next/image";
import Link from "next/link";
import type { Offering } from "@/types/destination";

const labels = { activity: "Activity", "day-trip": "Day trip", package: "Package" } as const;

export default function OfferingCard({ offering }: { offering: Offering }) {
  return (
    <article className="group flex flex-col overflow-hidden rounded-xl border border-line bg-surface shadow-lg transition hover:-translate-y-1 hover:border-gold/50">
      <div className="relative aspect-[3/2] overflow-hidden">
        <Image src={offering.image} alt={`Travel preview for ${offering.title} in ${offering.country}`} fill sizes="(min-width:1024px) 25vw, (min-width:640px) 50vw, 100vw" className="object-cover transition duration-500 group-hover:scale-105" />
        <span className="absolute left-2.5 top-2.5 rounded-full bg-cream/90 px-2 py-1 text-[10px] font-semibold text-ink">{labels[offering.category]}</span>
      </div>
      <div className="flex flex-1 flex-col p-4">
        <h3 className="font-display text-lg font-semibold leading-snug">{offering.title}</h3>
        <p className="mt-1 text-xs text-sand">{offering.location}, {offering.country}</p>
        <p className="mt-3 text-[11px] text-sand">{offering.duration}</p>
        <Link href={`/book/${offering.category}/${offering.slug}`} className="mt-4 block rounded-lg bg-gold px-3 py-2 text-center text-xs font-semibold text-ink">
          Book now
        </Link>
      </div>
    </article>
  );
}
