import { PACKAGES, waLink } from '../data'

const lowest = Math.min(...PACKAGES.map((p) => p.price))

export default function Hero() {
  return (
    <section
      id="home"
      className="relative overflow-hidden bg-gradient-to-br from-maroon-900 via-maroon-800 to-maroon-700 text-cream"
    >
      <div className="pointer-events-none absolute inset-0 animate-shine bg-[radial-gradient(circle_at_15%_20%,rgba(226,182,87,0.35)_0,transparent_35%),radial-gradient(circle_at_90%_80%,rgba(226,182,87,0.3)_0,transparent_30%)]" />

      <div className="relative mx-auto grid max-w-6xl items-center gap-12 px-5 py-14 md:grid-cols-2 md:py-24">
        <div>
          <p className="inline-block rounded-full border border-gold-400/60 px-4 py-1 text-[11px] uppercase tracking-[0.25em] text-gold-300">
            Diwali &amp; Karwa Chauth Special
          </p>

          <h1 className="mt-6 font-script text-6xl leading-none text-gold-300 sm:text-7xl">
            Anjali Makeover
          </h1>
          <p className="mt-2 text-sm tracking-[0.2em] text-cream/80">
            SKIN | BEAUTY | WELLNESS &amp; ADVANCED CARE
          </p>

          <h2 className="mt-8 font-display text-3xl font-semibold leading-tight sm:text-4xl">
            Book Your Festive Glow.
            <span className="block text-gold-300">Look Exquisite This Karwa Chauth.</span>
          </h2>

          <p lang="hi" className="mt-4 text-lg text-cream/90">
            सजें, संवरें और पाएं दिव्य रूप इस करवा चौथ को…
          </p>

          <div className="mt-8 flex flex-wrap items-end gap-x-4 gap-y-1">
            <span className="text-sm text-cream/80">Complete beauty care starting at just</span>
            <span className="font-display text-5xl font-bold text-gold-300">₹{lowest}</span>
          </div>

          <div className="mt-8 flex flex-wrap gap-4">
            <a
              href="#offers"
              className="rounded-full bg-gold-400 px-7 py-3 font-medium text-maroon-900 shadow-lg shadow-black/20 transition hover:bg-gold-300"
            >
              See Festive Offers
            </a>
            <a
              href={waLink()}
              target="_blank"
              rel="noreferrer"
              className="rounded-full border border-gold-400 px-7 py-3 font-medium text-gold-300 transition hover:bg-gold-400/10"
            >
              Book on WhatsApp
            </a>
          </div>

          <p className="mt-5 text-xs uppercase tracking-widest text-cream/60">♥ Limited time offer</p>
        </div>

        <div className="relative mx-auto w-full max-w-sm">
          <div className="absolute -inset-4 rounded-[2rem] bg-gold-400/20 blur-2xl" />
          <img
            src="/images/poster-899.jpg"
            alt="Anjali Makeover Karwa Chauth special offer poster"
            className="relative w-full animate-float rounded-2xl border-4 border-gold-400/80 shadow-2xl shadow-black/40"
          />
        </div>
      </div>

      <div className="relative border-t border-gold-500/30 bg-maroon-900/60">
        <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-center gap-x-8 gap-y-2 px-5 py-3 text-xs uppercase tracking-[0.2em] text-gold-300">
          <span>Rica Waxing</span>
          <span>·</span>
          <span>Advance Facials</span>
          <span>·</span>
          <span>Threading</span>
          <span>·</span>
          <span>D-Tan &amp; Bleach</span>
        </div>
      </div>
    </section>
  )
}
