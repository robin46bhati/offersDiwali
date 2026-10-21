// ---------- Studio details (from the studio banner in the PDF) ----------
export const BRAND = 'Anjali Makeover'
export const STUDIO = 'Anjali Makeup Studio & Academy'
export const TAGLINE = 'Enhance your natural beauty with a touch of elegance'
export const ADDRESS = 'Village Sahupura Khadar'

// Change the number here and every button on the site updates.
export const PHONE_INTL = '917015499307' // country code + number, digits only
export const PHONE_DISPLAY = '+91 70154 99307'

export const SPECIALTIES = [
  'Makeup',
  'Hair Cut',
  'Hair Spa',
  'Hair Smoothening (Chemical Work)',
  'Skin Care',
  'Padicure',
  'Waxing',
  'Body Polishing',
]

export const waLink = (text = 'Hi Anjali Makeover, I want to book a festive offer.') =>
  `https://wa.me/${PHONE_INTL}?text=${encodeURIComponent(text)}`

export const telLink = `tel:+${PHONE_INTL}`

// ---------- Festive packages (from the six offer posters in the PDF) ----------
export const PACKAGES = [
  {
    id: 'p199',
    price: 199,
    name: 'Starter Glow',
    image: '/images/deep-cleansing.jpg',
    poster: '/images/poster-199.jpg',
    items: [
      'Deep Cleansing (Standard Facial)',
      'Full Face Threading',
      'Threading Upper Lips',
      'Threading Eyebrows',
    ],
  },
  {
    id: 'p399',
    price: 399,
    name: 'Premium Cleanse',
    image: '/images/threading-eyebrows.jpg',
    poster: '/images/poster-399.jpg',
    items: [
      'Premium Deep Cleansing with Moulding Mask',
      'Threading Upper Lips',
      'Threading Eyebrows',
    ],
  },
  {
    id: 'p799',
    price: 799,
    name: 'Rice Radiance',
    image: '/images/rice-facial.jpg',
    poster: '/images/poster-799.jpg',
    items: [
      'Full Hand Rica Wax (Premium Wax)',
      'Rice Brain Facial (D-Tan & Brightening)',
      'Half Leg Rica Wax',
      'Threading Upper Lips',
    ],
  },
  {
    id: 'p899',
    price: 899,
    name: 'Korean Glow',
    image: '/images/korean-facial.jpg',
    poster: '/images/poster-899.jpg',
    items: [
      'Full Hand Rica Wax (Premium Wax)',
      'Korean Advance Facial with Sheet Mask',
      'Add-on D-Tan / Bleach',
      'Half Leg Rica Wax',
      'Threading Upper Lips',
    ],
  },
  {
    id: 'p999',
    price: 999,
    name: 'Lotus Luxe',
    image: '/images/dtan-bleach.jpg',
    poster: '/images/poster-999.jpg',
    items: [
      'Full Hand Rica Wax (Premium Wax)',
      'Lotus Advance Facial with Sheet Mask',
      'Add-on D-Tan / Bleach',
      'Half Leg Rica Wax',
      'Face Wax',
    ],
  },
  {
    id: 'p1099',
    price: 1099,
    name: 'Complete Festive Makeover',
    image: '/images/hand-wax.jpg',
    poster: '/images/poster-1099.jpg',
    items: [
      'Full Hand Rica Wax (Premium Wax)',
      'Korean Advance Facial with Sheet Mask',
      'Add-on D-Tan / Bleach',
      'Half Leg Rica Wax',
      'Face Wax',
      'Threading Upper Lips',
    ],
  },
]

// ---------- Service photos (cropped from the posters) ----------
export const SERVICES = [
  { title: 'Full Hand Rica Waxing', image: '/images/hand-wax.jpg' },
  { title: 'Korean Advance Facial', image: '/images/korean-facial.jpg' },
  { title: 'D-Tan / Bleach', image: '/images/dtan-bleach.jpg' },
  { title: 'Half Leg Rica Waxing', image: '/images/half-leg-wax.jpg' },
  { title: 'Rice Brain Facial', image: '/images/rice-facial.jpg' },
  { title: 'Deep Cleansing', image: '/images/deep-cleansing.jpg' },
  { title: 'Threading Upper Lips', image: '/images/threading-lips.jpg' },
  { title: 'Full Face Threading', image: '/images/face-threading.jpg' },
  { title: 'Threading Eyebrows', image: '/images/threading-eyebrows.jpg' },
]
