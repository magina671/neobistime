(this.webpackJsonpneobis_time=this.webpackJsonpneobis_time||[]).push([[5],{132:function(e,a,t){"use strict";var n=t(1),s=t.n(n),c=t(133),l=t.n(c),o=t(3);a.a=function(){return s.a.createElement("div",{className:"empty-room"},s.a.createElement("p",{className:"empty-room__text"},"\u0415\u0449\u0435 \u043d\u0438\u043a\u0442\u043e \u043d\u0435 \u0431\u0440\u043e\u043d\u0438\u0440\u043e\u0432\u0430\u043b \u044d\u0442\u0443 \u043a\u043e\u043c\u043d\u0430\u0442\u0443."),s.a.createElement("p",{className:"empty-room__text"}," \u0412\u044b \u043c\u043e\u0436\u0435\u0442\u0435 \u0431\u044b\u0442\u044c \u043f\u0435\u0440\u0432\u044b\u043c\u0438!"),s.a.createElement("div",{className:"empty-room__block"},s.a.createElement(o.b,{to:"/admin/create_event",className:"link"},s.a.createElement("button",{className:"empty-room__button button"},"\u0417\u0430\u0431\u0440\u043e\u043d\u0438\u0440\u043e\u0432\u0430\u0442\u044c")),s.a.createElement("img",{src:l.a,className:"empty-room__image",alt:"empty rooom"})))}},133:function(e,a,t){e.exports=t.p+"static/media/empty-room.9c157e05.png"},145:function(e,a,t){"use strict";t.d(a,"b",(function(){return _}));var n=t(2),s=t(1),c=t.n(s),l=t(3),o=t(34),i=t(5),r=t(132),m=function(e){var a=e.events;return c.a.createElement("div",{className:"today__list"},a?a.map((function(e){var a=new Date(e.start),t=new Date(e.end);return c.a.createElement(l.b,{to:"/today/".concat(e.id),key:e.id,className:"link"},c.a.createElement("div",{className:"today__list-item"},c.a.createElement("div",{className:"today__list-item-answer"},c.a.createElement("div",{className:"today__list-item-answer_circle",style:{backgroundColor:"var(--neobisColor)"}})),c.a.createElement("div",{className:"today__list-item-content"},c.a.createElement("p",{className:"today__list-item-text"},e.title),c.a.createElement("p",{className:"today__list-item-time"},a.getHours(),":",(a.getMinutes()<10?"0":"")+a.getMinutes()," ","- ",t.getHours(),":",(t.getMinutes()<10?"0":"")+t.getMinutes()," "))))})):c.a.createElement(r.a,null))},d=new Date,_="".concat(["January","February","March","April","May","June","July","August","September","October","November","December"][d.getMonth()]," ").concat(d.getDate(),"  ").concat(d.getFullYear());a.a=Object(o.a)((function(e){var a=Object(s.useState)([]),t=Object(n.a)(a,2),l=t[0],o=t[1];return Object(s.useEffect)((function(){i.a.getTodaySchedule().then((function(e){console.log("TodayTimetable -> requestData",e),o(e.data)}))}),[]),c.a.createElement(c.a.Fragment,null,c.a.createElement("p",{className:"today__title"},_),c.a.createElement(m,{events:l}))}))},273:function(e,a,t){e.exports=t.p+"static/media/procent_coming.29d4caf0.svg"},274:function(e,a,t){e.exports=t.p+"static/media/events_created.8b3d6b5c.svg"},275:function(e,a,t){e.exports=t.p+"static/media/peoples_average.2ae4c297.svg"},276:function(e,a,t){e.exports=t.p+"static/media/admin-stat-total-events.4f0b3f66.svg"},277:function(e,a,t){e.exports=t.p+"static/media/admin-stat-percent-coming.7c9e1509.svg"},278:function(e,a,t){e.exports=t.p+"static/media/admin-stat-leute.920858cd.svg"},315:function(e,a,t){"use strict";t.r(a);var n=t(2),s=t(1),c=t.n(s),l=t(155),o=t(19),i=t(145),r=t(273),m=t.n(r),d=t(274),_=t.n(d),u=t(275),f=t.n(u),p=t(34),b=t(17),E=t(276),v=t.n(E),g=t(277),N=t.n(g),k=t(278),y=t.n(k),h=t(5),w=Object(p.a)(Object(b.a)((function(e){var a=Object(s.useState)(1),t=Object(n.a)(a,2),r=t[0],d=t[1],u=Object(s.useState)(1),p=Object(n.a)(u,2),b=p[0],E=p[1],g=Object(s.useState)(!0),k=Object(n.a)(g,2),w=k[0],x=k[1],O=Object(s.useState)({}),j=Object(n.a)(O,2),D=j[0],S=j[1],C=Object(s.useState)({}),A=Object(n.a)(C,2),F=A[0],M=A[1],B=Object(s.useState)([]),q=Object(n.a)(B,2),J=q[0],T=q[1],z=Object(s.useState)([]),H=Object(n.a)(z,2),L=H[0],R=H[1],G={datasets:[{data:[D.average_attendance,100-D.average_attendance],backgroundColor:["#F7D154","lightgrey"]}],labels:["% \u043f\u043e\u0441\u0435\u0449\u0435\u043d\u0438\u0439","% \u043f\u0440\u043e\u043f\u0443\u0441\u043a\u043e\u0432"]},Y={datasets:[{data:J,backgroundColor:["#6C63FF","#1FEAC5","#FBBEBE","#87DBEC","purple","#F7D154","orange","green","red"]}],labels:L};function Z(){var e={month:b,department_id:+r,year:w};h.a.postStatByDepartment(e).then((function(e){console.log("updateDepartmentData -> data",e.data),S(e.data)}))}Object(s.useEffect)((function(){Z()}),[b,w,r]);return Object(s.useEffect)((function(){h.a.getGeneralStat().then((function(e){M(e.data)})),h.a.getStatForAllDepartments().then((function(e){var a=e.data,t=[],n=[];for(var s in a)t.push(s),n.push(a[s]);T(n),R(t)})),Z()}),[]),c.a.createElement("div",{className:"admin-stat"},c.a.createElement("div",{className:"admin-stat__row"},c.a.createElement("div",{className:"admin-stat__row-info-block admin-stat__row-info-block_1"},c.a.createElement("div",{className:"d-flex p-1"},c.a.createElement("div",null,c.a.createElement("p",{className:"admin-stat__row-info-block-value"},F.percentage_of_attendance_at_events),c.a.createElement("p",{className:"admin-stat__row-info-block-text"},"% \u043f\u043e\u0441\u0435\u0449\u0435\u043d\u0438\u0439 \u043c\u0435\u0440\u043e\u043f\u0440\u0438\u044f\u0442\u0438\u0439")),c.a.createElement("div",null,c.a.createElement("img",{className:"admin-stat__row-info-block-img",src:m.a,alt:"beautiful content"}))),c.a.createElement("div",{className:"admin-stat__row-info-block-date"},i.b)),c.a.createElement("div",{className:"admin-stat__row-info-block admin-stat__row-info-block_2"},c.a.createElement("div",{className:"d-flex p-1"},c.a.createElement("div",null,c.a.createElement("p",{className:"admin-stat__row-info-block-value"},F.quantity_of_all_events),c.a.createElement("p",{className:"admin-stat__row-info-block-text"},"\u043c\u0435\u0440\u043e\u043f\u0440\u0438\u044f\u0442\u0438\u0439 \u043e\u0440\u0433\u0430\u043d\u0438\u0437\u043e\u0432\u0430\u043d\u043e")),c.a.createElement("div",null,c.a.createElement("img",{className:"admin-stat__row-info-block-img",src:_.a,alt:"beautiful content"}))),c.a.createElement("div",{className:"admin-stat__row-info-block-date"},i.b)),c.a.createElement("div",{className:"admin-stat__row-info-block admin-stat__row-info-block_3"},c.a.createElement("div",{className:"d-flex p-1"},c.a.createElement("div",null,c.a.createElement("p",{className:"admin-stat__row-info-block-value"},F.average_number_of_people_per_event),c.a.createElement("p",{className:"admin-stat__row-info-block-text"},"\u043b\u044e\u0434\u0435\u0439 \u0432 \u0441\u0440\u0435\u0434\u043d\u0435\u043c")),c.a.createElement("div",null,c.a.createElement("img",{className:"admin-stat__row-info-block-img",src:f.a,alt:"beautiful content"}))),c.a.createElement("div",{className:"admin-stat__row-info-block-date"},i.b)),c.a.createElement("div",{className:"admin-stat__row-info-block admin-stat__row-info-block_4"},c.a.createElement("div",{className:"d-flex p-1"},c.a.createElement("div",null,c.a.createElement("p",{className:"admin-stat__row-info-block-value"},F.quantity_of_people),c.a.createElement("p",{className:"admin-stat__row-info-block-text"},"\u0447\u0438\u0441\u043b\u0435\u043d\u043d\u043e\u0441\u0442\u044c \u041d\u0435\u043e\u0431\u0438\u0441\u0430")),c.a.createElement("div",null,c.a.createElement("img",{className:"admin-stat__row-info-block-img",src:f.a,alt:"beautiful content"}))),c.a.createElement("div",{className:"admin-stat__row-info-block-date"},i.b))),c.a.createElement("div",{className:"admin-stat__charts"},c.a.createElement("div",{className:"admin-stat__charts-doughnut"},c.a.createElement("div",{className:"admin-stat__charts-doughnut-filters"},c.a.createElement(o.a,{options:e.departments,className:"admin-stat__charts-doughnut-select",required:!0,onChange:function(e){d(e.value),Z()}}),c.a.createElement(o.a,{options:e.yearsMonth,className:"admin-stat__charts-doughnut-select",required:!0,onChange:function(e){E(+e.value+1),x(!1),Z()}}),c.a.createElement("button",{onClick:function(){x(!0)},className:"button admin-stat__charts-doughnut-button_year "},"\u0413\u043e\u0434")),c.a.createElement("div",{className:"admin-stat__charts-doughnut-chart"},c.a.createElement(l.Doughnut,{data:G,width:250,height:250,options:{responsive:!0,maintainAspectRatio:!0,legend:{display:!1}}})),c.a.createElement("div",{className:"personal-office__stat-info"},c.a.createElement("div",{className:"personal-office__stat-info-content"},c.a.createElement("div",{className:"personal-office__stat-info-block"},c.a.createElement("img",{className:"personal-office__stat-info-block-img",src:v.a,style:{boxSizing:"border-box",padding:"10px"},alt:"personal stat logo"}),c.a.createElement("p",{className:"personal-office__stat-info-block-text"},"\u0412\u0441\u0435\u0433\u043e \u043c\u0435\u0440\u043e\u043f\u0440\u0438\u044f\u0442\u0438\u0439"),c.a.createElement("p",{style:{color:"#1070CA"},className:"personal-office__stat-info-block-number"},D.quantity_of_events_by_departments)),c.a.createElement("div",{className:"personal-office__stat-info-block"},c.a.createElement("img",{className:"personal-office__stat-info-block-img",style:{boxSizing:"border-box",padding:"10px",marginBottom:"2px"},src:N.a,alt:"personal stat logo"}),c.a.createElement("p",{className:"personal-office__stat-info-block-text"},"\u041f\u0440\u043e\u0446\u0435\u043d\u0442 \u043f\u043e\u0441\u0435\u0449\u0435\u043d\u0438\u0439"),c.a.createElement("p",{style:{color:"#F7D154"},className:"personal-office__stat-info-block-number"},D.average_attendance)),c.a.createElement("div",{className:"personal-office__stat-info-block"},c.a.createElement("img",{className:"personal-office__stat-info-block-img personal-office__stat-info-block-img_small",src:y.a,alt:"personal stat logo"}),c.a.createElement("p",{className:"personal-office__stat-info-block-text"},"\u043b\u044e\u0434\u0435\u0439 \u0432 \u0441\u0440\u0435\u0434\u043d\u0435\u043c"),c.a.createElement("p",{style:{color:"#1070CA"},className:"personal-office__stat-info-block-number"},D.average_number_of_people_per_event))))),c.a.createElement("div",{className:"admin-stat__charts-bar"},c.a.createElement("p",{className:"admin-stat__charts-bar-text"},"\u041e\u0440\u0433\u0430\u043d\u0438\u0437\u043e\u0432\u0430\u043d\u043e \u043c\u0435\u0440\u043e\u043f\u0440\u0438\u044f\u0442\u0438\u0439 \u0434\u0435\u043f\u0430\u0440\u0442\u0430\u043c\u0435\u043d\u0442\u0430\u043c\u0438 \u0437\u0430 \u0432\u0441\u0435 \u0432\u0440\u0435\u043c\u044f:"),c.a.createElement(l.Bar,{data:Y,width:100,height:75,options:{responsive:!0,maintainAspectRatio:!0,legend:{display:!1},scales:{xAxes:[{gridLines:{display:!1}}],yAxes:[{ticks:{beginAtZero:!0},gridLines:{display:!1}}]}}}))))})),"admin");a.default=w}}]);
//# sourceMappingURL=5.41d5203c.chunk.js.map