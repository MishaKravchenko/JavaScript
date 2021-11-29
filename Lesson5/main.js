// С Т А Р І   Т А С К И    (js_demos/kminV/Lesson5);
// // T A S K 1
// // Реалізовуємо свій компютерний магазин.
//
// class ComputerShop {
//     constructor(city, street, number, openShop, square, bar) {
//
//         this.city = city || ("No city");
//         this.street = street || ("No street");
//         this.number = number || ("No number");
//         this.openShop = openShop || ("No openShop");
//         this.square = square || ("No square");
//         this.bar = bar || ("No bar");
//         let address = (`Our address: ${city}, ${street}, ${number}.
// We are open from ${openShop}`)
//         console.log(address);
//     }
// }
//
// console.log(new ComputerShop("Los Angeles", "Shevchenko", 77, "8:00-20:00", "250m2", true));
//
//
// // ===
// // Необхідно реалізувати базовий клас комютера. Який має лише параметри:
// //     Оперативна память.
// //     Потужність процесора. (цифра від 0 до 1000)
// // Назва.
// //     В кожного компютера має бути метод включання.
//
// class Computer {
//     constructor(RAM, CPU, name, method) {
//         this.RAM = RAM;
//         this.CPU = CPU;
//         this.name = name;
//         this.method = method;
//     }
// }
//
// let StationaryComputer = new Computer(99, 1000, "BOSCH", "button")
// console.log(StationaryComputer);
//
// // ===
// // Від базового компютрера треба реалізувати ноутбук.
// //     Він має нову властивість дюймаж монітора.
// //
// //     У нього зявляється нова змінна роботи батареї. Ця змінна визначається як потужність / (дюйми * оперативку)
// // ===
//
// class Notebook extends Computer {
//     constructor(RAM, CPU, name, method, screen) {
//         super(RAM, CPU, name, method);
//         this.screen = screen;
//         this.battery = CPU / (screen * RAM);
//     }
// }
//
// let NotebookBasic = new Notebook(55, 900, "STEKO", "ot vinta", 50);
// console.log(NotebookBasic);
//
// // Від ноутбука потрібно зробити ультрабук.
// //     Він має нову змінну ваги.
// //     При включенні ультрабуку має видаватися помилка, якшо вага більша за 2кг та батарея тримаж менше ніж 4 години.
// // ===
//
// class Ultrabook extends Notebook {
//     constructor(RAM, CPU, name, method, screen, weight) {
//         super(RAM, CPU, name, method, screen);
//         this.weight = weight;
//         this.battery = CPU / (screen * RAM);
//         if (method === 'ON' && weight >= 2 && this.battery <= 4) {
//             console.log(` - - E R R O R - - check weight and status battery! `);
//         }
//     }
// }
//
// let UltrabookBasic = new Ultrabook(30, 800, "DOMESTOS", "ON", 25, 3);
// console.log(UltrabookBasic);
//
//
// // Від базвого класу потрібно створити базовий ПК.
// //     В нього має бути новий метод запуску ігор.
// //     Кількість FPS визначається як потужність / опервтивку.
// //     Example: `You are playing *GAME_NAME* with *FPS_COUNT* FSP`
// //
//
// class ComputerBasic extends Computer {
//     constructor(RAM, CPU, name, method, gameName) {
//         super(RAM, CPU, name, method);
//         this.gameName = gameName;
//         let fps_basic_computer = this.fps = CPU / RAM;
//         console.log(fps_basic_computer)
//         let infoGame = (`You are playing ${gameName} with ${this.fps} FSP`);
//         console.log(infoGame);
//     }
// }
//
// let StationaryComputerBasic = new ComputerBasic(10, 1000, "FAIRY", "s pol tuchka", "Mario");
// console.log(StationaryComputerBasic);
//
// // Компютер можна апгрейдити.
// //     Потужність процесора можна збільшувати максимум на 10%. Зменшувати її не можна.
// //     Оперативку можна збільшити лише в 2 рази. Зменшувати її не можна.
// //     Для зміни характеритик мають бути свої методи. Мняти змінну "в лоб" заборонено.
// // ===
// //пока непонятно шось, потом вернусь, якшо не забуду)
//
//
// // Від базового ПК необхідно зробити ігровий ПК.
// //     Кількість ФПС має бути рівно в 2 рази більший ніж в звичайного ПК.
// //     При запуску однієї гри потужніть процесора має падати на 0.1%.
// // Якшо потужність процесора менша ніж 500. І оперативка менша за 8 потрібно видати помилку, (алерт, або консоль)
// // що на цьому відрі ігри не запускаються.
//
// class GameComputer extends ComputerBasic {
//     constructor(RAM, CPU, name, method, gameName) {
//         super(RAM, CPU, name, method, gameName);
//         if (method === "ON" && typeof gameName === "string") {
//             this.CPU = this.CPU * 0.9;
//         }
//         if (CPU < 500 && RAM < 8) {
//             console.log("P O T R A C H E N O");
//         }
//     }
// }
//
// let gameComputerBasic = new GameComputer(5, 1000, "MAKITA", "ON", "GTA Vice City");
// console.log(gameComputerBasic);
// console.log("____________________________________________________________")


//____________________________________________________________________________________________________________________________
// РОБОТА В АУДИТОРІЇ
//_____________________________________________________________________________________________________________________________


// T A S K  2
// - Створити об'єкт car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:

// let car = {
//     model: "REHAU",
//     prod: "Odessa",
//     year: 1967,
//     maxSpeed: 180,
//     engine: 200,
//     driver: "",
//     // -- drive () - яка виводить в консоль "їдемо зі швидкістю {максимальна швидкість} на годину"
//     drive: function () {
//         console.log((`Їдемо зі швидкістю ${this.maxSpeed} км/год`));
//     },
//     // -- info () - яка виводить всю інформацію про автомобіль
//     info: function () {
//         console.log(this);
//         console.log(`
//     model: ${this.model},
//     prod: ${this.prod},
//     year: ${this.year},
//     maxSpeed: ${this.maxSpeed},
//     engine: ${this.engine}`)
//     },
//     // -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
//     increaseMaxSpeed: function (newSpeed){
//         this.maxSpeed += newSpeed;
//     },
//     // -- changeYear (newValue) - змінює рік випуску на значення newValue
//     changeYear: function (newValue){
//         this.year = newValue;
//     },
//     // -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і доавляет його в поточний об'єкт car
//     addDriver: function (){
// this.driver = driver;
//     }
// }
// let driver ={name: "Vasya", surname: "Pupkin", age: 28, exp: 8}
//
// car.drive();
// car.info();
// car.increaseMaxSpeed(20);
// car.changeYear(1986);
// car.addDriver();
// // перевіряю чи змінились значення.
// car.info();


// T A S K 3
// - Створити функцію конструктор яка дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
// -- drive () - яка виводить в консоль "їдемо зі швидкістю {максимальна швидкість} на годину"
// -- info () - яка виводить всю інформацію про автомобіль
// -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
// -- changeYear (newValue) - змінює рік випуску на значення newValue
// -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і доавляет його в поточний об'єкт car
//

// function Car(model, prod, year, maxSpeed, engine, driver){
//     this.model = model;
//     this.prod = prod;
//     this.year = year;
//     this.maxSpeed = maxSpeed;
//     this.engine = engine;
//     this.driver = driver;
//
//     this.drive = function (){
//         console.log(`Їдемо зі швидкістю ${this.maxSpeed} км/год`)
//     }
//     this.info = function (){
//         console.log(this);
//     }
//     this.increaseMaxSpeed = function (newSpeed){
//         this.maxSpeed += newSpeed;
//     }
//     this.changeYear = function (newValue){
//         this.year = newValue;
//     }
//     this.addDriver = function (){
//         this.driver = driver;
//     }
//
// }
// let driver ={name: "Vasya", surname: "Pupkin", age: 28, exp: 8}
//
// let car = new Car("Nemiroff", "Kyiv", 2020, 160, 250, "Diana");
// car.drive();
// car.info();
// car.increaseMaxSpeed(120);
// car.changeYear(2077);
// car.addDriver();
// console.log(car);


// T A S K 4
// - Створити клас який дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
// -- drive () - яка виводить в консоль "їдемо зі швидкістю {максимальна швидкість} на годину"
// -- info () - яка виводить всю інформацію про автомобіль
// -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
// -- changeYear (newValue) - змінює рік випуску на значення newValue
// -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і доавляет його в поточний об'єкт car

// class Car {
//     constructor(model, prod, year, maxSpeed, engine) {
//
//         this.model = model;
//         this.prod = prod;
//         this.year = year;
//         this.maxSpeed = maxSpeed;
//         this.engine = engine;
//     }
//
//     drive() {
//         console.log(`Їдемо зі швидкістю ${this.maxSpeed} км/год`)
//     }
//
//     info() {
//         console.log(this);
//     }
//
//     increaseMaxSpeed(newSpeed) {
//         this.maxSpeed += newSpeed;
//     }
//
//     changeYear(newValue) {
//         this.year = newValue;
//     }
//
//     addDriver() {
//         this.driver = driver;
//     }
//
//
// }
//
// let driver = {name: "Vasya", surname: "Pupkin", age: 28, exp: 8}
//
// let car = new Car("Torchyn", "Kremenchuk", 2222, 180, 180, "Stepan Giga");
// car.drive();
// car.info();
// car.increaseMaxSpeed(120);
// car.changeYear(2077);
// car.addDriver();
// console.log(car);


// T A S K 5
// -створити класс попелюшка з полями ім'я, вік, розмір ноги
// --Створити 10 попелюшок , покласти їх в масив
// --Сторити об'єкт класу "принц" за допомоги класу який має поля ім'я, вік, туфелька яку він знайшов.
// -- за допоиоги циклу знайти яка попелюшка повинна бути з принцом

// class Human {
//     constructor(name, age) {
//         this.name = name;
//         this.age = age;
//     }
// }
//
//
// class Girl extends Human {
//     constructor(name, age, footSize) {
//         super(name, age);
//         this.footSize = footSize;
//     }
// }
// let girl1 = new Girl("Sveta", 18, 36);
// let girl2 = new Girl("Lena", 19, 37);
// let girl3 = new Girl("Vika", 20, 38);
// let girl4 = new Girl("Veronika", 21, 39);
// let girl5 = new Girl("Vera", 22, 40);
// let girl6 = new Girl("Nadezhda", 23, 41);
// let girl7 = new Girl("Lyubov", 24, 42);
// let girl8 = new Girl("Larisa", 25, 43);
// let girl9 = new Girl("Natasha", 26, 44);
// let girl10 = new Girl("Angelina", 27, 45);
//
// let girl = [girl1,girl2,girl3,girl4,girl5,girl6,girl7,girl8,girl9,girl10];
// console.log(girl);
//
//
//
// class Prince extends Human{
//         constructor(name, age, shoesSize) {
//             super(name, age);
//             this.shoesSize = shoesSize;
//         }
//     findGirl(arr){
//         let find = null;
//         for (let item of arr) {
//             if (item.footSize === this.shoesSize){
//            find=item;
//
//             }
//         }
//         if(find){
//             console.log(`My name is ${find.name}`);
//         }else{
//             console.log(`I'm not find my girl`);
//         }
//     }
// }
// let prince = new Prince("Romeo", 23, 45);
// prince.findGirl(girl);

// T A S K 6
// -створити функцію конструктор попелюшка з полями ім'я, вік, розмір ноги
// --Створити 10 попелюшок , покласти їх в масив
// --Сторити об'єкт типу "принц" за допомоги функції конструктора з полями ім'я, вік, туфелька яку він знайшов, та функцію "пошук попелюшки"
// -- функція повинна приймати масив попелюшок, та шукає ту котра йому підходить
//


// function Girl(name, age, footSize) {
//
//     this.name = name;
//     this.age = age;
//     this.footSize = footSize;
// }
//
// let girl1 = new Girl("Sveta", 18, 36);
// let girl2 = new Girl("Lena", 19, 37);
// let girl3 = new Girl("Vika", 20, 38);
// let girl4 = new Girl("Veronika", 21, 39);
// let girl5 = new Girl("Vera", 22, 40);
// let girl6 = new Girl("Nadezhda", 23, 41);
// let girl7 = new Girl("Lyubov", 24, 42);
// let girl8 = new Girl("Larisa", 25, 43);
// let girl9 = new Girl("Natasha", 26, 44);
// let girl10 = new Girl("Angelina", 27, 45);
//
// let girl = [girl1, girl2, girl3, girl4, girl5, girl6, girl7, girl8, girl9, girl10];
// console.log(girl);
//
//
// function Prince(name, age, shoesSize) {
//
//     this.name = name;
//     this.age = age;
//     this.shoesSize = shoesSize;
//     this.findGirl = function (arr) {
//         let find = null;
//         for (let item of arr) {
//             if (item.footSize === this.shoesSize) {
//                 find = item;
//
//             }
//         }
//         if (find) {
//             console.log(`My name is ${find.name}`);
//         } else {
//             console.log(`I'm not find my girl`);
//         }
//
//     }
//     }
//
// let prince = new Prince("Romeo", 23, 45);
// prince.findGirl(girl);


// ДОДАТКОВО
// Створити обєкт автомобіля з полями:
//     Марка автомобля, потужність двигуна, власник, ціна, рік випуску.
//     Власник автомобіля теж має бути обєкт, у якого є поля
// Імя, вік, стаж водіння.
//     Створити не менше 7 та не більше 20 машинок.
//     Вкладіть всі наші створені автомобілі в масив cars.

// class Car {
//     constructor(model, power, driver, price, year, repairEngine) {
//         this.model = model;
//         this.power = power;
//         this.driver = driver;
//         this.price = price;
//         this.year = year;
//         this.repairEngine = repairEngine;
//     }
//
//
// }
//
// class Driver {
//     constructor(name, surname, age, exp) {
//         this.name = name;
//         this.surname = surname;
//         this.age = age;
//         this.exp = exp;
//     }
// }
//
// let driver1 = new Driver("Vasya", "Pupkin", 28, 8);
// let driver2 = new Driver("Misha", "Dupkin", 29, 9);
// let driver3 = new Driver("Kolya", "Lupkin", 30, 8);
// let driver4 = new Driver("Vika", "Pika", 31, 11);
// let driver5 = new Driver("Oksana", "Poksana", 30, 10);
// let driver6 = new Driver("Lyuba", "Plyuba", 29, 9);
// let driver7 = new Driver("Lyuda", "Plyuda", 28, 8);
// let driver8 = new Driver("Lyusia", "Plyusia", 27, 7);
// let driver9 = new Driver("Larisa", "Parisa", 26, 6);
// let driver10 = new Driver("Mahmud", "Pahmud", 27, 7);
//
// let car1 = new Car("Nissan", "300", driver1, 2300, 1970, true);
// let car2 = new Car("Lastochka", "400", driver2, 3400, 1980, false);
// let car3 = new Car("Skoda", "500", driver3, 4500, 1990, true);
// let car4 = new Car("Ford", "600", driver4, 5600, 1900, false);
// let car5 = new Car("Volkswagen", "200", driver5, 6700, 1910, true);
// let car6 = new Car("Hyundai", "300", driver6, 7800, 1920, false);
// let car7 = new Car("Kia", "400", driver7, 8900, 1930, true);
// let car8 = new Car("Lada ", "500", driver8, 9000, 1940, false);
// let car9 = new Car("Mazda", "600", driver9, 1100, 1950, true);
// let car10 = new Car("Renault", "300", driver10, 2200, 1960, false);
//
// let arr = function () {
//     let cars = [];
//     cars.push(arguments);
//     for (let car of cars) {
//         if (car.repairEngine === true)
//             car.power = (car.power * 10) / 100
//         console.log(cars);
//     }
//     return cars;
// }
// console.log(arr(car1, car2, car3, car4, car5, car6, car7, car8, car9, car10,));


// Н О В І   Т А С К И    (js_demos/kminV/Lesson5)

// - Створити функцію конструктор для об'єктів User з полями id, name, surname , email, phone
// створити пустий масив, наповнити його 10 об'єктами new User(....)
// function User(id, name, surname, email, phone){
//     this.id = id;
//     this.name = name;
//     this.surname = surname;
//     this.email = email;
//     this.phone = phone;
// }
// let users = [
//     new User(120,"Sasha", "Hillz", "kalyaki_malyaki_1@dindon.com",123621584151515),
//     new User(233,"Masha", "Pillz", "kalyaki_malyaki_2@dindon.com",342461584141515),
//     new User(344,"Dasha", "Killz", "kalyaki_malyaki_3@dindon.com",2342354151514235),
//     new User(455,"Pasha", "Qillz", "kalyaki_malyaki_4@dindon.com",5345363466151515),
//     new User(256,"Gasha", "Zillz", "kalyaki_malyaki_5@dindon.com",3463466158415115),
//     new User(164,"Basha", "Gillz", "kalyaki_malyaki_6@dindon.com",7457461584151515),
//     new User(447,"Nasha", "Nillz", "kalyaki_malyaki_7@dindon.com",7445761584151515),
//     new User(538,"Casha", "Jillz", "kalyaki_malyaki_8@dindon.com",7454745761581515),
//     new User(649,"Xasha", "Killz", "kalyaki_malyaki_9@dindon.com",7458456158415115),
//     new User(510,"Rasha","Lillz", "kalyaki_malyaki_10@dindon.com",121426158415115),
// ]
// console.log(users);

// - Взяти масив з  User[] з попереднього завдання, та відфільтрувати , залишивши тільки об'єкти з парними id (filter)
// let filter = users.filter(value =>value.id % 2 === 0);
// console.log(filter);

// - Взяти масив з  User[] з попереднього завдання, та відсортувати його по id. по зростанню (sort)
// users.sort((a, b) => {
//   return a.id - b.id;
// })

// - створити класс для об'єктів Client з полями id, name, surname , email, phone, order (поле є масивом зі списком товарів)
// створити пустий масив, наповнити його 10 об'єктами Client
// function Client(id, name, surname , email, phone, order){
//     this.id = id;
//     this.name = name;
//     this.surname = surname;
//     this.email = email;
//     this.phone = phone;
//     this.order = order;
// }
// clients = [
//     new Client(120,"Sasha", "Hillz", "kalyaki_malyaki_1@dindon.com",123621584151515,["kvas","taras","bit","coin","post","punk"]),
//     new Client(233,"Masha", "Pillz", "kalyaki_malyaki_2@dindon.com",342461584141515,["bit","coin"]),
//     new Client(344,"Dasha", "Killz", "kalyaki_malyaki_3@dindon.com",2342354151514235,["corn","pop","bit","coin","bit","coin"]),
//     new Client(455,"Pasha", "Qillz", "kalyaki_malyaki_4@dindon.com",5345363466151515,["pop","korm","bit","coin","bit","coin","bit","coin"]),
//     new Client(256,"Gasha", "Zillz", "kalyaki_malyaki_5@dindon.com",3463466158415115,["hip","hop","post","punk"]),
//     new Client(164,"Basha", "Gillz", "kalyaki_malyaki_6@dindon.com",7457461584151515,["post","punk"]),
//     new Client(447,"Nasha", "Nillz", "kalyaki_malyaki_7@dindon.com",7445761584151515,["punki","hoi","post","punk"]),
//     new Client(538,"Casha", "Jillz", "kalyaki_malyaki_8@dindon.com",7454745761581515,["tsoi","zhiv","kvas"]),
//     new Client(649,"Xasha", "Killz", "kalyaki_malyaki_9@dindon.com",7458456158415115,["taras","kvas"]),
//     new Client(510,"Rasha","Lillz", "kalyaki_malyaki_10@dindon.com",121426158415115,["kvas","kamaz","kvas","kamaz","kvas","kamaz","kvas","kamaz","kvas","kamaz"])
// ];

// - Взяти масив (Client [] з попереднього завдання).Відсортувати його по кількості товарів в полі order по зростанню. (sort)
// clients.sort((a, b) => {
//    return a.order.length - b.order.length;
// })
// console.log(clients);


// - Створити клас або функцію конструктор, за допомоги якої можна створювати об'єкти наступного вигляду.
// Конструктор повинен приймати значення для кожної властивості, в т.ч і для властивостей внутрішніх об'єктів
//
// let example = {
//     id: 1,
//     name: 'Leanne Graham',
//     username: 'Bret',
//     email: 'Sincere@april.biz',
//     address: {
//         street: 'Kulas Light',
//         suite: 'Apt. 556',
//         city: 'Gwenborough',
//         zipcode: '92998-3874',
//         geo: {
//             lat: '-37.3159',
//             lng: '81.1496'
//         }
//     },
//     phone: '1-770-736-8031 x56442',
//     website: 'hildegard.org',
//     company: {
//         name: 'Romaguera-Crona',
//         catchPhrase: 'Multi-layered client-server neural-net',
//         bs: 'harness real-time e-markets'
//     }
// }

// Принцип запису вложених об'єктів в Class така сама як і в ф-ції конструктора, тільки в класі пишемо в конструкторі.
// function User(id,nameUser,username,email,street,suite,city,zipcode, lat, lng, phone, website,nameCompany,catchPhrase,bs) {
//     this.id = id;
//     this.name = nameUser;
//     this.username = username;
//     this.email = email;
//     this.address = {
//         street: street,
//         suite: suite,
//         city: city,
//         zipcode: zipcode,
//         geo: {
//             lat: lat,
//             lng: lng
//         },
//     }
//     this.phone = phone;
//     this.website = website;
//     this.company = {
//         name: nameCompany,
//         catchPhrase: catchPhrase,
//         bs: bs
//     };
// }
//
// let user1 = new User(1,'Leanne Graham','Bret','Sincere@april.biz','Kulas Light','Apt. 556','Gwenborough','92998-3874','-37.3159','81.1496','1-770-736-8031 x56442','hildegard.org','Romaguera-Crona','Multi-layered client-server neural-net','harness real-time e-markets');
// console.log(user1);

// -  Створити функцію конструктор / клас  який описує об'єкт тегу
// Поля :
//     -назва тегу ()
// - опис його дій
// - масив з атрибутами (2-3 атрибути максимум)
// Кожен атрибут описати як окремий який буде містити
// -назву атрибуту
// -опис дії атрибуту
// інформацію брати з htmlbook.ru
//
// Таким чином описати теги
// -a
// -div
// -h1
// -span
// -input
// -form
// -option
// -select
// Приклад результуючого об'єкту
// {
//     titleOfTag: 'area',
//         action: `Каждый элемент <area> определяет активные области изображения, которые являются ссылками...`,
//     attrs: [
//     {titleOfAttr: 'accesskey', actionOfAttr: 'Переход к области с помощью комбинации клавиш'},
//     {/*some props and values*/},
//     {/*...*/},
//     {/*...*/},
// ]
//
// }

function Tag(titleOfTag, action, titleOfAttr1, actionOfAttr1, titleOfAttr2, actionOfAttr2, titleOfAttr3, actionOfAttr3) {
    this.titleOfTag = titleOfTag;
    this.action = action;
    this.attrs = [
        {titleOfAttr1: titleOfAttr1, actionOfAttr1: actionOfAttr1},
        {titleOfAttr2: titleOfAttr2, actionOfAttr2: actionOfAttr2},
        {titleOfAttr3: titleOfAttr3, actionOfAttr3: actionOfAttr3}]
}

let a = new Tag("a","Тег <a> является одним из важных элементов HTML и предназначен для создания ссылок.","accesskey","Активация ссылки с помощью комбинации клавиш.","coords","Устанавливает координаты активной области.","download","Предлагает скачать указанный по ссылке файл.");
let div = new Tag("div","Элемент div является блочным элементом и предназначен для выделения фрагмента документа с целью изменения вида содержимого.","align","Задает выравнивание содержимого тега div","title","Добавляет всплывающую подсказку к содержимому.","-","-");
let h1 = new Tag("h1","HTML предлагает шесть заголовков разного уровня, которые показывают относительную важность секции, расположенной после заголовка.","align","Определяет выравнивание заголовка.","-","-","-","-");
let span = new Tag("span","Тег span предназначен для определения строчных элементов документа. ","-","-","-","-","-","-");
let input = new Tag("input","Тег input является одним из разносторонних элементов формы и позволяет создавать разные элементы интерфейса и обеспечить взаимодействие с пользователем.","accept","Устанавливает фильтр на типы файлов, которые вы можете отправить через поле загрузки файлов.","accesskey","Переход к элементу с помощью комбинации клавиш.","align","Определяет выравнивание изображения.");
let form = new Tag("form","Тег form устанавливает форму на веб-странице.","accept-charset","Устанавливает кодировку, в которой сервер может принимать и обрабатывать данные.","action","Адрес программы или документа, который обрабатывает данные формы.","autocomplete","Включает автозаполнение полей формы.");
let option = new Tag("option","Тег option определяет отдельные пункты списка, создаваемого с помощью контейнера select. ","disabled","Заблокировать для доступа элемент списка.","label","Указание метки пункта списка.","selected","Заранее устанавливает определенный пункт списка выделенным.");
let select = new Tag("select","Тег select позволяет создать элемент интерфейса в виде раскрывающегося списка, а также список с одним или множественным выбором, как показано далее.","accesskey","Позволяет перейти к списку с помощью некоторого сочетания клавиш.","autofocus","Устанавливает, что список получает фокус после загрузки страницы.","disabled","Блокирует доступ и изменение элемента.");

console.log(div);
console.log(a);
console.log(h1);
console.log(span);
console.log(input);
console.log(form);
console.log(option);
console.log(select);