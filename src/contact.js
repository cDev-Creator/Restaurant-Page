export function contactPage() {
    const contentBox = document.querySelector('.content-box')
    contentBox.textContent = ''
    contact()

}

function contact() {
    const contentBox = document.querySelector('.content-box')
    const heading = document.createElement('p')

    heading.textContent = 'Get in touch with us below!'
    heading.classList.add('heading')
    contentBox.appendChild(heading)


    // Build and set component attributes
    const form = document.createElement('form');
    form.setAttribute('class', 'contact-form');
    // Set action to send our form info with formspree
    form.setAttribute('action', 'https://formspree.io/xwkwpevn');
    form.setAttribute('method', 'post');
  
    // Add title to form
    const formHeader = document.createElement('h3');
    formHeader.textContent = '- Send Message -';
  
   
    



    /* contentBox.textContent = 'sdsadddasdsad' */
    const map = document.createElement('iframe');
    map.setAttribute('src', 'https://maps.google.com/maps?q=%20portland%20ore&t=&z=11&ie=UTF8&iwloc=&output=embed');

    map.classList.add('map')
    contentBox.appendChild(map)
}