// ______________________________________________________________________________________________________________________________________________________
// РОБОТА В АУДИТОРІЇ
// ______________________________________________________________________________________________________________________________________________________
//
// Взяти файл template_2.html та працювати в ньому

// 1) Напишіть код, який :
// a) змінює колір тексту елемнту з ід main_header на назву групи (mon-year);
let main_header =document.getElementById("main_header");
main_header.style.color =("red");
main_header.textContent = ("sep2o21");

// b) робить шириниу елементу ul 400px
let uelka = document.getElementsByTagName("ul");
for (let i=0;i<uelka.length;i++){
    uelka[i].style.width = ("400px");
    uelka[i].style.backgroundColor = ("yellow");
    uelka[i].style.paddingLeft = ("0")
}
 let li = document.getElementsByTagName("li")
for (let i =0;i<li.length;i++){
    li[i].style.listStyleType = ("none");
}

// c) робить шириниу всіх елементів з класом linkList шириною 50%
let linkList = document.getElementsByClassName("linkList");
for (let i=0;i<linkList.length;i++){
    linkList[i].style.width = ("50%");
    linkList[i].style.backgroundColor = ("orange");
}

// d) отримує текст який зберігається в елементі з класом listElement2
let listElement2 =document.getElementsByClassName("listElement2");
for (let i = 0;i<listElement2.length;i++){
    console.log(listElement2[i].textContent)
}

// e) отримує всі елементи li та змінює ім колір фону на сірий
document.getElementsByTagName("li");
for (let i=0;i<li.length;i++){
    li[i].style.backgroundColor = ("grey");
}

// f) отримує всі елементи 'a' та додає їм клас anchor
let a = document.getElementsByTagName("a");
for (let i=0;i<a.length;i++){
    a[i].classList.add("anchor");
}
// // classList.add("anchor") - додає клас, classList.remove("anchor") - прибирає його.

// g) отримує всі елементи 'a' та у випадку, якщо текстовий контен елементу дорівнює link3, змінює йому розмір тексту на 40 пікселів
document.getElementsByTagName("a");
for (let i=0;i<a.length;i++){
    if (a[i].textContent==="link3"){
        a[i].style.fontSize=("40px");
    }
}

// h) отримує всі елементи 'a' та додає їм клас element_XXX. Де XXX - текстовий контент елементу a
document.getElementsByTagName("a");
for (let i=0;i<a.length;i++){
    a[i].classList.add("element_XXX");
    a[i].textContent = ("XXX");
}

// i) отримує всі елементи 'sub-header' та змінює колір фону. Фон отримати з prompt()
// let subHeader = document.getElementsByClassName("sub-header");
// let color = prompt("Введіть колір");
// for (let i =0;i<subHeader.length;i++){
//     subHeader[i].style.backgroundColor = (`${color}`);
// }

// j) отримує всі елементи 'sub-header' та змінює колір тексту у видаку якщо текст елемнту = content 2 segment . Колір отримати з prompt()
// let subHeader = document.getElementsByClassName("sub-header");
// let color = prompt("Введіть колір");
// for (let i =0;i<subHeader.length;i++){
//     if (subHeader[i].textContent ===("content 2 segment")){
//         subHeader[i].style.color = (`${color}`);
//     }
// }

// k) отримує елемент з класом content_1 та заміняє  в ньому тест на довільний. Текст отримати з prompt().
// let content_1 = document.getElementsByClassName("content_1");
// let text = prompt("Введіть текст");
// for (let i =0;i<content_1.length;i++){
//     content_1[i].textContent = (`${text}`);
// }

// l) отримати елементи p та змінити їм padding на 20px
let p = document.getElementsByTagName("p");
for (let i=0;i<p.length;i++){
    p[i].style.padding = ("20px");
}

// m) отримати елементи з класом text2 та змінити їм текст на назву групи (mon-year)
let text2 = document.getElementsByClassName("text2");
for (let i=0;i<text2.length;i++){
    text2[i].textContent = ("sep2o21");
}

// 2) Є масив котрий характеризує правила.
//     Створити скрипт який ітерує цей масив, та робить кожне правило в окремому блоці.
//     При цому в блоці, номер правила записати в свій блок, текст правила записати в свій окремий блок.
//     Результатом відпрацювання скріпта повинна бути така ж структура яка міститься в файлі rules.html
//
let rules = [
    {
        title: 'Первое правило Бойцовского клуба.',
        body: 'Никому не рассказывать о Бойцовском клубе.'
    },
    {
        title: 'Второе правило Бойцовского клуба.',
        body: 'Никогда никому не рассказывать о Бойцовском клубе.'
    },
    {
        title: 'Третье правило Бойцовского клуба.',
        body: 'В схватке участвуют только двое.'
    },
    {
        title: 'Четвертое правило Бойцовского клуба.',
        body: 'Не более одного поединка за один раз.'
    },
    {
        title: 'Пятое правило Бойцовского клуба.',
        body: 'Бойцы сражаются без обуви и голые по пояс.'
    },
    {
        title: 'Шестое правило Бойцовского клуба.',
        body: 'Поединок продолжается столько, сколько потребуется.'
    },
    {
        title: 'Седьмое правило Бойцовского клуба.',
        body: 'Если противник потерял сознание или делает вид, что потерял, или говорит «Хватит» — поединок окончен.'
    },
    {
        title: 'Восьмое и последнее правило Бойцовского клуба.',
        body: 'Новичок обязан принять бой.'
    }
];

for (let i=0;i<rules.length;i++){

}










// ===========================================================================
//
// - Дано 2 масиви з рівною кількістю об'єктів.
// Масиви:
//     let usersWithId = [
//         {id: 1, name: 'vasya', age: 31, status: false},
//         {id: 2, name: 'petya', age: 30, status: true},
//         {id: 3, name: 'kolya', age: 29, status: true},
//         {id: 4, name: 'olya', age: 28, status: false}
//     ];
//
// let citiesWithId = [
//     {user_id: 3, country: 'USA', city: 'Portland'},
//     {user_id: 1, country: 'Ukraine', city: 'Ternopil'},
//     {user_id: 2, country: 'Poland', city: 'Krakow'},
//     {user_id: 4, country: 'USA', city: 'Miami'}
// ];
//
// З'єднати в один об'єкт користувача та місто з відповідними "id" та "user_id" .
//     Записати цей об'єкт в новий масив
// Example:
//     let usersWithCities = [
//         {
//             id: 1, // <===
//             name: 'vasya',
//             age: 31,
//             status: false,
//             address: {
//                 user_id: 1, // <===
//                 country: 'Ukraine',
//                 city: 'Ternopil'
//             }
//         },
//         // TO BE CONTINUED .....
//