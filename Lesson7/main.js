// С Т А Р І   Т А С К И   (js_demos/kminV/Lesson7)

<!--T A S K 1-->
// - Створити довільний елемент с id = text. використовуючи JavaScript, зробіть так, щоб при кліку на кнопку зникавл елемент с id="text".
//1.спосіб.(просто зникає)
// let text = document.getElementById("text");
// let btn = document.getElementById("button1");
//
// btn.onclick = () =>{
//  text.style.display = ("none");
// }
//2.спосіб.(зникає і з'являється). все працює, але коли я пишу дісплей флекс блоку, то нічого не працює.. можливо там якийсь конфілкт між css i js`ом, ну js стоїть з самого низу. треба спитатись.
let text = document.getElementById("text");
let btn1 = document.getElementById("button1");

btn1.onclick = () => {
    text.hidden ? text.hidden = false : text.hidden = true
}

<!--T A S K 2-->
//     - Створіть кнопку, при кліку на яку, вона буде приховувати сама себе.
//1.спосіб
// let btn = document.getElementById("button2");
// btn.onclick = () =>{
//     btn.style.display = ("none");
// }
//2.спосіб. Можемо витягувати потрібні нам значення з кнопки. Target - назва, ссилка на нашу кнопочку.
let btn2 = document.getElementById("button2");
btn2.onclick = event => {
    btn2.hidden ? btn2.hidden = false : btn2.hidden = true;
    console.log(event);
    console.log(event.target);
}
//3.спосіб. В цьому немає як такого сенсу, але ми можемо всередині нашої функції, звернутись до нашої кнопки через event.target.
// let btn = document.getElementById("button2");
// btn.onclick = event => {
//     event.target.hidden ? event.target.hidden = false : event.target.hidden = true;
//     console.log(event);
//     console.log(event.target);
// }

<!--T A S K 3-->
// - Створити інпут який приймає вік людини та кнопку яка підтверджує дію.
// - При натисканні на кнопку зчитати інформацію з інпуту та перевірити вік чи менше він ніж 18, та повідомити про це користувача
let btn3 = document.getElementById("button3");
let input1 = document.getElementById("input1");
btn3.onclick = event => {
    let valueYearOLd = input1.value;
    if (valueYearOLd < 18) {
        alert("See you");
    }
    if (valueYearOLd => 18 && valueYearOLd <= 120) {
        alert("Welcome");
    }
}

<!--T A S K 4-->
// - Створіть меню, яке розгортається/згортається при клику
let a1 = document.getElementById("a1");
let subMenu = document.getElementById("subMenu");

let flag = false;
a1.onclick = event => {
    if (flag) {
        subMenu.style.display = ("block");
        flag = false;
    } else {
        subMenu.style.display = ("none");
        flag = true;
    }
}

<!--T A S K 5-->
// - Створіть список коментарів , приклад об'єкту коментаря - {title : 'lorem', body:'lorem ipsum dolo sit ameti'}.
// Вивести список коментарів в документ, кожний в своєму блоці.
//     Додайте кожному коментарю по кнопці для згортання його body.

let commentArray = [
    {title: 'lorem', body: 'lorem ipsum dolo sit ameti'},
    {title: 'lorem', body: 'lorem ipsum dolo sit ameti'},
    {title: 'lorem', body: 'lorem ipsum dolo sit ameti'},
    {title: 'lorem', body: 'lorem ipsum dolo sit ameti'},
    {title: 'lorem', body: 'lorem ipsum dolo sit ameti'},
    {title: 'lorem', body: 'lorem ipsum dolo sit ameti'},
    {title: 'lorem', body: 'lorem ipsum dolo sit ameti'},
    {title: 'lorem', body: 'lorem ipsum dolo sit ameti'},
    {title: 'lorem', body: 'lorem ipsum dolo sit ameti'}
]

let content = document.getElementById("content");

commentArray.forEach(item => {
    const div = document.createElement("div");
    const h2 = document.createElement("h2");
    const p = document.createElement("p");
    const button = document.createElement("button");
    button.textContent = ("Hide");
    h2.textContent = item.title;
    p.textContent = item.body;
    button.onclick = () => {
        p.hidden ? p.hidden = false : p.hidden = true;
    }
    div.appendChild(h2);
    div.appendChild(p);
    div.appendChild(button);
    content.appendChild(div);
})

//<!--T A S K 6-->
// - Створити 2 форми  по 2 інпути в кожній. створити кнопку при кліку на яку зчитується та виводиться на консоль інформація з цих 2х форм.
//     Кнопка повинна лежати за межами форм (Щоб уникнути  перезавантаження сторінки)
// Доступ до інпутів через Forms API. Отже дайте формі та інпутам всі необхідні атрибути.

const btn = document.getElementById("btn");
const input2 = document.getElementById("input2");
const input3 = document.getElementById("input3");
const input4 = document.getElementById("input4");
const input5 = document.getElementById("input5");

btn.onclick = event => {
    console.log(input2.value);
    console.log(input3.value);
    console.log(input4.value);
    console.log(input5.value);
    // console.log(document.forms.form1.input2.value);
    // console.log(document.forms.form1.input3.value);
    // console.log(document.forms.form2.input4.value);
    // console.log(document.forms.form2.input5.value);
}

//<!--T A S K 7-->
// - Створити функцію, яка генерує таблицю.
//     Перший аргумент визначає кількість строк.
//     Другий параметр визначає кількість ячейок в кожній строці.
//     Третій параметр визначає елемент в який потрібно таблицю додати.
const content2 = document.getElementById("content2");

function createTable(rows, columns, tag) {
    const table = document.createElement("table");
    for (let i = 0; i < rows; i++) {
        const tr = document.createElement("tr");

        for (let j = 0; j < columns; j++) {
            const td = document.createElement("td");
            td.innerHTML = i.toString() + j.toString();
            tr.appendChild(td)
        }
        table.appendChild(tr)
    }
tag.appendChild(table)
}
createTable(10,10,content2);

//<!--T A S K 7-->
// - Напишіть «Карусель» – стрічку зображень, яку можна гортати вліво-вправо нажаттям на стрілочки.


//______________________________________________________________________________________________________________________________________________________
// РОБОТА В АУДИТОРІЇ
// ______________________________________________________________________________________________________________________________________________________
//
//
// - Сворити масив нецензцрних слів.
//     Сворити інпут текстового типу.
//     Якщо людина вводить слово і воно міститься в масиві нецензурних слів кинути алерт з попередженням.
//     Перевірку робити при натисканні на кнопку
// - Сворити масив нецензцрних слів.
//     Сворити інпут текстового типу.
//     Потрібно перевіряти чи не містить ціле речення в собі погані слова.
//     Кинути алерт з попередженням у випадку якщо містить.
//     Перевірку робити при натисканні на кнопку
// -- Створити скрипт, котрий бере зчитує на сторінці (rules.html) текст і робить збоку меню-зміст по всіх заголовках які є в тексті.
//     При кліку на пункт заголовку ви маєте відправлятись  до цього пункту в тексті
// -- Взяти масив юзерів
// const usersWithAddress = [
//     {id: 9, name: 'vasya', age: 31, isMarried: false, address: {city: 'Kyiv', street: 'Gongadze', number: 16}},
//     {id: 2, name: 'petya', age: 30, isMarried: true, address: {city: 'Rivne', street: 'Zelena', number: 1}},
//     {id: 4, name: 'kolya', age: 29, isMarried: true, address: {city: 'Lviv', street: 'Pasichna', number: 121}},
//     {id: 3, name: 'olya', age: 28, isMarried: false, address: {city: 'Rivne', street: 'Shevchenko', number: 90}},
//     {id: 8, name: 'max', age: 30, isMarried: true, address: {city: 'Lviv', street: 'Kriva Lipa', number: 115}},
//     {id: 6, name: 'anya', age: 31, isMarried: false, address: {city: 'Lviv', street: 'Shevchenko', number: 2}},
//     {id: 10, name: 'oleg', age: 28, isMarried: false, address: {city: 'Kyiv', street: 'Centralna', number: 22}},
//     {id: 5, name: 'andrey', age: 29, isMarried: true, address: {city: 'Lviv', street: 'Gorodotska', number: 43}},
//     {id: 1, name: 'masha', age: 30, isMarried: true, address: {city: 'Kyiv', street: 'Peremogi', number: 12}},
//     {id: 7, name: 'olya', age: 31, isMarried: false, address: {city: 'Lviv', street: 'Naukova', number: 16}},
//     {id: 11, name: 'max', age: 31, isMarried: true, address: {city: 'Rivne', street: 'Ivana Franka', number: 121}}
// ];
// Створити три чекбокси. Кожний з них активує фільтр для вищевказаного масиву. Фільтри можуть працювати як разом так і окремо.
// 1й - відфільтровує юзерів зі статусом false (залишає зі статусом false)
// 2й - залишає старших 29 років включно
// 3й - залишає тих в кого місто Київ
// Дані виводить в документ