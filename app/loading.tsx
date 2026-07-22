export default function Loading() {
  return <main className="min-h-screen animate-pulse bg-ink px-4 py-20 text-cream"><div className="mx-auto max-w-7xl"><div className="h-4 w-40 rounded bg-surface2"/><div className="mt-6 h-14 max-w-3xl rounded-xl bg-surface"/><div className="mt-4 h-6 max-w-xl rounded bg-surface"/><div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">{Array.from({length:8},(_,index)=><div key={index} className="h-80 rounded-2xl border border-line bg-surface"/>)}</div></div></main>;
}

