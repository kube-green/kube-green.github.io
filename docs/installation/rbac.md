---
sidebar_position: 6
---

# RBAC

Starting from *kube-green* version 0.6, it is possible to patch all types of resources writing custom patches.
To see more about this feature, check the [configuration](../configuration.md) page.

## Roles and RoleBindings

By default, *kube-green* is installed with a set of ClusterRole and a ClusterRoleBinding that allow the operator to manage the default supported resources in the cluster (*Deployment*, *CronJob* and *StatefulSet*).

To add the permission to manage other resources, it is possible to aggregate custom rules to the default ClusterRole, using the [Kubernetes Aggregated ClusterRoles feature](https://kubernetes.io/docs/reference/access-authn-authz/rbac/#aggregated-clusterroles) setting the `kube-green.dev/aggregate-to-manager: "true"` label (which is used to aggregate the ClusterRole).

### Example

The following example shows how to create a ClusterRole that allows the operator to manage ReplicaSets resources. For each resource, you need to add at least the following verbs: `get`, `list`, `patch`, `update`, `watch`.
<!-- TODO: verify that create and delete verbs can be not set -->

```yaml
apiVersion: rbac.authorization.k8s.io/v1
kind: ClusterRole
metadata:
  labels:
    kube-green.dev/aggregate-to-manager: "true"
  name: kube-green-replicasets-aggregate-to-manager
rules:
- apiGroups:
  - apps
  resources:
  - replicasets
  verbs:
  - create # TODO: verify if this is necessary
  - delete # TODO: verify if this is necessary
  - get
  - list
  - patch
  - update
  - watch
```

## ClusterRole with Helm Chart

<!-- TODO: -->
