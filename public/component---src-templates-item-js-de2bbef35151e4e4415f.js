(window.webpackJsonp=window.webpackJsonp||[]).push([[17],{"+vFG":function(e,t,a){"use strict";var l=a("TqRt");t.__esModule=!0,t.default=void 0;var n=l(a("pVnL")),u=l(a("8OQS")),c=l(a("FdF9")),d=a("Wbzz"),r=l(a("KHAo")),i=function(e){var t=e.to,a=e.asModal,l=e.state,i=(0,u.default)(e,["to","asModal","state"]);return c.default.createElement(r.default.Consumer,null,(function(e){e.modal;var u=e.closeTo;return c.default.createElement(d.Link,(0,n.default)({to:t,state:(0,n.default)({},l,{modal:a,noScroll:t===u})},i))}))};t.default=i},"/X9z":function(e,t,a){"use strict";a.r(t),a.d(t,"query",(function(){return o}));a("f3/d"),a("rGqo"),a("yt8O"),a("Btvt"),a("/8Fb");var l=a("FdF9"),n=a("Wbzz"),u=a("bg8b"),c=(a("9eSz"),a("nP30"),a("QXb7")),d=a("10BB"),r=a("v8IA"),i=function(e){var t=e.sizes,a=Object(l.useState)(!1),n=a[0],u=a[1],c=Object(l.useCallback)((function(){return u(!n)}),[u,n]),r={armlength:!1,Handlength:!1,ziplength:!1,seamlength:!1,footlength:!1,Overallslength:!1};return t.forEach((function(e){Object.entries(r).forEach((function(t){var a=t[0],l=t[1];r[a]=l||!!e[a]}))})),l.default.createElement(l.default.Fragment,null,l.default.createElement("div",{className:"itemSizeTable__layout"+(n?" open":"")},l.default.createElement("h3",{className:"itemSizeTable__header"},"Таблица размеров",l.default.createElement(d.b,{color:"#F2F2F2",onClick:c,style:{marginLeft:"auto"}})),l.default.createElement("div",{className:"itemSizeTable__columns"},l.default.createElement("div",{className:"itemSizeTable__labels"},l.default.createElement("span",null,"Размер"),r.armlength&&l.default.createElement("span",null,"Длина рукава от ворота"),r.Handlength&&l.default.createElement("span",null,"Длина рукава от плеча"),r.ziplength&&l.default.createElement("span",null,"Длина куртки по замку (от ворота)"),r.seamlength&&l.default.createElement("span",null,"Шаговый шов"),r.footlength&&l.default.createElement("span",null,"Длина стельки"),r.Overallslength&&l.default.createElement("span",null,"Длина комбинезона от ворота")),t.map((function(e){return l.default.createElement("div",{className:"itemSizeTable__column"},l.default.createElement("div",null,e.size||"-"),r.armlength&&l.default.createElement("div",null,e.armlength||"-"),r.Handlength&&l.default.createElement("div",null,e.Handlength||"-"),r.ziplength&&l.default.createElement("div",null,e.ziplength||"-"),r.seamlength&&l.default.createElement("div",null,e.seamlength||"-"),r.footlength&&l.default.createElement("div",null,e.footlength||"-"),r.Overallslength&&l.default.createElement("div",null,e.Overallslength||"-"))})))),l.default.createElement("a",{className:"itemSizeTable",onClick:c},"Таблица размеров"))},m=function(e){var t=e.sizes,a=e.selectedSize,n=e.setSize;return l.default.createElement(l.default.Fragment,null,l.default.createElement("span",{className:"itemSelectSize"},"Выберите размер"),l.default.createElement("div",{className:"itemModalSizes"},t.map((function(e){var t=e.id,u=e.size;return l.default.createElement("div",{className:"itemModalSize"+(a===t?" sizeSelected":""),onClick:function(){return n(t)}},u)}))),l.default.createElement(i,{sizes:t}))},s=function(){return Object(l.useLayoutEffect)((function(){if(window)return window.document.documentElement.dataset.isItemOpen="true",function(){window.document.documentElement.dataset.isItemOpen="false"}}),[]),null};t.default=function(e){var t=e.data.strapiItem,a=Object(l.useState)(t.sizetable[0]?t.sizetable[0].id:-1),i=a[0],o=a[1],f=Object(l.useCallback)((function(){window&&window.addToCart&&window.addToCart(t.id,i)}),[t.id,i]);return l.default.createElement(r.ModalRoutingContext.Consumer,null,(function(e){e.modal;var a=e.closeTo;return l.default.createElement(l.default.Fragment,null,l.default.createElement("h2",{className:"itemModalHeader"},l.default.createElement(n.Link,{to:"boys",className:"itemPageBack"},l.default.createElement(d.a,{color:"#87338B"})," Вернуться к покупкам"),t.name,l.default.createElement(d.d,{to:a,className:"itemModalClose",color:"#87338B99"})),l.default.createElement("div",{className:"itemModalLayout"},l.default.createElement(u.a,{images:t.images}),l.default.createElement("div",{className:"itemModalData"},l.default.createElement(m,{sizes:t.sizetable,selectedSize:i,setSize:o}),l.default.createElement(c.a,{onClick:f},"Добавить в корзину",l.default.createElement("div",{className:"cartIcon"})),l.default.createElement("p",{className:"itemModalDescription"},t.description))),l.default.createElement("div",{className:"itemModalRight"},l.default.createElement("p",{className:"itemModalPrice"},t.price,".–"),t.usageicons.map((function(e){var t=e.icon;return l.default.createElement("img",{src:t.publicURL,height:56})}))),l.default.createElement(s,null))}))};var o="4087731498"},v8IA:function(e,t,a){"use strict";var l=a("TqRt");t.__esModule=!0;var n=l(a("KHAo"));t.ModalRoutingContext=n.default;var u=l(a("+vFG"));t.Link=u.default}}]);
//# sourceMappingURL=component---src-templates-item-js-de2bbef35151e4e4415f.js.map