(this["webpackJsonpnimin-chat"]=this["webpackJsonpnimin-chat"]||[]).push([[0],{58:function(n,e,t){"use strict";t.r(e);var r,a,i,c=t(4),o=t.n(c),s=t(37),b=t.n(s),d=t(14),l=t(6),p=t(7),j=Object(p.a)(r||(r=Object(l.a)(['\n  html {\n    font-size: 16px;\n  }\n\n  body {\n    margin: 0;\n    padding: 0;\n    height: 100%;\n    font-family: \'Noto Sans TC\', Open-Sans, Arial;\n    font-weight: 400;\n    background: #e9e9e9;\n    color: #505050;\n    transition: all 0.5s linear;\n  }\n\n  * {\n    box-sizing: border-box;\n  }\n\n  h1, p {\n    margin: 0;\n  }\n\n  input,\n  input[type="button"],\n  input[type="submit"],\n  input[type="file"],\n  input[type="reset"],\n  button,\n  textarea,\n  select {\n    outline: none;\n    letter-spacing: 1px;\n    appearance: none;\n    outline-style: none;\n    -webkit-appearance: none;\n  }\n\n  input, textarea {\n    resize: none;\n  }\n']))),u=t(3),x=p.b.footer(a||(a=Object(l.a)(["\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  margin: 0 auto;\n  height: 60px;\n  color: #b6b6b6;\n  font-size: 0.875rem;\n"]))),h=p.b.a(i||(i=Object(l.a)(["\n  margin-left: 5px;\n  color: #b6b6b6;\n  text-decoration: none;\n  transition: 0.3s;\n\n  &:hover {\n    color: #555555;\n  }\n"])));function f(){return Object(u.jsxs)(x,{children:[Object(u.jsx)("p",{children:"Made with by "}),Object(u.jsx)(h,{href:"https://github.com/milyzoo",target:"_blank",rel:"noreferrer",children:"@milyzoo"}),Object(u.jsx)("p",{children:"."})]})}var m,g,O,v,w,k,y,S,C,z,I,U,D=t(19),M=t(11),T=t(24),L="@media (max-width: 575px)",F=p.b.div(m||(m=Object(l.a)(["\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  min-height: calc(100vh - 60px); /* \u6e1b\u53bb footer + header */\n"]))),E=p.b.input(g||(g=Object(l.a)(["\n  padding: 12px;\n  border-radius: 50px;\n  width: 100%;\n  border: none;\n  background-color: #00b9a3;\n  color: #ffffff;\n  font-size: 1.125rem;\n  cursor: pointer;\n  transition: all 0.3s;\n\n  &:hover {\n    background-color: #00ad98;\n  }\n"]))),N=Object(c.createContext)(null),J="user",q=function(){return window.scrollTo(0,0)},A=p.b.div(O||(O=Object(l.a)(["\n  margin-bottom: 10px;\n  width: 30px;\n  height: 30px;\n  background-color: ",";\n  border-radius: 50%;\n  cursor: pointer;\n"])),(function(n){return n.background})),B=p.b.input(v||(v=Object(l.a)(["\n  display: none;\n  border: none;\n"]))),H=p.b.div(w||(w=Object(l.a)(['\n  position: relative;\n  width: 14px;\n  height: 14px;\n  border: 2px solid #aaaaaa;\n  border-radius: 50%;\n  cursor: pointer;\n\n  &::after {\n    position: absolute;\n    content: "";\n    left: 50%;\n    top: 50%;\n    transform: translate(-50%, -50%);\n    width: 7px;\n    height: 7px;\n    border-radius: 50%;\n    background-color: #aaaaaa;\n    transition: all 0.3s;\n    opacity: 0;\n  }\n']))),R=p.b.label(k||(k=Object(l.a)(["\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n\n  & + & {\n    margin-left: 30px;\n  }\n\n  input:checked + ","::after {\n    opacity: 1;\n  }\n"])),H);function Y(n){var e=n.id,t=n.background,r=n.handleUserInfoChange;return Object(u.jsx)(u.Fragment,{children:Object(u.jsxs)(R,{htmlFor:e,children:[Object(u.jsx)(A,{background:t}),Object(u.jsx)(B,{type:"radio",name:"avatar",id:e,value:t,onChange:r}),Object(u.jsx)(H,{})]})})}var _=p.b.form(y||(y=Object(l.a)(["\n  padding: 40px;\n  width: 400px;\n  background-color: #f5f5f5;\n  border-radius: 20px;\n  box-shadow: 0 10px 60px rgba(0, 0, 0, 0.05);\n\n  "," {\n    width: 90%;\n  }\n"])),L),K=p.b.h1(S||(S=Object(l.a)(["\n  margin-bottom: 40px;\n  color: #00b9a3;\n  font-size: 1.875rem;\n  font-weight: 900;\n  text-align: center;\n"]))),P=p.b.div(C||(C=Object(l.a)(["\n  margin: 0 0 30px 0;\n"]))),Q=p.b.span(z||(z=Object(l.a)(["\n  margin-left: 20px;\n  color: #d62f39;\n"]))),V=p.b.input(I||(I=Object(l.a)(["\n  margin-top: 10px;\n  padding: 10px;\n  width: 100%;\n  height: 45px;\n  border: 1px solid transparent;\n  border-radius: 8px;\n  font-size: 1rem;\n  color: #505050;\n  background-color: #ffffff;\n  transition: all 0.3s;\n\n  &::placeholder {\n    color: #cccccc;\n  }\n\n  &:focus {\n    border: 1px solid #00b9a3;\n  }\n"]))),X=p.b.div(U||(U=Object(l.a)(["\n  display: flex;\n  margin: 10px 0 30px 0;\n"])));function G(){var n=Object(c.useState)(""),e=Object(d.a)(n,2),t=e[0],r=e[1],a=Object(c.useContext)(N),i=a.setIsUserLogin,o=a.currentUser,s=a.setCurrentUser,b=Object(M.f)(),l=function(n){switch(n.target.name){case"username":s(Object(T.a)(Object(T.a)({},o),{},{username:n.target.value})),r("");break;case"avatar":s(Object(T.a)(Object(T.a)({},o),{},{avatar:n.target.value})),r("")}};return Object(u.jsx)(F,{children:Object(u.jsxs)(_,{onSubmit:function(n){var e;(n.preventDefault(),o.username||o.avatar)?o.username?o.avatar?o.username.length>7?r("\u9577\u5ea6\u6700\u591a 6 \u500b\u5b57\u5143"):null===o.username.match(/[\s]/g)?(r(""),e=o,localStorage.setItem(J,JSON.stringify(e)),i(!0),b.push("/mode")):r("\u4e0d\u5f97\u542b\u7a7a\u767d\u5b57\u5143"):r("\u5c1a\u672a\u9078\u64c7\u982d\u8cbc"):r("\u5c1a\u672a\u586b\u5beb\u540d\u5b57"):r("\u8cc7\u6599\u586b\u5beb\u4e0d\u9f4a\u5168")},children:[Object(u.jsx)(K,{children:"NIMIN CHAT"}),Object(u.jsxs)(P,{children:[Object(u.jsxs)("label",{htmlFor:"username",children:["\u540d\u5b57",t&&Object(u.jsx)(Q,{children:t})]}),Object(u.jsx)(V,{id:"username",name:"username",placeholder:"\u8acb\u586b\u5beb\u540d\u5b57",onChange:l})]}),Object(u.jsx)("p",{children:"\u9078\u64c7\u982d\u8cbc"}),Object(u.jsx)(X,{children:[{id:"option1",background:"#e0969b"},{id:"option2",background:"#b59a92"},{id:"option3",background:"#77bce2"},{id:"option4",background:"#93a5d2"}].map((function(n){return Object(u.jsx)(Y,{id:n.id,handleUserInfoChange:l,background:n.background},n.id)}))}),Object(u.jsx)(E,{type:"submit",value:"\u9032\u5165\u804a\u5929\u5ba4"})]})})}var W=t(32),Z=t(41),$=t(33),nn=t(31);t(54);nn.a.initializeApp({apiKey:"AIzaSyDXEot_nTMfTpJVR4lfaCuqm74Uz8laHCQ",authDomain:"nimin-chat.firebaseapp.com",databaseURL:"https://nimin-chat-default-rtdb.firebaseio.com",projectId:"nimin-chat",storageBucket:"nimin-chat.appspot.com",messagingSenderId:"612479268903",appId:"1:612479268903:web:6bd28ec327da23617bf602"});var en,tn,rn,an,cn,on,sn,bn,dn,ln,pn=nn.a.database(),jn=t(44),un=p.b.div(en||(en=Object(l.a)(["\n  width: 280px;\n"]))),xn=Object(p.b)(D.b)(tn||(tn=Object(l.a)(["\n  display: block;\n  text-decoration: none;\n"]))),hn=p.b.div(rn||(rn=Object(l.a)(["\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  margin-top: 40px;\n  padding: 30px 0;\n  background-color: #fff;\n  border-radius: 20px;\n  font-size: 1.5rem;\n  font-weight: 500;\n  color: #00b9a3;\n  cursor: pointer;\n  transition: 0.3s;\n\n  &:hover {\n    box-shadow: 0 0 20px rgba(0, 0, 0, 0.1);\n    background-color: #00b9a3;\n    color: #ffffff;\n  }\n\n  svg {\n    width: auto;\n    height: 40px;\n  }\n"]))),fn=p.b.div(an||(an=Object(l.a)(["\n  position: fixed;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  background-color: rgba(0, 0, 0, 0.4);\n"]))),mn=p.b.div(cn||(cn=Object(l.a)(["\n  position: fixed;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  padding: 50px 80px;\n  width: 33%;\n  min-width: 480px;\n  background-color: #ffffff;\n  border-radius: 20px;\n  box-shadow: 0 0 50px 0 rgba(0, 0, 0, 0.1);\n\n  "," {\n    padding: 40px;\n    width: 90%;\n    min-width: auto;\n  }\n"])),L),gn=p.b.div(on||(on=Object(l.a)(["\n  position: absolute;\n  top: 20px;\n  right: 20px;\n  width: 35px;\n  height: 35px;\n  border-radius: 50%;\n  border: 2px solid #00b9a3;\n  color: #00b9a3;\n  cursor: pointer;\n  transition: 0.3s;\n\n  svg {\n    width: 100%;\n    height: 100%;\n  }\n\n  &:hover {\n    background-color: #00b9a3;\n    color: #ffffff;\n  }\n"]))),On=p.b.p(sn||(sn=Object(l.a)(["\n  margin-bottom: 40px;\n  background-color: #ffffff;\n  color: #00b9a3;\n  font-size: 1.5rem;\n  font-weight: 500;\n  text-align: center;\n"]))),vn=p.b.div(bn||(bn=Object(l.a)(["\n  margin-bottom: 40px;\n"]))),wn=p.b.span(dn||(dn=Object(l.a)(["\n  margin-left: 20px;\n  color: #d62f39;\n"]))),kn=p.b.input(ln||(ln=Object(l.a)(["\n  margin-top: 10px;\n  padding: 10px;\n  width: 100%;\n  height: 45px;\n  border: 1px solid transparent;\n  border-radius: 8px;\n  font-size: 1rem;\n  color: #505050;\n  background-color: #f5f5f5;\n  transition: 0.3s;\n\n  &::placeholder {\n    color: #cccccc;\n  }\n\n  &:focus {\n    border: 1px solid #00b9a3;\n  }\n"])));function yn(){var n=Object(c.useState)(!1),e=Object(d.a)(n,2),t=e[0],r=e[1],a=Object(c.useState)(!1),i=Object(d.a)(a,2),o=i[0],s=i[1],b=Object(c.useState)(""),l=Object(d.a)(b,2),p=l[0],j=l[1],x=Object(c.useState)(""),h=Object(d.a)(x,2),f=h[0],m=h[1],g=Object(c.useState)(""),O=Object(d.a)(g,2),v=O[0],w=O[1],k=Object(M.f)(),y=jn.a.database().ref("chats").orderByChild("roomID"),S=Object(c.useContext)(N).isUserLogin;Object(c.useEffect)((function(){S||k.push("/")}),[k,S]),q();var C=function(){r(!t),w("")},z=function(){s(!o),w("")};return Object(u.jsx)(F,{children:Object(u.jsxs)(un,{children:[Object(u.jsx)(xn,{to:"/chat/lobby",children:Object(u.jsxs)(hn,{children:[Object(u.jsx)(W.b,{}),"\u804a\u5929\u5927\u5ef3"]})}),Object(u.jsxs)(hn,{onClick:C,children:[Object(u.jsx)(W.a,{}),"\u52a0\u5165\u623f\u9593"]}),t&&Object(u.jsxs)(u.Fragment,{children:[Object(u.jsx)(fn,{onClick:C}),Object(u.jsxs)(mn,{children:[Object(u.jsx)(gn,{onClick:C,children:Object(u.jsx)($.a,{})}),Object(u.jsx)(On,{children:"\u52a0\u5165\u623f\u9593"}),Object(u.jsxs)("form",{onSubmit:function(n){n.preventDefault(),y.equalTo(f).once("value",(function(n){f?n.val()?k.push("/chat/".concat(f)):w("\u6b64\u623f\u9593\u4e0d\u5b58\u5728"):w("\u5c1a\u672a\u8f38\u5165\u623f\u9593\u7de8\u865f")}))},children:[Object(u.jsxs)(vn,{children:[Object(u.jsxs)("label",{htmlFor:"room-id",children:["\u623f\u9593\u7de8\u865f",v&&Object(u.jsx)(wn,{children:v})]}),Object(u.jsx)(kn,{id:"room-id",placeholder:"\u8acb\u8f38\u5165\u623f\u9593\u7de8\u865f",onChange:function(n){m(n.target.value)}})]}),Object(u.jsx)(E,{type:"submit",value:"\u52a0\u5165"})]})]})]}),Object(u.jsxs)(hn,{onClick:z,children:[Object(u.jsx)(Z.a,{}),"\u5275\u5efa\u623f\u9593"]}),o&&Object(u.jsxs)(u.Fragment,{children:[Object(u.jsx)(fn,{onClick:z}),Object(u.jsxs)(mn,{children:[Object(u.jsx)(gn,{onClick:z,children:Object(u.jsx)($.a,{})}),Object(u.jsx)(On,{children:"\u5275\u5efa\u623f\u9593"}),Object(u.jsxs)("form",{onSubmit:function(n){n.preventDefault(),y.equalTo(p).once("value",(function(n){var e;p?n.val()?w("\u6b64\u623f\u9593\u5df2\u5b58\u5728"):(e=p,pn.ref("chats/".concat(e)).set({roomID:e}),k.push("/chat/".concat(p))):w("\u5c1a\u672a\u8f38\u5165\u623f\u9593\u7de8\u865f")}))},children:[Object(u.jsxs)(vn,{children:[Object(u.jsxs)("label",{htmlFor:"room-id",children:["\u623f\u9593\u7de8\u865f",v&&Object(u.jsx)(wn,{children:v})]}),Object(u.jsx)(kn,{id:"room-id",placeholder:"\u8acb\u8f38\u5165\u623f\u9593\u7de8\u865f",onChange:function(n){j(n.target.value)}})]}),Object(u.jsx)(E,{type:"submit",value:"\u5efa\u7acb"})]})]})]})]})})}var Sn,Cn,zn,In,Un,Dn,Mn,Tn,Ln,Fn,En,Nn,Jn,qn,An,Bn,Hn,Rn,Yn,_n,Kn,Pn,Qn,Vn=t(43),Xn=t(34),Gn=t(42),Wn=p.b.div(Sn||(Sn=Object(l.a)(["\n  margin-top: 40px;\n  padding: 20px;\n  width: 100%;\n  max-width: 840px;\n  height: calc((100vh - 60px) * 0.8);\n  max-height: 800px;\n"]))),Zn=p.b.div(Cn||(Cn=Object(l.a)(["\n  position: relative;\n  display: flex;\n  justify-content: space-between;\n  padding: 20px;\n  height: 100%;\n  background-color: #f5f5f5;\n  border-radius: 20px;\n"]))),$n=p.b.div(zn||(zn=Object(l.a)(["\n  position: absolute;\n  top: -40px;\n  left: 20px;\n  display: flex;\n  align-items: center;\n  padding: 0 20px 0 70px;\n  line-height: 40px;\n  background-color: #cccccc;\n  border-radius: 10px 10px 0 0;\n  font-size: 0.9375rem;\n  \n  svg {\n    margin-left: 50px;\n    width: 20px;\n    height: 20px;\n    cursor: pointer;\n    transition: 0.3s;\n\n    &:hover {\n      color: #d62f39;\n    }\n  }\n"]))),ne=p.b.aside(In||(In=Object(l.a)(["\n  position: relative;\n  padding: 20px;\n  width: 180px;\n  height: 100%;\n  background-color: #fff;\n  border-radius: 15px;\n  display: ",";\n\n  "," {\n    width: ",";\n  }\n"])),(function(n){return n.isSidebarOpen?"none":"block"}),L,(function(n){return n.isSidebarOpen?"0":"100%"})),ee=p.b.div(Un||(Un=Object(l.a)(["\n  position: absolute;\n  left: 0;\n  bottom: 75px;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  width: 25px;\n  height: 30px;\n  border-radius: 0 50% 50% 0;\n  font-size: 1.375rem;\n  color: #505050;\n  background-color: #cccccc;\n  cursor: pointer;\n  z-index: 1;\n\n  svg {\n    transition: 0.3s;\n    transform: ",";\n  }\n"])),(function(n){return n.isSidebarOpen?"rotate(0)":"rotate(180deg)"})),te=p.b.div(Dn||(Dn=Object(l.a)(["\n  display: flex;\n  align-items: center;\n  margin-bottom: 15px;\n  padding-bottom: 15px;\n  border-bottom: 1px solid #e9e9e9;\n"]))),re=p.b.div(Mn||(Mn=Object(l.a)(["\n  width: 18px;\n  height: 18px;\n  margin-right: 8px;\n  background-color: ",";\n  border-radius: 50%;\n"])),(function(n){return n.avatar})),ae=p.b.section(Tn||(Tn=Object(l.a)(["\n  display: flex;\n  flex-direction: column;\n  justify-content: space-between;\n  height: 100%;\n  width: ",";\n\n  "," {\n    display: ",";\n    width: ",";\n  }\n"])),(function(n){return n.isSidebarOpen?"100%":"calc(100% - 200px)"}),L,(function(n){return n.isSidebarOpen?"flex":"none"}),(function(n){return n.isSidebarOpen?"100%":"0"})),ie=p.b.div(Ln||(Ln=Object(l.a)(["\n  padding: 0 10px;\n  height: calc(100% - 70px);\n  overflow: auto;\n  overflow-x:hidden;\n\n  &::-webkit-scrollbar {\n    width: 8px;\n  }\n \n  &::-webkit-scrollbar-track {\n    background-color: #e9e9e9;\n    border-radius: 100px;\n  }\n \n  &::-webkit-scrollbar-thumb {\n    background-color: #cccccc;\n    border-radius: 100px;\n  }\n"]))),ce=p.b.p(Fn||(Fn=Object(l.a)(["\n  margin: 15px auto;\n  padding: 5px 15px;\n  width: fit-content;\n  background-color: #e9e9e9;\n  border-radius: 20px;\n  font-size: 0.875rem;\n"]))),oe=p.b.div(En||(En=Object(l.a)(["\n  display: flex;\n  justify-content: flex-end;\n  align-items: flex-end;\n  margin: 15px 0 15px auto;\n  max-width: 80%;\n"]))),se=p.b.p(Nn||(Nn=Object(l.a)(["\n  padding: 7px 15px;\n  margin-left: 10px;\n  max-width: calc(100% - 64px);\n  height: fit-content;\n  background-color: #00b9a3;\n  color: #ffffff;\n  border-radius: 10px 0 10px 10px;\n  word-wrap: break-word;\n"]))),be=p.b.div(Jn||(Jn=Object(l.a)(["\n    display: flex;\n    margin: 7.5px auto 7.5px 0;\n    max-width: 80%;\n\n  "," {\n    width: 100%;\n    max-width: 100%;\n  }\n"])),L),de=p.b.div(qn||(qn=Object(l.a)(["\n  margin-right: 10px;\n  width: 30px;\n  height: 30px;\n  border-radius: 50%;\n  background-color: ",";\n"])),(function(n){return n.background})),le=p.b.div(An||(An=Object(l.a)(["\n  width: calc(100% - 40px);\n"]))),pe=p.b.p(Bn||(Bn=Object(l.a)(["\n  margin-bottom: 5px;\n  color: #aaaaaa;\n  font-size: 0.8125rem;\n"]))),je=p.b.div(Hn||(Hn=Object(l.a)(["\n  display: flex;\n  align-items: flex-end;\n"]))),ue=p.b.p(Rn||(Rn=Object(l.a)(["\n  margin-right: 10px;\n  padding: 7px 15px;\n  max-width: calc(100% - 64px);\n  background-color: #fff;\n  border-radius: 0 10px 10px 10px;\n  word-wrap: break-word;\n"]))),xe=p.b.p(Yn||(Yn=Object(l.a)(["\n  font-size: 0.75rem;\n  color: #aaaaaa;\n"]))),he=p.b.form(_n||(_n=Object(l.a)(["\n  position: relative;\n"]))),fe=p.b.input(Kn||(Kn=Object(l.a)(["\n  border: transparent;\n  padding: 0 75px 0 55px;\n  width: 100%;\n  height: 50px;\n  border-radius: 50px;\n  background-color: #fff;\n  font-size: 1rem;\n\n  &::placeholder {\n    color: #cccccc;\n  }\n"]))),me=p.b.div(Pn||(Pn=Object(l.a)(["\n  position: absolute;\n  top: 50%;\n  left: 20px;\n  transform: translateY(-50%);\n  width: 20px;\n  height: 20px;\n  cursor: pointer;\n  \n  svg {\n    width: 100%;\n    color: #cccccc;\n  }\n"]))),ge=p.b.button(Qn||(Qn=Object(l.a)(["\n  position: absolute;\n  top: 50%;\n  right: 20px;\n  transform: translateY(-50%);\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  width: 35px;\n  height: 35px;\n  border-radius: 50%;\n  border: none;\n  background-color: #00b9a3;\n  cursor: pointer;\n  transition: 0.3s;\n\n  svg {\n    color: #fff;\n  }\n\n  &:hover {\n    background-color: #00ad98;\n  }\n"])));function Oe(){var n=Object(c.useState)(!0),e=Object(d.a)(n,2),t=e[0],r=e[1],a=Object(c.useState)([]),i=Object(d.a)(a,2),o=i[0],s=i[1],b=Object(c.useState)([]),l=Object(d.a)(b,2),p=l[0],j=l[1],x=Object(c.useContext)(N),h=x.isUserLogin,f=x.currentUser,m=Object(M.g)().roomId,g=Object(M.f)(),O=JSON.parse(localStorage.getItem(J));Object(c.useEffect)((function(){h?q():g.push("/")}),[g,h]),Object(c.useEffect)((function(){!function(n){pn.ref("messages/".concat(n)).on("value",(function(n){var e=n.val();if(e){var t=Object.keys(e).map((function(n){return e[n]}));s(t)}}))}(m),function(n,e){pn.ref("onlineUser/".concat(n)).push({username:e})}(m,O.username),function(n,e,t){pn.ref("messages/".concat(n)).push({id:{".sv":"timestamp"},username:e,isSystemMessage:t})}(m,O.username,!0)}),[m,O.username]),Object(c.useEffect)((function(){var n=document.querySelector(".resized");n.scrollTo(0,n.scrollHeight)}),[o]);return Object(u.jsx)(F,{children:Object(u.jsx)(Wn,{children:Object(u.jsxs)(Zn,{children:[Object(u.jsxs)($n,{children:["lobby"===m?"\u804a\u5929\u5927\u5ef3":"\u623f\u9593\u7de8\u865f ".concat(m),Object(u.jsx)(Xn.a,{})]}),Object(u.jsx)(ne,{isSidebarOpen:t,children:Object(u.jsxs)(te,{children:[Object(u.jsx)(re,{avatar:O.avatar}),O.username]})}),Object(u.jsx)(ee,{onClick:function(){r(!t)},isSidebarOpen:t,children:Object(u.jsx)(Gn.a,{})}),Object(u.jsxs)(ae,{isSidebarOpen:t,children:[Object(u.jsx)(ie,{className:"resized",children:o&&o.map((function(n){return n.isSystemMessage?Object(u.jsxs)(ce,{children:[n.username+" \u52a0\u5165\u804a\u5929\u5ba4"," "]},n.id):f.username!==n.username||n.isSystemMessage?Object(u.jsxs)(be,{children:[Object(u.jsx)(de,{background:n.avatar}),Object(u.jsxs)(le,{children:[Object(u.jsx)(pe,{children:n.username}),Object(u.jsxs)(je,{children:[Object(u.jsx)(ue,{children:n.message}),Object(u.jsx)(xe,{children:new Date(n.timestamp).toLocaleTimeString([],{hour:"2-digit",minute:"2-digit",hour12:!0})})]})]})]},n.id):Object(u.jsxs)(oe,{children:[Object(u.jsx)(xe,{children:new Date(n.timestamp).toLocaleTimeString([],{hour:"2-digit",minute:"2-digit",hour12:!0})}),Object(u.jsx)(se,{children:n.message})]},n.id)}))}),Object(u.jsxs)(he,{onSubmit:function(n){n.preventDefault(),p&&(!function(n){var e=n.roomId,t=n.message,r=n.username,a=n.avatar,i=n.isSystemMessage;pn.ref("messages/".concat(e)).push({id:{".sv":"timestamp"},message:t,timestamp:{".sv":"timestamp"},username:r,avatar:a,isSystemMessage:i})}({roomId:m,message:p,username:O.username,avatar:O.avatar,isSystemMessage:!1}),j(""))},children:[Object(u.jsx)(me,{children:Object(u.jsx)(Vn.a,{})}),Object(u.jsx)(fe,{placeholder:"\u8f38\u5165\u60f3\u8aaa\u7684\u8a71",value:p,onChange:function(n){j(n.target.value)}}),Object(u.jsx)(ge,{type:"submit",children:Object(u.jsx)(Xn.b,{})})]})]})]})})})}function ve(){var n=Object(c.useState)(!1),e=Object(d.a)(n,2),t=e[0],r=e[1],a=Object(c.useState)({username:"",avatar:""}),i=Object(d.a)(a,2),o=i[0],s=i[1];return Object(u.jsx)(N.Provider,{value:{isUserLogin:t,setIsUserLogin:r,currentUser:o,setCurrentUser:s},children:Object(u.jsxs)(D.a,{children:[Object(u.jsx)(j,{}),Object(u.jsxs)(M.c,{children:[Object(u.jsx)(M.a,{exact:!0,path:"/",component:G}),Object(u.jsx)(M.a,{path:"/mode",component:yn}),Object(u.jsx)(M.a,{path:"/chat/:roomId",component:Oe})]}),Object(u.jsx)(f,{})]})})}b.a.render(Object(u.jsx)(o.a.StrictMode,{children:Object(u.jsx)(ve,{})}),document.getElementById("root"))}},[[58,1,2]]]);
//# sourceMappingURL=main.36906c1b.chunk.js.map