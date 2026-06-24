---
layout: default
transition: slide-left
---

<style>
.lovable-grid {
  display: flex;
  gap: 2rem;
  margin-top: 1rem;
  align-items: flex-start;
}
.lovable-info {
  flex: 1;
  min-width: 0;
}
.lovable-info ul {
  list-style: none;
  padding: 0;
  margin: 0.5rem 0 0 0;
}
.lovable-info li {
  display: flex;
  align-items: baseline;
  gap: 0.75rem;
  padding: 0.55rem 0;
  border-bottom: 1px solid rgba(255, 255, 255, 0.06);
  font-size: 1rem;
  color: var(--bwa-muted);
}
.lovable-info li:last-child {
  border-bottom: none;
}
.lovable-info .l-date {
  font-family: 'JetBrains Mono', monospace;
  font-size: 0.78rem;
  color: var(--bwa-amber-soft);
  white-space: nowrap;
  min-width: 5.5rem;
}
.lovable-info .l-label {
  font-weight: 700;
  color: var(--bwa-cream);
}
.lovable-info .l-note {
  font-size: 0.85rem;
  color: var(--bwa-muted);
  opacity: 0.75;
}
.lovable-img-wrap {
  flex: 0 0 auto;
  width: 48%;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.5rem;
}
.lovable-img-wrap img {
  max-width: 100%;
  max-height: 58vh;
  width: auto;
  height: auto;
  border-radius: 10px;
  border: 1px solid rgba(231, 162, 76, 0.18);
  box-shadow: 0 18px 48px rgba(0, 0, 0, 0.55);
}
</style>

<div class="kicker">// vibe coding · lovable</div>

# Lovable (ex-GPT Engineer)

<div class="lovable-grid">
  <div class="lovable-info">
    <ul>
      <li>
        <span class="l-date">Founded</span>
        <span class="l-label">2023</span>
        <span class="l-note">by Anton Osika · Stockholm</span>
      </li>
      <li>
        <span class="l-date">Rebranded</span>
        <span class="l-label">GPT Engineer → Lovable</span>
        <span class="l-note">GPT-4 was the catalyst · shifted from CLI to web app builder</span>
      </li>
      <li>
        <span class="l-date">Funding</span>
        <span class="l-label">~$10M</span>
        <span class="l-note">seed stage</span>
      </li>
      <li>
        <span class="l-date">Models</span>
        <span class="l-label">Model-agnostic</span>
        <span class="l-note">Claude Opus, GPT-5, Gemini · routes per task · 1B+ tokens/min</span>
      </li>
      <li>
        <span class="l-date">GitHub</span>
        <span class="l-label">50K+ stars</span>
        <span class="l-note"><a href="https://github.com/gpt-engineer-org/gpt-engineer" target="_blank" style="color:var(--bwa-amber);">github.com/gpt-engineer-org/gpt-engineer</a></span>
      </li>
    </ul>
  </div>
  <div class="lovable-img-wrap">
    <img src="/images/lovaable-tacos.png" />
  </div>
</div>
