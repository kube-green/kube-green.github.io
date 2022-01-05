---
sidebar_position: 1
---

# How it works

The use of this operator is very simple. Once installed on the cluster, configure the desired CRD to make it works.  
The CRD used by `kube-green` is called **SleepInfo**. In this configuration, it is possible to configure the sleep and wake up time for the namespace.

An example of configuration is:

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
      name:       my-deployment
```

With this **SleepInfo**, called *working-hours*, namespace will be slept at 20:00 and woken up at 08:00 (Italy time zone) on weekdays (Monday to Friday).

## What resources handles?

*kube-green* handles:

- Deployment
- CronJobs

By default, on sleep, all this kind of resources are stopped.

### What means sleep and wake up a resource?

The sleep of the resource is the stop of the resource, and it depends on the type of resources.

The wake up of the resource is the restore of the status of the resource before the sleep.

#### Deployment

To sleep the *Deployment* resources, replicas are set to 0.

To wake up, the number of replicas is set to the number of replicas before the sleep.

#### CronJobs

To sleep the *CronJob* resources, is set to suspend.

To wake up, the suspend field is set to the value before the sleep.

### How state is saved across sleep and wake up?

The state of the resources before the sleep is saved in a secret with the name of the *SleepInfo* in the namespace.
