"use strict";(self.webpackChunkcryptopunks=self.webpackChunkcryptopunks||[]).push([[430],{3905:(e,n,t)=>{t.d(n,{Zo:()=>u,kt:()=>m});var r=t(7294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function s(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function o(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var p=r.createContext({}),l=function(e){var n=r.useContext(p),t=n;return e&&(t="function"==typeof e?e(n):s(s({},n),e)),t},u=function(e){var n=l(e.components);return r.createElement(p.Provider,{value:n},e.children)},d={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},c=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,i=e.originalType,p=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),c=l(t),m=a,k=c["".concat(p,".").concat(m)]||c[m]||d[m]||i;return t?r.createElement(k,s(s({ref:n},u),{},{components:t})):r.createElement(k,s({ref:n},u))}));function m(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var i=t.length,s=new Array(i);s[0]=c;var o={};for(var p in n)hasOwnProperty.call(n,p)&&(o[p]=n[p]);o.originalType=e,o.mdxType="string"==typeof e?e:a,s[1]=o;for(var l=2;l<i;l++)s[l]=t[l];return r.createElement.apply(null,s)}return r.createElement.apply(null,t)}c.displayName="MDXCreateElement"},6214:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>p,contentTitle:()=>s,default:()=>d,frontMatter:()=>i,metadata:()=>o,toc:()=>l});var r=t(7462),a=(t(7294),t(3905));const i={sidebar_position:3},s=void 0,o={unversionedId:"Queries",id:"Queries",title:"Queries",description:"Sample Queries",source:"@site/docs/Queries.md",sourceDirName:".",slug:"/Queries",permalink:"/Queries",draft:!1,tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3},sidebar:"tutorialSidebar",previous:{title:"Entities",permalink:"/Entities"},next:{title:"EPNS-Push",permalink:"/EPNS-Push"}},p={},l=[{value:"Sample Queries",id:"sample-queries",level:2},{value:"Sales",id:"sales",level:3},{value:"Get Punk Data",id:"get-punk-data",level:3},{value:"Asks for a Punk",id:"asks-for-a-punk",level:3},{value:"Owner data",id:"owner-data",level:3},{value:"Male Punks",id:"male-punks",level:3}],u={toc:l};function d(e){let{components:n,...t}=e;return(0,a.kt)("wrapper",(0,r.Z)({},u,t,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"sample-queries"},"Sample Queries"),(0,a.kt)("p",null,"Below are some sample queries you can use to gather information from the CryptoPunks subgraph"),(0,a.kt)("p",null,"You can build your own queries using a ",(0,a.kt)("a",{parentName:"p",href:"https://graphiql-online.com/graphiql"},"GraphQL Explorer")," and enter your endpoint to limit the data to exactly what you need."),(0,a.kt)("h3",{id:"sales"},"Sales"),(0,a.kt)("p",null,"Description: This query fetches the sales or the last 30 days."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-graphql"},"query Last30DaysSales($timestamp_gt: String) {\n  sales(\n    orderBy: timestamp\n    orderDirection: desc\n    where: { timestamp_gt: $timestamp_gt }\n  ) {\n    id\n    to {\n      id\n    }\n    amount\n    txHash\n    timestamp\n  }\n}\n")),(0,a.kt)("p",null,"With ",(0,a.kt)("inlineCode",{parentName:"p"},"$timestamp_gt")," set like this:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-graphql"},"{\n  $timestamp_gt: Math.round(Date.now() / 1000) - 30 * 24 * 60 * 60;\n}\n")),(0,a.kt)("h3",{id:"get-punk-data"},"Get Punk Data"),(0,a.kt)("p",null,"Description: This query fetches the data for a punk such as; ",(0,a.kt)("inlineCode",{parentName:"p"},"numberOfTransfers"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"numberOfSales"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"currentAskCreated"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"currentBidCreated"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"owner"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"assignedTo"),"."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-graphql"},'{\n  punks(where: { id: "1000" }) {\n    id\n    owner {\n      id\n    }\n    assignedTo {\n      id\n    }\n    wrapped\n    currentBidCreated {\n      id\n    }\n    currentAskCreated {\n      id\n    }\n    numberOfTransfers\n    numberOfSales\n    events {\n      id\n    }\n  }\n}\n')),(0,a.kt)("h3",{id:"asks-for-a-punk"},"Asks for a Punk"),(0,a.kt)("p",null,"Description: This query fetches the asks for a punk."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-graphql"},'{\n  asks(orderDirection: desc, where: { nft: "365" }) {\n    id\n    open\n    amount\n    created {\n      blockNumber\n      timestamp\n    }\n    removed {\n      id\n      blockNumber\n      timestamp\n    }\n    from {\n      id\n    }\n  }\n}\n')),(0,a.kt)("h3",{id:"owner-data"},"Owner data"),(0,a.kt)("p",null,"Description: This query fetches the data for an owner such as; ",(0,a.kt)("inlineCode",{parentName:"p"},"asks"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"bought"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"sent"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"received"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"assigned"),"."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-graphql"},'{\n  accounts(where: { id: "0x6aeda057364cc4aad943cac04a1c149d90e10a3b" }) {\n    id\n    nftsOwned {\n      id\n    }\n    bids {\n      id\n    }\n    asks {\n      id\n      created {\n        id\n        txHash\n        timestamp\n      }\n    }\n    bought {\n      id\n      timestamp\n      nft {\n        id\n      }\n    }\n    sent {\n      id\n      nft {\n        id\n      }\n      txHash\n      timestamp\n    }\n    received {\n      id\n      nft {\n        id\n      }\n      txHash\n      timestamp\n    }\n    assigned {\n      id\n      nft {\n        id\n      }\n      timestamp\n      txHash\n    }\n  }\n}\n')),(0,a.kt)("h3",{id:"male-punks"},"Male Punks"),(0,a.kt)("p",null,"Description: This query fetches data for male Punks."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-graphql"},"{\n  punks(where: { type: male }) {\n    id\n    accessories\n    type\n  }\n}\n")))}d.isMDXComponent=!0}}]);