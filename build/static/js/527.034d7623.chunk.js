"use strict";(self.webpackChunkledgerely_com=self.webpackChunkledgerely_com||[]).push([[527],{8630:(e,t,a)=>{a.d(t,{A:()=>y});var n=a(9950),s=a(4570),l=a(4414);const r=e=>{const{index:t,primaryKey:a,onChange:s,element:r,value:i}=e,{i:c,j:o}=t,[d]=(0,n.useState)(r.radio.radioList),u=e.value||d.filter((e=>e.checked))[0].value,[m,h]=(0,n.useState)(u);return(0,n.useEffect)((()=>{h(i)}),[i]),(0,l.jsx)("div",{className:"radioComponent",children:d.length&&d.map(((e,n)=>(0,l.jsxs)("div",{className:"radioWrapper",children:[(0,l.jsx)("input",{type:"radio",onChange:n=>{h(n.target.value),s(t,e.value,a)},value:e.value,checked:e.value===m,name:`${o}-${c}`,id:`${o}-${n}-${c}`})," ",(0,l.jsx)("span",{className:"checkmark"}),(0,l.jsx)("label",{htmlFor:`${o}-${n}-${c}`,children:e.label})]},n)))})};var i=a(970),c=a(3932),o=a(9051),d=a.n(o),u=a(7391);a(5045),a(799);const m=function(e){const t=(0,n.useContext)(u.U),{isPostable:a,config:s,index:o,value:m,element:h,primaryKey:p,onChange:x,placeholder:g,showDecrement:f,showIncrement:v,onDelete:b,onAddRow:_,theme:j,...w}=e,y=(0,n.useRef)([]);y.current=[];const[k,N]=(0,n.useState)(m?new Date(m):new Date),[S,D]=(0,n.useState)(m?new Date(m):new Date),C=(e,t,a,n)=>{x(t,a,n)};return(0,l.jsx)("div",{children:((e,n,o,u)=>{if("string"===typeof n)switch(n){case"textbox":return(0,l.jsx)("input",{type:"text",placeholder:g,onBlur:t=>C(0,e,t.target.value,u),className:`inputText ${j}`,defaultValue:o,...w});case"number":return(0,l.jsx)("input",{id:`${e.j}-${e.i}`,type:"number",min:"0",step:".01",placeholder:g,ref:t=>((e,t)=>{t&&!y.current.includes(t)&&y.current.push({[e.i]:t})})(e,t),onBlur:t=>C(0,e,t.target.value,u),className:`inputText ${j}`,defaultValue:Number(o).toFixed(s.footer.total.maxDecimal),...w});case"textarea":return(0,l.jsx)("textarea",{placeholder:g,onBlur:t=>C(0,e,t.target.value,u),rows:"3",className:`inputText ${j}`,defaultValue:o,...w});case"label":default:return(0,l.jsx)("div",{...w,children:o});case"boolean":return(0,l.jsxs)("div",{...w,className:"text-center",children:[("1"===o||"True"===o||"true"===o||!0===o)&&(0,l.jsx)("i",{className:"fa fa-check"}),("0"===o||"False"===o||"false"===o||!1===o)&&(0,l.jsx)("i",{className:"fa fa-times"})]});case"relativeTime":return(0,l.jsx)("div",{children:d()(o||new Date).locale(t.localeLanguage).tz(d().tz.guess()).fromNow()});case"checkbox":return a?(0,l.jsxs)("div",{className:"d-flex justify-content-between",children:[f&&(0,l.jsx)("i",{onClick:()=>b(e),style:{fontSize:"1.5rem",fontWeight:"700"},className:"fa fa-times-circle text-danger cursor-pointer"}),v&&(0,l.jsx)("i",{onClick:()=>_(!0),style:{fontSize:"1.5rem",fontWeight:"700"},className:"fa fa-plus-circle text-success cursor-pointer"})]}):(0,l.jsx)("div",{...w,children:o});case"date":return(0,l.jsx)(c.A,{value:k||new Date,format:"y-MM-dd",clearIcon:null,onChange:t=>{N(t),x(e,(e=>{const[t,a,n]=[e.getFullYear(),e.getMonth()+1>9?e.getMonth()+1:`0${e.getMonth()+1}`,e.getDate()>9?e.getDate():`0${e.getDate()}`];return`${t}-${a}-${n}`})(t),u)}});case"dateTime":return(0,l.jsx)(c.A,{value:S,format:"y-MM-dd H:mm:ss",clearIcon:null,onChange:t=>{D(t),x(e,(e=>{let[t,a,n,s,l,r]=[e.getFullYear(),e.getMonth()+1>9?e.getMonth()+1:`0${e.getMonth()+1}`,e.getDate()>9?e.getDate():`0${e.getDate()}`,e.getHours(),e.getMinutes(),e.getSeconds()];return s=s<10?"0"+s:s,l=l<10?"0"+l:l,r=r<10?"0"+r:r,`${t}-${a}-${n} ${s}:${l}:${r}`})(t),u)}})}else if("object"===typeof n&&null!==n){switch(Object.keys(n)[0]){case"fetch":return(0,l.jsx)(i.A,{index:e,primaryKey:u,onChange:(e,t,a)=>x(e,t,a),element:n,value:o,type:Array.isArray(o)?"multiple":"single",searchable:n.searchable,theme:j});case"radio":return(0,l.jsx)(r,{index:e,primaryKey:u,onChange:(e,t,a)=>x(e,t,a),element:n,value:o},`${e.i}-${e.j}`);default:return(0,l.jsx)("div",{children:"Unknown Element"})}}})(o,h,m,p)})};var h=a(8311),p=a(2083);const x=e=>{const{totalPages:t,maxPagesToShow:a,onSetPage:s}=e,[r,i]=(0,n.useState)(e.currentPage),[c,o]=(0,n.useState)([]);(0,n.useEffect)((()=>{let e=[];e=a<t&&r>0?r<t-a?[...u(a,r),"...",t]:[...u(a+1,t-a)]:Array.from({length:t},((e,t)=>++t)),o(e)}),[a,t,r]);const d=e=>{i(e),s(e)},u=(e,t)=>Array(e).fill().map(((e,a)=>t+a));return c.length>0&&(0,l.jsxs)("ul",{className:"page",children:[(0,l.jsx)("li",{onClick:()=>r>1?d(1):null,className:"lt "+(r>1?"":"disabled"),children:"<<"}),(0,l.jsx)("li",{onClick:()=>r>1?d(r-1):null,className:"lt "+(r>1?"":"disabled"),children:"<"}),c.map(((e,a)=>(0,l.jsx)("li",{onClick:()=>!isNaN(e)&&e<=t?d(e):null,...e===r&&{className:"active"},children:e},(e=>`page-${e}`)(a)))),(0,l.jsx)("li",{onClick:()=>r<t?d(r+1):null,className:"gt "+(r===t?"disabled":""),children:">"}),(0,l.jsx)("li",{onClick:()=>r<t?d(t):null,className:"gt "+(r===t?"disabled":""),children:">>"})]})},g=e=>{const{className:t,entity:a,...n}=e;return(0,l.jsx)("span",{className:`htmlIcon ${t}`,dangerouslySetInnerHTML:{__html:a},...n})};var f=a(9288);const v=e=>{const t=(0,f.A)(),{defaultRecordsPerPage:a,config:s,searchString:r,onSearchChange:i,onDropDownChange:c,onDismissSearch:o,theme:d,options:u}=e,[m,h]=(0,n.useState)(!1),[p,x]=(0,n.useState)(r),[v,b]=(0,n.useState)(a),_=(0,n.useRef)(null),j=(0,n.useRef)(null),w=e=>{_.current&&!_.current.contains(e.target)&&h(!1)};(0,n.useEffect)((()=>(document.addEventListener("click",w,!0),()=>{document.removeEventListener("click",w,!0)})),[]),(0,n.useEffect)((()=>{r&&j.current.focus({preventScroll:!0})}),[r]);return(0,l.jsxs)("div",{className:"group-input",children:[(0,l.jsxs)("div",{className:"inputWrapper",children:[(0,l.jsx)("input",{ref:j,onChange:e=>(e=>{const t=e.target.value;i(t),x(t)})(e),placeholder:s.header.searchPlaceholder,type:"text",value:p,className:`join-input small ${d}`,spellCheck:"false"}),p&&(0,l.jsx)(g,{onClick:()=>{o(),x("")},className:"dismiss",entity:"&#215;"})]}),(0,l.jsxs)("div",{ref:_,onClick:()=>h(!m),title:t.formatMessage({id:"showNRecordsPerPage",defaultMessage:"showNRecordsPerPage"},{n:v}),className:"join-select",children:[(0,l.jsx)("div",{style:m?{borderBottomRightRadius:0}:{borderBottomRightRadius:"5px"},className:"selected",children:(0,l.jsxs)("div",{children:[(0,l.jsx)("span",{children:v}),(0,l.jsx)(g,{className:"icon up",entity:"&#9662;"})]})}),m&&(0,l.jsx)("ul",{children:u.map(((e,t)=>(0,l.jsx)("li",{onClick:()=>{return b(t=e),void c(t);var t},children:e},t)))})]})]})};var b=a(3027),_=a(4408),j=a(5491),w=a.n(j);const y=(0,_.Ay)((function(e){var t,a;const r=(0,f.A)(),i=e.Table,c=e.config,o=e.className||"",d=e.id||"",u=e.TableRows||"MyTable",_=e.TableAliasRows||[],j=e.postApiUrl,y=e.onPostApi,k=e.insertCloneData||[],N=e.showTooltipFor||[],S=e.defaultValues||[],D=e.onTableUpdate,C=e.onReFetchData,T=e.apiParams,A=e.onChangeParams,$=e.cellWidth||"13rem",P=e.appIdKeyValue,R=e.theme,[M,E]=(0,n.useState)([]),[I,L]=(0,n.useState)(e.dbData.table),[F,V]=(0,n.useState)([]),[Y,B]=(0,n.useState)(!1),[W,G]=(0,n.useState)(!1),[K,O]=(0,n.useState)([]),[H,U]=(0,n.useState)({}),[z,q]=(0,n.useState)([]),Q=c&&c.footer&&c.footer.pagination&&Object.keys(c.footer.pagination).length>0&&c.footer.pagination,X=c&&c.footer&&c.footer.total,J=e.ajaxType||"post",Z=e.ajaxButtonName||"Submit",[ee,te]=(0,n.useState)(null===T||void 0===T?void 0:T.limit),[ae,ne]=(0,n.useState)(e.dbData.page),se=Q&&Q.maxPagesToShow,le=t=>{B(!0);const a=e.rowElements.map((e=>new Promise(((t,a)=>{t(e)}))));Promise.all([a]).then((async e=>{await Promise.all(e[0]).then((e=>{E(e),B(!1)})),"function"===typeof t&&t()}))};(0,n.useEffect)((()=>{const e=[];return _.length!==u.length&&e.push({error:'The "TableAliasRows" and "TableRows" props array length should be same.'}),i&&0!==i.toString().length&&""!==i||e.push({error:'The "Table" props should be a valid string.'}),j&&!["put","post","delete","patch","request","get","head","options"].includes(J)&&e.push({error:"Allowed XHR request types are put, post, delete, patch, request, get, head, options. Please use any one in ajaxType props. For further info, visit https://www.npmjs.com/package/axios"}),e.length>0&&q(e),()=>{}}),[]),(0,n.useEffect)((()=>{le()}),[u,i,e.rowElements]),(0,n.useEffect)((()=>{var t;(null===e||void 0===e||null===(t=e.rowElements)||void 0===t?void 0:t.length)>0&&E(null===e||void 0===e?void 0:e.rowElements)}),[e]),(0,n.useEffect)((()=>{var t,a;(null===(t=e.dbData.table)||void 0===t?void 0:t.length)>0&&L(null===e||void 0===e||null===(a=e.dbData)||void 0===a?void 0:a.table)}),[e.dbData.table]),(0,n.useEffect)((()=>{if(k&&k.length>0){B(!0);const e=[...k,...I];L(e),setTimeout((()=>{B(!1)}),500)}}),[k]);const re=e=>{if(e){const e={};u.map(((t,a)=>{const n=S.findIndex((e=>Object.keys(e)[0]===t));return e[t]=n>-1?S[n][t]:"",null}));const t=[...I];t.push(e),L(t)}},ie=t=>{let a="";return e.dbData.total.hasOwnProperty(t)&&(a=e.dbData.total[t].map(((e,t)=>(0,l.jsx)("div",{className:"my-1",children:(0,l.jsxs)("span",{className:`${e.className}`,children:[null===e||void 0===e?void 0:e.prefix," ",X&&p.A.countryCurrencyLacSeperator(X.locale,X.currency,e.value,X.maxDecimal)," ",null===e||void 0===e?void 0:e.suffix]})},t)))),a},ce=e=>I.sort(((t,a)=>H.asc?a[e]-t[e]:t[e]-a[e])),oe=e=>I.sort(((t,a)=>H.asc?new Date(a[e])-new Date(t[e]):new Date(t[e])-new Date(a[e]))),de=e=>I.sort(((t,a)=>H.asc?(a[e]>t[e])-(a[e]<t[e]):(t[e]>a[e])-(t[e]<a[e]))),ue=(0,n.useCallback)(w()((e=>{A({start:0,searchString:e})}),500),[]),me=()=>r.formatMessage({id:"recordsLengthLine",defaultMessage:"recordsLengthLine"},{start:e.dbData.rangeStart,end:e.dbData.rangeEnd,length:e.dbData.numRows});return!1===Y?(0,l.jsx)("div",{className:`react-responsive-ajax-data-table ${o}`,id:d,children:0===z.length?(0,l.jsxs)(l.Fragment,{children:[Q&&(0,l.jsxs)("div",{className:"biGrid",children:[e.dbData.rangeStart&&e.dbData.rangeEnd&&e.dbData.numRows?(0,l.jsx)("div",{children:(0,l.jsx)("div",{className:"heading",title:me(),children:me()})}):(0,l.jsx)("div",{}),(null===c||void 0===c||null===(t=c.header)||void 0===t?void 0:t.searchable)&&(0,l.jsx)("div",{children:(0,l.jsx)(v,{theme:R,config:c,options:[10,25,50,100],searchString:null===T||void 0===T?void 0:T.searchString,defaultRecordsPerPage:null===T||void 0===T?void 0:T.limit,onSearchChange:e=>ue(e),onDropDownChange:e=>{te(e),A({start:0,limit:e})},onDismissSearch:()=>ue("")})})]}),(0,l.jsx)("div",{className:"grid-responsive",children:(0,l.jsxs)("div",{style:{...Array.isArray($)&&{gridTemplateColumns:""+($.join("rem ")+"rem")},..."string"===typeof $&&{gridTemplateColumns:`repeat(${u.length}, ${$})`}},className:"grid-container responsive-grid",children:[_.map(((e,t)=>(0,l.jsx)("div",{onClick:()=>(e=>{let t=null===I||void 0===I?void 0:I.map((t=>t[e]&&(t[e].toString().indexOf("-")>-1||t[e].toString().indexOf("/")>-1)&&"Invalid Date"!==new Date(String(t[e]).replace(/-/g,"/"))?"date":""===t[e]||isNaN(t[e])?"string":"number"));t=t.sort(((e,a)=>t.filter((t=>t===e)).length-t.filter((e=>e===a)).length)).pop();let a=[];"date"===t&&(a=oe(e)),"number"===t&&(a=ce(e)),"string"===t&&(a=de(e)),L([...a]),U((t=>({asc:!t.asc,key:e})))})(u[t]),className:"header",children:t>0||!j?(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)("span",{title:e,children:e})," ",u[t]===H.key&&(0,l.jsx)(g,{className:"default",entity:H.asc?"&#8593;":"&#8595;"})]}):(0,l.jsx)(g,{className:"default",entity:"&#9776;"})},`key-${t}`))),(null===I||void 0===I?void 0:I.length)>0?(0,l.jsxs)(l.Fragment,{children:[I.map(((e,t)=>u.map(((a,n)=>(0,l.jsx)("div",{className:"",children:(0,l.jsxs)("div",{...N.includes(a)&&{className:"tooltipContainer"},children:[""!==e[a]&&N.includes(a)&&(0,l.jsx)("span",{className:"tooltips",children:e[a]}),(0,l.jsx)(m,{config:c,onDelete:e=>(e=>{const{i:t}=e,a=I[t]&&I[t][u[0]];a&&void 0!==a&&(F.push(a),V(F));const n=I.filter(((e,a)=>a!==t));L(n),D&&D(n)})(e),onChange:(e,t,a)=>{((e,t,a)=>{if(!t){const a=u.findIndex((t=>t===e.j));a>-1&&M[a]&&(t="number"===M[a]?"0.00":"")}const{i:n,j:s}=e;I[n][s]=t,L(I);const l=I.filter(((e,t)=>t===n&&e))[0][a]||"";let r=l?[...K,l]:[...K];r=[...new Set(r)],O(r),D&&D(I)})(e,t,a)},index:{i:t,j:a},placeholder:_[n],value:e[a],element:M[n],showIncrement:I.length-1===t,showDecrement:!0,onAddRow:e=>re(e),primaryKey:u[0],isPostable:Boolean(j),theme:R},`${t}-${n}`)]})},`${e[a]}-${n}`))))),(null===e||void 0===e||null===(a=e.dbData)||void 0===a?void 0:a.total)&&(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)("div",{className:"textCenter",children:X.title}),u.slice(1).map(((t,a)=>{var n;const s=null===e||void 0===e||null===(n=e.dbData)||void 0===n?void 0:n.total.hasOwnProperty(t);return(0,l.jsx)("div",{className:s?"totalColumn":"",children:s?ie(t):""},a)}))]})]}):(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(m,{index:{i:0,j:0},element:M[0],showIncrement:!0,showDecrement:!1,onAddRow:e=>re(e)},-1),(0,l.jsx)("div",{className:"py-3 text-center",style:{gridColumn:`1 / span ${u.length}`},children:(0,l.jsx)(b.A,{id:"noRecordsGenerated",defaultMessage:"noRecordsGenerated"})})]})]})}),(0,l.jsxs)("div",{className:"footer",children:[Q&&(0,l.jsx)(x,{currentPage:ae,totalPages:Math.ceil(e.dbData.numRows/ee),onSetPage:e=>{ne(e),A({start:(e-1)*ee})},maxPagesToShow:se}),j&&(0,l.jsx)("div",{className:"py-2 text-end",children:(0,l.jsx)("button",{onClick:()=>(()=>{G(!0);let e=I.filter((e=>""===e[u[0]])).map((e=>(""===e[u[0]]&&(e[u[0]]=null),null!==P&&void 0!==P&&P.key&&null!==P&&void 0!==P&&P.value&&(e[null===P||void 0===P?void 0:P.key]=null===P||void 0===P?void 0:P.value),e))),t=I.filter((e=>K.includes(e[u[0]]))).filter((e=>e&&("number"===typeof e[u[0]]||"string"===typeof e[u[0]]))).map((e=>(null!==P&&void 0!==P&&P.key&&null!==P&&void 0!==P&&P.value&&(e[null===P||void 0===P?void 0:P.key]=null===P||void 0===P?void 0:P.value),e)));const a={...(e.length>0||F.length>0||t.length>0)&&{Table:i},...e.length>0&&{insertData:e},...F.length>0&&{deleteData:F},...t.length>0&&{updateData:t}},n=new FormData;n.append("postData",JSON.stringify(a)),s.A[J](j,n).then((a=>{y&&y(a),(e.length>0||t.length>0||F.length>0)&&(B(!0),setTimeout((()=>{C(!0),B(!1)}),1e3))})).catch((e=>{y&&y({error:e,status:!1})})).finally((()=>{V([]),O([]),G(!1),t=[],e=[]}))})(),disabled:W,className:"btn btn-bni",children:W?(0,l.jsx)("i",{className:"fa fa-circle-o-notch fa-spin fa-fw"}):(0,l.jsx)(l.Fragment,{children:Z})})})]})]}):(0,l.jsxs)("div",{className:"errorWrapper",children:[(0,l.jsx)("h5",{children:"Please resolve the following issues:"}),(0,l.jsx)("ol",{children:z.map(((e,t)=>(0,l.jsx)("li",{children:e.error},t)))})]})}):(0,l.jsx)("div",{className:"relativeSpinner",children:(0,l.jsx)(h.A,{})})}))},970:(e,t,a)=>{a.d(t,{A:()=>m});var n=a(9950),s=a(3302),l=a(4414);const r=e=>{const{info:t,checked:a,theme:n,marker:r,...i}=e;return(0,l.jsxs)(s.A.Group,{className:"dropdown-item mb-0",controlId:t.id,children:[r&&(0,l.jsx)("span",{className:"sup",children:"*"}),(0,l.jsx)(s.A.Check,{className:"px-3 py-0 "+("dark"===n?"text-light":"text-dark"),type:"checkbox",label:t.value,checked:a,...i})]})};var i=a(3027),c=a(4408),o=a(5342),d=a(5623),u=a(5358);const m=(0,c.Ay)((e=>{const{index:t,type:a="single",primaryKey:c,element:m,value:h,placeholder:p="select",onChange:x,intl:g,theme:f=""}=e,v=(0,n.useRef)(null),b=(0,n.useRef)(null),[_,j]=(0,n.useState)(!1),w=(0,n.useRef)(),y=()=>g.formatMessage({id:p,defaultMessage:p}),k=()=>{let e=h;const t=m.fetch.dropDownList;return"single"===a?(e=t.length>0&&t.filter((e=>e.id===h)),e=e.length>0?e[0].value:y()):e="object"===typeof e&&e.length>0?e.map((e=>e.toString())):[],[t,e]},[N,S]=k(),D=N.map((e=>(e.checked=e.id&&(Array.isArray(S)?S.filter((t=>t.toString()===e.id.toString())).length>0:S===e.value),e))),C="single"===a?N:D,[T,A]=(0,n.useState)(C),[$,P]=(0,n.useState)(S),[R,M]=(0,n.useState)(""),[E,I]=(0,n.useState)(S);(0,n.useEffect)((()=>{const[e,t]=k(),n=e.map((e=>(e.checked=e.id&&(Array.isArray(t)?t.filter((t=>t.toString()===e.id.toString())).length>0:t===e.value),e)));A("single"===a?e:n),P(t),I(t)}),[m]),(0,n.useEffect)((()=>{"multiple"===a&&P(F(S))}),[S]);const L=async e=>{M(e);const t=N.filter((t=>t.value.toString().toLowerCase().includes(e.toString().toLowerCase())));await A(t)},F=e=>{let t=e.length>0&&N.filter((t=>t.id===e[0]));if(1===t.length){t=t[0].value;return e.length>1?`${t} + ${e.length-1} more...`:t}return y()};return(0,n.useEffect)((()=>{var e;_&&(w.current&&w.current.focus({preventScroll:!0}),null===b||void 0===b||null===(e=b.current)||void 0===e||e.focus({preventScroll:!0}),setTimeout((()=>{var e;null===b||void 0===b||null===(e=b.current)||void 0===e||e.scrollIntoView({behavior:"instant",block:"nearest"})}),1))}),[_]),(0,l.jsxs)(o.A,{show:_,onToggle:()=>j(!_),ref:v,autoClose:"outside",className:"d-inline-block w-100",children:[(0,l.jsx)(o.A.Toggle,{variant:""+("dark"===f?"dark":"white"),className:"p-2 rounded cursor-pointer w-100 border d-flex align-items-center justify-content-between "+("dark"===f?"border-black":"border-1"),style:{fontSize:"0.9rem"},as:"div",children:(0,l.jsx)("span",{className:"text-truncate",children:$||g.formatMessage({id:p,defaultMessage:p})})}),(0,l.jsxs)(o.A.Menu,{variant:""+("dark"===f?"dark":"white"),className:"w-100 p-0 border "+("dark"===f?"border-black":"border-1"),show:_,children:[(null===m||void 0===m?void 0:m.searchable)&&(0,l.jsx)(o.A.Item,{className:"p-0 border-0",children:(0,l.jsxs)(d.A,{children:[(0,l.jsx)(s.A.Control,{size:"sm",ref:w,className:("dark"===f?"bg-dark text-white":"bg-white text-dark")+" rounded-bottom-0 border-0 shadow-none py-2",onChange:e=>{e.preventDefault(),L(e.target.value)},placeholder:g.formatMessage({id:"searchHere",defaultMessage:"searchHere"}),type:"text",value:R}),R&&(0,l.jsx)("i",{onClick:e=>{M(""),L("")},className:`fa fa-times text-danger bg-${f} p-2`})]})}),(0,l.jsx)(u.A,{className:"px-0",style:{maxHeight:"200px",overflowY:"auto",overflowX:"hidden"},children:T.length>0?T.map(((e,n)=>(0,l.jsx)(o.A.Item,{ref:e.checked?b:null,className:"small px-0 py-0 border-0 text-wrap",as:"div",children:"multiple"===a?(0,l.jsx)(r,{onChange:a=>{((e,a)=>{const{target:{checked:n}}=e;let s=a.id&&n?[...E,a.id]:E.filter((e=>e!==a.id));s=[...new Set(s)];const l=T.map((e=>s.includes(e.id)?{...e,checked:!0}:{...e,checked:!1}));A(l),I(s),P(F(s)),x(t,s,c)})(a,e)},checked:e.checked,marker:e.marker,info:e,theme:f},n):(0,l.jsxs)("div",{className:`cursor-pointer px-2 py-1 ${e.checked?"bni-bg text-dark":""} ${0!==n||m.searchable?"":"rounded-top"} ${n===T.length-1?"rounded-bottom":""}\n                    `,onClick:()=>{return x(t,(n=e).id,c),P(n.value),void("single"===a&&j(!1));var n},children:[e.value,e.marker&&(0,l.jsx)("span",{className:"sup",children:"*"})]})},n))):(0,l.jsx)(o.A.Item,{className:"text-center small text-wrap",children:(0,l.jsx)(i.A,{id:"noRecordsGenerated",defaultMessage:"noRecordsGenerated"})})})]})]})}))},3177:(e,t,a)=>{a.d(t,{GG:()=>l,Kg:()=>r,UT:()=>i});var n=a(9051),s=a.n(n);const l=[{id:"bankAccounts",Table:"banks",config:{footer:{total:{},pagination:{currentPage:"last",maxPagesToShow:5}}},label:"Bank accounts",TableRows:["bank_id","bank_name","bank_account_number","bank_swift_code","bank_account_type","bank_country","bank_sort","bank_locale","bank_currency"],defaultValues:[{bank_sort:"0"}],cellWidth:[4,13,11,11,13,13,5,13,13]},{id:"creditCardAccounts",Table:"credit_cards",label:"Credit cards",TableRows:["credit_card_id","credit_card_name","credit_card_number","credit_card_start_date","credit_card_end_date","credit_card_payment_date","credit_card_annual_interest","credit_card_locale","credit_card_currency"],defaultValues:[{credit_card_annual_interest:"48"}],cellWidth:[4,13,11,8,8,8,8,13,13]},{id:"incExpCat",config:{footer:{total:{},pagination:{currentPage:"last",maxPagesToShow:5}}},Table:"income_expense_category",label:"Income / expense categories",TableRows:["inc_exp_cat_id","inc_exp_cat_name","inc_exp_cat_is_metric","inc_exp_cat_is_plan_metric"],defaultValues:[{inc_exp_cat_is_metric:"0"},{inc_exp_cat_is_plan_metric:"0"}],cellWidth:[4,13,13,13]},{id:"incExpTemp",config:{footer:{total:{},pagination:{currentPage:"last",maxPagesToShow:5}}},Table:"income_expense_template",label:"Income expense template",TableRows:["template_id","temp_inc_exp_name","temp_amount","temp_inc_exp_type","temp_inc_exp_date","temp_category","temp_bank"],defaultValues:[{temp_inc_exp_date:"1"},{temp_inc_exp_type:"Dr"},{temp_amount:"0.00"},{temp_inc_exp_name:""}],cellWidth:[4,13,13,13,5,13,13]}],r=[{id:26,config:{footer:{total:{},pagination:{currentPage:"last",maxPagesToShow:5}}},Table:"income_expense",label:"Expenditures for selected month",TableRows:["inc_exp_id","inc_exp_name","inc_exp_amount","inc_exp_plan_amount","inc_exp_type","inc_exp_date","inc_exp_category","inc_exp_bank","inc_exp_comments"],TableAliasRows:[],defaultValues:[{inc_exp_type:"Dr"},{inc_exp_amount:0},{inc_exp_plan_amount:0},{inc_exp_date:s()(new Date).format("YYYY-MM-DD")}],rowElements:["checkbox","textbox","number","label",null,"date",{fetch:{dropDownList:[]},searchable:!0},{fetch:{dropDownList:[]},searchable:!0},"textbox"],showTooltipFor:["inc_exp_name","inc_exp_comments"]}],i=[{id:27,config:{footer:{total:{},pagination:{currentPage:"last",maxPagesToShow:5}},searchable:!0},Table:"credit_card_transactions",label:"Credit card transactions",TableRows:["cc_id","cc_transaction","cc_date","cc_opening_balance","cc_payment_credits","cc_purchases","cc_taxes_interest","cc_expected_balance","cc_for_card","cc_inc_exp_cat","cc_transaction_status","cc_comments","cc_added_at"],TableAliasRows:[],rowElements:["checkbox","textbox","date","number","number","number","number","label",{fetch:{dropDownList:[]},searchable:!0},{fetch:{dropDownList:[]},searchable:!0},{fetch:{dropDownList:[{checked:!1,id:"1",value:"Settled"},{checked:!1,id:"0",value:"Pending"},{checked:!1,id:"2",value:"Part payment"}]}},"textbox","relativeTime"],defaultValues:[{cc_date:s()().format("YYYY-MM-DD")},{cc_opening_balance:0},{cc_payment_credits:0},{cc_purchases:0},{cc_taxes_interest:0},{cc_expected_balance:0},{cc_transaction_status:"0"}],showTooltipFor:["cc_transaction","cc_comments"]}]},6731:(e,t,a)=>{a.d(t,{E:()=>i,x:()=>r});a(9950);var n=a(3027),s=a(2074),l=a(4414);const r=()=>(0,l.jsx)("div",{children:(0,l.jsxs)("div",{className:"d-flex align-items-center",children:[(0,l.jsx)("i",{className:"fa fa-exclamation-triangle fa-2x pt-2 text-danger"}),(0,l.jsxs)("div",{className:"ps-2",children:[(0,l.jsx)("div",{className:"fs-3",children:(0,l.jsx)(n.A,{id:"alert",defaultMessage:"alert"})}),(0,l.jsx)("div",{className:"fs-6",children:(0,l.jsx)(n.A,{id:"maximumQuotaExceeded",defaultMessage:"maximumQuotaExceeded"})})]})]})}),i=()=>(0,l.jsx)("div",{className:"d-flex align-items-center justify-content-between",children:(0,l.jsxs)("div",{children:[(0,l.jsxs)(s.N_,{className:"btn btn-sm btn-primary me-1 rounded-pill",to:"/billing",children:[(0,l.jsx)("i",{className:"fa fa-credit-card-alt pe-1"}),(0,l.jsx)(n.A,{id:"upgradeNow",defaultMessage:"upgradeNow"})]}),(0,l.jsx)("span",{className:"fs-6",children:(0,l.jsx)(n.A,{id:"accessUnlimitedStorage",defaultMessage:"accessUnlimitedStorage"})})]})})},3058:(e,t,a)=>{a.d(t,{A:()=>i});var n=a(9950),s=a(3027),l=a(2436),r=a(4414);const i=e=>{let{icon:t,intlId:a,children:i,...c}=e;const o=(0,n.useContext)(l.R);return(0,r.jsx)("div",{...c,className:`bg-gradient ${"dark"===o.userData.theme?"bg-dark darkBoxShadow":"bg-white lightBoxShadow"} mt-2 ps-3 py-2 rounded-pill`,children:(0,r.jsxs)("div",{className:"d-flex justify-content-between align-items-center",children:[(0,r.jsxs)("div",{className:"d-flex align-items-center",children:[(0,r.jsx)("i",{className:`${t} fa-1x`}),(0,r.jsx)("div",{className:"ps-2 mb-0",children:(0,r.jsx)(s.A,{id:a,defaultMessage:a})})]}),i]})})}}}]);