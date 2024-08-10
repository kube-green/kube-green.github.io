---
sidebar_position: 1
---

# Installation Methods

## kubectl apply

:::info
With this method, you can not change the default configuration parameters.
:::

You need to have [kubectl](https://kubernetes.io/docs/tasks/tools/#kubectl) installed and connected to the cluster where you want to install *kube-green*.

The default static configuration for the latest release can be installed with:

```sh
kubectl apply -f https://github.com/kube-green/kube-green/releases/latest/download/kube-green.yaml
```

If you want to install a specific release version, run:

```sh
kubectl apply -f https://github.com/kube-green/kube-green/releases/download/${RELEASE_TAG}/kube-green.yaml
```

with `${RELEASE_TAG}` correctly filled.

*kube-green* will be installed in `kube-green` namespace, and it is possible to see the installation status running:

```sh
kubectl get pods --namespace kube-green
```

and see when the `kube-green-controller-manager` pod is up and running.

## Helm Chart

*kube-green* has its own Helm chart which can be used to install the operator in the cluster.

<!-- TODO: -->

## Operator Lifecycle Manager (OLM)

### Install from OperatorHub.io

You can find *kube-green* in the [OperatorHub.io website](https://operatorhub.io/operator/kube-green). Click the Install button, and follow the instructions.

### Install on OpenShift

*kube-green* is in the [Red Hat-provided Operator catalogs](https://docs.openshift.com/container-platform/4.9/operators/understanding/olm-rh-catalogs.html) called community operators. On OpenShift 4 you can install *kube-green* from [OperatorHub](https://docs.openshift.com/container-platform/4.9/operators/understanding/olm-understanding-operatorhub.html). To install it, follow [this guide](https://docs.openshift.com/container-platform/4.9/operators/admin/olm-adding-operators-to-cluster.html).

## kustomize

### Change default configuration

You can change default configuration editing the config files.

For example, to deploy the controller in another namespace, change the file [kustomization.yaml](https://github.com/kube-green/kube-green/blob/main/config/default/kustomization.yaml#L2) with the desired namespace name.

### Deploy

To install *kube-green* in the cluster, clone the repository and run

```bash
make deploy
```

This will create a new namespace, *kube-green*, which contains the pod of the operator.
