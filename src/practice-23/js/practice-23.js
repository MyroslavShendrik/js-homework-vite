//! Підключення бібліотеки Lodash
console.warn("Бібліотека Lodash: \n https://lodash.com");
console.warn("Підключення бібліотеки Lodash: \n https://www.jsdelivr.com/package/npm/lodash");
console.warn("Підключення бібліотеки Lodash через CDN: \n https://cdnjs.com/libraries/lodash.js");

//? ✴️ CDN (Content Delivery Network) -
//? це географічно розподілена мережева інфраструктура,
//? що забезпечує швидку доставку контенту
//? користувачам веб-сервісів і сайтів.
//? Сервери, що входять до складу CDN,
//? географічно розташовуються таким чином,
//? щоб зробити час відповіді для користувачів
//? сайту/сервісу мінімальним.
//? ✳️ Підключимо до проекту бібліотеку Lodash через CDN.
//? Для цього використаємо сервіс cdnjs.com
//? і додамо посилання на скрипт бібліотеки в кінці HTML-документа
console.log(
    `%c
    <script
        src="https://cdnjs.cloudflare.com/ajax/libs/lodash.js/4.17.21/lodash.min.js"
        integrity="sha512-WFN04846sdKMIP5LKNphMaWzU7YpMyCU245etK3g/2ARYbPK9Ub18eG+ljU96qKRCWh+quCY7yefSmlkQw1ANQ=="
        crossorigin="anonymous"
        referrerpolicy="no-referrer">
    </script>
    `,
    'color: blue; font-size: 18px',
);
console.log("-------------------------------------------------------------------");


//! Використання бібліотеки Lodash (документація)
console.warn("Використання бібліотеки Lodash (документація)): \n https://lodash.com/docs/4.17.15");
console.log("");


//todo: “Math” Methods --> (_.add(augend, addend))
console.log(
    '%c “Math” Methods --> (_.add(augend, addend)) ',
    'color: white; background-color:rgb(0, 136, 100)',
);
console.warn("Використання бібліотеки Lodash (“Math” Methods --> (_.add)): \n https://lodash.com/docs/4.17.15#add");
//? ✳️ Цей метод додає два числа (рахує суму двох чисел).
const sum = _.add(10, 5);
console.log("sum:", sum); //! 15
const sum1 = _.add(12, 24);
console.log("sum1:", sum1); //! 36
console.log(". . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .");


//todo: “Object” Methods --> (_.findKey(object, [predicate=_.identity]))
console.log(
    '%c “Object” Methods --> (_.findKey(object, [predicate=_.identity])) ',
    'color: white; background-color:rgb(0, 136, 100)',
);
console.warn("Використання бібліотеки Lodash (“Object” Methods --> (_.findKey): \n https://lodash.com/docs/4.17.15#findKey");
//? ✳️ Цей метод подібний до _.find, 
//? за винятком того, що він повертає ключ першого елемента, 
//? для якого предикат повертає truthy for, а не сам елемент.
const users = {
    barney: { 'age': 36, 'active': true },
    fred: { 'age': 40, 'active': false },
    pebbles: { 'age': 1, 'active': true }
};
console.log("Властивість, де age < 40:", _.findKey(users, function (o) { return o.age < 40; })); //! 'barney' (порядок ітерації не гарантовано)
console.log(". . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .");


//todo: “String” Methods --> _.startCase([string=""])
console.log(
    '%c “String” Methods --> _.startCase([string=""]) ',
    'color: white; background-color:rgb(0, 136, 100)',
);
console.warn("Використання бібліотеки Lodash (“String” Methods --> (.startCase): \n https://lodash.com/docs/4.17.15#startCase");
//? ✳️ Перетворює рядок на початковий регістр..
const startCase = document.getElementById("start-case");
console.log("startCase:", startCase);

let startCaseTextContent = startCase.textContent;
console.log("startCase.textContent:", startCaseTextContent);

const NewStartCaseTextContent = _.startCase(startCaseTextContent);
console.log("_.startCase(startCase.textContent):", NewStartCaseTextContent);

startCase.textContent = NewStartCaseTextContent;
console.log("-------------------------------------------------------------------");
console.log(
    '%c 2.Балакучі події (Chatty events) ',
    'color: white; background-color: #D33F49',
);

//! Балакучі події (Chatty events)
console.warn("Балакучі події (Chatty events)​:");
//? ✳️ Досить часто необхідно обробити зміну розміру вікна,
//? скрол, переміщення миші або текстове введення користувача.
//? Це може бути сортування колекції і відображення результатів,
//? анімація елемента, маніпуляції з DOM-деревом та інше.
//? Все це покращує UX (user experience), але, на жаль,
//? має велике навантаження на браузер, оскільки обробники подій
//? спрацьовують надто часто.
//? Такі події неофіційно називають Балакучі події («chatty events»).


//! Подія "scroll"
console.warn('Подія "scroll​:');
//? ✳️ Наприклад, якщо додати слухача події до скролу, 
//? то під час прокручування сторінки мишкою 
//? можна викликати близько 30 подій на секунду. 
//? Повільне прокручування (свайп) у смартфоні може викликати 
//? до 100 подій на секунду. 
//? Якщо обробник події скролу виконує важкі обчислення 
//? та інші DOM-маніпуляції, гарантовано 
//? виникнуть проблеми з продуктивністю.
const output = document.querySelector(".output");
let scrollEventCounter = 0;

document.addEventListener("scroll", () => {
    scrollEventCounter += 1;
    output.textContent = scrollEventCounter;
    console.log("scrollEventCounter:", scrollEventCounter); //!
});
console.log("-------------------------------------");

//! Throttle (обмежувач частоти)
console.warn(`Throttle​​: \n ${((window.location.href).split('/')).slice(0, -2).join('/') + '/'}${"lesson-FE4_02/images/throttle.png"}`);
//? ❗️❗️❗️ Throttle - функція виконується не частіше,
//?     ніж один раз на заданий інтервал часу N,
//?     навіть якщо подія відбувається частіше.
//? 📌 Використання Throttle:
//? 🔸 Обробка подій прокручування.
//? 🔸 Відстеження переміщення миші.
//? 🔸 Обмеження частоти натискань.

//? ✴️ Прийом throttle контролює кількість разів,
//? яку функція може бути викликана протягом певного проміжку часу.
//? Тобто дозволяє викликати функцію не частіше
//? одного разу за N мілісекунд, гарантуючи її регулярне виконання.
//? ✳️ Використовуючи throttle, ми не контролюємо,
//? як часто браузер буде генерувати події.
//? Ми всього-на-всього беремо контроль
//? над частотою виконання функції обробника події.
//? ✳️ Реалізація з бібліотеки Lodash
//? очікує першим аргументом функцію,
//? яку необхідно «загальмувати»,
//? а другим - кількість мілісекунд.
//? Повертає нову функцію для передачі в слухач події.
// todo: Без Throttle
document.addEventListener(
    "scroll",
    () => {
        console.log("Виклик обробника прокрутки");
    }
);
// todo: З Throttle
document.addEventListener(
    "scroll",
    _.throttle(() => {
        console.log("Виклик обробника прокрутки кожні 300ms");
    }, 300)
);
console.log("-----------------------------------------------------------");

//! Input (with debounce)
console.warn("Input (with debounce)​:");
const input = document.querySelector(".input");
console.log("input:", input); //!
//todo: Відправка запиту без debounce
// input.addEventListener("input", () => {
//     console.log("Відправка запиту без debounce:", input.value);
// });
//todo: Відправка запиту з debounce
input.addEventListener("input", _.debounce(() => {
    console.log("Відправка запиту з debounce:", input.value);
}, 500));