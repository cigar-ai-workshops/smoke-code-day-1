# Smoke & Code -- Day 1

## Project

[Slidev](https://sli.dev) presentation deck. Write slides in Markdown, served via Vite with hot-reload.

Built-in theme classes: `text-primary`, `bg-primary`, `border-primary`, `text-main`, `bg-main`.

> **Theme updated June 24, 2026** — Switched from dark amber to light professional palette (navy/blue on white). See CSS variables below.

## Quick start

```sh
npm run dev      # dev server with HMR at localhost
npm run build    # static SPA build to dist/
npm run export   # export to PDF/PNG
```

## Key files

| File | Purpose |
|------|---------|
| `slides.md` | Root entrypoint. Theme, color schema, transitions, slide order via `src:` includes |
| `slides/NN-name.md` | Individual slide files. Each has YAML frontmatter |
| `style.css` | Auto-loaded by Slidev. Custom CSS variables, `.kicker`, `.shot` classes |
| `vite.config.ts` | Vite config (minimal) |

## Theme system

Set in `slides.md` frontmatter:

```yaml
---
theme: default            # @slidev/theme-default, also installed: seriph
colorSchema: light         # force light mode; omit for system default
---
```

- `colorSchema: auto` (default) -- follows system preference
- `colorSchema: light` -- always light mode
- `colorSchema: dark` -- always dark mode

## Slide structure

Order is controlled by `slides.md`:

```yaml
---
src: ./slides/01-cover.md
---
```

Current slides (12 total):

| Slide | Layout | Content |
|-------|--------|---------|
| `01-cover.md` | `cover` | Title, tagline, terminal graphic |
| `01b-ai-investment-link.md` | `default` | AI investment preview + link to full chart |
| `01c-cursor-spacex.md` | `default` | SpaceX bought Cursor for $60B |
| `01d-lovable.md` | `default` | Lovable (ex-GPT Engineer) |
| `02-time-horizon-llms.md` | `default` | METR time horizon chart |
| `03-the-stack.md` | `default` | AI subscriptions table |
| `04-model-agnostic-apps.md` | `default` | AI coding app comparison table |
| `05-compare-models.md` | `default` | Model comparison table |
| `06-ipad-app.md` | `default` | iPad screenshot |
| `07-android-app.md` | `default` | Android screenshot |
| `08-website.md` | `default` | Website screenshot |
| `09-claude-verticals.md` | `default` | Vertical integration links |

## Per-slide frontmatter

Every slide can have its own frontmatter block:

```yaml
---
layout: default          # layout component (cover, default, section, fact, quote, etc.)
transition: slide-left   # animation between slides (slide-left, slide-up, fade, etc.)
clicks: 3               # number of click steps for animations
disabled: false         # hide this slide
hideInToc: false        # hide from table of contents
zoom: 1                 # custom zoom scale
---
```

Common layouts:
- `cover` -- full-screen title slide (used for 01-cover.md)
- `default` -- standard content with heading and body
- `section` -- section divider
- `fact` -- big centered number/fact
- `quote` -- pull quote
- `statement` -- centered statement

## Custom CSS

`style.css` is auto-loaded by Slidev and applies to every slide.

### CSS variables

Edit these in `:root` to change the theme palette:

```css
--bwa-bg        #ffffff    main background
--bwa-bg-alt    #f8fafc    alternate background
--bwa-surface   #f1f5f9    card surfaces, table hover
--bwa-primary   #1e3a8a    deep navy brand
--bwa-accent    #2563eb    links, highlights, borders
--bwa-primary-light #3b82f6 lighter blue accent
--bwa-text      #0f172a    primary text
--bwa-muted     #64748b    secondary text
--bwa-line      #e2e8f0    table/border lines
--bwa-accent-soft #dbeafe  soft blue background (th, badges)
```

### Custom classes

- **`.kicker`** -- monospace label above a title (e.g. `// model agnostic`). Used in slides 02-10.
- **`.shot`** -- screenshot frame. Wraps `<img>` + `.caption`. Image fills from top with rounded corners and shadow. Default is `justify-content: flex-start` with a negative margin so images sit high and can overlap the title. Override via inline style if needed.
- **`.shot .caption`** -- caption below a screenshot.
- **`.shot .caption em`** -- highlighted text within a caption.
- **`.cover-*`** -- cover slide utility classes (`.cover-tagline`, `.cover-title`, `.cover-desc`, `.cover-terminal`, `.cover-footer`)

### Naming convention

- CSS variables prefixed `--bwa-` (Build With AI)
- Utility classes: `.kicker`, `.shot`, `.cover-*`

## Adding a new slide

1. Create `slides/NN-name.md` with frontmatter and markdown content
2. Add a `src:` entry in `slides.md` at the desired position
3. Use `.kicker` for section labels, `.shot` for screenshots when needed

## Safety

**Always `git add` and `git commit` before running destructive commands like `git clean -fd`, `git reset --hard`, or `rm -rf`. Never use `git clean -fd` without first checking what it will delete with `git clean -fdn`.**
