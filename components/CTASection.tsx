export default function CTASection() {
  return (
    <section className="mx-auto max-w-6xl px-8 py-16">
      <div className="relative overflow-hidden rounded-[22px] border border-lineStrong bg-acaciaDeep px-12 py-16 text-center">
        <div className="absolute inset-x-0 top-0 h-px bg-[linear-gradient(90deg,rgba(227,165,48,0.4)_0_8px,transparent_8px_16px)] bg-[length:16px_1px]" />
        <div className="mx-auto flex items-center justify-center gap-2.5 font-mono text-[11.5px] uppercase tracking-wide text-gold">
          <span className="h-px w-4 bg-gold" />
          Ready when you are
        </div>
        <h2 className="mx-auto mt-3.5 max-w-lg font-display text-4xl font-medium">
          Let&rsquo;s plan the trip you&rsquo;ve been putting off.
        </h2>
        <p className="mx-auto mt-3.5 max-w-md text-sm text-sand">
          Tell us what you&rsquo;re after and we&rsquo;ll match it to a real itinerary — no
          generic packages.
        </p>
        <div className="mt-7 flex justify-center gap-3">
          <a
            href="#"
            className="rounded-lg bg-gold px-6 py-3 text-sm font-semibold text-[#231A08]"
          >
            Get trip inspiration
          </a>
          <a
            href="#"
            className="rounded-lg border border-lineStrong px-6 py-3 text-sm font-medium text-cream"
          >
            Talk to an expert
          </a>
        </div>
      </div>
    </section>
  );
}
