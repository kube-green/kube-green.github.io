---
sidebar_position: 4
---

# Configuration

In the namespace where you want to enable *kube-green*, apply the `SleepInfo` resource.
An example of `SleepInfo` is accessible [at this link](https://github.com/kube-green/kube-green/blob/main/testdata/working-hours.yml).

By default, the default managed resources are

* `Deployments`: enabled by default, it could be disabled with the `suspendDeployments` field;
* `StatefulSets`: enabled by default, it could be disabled with the `suspendStatefulSets` field;
* `CronJobs`: disabled by default, it could be enabled with the `suspendCronJobs` field.

You can manage also other resources adding [custom patches](#patches).

Check the [API reference](apireference_v1alpha1.md) for the SleepInfo CRD to understand each field.

## Patches

Patches are used to define how to change the resources so that the runtime will "sleep". The patches are applied to the resources at the sleep time and are reverted at the wake up time.

In this way, it is possible to support all the Kubernetes resources, also the ones defined through the custom resource definitions.  
<!-- TODO: anchor in html not seen. Use markdown anchor in template -->
To let *kube-green* support a custom resource, you need to define the specific `patch` for the resource inside the `SleepInfo` (the API reference is available [here](apireference_v1alpha1.md#kube-green.com/v1alpha1.Patch)) and add the permission to the ClusterRole associated to the *kube-green* manager ([here how to configure the RBAC](./installation/rbac.md)), if not already set.

## Examples

### Simple SleepInfo resource

The follow configuration sets a sleep to 20:00 and wake up to 08:00 from monday to friday (in Rome timezone) for the default managed resources.

```yaml
apiVersion: kube-green.com/v1alpha1
kind: SleepInfo
metadata:
  name: working-hours
spec:
  weekdays: "1-5"
  sleepAt: "20:00"
  wakeUpAt: "08:00"
  timeZone: "Europe/Rome"
```

### Exclude resources

The follow configuration sets a sleep to 20:00 and wake up to 08:00 from monday to friday (in Rome timezone), for the default managed resources and the `CronJobs`, excluding the `Deployment` named `api-gateway`.

```yaml
apiVersion: kube-green.com/v1alpha1
kind: SleepInfo
metadata:
  name: exclude-resources
spec:
  weekdays: "1-5"
  sleepAt: "20:00"
  wakeUpAt: "08:00"
  timeZone: "Europe/Rome"
  suspendCronJobs: true
  excludeRef:
    - apiVersion: "apps/v1"
      kind:       Deployment
      name:       api-gateway
```

### Sleep without wake up

The follow configuration sets a sleep to 20:00 from monday to friday (in Rome timezone) for the default managed resources  and the `CronJobs`. The wake up is not set, so the resources will be suspended until them will be manually changed (for example, through a redeployment).

```yaml
apiVersion: kube-green.com/v1alpha1
kind: SleepInfo
metadata:
  name: no-wakep-up
spec:
  weekdays: "1-5"
  sleepAt: "20:00"
  timeZone: "Europe/Rome"
  suspendCronJobs: true
```

### Suspend only CronJobs

The follow configuration sets a sleep to 20:00 and wake up to 08:00 on each day of the week (in Rome timezone), only for `CronJobs`, excluding the specific `CronJob` named `do-not-suspend`.

```yaml
apiVersion: kube-green.com/v1alpha1
kind: SleepInfo
metadata:
  name: suspend-cronjobs
spec:
  weekdays: "*"
  sleepAt: "20:00"
  wakeUpAt: "08:00"
  timeZone: "Europe/Rome"
  suspendCronJobs: true
  suspendDeployments: false
  suspendStatefulSets: false
  excludeRef:
    - apiVersion: "batch/v1"
      kind:       CronJob
      name:       do-not-suspend
```

### Exclude with labels

The follow configuration sets a sleep to 20:00 and wake up to 08:00 on each day of the week (in Rome timezone), for the default managed resources, excluding the resources with the label `kube-green.dev/exclude: true`.

```yaml
apiVersion: kube-green.com/v1alpha1
kind: SleepInfo
metadata:
  name: exclude-with-labels
spec:
  weekdays: "*"
  sleepAt: "20:00"
  wakeUpAt: "08:00"
  timeZone: "Europe/Rome"
  excludeRef:
    - matchLabels: 
        kube-green.dev/exclude: true
```

### Include with labels

The follow configuration sets a sleep to 20:00 and wake up to 08:00 on each day of the week (in Rome timezone), for the default and `CronJobs` resources with the label `kube-green.dev/include: true`.

```yaml
apiVersion: kube-green.com/v1alpha1
kind: SleepInfo
metadata:
  name: include-with-labels
spec:
  weekdays: "1-5"
  sleepAt: "20:00"
  wakeUpAt: "08:00"
  timeZone: "Europe/Rome"
  suspendCronJobs: true
  excludeRef:
    - matchLabels: 
        kube-green.dev/include: true
```

### Custom patches

The follow configuration sets a sleep to 20:00 and wake up to 08:00 from monday to friday (in Rome timezone) for the default managed resources, the `CronJobs` and add the support to the not managed resource `ReplicaSets`.

This is only an example on how to add custom patches to the resources. The patch in this example sets the `replicas` field to `0`. In this way, it is possible to support also some custom resources.

```yaml
apiVersion: kube-green.com/v1alpha1
kind: SleepInfo
metadata:
  name: add-replicasets-support-with-custom-patches
spec:
  weekdays: "1-5"
  sleepAt: "20:00"
  wakeUpAt: "08:00"
  timeZone: "Europe/Rome"
  suspendCronJobs: true
  patches:
    - target:
        group: apps
        kind: ReplicaSet
      patch: |-
        - path: /spec/replicas
          op: add
          value: 0
```
