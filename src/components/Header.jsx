import { useState } from 'react'
import { BRAND, telLink } from '../data'

const LINKS = [
  { href: '#offers', label: 'Offers' },
  { href: '#posters', label: 'Posters' },
  { href: '#services', label: 'Services' },
  { href: '#about', label: 'About' },
  { href: '#book', label: 'Book' },
]

export default function Header() {
  const [open, setOpen] = useState(false)

  return (
    <header className="sticky top-0 z-40 border-b border-gold-500/30 bg-maroon-900/95 text-cream backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-5 py-3">
        <a href="#home" className="font-script text-3xl leading-none text-gold-300">
          {BRAND}
        </a>

        <nav className="hidden items-center gap-7 text-sm md:flex">
          {LINKS.map((l) => (
            <a key={l.href} href={l.href} className="transition hover:text-gold-300">
              {l.label}
            </a>
          ))}
          <a
            href={telLink}
            className="rounded-full bg-gold-400 px-5 py-2 font-medium text-maroon-900 transition hover:bg-gold-300"
          >
            Call Now
          </a>
        </nav>

        <button
          type="button"
          className="rounded-md p-2 md:hidden"
          aria-label="Toggle menu"
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          <span className="block h-0.5 w-6 bg-gold-300" />
          <span className="mt-1.5 block h-0.5 w-6 bg-gold-300" />
          <span className="mt-1.5 block h-0.5 w-6 bg-gold-300" />
        </button>
      </div>

      {open && (
        <nav className="flex flex-col gap-1 border-t border-gold-500/20 px-5 pb-4 pt-2 md:hidden">
          {LINKS.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className="rounded-md px-2 py-2.5 hover:bg-maroon-800"
            >
              {l.label}
            </a>
          ))}
          <a
            href={telLink}
            className="mt-2 rounded-full bg-gold-400 px-5 py-2.5 text-center font-medium text-maroon-900"
          >
            Call Now
          </a>
        </nav>
      )}
    </header>
  )
}
