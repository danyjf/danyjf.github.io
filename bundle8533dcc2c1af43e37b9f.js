(()=>{"use strict";var e={};e.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),(()=>{var t;e.g.importScripts&&(t=e.g.location+"");var o=e.g.document;if(!t&&o&&(o.currentScript&&(t=o.currentScript.src),!t)){var c=o.getElementsByTagName("script");if(c.length)for(var l=c.length-1;l>-1&&(!t||!/^http(s?):/.test(t));)t=c[l--].src}if(!t)throw new Error("Automatic publicPath is not supported in this browser");t=t.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),e.p=t})(),e.p,e.p,e.p,e.p,e.p,e.p,e.p,e.p,e.p,e.p,e.p,e.p,e.p,e.p,e.p,e.p,e.p,e.p,e.p,e.p,e.p,e.p,e.p,e.p,e.p,e.p,e.p,e.p,e.p,e.p,e.p,e.p,e.p;var t,o,c,l,s,r,i,n,a,d,m,u;d=document.querySelectorAll(".modal__btn"),m=document.querySelector(".modal"),u=document.querySelector(".modal__content"),d.forEach((function(e){e.addEventListener("click",(function(){u.src=e.src,u.alt=e.alt,m.classList.add("modal__fade-in"),m.classList.remove("modal__fade-out"),u.classList.add("modal__zoom-in"),u.classList.remove("modal__zoom-out")}))})),m.addEventListener("click",(function(e){m.classList.add("modal__fade-out"),m.classList.remove("modal__fade-in"),u.classList.add("modal__zoom-out"),u.classList.remove("modal__zoom-in")})),r=document.querySelector(".header__bars"),i=document.querySelector(".mobile-nav"),n=document.querySelectorAll(".mobile-nav__link"),a=!1,r.addEventListener("click",(function(){(a=!a)?(i.classList.add("mobile-nav__slide-from-top"),i.classList.remove("mobile-nav__slide-to-top"),document.body.style.overflowY="hidden"):(i.classList.add("mobile-nav__slide-to-top"),i.classList.remove("mobile-nav__slide-from-top"),document.body.style.overflowY="auto")})),n.forEach((function(e){e.addEventListener("click",(function(){a=!1,i.classList.add("mobile-nav__slide-to-top"),i.classList.remove("mobile-nav__slide-from-top"),document.body.style.overflowY="auto"}))})),c=document.querySelectorAll(".projects__project-btn"),l=document.querySelectorAll(".project-details__close-btn"),s=null,c.forEach((function(e){e.addEventListener("click",(function(){(s=document.querySelector("#project-details-"+e.value)).classList.add("slide-from-right"),s.classList.remove("slide-to-right"),document.body.style.overflowY="hidden"}))})),l.forEach((function(e){e.addEventListener("click",(function(){s&&(s.classList.add("slide-to-right"),s.classList.remove("slide-from-right"),document.body.style.overflowY="auto")}))})),function(){var e=document.querySelectorAll("#theme-toggle"),t=localStorage.getItem("theme");function o(){document.body.classList.toggle("light-mode"),document.body.classList.contains("light-mode")?localStorage.setItem("theme","light-mode"):(localStorage.removeItem("theme"),document.body.removeAttribute("class"))}t&&document.body.classList.add(t),e.forEach((function(e){return e.addEventListener("click",o)}))}(),t=document.querySelectorAll(".lazy"),o=new IntersectionObserver((function(e,t){e.forEach((function(e){if(e.isIntersecting){var o=e.target;o.src=o.dataset.src,o.classList.remove("loading"),o.classList.add("loaded"),t.unobserve(o)}}))})),t.forEach((function(e){o.observe(e)}))})();
//# sourceMappingURL=bundle8533dcc2c1af43e37b9f.js.map