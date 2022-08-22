(this["webpackJsonpexpense-tracker-reactjs"]=this["webpackJsonpexpense-tracker-reactjs"]||[]).push([[0],{18:function(e,t,n){},19:function(e,t,n){},20:function(e,t,n){},22:function(e,t,n){},23:function(e,t,n){},24:function(e,t,n){},25:function(e,t,n){},26:function(e,t,n){},27:function(e,t,n){},28:function(e,t,n){},29:function(e,t,n){},30:function(e,t,n){"use strict";n.r(t);var a=n(8),c=n.n(a),s=(n(18),n(5)),l=n(2),i=n(1),r=(n(19),n(20),n(0)),d=function(e){var t="card "+e.className;return Object(r.jsx)("div",{className:t,children:e.children})},u=(n(22),function(e){var t=e.date.toLocaleString("en-US",{month:"long"}),n=e.date.toLocaleString("en-US",{day:"2-digit"}),a=e.date.getFullYear();return Object(r.jsxs)(d,{className:"expense-date",children:[Object(r.jsx)("div",{className:"expense-date__year",children:a}),Object(r.jsx)("div",{className:"expense-date__month",children:t}),Object(r.jsx)("div",{className:"expense-date__date",children:n})]})}),j=function(e){return Object(r.jsxs)(d,{className:"expense-item",children:[Object(r.jsx)(u,{date:e.date}),Object(r.jsxs)("div",{className:"expense-item__description",children:[Object(r.jsx)("h2",{children:e.title}),Object(r.jsxs)("div",{className:"expense-item__price",children:["$ ",e.amount]})]})]})},o=(n(23),n(24),function(e){var t=Object(i.useState)(""),n=Object(l.a)(t,2);n[0],n[1];return Object(r.jsx)("div",{className:"expenses-filter",children:Object(r.jsxs)("div",{className:"expenses-filter__control",children:[Object(r.jsx)("label",{children:"Filter by year"}),Object(r.jsxs)("select",{onChange:function(t){e.onChangeFilter(t.target.value)},children:[Object(r.jsx)("option",{value:"2019",children:"2019"}),Object(r.jsx)("option",{value:"2020",children:"2020"}),Object(r.jsx)("option",{value:"2021",children:"2021"}),Object(r.jsx)("option",{value:"2022",children:"2022"})]})]})})}),b=n(9),x=(n(25),n(26),function(e){var t="0%";return e.maxValue>0&&(t=Math.round(e.value/e.maxValue*100)+"%"),Object(r.jsxs)("div",{className:"chart-bar",children:[Object(r.jsx)("div",{className:"chart-bar__inner",children:Object(r.jsx)("div",{className:"chart-bar__fill",style:{height:t}})}),Object(r.jsx)("div",{className:"chart-bar__label",children:e.label})]})}),O=function(e){var t=e.dataPoints.map((function(e){return e.value})),n=Math.max.apply(Math,Object(s.a)(t));return Object(r.jsx)("div",{className:"chart",children:e.dataPoints.map((function(e){return Object(r.jsx)(x,{value:e.value,maxValue:n,label:e.label},e.label)}))})},h=function(e){var t,n=[{label:"Jan",value:0},{label:"Feb",value:0},{label:"Mar",value:0},{label:"Apr",value:0},{label:"May",value:0},{label:"Jun",value:0},{label:"Jul",value:0},{label:"Aug",value:0},{label:"Sep",value:0},{label:"Oct",value:0},{label:"Nov",value:0},{label:"Dev",value:0}],a=Object(b.a)(e.expenses);try{for(a.s();!(t=a.n()).done;){var c=t.value;n[c.date.getMonth()].value+=c.amount}}catch(s){a.e(s)}finally{a.f()}return Object(r.jsx)(O,{dataPoints:n})},m=(n(27),function(e){return 0===e.items.length?Object(r.jsx)("h2",{className:"expenses-list__fallback",children:"No records found!"}):Object(r.jsx)("div",{className:"expenses-list",children:e.items.map((function(e){return Object(r.jsx)(j,{title:e.title,amount:e.amount,date:e.date},e.id)}))})}),p=function(e){return Object(r.jsx)("div",{children:Object(r.jsxs)(d,{className:"expenses",children:[Object(r.jsx)("h2",{children:"Let's get started!"}),Object(r.jsx)(o,{onChangeFilter:function(t){e.onChangeExpenseFilter(t)}}),Object(r.jsx)(h,{expenses:e.data}),Object(r.jsx)(m,{items:e.data})]})})},v=n(6),f=(n(28),function(e){var t=Object(i.useState)(""),n=Object(l.a)(t,2),a=n[0],c=n[1],s=Object(i.useState)(""),d=Object(l.a)(s,2),u=d[0],j=d[1],o=Object(i.useState)(""),b=Object(l.a)(o,2),x=b[0],O=b[1];return Object(r.jsxs)("div",{children:[Object(r.jsxs)("form",{onSubmit:function(t){t.preventDefault();var n={title:a,amount:+u,date:new Date(x)};e.onSaveExpenseData(n),c(""),j(""),O("")},id:"newExpenseForm",className:"new-expense__hidenewexpense",children:[Object(r.jsxs)("div",{className:"new-expense__controls",children:[Object(r.jsxs)("div",{className:"new-expense__control",children:[Object(r.jsx)("label",{children:"Title"}),Object(r.jsx)("input",{type:"text",value:a,onChange:function(e){c(e.target.value)},required:!0})]}),Object(r.jsxs)("div",{className:"new-expense__control",children:[Object(r.jsx)("label",{children:"Amount"}),Object(r.jsx)("input",{type:"number",min:"0.01",step:"0.01",value:u,onChange:function(e){j(e.target.value)},required:!0})]}),Object(r.jsxs)("div",{className:"new-expense__control",children:[Object(r.jsx)("label",{children:"Date"}),Object(r.jsx)("input",{type:"date",min:"2019-01-01",max:"2022-12-31",value:x,onChange:function(e){O(e.target.value)},required:!0})]})]}),Object(r.jsxs)("div",{className:"new-expense__actions",children:[Object(r.jsx)("button",{type:"button",onClick:function(){document.getElementById("newExpenseForm").style.display="none",document.getElementById("addNewExpBtn").style.display="block"},children:"Cancel"}),Object(r.jsx)("button",{type:"submit",children:"Add Expense"})]})]}),Object(r.jsx)("div",{className:"new-expense__newexpensebutton",id:"addNewExpBtn",children:Object(r.jsx)("button",{type:"button",onClick:function(){document.getElementById("newExpenseForm").style.display="block",document.getElementById("addNewExpBtn").style.display="none"},children:"Add New Expense"})})]})}),N=(n(29),function(e){return Object(r.jsx)("div",{className:"new-expense",children:Object(r.jsx)(f,{onSaveExpenseData:function(t){var n=Object(v.a)(Object(v.a)({},t),{},{id:Math.random().toString()});e.onAddNewExpense(n)}})})}),_=[{id:"e1",title:"Groceries",amount:94.12,date:new Date(2020,7,14)},{id:"e2",title:"TV",amount:799.49,date:new Date(2021,2,12)},{id:"e3",title:"Car Insurance",amount:294.67,date:new Date(2021,2,28)},{id:"e4",title:"Work Desk",amount:120,date:new Date(2021,5,12)}],g=function(){var e=Object(i.useState)(_),t=Object(l.a)(e,2),n=t[0],a=t[1],c=Object(i.useState)(n),d=Object(l.a)(c,2),u=d[0],j=d[1],o=Object(i.useState)(!0),b=Object(l.a)(o,2),x=b[0],O=b[1];return Object(r.jsxs)("div",{children:[Object(r.jsx)(N,{onAddNewExpense:function(e){a((function(t){return[e].concat(Object(s.a)(t))})),O(!0)}}),Object(r.jsx)(p,{data:x?n:u,onChangeExpenseFilter:function(e){j(n.filter((function(t){return t.date.getFullYear()==e}))),O(!1)}})]})};c.a.createRoot(document.getElementById("root")).render(Object(r.jsx)(g,{}))}},[[30,1,2]]]);
//# sourceMappingURL=main.90b555c5.chunk.js.map