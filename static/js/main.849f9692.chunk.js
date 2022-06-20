(this["webpackJsonpreact_dynamic-list-of-todos"]=this["webpackJsonpreact_dynamic-list-of-todos"]||[]).push([[0],[,,,,,,,,,,,,,function(e,t,c){},function(e,t,c){},function(e,t,c){},,function(e,t,c){},function(e,t,c){"use strict";c.r(t);var n=c(7),r=c.n(n),s=c(4),a=c(3),i=c(2),o=c.n(i),l=c(1),u=(c(13),c(14),c(6)),d=c.n(u),j=(c(15),c(0)),p=function(e){var t,c=e.listOfTodos,n=e.callbackForUserSelect,r=e.selectedUserId;!function(e){e[e.active=0]="active",e[e.completed=1]="completed",e[e.all=2]="all"}(t||(t={}));var s=Object(l.useState)(""),i=Object(a.a)(s,2),o=i[0],u=i[1],p=Object(l.useState)(t.all),b=Object(a.a)(p,2),f=b[0],h=b[1],O=Object(l.useState)([]),m=Object(a.a)(O,2),x=m[0],v=m[1];var _=function(e){var n=function(e){switch(f){case t.completed:return e.filter((function(e){return!0===e.completed}));case t.active:return e.filter((function(e){return!1===e.completed}));default:return e}}(c.filter((function(t){return t.title.toLowerCase().includes(e.toLowerCase())})));v(n)};return Object(l.useEffect)((function(){_(o)}),[f,o,c,r]),Object(j.jsxs)("div",{className:"TodoList",children:[Object(j.jsx)("h2",{children:"Filter todos:"}),Object(j.jsxs)("label",{children:[Object(j.jsx)("p",{children:"filter"}),Object(j.jsx)("input",{type:"text",onChange:function(e){u(e.target.value)}})]}),Object(j.jsxs)("label",{children:[Object(j.jsx)("p",{children:"Status"}),Object(j.jsxs)("select",{onChange:function(e){h(Number(e.target.value))},children:[Object(j.jsx)("option",{value:t.all,children:"all"}),Object(j.jsx)("option",{value:t.completed,children:"completed"}),Object(j.jsx)("option",{value:t.active,children:"active"})]})]}),Object(j.jsx)("h2",{children:"Todos:"}),Object(j.jsx)("div",{className:"TodoList__list-container",children:Object(j.jsx)("ul",{className:"TodoList__list",children:x.map((function(e){return Object(j.jsxs)("li",{className:d()("TodoList__item",{"TodoList__item--checked":e.completed},{"TodoList__item--unchecked":!e.completed}),children:[Object(j.jsxs)("label",{children:[Object(j.jsx)("input",{type:"checkbox",readOnly:!0,checked:e.completed}),Object(j.jsx)("p",{children:e.title})]}),Object(j.jsx)("button",{className:d()("TodoList__user-button","button",{"TodoList__user-button--selected":e.userId===r}),type:"button",onClick:function(){n(e.userId)},children:"User ".concat(e.userId)})]},e.id)}))})})]})};function b(e){return fetch("".concat("https://mate.academy/students-api").concat(e)).then((function(e){return e.json()}))}function f(){return h.apply(this,arguments)}function h(){return(h=Object(s.a)(o.a.mark((function e(){var t;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,b("/todos");case 2:return t=e.sent,e.abrupt("return",t);case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function O(e){return m.apply(this,arguments)}function m(){return(m=Object(s.a)(o.a.mark((function e(t){var c;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,b("/users/".concat(t));case 2:return c=e.sent,e.abrupt("return",c);case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}c(17);var x=function(e){var t=e.userId,c=e.clearUser,n=Object(l.useState)(null),r=Object(a.a)(n,2),i=r[0],u=r[1];function d(){return(d=Object(s.a)(o.a.mark((function e(t){var c;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,O(t);case 2:c=e.sent,u(c);case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}return Object(l.useEffect)((function(){!function(e){d.apply(this,arguments)}(t)}),[t]),Object(j.jsxs)("div",{className:"CurrentUser",children:[Object(j.jsx)("h2",{className:"CurrentUser__title",children:Object(j.jsx)("span",{children:"Selected user: ".concat(null===i||void 0===i?void 0:i.id)})}),Object(j.jsx)("h3",{className:"CurrentUser__name",children:null===i||void 0===i?void 0:i.name}),Object(j.jsx)("p",{className:"CurrentUser__email",children:null===i||void 0===i?void 0:i.email}),Object(j.jsx)("p",{className:"CurrentUser__phone",children:null===i||void 0===i?void 0:i.phone}),Object(j.jsx)("button",{type:"button",onClick:function(){return c(0)},children:"Clear"})]})},v=function(){var e=Object(l.useState)(0),t=Object(a.a)(e,2),c=t[0],n=t[1],r=Object(l.useState)([]),i=Object(a.a)(r,2),u=i[0],d=i[1];function b(){return(b=Object(s.a)(o.a.mark((function e(){var t;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,f();case 2:t=e.sent,d(t);case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}return Object(l.useEffect)((function(){!function(){b.apply(this,arguments)}()}),[c]),Object(j.jsxs)("div",{className:"App",children:[Object(j.jsx)("div",{className:"App__sidebar",children:Object(j.jsx)(p,{listOfTodos:u,selectedUserId:c,callbackForUserSelect:n})}),Object(j.jsx)("div",{className:"App__content",children:Object(j.jsx)("div",{className:"App__content-container",children:c?Object(j.jsx)(x,{userId:c,clearUser:n}):"No user selected"})})]})};r.a.render(Object(j.jsx)(v,{}),document.getElementById("root"))}],[[18,1,2]]]);
//# sourceMappingURL=main.849f9692.chunk.js.map