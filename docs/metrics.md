---
sidebar_position: 4
---

# Metrics

`kube-green` exposes Prometheus metrics available on port 8080 by default, exposed at the `/metrics` path.

:::note
It is possible to change the port of the exposed metrics using the `metrics-bind-address` startup variable (by default, it is set to `:8080`).
:::

In the following table the exposed metrics are listed. All the metrics are prefixed with `kube_green_`.

| Name              | Type  | Description                   |
|-------------------|-------|-------------------------------|
| current_sleepinfo | gauge | Info about SleepInfo resource, with information about the name and the position where the SleepInfo is installed |
