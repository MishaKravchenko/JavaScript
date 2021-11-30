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

//// T A S K 3
// -Дан текстареа. В него можно ввести данные, нажать кнопку "сохранить" и они "фикисруются" (в хранилище), затем поредактировать их, затем еще поредактировать и возможно еще.....
// Требование : хранить историю своих изменений (даже после перезагрузки страницы).
// Сверху над текстареа должны появится стрелочки, с помощью которых можно перемещаться по истории (не забудьте!чекпоинт истории - нажатеи кнопки сохранить).

//1. Створюєм Три кнопки (вліво, вправо, зберегти) і текстареа. виводим їх в джс.
//2. Прописуєм івент на кнопку сейв, яка сетає текст з поля в локалСторейдж (Ключі прив'язуєм до довжини, щоб змінювались самостійно і не переприсвоювались)
//3. Прописуєм івент на кнопку вліво.

let arrow_left = document.getElementById("arrow_left")
let arrow_right = document.getElementById("arrow_right");
let save = document.getElementById("save");
let text = document.getElementById("text");

save.onclick = ev => {
    localStorage.setItem(localStorage.length + 1, text.value)
}
arrow_left.onclick = () => {
    arrow_right.style.visibility = ("visible")
    let index;
    for (const key in localStorage) {
        if (localStorage.hasOwnProperty(key)){
            if (localStorage.getItem(key)===text.value){
                index = key;
            }
        }
    }
    if (index === "1"){
        arrow_left.style.visibility = ("hidden")
        return;
    }
    text.value = localStorage.getItem(index - 1);
}

arrow_right.onclick = () => {
    arrow_left.style.visibility = ("visible")
    let index;
    for (const key in localStorage) {
        if (localStorage.hasOwnProperty(key)){
            if (localStorage.getItem(key)===text.value){
                index = key;
            }
        }
    }
    if (index === localStorage.length.toString()){
        arrow_right.style.visibility = ("hidden")
        return;
    }
    text.value = localStorage.getItem(+index + 1);
}






// - Реализуйте записную книгу, хранящую данные в локальном хранилище.
//     Данные которые надо сохранять : ФИО, номер, почта, фирма, отдел, день рождения
// Данные вводить через соответсвующую форму.
// --Каждому контакту добавить кнопку для удаления контакта.
// --Каждому контакту добавить кнопку редактироваиня. При нажати на нее появляется форма, в которой есть все необходимые инпуты для редактирования, которые уже заполнены данными объекта


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