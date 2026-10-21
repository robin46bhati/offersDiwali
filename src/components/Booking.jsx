import { useState } from 'react'
import { ADDRESS, PACKAGES, PHONE_DISPLAY, STUDIO, telLink, waLink } from '../data'

export default function Booking() {
  const [name, setName] = useState('')
  const [pkg, setPkg] = useState(PACKAGES[0].id)
  const [date, setDate] = useState('')

  const submit = (e) => {
    e.preventDefault()
    const chosen = PACKAGES.find((p) => p.id === pkg)
    const lines = [
      'Hi Anjali Makeover, I would like to book a festive offer.',
      `Name: ${name || '-'}`,
      `Offer: ₹${chosen.price} (${chosen.name})`,
      `Preferred date: ${date || 'Not decided'}`,
    ]
    window.open(waLink(lines.join('\n')), '_blank', 'noopener')
  }

  const field =
    'mt-1.5 w-full rounded-xl border border-gold-500/50 bg-white px-4 py-3 text-maroon-900 outline-none transition focus:border-maroon-700 focus:ring-4 focus:ring-gold-300/50'

  return (
    <section id="book" className="bg-gradient-to-b from-cream to-blush py-20">
      <div className="mx-auto grid max-w-6xl gap-12 px-5 lg:grid-cols-2">
        <div>
          <p className="text-xs uppercase tracking-[0.3em] text-gold-600">Reserve Your Slot</p>
          <h2 className="mt-3 font-display text-4xl font-semibold text-maroon-800 sm:text-5xl">
            Book Your Festive Glow
          </h2>
          <p className="mt-4 text-maroon-800/80">
            Fill in the form and we&apos;ll open WhatsApp with your booking message ready to send.
          </p>

          <form onSubmit={submit} className="mt-8 space-y-5">
            <label className="block text-sm font-medium">
              Your name
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Enter your name"
                className={field}
              />
            </label>

            <label className="block text-sm font-medium">
              Choose an offer
              <select value={pkg} onChange={(e) => setPkg(e.target.value)} className={field}>
                {PACKAGES.map((p) => (
                  <option key={p.id} value={p.id}>
                    ₹{p.price} – {p.name}
                  </option>
                ))}
              </select>
            </label>

            <label className="block text-sm font-medium">
              Preferred date
              <input type="date" value={date} onChange={(e) => setDate(e.target.value)} className={field} />
            </label>

            <button
              type="submit"
              className="w-full rounded-full bg-maroon-800 py-3.5 font-medium text-gold-300 shadow-lg transition hover:bg-maroon-700"
            >
              Book on WhatsApp
            </button>
          </form>
        </div>

        <div className="flex flex-col justify-center">
          <div className="overflow-hidden rounded-3xl border-2 border-gold-500/50 bg-white shadow-xl">
            <img src="/images/banner-cream.jpg" alt={`${STUDIO} banner`} loading="lazy" className="w-full" />
            <div className="space-y-4 p-6">
              <div>
                <p className="text-xs uppercase tracking-widest text-gold-600">Address</p>
                <p className="mt-1 text-lg font-medium">{ADDRESS}</p>
              </div>
              <div>
                <p className="text-xs uppercase tracking-widest text-gold-600">Call us</p>
                <a href={telLink} className="mt-1 block text-lg font-medium text-maroon-700 hover:underline">
                  {PHONE_DISPLAY}
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
