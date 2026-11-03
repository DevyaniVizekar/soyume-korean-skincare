# SOYUNÉ Premium Korean-Inspired Skincare Store

A responsive React + Vite portfolio e-commerce concept for SOYUNÉ. The brand, products, customer reviews and editorial content are fictional portfolio material; no real products are sold and no payment is collected.

## Requirements
- Node.js 18 or newer (Node.js 20 LTS recommended)
- npm 9 or newer

## Run locally

1. Extract the ZIP and open the `soyune-skincare` folder in VS Code.
2. Open a terminal in that folder.
3. Install the pinned dependencies:

   ```bash
   npm install
   ```

4. Start the development server:

   ```bash
   npm run dev
   ```

5. Open the local URL printed by Vite (usually `http://localhost:5173`).

## Production build

```bash
npm run build
npm run preview
```

The production files are generated in `dist/`.

## Features
- Responsive homepage, shop, product details, about, journal and cart routes
- 15 product concepts with product photography
- Product search, category and price filters, sorting
- Add to bag, quantity updates, remove item and dynamic totals
- Wishlist and shopping cart saved in localStorage
- Newsletter email validation (front-end demo only)
- Accessible labels, semantic page structure and reduced-motion support
- Full-frame product photography using contain-fit layouts instead of aggressive cropping
- Portrait-first hero and editorial layouts with responsive image proportions
- Optimized WebP photography, responsive image sizing and high-priority hero loading
- Subtle entrance and product motion with reduced-motion accessibility support

## Technology
- React 18
- Vite 5
- React Router 6
- Lucide React icons
- CSS Grid, Flexbox and responsive media queries

## Project notes
- No backend, account system, mailing service or payment gateway is connected.
- Sample review content is explicitly labelled as fictional.
- Product descriptions are illustrative and are not medical claims.
- The SOYUNÉ identity is a fictional Korean-inspired concept brand, not an established Korean manufacturer.
- The supplied logo and optimized WebP model/product image assets are stored under `public/images/`.
- Original product photos were small source files, so the supplied product images were enlarged 4× with careful resampling and sharpening. Upscaling improves display size and perceived crispness, but cannot recreate detail absent from the original photography. Model portraits were enlarged modestly and kept uncropped in the main editorial placements.
- The footer's Instagram glyph is an inline SVG, not an icon-package export, avoiding the missing `Instagram` named-export error from the previous ZIP.
