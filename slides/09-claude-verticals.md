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
  background: var(--bwa-bg-alt);
  border-left: 3px solid var(--bwa-accent);
  border-radius: 0 10px 10px 0;
  margin: 1rem 0 2.5rem;
}
.v-intro strong {
  color: var(--bwa-text);
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
  background: var(--bwa-bg-alt);
  border: 1px solid var(--bwa-line);
  border-radius: 14px;
  padding: 1.6rem 1.8rem;
  text-decoration: none !important;
  border-bottom: 1px solid var(--bwa-line) !important;
  transition: background 0.2s ease, border-color 0.2s ease, transform 0.15s ease;
}
.v-card:hover {
  background: var(--bwa-surface);
  border-color: var(--bwa-accent) !important;
  transform: translateY(-2px);
}
.v-card .v-label {
  font-size: 1.25rem;
  font-weight: 700;
  color: var(--bwa-text);
  letter-spacing: -0.01em;
}
.v-card .v-url {
  font-family: 'JetBrains Mono', monospace;
  font-size: 0.82rem;
  color: var(--bwa-accent);
  opacity: 0.85;
}
.v-card .v-arrow {
  font-size: 1.1rem;
  color: var(--bwa-accent);
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
  background: var(--bwa-accent-soft);
  color: var(--bwa-accent);
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
