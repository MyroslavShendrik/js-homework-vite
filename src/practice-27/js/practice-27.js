//! Метод JSON.stringify()
console.log(
    `%c
    JSON.stringify(object)
    `,
    'color: blue; font-size: 18px',
);
console.log("--------------------------------------------------");

//? ✴️ Приймає значення і перетворює його у JSON.
//? Значенням може бути число, буль, null, масив або об'єкт.
//? Рядки - це вже валідний JSON, тому в їх перетворенні немає сенсу.

//? ✳️ Результат виклику JSON.stringify(dog) - це валідний JSON (рядок),
//? який може бути збережений у файл або переданий мережею.
const dog1 = {
    name: "Mango",
    age: 3,
    isHappy: true,
};

console.log("dog1:", dog1);

const dogJSON1 = JSON.stringify(dog1);
console.log("dogJSON1:", dogJSON1);  //! "{"name":"Mango","age":3,"isHappy":true}"
console.log("--------------------------------------------------");
//? ✴️ Не будь-який JavaScript об'єкт
//? може бути перетворений один до одного у JSON.
//? Наприклад, якщо в об'єкта є методи,
//? то при перетворенні вони будуть проігноровані.
const dog2 = {
    name: "Mango",
    age: 3,
    isHappy: true,
    bark() {
        console.log("Woof!");
    },
};

const dogJSON2 = JSON.stringify(dog2);
console.log("dogJSON2:", dogJSON2); //! "{"name":"Mango","age":3,"isHappy":true}"
console.log("--------------------------------------------------");


//? ✴️ Також, при спробі перетворити функцію в JSON, результатом буде undefined.
const functionJSON = JSON.stringify(() => console.log("Well, this is awkward")); 
console.log("functionJSON:", functionJSON); //! undefined
console.log("--------------------------------------------------");


//? ✴️ Щоб отримати з JSON валідне JavaScript значення,
//? його необхідно розпарсити (parse).
//? Це операція зворотна перетворенню в рядок (stringify).
//? Тепер, коли dog - це валідний об'єкт,
//? з ним можна працювати звичайним чином.
const dogJSON = '{"name":"Mango","age":3,"isHappy":true}';
console.log("dogJSON:", dogJSON);  //! "{"name":"Mango","age":3,"isHappy":true}"

const dog = JSON.parse(dogJSON);
console.log("dog:", dog); //! {name: "Mango", age: 3, isHappy: true}
console.log("dog.name:", dog.name); //! "Mango"
console.log("--------------------------------------------------");

// import { dogJSON1 } from "./02-fe4-js_08.js";
// console.log("dogJSON1:", dogJSON1);  //! "{"name":"Mango","age":3,"isHappy":true}"

const dog3 = JSON.parse(dogJSON1);
console.log("dog1:", dog3); //! {"name": "Mango", age: 3, isHappy: true}
console.log("dog1.name:", dog3.name); //! "Mango"

console.log("dog === dog1:", dog === dog3); //! false
console.log("--------------------------------------------------");

//! Конструкція try...catch
console.warn("Конструкція try...catch:");
//? ✴️ Якщо методам класу JSON передати невалідний JSON,
//? то вони «викинуть» помилку і весь скрипт впаде.
//? Для уникнення цього, використовується конструкція try...catch,
//? яка дозволяє «ловити» і обробляти помилки виконання скрипта.
console.log(
    `%c
    try {
        // Code that may throw a runtime error
    } catch (error) {
        // Error handling
    }
    `,
    'color: blue; font-size: 18px',
);
//?   📌 Алгорити роботи конструкції try...catch:
//? 🔸 1.Спочатку виконується код всередині блоку try.
//? 🔸 2.Якщо помилки відсутні, блок catch ігнорується
//?     і управління передається далі.
//? 🔸 3.Якщо в блоці try сталася помилка,
//?     його виконання зупиняється
//?     та інтерпретатор переходить до блоку catch.

//? ✴️ Змінна error - це об'єкт помилки
//? з інформацією про те, що сталося.
//?     📌У цього об'єкта error є кілька корисних властивостей:
//? 🔸 name - тип помилки. Для помилки парса - це SyntaxError.
//? 🔸 message - повідомлення про деталі помилки.
//? 🔸 stack - стек викликів функцій на момент помилки.
//?     Використовується для налагодження.
console.log("-------------------------------------------------------------------------------");

//! Приклад-1, парса рядка як невалідного JSON
console.warn("Приклад-1, парса рядка як невалідного JSON:");
//? ✳️ Наприклад, парс рядка призведе до такого сценарію
//? - під час аналізу скрипт завершиться збоєм
//? та видачею повідомлень про помилку,
//? тому що рядок з символами - це невалідний JSON,
//?  оскільки не може бути перетворений у валідне JavaScript значення.
//todo: Під час аналізу цей скрипт завершиться збоєм та видачею повідомлень про помилку:
let data = "oчікує JSON...";
// data = JSON.parse("Well, this is awkward"); //! Uncaught SyntaxError: Unexpected token 'W', "Well, this"... is not valid JSON
console.log("data:", data); //! цей код вже не виконається

//? ✳️ Використовуючи конструкцію try...catch,
//? ми можемо обробити цю ситуацію таким чином,
//? щоб скрипт продовжив працювати, навіть у разі помилки.
try {
    // const data = JSON.parse("Well, this is awkward");
    const data = JSON.parse(dogJSON1);
    console.log("data in try:", data); //! цей код вже не виконається, якщо є помилка
} catch (error) {
    console.log(error.name); //! SyntaxError
    console.log(error.message); //! Unexpected token 'W', "Well, this"... is not valid JSON
};
console.log(". . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .");
console.log("1️⃣✅ Ми бачимо це повідомлення, тому що обробили помилку парса в try...catch!");
console.log("-------------------------------------------------------------------------------");



//! Приклад-2, парса рядка як валідного або невалідного JSON
console.warn("Приклад-2, парса рядка як валідного або невалідного JSON:");
//? ✳️ При спробі парса невалідного JSON: '{username: "Mango"}'
//? (у властивості username бракує подвійних лапок),
//? який може прийти з бекенду або бути прочитаний з файлу,
//? під час аналізу скрипт знов завершиться збоєм
//? та видачею повідомлень про помилку.
//? ✳️ Якщо рядок - це валідний JSON: '{"username": "Mango"}', 
//? то спрацює блок try і ми отримаємо результат парсу 
//? у змінну <data> і побачимо його в обох консолях.
const jsonData = '{"username": "Mango"}'
try {
    // data = JSON.parse('{"username": "Mango"}'); // ✅
    data = JSON.parse(jsonData); // ✅
    // data = JSON.parse('{username: "Mango"}'); //❌
    console.log("data in try:", data); //! цей код вже не виконається, якщо є помилка
} catch (error) {
    console.log(error.name); //! SyntaxError
    console.log(error.message); //! Unexpected token 'W', "Well, this"... is not valid JSON
};
console.log(". . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .");
console.log("data:", data); //! {username: 'Mango'}, якщо - try(ВІРНО) або "oчікує JSON...", якщо - catch(ПОМИЛКА)
console.log("2️⃣✅ Ми бачимо ці повідомлення, тому що обробили помилку парса в try...catch!");
console.log("-------------------------------------------------------------------------------");
