(this.webpackJsonpneobis_time=this.webpackJsonpneobis_time||[]).push([[7],{126:function(e,t,a){"use strict";function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function n(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?n(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):n(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}a.d(t,"a",(function(){return i}))},130:function(e,t,a){e.exports=a.p+"static/media/authentication.3c0df457.svg"},131:function(e,t,a){e.exports=a.p+"static/media/password_eye.66ec5002.svg"},143:function(e,t,a){"use strict";a.d(t,"a",(function(){return f}));var r=a(12),n=a.n(r),i=a(17),s=a(126),c=a(3),l=a(1),o=a.n(l),m=a(18),u=a(130),p=a.n(u),_=a(131),b=a.n(_),g=a(16),d=a(5),f=function(e){var t=e.minLength,a=void 0===t?0:t,r=e.type,n=e.name,i=e.value,s=e.setValue;return o.a.createElement("input",{className:"registration__input",required:!0,minLength:a,type:r,name:n,value:i,onChange:function(e){s(e.target.value)}})};t.b=Object(g.a)((function(e){var t=Object(l.useState)(""),a=Object(c.a)(t,2),r=a[0],u=a[1],_=Object(l.useState)(""),g=Object(c.a)(_,2),E=g[0],O=g[1],j=Object(l.useState)(""),h=Object(c.a)(j,2),v=h[0],N=h[1],w=Object(l.useState)(""),y=Object(c.a)(w,2),S=y[0],x=y[1],C=Object(l.useState)(""),F=Object(c.a)(C,2),D=F[0],P=F[1],q=Object(l.useState)(!0),k=Object(c.a)(q,2),L=k[0],A=k[1],V=Object(l.useState)(""),Z=Object(c.a)(V,2),I=Z[0],J=Z[1],U=Object(l.useState)(!0),B=Object(c.a)(U,2),R=B[0],T=B[1],$=Object(l.useState)({emailError:""}),z=Object(c.a)($,2),G=z[0],H=z[1],K=Object(l.useState)({passwordSimilarity:""}),M=Object(c.a)(K,2),Q=M[0],W=M[1],X=Object(l.useState)({numberError:""}),Y=Object(c.a)(X,2),ee=Y[0],te=Y[1],ae=function(){/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(E)?H(Object(s.a)({},G,{emailError:""})):H(Object(s.a)({},G,{emailError:"\u041d\u0435\u043f\u0440\u0430\u0432\u0438\u043b\u044c\u043d\u044b\u0439 email"})),W(D!==I?Object(s.a)({},Q,{passwordSimilarity:"\u041f\u0430\u0440\u043e\u043b\u0438 \u043d\u0435 \u0441\u043e\u0432\u043f\u0430\u0434\u0430\u044e\u0442"}):Object(s.a)({},Q,{passwordSimilarity:""})),isNaN(Number(v))?te(Object(s.a)({},ee,{numberError:"\u0422\u043e\u043b\u044c\u043a\u043e \u0446\u0438\u0444\u0440\u044b"})):te(Object(s.a)({},ee,{numberError:""}))};function re(){return(re=Object(i.a)(n.a.mark((function e(t){var a;return n.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:t.preventDefault(),ae(),a={name_surname:r,email:E,password1:D,password2:I,phone:v,department_id:S},d.a.postRegistrationData(a);case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}return o.a.createElement("div",{className:"registration auth"},o.a.createElement("div",{className:"registration__content"},o.a.createElement("div",{className:"auth__title"},o.a.createElement("p",{className:"auth__title-text"},"\u0414\u043e\u0431\u0440\u043e \u043f\u043e\u0436\u0430\u043b\u043e\u0432\u0430\u0442\u044c \u0432 Neobis Time")),o.a.createElement("section",{className:"registration__section registration__section_w_40 "},o.a.createElement("form",{className:"auth__form",onSubmit:function(e){return re.apply(this,arguments)}},o.a.createElement("label",{className:"registration__label",htmlFor:"name"},"\u0424\u0418\u041e"),o.a.createElement(f,{type:"text",name:"name",value:r,setValue:u}),o.a.createElement("label",{className:"registration__label",htmlFor:"email"},"E-mail"),o.a.createElement("input",{className:"registration__input",type:"text",name:"email",required:!0,value:E,onChange:function(e){O(e.target.value),ae()},onBlur:ae}),G&&o.a.createElement("div",{className:"error__span"},G.emailError),o.a.createElement("label",{className:"registration__label",htmlFor:"department"},"\u0414\u0435\u043f\u0430\u0440\u0442\u0430\u043c\u0435\u043d\u0442"),o.a.createElement(m.a,{options:e.departments,className:"registration__select",required:!0,onChange:function(e){x(e.value)}}),o.a.createElement("label",{className:"registration__label",htmlFor:"password"},"\u041f\u0430\u0440\u043e\u043b\u044c"),o.a.createElement("div",{className:"registration__password"},o.a.createElement("input",{className:"registration__password-input",type:L?"password":"text",minLength:8,name:"password1",required:!0,value:D,onChange:function(e){P(e.target.value)}}),o.a.createElement("img",{onClick:function(){A(!L)},src:b.a,alt:"eye",className:"registration__password-image"})),o.a.createElement("label",{className:"registration__label",htmlFor:"email"},"\u041f\u043e\u0432\u0442\u043e\u0440\u0438\u0442\u0435 \u043f\u0430\u0440\u043e\u043b\u044c"),o.a.createElement("div",{className:"registration__password"},o.a.createElement("input",{minLength:8,className:"registration__password-input",type:R?"password":"text",name:"password2",required:!0,value:I,onChange:function(e){J(e.target.value),ae()}}),o.a.createElement("img",{onClick:function(){T(!R)},src:b.a,alt:"eye",className:"registration__password-image"})),Q&&o.a.createElement("div",{className:"error__span"},Q.passwordSimilarity),o.a.createElement("label",{className:"registration__label",htmlFor:"phone"},"\u0422\u0435\u043b\u0435\u0444\u043e\u043d"),o.a.createElement("input",{className:"registration__input",type:"tel",minLength:6,name:"phone",required:!0,value:v,onChange:function(e){N(e.target.value),ae()}}),ee&&o.a.createElement("div",{className:"error__span"},ee.numberError),o.a.createElement("button",{className:"registration__submit",type:"submit"},"\u0417\u0430\u0440\u0435\u0433\u0438\u0441\u0442\u0440\u0438\u0440\u043e\u0432\u0430\u0442\u044c\u0441\u044f"))),o.a.createElement("section",{className:"registration__section registration__section_w_60"},o.a.createElement("img",{src:p.a,className:"registration__image",alt:"girl introducin login"}))))}))},144:function(e,t,a){e.exports=a.p+"static/media/forgot_password_gi2d.24021047.svg"},313:function(e,t,a){"use strict";a.r(t);var r=a(126),n=a(3),i=a(1),s=a.n(i),c=a(144),l=a.n(c),o=a(143),m=a(16),u=a(5),p=Object(m.a)((function(e){var t=Object(i.useState)(""),a=Object(n.a)(t,2),c=a[0],m=a[1],p=Object(i.useState)(""),_=Object(n.a)(p,2),b=_[0],g=_[1],d=Object(i.useState)([]),f=Object(n.a)(d,2),E=f[0],O=f[1],j=Object(i.useState)({numberError:""}),h=Object(n.a)(j,2),v=h[0],N=h[1],w=function(){var e={};return isNaN(Number(b))?N(Object(r.a)({},e,{numberError:"\u0422\u043e\u043b\u044c\u043a\u043e \u0446\u0438\u0444\u0440\u044b"})):N(Object(r.a)({},e,{numberError:""})),e};Object(i.useEffect)((function(){u.a.getUserInfo().then((function(e){var t=e.data;console.log("requestData",t),m(t.name_surname),g(t.phone)}))}),[]);return s.a.createElement("div",{className:"registration auth"},s.a.createElement("div",{className:"registration__content"},s.a.createElement("div",{className:"auth__title"},s.a.createElement("p",{className:"auth__title-text"},"\u0418\u0437\u043c\u0435\u043d\u0438\u0442\u0435 \u0432\u0430\u0448\u0438 \u0434\u0430\u043d\u043d\u044b\u0435")),s.a.createElement("section",{className:"registration__section registration__section_w_40 "},s.a.createElement("form",{className:"auth__form",onSubmit:function(e){e.preventDefault(),w();var t=new FormData;t.append("name_surname",c),t.append("phone",b),E[0]&&t.append("profile_img",E[0]),u.a.patchUserInfo(t)}},s.a.createElement("label",{className:"registration__label",htmlFor:"name"},"\u0424\u0418\u041e"),s.a.createElement(o.a,{type:"text",name:"name",value:c,setValue:m}),s.a.createElement("label",{className:"registration__label",htmlFor:"department"},"\u0424\u043e\u0442\u043e"),s.a.createElement("div",{className:"registration__input"},s.a.createElement("input",{type:"file",name:"image",onChange:function(e){O(e.target.files)}})),s.a.createElement("label",{className:"registration__label",htmlFor:"phone"},"\u0422\u0435\u043b\u0435\u0444\u043e\u043d"),s.a.createElement("input",{className:"registration__input",type:"tel",minLength:6,name:"phone",required:!0,value:b,onChange:function(e){g(e.target.value),w()}}),v&&s.a.createElement("div",{className:"error__span"},v.numberError),s.a.createElement("button",{style:{width:"60%",margin:"30px auto 0"},className:"registration__submit",type:"submit"},"\u0421\u043e\u0445\u0440\u0430\u043d\u0438\u0442\u044c"))),s.a.createElement("section",{className:"registration__section registration__section_w_60"},s.a.createElement("img",{src:l.a,className:"registration__image",alt:"girl introducin login"}))))}));t.default=p}}]);
//# sourceMappingURL=7.1243cab2.chunk.js.map