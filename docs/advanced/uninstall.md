---
sidebar_position: 2
---

# Uninstall

To uninstall the operator from the cluster, change working directory to the root of *kube-green* repository, and run:

```bash
make undeploy
```

:::caution
If you run undeploy command, the namespace of *kube-green* (by default `kube-green`), will be deleted.
:::
