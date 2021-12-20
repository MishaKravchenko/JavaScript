// - Імітуємо наповнення інтернет магазину товарами :
//     Створити форму з наступними полями :
//     - назва товару
// - кількість товару
// - ціна товару
// - картинка товару (посилання з інтернету)
// Зберігати товари в масив в локалсорадж. При збережені товару з форми, action не повинно відбуватись (preventDefault)
// створити елемент <a href='list.html'> На сторінку товарів</a>, та list.html, при переході на який відобразити на сторінці всі товари.
// На сторінці  list.html побудувати кнопку яка видаляє всі товари з корзини та локалстораджа.
//     До кожного товару додати кнопку, при кліку на яку з лс видаляється конкретний обраний  товар

//////////////////////////////////////////////////////////////////////////////////////////
//https://content.rozetka.com.ua/goods/images/original/230188039.jpg
//https://content.rozetka.com.ua/goods/images/original/64933294.jpg
//https://content1.rozetka.com.ua/goods/images/original/234510025.jpg
//////////////////////////////////////////////////////////////////////////////////////////

let ARRAY_PRODUCTS = "ARRAY_PRODUCTS";
let tempProduct = {};
let content = document.getElementById("content");
content.style.display = "flex";
content.style.flexFlow = "row wrap";
const form1 = document.forms.form1;

//1.1.
form1.submit1.onclick = ev => {
    // ev.preventDefault();
    let product = {...tempProduct};
    tempProduct = {};
    for (let i = 0; i < form1.children.length; i++) {
        const form1Element = form1.children[i];
        if (form1Element.name && form1Element.type !== "submit") {
            product[form1Element.name] = form1Element.value;
        }
    }
    if (!product.id) {
        product.id = new Date().getTime();
    }
    console.log("person");
    console.log(product);
    saveProduct(product);
}
getDataFromLSt()

//2.1.
function saveProduct(candy) {
    if (localStorage.hasOwnProperty(ARRAY_PRODUCTS)) {
        const arrayCandies = JSON.parse(localStorage.getItem(ARRAY_PRODUCTS));
        const find = arrayCandies.find(value => value.id === candy.id);
        if (find) {
            const filter = arrayCandies.filter(value => value.id !== candy.id);
            filter.push(candy);
            localStorage.setItem(ARRAY_PRODUCTS, JSON.stringify(filter));
        } else {
            arrayCandies.push(candy)
            localStorage.setItem(ARRAY_PRODUCTS, JSON.stringify(arrayCandies));
        }
    } else {
        localStorage.setItem(ARRAY_PRODUCTS, JSON.stringify([candy]))
    }
}

//3.1.
function getDataFromLSt() {
    if (localStorage.hasOwnProperty(ARRAY_PRODUCTS)) {
        const arrCandy = JSON.parse(localStorage.getItem(ARRAY_PRODUCTS))
        for (const candy of arrCandy) {
            content.appendChild(createDivCandy(candy));
        }
    }
}

// 4.1
function createDivCandy(candy) {
    const main = document.createElement("div");
    for (const key in candy) {
        if (key === "name") {
            const h1 = document.createElement("h1");
            h1.innerText = candy[key];
            main.appendChild(h1);
        } else if (key === "img"){
            const img = document.createElement("img");
            img.src = candy[key];
            main.appendChild(img);
            img.style.width = "200px";
        }else {
            const p = document.createElement("p");
            p.innerText = key + " : " + candy[key];
            main.appendChild(p);
        }
    }
    main.style = "width: 300px; border:red 1px solid; display:flex; flex-flow: column; align-items:center; justify-content: space-between;";

    const b2 = document.createElement("button");
    b2.innerText = "Delete";
    main.appendChild(b2);

    b2.onclick = function () {
        deleteUser(candy.id);
    }

    return main;
}

//5.1
function deleteUser(id) {
    const parse = JSON.parse(localStorage.getItem(ARRAY_PRODUCTS));
    const filter = parse.filter(candy => candy.id !== id);
    localStorage.setItem(ARRAY_PRODUCTS, JSON.stringify(filter));
    location.reload() //перезавантажує сторніку з поточним url
}
