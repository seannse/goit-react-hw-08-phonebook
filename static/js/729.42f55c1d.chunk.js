"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[729],{1729:function(n,e,t){t.r(e),t.d(e,{default:function(){return $}});var a=t(9078),r=t(1413),s=t(184),o=t(9101).useSelector,i=t(1087).Navigate,c=t(2286).selectLogin;var l=function(n,e){return function(t){return o(c)?(0,s.jsx)(n,(0,r.Z)({},t)):(0,s.jsx)(i,{to:e})}},u=t(1686),p=t(2791),d=t(9101),x=t(3634),h=t(2286),m=t(9219),f=t(3180),b=t(9439),g=t(5264),j=t(9359);var v,y,C,Z=function(){var n=(0,p.useState)(""),e=(0,b.Z)(n,2),t=e[0],a=e[1],r=(0,p.useState)(""),o=(0,b.Z)(r,2),i=o[0],c=o[1],l=(0,d.useSelector)(h.selectContacts),u=(0,d.useDispatch)();function m(n){var e=n.target,t=e.name,r=e.value;switch(t){case"name":a(r);break;case"phone":c(r);break;default:return}}return(0,s.jsx)("div",{children:(0,s.jsxs)(j.G,{onSubmit:function(n){n.preventDefault(),l.some((function(n){var e=n.name,a=n.number;return e.toLowerCase().trim()===t.toLowerCase().trim()||a.trim()===i.trim()}))?g.Notify.failure("".concat(t," or ").concat(i," is already in contacts!")):(u((0,x.uK)({name:t,number:i})),a(""),c(""))},children:[(0,s.jsx)("label",{children:(0,s.jsx)("input",{className:"input",type:"text",name:"name",pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan",value:t,onChange:m,placeholder:"name",required:!0})}),(0,s.jsx)("label",{children:(0,s.jsx)("input",{className:"input",type:"tel",name:"phone",pattern:"\\+?\\d{1,4}?[-.\\s]?\\(?\\d{1,3}?\\)?[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,9}",title:"Phone number must be digits and can contain spaces, dashes, parentheses and can start with +",value:i,onChange:m,placeholder:"phone number",required:!0})}),(0,s.jsx)("button",{className:"form-btn",type:"submit",children:"Add Contact"})]})})},w=t(7425),k=t(168),N=t(6444),z=N.ZP.ol(v||(v=(0,k.Z)(["\n  display: flex;\n  justify-content: center;\n  flex-direction: column;\n  gap: 10px;\n  align-items: center;\n\n  .button {\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    padding: 8px;\n    border-radius: 8px;\n    box-shadow: rgba(0, 0, 0, 0.55) 1px 2px 5px 0px;\n    cursor: pointer;\n    color: rgb(246, 250, 250);\n    background: linear-gradient(\n      135deg,\n      rgba(191, 57, 137, 1) 0%,\n      rgba(9, 107, 222, 1) 100%\n    );\n    border: 0px solid transparent;\n\n    &:hover,\n    &:focus {\n    }\n  }\n\n  .item {\n    font-size: 20px;\n    display: flex;\n    justify-content: space-between;\n    align-items: center;\n    width: 300px;\n\n    .p {\n      flex-shrink: 2;\n      margin-bottom: 0;\n    }\n  }\n"]))),A=function(){var n=(0,d.useDispatch)(),e=(0,d.useSelector)(h.selectFilteredContacts);return(0,s.jsx)("div",{children:(0,s.jsx)(z,{children:e.map((function(e){var t=e.id,a=e.name,r=e.number;return(0,s.jsxs)("li",{className:"item",children:[(0,s.jsxs)("p",{className:"p",children:[a,": ",r]}),(0,s.jsx)("button",{className:"button",type:"button",onClick:function(){return n((0,x.zY)(t))},children:(0,s.jsx)(w.qy0,{height:"30px",width:"30px"})})]},t)}))})})},S=t(1273),D=t(828),P=N.ZP.label(y||(y=(0,k.Z)(["\n  display: flex;\n  justify-content: flex-end;\n  align-items: flex-end;\n  gap: 10px;\n  margin-bottom: 30px;\n  position: relative;\n\n  .input {\n    width: 200px;\n    padding: 10px;\n    font-size: 14px;\n    display: inline-block;\n    border-bottom: 2px solid hsl(234deg 48% 34%);\n    background-color: transparent;\n    color: rgb(246, 250, 250);\n    border: none;\n    border-bottom: 1px solid rgb(246, 250, 250);\n    outline: none;\n    padding-left: 10px;\n    padding-right: 10px;\n\n    &:active,\n    &:focus {\n      background-color: transparent;\n    }\n  }\n"]))),F=(0,N.ZP)(D.Yfv)(C||(C=(0,k.Z)(["\n  height: 20px;\n  width: 20px;\n  position: absolute;\n  bottom: 2px;\n  right: 10px;\n"])));var L=function(){var n=(0,d.useSelector)(h.selectFilter),e=(0,d.useDispatch)();return(0,s.jsxs)(P,{children:["Search",(0,s.jsx)(F,{}),(0,s.jsx)("input",{className:"input",type:"text",name:"search",pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan",value:n,onChange:function(n){var t=n.target;e((0,S.T)(t.value))}})]})};var $=l((function(){var n=(0,d.useSelector)(h.selectContacts),e=(0,d.useSelector)(h.selectLoading),t=(0,d.useSelector)(h.selectError),r=(0,d.useDispatch)();return(0,p.useEffect)((function(){r((0,x.K2)())}),[r]),(0,p.useEffect)((function(){t&&u.Notify.failure("Ooops, bad getaway")}),[t]),(0,s.jsx)(f.$,{children:(0,s.jsxs)(m.W,{children:[(0,s.jsx)(Z,{}),(0,s.jsx)(L,{}),(0,s.jsx)("h2",{children:"Contacts"}),0!==n.length?(0,s.jsx)(A,{}):(0,s.jsx)("p",{children:"Your contacts list is empty"}),e&&(0,s.jsx)(a.aN,{})]})})}),"/login")},3180:function(n,e,t){t.d(e,{$:function(){return s}});var a,r=t(168),s=t(6444).ZP.div(a||(a=(0,r.Z)(["\n  padding-top: 60px;\n  padding-bottom: 20px;\n"])))}}]);
//# sourceMappingURL=729.42f55c1d.chunk.js.map