---
sidebar_position: 1
---

# Small Cluster

Below are the results obtained using *kube-green* in a small development cluster of 15 namespaces (only enabled in the 3 biggest namespaces).

The configuration used is to wake up during working hours:

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
  excludeRef:
    - apiVersion: "apps/v1"
      kind:       Deployment
      name:       api-gateway
```

Below are the results with *kube-green* running for two weeks.

In the images, there are 3 lines representing request, limit, and usage for memory and CPU.

Request is the amount of resource allocated (reserved by pod) in the cluster.
Limit is the amount of resource allowed to be used by the pod in the cluster.
Usage is the amount of resource actually used by the pod in the cluster. This is the real consumption of the pod.

### Memory Usage

In this image, it is possible to see the memory usage of the cluster.  
Before *kube-green*, the memory usage, request, and limit are linear.

After *kube-green*, it is possible to see the memory lines with 5 peaks during the working day, and a low usage and allocation of memory during the nights and weekends.

![Memory usage](/img/usecase/23.7-23-8-memory.png)

### CPU Usage

It is possible to see the same pattern for CPU usage in the following image.  

![CPU usage](/img/usecase/23.7-23-8-CPU.png)

### Numeric Summary

In this table, a comparison between before and after the use of *kube-green*.

|                       | Total  | With kube-green  | Difference       |
| --------------------- | ------ | ---------------- | ---------------- |
| Number of pods        | 446    | 205              | 241              |
| Memory consumed [Gb]  | 28     | 16               | 12               |
| CPU consumed    [cpu] | 2      | 1.3              | 0.7              |
| Memory allocated [Gb] | 34     | 22               | 12               |
| CPU allocated [cpu]   | 14     | 12               | 2                |
| CO2eq/week [kg]       | 94     | 66               | **28**           |

As shown in the table, 28 Kg of CO2eq are saved per week for this cluster. So in a year (52 weeks), the CO2eq saved is **-1456** Kg CO2eq.

### Conclusion

It is possible to see how much *kube-green* affects the use of resources in a small cluster.

In this use case, the cluster nodes do not downscale because the unused resources are not enough.

[Click here](./node-downscale.md) to see a wider use case, and see how much it can reduce the use of resources and lead to the downscale of the nodes of a cluster.
