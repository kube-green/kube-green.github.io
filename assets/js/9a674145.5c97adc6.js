"use strict";(self.webpackChunkkube_green_github_io=self.webpackChunkkube_green_github_io||[]).push([[7846],{2569:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>l,contentTitle:()=>r,default:()=>d,frontMatter:()=>i,metadata:()=>a,toc:()=>c});var o=s(5893),t=s(1151);const i={slug:"welcome-blog-post",title:"Intro to kube-green",authors:["davidebianchi"],tags:["kube-green","introduction"]},r=void 0,a={permalink:"/blog/welcome-blog-post",editUrl:"https://github.com/kube-green/kube-green.github.io/edit/main/blog/blog/2022-01-05-first-blog-post.mdx",source:"@site/blog/2022-01-05-first-blog-post.mdx",title:"Intro to kube-green",description:"Welcome to kube-green blog!",date:"2022-01-05T00:00:00.000Z",formattedDate:"January 5, 2022",tags:[{label:"kube-green",permalink:"/blog/tags/kube-green"},{label:"introduction",permalink:"/blog/tags/introduction"}],readingTime:2.175,hasTruncateMarker:!1,authors:[{name:"Davide Bianchi",title:"Creator of kube-green",url:"https://github.com/davidebianchi",imageURL:"https://github.com/davidebianchi.png",key:"davidebianchi"}],frontMatter:{slug:"welcome-blog-post",title:"Intro to kube-green",authors:["davidebianchi"],tags:["kube-green","introduction"]},unlisted:!1,prevItem:{title:"Announcing kube-green rebranding",permalink:"/blog/kube-green-rebranding"}},l={authorsImageUrls:[void 0]},c=[{value:"Environmental impact",id:"environmental-impact",level:2},{value:"The idea of kube-green",id:"the-idea-of-kube-green",level:2},{value:"How it is possible?",id:"how-it-is-possible",level:3},{value:"What resources can you suspend?",id:"what-resources-can-you-suspend",level:2},{value:"Conclusion",id:"conclusion",level:2}];function u(e){const n={a:"a",br:"br",code:"code",em:"em",h2:"h2",h3:"h3",img:"img",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,t.a)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsxs)(n.p,{children:["Welcome to ",(0,o.jsx)(n.em,{children:"kube-green"})," blog!"]}),"\n",(0,o.jsxs)(n.p,{children:["In this blog, we'll introduce the new features of ",(0,o.jsx)(n.em,{children:"kube-green"}),", and give you some other information about ",(0,o.jsx)(n.em,{children:"kube-green"}),"."]}),"\n",(0,o.jsx)(n.p,{children:"In this first tutorial, I will try to explain how it was born and why it is useful for reducing waste of resources."}),"\n",(0,o.jsx)(n.h2,{id:"environmental-impact",children:"Environmental impact"}),"\n",(0,o.jsxs)(n.p,{children:["Everything we do online has an impact on the real world environment.",(0,o.jsx)(n.br,{}),"\n","From the emails in our inboxes to photos and videos on the cloud, from online games to digital currency, all this digital activity run on physical servers that constantly use energy."]}),"\n",(0,o.jsx)(n.p,{children:"Just some examples:"}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsxs)(n.li,{children:["minecraft all time emissions are about 600 million Kg of CO2, equivalent to drive at about 2,1 billion of km (",(0,o.jsx)(n.a,{href:"https://www.saveonenergy.com/uk/environmental-impact-of-video-games/",children:"reference"}),")"]}),"\n",(0,o.jsxs)(n.li,{children:["bitcoin produces between 22 and 22.9 million metric tons of carbon dioxide emissions a year, or between the levels produced by Jordan and Sri Lanka (",(0,o.jsx)(n.a,{href:"https://www.reuters.com/technology/how-big-is-bitcoins-carbon-footprint-2021-05-13/",children:"reference"}),")"]}),"\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.a,{href:"https://thanks-in-advance.com/",children:"here"})," it is possible to see how much emissions our emails generate"]}),"\n"]}),"\n",(0,o.jsx)(n.p,{children:"The Kubernetes clusters are not an exception. Also if they run in a cloud provider far from us they produces CO2, also if not used."}),"\n",(0,o.jsx)(n.h2,{id:"the-idea-of-kube-green",children:"The idea of kube-green"}),"\n",(0,o.jsxs)(n.p,{children:["In a cluster, non production namespaces are usually used only during business hours.",(0,o.jsx)(n.br,{}),"\n","The business hours are around 40 hours per week, respect the total number of weekly hours which are 168.",(0,o.jsx)(n.br,{}),"\n","Also, in Kubernetes the resources could be allocated (both CPU and memory, setting the request of a container) also if not used. This means most of the time the pods in these namespaces are unnecessarily consuming resources."]}),"\n",(0,o.jsxs)(n.p,{children:["The basic idea of ",(0,o.jsx)(n.em,{children:"kube-green"})," is to stop all pods in those namespaces."]}),"\n",(0,o.jsx)(n.p,{children:(0,o.jsx)(n.img,{alt:"kube-green idea",src:s(8763).Z+"",width:"2502",height:"1406"})}),"\n",(0,o.jsx)(n.h3,{id:"how-it-is-possible",children:"How it is possible?"}),"\n",(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.em,{children:"kube-green"})," is a Kubernetes controller, which define a Custom Resource Definition called ",(0,o.jsx)(n.em,{children:"SleepInfo"}),". ",(0,o.jsx)(n.em,{children:"SleepInfo"})," CRD define when stop and restart the pods in a namespace."]}),"\n",(0,o.jsx)(n.p,{children:"So, for example in development namespaces, it is possible to stop all the pods in non business hours: wake up every morning from monday to friday and stop every night from monday to friday."}),"\n",(0,o.jsxs)(n.p,{children:["An example of ",(0,o.jsx)(n.em,{children:"SleepInfo"})," CRD to make it is:"]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-yaml",children:'apiVersion: kube-green.com/v1alpha1\nkind: SleepInfo\nmetadata:\n  name: working-hours\nspec:\n  weekdays: "1-5"\n  sleepAt: "20:00"\n  wakeUpAt: "08:00"\n  timeZone: "Europe/Rome"\n  suspendCronJobs: true\n'})}),"\n",(0,o.jsx)(n.h2,{id:"what-resources-can-you-suspend",children:"What resources can you suspend?"}),"\n",(0,o.jsxs)(n.p,{children:["At the time of this post, with ",(0,o.jsx)(n.em,{children:"kube-green"})," at ",(0,o.jsx)(n.a,{href:"https://github.com/kube-green/kube-green/tree/v0.2.0",children:"v0.2.0"}),", it is possible to sleep only ",(0,o.jsx)(n.strong,{children:"Deployment"}),".\nOther resources will be added in the future.",(0,o.jsx)(n.br,{}),"\n","If you need some particular resources, write it in ",(0,o.jsx)(n.a,{href:"https://github.com/kube-green/kube-green/issues/77",children:"this issue"})," to set it in roadmap!"]}),"\n",(0,o.jsx)(n.h2,{id:"conclusion",children:"Conclusion"}),"\n",(0,o.jsx)(n.p,{children:"Do you want to reduce the CO2 emissions and costs of your Kubernetes cluster?"}),"\n",(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.a,{href:"/docs/getting-started",children:"Read our documentation"})," to install ",(0,o.jsx)(n.strong,{children:"kube-green"})," in your cluster!"]})]})}function d(e={}){const{wrapper:n}={...(0,t.a)(),...e.components};return n?(0,o.jsx)(n,{...e,children:(0,o.jsx)(u,{...e})}):u(e)}},8763:(e,n,s)=>{s.d(n,{Z:()=>o});const o=s.p+"assets/images/idea-0ecbdfbe6704442e7d6439fa6d5df12f.png"},1151:(e,n,s)=>{s.d(n,{Z:()=>a,a:()=>r});var o=s(7294);const t={},i=o.createContext(t);function r(e){const n=o.useContext(i);return o.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:r(e.components),o.createElement(i.Provider,{value:n},e.children)}}}]);