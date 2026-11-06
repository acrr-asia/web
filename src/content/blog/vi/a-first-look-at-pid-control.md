---
title: Làm quen với bộ điều khiển PID
description: Bài viết tạm. Bộ điều khiển PID biến tín hiệu sai lệch thành tác động điều khiển như thế nào.
publishedAt: 2026-11-03
category: Robotics and Control
tags: [control, pid, feedback]
series: foundations-of-control-systems
seriesOrder: 2
---

## Luật điều khiển

Bộ điều khiển PID đo sai lệch $e(t) = r(t) - y(t)$ giữa giá trị đặt $r$ và đầu ra đo được $y$, rồi kết hợp ba thành phần thành tín hiệu điều khiển:

$$
u(t) = K_p\, e(t) + K_i \int_0^t e(\tau)\,\mathrm{d}\tau + K_d\, \frac{\mathrm{d}e(t)}{\mathrm{d}t}.
$$

Thành phần tỉ lệ phản ứng với sai lệch hiện tại, thành phần tích phân loại bỏ sai lệch tĩnh, còn thành phần vi phân làm dịu các thay đổi nhanh.

## Vòng phản hồi

```mermaid
flowchart LR
  R((r)) --> S((Σ))
  S -->|e| C[Bộ điều khiển PID]
  C -->|u| G[Đối tượng]
  G --> Y((y))
  Y -->|phản hồi| S
```

## Chỉnh tham số trong một câu

Tăng $K_p$ cho tới khi đáp ứng nhanh nhưng bắt đầu dao động, thêm $K_d$ để dập dao động, rồi thêm một chút $K_i$ để triệt tiêu sai lệch còn lại.
