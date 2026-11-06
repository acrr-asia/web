---
title: Bayes' rule in one page
description: Placeholder article. Prior, likelihood and posterior, with a coin-flipping example.
publishedAt: 2026-11-06
category: Mathematical Foundations
tags: [probability, bayesian-inference]
---

## The rule

The posterior over parameters $\theta$ after seeing data $\mathcal{D}$ combines what we believed before with how well each $\theta$ explains the data:

$$
p(\theta \mid \mathcal{D}) = \frac{p(\mathcal{D} \mid \theta)\, p(\theta)}{\int p(\mathcal{D} \mid \theta')\, p(\theta')\, \mathrm{d}\theta'}.
$$

```mermaid
flowchart LR
  P[Prior] --> M((×))
  L[Likelihood] --> M
  M --> N[Normalise]
  N --> Q[Posterior]
  Q -.->|next data| P
```

## A coin example

With a $\mathrm{Beta}(a, b)$ prior on the probability of heads and $h$ heads in $n$ flips, the posterior is again a Beta distribution:

$$
\theta \mid \mathcal{D} \sim \mathrm{Beta}(a + h,\; b + n - h).
$$
