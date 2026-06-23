# Smoke & Code — Day 1

## Project

[Slidev](https://sli.dev) presentation deck. Write slides in Markdown, served via Vite with hot-reload.

## Getting started

```sh
npm run dev      # dev server with HMR
npm run build    # static SPA build to dist/
npm run export   # export to PDF/PNG
```

## Critical rule

**Always `git add` and `git commit` before running destructive commands like `git clean -fd`, `git reset --hard`, or `rm -rf`. Never use `git clean -fd` without first checking what it will delete with `git clean -fdn`.**

## Structure

- `slides.md` — main entrypoint that includes all slides via `src: ./slides/NN-name.md`
- `slides/01-cover.md` through `slides/05-thank-you.md` — individual slide files
- `dist/` — built output (gitignored)

## Authoring

- Each slide file has YAML frontmatter for layout, transition, background, etc.
- Use standard Markdown with Slidev enhancements: code blocks, tables, LaTeX, Mermaid, Vue components
- Table of contents and slide order are controlled by `slides.md`
