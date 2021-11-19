// 1) створити функцію яка приймає масив та виводить його

//1 Спосіб (масив приймаємо з аргумента)
// function acceptArr1 (arr) {
//  console.log(arr)
// }
// acceptArr1([1,2,3,4,5,6,7,8,9,0]);

//----------------------------------------------------------------------------
//2 Спосіб (ТАК РОБИТИ НЕ БАЖАНО) Наша функція не повинна залежати від змінних поза функцією (змінні ми передаємо,або через аргументи (1 спосіб), або всередині самої функції). Наприклад, ми хочемо скопіювати якийсь типовий масив по виводу тексту, в інший проект, але ця функція не буде працювати без змінних які знаходяться за межами самої ф-ції. Ф-ція має бути самостійним шматком коду
// let arr = [123, "abc", "okten", [1,2,3,4,5],{name:"vasya", surname:"pupkin"}]
// function acceptArr2(a){
//     console.log(a)
// }
// acceptArr2([10,20,30,40,50,60,70,80,90]);
// acceptArr2(arr);


//-----------------------------------------------------------------------------
//3 Спосіб (масив приймаємо з аргумента, ітеруємо і виводимо в консоль)
// function acceptArr3(arr){
//     for (let arrElement of arr) {
//         console.log(arrElement);
//     }
// }
// acceptArr3([1,2,3,4,5,6,7,8,9,0]);

// 2) створити функцію яка заповнює масив рандомними числами та виводить його. Для виведення використати попередню функцію.
// 1 Спосіб.
// Не адаптивний. Функція без аргументів.
// Результат роботи ф-ції вкладаєм в змінну result і виводимо за допомоги ф-ції з 1 таски спосіб 1.

// R E T U R N - у ф-ції є вхід і вихід, на вході функція отримує аргументи, а на виході результат роботи ф-ці, так от щоб цей результат отримати, потрібен ретьорн, він виходить з ф-ції(і тому після ретьорна не виконується інший код) і на проходній віддає вахтеру результат, і цей результат вже можна оголосити в консолі, присвоїти в змінну(загалом ретьорн каже я зробив те то й те то і ось такий результат).

// function randomArr() {
//     let arr1 = [];
//     for (let i = 0; i < 100; i++) {
//         arr1.push(Math.round(Math.random() * 100));
//     }
//     return arr1;
// }
//
// let result = randomArr();
// acceptArr1(result);

// 2 Спосіб.
// Адаптивний. Ф-ція з аргументами, можемо вводити потрібні нам, у різних частинах нашого коду, і не копіпастити заново.
// Результат роботи ф-ції вкладаєм в змінну result і виводимо за допомоги ф-ції з 1 таски спосіб 1.

// function randomArr1(length, max, min){
//     let arr2 =[];
//     for (let i = 0; i <length; i++) {
//         arr2.unshift(Math.floor(Math.random()*(max-min)+min));
//     }
//     return arr2
// }
// let result2 = randomArr1(100,100,50);
// acceptArr1(result2);


// 3) створити функцію яка приймає три числа та виводить найменьше. (Без Math.min!)

// function threeNumber(one, two, three){
//     let min
//     if (one<two && one<three) min = one;
//     if (two<one && two<three) min = two;
//     if (three<one && three<two) min = three;
//
//     console.log(min);
//     return min
// }
// let min = threeNumber(779,778,777);
// console.log("________________");
// console.log(min);

// 4) створити функцію яка приймає три числа та виводить найбільше. (Без Math.max!)
// function threeNumber(one, two, three) {
//     let max;
//     if (one > two && one > three) max = one;
//     if (two > one && two > three) max = two;
//     if (three > two && three > two) max = three;
//     console.log(max);
//     return max
// }
// let max = threeNumber(1,2,3);
// console.log("______________");
// console.log(max);

// 5) створити функцію яка повертає найбільше число з масиву
// 1 Спосіб
// тут я використав внутрішню стрілочну ф-цію, щоб відсортувати свій масив за допомогою метода масива SORT (єдиний мінус цього метода в тому, що він змінює початковий масив) суть метода заключається в тому, що береться дві змінні (a i b) і порівнюються між собою, якщо a - b дає додатнє число, то а перепригує через b, таким чином працює весь масив (бульбашка) таким чином найбільше число опиняється в кінці масиву. це число ми і виводимо в консоль. І даю зовнішню ф-цію декларейшн, який приймає мій масив і виводить найбільше число.

//arr[arr.length-1] - масив віддай мені індекс під номером (довжина масиву -1). Так як індекс починається з 0, то довж.-1 буде остання змінна масиву.

// метод бульбашки
// a   b   a   b   a   b   a   b   a   b   a   b   a   b   a   b   a   b   a   b
//[20, 10, 50, 30, 40, 30, 10, 90, 80, 60, 20, 10, 70, 60, 60, 80, 10, 20, 99, 40];
//[10, 20, 30, 50, 30, 40, 10, 90, 60, 80, 10, 20, 60, 70, 60, 80, 10, 20, 40, 99];
// і так далі... тіки зі зміщенням змінних на одну одиницю після кожного кроку,щоб відсортувати весь масив.а не порівняти лише пари

// function returnMaxNumb(arr){
//
// arr.sort((a, b) => a - b);
// let returnMax = arr[arr.length-1];
// console.log(returnMax);
// }
//     returnMaxNumb([20,10,50,30,40,30,10,90,80,60,20,10,70,60,60,80,10,20,99,40]);
//     returnMaxNumb([99,10,50,30,40,30,10,90,80,60,20,10,70,60,60,80,10,20,50,40]);

// 2 Спосіб
// Стрілочній ф-ції даєм змінну і чекаємо аргумент масив. Присвоюємо змінній макс перший елемент масиву, і запускаємо ітерацію, яка йде по масиву і виконує умову. (перший елемент масиву, заміняється на більше і так до кінця масиву) після завершення ітерації повертаємо return max; ( max=arr[0] ) і виводимо в консоль.

// Більш адаптивний спосіб, ф-ція не залежить від зовнішніх змінних, масив вводиться напряму, навіть якщо і ввести поза ф-цією, то в основному масиві всі значення залишаться на свої місцях.(тобто створиться копія, а не клон, як в попередньому випадку)

// let returnMaxNumb = (arr) => {
//     let max = arr[0];
//     for (let item of arr) {
//         if (max < item) max = item;
//     }
//     return max;
// }
// let returnMaxNumb1 = returnMaxNumb([1, 23, 45, 67, 89, 123, 343, 123, 345, 6, 5, 34, 23, 24]);
// console.log(returnMaxNumb1);

// 3 Спосіб
// Тут короче спосіб з використанням Math.max, але коли я напряму пишу її в масив вибиває NaN - тому, що воно бачить тільки масив, і не може перевести його в число, і не може доступитися до елементів мого масиву, і того той масив треба проітерувати, але є такий метод як apply - він визиває ф-цію з вказаним значенням this(я його ще не вчив, але воно тут і не треба) і аргументами, представлених у вигляді масива.

// function returnMaxNumb(numArray) {
//     return Math.max.apply(null, numArray);
// }
// let returnMaxNumb1 = returnMaxNumb([1,2,2,3,3,4,56,76,5,43,567,5,4,456,7543]);
// console.log(returnMaxNumb1);


// 6) створити функцію яка повертає найменьше число з масиву
// let returnMinNumb = (arr) => {
//     let min = arr[0];
//     for (let item of arr) {
//         if (min>item) min=item;
//     }
//     return min;
// }
// let returnMinNumb1 = returnMinNumb([334,555,645,534,253,203,305,122,312,454,324,253,355,462,360]);
// console.log(returnMinNumb1);


// 7) створити функцію яка приймає масив чисел, сумує значення елементів масиву та повертає його.
// У В А Г А ! (+=) - оператор додавання і присвоєння (додає значення правого операнда до змінної так само працює і з стрінгою (конкатенація).

// let sumNumber = function (arr){
//     let sum = 0;
//     for (let item of arr) {
//         sum += item;
//     }
//     return sum;
// }
// let sumNumber1 = sumNumber([1,2,3,4,43,2,2,3,4,4,5,6,7,76,6,43,1,5,5]);
// console.log(sumNumber1);

// 8) створити функцію яка приймає масив чисел та повертає середнє арифметичне його значень.

// let average = function (arr){
//     let sum = 0;
//     for (let item of arr) {
//         sum += item;
//     }
//     return Math.floor(sum/arr.length)
// }
// let average1 = average([1,2,3,3,4,4,3,3,323,3,23,4,24,2,23,4,2,3,412,3,123,43,2]);
// console.log(average1);


// 9) Створити функцію яка приймає масив будь яких объектів, та повертає масив ключів всіх обєктів
// EXAMPLE:
//     [{name: 'Dima', age: 13}, {model: 'Camry'}]  ===> [ name, age, model ]

// 1 Спроба (шось не вийшло) мабудь воно відкриває тільки масив, а в середину обєкту не заходить, а як доступитись до обєкта я не знаю.
// UPD Об'єкт можна проітерувати тільки фор іном, (взагалі об`єкт річ неітерабельна) якщо дати фор ін масиву, то видасть індекси. Отже, походу треба фор оф для масива, і фор ін для обєкта. Але мабудь можна і легше.

// let returnKeys = function (arrObject){
//     let arrKeys = [];
//     for (let item of arrObject) {
//        let keys = Object.keys(arrObject);
//        arrKeys.push(keys);
//     }
// return arrKeys;
// }
// let returnKeys1 = returnKeys([{name: 'Dima', age: 13}, {model: 'Camry'}]);
// console.log(returnKeys1);

// 2 Спроба
// Шось похоже на правду але треба все в один масив, десь помилка в циклі, видає cтільки масивів, скільки всього обєктів в кожному масиві. Незнаю як пофіксити + треба скласти в один масив з двох обєктів. Але мало було б працювати.

// let returnKeys = function (arrObject){
//     let arrKeys = [];
//     for (let item of arrObject) {
//         for (let element in item) {
//             arrKeys.push(Object.keys(item));
//         }
//     }
//     return arrKeys;
// }
// let returnKeys1 = returnKeys([{name: 'Dima', age: 13, iq:200 }, {model: 'Camry', age: 4, power:200, color:"black"}]);
// console.log(returnKeys1);

// 3 Спроба
// Такс, 1. я створив цикл, який перебирає наш масив з об'єктами він відбирає кейси і пушить в пустий масив arr. В консолі видасть arr[і три масива з кейсами всередині].
// 2. і тепер берем і ітеруєм цей масив який в нас вийшов. Спочатку кажем шоб ітерувало кожен масив(оті три штуки всередині) а тоді кажем шо в цьому масиві пройдись іще по елементам (наші кейси) і запуш їх в масив Кейс.
// і виводим в консоль. Дуже цікава таска!

// function returnValue(array){
//     let arr = [];
//     let keys = [];
//     for (let item of array) {
//         arr.push(Object.keys(item));
//     }
//
//     for (let arrItem of arr) {
//         for (let arrItems of arrItem) {
//             keys.push(arrItems);
//         }
//     }
//     return keys
// }
//
// let array = returnValue([{name: 'Dima', age: 13}, {model: 'Camry',age:4} , {power: 200, color:"black"}]) ;
// console.log(array);

// 10) Створити функцію яка приймає масив будь яких объектів, та повертає масив значень всіх обєктів
// EXAMPLE:
//     [{name: 'Dima', age: 13}, {model: 'Camry'}]  ===> [ Dima, 13, Camry ]

// function returnValue(array){
//  let arr = [];
//  let keys = [];
//     for (let item of array) {
//         arr.push(Object.values(item));
//     }
//
//     for (let arrItem of arr) {
//         for (let arrItems of arrItem) {
//             keys.push(arrItems);
//         }
//     }
//     return keys
// }
//
// let array = returnValue([{name: 'Dima', age: 13}, {model: 'Camry',age:4} , {power: 200, color:"black"}]) ;
// console.log(array);


// 11) створити функцію  яка скаладає значення елементів з однаковими індексами  та повертає новий результуючий масив.
//     EXAMPLE:
// [1,2,3,4]
//     [2,3,4,5]
// результат
//     [3,5,7,9]

// let addIndex = function (arr1, arr2){
//     let sum = [];
//      for (let i = 0; i < arr1.length; i++){
// sum[i] = arr1[i]+ arr2[i];
//     }
//     return sum;
// }
// let addIndex1 = addIndex([1,2,2,3,3,4,4,4,3,3,3],[1,2,2,3,3,4,4,4,3,3,3]);
// console.log(addIndex1);

//
// ============================================================================================
//
// - створити функцію яка приймає будь-яку кількість чисел, повертає найменьше, а виводить найбільше (Math використовувати заборонено);

// let returnMinNumb = (arr) => {
//     let min = arr[0];
//     let max = arr[length];
//     for (let itemMin of arr) {
//         if (min>itemMin) min=itemMin;
//     }
//     for (let itemMax of arr) {
//         if(max<itemMax) max=itemMax;
//     }
//     console.log(max);
//     return min;
//
// }
// let returnMinNumb1 = returnMinNumb([334,555,645,534,253,203,305,122,312,454,324,253,355,462,999,9]);
// console.log(returnMinNumb1);

// - Взяти задачі з завдання 10 та 9 та обєднати їх в одну динамічну функцію.
//     Що б я міг сам вибрати повернути мені масив ключів чи масив значень.
//___________________________________________________________________________
// Можна адаптувати, але поки так. Звернути увагу на (answer.trim().toLocaleLowerCase() === "keys") класна штука.

// function returnValue(array){
//     let arr = [];
//     let keysOrValues = [];
//     let answer = prompt("Keys or Values?");
//     if (answer.trim().toLocaleLowerCase() === "keys"){
//     for (let item of array) {
//         arr.push(Object.keys(item));
//     }
//     for (let arrItem of arr) {
//         for (let arrItems of arrItem) {
//             keysOrValues.push(arrItems);
//         }
//     }
//
//     } else if (answer.trim().toLocaleLowerCase()  === "values"){
//         for (let item of array) {
//             arr.push(Object.values(item));
//         }
//     for (let arrItem of arr) {
//         for (let arrItems of arrItem) {
//             keysOrValues.push(arrItems);
//         }
//     }
//     }
//     return keysOrValues
// }
//
// let array = returnValue([{name: 'Dima', age: 13}, {model: 'Camry',age:4} , {power: 200, color:"black"}]) ;
// console.log(array);

// - Приймає масив та число "i", та міняє місцями об'єкт який знаходиться в індексі "i" на "i+1"
//   EXAMPLE:
//   foo([9,8,0,4], 0) // ==> [ 8, 9, 0, 4 ]
//   foo([9,8,0,4], 1) // ==> [ 9 ,0, 8, 4 ]
//   foo([9,8,0,4], 2) // ==> [ 9, 8, 4, 0 ]
//
// я незнаю як в мене це вийшло, але шось дуже сложно
//  створює змінну омг і кажемо їй присвой нам таке то значення, з прийнятого індекса і введеного масива.
// індекс збільшуємо на 1, і присвоюємо в омг.

// function swap(arr, i) {
//     debugger
//     let omg = arr[i];
//     arr[i] = arr[i + 1];
//     arr[i + 1] = omg;
//     return arr;
// }
//
// console.log(swap([112, 232, 433, 443, 553, 653, 753, 853, 935, 1053, 1153, 1253, 1533], 10));

// - Сворити функцію яка буде переносити елементи з значенням 0 у кінець маисву. Зберігаючи при цьому порядок не нульових значень.
// Двожина масиву від 2 до 100
// EXAMPLE:
// [1,0,6,0,3] => [1,6,3,0,0]
// [0,1,2,3,4] => [1,2,3,4,0]
// [0,0,1,0]   => [1,0,0,0]
//

//  let add = trueArr.concat(falseArr); (повторити методи масивів)

// let zeroLast = function (arr) {
//     let falseArr = [];
//     let trueArr = [];
//     for (let i = 0; i < arr.length; i++) {
//         if (arr[i] === 0)
//             falseArr.push(arr[i])
//         else
//             trueArr.push(arr[i])
//     }
//         let add = trueArr.concat(falseArr);
//     console.log(add);
//     return add;
//
// }
//
// let zeroLast1 = zeroLast([112, 0, 0, 0, 553, 0, 753, 853, 0, 1053, 0, 1253, 1533]);
// console.log(zeroLast1);


// - Дано список імен.
// let n1 = '    Harry       Potter      '
// let n2 = '    Ron       Whisley      '
// let n3 = '    Hermione       Granger      '
// Написати функцію, яка приймає будь яке не валідне імя, та нормалізує його в наступнйи вигляд
// let n1 = 'Harry Potter'
// let n2 = 'Ron Whisley'
// let n3 = 'Hermione Granger'
//
// ============================================================================================

// let notValid = function (n1, n2, n3){
//     for (let argument of arguments) {
//         let valid = argument.trim().replace(/\s+/g, ' ');
//         console.log(valid);
//     }
// }
// notValid('    Harry       Potter      ','    Ron       Whisley      ','    Hermione       Granger      ');

//
//
// // ******************* НАЗАД В МИНУЛЕ *********************** //
// Створити функцію яка :
// - Додає в боді блок з текстом "Hello owu"

// let addDiv = function (text){
//    let divText = document.createElement("div");
//         divText.classList.add("text");
//         divText.style.backgroundColor =("grey");
//         divText.style.maxWidth =("50%");
//         divText.style.color =("orange");
//         divText.textContent =(text);
//
//         document.body.appendChild(divText);
// }
// addDiv("Hello owu ");

// - Додає в боді елемент з текстом . Тип елементу та текст отримати через аргументи

// let addDiv = function (tag,text){
//    let divText = document.createElement("div");
//    let paragraph = document.createElement(tag);
//         divText.style.backgroundColor =("grey");
//         divText.style.maxWidth =("50%");
//         divText.style.color =("orange");
//         paragraph.textContent =(text);
//
//         document.body.appendChild(divText);
//         divText.appendChild(paragraph);
// }
// addDiv("p","Hello owu ");



// - приймає масив автомобілів (можна взяти з попередніх дз ),та  індентифікатор елемнту в який потрібно додати список цих автомобілів.

// let users = [{
//     name: 'vasya',
//     age: 31,
//     status: false,
// }, {
//     name: 'petya',
//     age: 30,
//     status: true,
// }, {
//     name: 'kolya',
//     age: 29,
//     status: true,
// }, {
//     name: 'olya',
//     age: 28,
//     status: false,
// }, {
//     name: 'max',
//     age: 30,
//     status: true,
// }, {
//     name: 'anya',
//     age: 31,
//     status: false,
// }, {
//     name: 'oleg',
//     age: 28,
//     status: false,
// }, {
//     name: 'andrey',
//     age: 29,
//     status: true,
// }];

 // незнаю, мало би працювати... пише undefined
// E R R O R

// let enterArr = function (array){
//     let divka = document.createElement("div");
//     document.body.appendChild(divka);
//     let ulka = document.createElement("ul");
//     divka.appendChild(ulka);
//     for (let i = 0; i < array.length; i++) {
//        let lilka = users[i] = document.createElement("li");
//        lilka.textContent = (`${[i+1]} - - ${users.name} - - ${users.age} - - ${users.status} `)
//         ulka.appendChild(lilka);
//     }
// }
// enterArr(users);

// а так загалом з ДОМом все понятно, з функцієй треба ще попрацювати.
// // ******************* НАЗАД В МИНУЛЕ *********************** //