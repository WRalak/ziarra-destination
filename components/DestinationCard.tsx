import Image from "next/image";
import Link from "next/link";
import { Destination } from "@/lib/types";

const tagStyles: Record<string, string> = {
  Wildlife: "bg-acacia/15 text-[#B7C48F]",
  Nature: "bg-acacia/15 text-[#B7C48F]",
  Lakes: "bg-acacia/15 text-[#B7C48F]",
  Beach: "bg-[#378ADD]/15 text-[#8FBEEA]",
  Culture: "bg-clay/15 text-[#E3A07E]",
  Heritage: "bg-clay/15 text-[#E3A07E]"
};

export default function DestinationCard({
  destination,
  countryName
}: {
  destination: Destination;
  countryName: string;
}) {
  return (
    <Link
      href={`/destinations/${destination.countrySlug}/${destination.slug}`}
      className="group flex flex-col overflow-hidden rounded-2xl border border-line bg-surface transition hover:-translate-y-1 hover:border-lineStrong"
    >
      <div className="relative h-[190px]">
        <Image
          src={destination.image}
          alt={destination.name}
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-ink/90 via-ink/0 to-transparent" />
        <span className="absolute left-3 top-3 rounded-full border border-lineStrong bg-ink/65 px-2.5 py-1 font-mono text-[10.5px] uppercase tracking-wide text-cream backdrop-blur-sm">
          {countryName}
        </span>
        <span className="absolute right-3 top-3 flex h-[30px] w-[30px] items-center justify-center rounded-full border border-lineStrong bg-ink/55 text-cream">
          ♡
        </span>
        <h3 className="absolute bottom-3 left-4 font-display text-xl font-medium">
          {destination.name}
        </h3>
      </div>
      <div className="flex flex-1 flex-col gap-3 p-4">
        <div className="flex flex-wrap gap-1.5">
          {destination.tags.map((tag) => (
            <span
              key={tag}
              className={`rounded-full px-2.5 py-1 font-mono text-[11px] ${tagStyles[tag]}`}
            >
              {tag}
            </span>
          ))}
        </div>
        <p className="line-clamp-2 text-sm leading-relaxed text-sand">
          {destination.description}
        </p>
        <div className="mt-auto flex items-center justify-between border-t border-line pt-3 text-xs text-sand">
          <span>
            ★ <b className="font-semibold text-cream">{destination.rating}</b> (
            {destination.reviews})
          </span>
          <span className="font-semibold text-gold">Explore →</span>
        </div>
      </div>
    </Link>
  );
}
