---
title: Mô hình hệ thống và hàm truyền
description: Bài viết tạm. Biến phương trình vi phân thành hàm truyền và đọc tính ổn định từ các điểm cực.
publishedAt: 2026-11-01
category: Robotics and Control
tags: [control, modelling, laplace-transform]
series: foundations-of-control-systems
seriesOrder: 1
---

## Từ phương trình vi phân

Một khối lượng $m$ gắn với lò xo $k$ và bộ giảm chấn $c$, chịu lực tác động $u(t)$, tuân theo

$$
m\ddot{y}(t) + c\dot{y}(t) + k y(t) = u(t).
$$

## Hàm truyền

Với điều kiện đầu bằng không, phép biến đổi Laplace biến các đạo hàm thành lũy thừa của $s$, nên tỉ số giữa đầu ra và đầu vào là

$$
G(s) = \frac{Y(s)}{U(s)} = \frac{1}{m s^2 + c s + k}.
$$

```mermaid
flowchart LR
  U["u(t)"] --> L["Biến đổi Laplace"]
  L --> G["G(s)"]
  G --> Y["Y(s)"]
  Y --> I["Biến đổi ngược"]
  I --> y["y(t)"]
```

## Đọc tính ổn định từ điểm cực

Các điểm cực là nghiệm của $m s^2 + c s + k = 0$. Hệ ổn định khi mọi điểm cực có phần thực âm, $\operatorname{Re}(p_i) < 0$.
