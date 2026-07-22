"use client";

import { useState } from "react";

const CHIPS = ["All destinations", "Kenya", "Uganda", "Safari", "Beach", "Lakes", "Culture"];

export default function FilterBar({ total }: { total: number }) {
  const [active, setActive] = useState("All destinations");

  return (
    <div className="sticky top-[65px] z-30 border-b border-line bg-ink/95 backdrop-blur-md">
      <div className="mx-auto flex max-w-6xl items-center gap-2.5 overflow-x-auto px-8 py-3.5">
        {CHIPS.map((chip, i) => (
          <div key={chip} className="flex items-center gap-2.5">
            {i === 1 || i === 3 ? (
              <div className="h-5 w-px flex-none bg-lineStrong" />
            ) : null}
            <button
              onClick={() => setActive(chip)}
              className={`flex-none whitespace-nowrap rounded-lg border px-4 py-2 text-sm ${
                active === chip
                  ? "border-lineStrong bg-surface2 font-medium text-cream"
                  : "border-transparent text-sand hover:text-cream"
              }`}
            >
              {chip}
            </button>
          </div>
        ))}
        <span className="ml-auto flex-none font-mono text-xs text-sandDim">
          {total} destinations shown
        </span>
      </div>
    </div>
  );
}
