"use strict";(self.webpackChunkledgerely_com=self.webpackChunkledgerely_com||[]).push([[858],{70858:(e,a,s)=>{s.r(a),s.d(a,{SignupContext:()=>g,default:()=>f});var t=s(9950),l=s(45358),r=s(86781),d=s(68459),i=s(28429),o=s(42074),c=s(11308),n=s(82097),u=s(89288),m=s(81237),p=s(44414);const g=(0,t.createContext)([{},()=>{}]),f=()=>{const e=(0,u.A)(),a=(0,t.useContext)(c.F),s=(0,i.zy)(),f=(0,i.Zp)(),M=[{id:"credentials",label:"Credentials",path:"/signup/credentials"},{id:"demographics",label:"Demographics",path:"/signup/demographics"}],x=[{id:"accountName",index:"accountName",label:e.formatMessage({id:"name",defaultMessage:"name"}),elementType:"text",value:"",placeHolder:"Your name",className:"col-12",options:{required:!0,validation:/^[a-zA-Z0-9 ]{4,50}$/g,errorMsg:e.formatMessage({id:"thisFieldIsRequired",defaultMessage:"thisFieldIsRequired"})}},{id:"accountEmail",index:"accountEmail",label:e.formatMessage({id:"email",defaultMessage:"email"}),elementType:"email",value:"",placeHolder:"your-email@mailbox.com",className:"col-12",options:{required:!0,validation:/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,5})+$/,errorMsg:e.formatMessage({id:"enterValidEmail",defaultMessage:"enterValidEmail"})}},{id:"accountPassword",index:"accountPassword",label:e.formatMessage({id:"password",defaultMessage:"password"}),elementType:"password",value:"",placeHolder:"",className:"col-12",options:{required:!0,validation:/^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*_])(?=.{8,})/,errorMsg:e.formatMessage({id:"inputDoesNotMatchCriteria",defaultMessage:"inputDoesNotMatchCriteria"}),help:[e.formatMessage({id:"minimumLetters",defaultMessage:"minimumLetters"},{n:8}),e.formatMessage({id:"atleastNCapitalLetter",defaultMessage:"atleastNCapitalLetter"},{n:1}),e.formatMessage({id:"atleastNSpecialCharacter",defaultMessage:"atleastNSpecialCharacter"},{n:1}),e.formatMessage({id:"atleastNNumber",defaultMessage:"atleastNNumber"},{n:1}),e.formatMessage({id:"allTheAboveAreRequired",defaultMessage:"allTheAboveAreRequired"})]}},{id:"accountConfirmPassword",index:"accountConfirmPassword",label:e.formatMessage({id:"retypePassword",defaultMessage:"retypePassword"}),elementType:"password",value:"",placeHolder:"",className:"col-12",options:{required:!0,validation:/^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*_])(?=.{8,})/,errorMsg:e.formatMessage({id:"inputDoesNotMatchCriteria",defaultMessage:"inputDoesNotMatchCriteria"})}},{id:"accountMobile",index:"accountMobile",label:e.formatMessage({id:"mobile",defaultMessage:"mobile"}),elementType:"number",value:"",updateStatus:!1,placeHolder:e.formatMessage({id:"mobile",defaultMessage:"mobile"}),className:"col-12",options:{required:!0,validation:/^[0-9]{10}$/,errorMsg:e.formatMessage({id:"enterValidMobileNumber",defaultMessage:"enterValidMobileNumber"})}},{id:"accountAddress1",index:"accountAddress1",label:e.formatMessage({id:"address1",defaultMessage:"address1"}),elementType:"text",value:"",placeHolder:"Address 1",className:"col-12"},{id:"accountAddress2",index:"accountAddress2",label:e.formatMessage({id:"address2",defaultMessage:"address2"}),elementType:"text",value:"",placeHolder:"Address 2",className:"col-12"},{id:"accountCity",index:"accountCity",label:e.formatMessage({id:"city",defaultMessage:"city"}),elementType:"text",value:"",placeHolder:"City",className:"col-12"},{id:"accountState",index:"accountState",label:e.formatMessage({id:"state",defaultMessage:"state"}),elementType:"text",value:"",placeHolder:"State",className:"col-12"},{id:"accountPostalCode",index:"accountPostalCode",label:e.formatMessage({id:"postalCode",defaultMessage:"postalCode"}),elementType:"number",value:"",placeHolder:"Postal code",className:"col-12"},{id:"accountCountry",index:"accountCountry",label:e.formatMessage({id:"country",defaultMessage:"country"}),elementType:"dropDown",value:"IND",list:n.HH.map((e=>({label:e.value,value:e.id}))),placeHolder:e.formatMessage({id:"select",defaultMessage:"select"}),className:"col-12",options:{required:!0,validation:/([^\s])/,errorMsg:e.formatMessage({id:"thisFieldIsRequired",defaultMessage:"thisFieldIsRequired"})}},{id:"accountCurrency",index:"accountCurrency",label:e.formatMessage({id:"currency",defaultMessage:"currency"}),elementType:"dropDown",value:"INR",list:[{value:"INR",label:"INR"}],placeHolder:e.formatMessage({id:"select",defaultMessage:"select"}),className:"col-12",options:{required:!0,validation:/([^\s])/,errorMsg:e.formatMessage({id:"thisFieldIsRequired",defaultMessage:"thisFieldIsRequired"})}}],[N,h]=(0,t.useState)(x);return(0,t.useEffect)((()=>{f("/signup/credentials")}),[]),(0,p.jsx)(g.Provider,{value:{credentialForm:x,formStructure:N,setFormStructure:h,onMassagePayload:(e,a)=>{let s=[...N];s=s.map((s=>(s.id===e&&(s.value=a),s))),h(s)}},children:(0,p.jsx)(l.A,{className:"signUp",children:(0,p.jsxs)(r.A,{children:[(0,p.jsxs)(d.A,{lg:3,className:"p-0",children:[(0,p.jsxs)(r.A,{className:"py-2 text-dark m-0",children:[(0,p.jsx)(d.A,{xs:2,children:(0,p.jsx)(o.N_,{size:"sm",className:"btn-link text-dark",to:"/",children:(0,p.jsx)("i",{className:"fa fa-angle-double-left px-2"})})}),(0,p.jsx)(d.A,{xs:8,children:(0,p.jsx)("div",{className:"text-center",children:"Sign up"})}),(0,p.jsx)(d.A,{xs:2,children:(0,p.jsx)("img",{className:"brand",src:m,style:{width:"25px",height:"25px"}})})]}),(0,p.jsx)("ul",{className:"small px-2 m-0 my-2",style:{listStyle:"none"},children:M.map(((e,a)=>(0,p.jsxs)(t.Fragment,{children:[(0,p.jsxs)("li",{className:"d-flex align-items-center",children:[(0,p.jsx)("span",{className:"stepNumber rounded-circle d-flex align-items-center justify-content-center me-1 "+(s.pathname===e.path?"bni-bg text-dark":"bg-secondary text-white"),children:a+1}),(0,p.jsx)(o.N_,{to:e.path,className:"text-dark d-block",relative:"path",children:e.label})]}),a!==M.length-1&&(0,p.jsx)("li",{className:"line"})]},e.id)))})]}),(0,p.jsxs)(d.A,{lg:9,className:"wrapper p-0",children:[(0,p.jsx)("div",{className:"p-2 bni-bg text-dark",children:(0,p.jsx)("div",{className:"d-flex justify-content-center",children:a.appName})}),(0,p.jsx)(i.sv,{})]})]})})})}},45358:(e,a,s)=>{s.d(a,{A:()=>c});var t=s(48738),l=s.n(t),r=s(9950),d=s(44089),i=s(44414);const o=r.forwardRef(((e,a)=>{let{bsPrefix:s,fluid:t=!1,as:r="div",className:o,...c}=e;const n=(0,d.oU)(s,"container"),u="string"===typeof t?`-${t}`:"-fluid";return(0,i.jsx)(r,{ref:a,...c,className:l()(o,t?`${n}${u}`:n)})}));o.displayName="Container";const c=o}}]);