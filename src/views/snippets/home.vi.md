Mọi công việc trên ACRR đều theo cùng một vòng lặp: một mô hình, một dự đoán, một thí nghiệm, và cập nhật mô hình từ dữ liệu.

```mermaid
flowchart LR
  M[Mô hình] --> P[Dự đoán]
  P --> E[Thí nghiệm]
  E --> D[Dữ liệu]
  D -->|cập nhật| M
```

Bước cập nhật chính là quy tắc Bayes, $p(\theta \mid \mathcal{D}) \propto p(\mathcal{D} \mid \theta)\, p(\theta)$.
