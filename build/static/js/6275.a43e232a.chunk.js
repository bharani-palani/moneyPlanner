"use strict";(self.webpackChunkledgerely_com=self.webpackChunkledgerely_com||[]).push([[6275],{6189:(e,n)=>{n.A=function(e,n){if(e&&n){var t=Array.isArray(n)?n:n.split(","),r=e.name||"",o=(e.type||"").toLowerCase(),i=o.replace(/\/.*$/,"");return t.some((function(e){var n=e.trim().toLowerCase();return"."===n.charAt(0)?r.toLowerCase().endsWith(n):n.endsWith("/*")?i===n.replace(/\/.*$/,""):o===n}))}return!0}},6275:(e,n,t)=>{t.d(n,{Ay:()=>ce});var r=t(9950),o=t(1942),i=t.n(o),a=t(7827),c=new Map([["aac","audio/aac"],["abw","application/x-abiword"],["arc","application/x-freearc"],["avif","image/avif"],["avi","video/x-msvideo"],["azw","application/vnd.amazon.ebook"],["bin","application/octet-stream"],["bmp","image/bmp"],["bz","application/x-bzip"],["bz2","application/x-bzip2"],["cda","application/x-cdf"],["csh","application/x-csh"],["css","text/css"],["csv","text/csv"],["doc","application/msword"],["docx","application/vnd.openxmlformats-officedocument.wordprocessingml.document"],["eot","application/vnd.ms-fontobject"],["epub","application/epub+zip"],["gz","application/gzip"],["gif","image/gif"],["heic","image/heic"],["heif","image/heif"],["htm","text/html"],["html","text/html"],["ico","image/vnd.microsoft.icon"],["ics","text/calendar"],["jar","application/java-archive"],["jpeg","image/jpeg"],["jpg","image/jpeg"],["js","text/javascript"],["json","application/json"],["jsonld","application/ld+json"],["mid","audio/midi"],["midi","audio/midi"],["mjs","text/javascript"],["mp3","audio/mpeg"],["mp4","video/mp4"],["mpeg","video/mpeg"],["mpkg","application/vnd.apple.installer+xml"],["odp","application/vnd.oasis.opendocument.presentation"],["ods","application/vnd.oasis.opendocument.spreadsheet"],["odt","application/vnd.oasis.opendocument.text"],["oga","audio/ogg"],["ogv","video/ogg"],["ogx","application/ogg"],["opus","audio/opus"],["otf","font/otf"],["png","image/png"],["pdf","application/pdf"],["php","application/x-httpd-php"],["ppt","application/vnd.ms-powerpoint"],["pptx","application/vnd.openxmlformats-officedocument.presentationml.presentation"],["rar","application/vnd.rar"],["rtf","application/rtf"],["sh","application/x-sh"],["svg","image/svg+xml"],["swf","application/x-shockwave-flash"],["tar","application/x-tar"],["tif","image/tiff"],["tiff","image/tiff"],["ts","video/mp2t"],["ttf","font/ttf"],["txt","text/plain"],["vsd","application/vnd.visio"],["wav","audio/wav"],["weba","audio/webm"],["webm","video/webm"],["webp","image/webp"],["woff","font/woff"],["woff2","font/woff2"],["xhtml","application/xhtml+xml"],["xls","application/vnd.ms-excel"],["xlsx","application/vnd.openxmlformats-officedocument.spreadsheetml.sheet"],["xml","application/xml"],["xul","application/vnd.mozilla.xul+xml"],["zip","application/zip"],["7z","application/x-7z-compressed"],["mkv","video/x-matroska"],["mov","video/quicktime"],["msg","application/vnd.ms-outlook"]]);function u(e,n){var t=function(e){var n=e.name;if(n&&-1!==n.lastIndexOf(".")&&!e.type){var t=n.split(".").pop().toLowerCase(),r=c.get(t);r&&Object.defineProperty(e,"type",{value:r,writable:!1,configurable:!1,enumerable:!0})}return e}(e);if("string"!==typeof t.path){var r=e.webkitRelativePath;Object.defineProperty(t,"path",{value:"string"===typeof n?n:"string"===typeof r&&r.length>0?r:e.name,writable:!1,configurable:!1,enumerable:!0})}return t}var l=[".DS_Store","Thumbs.db"];function s(e){return"object"===typeof e&&null!==e}function f(e){return v(e.target.files).map((function(e){return u(e)}))}function p(e){return(0,a.sH)(this,void 0,void 0,(function(){return(0,a.YH)(this,(function(n){switch(n.label){case 0:return[4,Promise.all(e.map((function(e){return e.getFile()})))];case 1:return[2,n.sent().map((function(e){return u(e)}))]}}))}))}function d(e,n){return(0,a.sH)(this,void 0,void 0,(function(){var t;return(0,a.YH)(this,(function(r){switch(r.label){case 0:return e.items?(t=v(e.items).filter((function(e){return"file"===e.kind})),"drop"!==n?[2,t]:[4,Promise.all(t.map(g))]):[3,2];case 1:return[2,m(y(r.sent()))];case 2:return[2,m(v(e.files).map((function(e){return u(e)})))]}}))}))}function m(e){return e.filter((function(e){return-1===l.indexOf(e.name)}))}function v(e){if(null===e)return[];for(var n=[],t=0;t<e.length;t++){var r=e[t];n.push(r)}return n}function g(e){if("function"!==typeof e.webkitGetAsEntry)return b(e);var n=e.webkitGetAsEntry();return n&&n.isDirectory?w(n):b(e)}function y(e){return e.reduce((function(e,n){return(0,a.fX)((0,a.fX)([],(0,a.zs)(e),!1),(0,a.zs)(Array.isArray(n)?y(n):[n]),!1)}),[])}function b(e){var n=e.getAsFile();if(!n)return Promise.reject("".concat(e," is not a File"));var t=u(n);return Promise.resolve(t)}function h(e){return(0,a.sH)(this,void 0,void 0,(function(){return(0,a.YH)(this,(function(n){return[2,e.isDirectory?w(e):D(e)]}))}))}function w(e){var n=e.createReader();return new Promise((function(e,t){var r=[];!function o(){var i=this;n.readEntries((function(n){return(0,a.sH)(i,void 0,void 0,(function(){var i,c,u;return(0,a.YH)(this,(function(a){switch(a.label){case 0:if(n.length)return[3,5];a.label=1;case 1:return a.trys.push([1,3,,4]),[4,Promise.all(r)];case 2:return i=a.sent(),e(i),[3,4];case 3:return c=a.sent(),t(c),[3,4];case 4:return[3,6];case 5:u=Promise.all(n.map(h)),r.push(u),o(),a.label=6;case 6:return[2]}}))}))}),(function(e){t(e)}))}()}))}function D(e){return(0,a.sH)(this,void 0,void 0,(function(){return(0,a.YH)(this,(function(n){return[2,new Promise((function(n,t){e.file((function(t){var r=u(t,e.fullPath);n(r)}),(function(e){t(e)}))}))]}))}))}var O=t(6189);function x(e){return function(e){if(Array.isArray(e))return P(e)}(e)||function(e){if("undefined"!==typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(e)||k(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function j(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function A(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?j(Object(t),!0).forEach((function(n){F(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):j(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function F(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function E(e,n){return function(e){if(Array.isArray(e))return e}(e)||function(e,n){var t=null==e?null:"undefined"!==typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null==t)return;var r,o,i=[],a=!0,c=!1;try{for(t=t.call(e);!(a=(r=t.next()).done)&&(i.push(r.value),!n||i.length!==n);a=!0);}catch(u){c=!0,o=u}finally{try{a||null==t.return||t.return()}finally{if(c)throw o}}return i}(e,n)||k(e,n)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function k(e,n){if(e){if("string"===typeof e)return P(e,n);var t=Object.prototype.toString.call(e).slice(8,-1);return"Object"===t&&e.constructor&&(t=e.constructor.name),"Map"===t||"Set"===t?Array.from(e):"Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)?P(e,n):void 0}}function P(e,n){(null==n||n>e.length)&&(n=e.length);for(var t=0,r=new Array(n);t<n;t++)r[t]=e[t];return r}var S="file-invalid-type",C="file-too-large",z="file-too-small",R="too-many-files",I=function(e){e=Array.isArray(e)&&1===e.length?e[0]:e;var n=Array.isArray(e)?"one of ".concat(e.join(", ")):e;return{code:S,message:"File type must be ".concat(n)}},T=function(e){return{code:C,message:"File is larger than ".concat(e," ").concat(1===e?"byte":"bytes")}},M=function(e){return{code:z,message:"File is smaller than ".concat(e," ").concat(1===e?"byte":"bytes")}},H={code:R,message:"Too many files"};function L(e,n){var t="application/x-moz-file"===e.type||(0,O.A)(e,n);return[t,t?null:I(n)]}function _(e,n,t){if(B(e.size))if(B(n)&&B(t)){if(e.size>t)return[!1,T(t)];if(e.size<n)return[!1,M(n)]}else{if(B(n)&&e.size<n)return[!1,M(n)];if(B(t)&&e.size>t)return[!1,T(t)]}return[!0,null]}function B(e){return void 0!==e&&null!==e}function K(e){return"function"===typeof e.isPropagationStopped?e.isPropagationStopped():"undefined"!==typeof e.cancelBubble&&e.cancelBubble}function Y(e){return e.dataTransfer?Array.prototype.some.call(e.dataTransfer.types,(function(e){return"Files"===e||"application/x-moz-file"===e})):!!e.target&&!!e.target.files}function U(e){e.preventDefault()}function $(){for(var e=arguments.length,n=new Array(e),t=0;t<e;t++)n[t]=arguments[t];return function(e){for(var t=arguments.length,r=new Array(t>1?t-1:0),o=1;o<t;o++)r[o-1]=arguments[o];return n.some((function(n){return!K(e)&&n&&n.apply(void 0,[e].concat(r)),K(e)}))}}function W(e){return"audio/*"===e||"video/*"===e||"image/*"===e||"text/*"===e||/\w+\/[-+.\w]+/g.test(e)}function q(e){return/^.*\.[\w]+$/.test(e)}var G=["children"],N=["open"],X=["refKey","role","onKeyDown","onFocus","onBlur","onClick","onDragEnter","onDragOver","onDragLeave","onDrop"],J=["refKey","onChange","onClick"];function Q(e){return function(e){if(Array.isArray(e))return ee(e)}(e)||function(e){if("undefined"!==typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(e)||Z(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function V(e,n){return function(e){if(Array.isArray(e))return e}(e)||function(e,n){var t=null==e?null:"undefined"!==typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null==t)return;var r,o,i=[],a=!0,c=!1;try{for(t=t.call(e);!(a=(r=t.next()).done)&&(i.push(r.value),!n||i.length!==n);a=!0);}catch(u){c=!0,o=u}finally{try{a||null==t.return||t.return()}finally{if(c)throw o}}return i}(e,n)||Z(e,n)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function Z(e,n){if(e){if("string"===typeof e)return ee(e,n);var t=Object.prototype.toString.call(e).slice(8,-1);return"Object"===t&&e.constructor&&(t=e.constructor.name),"Map"===t||"Set"===t?Array.from(e):"Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)?ee(e,n):void 0}}function ee(e,n){(null==n||n>e.length)&&(n=e.length);for(var t=0,r=new Array(n);t<n;t++)r[t]=e[t];return r}function ne(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function te(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?ne(Object(t),!0).forEach((function(n){re(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):ne(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function re(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function oe(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var ie=(0,r.forwardRef)((function(e,n){var t=e.children,o=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=te(te({},ae),e),t=n.accept,o=n.disabled,i=n.getFilesFromEvent,a=n.maxSize,c=n.minSize,u=n.multiple,l=n.maxFiles,s=n.onDragEnter,f=n.onDragLeave,p=n.onDragOver,d=n.onDrop,m=n.onDropAccepted,v=n.onDropRejected,g=n.onFileDialogCancel,y=n.onFileDialogOpen,b=n.useFsAccessApi,h=n.autoFocus,w=n.preventDropOnDocument,D=n.noClick,O=n.noKeyboard,j=n.noDrag,k=n.noDragEventsBubbling,P=n.onError,S=n.validator,C=(0,r.useMemo)((function(){return function(e){if(B(e))return Object.entries(e).reduce((function(e,n){var t=E(n,2),r=t[0],o=t[1];return[].concat(x(e),[r],x(o))}),[]).filter((function(e){return W(e)||q(e)})).join(",")}(t)}),[t]),z=(0,r.useMemo)((function(){return function(e){return B(e)?[{description:"Files",accept:Object.entries(e).filter((function(e){var n=E(e,2),t=n[0],r=n[1],o=!0;return W(t)||(console.warn('Skipped "'.concat(t,'" because it is not a valid MIME type. Check https://developer.mozilla.org/en-US/docs/Web/HTTP/Basics_of_HTTP/MIME_types/Common_types for a list of valid MIME types.')),o=!1),Array.isArray(r)&&r.every(q)||(console.warn('Skipped "'.concat(t,'" because an invalid file extension was provided.')),o=!1),o})).reduce((function(e,n){var t=E(n,2),r=t[0],o=t[1];return A(A({},e),{},F({},r,o))}),{})}]:e}(t)}),[t]),R=(0,r.useMemo)((function(){return"function"===typeof y?y:se}),[y]),I=(0,r.useMemo)((function(){return"function"===typeof g?g:se}),[g]),T=(0,r.useRef)(null),M=(0,r.useRef)(null),G=V((0,r.useReducer)(le,ue),2),N=G[0],Z=G[1],ee=N.isFocused,ne=N.isFileDialogActive,ie=(0,r.useRef)("undefined"!==typeof window&&window.isSecureContext&&b&&"showOpenFilePicker"in window),ce=function(){!ie.current&&ne&&setTimeout((function(){M.current&&(M.current.files.length||(Z({type:"closeDialog"}),I()))}),300)};(0,r.useEffect)((function(){return window.addEventListener("focus",ce,!1),function(){window.removeEventListener("focus",ce,!1)}}),[M,ne,I,ie]);var fe=(0,r.useRef)([]),pe=function(e){T.current&&T.current.contains(e.target)||(e.preventDefault(),fe.current=[])};(0,r.useEffect)((function(){return w&&(document.addEventListener("dragover",U,!1),document.addEventListener("drop",pe,!1)),function(){w&&(document.removeEventListener("dragover",U),document.removeEventListener("drop",pe))}}),[T,w]),(0,r.useEffect)((function(){return!o&&h&&T.current&&T.current.focus(),function(){}}),[T,h,o]);var de=(0,r.useCallback)((function(e){P?P(e):console.error(e)}),[P]),me=(0,r.useCallback)((function(e){e.preventDefault(),e.persist(),Ee(e),fe.current=[].concat(Q(fe.current),[e.target]),Y(e)&&Promise.resolve(i(e)).then((function(n){if(!K(e)||k){var t=n.length,r=t>0&&function(e){var n=e.files,t=e.accept,r=e.minSize,o=e.maxSize,i=e.multiple,a=e.maxFiles,c=e.validator;return!(!i&&n.length>1||i&&a>=1&&n.length>a)&&n.every((function(e){var n=E(L(e,t),1)[0],i=E(_(e,r,o),1)[0],a=c?c(e):null;return n&&i&&!a}))}({files:n,accept:C,minSize:c,maxSize:a,multiple:u,maxFiles:l,validator:S});Z({isDragAccept:r,isDragReject:t>0&&!r,isDragActive:!0,type:"setDraggedFiles"}),s&&s(e)}})).catch((function(e){return de(e)}))}),[i,s,de,k,C,c,a,u,l,S]),ve=(0,r.useCallback)((function(e){e.preventDefault(),e.persist(),Ee(e);var n=Y(e);if(n&&e.dataTransfer)try{e.dataTransfer.dropEffect="copy"}catch(t){}return n&&p&&p(e),!1}),[p,k]),ge=(0,r.useCallback)((function(e){e.preventDefault(),e.persist(),Ee(e);var n=fe.current.filter((function(e){return T.current&&T.current.contains(e)})),t=n.indexOf(e.target);-1!==t&&n.splice(t,1),fe.current=n,n.length>0||(Z({type:"setDraggedFiles",isDragActive:!1,isDragAccept:!1,isDragReject:!1}),Y(e)&&f&&f(e))}),[T,f,k]),ye=(0,r.useCallback)((function(e,n){var t=[],r=[];e.forEach((function(e){var n=V(L(e,C),2),o=n[0],i=n[1],u=V(_(e,c,a),2),l=u[0],s=u[1],f=S?S(e):null;if(o&&l&&!f)t.push(e);else{var p=[i,s];f&&(p=p.concat(f)),r.push({file:e,errors:p.filter((function(e){return e}))})}})),(!u&&t.length>1||u&&l>=1&&t.length>l)&&(t.forEach((function(e){r.push({file:e,errors:[H]})})),t.splice(0)),Z({acceptedFiles:t,fileRejections:r,type:"setFiles"}),d&&d(t,r,n),r.length>0&&v&&v(r,n),t.length>0&&m&&m(t,n)}),[Z,u,C,c,a,l,d,m,v,S]),be=(0,r.useCallback)((function(e){e.preventDefault(),e.persist(),Ee(e),fe.current=[],Y(e)&&Promise.resolve(i(e)).then((function(n){K(e)&&!k||ye(n,e)})).catch((function(e){return de(e)})),Z({type:"reset"})}),[i,ye,de,k]),he=(0,r.useCallback)((function(){if(ie.current){Z({type:"openDialog"}),R();var e={multiple:u,types:z};window.showOpenFilePicker(e).then((function(e){return i(e)})).then((function(e){ye(e,null),Z({type:"closeDialog"})})).catch((function(e){var n;(n=e)instanceof DOMException&&("AbortError"===n.name||n.code===n.ABORT_ERR)?(I(e),Z({type:"closeDialog"})):!function(e){return e instanceof DOMException&&("SecurityError"===e.name||e.code===e.SECURITY_ERR)}(e)?de(e):(ie.current=!1,M.current?(M.current.value=null,M.current.click()):de(new Error("Cannot open the file picker because the https://developer.mozilla.org/en-US/docs/Web/API/File_System_Access_API is not supported and no <input> was provided.")))}))}else M.current&&(Z({type:"openDialog"}),R(),M.current.value=null,M.current.click())}),[Z,R,I,b,ye,de,z,u]),we=(0,r.useCallback)((function(e){T.current&&T.current.isEqualNode(e.target)&&(" "!==e.key&&"Enter"!==e.key&&32!==e.keyCode&&13!==e.keyCode||(e.preventDefault(),he()))}),[T,he]),De=(0,r.useCallback)((function(){Z({type:"focus"})}),[]),Oe=(0,r.useCallback)((function(){Z({type:"blur"})}),[]),xe=(0,r.useCallback)((function(){D||(!function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:window.navigator.userAgent;return function(e){return-1!==e.indexOf("MSIE")||-1!==e.indexOf("Trident/")}(e)||function(e){return-1!==e.indexOf("Edge/")}(e)}()?he():setTimeout(he,0))}),[D,he]),je=function(e){return o?null:e},Ae=function(e){return O?null:je(e)},Fe=function(e){return j?null:je(e)},Ee=function(e){k&&e.stopPropagation()},ke=(0,r.useMemo)((function(){return function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=e.refKey,t=void 0===n?"ref":n,r=e.role,i=e.onKeyDown,a=e.onFocus,c=e.onBlur,u=e.onClick,l=e.onDragEnter,s=e.onDragOver,f=e.onDragLeave,p=e.onDrop,d=oe(e,X);return te(te(re({onKeyDown:Ae($(i,we)),onFocus:Ae($(a,De)),onBlur:Ae($(c,Oe)),onClick:je($(u,xe)),onDragEnter:Fe($(l,me)),onDragOver:Fe($(s,ve)),onDragLeave:Fe($(f,ge)),onDrop:Fe($(p,be)),role:"string"===typeof r&&""!==r?r:"presentation"},t,T),o||O?{}:{tabIndex:0}),d)}}),[T,we,De,Oe,xe,me,ve,ge,be,O,j,o]),Pe=(0,r.useCallback)((function(e){e.stopPropagation()}),[]),Se=(0,r.useMemo)((function(){return function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=e.refKey,t=void 0===n?"ref":n,r=e.onChange,o=e.onClick,i=oe(e,J);return te(te({},re({accept:C,multiple:u,type:"file",style:{display:"none"},onChange:je($(r,be)),onClick:je($(o,Pe)),tabIndex:-1},t,M)),i)}}),[M,t,u,be,o]);return te(te({},N),{},{isFocused:ee&&!o,getRootProps:ke,getInputProps:Se,rootRef:T,inputRef:M,open:je(he)})}(oe(e,G)),i=o.open,a=oe(o,N);return(0,r.useImperativeHandle)(n,(function(){return{open:i}}),[i]),r.createElement(r.Fragment,null,t(te(te({},a),{},{open:i})))}));ie.displayName="Dropzone";var ae={disabled:!1,getFilesFromEvent:function(e){return(0,a.sH)(this,void 0,void 0,(function(){return(0,a.YH)(this,(function(n){return s(e)&&s(e.dataTransfer)?[2,d(e.dataTransfer,e.type)]:function(e){return s(e)&&s(e.target)}(e)?[2,f(e)]:Array.isArray(e)&&e.every((function(e){return"getFile"in e&&"function"===typeof e.getFile}))?[2,p(e)]:[2,[]]}))}))},maxSize:1/0,minSize:0,multiple:!0,maxFiles:0,preventDropOnDocument:!0,noClick:!1,noKeyboard:!1,noDrag:!1,noDragEventsBubbling:!1,validator:null,useFsAccessApi:!0,autoFocus:!1};ie.defaultProps=ae,ie.propTypes={children:i().func,accept:i().objectOf(i().arrayOf(i().string)),multiple:i().bool,preventDropOnDocument:i().bool,noClick:i().bool,noKeyboard:i().bool,noDrag:i().bool,noDragEventsBubbling:i().bool,minSize:i().number,maxSize:i().number,maxFiles:i().number,disabled:i().bool,getFilesFromEvent:i().func,onFileDialogCancel:i().func,onFileDialogOpen:i().func,useFsAccessApi:i().bool,autoFocus:i().bool,onDragEnter:i().func,onDragLeave:i().func,onDragOver:i().func,onDrop:i().func,onDropAccepted:i().func,onDropRejected:i().func,onError:i().func,validator:i().func};const ce=ie;var ue={isFocused:!1,isFileDialogActive:!1,isDragActive:!1,isDragAccept:!1,isDragReject:!1,acceptedFiles:[],fileRejections:[]};function le(e,n){switch(n.type){case"focus":return te(te({},e),{},{isFocused:!0});case"blur":return te(te({},e),{},{isFocused:!1});case"openDialog":return te(te({},ue),{},{isFileDialogActive:!0});case"closeDialog":return te(te({},e),{},{isFileDialogActive:!1});case"setDraggedFiles":return te(te({},e),{},{isDragActive:n.isDragActive,isDragAccept:n.isDragAccept,isDragReject:n.isDragReject});case"setFiles":return te(te({},e),{},{acceptedFiles:n.acceptedFiles,fileRejections:n.fileRejections});case"reset":return te({},ue);default:return e}}function se(){}}}]);