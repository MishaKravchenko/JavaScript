// С Т А Р І   Т А С К И     (js_demos/kminV/lesson10/)
// *** за допомогою fetch (як в прикладі) отримати від jsonplaceholder всі users.
//     За допомогою document.createElement вивести їх в браузер.
//     Помістити кожен окремий об'єкт в блок, при цьому кожен внутрішній об'єкт в свій блок (блок в блоці).
// *** за допомогою fetch (як в прикладі) отримати від jsonplaceholder всі posts.
//     За допомогою document.createElement вивести їх в браузер.
//     Помістити кожен окремий об'єкт в блок, при цьому кожен внутрішній об'єкт(якщо він існує) в свій блок (блок в блоці).
// *** за допомогою fetch (як в прикладі) отримати від jsonplaceholder всі comments.
//     За допомогою document.createElement вивести їх в браузер.
//     Помістити кожен окремий об'єкт в блок, при цьому кожен внутрішній об'єкт(якщо він існує) в свій блок (блок в блоці).
// ****** при помощи fetch (как в примере) получить от jsonplaceholder все posts.
//     Внутри последнего then() сделать еще один fetch который сделает запрос и получит все comments.
//     Объеденить соответсвующий post с соответсвующими comment и вывести в браузер.
//     Подсказка : в каждом comment есть поле postId которое определяет какой комментарий принадлежит какому посту

// Н О В І  Т А С К И     (js_demos/js/preview/lesson12/)

// E X A M P L E
// let select = document.getElementById("page");
// let wrap = document.getElementsByClassName("wrap")[0];
//
// select.onchange = function () {
//     let pageNumber = this.value;
//     fetch(`https://reqres.in/api/users?page=${pageNumber}`)
//     .then(value=>value.json())
//     .then(value => {
//         wrap.innerHTML = "";
//         let users = value.data;
//         console.log(users);
//         for (const user of users) {
//             let div = document.createElement("div");
//             let title = document.createElement("h2");
//             title.innerText = `${user.first_name} ${user.last_name}`;
//             let img = document.createElement("img");
//             img.src = user.avatar;
//             div.append(title);
//             div.appendChild(img);
//             wrap.append(div);
//         }
//     })
// }

// 1.
// Отримати відповідь з цього ресурсу відповідь, та вивести в документ як в прикладі на занятті
// https://jsonplaceholder.typicode.com/posts
//     зробити кнопку до кожного поста. при кліку на яку виводяться в окремий блок всі коментарі поточного поста
// 2.
// Отримати відповідь з цього ресурсу відповідь, та вивести в документ об'єкти. Застилізувати, за допомоги css, щоб отримати 5 елементів в рядку.
// Для кожного елементу свій блок div.post
// Всі характеристики повинні мати свої блоки всередені div.post
// https://jsonplaceholder.typicode.com/posts

// fetch("https://jsonplaceholder.typicode.com/posts")
//     .then(value=>value.json())
//     .then(response => {
//         let generalDiv = document.createElement("div");
//         for (const item of response) {
//             let div = document.createElement("div");
//             let h1 = document.createElement("h1");
//             let h2 = document.createElement("h2");
//             let p = document.createElement("p");

//             generalDiv.style.display = "flex";
//             generalDiv.style.flexFlow = "row wrap"
//             div.style.margin = "20px 0"
//             div.style.border = "10px solid green";
//             div.style.width = "20%";
//             div.style.backgroundColor = "orange";
//             div.style.boxSizing = "border-box"

//             h1.innerText = `${item.id}`;
//             h2.innerText = `${item.title}`;
//             p.innerText = `${item.body}`;
//             document.body.appendChild(generalDiv);
//             generalDiv.appendChild(div)
//             div.append(h1,h2,p);
//         }
//     });

// 3.
// Отримати відповідь з цього ресурсу відповідь, та вивести в документ як в прикладі на занятті.
//     Для кожного елементу свій блок div.comment
// Всі характеристики повинні мати свої блоки всередені div.comment
// https://jsonplaceholder.typicode.com/comments

// fetch("https://jsonplaceholder.typicode.com/comments")
//     .then(value => value.json())
//     .then(response =>{
//         let generalDiv = document.createElement("div");
//         for (const item of response) {
//             let div = document.createElement("div");
//             let h1 = document.createElement("h1");
//             let h2 = document.createElement("h2");
//             let pEmail = document.createElement("p");
//             let pBody = document.createElement("p");
//
//             h1.innerText = `${item.id}`;
//             h2.innerText = `${item.name}`;
//             pEmail.innerText = `${item.email}`;
//             pBody.innerText = `${item.body}`;
//
//             generalDiv.style.display = "flex";
//             generalDiv.style.flexFlow = "row wrap"
//             generalDiv.style.textAlign = "center"
//             div.style.margin = "20px 0"
//             div.style.border = "10px solid green";
//             div.style.width = "20%";
//             div.style.backgroundColor = "orange";
//             div.style.boxSizing = "border-box"
//
//             document.body.appendChild(generalDiv);
//             generalDiv.appendChild(div);
//             div.append(h1,h2,pEmail,pBody );
//
//         }
// })

// 4.
//Отримати відповідь з цього ресурсу відповідь, та вивести в документ як в прикладі на занятті
// https://jsonplaceholder.typicode.com/posts
// зробити кнопку до кожного поста. при кліку на яку виводяться в окремий блок всі коментарі поточного поста

// fetch("https://jsonplaceholder.typicode.com/posts")
//     .then(value => value.json())
//     .then(response => {
//         let generalDiv = document.createElement("div");
//         for (const item of response) {
//             let div = document.createElement("div");
//             let h1 = document.createElement("h1");
//             let h2 = document.createElement("h2");
//             let p = document.createElement("p");
//             let button1 = document.createElement("button");
//             let button2 = document.createElement("button");
//
//             generalDiv.style.display = "flex";
//             generalDiv.style.flexFlow = "row wrap"
//             div.style.margin = "20px 0"
//             div.style.border = "10px solid green";
//             div.style.width = "20%";
//             div.style.backgroundColor = "orange";
//             div.style.boxSizing = "border-box"
//
//             h1.innerText = `${item.id}`;
//             h2.innerText = `${item.title}`;
//             p.innerText = `${item.body}`;
//             button1.innerText = "CHECK BODY";
//             button2.innerText = "CHECK COMMENT";
//
//             document.body.appendChild(generalDiv);
//             generalDiv.appendChild(div)
//             div.append(h1, h2, button1, button2);
//
//             let flag = true
//             button1.onclick = function (ev) {
//                 ev.preventDefault();
//                 if (flag) {
//                     div.appendChild(p)
//                     p.style.display = "block";
//                     flag = false;
//                 } else {
//                     p.style.display = "none";
//                     flag = true;
//                 }
//             }
//
//             fetch(`https://jsonplaceholder.typicode.com/posts/${item.id}/comments`)
//                 .then(value => value.json())
//                 .then(response1 => {
//
//                     for (const item of response1) {
//                         let pComments = document.createElement("p");
//                         pComments.innerText = `${item.body}`;
//                         let flag = true;
//                         button2.onclick = function () {
//                             if (flag) {
//                                 div.appendChild(pComments);
//                                 pComments.style.display = "block";
//                                 flag = false;
//                             } else {
//                                 pComments.style.display = "none";
//                                 flag = true;
//
//                             }
//                         }
//
//                     }
//
//                 })
//         }
//     });

