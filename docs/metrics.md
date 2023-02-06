---
sidebar_position: 4
---

# Metrics

`kube-green` exposes Prometheus metrics available on port 8080 by default, exposed with `/metrics` path.

:::note
It is possible change the port of the exposed metrics using the `metrics-bind-address` startup variable (by default, it is set to `:8080`).
:::

In the following table, are listed the exposed metrics. All the metrics are prefixed with `kube_green_`.

| Name              | Type  | Description                   |
|-------------------|-------|-------------------------------|
| current_sleepinfo | gauge | Info about SleepInfo resource, with information about the name and the position where the SleepInfo is installed |
