(this["webpackJsonpbni-apps"]=this["webpackJsonpbni-apps"]||[]).push([[65],{340:function(e,t,a){"use strict";a.r(t),a.d(t,"BillingContext",(function(){return k})),a.d(t,"CurrencyPrice",(function(){return N}));var n=a(25),s=a(27),l=a(1),i=a.n(l),c=a(35),r=a(62),o=a(775),d=a(1263),u=a(1286),b=a(929),p=a(1266),m=a(932),f=a(46),j=a(52),y=a.n(j),O=a(48),g=a(73),h=a(0),x=Object(l.lazy)((function(){return a.e(33).then(a.bind(null,1181))})),v=Object(l.lazy)((function(){return a.e(66).then(a.bind(null,1184))})),M=Object(l.lazy)((function(){return a.e(67).then(a.bind(null,1252))})),C=Object(l.lazy)((function(){return a.e(9).then(a.bind(null,586)).then((function(e){return{default:e.CouponHeading}}))})),P=Object(l.lazy)((function(){return a.e(9).then(a.bind(null,586)).then((function(e){return{default:e.CouponContent}}))})),k=i.a.createContext(void 0),N=function(e){var t=e.amount,a=e.suffix,n=e.symbol,s=(t.toFixed(2)+"").split(".");return Object(h.jsxs)(h.Fragment,{children:[Object(h.jsx)("sup",{className:"fs-6",children:n}),Object(h.jsx)("span",{className:"fs-5",children:Number(s[0]).toLocaleString("en-US")}),Object(h.jsxs)("sub",{children:[".",s[1],a]})]})};t.default=function(e){var t=Object(o.a)(),a=Object(l.useContext)(c.a),i=Object(l.useContext)(r.a),j=Object(l.useState)([]),S=Object(s.a)(j,2),I=S[0],w=S[1],L=Object(l.useState)(!0),z=Object(s.a)(L,2),T=z[0],A=z[1],D=Object(l.useState)(!1),E=Object(s.a)(D,2),F=E[0],B=E[1],Y=Object(l.useState)({}),U=Object(s.a)(Y,2),_=U[0],R=U[1],H=Object(l.useState)([]),J=Object(s.a)(H,2),Q=J[0],W=J[1],V=Object(l.useState)({}),q=Object(s.a)(V,1)[0],G={month:{prop:"planPriceMonthly",razorPayProp:"pricingMonthId",suffix:"  / ".concat(t.formatMessage({id:"month",defaultMessage:"month"}))},year:{prop:"planPriceYearly",razorPayProp:"pricingYearId",suffix:" / ".concat(t.formatMessage({id:"year",defaultMessage:"year"}))}},K=["planBankAccountsLimit","planCreditCardAccounts","planCategoriesLimit","planUsersLimit","planTemplateLimit","planTrxLimit","planCreditCardTrxLimit","planDatasourceLimit","planWorkbookLimit","planStorageLimit","planIsTransactionSearch","planIsBulkImport","planIsEmailAlerts","planIsPredictions","visualizationLimit"],X=[{key:"planBankAccountsLimit",type:"numericNull",label:t.formatMessage({id:"bankAccounts",defaultMessage:"bankAccounts"})},{key:"planCreditCardAccounts",type:"numericNull",label:t.formatMessage({id:"creditCardAccounts",defaultMessage:"creditCardAccounts"})},{key:"planCategoriesLimit",type:"numericNull",label:t.formatMessage({id:"incExpCat",defaultMessage:"incExpCat"})},{key:"planUsersLimit",type:"numericNull",label:t.formatMessage({id:"users",defaultMessage:"users"})},{key:"planTemplateLimit",type:"numericNull",label:t.formatMessage({id:"schedules",defaultMessage:"schedules"})},{key:"planTrxLimit",type:"numericNull",label:t.formatMessage({id:"bankTransactions",defaultMessage:"bankTransactions"})},{key:"planCreditCardTrxLimit",type:"numericNull",label:t.formatMessage({id:"creditCardTransactions",defaultMessage:"creditCardTransactions"})},{key:"planDatasourceLimit",type:"bytesOrNull",label:t.formatMessage({id:"dataSource",defaultMessage:"dataSource"})},{key:"planWorkbookLimit",type:"bytesOrNull",label:t.formatMessage({id:"workbook",defaultMessage:"workbook"})},{key:"planStorageLimit",type:"bytesOrNull",label:t.formatMessage({id:"fileStorage",defaultMessage:"fileStorage"})},{key:"planIsBulkImport",type:"boolean",label:t.formatMessage({id:"bulkImport",defaultMessage:"bulkImport"})},{key:"planIsEmailAlerts",type:"boolean",label:t.formatMessage({id:"emailAlerts",defaultMessage:"emailAlerts"})},{key:"planIsPredictions",type:"boolean",label:t.formatMessage({id:"predictions",defaultMessage:"predictions"})},{key:"planIsTransactionSearch",type:"boolean",label:t.formatMessage({id:"globalSearch",defaultMessage:"globalSearch"})},{key:"visualizationLimit",type:"numericNull",label:t.formatMessage({id:"visualizations",defaultMessage:"visualizations"})}],Z=[{value:"month",label:t.formatMessage({id:"monthly",defaultMessage:"monthly"})},{value:"year",label:t.formatMessage({id:"yearly",defaultMessage:"yearly"})}],$=Object(l.useState)({currency:a.userConfig.currency,cycle:"month",razorPayCustomerId:a.userConfig.razorPayCustomerId,razorPayPlanId:"",invoice:[{id:"price",label:t.formatMessage({id:"price",defaultMessage:"price"}),value:0},{id:"creditAdjustment",label:t.formatMessage({id:"creditAdjustment",defaultMessage:"creditAdjustment"}),value:0},{id:"discount",label:t.formatMessage({id:"discount",defaultMessage:"discount"}),title:"",value:0},{id:"tax",label:t.formatMessage({id:"tax",defaultMessage:"tax"}),title:"",value:0}],total:0}),ee=Object(s.a)($,2),te=ee[0],ae=ee[1],ne=Number(te.invoice.reduce((function(e,t){return e+t.value}),0).toFixed(2));Object(l.useEffect)((function(){i.setConfig({show:!1});var e=function(){var e=new FormData;return e.append("appId",a.userConfig.appId),e.append("currency",a.userConfig.currency),e.append("env","production"),f.a.post("/payments/availableBillingPlans",e)}();return Promise.all([e]).then((function(e){w(e[0].data.response);var t=Object.keys(e[0].data.response[0]).sort((function(e,t){return K.indexOf(e)-K.indexOf(t)}));W(t)})).catch((function(e){return console.log(e)})).finally((function(){return A(!1)})),function(){i.setConfig({show:!1})}}),[]),Object(l.useEffect)((function(){Object.keys(q).length>0&&(null===q||void 0===q?void 0:q.percentOff)>0&&null!==q&&void 0!==q&&q.name&&i.setConfig({show:!0,className:"alert-success border-0 text-dark",type:"success",dismissible:!0,heading:Object(h.jsx)(C,{}),content:Object(h.jsx)(P,{values:{n:null===q||void 0===q?void 0:q.percentOff,y:null===q||void 0===q?void 0:q.name}})})}),[q]),Object(l.useEffect)((function(){if(null!==_&&void 0!==_&&_.planId){B(!0);var e=function(){var e=new FormData;return e.append("razorPayCustomerId",te.razorPayCustomerId),f.a.post("/payments/checkDiscounts",e)}(),t=((new FormData).append("country",a.userConfig.country),f.a.get("/payments/checkTaxes")),s=function(){var e=new FormData;return e.append("razorPayCustomerId",a.userConfig.razorPayCustomerId),e.append("razorPayPlanId",te.razorPayPlanId),f.a.post("/payments/deductExhaustedUsage",e)}();Promise.all([e,t,s]).then((function(e){var t=e[0].data.response,a=t.name,s=t.value/100*_[G[te.cycle].prop];s=-Number(s.toFixed(2));var l=e[1].data.response,i=l.name,c=l.value/100*_[G[te.cycle].prop];c=Number(c.toFixed(2));var r=e[2].data.response.adjustmentCredit;ae((function(e){return Object(n.a)(Object(n.a)({},e),{},{invoice:e.invoice.map((function(e){return"discount"===e.id&&Object.assign(e,{title:"".concat(a," - ").concat(t.value,"%"),value:s}),"tax"===e.id&&Object.assign(e,{title:i,value:c}),"creditAdjustment"===e.id?Object.assign(e,{value:r}):e}))})}))})).catch((function(e){return console.log(e)})).finally((function(){return B(!1)}))}}),[_.planId,te.cycle]);var se=function(e){var a=e.planPriceMonthly,n=e.planPriceYearly,s=e.isPlanOptable,l=e.planPriceCurrencySymbol;return Object(h.jsxs)("div",{style:s?{}:{textDecoration:"line-through"},className:"d-flex align-items-center justify-content-center text-center",children:[Object(h.jsx)("div",{className:"pe-2",children:Object(h.jsx)(N,{amount:a,suffix:" / ".concat(t.formatMessage({id:"month",defaultMessage:"month"})),symbol:l})}),Object(h.jsx)("div",{className:"w-50",children:Object(h.jsx)(N,{amount:n,suffix:" / ".concat(t.formatMessage({id:"year",defaultMessage:"year"})),symbol:l})})]})},le=function(e){var t=e.planTitle,a=e.planDescription;return Object(h.jsxs)("div",{className:"text-center py-2",children:[Object(h.jsx)("div",{className:"fs-4",children:Object(h.jsx)(d.a,{id:t,defaultMessage:t})}),Object(h.jsx)("div",{style:{fontSize:"0.75rem"},children:Object(h.jsx)(d.a,{id:a,defaultMessage:a})})]})},ie=function(n){var s=n.planName,l=n.planCode,i=n.isPlanOptable;return Object(h.jsxs)("div",{className:"bni-bg rounded-top text-dark px-2 py-1 d-flex align-items-center justify-content-between",children:[Object(h.jsxs)("div",{style:i?{}:{textDecoration:"line-through"},children:[_.planCode===l&&Object(h.jsx)("i",{className:"fa fa-check-circle pe-1"}),Object(h.jsx)("span",{children:Object(h.jsx)(d.a,{id:s,defaultMessage:s})}),!i&&Object(h.jsx)(u.a,{placement:"right",delay:{show:250,hide:400},overlay:ce(e,t.formatMessage({id:"maximumQuotaExceeded",defaultMessage:"maximumQuotaExceeded"})),triggerType:"hover",children:Object(h.jsx)("i",{className:"fa fa-info-circle ps-1 cursor-pointer"})})]}),a.userConfig.planCode===l&&Object(h.jsx)("div",{children:Object(h.jsx)("span",{className:"badge rounded-pill bg-dark",children:Object(h.jsx)(d.a,{id:"currentPlan",defaultMessage:"currentPlan"})})})]})},ce=function(e,t){return Object(h.jsx)(b.a,{id:"button-tooltip-".concat(Math.random()),className:"in show",children:t})},re=function(e){var t,a,n,s,l=e.obj,i=e.t,c=X.filter((function(e){return e.key===l})),r=null===(t=c[0])||void 0===t?void 0:t.label,o="";return o="numericNull"===(null===(a=c[0])||void 0===a?void 0:a.type)?null!==i[l]?i[l]:Object(h.jsx)("span",{className:"text-success",children:"\u221e"}):"bytesOrNull"===(null===(n=c[0])||void 0===n?void 0:n.type)?null!==i[l]?"".concat(i[l]/1024/1024," MB"):Object(h.jsx)("span",{className:"text-success",children:"\u221e"}):"boolean"===(null===(s=c[0])||void 0===s?void 0:s.type)?i[l]?Object(h.jsx)("i",{className:"fa fa-check text-success"}):Object(h.jsx)("i",{className:"fa fa-times text-danger"}):i[l],Object(h.jsxs)("div",{className:"d-flex align-items-center justify-content-between pb-1",children:[Object(h.jsx)("div",{children:r}),Object(h.jsx)("div",{children:o})]})},oe=function(){return Object(h.jsx)("div",{className:"relativeSpinner middle",children:Object(h.jsx)(y.a,{type:O.a.loadRandomSpinnerIcon(),color:document.documentElement.style.getPropertyValue("--app-theme-bg-color"),height:100,width:100})})},de=function(e){R(e),ue(e),setTimeout((function(){window.scrollTo(0,document.body.scrollHeight)}),1e3)},ue=function(e){if(e.isPlanOptable){var t=I.filter((function(t){return t.planCode===e.planCode}))[0].planPriceMonthly,a=I.filter((function(t){return t.planCode===e.planCode}))[0].pricingMonthId;ae((function(e){return Object(n.a)(Object(n.a)({},e),{},{razorPayPlanId:a,cycle:Z[0].value,invoice:e.invoice.map((function(e){return"price"===e.id?Object.assign(e,{value:t}):e}))})}))}},be=function(e){return Number(e.planPriceMonthly)&&Number(e.planPriceYearly)?Object(h.jsx)("button",{onClick:function(){return de(e)},disabled:!e.isPlanOptable,className:"w-100 btn btn-bni p-1 rounded-top-0 border-0",title:"Subscribe now",children:Object(h.jsx)(se,{planPriceMonthly:e.planPriceMonthly,planPriceYearly:e.planPriceYearly,isPlanOptable:e.isPlanOptable,planPriceCurrencySymbol:e.planPriceCurrencySymbol})}):Object(h.jsx)("button",{disabled:!e.isPlanOptable,className:"w-100 btn btn-bni rounded-top-0 border-0 py-1",children:Object(h.jsx)("div",{className:"py-1",children:Object(h.jsx)(d.a,{id:"free",defaultMessage:"free"})})})},pe=Object(l.useState)(!1),me=Object(s.a)(pe,2),fe=me[0],je=me[1],ye=Object(l.useState)(""),Oe=Object(s.a)(ye,2),ge=Oe[0],he=Oe[1],xe=Object(g.h)().search,ve=new URLSearchParams(xe).get("session_id");return Object(l.useEffect)((function(){he(ve)}),[ve]),Object(l.useEffect)((function(){ge&&je(!0)}),[ge]),Object(h.jsx)(l.Suspense,{fallback:oe(),children:Object(h.jsxs)(k.Provider,{value:{summary:te,setSummary:ae,cycleList:Z,table:I,selectedPlan:_,cycleRef:G,total:ne,billingLoader:F,sessionId:ge,showSessionPopup:fe,setShowSessionPopup:je},children:[Object(h.jsx)(M,{}),Object(h.jsxs)("div",{className:"container-fluid",children:[Object(h.jsx)("div",{className:"bg-gradient ".concat("dark"===a.userData.theme?"bg-dark darkBoxShadow":"bg-white lightBoxShadow"," mt-2 ps-3 py-2 rounded-pill mb-4"),children:Object(h.jsx)("div",{className:"d-flex justify-content-between align-items-center",children:Object(h.jsxs)("div",{className:"d-flex align-items-center",children:[Object(h.jsx)("i",{className:"fa fa-credit-card-alt fa-1x"}),Object(h.jsx)("div",{className:"ps-2 mb-0",children:Object(h.jsx)(d.a,{id:"billing",defaultMessage:"billing"})})]})})}),T&&oe(),!T&&Object(h.jsxs)(h.Fragment,{children:[Object(h.jsx)("div",{children:I&&I.length>0&&Object(h.jsx)(p.a,{className:"",children:I.map((function(e,t){return Object(h.jsx)(m.a,{md:6,lg:3,className:"pb-3",children:Object(h.jsxs)("div",{className:"rounded-3 border ".concat("dark"===a.userData.theme?"border-black":"border-1"," ").concat(e.isPlanOptable?"cursor-pointer":"cursor-not-allowed"," ").concat(_.planCode===e.planCode?"animate__animated animate__headShake":""),style:_.planCode===e.planCode?{boxShadow:"0 0 20px 0px #000"}:{},onClick:function(){return e.isPlanOptable&&de(e)},children:[Object(h.jsx)(ie,Object(n.a)({},e)),Object(h.jsx)(le,Object(n.a)({},e)),Object(h.jsx)("div",{className:"p-2",children:Q.filter((function(e){return!["planId","planCode","planName","planTitle","planDescription","planIsActive","planPriceMonthly","planPriceYearly","planPriceCurrencySymbol","pricingMonthId","pricingYearId"].includes(e)})).map((function(t,a){return Object(h.jsx)(re,{obj:t,t:e},a)}))}),Object(h.jsx)(be,Object(n.a)({},e))]})},t)}))})}),Object(h.jsx)(x,{}),Object(h.jsx)("hr",{className:"mt-5"}),Object(h.jsx)(p.a,{children:Object(h.jsx)(m.a,{sm:6,children:Object(h.jsx)(v,{})})})]})]})]})})}}}]);