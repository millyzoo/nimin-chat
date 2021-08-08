(this["webpackJsonpnimin-chat"]=this["webpackJsonpnimin-chat"]||[]).push([[0],{58:function(n,e,t){"use strict";t.r(e);var r,a,i,c=t(4),o=t.n(c),s=t(37),b=t.n(s),d=t(14),l=t(6),p=t(7),u=Object(p.a)(r||(r=Object(l.a)(['\n  html {\n    font-size: 16px;\n  }\n\n  body {\n    margin: 0;\n    padding: 0;\n    height: 100%;\n    font-family: \'Noto Sans TC\', Open-Sans, Arial;\n    font-weight: 400;\n    background: #e9e9e9;\n    color: #505050;\n    transition: all 0.5s linear;\n  }\n\n  * {\n    box-sizing: border-box;\n  }\n\n  h1, p {\n    margin: 0;\n  }\n\n  input,\n  input[type="button"],\n  input[type="submit"],\n  input[type="file"],\n  input[type="reset"],\n  button,\n  textarea,\n  select {\n    outline: none;\n    letter-spacing: 1px;\n    appearance: none;\n    outline-style: none;\n    -webkit-appearance: none;\n  }\n\n  input, textarea {\n    resize: none;\n  }\n']))),j=t(3),x=p.b.footer(a||(a=Object(l.a)(["\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  margin: 0 auto;\n  height: 60px;\n  color: #b6b6b6;\n  font-size: 0.875rem;\n"]))),h=p.b.a(i||(i=Object(l.a)(["\n  margin-left: 5px;\n  color: #b6b6b6;\n  text-decoration: none;\n  transition: 0.3s;\n\n  &:hover {\n    color: #555555;\n  }\n"])));function f(){return Object(j.jsxs)(x,{children:[Object(j.jsx)("p",{children:"Made with by "}),Object(j.jsx)(h,{href:"https://github.com/milyzoo",target:"_blank",rel:"noreferrer",children:"@milyzoo"}),Object(j.jsx)("p",{children:"."})]})}var m,g,O,v,w,k,y=t(19),S=t(11),C=t(24),z="@media (max-width: 575px)",I=p.b.div(m||(m=Object(l.a)(["\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  min-height: calc(100vh - 60px); /* \u6e1b\u53bb footer + header */\n"]))),U=p.b.input(g||(g=Object(l.a)(["\n  padding: 12px;\n  border-radius: 50px;\n  width: 100%;\n  border: none;\n  background-color: #00b9a3;\n  color: #ffffff;\n  font-size: 1.125rem;\n  cursor: pointer;\n  transition: all 0.3s;\n\n  &:hover {\n    background-color: #00ad98;\n  }\n"]))),T=Object(c.createContext)(null),M="user",D=function(){return window.scrollTo(0,0)};function L(n,e,t){return n.length>e+1?(t("\u9577\u5ea6\u6700\u591a ".concat(e," \u500b\u5b57\u5143")),!1):null===n.match(/[\s]/g)||(t("\u4e0d\u5f97\u542b\u7a7a\u767d\u5b57\u5143"),!1)}var F,E,N,R,J,q,A=p.b.div(O||(O=Object(l.a)(["\n  margin-bottom: 10px;\n  width: 30px;\n  height: 30px;\n  background-color: ",";\n  border-radius: 50%;\n  cursor: pointer;\n"])),(function(n){return n.background})),B=p.b.input(v||(v=Object(l.a)(["\n  display: none;\n  border: none;\n"]))),H=p.b.div(w||(w=Object(l.a)(['\n  position: relative;\n  width: 14px;\n  height: 14px;\n  border: 2px solid #aaaaaa;\n  border-radius: 50%;\n  cursor: pointer;\n\n  &::after {\n    position: absolute;\n    content: "";\n    left: 50%;\n    top: 50%;\n    transform: translate(-50%, -50%);\n    width: 7px;\n    height: 7px;\n    border-radius: 50%;\n    background-color: #aaaaaa;\n    transition: all 0.3s;\n    opacity: 0;\n  }\n']))),Y=p.b.label(k||(k=Object(l.a)(["\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n\n  & + & {\n    margin-left: 30px;\n  }\n\n  input:checked + ","::after {\n    opacity: 1;\n  }\n"])),H);function _(n){var e=n.id,t=n.background,r=n.handleUserInfoChange;return Object(j.jsx)(j.Fragment,{children:Object(j.jsxs)(Y,{htmlFor:e,children:[Object(j.jsx)(A,{background:t}),Object(j.jsx)(B,{type:"radio",name:"avatar",id:e,value:t,onChange:r}),Object(j.jsx)(H,{})]})})}var K=p.b.form(F||(F=Object(l.a)(["\n  padding: 40px;\n  width: 400px;\n  background-color: #f5f5f5;\n  border-radius: 20px;\n  box-shadow: 0 10px 60px rgba(0, 0, 0, 0.05);\n\n  "," {\n    width: 90%;\n  }\n"])),z),P=p.b.h1(E||(E=Object(l.a)(["\n  margin-bottom: 40px;\n  color: #00b9a3;\n  font-size: 1.875rem;\n  font-weight: 900;\n  text-align: center;\n"]))),Q=p.b.div(N||(N=Object(l.a)(["\n  margin: 0 0 30px 0;\n"]))),V=p.b.span(R||(R=Object(l.a)(["\n  margin-left: 20px;\n  color: #d62f39;\n"]))),X=p.b.input(J||(J=Object(l.a)(["\n  margin-top: 10px;\n  padding: 10px;\n  width: 100%;\n  height: 45px;\n  border: 1px solid transparent;\n  border-radius: 8px;\n  font-size: 1rem;\n  color: #505050;\n  background-color: #ffffff;\n  transition: all 0.3s;\n\n  &::placeholder {\n    color: #cccccc;\n  }\n\n  &:focus {\n    border: 1px solid #00b9a3;\n  }\n"]))),G=p.b.div(q||(q=Object(l.a)(["\n  display: flex;\n  margin: 10px 0 30px 0;\n"])));function W(){var n=Object(c.useState)(""),e=Object(d.a)(n,2),t=e[0],r=e[1],a=Object(c.useContext)(T),i=a.setIsUserLogin,o=a.currentUser,s=a.setCurrentUser,b=Object(S.f)(),l=function(n){switch(n.target.name){case"username":s(Object(C.a)(Object(C.a)({},o),{},{username:n.target.value})),r("");break;case"avatar":s(Object(C.a)(Object(C.a)({},o),{},{avatar:n.target.value})),r("")}};return Object(j.jsx)(I,{children:Object(j.jsxs)(K,{onSubmit:function(n){var e;(n.preventDefault(),o.username||o.avatar)?o.username?o.avatar?L(o.username,8,r)&&(r(""),e=o,localStorage.setItem(M,JSON.stringify(e)),i(!0),b.push("/mode")):r("\u5c1a\u672a\u9078\u64c7\u982d\u8cbc"):r("\u5c1a\u672a\u586b\u5beb\u540d\u5b57"):r("\u8cc7\u6599\u586b\u5beb\u4e0d\u9f4a\u5168")},children:[Object(j.jsx)(P,{children:"NIMIN CHAT"}),Object(j.jsxs)(Q,{children:[Object(j.jsxs)("label",{htmlFor:"username",children:["\u540d\u5b57",t&&Object(j.jsx)(V,{children:t})]}),Object(j.jsx)(X,{id:"username",name:"username",placeholder:"\u8acb\u586b\u5beb\u540d\u5b57",onChange:l})]}),Object(j.jsx)("p",{children:"\u9078\u64c7\u982d\u8cbc"}),Object(j.jsx)(G,{children:[{id:"option1",background:"#e0969b"},{id:"option2",background:"#b59a92"},{id:"option3",background:"#77bce2"},{id:"option4",background:"#93a5d2"}].map((function(n){return Object(j.jsx)(_,{id:n.id,handleUserInfoChange:l,background:n.background},n.id)}))}),Object(j.jsx)(U,{type:"submit",value:"\u9032\u5165\u804a\u5929\u5ba4"})]})})}var Z=t(32),$=t(41),nn=t(33),en=t(31);t(54);en.a.initializeApp({apiKey:"AIzaSyDXEot_nTMfTpJVR4lfaCuqm74Uz8laHCQ",authDomain:"nimin-chat.firebaseapp.com",databaseURL:"https://nimin-chat-default-rtdb.firebaseio.com",projectId:"nimin-chat",storageBucket:"nimin-chat.appspot.com",messagingSenderId:"612479268903",appId:"1:612479268903:web:6bd28ec327da23617bf602"});var tn,rn,an,cn,on,sn,bn,dn,ln,pn,un=en.a.database(),jn=t(44),xn=p.b.div(tn||(tn=Object(l.a)(["\n  width: 280px;\n"]))),hn=Object(p.b)(y.b)(rn||(rn=Object(l.a)(["\n  display: block;\n  text-decoration: none;\n"]))),fn=p.b.div(an||(an=Object(l.a)(["\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  margin-top: 40px;\n  padding: 30px 0;\n  background-color: #fff;\n  border-radius: 20px;\n  font-size: 1.5rem;\n  font-weight: 500;\n  color: #00b9a3;\n  cursor: pointer;\n  transition: 0.3s;\n\n  &:hover {\n    box-shadow: 0 0 20px rgba(0, 0, 0, 0.1);\n    background-color: #00b9a3;\n    color: #ffffff;\n  }\n\n  svg {\n    width: auto;\n    height: 40px;\n  }\n"]))),mn=p.b.div(cn||(cn=Object(l.a)(["\n  position: fixed;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  background-color: rgba(0, 0, 0, 0.4);\n"]))),gn=p.b.div(on||(on=Object(l.a)(["\n  position: fixed;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  padding: 50px 80px;\n  width: 33%;\n  min-width: 480px;\n  background-color: #ffffff;\n  border-radius: 20px;\n  box-shadow: 0 0 50px 0 rgba(0, 0, 0, 0.1);\n\n  "," {\n    padding: 40px;\n    width: 90%;\n    min-width: auto;\n  }\n"])),z),On=p.b.div(sn||(sn=Object(l.a)(["\n  position: absolute;\n  top: 20px;\n  right: 20px;\n  width: 35px;\n  height: 35px;\n  border-radius: 50%;\n  border: 2px solid #00b9a3;\n  color: #00b9a3;\n  cursor: pointer;\n  transition: 0.3s;\n\n  svg {\n    width: 100%;\n    height: 100%;\n  }\n\n  &:hover {\n    background-color: #00b9a3;\n    color: #ffffff;\n  }\n"]))),vn=p.b.p(bn||(bn=Object(l.a)(["\n  margin-bottom: 40px;\n  background-color: #ffffff;\n  color: #00b9a3;\n  font-size: 1.5rem;\n  font-weight: 500;\n  text-align: center;\n"]))),wn=p.b.div(dn||(dn=Object(l.a)(["\n  margin-bottom: 40px;\n"]))),kn=p.b.span(ln||(ln=Object(l.a)(["\n  margin-left: 20px;\n  color: #d62f39;\n"]))),yn=p.b.input(pn||(pn=Object(l.a)(["\n  margin-top: 10px;\n  padding: 10px;\n  width: 100%;\n  height: 45px;\n  border: 1px solid transparent;\n  border-radius: 8px;\n  font-size: 1rem;\n  color: #505050;\n  background-color: #f5f5f5;\n  transition: 0.3s;\n\n  &::placeholder {\n    color: #cccccc;\n  }\n\n  &:focus {\n    border: 1px solid #00b9a3;\n  }\n"])));function Sn(){var n=Object(c.useState)(!1),e=Object(d.a)(n,2),t=e[0],r=e[1],a=Object(c.useState)(!1),i=Object(d.a)(a,2),o=i[0],s=i[1],b=Object(c.useState)(""),l=Object(d.a)(b,2),p=l[0],u=l[1],x=Object(c.useState)(""),h=Object(d.a)(x,2),f=h[0],m=h[1],g=Object(c.useState)(""),O=Object(d.a)(g,2),v=O[0],w=O[1],k=Object(S.f)(),y=jn.a.database().ref("chats").orderByChild("roomID"),C=Object(c.useContext)(T).isUserLogin;Object(c.useEffect)((function(){C||k.push("/")}),[k,C]),D();var z=function(){r(!t),w("")},M=function(){s(!o),w("")};return Object(j.jsx)(I,{children:Object(j.jsxs)(xn,{children:[Object(j.jsx)(hn,{to:"/chat/lobby",children:Object(j.jsxs)(fn,{children:[Object(j.jsx)(Z.b,{}),"\u804a\u5929\u5927\u5ef3"]})}),Object(j.jsxs)(fn,{onClick:z,children:[Object(j.jsx)(Z.a,{}),"\u52a0\u5165\u623f\u9593"]}),t&&Object(j.jsxs)(j.Fragment,{children:[Object(j.jsx)(mn,{onClick:z}),Object(j.jsxs)(gn,{children:[Object(j.jsx)(On,{onClick:z,children:Object(j.jsx)(nn.a,{})}),Object(j.jsx)(vn,{children:"\u52a0\u5165\u623f\u9593"}),Object(j.jsxs)("form",{onSubmit:function(n){n.preventDefault(),y.equalTo(f).once("value",(function(n){f?n.val()?k.push("/chat/".concat(f)):w("\u6b64\u623f\u9593\u4e0d\u5b58\u5728"):w("\u5c1a\u672a\u8f38\u5165\u623f\u9593\u7de8\u865f")}))},children:[Object(j.jsxs)(wn,{children:[Object(j.jsxs)("label",{htmlFor:"room-id",children:["\u623f\u9593\u7de8\u865f",v&&Object(j.jsx)(kn,{children:v})]}),Object(j.jsx)(yn,{id:"room-id",placeholder:"\u8acb\u8f38\u5165\u623f\u9593\u7de8\u865f",onChange:function(n){m(n.target.value)}})]}),Object(j.jsx)(U,{type:"submit",value:"\u52a0\u5165"})]})]})]}),Object(j.jsxs)(fn,{onClick:M,children:[Object(j.jsx)($.a,{}),"\u5275\u5efa\u623f\u9593"]}),o&&Object(j.jsxs)(j.Fragment,{children:[Object(j.jsx)(mn,{onClick:M}),Object(j.jsxs)(gn,{children:[Object(j.jsx)(On,{onClick:M,children:Object(j.jsx)(nn.a,{})}),Object(j.jsx)(vn,{children:"\u5275\u5efa\u623f\u9593"}),Object(j.jsxs)("form",{onSubmit:function(n){n.preventDefault(),y.equalTo(p).once("value",(function(n){var e;p?n.val()?w("\u6b64\u623f\u9593\u5df2\u5b58\u5728"):L(p,8,w)&&(e=p,un.ref("chats/".concat(e)).set({roomID:e}),k.push("/chat/".concat(p))):w("\u5c1a\u672a\u8f38\u5165\u623f\u9593\u7de8\u865f")}))},children:[Object(j.jsxs)(wn,{children:[Object(j.jsxs)("label",{htmlFor:"room-id",children:["\u623f\u9593\u7de8\u865f",v&&Object(j.jsx)(kn,{children:v})]}),Object(j.jsx)(yn,{id:"room-id",placeholder:"\u8acb\u8f38\u5165\u623f\u9593\u7de8\u865f",onChange:function(n){u(n.target.value)}})]}),Object(j.jsx)(U,{type:"submit",value:"\u5efa\u7acb"})]})]})]})]})})}var Cn,zn,In,Un,Tn,Mn,Dn,Ln,Fn,En,Nn,Rn,Jn,qn,An,Bn,Hn,Yn,_n,Kn,Pn,Qn,Vn,Xn,Gn=t(34),Wn=t(43),Zn=t(42),$n=p.b.div(Cn||(Cn=Object(l.a)(["\n  margin-top: 40px;\n  padding: 20px;\n  width: 100%;\n  max-width: 840px;\n  height: calc((100vh - 60px) * 0.8);\n  max-height: 800px;\n"]))),ne=p.b.div(zn||(zn=Object(l.a)(["\n  position: relative;\n  display: flex;\n  justify-content: space-between;\n  padding: 20px;\n  height: 100%;\n  background-color: #f5f5f5;\n  border-radius: 20px;\n"]))),ee=p.b.div(In||(In=Object(l.a)(["\n  position: absolute;\n  top: -30px;\n  left: 30px;\n  padding: 0 30px;\n  line-height: 30px;\n  background-color: #cccccc;\n  border-radius: 10px 10px 0 0;\n  font-size: 0.9375rem;\n"]))),te=p.b.aside(Un||(Un=Object(l.a)(["\n  position: relative;\n  padding: 20px;\n  width: 180px;\n  height: 100%;\n  background-color: #fff;\n  border-radius: 15px;\n  display: ",";\n\n  "," {\n    width: ",";\n  }\n"])),(function(n){return n.isSidebarOpen?"none":"block"}),z,(function(n){return n.isSidebarOpen?"0":"100%"})),re=p.b.div(Tn||(Tn=Object(l.a)(["\n  position: absolute;\n  left: 0;\n  bottom: 75px;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  width: 25px;\n  height: 30px;\n  border-radius: 0 50% 50% 0;\n  font-size: 1.375rem;\n  color: #505050;\n  background-color: #cccccc;\n  cursor: pointer;\n  z-index: 1;\n\n  svg {\n    transition: 0.3s;\n    transform: ",";\n  }\n"])),(function(n){return n.isSidebarOpen?"rotate(0)":"rotate(180deg)"})),ae=p.b.div(Mn||(Mn=Object(l.a)(["\n  display: flex;\n  align-items: center;\n  margin-bottom: 15px;\n  padding-bottom: 15px;\n  border-bottom: 1px solid #e9e9e9;\n"]))),ie=p.b.div(Dn||(Dn=Object(l.a)(["\n  width: 18px;\n  height: 18px;\n  margin-right: 8px;\n  background-color: ",";\n  border-radius: 50%;\n"])),(function(n){return n.avatar})),ce=p.b.div(Ln||(Ln=Object(l.a)(["\n  position: absolute;\n  bottom: 20px;\n  right: 20px;\n  width: 25px;\n  cursor: pointer;\n\n  svg {\n    width: 100%;\n    height: 100%;\n    color: #cccccc;\n    transition: 0.3s;\n\n    &:hover {\n      color: #505050;\n    }\n  }\n"]))),oe=p.b.section(Fn||(Fn=Object(l.a)(["\n  display: flex;\n  flex-direction: column;\n  justify-content: space-between;\n  height: 100%;\n  width: ",";\n\n  "," {\n    display: ",";\n    width: ",";\n  }\n"])),(function(n){return n.isSidebarOpen?"100%":"calc(100% - 200px)"}),z,(function(n){return n.isSidebarOpen?"flex":"none"}),(function(n){return n.isSidebarOpen?"100%":"0"})),se=p.b.div(En||(En=Object(l.a)(["\n  padding: 0 10px;\n  height: calc(100% - 70px);\n  overflow: auto;\n  overflow-x:hidden;\n\n  &::-webkit-scrollbar {\n    width: 8px;\n  }\n \n  &::-webkit-scrollbar-track {\n    background-color: #e9e9e9;\n    border-radius: 100px;\n  }\n \n  &::-webkit-scrollbar-thumb {\n    background-color: #cccccc;\n    border-radius: 100px;\n  }\n"]))),be=p.b.p(Nn||(Nn=Object(l.a)(["\n  margin: 15px auto;\n  padding: 5px 15px;\n  width: fit-content;\n  background-color: #e9e9e9;\n  border-radius: 20px;\n  font-size: 0.875rem;\n"]))),de=p.b.div(Rn||(Rn=Object(l.a)(["\n  display: flex;\n  justify-content: flex-end;\n  align-items: flex-end;\n  margin: 15px 0 15px auto;\n  max-width: 80%;\n"]))),le=p.b.p(Jn||(Jn=Object(l.a)(["\n  padding: 7px 15px;\n  margin-left: 10px;\n  max-width: calc(100% - 64px);\n  height: fit-content;\n  background-color: #00b9a3;\n  color: #ffffff;\n  border-radius: 10px 0 10px 10px;\n  word-wrap: break-word;\n"]))),pe=p.b.div(qn||(qn=Object(l.a)(["\n    display: flex;\n    margin: 7.5px auto 7.5px 0;\n    max-width: 80%;\n\n  "," {\n    width: 100%;\n    max-width: 100%;\n  }\n"])),z),ue=p.b.div(An||(An=Object(l.a)(["\n  margin-right: 10px;\n  width: 30px;\n  height: 30px;\n  border-radius: 50%;\n  background-color: ",";\n"])),(function(n){return n.background})),je=p.b.div(Bn||(Bn=Object(l.a)(["\n  width: calc(100% - 40px);\n"]))),xe=p.b.p(Hn||(Hn=Object(l.a)(["\n  margin-bottom: 5px;\n  color: #aaaaaa;\n  font-size: 0.8125rem;\n"]))),he=p.b.div(Yn||(Yn=Object(l.a)(["\n  display: flex;\n  align-items: flex-end;\n"]))),fe=p.b.p(_n||(_n=Object(l.a)(["\n  margin-right: 10px;\n  padding: 7px 15px;\n  max-width: calc(100% - 64px);\n  background-color: #fff;\n  border-radius: 0 10px 10px 10px;\n  word-wrap: break-word;\n"]))),me=p.b.p(Kn||(Kn=Object(l.a)(["\n  font-size: 0.75rem;\n  color: #aaaaaa;\n"]))),ge=p.b.form(Pn||(Pn=Object(l.a)(["\n  position: relative;\n"]))),Oe=p.b.input(Qn||(Qn=Object(l.a)(["\n  border: transparent;\n  padding: 0 75px 0 55px;\n  width: 100%;\n  height: 50px;\n  border-radius: 50px;\n  background-color: #fff;\n  font-size: 1rem;\n\n  &::placeholder {\n    color: #cccccc;\n  }\n"]))),ve=p.b.div(Vn||(Vn=Object(l.a)(["\n  position: absolute;\n  top: 50%;\n  left: 20px;\n  transform: translateY(-50%);\n  width: 20px;\n  height: 20px;\n  cursor: pointer;\n  \n  svg {\n    width: 100%;\n    color: #cccccc;\n  }\n"]))),we=p.b.button(Xn||(Xn=Object(l.a)(["\n  position: absolute;\n  top: 50%;\n  right: 20px;\n  transform: translateY(-50%);\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  width: 35px;\n  height: 35px;\n  border-radius: 50%;\n  border: none;\n  background-color: #00b9a3;\n  cursor: pointer;\n  transition: 0.3s;\n\n  svg {\n    color: #fff;\n  }\n\n  &:hover {\n    background-color: #00ad98;\n  }\n"])));function ke(){var n=Object(c.useState)(!0),e=Object(d.a)(n,2),t=e[0],r=e[1],a=Object(c.useState)([]),i=Object(d.a)(a,2),o=i[0],s=i[1],b=Object(c.useState)([]),l=Object(d.a)(b,2),p=l[0],u=l[1],x=Object(c.useContext)(T),h=x.isUserLogin,f=x.currentUser,m=Object(S.g)().roomId,g=Object(S.f)(),O=JSON.parse(localStorage.getItem(M));Object(c.useEffect)((function(){h?D():g.push("/")}),[g,h]),Object(c.useEffect)((function(){return function(n){un.ref("messages/".concat(n)).on("value",(function(n){var e=n.val();if(e){var t=Object.keys(e).map((function(n){return e[n]}));s(t)}}))}(m),function(n,e){un.ref("onlineUser/".concat(n)).push({username:e})}(m,O.username),function(n,e){un.ref("messages/".concat(n)).push({id:{".sv":"timestamp"},username:e,isSystemMessage:!0,isInTheRoom:!0})}(m,O.username),function(){!function(n,e){un.ref("messages/".concat(n)).push({id:{".sv":"timestamp"},username:e,isSystemMessage:!0,isInTheRoom:!1})}(m,O.username)}}),[m,O.username]),Object(c.useEffect)((function(){var n=document.querySelector(".resized");n.scrollTo(0,n.scrollHeight)}),[o]);return Object(j.jsx)(I,{children:Object(j.jsx)($n,{children:Object(j.jsxs)(ne,{children:[Object(j.jsx)(ee,{children:"lobby"===m?"\u804a\u5929\u5927\u5ef3":"\u623f\u9593\u7de8\u865f ".concat(m)}),Object(j.jsxs)(te,{isSidebarOpen:t,children:[Object(j.jsxs)(ae,{children:[Object(j.jsx)(ie,{avatar:O.avatar}),O.username]}),Object(j.jsx)(ce,{onClick:function(){g.push("/mode")},children:Object(j.jsx)(Gn.a,{})})]}),Object(j.jsx)(re,{onClick:function(){r(!t)},isSidebarOpen:t,children:Object(j.jsx)(Zn.a,{})}),Object(j.jsxs)(oe,{isSidebarOpen:t,children:[Object(j.jsx)(se,{className:"resized",children:o&&o.map((function(n){return n.isSystemMessage&&n.isInTheRoom?Object(j.jsxs)(be,{children:[n.username+" \u52a0\u5165\u804a\u5929\u5ba4"," "]},n.id):n.isSystemMessage&&!n.isInTheRoom?Object(j.jsxs)(be,{children:[n.username+" \u96e2\u958b\u804a\u5929\u5ba4"," "]},n.id):f.username!==n.username||n.isSystemMessage?Object(j.jsxs)(pe,{children:[Object(j.jsx)(ue,{background:n.avatar}),Object(j.jsxs)(je,{children:[Object(j.jsx)(xe,{children:n.username}),Object(j.jsxs)(he,{children:[Object(j.jsx)(fe,{children:n.message}),Object(j.jsx)(me,{children:new Date(n.timestamp).toLocaleTimeString([],{hour:"2-digit",minute:"2-digit",hour12:!0})})]})]})]},n.id):Object(j.jsxs)(de,{children:[Object(j.jsx)(me,{children:new Date(n.timestamp).toLocaleTimeString([],{hour:"2-digit",minute:"2-digit",hour12:!0})}),Object(j.jsx)(le,{children:n.message})]},n.id)}))}),Object(j.jsxs)(ge,{onSubmit:function(n){n.preventDefault(),p&&(!function(n){var e=n.roomId,t=n.message,r=n.username,a=n.avatar,i=n.isSystemMessage;un.ref("messages/".concat(e)).push({id:{".sv":"timestamp"},message:t,timestamp:{".sv":"timestamp"},username:r,avatar:a,isSystemMessage:i})}({roomId:m,message:p,username:O.username,avatar:O.avatar,isSystemMessage:!1}),u(""))},children:[Object(j.jsx)(ve,{children:Object(j.jsx)(Gn.b,{})}),Object(j.jsx)(Oe,{placeholder:"\u8f38\u5165\u60f3\u8aaa\u7684\u8a71",value:p,onChange:function(n){u(n.target.value)}}),Object(j.jsx)(we,{type:"submit",children:Object(j.jsx)(Wn.a,{})})]})]})]})})})}function ye(){var n=Object(c.useState)(!1),e=Object(d.a)(n,2),t=e[0],r=e[1],a=Object(c.useState)({username:"",avatar:""}),i=Object(d.a)(a,2),o=i[0],s=i[1];return Object(j.jsx)(T.Provider,{value:{isUserLogin:t,setIsUserLogin:r,currentUser:o,setCurrentUser:s},children:Object(j.jsxs)(y.a,{children:[Object(j.jsx)(u,{}),Object(j.jsxs)(S.c,{children:[Object(j.jsx)(S.a,{exact:!0,path:"/",component:W}),Object(j.jsx)(S.a,{path:"/mode",component:Sn}),Object(j.jsx)(S.a,{path:"/chat/:roomId",component:ke})]}),Object(j.jsx)(f,{})]})})}b.a.render(Object(j.jsx)(o.a.StrictMode,{children:Object(j.jsx)(ye,{})}),document.getElementById("root"))}},[[58,1,2]]]);
//# sourceMappingURL=main.4095ba25.chunk.js.map