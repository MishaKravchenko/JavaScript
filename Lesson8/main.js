// С Т А Р І   Т А С К И     (js_demos/kminV/Lesson8)

// T A S K 1
// - Дана textarea.
//     В неё вводится текст.
//     Сделайте так, чтобы после захода на эту страницу через некоторое время, введенный текст остался в textarea.

// let textarea = document.getElementById("textarea");
// textarea.oninput = (ev) =>{
//     console.log(ev.target.value);
//     localStorage.setItem("text", ev.target.value);
// }
// textarea.value = localStorage.getItem("text");

// T A S K 2
// - Дана форма с инпутами, текстареа, чекбоксами, радио кнопочками, селектами и тп.
//     Пользователь вводит какие-то данные и закрывает страницу (не факт, что он заполнил всю форму).
// Сделайте так, чтобы при следующем заходе на страницу введенные им ранее данные стояли на своих местах.
//     Сделайте ваш скрипт как можно более универсальным.

//( Ми витягуєм нашу форму, в якій лежать всі теги.
// 1. Пишем ф-цію saveForm(t) - і викликаємо цю ф-цію в атрибутах нашого форма oninput="saveForm(this) Задача цієї ф-ції при натисканні на інпут, доступатися до нашої форми(і до всіх елементів які всередині неї). І запускатиме другу ф-цію, яка буде перебирати вже всі елементи всередині форми.
//2. Пишемо ф-цію, яка буде перебирати всі елементи всередині форма, і шукатиме інпути з типами чекбокс або радіо. І змінювати значення велью в залежності від того чи включена кнопка чи ні. І після того як ці значення value замінились, вже сетаєм наші елементи в локалСторейдж.
//3. Тепер пишемо ф-цію, яка буде зберігати наші введені значення в наших інпутах. Для цього перебираємо наш локалСтрейдж, і якщо наш локалСторейдж має такий ключ, як і в наших інпутах айдішки, то присвоїти значення нашим інпутам з локалСторейджу. І окрему умову робимо для чекбоксів і радіо.

// let form1 = document.getElementById("form1");
// getDataForm(form1);
// function saveForm(t) {
//     setDataForm(t)
// }
//
// function setDataForm(tag) {
//     for (let i = 0; i < tag.length; i++) {
//         const tagElement = tag[i];
//         if (tagElement.type === "checkbox" || tagElement.type === "radio")
//             tagElement.checked ?
//                 tagElement.value = true :
//                 tagElement.value = false
//
//         localStorage.setItem(tagElement.id, tagElement.value);
//     }
// }
//
// function getDataForm(tag){
//     for (let i = 0; i < localStorage.length; i++) {
//         if (localStorage.hasOwnProperty(tag.children[i].id)){
//             tag.children[i].value = localStorage.getItem(tag.children[i].id);
//             if (tag.children[i].value === "true"){
//                 tag.children[i].setAttribute("checked","checked");
//             }
//         }
//     }
// }

// T A S K 3
// -Дан текстареа. В него можно ввести данные, нажать кнопку "сохранить" и они "фикисруются" (в хранилище), затем поредактировать их, затем еще поредактировать и возможно еще.....
// Требование : хранить историю своих изменений (даже после перезагрузки страницы).
// Сверху над текстареа должны появится стрелочки, с помощью которых можно перемещаться по истории (не забудьте!чекпоинт истории - нажатеи кнопки сохранить).

//1. Створюєм Три кнопки (вліво, вправо, зберегти) і текстареа. витягуєм їх в джс.
//2. Прописуєм івент на кнопку сейв, яка сетає текст з поля в локалСторейдж (Ключі прив'язуєм до довжини, щоб змінювались самостійно і не переприсвоювались)
//3.1 Прописуєм івент на кнопку вліво. Даєм стиль правій кнопкі, щоб вона була видимою, бо виникне ситуація коли ми станем в крайнє ліве, і в крайнє праве положення, і наші кнопки не відновляться.
// ЯКЩО МИ ЗНАХОДИМСЯ В КРАЙНЬОМУ ПРАВОМУ ПОЛОЖЕНІ. МИ ТИКАЄМ НА ЛІВУ КНОПКУ, І ВОНА СТАЄ ВІЗІБЛ. ТАК САМО І З ІНШОЮ КНОПКОЮ //
// arrow_left.onclick = () => {
//     arrow_right.style.visibility = ("visible");
//3.2. локалСторейдж - об'єкт із значенням і ключом. Об'єкт взагалі річ неітерабельна НО його можна перебрати лише фор іном. І ми перебираєм за умови якщо значення локалСторейджу по відповідному ключу (key) === нашому тексту в текстерей. І присвоюємо нашому індексу (ключ, у вигляді числа, які ми генерували в другому пункті).
//3.3 Даєм умову, що коли наш індекс буде рівний "1" - тобто першому ключу в локалСторейджі (в крайньому лівому положені), наша кнопка вліво буде зникати.
//3.4. І якшо все ок. То при кліку на нашу кнопку (вліво) наше значення в текстовому полі, буде замінюватись на значення в локалСторейджі на індекс меншою. Поки ми не дістанемся ключа "1", тоді пропаде кнопка.
//4.1 Таким самим макаром робимо праву кнопку. Тільки треба буде перетворити localStorage.length в туСтрінг .toString(), бо в наш індекс є стрічкою, і шоб виконалася рівність переводимо праву частину в стрічку. А на виході, коли ми вже гортаємо сторінки, то переводимо в число, щоб додалося.


// let arrow_left = document.getElementById("arrow_left")
// let arrow_right = document.getElementById("arrow_right");
// let save = document.getElementById("save");
// let text = document.getElementById("text");
//
// save.onclick = () => {
//     localStorage.setItem(localStorage.length + 1, text.value)
// }
// arrow_left.onclick = () => {
//     arrow_right.style.visibility = ("visible");
//     let index;
//     for (const key in localStorage) {
//         if (localStorage.getItem(key) === text.value) {
//             index = key;
//         }
//     }
//     if (index === "1") {
//         arrow_left.style.visibility = ("hidden")
//         return;
//     }
//     text.value = localStorage.getItem(index - 1);
// }
//
// arrow_right.onclick = () => {
//     arrow_left.style.visibility = ("visible")
//     let index;
//     for (const key in localStorage) {
//         if (localStorage.getItem(key) === text.value) {
//             index = key;
//         }
//     }
//     if (index === localStorage.length.toString()) {
//         arrow_right.style.visibility = ("hidden")
//         return;
//     }
//     text.value = localStorage.getItem(+index + 1);
// }


//// T A S K 4
// - Реализуйте записную книгу, хранящую данные в локальном хранилище.
//     Данные которые надо сохранять : ФИО, номер, почта, фирма, отдел, день рождения
// Данные вводить через соответсвующую форму.
// --Каждому контакту добавить кнопку для удаления контакта.
// --Каждому контакту добавить кнопку редактироваиня. При нажати на нее появляется форма, в которой есть все необходимые инпуты для редактирования, которые уже заполнены данными объекта
// 1.1 Ну погнали. Витягуєм нашу форму з HTML. А з форми витягуєм кнопку сабміт, і прописуєм на неї код, який буде набирати наш об'єкт person значеннями які ми вводимо. Пишемо цикл, який буде перебирати всі елементи ЗА УМОВИ що вони мають name (окрім кнопки submit, бо вона теж має ім'я, але нам потрібні тільки значення з інпутів). І кажем що ключ, для нашого об'єкта person - буде слугувати name інпута, і цей ключ в свою чергу буде мати value (те значення яке ми вводимо з клавіатури). І для кожного юзера ми придумуєм свою айдішку. (getTime() Возвращает число миллисекунд, прошедших с 1 января 1970 года GMT+0, то есть того же вида, который используется в конструкторе new Date(milliseconds).
//2.1 Тепер пишем ф-цію, яка буде зберігати наші об'єкти person в масив localStorage. І в нас є дві ситуації коли ми сетаєм наш об'єкт person в перший раз, то нам спочатку треба створити той масив, а якшо будем сетати вдруге, то треба покласти об'єкт вже в існуючий масив. Якщо масива ще не існує, то localStorage.setItem(key: ARRAY_USERS, value: JSON.stringify([user])) створюєм його . . .
// Якщо ж масив уже існує ми дістаємо його з локалСторейджу і парсимо його, щоб обробляти дані в джсі. І ДУЖЕ ВАЖЛИВА ПЕРЕВІРКА. В нас може існувати кнопка Edit, яка буде змінювати якийсь уже існуючий об'єкт в масиві, в цьому випадку нам не треба створювати новий об'єкт, нам треба ЗАМІНИТИ існуючий.Ми можемо змінити все, окрім наших унікальних айдішок, вони потрібні для того щоб доступитися до цих двох об'єктів і вже маніпулювати ними в джсі. Виконуємо пошук find (method arrayUsers, цей метод вертає тру або фолс), чи є в локал сторейджі.велью.така айдішка, як в нашого юзера чи ні. І слідує УМОВА. Якшо приходить тру то цей же самий масив, який ми запарсили, ми фільтруєм і кажем шо верни нам значення де айді локалСторейджу не дорівнюють нашому юзеру (по суті ми залишаємо в масиві нередаговані об'єкти і викидаємо той який хочемо замінити на змінений) і от наступної дією пушим в наш відфільтрований масив відредагований об'єкт юзер. В інкшому випадку просто пушим.
//3.1. Пишемо ф-цію, яка буде доставати сформовані об'єкти в з локалСторейджу і виводити їх на HTML сторінку(ця функція бігає по всіх об'єктах масиву, і викликає функцію, яка описана нище, яка в свою чергу бігає по кожному значенню об'єкта) . Якщо є ключ ARRAY_USERS то ми парсимо цей масивчик в якусь змінну і проходимся по ньому,
//4.1. Пишемо ф-цію, яка буде формувати нам блок з описом юзера (ця функція бігає всередині одного об'єкта масиву). ПРИКОЛЬНА ШТУКА чи ПРИЙОМ (flag), нам треба виділити лише першу строку ФИО, ми створюєм флажок, із трушним значенням, і на основі нього робимо умову, поки флажок тру виконується наша умова, ми зробили все шо хотіли і в самому кінці нашого іфа вимикаєм флажок (flag = false) і далі код вже іде в else і виконає все що лишилось. І до іфу він повернеться тільки коли ітерація візьме новий об'єкт.
// Потім ми додаєм дві кнопочки "Edit", "Delete", і івенти на них.
// Загалом ця ф-ція створює структуру нашого блока і повертає його.
//5.1. Пишемо ф-цію, на кнопку "Delete", яка достає з локалСторейджу масив і фільтром лишає тільки ті в яких різні айдішки (по суті видаляє наш об'єкт). Location метод reload() - перезавантажує сторінку з поточною URL адресою.
//6.1. І остання ф-ція на кнопку "Edit". Дістаєм масивчик, шукаєм в ньому наш об'єкт який хочемо відредагувати. Проходимся по всій формі, і якщо у елемента форми є нейм, то проходимся ще по нашому юзеру і присвоюємо йому змінені значення.

const ARRAY_USERS = "ARRAY_USERS";
let tempUser = {};
let content = document.getElementById("content");
const form1 = document.forms.form1;

//1.1.
form1.submit1.onclick = ev => {
    // ev.preventDefault(); відміняє дію браузера
    let person = {...tempUser};
    tempUser = {};
    for (let i = 0; i < form1.children.length; i++) {
        const form1Element = form1.children[i];
        if (form1Element.name && form1Element.type !== "submit") {
            person[form1Element.name] = form1Element.value;
        }
    }
    if (!person.id) {
        person.id = new Date().getTime();
    }
    console.log("person");
    console.log(person);
    saveUser(person);
}
getDataFromLSt()

//2.1.
function saveUser(user) {
    if (localStorage.hasOwnProperty(ARRAY_USERS)) {
        const arrayUsers = JSON.parse(localStorage.getItem(ARRAY_USERS));
        const find = arrayUsers.find(value => value.id === user.id);
        if (find) {
            const filter = arrayUsers.filter(value => value.id !== user.id);
            filter.push(user);
            localStorage.setItem(ARRAY_USERS, JSON.stringify(filter));
        } else {
            arrayUsers.push(user)
            localStorage.setItem(ARRAY_USERS, JSON.stringify(arrayUsers));
        }
    } else {
        localStorage.setItem(ARRAY_USERS, JSON.stringify([user]))
    }
}

//3.1.
function getDataFromLSt() {
    if (localStorage.hasOwnProperty(ARRAY_USERS)) {
        const arrUser = JSON.parse(localStorage.getItem(ARRAY_USERS))
        for (const user of arrUser) {
            content.appendChild(createDivPerson(user));
        }
    }
}

//4.1
function createDivPerson(user) {
    const main = document.createElement("div");
    let flag = true;
    for (const key in user) {
        if (flag) {
            const h3 = document.createElement("h3");
            h3.innerText = key + " : " + user[key];
            main.appendChild(h3);
            flag = false;
        } else {
            const p = document.createElement("p");
            p.innerText = key + " : " + user[key];
            main.appendChild(p);
        }
    }
    main.style = "width: 300px; border:red 1px solid; float: left";
    const b1 = document.createElement("button");
    const b2 = document.createElement("button");
    b1.innerText = "Edit";
    b2.innerText = "Delete";

    b1.onclick = function () {
        editUser(user.id);
    }

    b2.onclick = function () {
        deleteUser(user.id);
    }

    main.appendChild(b1);
    main.appendChild(b2);

    return main;
}

//5.1.
function deleteUser(id) {
    const parse = JSON.parse(localStorage.getItem(ARRAY_USERS));
    const filter = parse.filter(user => user.id !== id);
    localStorage.setItem(ARRAY_USERS, JSON.stringify(filter));
    location.reload() //перезавантажує сторніку з поточним url
}

//6.1.
function editUser(id) {
    const parse = JSON.parse(localStorage.getItem(ARRAY_USERS));
    const user = parse.find(user => user.id === id);
    for (let i = 0; i < form1.children.length; i++) {
        const form1Element = form1.children[i];
        if (form1Element.name && form1Element.type !== "submit") {
            for (const key in user) {
                if (form1Element.name === key) {
                    form1Element.value = user[key];
                }
            }
        }
    }
    tempUser = user;
}

// T R Y
// geolocation
// navigator.geolocation.getCurrentPosition(data =>{
//     console.log(data);
// })

// video +audio
// let vid = document.getElementById("vid");
//
// navigator.mediaDevices.getUserMedia({video:true}).then(value => {
//     vid.srcObject = value;
//     vid.play();
// })
