(function(){var e={7719:function(e,t,n){"use strict";var o=n(7195),r=function(){var e=this,t=e._self._c;return t("div",{attrs:{id:"app"}},[t("router-view")],1)},a=[],i=n(3736),s={},c=(0,i.Z)(s,r,a,!1,null,null,null),l=c.exports,u=n(2241);o.ZP.use(u.ZP);const d=[{path:"/",name:"home",component:()=>n.e(644).then(n.bind(n,3644))}],f=new u.ZP({mode:"history",base:"/andresk-devt.github.io/",routes:d});var p=f,m=n(408);o.ZP.use(m.ZP);var g=new m.ZP.Store({state:{},getters:{},mutations:{},actions:{},modules:{}}),h=n(5730);function v(){const e=n(8973),t={};return e.keys().forEach((n=>{const o=n.match(/([A-Za-z0-9-_]+)\./i);if(o&&o.length>1){const r=o[1];t[r]=e(n)}})),t}o.ZP.use(h.Z);var b=new h.Z({locale:localStorage.getItem("selected-language")||"en",fallbackLocale:"es",messages:v()});o.ZP.config.productionTip=!1,o.ZP.config.ignoredElements=[/^ion-/],new o.ZP({router:p,store:g,i18n:b,render:e=>e(l)}).$mount("#app")},8973:function(e,t,n){var o={"./en.json":790,"./es.json":8563};function r(e){var t=a(e);return n(t)}function a(e){if(!n.o(o,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return o[e]}r.keys=function(){return Object.keys(o)},r.resolve=a,e.exports=r,r.id=8973},790:function(e){"use strict";e.exports=JSON.parse('{"home":{"gretting":"Hi, I\'m","labor":"a Frontend Developer!","aboutMe":"Front-end developer, I like to teach what I know and learn new things from others. I consider myself self-taught, I like to be constantly learning and working in a team. Give and receive continuous feedback and apply good practices in the code.","skills":"Skills"},"skills":{"services":"Services","skillSet":"Skills-Set","github":{"message":"Use Git to control code versions, collaborate with other developers, manage code conflicts and undo unwanted changes and have stable versions of the final product."},"frontend":{"message":"Develop the user interface of a website or web application using technologies such as HTML, CSS and JavaScript or frameworks. Ensure that the interface is attractive, easy to use and accessible."},"backend":{"message":"While my primary focus is frontend development, I also have a solid understanding of backend technologies. This understanding allows me to work more effectively with backend developers and have better communication with them."},"web":{"message":"The importance of making sure that the website or application I am developing loads quickly and displays correctly on different web browsers and devices."},"test":{"message":"As a frontend developer, I understand the importance of testing and debugging code thoroughly to identify and fix bugs before they reach end users."},"responsive":{"message":"Design and develop user interfaces that adapt to different screen sizes and resolutions. Ensure that the user experience is optimal regardless of the device used to access the website or application."}},"projects":{"featured":"Featured","projects":"Projects"},"contactMe":{"contact":"Contact With Me","email":"Email:","message":"Message:","stayInContact":"Stay Connected","tooltip":"Email was copied."}}')},8563:function(e){"use strict";e.exports=JSON.parse('{"home":{"gretting":"Yo soy","labor":"Desarrollador Web!","aboutMe":"Desarrollador web, me gusta enseñar lo que sé y aprender cosas nuevas de los demás. Me considero autodidacta, me gusta estar en constante aprendizaje y trabajar en equipo. Dar y recibir feedback continuo y aplicar buenas prácticas en el código.","skills":"Habilidades"},"skills":{"services":"Servicios","skillSet":"Competencias","github":{"message":"Utilizar Git para controlar las versiones del código, colaborar con otros desarrolladores, manejar conflictos del código y deshacer cambios no deseados y terner versiones estables del producto final."},"frontend":{"message":"Desarrollar la interfaz de usuario de un sitio web o aplicación web utilizando tecnologías como HTML, CSS y JavaScript o frameworks. Asegurarse de que la interfaz sea atractiva, fácil de usar y accesible."},"backend":{"message":"Si bien mi enfoque principal es el desarrollo frontend, también tengo un conocimiento sólido de las tecnologías backend. Esta comprensión me permite trabajar de manera más efectiva con los desarrolladores de backend y tener una mejor comunicación con ellos."},"web":{"message":"La importancia de asegurarse de que el sitio web o la aplicación que estoy desarrollando se cargue rápidamente y se muestre correctamente en diferentes navegadores web y dispositivos."},"test":{"message":"Como desarrollador frontend, entiendo la importancia de probar y depurar el código de forma exhaustiva para identificar y corregir errores antes de que lleguen a los usuarios finales."},"responsive":{"message":"Diseñar y desarrollar interfaces de usuario que se adapten a diferentes tamaños y resoluciones de pantalla. Asegurarse de que la experiencia del usuario sea óptima independientemente del dispositivo utilizado para acceder al sitio web o la aplicación."}},"projects":{"featured":"Destacados","projects":"Proyectos"},"contactMe":{"contact":"Contacta Conmigo","email":"Correo electronico:","message":"Mensaje:","stayInContact":"Contactar","tooltip":"Correo fue copiado."}}')}},t={};function n(o){var r=t[o];if(void 0!==r)return r.exports;var a=t[o]={exports:{}};return e[o](a,a.exports,n),a.exports}n.m=e,function(){var e=[];n.O=function(t,o,r,a){if(!o){var i=1/0;for(u=0;u<e.length;u++){o=e[u][0],r=e[u][1],a=e[u][2];for(var s=!0,c=0;c<o.length;c++)(!1&a||i>=a)&&Object.keys(n.O).every((function(e){return n.O[e](o[c])}))?o.splice(c--,1):(s=!1,a<i&&(i=a));if(s){e.splice(u--,1);var l=r();void 0!==l&&(t=l)}}return t}a=a||0;for(var u=e.length;u>0&&e[u-1][2]>a;u--)e[u]=e[u-1];e[u]=[o,r,a]}}(),function(){n.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return n.d(t,{a:t}),t}}(),function(){n.d=function(e,t){for(var o in t)n.o(t,o)&&!n.o(e,o)&&Object.defineProperty(e,o,{enumerable:!0,get:t[o]})}}(),function(){n.f={},n.e=function(e){return Promise.all(Object.keys(n.f).reduce((function(t,o){return n.f[o](e,t),t}),[]))}}(),function(){n.u=function(e){return"js/"+e+".635c9588.js"}}(),function(){n.miniCssF=function(e){return"css/"+e+".7651e58e.css"}}(),function(){n.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)}}(),function(){var e={},t="portfolio:";n.l=function(o,r,a,i){if(e[o])e[o].push(r);else{var s,c;if(void 0!==a)for(var l=document.getElementsByTagName("script"),u=0;u<l.length;u++){var d=l[u];if(d.getAttribute("src")==o||d.getAttribute("data-webpack")==t+a){s=d;break}}s||(c=!0,s=document.createElement("script"),s.charset="utf-8",s.timeout=120,n.nc&&s.setAttribute("nonce",n.nc),s.setAttribute("data-webpack",t+a),s.src=o),e[o]=[r];var f=function(t,n){s.onerror=s.onload=null,clearTimeout(p);var r=e[o];if(delete e[o],s.parentNode&&s.parentNode.removeChild(s),r&&r.forEach((function(e){return e(n)})),t)return t(n)},p=setTimeout(f.bind(null,void 0,{type:"timeout",target:s}),12e4);s.onerror=f.bind(null,s.onerror),s.onload=f.bind(null,s.onload),c&&document.head.appendChild(s)}}}(),function(){n.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}}(),function(){n.p="/andresk-devt.github.io/"}(),function(){if("undefined"!==typeof document){var e=function(e,t,n,o,r){var a=document.createElement("link");a.rel="stylesheet",a.type="text/css";var i=function(n){if(a.onerror=a.onload=null,"load"===n.type)o();else{var i=n&&("load"===n.type?"missing":n.type),s=n&&n.target&&n.target.href||t,c=new Error("Loading CSS chunk "+e+" failed.\n("+s+")");c.code="CSS_CHUNK_LOAD_FAILED",c.type=i,c.request=s,a.parentNode.removeChild(a),r(c)}};return a.onerror=a.onload=i,a.href=t,n?n.parentNode.insertBefore(a,n.nextSibling):document.head.appendChild(a),a},t=function(e,t){for(var n=document.getElementsByTagName("link"),o=0;o<n.length;o++){var r=n[o],a=r.getAttribute("data-href")||r.getAttribute("href");if("stylesheet"===r.rel&&(a===e||a===t))return r}var i=document.getElementsByTagName("style");for(o=0;o<i.length;o++){r=i[o],a=r.getAttribute("data-href");if(a===e||a===t)return r}},o=function(o){return new Promise((function(r,a){var i=n.miniCssF(o),s=n.p+i;if(t(i,s))return r();e(o,s,null,r,a)}))},r={143:0};n.f.miniCss=function(e,t){var n={644:1};r[e]?t.push(r[e]):0!==r[e]&&n[e]&&t.push(r[e]=o(e).then((function(){r[e]=0}),(function(t){throw delete r[e],t})))}}}(),function(){var e={143:0};n.f.j=function(t,o){var r=n.o(e,t)?e[t]:void 0;if(0!==r)if(r)o.push(r[2]);else{var a=new Promise((function(n,o){r=e[t]=[n,o]}));o.push(r[2]=a);var i=n.p+n.u(t),s=new Error,c=function(o){if(n.o(e,t)&&(r=e[t],0!==r&&(e[t]=void 0),r)){var a=o&&("load"===o.type?"missing":o.type),i=o&&o.target&&o.target.src;s.message="Loading chunk "+t+" failed.\n("+a+": "+i+")",s.name="ChunkLoadError",s.type=a,s.request=i,r[1](s)}};n.l(i,c,"chunk-"+t,t)}},n.O.j=function(t){return 0===e[t]};var t=function(t,o){var r,a,i=o[0],s=o[1],c=o[2],l=0;if(i.some((function(t){return 0!==e[t]}))){for(r in s)n.o(s,r)&&(n.m[r]=s[r]);if(c)var u=c(n)}for(t&&t(o);l<i.length;l++)a=i[l],n.o(e,a)&&e[a]&&e[a][0](),e[a]=0;return n.O(u)},o=self["webpackChunkportfolio"]=self["webpackChunkportfolio"]||[];o.forEach(t.bind(null,0)),o.push=t.bind(null,o.push.bind(o))}();var o=n.O(void 0,[998],(function(){return n(7719)}));o=n.O(o)})();
//# sourceMappingURL=app.9cc72e9f.js.map