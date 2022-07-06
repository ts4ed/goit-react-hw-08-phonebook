"use strict";(self.webpackChunkgoit_react_hw_08_phonebook=self.webpackChunkgoit_react_hw_08_phonebook||[]).push([[141],{1638:function(e,n,t){t.r(n),t.d(n,{default:function(){return S}});var a=t(5861),r=t(885),s=t(7757),c=t.n(s),o=t(5274),i=t(2791);function u(e,n){var t=(0,i.useState)((function(){var t;return null!==(t=JSON.parse(window.localStorage.getItem(e)))&&void 0!==t?t:n})),a=(0,r.Z)(t,2),s=a[0],c=a[1];return(0,i.useEffect)((function(){window.localStorage.setItem(e,JSON.stringify(s))}),[e,s]),[s,c]}var l="ContactForm_container__qpJ1N",d="ContactForm_input__Bl93P",m="ContactForm_span__w4N46",h="ContactForm_form__dhl+T",p="ContactForm_button__eSwX9",_=t(184);function b(){var e=u("name",""),n=(0,r.Z)(e,2),t=n[0],s=n[1],i=u("number",""),b=(0,r.Z)(i,2),f=b[0],x=b[1],v=(0,o.Lr)(),j=(0,r.Z)(v,2),N=j[0],g=j[1].isLoading,w=(0,o.Jx)().data,C=function(){var e=(0,a.Z)(c().mark((function e(n){var a,r;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(n.preventDefault(),a={name:t,number:f},(r=w.find((function(e){return e.name.toLowerCase()===t.toLowerCase()})))&&alert("".concat(t," is already in contacts")),r){e.next=12;break}return e.prev=5,e.next=8,N(a);case 8:e.next=12;break;case 10:e.prev=10,e.t0=e.catch(5);case 12:k();case 13:case"end":return e.stop()}}),e,null,[[5,10]])})));return function(n){return e.apply(this,arguments)}}(),k=function(){s(""),x("")};return(0,_.jsx)("div",{className:l,children:(0,_.jsxs)("form",{type:"submit",onSubmit:C,className:h,children:[(0,_.jsxs)("label",{className:d,children:[(0,_.jsx)("span",{className:m,children:"Name"}),(0,_.jsx)("input",{type:"text",name:"name",pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan",required:!0,onChange:function(e){return s(e.target.value)},value:t})]}),(0,_.jsxs)("label",{className:d,children:[(0,_.jsx)("span",{className:m,children:"Number"}),(0,_.jsx)("input",{type:"tel",name:"number",pattern:"(\\+?( |-|\\.)?\\d{1,2}( |-|\\.)?)?(\\(?\\d{3}\\)?|\\d{3})( |-|\\.)?(\\d{3}( |-|\\.)?\\d{4})",title:"Phone number must be digits and can contain spaces, dashes, parentheses and can start with +",required:!0,onChange:function(e){return x(e.target.value)},value:f})]}),(0,_.jsx)("button",{className:p,type:"submit",disabled:!t||!f||g,children:g?"\u0421reate a contact....":"Add contact"})]})})}var f=t(8535),x=t(2167),v="Filter_label__vEd1E",j="Filter_span__lNPVu";function N(){var e=(0,f.I0)(),n=(0,f.v9)(x.zK);return(0,_.jsxs)("label",{className:v,children:[(0,_.jsx)("span",{className:j,children:"Find contacts by name"}),(0,_.jsx)("input",{placeholder:"Search",type:"text",value:n,onChange:function(n){return e((0,x.Tv)(n.target.value))}})]})}var g="Phonebook_list__S1mT+",w="Phonebook_item__HtWTq",C="PhonebookItem_button__BJ27p";function k(e){var n=e.id,t=e.name,a=e.number,s=(0,o.Nt)(),c=(0,r.Z)(s,2),i=c[0],u=c[1].isLoading;return(0,_.jsxs)(_.Fragment,{children:[t," : ",a,(0,_.jsx)("button",{className:C,type:"button",onClick:function(){return i(n)},disabled:u,children:u?"Deleting....":"Delete"})]})}var y=t(1405);function F(){var e=(0,o.Jx)(),n=e.data,t=e.isFetching,a=(0,y.v9)(x.zK);return(0,_.jsxs)("ul",{className:g,children:[t&&(0,_.jsx)("p",{children:"\u0417\u0430\u0433\u0440\u0443\u0436\u0430\u0435\u043c..."}),n&&(0,x.xz)(n,a).map((function(e){var n=e.id,t=e.name,a=e.number;return(0,_.jsx)("li",{className:w,children:(0,_.jsx)(k,{name:t,number:a,id:n})},n)}))]})}function S(){return(0,_.jsxs)(_.Fragment,{children:[(0,_.jsx)(b,{}),(0,_.jsx)(N,{}),(0,_.jsx)(F,{})]})}}}]);
//# sourceMappingURL=contacts-page.6aef17d5.chunk.js.map