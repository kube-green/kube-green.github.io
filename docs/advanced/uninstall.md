---
sidebar_position: 2
---

# Uninstall

:::caution
To uninstall *kube-green*, you should always use the same process for installing but in reverse.
:::

Before continuing, ensure that there are not *kube-green* resources in the cluster.  
You can check it with the following command:

```sh
kubectl get SleepInfo --all-namespaces
```

## kubectl

:::caution
The uninstall commands below will delete all *kube-green* CRD in the cluster.  
If you run undeploy command, the namespace of *kube-green* (by default `kube-green`), will be deleted.
:::

You can uninstall it using the kubectl `delete` command.

Delete the installation manifests using a link to your currently running *kube-green* version:

```sh
https://github.com/kube-green/kube-green/releases/download/${RELEASE_TAG}/kube-green.yaml
```

where `${RELEASE_TAG}` is the tag of the release currently running.

## kustomize

:::caution
The uninstall commands below will delete all *kube-green* CRD in the cluster.  
If you run undeploy command, the namespace of *kube-green* (by default `kube-green`), will be deleted.
:::

To uninstall kube-green from the cluster, change working directory to the root of *kube-green* repository, and run:

```bash
make undeploy
```

## Operator Lifecycle Manager (OLM)

To uninstall kube-green from the cluster, follow [this guide](https://olm.operatorframework.io/docs/tasks/uninstall-operator/).
