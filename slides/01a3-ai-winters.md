---
layout: default
transition: slide-left
---

<style>
.winters-chart {
  margin-top: 0.6rem;
  width: 100%;
}
.winters-chart svg { width: 100%; height: auto; max-height: 30vh; display: block; }

.wc-line   { fill: none; stroke: var(--bwa-primary); stroke-width: 3; stroke-linejoin: round; stroke-linecap: round; }
.wc-area   { fill: var(--bwa-surface); opacity: 0.55; }
.wc-axis   { stroke: var(--bwa-line); stroke-width: 1.5; }
.wc-band   { fill: #c9d4da; opacity: 0.45; }
.wc-band-t { fill: #3f5560; font-family: 'JetBrains Mono', monospace; font-size: 15px; font-weight: 600; letter-spacing: 0.04em; text-anchor: middle; }
.wc-band-y { fill: #3f5560; font-family: 'JetBrains Mono', monospace; font-size: 12px; text-anchor: middle; opacity: 0.85; }
.wc-snow   { fill: #6c828d; font-size: 18px; text-anchor: middle; opacity: 0.5; }
.wc-dot    { fill: var(--bwa-primary); }
.wc-dot-now{ fill: var(--bwa-accent); }
.wc-peak   { fill: var(--bwa-muted); font-family: 'JetBrains Mono', monospace; font-size: 12.5px; text-anchor: middle; }
.wc-now    { fill: var(--bwa-accent); font-family: 'JetBrains Mono', monospace; font-size: 13px; font-weight: 700; text-anchor: middle; }
.wc-tick   { fill: var(--bwa-muted); font-family: 'JetBrains Mono', monospace; font-size: 12px; text-anchor: middle; }

.winters-cards { display: grid; grid-template-columns: 1fr 1fr; gap: 1.2rem; margin-top: 0.2rem; }
.wcard { border-left: 3px solid var(--bwa-accent); padding-left: 0.9rem; }
.wcard h3 { font-size: 0.95rem; font-weight: 800; color: var(--bwa-primary); margin: 0 0 0.05rem; }
.wcard .wc-when { font-family: 'JetBrains Mono', monospace; font-size: 0.7rem; color: var(--bwa-muted); margin-bottom: 0.3rem; }
.wcard ul { margin: 0; padding: 0; list-style: none; }
.wcard li { font-size: 0.8rem; line-height: 1.4; color: var(--bwa-text); padding-left: 0.9rem; position: relative; }
.wcard li::before { content: "·"; position: absolute; left: 0.15rem; color: var(--bwa-accent); font-weight: 700; }
</style>

<div class="kicker">// boom and bust</div>

# AI has frozen over before

<div class="winters-chart">
<svg viewBox="0 0 1000 300" role="img" aria-label="AI funding and interest over time, showing two AI winters">
  <!-- winter bands -->
  <rect class="wc-band" x="278" y="34" width="82" height="234" />
  <rect class="wc-band" x="451" y="34" width="82" height="234" />
  <text class="wc-snow" x="319" y="60">❄</text>
  <text class="wc-snow" x="492" y="60">❄</text>
  <text class="wc-band-t" x="319" y="26">First AI Winter</text>
  <text class="wc-band-y" x="319" y="286">1974–1980</text>
  <text class="wc-band-t" x="492" y="26">Second AI Winter</text>
  <text class="wc-band-y" x="492" y="286">1987–1993</text>

  <!-- baseline -->
  <line class="wc-axis" x1="40" y1="268" x2="968" y2="268" />

  <!-- area + line -->
  <path class="wc-area" d="M40,210 L150,130 L245,92 L330,250 L420,88 L495,252 L620,205 L760,158 L870,92 L950,46 L950,268 L40,268 Z" />
  <path class="wc-line" d="M40,210 L150,130 L245,92 L330,250 L420,88 L495,252 L620,205 L760,158 L870,92 L950,46" />

  <!-- peak / point markers -->
  <circle class="wc-dot" cx="245" cy="92" r="4.5" />
  <circle class="wc-dot" cx="420" cy="88" r="4.5" />
  <circle class="wc-dot-now" cx="950" cy="46" r="5.5" />
  <text class="wc-peak" x="245" y="80">neural-net hype</text>
  <text class="wc-peak" x="420" y="76">expert-systems boom</text>
  <text class="wc-now" x="912" y="38">today</text>

  <!-- year ticks -->
  <text class="wc-tick" x="40"  y="288">1956</text>
  <text class="wc-tick" x="760" y="288">2012</text>
</svg>
</div>

<div class="winters-cards">
  <div class="wcard">
    <h3>First AI Winter</h3>
    <div class="wc-when">1974 – 1980</div>
    <ul>
      <li>The Lighthill Report (1973) judged AI wildly overpromised</li>
      <li>Perceptron limits stalled neural nets (Minsky &amp; Papert, 1969)</li>
      <li>DARPA killed a $3M/yr contract (<b>≈ $20M today</b>) — UK dismantled AI research entirely</li>
    </ul>
  </div>
  <div class="wcard">
    <h3>Second AI Winter</h3>
    <div class="wc-when">1987 – 1993</div>
    <ul>
      <li>The LISP-machine market collapsed overnight — a <b>$500M</b> industry gone (<b>≈ $1.4B today</b>)</li>
      <li>Expert systems proved brittle and costly to maintain</li>
      <li>Japan's Fifth-Generation goals went unmet</li>
    </ul>
  </div>
</div>
