// С Т А Р І   Т А С К И    (js_demos/kminV/Lesson6)

// 1) Створити масив з 20 чисел та:
//     a) відсортувати його від меншого до більшого.
//прикол в том, шо цей метод змінює і первоначальний масив.
// let arr = [12,3123,12,3,123,12,3,12,31,23,13,12,3,123,1,3,12,3,1,3,123,1,23,1,3,12,31,31];
// let sort = arr.sort((a, b) => {
// return a-b
// });
// console.log(sort);
// console.log(arr);

//     b) відсортувати його від більшого до меншого.
// let arr = [12,3123,12,3,123,12,3,12,31,23,13,12,3,123,1,3,12,3,1,3,123,1,23,1,3,12,31,31];
// let sort = arr.sort((a, b) => {
//     return b-a;
// });
// console.log(sort);
// console.log(arr);

//     c) Відфілтрувати числа які є кратними 3.
// а цей метод не змінює перший масив, на це варто звернути увагу.
// let arr = [12,3123,12,3,123,12,3,3,5,5,5,12,1,1,1,1,1,13,123,12,31,31];
// let filter = arr.filter(value =>{
//     return value %3 === 0 && value !==0;
// } );
// console.log(arr);
// console.log(filter);

// d) Відфілтрувати числа які є більшими за 10.
// let arr = [1,3,1,3,1,12,3,3,5,5,5,12,1,1,1,1,1,13,123,12,31,31];
// let filter = arr.filter(value => {
//     return value>10;
// })
// console.log(arr);
// console.log(filter);

// e) Проітерувати його forEach та вивести кожеш елмент за допомогою document.write
// let arr = [1,3,1,3,1,12,3,3,5,5,5,12,1,1,1,1,1,13,123,12,31,31];
// arr.forEach(value => {
//     document.write(` ${value}<br>`);
// })

// f) За допомогою map збільшити кожен елемент в масиві в три рази.
// let arr = [1,3,1,3,1,12,3,3,5,5,5,12,1,1,1,1,1,13,123,12,31,31];
// let map = arr.map(value =>{
//     return value*3;
// } )
// console.log(arr);
// console.log(map);

//     g) Порахувати загальну суму всіх елментів у масиві (reduce)
// let arr = [1,3,1,3,1,12,3,3,5,5,5,12,1,1,1,1,1,13,123,12,31,31];
// let reduce = arr.reduce((acc, value) =>{
//     acc+=1;
// return acc
// } )
// console.log(reduce);

// 2) Створити масив з 20 стрічок та:
//     a) Відсортувати його в алфавітному порядку
// let arr = ["Mahmud","Stepan","Mishko","Sashko","Petro","Stepan","Vasily","Aliona","Ahmad","Ahmed","Rahmed","Ramzan","Zyuzia","Qwerty","Obema","Olena","Oksana","Dimas","times","new","roman","15", "%&$@*(#$#@)%"];
// let sort = arr.sort();
// console.log(sort);

// Метод сорт спочкатку сортує символи і цифри, потім Великі букви і вже потім маленькі. Тому треба зробити всі літери валідними, щоб метод сорт працював більш коректно.
// let arr = ["Mahmud","Stepan","Mishko","Sashko","Petro","Stepan","Vasily","Aliona","Ahmad","Ahmed","Rahmed","Ramzan","Zyuzia","Qwerty","Obema","Olena","Oksana","Dimas","times","new","roman","15", "%&$@*(#$#@)%"];
// let sort = arr.sort((a, b) => {
//     if (a.toLowerCase()>b.toLowerCase())return 1;
//     if (b.toLowerCase()>a.toLowerCase())return -1;
//     return 0;
// });
// console.log(sort);

// b) Відсортувати в зворотньому порядку
// let arr = ["Mahmud","Stepan","Mishko","Sashko","Petro","Stepan","Vasily","Aliona","Ahmad","Ahmed","Rahmed","Ramzan","Zyuzia","Qwerty","Obema","Olena","Oksana","Dimas","Times","New","Roman","Ariel"];
// let sort = arr.sort((a, b) => {
//     if (a>b)return -1;
//     return 1;
// })
// console.log(sort);

// c) Отримати в новому масиві тільки ті слова, довжина яких більша за 4 букви (filter)
// let arr = ["Mahmud","Stepan","Mishko","Sashko","Petro","Stepan","Vasily","Aliona","Ahmad","Ahmed","Rahmed","Ramzan","Zyuzia","Qwerty","Obema","Olena","Oksana","Dimas","Times","New","Roman","Ariel"];
// let filter = arr.filter(value => {
//     return value.length>5;
// })
// console.log(arr);
// console.log(filter);

// d) Змінити кожне слово в масиві додавши на початок 'Sam says *ваше слово*'
// let arr = ["Mahmud","Stepan","Mishko","Sashko","Petro","Stepan","Vasily","Aliona","Ahmad","Ahmed","Rahmed","Ramzan","Zyuzia","Qwerty","Obema","Olena","Oksana","Dimas","Times","New","Roman","Ariel"];
// let map = arr.map(value =>{
//     return (`Sam says ${value}`);
// } )
// console.log(map);


//
// 3) Все робити тільки за допомогою методів масивів!
//     Дано масив :
// const users = [
//     {name: 'vasya', age: 31, isMarried: false},
//     {name: 'petya', age: 30, isMarried: true},
//     {name: 'kolya', age: 29, isMarried: true},
//     {name: 'olya', age: 28, isMarried: false},
//     {name: 'max', age: 30, isMarried: true},
//     {name: 'anya', age: 31, isMarried: false},
//     {name: 'oleg', age: 28, isMarried: false},
//     {name: 'andrey', age: 29, isMarried: true},
//     {name: 'masha', age: 30, isMarried: true},
//     {name: 'olya', age: 31, isMarried: false},
//     {name: 'max', age: 31, isMarried: true}
// ];
// a) відсортувати його за  віком (зростання)
// let sort = users.sort((a, b) => a.age>b.age? 1:-1);
// console.log(sort);

//(а потім окремо спадання)
// let sort = users.sort((a, b) => a.age>b.age? -1:1);
// console.log(sort);

// b) відсортувати його за кількістю знаків в імені  (зростання , а потім окремо спадання)
// let sort = users.sort((a, b) => a.name.length>b.name.length? 1:-1);
// console.log(sort);

//(а потім окремо спадання)
// let sort = users.sort((a, b) => a.name.length>b.name.length? -1:1);
// console.log(sort);

// c) пройтись по ньому та додати кожному юзеру поле id - яке характеризує унікальний індентифікатор (По якому принципу його створювати - ваше рішення), та зберегти це в новий масив (первинний масив залишиться без змін)

// не забувати тут ще одну дужку (users, index) => має бути так  ((users, index) =>
// let map = users.map((users, index) => {
//     users.id = index+1;
//     return users;
// });
// console.log(users);
// console.log(map);

//якшо ми використовуємо метод мап, то він мутує наш первинний масив. тому спробую використати JSON -шоб створити копію нашого первинного масиву.


// c) пройтись по ньому та додати кожному юзеру поле id - яке характеризує унікальний індентифікатор (По якому принципу його створювати - ваше рішення), та зберегти це в новий масив (первинний масив залишиться без змін)
// let usersCopy = JSON.parse(JSON.stringify(users));
//
// let map = usersCopy.map((value, index) => {
//     value.id = index+1;
//     return value;
// });
// console.log(users);
// console.log(map);
// d) відсортувати його за індентифікатором (від більшого до меншого)
// let sort = usersCopy.sort((a, b) => {
//     if (a.id>b.id) return -1;
//     return 1;
// })
// console.log(sort);

// e) Всі хто одружений мають попасти у новий масив та отрмати квартиру (reduce)
// let reduce = users.reduce((acc, value) => {
//     if (value.isMarried === true){
//         value.flat = true;
//         acc.push(value);
//     }
//     return acc
// }, []);
// console.log(users);
// console.log(reduce);


//______________________________________________________________________________________________________________________________________________________
// РОБОТА В АУДИТОРІЇ
// ______________________________________________________________________________________________________________________________________________________
//
//
// const cars = [
//     {producer:"subaru",model: "wrx",year: 2010, color:"blue",type: "sedan",engine: "ej204x",volume: 2,power: 400},
//     {producer:"subaru",model: "legacy",year: 2007, color:"silver",type: "sedan",engine: "ez30",volume: 3,power: 250},
//     {producer:"subaru",model: "tribeca",year: 2011, color:"white",type: "jeep",engine: "ej20",volume: 2,power: 300},
//     {producer:"subaru",model: "leone",year: 1998, color:"yellow",type: "sedan",engine: "ez20x",volume: 2,power: 140},
//     {producer:"subaru",model: "impreza",year: 2014, color:"red",type: "sedan",engine: "ej204x",volume: 2,power: 200},
//     {producer:"subaru",model: "outback",year: 2014, color:"red",type: "hachback",engine: "ej204",volume: 2,power: 165},
//     {producer:"bmw",model: "115",year: 2013, color:"red",type: "hachback",engine: "f15",volume: 1.5,power: 120},
//     {producer:"bmw",model: "315",year: 2010, color:"white",type: "sedan",engine: "f15",volume: 1.5, power: 120},
//     {producer:"bmw",model: "650",year: 2009, color:"black",type: "coupe",engine: "f60",volume: 6,power: 350},
//     {producer:"bmw",model: "320",year: 2012, color:"red",type: "sedan",engine: "f20",volume: 2,power: 180},
//     {producer:"mercedes",model: "e200",year: 1990, color:"silver",type: "sedan",engine: "eng200",volume: 2,power: 180},
//     {producer:"mercedes",model: "e63",year:2017, color:"yellow",type: "sedan",engine: "amg63",volume:3,power: 400},
//     {producer:"mercedes",model: "c250",year: 2017, color:"red",type: "sedan",engine: "eng25",volume: 2.5,power: 230}
// ];
//
// Відфільтрувати масив за наступними крітеріями :
//     - двигун більше 3х літрів
// let filter = cars.filter(value =>{
//      return value.volume>=3;
// } )
// console.log(filter);

// - двигун = 2л
// let filter = cars.filter(value => {
//     return value.volume === 2;
// })
// console.log(filter);

// - виробник мерс
// let filter = cars.filter(value => {
//     return value.producer === "mercedes"
// })
// console.log(filter);

// - двигун більше 3х літрів + виробник мерседес
// let filter = cars.filter(value => {
//     return value.volume>=3 && value.producer === "mercedes"
// })
// console.log(filter);

// - двигун більше 3х літрів + виробник субару
// let filter = cars.filter(value => {
//     return value.volume>=3 && value.producer ==="subaru";
// })
// console.log(filter);

// - сили більше ніж 300
// let filter = cars.filter(value => {
//     return value.power >=300;
// })
// console.log(filter);

// - сили більше ніж 300 + виробник субару
// let filter = cars.filter(value => {
//     return value.power >=300 && value.producer === "subaru";
// })
// console.log(filter);

// - мотор серіі ej
// let filter = cars.filter(value => {
//     return value.engine.startsWith("ej");
// })
// console.log(filter);

// - сили більше ніж 300 + виробник субару + мотор серіі ej
// let filter = cars.filter(value => {
//     return value.power>=300 &&
//         value.producer === "subaru" &&
//         value.engine.startsWith("ej");
// })
// console.log(filter);


// - двигун меньше 3х літрів + виробник мерседес
// let filter = cars.filter(value => {
//     return value.volume<=3 && value.producer === "mercedes";
// })
// console.log(filter);

// - двигун більше 2л + сили більше 250
// let filter = cars.filter(value => {
//     return value.volume >=2 && value.power>250;
// })
// console.log(filter);

// - сили більше 250  + виробник бмв
// let filter = cars.filter(value => {
//     return value.power>250 && value.producer === "bmw";
// })
// console.log(filter);


// - взять слдующий массив
// const usersWithAddress = [
//     {id: 9, name: 'vasya', age: 31, isMarried: false, address: {city: 'Kyiv', street: 'Gongadze', number: 16}},
//     {id: 2, name: 'petya', age: 30, isMarried: true, address: {city: 'Rivne', street: 'Zelena', number: 1}},
//     {id: 4, name: 'kolya', age: 29, isMarried: true, address: {city: 'Lviv', street: 'Pasichna', number: 121}},
//     {id: 3, name: 'olya', age: 28, isMarried: false, address: {city: 'Rivne', street: 'Shevchenko', number: 90}},
//     {id: 8, name: 'max', age: 30, isMarried: true, address: {city: 'Lviv', street: 'Kriva Lipa', number: 115}},
//     {id: 6, name: 'anya', age: 31, isMarried: false, address: {city: 'Lviv', street: 'Shevchenko', number: 2}},
//     {id: 10, name: 'oleg', age: 28, isMarried: false, address: {city: 'Kyiv', street: 'Centralna', number: 22}},
//     {id: 5, name: 'andrey', age: 29, isMarried: true, address: {city: 'Lviv', street: 'Gorodotska', number: 43}},
//     {id: 1, name: 'masha', age: 30, isMarried: true, address: {city: 'Kyiv', street: 'Peremogi', number: 12}},
//     {id: 7, name: 'olya', age: 31, isMarried: false, address: {city: 'Lviv', street: 'Naukova', number: 16}},
//     {id: 11, name: 'max', age: 31, isMarried: true, address: {city: 'Rivne', street: 'Ivana Franka', number: 121}}
// ];
//
// -- Відсортувати їх по ID
// let sort = usersWithAddress.sort((a, b) => {
//     if (a.id>b.id) return 1;
//     return -1;
// })
// console.log(sort);

// -- Відсортувати їх по ID в зворотньому порядку
// let sort = usersWithAddress.sort((a, b) => {
//     if (a.id>b.id) return -1;
//     return 1;
// })
// console.log(sort);

// // -- Відсортувати по віку
// let sort = usersWithAddress.sort((a, b) => {
//     if (a.age>b.age) return 1;
//     return -1;
// })
// console.log(sort);

// -- Відсортувати по віку в зворотньому порядку
// let sort = usersWithAddress.sort((a, b) => {
//     if (a.age>b.age) return -1;
//     return 1;
// })
// console.log(sort);

// -- Відсорутвати по імені
// let sort = usersWithAddress.sort((a, b) => {
//     if (a.name>b.name)return 1;
//     return -1;
// })
// console.log(sort);

// -- Відсорутвати по назві вулиці
// let sort = usersWithAddress.sort((a, b) => {
//     if (a.address.street>b.address.street)return 1;
//     return -1;
// })
// console.log(sort);

// -- Відсорутвати по номеру будинку
// let sort = usersWithAddress.sort((a, b) => {
//     if (a.address.number>b.address.number)return 1;
//     return -1;
// })
// console.log(sort);

// -- Залигити тільки тих, хто молодший ніж 30 (filter)
// let filter = usersWithAddress.filter(value => {
//     return value.age<30;
// })
// console.log(filter);

// -- Залишити тільки одружених
// let filter = usersWithAddress.filter(value => {
//     return value.isMarried === true;
// })
// console.log(filter);

// -- Залишити тільки одружених, які молодші за 30
// let filter = usersWithAddress.filter(value => {
//     return value.isMarried === true && value.age<30;
// })
// console.log(filter) ;

// -- Залишити лише тих, в кого парні номери будинків.
// let filter = usersWithAddress.filter(value => {
//     return value.address.number %2 ===0;
// })
// console.log(filter) ;

// -- Порахувати загальний вік всіх людей. (reduce)
// let reduce = usersWithAddress.reduce((acc, value) => {
//     acc += value.age;
//     return acc;
// },0)
// console.log(reduce);

// -- Ті, хто одружений і старий за 30 має отримати обєкти child і попасти в новий масив (reduce).
// Дуже цікава таска. Метод редьюс заміняє метод фільтр і мап.
// let reduce = usersWithAddress.reduce((acc, value) =>{
//     if (value.isMarried ===true && value.age>=30){ usersWithAddress.child = true;
//     acc.push(value);
//     }
//         return acc;
// },[] )
// console.log(reduce);
//
//
// ______________________________________________________________________________________________________________________________________________________
// Додатково
// ______________________________________________________________________________________________________________________________________________________
//
// Задача: дан отсортированный по возрастанию массив целых чисел.
//     Необходимо вернуть наименьший и наибольший индекс заданного элемента.
//     Входные данные: arr — массив целых чисел значения которых по модулю не больше 10. Размер массива не более 10 элементов.
//     Вывод: наибольший и наименьший индекс в массиве заданного элемента. Если такого элемента нет в массиве, выведите -1.
//
// Пример:
//     Arr = [1, 2, 3, 4, 4, 4, 4, 7, 7, 9, 14]
// 1. Key = 1
// Answer: MinIndex = 0, MaxIndex = 0.
// 2. Key = 4
// Answer: MinIndex = 3, MaxIndex = 6.


// indexOf – повертає нам номер індекса на якому є символ який ми вказали. Але воно вказаує тільки перший елемент. lastIndexOf - крокує з кінця масиву
// let returnMinMax = (arr, el) =>{
//
//     let min = arr.indexOf(el)
//     let max = arr.lastIndexOf(el)
//     console.log(`Answer: MinIndex = ${min}, MaxIndex = ${max}`)
// }
// returnMinMax([1, 2, 3, 4, 4, 4, 4, 7, 7, 9, 14], 7)

// Н О В І  Т А С К И   (js_demos/js/preview/lesson6)
//
// - 1.створити функцію, яка генерує масив рандомних числових цілих значень в діапазоні від 0 до 100.
// - 2.створити (або згенерувати, за допомоги попередньої функції) масив рандомних цілих числових значень. Відсортувати його за допомоги sort
// - 3.створити (або згенерувати, за допомоги попередньої функції) масив рандомних цілих числових значень. відфільтрувати  його за допомоги filter, залишивши тільки парні числа
// - 4.створити масив рандомних цілих числових значень (або згенерувати, за допомоги попередньої функції) . за допомоги map та колбеку перетворити всі об'єкти в масиві на стрінгові. (незнаю куди тут колбек вмістити, мабудь чогось не понімаю)
//1----------------------------------------------------------
// let randomNumb = (max, min, n) =>{
//     let randomArr = [];
//     for (let i = 0; i < n; i++) {
//         randomArr.push(Math.round(Math.random()*(max-min)+min));
//
//     }
//     return randomArr;
// }
// console.log(randomNumb(100, 25, 50));
//2.----------------------------------------------------------
// let sort = randomNumb(10,1,50).sort((a, b) => a-b);
// console.log(sort);
//3.----------------------------------------------------------
// let filter = randomNumb(50,25,50).filter(value => value %2 ===0);
// console.log(filter);
//4.----------------------------------------------------------
// let randomNumb1 = randomNumb(50, 25, 50);
// console.log(randomNumb1);
//
// let map = randomNumb1.map(value =>value.toString());
// console.log(map);


// - створити функцію sortNums(direction), яка прймає масив чисел, та сортує його від більшого до меньшого, або навпаки в залежності від значення аргументу direction.
//     let nums = [11,21,3];
// sortNums('ascending') // [3,11,21]
// sortNums('descending') // [21,11,3]

// function sortNums (numbers, direction){
//     let sortedArray = [];
//     if (direction ==="asc"){
//         console.log(sortedArray = numbers.sort((a, b) => a - b));
//     }else if (direction === "desc"){
//         console.log(sortedArray = numbers.sort((a, b) => b - a));
//     }
//     return sortedArray;
// }
// sortNums([3,123,123,123,12,31,23,12,3,12],"desc");

// - є масив
// let coursesAndDurationArray = [
//     {title: 'JavaScript Complex', monthDuration: 5},
//     {title: 'Java Complex', monthDuration: 6},
//     {title: 'Python Complex', monthDuration: 6},
//     {title: 'QA Complex', monthDuration: 4},
//     {title: 'FullStack', monthDuration: 7},
//     {title: 'Frontend', monthDuration: 4}
// ];
// -- відсортувати його за спаданням за monthDuration
// let sort = coursesAndDurationArray.sort((a, b) => {
//    return b.monthDuration - a.monthDuration;
// })
// console.log(sort);

// -- відфільтрувати , залишивши тільки курси з тривалістю більше 5 місяців
// let filter = coursesAndDurationArray.filter(value => {
//    return  value.monthDuration>5;
// })
// console.log(filter);

// - Напишите функцию cutString(str, n), которая делит строку на подстроки, состоящие из n символов.
// document.writeln(cutString('наслаждение',3)) // [нас,лаж,ден,ие]
// let cutString = function (str, n){
//    let re = /\B(?=(\d{3})+(?!\d))/g;
//    str.toUpperCase().toString().replace(re," - ");
//    return str;
// }
// console.log(cutString("кукурудза", 2));

// - Знайти та вивести довижину настипних стрінгових значень
// 'hello world', 'lorem ipsum', 'javascript is cool'
// let lengthString = function (){
//    for (let argument of arguments) {
//       let length = argument.length;
//       console.log(length);
//    }
// }
// lengthString("hello world!", "lorem ipsum", "javascript is cool");

// - Перевести до великого регістру наступні стрінгові значення
// 'hello world', 'lorem ipsum', 'javascript is cool'
// let uCase = function (){
//    for (let argument of arguments) {
//       let up = argument.toUpperCase();
//       console.log(up);
//    }
// }
// uCase("hello world", "lorem ipsum", "javascript is cool");

// - Перевести до нижнього регістру настипні стрінгові значення
// 'HELLO WORLD', 'LOREM IPSUM', 'JAVASCRIPT IS COOL'
// let lCase = function (){
//    for (let argument of arguments) {
//       let low = argument.toLowerCase();
//       console.log(low);
//    }
// }
// lCase("HELLO WORLD","LOREM IPSUM","JAVASCRIPT IS COOL");

// - Є "брудна" стрінга let str = ' dirty string   ' . Почистити її від зайвих пробілів.
// let notValid = function (){
//     for (let argument of arguments) {
//         let valid = argument.toLowerCase().trim().replace(/\s+/g, ' ');
//         console.log(valid);
//     }
// }
// notValid( "     dirty string   ", "     ABRAKADABRA   ", "     ChUpApPi       MuNyAnIyO   ", "     ASasfklASF   ");

// - Напишіть функцію stringToarray(str), яка перетворює рядок на масив слів.
// ['Каждый', 'охотник', 'желает', 'знать']
// let stringToArray = function (str) {
//     return console.log(str.split(" "));
//
// }
// stringToArray("Каждый охотник желает знать");

// - Напишіть функцію delete_characters(str, length), яка повертає підрядок, що складається із зазначеної кількості символів.
//     let str = 'Каждый охотник желает знать';
// document.writeln(delete_characters(str, 7)); // Каждый
// let deleteCharacters = function (str, length){
//   return  str.slice(0,length);
// }
// console.log(deleteCharacters("Каждый охотник желает знать", 9));

// - Напишіть функцію insert_dash(str), яка приймає рядок str як аргумент і вставляє тире (-) між словами. При цьому всі символи рядка необхідно перевести у верхній регістр.
//     let str = "HTML JavaScript PHP";
// document.writeln(insert_dash(str)); // 'HTML-JAVASCRIPT-PHP'
// Якщо ми пишем " ", то replace міняє тільки перший побачений пробіл ,
// Щоб замінити всі пробіли, треба визвати глобальний флаг (global match flag) =====> /( )/g
// let insertDash = function (){
//    for (let argument of arguments) {
//      let string = argument.toUpperCase().replace(/( )/g," - ");
//       console.log(string);
//    }
//    return arguments;
// }
// insertDash("HTML JavaScript PHP");

// - Напишіть функцію, яка приймає рядок як аргумент і перетворює регістр першого символу рядка з нижнього регістру у верхній.
// в першому прикладі доступились до букви charAt(0) і повернули все інше починаючи з другої букви substring'ом
// в другому прикладі доступились до букви як до масиву значень, і повернули slic'ом
//1.
// let firstLetterCaps = function (string){
//   return  string.charAt(0).toUpperCase() + string.substring(1);
// }
// console.log(firstLetterCaps("парампампам"));
//2.
// let firstLetterCaps = function (string){
//    return string[0].toUpperCase() + string.slice(1);
// }
// console.log(firstLetterCaps("парампампам"));

// str.firstLetterCaps
// - Напишіть функцію capitalize(str), яка повертає рядок, у якому кожне слово починається з великої літери.
// можна дізнатись індекси пробілів, збільшити цей індекс на один, і циклом виставити їм леттерКапс тільки ще першу букву.
// або сплітом розділити і кожне слово буде під своїм індексом, тільки теж додати першу букву бо там немає пробіла.
// upd: з циклами не вийшло, перетворити масив в стрінгу.// Метод join() объединяет все элементы массива в строку.(в дужках сіпаратор)
// substr // substring // slice // - - В чому між ними різниця???
// function capitalize(str) {
//     return str
//         .toLowerCase()
//         .split(' ')
//         .map(function (wordInArr) {
//             return wordInArr[0].toUpperCase() + wordInArr.slice(1);
//         })
//         .join(' ');
// }
// console.log(capitalize("ShLa ShAsHa Po ShOsHe I ShOsHaLa ShUsHkU, tak ishe raz, shla sasha po shoshe i shosala shusku. ot halepa"))


// function capitalize(str) {
//     return str
//         .toLowerCase()
//         .split('')
//         .map(function (wordInArr) {
//             return wordInArr[0].toUpperCase() + wordInArr.slice(1);
//         })
//         .join(' ');
// }
// console.log(capitalize("ShLa ShAsHa Po ShOsHe I ShOsHaLa ShUsHkU, tak ishe raz, shla sasha po shoshe i shosala shusku. ot halepa"))