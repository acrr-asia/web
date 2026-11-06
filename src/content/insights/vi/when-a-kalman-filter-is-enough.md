---
title: Khi nào bộ lọc Kalman là đủ
description: Góc nhìn tạm. Với hệ tuyến tính và nhiễu Gauss, bộ lọc Kalman đã là tối ưu.
publishedAt: 2026-11-06
kind: Engineering observation
tags: [estimation, kalman, control]
---

Nếu hệ là tuyến tính và nhiễu có phân phối Gauss, bộ lọc Kalman cho đúng phân phối hậu nghiệm của trạng thái. Mỗi bước gồm dự đoán, rồi hiệu chỉnh bằng phép đo mới $z_k$:

$$
\begin{aligned}
\hat{x}_{k\mid k} &= \hat{x}_{k\mid k-1} + K_k\left(z_k - H\hat{x}_{k\mid k-1}\right), \\
K_k &= P_{k\mid k-1} H^\top \left(H P_{k\mid k-1} H^\top + R\right)^{-1}.
\end{aligned}
$$

```mermaid
sequenceDiagram
  participant M as Mô hình
  participant F as Bộ lọc
  participant S as Cảm biến
  M->>F: dự đoán x̂ và P
  S->>F: phép đo z
  F->>F: tính K, hiệu chỉnh x̂
  F->>M: trạng thái đã cập nhật
```

Chỉ nên dùng bộ lọc hạt hoặc bộ ước lượng học máy khi động học phi tuyến mạnh hoặc nhiễu khác xa phân phối Gauss.
