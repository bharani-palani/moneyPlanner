(this["webpackJsonpledgerely.com"]=this["webpackJsonpledgerely.com"]||[]).push([[65],{1164:function(e,t,a){"use strict";a.r(t);var s=a(26),c=a(1),n=a(1265),r=a(903),i=a(68),o=a(41),l=a(785),d=a(49),u=a(1243),j=a(0),b=function(){return Object(j.jsxs)("div",{className:"d-flex align-items-center",children:[Object(j.jsx)("i",{className:"fa fa-thumbs-up pe-2 fa-2x"}),Object(j.jsxs)("ol",{children:[Object(j.jsx)("li",{children:Object(j.jsx)(u.a,{id:"receivedRequest",defaultMessage:"receivedRequest"})}),Object(j.jsx)("li",{children:Object(j.jsx)(u.a,{id:"dataSafety",defaultMessage:"dataSafety"})}),Object(j.jsx)("li",{children:Object(j.jsx)(u.a,{id:"revokeAnytime",defaultMessage:"revokeAnytime"})}),Object(j.jsx)("li",{children:Object(j.jsx)(u.a,{id:"autoDelete",defaultMessage:"autoDelete"})}),Object(j.jsxs)("li",{children:[Object(j.jsx)("i",{className:"fa fa-handshake-o pe-2"}),Object(j.jsx)(u.a,{id:"goodBye",defaultMessage:"goodBye"})]})]})]})},f=function(){return Object(j.jsx)("div",{children:Object(j.jsx)(u.a,{id:"sorryToGo",defaultMessage:"sorryToGo"})})},h=function(){return Object(j.jsx)("div",{children:Object(j.jsx)(u.a,{id:"welcomeBack",defaultMessage:"welcomeBack"})})},x=function(){return Object(j.jsx)("div",{children:Object(j.jsx)(u.a,{id:"accountRestore",defaultMessage:"accountRestore"})})};t.default=function(e){var t=Object(l.a)(),a=Object(c.useContext)(o.a),m=Object(c.useContext)(i.a),O=Object(c.useState)(!1),p=Object(s.a)(O,2),g=p[0],v=p[1],k=Object(c.useState)(!1),y=Object(s.a)(k,2),M=y[0],N=y[1],w=function(){return v(!1)},C=[{value:"notRelevantToMe",checked:!1},{value:"pricingNotComp",checked:!1},{value:"limitedFeatures",checked:!1},{value:"others",checked:!1}],T=Object(c.useState)(C),S=Object(s.a)(T,2),A=S[0],R=S[1],B=Object(c.useState)(""),D=Object(s.a)(B,2),I=D[0],F=D[1];Object(c.useEffect)((function(){if(g){var e=new FormData;e.append("appId",a.userConfig.appId),d.a.post("/payments/checkClosure",e).then((function(e){var t=e.data.response;N(t)})).catch((function(e){return console.log("bbb",e)}))}}),[g]);return Object(j.jsxs)("div",{className:"py-3",children:[Object(j.jsxs)(n.a,{show:g,onHide:w,style:{zIndex:1e4},children:[Object(j.jsx)(n.a.Header,{closeButton:!0,children:Object(j.jsx)(n.a.Title,{className:"d-flex align-items-center",children:M?Object(j.jsxs)("div",{className:"d-flex align-items-center",children:[Object(j.jsx)("i",{className:"pe-2 fa-2x fa fa-smile-o"}),Object(j.jsx)(u.a,{id:"cancelDeletion",defaultMessage:"cancelDeletion"})]}):Object(j.jsxs)("div",{className:"d-flex align-items-center",children:[Object(j.jsx)(u.a,{id:"sorryToGo",defaultMessage:"sorryToGo"}),Object(j.jsx)("i",{className:"ps-2 fa-2x fa fa-frown-o"})]})})}),Object(j.jsx)(n.a.Body,{className:"rounded-bottom ".concat("dark"===a.userData.theme?"bg-dark text-white":"bg-white text-dark"),children:M?Object(j.jsxs)("div",{children:[Object(j.jsx)("div",{className:"py-2",children:Object(j.jsx)(u.a,{id:"changedMind",defaultMessage:"changedMind"})}),Object(j.jsx)("button",{className:"w-100 btn btn-bni p-1 border-0",onClick:function(){return function(){var e=new FormData;e.append("appId",a.userConfig.appId),d.a.post("/payments/revokeAccount",e).then((function(e){e.data.response&&m.setConfig({show:!0,className:"alert-success border-0 text-dark",type:"success",dismissible:!0,heading:Object(j.jsx)(h,{}),content:Object(j.jsx)(x,{})})})).catch((function(e){a.renderToast({type:"error",icon:"fa fa-times-circle",message:t.formatMessage({id:"unableToReachServer",defaultMessage:"unableToReachServer"})})})).finally((function(){return w()}))}()},children:Object(j.jsx)(u.a,{id:"revokeAccount",defaultMessage:"revokeAccount"})})]}):Object(j.jsxs)("div",{children:[Object(j.jsx)("div",{className:"pt-2",children:Object(j.jsx)(u.a,{id:"closeThisAccount",defaultMessage:"closeThisAccount"})}),Object(j.jsx)("div",{className:"py-2",children:Object(j.jsx)(u.a,{id:"serveYouBetter",defaultMessage:"serveYouBetter"})}),A.map((function(e,t){return Object(j.jsxs)("label",{htmlFor:e.value,className:"d-block",children:[Object(j.jsx)("input",{id:e.value,name:"reasons",type:"checkbox",onChange:function(t){return R((function(a){return a.map((function(a){return a.value===e.value?Object.assign(a,{checked:t.target.checked}):a}))}))},checked:e.checked}),Object(j.jsx)("span",{className:"ps-2",children:Object(j.jsx)(u.a,{id:e.value,defaultMessage:e.value})})]},e.value)})),Object(j.jsx)("textarea",{placeholder:t.formatMessage({id:"comments",defaultMessage:"comments"}),rows:5,style:{resize:"none"},className:"form-control my-2",value:I,onChange:function(e){return F(e.target.value)}}),Object(j.jsx)("div",{children:Object(j.jsx)(r.a,{disabled:!(A.some((function(e){return e.checked}))&&I),variant:"danger",className:"w-100 my-2",onClick:function(){return function(){var e=new FormData;e.append("appId",a.userConfig.appId),e.append("selections",A.filter((function(e){return e.checked})).map((function(e){return e.value})).join(", ")),e.append("comments",I),d.a.post("/payments/accountClosure",e).then((function(e){e.data.response&&(R(C),F(""),m.setConfig({show:!0,className:"alert-danger border-0 text-dark",type:"danger",dismissible:!0,heading:Object(j.jsx)(f,{}),content:Object(j.jsx)(b,{})}))})).catch((function(e){a.renderToast({type:"error",icon:"fa fa-times-circle",message:t.formatMessage({id:"unableToReachServer",defaultMessage:"unableToReachServer"})})})).finally((function(){return w()}))}()},children:Object(j.jsx)(u.a,{id:"closeThisAccount",defaultMessage:"closeThisAccount"})})})]})})]}),Object(j.jsxs)("div",{onClick:function(){return v(!0)},className:"link-danger cursor-pointer d-flex align-items-center justify-content-center",children:[Object(j.jsx)("i",{className:"fa fa-frown-o fa-2x pe-2"}),Object(j.jsx)(u.a,{id:"accountClosure",defaultMessage:"accountClosure"})]})]})}}}]);