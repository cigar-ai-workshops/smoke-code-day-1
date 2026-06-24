---
layout: default
transition: slide-left
---

<style>
.btn-wrap {
  text-align: center;
  margin-top: 3.5rem;
}
.open-btn-bottom {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  background: linear-gradient(135deg, var(--bwa-accent), var(--bwa-primary));
  color: #fff !important;
  font-weight: 700;
  font-size: 1.1rem;
  padding: 0.85rem 1.8rem;
  border-radius: 10px;
  border: none !important;
  text-decoration: none !important;
  transition: transform 0.15s ease, box-shadow 0.15s ease;
}
.open-btn-bottom:hover {
  transform: translateY(-1px);
  box-shadow: 0 6px 20px rgba(37, 99, 235, 0.25);
  color: #fff !important;
}
.invest-chart {
  margin-top: 1.75rem;
  display: flex;
  flex-direction: column;
  gap: 0.85rem;
  max-width: 880px;
}
.invest-row {
  display: grid;
  grid-template-columns: 11rem 1fr 5.5rem;
  align-items: center;
  gap: 1rem;
}
.invest-row .ir-label {
  font-size: 0.92rem;
  color: var(--bwa-text);
  text-align: right;
  white-space: nowrap;
}
.invest-row .ir-track {
  height: 16px;
  background: var(--bwa-surface);
  border-radius: 999px;
  overflow: hidden;
}
.invest-row .ir-fill {
  height: 100%;
  border-radius: 999px;
}
.invest-row .ir-fill.hist { background: var(--bwa-muted); }
.invest-row .ir-fill.tech { background: var(--bwa-muted); }
.invest-row .ir-fill.ai   { background: linear-gradient(90deg, var(--bwa-accent), var(--bwa-accent-deep)); }
.invest-row .ir-val {
  font-family: 'JetBrains Mono', monospace;
  font-size: 0.82rem;
  color: var(--bwa-muted);
  text-align: left;
}
.invest-row.is-ai .ir-label { font-weight: 700; color: var(--bwa-primary); }
.invest-row.is-ai .ir-val { color: var(--bwa-accent); font-weight: 700; font-size: 0.95rem; }
</style>

<div class="kicker">// ai investment wave</div>

# Just how big is AI investment?

<p style="color: var(--bwa-text); opacity: 0.78; font-size: 1.1rem; max-width: 620px; margin-top: 1.1rem;">
  AI has already surpassed every historical tech milestone combined — and it's accelerating.
</p>

<div class="invest-chart">
  <div class="invest-row">
    <div class="ir-label">Manhattan Project</div>
    <div class="ir-track"><div class="ir-fill hist" style="width:1.4%;"></div></div>
    <div class="ir-val">$30B</div>
  </div>
  <div class="invest-row">
    <div class="ir-label">Apollo Program</div>
    <div class="ir-track"><div class="ir-fill hist" style="width:13.7%;"></div></div>
    <div class="ir-val">$298B</div>
  </div>
  <div class="invest-row">
    <div class="ir-label">VR &amp; AR</div>
    <div class="ir-track"><div class="ir-fill tech" style="width:6.4%;"></div></div>
    <div class="ir-val">~$140B</div>
  </div>
  <div class="invest-row">
    <div class="ir-label">Self-Driving Cars</div>
    <div class="ir-track"><div class="ir-fill tech" style="width:4.9%;"></div></div>
    <div class="ir-val">~$107B</div>
  </div>
  <div class="invest-row is-ai">
    <div class="ir-label">AI · 2013–2025</div>
    <div class="ir-track"><div class="ir-fill ai" style="width:100%;"></div></div>
    <div class="ir-val">$2.18T</div>
  </div>
</div>

<div class="btn-wrap"><a href="/ai-investment.html" target="_blank" class="open-btn-bottom">Open Full Chart ↗</a></div>
