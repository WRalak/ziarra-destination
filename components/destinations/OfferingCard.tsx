"use client";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { formatCurrency } from "@/lib/booking/pricing";
import { getSavedOfferingIds, toggleSavedOffering } from "@/lib/booking/storage";
import type { Offering } from "@/types/destination";

const labels = { activity: "Activity", "day-trip": "Day trip", package: "Package" } as const;
export function formatPrice(offering: Offering) { return formatCurrency(offering.price, offering.currency); }

export default function OfferingCard({ offering }: { offering: Offering }) {
  const [saved, setSaved] = useState(false);
  useEffect(() => setSaved(getSavedOfferingIds().includes(offering.id)), [offering.id]);
  return <article className="group flex flex-col overflow-hidden rounded-xl border border-line bg-surface shadow-lg transition hover:-translate-y-1 hover:border-gold/50">
    <div className="relative aspect-[3/2]">
      <Image src={offering.image} alt={`Travel preview for ${offering.title} in ${offering.country}`} fill sizes="(min-width:1024px) 25vw, (min-width:640px) 50vw, 100vw" className="object-cover transition duration-500 group-hover:scale-105"/>
      <div className="absolute inset-x-0 top-0 flex items-start justify-between p-2.5"><span className="rounded-full bg-cream/90 px-2 py-1 text-[10px] font-semibold text-ink">{labels[offering.category]}</span><button type="button" onClick={()=>setSaved(toggleSavedOffering(offering.id))} aria-label={saved?`Remove ${offering.title} from saved listings`:`Save ${offering.title}`} aria-pressed={saved} className="grid h-8 w-8 place-items-center rounded-full bg-ink/85 text-base text-cream">{saved?"♥":"♡"}</button></div>
    </div>
    <div className="flex flex-1 flex-col p-4">
      <h3 className="font-display text-lg font-semibold leading-snug">{offering.title}</h3>
      <p className="mt-1 text-xs text-sand">{offering.location}, {offering.country}</p>
      <div className="mt-3 flex flex-wrap gap-2 text-[11px] text-sand"><span>{offering.duration}</span><span>★ {offering.rating} ({offering.reviewCount})</span></div>
      <div className="mt-auto pt-4"><span className="text-[11px] text-sandDim">From</span><div className="text-sm font-semibold">{formatPrice(offering)} <span className="text-[11px] font-normal text-sand">per person</span></div><Link href={`/book/${offering.category}/${offering.slug}`} className="mt-3 block rounded-lg bg-gold px-3 py-2 text-center text-xs font-semibold text-ink">Book now</Link></div>
    </div>
  </article>;
}
