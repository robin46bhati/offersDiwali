import { SERVICES } from '../data'

export default function Services() {
  return (
    <section id="services" className="bg-cream py-20">
      <div className="mx-auto max-w-5xl px-5">
        <div className="text-center">
          <p className="text-xs uppercase tracking-[0.3em] text-gold-600">What We Do</p>
          <h2 className="mt-3 font-display text-4xl font-semibold text-maroon-800 sm:text-5xl">
            Treatments You&apos;ll Love
          </h2>
        </div>

        <div className="mt-12 grid grid-cols-2 gap-4 sm:grid-cols-3 sm:gap-6">
          {SERVICES.map((s) => (
            <figure
              key={s.title}
              className="group relative aspect-square overflow-hidden rounded-2xl border border-gold-500/40 shadow-md"
            >
              <img
                src={s.image}
                alt={s.title}
                loading="lazy"
                className="h-full w-full object-cover transition duration-500 group-hover:scale-110"
              />
              <figcaption className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-maroon-900/90 to-transparent px-3 pb-3 pt-10 text-center font-display text-sm font-medium text-gold-300 sm:text-base">
                {s.title}
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  )
}
