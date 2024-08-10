(this["webpackJsonpbni-apps"]=this["webpackJsonpbni-apps"]||[]).push([[59],{1101:function(e,a,t){"use strict";t.r(a);var n=t(25),s=t(29),c=t(35),r=t(27),o=t(1),i=t.n(o),l=t(131),d=t(1265),u=t(1263),b=t(933),f=t(47),p=t(38),g=t(67),m=t(777),j=t(1260),h=t(119),O=t.n(h),x=t(51),M=t.n(x),y=t(52),_=t.n(y),D=t(48),w=t(91),T=t(81),v=t(107),C=t(72),S=t(61),k=t(65),R=t(0),I=i.a.createContext(void 0);a.default=function(){var e=Object(m.a)(),a=Object(o.useContext)(p.a),t=Object(o.useContext)(C.a),i=Object(o.useContext)(k.a),h=Object(o.useState)(!1),x=Object(r.a)(h,2),y=x[0],P=x[1],N=Object(o.useState)(!1),E=Object(r.a)(N,2),Y=E[0],A=E[1],F=Object(o.useState)(!0),V=Object(r.a)(F,2),z=V[0],B=V[1],H=Object(o.useState)([]),L=Object(r.a)(H,2),W=L[0],J=L[1],K=Object(o.useState)({category:"",startDate:M()().startOf("month").toDate(),endDate:M()().endOf("month").toDate()}),U=Object(r.a)(K,2),G=U[0],q=U[1],Q=Object(o.useState)([]),X=Object(r.a)(Q,2),Z=X[0],$=X[1],ee=Object(o.useState)([]),ae=Object(r.a)(ee,2),te=ae[0],ne=ae[1],se={start:0,limit:10,searchString:""},ce=Object(o.useState)(se),re=Object(r.a)(ce,2),oe=re[0],ie=re[1],le=Object(o.useState)(se),de=Object(r.a)(le,2),ue=de[0],be=de[1],fe=Object(o.useState)(se),pe=Object(r.a)(fe,2),ge=pe[0],me=pe[1],je={config:{header:{searchPlaceholder:e.formatMessage({id:"searchHere",defaultMessage:"searchHere"}),searchable:!0},footer:{total:{title:e.formatMessage({id:"total",defaultMessage:"total"}),maxDecimal:2},pagination:{currentPage:"first",maxPagesToShow:5}}},id:"categorizedBankTrx",Table:"categorizedBankTrx",label:"Categorized bank trx",TableRows:["inc_exp_name","inc_exp_date","inc_exp_amount","inc_exp_type","inc_exp_comments"],TableAliasRows:[e.formatMessage({id:"name",defaultMessage:"name"}),e.formatMessage({id:"date",defaultMessage:"date"}),e.formatMessage({id:"amount",defaultMessage:"amount"}),e.formatMessage({id:"type",defaultMessage:"type"}),e.formatMessage({id:"comments",defaultMessage:"comments"})],defaultValues:[],rowElements:["label","label","label","label","label"]},he={config:{header:{searchPlaceholder:e.formatMessage({id:"searchHere",defaultMessage:"searchHere"}),searchable:!0},footer:{total:{title:e.formatMessage({id:"total",defaultMessage:"total"}),maxDecimal:2},pagination:{currentPage:"first",maxPagesToShow:5}}},id:"catCreditCardTrx",Table:"categorizedCreditCardTrx",TableRows:["cc_transaction","cc_date","credit_card_name","cc_payment_credits","cc_purchases","cc_taxes_interest","cc_comments"],TableAliasRows:[e.formatMessage({id:"name",defaultMessage:"name"}),e.formatMessage({id:"date",defaultMessage:"date"}),e.formatMessage({id:"creditCard",defaultMessage:"creditCard"}),e.formatMessage({id:"credits",defaultMessage:"credits"}),e.formatMessage({id:"purchases",defaultMessage:"purchases"}),e.formatMessage({id:"interest",defaultMessage:"interest"}),e.formatMessage({id:"comments",defaultMessage:"comments"})],defaultValues:[],rowElements:["label","label","label","label","label","label","label"]},Oe=function(){var e=Object(c.a)(Object(s.a)().mark((function e(){var t;return Object(s.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return B(!0),(t=new FormData).append("limit",oe.limit),t.append("start",oe.start),t.append("searchString",oe.searchString),t.append("appId",a.userConfig.appId),e.abrupt("return",f.a.post("/account_planner/inc_exp_list",t).then((function(e){return J(e.data.response)})).catch((function(e){console.log(e)})).finally((function(){return B(!1)})));case 7:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),xe=function(e){A(!0),$([]),ne([]),setTimeout((function(){var t=function(){var e=new FormData;return e.append("limit",ue.limit),e.append("start",ue.start),e.append("searchString",ue.searchString),e.append("TableRows","a.inc_exp_name, a.inc_exp_date, a.inc_exp_amount, a.inc_exp_type, a.inc_exp_comments"),e.append("Table","categorizedBankTrx"),e.append("WhereClause","a.inc_exp_appId = '".concat(a.userConfig.appId,"' && b.inc_exp_cat_id = '").concat(G.category,"' && d.bank_appId = '").concat(a.userConfig.appId,"' && a.inc_exp_date >= '").concat(M()(G.startDate).format("YYYY-MM-DD").toString(),"' && a.inc_exp_date <= '").concat(M()(G.endDate).format("YYYY-MM-DD").toString(),"'")),f.a.post("/account_planner/getAccountPlanner",e)}(),n=function(){var e=new FormData;return e.append("limit",ge.limit),e.append("start",ge.start),e.append("searchString",ge.searchString),e.append("TableRows","a.cc_transaction, a.cc_date, d.credit_card_name, a.cc_payment_credits, a.cc_purchases, a.cc_taxes_interest, a.cc_comments"),e.append("Table","categorizedCreditCardTrx"),e.append("WhereClause","a.cc_appId = '".concat(a.userConfig.appId,"' && b.inc_exp_cat_id = '").concat(G.category,"' && d.credit_card_appId = '").concat(a.userConfig.appId,"' && a.cc_date >= '").concat(M()(G.startDate).format("YYYY-MM-DD").toString(),"' && a.cc_date <= '").concat(M()(G.endDate).format("YYYY-MM-DD").toString(),"'")),f.a.post("/account_planner/getAccountPlanner",e)}();Promise.all([t,n]).then((function(a){var t=a[0].data.response,n=a[1].data.response;$(t),ne(n);var s=(null===t||void 0===t?void 0:t.table.length)>0?"bank":"creditCard";"function"===typeof e&&e(s)})).catch((function(e){return console.log("bbb",e)})).finally((function(){A(!1),P(!0)}))}),100)};Object(o.useEffect)((function(){Oe()}),[oe]);var Me=Object(T.a)(),ye={fetch:Me.get("fetch"),categoryId:Me.get("categoryId"),startDate:Me.get("startDate"),endDate:Me.get("endDate")},_e=Object(o.useState)(!1),De=Object(r.a)(_e,2),we=De[0],Te=De[1];Object(o.useEffect)((function(){"category"===ye.fetch&&ye.categoryId&&(Te(!0),q((function(e){return Object(n.a)(Object(n.a)({},e),{},{category:ye.categoryId,startDate:M()(ye.startDate).toDate(),endDate:M()(ye.endDate).toDate()})})))}),[JSON.stringify(ye)]),Object(o.useEffect)((function(){"category"===ye.fetch&&G.category&&G.startDate&&G.endDate&&we&&xe((function(e){Te(!1),setTimeout((function(){var a,t="bank"===e?"categorizedBankTrx":"catCreditCardTrx";null===(a=document.getElementById(t))||void 0===a||a.scrollIntoView({behavior:"smooth",block:"center",inline:"start"})}),1e3)}))}),[JSON.stringify(ye),G.category,we]);var ve=function(){return Object(R.jsx)("div",{className:"relativeSpinner",children:Object(R.jsx)(_.a,{type:D.a.loadRandomSpinnerIcon(),color:document.documentElement.style.getPropertyValue("--app-theme-bg-color"),height:100,width:100})})},Ce=["id","name","isIncomeMetric","isPlanMetric"],Se=["checkbox","textbox",{radio:{radioList:[{label:e.formatMessage({id:"yes",defaultMessage:"yes"}),value:"1",checked:!1},{label:e.formatMessage({id:"no",defaultMessage:"no"}),value:"0",checked:!0}]}},{radio:{radioList:[{label:e.formatMessage({id:"yes",defaultMessage:"yes"}),value:"1",checked:!1},{label:e.formatMessage({id:"no",defaultMessage:"no"}),value:"0",checked:!0}]}}],ke=v.b.filter((function(e){return"incExpCat"===e.id})).map((function(a){var n={header:{searchPlaceholder:e.formatMessage({id:"searchHere",defaultMessage:"searchHere"}),searchable:!0},footer:{total:{locale:t.localeLanguage,currency:t.localeCurrency,maxDecimal:2},pagination:{currentPage:"last",maxPagesToShow:5}}};return a.config=n,a.TableAliasRows=Ce.map((function(a){return e.formatMessage({id:a,defaultMessage:a})})),a.rowElements=Se,a}))[0],Re=Object(o.useState)([]),Ie=Object(r.a)(Re,2),Pe=Ie[0],Ne=Ie[1],Ee=function(){Ne([]);var e=function(e,t){var n=new FormData;return n.append("TableRows",t),n.append("Table",e),n.append("limit",oe.limit),n.append("start",oe.start),n.append("searchString",oe.searchString),n.append("appId",a.userConfig.appId),f.a.post("/account_planner/getAccountPlanner",n)}(ke.Table,ke.TableRows);Promise.all([e]).then(function(){var e=Object(c.a)(Object(s.a)().mark((function e(a){return Object(s.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:Ne(a[0].data.response);case 1:case"end":return e.stop()}}),e)})));return function(a){return e.apply(this,arguments)}}())};Object(o.useEffect)((function(){Ee()}),[oe]);return Object(o.useEffect)((function(){y&&xe()}),[ue,ge,y]),Object(R.jsx)(I.Provider,{value:{incExpList:W,selection:G},children:Object(R.jsxs)(d.a,{fluid:!0,children:[Object(R.jsx)(l.a,{icon:"fa fa-sitemap",intlId:"category"}),z?Object(R.jsx)(ve,{}):Object(R.jsxs)(R.Fragment,{children:[Pe&&Object.keys(Pe).length>0&&Object(R.jsx)(R.Fragment,{children:Object(R.jsx)(w.a,{className:"pt-3",config:ke.config,Table:ke.Table,TableRows:ke.TableRows,TableAliasRows:ke.TableAliasRows,rowElements:ke.rowElements,defaultValues:ke.defaultValues,dbData:Pe,postApiUrl:"/account_planner/postAccountPlanner",onPostApi:function(t){return function(t,n){var s=t.status,c=t.data;if(200===s){if(t&&c&&"boolean"===typeof c.response&&null!==c.response&&c.response&&a.renderToast({message:e.formatMessage({id:"transactionSavedSuccessfully",defaultMessage:"transactionSavedSuccessfully"})}),t&&c&&"boolean"===typeof c.response&&null!==c.response&&!1===c.response&&a.renderToast({type:"error",icon:"fa fa-times-circle",message:e.formatMessage({id:"noFormChangeFound",defaultMessage:"noFormChangeFound"})}),t&&c&&null===c.response&&i.setConfig({show:!0,className:"alert-danger border-0 text-dark",type:"danger",dismissible:!0,heading:Object(R.jsx)(S.b,{}),content:Object(R.jsx)(S.a,{})}),t&&c&&"object"===typeof c.response&&null!==c.response){var r;r=1451===c.response.number?"foreignKeyDeleteMessage":"",a.renderToast({type:"error",icon:"fa fa-times-circle",message:e.formatMessage({id:r,defaultMessage:r})})}}else a.renderToast({type:"error",icon:"fa fa-times-circle",message:e.formatMessage({id:"unableToReachServer",defaultMessage:"unableToReachServer"})})}(t,ke.id)},apiParams:oe,onChangeParams:function(e){return function(e){ie((function(a){return Object(n.a)(Object(n.a)({},a),e)}))}(e)},onReFetchData:function(){return Ee()},cellWidth:ke.cellWidth,ajaxButtonName:e.formatMessage({id:"submit",defaultMessage:"submit"}),appIdKeyValue:{key:"inc_exp_cat_appId",value:a.userConfig.appId},theme:a.userData.theme})}),Object(R.jsxs)(u.a,{className:"align-items-center ".concat(Object.keys(Z).length>0||Object.keys(te).length>0?"":"pb-5"),children:[Object(R.jsx)(b.a,{sm:3,className:"react-responsive-ajax-data-table pb-2",children:Object(R.jsx)(g.a,{placeholder:"".concat(e.formatMessage({id:"select",defaultMessage:"select"})," ").concat(e.formatMessage({id:"category",defaultMessage:"category"})),onChange:function(e,a,t){q((function(e){return Object(n.a)(Object(n.a)({},e),{},{category:a})}))},element:{fetch:{dropDownList:W.map((function(e){return{id:e.id,value:e.value}}))},searchable:!0},value:G.category,type:"single",searchable:!0,theme:a.userData.theme})}),Object(R.jsxs)(b.a,{sm:3,className:"d-flex align-items-center justify-content-between pb-2",children:[Object(R.jsx)("span",{children:Object(R.jsx)(j.a,{id:"startDate",defaultMessage:"startDate"})}),Object(R.jsx)(O.a,{className:"bg-white text-dark",value:G.startDate,format:"yyyy-MM-dd",clearIcon:null,onChange:function(e){q((function(a){return Object(n.a)(Object(n.a)({},a),{},{startDate:e})}))},maxDate:new Date,onKeyDown:function(e){e.preventDefault()}})]}),Object(R.jsxs)(b.a,{sm:3,className:"d-flex align-items-center justify-content-between pb-2",children:[Object(R.jsx)("span",{children:Object(R.jsx)(j.a,{id:"endDate",defaultMessage:"endDate"})}),Object(R.jsx)(O.a,{className:"bg-white text-dark",value:G.endDate,format:"yyyy-MM-dd",clearIcon:null,onChange:function(e){q((function(a){return Object(n.a)(Object(n.a)({},a),{},{endDate:e})}))},maxDate:new Date,onKeyDown:function(e){e.preventDefault()}})]}),Object(R.jsx)(b.a,{sm:3,className:"pb-2",children:Object(R.jsx)("button",{className:"btn btn-sm btn-bni w-100 border-0",onClick:function(){return xe()},disabled:Y||!G.category,children:Object(R.jsx)(j.a,{id:"generate",defaultMessage:"generate"})})})]})]}),Y&&Object(R.jsx)(ve,{}),Z&&Object.keys(Z).length>0&&Object(R.jsxs)(R.Fragment,{children:[Object(R.jsx)("div",{className:"py-2",children:Object(R.jsx)("span",{className:"badge ".concat("dark"===a.userData.theme?"bg-secondary text-white":"bg-light text-dark"),children:e.formatMessage({id:"bankTransactions",defaultMessage:"bankTransactions"})})}),Object(R.jsx)(w.a,{id:je.id,config:je.config,Table:je.Table,TableRows:je.TableRows,TableAliasRows:je.TableAliasRows,rowElements:je.rowElements,defaultValues:je.defaultValues,dbData:Z,cellWidth:[20,7,10,5,20],theme:a.userData.theme,apiParams:ue,onChangeParams:function(e){return function(e){be((function(a){return Object(n.a)(Object(n.a)({},a),e)}))}(e)}})]}),te&&Object.keys(te).length>0>0&&Object(R.jsxs)(R.Fragment,{children:[Object(R.jsx)("div",{className:"py-2",children:Object(R.jsx)("span",{className:"badge ".concat("dark"===a.userData.theme?"bg-secondary text-white":"bg-light text-dark"),children:e.formatMessage({id:"creditCardTransactions",defaultMessage:"creditCardTransactions"})})}),Object(R.jsx)(w.a,{id:he.id,config:he.config,Table:he.Table,TableRows:he.TableRows,TableAliasRows:he.TableAliasRows,rowElements:he.rowElements,defaultValues:he.defaultValues,dbData:te,cellWidth:[20,7,10,10,10,10,20],theme:a.userData.theme,apiParams:ge,onChangeParams:function(e){return function(e){me((function(a){return Object(n.a)(Object(n.a)({},a),e)}))}(e)}})]}),0===Object.keys(te).length&&0===Object.keys(Z).length&&y&&Object(R.jsx)("div",{className:"text-center py-2",children:Object(R.jsx)(j.a,{id:"noRecordsGenerated",defaultMessage:" "})})]})})}},81:function(e,a,t){"use strict";t.d(a,"a",(function(){return c}));var n=t(1),s=t(76),c=function(){var e=Object(s.h)().search;return Object(n.useMemo)((function(){return new URLSearchParams(e)}),[e])}}}]);