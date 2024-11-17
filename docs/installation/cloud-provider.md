---
sidebar_position: 2
---

# Cloud compatibility

## GKE

When Google configure the control plane for private cluster, they automatically configure VPC peering between your Kubernetes cluster network and a separate Google managed project.

To restrict what Google is able to access in your cluster, the firewall rules configured restrict access to your Kubernetes pods. This means that the webhook won't work, and you see an error like `Internal error occurred: failed calling webhook ...:`

So, to use the webhook component with a GKE private cluster, you need to configure an additional firewall rule to allow the GKE control plane to access to your webhook pod.

*kube-green* uses webhook (exposed on port 9443) to check that SleepInfo CRD is valid. In order to make it works, you must open the 9443 port (or change the exposed port by configuration) otherwise it would not possible to add SleepInfo CRD.

[Here](https://cloud.google.com/kubernetes-engine/docs/how-to/private-clusters#add_firewall_rules) you can read more information about how to add firewall rules to GKE.

## AWS EKS

When using a custom CNI on EKS (such as cilium), the webhook cannot be reached by kube-green. This happens because the control plane cannot be configured to run on a custom CNI, so the CNIs differ between control plane and worker nodes.

To address this, set `hostNetwork: true` in the deployment of the webhook to run it in the host network.

To set this, uncomment the `# - host_network_patch.yaml` line ([in this file](https://github.com/kube-green/kube-green/blob/main/config/default/kustomization.yaml)) to apply the patch with the `hostNetwork: true` value.
