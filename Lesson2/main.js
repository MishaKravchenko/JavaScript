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

