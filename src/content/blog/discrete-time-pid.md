---
title: Discrete-time PID
description: Placeholder article. Sampling the PID law so it can run in a fixed-period loop on a microcontroller.
publishedAt: 2026-11-05
category: Robotics and Control
tags: [control, pid, z-transform, embedded]
series: foundations-of-control-systems
seriesOrder: 3
---

## Sampling the control law

With a sampling period $T$, the integral becomes a running sum and the derivative a backward difference:

$$
u_k = K_p\, e_k + K_i T \sum_{j=0}^{k} e_j + \frac{K_d}{T}\left(e_k - e_{k-1}\right).
$$

## The velocity form

Subtracting $u_{k-1}$ from $u_k$ removes the sum and avoids integrator wind-up when the output saturates:

$$
\begin{aligned}
\Delta u_k ={}& K_p\,(e_k - e_{k-1}) + K_i T\, e_k \\
&+ \frac{K_d}{T}\,(e_k - 2e_{k-1} + e_{k-2}).
\end{aligned}
$$

## One control period

```mermaid
sequenceDiagram
  participant T as Timer
  participant A as ADC
  participant C as Controller
  participant P as PWM
  T->>A: tick every T
  A->>C: sample y_k
  C->>C: e_k, Δu_k, clamp
  C->>P: write u_k
```
