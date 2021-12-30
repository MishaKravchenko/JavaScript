// На странице post-details.html:
// 7 Вывести всю, без исключения, информацию про объект post на кнопку/ссылку которого был совершен клик ранее.
let generalDiv = document.createElement("div");
generalDiv.classList.add("generalDiv");

let url = new URL(window.location.href);
let userID = url.searchParams.get('id');

fetch(`https://jsonplaceholder.typicode.com/users/${userID}/posts`)
    .then(value => value.json())
    .then(posts => {
        posts.forEach(post => {

            let divPost = document.createElement("div");
            let h2 = document.createElement("h2");
            let p = document.createElement("p");

            divPost.classList.add("divPost");
            h2.classList.add("h2");
            p.classList.add("p");

            h2.innerText = `${post.id}. - (${post.userId}) - ${post.title}`;
            p.innerText = `${post.body}`;

            divPost.append(h2, p);
            generalDiv.appendChild(divPost);
        })

// 8 Ниже информации про пост, вывести все комментарии текущего поста (эндпоинт для получения информации - https://jsonplaceholder.typicode.com/posts/POST_ID/comments)
        fetch(`https://jsonplaceholder.typicode.com/posts/${userID}/comments`)
            .then(value => value.json())
            .then(posts => {
                posts.forEach(post => {
                    let divComment = document.createElement("div");
                    let h2 = document.createElement("h2");
                    let p = document.createElement("p");

                    divComment.classList.add("divComment");
                    h2.classList.add("h2");
                    p.classList.add("p");

                    h2.innerText = `${post.id}. - (${post.postId}) - ${post.name}`;
                    p.innerText = `
                E M A I L 
                ${post.email}
                ${post.body}`;

                    divComment.append(h2, p);
                    generalDiv.appendChild(divComment);
                    document.body.append(generalDiv);

                })

            })

    })