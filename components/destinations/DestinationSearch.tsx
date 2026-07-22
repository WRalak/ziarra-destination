"use client";

import { useMemo, useState } from "react";
import DestinationGrid from "./DestinationGrid";
import type { Destination } from "@/types/destination";

export default function DestinationSearch({ destinations }: { destinations: readonly Destination[] }) {
  const [query, setQuery] = useState("");
  const trimmedQuery = query.trim();
  const filtered = useMemo(() => {
    const normalized = trimmedQuery.toLocaleLowerCase();
    return normalized ? destinations.filter((item) => item.name.toLocaleLowerCase().includes(normalized)) : destinations;
  }, [destinations, trimmedQuery]);

  return (
    <section aria-labelledby="destination-results">
      <div className="mb-8 max-w-xl">
        <label htmlFor="destination-search" className="mb-2 block text-sm font-semibold text-cream">Search destinations</label>
        <div className="flex rounded-xl border border-lineStrong bg-surface p-1 focus-within:border-gold focus-within:ring-2 focus-within:ring-gold/25">
          <input id="destination-search" type="search" value={query} onChange={(event) => setQuery(event.target.value)} placeholder="Try Kenya, South Africa or Seychelles" className="min-w-0 flex-1 bg-transparent px-3 py-2.5 text-base text-cream outline-none placeholder:text-sandDim" />
          {query ? <button type="button" onClick={() => setQuery("")} className="rounded-lg px-3 text-sm font-semibold text-gold hover:bg-surface2 focus:outline-none focus-visible:ring-2 focus-visible:ring-gold">Clear</button> : null}
        </div>
      </div>
      <h2 id="destination-results" className="sr-only">Destination results</h2>
      <p className="mb-5 font-mono text-xs uppercase tracking-widest text-sandDim" aria-live="polite">{filtered.length} {filtered.length === 1 ? "destination" : "destinations"}</p>
      {filtered.length ? <DestinationGrid destinations={filtered} /> : <div role="status" className="rounded-2xl border border-dashed border-lineStrong bg-surface p-10 text-center text-sand">No destinations found for “{trimmedQuery}”.</div>}
    </section>
  );
}

