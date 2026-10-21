# Anjali Makeover – Diwali & Karwa Chauth Offers

A one-page website built with **React + Tailwind CSS v4 (Vite)**, using the images and offer details from the shared PDF.

## Run it

```bash
npm install
npm run dev      # local preview at http://localhost:5173
npm run build    # production files in /dist
```

## What to edit

| What | Where |
| --- | --- |
| Phone number, address, studio name | `src/data.js` (top of file) |
| Offer prices and what each includes | `PACKAGES` in `src/data.js` |
| Photos | `public/images/` |
| Colours and fonts | `@theme` block in `src/index.css` |

## Images (all taken from the PDF)

- `poster-*.jpg` – the six full Karwa Chauth offer posters
- `banner-gold.jpg`, `banner-cream.jpg` – studio banners
- `hand-wax`, `korean-facial`, `rice-facial`, `dtan-bleach`, `half-leg-wax`, `deep-cleansing`, `threading-*` – service photos cropped from the posters
- `karwa-thali.jpg` – festive thali used in the footer

The PDF's pictures are fairly small (posters are 928 px wide), so the cropped service photos look best at the sizes used here. For sharper results, replace them with the original photos.
