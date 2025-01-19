---
sidebar_position: 1
---

# Usage with kind

You can try *kube-green* locally to test how it works.

In this tutorial, we will use `kind` to run a Kubernetes cluster locally, but you can use any other alternatives.

## Install tools

To follow this guide, you should have `kubectl` and `kind` installed locally.

- The Kubernetes command line tool: [kubectl](https://kubernetes.io/docs/tasks/tools/#kubectl)
- [docker](https://docs.docker.com/get-docker/)
- Run Kubernetes locally: [kind](https://kind.sigs.k8s.io/docs/user/quick-start/#installation)

Now you have all the tools needed, let's go!

## Create a cluster

Creating a cluster with kind is very simple, just run:

```bash
kind create cluster --name kube-green
```

## Install the cert-manager

With this command, the latest release of *cert-manager* will be installed.

```bash
kubectl apply -f https://github.com/jetstack/cert-manager/releases/latest/download/cert-manager.yaml
```

You can check the correct *cert-manager* deployment by verifying that all the pods are running correctly.

```bash
kubectl -n cert-manager get pods
```

## Install kube-green

Install *kube-green* with the default static install. [Click here](../installation/index.md) to see the different install methods supported.

Install *kube-green* with this command:

```bash
kubectl apply -f https://github.com/kube-green/kube-green/releases/latest/download/kube-green.yaml
```

This command creates a *kube-green* namespace and deploys a *kube-green-controller-manager*.
You can check that the pod is running correctly:

```bash
kubectl -n kube-green get pods
```

## Test usage

To test *kube-green*, we will create a namespace with some active pods handled by Deployments.
At this point, set the CRD and observe the changes in the namespace.

### Setup namespace

Create a namespace *sleepme* and install two simple Deployments with replicas set to 1 and another with replicas more than 1.
In this tutorial, we use the `davidebianchi/echo-service` service.

```bash
kubectl create ns sleepme
kubectl -n sleepme create deploy echo-service-replica-1 --image=davidebianchi/echo-service
kubectl -n sleepme create deploy do-not-sleep --image=davidebianchi/echo-service
kubectl -n sleepme create deploy echo-service-replica-4 --image=davidebianchi/echo-service --replicas 4
```

You should have 6 pods running in the namespace.

```bash
kubectl -n sleepme get pods
```

The output should be something like:

```markdown
NAME                                      READY   STATUS    RESTARTS   AGE
do-not-sleep-5b88f75df7-wmms2             1/1     Running   0          107s
echo-service-replica-1-6845b564c6-zvt7x   1/1     Running   0          102s
echo-service-replica-4-5f97664965-22kmw   1/1     Running   0          115s
echo-service-replica-4-5f97664965-2x9dj   1/1     Running   0          115s
echo-service-replica-4-5f97664965-6wpb7   1/1     Running   0          115s
echo-service-replica-4-5f97664965-pcl6q   1/1     Running   0          115s
```

### Setup kube-green in application namespace

To set up *kube-green*, the SleepInfo resource must be created in the *sleepme* namespace.

The desired configuration is:

- *echo-service-replica-1* sleeps
- all replicas of *echo-service-replica-4* sleep
- *do-not-sleep* pod remains unchanged

At sleep time, *echo-service-replica-1* will wake up with 1 replica, and *echo-service-replica-4* will wake up with 4 replicas as before.  
So, after sleep, we expect 1 pod active, and after wake up, we expect 6 pods active.

The *SleepInfo* can be written in this way to sleep every 5th minute and wake up every 7th minute.

```yaml
apiVersion: kube-green.com/v1alpha1
kind: SleepInfo
metadata:
  name: sleep-test
spec:
  weekdays: "*"
  sleepAt: "*:*/5"
  wakeUpAt: "*:*/7"
  excludeRef:
    - apiVersion: "apps/v1"
      kind:       Deployment
      name:       do-not-sleep
```

It is possible to change the configuration in a more realistic way by adding a fixed interval. So, if now it's 16:00 in Italy, for example, we could set it to sleep at 16:03 and wake up at 16:05.

```yaml
apiVersion: kube-green.com/v1alpha1
kind: SleepInfo
metadata:
  name: sleep-test
spec:
  weekdays: "*"
  sleepAt: "16:03"
  wakeUpAt: "16:05"
  timeZone: "Europe/Rome"
  excludeRef:
    - apiVersion: "apps/v1"
      kind:       Deployment
      name:       do-not-sleep
```

So, copy and modify the configuration file you want in a file called `sleepinfo.yaml`, and apply it to the *sleepme* namespace

```bash
kubectl -n sleepme apply -f sleepinfo.yaml
```

And watch the pods in the namespace. If you have configured the `watch` command, you could use

```bash
watch kubectl -n sleepme get pods
```

otherwise

```bash
kubectl -n sleepme get pods -w
```

At the time set in the configuration for sleep, all pods except the *do-not-sleep* should sleep. 

```markdown
NAME                            READY   STATUS    RESTARTS   AGE
do-not-sleep-5b88f75df7-wmms2   1/1     Running   0          13m
```

At the time set in the configuration for wake up, all pods will wake up with the initial number of replicas

```markdown
NAME                                      READY   STATUS    RESTARTS   AGE
do-not-sleep-5b88f75df7-wmms2             1/1     Running   0          16m
echo-service-replica-1-6845b564c6-hbjv9   1/1     Running   0          92s
echo-service-replica-4-5f97664965-42xbs   1/1     Running   0          92s
echo-service-replica-4-5f97664965-9wbqn   1/1     Running   0          92s
echo-service-replica-4-5f97664965-c4kzf   1/1     Running   0          92s
echo-service-replica-4-5f97664965-n72tr   1/1     Running   0          92s
```
