//todo [1]
console.log(
    "%c [1] ",
    "color: yellow; background-color: #2274A5",
);
//? Напиши клас Account з властивостями login і email.
//? Додай метод getInfo(),
//? який виводить в консоль значення полів
//? login і email об'єкта який його викликав.
//! Код виконаного завдання ⤵️
class Account {
    constructor({ login, email }) {
        this.login = login;
        this.email = email;
    }

    getInfo() {
        console.log(`Login: ${this.login}, Email: ${this.email}`);
    }
}
//! Код виконаного завдання ⤴️

console.log(Account.prototype.getInfo); //! function

const mango1 = new Account({
    login: 'Mangozedog',
    email: 'mango@dog.woof',
});

mango1.getInfo(); //! Login: Mangozedog, Email: mango@dog.woof

const poly1 = new Account({
    login: 'Poly',
    email: 'poly@mail.com',
});

poly1.getInfo(); //! Login: Poly, Email: poly@mail.com
console.log("--------------------------------------------------");



//todo [2]
console.log(
    "%c [2] ",
    "color: yellow; background-color: #2274A5",
);
//? Напиши клас User для створення користувача
//? з наступними властивостями:
//? 🔸 name - рядок
//? 🔸 age - число
//? 🔸 followers - число
//? Додай метод getInfo(), який, виводить рядок:
//? User ${ім'я} is ${вік} years old and has ${кількість фоловерів} followers
//! Код виконаного завдання ⤵️
class User {
    constructor({ name, age, followers }) {
        this.name = name;
        this.age = age;
        this.followers = followers;
    }

    getInfo() {
        return `User ${this.name} is ${this.age} years old and has ${this.followers} followers`;
    }
}
//! Код виконаного завдання ⤴️

const mango2 = new User({
    name: 'Mango',
    age: 2,
    followers: 20,
});

console.log(mango2.getInfo()); //! User Mango is 2 years old and has 20 followers

const poly2 = new User({
    name: 'Poly',
    age: 3,
    followers: 17,
});

console.log(poly2.getInfo()); //! User Poly is 3 years old and has 17 followers
console.log("--------------------------------------------------");



//todo [3]
console.log(
    "%c [3] ",
    "color: yellow; background-color: #2274A5",
);
//? Напиши клас Storage,
//? який буде створювати об'єкти для управління складом товарів.
//? При виклику буде отримувати один аргумент
//? - початковий масив товарів, і записувати його у властивість items.
//? Додай методи класу:
//? 🔸 getItems() - повертає масив поточних товарів
//? 🔸 addItem(item) - отримує новий товар і додає його до поточних
//? 🔸 removeItem(item) - отримує товар і, якщо він є, видаляє його з поточних
class Storage {
    constructor(items) {
        this.items = items;
    }

    getItems() {
        return this.items;
    }

    addItem(item) {
        this.items.push(item);
    }

    removeItem(item) {
        const index = this.items.indexOf(item);
        if (index !== -1) {
            this.items.splice(index, 1);
        }
    }
} // ← оця дужка була відсутня

//! Код виконаного завдання ⤴️

const storage = new Storage([
    'Нанітоіди',
    'Пролонгер',
    'Залізні жупи',
    'Антигравітатор',
]);

const items = storage.getItems();
console.log(items); //! [ "Нанітоіди", "Пролонгер", "Залізні жупи", "Антигравітатор" ]

storage.addItem('Дроїд');
console.log(storage.items); //! [ "Нанітоіди", "Пролонгер", "Залізні жупи", "Антигравітатор", "Дроїд" ]

storage.removeItem('Пролонгер');
console.log(storage.items); //! [ "Нанітоіди", "Залізні жупи", "Антигравітатор", "Дроїд" ]
console.log("--------------------------------------------------");



//todo [4]
console.log(
    "%c [4] ",
    "color: yellow; background-color: #2274A5",
);
//? Напиши клас StringBuilder.
//? На вхід він отримує один параметр
//? - рядок, який записує у властивість _value.
//? Додай класу наступний функціонал:
//? 🔸 Геттер value - повертає поточне значення поля _value
//? 🔸 Метод append(str) - отримує параметр str (рядок) і додає його в кінець _value
//? 🔸 Метод prepend(str) - отримує параметр str (рядок) і додає його на початок _value
//? 🔸 Метод pad(str) - отримує параметр str (рядок) і додає його на початок і в кінець _value
//! Код виконаного завдання ⤵️
class StringBuilder {
    constructor(initialValue) {
        this._value = initialValue;
    }

    get value() {
        return this._value;
    }

    append(str) {
        this._value += str;
    }

    prepend(str) {
        this._value = str + this._value;
    }

    pad(str) {
        this._value = str + this._value + str;
    }
}
//! Код виконаного завдання ⤴️

const builder = new StringBuilder('.');
console.log(builder.value); //! '.'

builder.append('^');
console.log(builder.value); //! '.^'

builder.prepend('^');
console.log(builder.value); //! '^.^'

builder.pad('=');
console.log(builder.value); //! '=^.^='
console.log("--------------------------------------------------");



//todo [5]
console.log(
    "%c [5] ",
    "color: yellow; background-color: #2274A5",
);
//? Напиши клас Car із зазначеними властивостями і методами.
class Car {
 /*
     * Додай статичний метод `getSpecs(car)`,
     * який приймає об'єкт-машину як параметр і виводить
     * в консоль значення властивостей maxSpeed, speed, isOn, distance и price.
     */
    static getSpecs(car) {
        console.log(`maxSpeed: ${car.maxSpeed}, speed: ${car.speed}, isOn: ${car.isOn}, distance: ${car.distance}, price: ${car.price}`);
    }
/*
     * Конструктор отримує об'єкт налаштувань.
     *
     * Додай властивості майбутнього екземпляра класу:
     *  speed - поточна швидкість, початкова 0
     *  price - ціна автомобіля
     *  maxSpeed - максимальна швидкість
     *  isOn - заведений автомобіль, значення true або false. Спочатку false
     *  distance - загальний кілометраж, спочатку 0
     */
    constructor({ maxSpeed,speed = 0, isOn=false, distance = 0,  price }) {
        this.speed = speed;
        this.maxSpeed = maxSpeed;
        this.price = price;
        this.isOn = isOn;
        this.distance = distance;
    }

// * Додай геттер і сеттер для властивості price,
//      * який буде працювати з властивістю ціни автомобіля.

    get price() {
        return this._price;
    }

    set price(value) {
        this._price = value;
    }

/*
     * Додай код для того, щоб завести автомобіль
     * Записує у властивість isOn значення true
     */
    turnOn() {
        this.isOn = true;
    }
/*
     * Додай код для того, щоб заглушити автомобіль
     * Записує у властивість isOn значення false,
     * і скидає поточну швидкість в 0
     */
/*
     * Додає до властивості speed отримане значення,
     * за умови, що результуюча швидкість
     * не більше, ніж значення властивості maxSpeed
     */
    turnOff() {
        this.isOn = false;
        this.speed = 0;
    }
 /*
     * Додає до властивості speed отримане значення,
     * за умови, що результуюча швидкість
     * не більше, ніж значення властивості maxSpeed
     */
 
    accelerate(value) {
        if (this.speed + value <= this.maxSpeed) {
            this.speed += value;
        } else{
            console.log("Speed exceeds maximum!")
            this.speed += value
        }
    }
 /*
     * Забирає від властивості speed отримане значення,
     * за умови, що результуюча швидкість не менше нуля
     */

    decelerate(value) {
        if (this.speed - value >= 0) {
            this.speed -= value;
        } else{
            this.speed = 0
        }
    }
//  * Додає в поле distance кілометраж (hours * speed),
//      * але тільки в тому випадку, якщо машина заведена!
//      */

    drive(hours) {
        if (this.isOn) {
            this.distance += hours * this.speed;
        } else{
            console.log("CAr is off")
            return;
        }
    }
}
    const mustang = new Car({ maxSpeed: 200, price: 2000 });

mustang.turnOn();
mustang.accelerate(50);
mustang.drive(2);

Car.getSpecs(mustang); //! maxSpeed: 200, speed: 50, isOn: true, distance: 100, price: 2000

mustang.decelerate(20);
mustang.drive(1);
mustang.turnOff();

Car.getSpecs(mustang); //! maxSpeed: 200, speed: 0, isOn: false, distance: 130, price: 2000

console.log(mustang.price); //! 2000
mustang.price = 4000;
console.log(mustang.price); //! 4000
console.log("--------------------------------------------------");
