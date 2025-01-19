"use strict";(self.webpackChunkkube_green_github_io=self.webpackChunkkube_green_github_io||[]).push([[9820],{3741:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>r,contentTitle:()=>c,default:()=>h,frontMatter:()=>t,metadata:()=>l,toc:()=>o});const l=JSON.parse('{"id":"tutorials/kind","title":"Usage with kind","description":"You can try kube-green locally to test how it works.","source":"@site/docs/tutorials/kind.md","sourceDirName":"tutorials","slug":"/tutorials/kind","permalink":"/docs/tutorials/kind","draft":false,"unlisted":false,"editUrl":"https://github.com/kube-green/kube-green.github.io/edit/main/docs/tutorials/kind.md","tags":[],"version":"current","sidebarPosition":1,"frontMatter":{"sidebar_position":1},"sidebar":"tutorialSidebar","previous":{"title":"Cluster Downscale","permalink":"/docs/real-usecase/node-downscale"},"next":{"title":"Certificate Management","permalink":"/docs/advanced/webhook-cert-management"}}');var a=s(4848),i=s(8453);const t={sidebar_position:1},c="Usage with kind",r={},o=[{value:"Install tools",id:"install-tools",level:2},{value:"Create a cluster",id:"create-a-cluster",level:2},{value:"Install the cert-manager",id:"install-the-cert-manager",level:2},{value:"Install kube-green",id:"install-kube-green",level:2},{value:"Test usage",id:"test-usage",level:2},{value:"Setup namespace",id:"setup-namespace",level:3},{value:"Setup kube-green in application namespace",id:"setup-kube-green-in-application-namespace",level:3}];function d(e){const n={a:"a",br:"br",code:"code",em:"em",h1:"h1",h2:"h2",h3:"h3",header:"header",li:"li",p:"p",pre:"pre",ul:"ul",...(0,i.R)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(n.header,{children:(0,a.jsx)(n.h1,{id:"usage-with-kind",children:"Usage with kind"})}),"\n",(0,a.jsxs)(n.p,{children:["You can try ",(0,a.jsx)(n.em,{children:"kube-green"})," locally to test how it works."]}),"\n",(0,a.jsxs)(n.p,{children:["In this tutorial, we will use ",(0,a.jsx)(n.code,{children:"kind"})," to run a Kubernetes cluster locally, but you can use any other alternatives."]}),"\n",(0,a.jsx)(n.h2,{id:"install-tools",children:"Install tools"}),"\n",(0,a.jsxs)(n.p,{children:["To follow this guide, you should have ",(0,a.jsx)(n.code,{children:"kubectl"})," and ",(0,a.jsx)(n.code,{children:"kind"})," installed locally."]}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsxs)(n.li,{children:["The Kubernetes command line tool: ",(0,a.jsx)(n.a,{href:"https://kubernetes.io/docs/tasks/tools/#kubectl",children:"kubectl"})]}),"\n",(0,a.jsx)(n.li,{children:(0,a.jsx)(n.a,{href:"https://docs.docker.com/get-docker/",children:"docker"})}),"\n",(0,a.jsxs)(n.li,{children:["Run Kubernetes locally: ",(0,a.jsx)(n.a,{href:"https://kind.sigs.k8s.io/docs/user/quick-start/#installation",children:"kind"})]}),"\n"]}),"\n",(0,a.jsx)(n.p,{children:"Now you have all the tools needed, let's go!"}),"\n",(0,a.jsx)(n.h2,{id:"create-a-cluster",children:"Create a cluster"}),"\n",(0,a.jsx)(n.p,{children:"Creating a cluster with kind is very simple, just run:"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-bash",children:"kind create cluster --name kube-green\n"})}),"\n",(0,a.jsx)(n.h2,{id:"install-the-cert-manager",children:"Install the cert-manager"}),"\n",(0,a.jsxs)(n.p,{children:["With this command, the latest release of ",(0,a.jsx)(n.em,{children:"cert-manager"})," will be installed."]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-bash",children:"kubectl apply -f https://github.com/jetstack/cert-manager/releases/latest/download/cert-manager.yaml\n"})}),"\n",(0,a.jsxs)(n.p,{children:["You can check the correct ",(0,a.jsx)(n.em,{children:"cert-manager"})," deployment by verifying that all the pods are running correctly."]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-bash",children:"kubectl -n cert-manager get pods\n"})}),"\n",(0,a.jsx)(n.h2,{id:"install-kube-green",children:"Install kube-green"}),"\n",(0,a.jsxs)(n.p,{children:["Install ",(0,a.jsx)(n.em,{children:"kube-green"})," with the default static install. ",(0,a.jsx)(n.a,{href:"/docs/installation/",children:"Click here"})," to see the different install methods supported."]}),"\n",(0,a.jsxs)(n.p,{children:["Install ",(0,a.jsx)(n.em,{children:"kube-green"})," with this command:"]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-bash",children:"kubectl apply -f https://github.com/kube-green/kube-green/releases/latest/download/kube-green.yaml\n"})}),"\n",(0,a.jsxs)(n.p,{children:["This command creates a ",(0,a.jsx)(n.em,{children:"kube-green"})," namespace and deploys a ",(0,a.jsx)(n.em,{children:"kube-green-controller-manager"}),".\nYou can check that the pod is running correctly:"]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-bash",children:"kubectl -n kube-green get pods\n"})}),"\n",(0,a.jsx)(n.h2,{id:"test-usage",children:"Test usage"}),"\n",(0,a.jsxs)(n.p,{children:["To test ",(0,a.jsx)(n.em,{children:"kube-green"}),", we will create a namespace with some active pods handled by Deployments.\nAt this point, set the CRD and observe the changes in the namespace."]}),"\n",(0,a.jsx)(n.h3,{id:"setup-namespace",children:"Setup namespace"}),"\n",(0,a.jsxs)(n.p,{children:["Create a namespace ",(0,a.jsx)(n.em,{children:"sleepme"})," and install two simple Deployments with replicas set to 1 and another with replicas more than 1.\nIn this tutorial, we use the ",(0,a.jsx)(n.code,{children:"davidebianchi/echo-service"})," service."]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-bash",children:"kubectl create ns sleepme\nkubectl -n sleepme create deploy echo-service-replica-1 --image=davidebianchi/echo-service\nkubectl -n sleepme create deploy do-not-sleep --image=davidebianchi/echo-service\nkubectl -n sleepme create deploy echo-service-replica-4 --image=davidebianchi/echo-service --replicas 4\n"})}),"\n",(0,a.jsx)(n.p,{children:"You should have 6 pods running in the namespace."}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-bash",children:"kubectl -n sleepme get pods\n"})}),"\n",(0,a.jsx)(n.p,{children:"The output should be something like:"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-markdown",children:"NAME                                      READY   STATUS    RESTARTS   AGE\ndo-not-sleep-5b88f75df7-wmms2             1/1     Running   0          107s\necho-service-replica-1-6845b564c6-zvt7x   1/1     Running   0          102s\necho-service-replica-4-5f97664965-22kmw   1/1     Running   0          115s\necho-service-replica-4-5f97664965-2x9dj   1/1     Running   0          115s\necho-service-replica-4-5f97664965-6wpb7   1/1     Running   0          115s\necho-service-replica-4-5f97664965-pcl6q   1/1     Running   0          115s\n"})}),"\n",(0,a.jsx)(n.h3,{id:"setup-kube-green-in-application-namespace",children:"Setup kube-green in application namespace"}),"\n",(0,a.jsxs)(n.p,{children:["To set up ",(0,a.jsx)(n.em,{children:"kube-green"}),", the SleepInfo resource must be created in the ",(0,a.jsx)(n.em,{children:"sleepme"})," namespace."]}),"\n",(0,a.jsx)(n.p,{children:"The desired configuration is:"}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsxs)(n.li,{children:[(0,a.jsx)(n.em,{children:"echo-service-replica-1"})," sleeps"]}),"\n",(0,a.jsxs)(n.li,{children:["all replicas of ",(0,a.jsx)(n.em,{children:"echo-service-replica-4"})," sleep"]}),"\n",(0,a.jsxs)(n.li,{children:[(0,a.jsx)(n.em,{children:"do-not-sleep"})," pod remains unchanged"]}),"\n"]}),"\n",(0,a.jsxs)(n.p,{children:["At sleep time, ",(0,a.jsx)(n.em,{children:"echo-service-replica-1"})," will wake up with 1 replica, and ",(0,a.jsx)(n.em,{children:"echo-service-replica-4"})," will wake up with 4 replicas as before.",(0,a.jsx)(n.br,{}),"\n","So, after sleep, we expect 1 pod active, and after wake up, we expect 6 pods active."]}),"\n",(0,a.jsxs)(n.p,{children:["The ",(0,a.jsx)(n.em,{children:"SleepInfo"})," can be written in this way to sleep every 5th minute and wake up every 7th minute."]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-yaml",children:'apiVersion: kube-green.com/v1alpha1\nkind: SleepInfo\nmetadata:\n  name: sleep-test\nspec:\n  weekdays: "*"\n  sleepAt: "*:*/5"\n  wakeUpAt: "*:*/7"\n  excludeRef:\n    - apiVersion: "apps/v1"\n      kind:       Deployment\n      name:       do-not-sleep\n'})}),"\n",(0,a.jsx)(n.p,{children:"It is possible to change the configuration in a more realistic way by adding a fixed interval. So, if now it's 16:00 in Italy, for example, we could set it to sleep at 16:03 and wake up at 16:05."}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-yaml",children:'apiVersion: kube-green.com/v1alpha1\nkind: SleepInfo\nmetadata:\n  name: sleep-test\nspec:\n  weekdays: "*"\n  sleepAt: "16:03"\n  wakeUpAt: "16:05"\n  timeZone: "Europe/Rome"\n  excludeRef:\n    - apiVersion: "apps/v1"\n      kind:       Deployment\n      name:       do-not-sleep\n'})}),"\n",(0,a.jsxs)(n.p,{children:["So, copy and modify the configuration file you want in a file called ",(0,a.jsx)(n.code,{children:"sleepinfo.yaml"}),", and apply it to the ",(0,a.jsx)(n.em,{children:"sleepme"})," namespace"]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-bash",children:"kubectl -n sleepme apply -f sleepinfo.yaml\n"})}),"\n",(0,a.jsxs)(n.p,{children:["And watch the pods in the namespace. If you have configured the ",(0,a.jsx)(n.code,{children:"watch"})," command, you could use"]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-bash",children:"watch kubectl -n sleepme get pods\n"})}),"\n",(0,a.jsx)(n.p,{children:"otherwise"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-bash",children:"kubectl -n sleepme get pods -w\n"})}),"\n",(0,a.jsxs)(n.p,{children:["At the time set in the configuration for sleep, all pods except the ",(0,a.jsx)(n.em,{children:"do-not-sleep"})," should sleep."]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-markdown",children:"NAME                            READY   STATUS    RESTARTS   AGE\ndo-not-sleep-5b88f75df7-wmms2   1/1     Running   0          13m\n"})}),"\n",(0,a.jsx)(n.p,{children:"At the time set in the configuration for wake up, all pods will wake up with the initial number of replicas"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-markdown",children:"NAME                                      READY   STATUS    RESTARTS   AGE\ndo-not-sleep-5b88f75df7-wmms2             1/1     Running   0          16m\necho-service-replica-1-6845b564c6-hbjv9   1/1     Running   0          92s\necho-service-replica-4-5f97664965-42xbs   1/1     Running   0          92s\necho-service-replica-4-5f97664965-9wbqn   1/1     Running   0          92s\necho-service-replica-4-5f97664965-c4kzf   1/1     Running   0          92s\necho-service-replica-4-5f97664965-n72tr   1/1     Running   0          92s\n"})})]})}function h(e={}){const{wrapper:n}={...(0,i.R)(),...e.components};return n?(0,a.jsx)(n,{...e,children:(0,a.jsx)(d,{...e})}):d(e)}},8453:(e,n,s)=>{s.d(n,{R:()=>t,x:()=>c});var l=s(6540);const a={},i=l.createContext(a);function t(e){const n=l.useContext(i);return l.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:t(e.components),l.createElement(i.Provider,{value:n},e.children)}}}]);