---
layout: cover
background: linear-gradient(160deg, #0f0c08 0%, #1a120a 50%, #241a10 100%)
class: text-center
transition: slide-left
---

<style>
.slidev-layout.cover {
  --slidev-theme-default-cover-font-size: 1rem;
}
.cover-tagline {
  font-family: 'JetBrains Mono', monospace;
  font-size: 1.1rem;
  color: #d4873a;
  letter-spacing: 0.12em;
  margin-bottom: 1.5rem;
  opacity: 0.85;
}
.cover-title {
  font-size: 4.5rem !important;
  font-weight: 700;
  line-height: 1.05;
  letter-spacing: -0.02em;
  margin-bottom: 0.75rem;
  background: linear-gradient(135deg, #f2e7d3 0%, #e7a24c 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}
.cover-desc {
  font-size: 1.25rem;
  color: #ab9a81;
  max-width: 700px;
  margin: 0 auto 2rem auto;
  line-height: 1.5;
}
.cover-terminal {
  display: inline-flex;
  align-items: center;
  gap: 0.6rem;
  background: rgba(0,0,0,0.4);
  border: 1px solid rgba(231,162,76,0.2);
  border-radius: 10px;
  padding: 0.75rem 1.25rem;
  font-family: 'JetBrains Mono', monospace;
  font-size: 1.15rem;
  margin-bottom: 2.5rem;
}
.cover-terminal .prompt { color: #9bb56e; }
.cover-terminal .cmd { color: #f2e7d3; }
.cover-terminal .flag { color: #cf6f37; }
.cover-terminal .cursor {
  display: inline-block;
  width: 10px;
  height: 1.3rem;
  background: #e7a24c;
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
  color: #ab9a81;
  display: flex;
  justify-content: center;
  gap: 2rem;
  margin-top: 1rem;
}
.cover-footer em { color: #e7a24c; font-style: normal; }
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
