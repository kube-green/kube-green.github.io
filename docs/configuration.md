---
sidebar_position: 4
---

# Configuration

In the namespace where you want to enable *kube-green*, apply the SleepInfo CRD.
An example of CRD is accessible [at this link](https://github.com/kube-green/kube-green/blob/main/testdata/working-hours.yml).

The SleepInfo spec contains:

* **weekdays**: day of the week. `*` is every day, `1` is monday, `1-5` is from monday to friday
* **sleepAt**: time in hours and minutes (HH:mm) when namespace will go to sleep. Valid values are, for example, 19:00or `*:*` for every minute and every hour. Resources sleep will be deployments (setting replicas value to 0) and, if `suspendCronjobs` option is set to true, cron jobs will be suspended.
* **wakeUpAt** (*optional*): time in hours and minutes (HH:mm) when namespace should be restored to the initial state (before sleep). Valid values are, for example, 19:00or `*:*` for every minute and every hour. If wake up value is not set, pod in namespace will not be restored. So, you will need to deploy the initial namespace configuration to restore it.
* **timeZone** (*optional*): time zone in IANA specification. For example for italian hour, set `Europe/Rome`.
* **suspendCronJobs** (*optional*): if set to true, cronjobs will be suspended.
* **excludeRef** (*optional*): an array of object containing the resource to exclude from sleep. It contains:
  * **apiVersion**: version of the resource. Now it is supported *"apps/v1"*, *"batch/v1beta1"* and *"batch/v1"*
  * **kind**: the kind of resource. Now it is supported *"Deployment"* and *"CronJob"*
  * **name**: the name of the resource

## Examples

### Simplest SleepInfo resource

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

With this CRD, it's configured a sleep to 20:00 and wake up to 08:00 on weekdays only for Deployments.

### Complete SleepInfo resource

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
  suspendCronJobs: true
  excludeRef:
    - apiVersion: "apps/v1"
      kind:       Deployment
      name:       api-gateway
```

With this CRD, it's configured a sleep to 20:00 and wake up to 08:00 on weekdays, for Deployments and CronJobs, excluding the Deployment named api-gateway.

### Complete SleepInfo without wake up

```yaml
apiVersion: kube-green.com/v1alpha1
kind: SleepInfo
metadata:
  name: working-hours
spec:
  weekdays: "1-5"
  sleepAt: "20:00"
  timeZone: "Europe/Rome"
  suspendCronJobs: true
  excludeRef:
    - apiVersion: "apps/v1"
      kind:       Deployment
      name:       api-gateway
```

With this CRD, it's configured a sleep to 20:00 on weekdays, for Deployments and CronJobs, excluding the Deployment named api-gateway. To wake up, you must redeploy all the resources to set to the initial state.
