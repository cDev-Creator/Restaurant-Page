(()=>{"use strict";function e(){document.querySelector(".content-box").textContent="",t("Souffle Cheesecake",15,"Lilikoi coulis, crème fraiche, blood orange guimauve"),t("Opera Cake",12,"Rum chocolate sponge, coffee butter cream, ganache, chocolate cream, Kona coffee ice cream"),t("Honey Lemon Tart",15,"Lemon curd, yogurt cream, chocolate crunch, mascarpone mousse, honeycomb toffee, chocolate ice cream"),t("Souffle Cheesecake",15,"Lilikoi coulis, crème fraiche, blood orange guimauve"),t("Tableside Bananas Foster",21,"Caramelized bananas, banana liqueur, rum and brandy, vanilla bean ice cream"),t("Baked Alaska",18,"Vanilla Lush Cake, Macadamia Nut Ice Cream, Italian meringue, blended flaming liqueurs"),t("Spiced Apple Bread Pudding",15,"Cinnamon spiced apple-walnut bread baked in custard, warm toffee sauce, vanilla ice cream"),t("Chocolate Peanut Butter Truffle",18,"Peanut butter cream, caramel milk chocolate mousse, peanut butter crunch, oreo brownie, served with banana caramel ice cream"),t("Framboise Macadamia Decadence",27,"Dense, creamy, smooth chocolate creation baked in a macadamia nut crust, chocolate raspberry cream, fresh raspberries"),t("The Roasted Pineapple",17,"Warm pineapple upside down cake, vanilla ice cream, roasted pineapple - rum caramel sauce")}function t(e,t,a){const n=document.querySelector(".content-box"),c=document.createElement("div"),i=document.createElement("h4"),o=document.createElement("p"),s=document.createElement("p");c.appendChild(i),i.classList.add("dish-title"),c.appendChild(o),c.appendChild(s),n.appendChild(c),c.classList.add("dish-wrapper"),s.classList.add("price"),i.textContent=e,o.textContent=a,s.textContent=`${t}`}document.onload=function(){const t=document.getElementById("section1"),a=document.createElement("h1"),n=document.createElement("tabs"),c=document.createElement("button"),i=document.createElement("button"),o=document.createElement("button"),s=document.createElement("div"),d=document.createElement("p"),l=document.createElement("button"),r=document.createElement("header"),u=document.createElement("footer");a.textContent="Restaurant Name",a.classList.add("title"),c.textContent="Home",c.id="homeTab",c.classList.add("tab"),c.classList.add("active"),i.textContent="Menu",i.id="menuTab",i.classList.add("tab"),o.textContent="Conact",o.id="contactTab",o.classList.add("tab"),u.classList.add("footer"),r.classList.add("header"),n.classList.add("tabs"),s.classList.add("content-box"),d.textContent="Baked Fresh, Daily",d.classList.add("message"),l.textContent="Order Now",l.classList.add("orderBtn"),l.addEventListener("click",(n=>{a.textContent="Menu",t.style.background="grey",e()})),s.appendChild(d),s.appendChild(l),t.appendChild(u),t.appendChild(r),t.appendChild(n),t.appendChild(a),t.appendChild(s),n.appendChild(c),n.appendChild(i),n.appendChild(o)}(),document.onload=function(){const e=document.createElement("h2"),t=document.createElement("p"),a=document.createElement("img"),n=document.createElement("img"),c=document.getElementById("section2");e.textContent="Our Story",e.classList.add("story"),t.textContent="Nullam eleifend mollis gravida. Suspendisse molestie sed urna sit amet efficitur. Nulla pretium nibh sed nisl rhoncus lacinia. Integer dignissim, mauris vel luctus feugiat, risus lectus eleifend erat, a aliquet lorem metus in justo. Nulla sit amet lacus consectetur, facilisis nulla accumsan, blandit mi. Donec vel diam nibh. Fusce a pretium purus, sit amet sodales dolor. Ut eu orci quam. Aliquam condimentum diam ut est blandit posuere. Praesent in pulvinar odio. Morbi vitae mi id ante sagittis vulputate. Phasellus ac sapien nisi. In nisl tellus, dapibus ac elit vehicula, eleifend congue nisi. Cras dictum orci quis ligula posuere lobortis. Quisque volutpat augue id nisl sollicitudin pharetra. ",t.classList.add("story-content"),a.setAttribute("src","shop.jpg"),a.classList.add("img1"),n.setAttribute("src","cake.jpg"),n.classList.add("img2"),c.appendChild(e),c.appendChild(t),c.appendChild(a),c.appendChild(n)}();const a=document.querySelector(".title"),n=document.querySelector(".content-box");homeTab.classList.add("active");const c=document.querySelectorAll(".tab");document.querySelector(".tabs").addEventListener("click",(e=>{!function(e){c.forEach((e=>{e!==this&&e.classList.remove("active")})),e.classList.add("active")}(e.target)})),homeTab.addEventListener("click",(t=>{a.textContent="Restaurant Name",section1.style.backgroundImage="url('bg.jpg')",section1.style.height="100vh",function(){const t=document.querySelector(".content-box");t.textContent="";const a=document.createElement("p");a.textContent="Baked Fresh, Daily",a.classList.add("message"),t.appendChild(a);const n=document.createElement("button");n.textContent="Order Now",n.classList.add("orderBtn");const c=document.querySelector(".title");n.addEventListener("click",(t=>{c.textContent="Menu",section1.style.background="grey",e()})),t.appendChild(n)}()})),menuTab.addEventListener("click",(t=>{a.textContent="Menu",section1.style.background="grey",e()})),contactTab.addEventListener("click",(e=>{n.textContent="content",a.textContent="Contact",section1.style.background="green"}))})();