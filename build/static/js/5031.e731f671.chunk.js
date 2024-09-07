"use strict";(self.webpackChunkledgerely_com=self.webpackChunkledgerely_com||[]).push([[5031],{1851:(e,s,a)=>{a.d(s,{JQ:()=>o,ah:()=>d,bJ:()=>t,mZ:()=>l});a(9950);var n=a(3027),i=a(4414);const l=()=>(0,i.jsx)("div",{children:(0,i.jsxs)("div",{className:"d-flex align-items-center",children:[(0,i.jsx)("i",{className:"fa fa-check fa-2x pt-2 text-success"}),(0,i.jsxs)("div",{className:"ps-2",children:[(0,i.jsx)("div",{className:"fs-3",children:(0,i.jsx)(n.A,{id:"success",defaultMessage:"success"})}),(0,i.jsx)("div",{className:"fs-6",children:(0,i.jsx)(n.A,{id:"paymentReceived",defaultMessage:"paymentReceived"})})]})]})}),t=()=>(0,i.jsx)("div",{className:"d-flex align-items-center justify-content-between",children:(0,i.jsx)("div",{children:(0,i.jsx)("span",{className:"fs-6",children:(0,i.jsx)(n.A,{id:"paymentSuccessMessage",defaultMessage:"paymentSuccessMessage"})})})}),d=()=>(0,i.jsx)("div",{children:(0,i.jsxs)("div",{className:"d-flex align-items-center",children:[(0,i.jsx)("i",{className:"fa fa-times-circle fa-2x pt-2 text-danger"}),(0,i.jsxs)("div",{className:"ps-2",children:[(0,i.jsx)("div",{className:"fs-3",children:(0,i.jsx)(n.A,{id:"failed",defaultMessage:"failed"})}),(0,i.jsx)("div",{className:"fs-6",children:(0,i.jsx)(n.A,{id:"paymentNotReceived",defaultMessage:"paymentNotReceived"})})]})]})}),o=()=>(0,i.jsx)("div",{className:"d-flex align-items-center justify-content-between",children:(0,i.jsx)("div",{children:(0,i.jsx)("span",{className:"fs-6",children:(0,i.jsx)(n.A,{id:"paymentFailMessage",defaultMessage:"paymentFailMessage"})})})})},5031:(e,s,a)=>{a.r(s),a.d(s,{default:()=>j});var n=a(9950),i=a(8751),l=a(6781),t=a(8459),d=a(3302),o=a(7937),c=a(2436),r=a(1936),u=a(1308),m=a(9288),p=a(3027),f=a(5520),v=a.n(f),h=a(4570),y=a(1851),x=a(4414);const j=e=>{const s=(0,m.A)(),a=(0,n.useContext)(u.F),f=(0,n.useContext)(c.R),j=(0,n.useContext)(r.BillingContext),[g,b]=(0,n.useState)(!1),{summary:C,setSummary:N,cycleList:w,table:k,selectedPlan:A,cycleRef:M,total:P,billingLoader:_,setShowSessionPopup:z,subscribeLoader:S,setSubscribeLoader:I}=j,[D]=v()(),R=(0,n.useCallback)((async()=>{I(!0),(()=>{const e=new FormData;return e.append("count","month"===C.cycle?1:12),e.append("planId",C.razorPayPlanId),e.append("custId",C.razorPayCustomerId),h.A.post("/payments/razorpay/createSubscription",e)})().then((e=>{var a,n,i,l,t,d,o,c,r,u,m,p;const v=null===e||void 0===e||null===(a=e.data)||void 0===a?void 0:a.response,j={key:"rzp_test_iHG0MZA1HbTFSn",key_secret:"73OejmyvhYa8OuOUIPvgUVF5",currency:null===f||void 0===f||null===(n=f.userConfig)||void 0===n?void 0:n.currency,amount:100*C.invoice[0].value,subscription_id:null===v||void 0===v?void 0:v.id,name:`${A.planCode} - ${s.formatMessage({id:A.planDescription,defaultMessage:A.planDescription})}`,plan_id:null===C||void 0===C?void 0:C.razorPayPlanId,currency:null===C||void 0===C?void 0:C.currency,handler:e=>{(e=>{const s=new FormData;return s.append("paymentId",e),h.A.post("/payments/razorpay/onPayment",s)})(e.razorpay_payment_id).then((e=>{var s;const{status:a}=null===e||void 0===e||null===(s=e.data)||void 0===s?void 0:s.response;"authorized"===a||"captured"===a?z(!0):myAlertContext.setConfig({show:!0,className:"alert-danger border-0 text-dark",type:"danger",dismissible:!1,heading:(0,x.jsx)(y.ah,{}),content:(0,x.jsx)(y.JQ,{})})})).catch((e=>console.log(e)))},modal:{escape:!1,handleback:!1,confirm_close:!0,ondismiss:()=>!1,animation:!0},readonly:{contact:!0,email:!0,name:!0},hidden:{contact:!1,email:!1},prefill:{name:null===f||void 0===f||null===(i=f.userConfig)||void 0===i?void 0:i.name,email:null===f||void 0===f||null===(l=f.userConfig)||void 0===l?void 0:l.email,contact:null===f||void 0===f||null===(t=f.userConfig)||void 0===t?void 0:t.mobile,method:"card"},notes:{name:null===f||void 0===f||null===(d=f.userConfig)||void 0===d?void 0:d.name,mobile:null===f||void 0===f||null===(o=f.userConfig)||void 0===o?void 0:o.mobile,address1:null===f||void 0===f||null===(c=f.userConfig)||void 0===c?void 0:c.address1,address2:null===f||void 0===f||null===(r=f.userConfig)||void 0===r?void 0:r.address2,city:null===f||void 0===f||null===(u=f.userConfig)||void 0===u?void 0:u.city,country:null===f||void 0===f||null===(m=f.userConfig)||void 0===m?void 0:m.country,email:null===f||void 0===f||null===(p=f.userConfig)||void 0===p?void 0:p.email},theme:{color:document.documentElement.style.getPropertyValue("--app-theme-bg-color")}};new D(j).open()})).catch((e=>console.log(e))).finally((()=>I(!1)))}),[C,s]),F=[{id:0,href:a.cancellationRefundPolicyLink,label:s.formatMessage({id:"cancellationPolicy",defaultMessage:"cancellationPolicy"})},{id:1,href:a.termsOfServiceLink,label:s.formatMessage({id:"termsOfService",defaultMessage:"termsOfService"})},{id:2,href:a.privacyPolicyLink,label:s.formatMessage({id:"privacyPolicy",defaultMessage:"privacyPolicy"})}];return(0,x.jsxs)("div",{className:"my-3",children:[(0,x.jsx)("div",{className:"fs-3",children:(0,x.jsx)(p.A,{id:"summary",defaultMessage:"summary"})}),(0,x.jsxs)(l.A,{className:"p-2",children:[(0,x.jsx)(t.A,{md:6,className:"receipt rounded",style:{"--theme-color":"dark"===f.userData.theme?"#111":"#eee"},children:(0,x.jsx)("div",{className:"p-4",style:{background:"dark"===f.userData.theme?"#111":"#eee",color:"dark"===f.userData.theme?"#fff":"#000"},children:(0,x.jsxs)("div",{style:{height:"12rem"},className:"position-relative",children:[C.invoice.map(((e,s)=>(0,x.jsxs)(t.A,{xs:12,className:"d-flex justify-content-between align-items-center py-1",children:[(0,x.jsxs)("div",{children:[(0,x.jsx)("span",{children:(0,x.jsx)(p.A,{id:e.id,defaultMessage:e.id})}),(0,x.jsx)("span",{className:"ps-2",children:e.title?`(${e.title})`:""})]}),(0,x.jsx)("div",{children:_?(0,x.jsx)("i",{className:"fa fa-circle-o-notch fa-spin"}):e.value})]},e.id))),(0,x.jsxs)("div",{style:{borderTop:"dotted 5px #aeaeae",position:"absolute",width:"100%",bottom:0},className:"d-flex justify-content-between align-items-center py-2",children:[(0,x.jsx)("div",{children:(0,x.jsx)(p.A,{id:"total",defaultMessage:"total"})}),(0,x.jsx)("div",{children:P.toFixed(2)})]})]})})}),(0,x.jsxs)(t.A,{md:6,className:"p-2",children:[(0,x.jsxs)("div",{className:"d-flex justify-content-between align-items-center py-1",children:[(0,x.jsx)("div",{children:(0,x.jsx)(p.A,{id:"paymentCycle",defaultMessage:"paymentCycle"})}),(0,x.jsx)("div",{children:(0,x.jsx)(d.A.Select,{value:C.cycle,disabled:!A.planCode,size:"sm",onChange:e=>{const s=k.filter((e=>e.planCode===A.planCode))[0][M[e.target.value].prop],a=k.filter((e=>e.planCode===A.planCode))[0][M[e.target.value].razorPayProp];N((n=>({...n,razorPayPlanId:a,cycle:e.target.value,invoice:n.invoice.map((e=>"price"===e.id?Object.assign(e,{value:s}):e))})))},children:w.map(((e,s)=>(0,x.jsx)("option",{value:e.value,children:e.label},s)))})})]}),F.map((e=>(0,x.jsx)("div",{className:"py-1",children:(0,x.jsx)("a",{target:"_blank",rel:"noreferrer",className:"link-primary",href:e.href,children:e.label})},e.id))),(0,x.jsxs)("div",{className:"d-flex justify-content-between align-items-center py-1",children:[(0,x.jsx)("div",{children:(0,x.jsx)(p.A,{id:"iAgreeTerms",defaultMessage:"iAgreeTerms"})}),(0,x.jsx)("div",{children:(0,x.jsx)(i.A,{className:""+(A.planCode?"animate__animated animate__headShake infiniteAnimation":""),onColor:document.documentElement.style.getPropertyValue("--app-theme-bg-color"),offColor:document.documentElement.style.getPropertyValue("--app-theme-color"),offHandleColor:"dark"===f.userData.theme?"#555":"#ddd",onHandleColor:"dark"===f.userData.theme?"#555":"#ddd",handleDiameter:15,checkedIcon:!1,uncheckedIcon:!1,height:10,width:30,onChange:e=>{b(e)},checked:g})})]}),(0,x.jsx)("div",{className:"p-1",children:(0,x.jsxs)(o.A,{disabled:!(g&&P>0&&!_),className:"btn btn-bni w-100 border-0 d-flex justify-content-between align-items-center",onClick:R,children:[(0,x.jsx)(p.A,{id:"subscribeNow",defaultMessage:"subscribeNow"}),(0,x.jsx)("div",{children:S?(0,x.jsx)("i",{className:"fa p-1 fa-1x fa-circle-o-notch fa-spin py-2"}):(0,x.jsx)(r.CurrencyPrice,{amount:P,suffix:M[C.cycle].suffix,symbol:A.planPriceCurrencySymbol})})]})})]})]})]})}},5520:function(e,s,a){var n=this&&this.__awaiter||function(e,s,a,n){return new(a||(a=Promise))((function(i,l){function t(e){try{o(n.next(e))}catch(s){l(s)}}function d(e){try{o(n.throw(e))}catch(s){l(s)}}function o(e){var s;e.done?i(e.value):(s=e.value,s instanceof a?s:new a((function(e){e(s)}))).then(t,d)}o((n=n.apply(e,s||[])).next())}))};Object.defineProperty(s,"__esModule",{value:!0});const i=a(9950);class l{constructor(e){this.options=e,"undefined"!==typeof window&&(this.rzrpayInstannce=new window.Razorpay(this.options))}on(e,s){this.rzrpayInstannce.on(e,s)}open(){this.rzrpayInstannce.open()}}s.default=()=>{const e=(0,i.useMemo)((()=>"undefined"!==typeof window),[]),[s,a]=(0,i.useState)(!1),t=(0,i.useCallback)((()=>!(!e||!("Razorpay"in window))),[]),d=(0,i.useCallback)((s=>{if(e)return new Promise(((e,n)=>{const i=document.createElement("script");i.src=s,i.onload=s=>{a(!0),e(s)},i.onerror=e=>n(e),document.body.appendChild(i)}))}),[]);return(0,i.useEffect)((()=>{t()||n(void 0,void 0,void 0,(function*(){try{yield d("https://checkout.razorpay.com/v1/checkout.js")}catch(e){throw new Error(e)}}))}),[]),[l,s]}}}]);