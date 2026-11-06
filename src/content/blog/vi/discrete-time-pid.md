---
title: PID trong miền thời gian rời rạc
description: Bài viết tạm. Lấy mẫu luật PID để chạy trong vòng lặp chu kỳ cố định trên vi điều khiển.
publishedAt: 2026-11-05
category: Robotics and Control
tags: [control, pid, z-transform, embedded]
series: foundations-of-control-systems
seriesOrder: 3
---

## Lấy mẫu luật điều khiển

Với chu kỳ lấy mẫu $T$, tích phân trở thành tổng tích lũy và đạo hàm trở thành sai phân lùi:

$$
u_k = K_p\, e_k + K_i T \sum_{j=0}^{k} e_j + \frac{K_d}{T}\left(e_k - e_{k-1}\right).
$$

## Dạng vận tốc

Lấy $u_k$ trừ $u_{k-1}$ sẽ loại bỏ tổng tích lũy và tránh hiện tượng bão hòa tích phân khi đầu ra chạm giới hạn:

$$
\begin{aligned}
\Delta u_k ={}& K_p\,(e_k - e_{k-1}) + K_i T\, e_k \\
&+ \frac{K_d}{T}\,(e_k - 2e_{k-1} + e_{k-2}).
\end{aligned}
$$

## Một chu kỳ điều khiển

```mermaid
sequenceDiagram
  participant T as Bộ định thời
  participant A as ADC
  participant C as Bộ điều khiển
  participant P as PWM
  T->>A: ngắt mỗi chu kỳ T
  A->>C: lấy mẫu y_k
  C->>C: e_k, Δu_k, giới hạn
  C->>P: ghi u_k
```
