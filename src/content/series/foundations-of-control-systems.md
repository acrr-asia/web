---
title: Foundations of Control Systems
description: Placeholder series. From system models to a feedback controller that runs on a microcontroller.
category: Robotics and Control
status: in-progress
objectives:
  - Describe a dynamic system with a transfer function
  - Judge stability from the location of the poles
  - Design and tune a PID controller
  - Implement the controller in discrete time
plannedEntries:
  - title: Frequency response and Bode plots
    description: Reading gain and phase margins from a Bode plot.
---

This placeholder series shows how a series page is organised: an overview, the learning objectives, the published parts in order and the parts still planned.

The series follows one thread, from a model of the plant to a controller running in discrete time:

```mermaid
flowchart LR
  A[1. System models] --> B[2. PID control]
  B --> C[3. Discrete-time PID]
  C -.-> D[Planned: Bode plots]
```

Everything starts from the standard second-order system, whose behaviour is set by the damping ratio $\zeta$ and the natural frequency $\omega_n$:

$$
G(s) = \frac{\omega_n^2}{s^2 + 2\zeta\omega_n s + \omega_n^2}.
$$
