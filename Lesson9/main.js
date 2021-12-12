// E X A M P L E //

// function orderTour(money, cb) {
//     console.log("Дякую, що звернулись в нашу фірму");
//     console.log("Виконується пошук туру...");
//
//     setTimeout(() => {
//         console.log("D O N E");
//
//         if (money < 500) {
//             cb("Треба більше грошей", null);
//         } else {
//             cb(null, "Turkey")
//         }
//     }, 1500);
// }
//
// function fly(tour, cb) {
//     console.log("Їдемо в аеропорт");
//
//     setTimeout(() => {
//         if (!tour) {
//             cb("Загубили квитки", null)
//         } else {
//             cb(null, `Сідаємо в літак на ${tour}`)
//         }
//     }, 1500)
// }
//
// function doPhoto(photoMachine, cb) {
//     if (!photoMachine) {
//         cb("OOPS", null)
//     } else {
//         cb(null, "Щолк-щолк");
//     }
// }
//
// orderTour(600, (err, tour) => {
//     if (!tour) {
//         console.log("В тур агенстві сказали", err);
//         return
//     }
//     console.log(`Ура летимо в ${tour}`);
//     fly("Turkey", (err, data) => {
//         if (err) {
//             console.log(err, "(");
//         } else {
//             console.log(data, ")");
//         }
//         doPhoto(true, (err, data) => {
//             if (err) {
//                 console.log(err);
//             } else {
//                 console.log(data);
//             }
//         })
//     })
// })


// Треба реалізувати свій розпорядок дня.
// Колбеками, промісами та асинк авейт.
// В дні має бути від 7 до 10 подій. Всі події мають мати описані успішні та не успішні варіанти виконання.
// Має бути так
// 1) прокинувся
// 2) Поснідав
// 3) почистав зуби
// і т.д.
// Якщо щось пішло не так (нема шо їсти), то має бути викинута помилка і решта функцій виконуватись не мають.
// Якщо ж все ок, то ви маєте прожити свій звичайний день.
// Кожна подія має бути з рандомною (не по зростанню) затримкою.

// C A L L B A C K H E L L
// В чому тут прикол. Ми пишем загальну функцію, дейліРутінс, яка приймає в себе три параметра  1.порядковий номер події і час. 2.дію коли в тебе все вийшло. 3.і дію коли ні. Щоб нам зробити таку вкладеність як в колбекхелів, треба зробити штучно асинхронну ф-цію (з радномним таймаутом) і з рандомною умовою, яка залежить від Math.random. В попередньому прикладі в нас були різні умови, і для кожної колбек ф-цію треба було прописувати свою індивідуальну умову і свій індивідульний вивід. Тут же можемо один раз прописати ф-цію рандомну для всіх дій в розпорядку, і просто параметрами передати потрібні нам заголовки ерр і дату, і присвоїти їм значення нашої ф-ції тільки вписавши свої параметри для кожної дії. Можна ще прописати тернарним оператором, але як такого сенсу не бачу.

// let dailyRoutines = (titleDay, goodDay, badDay) => {
//     return (cb) => {
//         setTimeout(randomCause => {
//             document.write(`${titleDay}<br>`)
//             if (Math.random() < 0.3)
//                 cb(`${badDay}<br>`)
//             else
//                 cb(null, `${goodDay}<br>`)
//         }, Math.random() * 5000)
//     }
// }
//
// let wakeUp = dailyRoutines(
//     "1. 7:20",
//     "Розплющив очі",
//     "Забув розплющити очі",
// )

// let getUp = dailyRoutines(
//     "2. 7:21",
//     "Прокинувся",
//     "Але забув прокинутись",
// )
//
// let makeMyBed = dailyRoutines(
//     "3. 7:22",
//     "Заправив ліжко",
//     "Але забув заправити ліжко",
// )
//
// let brushMyTeeth = dailyRoutines(
//     "4. 7:23",
//     "Почистив зуби",
//     "Але забув почистити зуби",
// )

// let combMyHair = dailyRoutines(
//     "5. 7:24",
//     "Розчесав волосся",
//     "Але забув розчесати волосся",
// )
//
// let getDressed = dailyRoutines(
//     "6. 7:25",
//     "Одягнувся",
//     "Але забув одягнутися",
// )
//
// let breakfast = dailyRoutines(
//     "7. 7:26",
//     "Снідаю",
//     "Але забув поснідати",
// )
//
// let goToSchool = dailyRoutines(
//     "8. 7:27",
//     "Йду до школи",
//     "Але забув піти до школи",
// )
//
// let lunch = dailyRoutines(
//     "9. 12:00",
//     "Обідаю",
//     "Але забув пообідати",
// )
//
// let dinner = dailyRoutines(
//     "10. 17:00",
//     "Вечеряю",
//     "Але забув повечеряти",
// )
//
//
//
// wakeUp((err, res) => {
//     if (err)
//         return document.write(err)
//     else {
//         document.write(res)
//         getUp((err, res) => {
//             if (err)
//                 return document.write(err)
//             else {
//                 document.write(res)
//                 makeMyBed((err, res) => {
//                     if (err)
//                         return document.write(err)
//                     else {
//                         document.write(res)
//                         brushMyTeeth((err, res) => {
//                             if (err)
//                                 return document.write(err)
//                             else {
//                                 document.write(res)
//                                 combMyHair((err, res) => {
//                                     if (err)
//                                         return document.write(err)
//                                     else {
//                                         document.write(res)
//                                         getDressed((err, res) => {
//                                             if (err)
//                                                 return document.write(err)
//                                             else {
//                                                 document.write(res)
//                                                 breakfast((err, res) => {
//                                                     if (err)
//                                                         return document.write(err)
//                                                     else {
//                                                         document.write(res)
//                                                         goToSchool((err, res) => {
//                                                             if (err)
//                                                                 return document.write(err)
//                                                             else {
//                                                                 document.write(res)
//                                                                 lunch((err, res) => {
//                                                                     if (err)
//                                                                         return document.write(err)
//                                                                     else {
//                                                                         document.write(res)
//                                                                         dinner((err, res) => {
//                                                                             if (err)
//                                                                                 return document.write(err)
//                                                                             else {
//                                                                                 document.write(res)
//                                                                             }
//                                                                         })
//                                                                     }
//                                                                 })
//                                                             }
//                                                         })
//                                                     }
//                                                 })
//                                             }
//                                         })
//                                     }
//                                 })
//                             }
//                         })
//                     }
//                 })
//             }
//         })
//     }
// })

// // P R O M I S E
// Якщо в CallBackHell видає err - то його спокійно js виводить, з промісами ситуація трохи інша. Коли в нас стається помилка, ми її ніде не очікуєм і того джс її тупо видаляє. Тому треба застосувати особливу синтаксичну конструкцію. Reason - приймає значення реджекта, і value - резолва. Щоб нам відловити нашу помилку пишемо .catch( reason . . . і воно буде відловлювати нашу помилку, ми поміщаєм її в змінну і вже робимо з нею що хочимо.

// function dailyRoutines () {
//     return new Promise((resolve) => {
//         document.write("Мій розпорядок дня!");
//         setTimeout(() => {
//             resolve("День почався");
//         }, Math.random() * 2000);
//     });
// }
//
// function wakeUp(){
//     return new Promise((resolve) => {
//         document.write("1. 7:20 - ");
//         setTimeout(() => {
//             resolve("Розплющив очі");
//         }, Math.random() * 2000);
//     });
// }
// function getUp (alarmClock){
//     return new Promise((resolve, reject) => {
//         document.write("2. 7:21 - ");
//         setTimeout(() => {
//             if (!alarmClock) {
//                 reject("Але забув прокинутись");
//             }
//             resolve("Прокинувся");
//         }, Math.random() * 2000);
//     });
// }
// function makeMyBed(mood){
//     return new Promise((resolve, reject) => {
//         document.write("3. 7:22 - ");
//         setTimeout(() =>{
//             if (!mood) {
//                 reject("Але забув заправити ліжко")
//             }
//             resolve('Заправив ліжко');
//         }, Math.random() * 2000);
//     });
// }
// function brushMyTeeth (toothpaste){
//     return new Promise((resolve, reject) => {
//         document.write("4. 7:23 - ");
//         setTimeout(() => {
//             if (!toothpaste) {
//                 reject("Але забув почистити зуби");
//             }
//             resolve("Почистив зуби");
//         }, Math.random() * 2000);
//     });
// }
// function combMyHair (comb){
//     return new Promise((resolve, reject) => {
//         document.write("5. 7:24 - ");
//         setTimeout(() => {
//             if (!comb) {
//                 reject("Але забув розчесати волосся");
//             }
//             resolve("Розчесав волосся");
//         }, Math.random() * 2000);
//     });
// }
// function getDressed(clothes){
//     return new Promise((resolve, reject) => {
//         document.write("6. 7:25 - ");
//         setTimeout(() =>{
//             if (!clothes){
//                 reject("Але забув одягнутися")
//             }
//             resolve("Одягнувся");
//         }, Math.random() * 2000);
//     });
// }
// function breakfast(eat){
//     return new Promise((resolve, reject) => {
//         document.write("7. 7:26 - ");
//         setTimeout(() =>{
//             if (!eat){
//                 reject("Але забув поснідати")
//             }
//             resolve("Поснідав");
//         }, Math.random() * 2000);
//     });
// }
//
// function goToSchool(bus){
//     return new Promise((resolve, reject) => {
//         document.write("8. 7:27 - ");
//         setTimeout(() =>{
//             if (!bus) {
//                 reject("Але забув піти до школи")
//             }
//             resolve("Йду до школи");
//         }, Math.random() * 2000);
//     });
// }
//
// function lunch(money){
//     return new Promise((resolve,reject) => {
//         document.write("9. 12:00 - ");
//         setTimeout(() =>{
//             if (!money) {
//                 reject("Але забувся пообідати");
//             }
//             resolve("Обідаю");
//         }, Math.random() * 2000);
//     });
// }
//
// function dinner(money){
//     return new Promise((resolve,reject) => {
//         document.write("10. 17:00 - ");
//
//         setTimeout(() =>{
//             if (!money) {
//                 reject("Але забув повечеряти")
//             }
//             resolve("Вечеряю");
//         }, Math.random() * 2000);
//     });
// }
// dailyRoutines()
//     .then(wakeUp => {
//         document.write(`${wakeUp} <br>`);
//         return getUp(true);
//     })
//     .then(getUp =>{
//         document.write(`${getUp}<br>`);
//         return makeMyBed(true);
//     })
//     .then(makeMyBed =>{
//         document.write(`${makeMyBed}<br>`);
//         return brushMyTeeth(true);
//     })
//     .then(brushMyTeeth =>{
//         document.write(`${brushMyTeeth}<br>`);
//         return combMyHair(true);
//     })
//     .then(combMyHair =>{
//         document.write(`${combMyHair}<br>`);
//         return getDressed(true);
//     })
//     .then(getDressed =>{
//         document.write(`${getDressed}<br>`);
//         return breakfast(true);
//     })
//     .then(breakfast =>{
//         document.write(`${breakfast}<br>`);
//         return goToSchool(true);
//     })
//     .then(goToSchool =>{
//         document.write(`${goToSchool}<br>`);
//         return lunch(true);
//     })
//     .then(lunch =>{
//         document.write(`${lunch}<br>`);
//         return dinner(false);
//     })
//     .then(dinner =>{
//         document.write(`${dinner}<br>`);
//         return dinner(false);
//     })
//     // В А Ж Л И В О
//     .catch(reason =>{
//         document.write(`${reason}<br>`);
//         alert(reason);
//     })
//     .finally(() =>{
//         document.write('Мій розпорядок дня закінчився!');
//     })

// A S Y N C. A W A I T
// Тут схожа ситуація до промісів. Якщо в нас не проходе умова по резолву. То наш код валиться і видає помилку. Але є інакший спосіб відловлення помилки. Ми кладемо потенційно небезпечний код в try. i catch'ом відловлюєм помилку, якщо вона станеться.

// let dailyRoutines = (titleDay, goodDay, badDay) => {
//     return async () => {
//         await later(Math.random() * 1000)
//         document.write(`${titleDay}<br>`)
//         if (Math.random() < 0.3)
//             throw new Error(`${badDay}<br>`)
//         else
//             return `${goodDay}<br>`
//     }
// }
//
// let later = (delay, value) =>
//     new Promise(resolve => setTimeout(resolve, delay, value));
//
// let wakeUp = dailyRoutines(
//     "1. 7:20",
//     "Розплющив очі",
//     "Забув розплющити очі",
// )
//
// let getUp = dailyRoutines(
//     "2. 7:21",
//     "Прокинувся",
//     "Але забув прокинутись",
// )
//
// let makeMyBed = dailyRoutines(
//     "3. 7:22",
//     "Заправив ліжко",
//     "Але забув заправити ліжко",
// )
//
// let brushMyTeeth = dailyRoutines(
//     "4. 7:23",
//     "Почистив зуби",
//     "Але забув почистити зуби",
// )
//
// let combMyHair = dailyRoutines(
//     "5. 7:24",
//     "Розчесав волосся",
//     "Але забув розчесати волосся",
// )
//
// let getDressed = dailyRoutines(
//     "6. 7:25",
//     "Одягнувся",
//     "Але забув одягнутися",
// )
//
// let breakfast = dailyRoutines(
//     "7. 7:26",
//     "Снідаю",
//     "Але забув поснідати",
// )
//
// let goToSchool = dailyRoutines(
//     "8. 7:27",
//     "Йду до школи",
//     "Але забув піти до школи",
// )
//
// let lunch = dailyRoutines(
//     "9. 12:00",
//     "Обідаю",
//     "Але забув пообідати",
// )
//
// let dinner = dailyRoutines(
//         "10. 17:00",
//         "Вечеряю",
//         "Але забув повечеряти",
//     )
//
// ;(async _ => {
//     try{
//         document.write(await wakeUp())
//         document.write(await getUp())
//         document.write(await makeMyBed())
//         document.write(await brushMyTeeth())
//         document.write(await combMyHair())
//         document.write(await getDressed())
//         document.write(await breakfast())
//         document.write(await goToSchool())
//         document.write(await lunch())
//         document.write(await dinner())
//         document.write("Мій розпорядок дня закінчився!")
//     } catch (err) {
//         document.write(err)
//     }
// })()


// Реалізувати друкарську машинку.
// У вас є текст "Hello World".
// Ваша функція має друкувати цей текст по 1 симоволу в браузері.
// КОЖНА нова буква має бути з РАНДОМНОЮ заутримкою від 0.1 до 1 секунди.
// Цим самим ви маєте симулювати написання даного тексту юзером.
// Приклад: "Hello"
// Затримки:
// H (затримка 0.6)
// e (затримка 0.1)
// l (затримка 0.3)
// l (затримка 0.7)
// о (затримка 1)

// let text = 'Hello_World';
// let div = document.createElement('div');
// document.body.appendChild(div);
// let random = Math.random()*1000;
//
// function print(add) {
//     return new Promise ((resolve) => {
//         setTimeout(() => {
//             resolve(div.innerText = add[0]);
//         }, random);
//     });
// }
//
// function print1(add) {
//     return new Promise ((resolve) => {
//         setTimeout(() => {
//             resolve(div.innerText += add[1]);
//         }, random);
//     });
// }
//
// function print2(add) {
//     return new Promise ((resolve) => {
//         setTimeout(() => {
//             resolve(div.innerText += add[2]);
//         }, random);
//     });
// }
//
// function print3(add) {
//     return new Promise ((resolve) => {
//         setTimeout(() => {
//             resolve(div.innerText += add[3]);
//         }, random);
//     });
// }
//
// function print4(add) {
//     return new Promise ((resolve) => {
//         setTimeout(() => {
//             resolve(div.innerText += add[4]);
//         }, random);
//     });
// }
//
// function print5(add) {
//     return new Promise ((resolve) => {
//         setTimeout(() => {
//             resolve(div.innerText += add[5]);
//         }, random);
//     });
// }
//
// function print6(add) {
//     return new Promise ((resolve) => {
//         setTimeout(() => {
//             resolve(div.innerText += add[6]);
//         }, random);
//     });
// }
//
// function print7(add) {
//     return new Promise ((resolve) => {
//         setTimeout(() => {
//             resolve(div.innerText += add[7]);
//         }, random);
//     });
// }
//
// function print8(add) {
//     return new Promise ((resolve) => {
//         setTimeout(() => {
//             resolve(div.innerText += add[8]);
//         }, random);
//     });
// }
//
// function print9(add) {
//     return new Promise ((resolve) => {
//         setTimeout(() => {
//             resolve(div.innerText += add[9]);
//         }, random);
//     });
// }
//
// function print10(add) {
//     return new Promise ((resolve) => {
//         setTimeout(() => {
//             resolve(div.innerText += add[10]);
//         }, random);
//     });
// }
//
// async function word() {
//     let H = await print(text);
//     let e = await print1(text);
//     let l = await print2(text);
//     let ll = await print3(text);
//     let o = await print4(text);
//     let space = await print5(text);
//     let W = await print6(text);
//     let oo = await print7(text);
//     let r = await print8(text);
//     let lll = await print9(text);
//     let d = await print10(text);
// }
// word();




