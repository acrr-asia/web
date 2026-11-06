---
title: System models and transfer functions
description: Placeholder article. Turning a differential equation into a transfer function and reading stability from its poles.
publishedAt: 2026-11-01
category: Robotics and Control
tags: [control, modelling, laplace-transform]
series: foundations-of-control-systems
seriesOrder: 1
---

## From a differential equation

A mass $m$ on a spring $k$ with damping $c$, pushed by a force $u(t)$, obeys

$$
m\ddot{y}(t) + c\dot{y}(t) + k y(t) = u(t).
$$

## The transfer function

With zero initial conditions, the Laplace transform turns derivatives into powers of $s$, so the ratio of output to input is

$$
G(s) = \frac{Y(s)}{U(s)} = \frac{1}{m s^2 + c s + k}.
$$

```mermaid
flowchart LR
  U["u(t)"] --> L["Laplace transform"]
  L --> G["G(s)"]
  G --> Y["Y(s)"]
  Y --> I["Inverse transform"]
  I --> y["y(t)"]
```

## Reading stability from the poles

The poles are the roots of $m s^2 + c s + k = 0$. The system is stable when every pole has a negative real part, $\operatorname{Re}(p_i) < 0$.
