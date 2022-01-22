---
sidebar_position: 3
---

# Install

## Prerequisite

*kube-green* support all cluster versions >= 1.19 <= 1.23.

To successfully install *kube-green*, in the cluster must be installed a **cert-manager**. If it is not already installed installed, [click here](https://cert-manager.io/docs/installation/).

## Install with kustomize

### Change default configuration

You can change default configuration editing the config files.

For example, to deploy the controller in another namespace, change the file [kustomization.yaml](https://github.com/kube-green/kube-green/blob/main/config/default/kustomization.yaml#L2) with the desired namespace name.

### Deploy

To install *kube-green* in the cluster, clone the repository and run

```bash
make deploy
```

This will create a new namespace, *kube-green*, which contains the pod of the operator.

## Cloud compatibility

### GKE

When Google configure the control plane for private cluster, they automatically configure VPC peering between your Kubernetes cluster network and a separate Google managed project.

To restrict what Google is able to access in your cluster, the firewall rules configured restrict access to your Kubernetes pods. This means that the webhook won't work, and you see an error like `Internal error occurred: failed calling webhook ...:`

So, to use the webhook component with a GKE private cluster, you need to configure an additional firewall rule to allow the GKE control plane to access to your webhook pod.

*kube-green* uses webhook (exposed on port 9443) to check that SleepInfo CRD is valid. In order to make it works, you must open the 9443 port (or change the exposed port by configuration) otherwise it would not possible to add SleepInfo CRD.

[Here](https://cloud.google.com/kubernetes-engine/docs/how-to/private-clusters#add_firewall_rules) you can read more information about how to add firewall rules to GKE.
