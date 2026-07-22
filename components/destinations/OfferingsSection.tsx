import OfferingCard from "./OfferingCard";
import type { Offering } from "@/types/destination";

export default function OfferingsSection({ title, eyebrow, offerings }: { title: string; eyebrow: string; offerings: readonly Offering[] }) {
  return <section className="mx-auto max-w-7xl px-3 py-8 min-[400px]:px-4 sm:px-6 sm:py-10 lg:px-8"><div className="mb-6"><p className="font-mono text-xs uppercase tracking-[0.2em] text-gold">{eyebrow}</p><h2 className="mt-2 break-words font-display text-2xl font-semibold sm:text-3xl">{title}</h2></div><div className="grid grid-cols-2 items-stretch gap-2 min-[400px]:gap-3 sm:gap-4 lg:grid-cols-4">{offerings.map((offering) => <OfferingCard key={offering.id} offering={offering} />)}</div></section>;
}
