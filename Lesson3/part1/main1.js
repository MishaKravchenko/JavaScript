// С Т А Р І  Т А С К И (js_demos/kminV/Lesson3/)
// Н О В І  Т А С К И (js_demos/js/preview/lesson8/)
// ВОНИ СПІВПАДАЮТЬ

// - Візьміть файл template1.html, підключіть до нього скрипт, і працюйте в ньому.
// 1) Напишіть код,  який за допомоги document.getElementById або document.getElementsByClassName або document.getElementsByTagName :
// a) отримує текст з параграфа з id "content"
let content = document.getElementById("content");
console.log(content.textContent);

// b) отримує текст з блоку з id "rules"
let rules = document.getElementById("rules");
console.log(rules.textContent);

// c) замініть текст параграфа з id 'content' на будь-який інший
content.textContent = ("Signed by the Dodgers as a free agent in 1984, Hernández became the second Venezuelan catcher in MLB history, following Bo Díaz. He made his major league debut in the 1990 season, basically as a backup for Mike Scioscia. A high skilled defensive player, Hernández spent his Dodgers career as mainly a back-up catcher to Scioscia and Mike Piazza, appearing in 230 games, including 133 starts. He signed as a free agent with San Diego and later was traded to the Cardinals.");
console.log(content.textContent);

// d) замініть текст параграфа з id 'rules' на будь-який інший
rules.textContent = ("Subreddit to help you find streams for every NBA game in one place with community provided streams. watch, free, basketball, online, regular, finals, regular, season, summer, league, championship, nba draft, nba schedule, nbastreams reddit, reddit nba streams, reddit nba live, nba scores, live nba, espn live, nba 2020 - 2021. Watch official NHL games streams in HD @60fps for free with the NHLGames application on Windows. Every game provides at least 3 different TV networks in French and in English. You can stream a live game, rewind it, replay it, or even download it to a file.")

// e) змініть кожному елементу колір фону на червоний
// f) змініть кожному елементу колір тексту на синій
content.style.backgroundColor = ("orange");
content.style.color = ("grey");

rules.style.backgroundColor = ("grey");
rules.style.color = ("orange");

// g) отримати весь список класів елемента з id=rules і вивести їх в console.log
let rulesClass = document.getElementsByClassName('fc bp')
console.log(rulesClass);

// h) отримати всі елементи з класом fc_rules

let fc_rules = document.getElementsByClassName("fc_rules");
console.log(fc_rules)

// i) поміняти колір тексту у всіх елементів fc_rules на червоний
for (let i = 0; i < fc_rules.length; i++) {
    fc_rules[i].style.color = ("red");
    fc_rules[i].style.backgroundColor = ("yellow");
}

////________________________________________________________________________________________________
let users = [{
    name: 'vasya',
    age: 31,
    status: false,
    address: { city: 'Lviv', country: 'Ukraine', street: 'Shevchenko', houseNumber: 1 }
}, {
    name: 'petya',
    age: 30,
    status: true,
    address: { city: 'New York', country: 'USA', street: 'East str', houseNumber: 21 }
}, {
    name: 'kolya',
    age: 29,
    status: true,
    address: { city: 'Budapest', country: 'Hungary', street: 'Kuraku', houseNumber: 78 }
}, {
    name: 'olya',
    age: 28,
    status: false,
    address: { city: 'Prague', country: 'Czech', street: 'Paster', houseNumber: 56 }
}, {
    name: 'max',
    age: 30,
    status: true,
    address: { city: 'Istanbul', country: 'Turkey', street: 'Mikar', houseNumber: 39 }
}, {
    name: 'anya',
    age: 31,
    status: false,
    address: { city: 'Rio', country: 'Brasil', street: 'Ronaldi', houseNumber: 5 }
}, {
    name: 'oleg',
    age: 28,
    status: false,
    address: { city: 'Montreal', country: 'Canada', street: 'Acusto', houseNumber: 90 }
}, {
    name: 'andrey',
    age: 29,
    status: true,
    address: { city: 'Quebeck', country: 'Canada', street: 'Binaro', houseNumber: 33 }
}, {
    name: 'masha',
    age: 30,
    status: true,
    address: { city: 'Moscow', country: 'Russia', street: 'Gogolia', houseNumber: 1 }
}, {
    name: 'olya',
    age: 31,
    status: false,
    address: { city: 'Portland', country: 'USA', street: 'Forest str', houseNumber: 4 }
}, {
    name: 'max',
    age: 31,
    status: true,
    address: { city: 'Cairo', country: 'Egypt', street: 'Seashore', houseNumber: 45 }
}];

// 1) За допомоги циклу проітерувати  масив users, записати кожного юзера в сівй блок за допомоги document.createElement.
//     Вставити цей блок на сторінку

for (let i = 0; i < users.length; i++) {
    console.log(users[i]);
    let userDiv = document.createElement("div");
    userDiv.textContent = (`${users[i].name} - -  ${users[i].age}, ${users[i].status}`);
    document.body.appendChild(userDiv);
}

// 2) Блок з адресою зробити окремим блоком, з блоками для кожної властивості

// 1 спроба

// for (let i = 0; i < users.length; i++) {
//
//
//     let userDivAddress = document.createElement("div");
//
//     document.body.appendChild(userDivAddress)
//
//     let city = document.createElement("div");
//     let country = document.createElement("div");
//     let street = document.createElement("div");
//     let houseNumber = document.createElement("div");
//
//     city.textContent = (`Місто ${users[i].address.city}`);
//     country.textContent = (`Країна ${users[i].address.country}`);
//     street.textContent = (` Вулиця${users[i].address.street}`);
//     houseNumber.textContent = (`Номер будинку ${users[i].address.houseNumber}`);
//
//     document.body.appendChild(city);
//     document.body.appendChild(country);
//     document.body.appendChild(street);
//     document.body.appendChild(houseNumber);
// }

// 2 спроба (document.body.appendChild(city);)
// БЕЗ ДОКУМЕНТА! просто батьківський тег чи змінна крапка аппенчайлд (дочірня).
//(*&^%$#$%^&*((*&^%$#$%^&*()*&^%$#$%^&*()(*&^%$#$%^&*()(*&^%$%^&*)

// for (let i = 0; i < users.length; i++) {
//
//     let userDivAddress = document.createElement("div");
//
//     userDivAddress.style.backgroundColor = ("orange");
//     userDivAddress.style.marginBottom = ("10px");
//     userDivAddress.style.width = ("20%");
//     userDivAddress.style.padding = ("100px 0");
//     userDivAddress.style.textAlign = ("center");
//     userDivAddress.textContent = ("pariruri pariram");
//
//     document.body.appendChild(userDivAddress);
//
//     let city = document.createElement("div");
//     let country = document.createElement("div");
//     let street = document.createElement("div");
//     let houseNumber = document.createElement("div");
//
//     city.textContent = (`Місто ${users[i].address.city}`);
//     country.textContent = (`Країна ${users[i].address.country}`);
//     street.textContent = (` Вулиця${users[i].address.street}`);
//     houseNumber.textContent = (`Номер будинку ${users[i].address.houseNumber}`);
//
//     userDivAddress.appendChild(city);
//     userDivAddress.appendChild(country);
//     userDivAddress.appendChild(street);
//     userDivAddress.appendChild(houseNumber);
//
// }

// 3. За допомоги циклу проітерувати  масив users, записати кожного юзера в сівй блок за допомоги document.createElement. Всі данні в одному блоці.

// let arr = [];
// users.forEach(item => {
//     for (let key in item) {
//         if (key === "address")
//             arr.push(item[key])
//     }
// })
// console.log(arr);
