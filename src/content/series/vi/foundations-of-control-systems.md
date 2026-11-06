---
title: Nền tảng hệ thống điều khiển
description: Chuỗi bài tạm. Từ mô hình hệ thống đến bộ điều khiển phản hồi chạy trên vi điều khiển.
category: Robotics and Control
status: in-progress
objectives:
  - Mô tả hệ động học bằng hàm truyền
  - Đánh giá tính ổn định từ vị trí các điểm cực
  - Thiết kế và chỉnh tham số bộ điều khiển PID
  - Hiện thực bộ điều khiển trong miền thời gian rời rạc
plannedEntries:
  - title: Đáp ứng tần số và biểu đồ Bode
    description: Đọc độ dự trữ biên độ và pha từ biểu đồ Bode.
---

Chuỗi bài tạm này cho thấy một trang series được tổ chức thế nào: phần tổng quan, mục tiêu học tập, các bài đã đăng theo thứ tự và các bài còn dự kiến.

Chuỗi bài đi theo một mạch, từ mô hình đối tượng đến bộ điều khiển chạy trong miền rời rạc:

```mermaid
flowchart LR
  A[1. Mô hình hệ thống] --> B[2. Điều khiển PID]
  B --> C[3. PID rời rạc]
  C -.-> D[Dự kiến: biểu đồ Bode]
```

Mọi thứ bắt đầu từ hệ bậc hai tiêu chuẩn, có hành vi được quyết định bởi hệ số tắt dần $\zeta$ và tần số dao động riêng $\omega_n$:

$$
G(s) = \frac{\omega_n^2}{s^2 + 2\zeta\omega_n s + \omega_n^2}.
$$
