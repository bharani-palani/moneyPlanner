(this["webpackJsonpbni-apps"]=this["webpackJsonpbni-apps"]||[]).push([[26],{1103:function(e,a,t){"use strict";t.r(a);var n=t(25),c=t(30),s=t(35),r=t(27),o=t(1),i=t.n(o),l=t(94),d=t(342),u=t(1269),b=t(934),m=t(46),f=t(39),p=t(105),g=t(776),_=t(1266),x=t(109),j=t.n(x),h=t(50),O=t.n(h),y=t(52),w=t.n(y),M=t(48),D=t(83),T=t(93),v=t(82),k=t(70),C=t(57),N=t(62),S=t(0),R=i.a.createContext(void 0);a.default=function(){var e=Object(g.a)(),a=Object(o.useContext)(f.a),t=Object(o.useContext)(k.a),i=Object(o.useContext)(N.a),x=Object(o.useState)(!1),h=Object(r.a)(x,2),y=h[0],P=h[1],I=Object(o.useState)(!1),E=Object(r.a)(I,2),Y=E[0],A=E[1],V=Object(o.useState)(!0),F=Object(r.a)(V,2),L=F[0],W=F[1],B=Object(o.useState)([]),z=Object(r.a)(B,2),H=z[0],J=z[1],K=Object(o.useState)({category:"",startDate:O()().startOf("month").toDate(),endDate:O()().endOf("month").toDate()}),U=Object(r.a)(K,2),Q=U[0],G=U[1],q=Object(o.useState)([]),X=Object(r.a)(q,2),Z=X[0],$=X[1],ee=Object(o.useState)([]),ae=Object(r.a)(ee,2),te=ae[0],ne=ae[1],ce={config:{header:{searchPlaceholder:e.formatMessage({id:"searchHere",defaultMessage:"searchHere"})},footer:{total:{title:e.formatMessage({id:"total",defaultMessage:"total"}),maxDecimal:2},pagination:{currentPage:"first",maxPagesToShow:5}}},id:"categorizedBankTrx",Table:"categorizedBankTrx",label:"Categorized bank trx",TableRows:["name","date","amount","type","comments"],TableAliasRows:[e.formatMessage({id:"name",defaultMessage:"name"}),e.formatMessage({id:"date",defaultMessage:"date"}),e.formatMessage({id:"amount",defaultMessage:"amount"}),e.formatMessage({id:"type",defaultMessage:"type"}),e.formatMessage({id:"comments",defaultMessage:"comments"})],defaultValues:[],rowElements:["label","label","label","label","label"]},se={config:{header:{searchPlaceholder:e.formatMessage({id:"searchHere",defaultMessage:"searchHere"})},footer:{total:{title:e.formatMessage({id:"total",defaultMessage:"total"}),maxDecimal:2},pagination:{currentPage:"first",maxPagesToShow:5}}},id:"catCreditCardTrx",Table:"categorizedCreditCardTrx",TableRows:["name","date","creditCard","credits","purchases","interest","comments"],TableAliasRows:[e.formatMessage({id:"name",defaultMessage:"name"}),e.formatMessage({id:"date",defaultMessage:"date"}),e.formatMessage({id:"creditCard",defaultMessage:"creditCard"}),e.formatMessage({id:"credits",defaultMessage:"credits"}),e.formatMessage({id:"purchases",defaultMessage:"purchases"}),e.formatMessage({id:"interest",defaultMessage:"interest"}),e.formatMessage({id:"comments",defaultMessage:"comments"})],defaultValues:[],rowElements:["label","label","label","label","label","label","label"]},re=function(){var e=Object(s.a)(Object(c.a)().mark((function e(){var t;return Object(c.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return W(!0),(t=new FormData).append("appId",a.userConfig.appId),e.abrupt("return",m.a.post("/account_planner/inc_exp_list",t).then((function(e){return J(e.data.response)})).catch((function(e){console.log(e)})).finally((function(){return W(!1)})));case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),oe=function(e){A(!0),$([]),ne([]),setTimeout((function(){var t=function(){var e=new FormData;return e.append("TableRows","a.inc_exp_name as name,a.inc_exp_date as date, a.inc_exp_amount as amount, a.inc_exp_type as type, a.inc_exp_comments as comments"),e.append("Table","categorizedBankTrx"),e.append("WhereClause","a.inc_exp_appId = '".concat(a.userConfig.appId,"' && b.inc_exp_cat_id = '").concat(Q.category,"' && d.bank_appId = '").concat(a.userConfig.appId,"' && a.inc_exp_date >= '").concat(O()(Q.startDate).format("YYYY-MM-DD").toString(),"' && a.inc_exp_date <= '").concat(O()(Q.endDate).format("YYYY-MM-DD").toString(),"'")),m.a.post("/account_planner/getAccountPlanner",e)}(),n=function(){var e=new FormData;return e.append("TableRows","a.cc_transaction as name, a.cc_date as date, d.credit_card_name as creditCard, a.cc_payment_credits as credits, a.cc_purchases as purchases, a.cc_taxes_interest as interest, a.cc_comments as comments"),e.append("Table","categorizedCreditCardTrx"),e.append("WhereClause","a.cc_appId = '".concat(a.userConfig.appId,"' && b.inc_exp_cat_id = '").concat(Q.category,"' && d.credit_card_appId = '").concat(a.userConfig.appId,"' && a.cc_date >= '").concat(O()(Q.startDate).format("YYYY-MM-DD").toString(),"' && a.cc_date <= '").concat(O()(Q.endDate).format("YYYY-MM-DD").toString(),"'")),m.a.post("/account_planner/getAccountPlanner",e)}();Promise.all([t,n]).then((function(a){$(a[0].data.response),ne(a[1].data.response),"function"===typeof e&&e()})).catch((function(e){return console.log("bbb",e)})).finally((function(){A(!1),P(!0)}))}),100)};Object(o.useEffect)((function(){re()}),[]);var ie=Object(T.a)(),le={fetch:ie.get("fetch"),categoryId:ie.get("categoryId"),startDate:ie.get("startDate"),endDate:ie.get("endDate")},de=Object(o.useState)(!1),ue=Object(r.a)(de,2),be=ue[0],me=ue[1];Object(o.useEffect)((function(){"category"===le.fetch&&le.categoryId&&(me(!0),G((function(e){return Object(n.a)(Object(n.a)({},e),{},{category:le.categoryId,startDate:O()(le.startDate).toDate(),endDate:O()(le.endDate).toDate()})})))}),[JSON.stringify(le)]),Object(o.useEffect)((function(){"category"===le.fetch&&Q.category&&Q.startDate&&Q.endDate&&be&&oe((function(){me(!1),setTimeout((function(){var e,a=Z.length>0?"categorizedBankTrx":"catCreditCardTrx";null===(e=document.getElementById(a))||void 0===e||e.scrollIntoView({behavior:"smooth",block:"center",inline:"start"})}),1e3)}))}),[JSON.stringify(le),Q.category,be]);var fe=function(){return Object(S.jsx)("div",{className:"relativeSpinner middle",children:Object(S.jsx)(w.a,{type:M.a.loadRandomSpinnerIcon(),color:document.documentElement.style.getPropertyValue("--app-theme-bg-color"),height:100,width:100})})},pe=["id","name","isIncomeMetric","isPlanMetric"],ge=["checkbox","textbox",{radio:{radioList:[{label:e.formatMessage({id:"yes",defaultMessage:"yes"}),value:"1",checked:!1},{label:e.formatMessage({id:"no",defaultMessage:"no"}),value:"0",checked:!0}]}},{radio:{radioList:[{label:e.formatMessage({id:"yes",defaultMessage:"yes"}),value:"1",checked:!1},{label:e.formatMessage({id:"no",defaultMessage:"no"}),value:"0",checked:!0}]}}],_e=v.b.filter((function(e){return"incExpCat"===e.id})).map((function(a){var n={header:{searchPlaceholder:e.formatMessage({id:"searchHere",defaultMessage:"searchHere"})},footer:{total:{locale:t.localeLanguage,currency:t.localeCurrency,maxDecimal:2},pagination:{currentPage:"last",maxPagesToShow:5}}};return a.config=n,a.TableAliasRows=pe.map((function(a){return e.formatMessage({id:a,defaultMessage:a})})),a.rowElements=ge,a}))[0],xe=Object(o.useState)([]),je=Object(r.a)(xe,2),he=je[0],Oe=je[1],ye=function(){Oe([]);var e=function(e,t){var n=new FormData;return n.append("TableRows",t),n.append("Table",e),n.append("appId",a.userConfig.appId),m.a.post("/account_planner/getAccountPlanner",n)}(_e.Table,_e.TableRows);Promise.all([e]).then(function(){var e=Object(s.a)(Object(c.a)().mark((function e(a){return Object(c.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:Oe(a[0].data.response);case 1:case"end":return e.stop()}}),e)})));return function(a){return e.apply(this,arguments)}}())};Object(o.useEffect)((function(){ye()}),[]);return Object(S.jsx)(R.Provider,{value:{incExpList:H,selection:Q},children:Object(S.jsxs)(d.a,{fluid:!0,children:[Object(S.jsx)(l.a,{icon:"fa fa-sitemap",intlId:"category"}),L?Object(S.jsx)(fe,{}):Object(S.jsxs)(S.Fragment,{children:[he.length>0&&Object(S.jsx)(S.Fragment,{children:Object(S.jsx)(D.a,{className:"pt-3",config:_e.config,Table:_e.Table,TableRows:_e.TableRows,TableAliasRows:_e.TableAliasRows,rowElements:_e.rowElements,defaultValues:_e.defaultValues,dbData:he,postApiUrl:"/account_planner/postAccountPlanner",onPostApi:function(t){return function(t,n){var c=t.status,s=t.data;if(200===c){if(t&&s&&"boolean"===typeof s.response&&null!==s.response&&s.response&&a.renderToast({message:e.formatMessage({id:"transactionSavedSuccessfully",defaultMessage:"transactionSavedSuccessfully"})}),t&&s&&"boolean"===typeof s.response&&null!==s.response&&!1===s.response&&a.renderToast({type:"error",icon:"fa fa-times-circle",message:e.formatMessage({id:"noFormChangeFound",defaultMessage:"noFormChangeFound"})}),t&&s&&null===s.response&&i.setConfig({show:!0,className:"alert-danger border-0 text-dark",type:"danger",dismissible:!0,heading:Object(S.jsx)(C.b,{}),content:Object(S.jsx)(C.a,{})}),t&&s&&"object"===typeof s.response&&null!==s.response){var r;r=1451===s.response.number?"foreignKeyDeleteMessage":"",a.renderToast({type:"error",icon:"fa fa-times-circle",message:e.formatMessage({id:r,defaultMessage:r})})}}else a.renderToast({type:"error",icon:"fa fa-times-circle",message:e.formatMessage({id:"unableToReachServer",defaultMessage:"unableToReachServer"})})}(t,_e.id)},onReFetchData:function(){return ye()},cellWidth:_e.cellWidth,ajaxButtonName:e.formatMessage({id:"submit",defaultMessage:"submit"}),appIdKeyValue:{key:"inc_exp_cat_appId",value:a.userConfig.appId},theme:a.userData.theme})}),Object(S.jsxs)(u.a,{children:[Object(S.jsx)(b.a,{sm:3,className:"react-responsive-ajax-data-table pb-2",children:Object(S.jsx)(p.a,{placeholder:"".concat(e.formatMessage({id:"select",defaultMessage:"select"})," ").concat(e.formatMessage({id:"category",defaultMessage:"category"})),onChange:function(e,a,t){G((function(e){return Object(n.a)(Object(n.a)({},e),{},{category:a})}))},element:{fetch:{dropDownList:H.map((function(e){return{id:e.id,value:e.value}}))}},value:Q.category,type:"single",searchable:!0,theme:a.userData.theme})}),Object(S.jsxs)(b.a,{sm:3,className:"d-flex align-items-center justify-content-between pb-2",children:[Object(S.jsx)("span",{children:Object(S.jsx)(_.a,{id:"startDate",defaultMessage:"startDate"})}),Object(S.jsx)(j.a,{className:"bg-white text-dark",value:Q.startDate,format:"yyyy-MM-dd",clearIcon:null,onChange:function(e){G((function(a){return Object(n.a)(Object(n.a)({},a),{},{startDate:e})}))},minDate:O()().subtract(1,"year").toDate(),maxDate:new Date,onKeyDown:function(e){e.preventDefault()}})]}),Object(S.jsxs)(b.a,{sm:3,className:"d-flex align-items-center justify-content-between pb-2",children:[Object(S.jsx)("span",{children:Object(S.jsx)(_.a,{id:"endDate",defaultMessage:"endDate"})}),Object(S.jsx)(j.a,{className:"bg-white text-dark",value:Q.endDate,format:"yyyy-MM-dd",clearIcon:null,onChange:function(e){G((function(a){return Object(n.a)(Object(n.a)({},a),{},{endDate:e})}))},minDate:O()().subtract(1,"year").toDate(),maxDate:new Date,onKeyDown:function(e){e.preventDefault()}})]}),Object(S.jsx)(b.a,{sm:3,className:"pb-2",children:Object(S.jsx)("button",{className:"btn btn-sm btn-bni w-100 border-0",onClick:function(){return oe()},disabled:Y||!Q.category,children:Y?Object(S.jsx)("i",{className:"fa fa-circle-o-notch fa-spin"}):Object(S.jsx)(_.a,{id:"generate",defaultMessage:"generate"})})})]})]}),Z.length>0&&Object(S.jsxs)(S.Fragment,{children:[Object(S.jsx)("div",{className:"py-2",children:Object(S.jsx)("span",{className:"badge ".concat("dark"===a.userData.theme?"bg-secondary text-white":"bg-light text-dark"),children:e.formatMessage({id:"bankTransactions",defaultMessage:"bankTransactions"})})}),Object(S.jsx)(D.a,{id:ce.id,config:ce.config,Table:ce.Table,TableRows:ce.TableRows,TableAliasRows:ce.TableAliasRows,rowElements:ce.rowElements,defaultValues:ce.defaultValues,dbData:Z,cellWidth:[20,7,10,5,20],theme:a.userData.theme})]}),te.length>0&&Object(S.jsxs)(S.Fragment,{children:[Object(S.jsx)("div",{className:"py-2",children:Object(S.jsx)("span",{className:"badge ".concat("dark"===a.userData.theme?"bg-secondary text-white":"bg-light text-dark"),children:e.formatMessage({id:"creditCardTransactions",defaultMessage:"creditCardTransactions"})})}),Object(S.jsx)(D.a,{id:se.id,config:se.config,Table:se.Table,TableRows:se.TableRows,TableAliasRows:se.TableAliasRows,rowElements:se.rowElements,defaultValues:se.defaultValues,dbData:te,cellWidth:[20,7,10,10,10,10,20],theme:a.userData.theme})]}),0===te.length&&0===Z.length&&y&&Object(S.jsx)("div",{className:"text-center py-2",children:Object(S.jsx)(_.a,{id:"noRecordsGenerated",defaultMessage:" "})})]})})}},342:function(e,a,t){"use strict";var n=t(25),c=t(28),s=t(36),r=t.n(s),o=t(1),i=t(43),l=t(0),d=["bsPrefix","fluid","as","className"],u=o.forwardRef((function(e,a){var t=e.bsPrefix,s=e.fluid,o=void 0!==s&&s,u=e.as,b=void 0===u?"div":u,m=e.className,f=Object(c.a)(e,d),p=Object(i.c)(t,"container"),g="string"===typeof o?"-".concat(o):"-fluid";return Object(l.jsx)(b,Object(n.a)(Object(n.a)({ref:a},f),{},{className:r()(m,o?"".concat(p).concat(g):p)}))}));u.displayName="Container",a.a=u},57:function(e,a,t){"use strict";t.d(a,"b",(function(){return r})),t.d(a,"a",(function(){return o}));t(1);var n=t(1266),c=t(58),s=t(0),r=function(){return Object(s.jsx)("div",{children:Object(s.jsxs)("div",{className:"d-flex align-items-center",children:[Object(s.jsx)("i",{className:"fa fa-exclamation-triangle fa-2x pt-2 text-danger"}),Object(s.jsxs)("div",{className:"ps-2",children:[Object(s.jsx)("div",{className:"fs-3",children:Object(s.jsx)(n.a,{id:"alert",defaultMessage:"alert"})}),Object(s.jsx)("div",{className:"fs-6",children:Object(s.jsx)(n.a,{id:"maximumQuotaExceeded",defaultMessage:"maximumQuotaExceeded"})})]})]})})},o=function(){return Object(s.jsx)("div",{className:"d-flex align-items-center justify-content-between",children:Object(s.jsxs)("div",{children:[Object(s.jsxs)(c.a,{className:"btn btn-sm btn-primary me-1 rounded-pill",to:"/billing",children:[Object(s.jsx)("i",{className:"fa fa-credit-card-alt pe-1"}),Object(s.jsx)(n.a,{id:"upgradeNow",defaultMessage:"upgradeNow"})]}),Object(s.jsx)("span",{className:"fs-6",children:Object(s.jsx)(n.a,{id:"accessUnlimitedStorage",defaultMessage:"accessUnlimitedStorage"})})]})})}},82:function(e,a,t){"use strict";t.d(a,"b",(function(){return s})),t.d(a,"c",(function(){return r})),t.d(a,"a",(function(){return o}));var n=t(50),c=t.n(n),s=[{id:"bankAccounts",Table:"banks",config:{footer:{total:{},pagination:{currentPage:"last",maxPagesToShow:5}}},label:"Bank accounts",TableRows:["bank_id","bank_name","bank_account_number","bank_swift_code","bank_account_type","bank_country","bank_sort","bank_locale","bank_currency"],defaultValues:[{bank_sort:"0"}],cellWidth:[4,13,11,11,13,13,5,13,13]},{id:"creditCardAccounts",Table:"credit_cards",label:"Credit cards",TableRows:["credit_card_id","credit_card_name","credit_card_number","credit_card_start_date","credit_card_end_date","credit_card_payment_date","credit_card_annual_interest","credit_card_locale","credit_card_currency"],defaultValues:[{credit_card_annual_interest:"48"}],cellWidth:[4,13,11,8,8,8,8,13,13]},{id:"incExpCat",config:{footer:{total:{},pagination:{currentPage:"last",maxPagesToShow:5}}},Table:"income_expense_category",label:"Income / expense categories",TableRows:["inc_exp_cat_id","inc_exp_cat_name","inc_exp_cat_is_metric","inc_exp_cat_is_plan_metric"],defaultValues:[{inc_exp_cat_is_metric:"0"},{inc_exp_cat_is_plan_metric:"0"}],cellWidth:[4,13,13,13]},{id:"incExpTemp",config:{footer:{total:{},pagination:{currentPage:"last",maxPagesToShow:5}}},Table:"income_expense_template",label:"Income expense template",TableRows:["template_id","temp_inc_exp_name","temp_amount","temp_inc_exp_type","temp_inc_exp_date","temp_category","temp_bank"],defaultValues:[{temp_inc_exp_date:"1"},{temp_inc_exp_type:"Dr"},{temp_amount:"0.00"}],cellWidth:[4,13,13,13,5,13,13]}],r=[{id:26,config:{footer:{total:{},pagination:{currentPage:"last",maxPagesToShow:5}}},Table:"income_expense",label:"Expenditures for selected month",TableRows:["inc_exp_id","inc_exp_name","inc_exp_amount","inc_exp_plan_amount","inc_exp_type","inc_exp_date","inc_exp_category","inc_exp_bank","inc_exp_comments"],TableAliasRows:[],defaultValues:[{inc_exp_type:"Dr"},{inc_exp_amount:0},{inc_exp_plan_amount:0},{inc_exp_date:c()(new Date).format("YYYY-MM-DD")}],rowElements:["checkbox","textbox","number","label",null,"date",{fetch:{dropDownList:[]}},{fetch:{dropDownList:[]}},"textbox"],showTooltipFor:["inc_exp_name","inc_exp_comments"]}],o=[{id:27,config:{footer:{total:{},pagination:{currentPage:"last",maxPagesToShow:5}},searchable:!0},Table:"credit_card_transactions",label:"Credit card transactions",TableRows:["cc_id","cc_transaction","cc_date","cc_opening_balance","cc_payment_credits","cc_purchases","cc_taxes_interest","cc_expected_balance","cc_for_card","cc_inc_exp_cat","cc_transaction_status","cc_comments","cc_added_at"],TableAliasRows:[],rowElements:["checkbox","textbox","date","number","number","number","number","label",{fetch:{dropDownList:[]}},{fetch:{dropDownList:[]}},{fetch:{dropDownList:[{checked:!1,id:"1",value:"Settled"},{checked:!1,id:"0",value:"Pending"},{checked:!1,id:"2",value:"Part payment"}]}},"textbox","relativeTime"],defaultValues:[{cc_date:c()().format("YYYY-MM-DD")},{cc_opening_balance:0},{cc_payment_credits:0},{cc_purchases:0},{cc_taxes_interest:0},{cc_expected_balance:0},{cc_transaction_status:"0"}],showTooltipFor:["cc_transaction","cc_comments"]}]},93:function(e,a,t){"use strict";t.d(a,"a",(function(){return s}));var n=t(1),c=t(72),s=function(){var e=Object(c.h)().search;return Object(n.useMemo)((function(){return new URLSearchParams(e)}),[e])}},94:function(e,a,t){"use strict";var n=t(25),c=t(28),s=t(1),r=t(1266),o=t(39),i=t(0),l=["icon","intlId","children"];a.a=function(e){var a=e.icon,t=e.intlId,d=e.children,u=Object(c.a)(e,l),b=Object(s.useContext)(o.a);return Object(i.jsx)("div",Object(n.a)(Object(n.a)({},u),{},{className:"bg-gradient ".concat("dark"===b.userData.theme?"bg-dark darkBoxShadow":"bg-white lightBoxShadow"," mt-2 ps-3 py-2 rounded-pill"),children:Object(i.jsxs)("div",{className:"d-flex justify-content-between align-items-center",children:[Object(i.jsxs)("div",{className:"d-flex align-items-center",children:[Object(i.jsx)("i",{className:"".concat(a," fa-1x")}),Object(i.jsx)("div",{className:"ps-2 mb-0",children:Object(i.jsx)(r.a,{id:t,defaultMessage:t})})]}),d]})}))}}}]);