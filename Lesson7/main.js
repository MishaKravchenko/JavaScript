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
// let text = document.getElementById("text");
// let btn1 = document.getElementById("button1");
//
// btn1.onclick = () => {
//     text.hidden ? text.hidden = false : text.hidden = true
// }

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
// 3.спосіб. В цьому немає як такого сенсу, але ми можемо всередині нашої функції, звернутись до нашої кнопки через event.target.
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

// let commentArray = [
//     {title: 'lorem', body: 'lorem ipsum dolo sit ameti'},
//     {title: 'lorem', body: 'lorem ipsum dolo sit ameti'},
//     {title: 'lorem', body: 'lorem ipsum dolo sit ameti'},
//     {title: 'lorem', body: 'lorem ipsum dolo sit ameti'},
//     {title: 'lorem', body: 'lorem ipsum dolo sit ameti'},
//     {title: 'lorem', body: 'lorem ipsum dolo sit ameti'},
//     {title: 'lorem', body: 'lorem ipsum dolo sit ameti'},
//     {title: 'lorem', body: 'lorem ipsum dolo sit ameti'},
//     {title: 'lorem', body: 'lorem ipsum dolo sit ameti'}
// ]
//
// let content = document.getElementById("content");
//
// commentArray.forEach(item => {
//     const div = document.createElement("div");
//     const h2 = document.createElement("h2");
//     const p = document.createElement("p");
//     const button = document.createElement("button");
//     button.textContent = ("Hide");
//     h2.textContent = item.title;
//     p.textContent = item.body;
//     button.onclick = () => {
//         p.hidden ? p.hidden = false : p.hidden = true;
//     }
//     div.appendChild(h2);
//     div.appendChild(p);
//     div.appendChild(button);
//     content.appendChild(div);
// })

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

createTable(10, 10, content2);

//<!--T A S K 8-->
// - Напишіть «Карусель» – стрічку зображень, яку можна гортати вліво-вправо нажаттям на стрілочки.
let objectArray = [
    {
        id: 1,
        img_url: "1.jpg"
    },
    {
        id: 2,
        img_url: "2.jpg"
    },
    {
        id: 3,
        img_url: "3.jpg"
    },
    {
        id: 4,
        img_url: "4.jpg"
    },
    {
        id: 5,
        img_url: "5.jpg"
    },
    {
        id: 6,
        img_url: "6.jpg"
    }
]
const content3 = document.getElementById("content3");
const img = document.createElement("img");
const btn4 = document.createElement("button");
const btn5 = document.createElement("button");

btn4.textContent = ("Left");
btn5.textContent = ("Right");
let index = 0;
img.style.width = ("300px");
img.style.height = ("300px");
img.src = objectArray[index].img_url;

content3.appendChild(img);
content3.appendChild(btn4);
content3.appendChild(btn5);
btn4.onclick = () => {
    index - 1 < 0
        ? index = objectArray.length - 1
        : index = index - 1;

    img.src = objectArray[index].img_url;
}
btn5.onclick = () => {
    index + 1 > objectArray.length - 1
        ? index = 0
        : index = index + 1;

    img.src = objectArray[index].img_url;
}
//______________________________________________________________________________________________________________________________________________________
// РОБОТА В АУДИТОРІЇ
// ______________________________________________________________________________________________________________________________________________________
//
//<!--T A S K 9-->
// - Сворити масив нецензцрних слів.
//     Сворити інпут текстового типу.
//     Якщо людина вводить слово і воно міститься в масиві нецензурних слів кинути алерт з попередженням.
//     Перевірку робити при натисканні на кнопку
// - Сворити масив нецензцрних слів.
//     Сворити інпут текстового типу.
//     Потрібно перевіряти чи не містить ціле речення в собі погані слова.
//     Кинути алерт з попередженням у випадку якщо містить.
//     Перевірку робити при натисканні на кнопку

// Хули тут так мало?Это наша точка! Ты выёбывался — я те пизды дал, дал.. Ты на пенек сел — должен был косарь отдать.А тут хули так мало, урод, бля, ты? М, уёбок?!
let dangerousGuy = ["хули", "выёбывался", "пизды", "бля", "уёбок"];

let input6 = document.getElementById("input6");
let button4 = document.getElementById("button4");

button4.onclick = () => {

    for (const item of dangerousGuy) {
        let s = input6.value.indexOf(`${item}`);
        if (item === input6.value || s >= 0) {
            alert("Сам такий");
        } else {
            alert("Здарова");
        }
    }
}


//<!--T A S K 10-->
// -- Створити скрипт, котрий бере зчитує на сторінці (rules.html) текст і робить збоку меню-зміст по всіх заголовках які є в тексті.
//     При кліку на пункт заголовку ви маєте відправлятись  до цього пункту в тексті

let arrayH2 = document.getElementsByTagName("h2");
let content4 = document.getElementById("content4");
let wrap = document.getElementById("wrap");
let ul = document.createElement("ul");

for (let i = 0; i < arrayH2.length; i++) {
    let li = document.createElement("li");
    let a = document.createElement("a");
    let yakor = "yakor" + i;
    a.href = "#" + yakor;
    arrayH2[i].setAttribute("id", yakor);
    a.innerHTML = arrayH2[i].innerText;
    li.appendChild(a);
    ul.appendChild(li);
}
content4.appendChild(ul);
content4.style.width = ("30%");
wrap.style.width = ("70%");
content4.style.float = ("left");
wrap.style.float = ("left");

// -- Взяти масив юзерів
// Створити три чекбокси. Кожний з них активує фільтр для вищевказаного масиву. Фільтри можуть працювати як разом так і окремо.
// 1й - відфільтровує юзерів зі статусом false (залишає зі статусом false)
// 2й - залишає старших 29 років включно
// 3й - залишає тих в кого місто Київ
// Дані виводить в документ
const usersWithAddress = [
    {id: 9, name: 'vasya', age: 31, isMarried: false, address: {city: 'Kyiv', street: 'Gongadze', number: 16}},
    {id: 2, name: 'petya', age: 30, isMarried: true, address: {city: 'Rivne', street: 'Zelena', number: 1}},
    {id: 4, name: 'kolya', age: 29, isMarried: true, address: {city: 'Lviv', street: 'Pasichna', number: 121}},
    {id: 3, name: 'olya', age: 28, isMarried: false, address: {city: 'Rivne', street: 'Shevchenko', number: 90}},
    {id: 8, name: 'max', age: 30, isMarried: true, address: {city: 'Lviv', street: 'Kriva Lipa', number: 115}},
    {id: 6, name: 'anya', age: 31, isMarried: false, address: {city: 'Lviv', street: 'Shevchenko', number: 2}},
    {id: 10, name: 'oleg', age: 28, isMarried: false, address: {city: 'Kyiv', street: 'Centralna', number: 22}},
    {id: 5, name: 'andrey', age: 29, isMarried: true, address: {city: 'Lviv', street: 'Gorodotska', number: 43}},
    {id: 1, name: 'masha', age: 30, isMarried: true, address: {city: 'Kyiv', street: 'Peremogi', number: 12}},
    {id: 7, name: 'olya', age: 31, isMarried: false, address: {city: 'Lviv', street: 'Naukova', number: 16}},
    {id: 11, name: 'max', age: 31, isMarried: true, address: {city: 'Rivne', street: 'Ivana Franka', number: 121}}
];

const content5 = document.getElementById("content5");
const userDiv = document.createElement("div");
userDiv.className = "user";
userDiv.appendChild(renderContent(usersWithAddress));

const input7 = document.createElement("input");
const input8 = document.createElement("input");
const input9 = document.createElement("input");

const label1 = document.createElement("label");
const label2 = document.createElement("label");
const label3 = document.createElement("label");

const button5 = document.createElement("button");

label1.innerText = "со статусом false";
label2.innerText = "старше 29 лет";
label3.innerText = "город Киев";

button5.innerText = "F I L T E R";

// тип інпута "checkbox";
input7.type = "checkbox";
input8.type = "checkbox";
input9.type = "checkbox";

content5.appendChild(userDiv);

content5.appendChild(label1);
content5.appendChild(input7);
content5.appendChild(label2);
content5.appendChild(input8);
content5.appendChild(label3);
content5.appendChild(input9);

content5.appendChild(button5);

button5.onclick = () => {
// спосіб ствоерення копії масиву, щоб не змінити первоначальний, хоча і фільтр не змінює . . .
    let myArray = JSON.parse(JSON.stringify(usersWithAddress))
// якшо інпут вибраний checked - то . . .
    if (input7.checked) myArray = myArray.filter(value => !value.isMarried);
    if (input8.checked) myArray = myArray.filter(value => value.age >= 29);
    if (input9.checked) myArray = myArray.filter(value => value.address.city === "Kyiv");

    userDiv.innerHTML = " ";
    userDiv.appendChild(renderContent(myArray))
}

function renderContent(array) {
    const main = document.createElement("div");
    array.forEach(item => {
        const div = document.createElement("div");
        div.innerHTML = JSON.stringify(item);

        main.appendChild(div);
    })
    return main
}

