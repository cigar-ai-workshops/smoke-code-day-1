---
layout: default
transition: slide-left
---

<style>
.cursor-grid {
  display: flex;
  gap: 2rem;
  margin-top: 1rem;
  align-items: flex-start;
}
.cursor-history {
  flex: 1;
  min-width: 0;
}
.cursor-history ul {
  list-style: none;
  padding: 0;
  margin: 0.5rem 0 0 0;
}
.cursor-history li {
  display: flex;
  align-items: baseline;
  gap: 0.6rem;
  padding: 0.35rem 0;
  border-bottom: 1px solid var(--bwa-line);
  font-size: 0.9rem;
  color: var(--bwa-muted);
}
.cursor-history li:last-child {
  border-bottom: none;
}
.cursor-history .val-date {
  font-family: 'JetBrains Mono', monospace;
  font-size: 0.72rem;
  color: var(--bwa-accent);
  white-space: nowrap;
  min-width: 5.5rem;
}
.cursor-history .val-amount {
  font-weight: 700;
  color: var(--bwa-text);
}
.cursor-history .val-note {
  font-size: 0.78rem;
  color: var(--bwa-muted);
  opacity: 0.75;
}
.cursor-history .highlight-row .val-amount {
  color: var(--bwa-accent);
  font-size: 0.95rem;
}
.cursor-img-wrap {
  flex: 0 0 auto;
  width: 48%;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.5rem;
}
.cursor-img-wrap img {
  max-width: 100%;
  max-height: 48vh;
  width: auto;
  height: auto;
  border-radius: 10px;
  border: 1px solid var(--bwa-line);
  box-shadow: 0 8px 30px rgba(0, 0, 0, 0.08);
}
</style>

<div class="kicker">// cursor ai · spacex · june 16, 2026</div>

# SpaceX bought Cursor for $60B

<div class="cursor-grid">
  <div class="cursor-history">
    <ul>
      <li>
        <span class="val-date">2022</span>
        <span class="val-amount">Founded</span>
        <span class="val-note">by 4 MIT students · Anysphere, Inc.</span>
      </li>
      <li>
        <span class="val-date">Early 2023</span>
        <span class="val-amount">Forked VS Code</span>
        <span class="val-note">built AI layer on top of <a href="https://github.com/microsoft/vscode" target="_blank" style="color:var(--bwa-accent);">github.com/microsoft/vscode</a></span>
      </li>
      <li>
        <span class="val-date">Oct 2023</span>
        <span class="val-amount">$11M raised</span>
        <span class="val-note">OpenAI Startup Fund · Nat Friedman · seed</span>
      </li>
      <li>
        <span class="val-date">GitHub</span>
        <span class="val-amount" style="font-weight:400;">github.com/cursor</span>
        <span class="val-note"><a href="https://github.com/cursor" target="_blank" style="color:var(--bwa-accent);">plugins MIT · core editor proprietary</a></span>
      </li>
      <li class="highlight-row">
        <span class="val-date">Jun 16, 2026</span>
        <span class="val-amount">$60B</span>
        <span class="val-note">Acquired by SpaceX · all-stock · $3B ARR</span>
      </li>
    </ul>
  </div>
  <div class="cursor-img-wrap">
    <img src="/images/cursor-spacex-bought.png" />
  </div>
</div>
