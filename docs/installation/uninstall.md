---
sidebar_position: 10
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

## Helm Chart

To uninstall kube-green from the cluster, run:

```sh
helm uninstall RELEASE_NAME
```

where `RELEASE_NAME` is the name of the `kube-green` release currently installed.  
This command, by default, will not delete the CRDs from the cluster, which should be deleted manually.

If you have set the `crds.keep` value to *false* during the installation, also the CRDs will be deleted as well.

## Operator Lifecycle Manager (OLM)

To uninstall kube-green from the cluster, follow [this guide](https://olm.operatorframework.io/docs/tasks/uninstall-operator/).
