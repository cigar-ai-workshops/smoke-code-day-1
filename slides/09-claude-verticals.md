---
layout: default
transition: slide-left
---

<style>
.v-intro {
  color: var(--bwa-muted);
  font-size: 1.05rem;
  line-height: 1.75;
  max-width: 640px;
  padding: 1.2rem 1.5rem;
  background: rgba(231, 162, 76, 0.05);
  border-left: 3px solid var(--bwa-amber);
  border-radius: 0 10px 10px 0;
  margin: 1rem 0 2.5rem;
}
.v-intro strong {
  color: var(--bwa-cream);
  font-weight: 600;
}
.v-cards {
  display: flex;
  gap: 1.5rem;
}
.v-card {
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 0.6rem;
  background: rgba(231, 162, 76, 0.06);
  border: 1px solid rgba(231, 162, 76, 0.15);
  border-radius: 14px;
  padding: 1.6rem 1.8rem;
  text-decoration: none !important;
  border-bottom: 1px solid rgba(231, 162, 76, 0.15) !important;
  transition: background 0.2s ease, border-color 0.2s ease, transform 0.15s ease;
}
.v-card:hover {
  background: rgba(231, 162, 76, 0.1);
  border-color: rgba(231, 162, 76, 0.35) !important;
  transform: translateY(-2px);
}
.v-card .v-label {
  font-size: 1.25rem;
  font-weight: 700;
  color: var(--bwa-cream);
  letter-spacing: -0.01em;
}
.v-card .v-url {
  font-family: 'JetBrains Mono', monospace;
  font-size: 0.82rem;
  color: var(--bwa-amber-soft);
  opacity: 0.85;
}
.v-card .v-arrow {
  font-size: 1.1rem;
  color: var(--bwa-amber);
  margin-top: auto;
  align-self: flex-end;
  transition: transform 0.2s ease;
}
.v-card:hover .v-arrow {
  transform: translateX(4px);
}
.v-card .v-badge {
  display: inline-block;
  font-family: 'JetBrains Mono', monospace;
  font-size: 0.7rem;
  text-transform: uppercase;
  letter-spacing: 0.08em;
  padding: 0.2rem 0.6rem;
  border-radius: 4px;
  background: rgba(231, 162, 76, 0.12);
  color: var(--bwa-amber-soft);
  margin-bottom: 0.1rem;
}
</style>

<div class="kicker">// where it goes next</div>

# Vertical Integration

<div class="v-intro">
  AI labs are no longer just providing APIs — they're building <strong>full-stack solutions for specific industries</strong>. Healthcare, finance, government, education, legal: each gets a tailored product with compliance, domain-specific fine-tuning, and dedicated support.
</div>

<div class="v-cards">
  <a href="https://claude.com/solutions" target="_blank" class="v-card">
    <span class="v-badge">anthropic</span>
    <span class="v-label">Claude Solutions</span>
    <span class="v-url">claude.com/solutions</span>
    <span class="v-arrow">→</span>
  </a>
  <a href="https://openai.com/solutions" target="_blank" class="v-card">
    <span class="v-badge">openai</span>
    <span class="v-label">OpenAI Solutions</span>
    <span class="v-url">openai.com/solutions</span>
    <span class="v-arrow">→</span>
  </a>
</div>
