(this["webpackJsonpbni-apps"]=this["webpackJsonpbni-apps"]||[]).push([[25],{1109:function(e,t,n){"use strict";n.r(t);var a=n(30),c=n(35),r=n(27),o=n(1),i=n(934),s=n(345),l=n(1293),u=n(82),d=n(83),p=n(46),f=n(52),m=n.n(f),b=n(48),_=n(39),x=n(62),h=n(435),g=n(70),v=n(168),j=n(57),w=n(94),y=n(0),O=function(e){var t=e.intl,n=Object(o.useState)([]),f=Object(r.a)(n,2),h=f[0],O=f[1],k=Object(o.useState)(!1),T=Object(r.a)(k,2),E=T[0],P=T[1],M=Object(o.useContext)(_.a),S=Object(o.useContext)(x.a),A=Object(o.useContext)(g.a),N={income_expense_template:[{template_id:"",temp_inc_exp_name:"",temp_amount:"0.00",temp_inc_exp_type:"Dr",temp_inc_exp_date:"1",temp_category:"",temp_bank:""}]},C=function(e,t){var n=new FormData;return n.append("TableRows",t),n.append("Table",e),n.append("appId",M.userConfig.appId),p.a.post("/account_planner/getAccountPlanner",n)},R=function(){var e=Object(c.a)(Object(a.a)().mark((function e(t){var n;return Object(a.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:O([]),P(!0),n=C(t.Table,t.TableRows),Promise.all([n]).then(function(){var e=Object(c.a)(Object(a.a)().mark((function e(n){return Object(a.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:n[0].data.response.length>0?O(n[0].data.response):O(N[t.Table]);case 1:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()).finally((function(){return P(!1)}));case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();Object(o.useEffect)((function(){R(d.b.filter((function(e){return"incExpTemp"===e.id}))[0])}),[]);var D,L={incExpTemp:["id","name","amount","type","date","category","bank"]},I={incExpTemp:["checkbox","textbox","number",{radio:{radioList:[{label:t.formatMessage({id:"credit",defaultMessage:"credit"}),value:"Cr",checked:!1},{label:t.formatMessage({id:"debit",defaultMessage:"debit"}),value:"Dr",checked:!0}]}},{fetch:{dropDownList:new Array(28).fill("_").map((function(e,t){return{checked:"1"===String(t+1),id:String(t+1),value:String(t+1)}}))}},"textbox","textbox"]},U={incExpTemp:[{whichKey:"temp_amount",forKey:"temp_inc_exp_type",forCondition:"equals",forValue:[{key:"+",value:"Cr"},{key:"-",value:"Dr"}],showDifference:{indexes:[0,1],showStability:!1}}]},F=d.b.filter((function(e){return"incExpTemp"===e.id})).map((function(e){var n={header:{searchPlaceholder:t.formatMessage({id:"searchHere",defaultMessage:"searchHere"})},footer:{total:{locale:A.localeLanguage,currency:A.localeCurrency,maxDecimal:2},pagination:{currentPage:"last",recordsPerPage:10,maxPagesToShow:5}}};return e.config=n,e.TableAliasRows=L[e.id].map((function(e){return t.formatMessage({id:e,defaultMessage:e})})),e.rowElements=I[e.id],e.showTotal=U[e.id],e})),V={incExpTemp:"temp_appId"};return Object(y.jsx)(s.a,{fluid:!0,children:Object(y.jsxs)("div",{className:"settings",children:[Object(y.jsx)(w.a,{icon:"fa fa-calendar",intlId:"planners",children:h.length>0&&Object(y.jsx)(v.a,{datas:b.a.stripCommasInCSV(h),filename:"planners.csv",className:"d-inline",children:Object(y.jsx)(l.a,{placement:"left",delay:{show:250,hide:400},overlay:(D=t.formatMessage({id:"download",defaultMessage:"download"}),Object(y.jsx)(i.a,{id:"button-tooltip-".concat(Math.random()),className:"in show",children:D})),triggerType:"hover",children:Object(y.jsx)("i",{className:"fa fa-download pe-3"})})})}),F.sort((function(e,t){return e.id-t.id})).map((function(e,n){return Object(y.jsx)("div",{children:h.length>0&&!E?Object(y.jsxs)("div",{className:"pt-2",children:[Object(y.jsx)("div",{className:"text-end"}),Object(y.jsx)(u.a,{className:"pt-2",config:e.config,Table:e.Table,TableRows:e.TableRows,TableAliasRows:e.TableAliasRows,showTotal:e.showTotal,rowElements:e.rowElements,defaultValues:e.defaultValues,dbData:h,postApiUrl:"/account_planner/postAccountPlanner",onPostApi:function(n){return function(e,n){var a=e.status,c=e.data;if(200===a){if(e&&c&&"boolean"===typeof c.response&&null!==c.response&&c.response&&M.renderToast({message:t.formatMessage({id:"transactionSavedSuccessfully",defaultMessage:"transactionSavedSuccessfully"})}),e&&c&&"boolean"===typeof c.response&&null!==c.response&&!1===c.response&&M.renderToast({type:"error",icon:"fa fa-times-circle",message:t.formatMessage({id:"noFormChangeFound",defaultMessage:"noFormChangeFound"})}),e&&c&&null===c.response&&S.setConfig({show:!0,className:"alert-danger border-0 text-dark",type:"danger",dismissible:!0,heading:Object(y.jsx)(j.b,{}),content:Object(y.jsx)(j.a,{})}),e&&c&&"object"===typeof c.response&&null!==c.response){var r;r=1451===c.response.number?"foreignKeyDeleteMessage":"",M.renderToast({type:"error",icon:"fa fa-times-circle",message:t.formatMessage({id:r,defaultMessage:r})})}}else M.renderToast({type:"error",icon:"fa fa-times-circle",message:t.formatMessage({id:"unableToReachServer",defaultMessage:"unableToReachServer"})})}(n,e.id)},onReFetchData:function(){return R(e)},cellWidth:e.cellWidth,ajaxButtonName:t.formatMessage({id:"submit",defaultMessage:"submit"}),appIdKeyValue:{key:V[e.id],value:M.userConfig.appId},theme:M.userData.theme},n)]}):Object(y.jsx)("div",{className:"relativeSpinner middle",children:Object(y.jsx)(m.a,{type:b.a.loadRandomSpinnerIcon(),color:document.documentElement.style.getPropertyValue("--app-theme-bg-color"),height:100,width:100})})},n)}))]})})};O.defaultProps={property:"String name"},t.default=Object(h.c)(O)},168:function(e,t,n){"use strict";n.d(t,"a",(function(){return m}));var a=n(30),c=n(5),r=n(6),o=n(9),i=n(7),s=n(8),l=n(323),u=n(1),d=n(195),p=function(e,t,n,a){return new(n||(n=Promise))((function(c,r){function o(e){try{s(a.next(e))}catch(t){r(t)}}function i(e){try{s(a.throw(e))}catch(t){r(t)}}function s(e){var t;e.done?c(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(o,i)}s((a=a.apply(e,t||[])).next())}))},f=function(e,t){var n={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&t.indexOf(a)<0&&(n[a]=e[a]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var c=0;for(a=Object.getOwnPropertySymbols(e);c<a.length;c++)t.indexOf(a[c])<0&&Object.prototype.propertyIsEnumerable.call(e,a[c])&&(n[a[c]]=e[a[c]])}return n},m=function(e){Object(i.a)(n,e);var t=Object(s.a)(n);function n(){var e;return Object(c.a)(this,n),(e=t.apply(this,arguments)).handleClick=function(){return p(Object(o.a)(e),void 0,void 0,Object(a.a)().mark((function e(){var t,n,c,r,o,i,s,u,p,f,m,b,_,x,h,g;return Object(a.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t=this.props,n=t.suffix,c=t.prefix,r=t.bom,o=t.extension,i=t.disabled,s=t.meta,u=t.separator,p=t.handleError,f=t.handleEmpty,!i){e.next=3;break}return e.abrupt("return");case 3:return m=this.props.filename,e.prev=4,e.next=7,Object(d.a)(this.props);case 7:b=e.sent,e.next=13;break;case 10:return e.prev=10,e.t0=e.catch(4),e.abrupt("return",null===p||void 0===p?void 0:p(e.t0));case 13:if(b){e.next=19;break}if(!f){e.next=18;break}return e.abrupt("return",f());case 18:b="";case 19:_=!1!==r?"\ufeff":"",x=s?"sep=".concat(u,"\r\n"):"",h=o||".csv",-1===m.indexOf(h)&&(m+=h),n&&(m="string"===typeof n||"number"===typeof n?m.replace(h,"_".concat(n).concat(h)):m.replace(h,"_".concat((new Date).getTime()).concat(h))),c&&(m="string"===typeof c||"number"===typeof c?"".concat(c,"_").concat(m):"".concat((new Date).getTime(),"_").concat(m)),g=new Blob(["".concat(_).concat(x).concat(b)],{type:"text/csv;charset=utf-8"}),l.saveAs(g,m);case 27:case"end":return e.stop()}}),e,this,[[4,10]])})))},e}return Object(r.a)(n,[{key:"render",value:function(){var e=this.props,t=e.children,n=e.text,a=e.disabled,c=(e.bom,e.filename,e.extension,e.prefix,e.suffix,e.meta,e.handleError,e.handleEmpty,e.columns,e.datas,e.separator,e.noHeader,e.wrapColumnChar,e.newLineAtEnd,e.chunkSize,f(e,["children","text","disabled","bom","filename","extension","prefix","suffix","meta","handleError","handleEmpty","columns","datas","separator","noHeader","wrapColumnChar","newLineAtEnd","chunkSize"]));return"undefined"===typeof t?u.createElement("button",Object.assign({type:"button"},c,{onClick:this.handleClick,disabled:a}),n||"Download"):u.createElement("div",Object.assign({role:"button",tabIndex:0},c,{onClick:this.handleClick,onKeyPress:this.handleClick}),t)}}]),n}(u.Component)},195:function(e,t,n){"use strict";(function(e){n.d(t,"a",(function(){return p}));var a=n(30),c=n(42),r=function(e,t,n,a){return new(n||(n=Promise))((function(c,r){function o(e){try{s(a.next(e))}catch(t){r(t)}}function i(e){try{s(a.throw(e))}catch(t){r(t)}}function s(e){var t;e.done?c(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(o,i)}s((a=a.apply(e,t||[])).next())}))},o="function"===typeof requestAnimationFrame?requestAnimationFrame:e.nextTick,i=function(e){return function(t){return"".concat(e).concat(t).concat(e)}},s=function(e,t){return function(n){t&&n.push(""),e(n.join("\r\n"))}},l=function(e){return e.reduce((function(e,t){return Array.isArray(t)?e:(n=Object.keys(t),a=e,n.reduce((function(e,t){return e[t]=t,e}),a));var n,a}),{})},u=function(e){return e.reduce((function(e,t){var n;return"string"===typeof t?e[t]=t:e[t.id]=null!==(n=t.displayName)&&void 0!==n?n:t.id,e}),{})};var d=function(e,t,n,a,r,i,s){var l=function(e,t){return Object(c.a)(Array(Math.ceil(e.length/t))).reduce((function(n,a,c){var r=c*t;return n.concat([e.slice(r,r+t)])}),[])}(a,s),u=0;return function a(){if(u>=l.length)e(n);else{var c=l[u];u+=1,c.map((function(e){return Array.isArray(e)?e:r.map((function(t){var n;return null!==(n=e[t])&&void 0!==n?n:""}))})).forEach((function(e){n.push(e.map(t).join(i))})),o(a)}}};function p(e){var t=e.columns,n=e.datas,c=e.separator,p=void 0===c?",":c,f=e.noHeader,m=void 0!==f&&f,b=e.wrapColumnChar,_=void 0===b?"":b,x=e.newLineAtEnd,h=void 0!==x&&x,g=e.chunkSize,v=void 0===g?1e3:g;return r(this,void 0,void 0,Object(a.a)().mark((function e(){var c=this;return Object(a.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",new Promise((function(e,f){return r(c,void 0,void 0,Object(a.a)().mark((function c(){var r,b,x,g,j,w,y;return Object(a.a)().wrap((function(a){for(;;)switch(a.prev=a.next){case 0:if(r=s(e,h),b=i(_),a.prev=2,"function"!==typeof n){a.next=9;break}return a.next=6,n();case 6:a.t0=a.sent,a.next=12;break;case 9:return a.next=11,n;case 11:a.t0=a.sent;case 12:if(n=a.t0,Array.isArray(n)){a.next=15;break}return a.abrupt("return",e());case 15:x=t?u(t):l(n),g=[],m||(j=Object.values(x)).length>0&&g.push(j.map(b).join(p)),w=Object.keys(x),y=d(r,b,g,n,w,p,v),o(y),a.next=26;break;case 23:return a.prev=23,a.t1=a.catch(2),a.abrupt("return",f(a.t1));case 26:case"end":return a.stop()}}),c,null,[[2,23]])})))})));case 1:case"end":return e.stop()}}),e)})))}}).call(this,n(64))},323:function(e,t,n){(function(n){var a,c,r;c=[],void 0===(r="function"===typeof(a=function(){"use strict";function t(e,t){return"undefined"==typeof t?t={autoBom:!1}:"object"!=typeof t&&(console.warn("Deprecated: Expected third argument to be a object"),t={autoBom:!t}),t.autoBom&&/^\s*(?:text\/\S*|application\/xml|\S*\/\S*\+xml)\s*;.*charset\s*=\s*utf-8/i.test(e.type)?new Blob(["\ufeff",e],{type:e.type}):e}function a(e,t,n){var a=new XMLHttpRequest;a.open("GET",e),a.responseType="blob",a.onload=function(){s(a.response,t,n)},a.onerror=function(){console.error("could not download file")},a.send()}function c(e){var t=new XMLHttpRequest;t.open("HEAD",e,!1);try{t.send()}catch(e){}return 200<=t.status&&299>=t.status}function r(e){try{e.dispatchEvent(new MouseEvent("click"))}catch(a){var t=document.createEvent("MouseEvents");t.initMouseEvent("click",!0,!0,window,0,0,0,80,20,!1,!1,!1,!1,0,null),e.dispatchEvent(t)}}var o="object"==typeof window&&window.window===window?window:"object"==typeof self&&self.self===self?self:"object"==typeof n&&n.global===n?n:void 0,i=o.navigator&&/Macintosh/.test(navigator.userAgent)&&/AppleWebKit/.test(navigator.userAgent)&&!/Safari/.test(navigator.userAgent),s=o.saveAs||("object"!=typeof window||window!==o?function(){}:"download"in HTMLAnchorElement.prototype&&!i?function(e,t,n){var i=o.URL||o.webkitURL,s=document.createElement("a");t=t||e.name||"download",s.download=t,s.rel="noopener","string"==typeof e?(s.href=e,s.origin===location.origin?r(s):c(s.href)?a(e,t,n):r(s,s.target="_blank")):(s.href=i.createObjectURL(e),setTimeout((function(){i.revokeObjectURL(s.href)}),4e4),setTimeout((function(){r(s)}),0))}:"msSaveOrOpenBlob"in navigator?function(e,n,o){if(n=n||e.name||"download","string"!=typeof e)navigator.msSaveOrOpenBlob(t(e,o),n);else if(c(e))a(e,n,o);else{var i=document.createElement("a");i.href=e,i.target="_blank",setTimeout((function(){r(i)}))}}:function(e,t,n,c){if((c=c||open("","_blank"))&&(c.document.title=c.document.body.innerText="downloading..."),"string"==typeof e)return a(e,t,n);var r="application/octet-stream"===e.type,s=/constructor/i.test(o.HTMLElement)||o.safari,l=/CriOS\/[\d]+/.test(navigator.userAgent);if((l||r&&s||i)&&"undefined"!=typeof FileReader){var u=new FileReader;u.onloadend=function(){var e=u.result;e=l?e:e.replace(/^data:[^;]*;/,"data:attachment/file;"),c?c.location.href=e:location=e,c=null},u.readAsDataURL(e)}else{var d=o.URL||o.webkitURL,p=d.createObjectURL(e);c?c.location=p:location.href=p,c=null,setTimeout((function(){d.revokeObjectURL(p)}),4e4)}});o.saveAs=s.saveAs=s,e.exports=s})?a.apply(t,c):a)||(e.exports=r)}).call(this,n(54))},345:function(e,t,n){"use strict";var a=n(25),c=n(28),r=n(36),o=n.n(r),i=n(1),s=n(43),l=n(0),u=["bsPrefix","fluid","as","className"],d=i.forwardRef((function(e,t){var n=e.bsPrefix,r=e.fluid,i=void 0!==r&&r,d=e.as,p=void 0===d?"div":d,f=e.className,m=Object(c.a)(e,u),b=Object(s.c)(n,"container"),_="string"===typeof i?"-".concat(i):"-fluid";return Object(l.jsx)(p,Object(a.a)(Object(a.a)({ref:t},m),{},{className:o()(f,i?"".concat(b).concat(_):b)}))}));d.displayName="Container",t.a=d},57:function(e,t,n){"use strict";n.d(t,"b",(function(){return o})),n.d(t,"a",(function(){return i}));n(1);var a=n(1269),c=n(58),r=n(0),o=function(){return Object(r.jsx)("div",{children:Object(r.jsxs)("div",{className:"d-flex align-items-center",children:[Object(r.jsx)("i",{className:"fa fa-exclamation-triangle fa-2x pt-2 text-danger"}),Object(r.jsxs)("div",{className:"ps-2",children:[Object(r.jsx)("div",{className:"fs-3",children:Object(r.jsx)(a.a,{id:"alert",defaultMessage:"alert"})}),Object(r.jsx)("div",{className:"fs-6",children:Object(r.jsx)(a.a,{id:"maximumQuotaExceeded",defaultMessage:"maximumQuotaExceeded"})})]})]})})},i=function(){return Object(r.jsx)("div",{className:"d-flex align-items-center justify-content-between",children:Object(r.jsxs)("div",{children:[Object(r.jsxs)(c.a,{className:"btn btn-sm btn-primary me-1 rounded-pill",to:"/billing",children:[Object(r.jsx)("i",{className:"fa fa-credit-card-alt pe-1"}),Object(r.jsx)(a.a,{id:"upgradeNow",defaultMessage:"upgradeNow"})]}),Object(r.jsx)("span",{className:"fs-6",children:Object(r.jsx)(a.a,{id:"accessUnlimitedStorage",defaultMessage:"accessUnlimitedStorage"})})]})})}},83:function(e,t,n){"use strict";n.d(t,"b",(function(){return r})),n.d(t,"c",(function(){return o})),n.d(t,"a",(function(){return i}));var a=n(50),c=n.n(a),r=[{id:"bankAccounts",Table:"banks",config:{footer:{total:{},pagination:{currentPage:"last",recordsPerPage:10,maxPagesToShow:5}}},label:"Bank accounts",TableRows:["bank_id","bank_name","bank_account_number","bank_swift_code","bank_account_type","bank_country","bank_sort","bank_locale","bank_currency"],defaultValues:[{bank_sort:"0"}],cellWidth:[4,13,11,11,13,13,5,13,13]},{id:"creditCardAccounts",Table:"credit_cards",label:"Credit cards",TableRows:["credit_card_id","credit_card_name","credit_card_number","credit_card_start_date","credit_card_end_date","credit_card_payment_date","credit_card_annual_interest","credit_card_locale","credit_card_currency"],defaultValues:[{credit_card_annual_interest:"48"}],cellWidth:[4,13,11,8,8,8,8,13,13]},{id:"incExpCat",config:{footer:{total:{},pagination:{currentPage:"last",recordsPerPage:5,maxPagesToShow:5}}},Table:"income_expense_category",label:"Income / expense categories",TableRows:["inc_exp_cat_id","inc_exp_cat_name","inc_exp_cat_is_metric","inc_exp_cat_is_plan_metric"],defaultValues:[{inc_exp_cat_is_metric:"0"},{inc_exp_cat_is_plan_metric:"0"}],cellWidth:[4,13,13,13]},{id:"incExpTemp",config:{footer:{total:{},pagination:{currentPage:"last",recordsPerPage:5,maxPagesToShow:5}}},Table:"income_expense_template",label:"Income expense template",TableRows:["template_id","temp_inc_exp_name","temp_amount","temp_inc_exp_type","temp_inc_exp_date","temp_category","temp_bank"],defaultValues:[{temp_inc_exp_date:"1"},{temp_inc_exp_type:"Dr"},{temp_amount:"0.00"}],cellWidth:[4,13,13,13,5,13,13]}],o=[{id:26,config:{footer:{total:{},pagination:{currentPage:"last",recordsPerPage:10,maxPagesToShow:5}}},Table:"income_expense",label:"Expenditures for selected month",TableRows:["inc_exp_id","inc_exp_name","inc_exp_amount","inc_exp_plan_amount","inc_exp_type","inc_exp_date","inc_exp_category","inc_exp_bank","inc_exp_comments"],TableAliasRows:[],defaultValues:[{inc_exp_type:"Dr"},{inc_exp_amount:0},{inc_exp_plan_amount:0},{inc_exp_date:c()(new Date).format("YYYY-MM-DD")}],rowKeyUp:"",rowElements:["checkbox","textbox","number","label",null,"date",{fetch:{dropDownList:[]}},{fetch:{dropDownList:[]}},"textbox"],showTooltipFor:["inc_exp_name","inc_exp_comments"]}],i=[{id:27,config:{footer:{total:{},pagination:{currentPage:"last",recordsPerPage:10,maxPagesToShow:5}}},Table:"credit_card_transactions",label:"Credit card transactions",TableRows:["cc_id","cc_transaction","cc_date","cc_opening_balance","cc_payment_credits","cc_purchases","cc_taxes_interest","cc_expected_balance","cc_for_card","cc_inc_exp_cat","cc_transaction_status","cc_comments","cc_added_at"],TableAliasRows:[],showTotal:["cc_opening_balance","cc_payment_credits","cc_purchases","cc_taxes_interest","cc_expected_balance"],rowKeyUp:"cc_expected_balance=((Number(row.cc_opening_balance) - Number(row.cc_payment_credits)) + (Number(row.cc_purchases) + Number(row.cc_taxes_interest))).toFixed(2)",rowElements:["checkbox","textbox","date","number","number","number","number","label",{fetch:{dropDownList:[]}},{fetch:{dropDownList:[]}},{fetch:{dropDownList:[{checked:!1,id:"1",value:"Settled"},{checked:!1,id:"0",value:"Pending"},{checked:!1,id:"2",value:"Part payment"}]}},"textbox","relativeTime"],defaultValues:[{cc_date:c()().format("YYYY-MM-DD")},{cc_opening_balance:0},{cc_payment_credits:0},{cc_purchases:0},{cc_taxes_interest:0},{cc_expected_balance:0},{cc_transaction_status:"0"}],showTooltipFor:["cc_transaction","cc_comments"]}]},94:function(e,t,n){"use strict";var a=n(25),c=n(28),r=n(1),o=n(1269),i=n(39),s=n(0),l=["icon","intlId","children"];t.a=function(e){var t=e.icon,n=e.intlId,u=e.children,d=Object(c.a)(e,l),p=Object(r.useContext)(i.a);return Object(s.jsx)("div",Object(a.a)(Object(a.a)({},d),{},{className:"bg-gradient ".concat("dark"===p.userData.theme?"bg-dark darkBoxShadow":"bg-white lightBoxShadow"," mt-2 ps-3 py-2 rounded-pill"),children:Object(s.jsxs)("div",{className:"d-flex justify-content-between align-items-center",children:[Object(s.jsxs)("div",{className:"d-flex align-items-center",children:[Object(s.jsx)("i",{className:"".concat(t," fa-1x")}),Object(s.jsx)("div",{className:"ps-2 mb-0",children:Object(s.jsx)(o.a,{id:n,defaultMessage:n})})]}),u]})}))}}}]);