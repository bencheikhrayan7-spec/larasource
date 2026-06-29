# LaraSource

Marketing site for **LaraSource** — an end-to-end China sourcing agent and supply-chain partner for e-commerce brands. _Vetted China factory quotes in 5 hours — sourcing, quality control, and logistics, all in one place._

## Tech stack

- **Next.js 14** (App Router) + **TypeScript**
- **Tailwind CSS** for styling
- **Framer Motion** for reveals & micro-interactions
- **Lenis** for smooth scrolling
- **lucide-react** for icons
- Google Fonts via `next/font` — **Space Grotesk** (headings) + **Inter** (body)

## Getting started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

### Other commands

```bash
npm run build   # production build
npm run start   # serve the production build
```

## Project structure

```
app/
  layout.tsx        # fonts, metadata, smooth-scroll provider
  page.tsx          # single-page composition of all sections
  globals.css       # Tailwind layers + base styles
components/
  Navbar.tsx        # sticky nav, blur-on-scroll, mobile menu
  Hero.tsx          # gradient-mesh blobs, word-by-word headline, floating cards, count-up stats
  CityMarquee.tsx   # infinite city marquee
  Services.tsx      # 6-card feature grid
  Process.tsx       # 4-step process
  SplitSection.tsx  # reusable alternating image/text section w/ parallax
  Testimonials.tsx  # testimonial cards
  FAQ.tsx           # animated, keyboard-navigable accordion
  CTABand.tsx       # full-width gradient CTA band
  Footer.tsx        # footer with columns + socials
  ui/               # Button, Reveal/Stagger, CountUp, SectionHeading
```

## Notes

- All animation respects `prefers-reduced-motion` (Lenis is disabled and Framer Motion falls back to reduced variants).
- Images are hotlinked from Unsplash via `next/image` (allowed in `next.config.mjs`).
- Responsive: 1 column on mobile, 2 on tablet, 3 on desktop; hamburger menu under 768px.
