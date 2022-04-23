/* import { createSection1, createSection2  } from "./main" */
import { menu } from "./menu"

import { mainPage } from "./main";

mainPage();


const title = document.querySelector('.title');

function removeContent() {
    const contentBox = document.querySelector('.content-box')
    contentBox.textContent = '';
}


const tabs = document.querySelectorAll("tabs");
function setActiveTab(tab) {
    tabs.forEach((tab) => {
      if (tab !== this) {
        tab.classList.remove("active");
      }
    });

    tab.classList.add("active");
} 

/* tabs.addEventListener('click', e => {
    console.log(e.target.id)
    setActiveTab(e.target)
})  */

homeTab.addEventListener('click', e => {
   console.log('RAT');

   removeContent(); 

   if(e.target.classList.contains("active")) ; 
   setActiveTab(homeTab)
   title.textContent = 'Restaurant Name'
   section1.style.backgroundImage = "url('bg.jpg')";
   mainPage()
})

menuTab.addEventListener('click', e => {
    console.log('BAT');
   
    removeContent();
    setActiveTab(menuTab)
    if(e.target.classList.contains("active")) ; 
    title.textContent = 'Menu'
    section1.style.backgroundImage = "url('cake.jpg')";
    menu();

    
})


contactTab.addEventListener('click', e => {
    console.log('CAT');
})


