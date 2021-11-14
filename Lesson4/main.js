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
// і так далі

// function returnMaxNumb(arr){
//
// arr.sort((a, b) => a - b);
// let returnMax = arr[arr.length-1];
// console.log(returnMax);
// }
//     returnMaxNumb([20,10,50,30,40,30,10,90,80,60,20,10,70,60,60,80,10,20,99,40]);
//     returnMaxNumb([99,10,50,30,40,30,10,90,80,60,20,10,70,60,60,80,10,20,50,40]);

// 2 Спосіб
// Стрілочній ф-ції даєм змінну і чекаємо аргумент масив. Присвоюємо змінній макс перший елемент масиву, і запускаємо ітерацію, яка йде по масиву і виконує умову. (перший елемент масиву, заміняється на більше і так до кінця масиву) після завершення ітерації повертаємо max ( max=arr[0] ) і виводимо в консоль. Більш адаптивний спосіб, ф-ція не залежить від зовнішніх змінних, масив вводиться напряму, навіть якщо і поза ф-цією, то той масив, який ми створили в перший раз не буде проітеровано, всі значення залишаться на свої місцях.

// let returnMaxNumb = (arr) => {
//     let max = arr[0];
//     for (let item of arr) {
//         if (max < item) max = item;
//     }
//     return max;
// }
// let returnMaxNumb1 = returnMaxNumb([1, 23, 45, 67, 89, 123, 343, 123, 345, 6, 5, 34, 23, 24]);
// console.log(returnMaxNumb1);

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