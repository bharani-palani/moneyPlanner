(this["webpackJsonpbni-apps"]=this["webpackJsonpbni-apps"]||[]).push([[11],{1153:function(t,n,e){"use strict";e.r(n);var r=e(26),a=e(39),i=e(1),o=e(86),l=e(101),c=e(94),u=e(0),s=function(t){var n=Object(i.useRef)(null),e=t.width,c=t.height,s=t.marginTop,f=t.marginRight,d=t.marginBottom,p=t.marginLeft,h=t.fillColor,g=t.fontColor,m=t.lineColor,w=t.padding,y=t.style,b=t.showTooltip,v=t.data,k=t.showYaxis,x=t.showYaxisLine,A=t.showYaxisLabel,j=t.showXaxis,O=t.showXaxisLabel,C=t.showXaxisLine,J=t.sortClause,L=t.showAnimation,z=t.animationDuration,N=t.onClick,P=t.fontSize,S=t.yTicks;return Object(i.useEffect)((function(){var t,i=(t=v).filter((function(t){return t.hasOwnProperty("where")&&t.hasOwnProperty("label")&&t.hasOwnProperty("value")})).length>0?t:[],u=o.I().keys(o.K(i.map((function(t){return t.where})))).value((function(t,n){var e;return null===(e=Object(r.a)(t,2)[1].get(n))||void 0===e?void 0:e.value}))(o.l(i,(function(t){return t.label}),(function(t){return t.where}))),y=function(){switch(arguments.length>0&&void 0!==arguments[0]?arguments[0]:null){case"desc":return o.j(v,(function(t){return-o.J(t,(function(t){return t.value}))}),(function(t){return t.label}));case"asc":return o.j(v,(function(t){return o.J(t,(function(t){return t.value}))}),(function(t){return t.label}));default:return Object(a.a)(new Set(v.map((function(t){return t.label}))))}}(J),X=o.t().domain(y).range([p,e-f]).padding(w),Y=o.u().domain([0,o.q(u,(function(t){return o.q(t,(function(t){return t[1]}))}))]).rangeRound([c-d,s]),R=o.u().domain([0,u.map((function(t){return t.key})).length]).range(h).interpolate(o.n),T=o.G(n.current).attr("width",e).attr("height",c+30).attr("viewBox",[0,0,e,c]);T.selectAll("g").remove(),T.append("g").selectAll().data(u).join("g").attr("fill",(function(t,n){return R(n)})).selectAll("rect").data((function(t){return t.map((function(n){return n.key=t.key,n}))})).join("rect").on("click",(function(t,n){N(t,n)})).on("mousemove",(function(t,n){b&&(l.c.style("padding","5px"),l.c.style("opacity",1),l.c.html((function(){return"".concat(n.data[0]," <br /> ").concat(n.key," <br /> ").concat(function(t){return isNaN(t)?"N/A":t}(n.data[1].get(n.key).value))})).style("left",t.pageX+10+"px").style("top",t.pageY-30+"px"))})).on("mouseout",(function(t){l.c.style("padding",0),l.c.style("opacity",0)})).transition().duration((function(t,n){return L?z+50*n:n})).attr("x",(function(t){return X(t.data[0])})).attr("y",(function(t){return Y(t[1])})).attr("height",(function(t){return Y(t[0])-Y(t[1])})).attr("width",X.bandwidth()),j&&T.append("g").attr("transform","translate(0,".concat(c-d,")")).call(O?o.c(X).tickSizeOuter(0):function(){}).call((function(t){return t.selectAll(".tick line").attr("stroke",m)})).call((function(t){return C?t:t.selectAll(".domain").remove()})).selectAll("text").attr("font-size",P).attr("fill",g),k&&T.append("g").attr("transform","translate(".concat(p,",0)")).call(A?o.d(Y).ticks(S):function(){}).call((function(t){return t.selectAll(".tick line").attr("stroke",m)})).call((function(t){return x?t:t.selectAll(".domain").remove()})).selectAll("text").attr("font-size",P).attr("fill",g),T.selectAll(".domain").attr("stroke",m)}),[JSON.stringify(t)]),Object(u.jsx)("svg",{style:y,ref:n})};s.defaultProps=c.g,n.default=s}}]);
//# sourceMappingURL=11.b1e1df27.chunk.js.map