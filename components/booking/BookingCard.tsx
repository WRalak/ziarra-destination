"use client";

import Link from "next/link";
import { useState } from "react";
import { formatCurrency } from "@/lib/booking/pricing";
import type { Offering } from "@/types/destination";

export default function BookingCard({ offering }: { offering: Offering }) {
  const [date, setDate] = useState("");
  const params = new URLSearchParams({ date, adults: "1", children: "0", pickup: "false" });
  const href = `/book/${offering.category}/${offering.slug}?${params}`;

  return <>
    <aside className="hidden h-fit rounded-2xl border border-lineStrong bg-surface p-6 shadow-xl lg:sticky lg:top-24 lg:block">
      <p className="text-sm text-sand">From</p>
      <div className="text-2xl font-semibold">{formatCurrency(offering.price, offering.currency)} <span className="text-xs font-normal text-sand">per adult</span></div>
      <label className="mt-6 block text-sm font-semibold">Choose your date
        <input type="date" min={new Date().toISOString().split("T")[0]} value={date} onChange={event => setDate(event.target.value)} className="mt-2 w-full rounded-xl border border-lineStrong bg-ink p-3" />
      </label>
      <Link href={href} aria-disabled={!date} className={`mt-5 block rounded-xl px-5 py-3.5 text-center font-semibold text-ink ${date ? "bg-gold" : "pointer-events-none bg-gold/40"}`}>Book now</Link>
    </aside>

    <div className="fixed inset-x-0 bottom-0 z-40 border-t border-lineStrong bg-ink/95 p-3 backdrop-blur lg:hidden">
      <div className="mx-auto grid max-w-lg grid-cols-[1fr_auto] items-end gap-3">
        <label className="text-xs font-semibold">Choose your date
          <input type="date" min={new Date().toISOString().split("T")[0]} value={date} onChange={event => setDate(event.target.value)} className="mt-1 w-full rounded-lg border border-lineStrong bg-ink p-2.5 text-sm" />
        </label>
        <Link href={href} aria-disabled={!date} className={`rounded-xl px-5 py-3 font-semibold text-ink ${date ? "bg-gold" : "pointer-events-none bg-gold/40"}`}>Book now</Link>
      </div>
    </div>
  </>;
}
