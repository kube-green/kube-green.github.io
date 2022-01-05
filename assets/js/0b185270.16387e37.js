"use strict";(self.webpackChunkkube_green_github_io=self.webpackChunkkube_green_github_io||[]).push([[885],{1824:function(e,t,n){n.d(t,{Z:function(){return p}});var a=n(7294),r=n(9887),o=n.n(r),l=n(6010),u="inputCalc_F3lj",i="inputWrapper_U0kh",s="card_NcNg",c="cardBody_pHtg",d="subTitle_qnpF";function p(){var e=a.useState(new(o())(11)),t=e[0],n=e[1],r=a.useState(new(o())(100)),u=r[0],i=r[1],p=a.useState(new(o())(100)),m=p[0],v=p[1],f=a.useState(new(o())(128)),g=f[0],w=f[1],k=a.useMemo((function(){return h(t,u,m,g)}),[t,u,m,g]),y=a.useMemo((function(){return h(t,u,m,new(o())(0))}),[t,u,m]);return a.createElement("div",{className:(0,l.Z)(s,"card")},a.createElement("div",{className:"card__header"},a.createElement("h2",null,"CO2 Calculator")),a.createElement("div",{className:"card__body"},a.createElement("div",{className:c},a.createElement(b,{label:"CO2 per pods per year (kg CO2eq)",onInputChange:n,value:t}),a.createElement(b,{label:"Total number of pods",onInputChange:i,value:u}),a.createElement(b,{label:"Pods sleeped",onInputChange:v,value:m}),a.createElement(b,{label:"Hour of sleep per week",onInputChange:w,value:g})),a.createElement("h3",null,"Results",a.createElement("div",{className:d},"Total (Kg CO2eq/week)")),a.createElement("div",null,a.createElement("div",null,"without kube-green:"," ",y.toString()),a.createElement("div",null,a.createElement("b",null,"with kube-green:"," ",k.toString())),a.createElement("div",null,a.createElement("b",null,"Difference:"," ",k.minus(y).toString())))))}var m=new(o())(7).mul(new(o())(24));function h(e,t,n,a){var r=e.dividedBy(365).dividedBy(24),o=r.mul(t.minus(n)).mul(a),l=r.mul(t).mul(m.minus(a));return o.plus(l).toDecimalPlaces(0)}function b(e){var t=e.label,n=e.value,r=e.onInputChange;return a.createElement("div",{className:i},a.createElement("div",null,t),a.createElement("div",null,a.createElement("input",{className:u,onChange:function(e){return r(new(o())(e.target.value||0))},type:"number",value:n.toString()})))}},3577:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return i},contentTitle:function(){return s},metadata:function(){return c},toc:function(){return d},default:function(){return m}});var a=n(3117),r=n(102),o=(n(7294),n(3905)),l=n(1824),u=["components"],i={sidebar_position:11},s="FAQ",c={unversionedId:"FAQ",id:"FAQ",title:"FAQ",description:"I have a couple of nodes with low utilization, but they are not scaled down. Why?",source:"@site/docs/FAQ.mdx",sourceDirName:".",slug:"/FAQ",permalink:"/docs/FAQ",editUrl:"https://github.com/kube-green/kube-green.github.io/edit/main/docs/FAQ.mdx",tags:[],version:"current",sidebarPosition:11,frontMatter:{sidebar_position:11},sidebar:"tutorialSidebar",previous:{title:"API Reference",permalink:"/docs/apireference_v1alpha1"}},d=[{value:"I have a couple of nodes with low utilization, but they are not scaled down. Why?",id:"i-have-a-couple-of-nodes-with-low-utilization-but-they-are-not-scaled-down-why",children:[],level:3},{value:"How many CO2 is produced by pod?",id:"how-many-co2-is-produced-by-pod",children:[],level:3}],p={toc:d};function m(e){var t=e.components,n=(0,r.Z)(e,u);return(0,o.kt)("wrapper",(0,a.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"faq"},"FAQ"),(0,o.kt)("h3",{id:"i-have-a-couple-of-nodes-with-low-utilization-but-they-are-not-scaled-down-why"},"I have a couple of nodes with low utilization, but they are not scaled down. Why?"),(0,o.kt)("p",null,"Have you set the ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/kubernetes/autoscaler/tree/master/cluster-autoscaler"},"cluster autoscaler"),"?"),(0,o.kt)("p",null,"If cluster autoscaler is set up, it should be correctly configured to scale down the nodes.\nTo see the possible issues, check the ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/kubernetes/autoscaler/blob/master/cluster-autoscaler/FAQ.md#i-have-a-couple-of-nodes-with-low-utilization-but-they-are-not-scaled-down-why"},"cluster autoscaler documentation"),"."),(0,o.kt)("h3",{id:"how-many-co2-is-produced-by-pod"},"How many CO2 is produced by pod?"),(0,o.kt)("p",null,"This calculations are based on the following assumptions:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Emissions for cloud server using 100% green electricity: ",(0,o.kt)("strong",{parentName:"li"},"160 Kg CO2eq / year and server")," (from ",(0,o.kt)("a",{parentName:"li",href:"https://www.goclimate.com/blog/the-carbon-footprint-of-servers/#:~:text=Cloud%20server%20using%20100%25%20green%20electricity:%20160%20kg%20CO2e%20/%20year%20and%20server"},"goclimate.com"),"\n)"),(0,o.kt)("li",{parentName:"ul"},"Cluster node of 2 cpu. We approximate ",(0,o.kt)("strong",{parentName:"li"},"1 node is 1 server")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"15 pods per node"))),(0,o.kt)("p",null,"With this assumption, the mean consumption of CO2 per pod in a year is 160 / 15 = ",(0,o.kt)("strong",{parentName:"p"},"11 Kg CO2eq / year per pod"),"."),(0,o.kt)(l.Z,{mdxType:"ConsumptionCalculator"}))}m.isMDXComponent=!0}}]);