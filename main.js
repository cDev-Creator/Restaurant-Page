(()=>{"use strict";function e(){const e=document.getElementById("section1");e.textContent="",e.appendChild(function(){const e=document.getElementById("section1"),t=document.createElement("h1"),n=document.createElement("tabs"),a=document.createElement("button"),i=document.createElement("button"),s=document.createElement("button"),c=document.createElement("div"),d=document.createElement("header"),o=document.createElement("footer");c.classList.add("content-box"),c.textContent="asdad",t.textContent="Restaurant Name",t.classList.add("title"),a.textContent="Home",a.id="homeTab",a.classList.add("tab"),i.textContent="Menu",i.id="menuTab",i.classList.add("tab"),s.textContent="Conact",s.id="contactTab",s.classList.add("tab"),o.classList.add("footer"),d.classList.add("header"),n.classList.add("tabs"),e.appendChild(o),e.appendChild(d),e.appendChild(n),e.appendChild(t),e.appendChild(c),n.appendChild(a),n.appendChild(i),n.appendChild(s)}()),e.appendChild(function(){const e=document.createElement("h2"),t=document.createElement("p"),n=document.createElement("img"),a=document.createElement("img"),i=document.getElementById("section2");e.textContent="Our Story",e.classList.add("story"),t.textContent="Nullam eleifend mollis gravida. Suspendisse molestie sed urna sit amet efficitur. Nulla pretium nibh sed nisl rhoncus lacinia. Integer dignissim, mauris vel luctus feugiat, risus lectus eleifend erat, a aliquet lorem metus in justo. Nulla sit amet lacus consectetur, facilisis nulla accumsan, blandit mi. Donec vel diam nibh. Fusce a pretium purus, sit amet sodales dolor. Ut eu orci quam. Aliquam condimentum diam ut est blandit posuere. Praesent in pulvinar odio. Morbi vitae mi id ante sagittis vulputate. Phasellus ac sapien nisi. In nisl tellus, dapibus ac elit vehicula, eleifend congue nisi. Cras dictum orci quis ligula posuere lobortis. Quisque volutpat augue id nisl sollicitudin pharetra. ",t.classList.add("story-content"),n.setAttribute("src","shop.jpg"),n.classList.add("img1"),a.setAttribute("src","cake.jpg"),a.classList.add("img2"),i.appendChild(e),i.appendChild(t),i.appendChild(n),i.appendChild(a)}())}e();const t=document.querySelector(".title");function n(){document.querySelector(".content-box").textContent=""}const a=document.querySelectorAll("tabs");function i(e){a.forEach((e=>{e!==this&&e.classList.remove("active")})),e.classList.add("active")}homeTab.addEventListener("click",(a=>{console.log("RAT"),n(),a.target.classList.contains("active"),i(homeTab),t.textContent="Restaurant Name",section1.style.backgroundImage="url('bg.jpg')",e()})),menuTab.addEventListener("click",(e=>{console.log("BAT"),n(),i(menuTab),e.target.classList.contains("active"),t.textContent="Menu",section1.style.backgroundImage="url('cake.jpg')",function(){const e=document.createElement("h1"),t=document.querySelector(".content-box");e.textContent="Menu",t.appendChild(e)}()})),contactTab.addEventListener("click",(e=>{console.log("CAT")}))})();