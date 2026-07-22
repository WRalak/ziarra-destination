import Image from "next/image";
import Link from "next/link";
import type { Offering } from "@/types/destination";

const labels = { activity: "Activity", "day-trip": "Day trip", package: "Package" } as const;

export default function OfferingCard({ offering }: { offering: Offering }) {
  return (
    <article className="group flex h-full min-w-0 flex-col overflow-hidden rounded-xl border border-line bg-surface shadow-lg transition hover:-translate-y-1 hover:border-gold/50">
      <div className="relative aspect-[3/2] overflow-hidden">
        <Image src={offering.image} alt={`Travel preview for ${offering.title} in ${offering.country}`} fill sizes="(min-width:1024px) 25vw, (min-width:640px) 50vw, 100vw" className="object-cover transition duration-500 group-hover:scale-105" />
        <span className="absolute left-1.5 top-1.5 rounded-full bg-cream/90 px-1.5 py-1 text-[9px] font-semibold text-ink min-[400px]:left-2.5 min-[400px]:top-2.5 min-[400px]:px-2 min-[400px]:text-[10px]">{labels[offering.category]}</span>
      </div>
      <div className="flex min-w-0 flex-1 flex-col p-2.5 min-[400px]:p-3 sm:p-4">
        <h3 className="font-display text-sm font-semibold leading-snug min-[400px]:text-base sm:text-lg">{offering.title}</h3>
        <p className="mt-1 text-[10px] leading-4 text-sand min-[400px]:text-[11px] sm:text-xs">{offering.location}, {offering.country}</p>
        <p className="mt-3 text-[11px] text-sand">{offering.duration}</p>
        <div className="mt-auto pt-4">
          <Link href={`/book/${offering.category}/${offering.slug}`} className="block min-h-9 rounded-lg bg-gold px-2 py-2 text-center text-[11px] font-semibold text-ink min-[400px]:min-h-10 min-[400px]:px-3 min-[400px]:py-2.5 min-[400px]:text-xs">
            Book now
          </Link>
        </div>
      </div>
    </article>
  );
}
