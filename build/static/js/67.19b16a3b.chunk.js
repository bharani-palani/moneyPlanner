(this["webpackJsonpbni-apps"]=this["webpackJsonpbni-apps"]||[]).push([[67],{1252:function(e,s,t){"use strict";t.r(s);var a=t(25),c=t(1),n=t(1285),i=t(340),d=t(46),l=t(35),j=t(62),r=t(1263),o=t(0),b=function(){return Object(o.jsx)("div",{children:Object(o.jsxs)("div",{className:"d-flex align-items-center",children:[Object(o.jsx)("i",{className:"fa fa-check fa-2x pt-2 text-success"}),Object(o.jsxs)("div",{className:"ps-2",children:[Object(o.jsx)("div",{className:"fs-3",children:Object(o.jsx)(r.a,{id:"success",defaultMessage:"success"})}),Object(o.jsx)("div",{className:"fs-6",children:Object(o.jsx)(r.a,{id:"paymentReceived",defaultMessage:"paymentReceived"})})]})]})})},x=function(){return Object(o.jsx)("div",{className:"d-flex align-items-center justify-content-between",children:Object(o.jsx)("div",{children:Object(o.jsx)("span",{className:"fs-6",children:Object(o.jsx)(r.a,{id:"paymentSuccessMessage",defaultMessage:"paymentSuccessMessage"})})})})},f=function(){return Object(o.jsx)("div",{children:Object(o.jsxs)("div",{className:"d-flex align-items-center",children:[Object(o.jsx)("i",{className:"fa fa-times-circle fa-2x pt-2 text-danger"}),Object(o.jsxs)("div",{className:"ps-2",children:[Object(o.jsx)("div",{className:"fs-3",children:Object(o.jsx)(r.a,{id:"failed",defaultMessage:"failed"})}),Object(o.jsx)("div",{className:"fs-6",children:Object(o.jsx)(r.a,{id:"paymentNotReceived",defaultMessage:"paymentNotReceived"})})]})]})})},u=function(e){var s=e.sessionId;return Object(o.jsxs)("div",{className:"d-flex align-items-center justify-content-between",children:[Object(o.jsx)("div",{children:Object(o.jsx)("span",{className:"fs-6",children:Object(o.jsx)(r.a,{id:"paymentFailMessage",defaultMessage:"paymentFailMessage"})})}),Object(o.jsx)("a",{href:"?session_id=".concat(s),className:"btn btn-sm btn-primary rounded-pill",children:Object(o.jsx)(r.a,{id:"retry",defaultMessage:"retry"})})]})},p=t(221);s.default=function(e){var s=Object(c.useContext)(l.a),t=Object(c.useContext)(i.BillingContext),h=Object(c.useContext)(j.a),O=t.sessionId,m=t.showSessionPopup,g=t.setShowSessionPopup;return Object(c.useEffect)((function(){if(O){var e=new FormData;e.append("sessionId",O),e.append("appId",s.userConfig.appId),d.a.post("/payments/razorpay/checkoutSession",e).then((function(e){var t=e.data.response,c=t.status,n=t.newExpiry,i=t.sessionId;c&&n?(s.setUserConfig(Object(a.a)(Object(a.a)({},s.userConfig),{expiryDateTime:n})),h.setConfig({show:!0,className:"alert-success border-0 text-dark",type:"success",dismissible:!0,heading:Object(o.jsx)(b,{}),content:Object(o.jsx)(x,{})}),p.a.push("/billing")):h.setConfig({show:!0,className:"alert-danger border-0 text-dark",type:"danger",dismissible:!1,heading:Object(o.jsx)(f,{}),content:Object(o.jsx)(u,{sessionId:i})})})).catch((function(e){return console.log("bbb",e)})).finally((function(){return g(!1)}))}}),[O]),Object(o.jsxs)(n.a,{show:m,onHide:function(){return g(!1)},style:{zIndex:1e4},children:[Object(o.jsx)(n.a.Header,{closeButton:!0,children:Object(o.jsxs)(n.a.Title,{className:"d-flex align-items-center",children:[Object(o.jsx)("i",{className:"px-2 fa-1x fa fa-thumbs-up"}),Object(o.jsx)("span",{children:Object(o.jsx)(r.a,{id:"pleaseWait",defaultMessage:"pleaseWait"})})]})}),Object(o.jsx)(n.a.Body,{className:"rounded-bottom ".concat("dark"===s.userData.theme?"bg-dark text-white":"bg-white text-dark"),children:Object(o.jsxs)("div",{className:"text-center",children:[Object(o.jsx)("div",{children:Object(o.jsx)(r.a,{id:"doNotRefresh",defaultMessage:"doNotRefresh"})}),Object(o.jsx)("div",{className:"p-5",children:Object(o.jsx)("i",{className:"fa fa-circle-o-notch fa-spin fa-5x fa-fw"})})]})})]})}}}]);