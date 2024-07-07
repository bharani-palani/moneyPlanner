/*! For license information please see 33.5f853a11.chunk.js.LICENSE.txt */
(this["webpackJsonpbni-apps"]=this["webpackJsonpbni-apps"]||[]).push([[33],{1181:function(e,t,r){"use strict";r.r(t);var n=r(30),o=r(25),a=r(36),i=r(27),c=r(1),s=r(187),l=r.n(s),u=r(1266),f=r(932),d=r(1282),h=r(933),p=r(35),y=r(340),m=r(90),v=r(775),b=r(1263),j=r(1182),g=r.n(j),x=r(46),w=r(0);t.default=function(e){var t=Object(v.a)(),r=Object(c.useContext)(m.a),s=Object(c.useContext)(p.a),j=Object(c.useContext)(y.BillingContext),O=Object(c.useState)(!1),k=Object(i.a)(O,2),L=k[0],C=k[1],_=j.summary,N=j.setSummary,P=j.cycleList,E=j.table,M=j.selectedPlan,S=j.cycleRef,z=j.total,I=j.billingLoader,G=g()(),F=Object(i.a)(G,1)[0],T=function(){var e=new FormData;return e.append("count","month"===_.month?1:12),e.append("planId",_.razorPayPlanId),e.append("custId",_.razorPayCustomerId),x.a.post("/payments/razorpay/createOrder",e)},D=Object(c.useCallback)(Object(a.a)(Object(n.a)().mark((function e(){return Object(n.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:T().then((function(e){var t=e.data.response,r=Object(o.a)(Object(o.a)({key:"rzp_test_n8LwLB41kxq88N",key_secret:"hUQLHlgH7Pfw2jB6CJuFGydr"},t),{},{currency:s.userConfig.currency,amount:100*_.invoice[0].value,redirect:"http://localhost:5001/billing?abc=123",handler:function(e){console.log(e)},prefill:{name:s.userConfig.name,email:s.userConfig.email,contact:s.userConfig.mobile,method:"card"},notes:{address:"Razorpay Corporate Office"},theme:{color:document.documentElement.style.getPropertyValue("--app-theme-bg-color")}});console.log("bbb",_,r),new F(r).open()})).catch((function(e){return console.log("bbb",e)}));case 1:case"end":return e.stop()}}),e)}))),[F,_]),A=[{id:0,href:r.cancellationRefundPolicyLink,label:t.formatMessage({id:"cancellationPolicy",defaultMessage:"cancellationPolicy"})},{id:1,href:r.termsOfServiceLink,label:t.formatMessage({id:"termsOfService",defaultMessage:"termsOfService"})},{id:2,href:r.privacyPolicyLink,label:t.formatMessage({id:"privacyPolicy",defaultMessage:"privacyPolicy"})}];return Object(w.jsxs)("div",{className:"my-3",children:[Object(w.jsx)("div",{className:"fs-3",children:Object(w.jsx)(b.a,{id:"summary",defaultMessage:"summary"})}),Object(w.jsxs)(u.a,{className:"p-1",children:[Object(w.jsx)(f.a,{md:6,className:"receipt rounded",style:{"--theme-color":"dark"===s.userData.theme?"#1a1d21":"#f7f7f7"},children:Object(w.jsx)("div",{className:"p-4",style:{background:"dark"===s.userData.theme?"#1a1d21":"#f7f7f7",color:"dark"===s.userData.theme?"#fff":"#000"},children:Object(w.jsxs)("div",{style:{height:"12rem"},className:"position-relative",children:[_.invoice.map((function(e,t){return Object(w.jsxs)(f.a,{xs:12,className:"d-flex justify-content-between align-items-center py-1",children:[Object(w.jsxs)("div",{children:[Object(w.jsx)("span",{children:Object(w.jsx)(b.a,{id:e.id,defaultMessage:e.id})}),Object(w.jsx)("span",{className:"ps-2",children:e.title?"(".concat(e.title,")"):""})]}),Object(w.jsx)("div",{children:I?Object(w.jsx)("i",{className:"fa fa-circle-o-notch fa-spin"}):e.value})]},e.id)})),Object(w.jsxs)("div",{style:{borderTop:"dotted 5px #aeaeae",position:"absolute",width:"100%",bottom:0},className:"d-flex justify-content-between align-items-center py-2",children:[Object(w.jsx)("div",{children:Object(w.jsx)(b.a,{id:"total",defaultMessage:"total"})}),Object(w.jsx)("div",{children:z.toFixed(2)})]})]})})}),Object(w.jsxs)(f.a,{md:6,className:"p-1",children:[Object(w.jsxs)("div",{className:"d-flex justify-content-between align-items-center py-1",children:[Object(w.jsx)("div",{children:Object(w.jsx)(b.a,{id:"paymentCycle",defaultMessage:"paymentCycle"})}),Object(w.jsx)("div",{children:Object(w.jsx)(d.a.Select,{value:_.cycle,disabled:!M.planCode,size:"sm",onChange:function(e){var t=E.filter((function(e){return e.planCode===M.planCode}))[0][S[e.target.value].prop],r=E.filter((function(e){return e.planCode===M.planCode}))[0][S[e.target.value].razorPayProp];N((function(n){return Object(o.a)(Object(o.a)({},n),{},{razorPayPlanId:r,cycle:e.target.value,invoice:n.invoice.map((function(e){return"price"===e.id?Object.assign(e,{value:t}):e}))})}))},children:P.map((function(e,t){return Object(w.jsx)("option",{value:e.value,children:e.label},t)}))})})]}),A.map((function(e){return Object(w.jsx)("div",{className:"py-1",children:Object(w.jsx)("a",{target:"_blank",rel:"noreferrer",className:"link-primary",href:e.href,children:e.label})},e.id)})),Object(w.jsxs)("div",{className:"d-flex justify-content-between align-items-center py-1",children:[Object(w.jsx)("div",{children:Object(w.jsx)(b.a,{id:"iAgreeTerms",defaultMessage:"iAgreeTerms"})}),Object(w.jsx)("div",{children:Object(w.jsx)(l.a,{className:"".concat(M.planCode?"animate__animated animate__headShake infiniteAnimation":""),onColor:document.documentElement.style.getPropertyValue("--app-theme-bg-color"),offColor:document.documentElement.style.getPropertyValue("--app-theme-color"),offHandleColor:"dark"===s.userData.theme?"#555":"#ddd",onHandleColor:"dark"===s.userData.theme?"#555":"#ddd",handleDiameter:15,checkedIcon:!1,uncheckedIcon:!1,height:10,width:30,onChange:function(e){C(e)},checked:L})})]}),Object(w.jsx)("div",{className:"p-1",children:Object(w.jsxs)(h.a,{disabled:!(L&&z>0&&!I),className:"btn btn-bni w-100 border-0 d-flex justify-content-between align-items-center",onClick:D,children:[Object(w.jsx)(b.a,{id:"subscribeNow",defaultMessage:"subscribeNow"}),Object(w.jsx)("div",{children:I?Object(w.jsx)("i",{className:"fa p-1 fa-2x fa-circle-o-notch fa-spin"}):Object(w.jsx)(y.CurrencyPrice,{amount:z,suffix:S[_.cycle].suffix,symbol:M.planPriceCurrencySymbol})})]})})]})]})]})}},1182:function(e,t,r){"use strict";var n=r(1183).default,o=r(460).default,a=r(228).default,i=r(229).default,c=this&&this.__awaiter||function(e,t,r,n){return new(r||(r=Promise))((function(o,a){function i(e){try{s(n.next(e))}catch(t){a(t)}}function c(e){try{s(n.throw(e))}catch(t){a(t)}}function s(e){var t;e.done?o(e.value):(t=e.value,t instanceof r?t:new r((function(e){e(t)}))).then(i,c)}s((n=n.apply(e,t||[])).next())}))};Object.defineProperty(t,"__esModule",{value:!0});var s=r(1),l=function(){function e(t){a(this,e),this.options=t,"undefined"!==typeof window&&(this.rzrpayInstannce=new window.Razorpay(this.options))}return i(e,[{key:"on",value:function(e,t){this.rzrpayInstannce.on(e,t)}},{key:"open",value:function(){this.rzrpayInstannce.open()}}]),e}();t.default=function(){var e=(0,s.useMemo)((function(){return"undefined"!==typeof window}),[]),t=(0,s.useState)(!1),r=o(t,2),a=r[0],i=r[1],u=(0,s.useCallback)((function(){return!(!e||!("Razorpay"in window))}),[]),f=(0,s.useCallback)((function(t){if(e)return new Promise((function(e,r){var n=document.createElement("script");n.src=t,n.onload=function(t){i(!0),e(t)},n.onerror=function(e){return r(e)},document.body.appendChild(n)}))}),[]);return(0,s.useEffect)((function(){u()||c(void 0,void 0,void 0,n().mark((function e(){return n().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,f("https://checkout.razorpay.com/v1/checkout.js");case 3:e.next=8;break;case 5:throw e.prev=5,e.t0=e.catch(0),new Error(e.t0);case 8:case"end":return e.stop()}}),e,null,[[0,5]])})))}),[]),[l,a]}},1183:function(e,t,r){var n=r(230).default;function o(){"use strict";e.exports=o=function(){return t},e.exports.__esModule=!0,e.exports.default=e.exports;var t={},r=Object.prototype,a=r.hasOwnProperty,i=Object.defineProperty||function(e,t,r){e[t]=r.value},c="function"==typeof Symbol?Symbol:{},s=c.iterator||"@@iterator",l=c.asyncIterator||"@@asyncIterator",u=c.toStringTag||"@@toStringTag";function f(e,t,r){return Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}),e[t]}try{f({},"")}catch(M){f=function(e,t,r){return e[t]=r}}function d(e,t,r,n){var o=t&&t.prototype instanceof y?t:y,a=Object.create(o.prototype),c=new N(n||[]);return i(a,"_invoke",{value:k(e,r,c)}),a}function h(e,t,r){try{return{type:"normal",arg:e.call(t,r)}}catch(M){return{type:"throw",arg:M}}}t.wrap=d;var p={};function y(){}function m(){}function v(){}var b={};f(b,s,(function(){return this}));var j=Object.getPrototypeOf,g=j&&j(j(P([])));g&&g!==r&&a.call(g,s)&&(b=g);var x=v.prototype=y.prototype=Object.create(b);function w(e){["next","throw","return"].forEach((function(t){f(e,t,(function(e){return this._invoke(t,e)}))}))}function O(e,t){function r(o,i,c,s){var l=h(e[o],e,i);if("throw"!==l.type){var u=l.arg,f=u.value;return f&&"object"==n(f)&&a.call(f,"__await")?t.resolve(f.__await).then((function(e){r("next",e,c,s)}),(function(e){r("throw",e,c,s)})):t.resolve(f).then((function(e){u.value=e,c(u)}),(function(e){return r("throw",e,c,s)}))}s(l.arg)}var o;i(this,"_invoke",{value:function(e,n){function a(){return new t((function(t,o){r(e,n,t,o)}))}return o=o?o.then(a,a):a()}})}function k(e,t,r){var n="suspendedStart";return function(o,a){if("executing"===n)throw new Error("Generator is already running");if("completed"===n){if("throw"===o)throw a;return E()}for(r.method=o,r.arg=a;;){var i=r.delegate;if(i){var c=L(i,r);if(c){if(c===p)continue;return c}}if("next"===r.method)r.sent=r._sent=r.arg;else if("throw"===r.method){if("suspendedStart"===n)throw n="completed",r.arg;r.dispatchException(r.arg)}else"return"===r.method&&r.abrupt("return",r.arg);n="executing";var s=h(e,t,r);if("normal"===s.type){if(n=r.done?"completed":"suspendedYield",s.arg===p)continue;return{value:s.arg,done:r.done}}"throw"===s.type&&(n="completed",r.method="throw",r.arg=s.arg)}}}function L(e,t){var r=t.method,n=e.iterator[r];if(void 0===n)return t.delegate=null,"throw"===r&&e.iterator.return&&(t.method="return",t.arg=void 0,L(e,t),"throw"===t.method)||"return"!==r&&(t.method="throw",t.arg=new TypeError("The iterator does not provide a '"+r+"' method")),p;var o=h(n,e.iterator,t.arg);if("throw"===o.type)return t.method="throw",t.arg=o.arg,t.delegate=null,p;var a=o.arg;return a?a.done?(t[e.resultName]=a.value,t.next=e.nextLoc,"return"!==t.method&&(t.method="next",t.arg=void 0),t.delegate=null,p):a:(t.method="throw",t.arg=new TypeError("iterator result is not an object"),t.delegate=null,p)}function C(e){var t={tryLoc:e[0]};1 in e&&(t.catchLoc=e[1]),2 in e&&(t.finallyLoc=e[2],t.afterLoc=e[3]),this.tryEntries.push(t)}function _(e){var t=e.completion||{};t.type="normal",delete t.arg,e.completion=t}function N(e){this.tryEntries=[{tryLoc:"root"}],e.forEach(C,this),this.reset(!0)}function P(e){if(e){var t=e[s];if(t)return t.call(e);if("function"==typeof e.next)return e;if(!isNaN(e.length)){var r=-1,n=function t(){for(;++r<e.length;)if(a.call(e,r))return t.value=e[r],t.done=!1,t;return t.value=void 0,t.done=!0,t};return n.next=n}}return{next:E}}function E(){return{value:void 0,done:!0}}return m.prototype=v,i(x,"constructor",{value:v,configurable:!0}),i(v,"constructor",{value:m,configurable:!0}),m.displayName=f(v,u,"GeneratorFunction"),t.isGeneratorFunction=function(e){var t="function"==typeof e&&e.constructor;return!!t&&(t===m||"GeneratorFunction"===(t.displayName||t.name))},t.mark=function(e){return Object.setPrototypeOf?Object.setPrototypeOf(e,v):(e.__proto__=v,f(e,u,"GeneratorFunction")),e.prototype=Object.create(x),e},t.awrap=function(e){return{__await:e}},w(O.prototype),f(O.prototype,l,(function(){return this})),t.AsyncIterator=O,t.async=function(e,r,n,o,a){void 0===a&&(a=Promise);var i=new O(d(e,r,n,o),a);return t.isGeneratorFunction(r)?i:i.next().then((function(e){return e.done?e.value:i.next()}))},w(x),f(x,u,"Generator"),f(x,s,(function(){return this})),f(x,"toString",(function(){return"[object Generator]"})),t.keys=function(e){var t=Object(e),r=[];for(var n in t)r.push(n);return r.reverse(),function e(){for(;r.length;){var n=r.pop();if(n in t)return e.value=n,e.done=!1,e}return e.done=!0,e}},t.values=P,N.prototype={constructor:N,reset:function(e){if(this.prev=0,this.next=0,this.sent=this._sent=void 0,this.done=!1,this.delegate=null,this.method="next",this.arg=void 0,this.tryEntries.forEach(_),!e)for(var t in this)"t"===t.charAt(0)&&a.call(this,t)&&!isNaN(+t.slice(1))&&(this[t]=void 0)},stop:function(){this.done=!0;var e=this.tryEntries[0].completion;if("throw"===e.type)throw e.arg;return this.rval},dispatchException:function(e){if(this.done)throw e;var t=this;function r(r,n){return i.type="throw",i.arg=e,t.next=r,n&&(t.method="next",t.arg=void 0),!!n}for(var n=this.tryEntries.length-1;n>=0;--n){var o=this.tryEntries[n],i=o.completion;if("root"===o.tryLoc)return r("end");if(o.tryLoc<=this.prev){var c=a.call(o,"catchLoc"),s=a.call(o,"finallyLoc");if(c&&s){if(this.prev<o.catchLoc)return r(o.catchLoc,!0);if(this.prev<o.finallyLoc)return r(o.finallyLoc)}else if(c){if(this.prev<o.catchLoc)return r(o.catchLoc,!0)}else{if(!s)throw new Error("try statement without catch or finally");if(this.prev<o.finallyLoc)return r(o.finallyLoc)}}}},abrupt:function(e,t){for(var r=this.tryEntries.length-1;r>=0;--r){var n=this.tryEntries[r];if(n.tryLoc<=this.prev&&a.call(n,"finallyLoc")&&this.prev<n.finallyLoc){var o=n;break}}o&&("break"===e||"continue"===e)&&o.tryLoc<=t&&t<=o.finallyLoc&&(o=null);var i=o?o.completion:{};return i.type=e,i.arg=t,o?(this.method="next",this.next=o.finallyLoc,p):this.complete(i)},complete:function(e,t){if("throw"===e.type)throw e.arg;return"break"===e.type||"continue"===e.type?this.next=e.arg:"return"===e.type?(this.rval=this.arg=e.arg,this.method="return",this.next="end"):"normal"===e.type&&t&&(this.next=t),p},finish:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var r=this.tryEntries[t];if(r.finallyLoc===e)return this.complete(r.completion,r.afterLoc),_(r),p}},catch:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var r=this.tryEntries[t];if(r.tryLoc===e){var n=r.completion;if("throw"===n.type){var o=n.arg;_(r)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(e,t,r){return this.delegate={iterator:P(e),resultName:t,nextLoc:r},"next"===this.method&&(this.arg=void 0),p}},t}e.exports=o,e.exports.__esModule=!0,e.exports.default=e.exports}}]);