/* import { createSection1, createSection2  } from "./main" */
import { menuPage } from "./menu"

import { createSection1, createSection2, mainPage } from "./main";

createSection1()
createSection2()

const title = document.querySelector('.title');

function removeContent() {
    const contentBox = document.querySelector('.content-box')
    contentBox.textContent = '';
}


const contentBox = document.querySelector('.content-box')
homeTab.classList.add('active')
const tabs = document.querySelectorAll(".tab");
function setActiveTab(tab) {
    tabs.forEach((tab) => {
      if (tab !== this) {
        tab.classList.remove("active");
      }
    });
    tab.classList.add("active");
   
} 

const tabsContainer = document.querySelector(".tabs");
tabsContainer.addEventListener('click', e => {
    setActiveTab(e.target)
})


homeTab.addEventListener('click', e => {
   title.textContent = 'Restaurant Name'
   section1.style.backgroundImage = "url('bg.jpg')";
   mainPage();
})

menuTab.addEventListener('click', e => {
    console.log('BAT');
    title.textContent = 'Menu'
    section1.style.background = 'grey'

    menuPage()
})


contactTab.addEventListener('click', e => {

    contentBox.textContent = 'content'
    console.log('CAT');
    title.textContent = 'Contact'
    section1.style.background = 'red'
})


