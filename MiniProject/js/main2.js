// На странице user-details.html:
// 4 Вывести всю, без исключения, информацию про объект user на кнопку/ссылку которого был совершен клик ранее.
// 5 Добавить кнопку "post of current user", при клике на которую, появляются title всех постов текущего юзера
// (для получения постов используйте эндпоинт https://jsonplaceholder.typicode.com/users/USER_ID/posts)
//     6 Каждому посту добавить кнопку/ссылку, при клике на которую происходит переход на страницу post-details.html,
//     которая имеет детальную информацию про текущий пост.


let url = new URL(window.location.href);
let userID = url.searchParams.get('id');

fetch(`https://jsonplaceholder.typicode.com/users/${userID}`)
    .then(value => value.json())
    .then(user => {

        let generalDiv = document.createElement("div");
        let divUser = document.createElement("div");
        let h2 = document.createElement("h2");
        let divEmail = document.createElement("div");
        let divAddress = document.createElement("div");
        let divGeo = document.createElement("div");
        let divInfo = document.createElement("div");
        let divCompany = document.createElement("div");

        generalDiv.classList.add("generalDiv");
        divUser.classList.add("divUser");
        h2.classList.add("userName");
        divEmail.classList.add("divEmail");
        divAddress.classList.add("divAddress");
        divGeo.classList.add("divGeo");
        divInfo.classList.add("divInfo");
        divCompany.classList.add("divCompany");

        h2.innerText = `${user.id}. ${user.name}, ${user.username}`;
        divEmail.innerText = ` 
           - - E M A I L - -
           email: ${user.email}`;
        divAddress.innerText = `
           - - A D D R E S S - -
           address: ${user.address.street},
           suite: ${user.address.suite},
           city: ${user.address.city},
           zipcode ${user.address.zipcode}`;
        divGeo.innerText = `
           - - G E O - - 
           geo.lat: ${user.address.geo.lat},
           geo.lng: ${user.address.geo.lng}`;
        divInfo.innerText = `
        - - I N F O - -
           phone: ${user.phone},
           website: ${user.website}`;
        divCompany.innerText = `
        - - C O M P A N Y - - 
           company: ${user.company.name},
           catchPhrase: ${user.company.catchPhrase},
           bs: ${user.company.bs}`;

        // 5 Добавить кнопку "post of current user", при клике на которую, появляются title всех постов текущего юзера
// (для получения постов используйте эндпоинт https://jsonplaceholder.typicode.com/users/USER_ID/posts)
//     6 Каждому посту добавить кнопку/ссылку, при клике на которую происходит переход на страницу post-details.html,
//     которая имеет детальную информацию про текущий пост.

        let button = document.createElement("button");
        button.innerText = `post of current user`;
        button.classList.add("button");

        button.onclick = () => {
            fetch(`https://jsonplaceholder.typicode.com/users/${userID}/posts`)
                .then(value => value.json())
                .then(posts => {

                    for (const post of posts) {
                        if (post.userId === user.id) {
                            let divPost = document.createElement('div');
                            divPost.classList.add('divPost');
                            divPost.innerText = `
                        T I T L E: 
                        ${post.title}`;
                            document.body.appendChild(divPost);
                            let a = document.createElement('a');
                            a.href = 'post-details.html?id=' + posts.id;
                            a.innerText = 'Детальніше';
                            a.classList.add('a');
                            button.disabled = true;
                            document.body.appendChild(a);
                        }
                    }

                })
        }
        divUser.append(h2, divEmail, divAddress, divGeo, divInfo, divCompany);
        generalDiv.appendChild(divUser);
        document.body.append(generalDiv, button);
    })





