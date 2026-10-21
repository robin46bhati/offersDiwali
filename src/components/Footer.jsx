import { ADDRESS, BRAND, PHONE_DISPLAY, STUDIO, telLink } from '../data'

export default function Footer() {
  return (
    <footer className="bg-maroon-900 pb-24 pt-12 text-center text-cream sm:pb-12">
      <img
        src="/images/karwa-thali.jpg"
        alt="Karwa Chauth thali with diya and bangles"
        loading="lazy"
        className="mx-auto mb-8 w-full max-w-md rounded-2xl border border-gold-500/50"
      />
      <p className="font-script text-4xl text-gold-300">{BRAND}</p>
      <p className="mt-1 text-sm text-cream/70">{STUDIO}</p>
      <p className="mt-4 text-sm text-cream/80">{ADDRESS}</p>
      <a href={telLink} className="mt-1 inline-block text-sm text-gold-300 hover:underline">
        {PHONE_DISPLAY}
      </a>
      <p className="mt-8 text-xs text-cream/50">
        © {new Date().getFullYear()} {BRAND}. Wishing you a Happy Diwali &amp; Karwa Chauth.
      </p>
    </footer>
  )
}
