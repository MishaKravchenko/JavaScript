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
//Delitsiya -----https://content.rozetka.com.ua/goods/images/original/64933294.jpg
//Kinder --------https://content1.rozetka.com.ua/goods/images/original/234510025.jpg
//MsM ---------- https://content2.rozetka.com.ua/goods/images/original/232102118.jpg
//////////////////////////////////////////////////////////////////////////////////////////

let ARRAY_PRODUCTS = "ARRAY_PRODUCTS";
let tempProduct = {};
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

let aList = document.createElement('a');
aList.setAttribute('href', 'list.html');
aList.innerText = 'Show all products';

document.body.appendChild(aList);