// 1) створити функцію яка приймає масив та виводить його

// function acceptArr (arr) {
//  console.log(arr)
// }
// acceptArr([1,2,3,4,5,6,7,8,9,0]);

// 2) створити функцію яка заповнює масив рандомними числами та виводить його. Для виведення використати попередню функцію.

// function  randomNumber (){
//     let emptyArr = [];
//     for (let i = 0; i <10; i++) {
//         let random = (Math.round(Math.random() * 100))
//         emptyArr.unshift(random);
//     }
//     console.log(emptyArr);
// }
//
// for (let i = 0; i <5; i++) {
//     randomNumber();
// }

// 3) створити функцію яка приймає три числа та виводить найменьше. (Без Math.min!)

// function threeNumber(one, two, three){
//     if (one<two && one<three){
//         console.log(one);
//     }else if
//     (two<one && two<three){
//         console.log(two);
//     }
//     console.log(three)
// }
// threeNumber(2,3,1);

// 4) створити функцію яка приймає три числа та виводить найбільше. (Без Math.max!)
// function threeNumber(one, two, three) {
//     if (one > two && one > three) {
//         console.log(one);
//     }else if
//     (two>one && two>three){
//         console.log(two);
//     }
//     console.log(three);
// }
// threeNumber(1,2,3);

// 5) створити функцію яка повертає найбільше число з масиву






// 6) створити функцію яка повертає найменьше число з масиву
// 7) створити функцію яка приймає масив чисел, сумує значення елементів масиву та повертає його.
// 8) створити функцію яка приймає масив чисел та повертає середнє арифметичне його значень.
// 9) Створити функцію яка приймає масив будь яких объектів, та повертає масив ключів всіх обєктів
// EXAMPLE:
//     [{name: 'Dima', age: 13}, {model: 'Camry'}]  ===> [ name, age, model ]
// 10) Створити функцію яка приймає масив будь яких объектів, та повертає масив значень всіх обєктів
// EXAMPLE:
//     [{name: 'Dima', age: 13}, {model: 'Camry'}]  ===> [ Dima, 13, Camry ]
// 11) створити функцію  яка скаладає значення елементів з однаковими індексами  та повертає новий результуючий масив.
//     EXAMPLE:
// [1,2,3,4]
//     [2,3,4,5]
// результат
//     [3,5,7,9]
//
//
// ============================================================================================
//
// - створити функцію яка приймає будь-яку кількість чисел, повертає найменьше, а виводить найбільше (Math використовувати заборонено);
// - Взяти задачі з завдання 10 та 9 та обєднати їх в одну динамічну функцію.
//     Що б я міг сам вибрати повернути мені масив ключів чи масив значень.
// - Приймає масив та число "i", та міняє місцями об'єкт який знаходиться в індексі "i" на "i+1"
//   EXAMPLE:
//   foo([9,8,0,4], 0) // ==> [ 8, 9, 0, 4 ]
//   foo([9,8,0,4], 1) // ==> [ 9 ,0, 8, 4 ]
//   foo([9,8,0,4], 2) // ==> [ 9, 8, 4, 0 ]
//
// - Сворити функцію яка буде переносити елементи з значенням 0 у кінець маисву. Зберігаючи при цьому порядок не нульових значень.
// Двожина масиву від 2 до 100
// EXAMPLE:
// [1,0,6,0,3] => [1,6,3,0,0]
// [0,1,2,3,4] => [1,2,3,4,0]
// [0,0,1,0]   => [1,0,0,0]
//
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
//
//
//
// // ******************* НАЗАД В МИНУЛЕ *********************** //
// Створити функцію яка :
// - Додає в боді блок з текстом "Hello owu"
// - Додає в боді елемент з текстом . Тип елементу та текст отримати через аргументи
// - приймає масив автомобілів (можна взяти з попередніх дз ),та  індентифікатор елемнту в який потрібно додати список цих автомобілів.
// Для кожного автомобіля створити свій блок, та додати його в елемент, індентифікатор якого ви отримали. Всі властивості авто в обному блоці
// - приймає масив автомобілів (можна взяти з попередніх дз ),та  індентифікатор елемнту в який потрібно додати список цих автомобілів.
// Для кожного автомобіля створити свій блок, та додати його в елемент, індентифікатор якого ви отримали.
// Для кожної властивості створити всередені блока автомоблія свій блок
// // ******************* НАЗАД В МИНУЛЕ *********************** //