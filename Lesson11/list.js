let ARRAY_PRODUCTS = "ARRAY_PRODUCTS";
let content = document.getElementById("content");
content.style.display = "flex";
content.style.flexFlow = "row wrap";

//3.1
let b1 = document.createElement('button');
b1.classList.add('btnDelete');
b1.innerText = 'DELETE ALL';

b1.onclick = function () {
    localStorage.removeItem('ARRAY_PRODUCTS');
    location.reload()
};
document.body.appendChild(b1)

//4.1.
getDataFromLSt()
function getDataFromLSt() {
    if (localStorage.hasOwnProperty(ARRAY_PRODUCTS)) {
        const arrCandy = JSON.parse(localStorage.getItem(ARRAY_PRODUCTS))
        for (const candy of arrCandy) {
            content.appendChild(createDivCandy(candy));
        }
    }
}

// 5.1
function createDivCandy(candy) {
    const main = document.createElement("div");
    for (const key in candy) {
        if (key === "name") {
            const h1 = document.createElement("h1");
            h1.innerText = candy[key];
            main.appendChild(h1);
        } else if (key === "img"){
            const img = document.createElement("img");
            img.src = candy[key];
            main.appendChild(img);
            img.style.width = "200px";
        }else {
            const p = document.createElement("p");
            p.innerText = key + " : " + candy[key];
            main.appendChild(p);
        }
    }
    main.style = "width: 300px; border:red 1px solid; display:flex; flex-flow: column; align-items:center; justify-content: space-between;";

    const b2 = document.createElement("button");
    b2.innerText = "Delete";
    main.appendChild(b2);

    b2.onclick = function () {
        deleteUser(candy.id);
    }

    return main;
}

//6.1
function deleteUser(id) {
    const parse = JSON.parse(localStorage.getItem(ARRAY_PRODUCTS));
    const filter = parse.filter(candy => candy.id !== id);
    localStorage.setItem(ARRAY_PRODUCTS, JSON.stringify(filter));
    location.reload() //перезавантажує сторніку з поточним url
}
