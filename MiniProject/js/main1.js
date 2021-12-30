// /*В index.html*/
let generalDiv = document.createElement("div");
generalDiv.classList.add("generalDiv");
// /*1 получить массив объектов user с endpoint`а https://jsonplaceholder.typicode.com/users*/
fetch(`https://jsonplaceholder.typicode.com/users`)
    .then(value => value.json())
    .then(value => {
        value.forEach(user=>{
            let div = document.createElement("div");
            let h2 = document.createElement("h2");
            let h3 = document.createElement("h3");
            let a = document.createElement("a");

            div.classList.add("userDiv");
            h2.classList.add("userName");
            h3.classList.add("userID");
            a.classList.add("linkUserDetails");

            // /*2 Вывести id,name всех user в index.html. Отдельный блок для каждого user.*/
            h2.innerText = `${user.name}`;
            h3.innerText = `${user.id}`;
            // /*3 Добавить каждому блоку кнопку/ссылку , при клике на которую происходит переход на страницу user-details.html, которая имеет детальную информацию про объект на который кликнули*/
            a.innerText = "Детальніше";
            a.href = "user-details.html?id="+ user.id;

            console.log(a.href);

            div.append(h2,h3,a);
            generalDiv.appendChild(div);
        })

    })
document.body.appendChild(generalDiv);
