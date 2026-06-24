---
layout: default
transition: slide-left
---

<style>
.fit-grid {
  display: grid;
  grid-template-columns: 0.92fr 1.08fr;
  gap: 2.75rem;
  align-items: center;
  margin-top: 1.2rem;
}

/* --- Nested containment diagram --- */
.nest {
  border-radius: 16px;
  padding: 2.35rem 1.1rem 1.1rem;
  position: relative;
}
.nest-tag {
  position: absolute;
  top: 0.75rem;
  left: 1.05rem;
  font-family: 'JetBrains Mono', monospace;
  font-size: 0.66rem;
  letter-spacing: 0.14em;
  text-transform: uppercase;
  font-weight: 600;
}
.nest.ai  { background: #efe6d6; border: 1px solid var(--bwa-line); }
.nest.ml  { background: #e6d9c1; }
.nest.dl  { background: #d9c8a8; }
.nest.ai .nest-tag,
.nest.ml .nest-tag,
.nest.dl .nest-tag { color: #5d5346; }
.nest.llm {
  background: linear-gradient(135deg, var(--bwa-accent), var(--bwa-accent-deep));
  padding: 1.1rem 1.1rem 1.15rem;
  text-align: center;
}
.nest.llm .nest-tag { color: rgba(247, 241, 230, 0.7); position: static; display: block; margin-bottom: 0.2rem; }
.nest.llm .llm-title { color: #f7f1e6; font-weight: 800; font-size: 1.15rem; letter-spacing: -0.01em; }
.nest.llm .llm-sub { color: rgba(247, 241, 230, 0.78); font-family: 'JetBrains Mono', monospace; font-size: 0.72rem; margin-top: 0.2rem; }

.fit-copy p {
  font-size: 1.04rem;
  line-height: 1.6;
  color: var(--bwa-text);
  margin: 0 0 1rem;
}
.fit-copy .lead { font-weight: 700; color: var(--bwa-primary); font-size: 1.12rem; }
.fit-copy strong { color: var(--bwa-primary); font-weight: 700; }
.sib-label {
  font-family: 'JetBrains Mono', monospace;
  font-size: 0.7rem;
  letter-spacing: 0.14em;
  text-transform: uppercase;
  color: var(--bwa-muted);
  margin-bottom: 0.6rem;
}
.sib-chips { display: flex; flex-wrap: wrap; gap: 0.55rem; margin-bottom: 1.3rem; }
.sib-chips span {
  background: var(--bwa-surface);
  border: 1px solid var(--bwa-line);
  border-radius: 999px;
  padding: 0.32rem 0.8rem;
  font-size: 0.82rem;
  color: var(--bwa-text);
}
.fit-foot {
  border-left: 3px solid var(--bwa-accent);
  padding-left: 0.9rem;
  color: var(--bwa-primary);
  font-weight: 600;
  font-size: 1rem;
  line-height: 1.5;
}
</style>

<div class="kicker">// the bigger picture</div>

# LLMs are one piece of the puzzle

<div class="fit-grid">
  <div class="nest ai">
    <span class="nest-tag">Artificial Intelligence</span>
    <div class="nest ml">
      <span class="nest-tag">Machine Learning</span>
      <div class="nest dl">
        <span class="nest-tag">Deep Learning</span>
        <div class="nest llm">
          <span class="nest-tag">Large Language Models</span>
          <div class="llm-title">LLMs</div>
          <div class="llm-sub">GPT · Claude · Gemini</div>
        </div>
      </div>
    </div>
  </div>

  <div class="fit-copy">
    <p class="lead">An LLM is a kind of deep learning, which is a kind of machine learning, which is a kind of AI.</p>
    <p>Plenty of the AI you already use every day isn't a language model at all:</p>
    <div class="sib-label">also living inside AI</div>
    <div class="sib-chips">
      <span>Recommendation systems</span>
      <span>Computer vision</span>
      <span>Speech recognition</span>
      <span>Fraud detection</span>
      <span>Robotics &amp; control</span>
    </div>
    <p class="fit-foot">And underneath all of it: the same computer science — data structures, algorithms, linear algebra, and probability.</p>
  </div>
</div>
