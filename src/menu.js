
export function menuPage() {
    const contentBox = document.querySelector('.content-box')
    contentBox.textContent = ''
    menuList()
   
}

function menuList() {
    createDish('Souffle Cheesecake',15,'Lilikoi coulis, crème fraiche, blood orange guimauve');
    createDish('Opera Cake',12,'Rum chocolate sponge, coffee butter cream, ganache, chocolate cream, Kona coffee ice cream');
    createDish('Honey Lemon Tart',15,'Lemon curd, yogurt cream, chocolate crunch, mascarpone mousse, honeycomb toffee, chocolate ice cream');
    createDish('Souffle Cheesecake',15,'Lilikoi coulis, crème fraiche, blood orange guimauve');
    createDish('Tableside Bananas Foster', 21, 'Caramelized bananas, banana liqueur, rum and brandy, vanilla bean ice cream')
    createDish('Baked Alaska', 18,'Vanilla Lush Cake, Macadamia Nut Ice Cream, Italian meringue, blended flaming liqueurs')
    createDish('Spiced Apple Bread Pudding',15,'Cinnamon spiced apple-walnut bread baked in custard, warm toffee sauce, vanilla ice cream');
    createDish('Chocolate Peanut Butter Truffle', 18, 'Peanut butter cream, caramel milk chocolate mousse, peanut butter crunch, oreo brownie, served with banana caramel ice cream')
    createDish('Framboise Macadamia Decadence',27, 'Dense, creamy, smooth chocolate creation baked in a macadamia nut crust, chocolate raspberry cream, fresh raspberries')
    createDish('The Roasted Pineapple', 17,'Warm pineapple upside down cake, vanilla ice cream, roasted pineapple - rum caramel sauce')

}


function createDish(dishname, price, description) {
    const contentBox = document.querySelector('.content-box')
    const dishWrapper = document.createElement("div");
    const dishTitle = document.createElement("h4");
    const dishDescription = document.createElement("p");
    const dishPrice = document.createElement("p");

    dishWrapper.appendChild(dishTitle);
    dishTitle.classList.add("dish-title")
    dishWrapper.appendChild(dishDescription);
    dishWrapper.appendChild(dishPrice);
    contentBox.appendChild(dishWrapper);

    dishWrapper.classList.add("dish-wrapper");
    dishPrice.classList.add("price");
    dishTitle.textContent = dishname;
    dishDescription.textContent = description;
    dishPrice.textContent = `${price}`;

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