// С Т А Р І  Т А С К И       (js_demos/kminV/Lesson1)
// - Створити змінні. Присвоїти кожному з них значення: 'hello','owu','com', 'ua', 1, 10, -999, 123, 3.14, 2.7, 16, true, false.
//     Вивести кожну змінну за допомогою: console.log , alert, document.write
// let greeting = "hello";
// console.log(greeting);
// alert(greeting);
// document.write(greeting);
//
// let company = "owu";
// console.log(company);
// alert(company);
// document.write(company);
//
// let domen = "com";
// console.log(domen);
// alert(domen);
// document.write(domen);
//
// let country = "ua";
// console.log(country);
// alert(country);
// document.write(country);
//
// let number1 = (1);
// console.log(number1);
// alert(number1);
// document.write(number1);
//
// let number2 = (10);
// console.log(number2);
// alert(number2);
// document.write(number2);
//
// let number3 = (-999);
// console.log(number3);
// alert(number3);
// document.write(number3);
//
// let number4 = (123);
// console.log(number4);
// alert(number4);
// document.write(number4);
//
// let number5 = (3.14);
// console.log(number5);
// alert(number5);
// document.write(number5);
//
// let number6 = (2.7);
// console.log(number6);
// alert(number6);
// document.write(number6);
//
// let number7 = (16);
// console.log(number7);
// alert(number7);
// document.write(number7);
//
// let boolean1 = true;
// console.log(boolean1);
// alert(boolean1);
// document.write(boolean1);
//
// let boolean2 = false;
// console.log(boolean2);
// alert(boolean2);
// document.write(boolean2);

// - Переприсвоїти кожну змінну з завдання вище на будь які довільні значення.
//     Вивести кожну змінну за допомогою: console.log , alert, document.write
// greeting = ("hi");
// console.log(greeting);
// alert(greeting);
// document.write(greeting);
//
// company = ("okten");
// console.log(company);
// alert(company);
// document.write(company);
//
// domen = ("org");
// console.log(domen);
// alert(domen);
// document.write(domen);
//
// country = ("usa");
// console.log(country);
// alert(country);
// document.write(country);
//
// number1 = (2);
// console.log(number1);
// alert(number1);
// document.write(number1);
//
// number2 = (11)
// console.log(number2);
// alert(number2);
// document.write(number2);
//
// number3 = (-998);
// console.log(number3);
// alert(number3);
// document.write(number3);
//
// number4 = (321);
// console.log(number4);
// alert(number4);
// document.write(number4);
//
// number5 = (4.25);
// console.log(number5);
// alert(number5);
// document.write(number5);
//
// number6 = (3.8);
// console.log(number6);
// alert(number6);
// document.write(number6);
//
// number7 = (17);
// console.log(number7);
// alert(number7);
// document.write(number7);
//
// boolean1 = false;
// console.log(boolean1);
// alert(boolean1);
// document.write(boolean1);
//
// boolean2 = true;
// console.log(boolean2);
// alert(boolean2);
// document.write(boolean2);

// - За допомогою 3х різних prompt() отримати 3 слова які являються вашими Імям, По-Батькові та роками.
//     Вивести "Вітаю *Імя* *По батькові*. Тобі *вік* років".
// let name = prompt("Ім'я");
// let surname = prompt("Прізвище");
// let middleName = prompt("По батькові");
// let old = prompt("Вік");
//
// console.log(name);
// alert(name);
// document.write(name);
//
// console.log(surname);
// alert(surname);
// document.write(surname);
//
// console.log(middleName);
// alert(middleName);
// document.write(middleName);
//
// console.log(old);
// alert(old);
// document.write(old);
//
// alert(`Вітаю ${name}${middleName}.Тобі ${old} років`);

// - Взяти змінні з завдання вище та зєднати їх в одну змінну (конкатинація).
// let info = name+" "+surname+" "+middleName+" "+old;
// console.log(info);
// alert(info);
// document.write(info);

// - За допомогою prompt() отримати 3 числа. Привести їх до числа (Google "String to number JS"). Вивести їх в консоль.
// let number1 = Number(prompt('Введіть перше число'));
// let number2 = Number(prompt('Введіть друге число'));
// let number3 = Number(prompt('Введіть третє число'));
//
// console.log(number1);
//
// console.log(number2);
//
// console.log(number3);

// - За допомогою prompt() отримати 4 числа. Привести їх до числа за допомогою paeseInt. Додати їх всі мож собою і результат вивести в консоль.
// let number1 = parseInt(prompt('Введіть перше число'));
// let number2 = parseInt(prompt('Введіть друге число'));
// let number3 = parseInt(prompt('Введіть третє число'));
// let number4 = parseInt(prompt('Введіть четверте число'));
//
// console.log(number1+number2+number3+number4);

// - За допомогою prompt() отримати 3 числа з плаваючою точкою за допомогою parseFloat.
//     Просумувати їх. Отрманий результат записати в змінну result. Вивести цю змінну в консоль.
// let number1 = parseFloat(prompt('Введіть перше дробове число'));
// let number2 = parseFloat(prompt(''));
// let number3 = parseFloat(prompt(''));
//
// let result = (number1+number2+number3);
// console.log(result);

// // - За допомогою prompt() отримати 3 числа з плаваючою точкою. Заокруглити їх (Google "round number JS").
// // Просумувати їх між собою. Результат вивести в консоль.
// let number1 = parseInt(prompt('Введіть перше дробове число'));
// let number2 = parseInt(prompt('Введіть друге дробове число'));
// let number3 = parseInt(prompt('Введіть третє дробове число'));
//
// let result = (number1+number2+number3);
// console.log(result);

// - За допомогою prompt() отримати 2 цілих числа.
//     Перше число - це число яке будуть підносити до степеня. Друге число - це число яке являється степенню.
//     За допомогою Math.pow (Google) піднести перше число в степінь другого числа.
//     Example. Число 1 = 5. Число 2 = 2. Результат = 25
// let number1 = parseInt(prompt('Введіть перше число'));
// let number2 = parseInt(prompt('Введіть друге число'));
//
// let result = Math.pow(number1,number2);
// console.log(result);

//     - За допомогою оператора typeof визначити типи наступних змінних та вивести їх в консоль.
//     let a = 100; let b = '100'; let c = true;
// let a = 100;
// let b = "100";
// let c = true;
//
// console.log(typeof a);
// console.log(typeof b);
// console.log(typeof c);

// - Поставет відповідний оператор в виразах що б вийшов відповідний результат.
//     В однакових виразаї не використовувати однакові оператори!!!
// 5 < 6 -> true
// 5 > 6 -> false
// 5 >= 6 -> false
// 5 <= 6 -> false
// 10 == 10 -> true
// 10 === 10 -> true
// 10 !== 10 -> false
// 10 < 10 -> false
// 10 > 10 -> false
// 123 === '123' -> false
// 123 !=== '123' -> true

// Додатково:
//     - Подивіться на наступні вирази і спробуйте вгадати яким буде вивід в консоль. Перевірте себе.
// console.log(132 > 100 && 45 < 12 );false
// console.log(34 > 33 && 23 < 90 );true
// console.log(99 > 100 && 45 > 12 );false
// console.log(132 > 100 || 45 < 12 );true
// console.log(111 > 11 || 45 < 111 );true
// console.log((111 > 11 || 45 < 111) && (132 > 100 || 45 < 12) );true
// console.log((111 > 11 || 45 < 56) || (132 > 100 || 45 < 12) );true
// console.log((132 > 100 && 45 < 12 ) && (132 > 100 || 45 < 12 ) );false
// console.log((111 > 11 || 45 < 111) || (99 > 100 && 45 > 12 ));true
// // &&-i; ||-abo;
// // (*всі числа true крім 0);
// // (*всі string значення true);
// console.log(" ");
// console.log(!!'-1');true
// console.log(!!-1);true
// console.log(!!'0');true
// console.log(!!'null');true
// console.log(!!null);false
// console.log(!!'undefined');true
// console.log(!!undefined);false
// console.log(!!(3/'owu'));false
// console.log((111 > 11 || 45 < 111) ||  !!'0');true
// console.log((!!111 == !!11 || 45 < 111) && (99 > 100 && 45 > 12 ));false

// РОБОТА В АУДИТОРІЇ
// 1. Оголосіть змінні str, num, flag и txt зі значеннями «Привіт», 123, true, «true».
// За допомогою typeof переконайтесь, що значення змінних належать типам: string, number и  boolean.
// let str = ("Привіт");
// let num = (123);
// let flag = true;
// let txt = ("true");
//
// console.log(typeof str);
// console.log(typeof num);
// console.log(typeof flag);
// console.log(typeof txt);

// 2. Оголосіть змінні a1, a2, a3, a4, a5. За домогою 3х математичних оператцій отримайте числа:
//     34,
//         12,
//         66,
//         90,
//         87
// Старайтесь використовувати різні оператори.
//     Example: 88 = (16 / 2) * 11
// let a1 = ((256/4)-30);
// console.log(a1);
//
// let a2 = (Math.min(34,12,66,90,87));
// console.log(a2);
//
// let a3 = (Math.pow(7,2)+17);
// console.log(a3);
//
// let a4 = (Math.sqrt(8100));
// console.log(a4);
//
// let a5 = (Math.round(86.5));
// console.log(a5);

// 3.  Створіть змінні a6, a7, a8, a9, a10. Запишіть в них результати виразів:
//a6     5 % 3,
//a7     3 % 5,
//a8     5 + '3',
//a9     '5' - 3,
//a10     75 + 'кг'
//a11     "5"+"3"
//a12     "5"-"3"
// let a6 = (2);
// let a7 = (3);
// let a8 = ("53");
// let a9 = (2);
// let a10 = ("75kg");
// let a11 = ("53")
// let a12 = (2)

// 4. Напишіть код, який вираховує площу прямокутника висотою 23см. (змінна height) та шириною 10см (змінна width).
// Значееня площі зберігати в змінній s.
// let height = (23);
// let width = (10);
// let cm = ("см")
// let s = (height+width+" "+cm);
// console.log(s);

// 5.  Напиши код, который находит объем цилиндра высотой 10м (переменная heightC) и диаметром основания 4м (dC),
//     результат поместите в переменную v.
// let heightC = (10);
// let dC = (4);
// let m = ("м");
//
// let v = (3.14*heightC*dC+" "+m);
// console.log(v);

// 6. У прямоугольного треугольника две стороны n (со значением 3) и m (со значением 4).
// Найдите гипотенузу k по теореме Пифагора (нужно использовать функцию Math.pow(число, степень)
// или оператор возведения в степень ** ).
// let n = (3);
// let m = (4);
// let k = (Math.sqrt(Math.pow(n,2)+Math.pow(m,2)))
//
// console.log(k);

// 7. Напишите скрипт, который выводит "Hello world", создавши переменную str и выводить спомощью
// document.write, alert и console.log.
// let str = ("Hello World");
//
// console.log(str);
// document.write(str);
// alert(str);

// 8. Вывести в окно браузера при помощи метода alert() следующие данные: Ваше ФИО, возраст, хобби
// (каждой на новой строки спомощью \n).
// alert("Kravchenko Mykhailo Ivanovych,\n 22, \n sleep.");

// 9. Создать 4 переменные с использованием ключевого слова let с именами str1, str2, str3, concatenation.
//     Переменной str1 присвоить фразу ‘Кто ‘, str2 – ‘ты ‘, str3 – ‘такой?’
//   Локальной переменной concatenation присвоить результат конкатенации 3-х строк: str1, str2, str3.
//     Вывести в документ содержимое переменной concatenation спомощью document.write
// let str1 = ("Кто");
// let str2 = ("ты");
// let str3 = ("такой?");
// let concatenation = (str1+" "+str2+" "+str3);
// document.write(concatenation);

// 10. Какие значения выведет в окно браузера следующий фрагмент кода?  и почему?
// let str = "20";
// let a = 5;
// document.write(str + a + "<br/>"); //205;
// //виконується операція поєднання змінних (конкатенація),а дія додавання не виконується так,як перше число в стрічкі.
// //якби було document.write(a + a + "<br/>"); то вийшло б 10.(дія додавання виконується)
// document.write(str - a + "<br/>"); //15; Виконується дія віднімання.
// document.write(str * "2" + "<br/>"); //40; Виконується дія множення
// document.write(str / 2 + "<br/>"); //10; Виконується ділення.

// 11. Какие значения выведет в окно консоли следующий фрагмент кода если его поместить в console.log?
// parseInt("3.14") //3
// parseInt("-7.875") //-7
// parseInt("435") //435
// parseInt("Вася") //NaN

// 12.  С помощью окна ввода, вызываемого методом prompt, пользователь может ввести данные, которые будут использоваться далее, повторите код ниже
// let str = prompt("Enter something", "ho-ho")
// console.log(str);
// let login = prompt("Введіть свій логін");
// let password = prompt("Введіть свій пароль");
//
// console.log(login);
// console.log(password);

// 13. С помощью окна ввода, вызываемого методом prompt, сделать сложение двух чисел, а вывод результата при помощи метода alert
// let number1 = (prompt("Введіть перше число"));
// let number2 = (prompt("Введіть друге число"));
// let result = (number1*number2);
//
// alert(result);

// 14. С помощью окна ввода, вызываемого методом prompt, пользователь последовательно выводит имя, фамилию и возраст, а вам не обходимо вывести строку такого вида
// Доброго вечера Иван Иванов, мои поздравления что вам 32 , а вывод результата при помощи метода alert
// let name = prompt("Введіть своє ім'я");
// let surname = prompt("Введіть своє прізвище");
// let yearsOld = prompt("Введіть свій вік");
//
// alert(`Доброго вечера ${name} ${surname}, мои поздравления, что вам ${yearsOld} `)

// ======ДОП============
// 1. Три різних числа вводяться через prompt().
//     За допомоги if else вивести іх в порядку зростання. (відсортувати по зростанню)
// let number1 = parseInt(prompt("Введіть перше число"));
// let number2 = parseInt(prompt("Введіть друге число"));
// let number3 = parseInt(prompt("Введіть третє число"));
//
// if (number1<number2 && number1<number3 && number2<number3){
//     console.log(number1);
//     console.log(number2);
//     console.log(number3);
// } else if (number2<number1 && number2<number3 && number1<number3) {
//     console.log(number2);
//     console.log(number1);
//     console.log(number3);
// } else if (number3<number1 && number2<number1 && number3<number2) {
//     console.log(number3);
//     console.log(number2);
//     console.log(number1);
// } else if (number1<number2 && number1<number3 && number3<number2){
//     console.log(number1);
//     console.log(number3);
//     console.log(number2);
// } else if (number2<number3 && number2<number1 && number3<number1){
//     console.log(number2);
//     console.log(number3);
//     console.log(number1);
// } else if (number3<number2 && number3<number1 && number1<number2){
//     console.log(number3);
//     console.log(number1);
//     console.log(number2);
// }

// 2. Все параматры получаем с клавиатуры!!!!
//     Имитируем поведение пешехода на перекстке.
//     Если светофор зеленый - вывести "иди".
//     Если светофор желтый - вывести "подожди".
//     Если светофор красный - вывести "стой".
//     Если светофор в аварийном режиме вывести "делай что хочешь"!
// let color = prompt("Введи колір світлофора (green, yellow, red, check)");
//
// let green = ("green");
// let yellow = ("yellow");
// let red = ("red");
// let check = ("check");
//
//
// if (color===green){
//     alert("Go");
// } else if (color===yellow){
//     alert("Hold");
// } else if(color===red){
//     alert("Stop");
// }else if (color===check){
//     alert("Dont panic")
// }

// 3.
// Все параметры получаем с клавиатуры!!!!(prompt , confirm)
// Создать переменную isRoadClear которая характеризирует наличие на дороге машин.
//     Улучшаем предыдущее задание.
//     Если светофор зеленый и машин нет - вывести "иди".
//     Если светофор зеленый и машины есть  - вывести подожди пока нарушители проедут".
// Если светофор желтый и машины есть - вывести "жди".
//     Если светофор желтый и машин нет - вывести "все рано жди".
//     Если светофор красный и машин нет- вывести "стой все рано".
//     Если светофор красный - и машины есть вывести "стой и жди".
//     Если светофор в аварийном режиме вывести "делай что хочешь"!
// let color = prompt("Введи колір світлофора (green, yellow, red, check)");
// let isRoadClear = prompt("На дорозі є машини?(yes? or no?)");
// let green = ("green");
// let yellow = ("yellow");
// let red = ("red");
// let check = ("check");
// let noCar = ("no");
// let car = ("yes")
//
// if (color===green && isRoadClear===noCar){
//     alert("Можеш йти");
// } else if (color===green && isRoadClear===car) {
//     alert("Почекай поки проїдуть правопорушники");
// } else if (color===yellow && isRoadClear===noCar){
//     alert("Почекай зеленого кольору світлофора");
// } else if (color===yellow && isRoadClear===car){
//     alert("Почекай зеленого кольору світлофора і коли проїдуть машини")
// } else  if(color===red && isRoadClear===noCar){
//     alert("Почекай зеленого кольору світлофора");
// } else if (color===red && isRoadClear===car){
//     alert("Почекай зеленого кольору світлофора і коли проїдуть машини")
// } else if (color===check && isRoadClear===noCar){
//     alert("Можеш йти");
// } else if (color===check && isRoadClear===car){
//     alert("Почекай коли проїдуть машини і йди")
// }


// Н О В І  Т А С К И       (js_demos/js/preview/lesson1)

// 1. Створити масив з 10 чисел (можна використовувати Math.random Та Math.floor). Скласти результат цих чисел в змінній result.
//1. Спосіб
// let arr = [1,2,3,4,5,6,7,8,9,0];
// let result = 0;
// for (let number of arr) {
//     result += number;
// }
// console.log(result);
//2. Спосіб
// let arrRandom = [];
// for (let i = 0; i < 10; i++) {
//     arrRandom.push(Math.floor(Math.random()*100));
// }
// console.log(arrRandom);
// let result1 = 0;
// for (let number1 of arrRandom) {
//     result1 += number1;
// }
// console.log(result1)

// 2. Створити об'єкт book з наступними полями  - назва, кількість сторінок, жанр
// let book = {name:"ABC", number:4, genre:"child"};
// console.log(book);

// 3. Створити об'єкт book з наступними полями  - назва, кількість сторінок, жанр, автори
// let book = {name:"ABC", number:4, genre:"child", author:"QWERTY", title:true};
// console.log(book);

// 4. Створити маис об'єктів book з наступними полями  - назва, кількість сторінок, жанр, автори. Вивести кожну книгу як окремий об'єкт
// let book = [
//     {name:"ABC", number:4, genre:"child1", author:"QWERTY", title:true},
//     {name:"ADB", number:5, genre:"child2", author:"QWERTY", title:false},
//     {name:"ACA", number:6, genre:"child3", author:"QWERTY", title:true},
//     {name:"AAS", number:4, genre:"child4", author:"QWERTY", title:false},
//     {name:"ASD", number:6, genre:"child5", author:"QWERTY", title:true},
//     {name:"ABA", number:7, genre:"child6", author:"QWERTY", title:false},
//     {name:"ABD", number:8, genre:"child7", author:"QWERTY", title:true},
// ];
// for (const bookElement of book) {
//     console.log(bookElement);
// }

// 5. Напишіть код, який вираховує площу прямокутника висотою 23см. (змінна height) та шириною 10см (змінна width).
// Значення площі зберігати в змінній s.
// let height = 23;
// let width = 10;
// s = height*width;
// console.log(s);

// 6. Напиши код, який знаходить об'єм циліндра заввишки 10м (змінна heightC) та діаметром основи 4м (dC),
// результат помістіть у змінну v.
// let height = 10;
// let radius = 2;
// let result;
// let s1 = Math.PI * Math.pow(radius,2);
// let s2 = 2 * Math.PI * radius * height;
// result = Math.round((s1 * 2) + s2);
// console.log(result);

// 7. У прямокутного трикутника дві сторони n (зі значенням 3) та m (зі значенням 4).
// Знайдіть гіпотенузу k за теоремою Піфагора (потрібно використовувати функцію Math.pow (число, ступінь) або оператор зведення в ступінь **).
// let n = 3;
// let m = 4;
// let c;
// c= Math.pow(Math.pow(n,2) + Math.pow(m,2),1/2);
// console.log(c);

// - Створити 3 змінних firstName, middleName, lastName, наповнити їх своїм ПІБ. З'єднати їх в одну змінну person. (Не об'єкт)
// firstName = "Ramos";
// middleName = "Mikromolekula 1100";
// lastName = "Mahmud Stepanovych";
//
// let person = (`${firstName} ${middleName} ${lastName}`);
// console.log(person);

