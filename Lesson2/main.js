// С Т А Р І  Т А С К И   (js_demos/kminV/Lesson2)

//--створити масив з:
// - з 5 числових значень
// - з 5 стічкових значень
// - з 5 значень стрічкового, числового та булевого типу
// - та вивести його в консоль
// let number = [1,2,3,4,5,];
// let string = ["hello","world","okten","people","friend"];
// let other = ["bmw","samsung","lg","panasonic","dell",1,2,3,4,5,true,false,true,true,false];
//
// console.log(number);
// console.log(string);
// console.log(other);

// -- Створити пустий масив. Наповнити його будь-якими значеннями звертаючись до конкретного індексу. Вивести в консоль
// let emptyArr = [];
// emptyArr [0] = 123;
// emptyArr [1] = 231;
// emptyArr [2] = undefined;
// emptyArr [3] = "owu";
// emptyArr [4] = NaN;
// emptyArr [5] = true;
//
// console.log(emptyArr);

// - За допомогою циклу for і document.write() вивести 10 блоків div c довільним текстом всередині
// for (let i = 0; i <10; i++) {
//     document.write("<div>text</div>");
// }

// - За допомогою циклу for і document.write() вивести 10 блоків div c довільним текстом і індексом всередині
// for (let i=0; i<10; i++){
//     document.write(`<h1>text ${i}</h1>`)
// }

// - За допомогою циклу while вивести в документ 20 блоків h1 c довільним текстом всередині.
// let i=0;
// while (i<20){
//     document.write("<h1>Hello world</h1>");
//     i++
// }

// - За допомогою циклу while вивести в документ 20 блоків h1 c довільним текстом і індексом всередині.
// let i = 0;
// while (i<20){
//     document.write(`<h1>Hello World ${i}</h1>`);
//     i++
// }

// - Створити масив з 10 числових елементів. Вивести в консоль всі його елементи в циклі.
// let number = [151,125,48,8459,1523,21,7,265,9,10];
//
// for(i=0; i<10;i++){
//     console.log(number[i]);
// }
////______________________________________________
// let number = [151,125,48,8459,1523,21,7,265,9,10];
// let i = 0;
// while (i<10){
//     console.log(number[i]);
//     i++
// }

// - Створити масив з 10 строкрових елементів. Вивести в консоль всі його елементи в циклі.
// let string = ["a","b","c","d","e","index","style","main","9","ten"];
// for (let i=0;i<10;i++){
//     console.log(string[i]);
// }
////_________________________________
// let string = ["a","b","c","d","e","index","style","main","9","ten"];
// let i = 0;
// while (i<10){
//     console.log(string[i]);
//     i++
// }

// - Створити масив з 10 елементів будь-якого типу. Вивести в консоль всі його елементи в циклі.
// let other = [true,false,123,321,231,NaN,undefined,"string","notString","10"];
// let i =0;
// while (i<10){
//     console.log(other[i])
//     i++
// }
////____________________________________
// let other = [true,false,123,321,231,NaN,undefined,"string","notString","10"];
// for (let i=0;i<10;i++){
//     console.log(other[i])
// }

// - Створити масив з 10 елементів числового, стірчкового і булевого типу. За допомогою if та typeof вивести тільки булеві елементи
// let other = [true,false,"a1","a2",1,2,true,true,"a3","a3",3,4,false,false,25,30,50,65,10,25,"asd","sad","dsa","asdas",151,516,12,2,2,5,1,5,5,3,5,false,true,false,false,false];
//
// for (let i=0;i<other.length;i++){
//     if (typeof other[i]==="boolean"){
//         console.log(other[i]);
//     }
// }

// - Створити масив з 10 елементів числового, стірчкового і булевого типу. За допомогою if та typeof вивести тільки числові елементи
// let other = [true,false,"a1","a2",1,2,true,true,"a3","a3",3,4,false,false,25,30,50,65,10,25,"asd","sad","dsa","asdas",151,516,12,2,2,5,1,5,5,3,5,false,true,false,false,false];
//
// for (let i =0;i<other.length;i++){
//     if (typeof other[i]==="number"){
//         console.log(other[i])
//     }
// }

// - Створити масив з 10 елементів числового, стрічкового і булевого типу. За допомогою if та typeof вивести тільки рядкові елементи
// let other = [true,false,"a1","a2",1,2,true,true,"a3","a3",3,4,false,false,25,30,50,65,10,25,"asd","sad","dsa","asdas",151,516,12,2,2,5,1,5,5,3,5,false,true,false,false,false];
//
// for (let i = 0;i<other.length;i++){
//     if (typeof other[i]==="string"){
//         console.log(other[i]);
//     }
// }

// - Створити порожній масив. Наповнити його 10 елементами (різними за типами) через звернення до конкретних індексів. Вивести в консоль всі його елементи в циклі.
// let empty = [];
// empty[0] = true;
// empty[1] = false;
// empty[2] = NaN;
// empty[3] = undefined;
// empty[4] = "string";
// empty[5] = "notString";
// empty[6] = "6";
// empty[7] = "seven"
// empty[8] = 9;
// empty[9] = 10;
//
// console.log(empty);
//
// for (let i=0;i<empty.length;i++){
//     console.log(empty[i])
// }

// - Створити цикл for на 10  ітерацій з кроком 1. Вивести поточний номер кроку через console.log та document.write
// for (let i=0;i<10;i++){
//     console.log(i);
//     document.write(i);
// }

// - Створити цикл for на 100 ітерацій з кроком 1. Вивести поточний номер кроку через console.log та document.write
// for (let i=0;i<100;i++){
//     console.log(`Крок${i}`);
//     document.write(`Крок${i} `);
// }

// - Створити цикл for на 100 ітерацій з кроком 2. Вивести поточний номер кроку через console.log та document.write
// for (let i=0;i<100;i+=2){
//     console.log(`Крок${i}`)
//     document.write(`Крок${i} `);
// }

// - Створити цикл for на 100 ітерацій. Вивести тільки парні кроки. через console.log + document.write
// for (let i=0;i<100;i++){
//     if (i%2===0){
//         console.log(`Крок${i}`);
//         document.write(`Крок${i} `);
//     }
// }

// - Створити цикл for на 100 ітерацій. Вивести тільки непарні кроки. через console.log + document.write
// for (let i=0;i<100;i++){
//     if (i%2===1){
//         console.log(`Крок${i}`);
//         document.write(`Крок${i} `);
//     }
// }

// ______________________________________________________________________________________________________________________________________________________
//                                                                 РОБОТА В АУДИТОРІЇ
// ______________________________________________________________________________________________________________________________________________________

// - Дан масив ['a', 'b', 'c']. Додайте йому в кінець елементи 1, 2, 3 за допомогою циклу.
// let abc = ["a","b","c"];
//
// for (let i=3;i<6;i++){
//     abc[i]=i-2
// }
// console.log(abc);
////------------------------------------------------------------------
// let abc = ["a","b","c"];
//
// for (let i=1;i<4;i++){
//     abc.push(i);
// }
// console.log(abc);

// - Дан масив [1, 2, 3]. Зробіть з нього новий масив [3, 2, 1].
// let number = [1,2,3];
// let newNumber = [];
//
// for (i=2;i<=2;i--){
//     newNumber.push(number[i]);
// }
// console.log(newNumber);
//// i-- отрицательный шаг, начне з тройки з кінця масиву(індекс 2), і за допомогою від'ємного кроку прийде в початок, і відповідно запуше значення старого масиву в новий.

// - Дан масив [1, 2, 3]. Додайте йому в кінець елементи 4, 5, 6.
// let number = [1,2,3];
//
// for (i=4;i<7;i++){
//     number.push(i);
// }
// console.log(number);

// - Дан масив [1, 2, 3]. Додайте йому в початок елементи 4, 5, 6.
// let number = [1,2,3];
// for (i=6;i>3;i--){
//     number.unshift(i)
// }
// console.log(number)

// - Дан масив ['js', 'css', 'jq']. Виведіть на екран перший елемент за допомогою shift()
// let string = ["js","css","jq"];
//
// for (let i=0;i<1;i++){
//     alert(string.shift(i));
// }

// - Дан масив ['js', 'css', 'jq']. Виведіть на екран останній елемент за допомогою pop()
// let string = ["js","css","jq","asalamaleykum","123321232132"];
//
// for (let i=0;i<1;i++){
//     alert(string.pop(i));
// }

// - Дан масив [1, 2, 3, 4, 5]. Перетворіть масив в [4, 5].
// let number = [1,2,3,4,5];
//
// for (let i=0;i<3;i++){
//     number.shift(i);
// }
// console.log(number);

// - Дан масив [1, 2, 3, 4, 5]. Перетворіть масив в [1,2].
// let number = [1,2,3,4,5];
//  for (let i=0;i<3;i++){
//      number.pop(i);
//  }
//  console.log(number);

// - Дан масив [1, 2, 3, 4, 5]. Зробіть з нього масив [1, 2, 3, 'a', 'b', 'c', 4, 5].
//     Підказка. Необхідно стерти елементи, зберегти їх кудись. Дописати букви і після букв повернути стерті цифри
// let number = [1,2,3,4,5];
//
// number.splice(3,0,"a","b","c");
// console.log(number);

// - Дан масив [1, 2, 3, 4, 5]. Зробіть з нього масив [1, 'a', 'b', 2, 3, 4, 'c', 5, 'e'].
//     Підказка. Працюйте по принципу задачі вище.
// let number = [1,2,3,4,5];
//
// number.splice(1,0,"a","b");
// number.splice(6,0,"c");
// number.splice(8,0,"e");
//
// console.log(number);

// - Взяти масив з 10 чисел або створити його. Вивести в консоль тільки ті елементи, значення яких є парними.
// let number = [2,17,13,6,22,31,45,66,100,-18];
//
// for (let i=0;i<number.length;i++){
//     if (number[i]%2===0){
//         console.log(number[i]);
//     }
// }
// console.log(number);

// - Взяти масив з 10 чисел або створити його. Створити 2й порожній масив. За допомогою будь-якого циклу та push () скопіювати значення одного масиву в інший
// let numb = [2,17,13,6,22,31,45,66,100,-18];
// let empty = [];
//
// for (let i=0;i<10;i++){
//     empty.push(numb[i]);
// }
// console.log(numb);
// console.log(empty);

// - Взяти масив з 10 чисел або створити його. Створити 2й порожній масив. За допомогою будь-якого циклу скопіювати значення одного масиву в інший.
// let number = [2,17,13,6,22,31,45,66,100,-18];
// let empty = [];
//
// for (let i=0;i<10;i++){
//     empty[i]=number[i];
// }
// console.log(number);
// console.log(empty);


// ============
//
// зробити масив з 10 чисел [2,17,13,6,22,31,45,66,100,-18];та:
// 1. перебрати його циклом while
// let number = [2,17,13,6,22,31,45,66,100,-18];
// let i =0;
// while (i<number.length){
//     console.log(number[i]);
//     i++
// }

// 2. перебрати його циклом for
// let number = [2,17,13,6,22,31,45,66,100,-18];
//
// for (let i=0;i<10;i++){
//     console.log(number[i])
// }

// 3. перебрати циклом while та вивести  числа тільки з непарним індексом
// let number = [2,17,13,6,22,31,45,66,100,-18];
// let i=0;
// while (i<number.length){
//     if (number[i]%2===1){
//         console.log(number[i])
//     }
//     i++
// }

// 4. перебрати циклом for та вивести  числа тільки з непарним індексом
// let number = [2,17,13,6,22,31,45,66,100,-18];
// for (let i=0;i<number.length;i++){
//     if (number[i]%2===1){
//         console.log(number[i])
//     }
// }

// 5. перебрати циклом while та вивести  числа тільки парні  значення
// let number = [2,17,13,6,22,31,45,66,100,-18];
// let i=0;
// while (i<number.length){
//     if (number[i]%2===0){
//         console.log(number[i])
//     }
//     i++
// }

// 6. перебрати циклом for та вивести  числа тільки парні  значення
// let number = [2,17,13,6,22,31,45,66,100,-18];
// for (let i=0;i<number.length;i++){
//     if (number[i]%2===0){
//         console.log(number[i])
//     }
// }

// 7. замінити кожне число кратне 3 на слово "okten"
// let number = [2,17,13,6,22,31,45,66,100,-18];
// for (let i=0;i<number.length;i++){
//     if (number[i]%3===0){
//         number.splice([i],1,"okten");
//     }
// }
// console.log(number)
////________________________________________________________
// let number = [2,17,13,6,22,31,45,66,100,-18];
// for (let i=0;i<number.length;i++){
//     if (number[i]%3===0){
//         number[i]="okten";
//     }
// }
// console.log(number)

// 8. вивести масив в зворотньому порядку.
// let number = [2,17,13,6,22,31,45,66,100,-18];
// for (let i=number.length-1;i>=0;i--){
//     console.log(number[i])
// }
//// З девятого індекса, з від'ємним кроком, виводить в консоль значення масиву в зворотньому порядку.
////якби було (let i=number.length;i>0;i--)- то перше значення undefiend - бо 10 індекса немає.

// 9. всі попередні завдання (окрім 8), але в зворотньому циклі (с заду на перед)

//1.
// let number = [2,17,13,6,22,31,45,66,100,-18];
// let i=9;
// while (i>=0){
//     console.log(number[i])
//     i--
// }

//2.
// let number = [2,17,13,6,22,31,45,66,100,-18];
// for (let i=9;i>=0;i--){
//     console.log(number[i])
// }

//3.
// let number = [2,17,13,6,22,31,45,66,100,-18];
// let i=9;
// while (i>=0){
//     if (number[i]%2===1){
//         console.log(number[i])
//     }
//     i--
// }

//4.
// let number = [2,17,13,6,22,31,45,66,100,-18];
// for (let i=9;i>=0;i--){
//     if (number[i]%2===1){
//         console.log(number[i])
//     }
// }

//5.
// let number = [2,17,13,6,22,31,45,66,100,-18];
// let i=9;
// while (i>=0){
//     if (number[i]%2===0){
//         console.log(number[i])
//     }
//     i--
// }

//6.
// let number = [2,17,13,6,22,31,45,66,100,-18];
// for (let i=9;i>=0;i--){
//     if (number[i]%2===0){
//         console.log(number[i])
//     }
// }

//7.
// let number = [2,17,13,6,22,31,45,66,100,-18];
// for (let i=9;i>=0;i--){
//     if (number[i]%3===0){
//         number.splice([i],1,"okten");
//     }
// }
// console.log(number)

// 10.
//  створити пустий масив та :
// - заповнити його 50 парними числами за допомоги циклу.
// let empty =[];
//
// for (let i=0;i<101;i++){
//     if (i%2===0){
//         empty.push(i);
//     }
// }
// console.log(empty);

// - заповнити його 50 непарними числами за допомоги циклу.
// let empty = [];
//
// for (let i=0;i<101;i++){
//     if(i%2===1){
//         empty.push(i);
//     }
// }
// console.log(empty);

// 1. Створити пустий масив та :

//        a. заповнити його 50 парними числами за допомоги циклу.
// let empty = [];
// for (let i =0;i<101;i++){
//     if (i%2===0){
//         empty.push(i);
//     }
// }
// console.log(empty);

//        b. заповнити його 50 непарними числами за допомоги циклу.
// let empty = [];
// for (let i=0;i<101;i++){
//     if (i%2===1){
//         empty.push(i);
//     }
// }
// console.log(empty);


//        c. Заповнити масив 20ма рандомними числами. (Google: Generate random number JS)
// let arr = [];
// for (let i = 0; i < 10; i++) {
//     arr[i] = Math.random()*100;
// }
// console.log(arr);

//        d. Заповнити масив 20ма рандомними чисалами в діапазоні від 8 до 732 (Google: Generate random number JS)
// let arr = [];
// for (let i = 0; i < 20; i++) {
//     arr[i] = Math.floor(Math.random()*(732-8))+8;
// }
// console.log(arr);

//  2. Вивести за допомогою console.log кожен третій елемен
// let arr = [];
// for (let i = 0; i < 20; i++) {
//     arr[i] = Math.floor(Math.random()*(732-8))+8;
// }
// console.log(arr);
//
// for (let i=0;i<20;i++){
//     if (i%3===0){
//         console.log(arr[i]);
//     }
// }

//  3. Вивести за допомогою console.log кожен третій елемен тільки якщо цей елемент є парним.
// let arr = [];
// for (let i = 0; i < 20; i++) {
//     arr[i] = Math.floor(Math.random()*(732-8))+8;
// }
// console.log(arr);
//
// for (let i=0;i<20;i+=3){
//     if (arr[i]%2===0){
//         console.log(arr[i]);
//     }
// }

//  4. Вивести за допомогою console.log кожен третій елемен тільки якщо цей елемент є парним та записати їх в новий масив
// let arr = [];
// for (let i = 0; i < 20; i++) {
//     arr[i] = Math.floor(Math.random()*(732-8))+8;
// }
// console.log(arr);
// let newArr = [];
// for (let i=0;i<20;i+=3){
//     if (arr[i]%2===0){
//         newArr.push(arr[i]);
//     }
// }
// console.log(newArr);

//  5. Вивести кожен елемент масиву, сусід справа якого є парним
//   EXAMPLE: [ 1, 2, 3, 5, 7, 9, 56, 8, 67 ] -> Має бути виведено 1, 9, 56
// let arr = [];
// for (let i = 0; i < 20; i++) {
//     arr[i] = Math.floor(Math.random()*(732-8))+8;
// }
// console.log(arr);
// let newArr = [];
// for (let i=0;i<20;i++){
//     if (arr[i+1]%2===0){
//         newArr.push(arr[i]);
//     }
// }
// console.log(newArr);

//  6. Є масив з числами [100,250,50,168,120,345,188], Які характеризують вартість окремої покупки. Обрахувати середній чек.
// let number = [100,250,50,168,120,345,188];
// let newArr = [];
// for (let i = 0; i<number.length; i++) {
//     newArr= number[i+=i];
// }
// console.log(newArr/number.length);

//  7. Створити масив з рандомними значеннями, помножити всі його елементи на 5 та перемістити їх в інший масив.
// let arr = [];
// let newArr = []
// for (let i = 0; i < 20; i++) {
//     arr[i] = Math.floor(Math.random()*(732-8))+8;
// }
// console.log(arr);
//
// for (let k=0;k<20;k++){
//     newArr[k]=arr[k]*5;
// }
// console.log(newArr);

//  8*. Створити масив з будь якими значеннями (стрінги, числа, і тд...). пройтись по ньому, і якщо елемент є числом - додати його в інший масив.
// let other = [true,false,"a1","a2",1,2,true,true,"a3","a3",3,4,false,false,25,30,50,65,10,25,"asd","sad","dsa","asdas",151,516,12,2,2,5,1,5,5,3,5,false,true,false,false,false];
// let newArr = [];
// for (let i=0;i<other.length;i++){
//     if (typeof other[i]==="number"){
//         newArr[i]=other[i]
//     }
// }
// console.log(newArr)


// ______________________________________________________________________________________________________________________________________________________
//                                                                     Додатково
// ______________________________________________________________________________________________________________________________________________________
//
// - Дано масив: [ 'a', 'b', 'c'] . За допомогою циклу for зібрати всі букви в слово
// - Дано масив: [ 'a', 'b', 'c'] . За допомогою циклу while зібрати всі букви в слово.
// - Дано масив: [ 'a', 'b', 'c'] . За допомогою циклу for of зібрати всі букви в слово.
// - Дано масив: [ 'a', 'b', 'c'] . За допомогою циклу for in зібрати всі букви в слово.
// let abc = [ 'a', 'b', 'c'];
//
// let suma = abc.join('');
// console.log(suma);


// Н О В І  Т А С К И (js_demos/js/preview/lesson2);

// - Нам дано масив друзів let friends = ["Ivan", "Slavik", "Grisha", "Lera", "Ira"]; Потрібно зробити перевірку якщо
// кількість елементів у масиві більше або дорівнює 3, то виводиться повідомлення про те, що це великий масив, в якому  3 і більше елементи.
//     Інакше слід вивести на екран повідомлення про те, що це маленький масив, в якому менше 3-х елементів.
// let friends = ["Ivan", "Slavik", "Grisha", "Lera", "Ira"];
//
// if (friends.length >= 3) {
//     alert("це великий масив, в якому  3 і більше елементи.");
// } else alert("це маленький масив, в якому менше 3-х елементів.");

// - Перепишіть конструкцію if з використанням умовного оператора '?':
// let result;
// if (a + b < 4) {
//     result = 'Мало';
// } else {
//     result = 'Багато';
// }

// a+b<4? reslt  = 'Мало' : result = 'Багато';
//
// - Маємо будь яке число від -100 , 0 , +100 потрібно перевірити яким є число: позитивним, негативним або нулем
// напишіть це тернарним оператором.

// let randomNumb;
// randomNumb = Math.floor(Math.random() * (100 + 100) - 100);
// console.log(randomNumb);
//
// randomNumb > 0 ? alert("positive") :
//     randomNumb < 0 ? alert("negative") :
//         alert("zero");

// - Дано змінну time яка рівна числу від 0 до 59. Потрібно написати код, який перевірить, до якої четверті години попадає число
// (в першу, другу, третю или четверту частину години).

// let time;
// time = Math.floor(Math.random()*59);
// console.log(time);
// time<15? alert("part 1"):
// time<30? alert("part 2"):
// time<45? alert("part 3"):
// alert("part 4");

//  - У змінній day дано якесь число від 1 до 31. Потрібно визначити, у яку половину(декаду) місяця потрапляє це число (у першу, другу чи третю).
// let day;
// day = Math.floor(Math.random()*(31-1)+1);
// console.log(day);
// day<11? alert("part 1"):
// day<21? alert("part 2"):
// alert("part 3");

// - У нас є змінна test, якщо  не дорівнює true, виведіть 'Вірно', інакше виведіть 'Неправильно'.
// Перевірте роботу скрипта при test, що дорівнює true, false. Напишіть два варіанти скрипта - з коротким записом(тернаркою)
// let test = true;
// console.log(test);
// test === true? alert("Вірно") : alert("Неправильно");

// let test = false;
// console.log(test);
// test === true? alert("Вірно") : alert("Неправильно");

// - Якщо змінна a не дорівнює нулю, виведіть 'Вірно', інакше виведіть 'Невірно'. Перевірте  скрипт при a, що дорівнює 1, 0, -3
// let a = 0;
// a<0 || a>0? alert("Вірно"):alert("Невірно");

// - Скласти розклад на тиждень за домопоги switch. Користувач вводить порядковий номер дня тижня і на екрані відображається інфа що заплановано на цей день.
// let timeTable = +prompt('Введіть число від 1 до 7');
// switch (timeTable) {
//     case 1:
//         console.log('ПОНЕДІЛОК: пресс качат');
//         break;
//     case 2:
//         console.log('ВІВТОРОК: бегит');
//         break;
//     case 3:
//         console.log('СЕРЕДА: турник');
//         break;
//     case 4:
//         console.log('ЧЕТВЕР: анжумания вечером');
//         break;
//     case 5:
//         console.log('ПЯТНИЦЯ: пресс качат');
//         break;
//     case 6:
//         console.log('СУБОТА: бегит');
//         break;
//     case 7:
//         console.log('НЕДІЛЯ: турник');
//         break;
//     default:
//         console.log("пресс качат, бегит, турник, анжумания вечером");
// }

// - Потрібно визначити Високосний рік чи ні. Високосні роки діляться націло на 4.
// let year = +prompt("Введіть рік");
// year%4===0? alert("Високосний"): alert("Невисокосний");

// - Використовуючи конструкцію if..else, напишіть код, який запитуватиме: „Яка «офіційна» назва JavaScript?“
// Якщо користувач вводить «ECMAScript», то показати: «Правильно!», інакше – відобразити: «Не знаєте? ECMAScript!
// let question = prompt("Яка «офіційна» назва JavaScript?");
// question === "ECMAScript"? alert("Правильно!") : alert("Не знаєте? ECMAScript!");

// - Користувач вводить або має два числа.
//     Потрібно знайти та вивести максимальне число з тих двох .
//     Також потрібно врахувати коли введені рівні числа.
// let a = +prompt("Введіть перше число");
// let b = +prompt("Введіть друге число");
//
// a>b? alert("Перше більше за друге"):
//     a<b? alert("Друге більше за перше"):
//         alert("Числа рівні");

// - У першому під'їзді квартири з 1 до 20. У другому з 21 по 48. У третьому з 49 по 90.
// Користувач вводить номер квартири просто в змінні або через prompt('') .
//     Програма повинна зазначити, в якому під'їзді знаходиться дана квартира.
// let number = +prompt("Введіть номер квартири");
// number <=20? alert("1 підїзд"):
//     number>20 && number<=48? alert("2 підїзд"):
//         number>48 && number<=90? alert("3 підїзд"): alert("Шо нада?");

// - Ми маємо змінну number в яку користувач задає числове значення,  якщо змінна рівна 10 вивести повідомлення ВІРНО, якщо змінна не рівна 10 - тоді НЕВІРНО
// let getNumber = +prompt("Введи число від одного до ДЕСЯТИ");
// getNumber === 10? alert("ВІРНО"): alert("НЕВІРНО");

// - Ми маємо змінну x в яку користувач задає  значення,  якщо в змінну записане число, вивести 1,
//     якщо в змінну записали стрінгу вивести 2, якщо булеве значення - 3, якщо об'єкт або масив - 3.
// якщо в змінну записали щось інше, спрацьовує else
// let x = [];
// typeof (x) === "number" ? alert("Ви ввели число") :
//     typeof (x) === "string" ? alert("Ви ввели стрічку") :
//         typeof (x) === "boolean" ? alert("Ви ввели булеве значення") :
//             typeof (x) === "function" ? alert("Ви ввели функцію") :
//                 typeof (x) === "object" ? alert("Ви ввели об'єкт або масив") : alert("А я шо робить?")

// - Задача-гра "чи ми йдемо сьогодні в OKTEN на навчання?".
//     Змінна, яка характеризує температуру. Якщо температура від +10 до +22 вивести повідомлення що ми йдемо ВЧИТИСЯ .
//     Якщо інша темпаретура, тоді виводимо повідомлення що сидимо вдома і вчимося ОНЛАЙН
// let temperature;
// temperature = Math.floor(Math.random()*(30+30)-30);
// console.log(temperature);
// temperature>=10 &&temperature<=22? alert("ми йдемо ВЧИТИСЯ"): alert("сидимо вдома і вчимося ОНЛАЙН");

// - За допомогою switch case - реалізувати гру - вікторину, де ми вводимо число від 1 до 5. І взалежності від введеного
//     числа нам дається приз. (Авто, Мото, Телефон, і т.д ) і якщо число не підходить тоді  вивести Повідомлення - що число не вірне ... .

// let justANumber = +prompt("Введіть число від 1 до 5");
// switch (justANumber){
//     case 1:
//         console.log("Ви виграли лобзік");
//         break
//     case 2:
//         console.log("Ви виграли штани за 40 грн");
//         break
//     case 3:
//         console.log("Ви виграли пачку гречки");
//         break
//     case 4:
//         console.log("Путівку в санаторій Сонечко");
//         break
//     case 5:
//         console.log("АВТОМОБІЛЬ!");
//         break
//     default:
//         console.log("Жулік не воруй");
// }

// Н О В І  Т А С К И (js_demos/js/preview/lesson3);
// майже все повторюється із старих тасок. тому тут мало.
//upd i additional тоже

// --створити масив з:
//     - з 5 числових значень
// - з 5 стічкових значень
// - з 5 значень стрічкового, числового та булевого типу
// - та вивести його в консоль
// let numb = [1232,32,32,3,23,2];
// let string = ["sda","sadsa","asdsd","sdas","asdas"];
// let other = ["sda","sadsa","asdsd","sdas","asdas",1232,32,32,3,23,2,true,true,true,true,true];
// console.log(numb);
// console.log(string);
// console.log(other);

// -- Створити пустий масив. Наповнити його будь-якими значеннями звертаючись до конкретного індексу. Вивести в консоль
// let empty = [];
// empty[0] = true;
// empty[1]= 22;
// empty[2] = "HSAdkasda";
// console.log(empty);

// - За допомогою циклу for і document.write() вивести 10 блоків div c довільним текстом всередині
// for (let i = 0; i <10; i++) {
//     document.write(`<div>ASALAMALEYKUUUUMMM</div>`);
// }

// - За допомогою циклу for і document.write() вивести 10 блоків div c довільним текстом і індексом всередині
// for (let i = 0; i <10; i++) {
//     document.write(`<div>ASALAMALEYKUUUUMMM ${i+1}</div>`);
// }

// - За допомогою циклу while вивести в документ 20 блоків h1 c довільним текстом всередині.
// let i=0;
// while (i<20){
//     document.write("<h1>Hello world</h1>");
//     i++
// }

// - За допомогою циклу while вивести в документ 20 блоків h1 c довільним текстом і індексом всередині.
// let i = 0;
// while (i<20){
//     document.write(`<h1>Hello World ${i}</h1>`);
//     i++
// }

// ===========================================================================
//
// - Дано 2 масиви з рівною кількістю об'єктів.
// Масиви:
let usersWithId = [
    {id: 1, name: 'vasya', age: 31, status: false},
    {id: 2, name: 'petya', age: 30, status: true},
    {id: 3, name: 'kolya', age: 29, status: true},
    {id: 4, name: 'olya', age: 28, status: false}
];

let citiesWithId = [
    {user_id: 3, country: 'USA', city: 'Portland'},
    {user_id: 1, country: 'Ukraine', city: 'Ternopil'},
    {user_id: 2, country: 'Poland', city: 'Krakow'},
    {user_id: 4, country: 'USA', city: 'Miami'}
];
//
// З'єднати в один об'єкт користувача та місто з відповідними "id" та "user_id" .
//     Записати цей об'єкт в новий масив
// Example:
//     let usersWithCities = [
//         {
//             id: 1, // <===
//             name: 'vasya',
//             age: 31,
//             status: false,
//             address: {
//                 user_id: 1, // <===
//                 country: 'Ukraine',
//                 city: 'Ternopil'
//             }
//         }
//         // TO BE CONTINUED .....

// usersWithId.slice() ------ копіює силки на обєкти в змінну usersWithCities при цьому оригінал і новий масив будуть
// сслатись на один і той же об'єкт. Якщо об'єкт по ссилці буде змінений то він зміниться і в оригіналі.+
// ми проходимся по юзерам, а потом і по містам і якщо, юзер.ід === сіті.юзер_айді, то присвоїти адрес сіті

let usersWithCities = usersWithId.slice()
for (let userR of usersWithCities) {
    for (let cityY of citiesWithId) {
        if (userR.id === cityY.user_id) {
            userR.address = cityY
        }
    }
}
console.log(usersWithCities);
