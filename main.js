(()=>{"use strict";function e(e,t,n){const a=document.querySelector(".content-box"),s=document.createElement("div"),c=document.createElement("h4"),i=document.createElement("p"),d=document.createElement("p");s.appendChild(c),s.appendChild(i),s.appendChild(d),a.appendChild(s),s.classList.add("dish-wrapper"),d.classList.add("price"),c.textContent=e,i.textContent=n,d.textContent=`$ ${t}`}!function(){const e=document.getElementById("section1"),t=document.createElement("h1"),n=document.createElement("tabs"),a=document.createElement("button"),s=document.createElement("button"),c=document.createElement("button"),i=document.createElement("div"),d=document.createElement("header"),o=document.createElement("footer");i.classList.add("content-box"),i.textContent="home",t.textContent="Restaurant Name",t.classList.add("title"),a.textContent="Home",a.id="homeTab",a.classList.add("tab"),a.classList.add("active"),s.textContent="Menu",s.id="menuTab",s.classList.add("tab"),c.textContent="Conact",c.id="contactTab",c.classList.add("tab"),o.classList.add("footer"),d.classList.add("header"),n.classList.add("tabs"),e.appendChild(o),e.appendChild(d),e.appendChild(n),e.appendChild(t),e.appendChild(i),n.appendChild(a),n.appendChild(s),n.appendChild(c)}(),function(){const e=document.createElement("h2"),t=document.createElement("p"),n=document.createElement("img"),a=document.createElement("img"),s=document.getElementById("section2");e.textContent="Our Story",e.classList.add("story"),t.textContent="Nullam eleifend mollis gravida. Suspendisse molestie sed urna sit amet efficitur. Nulla pretium nibh sed nisl rhoncus lacinia. Integer dignissim, mauris vel luctus feugiat, risus lectus eleifend erat, a aliquet lorem metus in justo. Nulla sit amet lacus consectetur, facilisis nulla accumsan, blandit mi. Donec vel diam nibh. Fusce a pretium purus, sit amet sodales dolor. Ut eu orci quam. Aliquam condimentum diam ut est blandit posuere. Praesent in pulvinar odio. Morbi vitae mi id ante sagittis vulputate. Phasellus ac sapien nisi. In nisl tellus, dapibus ac elit vehicula, eleifend congue nisi. Cras dictum orci quis ligula posuere lobortis. Quisque volutpat augue id nisl sollicitudin pharetra. ",t.classList.add("story-content"),n.setAttribute("src","shop.jpg"),n.classList.add("img1"),a.setAttribute("src","cake.jpg"),a.classList.add("img2"),s.appendChild(e),s.appendChild(t),s.appendChild(n),s.appendChild(a)}();const t=document.querySelector(".title"),n=document.querySelector(".content-box");homeTab.classList.add("active");const a=document.querySelectorAll(".tab");document.querySelector(".tabs").addEventListener("click",(e=>{!function(e){a.forEach((e=>{e!==this&&e.classList.remove("active")})),e.classList.add("active")}(e.target)})),homeTab.addEventListener("click",(e=>{t.textContent="Restaurant Name",section1.style.backgroundImage="url('bg.jpg')",function(){const e=document.querySelector(".content-box");e.textContent="",e.textContent="home"}()})),menuTab.addEventListener("click",(n=>{console.log("BAT"),t.textContent="Menu",section1.style.background="grey",document.querySelector(".content-box").textContent="",e("asasasas",12,"aASasAS AsAS CASs"),e("dsd",13,"2221 A33sAS C23ASs")})),contactTab.addEventListener("click",(e=>{n.textContent="content",console.log("CAT"),t.textContent="Contact",section1.style.background="red"}))})();