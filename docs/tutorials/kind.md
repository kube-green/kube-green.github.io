---
sidebar_position: 1
---

# Usage with kind

You could try *kube-green* locally, to test how it works.

In this tutorial we will use `kind` to have a kubernetes cluster running locally, but you can use any other alternatives.

## Install tools

To follow this guide, you should have `kubectl` and `kind` installed locally.

- The kubernetes command line tool: [kubectl](https://kubernetes.io/docs/tasks/tools/#kubectl)
- [docker](https://docs.docker.com/get-docker/)
- Run kubernetes locally: [kind](https://kind.sigs.k8s.io/docs/user/quick-start/#installation)

Now you have all the tools needed, let's go!

## Create a cluster

Create a cluster with kind is very simple, just

```bash
kind create cluster --name kube-green
```

## Install the cert-manager

With this command, the latest release of *cert-manager* will be installed.

```bash
kubectl apply -f https://github.com/jetstack/cert-manager/releases/latest/download/cert-manager.yaml
```

You can check the correct *cert-manager* deploy verifying that all the pods are correctly running.

```bash
kubectl -n cert-manager get pods
```

## Install kube-green

Install *kube-green* with default static install. [Click here](../installation/index.md) to see the different install methods supported.

Install *kube-green* with this command:

```bash
kubectl apply -f https://github.com/kube-green/kube-green/releases/latest/download/kube-green.yaml
```

This command create a *kube-green* namespace and deploy a *kube-green-controller-manager*.
You can check that the pod is correctly running:

```bash
kubectl -n kube-green get pods
```

## Test usage

To test *kube-green*, we reproduce a correctly working namespace with some pod active handled by Deployment.
At this point, set the CRD and show the changes in the namespace.

### Setup namespace

So, create a namespace *sleep-test* and install two simple Deployment with replicas set to 1 and another with replicas more than 1.
In this tutorial, it is used the `davidebianchi/echo-service` service.

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

Should output something like:

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

To setup *kube-green*, the SleepInfo resource must be created in *sleepme* namespace.

The desired configuration is:

- *echo-service-replica-1* sleep
- all replicas of *echo-service-replica-4* sleep
- *do-not-sleep* pod is unchanged

At the sleep, *echo-service-replica-1* will wake up with the previous 1 replica, and *echo-service-replica-4* will wake up with 4 replicas as before.  
So, after the sleep, we expect 1 pod active and at after the wake up we still expect 6 pods active.

The *SleepInfo* could be written in this way to sleep every 5th minute and wake up every 7th minute.

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

It is possible to change the configuration in a more realistic way adding fixed interval. So, if now it's the 16:00 in Italy, for example, we could set to sleep at 16:03 and wake up at 16:05.

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

So, copy and modify the configuration file you want in a file called `sleepinfo.yaml`, and apply to the *sleepme* namespace and watch the pod in namespace

```bash
kubectl -n sleepme apply -f sleepinfo.yaml
```

And watch the pods in namespace. If you have configured `watch` command, you could use

```bash
watch kubectl -n sleepme get pods
```

otherwise

```bash
kubectl -n sleepme get pods -w
```

At the time set in the configuration for the sleep, all pods except the *do-not-sleep* should sleep. 

```markdown
NAME                            READY   STATUS    RESTARTS   AGE
do-not-sleep-5b88f75df7-wmms2   1/1     Running   0          13m
```

At the time set in the configuration for the wake up, all pods will wake up at the initial number of replicas

```markdown
NAME                                      READY   STATUS    RESTARTS   AGE
do-not-sleep-5b88f75df7-wmms2             1/1     Running   0          16m
echo-service-replica-1-6845b564c6-hbjv9   1/1     Running   0          92s
echo-service-replica-4-5f97664965-42xbs   1/1     Running   0          92s
echo-service-replica-4-5f97664965-9wbqn   1/1     Running   0          92s
echo-service-replica-4-5f97664965-c4kzf   1/1     Running   0          92s
echo-service-replica-4-5f97664965-n72tr   1/1     Running   0          92s
```
