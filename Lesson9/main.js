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
// Не зміг переробити коллбек в проміси. Описав кожну ф-цію як в прикладі.
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
//     .catch(dinner =>{
//         document.write(`${dinner}<br>`);
//     })
//     .finally(() =>{
//         document.write('Мій розпорядок дня закінчився!');
//     })





