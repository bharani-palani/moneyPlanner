(this["webpackJsonpbni-apps"]=this["webpackJsonpbni-apps"]||[]).push([[4],{64:function(e,t,n){"use strict";var a=n(25),c=n(42),r=n(30),o=n(36),i=n(27),s=n(1),l=n(28),u=n(1282),d=n(0),j=["info","checked","theme","marker"],b=function(e){var t=e.info,n=e.checked,c=e.theme,r=e.marker,o=Object(l.a)(e,j);return Object(d.jsxs)(u.a.Group,{className:"dropdown-item mb-0",controlId:t.id,children:[r&&Object(d.jsx)("span",{className:"sup",children:"*"}),Object(d.jsx)(u.a.Check,Object(a.a)({className:"px-3 py-0 ".concat("dark"===c?"text-light":"text-dark"),type:"checkbox",label:t.value,checked:n},o))]})},f=n(1263),h=n(430),m=n(1240),O=n(1267),p=n(1268),g=function(e){var t=e.index,n=e.type,l=e.primaryKey,j=e.element,h=e.value,g=e.placeholder,v=e.onChange,x=e.intl,y=e.theme,w=Object(s.useRef)(null),N=Object(s.useRef)(null),k=Object(s.useState)(!1),S=Object(i.a)(k,2),D=S[0],C=S[1],P=Object(s.useRef)(),T=function(){return x.formatMessage({id:g,defaultMessage:g})},R=function(){var e=h,t=j.fetch.dropDownList;return e="single"===n?(e=t.length>0&&t.filter((function(e){return e.id===h}))).length>0?e[0].value:T():"object"===typeof e&&e.length>0?e.map((function(e){return e.toString()})):[],[t,e]},M=R(),E=Object(i.a)(M,2),A=E[0],I=E[1],F=A.map((function(e){return e.checked=e.id&&(Array.isArray(I)?I.filter((function(t){return t.toString()===e.id.toString()})).length>0:I===e.value),e})),L="single"===n?A:F,B=Object(s.useState)(L),K=Object(i.a)(B,2),V=K[0],H=K[1],W=Object(s.useState)(I),z=Object(i.a)(W,2),G=z[0],q=z[1],J=Object(s.useState)(""),U=Object(i.a)(J,2),Y=U[0],X=U[1],_=Object(s.useState)(I),Q=Object(i.a)(_,2),Z=Q[0],$=Q[1];Object(s.useEffect)((function(){var e=R(),t=Object(i.a)(e,2),a=t[0],c=t[1],r=a.map((function(e){return e.checked=e.id&&(Array.isArray(c)?c.filter((function(t){return t.toString()===e.id.toString()})).length>0:c===e.value),e}));H("single"===n?a:r),q(c),$(c)}),[j]),Object(s.useEffect)((function(){"multiple"===n&&q(te(I))}),[I]);var ee=function(){var e=Object(o.a)(Object(r.a)().mark((function e(t){var n;return Object(r.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return X(t),n=A.filter((function(e){return e.value.toString().toLowerCase().includes(t.toString().toLowerCase())})),e.next=4,H(n);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),te=function(e){var t=e.length>0&&A.filter((function(t){return t.id===e[0]}));return 1===t.length?(t=t[0].value,e.length>1?"".concat(t," + ").concat(e.length-1," more..."):t):T()},ne=function(e,n){var r=e.target.checked,o=n.id&&r?[].concat(Object(c.a)(Z),[n.id]):Z.filter((function(e){return e!==n.id}));o=Object(c.a)(new Set(o));var i=V.map((function(e){return o.includes(e.id)?Object(a.a)(Object(a.a)({},e),{},{checked:!0}):Object(a.a)(Object(a.a)({},e),{},{checked:!1})}));H(i),$(o),q(te(o)),v(t,o,l)};return Object(s.useEffect)((function(){var e;D&&(P.current&&P.current.focus({preventScroll:!0}),null===N||void 0===N||null===(e=N.current)||void 0===e||e.focus({preventScroll:!0}),setTimeout((function(){var e;null===N||void 0===N||null===(e=N.current)||void 0===e||e.scrollIntoView({behavior:"instant",block:"nearest"})}),1))}),[D]),Object(d.jsxs)(m.a,{show:D,onToggle:function(){return C(!D)},ref:w,autoClose:"outside",className:"d-inline-block w-100",children:[Object(d.jsx)(m.a.Toggle,{variant:"".concat("dark"===y?"dark":"white"),className:"p-2 rounded cursor-pointer w-100 border d-flex align-items-center justify-content-between ".concat("dark"===y?"border-black":"border-1"),style:{fontSize:"0.9rem"},as:"div",children:Object(d.jsx)("span",{className:"text-truncate",children:G||x.formatMessage({id:g,defaultMessage:g})})}),Object(d.jsxs)(m.a.Menu,{variant:"".concat("dark"===y?"dark":"white"),className:"w-100 p-0 border ".concat("dark"===y?"border-black":"border-1"),show:D,children:[(null===j||void 0===j?void 0:j.searchable)&&Object(d.jsx)(m.a.Item,{className:"p-0 border-0",children:Object(d.jsxs)(O.a,{children:[Object(d.jsx)(u.a.Control,{size:"sm",ref:P,className:"".concat("dark"===y?"bg-dark text-white":"bg-white text-dark"," rounded-bottom-0 border-0 shadow-none py-2"),onChange:function(e){e.preventDefault(),ee(e.target.value)},placeholder:x.formatMessage({id:"searchHere",defaultMessage:"searchHere"}),type:"text",value:Y}),Y&&Object(d.jsx)("i",{onClick:function(e){X(""),ee("")},className:"fa fa-times text-danger bg-".concat(y," p-2")})]})}),Object(d.jsx)(p.a,{className:"px-0",style:{maxHeight:"200px",overflowY:"auto",overflowX:"hidden"},children:V.length>0?V.map((function(e,a){return Object(d.jsx)(m.a.Item,{ref:e.checked?N:null,className:"small px-0 py-0 border-0 text-wrap",as:"div",children:"multiple"===n?Object(d.jsx)(b,{onChange:function(t){ne(t,e)},checked:e.checked,marker:e.marker,info:e,theme:y},a):Object(d.jsxs)("div",{className:"cursor-pointer px-2 py-1 ".concat(e.checked?"bni-bg text-dark":""," ").concat(0!==a||j.searchable?"":"rounded-top"," ").concat(a===V.length-1?"rounded-bottom":"","\n                    "),onClick:function(){return v(t,(a=e).id,l),q(a.value),void("single"===n&&C(!1));var a},children:[e.value,e.marker&&Object(d.jsx)("span",{className:"sup",children:"*"})]})},a)})):Object(d.jsx)(m.a.Item,{className:"text-center small text-wrap",children:Object(d.jsx)(f.a,{id:"noRecordsGenerated",defaultMessage:"noRecordsGenerated"})})})]})]})};g.defaultProps={type:"single",placeholder:"select",theme:""};t.a=Object(h.c)(g)},85:function(e,t,n){"use strict";var a=n(25),c=n(42),r=n(30),o=n(36),i=n(27),s=n(1),l=n(46),u=n(34),d=n(28),j=n(0),b=function(e){var t=e.index,n=e.primaryKey,a=e.onChange,c=e.element,r=e.value,o=t.i,l=t.j,u=Object(s.useState)(c.radio.radioList),d=Object(i.a)(u,1)[0],b=e.value||d.filter((function(e){return e.checked}))[0].value,f=Object(s.useState)(b),h=Object(i.a)(f,2),m=h[0],O=h[1];return Object(s.useEffect)((function(){O(r)}),[r]),Object(j.jsx)("div",{className:"radioComponent",children:d.length&&d.map((function(e,c){return Object(j.jsxs)("div",{className:"radioWrapper",children:[Object(j.jsx)("input",{type:"radio",onChange:function(c){O(c.target.value),a(t,e.value,n)},value:e.value,checked:e.value===m,name:"".concat(l,"-").concat(o),id:"".concat(l,"-").concat(c,"-").concat(o)})," ",Object(j.jsx)("span",{className:"checkmark"}),Object(j.jsx)("label",{htmlFor:"".concat(l,"-").concat(c,"-").concat(o),children:e.label})]},c)}))})};b.defaultProps={property:"String name"};var f=b,h=n(64),m=n(108),O=n.n(m),p=n(50),g=n.n(p),v=n(71),x=(n(231),n(317),["isPostable","config","index","value","element","primaryKey","onChange","placeholder","showDecrement","showIncrement","onDelete","onAddRow","theme"]);var y=function(e){var t=Object(s.useContext)(v.a),n=e.isPostable,c=e.config,r=e.index,o=e.value,l=e.element,b=e.primaryKey,m=e.onChange,p=e.placeholder,y=e.showDecrement,w=e.showIncrement,N=e.onDelete,k=e.onAddRow,S=e.theme,D=Object(d.a)(e,x),C=Object(s.useRef)([]);C.current=[];var P=Object(s.useState)(o?new Date(o):new Date),T=Object(i.a)(P,2),R=T[0],M=T[1],E=Object(s.useState)(o?new Date(o):new Date),A=Object(i.a)(E,2),I=A[0],F=A[1],L=function(e,t,n,a){m(t,n,a)};return Object(j.jsx)("div",{children:function(e,r,o,i){if("string"===typeof r)switch(r){case"textbox":return Object(j.jsx)("input",Object(a.a)({type:"text",placeholder:p,onBlur:function(t){return L(0,e,t.target.value,i)},className:"inputText ".concat(S),defaultValue:o},D));case"number":return Object(j.jsx)("input",Object(a.a)({id:"".concat(e.j,"-").concat(e.i),type:"number",min:"0",step:".01",placeholder:p,ref:function(t){return function(e,t){t&&!C.current.includes(t)&&C.current.push(Object(u.a)({},e.i,t))}(e,t)},onBlur:function(t){return L(0,e,t.target.value,i)},className:"inputText ".concat(S),defaultValue:Number(o).toFixed(c.footer.total.maxDecimal)},D));case"textarea":return Object(j.jsx)("textarea",Object(a.a)({placeholder:p,onBlur:function(t){return L(0,e,t.target.value,i)},rows:"3",className:"inputText ".concat(S),defaultValue:o},D));case"label":default:return Object(j.jsx)("div",Object(a.a)(Object(a.a)({},D),{},{children:o}));case"boolean":return Object(j.jsxs)("div",Object(a.a)(Object(a.a)({},D),{},{className:"text-center",children:[("1"===o||"True"===o||"true"===o||!0===o)&&Object(j.jsx)("i",{className:"fa fa-check"}),("0"===o||"False"===o||"false"===o||!1===o)&&Object(j.jsx)("i",{className:"fa fa-times"})]}));case"relativeTime":return Object(j.jsx)("div",{children:g()(o||new Date).locale(t.localeLanguage).tz(g.a.tz.guess()).fromNow()});case"checkbox":return n?Object(j.jsxs)("div",{className:"d-flex justify-content-between",children:[y&&Object(j.jsx)("i",{onClick:function(){return N(e)},style:{fontSize:"1.5rem",fontWeight:"700"},className:"fa fa-times-circle text-danger cursor-pointer"}),w&&Object(j.jsx)("i",{onClick:function(){return k(!0)},style:{fontSize:"1.5rem",fontWeight:"700"},className:"fa fa-plus-circle text-success cursor-pointer"})]}):Object(j.jsx)("div",Object(a.a)(Object(a.a)({},D),{},{children:o}));case"date":return Object(j.jsx)(O.a,{value:R||new Date,format:"y-MM-dd",clearIcon:null,onChange:function(t){M(t),m(e,function(e){var t=[e.getFullYear(),e.getMonth()+1>9?e.getMonth()+1:"0".concat(e.getMonth()+1),e.getDate()>9?e.getDate():"0".concat(e.getDate())],n=t[1],a=t[2];return"".concat(t[0],"-").concat(n,"-").concat(a)}(t),i)}});case"dateTime":return Object(j.jsx)(O.a,{value:I,format:"y-MM-dd H:mm:ss",clearIcon:null,onChange:function(t){F(t),m(e,function(e){var t=[e.getFullYear(),e.getMonth()+1>9?e.getMonth()+1:"0".concat(e.getMonth()+1),e.getDate()>9?e.getDate():"0".concat(e.getDate()),e.getHours(),e.getMinutes(),e.getSeconds()],n=t[1],a=t[2],c=t[3],r=t[4],o=t[5];return c=c<10?"0"+c:c,r=r<10?"0"+r:r,o=o<10?"0"+o:o,"".concat(t[0],"-").concat(n,"-").concat(a," ").concat(c,":").concat(r,":").concat(o)}(t),i)}})}else if("object"===typeof r&&null!==r){switch(Object.keys(r)[0]){case"fetch":return Object(j.jsx)(h.a,{index:e,primaryKey:i,onChange:function(e,t,n){return m(e,t,n)},element:r,value:o,type:Array.isArray(o)?"multiple":"single",searchable:r.searchable,theme:S});case"radio":return Object(j.jsx)(f,{index:e,primaryKey:i,onChange:function(e,t,n){return m(e,t,n)},element:r,value:o},"".concat(e.i,"-").concat(e.j));default:return Object(j.jsx)("div",{children:"Unknown Element"})}}}(r,l,o,b)})},w=n(52),N=n.n(w),k=n(48),S=function(e){var t=e.totalPages,n=e.maxPagesToShow,r=e.onSetPage,o=Object(s.useState)(e.currentPage),l=Object(i.a)(o,2),u=l[0],d=l[1],b=Object(s.useState)([]),f=Object(i.a)(b,2),h=f[0],m=f[1];Object(s.useEffect)((function(){var e=[];e=n<t&&u>0?u<t-n?[].concat(Object(c.a)(p(n,u)),["...",t]):Object(c.a)(p(n+1,t-n)):Array.from({length:t},(function(e,t){return++t})),m(e)}),[n,t,u]);var O=function(e){d(e),r(e)},p=function(e,t){return Array(e).fill().map((function(e,n){return t+n}))};return h.length>0&&Object(j.jsxs)("ul",{className:"page",children:[Object(j.jsx)("li",{onClick:function(){return u>1?O(1):null},className:"lt ".concat(u>1?"":"disabled"),children:"<<"}),Object(j.jsx)("li",{onClick:function(){return u>1?O(u-1):null},className:"lt ".concat(u>1?"":"disabled"),children:"<"}),h.map((function(e,n){return Object(j.jsx)("li",Object(a.a)(Object(a.a)({onClick:function(){return!isNaN(e)&&e<=t?O(e):null}},e===u&&{className:"active"}),{},{children:e}),function(e){return"page-".concat(e)}(n))})),Object(j.jsx)("li",{onClick:function(){return u<t?O(u+1):null},className:"gt ".concat(u===t?"disabled":""),children:">"}),Object(j.jsx)("li",{onClick:function(){return u<t?O(t):null},className:"gt ".concat(u===t?"disabled":""),children:">>"})]})};S.defaultProps={};var D=S,C=["className","entity"],P=function(e){var t=e.className,n=e.entity,c=Object(d.a)(e,C);return Object(j.jsx)("span",Object(a.a)({className:"htmlIcon ".concat(t),dangerouslySetInnerHTML:{__html:n}},c))};P.defaultProps={property:"String name"};var T=P,R=n(774),M=function(e){var t=Object(R.a)(),n=e.defaultRecordsPerPage,a=e.config,c=e.searchString,r=e.onSearchChange,o=e.onDropDownChange,l=e.onDismissSearch,u=e.theme,d=e.options,b=Object(s.useState)(!1),f=Object(i.a)(b,2),h=f[0],m=f[1],O=Object(s.useState)(c),p=Object(i.a)(O,2),g=p[0],v=p[1],x=Object(s.useState)(n),y=Object(i.a)(x,2),w=y[0],N=y[1],k=Object(s.useRef)(null),S=Object(s.useRef)(null),D=function(e){k.current&&!k.current.contains(e.target)&&m(!1)};Object(s.useEffect)((function(){return document.addEventListener("click",D,!0),function(){document.removeEventListener("click",D,!0)}}),[]),Object(s.useEffect)((function(){c&&S.current.focus({preventScroll:!0})}),[c]);return Object(j.jsxs)("div",{className:"group-input",children:[Object(j.jsxs)("div",{className:"inputWrapper",children:[Object(j.jsx)("input",{ref:S,onChange:function(e){return function(e){var t=e.target.value;r(t),v(t)}(e)},placeholder:a.header.searchPlaceholder,type:"text",value:g,className:"join-input small ".concat(u),spellCheck:"false"}),g&&Object(j.jsx)(T,{onClick:function(){l(),v("")},className:"dismiss",entity:"&#215;"})]}),Object(j.jsxs)("div",{ref:k,onClick:function(){return m(!h)},title:t.formatMessage({id:"showNRecordsPerPage",defaultMessage:"showNRecordsPerPage"},{n:w}),className:"join-select",children:[Object(j.jsx)("div",{style:h?{borderBottomRightRadius:0}:{borderBottomRightRadius:"5px"},className:"selected",children:Object(j.jsxs)("div",{children:[Object(j.jsx)("span",{children:w}),Object(j.jsx)(T,{className:"icon up",entity:"&#9662;"})]})}),h&&Object(j.jsx)("ul",{children:d.map((function(e,t){return Object(j.jsx)("li",{onClick:function(){return N(t=e),void o(t);var t},children:e},t)}))})]})]})},E=n(1263),A=n(430),I=n(126),F=n.n(I);function L(e){var t,n,u=Object(R.a)(),d=e.Table,b=e.config,f=e.className||"",h=e.id,m=e.TableRows,O=e.TableAliasRows,p=e.postApiUrl,g=e.onPostApi,v=e.insertCloneData,x=e.showTooltipFor,w=e.defaultValues,S=e.onTableUpdate,C=e.onReFetchData,P=e.apiParams,A=e.onChangeParams,I=e.cellWidth,L=e.appIdKeyValue,B=e.theme,K=Object(s.useState)([]),V=Object(i.a)(K,2),H=V[0],W=V[1],z=Object(s.useState)(e.dbData.table),G=Object(i.a)(z,2),q=G[0],J=G[1],U=Object(s.useState)([]),Y=Object(i.a)(U,2),X=Y[0],_=Y[1],Q=Object(s.useState)(!1),Z=Object(i.a)(Q,2),$=Z[0],ee=Z[1],te=Object(s.useState)(!1),ne=Object(i.a)(te,2),ae=ne[0],ce=ne[1],re=Object(s.useState)([]),oe=Object(i.a)(re,2),ie=oe[0],se=oe[1],le=Object(s.useState)({}),ue=Object(i.a)(le,2),de=ue[0],je=ue[1],be=Object(s.useState)([]),fe=Object(i.a)(be,2),he=fe[0],me=fe[1],Oe=b&&b.footer&&b.footer.pagination&&Object.keys(b.footer.pagination).length>0&&b.footer.pagination,pe=b&&b.footer&&b.footer.total,ge=e.ajaxType,ve=e.ajaxButtonName,xe=Object(s.useState)(null===P||void 0===P?void 0:P.limit),ye=Object(i.a)(xe,2),we=ye[0],Ne=ye[1],ke=Object(s.useState)(e.dbData.page),Se=Object(i.a)(ke,2),De=Se[0],Ce=Se[1],Pe=Oe&&Oe.maxPagesToShow,Te=function(t){ee(!0);var n=e.rowElements.map((function(e){return new Promise((function(t,n){t(e)}))}));Promise.all([n]).then(function(){var e=Object(o.a)(Object(r.a)().mark((function e(n){return Object(r.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Promise.all(n[0]).then((function(e){W(e),ee(!1)}));case 2:"function"===typeof t&&t();case 3:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}())};Object(s.useEffect)((function(){var e=[];return O.length!==m.length&&e.push({error:'The "TableAliasRows" and "TableRows" props array length should be same.'}),d&&0!==d.toString().length&&""!==d||e.push({error:'The "Table" props should be a valid string.'}),p&&!["put","post","delete","patch","request","get","head","options"].includes(ge)&&e.push({error:"Allowed XHR request types are put, post, delete, patch, request, get, head, options. Please use any one in ajaxType props. For further info, visit https://www.npmjs.com/package/axios"}),e.length>0&&me(e),function(){}}),[]),Object(s.useEffect)((function(){Te()}),[m,d,e.rowElements]),Object(s.useEffect)((function(){var t;(null===e||void 0===e||null===(t=e.rowElements)||void 0===t?void 0:t.length)>0&&W(null===e||void 0===e?void 0:e.rowElements)}),[e]),Object(s.useEffect)((function(){var t,n;(null===(t=e.dbData.table)||void 0===t?void 0:t.length)>0&&J(null===e||void 0===e||null===(n=e.dbData)||void 0===n?void 0:n.table)}),[e.dbData.table]),Object(s.useEffect)((function(){if(v&&v.length>0){ee(!0);var e=[].concat(Object(c.a)(v),Object(c.a)(q));J(e),setTimeout((function(){ee(!1)}),500)}}),[v]);var Re=function(e){if(e){var t={};m.map((function(e,n){var a=w.findIndex((function(t){return Object.keys(t)[0]===e}));return t[e]=a>-1?w[a][e]:"",null}));var n=Object(c.a)(q);n.push(t),J(n)}},Me=function(t){var n="";return e.dbData.total.hasOwnProperty(t)&&(n=e.dbData.total[t].map((function(e,t){return Object(j.jsx)("div",{className:"my-1",children:Object(j.jsxs)("span",{className:"".concat(e.className),children:[null===e||void 0===e?void 0:e.prefix," ",pe&&k.a.countryCurrencyLacSeperator(pe.locale,pe.currency,e.value,pe.maxDecimal)," ",null===e||void 0===e?void 0:e.suffix]})},t)}))),n},Ee=function(e){return q.sort((function(t,n){return de.asc?n[e]-t[e]:t[e]-n[e]}))},Ae=function(e){return q.sort((function(t,n){return de.asc?new Date(n[e])-new Date(t[e]):new Date(t[e])-new Date(n[e])}))},Ie=function(e){return q.sort((function(t,n){return de.asc?(n[e]>t[e])-(n[e]<t[e]):(t[e]>n[e])-(t[e]<n[e])}))},Fe=Object(s.useCallback)(F()((function(e){A({start:0,searchString:e})}),500),[]),Le=function(){return u.formatMessage({id:"recordsLengthLine",defaultMessage:"recordsLengthLine"},{start:e.dbData.rangeStart,end:e.dbData.rangeEnd,length:e.dbData.numRows})};return!1===$?Object(j.jsx)("div",{className:"react-responsive-ajax-data-table ".concat(f),id:h,children:0===he.length?Object(j.jsxs)(j.Fragment,{children:[Oe&&Object(j.jsxs)("div",{className:"biGrid",children:[e.dbData.rangeStart&&e.dbData.rangeEnd&&e.dbData.numRows?Object(j.jsx)("div",{children:Object(j.jsx)("div",{className:"heading",title:Le(),children:Le()})}):Object(j.jsx)("div",{}),(null===b||void 0===b||null===(t=b.header)||void 0===t?void 0:t.searchable)&&Object(j.jsx)("div",{children:Object(j.jsx)(M,{theme:B,config:b,options:[10,25,50,100],searchString:null===P||void 0===P?void 0:P.searchString,defaultRecordsPerPage:null===P||void 0===P?void 0:P.limit,onSearchChange:function(e){return Fe(e)},onDropDownChange:function(e){Ne(e),A({start:0,limit:e})},onDismissSearch:function(){return Fe("")}})})]}),Object(j.jsx)("div",{className:"grid-responsive",children:Object(j.jsxs)("div",{style:Object(a.a)(Object(a.a)({},Array.isArray(I)&&{gridTemplateColumns:"".concat(I.join("rem ")+"rem")}),"string"===typeof I&&{gridTemplateColumns:"repeat(".concat(m.length,", ").concat(I,")")}),className:"grid-container responsive-grid",children:[O.map((function(e,t){return Object(j.jsx)("div",{onClick:function(){return function(e){var t=null===q||void 0===q?void 0:q.map((function(t){return t[e]&&(t[e].toString().indexOf("-")>-1||t[e].toString().indexOf("/")>-1)&&"Invalid Date"!==new Date(String(t[e]).replace(/-/g,"/"))?"date":""===t[e]||isNaN(t[e])?"string":"number"})),n=[];"date"===(t=t.sort((function(e,n){return t.filter((function(t){return t===e})).length-t.filter((function(e){return e===n})).length})).pop())&&(n=Ae(e)),"number"===t&&(n=Ee(e)),"string"===t&&(n=Ie(e)),J(Object(c.a)(n)),je((function(t){return{asc:!t.asc,key:e}}))}(m[t])},className:"header",children:t>0||!p?Object(j.jsxs)(j.Fragment,{children:[Object(j.jsx)("span",{title:e,children:e})," ",m[t]===de.key&&Object(j.jsx)(T,{className:"default",entity:de.asc?"&#8593;":"&#8595;"})]}):Object(j.jsx)(T,{className:"default",entity:"&#9776;"})},"key-".concat(t))})),(null===q||void 0===q?void 0:q.length)>0?Object(j.jsxs)(j.Fragment,{children:[q.map((function(e,t){return m.map((function(n,r){return Object(j.jsx)("div",{className:"",children:Object(j.jsxs)("div",Object(a.a)(Object(a.a)({},x.includes(n)&&{className:"tooltipContainer"}),{},{children:[""!==e[n]&&x.includes(n)&&Object(j.jsx)("span",{className:"tooltips",children:e[n]}),Object(j.jsx)(y,{config:b,onDelete:function(e){return function(e){var t=e.i,n=q[t]&&q[t][m[0]];n&&void 0!==n&&(X.push(n),_(X));var a=q.filter((function(e,n){return n!==t}));J(a),S&&S(a)}(e)},onChange:function(e,t,n){!function(e,t,n){if(!t){var a=m.findIndex((function(t){return t===e.j}));a>-1&&H[a]&&(t="number"===H[a]?"0.00":"")}var r=e.i,o=e.j;q[r][o]=t,J(q);var i=q.filter((function(e,t){return t===r&&e}))[0][n]||"",s=i?[].concat(Object(c.a)(ie),[i]):Object(c.a)(ie);s=Object(c.a)(new Set(s)),se(s),S&&S(q)}(e,t,n)},index:{i:t,j:n},placeholder:O[r],value:e[n],element:H[r],showIncrement:q.length-1===t,showDecrement:!0,onAddRow:function(e){return Re(e)},primaryKey:m[0],isPostable:Boolean(p),theme:B},"".concat(t,"-").concat(r))]}))},"".concat(e[n],"-").concat(r))}))})),(null===e||void 0===e||null===(n=e.dbData)||void 0===n?void 0:n.total)&&Object(j.jsxs)(j.Fragment,{children:[Object(j.jsx)("div",{className:"textCenter",children:pe.title}),m.slice(1).map((function(t,n){var a,c=null===e||void 0===e||null===(a=e.dbData)||void 0===a?void 0:a.total.hasOwnProperty(t);return Object(j.jsx)("div",{className:c?"totalColumn":"",children:c?Me(t):""},n)}))]})]}):Object(j.jsxs)(j.Fragment,{children:[Object(j.jsx)(y,{index:{i:0,j:0},element:H[0],showIncrement:!0,showDecrement:!1,onAddRow:function(e){return Re(e)}},-1),Object(j.jsx)("div",{className:"py-3 text-center",style:{gridColumn:"1 / span ".concat(m.length)},children:Object(j.jsx)(E.a,{id:"noRecordsGenerated",defaultMessage:"noRecordsGenerated"})})]})]})}),Object(j.jsxs)("div",{className:"footer",children:[Oe&&Object(j.jsx)(D,{currentPage:De,totalPages:Math.ceil(e.dbData.numRows/we),onSetPage:function(e){Ce(e),A({start:(e-1)*we})},maxPagesToShow:Pe}),p&&Object(j.jsx)("div",{className:"py-2 text-end",children:Object(j.jsx)("button",{onClick:function(){return function(){ce(!0);var e=q.filter((function(e){return""===e[m[0]]})).map((function(e){return""===e[m[0]]&&(e[m[0]]=null),null!==L&&void 0!==L&&L.key&&null!==L&&void 0!==L&&L.value&&(e[null===L||void 0===L?void 0:L.key]=null===L||void 0===L?void 0:L.value),e})),t=q.filter((function(e){return ie.includes(e[m[0]])})).filter((function(e){return e&&("number"===typeof e[m[0]]||"string"===typeof e[m[0]])})).map((function(e){return null!==L&&void 0!==L&&L.key&&null!==L&&void 0!==L&&L.value&&(e[null===L||void 0===L?void 0:L.key]=null===L||void 0===L?void 0:L.value),e})),n=Object(a.a)(Object(a.a)(Object(a.a)(Object(a.a)({},(e.length>0||X.length>0||t.length>0)&&{Table:d}),e.length>0&&{insertData:e}),X.length>0&&{deleteData:X}),t.length>0&&{updateData:t}),c=new FormData;c.append("postData",JSON.stringify(n)),l.a[ge](p,c).then((function(n){g&&g(n),(e.length>0||t.length>0||X.length>0)&&(ee(!0),setTimeout((function(){C(!0),ee(!1)}),1e3))})).catch((function(e){g&&g({error:e,status:!1})})).finally((function(){_([]),se([]),ce(!1),t=[],e=[]}))}()},disabled:ae,className:"btn btn-bni",children:ae?Object(j.jsx)("i",{className:"fa fa-circle-o-notch fa-spin fa-fw"}):Object(j.jsx)(j.Fragment,{children:ve})})})]})]}):Object(j.jsxs)("div",{className:"errorWrapper",children:[Object(j.jsx)("h5",{children:"Please resolve the following issues:"}),Object(j.jsx)("ol",{children:he.map((function(e,t){return Object(j.jsx)("li",{children:e.error},t)}))})]})}):Object(j.jsx)("div",{className:"relativeSpinner",children:Object(j.jsx)(N.a,{type:k.a.loadRandomSpinnerIcon(),color:document.documentElement.style.getPropertyValue("--app-theme-bg-color"),height:100,width:100})})}L.defaultProps={id:"",Table:"My table",TableRows:[],TableAliasRows:[],rowElements:[],insertCloneData:[],showTooltipFor:[],ajaxType:"post",ajaxButtonName:"Submit",config:{header:{searchPlaceholder:"Search",searchable:!0},footer:{total:{title:"Total",locale:"en-IN",currency:"",maxDecimal:2},pagination:{currentPage:"first",recordsPerPage:10,maxPagesToShow:5}}},defaultValues:[],cellWidth:"13rem"};t.a=Object(A.c)(L)}}]);