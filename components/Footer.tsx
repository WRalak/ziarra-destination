export default function Footer() {
  return (
    <footer className="border-t border-line px-8 py-12">
      <div className="mx-auto grid max-w-6xl gap-10 md:grid-cols-[1.4fr_1fr_1fr]">
        <div>
          <div className="flex items-center gap-2.5 font-display text-lg font-semibold">
            <span className="flex h-[30px] w-[30px] items-center justify-center rounded-lg bg-gradient-to-br from-gold to-clay font-mono text-sm font-bold text-ink">
              Z
            </span>
            Ziarra
          </div>
          <p className="mt-3 max-w-xs text-sm leading-relaxed text-sand">
            Explore the world, together. Create group adventures that feel like home.
          </p>
        </div>
        <div>
          <h4 className="mb-3 font-mono text-xs uppercase tracking-wide text-sandDim">
            Company
          </h4>
          <div className="flex flex-col gap-2 text-sm text-sand">
            <a href="#">Our services</a>
            <a href="#">About us</a>
            <a href="#">Careers</a>
            <a href="#">Blog</a>
          </div>
        </div>
        <div>
          <h4 className="mb-3 font-mono text-xs uppercase tracking-wide text-sandDim">
            Get in touch
          </h4>
          <div className="flex flex-col gap-2 text-sm text-sand">
            <a href="#">+254 114 442 895</a>
            <a href="#">info@ziarra.world</a>
            <a href="#">Nairobi, Kenya</a>
          </div>
        </div>
      </div>
      <div className="mx-auto mt-10 max-w-6xl border-t border-line pt-5 text-center text-xs text-sandDim">
        © 2026 Ziarra. All rights reserved.
      </div>
    </footer>
  );
}
