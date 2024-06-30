(this["webpackJsonpbni-apps"]=this["webpackJsonpbni-apps"]||[]).push([[26],{1101:function(e,a,t){"use strict";t.r(a);var n=t(25),c=t(30),s=t(35),r=t(27),i=t(1),o=t.n(i),l=t(94),d=t(1268),u=t(1266),b=t(932),p=t(46),m=t(39),f=t(88),g=t(774),_=t(1263),j=t(108),x=t.n(j),h=t(50),O=t.n(h),y=t(52),M=t.n(y),w=t(48),T=t(83),D=t(93),v=t(82),k=t(70),S=t(57),C=t(62),P=t(0),N=o.a.createContext(void 0);a.default=function(){var e=Object(g.a)(),a=Object(i.useContext)(m.a),t=Object(i.useContext)(k.a),o=Object(i.useContext)(C.a),j=Object(i.useState)(!1),h=Object(r.a)(j,2),y=h[0],R=h[1],I=Object(i.useState)(!1),E=Object(r.a)(I,2),Y=E[0],A=E[1],V=Object(i.useState)(!0),F=Object(r.a)(V,2),L=F[0],W=F[1],B=Object(i.useState)([]),z=Object(r.a)(B,2),H=z[0],J=z[1],K=Object(i.useState)({category:"",startDate:O()().startOf("month").toDate(),endDate:O()().endOf("month").toDate()}),U=Object(r.a)(K,2),Q=U[0],G=U[1],q=Object(i.useState)([]),X=Object(r.a)(q,2),Z=X[0],$=X[1],ee=Object(i.useState)([]),ae=Object(r.a)(ee,2),te=ae[0],ne=ae[1],ce={start:0,limit:10,searchString:""},se=Object(i.useState)(ce),re=Object(r.a)(se,2),ie=re[0],oe=re[1],le=Object(i.useState)(ce),de=Object(r.a)(le,2),ue=de[0],be=de[1],pe=Object(i.useState)(ce),me=Object(r.a)(pe,2),fe=me[0],ge=me[1],_e={config:{header:{searchPlaceholder:e.formatMessage({id:"searchHere",defaultMessage:"searchHere"}),searchable:!0},footer:{total:{title:e.formatMessage({id:"total",defaultMessage:"total"}),maxDecimal:2},pagination:{currentPage:"first",maxPagesToShow:5}}},id:"categorizedBankTrx",Table:"categorizedBankTrx",label:"Categorized bank trx",TableRows:["inc_exp_name","inc_exp_date","inc_exp_amount","inc_exp_type","inc_exp_comments"],TableAliasRows:[e.formatMessage({id:"name",defaultMessage:"name"}),e.formatMessage({id:"date",defaultMessage:"date"}),e.formatMessage({id:"amount",defaultMessage:"amount"}),e.formatMessage({id:"type",defaultMessage:"type"}),e.formatMessage({id:"comments",defaultMessage:"comments"})],defaultValues:[],rowElements:["label","label","label","label","label"]},je={config:{header:{searchPlaceholder:e.formatMessage({id:"searchHere",defaultMessage:"searchHere"}),searchable:!0},footer:{total:{title:e.formatMessage({id:"total",defaultMessage:"total"}),maxDecimal:2},pagination:{currentPage:"first",maxPagesToShow:5}}},id:"catCreditCardTrx",Table:"categorizedCreditCardTrx",TableRows:["cc_transaction","cc_date","credit_card_name","cc_payment_credits","cc_purchases","cc_taxes_interest","cc_comments"],TableAliasRows:[e.formatMessage({id:"name",defaultMessage:"name"}),e.formatMessage({id:"date",defaultMessage:"date"}),e.formatMessage({id:"creditCard",defaultMessage:"creditCard"}),e.formatMessage({id:"credits",defaultMessage:"credits"}),e.formatMessage({id:"purchases",defaultMessage:"purchases"}),e.formatMessage({id:"interest",defaultMessage:"interest"}),e.formatMessage({id:"comments",defaultMessage:"comments"})],defaultValues:[],rowElements:["label","label","label","label","label","label","label"]},xe=function(){var e=Object(s.a)(Object(c.a)().mark((function e(){var t;return Object(c.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return W(!0),(t=new FormData).append("limit",ie.limit),t.append("start",ie.start),t.append("searchString",ie.searchString),t.append("appId",a.userConfig.appId),e.abrupt("return",p.a.post("/account_planner/inc_exp_list",t).then((function(e){return J(e.data.response)})).catch((function(e){console.log(e)})).finally((function(){return W(!1)})));case 7:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),he=function(e){A(!0),$([]),ne([]),setTimeout((function(){var t=function(){var e=new FormData;return e.append("limit",ue.limit),e.append("start",ue.start),e.append("searchString",ue.searchString),e.append("TableRows","a.inc_exp_name, a.inc_exp_date, a.inc_exp_amount, a.inc_exp_type, a.inc_exp_comments"),e.append("Table","categorizedBankTrx"),e.append("WhereClause","a.inc_exp_appId = '".concat(a.userConfig.appId,"' && b.inc_exp_cat_id = '").concat(Q.category,"' && d.bank_appId = '").concat(a.userConfig.appId,"' && a.inc_exp_date >= '").concat(O()(Q.startDate).format("YYYY-MM-DD").toString(),"' && a.inc_exp_date <= '").concat(O()(Q.endDate).format("YYYY-MM-DD").toString(),"'")),p.a.post("/account_planner/getAccountPlanner",e)}(),n=function(){var e=new FormData;return e.append("limit",fe.limit),e.append("start",fe.start),e.append("searchString",fe.searchString),e.append("TableRows","a.cc_transaction, a.cc_date, d.credit_card_name, a.cc_payment_credits, a.cc_purchases, a.cc_taxes_interest, a.cc_comments"),e.append("Table","categorizedCreditCardTrx"),e.append("WhereClause","a.cc_appId = '".concat(a.userConfig.appId,"' && b.inc_exp_cat_id = '").concat(Q.category,"' && d.credit_card_appId = '").concat(a.userConfig.appId,"' && a.cc_date >= '").concat(O()(Q.startDate).format("YYYY-MM-DD").toString(),"' && a.cc_date <= '").concat(O()(Q.endDate).format("YYYY-MM-DD").toString(),"'")),p.a.post("/account_planner/getAccountPlanner",e)}();Promise.all([t,n]).then((function(a){var t=a[0].data.response,n=a[1].data.response;$(t),ne(n);var c=(null===t||void 0===t?void 0:t.table.length)>0?"bank":"creditCard";"function"===typeof e&&e(c)})).catch((function(e){return console.log("bbb",e)})).finally((function(){A(!1),R(!0)}))}),100)};Object(i.useEffect)((function(){xe()}),[ie]);var Oe=Object(D.a)(),ye={fetch:Oe.get("fetch"),categoryId:Oe.get("categoryId"),startDate:Oe.get("startDate"),endDate:Oe.get("endDate")},Me=Object(i.useState)(!1),we=Object(r.a)(Me,2),Te=we[0],De=we[1];Object(i.useEffect)((function(){"category"===ye.fetch&&ye.categoryId&&(De(!0),G((function(e){return Object(n.a)(Object(n.a)({},e),{},{category:ye.categoryId,startDate:O()(ye.startDate).toDate(),endDate:O()(ye.endDate).toDate()})})))}),[JSON.stringify(ye)]),Object(i.useEffect)((function(){"category"===ye.fetch&&Q.category&&Q.startDate&&Q.endDate&&Te&&he((function(e){De(!1),setTimeout((function(){var a,t="bank"===e?"categorizedBankTrx":"catCreditCardTrx";null===(a=document.getElementById(t))||void 0===a||a.scrollIntoView({behavior:"smooth",block:"center",inline:"start"})}),1e3)}))}),[JSON.stringify(ye),Q.category,Te]);var ve=function(){return Object(P.jsx)("div",{className:"relativeSpinner",children:Object(P.jsx)(M.a,{type:w.a.loadRandomSpinnerIcon(),color:document.documentElement.style.getPropertyValue("--app-theme-bg-color"),height:100,width:100})})},ke=["id","name","isIncomeMetric","isPlanMetric"],Se=["checkbox","textbox",{radio:{radioList:[{label:e.formatMessage({id:"yes",defaultMessage:"yes"}),value:"1",checked:!1},{label:e.formatMessage({id:"no",defaultMessage:"no"}),value:"0",checked:!0}]}},{radio:{radioList:[{label:e.formatMessage({id:"yes",defaultMessage:"yes"}),value:"1",checked:!1},{label:e.formatMessage({id:"no",defaultMessage:"no"}),value:"0",checked:!0}]}}],Ce=v.b.filter((function(e){return"incExpCat"===e.id})).map((function(a){var n={header:{searchPlaceholder:e.formatMessage({id:"searchHere",defaultMessage:"searchHere"}),searchable:!0},footer:{total:{locale:t.localeLanguage,currency:t.localeCurrency,maxDecimal:2},pagination:{currentPage:"last",maxPagesToShow:5}}};return a.config=n,a.TableAliasRows=ke.map((function(a){return e.formatMessage({id:a,defaultMessage:a})})),a.rowElements=Se,a}))[0],Pe=Object(i.useState)([]),Ne=Object(r.a)(Pe,2),Re=Ne[0],Ie=Ne[1],Ee=function(){Ie([]);var e=function(e,t){var n=new FormData;return n.append("TableRows",t),n.append("Table",e),n.append("limit",ie.limit),n.append("start",ie.start),n.append("searchString",ie.searchString),n.append("appId",a.userConfig.appId),p.a.post("/account_planner/getAccountPlanner",n)}(Ce.Table,Ce.TableRows);Promise.all([e]).then(function(){var e=Object(s.a)(Object(c.a)().mark((function e(a){return Object(c.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:Ie(a[0].data.response);case 1:case"end":return e.stop()}}),e)})));return function(a){return e.apply(this,arguments)}}())};Object(i.useEffect)((function(){Ee()}),[ie]);return Object(i.useEffect)((function(){y&&he()}),[ue,fe,y]),Object(P.jsx)(N.Provider,{value:{incExpList:H,selection:Q},children:Object(P.jsxs)(d.a,{fluid:!0,children:[Object(P.jsx)(l.a,{icon:"fa fa-sitemap",intlId:"category"}),L?Object(P.jsx)(ve,{}):Object(P.jsxs)(P.Fragment,{children:[Re&&Object.keys(Re).length>0&&Object(P.jsx)(P.Fragment,{children:Object(P.jsx)(T.a,{className:"pt-3",config:Ce.config,Table:Ce.Table,TableRows:Ce.TableRows,TableAliasRows:Ce.TableAliasRows,rowElements:Ce.rowElements,defaultValues:Ce.defaultValues,dbData:Re,postApiUrl:"/account_planner/postAccountPlanner",onPostApi:function(t){return function(t,n){var c=t.status,s=t.data;if(200===c){if(t&&s&&"boolean"===typeof s.response&&null!==s.response&&s.response&&a.renderToast({message:e.formatMessage({id:"transactionSavedSuccessfully",defaultMessage:"transactionSavedSuccessfully"})}),t&&s&&"boolean"===typeof s.response&&null!==s.response&&!1===s.response&&a.renderToast({type:"error",icon:"fa fa-times-circle",message:e.formatMessage({id:"noFormChangeFound",defaultMessage:"noFormChangeFound"})}),t&&s&&null===s.response&&o.setConfig({show:!0,className:"alert-danger border-0 text-dark",type:"danger",dismissible:!0,heading:Object(P.jsx)(S.b,{}),content:Object(P.jsx)(S.a,{})}),t&&s&&"object"===typeof s.response&&null!==s.response){var r;r=1451===s.response.number?"foreignKeyDeleteMessage":"",a.renderToast({type:"error",icon:"fa fa-times-circle",message:e.formatMessage({id:r,defaultMessage:r})})}}else a.renderToast({type:"error",icon:"fa fa-times-circle",message:e.formatMessage({id:"unableToReachServer",defaultMessage:"unableToReachServer"})})}(t,Ce.id)},apiParams:ie,onChangeParams:function(e){return function(e){oe((function(a){return Object(n.a)(Object(n.a)({},a),e)}))}(e)},onReFetchData:function(){return Ee()},cellWidth:Ce.cellWidth,ajaxButtonName:e.formatMessage({id:"submit",defaultMessage:"submit"}),appIdKeyValue:{key:"inc_exp_cat_appId",value:a.userConfig.appId},theme:a.userData.theme})}),Object(P.jsxs)(u.a,{className:"align-items-center",children:[Object(P.jsx)(b.a,{sm:3,className:"react-responsive-ajax-data-table pb-2",children:Object(P.jsx)(f.a,{placeholder:"".concat(e.formatMessage({id:"select",defaultMessage:"select"})," ").concat(e.formatMessage({id:"category",defaultMessage:"category"})),onChange:function(e,a,t){G((function(e){return Object(n.a)(Object(n.a)({},e),{},{category:a})}))},element:{fetch:{dropDownList:H.map((function(e){return{id:e.id,value:e.value}}))},searchable:!0},value:Q.category,type:"single",searchable:!0,theme:a.userData.theme})}),Object(P.jsxs)(b.a,{sm:3,className:"d-flex align-items-center justify-content-between pb-2",children:[Object(P.jsx)("span",{children:Object(P.jsx)(_.a,{id:"startDate",defaultMessage:"startDate"})}),Object(P.jsx)(x.a,{className:"bg-white text-dark",value:Q.startDate,format:"yyyy-MM-dd",clearIcon:null,onChange:function(e){G((function(a){return Object(n.a)(Object(n.a)({},a),{},{startDate:e})}))},maxDate:new Date,onKeyDown:function(e){e.preventDefault()}})]}),Object(P.jsxs)(b.a,{sm:3,className:"d-flex align-items-center justify-content-between pb-2",children:[Object(P.jsx)("span",{children:Object(P.jsx)(_.a,{id:"endDate",defaultMessage:"endDate"})}),Object(P.jsx)(x.a,{className:"bg-white text-dark",value:Q.endDate,format:"yyyy-MM-dd",clearIcon:null,onChange:function(e){G((function(a){return Object(n.a)(Object(n.a)({},a),{},{endDate:e})}))},maxDate:new Date,onKeyDown:function(e){e.preventDefault()}})]}),Object(P.jsx)(b.a,{sm:3,className:"pb-2",children:Object(P.jsx)("button",{className:"btn btn-sm btn-bni w-100 border-0",onClick:function(){return he()},disabled:Y||!Q.category,children:Object(P.jsx)(_.a,{id:"generate",defaultMessage:"generate"})})})]})]}),Y&&Object(P.jsx)(ve,{}),Z&&Object.keys(Z).length>0&&Object(P.jsxs)(P.Fragment,{children:[Object(P.jsx)("div",{className:"py-2",children:Object(P.jsx)("span",{className:"badge ".concat("dark"===a.userData.theme?"bg-secondary text-white":"bg-light text-dark"),children:e.formatMessage({id:"bankTransactions",defaultMessage:"bankTransactions"})})}),Object(P.jsx)(T.a,{id:_e.id,config:_e.config,Table:_e.Table,TableRows:_e.TableRows,TableAliasRows:_e.TableAliasRows,rowElements:_e.rowElements,defaultValues:_e.defaultValues,dbData:Z,cellWidth:[20,7,10,5,20],theme:a.userData.theme,apiParams:ue,onChangeParams:function(e){return function(e){be((function(a){return Object(n.a)(Object(n.a)({},a),e)}))}(e)}})]}),te&&Object.keys(te).length>0>0&&Object(P.jsxs)(P.Fragment,{children:[Object(P.jsx)("div",{className:"py-2",children:Object(P.jsx)("span",{className:"badge ".concat("dark"===a.userData.theme?"bg-secondary text-white":"bg-light text-dark"),children:e.formatMessage({id:"creditCardTransactions",defaultMessage:"creditCardTransactions"})})}),Object(P.jsx)(T.a,{id:je.id,config:je.config,Table:je.Table,TableRows:je.TableRows,TableAliasRows:je.TableAliasRows,rowElements:je.rowElements,defaultValues:je.defaultValues,dbData:te,cellWidth:[20,7,10,10,10,10,20],theme:a.userData.theme,apiParams:fe,onChangeParams:function(e){return function(e){ge((function(a){return Object(n.a)(Object(n.a)({},a),e)}))}(e)}})]}),0===Object.keys(te).length&&0===Object.keys(Z).length&&y&&Object(P.jsx)("div",{className:"text-center py-2",children:Object(P.jsx)(_.a,{id:"noRecordsGenerated",defaultMessage:" "})})]})})}},57:function(e,a,t){"use strict";t.d(a,"b",(function(){return r})),t.d(a,"a",(function(){return i}));t(1);var n=t(1263),c=t(58),s=t(0),r=function(){return Object(s.jsx)("div",{children:Object(s.jsxs)("div",{className:"d-flex align-items-center",children:[Object(s.jsx)("i",{className:"fa fa-exclamation-triangle fa-2x pt-2 text-danger"}),Object(s.jsxs)("div",{className:"ps-2",children:[Object(s.jsx)("div",{className:"fs-3",children:Object(s.jsx)(n.a,{id:"alert",defaultMessage:"alert"})}),Object(s.jsx)("div",{className:"fs-6",children:Object(s.jsx)(n.a,{id:"maximumQuotaExceeded",defaultMessage:"maximumQuotaExceeded"})})]})]})})},i=function(){return Object(s.jsx)("div",{className:"d-flex align-items-center justify-content-between",children:Object(s.jsxs)("div",{children:[Object(s.jsxs)(c.a,{className:"btn btn-sm btn-primary me-1 rounded-pill",to:"/billing",children:[Object(s.jsx)("i",{className:"fa fa-credit-card-alt pe-1"}),Object(s.jsx)(n.a,{id:"upgradeNow",defaultMessage:"upgradeNow"})]}),Object(s.jsx)("span",{className:"fs-6",children:Object(s.jsx)(n.a,{id:"accessUnlimitedStorage",defaultMessage:"accessUnlimitedStorage"})})]})})}},82:function(e,a,t){"use strict";t.d(a,"b",(function(){return s})),t.d(a,"c",(function(){return r})),t.d(a,"a",(function(){return i}));var n=t(50),c=t.n(n),s=[{id:"bankAccounts",Table:"banks",config:{footer:{total:{},pagination:{currentPage:"last",maxPagesToShow:5}}},label:"Bank accounts",TableRows:["bank_id","bank_name","bank_account_number","bank_swift_code","bank_account_type","bank_country","bank_sort","bank_locale","bank_currency"],defaultValues:[{bank_sort:"0"}],cellWidth:[4,13,11,11,13,13,5,13,13]},{id:"creditCardAccounts",Table:"credit_cards",label:"Credit cards",TableRows:["credit_card_id","credit_card_name","credit_card_number","credit_card_start_date","credit_card_end_date","credit_card_payment_date","credit_card_annual_interest","credit_card_locale","credit_card_currency"],defaultValues:[{credit_card_annual_interest:"48"}],cellWidth:[4,13,11,8,8,8,8,13,13]},{id:"incExpCat",config:{footer:{total:{},pagination:{currentPage:"last",maxPagesToShow:5}}},Table:"income_expense_category",label:"Income / expense categories",TableRows:["inc_exp_cat_id","inc_exp_cat_name","inc_exp_cat_is_metric","inc_exp_cat_is_plan_metric"],defaultValues:[{inc_exp_cat_is_metric:"0"},{inc_exp_cat_is_plan_metric:"0"}],cellWidth:[4,13,13,13]},{id:"incExpTemp",config:{footer:{total:{},pagination:{currentPage:"last",maxPagesToShow:5}}},Table:"income_expense_template",label:"Income expense template",TableRows:["template_id","temp_inc_exp_name","temp_amount","temp_inc_exp_type","temp_inc_exp_date","temp_category","temp_bank"],defaultValues:[{temp_inc_exp_date:"1"},{temp_inc_exp_type:"Dr"},{temp_amount:"0.00"}],cellWidth:[4,13,13,13,5,13,13]}],r=[{id:26,config:{footer:{total:{},pagination:{currentPage:"last",maxPagesToShow:5}}},Table:"income_expense",label:"Expenditures for selected month",TableRows:["inc_exp_id","inc_exp_name","inc_exp_amount","inc_exp_plan_amount","inc_exp_type","inc_exp_date","inc_exp_category","inc_exp_bank","inc_exp_comments"],TableAliasRows:[],defaultValues:[{inc_exp_type:"Dr"},{inc_exp_amount:0},{inc_exp_plan_amount:0},{inc_exp_date:c()(new Date).format("YYYY-MM-DD")}],rowElements:["checkbox","textbox","number","label",null,"date",{fetch:{dropDownList:[]},searchable:!0},{fetch:{dropDownList:[]},searchable:!0},"textbox"],showTooltipFor:["inc_exp_name","inc_exp_comments"]}],i=[{id:27,config:{footer:{total:{},pagination:{currentPage:"last",maxPagesToShow:5}},searchable:!0},Table:"credit_card_transactions",label:"Credit card transactions",TableRows:["cc_id","cc_transaction","cc_date","cc_opening_balance","cc_payment_credits","cc_purchases","cc_taxes_interest","cc_expected_balance","cc_for_card","cc_inc_exp_cat","cc_transaction_status","cc_comments","cc_added_at"],TableAliasRows:[],rowElements:["checkbox","textbox","date","number","number","number","number","label",{fetch:{dropDownList:[]},searchable:!0},{fetch:{dropDownList:[]},searchable:!0},{fetch:{dropDownList:[{checked:!1,id:"1",value:"Settled"},{checked:!1,id:"0",value:"Pending"},{checked:!1,id:"2",value:"Part payment"}]}},"textbox","relativeTime"],defaultValues:[{cc_date:c()().format("YYYY-MM-DD")},{cc_opening_balance:0},{cc_payment_credits:0},{cc_purchases:0},{cc_taxes_interest:0},{cc_expected_balance:0},{cc_transaction_status:"0"}],showTooltipFor:["cc_transaction","cc_comments"]}]},93:function(e,a,t){"use strict";t.d(a,"a",(function(){return s}));var n=t(1),c=t(72),s=function(){var e=Object(c.h)().search;return Object(n.useMemo)((function(){return new URLSearchParams(e)}),[e])}},94:function(e,a,t){"use strict";var n=t(25),c=t(28),s=t(1),r=t(1263),i=t(39),o=t(0),l=["icon","intlId","children"];a.a=function(e){var a=e.icon,t=e.intlId,d=e.children,u=Object(c.a)(e,l),b=Object(s.useContext)(i.a);return Object(o.jsx)("div",Object(n.a)(Object(n.a)({},u),{},{className:"bg-gradient ".concat("dark"===b.userData.theme?"bg-dark darkBoxShadow":"bg-white lightBoxShadow"," mt-2 ps-3 py-2 rounded-pill"),children:Object(o.jsxs)("div",{className:"d-flex justify-content-between align-items-center",children:[Object(o.jsxs)("div",{className:"d-flex align-items-center",children:[Object(o.jsx)("i",{className:"".concat(a," fa-1x")}),Object(o.jsx)("div",{className:"ps-2 mb-0",children:Object(o.jsx)(r.a,{id:t,defaultMessage:t})})]}),d]})}))}}}]);