"use strict";(self.webpackChunkledgerely_com=self.webpackChunkledgerely_com||[]).push([[194,8],{6283:(e,a,t)=>{t.r(a),t.d(a,{DraggerText:()=>E,NoContent:()=>R,default:()=>I});var s=t(9950),r=t(4570),n=t(2272),l=t(2436),i=t(1308),d=t(3027),o=t(9288),c=t(9051),h=t.n(c),m=t(8311),u=t(8002),p=t(4414);const x=e=>{let{width:a,recentData:t,intlHeader:s}=e;return(0,p.jsx)("div",{className:"pb-2",children:(0,p.jsxs)("div",{children:[(0,p.jsx)("div",{className:"fs-6 py-2",children:(0,p.jsx)(E,{children:(0,p.jsx)(d.A,{id:s,defaultMessage:s})})}),(null===t||void 0===t?void 0:t.length)>0&&(0,p.jsx)(u.VerticalBarChart,{width:a,height:150,data:t,marginLeft:50,marginBottom:0,marginTop:20,showXaxis:!1,showYaxis:!0,showYaxisLabel:!1,padding:.75,yTicks:4,style:{maxWidth:"100%",boxShadow:"none"},showAnimation:!1,fontSize:10}),0===(null===t||void 0===t?void 0:t.length)&&(0,p.jsx)(R,{})]})})};var b=t(6781),g=t(8459),f=t(3276),j=t(2083);const y=e=>{let{totalHoldings:a,theme:t}=e;const[r,n]=(0,s.useState)(!1);return(0,p.jsxs)(f.A,{className:"dashboardCard border-"+("dark"===t?"dark":"1"),children:[(0,p.jsx)(f.A.Body,{className:"bni-bg rounded-top text-center p-4",children:(0,p.jsx)("div",{className:"d-flex align-items-center justify-content-center h-100 p-3",children:(0,p.jsx)("div",{className:"fs-6 py-1",children:(0,p.jsx)("i",{className:"fa fa-3x fa-cubes d-block"})})})}),(0,p.jsx)(f.A.Body,{className:"text-center",children:(0,p.jsxs)("div",{className:"d-flex align-items-center justify-content-between",children:[(0,p.jsx)("span",{style:r?{}:{filter:"blur(5px)"},children:j.A.countryCurrencyLacSeperator(a[0].locale,a[0].currency,v(a[0].data,"Balance"))}),(0,p.jsx)("i",{className:`fa fa-eye${r?"":"-slash"} cursor-pointer`,onClick:()=>n(!r)})]})})]})},N=e=>{let{bank:a,theme:t}=e;const[r,n]=(0,s.useState)(!1);return(0,p.jsxs)(f.A,{className:"dashboardCard border-"+("dark"===t?"dark":"1"),children:[(0,p.jsxs)(f.A.Body,{className:"bni-bg rounded-top text-center",children:[(0,p.jsx)("i",{className:"fa fa-3x fa-bank"}),(0,p.jsx)("div",{className:"fs-6 py-1",children:(0,p.jsx)("span",{className:"badge bg-dark",children:a.Bank})}),(0,p.jsx)("div",{className:"small",children:a.BankAccountNumber})]}),(0,p.jsx)(f.A.Body,{children:(0,p.jsxs)("div",{className:"d-flex align-items-center justify-content-between",children:[(0,p.jsx)("span",{style:r?{}:{filter:"blur(5px)"},children:j.A.countryCurrencyLacSeperator(a.Locale,a.Currency,Number(a.Balance,2))}),(0,p.jsx)("i",{className:`fa fa-eye${r?"":"-slash"} cursor-pointer`,onClick:()=>n(!r)})]})})]})},C=e=>{let{ccOut:a}=e;const[t,r]=(0,s.useState)(!1);return(0,p.jsxs)(f.A,{className:"bni-border bni-border-all bni-border-all-1 mb-2",children:[(0,p.jsx)(f.A.Body,{className:"bni-bg rounded-top p-2",children:a.cardName}),(0,p.jsx)(f.A.Body,{className:"p-2 rounded-bottom",children:(0,p.jsxs)("div",{className:"d-flex align-items-center justify-content-between",children:[(0,p.jsx)("span",{style:t?{}:{filter:"blur(5px)"},children:j.A.countryCurrencyLacSeperator(a.Locale,a.Currency,a.total)}),(0,p.jsx)("i",{className:`fa fa-eye${t?"":"-slash"} cursor-pointer`,onClick:()=>r(!t)})]})})]})},v=(e,a)=>e.length>0?e.reduce(((e,t)=>Number(e)+Number(t[a])||0),0):0,A=e=>{let{bankList:a,totalHoldings:t,ccOutstandingList:r,intlHeader:n}=e;const i=(0,s.useContext)(l.R);return(0,p.jsxs)(b.A,{className:"pb-2",children:[(0,p.jsxs)(g.A,{lg:8,md:6,children:[(0,p.jsx)("div",{className:"fs-6 py-2",children:(0,p.jsx)(E,{children:(0,p.jsx)(d.A,{id:n,defaultMessage:n})})}),a.length>0?(0,p.jsx)("div",{className:"x-scroll pb-2",children:(0,p.jsx)("div",{className:"",style:{display:"grid",gridTemplateColumns:`repeat(${a.length}, 250px)`,columnGap:"15px"},children:a.map(((e,a)=>(0,p.jsx)(N,{bank:e,theme:i.userData.theme},a)))})}):(0,p.jsx)(R,{theme:i.userData.theme})]}),(0,p.jsxs)(g.A,{lg:2,md:3,children:[(0,p.jsx)("div",{className:"py-2",children:(0,p.jsx)(E,{children:(0,p.jsx)(d.A,{id:"totalHoldings",defaultMessage:"totalHoldings"})})}),t.length>0?(0,p.jsx)("div",{children:t.length>1?(0,p.jsx)("div",{className:"y-scroll max-h-12 pe-2 py-1",children:t.map(((e,a)=>(0,p.jsxs)(f.A,{className:"bni-border bni-border-all bni-border-all-1 mb-2",children:[(0,p.jsxs)(f.A.Body,{className:"bni-bg rounded-top p-2",children:[(0,p.jsx)("i",{className:"fa fa-1x fa-cubes pe-2"}),e.currency]}),(0,p.jsx)(f.A.Body,{className:"p-2 rounded-bottom",children:j.A.lacSeperator(v(e.data,"Balance"),e.locale)})]},a)))}):(0,p.jsx)(y,{totalHoldings:t,theme:i.userData.theme})}):(0,p.jsx)(R,{theme:i.userData.theme})]}),(0,p.jsxs)(g.A,{lg:2,md:3,children:[(0,p.jsx)("div",{className:"fs-6 py-2",children:(0,p.jsx)(E,{children:(0,p.jsx)(d.A,{id:"creditCardPayable",defaultMessage:"creditCardPayable"})})}),r.length>0?(0,p.jsx)("div",{className:"y-scroll max-h-12 pe-2 py-1",children:r.map(((e,a)=>(0,p.jsx)(C,{ccOut:e},a)))}):(0,p.jsx)(R,{theme:i.userData.theme})]})]})},k=e=>{let{chartData:a,intlHeader:t,theme:s}=e;return(0,p.jsxs)(b.A,{children:[(0,p.jsx)(g.A,{lg:12,className:"fs-6 py-3",children:(0,p.jsx)(E,{children:(0,p.jsx)(d.A,{id:t,defaultMessage:t})})}),a&&a.length>0&&a.map(((e,a)=>(0,p.jsx)(g.A,{lg:3,md:6,className:"text-center pb-3",children:(0,p.jsx)(u.DonutChart,{width:200,height:200,outerRadius:100,innerRadius:80,xAxisLabel:e.key,showLegend:!1,showTooltip:!0,fillColor:[document.documentElement.style.getPropertyValue("--app-theme-bg-color"),document.documentElement.style.getPropertyValue("--app-theme-color")],data:e.data,showAnimation:!1})},a)))]})},S=e=>{let{chartData:a,intlHeader:t,theme:s}=e;return(0,p.jsxs)(b.A,{className:"pb-2",children:[(0,p.jsx)(g.A,{lg:12,className:"fs-6 py-3",children:(0,p.jsx)(E,{children:(0,p.jsx)(d.A,{id:t,defaultMessage:t})})}),a&&a.length>0&&a.map(((e,a)=>(0,p.jsxs)(g.A,{lg:3,md:6,className:"text-center",children:[(0,p.jsx)(u.PieChart,{width:200,height:200,outerRadius:100,innerRadius:80,xAxisLabel:e.key,showXaxisLabel:!1,showYaxisLabel:!1,lineColor:""+("dark"===s?"#000":"#fff"),fillColor:[document.documentElement.style.getPropertyValue("--app-theme-bg-color"),document.documentElement.style.getPropertyValue("--app-theme-color")],data:e.data,showAnimation:!1}),(0,p.jsx)("div",{className:"py-2",children:(0,p.jsx)("small",{children:(0,p.jsx)(d.A,{id:e.key,defaultMessage:e.key})})})]},a)))]})};var P=t(5342);const w="BANK_HOLD",D="REC_TRX",B="TOP_BANKINGS",z="TOP_CREDIT_CARDS";var H=t(8751),T=t(3718),M=t(8045),L=t(6447);const R=e=>{let{theme:a}=e;return(0,p.jsx)("div",{className:"dashboardCard d-flex align-items-center rounded border border-"+("dark"===a?"secondary":"1"),children:(0,p.jsxs)("div",{className:"text-center w-100",children:[(0,p.jsx)("i",{className:"fa fa-archive fa-5x d-block"}),(0,p.jsx)(d.A,{id:"noRecordsGenerated",defaultMessage:"noRecordsGenerated"})]})})},E=e=>{let{children:a}=e;const t=(0,s.useContext)(l.R);return(0,p.jsxs)("div",{className:"badge "+("dark"===t.userData.theme?"bg-secondary text-white":"bg-light text-dark"),style:{cursor:"grabbing"},children:[(0,p.jsx)("span",{className:"pe-1",children:":::"}),a]})},I=e=>{var a;const t=(0,s.useRef)(null),c=(0,o.A)(),u=(0,s.useContext)(i.F);document.title=`${u.appName} - ${c.formatMessage({id:"dashboard",defaultMessage:"dashboard"})}`;const b=(0,s.useContext)(n.AccountContext),g=(0,s.useContext)(l.R),[f,j]=(0,s.useState)([]),[y,N]=(0,s.useState)([]),[C,v]=(0,s.useState)([]),[R,E]=(0,s.useState)([]),[I,V]=(0,s.useState)([]),[O,$]=(0,s.useState)({}),[G,Y]=(0,s.useState)([]),[F,W]=(0,s.useState)(!0),[K,X]=(0,s.useState)(!1),[U,q]=(0,s.useState)([{id:w,intlHeader:"bankHoldings",isActive:!0},{id:D,intlHeader:"recentTransactions",isActive:!0},{id:B,intlHeader:"topBankingTrends",isActive:!0},{id:z,intlHeader:"topCreditCardTrends",isActive:!0}]),[J,Z]=(0,s.useState)([]),[Q,ee]=(0,s.useState)([]),ae=()=>(0,p.jsx)("div",{className:"relativeSpinner middle",children:(0,p.jsx)(m.A,{})});(0,s.useEffect)((()=>{var e;if(null!==g&&void 0!==g&&null!==(e=g.userConfig)&&void 0!==e&&e.appId){W(!0);const e=new FormData;e.append("appId",g.userConfig.appId);const a=r.A.post("/account_planner/getTotalHoldings",e),t=new FormData;t.append("appId",g.userConfig.appId),t.append("month",h()().format("M")),t.append("year",h()().format("YYYY"));const s=r.A.post("/dashboard/topTrends",t),n=r.A.post("/dashboard/recentTransactions",e),l=r.A.post("/dashboard/topCcTrends",t);Promise.all([a,s,n,l]).then((e=>{j(e[0].data.response.result.bankBalance),N(e[0].data.response.result.creditBalance),E(e[1].data.response),Y(e[2].data.response),V(e[3].data.response)})).catch((()=>{b.renderToast({type:"error",icon:"fa fa-times-circle",message:c.formatMessage({id:"unableToReachServer",defaultMessage:"unableToReachServer"})})})).finally((()=>W(!1)))}}),[g]),(0,s.useEffect)((()=>{const e=_.chain(f).groupBy((e=>`${e.Currency}{-}${e.Locale}`)).map(((e,a)=>({currency:a.split("{-}")[0],locale:a.split("{-}")[1],data:e}))).value();v(e)}),[f]),(0,s.useEffect)((()=>{const e=Object.entries(R).map((e=>({key:c.formatMessage({id:e[0],defaultMessage:e[0]}),data:e[1].map((e=>({label:e.name,value:Number(e.total)})))}))),a=Object.entries(I).map((e=>({key:c.formatMessage({id:e[0],defaultMessage:e[0]}),data:e[1].map((e=>({label:e.name,value:Number(e.total)})))})));$({donutChartData:e,pieChartData:a})}),[R,I,c]),(0,s.useEffect)((()=>{if(!F){const e=[{id:w,component:A,props:{bankList:f,totalHoldings:C,ccOutstandingList:y,intlHeader:"bankHoldings"},order:0},{id:D,component:x,props:{recentData:G,width:t.current.offsetWidth,intlHeader:"recentTransactions"},order:1},{id:B,component:k,props:{chartData:O.donutChartData,intlHeader:"topBankingTrends",theme:g.userData.theme},order:2},{id:z,component:S,props:{chartData:O.pieChartData,intlHeader:"topCreditCardTrends",theme:g.userData.theme},order:3}];Z(e),ee(e)}}),[F,G,f,C,y,O,c,g]);const te=e=>{const a=U.map((a=>(a.id===e&&(a.isActive=!a.isActive),a)));q(a)};(0,s.useEffect)((()=>{const e=U.filter((e=>e.isActive)).map((e=>e.id)),a=[...J].filter((a=>e.includes(a.id))).map(((e,a)=>({...e,order:a})));ee(a)}),[J,U]);const se=(0,T.FR)((0,T.MS)(T.AN,{activationConstraint:{distance:5}}),(0,T.MS)(T.IG,{activationConstraint:{distance:5}}),(0,T.MS)(T.uN,{coordinateGetter:M.JR}));return F?(0,p.jsx)(ae,{}):(0,p.jsxs)("div",{className:"mb-2 container-fluid",ref:t,children:[(0,p.jsx)("div",{className:`bg-gradient ${"dark"===g.userData.theme?"bg-dark darkBoxShadow":"bg-white lightBoxShadow"} mt-2 ps-3 py-2 rounded-pill mb-2`,children:(0,p.jsxs)("div",{className:"d-flex align-items-center justify-content-between",children:[(0,p.jsxs)("div",{className:"d-flex align-items-center",children:[(0,p.jsx)("i",{className:"fa fa-pie-chart fa-1x"}),(0,p.jsx)("div",{className:"ps-2 mb-0",children:(0,p.jsx)(d.A,{id:"dashboard",defaultMessage:"dashboard"})})]}),(0,p.jsx)("div",{className:"",children:(0,p.jsxs)(P.A,{show:K,drop:"end",onToggle:(e,a)=>{"select"!==a.source&&X(e)},children:[(0,p.jsx)(P.A.Toggle,{as:"div",className:"pe-2",children:(0,p.jsx)("i",{className:"fa fa-cog icon-bni cursor-pointer pe-1"})}),(0,p.jsx)(P.A.Menu,{className:"mt-3 pe-3 "+("dark"===g.userData.theme?"bg-dark text-white-50":"bg-white text-black"),children:U.map(((e,a)=>(0,p.jsxs)(P.A.Item,{as:"div",className:""+("dark"===g.userData.theme?"bg-dark text-white-50":"bg-white text-black"),children:[(0,p.jsx)(H.A,{onColor:document.documentElement.style.getPropertyValue("--app-theme-bg-color"),offColor:document.documentElement.style.getPropertyValue("--app-theme-color"),offHandleColor:"dark"===g.userData.theme?"#555":"#ddd",onHandleColor:"dark"===g.userData.theme?"#555":"#ddd",handleDiameter:15,checkedIcon:!1,uncheckedIcon:!1,height:10,width:30,onChange:a=>{te(e.id)},checked:e.isActive,disabled:1===Q.length&&e.isActive}),(0,p.jsx)("span",{className:"ps-2",style:1===Q.length&&e.isActive?{opacity:"0.25",cursor:"not-allowed"}:{cursor:"pointer"},onClick:a=>{(1!==Q.length||!e.isActive)&&te(e.id)},children:c.formatMessage({id:e.intlHeader,defaultMessage:e.intlHeader})})]},a)))})]})})]})}),(0,p.jsx)(s.Suspense,{fallback:(0,p.jsx)(ae,{}),children:(null===t||void 0===t||null===(a=t.current)||void 0===a?void 0:a.clientWidth)>450?(0,p.jsx)(T.Mp,{sensors:se,collisionDetection:T.fp,onDragEnd:e=>{let{active:a,over:t}=e;if(a.id!==t.id){const e=Q.findIndex((e=>{let{id:t}=e;return t===a.id})),s=Q.findIndex((e=>{let{id:a}=e;return a===t.id})),r=(0,M.be)(Q,e,s);ee(r)}},children:(0,p.jsx)(M.gB,{items:Q,strategy:M._G,children:Q.map(((e,a)=>{const t=e.component;return(0,p.jsx)(L.U,{id:e.id,children:(0,p.jsx)(t,{index:a,...e.props})},e.id)}))})}):Q.map(((e,a)=>{const t=e.component;return(0,p.jsx)(t,{index:a,...e.props},e.id)}))})]})}},6447:(e,a,t)=>{t.d(a,{U:()=>l});t(9950);var s=t(8045),r=t(8989),n=t(4414);function l(e){const{children:a}=e,{attributes:t,listeners:l,setNodeRef:i,transform:d,transition:o}=(0,s.gl)({id:e.id}),c={transform:r.Ks.Transform.toString(d),transition:o};return(0,n.jsx)("div",{ref:i,style:c,...t,...l,children:a})}},8002:(e,a,t)=>{t.r(a),t.d(a,{BoxPlotChart:()=>p,CircleShape:()=>j,CircularBarChart:()=>g,CylinderShape:()=>P,DensityChart:()=>u,DiamondShape:()=>C,DirectionArrowShape:()=>w,DivergingBarChart:()=>l,DonutChart:()=>h,DoubleArrowShape:()=>k,HorizontalArrowShape:()=>A,HorizontalBarChart:()=>d,LineChart:()=>x,LineShape:()=>B,PannableChart:()=>n,ParllelogramShape:()=>S,PieChart:()=>c,ScatterPlotChart:()=>m,SmileyEmoji:()=>D,SquareShape:()=>N,StackedVerticalBarChart:()=>o,TriangleShape:()=>y,Tshape:()=>v,VerticalBarChart:()=>r,VoronoiChart:()=>b,WordCloudChart:()=>f,ZoomableCirclePackingChart:()=>i});var s=t(9950);const r=(0,s.lazy)((()=>Promise.all([t.e(4761),t.e(910),t.e(8129)]).then(t.bind(t,8129)))),n=(0,s.lazy)((()=>Promise.all([t.e(4761),t.e(910),t.e(7771)]).then(t.bind(t,7771)))),l=(0,s.lazy)((()=>Promise.all([t.e(4761),t.e(910),t.e(2730)]).then(t.bind(t,2730)))),i=(0,s.lazy)((()=>Promise.all([t.e(4761),t.e(910),t.e(7626)]).then(t.bind(t,7626)))),d=(0,s.lazy)((()=>Promise.all([t.e(4761),t.e(910),t.e(5843)]).then(t.bind(t,5843)))),o=(0,s.lazy)((()=>Promise.all([t.e(4761),t.e(910),t.e(9066)]).then(t.bind(t,9066)))),c=(0,s.lazy)((()=>Promise.all([t.e(4761),t.e(910),t.e(8162)]).then(t.bind(t,8162)))),h=(0,s.lazy)((()=>Promise.all([t.e(4761),t.e(910),t.e(4596)]).then(t.bind(t,4596)))),m=(0,s.lazy)((()=>Promise.all([t.e(4761),t.e(910),t.e(2633)]).then(t.bind(t,2633)))),u=(0,s.lazy)((()=>Promise.all([t.e(4761),t.e(910),t.e(8566)]).then(t.bind(t,8566)))),p=(0,s.lazy)((()=>Promise.all([t.e(4761),t.e(910),t.e(3674)]).then(t.bind(t,1293)))),x=(0,s.lazy)((()=>Promise.all([t.e(4761),t.e(910),t.e(6180)]).then(t.bind(t,6180)))),b=(0,s.lazy)((()=>Promise.all([t.e(4761),t.e(910),t.e(166)]).then(t.bind(t,166)))),g=(0,s.lazy)((()=>Promise.all([t.e(4761),t.e(910),t.e(4778)]).then(t.bind(t,4778)))),f=(0,s.lazy)((()=>Promise.all([t.e(4761),t.e(853),t.e(6688)]).then(t.bind(t,6688)))),j=(0,s.lazy)((()=>Promise.all([t.e(4761),t.e(910),t.e(8939)]).then(t.bind(t,8939)))),y=(0,s.lazy)((()=>Promise.all([t.e(4761),t.e(910),t.e(6527)]).then(t.bind(t,6527)))),N=(0,s.lazy)((()=>Promise.all([t.e(4761),t.e(910),t.e(9754)]).then(t.bind(t,9754)))),C=(0,s.lazy)((()=>Promise.all([t.e(4761),t.e(910),t.e(316)]).then(t.bind(t,316)))),v=(0,s.lazy)((()=>Promise.all([t.e(4761),t.e(910),t.e(833)]).then(t.bind(t,833)))),A=(0,s.lazy)((()=>Promise.all([t.e(4761),t.e(910),t.e(6454)]).then(t.bind(t,6454)))),k=(0,s.lazy)((()=>Promise.all([t.e(4761),t.e(910),t.e(979)]).then(t.bind(t,979)))),S=(0,s.lazy)((()=>Promise.all([t.e(4761),t.e(910),t.e(6803)]).then(t.bind(t,6803)))),P=(0,s.lazy)((()=>Promise.all([t.e(4761),t.e(910),t.e(5005)]).then(t.bind(t,5005)))),w=(0,s.lazy)((()=>Promise.all([t.e(4761),t.e(910),t.e(1313)]).then(t.bind(t,1313)))),D=(0,s.lazy)((()=>Promise.all([t.e(4761),t.e(910),t.e(7901)]).then(t.bind(t,7901)))),B=(0,s.lazy)((()=>Promise.all([t.e(4761),t.e(910),t.e(7301)]).then(t.bind(t,7301))))}}]);