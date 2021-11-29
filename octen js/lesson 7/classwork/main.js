// - Створити функцію конструктор яка дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску,
// максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
// -- drive () - яка виводить в консоль `їдемо зі швидкістю ${максимальна швидкість} на годину`
// -- info () - яка виводить всю інформацію про автомобіль в форматі `назва поля - значення поля`
// -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
// -- changeYear (newValue) - змінює рік випуску на значення newValue
// -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і додає його в поточний об'єкт car

// function Car(model, manufacturer, year, maxSpeed, capacity) {
//     this.model = model;
//     this.manufacturer = manufacturer;
//     this.year = year;
//     this.maxSpeed = maxSpeed;
//     this.capacity = capacity;
//     this.drive = function (){
//         console.log(`їдемо зі швидкістю ${maxSpeed} на годину`);
//     };
//     this.info = function (){
//         for (let carKey in this) {
//             if (typeof this[carKey] !== 'function')
//                 console.log(`${carKey} - ${this[carKey]}`)
//         }
//
//     };
//     this.increaseMaxSpeed = function (newSpeed) {
//         console.log(this.newMaxSpeed = maxSpeed + newSpeed);
//     };
//     this.changeYear = function (newValue) {
//         this.year = newValue;
//         console.log(this.year);
//     };
//     this.addDriver = function (driver) {
//         this.driver = driver;
//         console.log(this.driver);
//     };
//
//
//
//
// }
// let cars = new Car('audi', 'wv', 2020, 260, 2.2);
// console.log(cars);
// cars.info();
// cars.increaseMaxSpeed(21);
// cars.changeYear(2010);
// cars.addDriver('vasya');



// - (Те саме, тільки через клас)
// Створити клас який дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
// -- drive () - яка виводить в консоль `їдемо зі швидкістю ${максимальна швидкість} на годину`
// -- info () - яка виводить всю інформацію про автомобіль в форматі `назва поля - значення поля`
// -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
// -- changeYear (newValue) - змінює рік випуску на значення newValue
// -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і додає його в поточний об'єкт car


// class Car {
//     constructor(model, manufacturer, year, maxSpeed, capacity) {
//         this.model = model;
//         this.manufacturer = manufacturer;
//         this.year = year;
//         this.maxSpeed = maxSpeed;
//         this.capacity = capacity;
//     }
//         drive() {
//             console.log(`їдемо зі швидкістю ${maxSpeed} на годину`);
//         };
//         info() {
//             for (let carKey in this) {
//                 console.log(`${carKey} - ${this[carKey]}`)
//             }
//
//         };
//         increaseMaxSpeed (newSpeed) {
//             let newMaxSpeed = this.maxSpeed + newSpeed;
//             console.log(newMaxSpeed);
//         };
//         changeYear (newValue) {
//             this.year = newValue;
//             console.log(this.year);
//         };
//         addDriver (driver) {
//             this.driver = driver;
//             console.log(this.driver);
//         };
//
//
// }
// let cars = new Car('audi', 'wv', 2020, 260, 2.2);
// console.log(cars);
// cars.info();
// cars.increaseMaxSpeed(21);
// cars.changeYear(2010);
// cars.addDriver('vasya');





// -створити класс/функцію конструктор попелюшка з полями ім'я, вік, розмір ноги. Створити масив з 10 попелюшок.
// Сторити об'єкт класу "принц" за допомоги класу який має поля ім'я, вік, туфелька яку він знайшов.
//     За допомоги циклу знайти яка попелюшка повинна бути з принцом.
//     Додатково, знайти необхідну попелюшку за допомоги функції масиву find та відповідного колбеку


class Cinderella {
    constructor(name, age, size) {
        this.name = name;
        this.age = age;
        this.size = size;
    }
}

let cinderellas = [
    new Cinderella('anna', 18, 35),
    new Cinderella('katya', 19, 38),
    new Cinderella('adele', 22, 40),
    new Cinderella('nika', 17, 32),
    new Cinderella('masha', 16, 36),
    new Cinderella('anastasia', 20, 45),
    new Cinderella('olya', 21, 37),
    new Cinderella('tanya', 22, 34),
    new Cinderella('vika', 26, 33),
    new Cinderella('halina', 32, 40)
]


class Prince {
    constructor(name, age, footSize) {
        this.name = name;
        this.age = age;
        this.footSize = footSize;
    }
}

let princes = new Prince('petya', 18, 35);


let para = (cinderellas, princes) =>{
    for (let obj of cinderellas) {
        if (obj.size === princes.footSize){
           return  `'your cinderella': ${obj.name}`;
        }
    }
}
console.log(para(cinderellas, princes));


let find = cinderellas.find(value => value.size === princes.footSize);
console.log(find);


















