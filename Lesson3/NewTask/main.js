// Н О В І  Т А С К И (js_demos/js/preview/lesson9/)

// T A S K 1

// - є масив
// Проітерувати його, створиши для кожного елементу масиву <div class='member'>.
// - взяти попередній масив з сімпсонами.
//     Проітерувати його, створиши для кожного елементу масиву <div class='member'>. Для кожної властивості елементу створити окремий блок, та помістити його у div.member

// let simpsons = [
//     {
//         name: 'Bart',
//         surname: 'Simpson',
//         age: 10,
//         info: 'Бартолом\'ю ДжоДжо «Барт» Сімпсон (англ. Bartholomew JoJo «Bart» Simpson) — один із головних героїв мультиплікаційного серіалу Сімпсони. Барт — найстарша дитина Гомера і Мардж Сімпсон. У нього також є дві молодші сестри — Ліса і Меґґі. Барт є втіленням образу бешкетника та посереднього учня у школі. Разом зі своїм батьком Барт є одним із найвідоміших персонажів у цьому серіалі.',
//         photo: 'https://upload.wikimedia.org/wikipedia/uk/a/aa/Bart_simpson.png'
//     },
//     {
//         name: 'Homer',
//         surname: 'Simpson',
//         age: 40,
//         info: 'Гомер Джей Сімпсон (англ. Homer Jay Simpson) — один із головних героїв мультсеріалу «Сімпсони». Гомер — грубий і неввічливий батько родини, він має очевидні вади: товстий, лисий і не дуже розумний. Нерідко він поводиться як блазень, абсурдно, егоїстично і нетактовно, але все ж лишається симпатичним.',
//         photo: 'http://upload.wikimedia.org/wikipedia/en/0/02/Homer_Simpson_2006.png'
//     },
//     {
//         name: 'Marge',
//         surname: 'Simpson',
//         age: 38,
//         info: 'Ма́рджори Жакли́н «Мардж» Си́мпсон (в девичестве Бувье́) (англ. Marjorie Jacqueline «Marge» Simpson) — постоянный персонаж мультипликационного сериала «Симпсоны», её озвучивает Джулия Кавнер. Обычно носит зелёное платье, красные балетки, на шее — ожерелье из искусственного жемчуга и ездит на оранжевом универсале. У неё шикарные синие волосы, которые она обычно собирает в очень высокую причёску. Глаза цвета ореха (19s6e). Основное занятие — домохозяйка, большую часть времени проводит в заботе о доме, детях и Гомере. Образ Мардж копирует стереотип провинциальной американской домохозяйки 50-х годов. Мардж — единственный член семьи, посещающий церковь добровольно. Старается поддерживать нравственность не только своей семьи, но и всего города. Отлично готовит, особенно славятся её свиные отбивные и зефир. Любимое блюдо — лапша с маслом.',
//         photo: 'https://upload.wikimedia.org/wikipedia/ru/0/0b/Marge_Simpson.png'
//     },
//     {
//         name: 'Lisa',
//         surname: 'Simpson',
//         age: 9,
//         info: 'Ли́за Мари́ Си́мпсон (англ. Lisa Marie Simpson) — героиня мультипликационного сериала «Симпсоны». Средний ребёнок в семье, восьмилетняя девочка, выделяющаяся среди остальных Симпсонов прежде всего своим умом и рассудительностью.',
//         photo: 'https://upload.wikimedia.org/wikipedia/ru/e/ec/Lisa_Simpson.png'
//     },
//     {
//         name: 'Maggie',
//         surname: 'Simpson',
//         age: 1,
//         info: 'Ма́ргарет Эвелин «Мэ́гги» Си́мпсон (англ. Margaret Evelyn “Maggie” Simpson) — персонаж мультсериала «Симпсоны». Впервые появилась на телевидении в шоу Трейси Ульман, в короткометражке Good Night (англ.)русск. 19 апреля 1987 года. Мэгги была придумана и разработана карикатуристом Мэттом Грейнингом, пока он ждал встречи с Джеймсом Л. Бруксом. Названа в честь младшей сестры Грейнинга. После появления в шоу Трейси Ульман, через три года семья Симпсонов получила собственный сериал на телеканале Fox, дебют произошёл 17 декабря 1989 года.',
//         photo: 'https://upload.wikimedia.org/wikipedia/ru/9/9d/Maggie_Simpson.png'
//     },
// ];
// let generalDiv = document.createElement("div");
// generalDiv.classList.add("general")
// document.body.appendChild(generalDiv);
//
// for (const item of simpsons) {
//     let divElement = document.createElement("div");
//     divElement.classList.add("member");
//     generalDiv.appendChild(divElement);
//
//     for (let key in item) {
//         if (key !== "photo") {
//             if (key === "name"){
//                 let h3Element1 = document.createElement("h3");
//                 h3Element1.innerText = `${key} : ${item[key]}`
//                 divElement.appendChild(h3Element1);
//
//             }else{
//                 let divElement1 = document.createElement("div");
//                 divElement1.innerText = `${key} : ${item[key]}`
//                 divElement.appendChild(divElement1);
//             }
//         } else {
//             let img = document.createElement("img");
//             img.src = item[key];
//             divElement.appendChild(img);
//         }
//     }
// }

// T A S K 2

// - Є масив
// Створити для кожного елементу масиву свій блок, блок розділити блоками, в яких будуть зберігатись значення окремих властивостей, для властивості modules зробити список з елементами
// Приклад структири знаходиться у файлі example.png

// let coursesArray = [
//     {
//         title: 'JavaScript Complex',
//         monthDuration: 5,
//         hourDuration: 909,
//         modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'react', 'angular', 'aws', 'docker', 'git', 'node.js']
//     },
//     {
//         title: 'Java Complex',
//         monthDuration: 6,
//         hourDuration: 909,
//         modules: ['html',
//             'css',
//             'js',
//             'mysql',
//             'mongodb',
//             'angular',
//             'aws',
//             'docker',
//             'git',
//             'java core',
//             'java advanced']
//     },
//     {
//         title: 'Python Complex',
//         monthDuration: 6,
//         hourDuration: 909,
//         modules: ['html',
//             'css',
//             'js',
//             'mysql',
//             'mongodb',
//             'angular',
//             'aws',
//             'docker',
//             'python core',
//             'python advanced']
//     },
//     {
//         title: 'QA Complex',
//         monthDuration: 4,
//         hourDuration: 909,
//         modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'git', 'QA/QC']
//     },
//     {
//         title: 'FullStack',
//         monthDuration: 7,
//         hourDuration: 909,
//         modules: ['html',
//             'css',
//             'js',
//             'mysql',
//             'mongodb',
//             'react',
//             'angular',
//             'aws',
//             'docker',
//             'git',
//             'node.js',
//             'python',
//             'java']
//     },
//     {
//         title: 'Frontend',
//         monthDuration: 4,
//         hourDuration: 909,
//         modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'react', 'angular', 'aws', 'docker', 'git', 'sass']
//     }
// ];
//
// // Не забувати за forEach, класна штука.
// // itemDiv.append(titleH3, durationDiv, modulesUl); (append) - - можна перелічити безліч дочірніх змін.
//
// coursesArray.forEach(item=>{
//     let itemDiv = document.createElement("div");
//     let titleH3 = document.createElement("h3");
//     let durationDiv = document.createElement("div");
//     let monthDiv = document.createElement("div");
//     let hourDiv = document.createElement("div");
//     durationDiv.append(monthDiv, hourDiv);
//     durationDiv.style.display = "flex";
//     durationDiv.style.flexFlow = "column";
//
//     let modulesUl = document.createElement("ul");
//     titleH3.innerText = item.title;
//     monthDiv.innerText = (`monthDuration : ${item.monthDuration}`);
//     hourDiv.innerText = (`hourDuration : ${item.hourDuration}`);
//     item.modules.forEach(module=>{
//         let moduleLi = document.createElement("li");
//         moduleLi.innerText = module
//         modulesUl.appendChild(moduleLi)
//     })
//     itemDiv.append(titleH3, durationDiv, modulesUl);
//     document.body.appendChild(itemDiv)
// })

// T A S K 3

// Все робити за допомоги js.
// - створити блок,
//     - додати йому класи wrap, collapse, alpha, beta
// - додати стилі(довільні значення) : колір фону, колір тексту, розмір тексту
// - додати цей блок в body.
// - клонувати його повністю, та додати клон в body.

// let divElement = document.createElement("div");
// divElement.classList.add("wrap", "collapse", "alpha", "beta");
// divElement.textContent = ("lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum ")
// // divElement.setAttribute()
// divElement.style = "background-color: orange; border:green 10px solid; width: 50%; color: green; font-size:25px; margin:10px;";
// document.body.appendChild(divElement);
// // все що ми будем змінювати в першому блоці, буде змінюватись і в клонованому. а якщо змінюєм клонований то тільки в клонованому
// let cloneDiv = divElement.cloneNode(true);
// document.body.appendChild(cloneDiv);

// T A S K 4

// - Є масив:
//     ['Main','Products','About us','Contacts']
// Взяти файл index.html та додати в нього скріпт котрий для кожного елементу масиву створює li та додає його до блоку .menu
// Завдання робити через цикли.

// let arr = ['Main','Products','About us','Contacts'];
// let ul = document.getElementsByClassName("menu")[0];
// arr.forEach(item=>{
//     let li = document.createElement("li");
//     li.innerText = item;
//     ul.appendChild(li);
// })

// T A S K 5

// - Є масив
// Для кожного елементу масиву зробити блок в якому вивести інформацію про title та monthDuration
// Завдання робити через цикли.

// let coursesAndDurationArray = [
//     {title: 'JavaScript Complex', monthDuration: 5},
//     {title: 'Java Complex', monthDuration: 6},
//     {title: 'Python Complex', monthDuration: 6},
//     {title: 'QA Complex', monthDuration: 4},
//     {title: 'FullStack', monthDuration: 7},
//     {title: 'Frontend', monthDuration: 4}
// ];
//
// let generalDiv = document.createElement("div");
// document.body.appendChild(generalDiv);
//
// coursesAndDurationArray.forEach(item=>{
//     let div = document.createElement("div");
//     generalDiv.appendChild(div);
//     for (const key in item) {
//         div.innerText += `${key}:  ${item[key]} - - `
//     }
// })

// T A S K 6

// - Є масив
// За допомоги скріпта для кожного елементу масиву зробити <div class='item'> ,  в якому буде <h1 class='heading'>  з title  елементу, та <p class='description'> з monthDuration елементу.
//     Завдання робити через цикли.

// let coursesAndDurationArray = [
//     {title: 'JavaScript Complex', monthDuration: 5},
//     {title: 'Java Complex', monthDuration: 6},
//     {title: 'Python Complex', monthDuration: 6},
//     {title: 'QA Complex', monthDuration: 4},
//     {title: 'FullStack', monthDuration: 7},
//     {title: 'Frontend', monthDuration: 4}
// ];
//
// coursesAndDurationArray.forEach(item=>{
//     let divElement = document.createElement("div");
//     divElement.classList.add("item");
//     document.body.appendChild(divElement);
//     for (const key in item) {
//         if (key === "title"){
//             let h1Element = document.createElement("h1");
//             h1Element.classList.add("heading");
//             h1Element.innerText = `${key} - - ${item[key]}`
//             divElement.appendChild(h1Element);
//         }else{
//             let pElement = document.createElement("p");
//             pElement.classList.add("description");
//             pElement.innerText = `${key} - - ${item[key]}`
//             divElement.appendChild(pElement);
//         }
//     }
// })

// T A S K 7

// - Є масив :
//     Створити під кожен елемент коремий блок. В цьому блоціт, під кожну властивісь, створити окремий блок. Для властивості modules зробити список в цьому ж  блоці (в якому знаходиться все)
// let courses = [
//     {
//         title: 'JavaScript Complex',
//         monthDuration: 5,
//         hourDuration: 909,
//         modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'react', 'angular', 'aws', 'docker', 'git', 'node.js'],
//         logo: '',
//         price: 0,
//         rating: 5,
//         avgResult: 99
//     },
//     {
//         title: 'Java Complex',
//         monthDuration: 6,
//         hourDuration: 909,
//         modules: ['html',
//             'css',
//             'js',
//             'mysql',
//             'mongodb',
//             'react',
//             'angular',
//             'aws',
//             'docker',
//             'git',
//             'java core',
//             'java advanced'],
//         logo: '',
//         price: 0,
//         rating: 4.998,
//         avgResult: 97
//     },
//     {
//         title: 'Python Complex',
//         monthDuration: 6,
//         hourDuration: 909,
//         modules: ['html',
//             'css',
//             'js',
//             'mysql',
//             'mongodb',
//             'react',
//             'angular',
//             'aws',
//             'docker',
//             'git',
//             'python core',
//             'python advanced'],
//         logo: '',
//         price: 0,
//         rating: 4.812,
//         avgResult: 98
//     },
//     {
//         title: 'QA Complex',
//         monthDuration: 4,
//         hourDuration: 909,
//         modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'react', 'angular', 'aws', 'docker', 'git', 'QA/QC'],
//         logo: '',
//         price: 0,
//         rating: 4.65,
//         avgResult: 97
//     },
//     {
//         title: 'FullStack',
//         monthDuration: 7,
//         hourDuration: 909,
//         modules: ['html',
//             'css',
//             'js',
//             'mysql',
//             'mongodb',
//             'react',
//             'angular',
//             'aws',
//             'docker',
//             'git',
//             'node.js',
//             'python',
//             'java'],
//         logo: '',
//         price: 0,
//         rating: 4.772,
//         avgResult: 100
//     },
//     {
//         title: 'Frontend',
//         monthDuration: 4,
//         hourDuration: 909,
//         modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'react', 'angular', 'aws', 'docker', 'git', 'sass'],
//         logo: '',
//         price: 0,
//         rating: 4.53,
//         avgResult: 90
//     }
// ];
//
// courses.forEach(item => {
//     let div = document.createElement("div");
//     document.body.appendChild(div);
//     for (const key in item) {
//         if (key === "title") {
//             let h3Element = document.createElement("h3");
//             h3Element.innerText = `${key} - - ${item[key]}`
//             div.appendChild(h3Element);
//         } else if (key !== "title" && key !== "modules") {
//             let divElement = document.createElement("div");
//             divElement.innerText = `${key} - - ${item[key]}`
//             div.appendChild(divElement);
//         } else {
//             item.modules.forEach(module=>{
//                 let liElement = document.createElement("li");
//                 liElement.innerText = `${module}`
//                 div.appendChild(liElement);
//             })
//
//         }
//     }
// })

