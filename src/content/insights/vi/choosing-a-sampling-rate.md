---
title: Chọn tần số lấy mẫu cho vòng điều khiển
description: Góc nhìn tạm. Lấy mẫu cao hơn nhiều so với băng thông vòng kín, không chỉ ở tần số Nyquist.
publishedAt: 2026-11-04
kind: Engineering observation
tags: [sampling, control, embedded]
---

Tần số Nyquist chỉ cho biết khi nào một tín hiệu có thể được khôi phục. Vòng điều khiển còn mất pha do độ trễ lấy mẫu, nên quy tắc kinh nghiệm phổ biến là lấy mẫu nhanh hơn băng thông vòng kín $\omega_b$ từ 10 đến 30 lần:

$$
\omega_s = \frac{2\pi}{T} \approx (10 \text{ đến } 30)\,\omega_b.
$$

```mermaid
flowchart TD
  B[Băng thông vòng kín] --> R{"ω_s ≥ 10 ω_b?"}
  R -->|có| OK[Độ trễ nhỏ]
  R -->|không| X[MCU nhanh hơn hoặc vòng chậm hơn]
```
