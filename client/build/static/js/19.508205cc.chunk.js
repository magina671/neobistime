(this.webpackJsonpneobis_time=this.webpackJsonpneobis_time||[]).push([[19],{309:function(e,t,a){"use strict";a.r(t);var n=a(3),s=a(1),i=a.n(s),c=a(34),l=a(4),m=a(6),r=a(16),o=function(e){var t=e.events;return i.a.createElement("div",{className:"today__list"},t&&t.map((function(e){var t=new Date(e.start),a=new Date(e.end);return i.a.createElement(l.b,{to:"/lead_admin/end_event/".concat(e.id),className:"link"},i.a.createElement("div",{className:"today__list-item"},i.a.createElement("div",{className:"today__list-item-answer"},i.a.createElement("div",{className:"today__list-item-answer_circle_red"})),i.a.createElement("div",{className:"today__list-item-content"},i.a.createElement("p",{className:"today__list-item-text"},e.title),i.a.createElement("p",{className:"today__list-item-time"},t.getHours(),":",(t.getMinutes()<10?"0":"")+t.getMinutes()," ","- ",a.getHours(),":",(a.getMinutes()<10?"0":"")+a.getMinutes()," ","\xa0\xa0\xa0",(t.getDate()<10?"0":"")+t.getDate(),".",(t.getMonth()+1<10?"0":"")+(t.getMonth()+1)))))})))};t.default=Object(r.a)(Object(c.a)((function(){var e=Object(s.useState)([]),t=Object(n.a)(e,2),a=t[0],c=t[1];return Object(s.useEffect)((function(){m.a.getEndEvents().then((function(e){c(e.data)}))}),[]),i.a.createElement(i.a.Fragment,null,i.a.createElement("p",{className:"today__title"},"\u0417\u0430\u043a\u043e\u043d\u0447\u0438\u0432\u0448\u0438\u0435\u0441\u044f \u041c\u0435\u0440\u043e\u043f\u0440\u0438\u044f\u0442\u0438\u044f"),i.a.createElement(o,{events:a}))}),"admin"))}}]);
//# sourceMappingURL=19.508205cc.chunk.js.map