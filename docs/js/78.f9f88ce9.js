(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[78],{"8f7a":function(e,t,a){"use strict";a.r(t);var n=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"row justify-center",staticStyle:{"max-width":"800px",width:"100%",overflow:"hidden"}},[a("div",{staticClass:"q-gutter-sm"},[a("q-checkbox",{attrs:{label:"Use Touch (set if on mobile)"},model:{value:e.mobile,callback:function(t){e.mobile=t},expression:"mobile"}})],1),a("q-separator",{staticClass:"full-width"}),a("q-input",{staticClass:"q-pa-sm",attrs:{color:"blue-8",filled:"",label:"Enter date range",mask:"####-##-## - ####-##-##"},on:{input:e.onInputChanged},scopedSlots:e._u([{key:"append",fn:function(){return[a("div",{staticClass:"q-gutter-sm",staticStyle:{overflow:"hidden"}},[a("span",[a("q-icon",{staticClass:"cursor-pointer q-ma-md",attrs:{name:"far fa-calendar"}}),a("q-popup-proxy",{attrs:{anchor:"top right",self:"bottom middle"},model:{value:e.showCalendar,callback:function(t){e.showCalendar=t},expression:"showCalendar"}},[a("div",{staticStyle:{width:"300px"}},[a("div",{staticClass:"row q-pa-sm"},[a("div",{staticClass:"col-8 row justify-evenly items-center"},[a("q-icon",{attrs:{name:"fas fa-chevron-left"},on:{click:e.calendarPrev}}),a("div",{staticClass:"text-center",staticStyle:{"min-width":"100px"}},[e._v(e._s(e.formattedMonth))]),a("q-icon",{attrs:{name:"fas fa-chevron-right"},on:{click:e.calendarNext}})],1),a("div",{staticClass:"col-4 row justify-evenly items-center"},[a("q-icon",{attrs:{name:"fas fa-chevron-left"},on:{click:function(t){return e.addToYear(-1)}}}),e._v("\n                  "+e._s(e.selectedYear)+"\n                  "),a("q-icon",{attrs:{name:"fas fa-chevron-right"},on:{click:function(t){return e.addToYear(1)}}})],1)]),a("q-calendar",{ref:"calendar",staticStyle:{height:"250px"},attrs:{view:"month",locale:e.locale,"mini-mode":"","day-class":e.classDay},on:{changed:e.onChanged,"mousedown:day2":e.onMouseDownDay,"mouseup:day2":e.onMouseUpDay,"mousemove:day2":e.onMouseMoveDay},model:{value:e.selectedDate,callback:function(t){e.selectedDate=t},expression:"selectedDate"}}),a("div",{staticClass:"row justify-center q-pa-xs"},[a("q-btn",{attrs:{label:"Today","no-caps":"",flat:"",size:"sm"},on:{click:e.onToday}})],1)],1)])],1)])]},proxy:!0}]),model:{value:e.convertedDates,callback:function(t){e.convertedDates=t},expression:"convertedDates"}})],1)},s=[],i=(a("99af"),a("ac1f"),a("1276"),a("278c")),o=a.n(i),r=a("384e"),c=new Date;function h(e){var t=new Date(c);t.setDate(e);var a=r["a"].parseDate(t);return a.date}function d(e){return 0===e.button}var l={data:function(){return{selectedDate:h(c.getDate()),selectedYear:c.getFullYear(),convertedDates:"",showCalendar:!1,anchorTimestamp:"",otherTimestamp:"",mouseDown:!1,mobile:!1,locale:"en-us"}},computed:{startEndDates:function(){var e=[];return!1!==this.anchorDayIdentifier&&!1!==this.otherDayIdentifier&&(this.anchorDayIdentifier<=this.otherDayIdentifier?e.push(this.anchorTimestamp.date,this.otherTimestamp.date):e.push(this.otherTimestamp.date,this.anchorTimestamp.date)),e},anchorDayIdentifier:function(){return""!==this.anchorTimestamp&&r["a"].getDayIdentifier(this.anchorTimestamp)},otherDayIdentifier:function(){return""!==this.otherTimestamp&&r["a"].getDayIdentifier(this.otherTimestamp)},lowIdentifier:function(){return Math.min(this.anchorDayIdentifier,this.otherDayIdentifier)},highIdentifier:function(){return Math.max(this.anchorDayIdentifier,this.otherDayIdentifier)},formattedMonth:function(){var e=new Date(this.selectedDate);return this.monthFormatter().format(e)}},watch:{startEndDates:function(){var e=o()(this.startEndDates,2),t=e[0],a=e[1];this.convertedDates="".concat(t," - ").concat(a)},selectedDate:function(){var e=r["a"].parseTimestamp(this.selectedDate);this.selectedYear=e.year}},methods:{onInputChanged:function(e){var t=e.split(" - ");t[0]&&10===t[0].length&&(this.anchorTimestamp=r["a"].parseTimestamp(t[0])),t[1]&&10===t[1].length&&(this.otherTimestamp=r["a"].parseTimestamp(t[1]))},onChanged:function(e){var t=e.start,a=e.end;console.log(t,a)},addToYear:function(e){var t=r["a"].parseTimestamp(this.selectedDate);t=r["a"].addToDate(t,{year:e}),this.selectedDate=t.date,this.selectedYear=t.year},onToday:function(){this.selectedDate=h(c.getDate())},calendarNext:function(){this.$refs.calendar.next()},calendarPrev:function(){this.$refs.calendar.prev()},classDay:function(e){if(!1!==this.anchorDayIdentifier&&!1!==this.otherDayIdentifier)return this.getBetween(e)},getBetween:function(e){var t=r["a"].getDayIdentifier(e);return{"q-selected-day-first":this.lowIdentifier===t,"q-selected-day":this.lowIdentifier<=t&&this.highIdentifier>=t,"q-selected-day-last":this.highIdentifier===t}},onMouseDownDay:function(e){var t=e.scope,a=e.event;if(d(a)){if(!0===this.mobile&&null!==this.anchorTimestamp&&null!==this.otherTimestamp&&this.anchorTimestamp.date===this.otherTimestamp.date)return this.otherTimestamp=t.timestamp,void(this.mouseDown=!1);this.mouseDown=!0,this.anchorTimestamp=t.timestamp,this.otherTimestamp=t.timestamp}},onMouseUpDay:function(e){var t=e.scope,a=e.event;d(a)&&(this.otherTimestamp=t.timestamp,this.mouseDown=!1)},onMouseMoveDay:function(e){var t=e.scope;e.event;!0===this.mouseDown&&(this.otherTimestamp=t.timestamp)},monthFormatter:function(){try{return new Intl.DateTimeFormat(this.locale||void 0,{month:"long",timeZone:"UTC"})}catch(e){}}}},m=l,u=a("2877"),f=a("8f8e"),p=a("eb85"),D=a("27f9"),v=a("0016"),y=a("7cbe"),w=a("9c40"),T=a("ddd8"),g=a("eebe"),I=a.n(g),b=Object(u["a"])(m,n,s,!1,null,null,null);t["default"]=b.exports;I()(b,"components",{QCheckbox:f["a"],QSeparator:p["a"],QInput:D["a"],QIcon:v["a"],QPopupProxy:y["a"],QBtn:w["a"],QSelect:T["a"]})}}]);