# Hexallo — Home Page

A pixel-perfect, fully responsive implementation of the Hexallo home page, built as a frontend assessment task.

**Live Demo:** [hexallo-pearl.vercel.app](https://hexallo-pearl.vercel.app)

---

## Assessment Brief

| Item | Detail |
|---|---|
| **Design Reference** | [Figma — Hexallo Home Page](https://www.figma.com/design/XzKltoUeHp7Vvhyo9Ci1J7/Hexallo--Home-Page?node-id=4-5261&t=vXqO6TLFdxD1lsX5-0) |
| **Requirements** | Pixel-perfect Figma implementation · Hover effects & transitions · Responsive (mobile / tablet / desktop) · Clean, production-style code |

---

## Tech Stack

| Technology | Version |
|---|---|
| Next.js (App Router) | 16.1.6 |
| React | 19.2.3 |
| TypeScript | ^5 |
| Tailwind CSS | v4 (CSS-first config) |
| Swiper | ^12 |
| clsx + tailwind-merge | Latest |
| @svgr/webpack | ^8 (SVGs as React components) |

---

## Project Structure

```
src/
├── app/
│   ├── globals.css              # Tailwind v4 theme tokens (colors, fonts)
│   ├── layout.tsx               # Root layout — Header, Footer
│   ├── utility/
│   │   ├── index.ts             # Shared helpers (countdown logic, etc.)
│   │   └── cn/index.ts          # clsx + tailwind-merge utility
│   ├── components/              # Shared/reusable UI components
│   │   ├── Header/
│   │   ├── Footer/
│   │   ├── Navbar/
│   │   ├── Menubar/
│   │   ├── MobileMenu/
│   │   ├── Section/             # Generic section wrapper with title
│   │   ├── Slider/              # Swiper-based horizontal carousel
│   │   ├── ArrowButton/         # Prev/next navigation arrows
│   │   ├── Tabs/
│   │   └── Cards/
│   │       ├── SpotlightCard/
│   │       ├── ExclusiveCard/
│   │       ├── DealCard/
│   │       ├── DiscoverCard/
│   │       ├── DestinationCard/
│   │       ├── ExploreCard/
│   │       └── GlobalHighlightCard/
│   └── (home)/
│       ├── page.tsx             # Home page — composes all sections
│       └── components/
│           ├── HeroSection/     # Full-width auto-playing image carousel + search bar
│           ├── Spotlight/       # "Tonight's Spotlight" event cards slider
│           ├── Exclusives/      # Wide-format exclusive offer cards
│           ├── ForYou/          # Personalised recommendations slider
│           ├── Destinations/    # "Buzzing Destinations" cards slider
│           ├── Deals/           # "Blazing Deals" with live countdown timer
│           │   └── CountdownBox/
│           ├── Discover/        # "Discover Hidden Gems" cards slider
│           ├── Explore/         # "Explore Ghana" CSS grid section
│           ├── TopTen/          # "Ghana's Top 10s" cards slider
│           └── GlobalHighlights/# International highlights slider
```

---

## Home Page Sections

| Section | Description |
|---|---|
| **HeroSection** | Full-bleed auto-playing Swiper carousel with custom dot pagination. Overlaid search bar with event, location, and date fields. |
| **Spotlight** | Multi-row horizontal event card slider ("Tonight's Spotlight", etc.). |
| **Exclusives** | Large-format cards highlighting curated private/exclusive experiences. |
| **ForYou** | Personalised event recommendations rendered as a horizontal slider. |
| **Destinations** | "Buzzing Destinations" — destination cards with check-in stats, horizontal scroll. |
| **Deals** | "Blazing Deals" — live countdown timer (days · hours · mins · secs) alongside a deal card carousel. |
| **Discover** | "Discover Hidden Gems" — lesser-known venue/experience cards, horizontal scroll. |
| **Explore** | "Explore Ghana" — responsive CSS grid (2-col mobile → 6-col desktop) of category cards. |
| **TopTen** | "Ghana's Top 10s" — ranked event/activity cards on a warm beige background. |
| **GlobalHighlights** | International city highlights with full-bleed imagery, horizontal carousel. |

---

## Getting Started

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Start production server
npm start
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

---

## Key Implementation Notes

- **Tailwind CSS v4** — no `tailwind.config.js`; all design tokens (colors, fonts, spacing) are declared in `globals.css` using `@theme inline { ... }`.
- **Swiper v12** — all carousels (hero, spotlight, deals, destinations, etc.) use Swiper with per-breakpoint `slidesPerView` and `spaceBetween` settings.
- **SVGs as React components** — configured via `@svgr/webpack` in `next.config.ts`, enabling `import Icon from './icon.svg'` usage throughout.
- **`cn()` utility** — `clsx` + `tailwind-merge` are combined into a single helper for clean conditional class composition.
- **React 19 Compiler** — `babel-plugin-react-compiler` is included for automatic memoisation in development.
- **Route group `(home)`** — the home page lives in a Next.js App Router route group, keeping page-specific components co-located without affecting the URL.
