export function createSection1(){
    const section1 = document.getElementById('section1');
    const title = document.createElement('h1')
    const tabs = document.createElement('tabs');
    const homeTab = document.createElement('button')
    const menuTab = document.createElement('button')
    const contactTab = document.createElement('button')

    const contentBox = document.createElement('div')

    const header = document.createElement('header')
    const footer = document.createElement('footer')

    contentBox.classList.add('content-box')   
    contentBox.textContent = 'home'


    title.textContent = 'Restaurant Name'
    title.classList.add('title')
    homeTab.textContent = 'Home';
    homeTab.id = 'homeTab'
    homeTab.classList.add('tab')
    homeTab.classList.add('active')

    menuTab.textContent = 'Menu';
    menuTab.id = 'menuTab'
    menuTab.classList.add('tab')

    contactTab.textContent = 'Conact';
    contactTab.id = 'contactTab'
    contactTab.classList.add('tab')

    footer.classList.add('footer')
    header.classList.add('header')
    tabs.classList.add('tabs')

    section1.appendChild(footer)
    section1.appendChild(header)
    section1.appendChild(tabs);
    section1.appendChild(title);

    section1.appendChild(contentBox)

    tabs.appendChild(homeTab)
    tabs.appendChild(menuTab)
    tabs.appendChild(contactTab)

}

export function createSection2() {
    const story = document.createElement('h2')
    const storyContent = document.createElement('p')
    const img1 = document.createElement('img')
    const img2 = document.createElement('img')
    const section2 = document.getElementById('section2');

    story.textContent = 'Our Story'
    story.classList.add('story')
    storyContent.textContent = 'Nullam eleifend mollis gravida. Suspendisse molestie sed urna sit amet efficitur. Nulla pretium nibh sed nisl rhoncus lacinia. Integer dignissim, mauris vel luctus feugiat, risus lectus eleifend erat, a aliquet lorem metus in justo. Nulla sit amet lacus consectetur, facilisis nulla accumsan, blandit mi. Donec vel diam nibh. Fusce a pretium purus, sit amet sodales dolor. Ut eu orci quam. Aliquam condimentum diam ut est blandit posuere. Praesent in pulvinar odio. Morbi vitae mi id ante sagittis vulputate. Phasellus ac sapien nisi. In nisl tellus, dapibus ac elit vehicula, eleifend congue nisi. Cras dictum orci quis ligula posuere lobortis. Quisque volutpat augue id nisl sollicitudin pharetra. '
    storyContent.classList.add('story-content')
   /*  storyContent.classList.add('story') */
    img1.setAttribute('src', 'shop.jpg')
    img1.classList.add('img1')
    img2.setAttribute('src', 'cake.jpg')
    img2.classList.add('img2')

    section2.appendChild(story)
    section2.appendChild(storyContent)
    section2.appendChild(img1)
    section2.appendChild(img2)
}


export function mainPage() {
    const contentBox= document.querySelector('.content-box');    
    contentBox.textContent = "";
    contentBox.textContent = 'home'
}

   



  



/* const p = document.createElement('p')
window.addEventListener('DOMContentLoaded', setup); 

function setup() {
    const options = {
        rootMargin: '0px 0px -200px 0px'
    }

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if(entry.isIntersecting) {
                entry.target.classList.add('show');
                observer.unobserve(entry.target);
            } else {
                return;
            }
        })
    }, options);

    const h1 = document.querySelector('h1');
    observer.observe(h1);
    observer.observe(p);



    const paras = document.querySelectorAll('p');
    paras.forEach(p => observer.observe(p));
} */