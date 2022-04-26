/* import { createSection1, createSection2  } from "./main" */
import { menuPage } from "./menu"

import { createSection1, createSection2, mainPage } from "./main";

document.onload=createSection1()
document.onload=createSection2()
/* section1.style.height = '100vh'; */

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
   section1.style.height = '100vh';
   mainPage();
})

menuTab.addEventListener('click', e => {
    title.textContent = 'Menu'
    section1.style.background = 'grey'
    menuPage()
})

contactTab.addEventListener('click', e => {
    contentBox.textContent = 'content'
    title.textContent = 'Contact'
    section1.style.background = 'green'
})


