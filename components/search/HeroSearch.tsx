"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";

export default function HeroSearch({ countries }: { countries: readonly string[] }) {
  const router = useRouter();
  const [country, setCountry] = useState("");
  const [category, setCategory] = useState("");
  const [date, setDate] = useState("");
  const [guests, setGuests] = useState("2");
  const control = "min-w-0 w-full bg-transparent px-3 py-2 text-sm text-cream outline-none";
  const field = "min-w-0 border-b border-line p-2 lg:border-b-0 lg:border-r";

  function submit(event: React.FormEvent) {
    event.preventDefault();
    const params = new URLSearchParams();
    if (country) params.set("country", country);
    if (category) params.set("category", category);
    if (date) params.set("date", date);
    params.set("guests", guests);
    router.push(`/search?${params}`);
  }

  return (
    <form onSubmit={submit} className="mt-10 grid min-w-0 overflow-hidden rounded-2xl border border-white/15 bg-ink/85 p-2 shadow-2xl backdrop-blur sm:grid-cols-2 lg:grid-cols-[1.2fr_1.2fr_1fr_.7fr_auto]">
      <label className={field}>
        <span className="block px-3 text-[10px] font-semibold uppercase tracking-wider text-gold">Where are you going?</span>
        <select value={country} onChange={(event) => setCountry(event.target.value)} className={control}>
          <option value="" className="bg-ink">Any destination</option>
          {countries.map((item) => <option key={item} className="bg-ink">{item}</option>)}
        </select>
      </label>
      <label className={field}>
        <span className="block px-3 text-[10px] font-semibold uppercase tracking-wider text-gold">What do you want to do?</span>
        <select value={category} onChange={(event) => setCategory(event.target.value)} className={control}>
          <option value="" className="bg-ink">All experiences</option>
          <option value="activity" className="bg-ink">Activities</option>
          <option value="day-trip" className="bg-ink">Day trips</option>
          <option value="package" className="bg-ink">Packages</option>
        </select>
      </label>
      <label className={field}>
        <span className="block px-3 text-[10px] font-semibold uppercase tracking-wider text-gold">Travel date</span>
        <input type="date" min={new Date().toISOString().split("T")[0]} value={date} onChange={(event) => setDate(event.target.value)} className={control} />
      </label>
      <label className="min-w-0 border-b border-line p-2 sm:border-b-0 lg:border-r">
        <span className="block px-3 text-[10px] font-semibold uppercase tracking-wider text-gold">Travellers</span>
        <input type="number" min="1" max="20" value={guests} onChange={(event) => setGuests(event.target.value)} className={control} />
      </label>
      <button className="m-1 min-h-12 rounded-xl bg-gold px-6 py-3 font-semibold text-ink sm:col-span-2 lg:col-span-1">Search</button>
    </form>
  );
}
