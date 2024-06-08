---
sidebar_position: 3
---

# Install

## Prerequisite

*kube-green* support all Kubernetes cluster versions >= 1.23 &lt;= 1.30 and OpenShift Container Platform v4.

Supported architectures are: amd64, arm64.

*kube-green* needs certificates to exposes webhooks. The recommended way to handle certificates is using the [cert-manager](https://cert-manager.io/docs/installation/). Otherwise, you can manage certificates manually as described [here](./advanced/webhook-cert-management.md).

## kubectl apply

With this method, you can not change the default configuration parameters.

The default static configuration for the latest release can be installed with:

```sh
kubectl apply -f https://github.com/kube-green/kube-green/releases/latest/download/kube-green.yaml
```

If you want to install a specific release version, run:

```sh
kubectl apply -f https://github.com/kube-green/kube-green/releases/download/${RELEASE_TAG}/kube-green.yaml
```

with `${RELEASE_TAG}` correctly filled.

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

## Operator Lifecycle Manager (OLM)

### Install from OperatorHub.io

You can find *kube-green* in the [OperatorHub.io website](https://operatorhub.io/operator/kube-green). Click the Install button, and follow the instructions.

### Install on OpenShift

*kube-green* is in the [Red Hat-provided Operator catalogs](https://docs.openshift.com/container-platform/4.9/operators/understanding/olm-rh-catalogs.html) called community operators. On OpenShift 4 you can install *kube-green* from [OperatorHub](https://docs.openshift.com/container-platform/4.9/operators/understanding/olm-understanding-operatorhub.html). To install it, follow [this guide](https://docs.openshift.com/container-platform/4.9/operators/admin/olm-adding-operators-to-cluster.html).

## Cloud compatibility

### GKE

When Google configure the control plane for private cluster, they automatically configure VPC peering between your Kubernetes cluster network and a separate Google managed project.

To restrict what Google is able to access in your cluster, the firewall rules configured restrict access to your Kubernetes pods. This means that the webhook won't work, and you see an error like `Internal error occurred: failed calling webhook ...:`

So, to use the webhook component with a GKE private cluster, you need to configure an additional firewall rule to allow the GKE control plane to access to your webhook pod.

*kube-green* uses webhook (exposed on port 9443) to check that SleepInfo CRD is valid. In order to make it works, you must open the 9443 port (or change the exposed port by configuration) otherwise it would not possible to add SleepInfo CRD.

[Here](https://cloud.google.com/kubernetes-engine/docs/how-to/private-clusters#add_firewall_rules) you can read more information about how to add firewall rules to GKE.

### AWS EKS

When using a custom CNI on EKS (such as cilium), the webhook cannot be reached by kube-green. This happens because the control plane cannot be configured to run on a custom CNI, so the CNIs differ between control plane and worker nodes.

To address this, set `hostNetwork: true` in the deployment of the webhook to run it in the host network.

To set this, uncomment the `# - host_network_patch.yaml` line ([in this file](https://github.com/kube-green/kube-green/blob/main/config/default/kustomization.yaml)) to apply the patch with the `hostNetwork: true` value.
