
export function menuPage() {
    const contentBox = document.querySelector('.content-box')

    contentBox.textContent = ''
    menuList()
}

function menuList() {
    createDish('asasasas',12,'aASasAS AsAS CASs');
    createDish('dsd',13,'2221 A33sAS C23ASs');
}

function createDish(dishname, price, description) {
    const contentBox = document.querySelector('.content-box')

    const dishWrapper = document.createElement("div");
    const dishTitle = document.createElement("h4");
    const dishDescription = document.createElement("p");
    const dishPrice = document.createElement("p");

    dishWrapper.appendChild(dishTitle);
    dishWrapper.appendChild(dishDescription);
    dishWrapper.appendChild(dishPrice);
    contentBox.appendChild(dishWrapper);

    dishWrapper.classList.add("dish-wrapper");
    dishPrice.classList.add("price");
    dishTitle.textContent = dishname;
    dishDescription.textContent = description;
    dishPrice.textContent = `$ ${price}`;

}






  
/*     let rat = new menuItem('rat', 'description', 'price')
    console.log(rat.name)

}




class menuItem {
    constructor (name, description, price, img) {
        this.name = name;
        this.description = description;
        this.price = price;
        this.Url = img;  
    }
}

const name = document.createElement('img');
const description = document.createElement('div');
const price = document.createElement('p');
const img = document.createElement('img');

name.classList.add('menu')
description.classList.add('menu')
price.classList.add('menu')
img.classList.add('menu')
 */














/* export function loadMenu() {
    const main = document.querySelector("contentBox");
    main.textContent = "";
    main.appendChild(menu());
} */