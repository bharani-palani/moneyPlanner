(this["webpackJsonpbni-apps"]=this["webpackJsonpbni-apps"]||[]).push([[32],{1220:function(t,e,n){"use strict";n.r(e),n.d(e,"VoronoiChart",(function(){return l}));var o=n(26),r=n(1),i=n.n(r),c=n(54),a=n(45),s=n(55),u=n(0),l=function(t){var e=t.width,n=t.height,a=t.data,l=t.markerSize,p=t.lineColor,f=t.fillColor,d=t.strokeWidth,h=t.showTooltip,y=t.tooltipPrefix,m=t.tooltipSuffix,x=t.className,b=t.showAnimation,j=t.animationClass,g=t.opacity,O=Object(r.useMemo)((function(){return c.z().domain([0,c.t(a,(function(t){return t.x}))]).range([0,e])}),[e,a]),v=Object(r.useMemo)((function(){return c.z().domain([0,c.t(a,(function(t){return t.y}))]).range([0,n])}),[n,a]),k=Object(r.useMemo)((function(){var t=a.map((function(t){return[O(t.x),v(t.y)]}));return c.a.from(t)}),[O,v,a]),M=Object(r.useState)(null),w=Object(o.a)(M,2),C=w[0],z=w[1],S=Object(r.useMemo)((function(){return k.voronoi([0,0,e,n])}),[k,e,n]),W=a.map((function(t,e){var n=S.renderCell(e);return Object(u.jsx)("path",{d:n,stroke:p,strokeWidth:d,fill:"transparent",opacity:g,onMouseOver:function(){z(e)}},e)})),J=a.map((function(t,e){return Object(u.jsxs)(i.a.Fragment,{children:[Object(u.jsx)("circle",{cx:O(t.x),cy:v(t.y),fill:f,r:l,className:"".concat(x," ").concat(b?j:"")}),C===e&&Object(u.jsx)("circle",{cx:O(t.x),cy:v(t.y),r:l,fill:"transparent",stroke:"red",style:{zIndex:1},strokeWidth:3,onMouseOver:function(e){h&&(s.g.style("padding","5px"),s.g.style("opacity",.9),s.g.html("".concat(y," ").concat(t.label," ").concat(m)).style("left",e.pageX+5+"px").style("top",e.pageY-30+"px"))},onMouseLeave:function(){s.g.style("padding",0),s.g.style("opacity",0)}})]},e)}));return Object(u.jsxs)("svg",{width:e,height:n,children:[W,J]})};l.defaultProps=a.y,e.default=l}}]);