# Installation

*kube-green* provides various ways to install the tool.

## Prerequisite

*kube-green* supports all Kubernetes cluster versions >= 1.27 &lt;= 1.32 and OpenShift Container Platform v4.

Supported architectures are: amd64, arm64.

*kube-green* needs certificates to expose webhooks. The recommended way to handle certificates is by using the [cert-manager](https://cert-manager.io/docs/installation/). Otherwise, you can manage certificates manually as described [here](../advanced/webhook-cert-management.md).

## Default static install

With this method, you cannot change the default configuration parameters.

The default static configuration for the latest release can be installed with:

```sh
kubectl apply -f https://github.com/kube-green/kube-green/releases/latest/download/kube-green.yaml
```

## Getting started

* [kubectl apply](./install.md#kubectl-apply): install using kubectl apply and static manifest;
* [helm](./install.md#helm-chart): install *kube-green* using the helm chart; this allows customization of the installation if necessary;
* [Operator Lifecycle Manager (OLM)](./install.md#operator-lifecycle-manager-olm): it's possible to install *kube-green* with OperatorHub or, if you use OpenShift, with the OpenShift web console;
* [kustomize](./install.md#kustomize): in the *kube-green* GitHub repository, kustomize configurations are available. In this way, it's possible to release the development version and configure it by editing the files.
