(this["webpackJsonpword-hunt"]=this["webpackJsonpword-hunt"]||[]).push([[0],{66:function(e,t,n){},67:function(e,t,n){},93:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),c=n(8),l=n.n(c),i=(n(66),n(67),n(138)),u=n(37),s=n.n(u),o=n(49),j=n(13),b=n(52),d=n.n(b),h=[{label:"English",value:"en"},{label:"Spanish",value:"es"},{label:"French",value:"fr"},{label:"Japanese",value:"ja"},{label:"Russian",value:"ru"},{label:"German",value:"de"},{label:"Italian",value:"it"},{label:"Korean",value:"ko"},{label:"Brazilian Portuguese",value:"pt-BR"},{label:"Arabic",value:"ar"},{label:"Turkish",value:"tr"},{label:"Hindi",value:"hi"}],v=n(129),p=n(139),O=n(134),x=n(133),f=n(96),g=n(135),m=n(136),y=n(34),w=n(7),k=Object(v.a)((function(e){return{root:{"& .MuiTextField-root":{margin:e.spacing(1),width:"25ch"}}}})),S=function(){var e=k(),t=Object(a.useState)([]),n=Object(j.a)(t,2),r=n[0],c=n[1],l=Object(a.useState)(""),i=Object(j.a)(l,2),u=i[0],b=i[1],v=Object(a.useState)("en"),S=Object(j.a)(v,2),A=S[0],F=S[1],T=function(){var e=Object(o.a)(s.a.mark((function e(){var t;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,d.a.get("https://api.dictionaryapi.dev/api/v2/entries/".concat(A,"/").concat(u));case 3:t=e.sent,c(t.data),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),console.error(e.t0);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(){return e.apply(this,arguments)}}();return Object(a.useEffect)((function(){T()}),[u,A]),Object(w.jsxs)("div",{className:e.root,children:[Object(w.jsx)(y.a,{variant:"h2",style:{margin:12},children:"Word Hunt"}),Object(w.jsx)(p.a,{onChange:function(e){return b(e.target.value)},id:"word",placeholder:"Type The Word",variant:"outlined"}),Object(w.jsx)(p.a,{id:"lang",select:!0,label:"Language",variant:"outlined",onChange:function(e){return F(e.target.value)},children:h.map((function(e,t){return Object(w.jsx)(O.a,{value:e.value,children:e.label},t)}))}),null!==r&&r.map((function(e){return Object(w.jsxs)(w.Fragment,{children:[Object(w.jsx)(y.a,{variant:"h3",style:{margin:16},children:e.word}),e.meanings.map((function(e,t){return Object(w.jsxs)(x.a,{style:{textAlign:"center"},children:[Object(w.jsx)(y.a,{variant:"h4",children:e.partOfSpeech}),e.definitions.map((function(e,t){return Object(w.jsxs)(w.Fragment,{children:[Object(w.jsx)(f.a,{style:{textAlign:"center"},children:Object(w.jsx)(g.a,{children:e.definition})},t),Object(w.jsx)(m.a,{})]})}))]},t)}))]})}))]})},A=n(55),F=n(137),T=Object(A.a)({palette:{type:"dark"}});var B=function(){return Object(w.jsx)("div",{children:Object(w.jsx)(F.a,{theme:T,children:Object(w.jsx)(i.a,{maxWidth:"md",style:{textAlign:"center"},children:Object(w.jsx)(S,{})})})})};l.a.render(Object(w.jsx)(r.a.StrictMode,{children:Object(w.jsx)(B,{})}),document.getElementById("root"))}},[[93,1,2]]]);
//# sourceMappingURL=main.1423a44b.chunk.js.map