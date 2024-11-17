"use strict";(self.webpackChunkkube_green_github_io=self.webpackChunkkube_green_github_io||[]).push([[2092],{8109:(e,o,t)=>{t.r(o),t.d(o,{assets:()=>l,contentTitle:()=>a,default:()=>u,frontMatter:()=>s,metadata:()=>n,toc:()=>c});const n=JSON.parse('{"id":"installation/cloud-provider","title":"Cloud compatibility","description":"GKE","source":"@site/docs/installation/cloud-provider.md","sourceDirName":"installation","slug":"/installation/cloud-provider","permalink":"/docs/installation/cloud-provider","draft":false,"unlisted":false,"editUrl":"https://github.com/kube-green/kube-green.github.io/edit/main/docs/installation/cloud-provider.md","tags":[],"version":"current","sidebarPosition":2,"frontMatter":{"sidebar_position":2},"sidebar":"tutorialSidebar","previous":{"title":"Installation Methods","permalink":"/docs/installation/install"},"next":{"title":"RBAC","permalink":"/docs/installation/rbac"}}');var r=t(4848),i=t(8453);const s={sidebar_position:2},a="Cloud compatibility",l={},c=[{value:"GKE",id:"gke",level:2},{value:"AWS EKS",id:"aws-eks",level:2}];function d(e){const o={a:"a",code:"code",em:"em",h1:"h1",h2:"h2",header:"header",p:"p",...(0,i.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(o.header,{children:(0,r.jsx)(o.h1,{id:"cloud-compatibility",children:"Cloud compatibility"})}),"\n",(0,r.jsx)(o.h2,{id:"gke",children:"GKE"}),"\n",(0,r.jsx)(o.p,{children:"When Google configure the control plane for private cluster, they automatically configure VPC peering between your Kubernetes cluster network and a separate Google managed project."}),"\n",(0,r.jsxs)(o.p,{children:["To restrict what Google is able to access in your cluster, the firewall rules configured restrict access to your Kubernetes pods. This means that the webhook won't work, and you see an error like ",(0,r.jsx)(o.code,{children:"Internal error occurred: failed calling webhook ...:"})]}),"\n",(0,r.jsx)(o.p,{children:"So, to use the webhook component with a GKE private cluster, you need to configure an additional firewall rule to allow the GKE control plane to access to your webhook pod."}),"\n",(0,r.jsxs)(o.p,{children:[(0,r.jsx)(o.em,{children:"kube-green"})," uses webhook (exposed on port 9443) to check that SleepInfo CRD is valid. In order to make it works, you must open the 9443 port (or change the exposed port by configuration) otherwise it would not possible to add SleepInfo CRD."]}),"\n",(0,r.jsxs)(o.p,{children:[(0,r.jsx)(o.a,{href:"https://cloud.google.com/kubernetes-engine/docs/how-to/private-clusters#add_firewall_rules",children:"Here"})," you can read more information about how to add firewall rules to GKE."]}),"\n",(0,r.jsx)(o.h2,{id:"aws-eks",children:"AWS EKS"}),"\n",(0,r.jsx)(o.p,{children:"When using a custom CNI on EKS (such as cilium), the webhook cannot be reached by kube-green. This happens because the control plane cannot be configured to run on a custom CNI, so the CNIs differ between control plane and worker nodes."}),"\n",(0,r.jsxs)(o.p,{children:["To address this, set ",(0,r.jsx)(o.code,{children:"hostNetwork: true"})," in the deployment of the webhook to run it in the host network."]}),"\n",(0,r.jsxs)(o.p,{children:["To set this, uncomment the\xa0",(0,r.jsx)(o.code,{children:"# - host_network_patch.yaml"})," line (",(0,r.jsx)(o.a,{href:"https://github.com/kube-green/kube-green/blob/main/config/default/kustomization.yaml",children:"in this file"}),") to apply the patch with the ",(0,r.jsx)(o.code,{children:"hostNetwork: true"})," value."]})]})}function u(e={}){const{wrapper:o}={...(0,i.R)(),...e.components};return o?(0,r.jsx)(o,{...e,children:(0,r.jsx)(d,{...e})}):d(e)}},8453:(e,o,t)=>{t.d(o,{R:()=>s,x:()=>a});var n=t(6540);const r={},i=n.createContext(r);function s(e){const o=n.useContext(i);return n.useMemo((function(){return"function"==typeof e?e(o):{...o,...e}}),[o,e])}function a(e){let o;return o=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:s(e.components),n.createElement(i.Provider,{value:o},e.children)}}}]);