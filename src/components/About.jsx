import { ADDRESS, SPECIALTIES, STUDIO, TAGLINE } from '../data'

export default function About() {
  return (
    <section id="about" className="bg-maroon-900 py-20 text-cream">
      <div className="mx-auto max-w-6xl px-5">
        <div className="overflow-hidden rounded-3xl border-2 border-gold-500/60 shadow-2xl shadow-black/40">
          <img src="/images/banner-gold.jpg" alt={`${STUDIO} banner`} loading="lazy" className="w-full" />
        </div>

        <div className="mx-auto mt-14 max-w-3xl text-center">
          <p className="text-xs uppercase tracking-[0.3em] text-gold-300">About Us</p>
          <h2 className="mt-3 font-display text-4xl font-semibold sm:text-5xl">{STUDIO}</h2>
          <p className="mt-5 font-script text-3xl text-gold-300">&ldquo;{TAGLINE}&rdquo;</p>
          <p className="mt-6 text-cream/80">
            From skin care and waxing to bridal-ready makeup and hair treatments, Anjali Makeover
            brings complete beauty and wellness care under one roof, with training available through
            our academy.
          </p>

          <ul className="mt-8 flex flex-wrap justify-center gap-3">
            {SPECIALTIES.map((s) => (
              <li
                key={s}
                className="rounded-full border border-gold-400/60 px-4 py-1.5 text-sm text-gold-300"
              >
                {s}
              </li>
            ))}
          </ul>

          <p className="mt-8 text-sm text-cream/70">Find us at {ADDRESS}</p>
        </div>
      </div>
    </section>
  )
}
