"use client";

export default function ErrorPage({ reset }: { error: Error & { digest?: string }; reset: () => void }) {
  return <div className="grid min-h-screen place-items-center bg-ink px-4 text-center text-cream"><main><p className="font-mono text-xs uppercase tracking-[0.2em] text-gold">Something went wrong</p><h1 className="mt-4 font-display text-4xl font-semibold">We couldn’t load this page.</h1><p className="mt-4 text-sand">Please try again. Your destination plans are still here.</p><button type="button" onClick={reset} className="mt-7 rounded-xl bg-gold px-5 py-3 text-sm font-semibold text-ink focus:outline-none focus-visible:ring-2 focus-visible:ring-cream">Try again</button></main></div>;
}

