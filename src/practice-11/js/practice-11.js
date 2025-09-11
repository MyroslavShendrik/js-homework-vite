//! Предикатні функції
//todo: Предика́т (лат. praedicatum «заявлене, згадане, сказане»)
//todo: - це твердження, висловлене про суб'єкт.
//? Функції-предикати (або функції-питання)
//? відповідають на якесь запитання
//? і завжди (без винятків!) повертають або true або false.
//? У JavaScript предикати зазвичай починаються
//? з префікса is, has або can,
//? але не обмежені цими словами.
//? Приклади:
//todo: isInfant() — «чи це немовля?»
//todo: hasChildren() — «чи є діти?»
//todo: isEmpty() — «чи порожній?»
//todo: hasErrors() — «чи є помилки?»


console.warn("Що таке Предикатна функція. Приклад:");
//todo: Функція-предикат isInfant відповідає на питання:
//todo: «чи це немовля?» та повертає true або false
const isInfant = function (age) {
    //todo: var.1
    // if (age <= 1) {
    //     return true;
    // } else {
    //     return false;
    // };
    //todo: var.2
    return (age <= 1);
};
console.log("isInfant(1):", isInfant(1)); //! true
console.log("isInfant(3):", isInfant(3)); //! false
console.log("--------------------------------------------");


//! Приклад-алгоритм приготування кави за допомогою функції "Приготування кави"
console.warn("Приклад функції \"Приготування кави\":");
let groundCoffee;
let hotWater;
let coffee;

//! 1 - функція "Приготування меленої кави"
function makesGroundCoffee() {
    groundCoffee = "30 грам";
    console.log("1️⃣ Мелена кава є?", Boolean(groundCoffee));
    console.log(groundCoffee);
    return groundCoffee;
};

//! 2 - функція "Приготування окропу (гарячої води)".
function makesHotWater() {
    // hotWater = "250 мілілітрів";
    console.log("2️⃣ Окріп (гаряча вода) є?", Boolean(hotWater));
    return hotWater;
};

//! 3 - функція "Приготування кави"
function makingCoffee() {
    if (!(makesGroundCoffee())) {
        return "Потрібна мелена кава!";
        
    };

    if (!(makesHotWater())) {
        return "Потрібна гаряча вода!";
    };

    coffee = groundCoffee + hotWater;
    coffee = "✅ Кава готова!"
    return coffee;
};

console.log(makingCoffee());
console.log("--------------------------------------------");

//! Виклик функції або передача посилання на функцію
//? Функції не відрізняються від чисел, рядків або масивів
//? - це просто спеціальний тип даних (об'єкт вищого порядку),
//? значення, яке можна зберігати у змінній
//? або передавати у якості аргументу в іншу функцію.
const greet1 = function(name) {
    return `Ласкаво просимо ${name}.`;
};
const greet2 = 4;
console.warn("Виклик функції:");
//? Викликаємо функцію greet1 і виводимо результат у консоль
console.log(greet1("Манго")); //! 'Ласкаво просимо Манго'.

console.warn("Передача посилання на функцію:");
//? Виводимо функцію greet1 у консоль, не викликаючи її.
//? Передається посилання на функцію,
//? а не результат виклику (відсутні круглі дужки),
//? тому в консоль виводиться її тіло.
//? Це означає, що функцію можна присвоїти у змінну
//? або передати як аргумент іншої функції.
console.log(greet1); //! ƒ greet1() { return `Ласкаво просимо ${name}.`; }
console.log(greet2); //! 4 
console.log(". . . . . . . . . . . . . . . . . . . . . . . . . . . .");

//! Колбек-функції
console.warn("Колбек-функції:");
//? Функція зворотного виклику (callback, колбек)
//? - це функція, яка передається іншій функції
//? як аргумент, а та, в свою чергу, викликає передану функцію.

//? Функція вищого порядку (higher order function)
//? - функція, яка приймає у якості параметрів
//? інші функції або повертає функцію у якості результату.

//todo: Приклад створення та використання Колбек-функції:
//? У виклику функції registerGuest
//? ми передали посилання на функцію greet як аргумент,
//? тому вона буде присвоєна в параметр callback
//? і викликана всередині функції registerGuest
//? за допомогою круглих дужок - callback(guesName). 
//? Ім'я параметра для колбека може бути довільним, 
//? головне пам'ятати, що значенням буде функція.
//todo: Колбек-функція:
function greetUkr(name) {
    console.log(`Global -> Ласкаво просимо ${name}.`);
};
function greetEn(name) {
    console.log(`Global -> Wellcome ${name}.`);
};
//todo: Функція вищого порядку:
function registerGuest(guesName, callback) {
    console.log(`Реєструємо гостя ${guesName}.`);
    //todo: var.1
    // greetEn(guesName);
    // function greet(name) {
    //     console.log(`function registerGuest -> Ласкаво просимо ${name}.`);
    // };
    
    //todo: var.2
    callback(guesName); 
};

//todo: var.1 (виклик з використанням виклику іншої функції в середині функції)
// registerGuest("Манго"); //! 'Реєструємо гостя Манго.'  'Ласкаво просимо Манго.'
//todo: var.2 (виклик з використанням Колбек-функції)
registerGuest("Манго", greetUkr); //! 'Реєструємо гостя Манго.'  'Ласкаво просимо Манго.'
registerGuest("Манго", greetEn);
console.log(". . . . . . . . . . . . . . . . . . . . . . . . . . . .");
const login = "mipk";
const login1 = "mipkol";
function a (name){
    console.log(`а-це функція колбек ${name} `);
};
function c (name){
    console.log(`c-це функція колбек ${name} `)
}
function d (name){
    console.log(`d-це функція колбек ${name} `)
}
function b (name1, callback) {
    callback(name1);
};
b(login, a);
b(login1, c);
b(login, function d (name){
    console.log(`d-це функція колбек ${name} `)
});

//! Стрілкові(cтрілочні) функції
console.warn("Стрілкові(cтрілочні) функції:");
//? Стрілочні функції мають скорочений, лаконічніший синтаксис,
//? що зменшує обсяг коду, особливо коли функція маленька
//? або якщо вона використовується як колбек.
//? Усі стрілки створюються як функціональний вираз (function expression),
//? і якщо функція - не анонімна, її необхідно присвоювати змінній.
//todo: Звичайне оголошення функції:
function classicAdd(a, b, c) {
    return a + b + c;
};
console.log("classicAdd(1, 2, 3);", classicAdd(1, 2, 3)); //! 6
console.log(". . .  . . . .  . . . . . . . . . . . . . . . . . . . .");

//? Якщо у стрілковій функції є декілька параметрів ,
//? то вони перераховуються через кому в круглих дужках,
//? так само, як в приладі з function classicAdd(a, b, c),
//? між знаками дорівнює = та стрілкою =>.
//todo: Оголошення функції стрілочною функцією (декілька параметрів):
const arrowAdd = (a, b, c) => {
    return a + b + c;
};
console.log("arrowAdd(10, 20, 30);", arrowAdd(10, 20, 30)); //! 60
console.log(". . .  . . . .  . . . . . . . . . . . . . . . . . . . .");

//? Якщо параметр один, його можна оголошувати без круглих дужок.
//todo: Оголошення функції стрілочною функцією (один параметр):
const add = a => {
    return a + 5;
};
console.log("add(10);", add(10)); //! 15
console.log(". . .  . . . .  . . . . . . . . . . . . . . . . . . . .");

//? Якщо параметри відсутні, то обов'язково повинні бути порожні круглі дужки..
//todo: Оголошення функції стрілочною функцією (параметри відсутні):
const greet = () => {
    return "Привіт!"
};

console.log("greet();", greet()); //! 15
console.log("-------------------------------------------------------");

//! Явне та неявне повернення
//? У стрілочної функції після символу =>
//? знаходиться її тіло.
//? Існує два варіанти: з фігурними дужками і без них.


//! Явне повернення
console.warn("Явне повернення:");
//? Якщо є фігурні дужки, і функція повинна повертати якесь значення, 
//? необхідно явно поставити return. 
//? Це називається явне повернення (explicit return). 
//? Такий синтаксис використовується у разі, 
//? якщо в тілі функції потрібно виконати ще якісь інструкції, 
//? крім повернення значення.
const arrowAdd2 = (a, b, c) => {
    // console.log(a, b, c);
    return a + b + c;
};
console.log("arrowAdd2(100, 200, 300);", arrowAdd2(100, 200, 300)); //! 600
console.log("-------------------------------------------------------");


//! Неявне повернення
console.warn("Неявне повернення:");
//? Якщо фігурні дужки відсутні,
//? то повертається результат виразу,
//? який стоїть після =>.
//? Це називається неявне повернення (implicit return).
//?  У прикладі повернеться результат виразу додавання параметрів a, b і c.
const arrowAdd3 = (a, b, c) => a + b + c;
console.log("arrowAdd2(1000, 2000, 3000);", arrowAdd2(1000, 2000, 3000)); //! 6000
console.log("-------------------------------------------------------");

//! Псевдомасив arguments
console.warn("Псевдомасив arguments:");
//? У стрілочних функцій НЕМАЄ локальної змінної arguments, 
//? що містить усі аргументи. 
//? Якщо необхідно зібрати всі аргументи в масив, 
//? використовується операція rest.
const add4 = (...args) => {
    console.log("args:", args);
};

add4(1, 2, 3); //! args: [1, 2, 3]
console.log("-------------------------------------------------------");
const ffdfdfd = function(){
    console.log("expression")
};
function fdfd (dffd){
console.log("declaration")
};
const sdfsfd = () =>{
    console.log("стрілкова")
};
//! в стрількових функціях так не працює (Array.from)
// const fnArray = () =>{
//     const argsArray = Array.from(arguments);
//     console.log("argsArray:", argsArray);
//     return argsArray;
// };

// fnArray(10, 20, 30, 40, 50); //! [10, 20, 30, 40, 50]

//! Стрілкові функції як колбеки
console.warn("Приклад-1: Анонімні стрілкові функції як колбеки:");
//? Анонімні стрілочні функції відмінно підходять
//? як колбеки для перебираючих методів масиву
//? завдяки коротшому синтаксису оголошення,
//? особливо, якщо не потрібне тіло функції.
const numbers1 = [5, 10, 15, 20, 25];

//todo: Оголошення функції
//todo: Виклик функції з оголошенням функції як колбек
numbers1.forEach(function (number, index) {
    console.log(`Індекс: ${index}, значення: ${number}`);
});
console.log(". . . . . . . . . . . . . . . . . . . . . . . . . . . .");

//todo: Анонімна стрілочна функція
//todo: Виклик функції з анонімною стрілочною функцією як колбек
numbers1.forEach((number, index) => {
    console.log(`Індекс: ${index}, значення: ${number}`);
});
console.log("-------------------------------------------------------");


console.warn("Приклад-2: Стрілкові функції як колбеки:");
//? Стрілочну колбек-функцію також можна оголошувати окремо 
//? і передавати на неї посилання. 
//? Це варто робити, якщо одна функція використовується 
//? у декількох місцях програми або якщо вона громіздка.
const numbers2 = [5, 10, 15, 20, 25];

const logMessage = (number, index) => {
    console.log(`Індекс ${index}, значення ${number}`);
};

//todo: Виклик функції зі стрілочною функцією як колбек
numbers2.forEach(logMessage);
console.log("-------------------------------------------------------");

//! Приклад-алгоритм "Приготування кави" за допомогою Колбек-функцій 
console.warn("Приклад функції \"Приготування кави\" за допомогою Колбек-функцій:");
let groundCoffee3;
let hotWater3;
let coffee3;

//! 1 - функція "Приготування меленої кави"
function makesGroundCoffee3() {
    groundCoffee3 = "30 грам";
    console.log("1️⃣ Мелена кава є?", Boolean(groundCoffee3));
    return groundCoffee3;
};

//! 2 - функція "Приготування окропу (гарячої води)".
function makesHotWater3() {
    hotWater3 = "250 мілілітрів";
    console.log("2️⃣ Окріп (гаряча вода) є?", Boolean(hotWater3));
    return hotWater3;
};

//! 3 - функція "Приготування кави"
function makingCoffee3(callback1, callback2) {
    if (!(callback1())) {
        return "Потрібна мелена кава!";
    };

    if (!(callback2())) {
        return "Потрібна гаряча вода!";
    };

    coffee3 = groundCoffee3 + hotWater3;
    coffee3 = "✅ Кава готова!"
    return coffee3;
};

console.log(makingCoffee3(makesGroundCoffee3, makesHotWater3));

console.log("--------------------------------------------");
//! Приклад-алгоритм "Приготування кави" за допомогою стрілкових-Колбек-функцій 
console.warn("Приклад функції \"Приготування кави\" за допомогою Колбек-функцій:");
let groundCoffee4;
let hotWater4;
let coffee4;

//! 1 - функція "Приготування меленої кави"
const makesGroundCoffee4 = () => {
    groundCoffee4 = "30 грам";
    console.log("1️⃣ Мелена кава є?", Boolean(groundCoffee4));
    return groundCoffee4;
};

//! 2 - функція "Приготування окропу (гарячої води)".
const makesHotWater4 = () => {
    hotWater4 = "250 мілілітрів";
    console.log("2️⃣ Окріп (гаряча вода) є?", Boolean(hotWater4));
    return hotWater4;
};

//! 3 - функція "Приготування кави"
const makingCoffee4 = (callback1, callback2) => {
    if (!(callback1())) {
        return "Потрібна мелена кава!";
    };

    if (!(callback2())) {
        return "Потрібна гаряча вода!";
    };

    coffee4 = groundCoffee4 + hotWater4;
    coffee4 = "✅ Кава готова!"
    return coffee4;
};

console.log(makingCoffee4(makesGroundCoffee4, makesHotWater4));
console.log("--------------------------------------------");

//! Приклад-алгоритм "Приготування кави" за допомогою стрілкових-Колбек-функцій 
console.warn("Приклад функції \"Приготування кави\" за допомогою Колбек-функцій:");
let groundCoffee5;
let hotWater5;
let coffee5;

//! 1 - стрілкова функція з неявним поверненням  "Приготування меленої кави"
// const makesGroundCoffee5 = () => "30 грам";
   


//! 2 - стрілкова функція з неявним поверненням "Приготування окропу (гарячої води)".
// const makesHotWater5 = () => "250 мілілітрів";



//! 3 - функція "Приготування кави"
const makingCoffee5 = (callback1, callback2) => {
    if (!(callback1())) {
        return "Потрібна мелена кава!";
    };

    if (!(callback2())) {
        return "Потрібна гаряча вода!";
    };

    coffee5 = groundCoffee5 + hotWater5;
    coffee5 = "✅ Кава готова!"
    return coffee5;
};

// console.log(makingCoffee5(makesGroundCoffee5, makesHotWater5));
//!анонімна стрілкова  функція з неявним поверненням
console.log(makingCoffee5(() => "30 грам",() => "250 мілілітрів"));
console.log("--------------------------------------------");