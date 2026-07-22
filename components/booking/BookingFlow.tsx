"use client";

import { useMemo, useState } from "react";
import { useRouter } from "next/navigation";
import BookingStepper from "./BookingStepper";
import PriceBreakdown from "./PriceBreakdown";
import { calculateBookingPrice } from "@/lib/booking/pricing";
import { createDemoReference, saveDemoBooking } from "@/lib/booking/storage";
import type { Offering } from "@/types/destination";

type Initial = { date?: string; adults?: string; children?: string; pickup?: string };

export default function BookingFlow({ offering, initial }: { offering: Offering; initial: Initial }) {
  const router = useRouter();
  const [step, setStep] = useState(1);
  const [date, setDate] = useState(initial.date ?? "");
  const [adults, setAdults] = useState(Number(initial.adults) || 2);
  const [children, setChildren] = useState(Number(initial.children) || 0);
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [terms, setTerms] = useState(false);
  const [error, setError] = useState("");
  const pickup = initial.pickup === "true";
  const price = useMemo(() => calculateBookingPrice(offering, adults, children, pickup), [offering, adults, children, pickup]);
  const today = new Date().toISOString().split("T")[0];
  const input = "mt-1 w-full rounded-xl border border-lineStrong bg-ink p-3 text-cream outline-none focus:border-gold";

  function next() {
    if (step === 1 && (!date || adults < 1)) return setError("Choose a valid date and at least one adult.");
    if (step === 2 && (!firstName || !lastName || !/^\S+@\S+\.\S+$/.test(email) || !phone || !terms)) return setError("Complete all required traveller details and accept the terms.");
    setError("");
    setStep(current => Math.min(4, current + 1));
  }

  function finish() {
    const reference = createDemoReference();
    saveDemoBooking({ reference, offeringId: offering.id, offeringSlug: offering.slug, offeringTitle: offering.title, category: offering.category, country: offering.country, date, adults, children, childAges: [], rooms: 1, pickup, notes: "", firstName, lastName, email, phone, residence: "", specialRequests: "", currency: offering.currency, unitPrice: offering.price, ...price, paymentMethod: "Paystack", status: "Confirmed", createdAt: new Date().toISOString() });
    router.push(`/bookings/${reference}`);
  }

  return <div className="mx-auto max-w-5xl px-4 py-10 sm:px-6 lg:px-8">
    <BookingStepper step={step}/>
    <div className="mt-10 grid gap-8 lg:grid-cols-[1fr_320px]">
      <section className="rounded-2xl border border-line bg-surface p-5 sm:p-8">
        {step===1?<><h1 className="font-display text-3xl font-semibold">Booking details</h1><div className="mt-7 grid gap-5 sm:grid-cols-3"><Field label="Travel date"><input type="date" min={today} value={date} onChange={e=>setDate(e.target.value)} className={input}/></Field><Field label="Adults"><input type="number" min="1" value={adults} onChange={e=>setAdults(Number(e.target.value))} className={input}/></Field><Field label="Children"><input type="number" min="0" value={children} onChange={e=>setChildren(Number(e.target.value))} className={input}/></Field></div></>:
        step===2?<><h1 className="font-display text-3xl font-semibold">Traveller information</h1><div className="mt-7 grid gap-5 sm:grid-cols-2"><Field label="First name"><input value={firstName} onChange={e=>setFirstName(e.target.value)} className={input}/></Field><Field label="Last name"><input value={lastName} onChange={e=>setLastName(e.target.value)} className={input}/></Field><Field label="Email"><input type="email" value={email} onChange={e=>setEmail(e.target.value)} className={input}/></Field><Field label="Phone"><input type="tel" value={phone} onChange={e=>setPhone(e.target.value)} className={input}/></Field><label className="flex gap-3 sm:col-span-2"><input type="checkbox" checked={terms} onChange={e=>setTerms(e.target.checked)}/><span>I accept the booking terms.</span></label></div></>:
        step===3?<><h1 className="font-display text-3xl font-semibold">Review booking</h1><div className="mt-6 space-y-3 text-sand"><p>{offering.title}</p><p>{date} · {adults} adults · {children} children</p><p>{firstName} {lastName} · {email}</p></div><div className="mt-7 rounded-xl bg-ink p-5"><PriceBreakdown currency={offering.currency} {...price}/></div></>:
        <><h1 className="font-display text-3xl font-semibold">Pay with Paystack</h1><p className="mt-3 text-sand">Your payment will be securely processed by Paystack.</p><div className="mt-7 rounded-2xl border border-gold bg-gold/10 p-5"><div className="flex items-center justify-between"><div><p className="font-semibold">Paystack</p><p className="mt-1 text-sm text-sand">Card, bank, or supported local payment method</p></div><span className="rounded-lg bg-[#0ba4db] px-3 py-2 text-sm font-bold text-white">Paystack</span></div></div></>}
        {error?<p className="mt-5 text-sm text-red-300">{error}</p>:null}
        <div className="mt-8 flex justify-between">{step>1?<button onClick={()=>setStep(step-1)} className="rounded-xl border border-lineStrong px-5 py-3">Back</button>:<span/>}<button onClick={step===4?finish:next} className="rounded-xl bg-gold px-6 py-3 font-semibold text-ink">{step===4?"Pay with Paystack":"Continue"}</button></div>
      </section>
      <aside className="h-fit rounded-2xl border border-line bg-surface p-5 lg:sticky lg:top-24"><p className="font-mono text-xs uppercase text-gold">Booking summary</p><h2 className="mt-3 font-display text-xl font-semibold">{offering.title}</h2><p className="mt-1 text-sm text-sand">{offering.country}</p><div className="mt-5"><PriceBreakdown currency={offering.currency} {...price}/></div></aside>
    </div>
  </div>;
}

function Field({label,children}:{label:string;children:React.ReactNode}){return <label className="text-sm">{label}{children}</label>}
