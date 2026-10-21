import { useEffect, useState } from 'react'
import { PACKAGES } from '../data'

export default function Posters() {
  const [active, setActive] = useState(null)

  useEffect(() => {
    if (!active) return undefined
    const onKey = (e) => e.key === 'Escape' && setActive(null)
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [active])

  return (
    <section id="posters" className="bg-gradient-to-b from-blush to-cream py-20">
      <div className="mx-auto max-w-6xl px-5">
        <div className="text-center">
          <p className="text-xs uppercase tracking-[0.3em] text-gold-600">Festive Collection</p>
          <h2 className="mt-3 font-display text-4xl font-semibold text-maroon-800 sm:text-5xl">
            Our Offer Posters
          </h2>
          <p className="mt-4 text-maroon-800/80">Tap a poster to view it full size.</p>
        </div>

        <div className="mt-12 grid grid-cols-2 gap-5 md:grid-cols-3">
          {PACKAGES.map((p) => (
            <button
              key={p.id}
              type="button"
              onClick={() => setActive(p)}
              className="group relative overflow-hidden rounded-2xl border-2 border-gold-500/50 bg-white shadow-md transition hover:-translate-y-1 hover:shadow-xl focus:outline-none focus-visible:ring-4 focus-visible:ring-gold-400"
              aria-label={`View the ₹${p.price} offer poster`}
            >
              <img src={p.poster} alt={`₹${p.price} festive offer poster`} loading="lazy" className="w-full" />
              <span className="absolute bottom-3 left-3 rounded-full bg-maroon-900/90 px-3 py-1 text-sm font-medium text-gold-300">
                ₹{p.price}
              </span>
            </button>
          ))}
        </div>
      </div>

      {active && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label={`₹${active.price} offer poster`}
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/85 p-4"
          onClick={() => setActive(null)}
        >
          <button
            type="button"
            aria-label="Close"
            className="absolute right-4 top-4 flex h-11 w-11 items-center justify-center rounded-full bg-cream text-2xl text-maroon-900"
            onClick={() => setActive(null)}
          >
            ×
          </button>
          <img
            src={active.poster}
            alt={`₹${active.price} festive offer poster`}
            className="max-h-full max-w-full rounded-xl object-contain shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      )}
    </section>
  )
}
