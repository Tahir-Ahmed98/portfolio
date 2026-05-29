# Portfolio — AGENTS.md

## Commands

```sh
npm run dev      # Vite dev server on port 4000
npm run build    # tsc -b && vite build
npm run lint     # ESLint (flat config)
npm run preview  # Vite preview of built output
```

Always run `build` (not just `lint`) to confirm both TS compiles and Vite bundles. There is no test runner.

## Architecture

- **Single-page React 19 app**, no router (hash-anchor sections via `#about`, `#skills`, etc.)
- **Entry**: `src/main.tsx` → `src/App.tsx` → sections: `Hero`, `About`, `Skills`, `Experience`, `Projects`, `Contact`
- **Tailwind CSS v4** — uses `@theme` directive to map CSS custom properties as Tailwind tokens; no `tailwind.config.js`
- **Theme**: light/dark via `data-theme` attribute on `<html>`, persisted in `localStorage` under key `portfolio-theme`
- **GSAP** + `ScrollTrigger` for scroll animations; `@studio-freight/lenis` for smooth scrolling
- **Content** (text, links, project data) lives in `src/content/*.ts` — edit these to update copy; no CMS
- **TypeScript strict mode**, `verbatimModuleSyntax` (use `import type` for type-only imports)
- **No routing library, no testing framework, no CI/CD**

## Conventions

- Section components live in `src/components/sections/`, layout in `src/components/layout/`
- Reusable pieces (theme toggle, skill icon, etc.) in `src/components/theme/`, `src/components/skills/`, etc.
- Side-effect imports (`import './lib/gsap'`) register GSAP plugins at startup
- `type` imports must use `import type` syntax per `verbatimModuleSyntax`
