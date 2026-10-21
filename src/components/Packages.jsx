import { PACKAGES, waLink } from '../data'

function Check() {
  return (
    <svg viewBox="0 0 20 20" className="mt-0.5 h-4 w-4 flex-none text-gold-600" fill="currentColor" aria-hidden="true">
      <path
        fillRule="evenodd"
        d="M16.7 5.3a1 1 0 0 1 0 1.4l-7.5 7.5a1 1 0 0 1-1.4 0L3.3 9.7a1 1 0 1 1 1.4-1.4l3.8 3.8 6.8-6.8a1 1 0 0 1 1.4 0Z"
        clipRule="evenodd"
      />
    </svg>
  )
}

export default function Packages() {
  return (
    <section id="offers" className="bg-cream py-20">
      <div className="mx-auto max-w-6xl px-5">
        <div className="text-center">
          <p className="text-xs uppercase tracking-[0.3em] text-gold-600">Diwali &amp; Karwa Chauth</p>
          <h2 className="mt-3 font-display text-4xl font-semibold text-maroon-800 sm:text-5xl">
            Festive Beauty Offers
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-maroon-800/80">
            Complete beauty care packages at special festive prices. Pick the one that suits you and
            book in a single tap.
          </p>
        </div>

        <div className="mt-14 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {PACKAGES.map((p) => (
            <article
              key={p.id}
              className="group flex flex-col overflow-hidden rounded-3xl border border-gold-500/40 bg-white shadow-md transition hover:-translate-y-1 hover:shadow-xl"
            >
              <div className="relative h-48 overflow-hidden bg-blush">
                <img
                  src={p.image}
                  alt={p.name}
                  loading="lazy"
                  className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                />
                <span className="absolute right-3 top-3 rounded-full bg-maroon-800 px-4 py-1.5 font-display text-xl font-semibold text-gold-300 shadow-lg">
                  ₹{p.price}
                </span>
              </div>

              <div className="flex flex-1 flex-col p-6">
                <h3 className="font-display text-2xl font-semibold text-maroon-800">{p.name}</h3>
                <p className="text-xs uppercase tracking-widest text-gold-600">Complete Beauty Care</p>

                <ul className="mt-4 flex-1 space-y-2 text-sm text-maroon-900/90">
                  {p.items.map((item) => (
                    <li key={item} className="flex gap-2">
                      <Check />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>

                <a
                  href={waLink(`Hi Anjali Makeover, I want to book the ₹${p.price} festive offer (${p.name}).`)}
                  target="_blank"
                  rel="noreferrer"
                  className="mt-6 block rounded-full bg-maroon-800 py-3 text-center text-sm font-medium text-gold-300 transition hover:bg-maroon-700"
                >
                  Book This Offer
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
