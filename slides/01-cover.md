---
layout: cover
background: radial-gradient(120% 120% at 28% 18%, #fbf6ec 0%, #f4ecdb 55%, #ebdfc9 100%)
class: text-center
transition: slide-left
---

<style>
.slidev-layout.cover {
  --slidev-theme-default-cover-font-size: 1rem;
}
.slidev-layout.cover h1 {
  font-family: 'Inter', system-ui, sans-serif;
  font-size: 4.75rem !important;
  font-weight: 800;
  line-height: 1.0;
  letter-spacing: -0.04em;
  color: var(--bwa-primary);
  margin-bottom: 1rem !important;
}
.slidev-layout.cover h1::after { content: none; }
.cover-tagline {
  font-family: 'JetBrains Mono', monospace;
  font-size: 0.85rem;
  color: var(--bwa-accent);
  letter-spacing: 0.22em;
  text-transform: uppercase;
  margin-bottom: 1.75rem;
  font-weight: 600;
}
.cover-title {
  font-family: 'Inter', system-ui, sans-serif;
  font-size: 4.75rem !important;
  font-weight: 800;
  line-height: 1.0;
  letter-spacing: -0.04em;
  margin-bottom: 1rem;
  color: var(--bwa-primary);
}
.cover-desc {
  font-size: 1.2rem;
  color: var(--bwa-text);
  opacity: 0.78;
  max-width: 680px;
  margin: 0 auto 2.25rem auto;
  line-height: 1.65;
}
.cover-terminal {
  display: inline-flex;
  align-items: center;
  gap: 0.6rem;
  background: var(--bwa-bg-alt);
  border: 1px solid var(--bwa-line);
  border-radius: 10px;
  padding: 0.75rem 1.25rem;
  font-family: 'JetBrains Mono', monospace;
  font-size: 1.15rem;
  margin-bottom: 2.5rem;
}
.cover-terminal .prompt { color: var(--bwa-accent); }
.cover-terminal .cmd { color: var(--bwa-text); }
.cover-terminal .flag { color: var(--bwa-accent); }
.cover-terminal .cursor {
  display: inline-block;
  width: 10px;
  height: 1.3rem;
  background: var(--bwa-accent);
  animation: blink 1.1s step-end infinite;
  margin-left: 2px;
}
@keyframes blink {
  0%, 49% { opacity: 1; }
  50%, 100% { opacity: 0; }
}
.cover-footer {
  font-family: 'JetBrains Mono', monospace;
  font-size: 0.9rem;
  color: var(--bwa-muted);
  display: flex;
  justify-content: center;
  gap: 2rem;
  margin-top: 1rem;
}
.cover-footer em { color: var(--bwa-accent); font-style: normal; }
</style>

<div class="cover-tagline">// the valley builds with ai</div>

# Build with AI.

<div class="cover-desc">
A field guide to the tools and models — Claude Code, Codex, OpenCode, and the frontier vs. open-weight models behind them. It's all tradeoffs.
</div>

<div class="cover-terminal">
  <span class="prompt">$</span>
  <span class="cmd">pick-your-tool</span>
  <span class="flag">--any</span>
  <span class="cursor"></span>
</div>

<div class="cover-footer">
  <span>Cigar Society · Pharr, TX</span>
  <span><em>all skill levels · always free</em></span>
</div>
