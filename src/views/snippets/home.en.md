Every piece of work on ACRR follows the same loop: a model, a prediction, an experiment, and an update of the model from the data.

```mermaid
flowchart LR
  M[Model] --> P[Prediction]
  P --> E[Experiment]
  E --> D[Data]
  D -->|update| M
```

The update step is Bayes' rule, $p(\theta \mid \mathcal{D}) \propto p(\mathcal{D} \mid \theta)\, p(\theta)$.
