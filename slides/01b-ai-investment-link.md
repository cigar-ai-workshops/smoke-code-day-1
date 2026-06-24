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
.invest-preview {
  display: flex;
  gap: 1rem;
  margin-top: 1rem;
}
.invest-preview .bar-group {
  flex: 1;
}
.invest-preview .bar-label-sm {
  font-family: 'JetBrains Mono', monospace;
  font-size: 0.75rem;
  color: var(--bwa-muted);
  margin-bottom: 0.25rem;
}
.invest-preview .bar-sm {
  height: 28px;
  border-radius: 6px;
  display: flex;
  align-items: center;
  padding-left: 10px;
  font-size: 0.8rem;
  font-weight: 700;
}
.invest-preview .bar-sm.hist { background: linear-gradient(90deg, #94a3b8, #64748b); color: #fff; }
.invest-preview .bar-sm.tech { background: linear-gradient(90deg, #64748b, #475569); color: #fff; }
.invest-preview .bar-sm.ai   { background: linear-gradient(90deg, var(--bwa-accent), var(--bwa-primary)); color: #fff; }
.bar-sm .bar-val { margin-left: auto; padding-right: 10px; }
</style>

<div class="kicker">// ai investment wave</div>

# Just how big is AI investment?

<p style="color: var(--bwa-muted); font-size: 1.1rem; max-width: 600px; margin-top: 1.2rem;">
  AI has already surpassed every historical tech milestone combined — and it's accelerating.
</p>

<div class="invest-preview">
  <div class="bar-group">
    <div class="bar-label-sm">Manhattan Project</div>
    <div class="bar-sm hist" style="width:5%;">$30B</div>
  </div>
  <div class="bar-group">
    <div class="bar-label-sm">Apollo Program</div>
    <div class="bar-sm hist" style="width:15%;">$298B</div>
  </div>
  <div class="bar-group">
    <div class="bar-label-sm">VR &amp; AR</div>
    <div class="bar-sm tech" style="width:10%;">~$140B</div>
  </div>
  <div class="bar-group">
    <div class="bar-label-sm">Self-Driving Cars</div>
    <div class="bar-sm tech" style="width:8%;">~$107B</div>
  </div>
  <div class="bar-group">
    <div class="bar-label-sm">AI 2013–2025</div>
    <div class="bar-sm ai" style="width:80%;"><strong class="bar-val">$2.18T</strong></div>
  </div>
</div>

<div class="btn-wrap"><a href="/ai-investment.html" target="_blank" class="open-btn-bottom">Open Full Chart ↗</a></div>
