---
sidebar_position: 1
---

# Install

## Prerequisite

To successfully install *kube-green*, in the cluster must be installed a **cert-manager**. If it is not already installed installed, [click here](https://cert-manager.io/docs/installation/).

## Install with kustomize

### Change default configuration

You can change default configuration changing the config files.

For example, to deploy the controller in another namespace, change the file [kustomization.yaml](https://github.com/kube-green/kube-green/blob/main/config/default/kustomization.yaml#L2) with the desired namespace name.

### Deploy

To install *kube-green* in the cluster, clone the repository and run

```bash
make deploy
```

This will create a new namespace, *kube-green*, which contains the pod of the operator.

Once installed, *kube-green* uses webhook (exposed on port 9443) to check that SleepInfo CRD is valid. So, if you have a firewall rule which close port 9443, you must open it (or change the exposed port by configuration) otherwise it would not possible to add SleepInfo CRD.
