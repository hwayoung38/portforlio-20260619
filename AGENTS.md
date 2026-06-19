<!-- BEGIN:nextjs-agent-rules -->
# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` before writing any code. Heed deprecation notices.
<!-- END:nextjs-agent-rules -->

---

# Project Context

Personal branding portfolio for a senior UX designer at Samsung Electronics. Goal: differentiate from a plain resume — present career narrative, design philosophy, and sensibility as a distinctive brand identity in the AI era.

Tech Stack: Next.js 16 (App Router) · React 19 · TypeScript · Tailwind CSS v4 · shadcn/ui (radix-nova style) · Lucide icons · bun

---

# Operational Commands

```bash
bun run dev      # dev server → localhost:3000
bun run build    # production build
bun run lint     # ESLint
```

- Package manager: **bun only.** Never use npm, yarn, or pnpm.
- Add shadcn components: `bunx shadcn add <component>`

---

# Golden Rules

## Immutable

- Never break App Router conventions: layouts in `layout.tsx`, pages in `page.tsx`. Pages Router is off-limits.
- Never use `<img>` — always `next/image` (`<Image />`).
- Never hardcode secrets. Contact addresses on public pages are acceptable exceptions.

## Do's

- Read `node_modules/next/dist/docs/` before using any Next.js API.
- Use shadcn/ui components (`@/components/ui/`) before writing custom ones.
- Use Lucide icons (`lucide-react`) for all iconography.
- Extend Tailwind via CSS custom properties in `app/globals.css` under `@theme inline`.
- Define all color tokens as oklch values in `globals.css`; expose via `--color-*` in `@theme inline`.
- Use `clamp()` for fluid display typography; avoid fixed breakpoint font overrides.
- Isolate non-token color values (hex/oklch literals used in JSX) into named consts at the top of the file.

## Don'ts

- Do not install additional UI libraries — shadcn + Lucide are the defined UI layer.
- Do not use TypeScript `any`.
- Do not add comments that describe what the code obviously does.
- Do not create new files when editing an existing file solves the problem.
- Do not duplicate content from `README.md` in any `AGENTS.md`.

---

# Design System

## Palette

- Background: `bg-black text-white` (dark-first).
- Vivid accent (`--vivid`): electric lime `oklch(0.93 0.22 128)` / `#CBFF57`.
  - Use at max 2–3 touch points per section (badges, CTA buttons, status indicators).
- Text hierarchy via opacity: primary `text-white`, secondary `text-white/75`, tertiary `text-white/45`, muted `text-white/35`.
- Dividers: `rgba(255,255,255,0.1)`.

## Typography

- Display headings: `font-black uppercase tracking-tighter leading-[0.88]`, size via `clamp()`.
- Section labels: `text-[11px] font-semibold uppercase tracking-[0.2em]`.
- Body: `text-lg leading-relaxed`.
- Numeric/dates: `tabular-nums`.

## Layout

- Sections: `<section id="[name]">` · full-width · inner max-width container (`max-w-6xl mx-auto px-6 md:px-16`).
- Hero: `min-h-screen flex flex-col justify-between` — top bar / center giant text / bottom bar.
- Marquee strip: vivid accent background + black text, separates major sections visually.

## Component Conventions

- Prefer shadcn `Button` with `asChild` for link-buttons.
- Status badges: pill shape (`rounded-full`) with vivid border + text.
- Career/list items: `flex justify-between` with period right-aligned, `tabular-nums`.

---

# Standards

## Git

- Conventional Commits: `feat:` · `fix:` · `style:` · `content:` · `chore:`
- Use `content:` for all copy and profile data changes.
- `main` is production; use feature branches for new sections.

## Maintenance Policy

If any rule in this file conflicts with the actual codebase, propose an update to this file before proceeding.
