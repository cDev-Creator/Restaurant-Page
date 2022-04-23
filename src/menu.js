 export function menu() {
    const menuTitle = document.createElement('h1')
    const contentBox= document.querySelector('.content-box')
    menuTitle.textContent = 'Menu'
    contentBox.appendChild(menuTitle)
}

/* export function loadMenu() {
    const main = document.querySelector("contentBox");
    main.textContent = "";
    main.appendChild(menu());
} */