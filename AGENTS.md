# Smoke & Code -- Day 1

## Project

[Slidev](https://sli.dev) presentation deck. Write slides in Markdown, served via Vite with hot-reload.

Built-in theme classes: `text-primary`, `bg-primary`, `border-primary`, `text-main`, `bg-main`.

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
theme: default            # @slidev/theme-default (dark amber), also installed: seriph
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

Current slides (10 total):

| Slide | Layout | Content |
|-------|--------|---------|
| `01-cover.md` | `cover` | Title, tagline, terminal graphic |
| `02-time-horizon-llms.md` | `default` | METR time horizon chart |
| `03-the-stack.md` | `default` | AI subscriptions table |
| `04-model-agnostic-apps.md` | `default` | App comparison table |
| `05-compare-models.md` | `default` | Model comparison table |
| `06-ipad-app.md` | `default` | iPad screenshot |
| `07-android-app.md` | `default` | Android screenshot |
| `08-website.md` | `default` | Website screenshot |
| `09-claude-verticals.md` | `default` | Claude verticals table |
| `10-openai-verticals.md` | `default` | OpenAI verticals table |

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
--bwa-bg-0        #0f0c08    darkest background
--bwa-bg-1        #1a120a    mid background
--bwa-bg-2        #241a10    lightest background
--bwa-amber       #e7a24c    primary accent (links, th text, borders)
--bwa-amber-deep  #cf6f37    darker accent (gradients, hover)
--bwa-amber-soft  #d4873a    soft accent (kicker, blockquote)
--bwa-cream       #f2e7d3    primary text / heading gradient
--bwa-muted       #ab9a81    secondary text (captions, blockquote)
--bwa-line        rgba(255,255,255,0.07) table/border lines
```

### Custom classes

- **`.kicker`** -- monospace label above a title (e.g. `// model agnostic`). Used in slides 02-10.
- **`.shot`** -- screenshot frame. Wraps `<img>` + `.caption`. Image fills from top with rounded corners and shadow. Default is `justify-content: flex-start` with a negative margin so images sit high and can overlap the title. Override via inline style if needed.
- **`.shot .caption`** -- caption below a screenshot.
- **`.shot .caption em`** -- highlighted text within a caption.

### Naming convention

- CSS variables prefixed `--bwa-` (Build With AI)
- Utility classes: `.kicker`, `.shot`, `.cover-*`

## Adding a new slide

1. Create `slides/NN-name.md` with frontmatter and markdown content
2. Add a `src:` entry in `slides.md` at the desired position
3. Use `.kicker` for section labels, `.shot` for screenshots when needed

## Safety

**Always `git add` and `git commit` before running destructive commands like `git clean -fd`, `git reset --hard`, or `rm -rf`. Never use `git clean -fd` without first checking what it will delete with `git clean -fdn`.**
