import Link from "next/link";
import { Country } from "@/lib/types";
import { getDestinationsForCountry } from "@/lib/data";

export default function CountryRail({ countries }: { countries: Country[] }) {
  return (
    <section className="mx-auto max-w-6xl px-8 py-16">
      <div className="mb-8 flex items-end justify-between">
        <div>
          <h2 className="font-display text-3xl font-medium">Explore by country</h2>
          <p className="mt-1.5 max-w-sm text-sm text-sand">
            Every country on Ziarra opens into its own set of destinations, experiences, and
            local tips.
          </p>
        </div>
      </div>
      <div className="relative flex items-start gap-0 overflow-x-auto pb-6 pt-2.5">
        <div className="absolute left-0 right-0 top-[23px] h-px bg-dotted-line bg-[length:16px_1px]" />
        {countries.map((country) => {
          const count = getDestinationsForCountry(country.slug).length;
          const isLive = country.status === "live";
          const body = (
            <div
              className={`mt-4 flex h-[150px] flex-col justify-between rounded-xl border border-line bg-surface p-3.5 ${
                isLive ? "" : "opacity-55"
              }`}
            >
              <div>
                <div className="font-display text-lg font-medium">{country.name}</div>
                <div className="mt-1 text-xs text-sandDim">{country.tagline}</div>
              </div>
              <div className="flex items-center justify-between text-xs text-sand">
                <span>{isLive ? "Open now" : "Notify me"}</span>
                <span className="font-mono text-gold">{isLive ? count : "—"}</span>
              </div>
            </div>
          );
          return (
            <div key={country.slug} className="relative w-[190px] flex-none pr-6">
              <div
                className={`relative z-10 h-3 w-3 rounded-full border-2 bg-ink ${
                  isLive ? "border-gold" : "border-lineStrong"
                }`}
              />
              {isLive ? (
                <Link href={`/destinations/${country.slug}`}>{body}</Link>
              ) : (
                body
              )}
            </div>
          );
        })}
      </div>
    </section>
  );
}
