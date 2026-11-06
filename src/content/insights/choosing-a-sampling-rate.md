---
title: Choosing a sampling rate for a control loop
description: Placeholder insight. Sample well above the closed-loop bandwidth, not just at the Nyquist rate.
publishedAt: 2026-11-04
kind: Engineering observation
tags: [sampling, control, embedded]
---

The Nyquist rate only says when a signal can be reconstructed. A control loop also loses phase to the sampling delay, so a common rule of thumb is to sample 10 to 30 times faster than the closed-loop bandwidth $\omega_b$:

$$
\omega_s = \frac{2\pi}{T} \approx (10 \text{ to } 30)\,\omega_b.
$$

```mermaid
flowchart TD
  B[Closed-loop bandwidth] --> R{"ω_s ≥ 10 ω_b?"}
  R -->|yes| OK[Delay is small]
  R -->|no| X[Faster MCU or slower loop]
```
