---
sidebar_position: 1
---

# Install

## kubectl apply

:::info
With this method, you cannot change the default configuration parameters.
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

*kube-green* will be installed in the `kube-green` namespace, and you can check the installation status by running:

```sh
kubectl get pods --namespace kube-green
```

and see when the `kube-green-controller-manager` pod is up and running.

## Helm Chart

*kube-green* has its own Helm chart which can be used to install the operator in the cluster.

### 1. Add the Helm repository

This repository is the source of kube-green charts.

```sh
helm repo add kube-green https://kube-green.github.io/helm-charts/
```

### 2. Install kube-green

To install the kube-green Helm chart, run:

```sh
helm install kube-green kube-green/kube-green --namespace kube-green --create-namespace
```

### Installation options

For a complete list of available Helm values, please visit the [Helm chart repository](https://github.com/kube-green/kube-green/tree/main/charts/kube-green).

## Operator Lifecycle Manager (OLM)

When using this installation method, you can specify any namespace. However, due to OLM's RBAC management limitations, the operator will only be able to manage default resources.

### Install from OperatorHub.io

You can find *kube-green* on [OperatorHub.io](https://operatorhub.io/operator/kube-green). Simply click the Install button and follow the provided instructions.

### Install on OpenShift

*kube-green* is available in the [Red Hat provided Operator catalogs](https://docs.openshift.com/container-platform/4.9/operators/understanding/olm-rh-catalogs.html) called community operators. On OpenShift 4, you can install *kube-green* from [OperatorHub](https://docs.openshift.com/container-platform/4.9/operators/understanding/olm-understanding-operatorhub.html). To install it, follow [this guide](https://docs.openshift.com/container-platform/4.9/operators/admin/olm-adding-operators-to-cluster.html).

## kustomize

### Change default configuration

You can change the default configuration by editing the config files.

For example, to deploy the controller in another namespace, change the file [kustomization.yaml](https://github.com/kube-green/kube-green/blob/main/config/default/kustomization.yaml#L2) with the desired namespace name.

### Deploy

To install *kube-green* in the cluster, clone the repository and run:

```bash
make deploy
```

This will create a new namespace, *kube-green*, which contains the pod of the operator.
