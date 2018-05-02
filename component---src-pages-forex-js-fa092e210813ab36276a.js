webpackJsonp([0xf3ccb7773513],{186:function(e,n,t){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}n.__esModule=!0;var i=t(4),o=r(i),u=t(188),a=r(u),c={fontSize:"13px"},l=function(){return o.default.createElement("div",{style:c},o.default.createElement(a.default,null),o.default.createElement("div",null,o.default.createElement("p",null,"This is a minimal, first pass at the a currency board tool for ",o.default.createElement("a",{href:"https://boardgamegeek.com/boardgame/227605/ex"},"For-Ex"),", a game by Tom Russel and published by ",o.default.createElement("a",{href:"https://hollandspiele.com/"},"Hollandspiele"),". There will be improvements to come.")))};n.default=l,e.exports=n.default},188:function(e,n,t){"use strict";var r=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e},i="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e};e.exports=function(e){function n(r){if(t[r])return t[r].exports;var i=t[r]={i:r,l:!1,exports:{}};return e[r].call(i.exports,i,i.exports,n),i.l=!0,i.exports}var t={};return n.m=e,n.c=t,n.i=function(e){return e},n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{configurable:!1,enumerable:!0,get:r})},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)},n.p="",n(n.s=7)}([function(e,n){e.exports=t(4)},function(e,n,t){function r(e){return e&&e.__esModule?e:{default:e}}function o(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}function u(e,n){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!n||"object"!==("undefined"==typeof n?"undefined":i(n))&&"function"!=typeof n?e:n}function a(e,n){if("function"!=typeof n&&null!==n)throw new TypeError("Super expression must either be null or a function, not "+("undefined"==typeof n?"undefined":i(n)));e.prototype=Object.create(n&&n.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),n&&(Object.setPrototypeOf?Object.setPrototypeOf(e,n):e.__proto__=n)}Object.defineProperty(n,"__esModule",{value:!0});var c=function(){function e(e,n){for(var t=0;t<n.length;t++){var r=n[t];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(n,t,r){return t&&e(n.prototype,t),r&&e(n,r),n}}(),l=t(0),s=r(l),f=t(5),d=r(f),p=function(e){function n(e){o(this,n);var t=u(this,(n.__proto__||Object.getPrototypeOf(n)).call(this,e));return t.state=e.store.state,t.strengthen=e.store.strengthenCurrency.bind(t),t.weaken=e.store.weakenCurrency.bind(t),t}return a(n,e),c(n,[{key:"render",value:function(){var e=this,n=this.state.currencies;return s.default.createElement("div",{id:"currency-board"},s.default.createElement("h3",null,"CurrencyBoard"),s.default.createElement("ul",null,n.map(function(n){return s.default.createElement(d.default,{key:n.name,currency:n,strengthen:e.strengthen,weaken:e.weaken})})))}}]),n}(s.default.Component);n.default=p},function(e,n,t){Object.defineProperty(n,"__esModule",{value:!0});var r=["GPB","EUR","USD","CHF","JPY","CAD","CNY"],i=r[0],o=r[1],u=r[2],a=r[3],c=r[4],l=r[5],s=r[6],f=[{name:i,order:1,weakerCurrencies:[{id:u,position:0},{id:o,position:1},{id:a,position:1},{id:c,position:1},{id:l,position:2},{id:s,position:6}]},{name:o,order:2,weakerCurrencies:[{id:u,position:0},{id:a,position:0},{id:c,position:1},{id:l,position:1},{id:s,position:5}]},{name:u,order:3,weakerCurrencies:[{id:a,position:0},{id:c,position:1},{id:l,position:1},{id:s,position:5}]},{name:a,order:4,weakerCurrencies:[{id:c,position:1},{id:l,position:1},{id:s,position:5}]},{name:c,order:5,weakerCurrencies:[{id:l,position:1},{id:s,position:4}]},{name:l,order:6,weakerCurrencies:[{id:s,position:3}]},{name:s,order:7,weakerCurrencies:[]}],d=r.map(function(e){return{name:e,count:8}}),p={currencies:f,certificates:d};n.default=p},function(e,n,t){function i(e){if(Array.isArray(e)){for(var n=0,t=Array(e.length);n<e.length;n++)t[n]=e[n];return t}return Array.from(e)}Object.defineProperty(n,"__esModule",{value:!0});var o=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e},u=function(e){return e+(e<10)},a=function(e){return e.sort(function(e,n){return e.order-n.order})},c=function(e){function n(e){this.setState(function(n){var t=n.currencies,o=t.find(function(n){var t=n.name;return t===e}),c=t.filter(function(e){return e!==o}),l=c.filter(function(e){var n=e.weakerCurrencies.find(function(e){return e.id===o.name});return n&&0===n.position}).map(function(e){return{id:e.name,position:0}}),s=c.map(function(e){var n=e.weakerCurrencies.map(function(e){return{id:e.id,position:e.position-(e.id===o.name)}}).filter(function(e){return e.position>=0});return r({},e,{weakerCurrencies:n})}),f=r({},o,{weakerCurrencies:[].concat(i(l),i(o.weakerCurrencies.map(function(e){return{id:e.id,position:u(e.position)}})))});return{currencies:a([f].concat(i(s)))}})}function t(e){this.setState(function(n){var t=n.currencies,o=t.find(function(n){var t=n.name;return t===e}),u=t.filter(function(e){return e!==o}),c=o.weakerCurrencies.filter(function(e){return 0===e.position}),l=r({},o,{weakerCurrencies:o.weakerCurrencies.filter(function(e){return e.position>0}).map(function(e){return{id:e.id,position:e.position-1}})}),s=u.map(function(e){var n=c.filter(function(n){return n.id===e.name}).map(function(e){return{id:o.name,position:0}});return{name:e.name,order:e.order,weakerCurrencies:[].concat(i(n),i(e.weakerCurrencies.map(function(e){return r({},e,{position:e.position+(e.id===o.name&&e.position<10)})})))}});return{currencies:a([l].concat(i(s)))}})}var c=o({},e);return{state:c,strengthenCurrency:n,weakenCurrency:t}};n.default=c},function(e,n,t){function r(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(n,"__esModule",{value:!0});var i=t(0),o=r(i),u=function(e){var n=e.label,t=e.tokens;return o.default.createElement("div",{className:"currency-cell"},o.default.createElement("div",null,n),t.map(function(e){var t=n+"-"+e.id,r="token token-"+e.id;return o.default.createElement("div",{className:r,key:t},e.id)}))};n.default=u},function(e,n,t){function r(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(n,"__esModule",{value:!0});var i=t(0),o=r(i),u=t(6),a=t(4),c=r(a),l=function(e){var n=e.currency,t=e.strengthen,r=e.weaken,i=function(e){return n.weakerCurrencies.filter(function(n){return n.position===e})};return o.default.createElement("div",{className:"currency-row"},o.default.createElement("div",{className:"currency-row-title-cell label-"+n.name},o.default.createElement("div",{className:"currency-row-title"},n.name),o.default.createElement("div",{className:"btn-group"},o.default.createElement("div",{className:"btn btn-dec",onClick:function(){return r(n.name)}},"-"),o.default.createElement("div",{className:"btn btn-inc",onClick:function(){return t(n.name)}},"+"))),u.boardPositions.map(function(e,n){return o.default.createElement(c.default,{key:e.value,label:e.display,tokens:i(n)})}))};n.default=l},function(e,n,t){Object.defineProperty(n,"__esModule",{value:!0});n.currencyNames={GPB:"GPB",EUR:"EUR",USD:"USD",CHF:"CHF",JPY:"JPY",CAD:"CAD",CNY:"CNY"},n.boardPositions=[{value:1,display:"1"},{value:1.5,display:String.fromCharCode(189)},{value:2,display:"2"},{value:2.5,display:String.fromCharCode(189)},{value:3,display:"3"},{value:3.5,display:String.fromCharCode(189)},{value:4,display:"4"},{value:5,display:"5"},{value:6,display:"6"},{value:7,display:"7"},{value:8,display:"8"}]},function(e,n,t){function r(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(n,"__esModule",{value:!0});var i=t(0),o=r(i),u=t(2),a=r(u),c=t(3),l=r(c),s=t(1),f=r(s),d=(0,l.default)(a.default),p=function(){return o.default.createElement("div",null,o.default.createElement("h1",null,"For-Ex"),o.default.createElement(f.default,{store:d}))};n.default=p}])}});
//# sourceMappingURL=component---src-pages-forex-js-fa092e210813ab36276a.js.map