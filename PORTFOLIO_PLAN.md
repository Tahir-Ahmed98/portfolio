# Senior Software Engineer Portfolio — Full Plan

> Animation-heavy, front-end focused portfolio. Vite + React + Tailwind CSS.

---

## 1. Tech Stack & Animation Strategy

### Core
| Layer | Choice | Notes |
|-------|--------|------|
| Build | Vite 7 | Already in use |
| UI | React 19 | Already in use |
| Styling | Tailwind CSS v4 | Already in use |
| Language | TypeScript | Already in use |

### Animation & Motion
| Purpose | Library | Use Cases |
|---------|---------|-----------|
| **Primary motion** | **Framer Motion** | Page/section transitions, scroll-triggered reveals, stagger children, layout animations, drag, gesture-based UI |
| **Scroll & timelines** | **GSAP + ScrollTrigger** | Parallax, scroll-linked timelines, complex scroll-driven animations, horizontal scroll sections |
| **Smooth scroll** | **Lenis** | Buttery scroll, scroll progress for progress bar / CTA |
| **Text effects** | **Framer Motion** (variants) + optional **Splitting.js** | Staggered letters/words, typewriter, gradient text reveal, split text on scroll |
| **Icons & logos** | **Framer Motion** (path/layout) or **Lottie** (optional) | Skill icons hover/entrance, SVG path animation, optional Lottie for hero/decoration |
| **3D / depth** | **React Three Fiber** (optional) | Optional hero background (particles, mesh), only if you want 3D |

**Recommended minimal stack:** Framer Motion + Lenis. Add GSAP + ScrollTrigger if you want advanced scroll scenes (parallax, horizontal scroll, pinned sections).

### Icons & Assets
- **Lucide React** or **Heroicons** — UI and skill-area icons
- **Simple Icons** (or custom SVGs) — Tech stack logos (React, Node, etc.)
- **Fonts:** One display font (e.g. **Clash Display**, **Syne**, **Cabinet Grotesk**) + one body (e.g. **DM Sans**, **Inter**)

---

## 2. Project Structure (Folders & Files)

```
src/
├── main.tsx
├── App.tsx
├── index.css
│
├── assets/                    # Static assets
│   ├── images/
│   │   ├── avatar.jpg
│   │   ├── projects/          # Project thumbnails
│   │   └── og-image.png
│   └── icons/                 # Custom SVGs if needed
│
├── components/
│   ├── layout/
│   │   ├── Header.tsx         # Sticky nav, logo, links, theme toggle, mobile menu
│   │   ├── Footer.tsx         # Links, socials, copyright
│   │   ├── Section.tsx        # Wrapper with id, padding, max-width, optional ref
│   │   └── PageProgress.tsx   # Scroll progress bar (Lenis or native scroll)
│   │
│   ├── ui/                    # Reusable primitives
│   │   ├── Button.tsx         # Primary/secondary/ghost, with motion
│   │   ├── Link.tsx           # Internal + external, underline animation
│   │   ├── Badge.tsx          # Tech tags, with subtle motion
│   │   └── Card.tsx           # Base card with hover/entrance (optional)
│   │
│   ├── sections/              # One component per page section
│   │   ├── Hero.tsx
│   │   ├── About.tsx
│   │   ├── Skills.tsx
│   │   ├── Experience.tsx
│   │   ├── Projects.tsx
│   │   ├── Testimonials.tsx   # Optional
│   │   └── Contact.tsx
│   │
│   ├── hero/
│   │   ├── HeroHeadline.tsx   # Main headline + optional typewriter/ stagger
│   │   ├── HeroSubline.tsx    # Supporting text
│   │   └── HeroCta.tsx        # CTA buttons + scroll indicator
│   │
│   ├── about/
│   │   ├── AboutContent.tsx   # Text + image, scroll reveal
│   │   └── AboutStats.tsx     # Optional: years exp, projects count (counting animation)
│   │
│   ├── skills/
│   │   ├── SkillsGrid.tsx     # Grid of skill categories
│   │   ├── SkillCategory.tsx  # One category (e.g. Frontend) + list of skills
│   │   └── SkillIcon.tsx      # Single tech icon with hover/entrance animation
│   │
│   ├── experience/
│   │   ├── Timeline.tsx       # Vertical or horizontal timeline wrapper
│   │   ├── TimelineItem.tsx   # Single role: date, title, company, description, tags
│   │   └── TimelineConnector.tsx  # Line/dot animation between items
│   │
│   ├── projects/
│   │   ├── ProjectCard.tsx    # Image, title, description, tags, links, hover/entrance
│   │   ├── ProjectGrid.tsx    # Grid or masonry layout
│   │   └── ProjectModal.tsx   # Optional: full detail in modal/drawer
│   │
│   └── contact/
│       ├── ContactForm.tsx    # Name, email, message, submit with loading state
│       ├── ContactInfo.tsx    # Email, social links, location
│       └── SocialLinks.tsx    # Icon row with hover
│
│   └── theme/
│       └── ThemeToggle.tsx    # Light/dark switch or dropdown for multiple themes
│
├── hooks/
│   ├── useScrollProgress.ts   # 0–1 scroll progress (for progress bar / triggers)
│   ├── useReducedMotion.ts    # Prefer reduced motion (a11y)
│   ├── useMediaQuery.ts       # Breakpoints for responsive animation toggles
│   └── useLenis.ts            # Optional: Lenis instance for smooth scroll
│
├── lib/
│   ├── constants.ts           # Nav links, social links, site meta
│   └── utils.ts               # cn(), formatDate(), etc.
│
├── context/
│   └── ThemeContext.tsx       # Theme state, setTheme, persist; wrap App
│
├── theme/                     # Multi-theme: expandable beyond light/dark
│   ├── themes.ts              # Theme IDs + display names (e.g. light, dark, ocean)
│   └── variables.css          # CSS custom properties per theme (or in index.css)
│
├── content/                   # Content as data (easy to edit)
│   ├── site.ts                # Site meta, nav, footer
│   ├── about.ts               # Bio, stats, image path
│   ├── skills.ts              # Categories and list of skills (name, icon, level?)
│   ├── experience.ts          # Jobs: title, company, dates, description, tags
│   ├── projects.ts            # Projects: title, description, image, link, repo, tags
│   └── contact.ts             # Email, socials, optional address
│
├── styles/
│   ├── globals.css            # If you split from index.css
│   └── animations.css         # Optional: keyframes for Tailwind/custom
│
└── types/
    └── index.ts               # Shared types (Project, Experience, Skill, etc.)
```

---

## 3. Section-by-Section Plan

### 3.1 Hero
- **Layout:** Full viewport, centered content; optional gradient/mesh/noise background or subtle 3D.
- **Animations:**
  - Headline: stagger by word or by character (Framer Motion `variants` + `staggerChildren`).
  - Optional: typewriter effect for one line (Framer Motion or custom with `animate`).
  - Subline: fade + slight Y after headline.
  - CTA buttons: stagger in, hover scale/border/glow.
  - Scroll indicator: bounce or fade loop at bottom.
  - Optional: parallax on background (GSAP ScrollTrigger or Framer Motion `useScroll`).
- **Components:** `Hero`, `HeroHeadline`, `HeroSubline`, `HeroCta`.

### 3.2 About
- **Layout:** Section with max-width; two columns on desktop (image + text), stack on mobile.
- **Animations:**
  - Section title: scroll-triggered reveal (e.g. `whileInView` with opacity + y).
  - Image: scale or clip-path reveal on scroll.
  - Body text: stagger paragraphs or lines.
  - Optional stats (e.g. “X years”, “Y projects”): count-up animation when in view (Framer Motion or small util).
- **Components:** `About`, `AboutContent`, `AboutStats` (optional).

### 3.3 Skills
- **Layout:** Section title + grid of categories; each category has title + list of tech icons + labels.
- **Animations:**
  - Section title: scroll reveal.
  - Categories: stagger in (e.g. one category after another).
  - Each skill icon: in-view reveal (opacity + scale or short path animation); hover: scale, glow, or slight rotate.
  - Optional: progress bars or “confidence” level with fill animation on scroll.
- **Components:** `Skills`, `SkillsGrid`, `SkillCategory`, `SkillIcon`.

### 3.4 Experience (Timeline)
- **Layout:** Vertical timeline (or horizontal on desktop) with line + nodes.
- **Animations:**
  - Timeline line: draw/reveal on scroll (stroke-dashoffset or height).
  - Each item: scroll-triggered from left/right (alternating) with opacity + x.
  - Date/title/company: stagger children.
  - Tags: fade in after content.
  - Optional: horizontal scroll section (GSAP ScrollTrigger) for a “carousel” timeline.
- **Components:** `Experience`, `Timeline`, `TimelineItem`, `TimelineConnector`.

### 3.5 Projects
- **Layout:** Grid of cards (e.g. 2–3 columns); each card: image, title, short description, tags, “View” / “Code” links.
- **Animations:**
  - Section title: scroll reveal.
  - Cards: stagger in (e.g. `staggerChildren` in Framer Motion).
  - Card hover: lift, shadow, image zoom, border/glow; tags subtle move.
  - Optional: card flip or “expand on hover” for more detail.
  - Optional: filter by tag with layout animation (Framer Motion `AnimatePresence` + layout).
- **Components:** `Projects`, `ProjectGrid`, `ProjectCard`, optionally `ProjectModal`.

### 3.6 Testimonials (Optional)
- **Layout:** Carousel or horizontal scroll of quotes + avatar + name/role.
- **Animations:** Scroll/snap, or autoplay with fade/slide; optional parallax on background.
- **Components:** `Testimonials`, `TestimonialCard`.

### 3.7 Contact
- **Layout:** Section with form (name, email, message) + side panel (email, socials, location).
- **Animations:**
  - Section title and blocks: scroll reveal.
  - Inputs: focus ring animation; optional label float.
  - Submit: loading spinner/success state with motion.
  - Social icons: stagger in, hover scale/color.
- **Components:** `Contact`, `ContactForm`, `ContactInfo`, `SocialLinks`.

---

## 4. Global Layout & Navigation

### Header
- Sticky; background blur/opacity change on scroll (Framer Motion `useScroll` + `useTransform`).
- Logo: link to top; optional small motion on load.
- Nav links: underline or highlight animation on hover; active section highlight (scroll-spy).
- Theme toggle: light/dark switch or theme dropdown (see **§7.1 Multi-Theme**); animated icon/transition.
- Mobile: hamburger → full-screen or slide-down menu with staggered link animation.

### Footer
- Minimal: primary links, social icons, “© Year Name”.
- Icons: hover scale/color.

### Page-level
- **Scroll progress:** Thin bar at top (or bottom) filling on scroll; use `useScrollProgress` or Lenis.
- **Smooth scroll:** Lenis for anchor links and general scroll feel.
- **Section wrapper:** Consistent padding, max-width, and optional `Section` component with `id` for anchor links.

---

## 5. Animation Library Usage Summary

| Area | Framer Motion | GSAP + ScrollTrigger | Lenis |
|------|----------------|----------------------|--------|
| Hero headline/text | ✅ stagger, typewriter | Optional parallax | — |
| Section titles | ✅ whileInView | — | — |
| Cards / grids | ✅ stagger, hover, layout | — | — |
| Timeline | ✅ whileInView, stagger | Optional line draw | — |
| Skill icons | ✅ hover, inView | — | — |
| Scroll progress bar | ✅ useScroll | — | ✅ scroll progress |
| Parallax / pinned | useScroll + transform | ✅ preferred | ✅ smooth scroll |
| Page transition | ✅ AnimatePresence | — | — |

**Suggested approach:** Implement everything with Framer Motion first; add Lenis for smooth scroll and progress; add GSAP + ScrollTrigger if you want advanced scroll scenes (parallax, pinned sections, complex scroll-linked timelines).

---

## 6. Content Data Shape (TypeScript)

```ts
// types/index.ts
export interface NavLink {
  label: string
  href: string
}

export interface Skill {
  name: string
  icon: string   // icon name or path
  level?: number // 1–5 or 0–100 for optional bar
}

export interface SkillCategory {
  title: string
  skills: Skill[]
}

export interface ExperienceItem {
  id: string
  title: string
  company: string
  companyUrl?: string
  startDate: string
  endDate: string
  description: string[]
  tags: string[]
}

export interface Project {
  id: string
  title: string
  description: string
  image: string
  liveUrl?: string
  repoUrl?: string
  tags: string[]
  featured?: boolean
}

export interface ContactInfo {
  email: string
  socials: { name: string; url: string; icon: string }[]
  location?: string
}
```

Keep all content in `content/*.ts` (or JSON) and import into section components so copy and assets are easy to update.

---

## 7. Styling & Theming

- **Tailwind:** Use design tokens (colors, spacing, radii) in `tailwind.config` or Tailwind v4 `@theme` in CSS.
- **Fonts:** Load display + body from Google Fonts or font file; set in Tailwind.
- **Motion:** Respect `prefers-reduced-motion: reduce` (use `useReducedMotion` hook and disable or simplify animations).
- **Themes:** See **§7.1 Multi-Theme Support** below.

### 7.1 Multi-Theme Support (Light, Dark, Expandable)

Portfolio must support **multiple themes**, with **light** and **dark** as the default pair. The system should be **expandable** so additional themes (e.g. “Ocean”, “Sepia”, “High contrast”) can be added without refactoring.

#### Default themes
- **Light** — default for first visit; light background, dark text, clear contrast.
- **Dark** — dark background, light text; optional `prefers-color-scheme: dark` as initial default.

#### Expandability
- **Theme registry:** Define themes in one place (e.g. `theme/themes.ts`) with an id and display name (e.g. `{ id: 'ocean', name: 'Ocean' }`).
- **CSS-driven:** Each theme is a set of CSS custom properties (e.g. `--color-bg`, `--color-text`, `--color-accent`). Apply by setting a data attribute or class on `<html>` (e.g. `data-theme="dark"` or `class="theme-ocean"`).
- **Tailwind:** Map theme tokens to Tailwind in `@theme` or `tailwind.config` using the same variables so `bg-background`, `text-foreground`, etc. resolve per theme.
- **Adding a theme:** Add a new entry in the theme registry and a new block in CSS (e.g. `[data-theme="ocean"] { ... }`). No component logic changes needed beyond the theme picker listing the new option.

#### Implementation pieces
| Piece | Responsibility |
|-------|----------------|
| **ThemeContext** | Current theme id, `setTheme(id)`, hydrate from `localStorage`, optional sync with `prefers-color-scheme`. |
| **ThemeToggle** | UI: two-state switch (light/dark) or dropdown/list when you have 3+ themes. Animate icon or selection (e.g. Framer Motion). |
| **CSS variables** | One set of variable names; each theme overrides them (e.g. `[data-theme="light"]` and `[data-theme="dark"]` in `variables.css` or `index.css`). |
| **`<html>`** | Hold `data-theme="..."` or `class="theme-..."`; update when theme changes so all components react via CSS. |
| **Persist** | Save chosen theme in `localStorage` and reapply on load to avoid flash. |

#### Optional: system preference
- If no saved theme, respect `prefers-color-scheme: dark` to set initial light/dark; user can still override and persist.

#### File mapping
- `src/context/ThemeContext.tsx` — React context + provider.
- `src/theme/themes.ts` — List of theme ids and labels.
- `src/theme/variables.css` (or inside `index.css`) — Variable definitions per `data-theme`.
- `src/components/theme/ThemeToggle.tsx` — Rendered in Header; uses context to switch theme.

---

## 8. Responsive & Accessibility

- **Breakpoints:** Design mobile-first; reduce motion complexity on small screens if needed (e.g. fewer stagger steps).
- **Focus:** Visible focus styles on all interactive elements; skip link to main content.
- **Reduced motion:** If `prefers-reduced-motion: reduce`, use instant or very short opacity-only transitions.
- **Semantics:** One `<h1>` in Hero; logical heading order; `aria-label` on icon-only buttons.

---

## 9. Implementation Order (Phases)

1. **Setup**
   - Install Framer Motion, Lenis; optionally GSAP + ScrollTrigger.
   - Set up fonts, Tailwind theme (colors, fonts), base layout (Header, Footer, Section).
   - **Theme:** Add `ThemeContext`, `theme/themes.ts`, CSS variables per theme, and `ThemeToggle`; wrap App with `ThemeProvider`; persist theme in `localStorage`.
   - Add `content/*.ts` and `types/index.ts` with your real data.

2. **Core layout**
   - `Header` (nav, mobile menu, theme toggle), `Footer`, `Section`, `PageProgress`.
   - Smooth scroll (Lenis) and scroll progress bar.

3. **Hero**
   - `Hero` with headline stagger, subline, CTAs, scroll indicator; optional background.

4. **About**
   - `About` with image + text and scroll reveals; optional stats + count-up.

5. **Skills**
   - `Skills` grid, `SkillIcon` with in-view and hover animations.

6. **Experience**
   - `Timeline` + `TimelineItem` with scroll-triggered and line animation.

7. **Projects**
   - `ProjectCard` + grid with stagger and hover; optional filter and modal.

8. **Contact**
   - Form + contact info + social links with focus and hover states.

9. **Polish**
   - Page/section transition (if SPA with routes), reduced-motion hook, SEO meta, OG image.

---

## 10. File Checklist (Quick Reference)

| File | Purpose |
|------|--------|
| `src/App.tsx` | Compose all sections; wrap with Lenis if used |
| `src/components/layout/Header.tsx` | Sticky nav, scroll-spy, ThemeToggle, mobile menu |
| `src/context/ThemeContext.tsx` | Theme state, setTheme, persist; ThemeProvider |
| `src/theme/themes.ts` | Theme registry (light, dark, + expandable ids/names) |
| `src/theme/variables.css` | CSS variables per data-theme (light, dark, future themes) |
| `src/components/theme/ThemeToggle.tsx` | Light/dark or multi-theme picker UI |
| `src/components/layout/Footer.tsx` | Links, socials |
| `src/components/layout/Section.tsx` | Section wrapper with id |
| `src/components/layout/PageProgress.tsx` | Scroll progress bar |
| `src/components/sections/Hero.tsx` | Hero section container |
| `src/components/hero/HeroHeadline.tsx` | Staggered/typewriter headline |
| `src/components/sections/About.tsx` | About section |
| `src/components/sections/Skills.tsx` | Skills section |
| `src/components/skills/SkillIcon.tsx` | Single skill + motion |
| `src/components/sections/Experience.tsx` | Timeline section |
| `src/components/experience/TimelineItem.tsx` | One job/role |
| `src/components/sections/Projects.tsx` | Projects grid |
| `src/components/projects/ProjectCard.tsx` | One project card + hover |
| `src/components/sections/Contact.tsx` | Contact section |
| `src/content/*.ts` | All copy and links |
| `src/types/index.ts` | Shared TS types |
| `src/hooks/useScrollProgress.ts` | Scroll 0–1 |
| `src/hooks/useReducedMotion.ts` | A11y motion |

---

## 11. Dependencies to Add

```bash
npm install framer-motion @studio-freight/lenis
# Optional:
npm install gsap lucide-react
# Optional: simple-icons for tech logos
npm install simple-icons
```

---

This plan gives you a full component structure, animation strategy, **multi-theme support (light/dark + expandable)**, content shape, and phased implementation order for a senior-level, animation-heavy portfolio. Next step is to execute phase by phase (starting with setup and layout, then Hero, then the rest).
