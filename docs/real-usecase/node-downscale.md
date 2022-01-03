---
sidebar_position: 1
---

# Cluster downscale

Here the result obtained by *kube-green* in a cluster of 75 namespaces, with *kube-green* enabled in 48 namespaces with pods in sleep in non working hours.

The configuration used is to wake up in working hours:

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

In the following images are showed 3 lines, representing request, limit and usage for memory and CPU.

Request is the amount of resource allocated (reserved by pod) in the cluster.
Limit is the amount of resource allowed to be used by pod in the cluster.
Usage is the amount of resource actually used by pod in the cluster. This is the real consumption of the pod.

### Memory usage

In this image it is possible to see the memory usage of the cluster.  

It is possible to see the memory lines with 5 peak in the working day, and a low usage and allocation of memories during the nights and the weekends.

![Memory usage](/img/usecase/15.9-15-10-memory.png)

### CPU usage

It is possible to see the same as for memory also for the CPU in the following image.  

![Memory usage](/img/usecase/15.9-15-10-CPU.png)

### Pods

In this image, the changes of the number of pods in the cluster.

![Pods](/img/usecase/15.9-15-10-pods.png)

### Numeric summary

In this table, a comparison between before and after the use of *kube-green*.

|                       | Total  | With kube-green  | Difference       |
| --------------------- | ------ | ---------------- | ---------------- |
| Number of pods        | 1050   | 450              | -600             |
| Memory consumed [Gb]  | 54     | 21               | -33              |
| CPU consumed    [cpu] | 4.5    | 1                | -3.5             |
| Memory allocated [Gb] | 75     | 30               | -45              |
| CPU allocated [cpu]   | 40     | 15               | -25              |
| CO2eq/week [kg]       | 222    | 139              | **-83**          |

As show in the table, are saved 83 Kg of CO2eq per week for this cluster. So in a year (52 weeks), the CO2eq saved is **-4316** Kg CO2eq.

### Nodes

In this use case, the resource saved are enough to downscale the number of nodes.  
The size of 1 node in this cluster is of 2 core of CPU and 8 Gb of memory.

In this image it is possible to see how changes the number of nodes in the cluster depending on time, follow the same line of the resource consumption.

![Pods](/img/usecase/15.9-15-10-nodes.png)

It is possible to see the decrease of the numbers of nodes from a maximum value of 13 to a minimum of 7. In most case, the value are between 12 and 8 nodes, so 4 nodes are stopped every night and every weekend.

This could bring to a reduction not only of the CO2 produced, but also of the cost of the cluster because in the cloud provider the cluster is usually paid with the number of nodes.

### Conclusion

In this use case, it is possible to see how much *kube-green* could save in CO2eq production and also in cost of a cluster.

Try out to your cluster, and calculate how much CO2 can you save with [this tool](./../FAQ.mdx#how-many-co2-is-produced-by-pod)!
