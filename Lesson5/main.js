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


function Girl(name, age, footSize) {

    this.name = name;
    this.age = age;
    this.footSize = footSize;
}

let girl1 = new Girl("Sveta", 18, 36);
let girl2 = new Girl("Lena", 19, 37);
let girl3 = new Girl("Vika", 20, 38);
let girl4 = new Girl("Veronika", 21, 39);
let girl5 = new Girl("Vera", 22, 40);
let girl6 = new Girl("Nadezhda", 23, 41);
let girl7 = new Girl("Lyubov", 24, 42);
let girl8 = new Girl("Larisa", 25, 43);
let girl9 = new Girl("Natasha", 26, 44);
let girl10 = new Girl("Angelina", 27, 45);

let girl = [girl1, girl2, girl3, girl4, girl5, girl6, girl7, girl8, girl9, girl10];
console.log(girl);


function Prince(name, age, shoesSize) {

    this.name = name;
    this.age = age;
    this.shoesSize = shoesSize;
    this.findGirl = function (arr) {
        let find = null;
        for (let item of arr) {
            if (item.footSize === this.shoesSize) {
                find = item;

            }
        }
        if (find) {
            console.log(`My name is ${find.name}`);
        } else {
            console.log(`I'm not find my girl`);
        }

    }
    }

let prince = new Prince("Romeo", 23, 45);
prince.findGirl(girl);


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