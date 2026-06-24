---
layout: default
transition: slide-left
---

<style>
.eliza-grid {
  display: grid;
  grid-template-columns: 1.05fr 0.95fr;
  gap: 2.5rem;
  align-items: start;
  margin-top: 1.4rem;
}
.eliza-term {
  background: var(--bwa-bg-alt);
  border: 1px solid var(--bwa-line);
  border-radius: 12px;
  padding: 1.1rem 1.3rem 1.2rem;
  font-family: 'JetBrains Mono', ui-monospace, monospace;
  font-size: 0.92rem;
  line-height: 1.95;
  box-shadow: 0 10px 30px -16px rgba(28, 25, 22, 0.35);
}
.eliza-term .you { color: var(--bwa-text); }
.eliza-term .you::before {
  content: "you ›";
  color: var(--bwa-muted);
  margin-right: 0.5rem;
}
.eliza-term .bot {
  color: var(--bwa-accent);
  font-weight: 600;
  letter-spacing: 0.01em;
}
.eliza-note p {
  font-size: 1.02rem;
  line-height: 1.6;
  color: var(--bwa-text);
  margin: 0 0 0.9rem;
}
.eliza-note .lead { font-weight: 700; color: var(--bwa-primary); }
.eliza-note strong { color: var(--bwa-primary); font-weight: 700; }
.eliza-note .pull {
  border-left: 3px solid var(--bwa-accent);
  padding-left: 0.9rem;
  color: var(--bwa-primary);
  font-weight: 600;
}
.lineage {
  display: flex;
  align-items: center;
  gap: 0.55rem;
  margin-top: 2.1rem;
  font-family: 'JetBrains Mono', monospace;
  font-size: 0.78rem;
  color: var(--bwa-muted);
  flex-wrap: wrap;
}
.lineage b { color: var(--bwa-primary); font-weight: 700; }
.lineage .sep { color: var(--bwa-line); }
.lineage .now { color: var(--bwa-accent); font-weight: 700; }
</style>

<div class="kicker">// before the hype · 1966</div>

# AI isn't new. It's computer science.

<div class="eliza-grid">
  <div class="eliza-term">
    <div class="you">Men are all alike.</div>
    <div class="bot">IN WHAT WAY?</div>
    <div class="you">They're always bugging us about something.</div>
    <div class="bot">CAN YOU THINK OF A SPECIFIC EXAMPLE?</div>
    <div class="you">Well, my boyfriend made me come here.</div>
    <div class="bot">YOUR BOYFRIEND MADE YOU COME HERE?</div>
  </div>
  <div class="eliza-note">
    <p class="lead">This is ELIZA — written in 1966 at MIT by Joseph Weizenbaum. <a href="https://cse.buffalo.edu/~rapaport/572/S02/weizenbaum.eliza.1966.pdf" target="_blank" style="font-weight:400;color:var(--bwa-muted);text-decoration:underline;text-underline-offset:3px;">Read the paper →</a></p>
    <p>The first chatbot. Around <strong>200 lines</strong> of pattern-matching rules. No neural networks, no training data, no "AI" as we picture it today.</p>
    <p>People still poured their hearts out to it. We've called it the <strong>ELIZA effect</strong> ever since.</p>
    <p class="pull">Sixty years later, LLMs are the same field: algorithms, data, and math.</p>
  </div>
</div>

<div class="lineage">
  <b>1950</b> Turing test <span class="sep">→</span>
  <b>1966</b> ELIZA <span class="sep">→</span>
  <b>1997</b> Deep Blue <span class="sep">→</span>
  <b>2012</b> deep learning <span class="sep">→</span>
  <b>2017</b> transformers <span class="sep">→</span>
  <span class="now">2022 ChatGPT</span>
</div>
