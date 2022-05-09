import { menuPage } from "./menu"

import { createSection1, createSection2, createSection3, mainPage } from "./main";
import { contactPage } from "./contact";


createSection1()
createSection2()
createSection3()
mainPage()

/* export function initialPage() {

} */




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
   section1.style.backgroundrepeat = 'no-repeat';
   contentBox.classList.remove("dish-box")
   
   mainPage();
   section2.style.display = 'grid'
})

menuTab.addEventListener('click', e => {
    title.textContent = 'Menu'
    section1.style.backgroundrepeat = 'no-repeat';
    section2.style.display = 'none'
    menuPage()
    contentBox.classList.add("dish-box")
    

})

contactTab.addEventListener('click', e => {
    title.textContent = 'Contact'
    section2.style.display = 'none'
    contentBox.classList.remove("dish-box")
    contactPage();
})