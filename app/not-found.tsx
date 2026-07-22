import Link from "next/link";
import Footer from "@/components/layout/Footer";
import Header from "@/components/layout/Header";

export default function NotFound() {
  return <div className="flex min-h-screen flex-col bg-ink text-cream"><Header /><main className="mx-auto flex w-full max-w-3xl flex-1 flex-col items-center justify-center px-4 py-20 text-center"><p className="font-mono text-xs uppercase tracking-[0.2em] text-gold">404 · Not found</p><h1 className="mt-4 font-display text-4xl font-semibold sm:text-5xl">This destination is not on our map.</h1><p className="mt-5 max-w-xl leading-7 text-sand">Choose from the twelve destinations currently curated by Ziarra.</p><Link href="/destinations" className="mt-8 rounded-xl bg-gold px-5 py-3 text-sm font-semibold text-ink focus:outline-none focus-visible:ring-2 focus-visible:ring-cream">View destinations</Link></main><Footer /></div>;
}

