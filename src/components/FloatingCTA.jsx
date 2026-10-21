import { telLink, waLink } from '../data'

export default function FloatingCTA() {
  return (
    <div className="fixed inset-x-0 bottom-0 z-40 flex gap-3 border-t border-gold-500/40 bg-maroon-900/95 p-3 backdrop-blur sm:inset-x-auto sm:bottom-6 sm:right-6 sm:border-0 sm:bg-transparent sm:p-0 sm:backdrop-blur-none">
      <a
        href={telLink}
        className="flex-1 rounded-full bg-gold-400 px-6 py-3 text-center text-sm font-semibold text-maroon-900 shadow-lg transition hover:bg-gold-300 sm:flex-none"
      >
        Call Now
      </a>
      <a
        href={waLink()}
        target="_blank"
        rel="noreferrer"
        className="flex-1 rounded-full bg-[#25D366] px-6 py-3 text-center text-sm font-semibold text-white shadow-lg transition hover:brightness-110 sm:flex-none"
      >
        WhatsApp
      </a>
    </div>
  )
}
