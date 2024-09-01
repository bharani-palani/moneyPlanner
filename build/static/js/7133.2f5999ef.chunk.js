"use strict";(self.webpackChunkledgerely_com=self.webpackChunkledgerely_com||[]).push([[7133],{67133:(e,t,s)=>{s.d(t,{A:()=>x});var l=s(9950),a=s(95491),i=s.n(a),n=s(90023),r=s(92436),d=s(41397),o=s.n(d),c=s(36275),u=s(63027),h=s(51960),p=s(32083),m=s(44414);const x=function(e){const{structure:t,showSubmit:s=!0,parentClassName:a="myClassName",onChange:d,onSubmit:x,submitBtnLabel:b="Submit",submitBtnClassName:g="btn btn-sm btn-success",...j}=e,N=(0,l.useContext)(r.R),[f,v]=(0,l.useState)(t),[y,w]=(0,l.useState)(!1),[k,C]=(0,l.useState)([]),M=204800;(0,l.useEffect)((()=>{v(f)}),[JSON.stringify(f)]);const A=(e,t,s,l)=>{d(t,s,l)},D=e=>{const{label:t}=e;return(0,m.jsx)("div",{className:"text-danger pt-2",children:t})},S=(e,t)=>{if(e.options&&e.options.validation){let s=[...k];if(new RegExp(e.options.validation).test(t)){const t=s.indexOf(e.index);-1!==t&&s.splice(t,1)}else s.push(e.index);s=[...new Set(s)],C(s)}},$=(0,l.useCallback)(i()(((e,t)=>{A(0,t.index,e.target.value),S(t,e.target.value)}),300),[]),F=e=>{let t="";for(let s=0;s<e.length;s++)t+=String.fromCharCode(e[s]);return btoa(t)},V=(e,t)=>{var s;switch(e.elementType){case"hidden":return(0,m.jsx)("div",{children:(0,m.jsx)("input",{id:e.id,className:"d-none",type:"hidden",defaultValue:e.value,...j})},t);case"invisible":return(0,m.jsx)("div",{...j,children:e.value},t);case"file":return(0,m.jsx)(c.Ay,{maxSize:M,accept:{"image/png":[],"image/jpeg":[]},onDrop:t=>((e,t)=>{if(e.length>0){const s=new FileReader;s.addEventListener("load",(()=>{const e=new Uint8Array(s.result);$({target:{value:F(Array.from(e))}},t)})),s.readAsArrayBuffer(e[0])}})(t,e),children:t=>{let{acceptedFiles:s,fileRejections:l,getRootProps:a,getInputProps:i}=t;return(0,m.jsx)("div",{className:"text-secondary rounded-3 cursor-pointer w-100 smallDropZone",children:(0,m.jsxs)("div",{...a({className:"d-flex align-items-center justify-content-between"}),children:[e.value&&0===s.length&&(0,m.jsxs)("div",{className:"position-relative",children:[(0,m.jsx)("div",{style:{opacity:.7},className:"position-absolute bottom-0 start-50 translate-middle-x w-100 bg-danger text-light text-center",onClick:t=>{t.stopPropagation(),$({target:{value:""}},e)},children:(0,m.jsx)("i",{className:"fa fa-trash"})}),(0,m.jsx)(h.A,{className:"img-fluid rounded-start-3",src:`data:image/*;base64,${e.value}`,style:{height:"50px",width:"50px"}})]}),(0,m.jsxs)("div",{className:`${s.length>0?"w-75":"w-100"} text-center ${"dark"===N.userData.theme?"text-light":"text-dark"}`,children:[(0,m.jsx)("input",{...i()}),s.length>0&&s.map((e=>(0,m.jsx)("small",{className:"text-danger",children:p.A.shorten(e.path,15)},e.path))),0===s.length&&0===l.length&&(0,m.jsxs)("div",{className:"p-3 small",children:[(0,m.jsx)("span",{children:(0,m.jsx)(u.A,{id:"dragFilesHere",defaultMessage:"dragFilesHere"})}),(0,m.jsx)("span",{className:"ps-1",children:"PNG | JPEG"})]}),l.length>0&&(0,m.jsxs)("div",{className:"text-danger p-3",children:[(0,m.jsx)("span",{children:(0,m.jsx)(u.A,{id:"maxFileSizeLimitIs",defaultMessage:"maxFileSizeLimitIs"})}),(0,m.jsxs)("span",{className:"ps-1",children:[200," kB"]})]})]}),s.length>0&&(0,m.jsx)(h.A,{className:"img-fluid rounded-end-3",src:URL.createObjectURL(s[0]),style:{height:"50px",width:"50px"}})]})})}});case"text":return(0,m.jsxs)("div",{className:"py-2 text-dark",style:e.disabled?{opacity:.7}:{},children:[(0,m.jsxs)("div",{className:"form-floating",children:[(0,m.jsx)("input",{id:e.id,type:"text",placeholder:e.placeHolder,onChange:t=>{t.persist(),$(t,e)},className:"form-control "+(k.includes(e.index)?"is-invalid":""),defaultValue:e.value,disabled:null===e||void 0===e?void 0:e.disabled,...j,style:e.disabled?{cursor:"not-allowed"}:{}}),e.options&&e.options.help&&(0,m.jsx)(n.A,{btnValue:"<i class='fa fa-question-circle text-secondary' />",btnClassName:"btn-white rounded-circle help",placement:"end",label:e.label,children:(0,m.jsx)("ul",{className:"list-group list-group-flush",children:e.options.help.map(((e,t)=>(0,m.jsx)("li",{className:"list-group-item border-bottom-0 "+("dark"===N.userData.theme?"bg-dark text-white-50":"bg-white text-dark"),children:e},t)))})},1),(0,m.jsxs)("label",{htmlFor:e.id,className:"text-truncate w-100",children:[e.options&&e.options.required&&(0,m.jsx)("sup",{className:"text-danger",children:"*"}),e.label]})]}),k.includes(e.index)&&(0,m.jsx)(D,{label:e.options.errorMsg})]},t);case"number":return(0,m.jsx)("div",{className:"py-2 text-dark",style:e.disabled?{opacity:.7,cursor:"not-allowed"}:{},children:(0,m.jsxs)("div",{className:"form-floating",children:[e.options&&e.options.help&&(0,m.jsx)(n.A,{btnValue:"<i class='fa fa-question-circle text-secondary' />",btnClassName:"btn-white rounded-circle help",placement:"end",label:e.label,children:(0,m.jsx)("ul",{className:"list-group list-group-flush",children:e.options.help.map(((e,t)=>(0,m.jsx)("li",{className:"list-group-item border-bottom-0 "+("dark"===N.userData.theme?"bg-dark text-white-50":"bg-white text-dark"),children:e},t)))})},1),(0,m.jsx)("input",{id:e.id,type:"number",placeholder:e.placeHolder,onChange:t=>{t.persist(),$(t,e)},className:"form-control "+(k.includes(e.index)?"is-invalid":""),defaultValue:e.value,disabled:null===e||void 0===e?void 0:e.disabled,...j}),k.includes(e.index)&&(0,m.jsx)(D,{label:e.options.errorMsg}),(0,m.jsxs)("label",{htmlFor:e.id,className:"text-truncate w-100",children:[e.options&&e.options.required&&(0,m.jsx)("sup",{className:"text-danger",children:"*"}),e.label]})]})},t);case"textArea":return(0,m.jsx)("div",{className:"py-2 text-dark",style:e.disabled?{opacity:.7,cursor:"not-allowed"}:{},children:(0,m.jsxs)("div",{className:"form-floating",children:[e.options&&e.options.help&&(0,m.jsx)(n.A,{btnValue:"<i class='fa fa-question-circle text-secondary' />",btnClassName:"btn-white rounded-circle help",placement:"end",label:e.label,children:(0,m.jsx)("ul",{className:"list-group list-group-flush",children:e.options.help.map(((e,t)=>(0,m.jsx)("li",{className:"list-group-item border-bottom-0 "+("dark"===N.userData.theme?"bg-dark text-white-50":"bg-white text-dark"),children:e},t)))})},1),(0,m.jsx)("textarea",{id:e.id,style:{height:`${null===e||void 0===e||null===(s=e.options)||void 0===s?void 0:s.rowLength}px`},placeholder:e.placeHolder,onChange:t=>{t.persist(),$(t,e)},className:"form-control "+(k.includes(e.index)?"is-invalid":""),...j,defaultValue:e.value,disabled:null===e||void 0===e?void 0:e.disabled}),k.includes(e.index)&&(0,m.jsx)(D,{label:e.options.errorMsg}),(0,m.jsxs)("label",{htmlFor:e.id,className:"text-truncate w-100",children:[e.options&&e.options.required&&(0,m.jsx)("sup",{className:"text-danger",children:"*"}),e.label]})]})},t);case"password":return(0,m.jsx)("div",{className:"py-2 text-dark",style:e.disabled?{opacity:.7,cursor:"not-allowed"}:{},children:(0,m.jsxs)("div",{className:"form-floating password",children:[e.options&&e.options.help&&(0,m.jsx)(n.A,{btnValue:"<i class='fa fa-question-circle text-secondary' />",btnClassName:"btn-white rounded-circle help",placement:"end",label:e.label,children:(0,m.jsx)("ul",{className:"list-group list-group-flush",children:e.options.help.map(((e,t)=>(0,m.jsx)("li",{className:"list-group-item border-bottom-0 "+("dark"===N.userData.theme?"bg-dark text-white-50":"bg-white text-dark"),children:e},t)))})},1),(0,m.jsx)("input",{id:e.id,type:""+(y?"text":"password"),placeholder:e.placeHolder,onChange:t=>{t.persist(),$(t,e)},className:"form-control "+(k.includes(e.index)?"is-invalid":""),defaultValue:e.value,disabled:null===e||void 0===e?void 0:e.disabled,...j}),(0,m.jsx)("i",{onClick:()=>w(!y),className:"eye fa fa-"+(y?"eye":"eye-slash")}),k.includes(e.index)&&(0,m.jsx)(D,{label:e.options.errorMsg}),(0,m.jsxs)("label",{htmlFor:e.id,className:"text-truncate w-100",children:[e.options&&e.options.required&&(0,m.jsx)("sup",{className:"text-danger",children:"*"}),e.label]})]})},t);case"dropDown":return(0,m.jsx)("div",{className:"py-2 text-dark",style:e.disabled?{opacity:.7,cursor:"not-allowed"}:{},children:(0,m.jsxs)("div",{className:"form-floating",children:[e.options&&e.options.help&&(0,m.jsx)(n.A,{btnValue:"<i class='fa fa-question-circle text-secondary' />",btnClassName:"btn-white rounded-circle help",placement:"end",label:e.label,children:(0,m.jsx)("ul",{className:"list-group list-group-flush",children:e.options.help.map(((e,t)=>(0,m.jsx)("li",{className:"list-group-item border-bottom-0 "+("dark"===N.userData.theme?"bg-dark text-white-50":"bg-white text-dark"),children:e},t)))})},1),(0,m.jsxs)("select",{id:e.id,onChange:t=>{S(e,t.target.value),A(0,e.index,t.target.value)},style:e.disabled?{cursor:"not-allowed"}:{},className:"form-select "+(k.includes(e.index)?"is-invalid":""),value:e.value,disabled:e.disabled,...j,children:[(0,m.jsx)("option",{value:"",children:e.placeHolder}),e.list&&e.list.length>0&&e.list.map(((e,t)=>(0,m.jsx)("option",{value:e.value,children:e.label},t)))]}),k.includes(e.index)&&(0,m.jsx)(D,{label:e.options.errorMsg}),(0,m.jsxs)("label",{htmlFor:e.id,className:"text-truncate w-100",children:[e.options&&e.options.required&&(0,m.jsx)("sup",{className:"text-danger",children:"*"}),e.label]})]})},t);case"checkBox":return(0,m.jsx)("div",{className:"py-2",children:(0,m.jsxs)("div",{className:"position-relative",children:[(0,m.jsx)("div",{children:e.label}),(0,m.jsxs)("div",{children:[e.options&&e.options.help&&(0,m.jsx)(n.A,{btnValue:"<i class='fa fa-question-circle text-secondary' />",btnClassName:"btn-white rounded-circle help",placement:"end",label:e.label,children:(0,m.jsx)("ul",{className:"list-group list-group-flush",children:e.options.help.map(((e,t)=>(0,m.jsx)("li",{className:"list-group-item border-bottom-0 "+("dark"===N.userData.theme?"bg-dark text-white-50":"bg-white text-dark"),children:e},t)))})},1),e.list.map(((t,s)=>{const l=o().uniqueId(`checkbox-${t.id}-`);return(0,m.jsxs)("div",{className:"form-check "+(e.isInline?"d-inline-block":"d-block"),children:[(0,m.jsx)("input",{className:"form-check-input",onChange:s=>{A(0,e.index,"",{id:t.id,checked:s.target.checked}),S(e,e.value)},type:"checkbox",defaultValue:t.value,id:l,disabled:t.disabled,defaultChecked:t.checked,name:e.index,...j}),(0,m.jsx)("label",{className:"form-check-label pe-2 text-truncate w-100",htmlFor:l,children:t.label})]},s)}))]}),k.includes(e.index)&&(0,m.jsx)(D,{label:e.options.errorMsg})]})},t);case"radio":return(0,m.jsx)("div",{className:"py-2",children:(0,m.jsxs)("div",{className:"position-relative",children:[(0,m.jsx)("div",{children:e.label}),(0,m.jsxs)("div",{children:[e.options&&e.options.help&&(0,m.jsx)(n.A,{btnValue:"<i class='fa fa-question-circle text-secondary' />",btnClassName:"btn-white rounded-circle help",placement:"end",label:e.label,children:(0,m.jsx)("ul",{className:"list-group list-group-flush",children:e.options.help.map(((e,t)=>(0,m.jsx)("li",{className:"list-group-item border-bottom-0 "+("dark"===N.userData.theme?"bg-dark text-white-50":"bg-white text-dark"),children:e},t)))})},1),e.list.map(((t,s)=>{const l=o().uniqueId(`radio-${t.id}-`);return(0,m.jsxs)("div",{className:"form-check "+(e.options.isInline?"d-inline-block":"d-block"),children:[(0,m.jsx)("input",{className:"form-check-input",onChange:t=>{S(e,t.target.value),A(0,e.index,t.target.value)},type:"radio",defaultValue:t.value,id:l,disabled:t.disabled,defaultChecked:t.checked,name:e.index,...j}),(0,m.jsx)("label",{className:"form-check-label pe-2 text-truncate w-100",htmlFor:l,children:t.label})]},s)}))]}),k.includes(e.index)&&(0,m.jsx)(D,{label:e.options.errorMsg})]})},t);default:return(0,m.jsx)("div",{children:"Unknown Element"})}};return(0,m.jsx)("div",{className:a,children:(0,m.jsxs)("div",{className:"row",children:[f.length>0&&f.map(((e,t)=>(0,m.jsx)("div",{className:e.className,children:V(e,t)},t))),f.length>0&&f.filter((e=>"hidden"===e.elementType)).length>0&&f.filter((e=>"hidden"===e.elementType)).map(((e,t)=>V(e,t))),s&&(0,m.jsx)("div",{className:"col-md-12 py-2",children:(0,m.jsx)("button",{onClick:()=>(()=>{const e=f.map((e=>!!e.options&&!!e.options.validation&&!new RegExp(e.options.validation).test(e.value)&&e.index)).filter((e=>e));e.length>0?C(e):x()})(),className:g,children:b})})]})})}},90023:(e,t,s)=>{s.d(t,{A:()=>d});var l=s(9950),a=s(97937),i=s(49639),n=s(92436),r=s(44414);const d=function(e){let{btnValue:t,btnClassName:s,label:d,children:o,...c}=e;const[u,h]=(0,l.useState)(!1),p=(0,l.useContext)(n.R);return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(a.A,{tabIndex:"-1",variant:null,dangerouslySetInnerHTML:{__html:t},className:s,onClick:()=>h(!0)}),(0,r.jsxs)(i.A,{show:u,onHide:()=>h(!1),...c,className:""+("dark"===p.userData.theme?"bg-dark text-white":"bg-white text-dark"),children:[(0,r.jsx)(i.A.Header,{closeButton:!0,children:(0,r.jsx)(i.A.Title,{children:d})}),(0,r.jsx)(i.A.Body,{className:""+("dark"===p.userData.theme?"bg-dark text-white":"bg-white text-dark"),children:o})]})]})}},32083:(e,t,s)=>{s.d(t,{A:()=>a});const l={self:void 0,sageHeaderAndList:(e,t)=>{const s=e.filter((e=>Number(e[t])>1));return[e.filter((e=>1===Number(e[t])))[0],s]},loadRandomSpinnerIcon:()=>"Oval",stringToCapitalize:e=>e.split("_").map((e=>e.substring(0,1).toUpperCase()+e.substring(1,e.length))).join(" "),donutChartColors:["#e91e63","#9c27b0","#673ab7","#3f51b5","#2196f3","#03a9f4","#00bcd4","#009688","#4caf50","#8bc34a","#cddc39","#ffeb3b","#ffc107","#ff9800","#ff5722","#795548","#607d8b","#f44336"],indianLacSeperator:(e,t)=>e.toLocaleString("en-IN",{maximumFractionDigits:t,style:"currency",currency:"INR"}),countryCurrencyLacSeperator:(e,t,s,l)=>Number(s).toLocaleString(e,{maximumFractionDigits:l,minimumFractionDigits:l,style:t?"currency":"decimal",...t&&{currency:t}}),lacSeperator:function(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"en-IN";return null===e||void 0===e?void 0:e.toLocaleString(t)},strToNumMonth:{Jan:"01",Feb:"02",Mar:"03",Apr:"04",May:"05",Jun:"06",Jul:"07",Aug:"08",Sep:"09",Oct:"10",Nov:"11",Dec:"12"},monthToStr:{"01":"Jan","02":"Feb","03":"Mar","04":"Apr","05":"May","06":"Jun","07":"Jul","08":"Aug","09":"Sep",10:"Oct",11:"Nov",12:"Dec"},fullmonthNames:["January","February","March","April","May","June","July","August","September","October","November","December"],threeDigitMonthNames:["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],leadingZeros:e=>{const t=Number(e);return t<10?`0${t}`:t},dateToMonthYear:e=>{const t=new Date(e);return`${l.threeDigitMonthNames[t.getMonth()]}-${t.getFullYear()}`},addMonths:(e,t)=>{if(e&&t){let[s,l]=["",(e=new Date(+e)).getDate()];e.setMonth(e.getMonth()+t,1),s=e.getMonth(),e.setDate(l),e.getMonth()!==s&&e.setDate(0)}return e},getNextMonthDate:e=>{const t=new Date;let s=t.getFullYear(),l=t.getMonth()+2;l>12&&(s+=1,l=1);const a=new Date(`${s}-${l}-01`);let i=a.getMonth()+1;i=i<10?`0${i}`:i;const n=e<10?`0${e}`:e;return`${a.getFullYear()}-${i}-${n}`},getNow:()=>{const e=e=>{const t=Number(e);return t<10?`0${t}`:t},t=new Date;return`${t.getFullYear()}-${e(t.getMonth()+1)}-${e(t.getDate())} ${e(t.getHours())}:${e(t.getMinutes())}:${e(t.getSeconds())}`},dateToYYYYMMDD:e=>{const t=e=>{const t=Number(e);return t<10?`0${t}`:t};return`${e.getFullYear()}-${t(e.getMonth()+1)}-${t(e.getDate())}`},stripCommasInCSV:e=>e.map((e=>{const t=Object.keys(e).map((t=>({[t]:String(e[t]).replace(/,/g,"")})));return Object.assign({},{},...t)})),chunkArray:(e,t)=>e.map(((s,l)=>e.slice(l*t,l*t+t))).filter((e=>e.length>0)),shorten:(e,t)=>e&&e.length>t?e.slice(0,Math.ceil(t/2))+"..."+e.slice(-10,e.length):e},a=l}}]);