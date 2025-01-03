"use strict";(self.webpackChunkkube_green_github_io=self.webpackChunkkube_green_github_io||[]).push([[3482],{9885:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>l,default:()=>h,frontMatter:()=>i,metadata:()=>s,toc:()=>d});const s=JSON.parse('{"id":"FAQ","title":"FAQ","description":"I have a couple of nodes with low utilization, but they are not scaled down. Why?","source":"@site/docs/FAQ.mdx","sourceDirName":".","slug":"/FAQ","permalink":"/docs/FAQ","draft":false,"unlisted":false,"editUrl":"https://github.com/kube-green/kube-green.github.io/edit/main/docs/FAQ.mdx","tags":[],"version":"current","sidebarPosition":11,"frontMatter":{"sidebar_position":11},"sidebar":"tutorialSidebar","previous":{"title":"API Reference","permalink":"/docs/apireference_v1alpha1"},"next":{"title":"Adopters","permalink":"/docs/adopters"}}');var r=n(4848),o=n(8453),a=n(6097);const i={sidebar_position:11},l="FAQ",c={},d=[{value:"I have a couple of nodes with low utilization, but they are not scaled down. Why?",id:"i-have-a-couple-of-nodes-with-low-utilization-but-they-are-not-scaled-down-why",level:3},{value:"I want avoid to deploy cert-manager. What are the alternatives?",id:"i-want-avoid-to-deploy-cert-manager-what-are-the-alternatives",level:3},{value:"How many CO2 is produced by pod?",id:"how-many-co2-is-produced-by-pod",level:3},{value:"What resources are supported?",id:"what-resources-are-supported",level:3},{value:"How can I contribute to the project?",id:"how-can-i-contribute-to-the-project",level:3}];function u(e){const t={a:"a",code:"code",em:"em",h1:"h1",h3:"h3",header:"header",li:"li",p:"p",strong:"strong",ul:"ul",...(0,o.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(t.header,{children:(0,r.jsx)(t.h1,{id:"faq",children:"FAQ"})}),"\n",(0,r.jsx)(t.h3,{id:"i-have-a-couple-of-nodes-with-low-utilization-but-they-are-not-scaled-down-why",children:"I have a couple of nodes with low utilization, but they are not scaled down. Why?"}),"\n",(0,r.jsxs)(t.p,{children:["Have you set the ",(0,r.jsx)(t.a,{href:"https://github.com/kubernetes/autoscaler/tree/master/cluster-autoscaler",children:"cluster autoscaler"}),"?"]}),"\n",(0,r.jsxs)(t.p,{children:["If cluster autoscaler is set up, it should be correctly configured to scale down the nodes.\nTo see the possible issues, check the ",(0,r.jsx)(t.a,{href:"https://github.com/kubernetes/autoscaler/blob/master/cluster-autoscaler/FAQ.md#i-have-a-couple-of-nodes-with-low-utilization-but-they-are-not-scaled-down-why",children:"cluster autoscaler documentation"}),"."]}),"\n",(0,r.jsx)(t.h3,{id:"i-want-avoid-to-deploy-cert-manager-what-are-the-alternatives",children:"I want avoid to deploy cert-manager. What are the alternatives?"}),"\n",(0,r.jsxs)(t.p,{children:["You can find alternatives to cert-manager installation in the ",(0,r.jsx)(t.a,{href:"/docs/advanced/webhook-cert-management#without-cert-manager",children:"cert-manager alternatives"})," section."]}),"\n",(0,r.jsx)(t.h3,{id:"how-many-co2-is-produced-by-pod",children:"How many CO2 is produced by pod?"}),"\n",(0,r.jsx)(t.p,{children:"This calculations are based on the following assumptions:"}),"\n",(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsxs)(t.li,{children:["Emissions for cloud server using 100% green electricity: ",(0,r.jsx)(t.strong,{children:"160 Kg CO2eq / year and server"})," (from ",(0,r.jsx)(t.a,{href:"https://www.goclimate.com/blog/the-carbon-footprint-of-servers/#:~:text=Cloud%20server%20using%20100%25%20green%20electricity:%20160%20kg%20CO2e%20/%20year%20and%20server",children:"goclimate.com"}),"\n)"]}),"\n",(0,r.jsxs)(t.li,{children:["Cluster node of 2 cpu. We approximate ",(0,r.jsx)(t.strong,{children:"1 node is 1 server"})]}),"\n",(0,r.jsx)(t.li,{children:(0,r.jsx)(t.strong,{children:"15 pods per node"})}),"\n"]}),"\n",(0,r.jsxs)(t.p,{children:["With this assumption, the mean consumption of CO2 per pod in a year is 160 / 15 = ",(0,r.jsx)(t.strong,{children:"11 Kg CO2eq / year per pod"}),"."]}),"\n","\n",(0,r.jsx)(a.A,{}),"\n",(0,r.jsx)(t.h3,{id:"what-resources-are-supported",children:"What resources are supported?"}),"\n",(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.em,{children:"kube-green"})," add default support to ",(0,r.jsx)(t.code,{children:"Deployments"}),", ",(0,r.jsx)(t.code,{children:"StatefulSets"}),", and ",(0,r.jsx)(t.code,{children:"CronJobs"}),",\nbut it is possible to add support for other resources using the patches feature. More information are available\nin the ",(0,r.jsx)(t.a,{href:"/docs/configuration",children:"configuration"})," section."]}),"\n",(0,r.jsx)(t.h3,{id:"how-can-i-contribute-to-the-project",children:"How can I contribute to the project?"}),"\n",(0,r.jsx)(t.p,{children:"You can contribute to the project in many ways."}),"\n",(0,r.jsxs)(t.p,{children:["If you are using ",(0,r.jsx)(t.em,{children:"kube-green"}),", you can list as ",(0,r.jsx)(t.a,{href:"/docs/adopters",children:"adopter"}),"."]}),"\n",(0,r.jsxs)(t.p,{children:["If you have some feedback, open an issue or a discussion in the ",(0,r.jsx)(t.a,{href:"https://github.com/kube-green/kube-green",children:"GitHub repository"}),"."]}),"\n",(0,r.jsxs)(t.p,{children:["If you'd like to contribute to the code, please review the ",(0,r.jsx)(t.a,{href:"https://github.com/kube-green/kube-green/blob/main/CONTRIBUTING.md",children:"Contributing"}),"\nsection and see if there are any existing issues you can work on."]})]})}function h(e={}){const{wrapper:t}={...(0,o.R)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(u,{...e})}):u(e)}},6097:(e,t,n)=>{n.d(t,{A:()=>c});var s=n(6540),r=n(8351),o=n.n(r),a=n(4164);const i={inputCalc:"inputCalc_Frxq",inputWrapper:"inputWrapper_O3Zi",card:"card_c9eN",cardBody:"cardBody_FCxH",subTitle:"subTitle_Vwj9"};var l=n(4848);function c(){const[e,t]=s.useState(new(o())(11)),[n,r]=s.useState(new(o())(100)),[c,d]=s.useState(new(o())(100)),[p,b]=s.useState(new(o())(128)),m=s.useMemo((()=>u(e,n,c,p)),[e,n,c,p]),x=s.useMemo((()=>u(e,n,c,new(o())(0))),[e,n,c]),g=s.useMemo((()=>new(o())(m).minus(x).dividedBy(x).mul(100).toDecimalPlaces(1).abs().toString()),[x,m]);return(0,l.jsxs)("div",{className:(0,a.A)(i.card,"card"),children:[(0,l.jsx)("div",{className:"card__header",children:(0,l.jsx)("h2",{children:"CO2 Calculator"})}),(0,l.jsxs)("div",{className:"card__body",children:[(0,l.jsxs)("div",{className:i.cardBody,children:[(0,l.jsx)(h,{label:"CO2 per pods per year (kg CO2eq)",onInputChange:t,value:e}),(0,l.jsx)(h,{label:"Total number of pods",onInputChange:r,value:n}),(0,l.jsx)(h,{label:"Total pods when kube-green active",onInputChange:d,value:c}),(0,l.jsx)(h,{label:"Hour of sleep per week",onInputChange:b,value:p})]}),(0,l.jsxs)("h3",{children:["Results",(0,l.jsx)("div",{className:i.subTitle,children:"Total (Kg CO2eq/week)"})]}),(0,l.jsxs)("div",{children:[(0,l.jsxs)("b",{children:[g,"% CO2 saved"]})," ","with kube-green"]}),(0,l.jsxs)("div",{children:[(0,l.jsxs)("div",{children:["without kube-green:"," ",x.toString()]}),(0,l.jsx)("div",{children:(0,l.jsxs)("b",{children:["with kube-green:"," ",m.toString()]})})]})]})]})}const d=new(o())(7).mul(new(o())(24));function u(e,t,n,s){const r=e.dividedBy(365).dividedBy(24),o=r.mul(t.minus(n)).mul(s),a=r.mul(t).mul(d.minus(s));return o.plus(a).toDecimalPlaces(0)}function h(e){let{label:t,value:n,onInputChange:s}=e;return(0,l.jsxs)("div",{className:i.inputWrapper,children:[(0,l.jsx)("div",{children:t}),(0,l.jsx)("div",{children:(0,l.jsx)("input",{className:i.inputCalc,onChange:e=>s(new(o())(e.target.value||0)),type:"number",value:n.toString()})})]})}}}]);