---
sidebar_position: 2
---

# How it works

The use of `kube-green` is very simple. Once installed on the cluster, configure the desired CRD to make it work.  
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

With this **SleepInfo**, called *working-hours*, the namespace will be slept at 20:00 and woken up at 08:00 (Italy time zone) on weekdays (Monday to Friday).

## What resources are handled?

*kube-green* handles:

- Deployment
- CronJobs
- StatefulSet

By default, on sleep, deployment and statefulset resources are stopped (if not excluded).  
If you want to suspend cronjobs as well, set **suspendCronJobs** to **true**.

### What does it mean to sleep and wake up a resource?

The sleep of the resource is the stop of the resource, and it depends on the type of resource.

The wake up of the resource is the restoration of the status of the resource before the sleep.

#### Deployment and StatefulSet

To sleep the *Deployment* and *StatefulSet* resources, replicas are set to 0.

To wake up, the number of replicas is set to the number of replicas before the sleep.

#### CronJobs

To sleep the *CronJob* resources, they are set as suspended.

To wake up, the suspend field is restored.

### How is the state saved across sleep and wake up?

The state of the resources before the sleep is saved in a secret with the name of the *SleepInfo* resource in the namespace.
