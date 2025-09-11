console.log('Practice-1 JS');
//! Код виконаного завдання
//? Код виконаного завдання
//* Код виконаного завдання
//todo Код виконаного завдання
const age = 16;
console.log(age);

// let myAge;
let myAge = null;
console.log(typeof myAge);
console.log(myAge);

myAge = 17;
console.log(myAge);

myAge = 18;
console.log(myAge);

const myName = "Myroslav";
console.log(myName);

console.log('------------');
console.log('10');
console.log(10);
console.log("Myroslav")
console.log(2008)
console.log('------------');
const typeMyAge = typeof myAge;
console.log("typeMyAge:", typeMyAge);
const typeMyName = typeof myName;
console.log("тип зміної myName:", typeMyName);
const isMan = true;
console.log("стать чоловіча?:", isMan);
const typeIsMan = typeof isMan;
console.log("тип змінної isMan :", typeIsMan);

// lesson2
console.log("lesson-2");
const myNumber = 10;
console.log('myNumber:', myNumber);
console.log("тип змінної myNumber:", typeof myNumber);
// const promptNumber = prompt("ведіть число");
// console.log('promtNumber:', promptNumber);
// console.log("тип змінної promptNumber:", typeof promptNumber);
//  const newPromptNumber = Number(promptNumber);
// console.log('newPromptNumber:', newPromptNumber);
// console.log("тип змінної newPromptNumber:", typeof newPromptNumber);

// lesson3
console.log("lesson-3");
console.log(36);
console.log(true);
console.log(false);
console.log(null);
console.log(undefined);

console.log('typeof "lesson-3":', typeof "lesson-3");
console.log(typeof 36);
console.log(typeof true);
console.log(typeof false);
console.log(typeof null);
console.log(typeof undefined);

const a = 5;
const b = 7;
let c;
c = a + b;
console.log('a + b =', c);
console.log('a - b =', a - b);
console.log(' b / a =', b / a);
console.log(' b * a =', b * a);

// lesson4
console.log("lesson 4")
let toNumber1 = 5;
let toNumber = Number("5px");
console.log('Number("5px"):', toNumber);
console.log("typeof toNumber:", typeof toNumber);

console.log('Number("5" * 2):', Number("5" * 2));
const d = "5" * 2;
console.log('"5" * 2:', d);

console.log('Number("5" + 2):', Number("5" + 2));

const e = "5" + 2;
console.log('"5" + 2:', e);

const e1 = 5 + 2;
console.log('5 + 2:', e1);

const f = "5" - 2;
console.log('"5" - 2:', f);
const g = "5" / 2;
console.log('"5" / 2:', g);

const h = "6";
const j = 5;
console.log(`h: ${h}, j: ${j}`);
console.log('h:', h, ",", "j:", j);
console.log('h > j:', h > j);
console.log('h < j:', h < j);
console.log('h <= j:', h <= j);
console.log('h >= j:', h >= j);

console.log('parseInt("5"):', parseInt("5"));
console.log('Number("5"):', Number("5"));

console.log('parseInt("5px"):', parseInt("5px"));
console.log('Number("5px"):', Number("5px"));

console.log('parseInt("=5px"):', parseInt("=5px"));

console.log('parseInt("5m2sm"):', parseInt("5m2sm"));

console.log('parseInt("5.5"):', parseInt("5.5"));

console.log('parseFloat("5.5"):', parseFloat("5.5"));

console.log('parseFloat("5.px"):', parseFloat("5.px"));

console.log('Number("5.5"):', Number("5.5"));
console.log('Number("5.5px"):', Number("5.5px"));

console.log('Number.parseFloat("12.46qwe79"):', Number.parseFloat("12.46qwe79"));

console.log('36 + "Привiт!":', 36 + "Привiт!");
console.log('isNaN(36 + "Привiт!"):', isNaN(36 + "Привiт!"));
console.log('isNaN(36):', isNaN(36));
console.log('isNaN("36"):', isNaN("36"));

//! Перевірка на NaN - метод Number.isNaN(val)
console.log('Number.isNaN("qwerty"):', Number.isNaN("qwerty"));
console.log('Number.isNaN(36):', Number.isNaN(36));
console.log('Number.isNaN(NaN):', Number.isNaN(NaN));

let valueNaN = Number("63");
console.log('valueNaN = Number("qwerty"):', valueNaN); //! NaN
console.log('Number.isNaN(valueNaN):', Number.isNaN(valueNaN)); //! true
console.log('Number.isNaN(NaN):', Number.isNaN(NaN)); //! true

console.log("0.1 + 0.2 === 0.3:", 0.1 + 0.2 === 0.3);
console.log("0.1 + 0.2 =", 0.1 + 0.2);

//? var. 1
//? Можна зробити їх цілими, помноживши кожне з них на число
//? N(10 або 100, в залежності від кількості знаків після коми),
//? скласти(додати) їх, а потім результат поділити також на N.
console.warn("Variant 1");
console.log("0.1 * 10 + 0.2 * 10 =", 0.1 * 10 + 0.2 * 10); //! 3
const result = (0.1 * 10 + 0.2 * 10) / 10;
console.log("(0.1 * 10 + 0.2 * 10) / 10 =", result); //! 0.3

//? var. 2
//! Метод число.toFixed(digits)
//? Cкласти(додати) числа, а результат скоротити до 
//? певного знаку після коми за допомогою методу toFixed().
console.warn("Variant 2");
console.log("(0.1 + 0.2).toFixed(1) =", (0.1 + 0.2).toFixed(1)); //! 0.3
console.log("(0.1 + 0.2).toFixed(17) =", (0.1 + 0.2).toFixed(17)); //! 0.3000000000000004
console.log("------------- Приклади toFixed(): ------------");
console.log("(5).toFixed(2) =", (5).toFixed(2));  //! 5.00
console.log("(8.762195).toFixed(4) =", (8.762195).toFixed(4));  //! 8.7622
console.log("8.762195.toFixed(4) =", 8.762195.toFixed(4));  //! 8.7622
console.log("----------------------------------------------");
// lesson5
console.log("lesson5");
const course1 = "JavaScript";
console.log("course1:", course1); //! JavaScript

const course2 = 'JavaScript';
console.log("course2:", course2); //! JavaScript

const course3 = `JavaScript`;
console.log("course3:", course3); //! JavaScript
//! Конкатенація рядків
const myMessage = "Mango " + "is " + "happy";
console.log('("Mango " + "is " + "happy"):', myMessage); //! "Mango is happy"

const myAge2 = 24;
const newMessage = "Poly is " + myAge2 + " years old!";
console.log('("Poly is " + age + " years old!"):', newMessage); //! "Poly is 24 years old!"

console.log("'Mango' + 55:", 'Mango' + 55); //! "Mango55"
console.log("'Mango' + true:", 'Mango' + true); //! "Mangotrue"
console.log("---------------------------------------------------------");
console.log("50 + 55:", 50 + 55); //! "Mango55"
console.log("'50' + 55:", '50' + 55); //! "Mango55"
console.log("'Mango' + true:", 'Mango' + true); //! "Mangotrue"
console.log("false + true:", false + true); //! "Mangotrue"
console.log("---------------------------------------------------------");
console.log("1 + '2':", 1 + '2'); //! "12"
console.log("1 + '2' + 4:", 1 + '2' + 4); //! "124"
console.log("1 + 2 + '4':", 1 + 2 + '4'); //! "34"

//! ЯВНЕ - вбудована функція (або функція-конструктор) -> String(value)
//? Використовується для будь-яких перетворень.
//? Працює на будь-якому типі значень.
console.log(
    "%c ЯВНЕ приведення до рядка - String(value) ",
    "color: yellow; background-color: #2274A5",
);
console.log("String(5):", String(5)); //! "5"
console.log("String('5'):", String('5')); //! "5"
console.log("String(true):", String(true)); //! "true"
console.log("String(undefined):", String(undefined)); //! "undefined"
console.log("String(null):", String(null)); //! "null"
console.log("String(NaN):", String(NaN)); //! "NaN"

//! ЯВНЕ - метод .toString()
//? Використовується для об'єктів або примітивів.
//? Якщо застосовується до null або undefined, 
//? викличе помилку(TypeError).
//? Надає більше контролю над перетворенням 
//? деяких об'єктів (наприклад, Array, Object).
console.log(
    "%c ЯВНЕ приведення до рядка - .toString() ",
    "color: yellow; background-color: #2274A5",
);
console.log("(5).toString():", (5).toString()); //! "5"
console.log("('5').toString():", ('5').toString()); //! "5"
console.log("(true).toString:", (true).toString()); //! "true"
// console.log("(undefined).toString:", (undefined).toString()); //! Cannot read properties of undefined (reading 'toString')
console.error(`(undefined).toString: Cannot read properties of undefined (reading 'toString')`);
// console.log("(null).toString:", (null).toString()); //! Cannot read properties of null (reading 'toString')
console.error(`(null).toString: Cannot read properties of null (reading 'toString')`)
console.log("(NaN).toString:", (NaN).toString()); //! "NaN"

//? НЕЯВНЕ - автоматично під час виконання операцій або обчислень
console.log(
    "%c НЕЯВНЕ приведення до рядка - Конкатенація(+) ",
    "color: yellow; background-color: #2274A5",
);
console.log("'5' + 3:", '5' + 3); //! "53"
console.log("3 + '5':", 3 + '5'); //! "35"
console.log("'5' + true:", '5' + true); //! "5true"
console.log("'5' + undefined:", '5' + undefined); //! "5undefined"
console.log("5 + undefined:", 5 + undefined); //! NaN
console.log("'5' + null:", '5' + null); //! "5null"
console.log("5 + null:", 5 + null); //! 5
console.log("null + undefined:", null + undefined); //! NaN
console.log("undefined + undefined:", undefined + undefined); //! NaN
console.log("null + null:", null + null); //! 0
console.log("null + true:", null + true); //! 1
console.log("null + false:", null + false); //! 0
console.log("-----------------------------------");

console.log(
    '%c 4.Шаблонні рядки та інтерполяція ${…} ',
    'color: white; background-color: #D33F49',
);
//! Шаблонні рядки та інтерполяція ${…}

const userName = "Clinton Eastwood";
const message = `Hello, ${userName}!`;
console.log("message:", message);
console.log("---------------------------------------------------");

const guestName = "Mango";
const roomNumber = 207;
console.log(` Welcome ${guestName}, your room number is ${roomNumber}`);
const greeting1 = "Welcome " + guestName + ", your room number is " + roomNumber + "!";
console.log("greeting1:", greeting1);
// Welcome Mango, your room number is 207!

console.log(
    "%c 5.Спецсимволи ",
    "color: white; background-color: #D33F49",
);
//! Перенос рядка \n
console.log(
    "%c Перенос рядка \\n ",
    "color: yellow; background-color: #2274A5",
);
const textOne = `Hello!
my dear!
`;
console.log(textOne);
console.log("----------");

const textTwo = "Hello! \nmy dear!";
console.log(textTwo);


//! Табуляція(відступ) \t
console.log(
    "%c Табуляція(відступ) \\t ",
    "color: yellow; background-color: #2274A5",
);
const text1 = "Hello! \n\tmy dear \n\t\tfriend!";
console.log(text1);

//! Зворотній слеш \\
console.log(
    "%c Зворотній слеш \\\\ ",
    "color: yellow; background-color: #2274A5",
);
const text2 = "Привіт, дорогий користувач\\відвідувач";
console.log(text2);

//! Лапки \' \"
console.log(
    `%c Лапки \\' та \\" `,
    "color: yellow; background-color: #2274A5",
);
const text3 = 'Привіт, моя сім\'я';
console.log(text3);

const text4 = "Привіт, моя \"сім'я\"";
console.log(text4);


//! Символи UTF-16: \uКОД, UTF-32: \u{КОД}
console.log(
    "%c Символи UTF-16: \\uКОД, UTF-32: \\u{КОД} ",
    "color: yellow; background-color: #2274A5",
);
const text5 = "This is my friend: \u{1F60D} \u1F60D";
console.log(text5);

const text6 = "Символ \"копірайт\":  ©";
console.log(text6);

const text7 = "[UTF-16] Символ \"копірайт\": \u00A9";
console.log(text7);

const text8 = "[UTF-32] Символ \"копірайт\": \u{00A9}";
console.log(text8);


console.log(
    '%c 3.Властивості та методи рядків ',
    'color: white; background-color: #D33F49',
);

//! Властивості та методи рядків
//todo Властивості - це описові характеристики сутності.

//! [1] .length
//? Властивість .length дозволяє отримати довжину рядка,
//? тобто кількість його символів
console.log(
    "%c Властивість .length ",
    "color: yellow; background-color: #2274A5",
);
const lifeMotto = "Live! Laugh! Love!";
console.log("lifeMotto.length:", lifeMotto.length); //! 18

console.log('"Repair droid".length:', "Repair droid".length); //! 12
console.log('"JavaScript is awesome".length:', "JavaScript is awesome".length); //! 21


//! [2.1] string[index]
//? Індексація рядків.
//? Отримуємо символи рядка згідно индекса - string[index]
console.log(
    "%c Індексація рядків: string[index] ",
    "color: yellow; background-color: #2274A5",
);
const myString = "JavaScript";
console.log("myString:", myString); //! "JavaScript"
console.log("myString.length:", myString.length); //! 10
console.log("------------------------------");

let firstSymbol = myString[0];
console.log("firstSymbol = myString[0]:", firstSymbol); //! "J"
let secondSymbol = myString[1];
console.log("secondSymbol = myString[1]:", secondSymbol); //! "a"
let fiveSymbol = myString[5];
console.log("fiveSymbol = myString[5]:", fiveSymbol); //! "c"
// myString[5] = d;
console.log("------------------------------");

console.warn("Останній символ:");
const lastElementIndex = myString.length - 1;
console.log("lastElementIndex = myString.length - 1:", lastElementIndex); //! 9

// const lastSymbol = myString[lastElementIndex]; //todo var.1
const lastSymbol = myString[myString.length - 1]; //todo var.2
console.log("lastSymbol = myString[lastElementIndex]:", lastSymbol); //! "t"
//lesson6
console.log("'4' + 2 + 1:", '4' + (2 + 1)); //! "43"
const sevenSymbol = myString.charAt(6);
console.log("sevenSymbol = myString[6]:", sevenSymbol); //! "r"

//! [4] toLowerCase() і toUpperCase()
//? Зміна регістру.
//? Ці методи не змінюють вихідний рядок.
console.log(
    "%c Зміна регістру:               \n toLowerCase() і toUpperCase() ",
    "color: yellow; background-color: #2274A5",
);
const myLifeMotto = "Live! Laugh! Love!";
console.log("myLifeMotto до:", myLifeMotto); //! "Live! Laugh! Love!"
console.log("myLifeMotto.toLowerCase():", myLifeMotto.toLowerCase()); //! "live! laugh! love!"
console.log("myLifeMotto.toUpperCase():", myLifeMotto.toUpperCase()); //! "LIVE! LAUGH! LOVE!"
console.log("myLifeMotto після:", myLifeMotto); //! "Live! Laugh! Love!"
console.log("---------------------------------------------");

//todo Для чого потрібні методи toLowerCase() і toUpperCase()?
console.warn("Використання toLowerCase() і toUpperCase():");
//? Бувають ситуації, коли всі символи в рядку
//? необхідно перетворити в один регістр, ВЕРХНІЙ або нижній.
//? Наприклад, для пошуку за ключовим словом,
//? коли користувач вводить рядок 'saMsUng',
//? а порівняти його потрібно з рядком 'samsung' або 'SAMSUNG'.
console.log('"saMsUng" === "samsung":', "saMsUng" === "samsung"); //! false
console.log('"saMsUng" === "SAMSUNG":', "saMsUng" === "SAMSUNG"); //! false
console.log("---------------------------------------------");
//? Щоб не вимагати абсолютно точне введення, 
//? можна зробити «нормалізацію» введеного користувачем рядка,
//? тобто перетворити всі його символи у верхній 
//? або нижній регістр.
//? Методи рядка toLowerCase() і toUpperCase() 
//? повернуть новий рядок у відповідному регістрі,
//? не змінюючи оригінальний.
const BRAND_NAME = "SAMSUNG";
console.log("BRAND_NAME:", BRAND_NAME);  //! "SAMSUNG"
const userInput = "saMsUng";
console.log("userInput:", userInput);  //! "saMsUng"
console.log('userInput === BRAND_NAME:', userInput === BRAND_NAME); //! false
console.log("---------------------------------------------");
const normalizedToUpperCaseInput = userInput.toUpperCase();
console.log("userInput.toUpperCase():", normalizedToUpperCaseInput);  //! "SAMSUNG"
console.log('userInput.toUpperCase() === BRAND_NAME:', normalizedToUpperCaseInput === BRAND_NAME); //! true

//! [5] indexOf()
//? Метод string.indexOf(substr, pos) - substr в  str, починаючи з pos
//? Повертає позицію(індекс), на якій знаходиться ПЕРШИЙ збіг підрядка
//? або - 1, якщо нічого не знайдено.
console.log(
    "%c Метод: indexOf() ",
    "color: yellow; background-color: #2274A5",
);
const message3 = "Welcome to Bahamas!";
console.log("message3:", message3);  //! "Welcome to Bahamas!" 
const index = message3.indexOf("to");
console.log('index = message3.indexOf("to"):', index);  //! 8 
console.log('message3.indexOf("hello"):', message3.indexOf("hello"));  //! -1
console.log("---------------------------------------------");

//! [6] includes()
//? Перевіряє, чи міститься підрядок в рядку,
//? повертає буль - true, якщо міститься,
//? і false - якщо НЕ міститься.
//? Регістр символів в рядку і підрядку має значення.
console.log(
    "%c Метод: includes() ",
    "color: yellow; background-color: #2274A5",
);
const username = "Jacob Mercer";
console.log("username:", username);  //! "Jacob Mercer"
console.log('username.includes("Jacob"):', username.includes("Jacob"));  //! true
console.log('username.includes("Jakob"):', username.includes("Jakob"));  //! false
console.log('username.includes("Mercer"):', username.includes("Mercer"));  //! true
console.log('username.includes("Jаcob"):', username.includes("Jаcob"));  //! false (літера "а" - ураїньска)!!!
console.log("---------------------------------------------");

//! [7] startsWith() і endsWith()
//? Методи startsWith() і endsWith() призначені
//? для перевірки початку й закінчення рядка відповідно.
//? Вони повертають булеве значення true або false, 
console.log(
    "%c Методи: startsWith() і endsWith() ",
    "color: yellow; background-color: #2274A5",
);
const myString2 = "Hello, world!";
console.log("myString2:", myString2);  //! "Hello, world!"
console.log('myString2.startsWith("Hello"):', myString2.startsWith("Hello"));  //! true
console.log('myString2.endsWith("world!"):', myString2.endsWith("world!"));  //! true

//? Метод чутливий до регістру
console.log('myString2.startsWith("hello"):', myString2.startsWith("hello"));  //! false
console.log('myString2.endsWith("World!):', myString2.endsWith("World!"));  //! false
console.log("---------------------------------------------");


//! [8] trim()
//? Метод trim() використовується для видалення(“обрізання”)
//? початкових і кінцевих пробілів із рядка.
console.log(
    "%c Метод: trim() ",
    "color: yellow; background-color: #2274A5",
);
const emptyString = "";
console.log("emptyString:", emptyString);
console.log("emptyString.length:", emptyString.length);

const emptyString2 = "   ";
console.log("emptyString2:", emptyString2);
console.log("emptyString2.length:", emptyString2.length);
console.log("emptyString === emptyString2 :", emptyString === emptyString2)

// const promt = prompt("введи число");
// console.log("promt:", promt);
// console.log("promt.length:", promt.length);


const input = " JavaScript    ";
console.log(input); //! " JavaScript    "
console.log(
    `%c${input}`,
    "color: darkred; background-color: yellow",
); //! " JavaScript    "
console.log("input.length:", input.length); //! 15
console.log(". . . . . . . . .");

const trimmedInput = input.trim();
console.log(trimmedInput); //! "JavaScript"
console.log(
    `%c${trimmedInput}`,
    "color: yellow; background-color: green",
); //! "JavaScript!"
console.log("trimmedInput.length:", trimmedInput.length); //! 10

//! [9] padStart() і padEnd()
//?  padStart() і padEnd) доповнюють поточний рядок
//? іншим рядком(кілька разів, якщо потрібно),
//? доки отриманий рядок не досягне заданої довжини.
//? Відступ застосовується з кінця / початку поточного рядка.
console.log(
    "%c Методи: padStart() і padEnd() ",
    "color: yellow; background-color: #2274A5",
);
const input2 = "JavaScript";
console.log("input2:", input2);  //! "JavaScript"

console.log('input2.padEnd(20, "!"):', input2.padEnd(20, "!"));  //! JavaScript!!!!!!!!!!
console.log('input2.padEnd(input2.length + 1,"!"):', input2.padEnd(input2.length + 1, "!"));  //! JavaScript!
console.log("--------------------------------------------------");


//! [10] replace() і replaceAll()
//? Повертають новий рядок, в якому перше(replace)
//? або усі збіги(replaceAll) підрядка
//? замінені на вказане значення.
console.log(
    "%c Методи: replace() і replaceAll() ",
    "color: yellow; background-color: #2274A5",
);
const jsFileName = "script.js";
console.log("jsFileName:", jsFileName);  //! "script.js"
const minifiedJsFileName = jsFileName.replace(".js", ".min.js");
console.log('jsFileName.replace(".js", ".min.js"):', minifiedJsFileName);  //! "script.min.js"
console.log("----------------------------------------------------");

const cssFileNames = "styles.css, about.css, portfolio.css";
console.log("cssFileNames:", cssFileNames);  //! "styles.css, about.css, portfolio.css"
const minifiedCssFileNames = cssFileNames.replaceAll(".css", ".min.css");
console.log('cssFileNames.replaceAll(".css", ".min.css"):', minifiedCssFileNames);  //! "styles.min.css, about.min.css, portfolio.min.css"



//! [11] slice()
//? Метод рядків slice(startIndex, endIndex) використовується
//? для створення копії частини або всього рядка.
//? Він робить копію елементів рядка від startIndex і до,
//? але не включно endIndex і повертає новий рядок,
//? не змінюючи оригінал.
console.log(
    "%c Метод: slice() ",
    "color: yellow; background-color: #2274A5",
);
const productName = "Repair droid";
console.log("productName:", productName);  //! "Repair droid"
console.log("productName.slice(0, 4):", productName.slice(0, 4)); //! "Repa"
console.log("productName.slice(3, 9):", productName.slice(3, 9)); //! "air dr"
console.log("productName.slice(0, productName.length):", productName.slice(0, productName.length)); //! "Repair droid"
console.log("productName.slice(0, productName.length - 1):", productName.slice(0, productName.length - 1)); //! "Repair droi"
console.log("productName.slice(7, productName.length):", productName.slice(7, productName.length)); //! "droid"

console.warn("Останній символ:");
console.log("productName.slice(-1):", productName.slice - (1)); //! "d"

console.warn("Від'ємні значення:");
console.log("productName.slice(-5):", productName.slice(-5)); //! "droid"
console.log("productName.length:", productName.length); //! 12
console.log("productName.length - 5 = 12 - 5 =", productName.length - 5); //! 7
console.log("productName.slice(7):", productName.slice(7)); //! "droid"
console.log("-------------------------------------------------------");

//! практика 
//todo [3]
console.log(
    "%c [3] ",
    "color: yellow; background-color: #2274A5",
);
//? Спочатку зробити дві змінні: 
//? ПЕРШУ - <myFavoriteActor> або <myFavoriteActress> 
//? зі значенням = "Ім'я вашого улюбленного актора або актриси"
//? (імена можна взяти зі "Списка акторів та актрис", він є нижче)
//? наприклад, "Russell Ira Crowe" або "Juliette Binoche"
//? та ДРУГУ - <male> або <female> зі значенням = "my favorite actor's name" 
//? або "my favorite actress's name".
//? За доромогою властивості або метода рядка 
//? отримати ОСТАННІЙ символ(в обох прикладах це - "e") 
//? змінної <myFavoriteActor> або <myFavoriteActress>
//? та записати це значення у ТРЕТЮ змінну <lastCharacter>.
//? Зробити перетворення значення змінної <lastCharacter> 
//? на ВЕЛИКУ(заглавну літеру) - "E" (буде в обох прикладах).
//? Вивести в консоль повідомлення, використовуючи 
//? значення ВСІХ ТРОЬХ змінних у такому форматі:
//? "The last letter in my favorite actor's name Russell Ira Crowe is "E"!" 
//? або:
//? "The last letter in my favorite actress's name Juliette Binoche is "E"!".
//* Список акторів та актрис:
// William Bradley Pitt 
// Philip Anthony Hopkins
// Juliette Binoche
// Angelina Jolie
// Russell Ira Crowe
// Marilyn Monroe
// Sean Justin Penn
// Robin Gayle Wright
// Thomas Sean Connery
// Kristin Ann Scott Thomas
// Hedy Lamarr
// Uma Karuna Thurman
//! Код виконаного завдання
const myFavoriteActor = "William Bradley Pitt";
const male = "my favorite actor's name"
const lastCharacter = myFavoriteActor.slice(-1).toUpperCase();
console.log(`The last letter in ${male} ${myFavoriteActor} is "${lastCharacter}" `)
// lesson6 
//todo ❗️❗️❗️ 6 хибних (falsy) значень, які приводять
//todo     до false в логічному перетворенні:
//!  0, null, NaN, порожній рядок: "" (або ''), false, undefined
console.log("Boolean(0):", Boolean(0)); //! false
console.log("Boolean(null):", Boolean(null)); //! false
console.log("Boolean(NaN):", Boolean(NaN)); //! false 
console.log('Boolean(""):', Boolean("")); //! false
console.log("Boolean(false):", Boolean(false)); //! false
console.log("Boolean(undefined):", Boolean(undefined)); false//! false
console.log("---------------------------");
console.log('Boolean("   "):', Boolean("   ")); //! true
console.log('Boolean("123"):', Boolean("123")); //! true
console.log('Boolean(123):', Boolean(123)); //! true
console.log('Boolean(-123):', Boolean(-123)); //! true
console.log("Boolean(true):", Boolean(true)); //! true
console.log("Boolean('false'):", Boolean("false")); //! true 

//! 2-1.Логічне «І» (оператор &&)
console.log(
    "%c 2-1.Логічне «І» (оператор &&) ",
    "color: yellow; background-color: #2274A5",
);
//todo: вираз && вираз
//? ❗️❗️❗️ Запинається на БРЕХНІ.
//* Повертає ТЕ на чому запнулось або останній операнд.
//? Оператор && приводить всі операнди до булю і повертає одне зі значень.
//? Щоб оператор && повернув true, потрібно щоб 
//? всі операнди були істинними (truthy)
console.log("false && false:", false && false); //! false
console.log("false && true:", false && true); //! false
console.log("true && false:", true && false); //! false
console.log("true && true:", true && true); //! true
console.log("----------------------------");

//? Приклади:
console.log('1 && 4:', 1 && 4); //! 4
console.log('1 && 4 && 0:', 1 && 4 && 0); //! 0
console.log('1 && 4 && "mango":', 1 && 4 && "mango"); //! mango
console.log('1 && 4 && 0 && "mango":', 1 && 4 && 0 && "mango"); //! 0
console.log('1 && 4 && "":', 1 && 4 && ""); //! пустий рядок 
console.log('1 && "" && 4:', 1 && "" && 4); //! також пустий рядок
console.log("----------------------------");

let num = 20;
const result1 = num > 10 && num < 30;
true && true;
console.log("num > 10 && num < 30:", result1);  //!true
const result2 = num > 10 && num < 10
true && false;
console.log("num > 10 && num < 10:", result2);  //!false


//! 2-2.Логічне «АБО» (оператор ||)
console.log(
    "%c 2-2.Логічне «АБО» (оператор ||) ",
    "color: yellow; background-color: #2274A5",
);
//todo: вираз || вираз
//? ❗️❗️❗️ Запинається на ПРАВДІ.
//* Повертає TE на чому запнулось або останній операнд.
//? Оператор || приводить всі операнди до булю і повертає одне зі значень.
//? Щоб оператор || повернув true, достатньо щоб 
//? хоч би один операнд був істинним (truthy)
console.log("false || false:", false || false); //! false
console.log("false || true:", false || true); //! true
console.log("true || false:", true || false); //! true
console.log("true || true:", true || true); //! true
console.log("----------------------------");

//? Приклади:
console.log('1 || 4:', 1 || 4); //! 1
console.log('1 || 4 || 0:', 1 || 4 || 0); //! 1
console.log('1 || 4 || "mango":', 1 || 4 || "mango"); //! 1
console.log('1 || 4 || 0 || "mango":', 1 || 4 || 0 || "mango"); //! 1
console.log('1 || 4 || "":', 1 || 4 || ""); //! 1 
console.log('1 || "" || 4:', 1 || "" || 4); //! 1
console.log('"" || 1 || 4:', "" || 1 || 4); //! 1
console.log('false || 0 || "":', false || 0 || ""); //! пустий рядок
console.log("----------------------------");

num = 20;
const result3 = num > 10 || num < 30;
true || false //! true  
console.log("num > 10 || num < 30:", result3); //! true

const result4 = num > 10 || num < 10;
true || true //! true
console.log("num > 10 || num < 10:", result4); //! true

//! 2-3.Логічне «НЕ» (оператор !)
console.log(
    "%c 2-3.Логічне «НЕ» (оператор !) ",
    "color: yellow; background-color: #2274A5",
);
//todo: !вираз
//? ❗️❗️❗️ Робить інверсію:
//? правда => брехня, брехня => правда
//* Повертає true або false
//? призводить операнд до булю, якщо необхідно,
//? а потім замінює його на протилежний.
console.log("!false:", !false); //! true
console.log("!true:", !true); //! false

//? Подвійна інверсія - повернення до початкового стану:
console.log("!!false:", !!false); //! false
console.log("!!true:", !!true); //! true 
console.log("----------------------------");

//? Приклади:
console.log("!1:", !1); //! false
console.log("!0:", !0); //! true
console.log("----------------------------");
console.log(!0); //! true
console.log('!(1 || 4):', !(1 || 4)); //! false
console.log('!(1 || 4 || 0):', !(1 || 4 || 0)); //! false
console.log('!(1 || 4 || "mango"):', !(1 || 4 || "mango")); //! false
console.log('!(1 || 4 || 0 || "mango"):', !(1 || 4 || 0 || "mango")); //! false
console.log('!(1 && 4 || 0 || "mango"):', !(1 && 4 || 0 || "mango")); //! false
console.log('!(1 || 4 || ""):', !(1 || 4 || "")); //! false
console.log('!(1 || "" || 4):', !(1 || "" || 4)); //! false
console.log('!("" || 1 || 4)', !("" || 1 || 4)); //! false
console.log('!(false || 0 || ""):', !(false || 0 || "")); //! true
console.log("-------------------------------");




num = 20;
const result5 = num > 10 || num < 30;
console.log("!(num > 10 || num < 30):", !result5); //! false

const result6 = num > 10 || num < 10;
console.log("!(num > 10 || num < 10):", !result6); //! false

//? Подвійна інверсія:
const result7 = !(num > 10 || num < 10);
console.log("!!(num > 10 || num < 10):", !result7); //! true
console.log("-------------------------------");

//! 2-4.Порядок обчислення
console.log(
    "%c 2-4.Порядок обчислення ",
    "color: yellow; background-color: #2274A5",
);
//? При виконанні логічних операцій,
//? правий операнд може не обчислюватися.
//todo:  false && (цей операнд не обчислюється)
//todo:  true || (цей операнд не обчислюється)
console.log("false && (цей операнд не обчислюється)");
console.log("true || (цей операнд не обчислюється)");
console.log("---------------------------------------");

//! УВАГА!
//! Приклад обчислення послідовності операторів && та || 
//todo: Послідовність виконання визначається пріоритетами:
//todo: спочатку обчислюється &&, потім ||
console.warn("Приклад обчислення послідовності операторів && та ||");
console.log('1 && 4 || 0 && "mango":', 1 && 4 || 0 && "mango"); //! 4
console.log('Крок_1 -> (1 && 4):', 1 && 4); //! 4
console.log('Крок_2 -> (0 && "mango"):', 0 && "mango"); //! 0
console.log('Крок_3 -> (4 || 0):', 4 || 0); //! 4
console.log(". . . . . . . . . . . . . . . . . . . .");

console.log('1 && "mango" || 1 && undefined:', 1 && "mango" || 1 && undefined); //! "mango"
console.log('0 && 1 || 1 && "mango":', 0 && 1 || 1 && "mango"); //! "mango"
console.log("---------------------------------------");
//! lesson 7
// let condition1 = true;
let condition1 = false;
if (condition1) {
    // тіло if
    console.log("тіло if");
};
console.log("_____________________________");

//? ПРИКЛАДИ:
//? Якщо умова приводиться до true,
//? то виконується код у фігурних дужках тіла if.
let cost11 = 0;
const subscription11 = "pro";

if (subscription11 === "pro") {
    cost11 = 100;
}

console.log("cost11:", cost11); //! 100

//? Якщо умова приводиться до false,
//? код у фігурних дужках буде пропущений.
let cost12 = 0;
const subscription12 = "free";

if (subscription12 === "pro") {
    cost12 = 100;
}

console.log("cost12:", cost12); //! 0
console.log("-----------------------------");

//! 3-2.Інструкція: «if...else»
console.log(
    "%c 3-2.Інструкція: «if...else» ",
    "color: yellow; background-color: #2274A5",
);
console.warn("https://ruslan379.github.io/course-fe-html-css/lesson-FE3_04/images/02_instructions-if...else.jpg");
//? Розширює синтаксис if таким чином,
//? що якщо умова приводиться до false, виконається код у
//? фігурних дужках після оператора else.
let condition2 = true;
// let condition2 = false;
if (condition2) {
    // тіло if
    console.log("тіло if");
} else {
    // тіло else
    console.log("тіло else");
}
console.log("_____________________________");

//? ПРИКЛАДИ:
//? Якщо умова приводиться до true,
//? тіло блока else ігнорується.
let cost21;
const subscription21 = "pro";

if (subscription21 === "pro") {
    cost21 = 100;
} else {
    cost21 = 0;
}

console.log("cost21:", cost21); //! 100


//? Якщо умова приводиться до false,
//? тіло блока if ігнорується.
let cost22;
const subscription22 = "free";

if (subscription22 === "pro") {
    cost22 = 100;
} else {
    cost22 = 0;
}

console.log("cost22:", cost22); //! 0




//! 3-3.Інструкція: «else...if»
console.log(
    "%c 3-3.Інструкція: «else...if» ",
    "color: yellow; background-color: #2274A5",
);
console.warn("https://ruslan379.github.io/course-fe-html-css/lesson-FE3_04/images/03_instructions-else...if.jpg");
//? Конструкція if...else може перевірити і зреагувати
//? на виконання або невиконання лише однієї умови.
//? Блок else...if дозволяє додати після else
//? ще один оператор if з умовою.
//? В кінці ланцюжка може бути класичний блок else,
//? який виконається лише у тому випадку,
//? якщо жодна умова не приведеться до true.
// let condition31 = true;
let condition31 = false;

// let condition32 = true;
let condition32 = false;

// let condition33 = true;
let condition33 = false;

if (condition31) {
    // тіло if-1
    console.log("тіло if-1");
} else if (condition32) {
    // тіло else if-2
    console.log("тіло else if-2");
} else if (condition33) {
    // тіло else if-3
    console.log("тіло else if-3");
}
console.log("_____________________________");



//? ПРИКЛАД:
//? При першому true перевірки припиняться і виконається 
//? лише один сценарій, який відповідає цьому true.
//? Тому, такий запис варто читати як: 
//? шукаю перший збіг умови, ігнорую все інше.
let cost3;
console.log(cost3)
const subscription3 = "free";
// const subscription3 = "pro";
// const subscription3 = "premium";
// const subscription3 = "personal";

if (subscription3 === "free") {
    cost3 = 0;
} else if (subscription3 === "pro") {
    cost3 = 100;
} else if (subscription3 === "premium") {
    cost3 = 500;
} else {
    console.log("Invalid subscription type");
}

console.log("cost3:", cost3); //! 500


//! 4.Тернарний оператор
//todo:  Тернарний оператор повинен використовуватися
//todo:  в простих операціях привласнення або повернення.
//todo:  Його використання для опису складних розгалужень
//todo:  - це погана практика(антипатерн).
//? Тернарний оператор використовується у якості
//? синтаксично коротшої заміни інструкції if...else,
//? коли одній і тій самій змінній необхідно присвоїти
//? різні значення за умовою.
//todo:  (умова) ? <вираз_якщо_умова_правдива(true)> : <вираз_якщо_умова_хибна(false)>

//? ПРИКЛАД-1 (if...else):
console.log(
    "%c ПРИКЛАД-1 (if...else): ",
    "color: yellow; background-color: #2274A5",
);
let type1;
const age1 = 20;

if (age1 >= 18) {
    type1 = "adult";
    console.log(type1)
} else {
    type1 = "child";
    console.log(type1)
}

console.log('type1:', type1);  //! "adult"
console.log("---------------------------------");



//? ПРИКЛАД-2 (тернарний оператор):
console.log(
    "%c ПРИКЛАД-2 (тернарний оператор): ",
    "color: yellow; background-color: #2274A5",
);
const age2 = 20;
const type2 = age2 >= 18 ? "adult" : "child";
console.log('type2:', type2);  //! "adult"
console.log("---------------------------------");




//! ПРАКТИКА-4 (Урок-04_JS)
//! Творчі завдання після логічних операторів
//todo [1]
console.log(
    "%c [1] ",
    "color: yellow; background-color: #2274A5",
);
//? Hапиши скрипт входження числа <number>
//?  у відрізок зазначений ВІД <х1> і ДО <х2>
//? та виведи в консоль ЧОТИРИ варіанти
//? знаходження числа <number>:
//? - ДО <х1>
//? - ПІСЛЯ <х2>
//? - ВІД <х1> ДО <х2>
//? - ДО <х1> або ПІСЛЯ <х2>
const x1 = 10;
const x2 = 30;
const number = 15;

//todo: var.1
console.log(`Число ${number} входить у відрізок ДО ${x1} `, x1 > number);
console.log(`Число  ${number} входить у відрізок ПІСЛЯ ${x2}? `, x2 < number);
console.log(`Число  ${number} входить у відрізок ВІД ${x1} ДО  ${x2}? `, number >= x1 && number <= x2);
console.log(`Число  ${number} входить у відрізок ДО ${x1} або ПІСЛЯ  ${x2}? `, number < x1 || number > x2);
console.log("------------------------------------------------------");

//todo: var.2
if ("умова") {
    console.log(`Число <number> ...`);
} else if ("умова") {
    console.log(`Число <number> ...`);
} else if ("умова") {
    console.log(`Число <number> ...`);
} else {
    console.log(`Число <number> НІКУДИ не входить!`);
}
//!lesson 10 
//! 1.Інструкція switch
// const valueOriginal = 50;
// const valueOriginal = 100;
// const valueOriginal = 200;
const valueOriginal = 400;

const valueToCompare1 = 50;
const valueToCompare2 = 100;
const valueToCompare3 = 200;

console.log("valueOriginal:", valueOriginal);
console.log(". . . . . . . . . . .");
console.log("valueToCompare1:", valueToCompare1);
console.log("valueToCompare2:", valueToCompare2);
console.log("valueToCompare3:", valueToCompare3);

switch (valueOriginal) {
    case valueToCompare1:
        console.log("Спрацював код ПЕРШОГО блока"); //! інструкції ПЕРШОГО блока;
        break;

    case valueToCompare2:
        console.log("Спрацював код ДРУГОГО блока"); //! інструкції ДРУГОГО блока;
        break;

    case valueToCompare3:
        console.log("Спрацював код ТРЕТЬОГО блока"); //! інструкції ТРЕТЬОГО блока;
        break;

    default:
        console.warn("НЕ спрацював ЖОДЕН блок!"); //! інструкції default блока;
};
console.log("----------------------------");

//? Приклад:
let cost;
// const subscription = "free";
// const subscription = "pro";
// const subscription = "premium";
const subscription = "personal";

switch (subscription) {
    case "free":
        cost = 0;
        break;

    case "pro":
        cost = 100;
        break;

    case "premium":
        cost = 500;
        break;

    default:
        console.log("Invalid subscription type");
}
console.log("cost:", cost); //! 100

console.warn("https://ruslan379.github.io/course-fe-html-css/lesson-FE3_05/images/variable-scope.jpg");



const global = "global";

if (true) {
    const blockA = "block-A";
    // const global = "global-A";
    //todo: Бачимо глобальну + локальну A
    console.log("Block scope A:", global); //! global 
    console.log("Block scope A:", blockA); //! block-A

    //todo: Змінні blockB і blockC не знайдені в доступних областях видимості.
    //todo: Буде помилка звернення до змінної.
    // console.log(blockB); //! ? error
    // console.log(blockC); //! ? error
    console.log("-----------------------");

    if (true) {
        const blockB = "block-B";

        //todo: Бачимо глобальну + зовнішню A + локальну B
        console.log("Block scope B:", global); //! global 
        console.log("Block scope B:", blockA); //! ? block-A
        console.log("Block scope B:", blockB); //! ?block-B

        //todo: Змінна blockC не знайдена в доступних областях видимості.
        //todo: Буде помилка звернення до змінної.
        // console.log(blockC); //! error
        console.log("-----------------------");
    }
}

if (true) {
    const blockC = "block-C";

    //todo: Бачимо глобальну + локальну C
    console.log("Block scope C:", global); //! global 
    console.log("Block scope C:", blockC); //! block-C

    //todo: Змінні blockA і blockB не знайдені в доступних областях видимості.
    //todo: Буде помилка звернення до змінної.
    // console.log(blockA); error
    // console.log(blockB); error
    console.log("-----------------------");
}

//todo: Бачимо лише глобальну
console.log("Block scope GLOBAL:", global); //! global

//todo: Змінні blockA, blockB і blockC не знайдені в доступних областях видимості.
//todo: Буде помилка звернення до змінної.
// console.log("Block scope GLOBAL:", blockA); //! error
// console.log("Block scope GLOBAL:", blockB); //! error
// console.log("Block scope GLOBAL:", blockC); //! error
console.log("-----------------------");
//!lesson11
//! Що таке ЦИКЛ?
//? ЦИКЛ - керуюча конструкція, призначена для організації
//? багаторазового виконання набору інструкцій.

//? ТІЛО ЦИКЛУ - послідовність інструкцій,
//? призначена для багаторазового виконання.

//? ІТЕРАЦІЯ - одноразове виконання тіла циклу.

//? УМОВА ВИХОДУ - вираз, що визначає, чи буде
//? в черговий раз виконуватися ітерація,
//? або цикл завершиться.

//? ЛІЧИЛЬНИК - змінна, що зберігає поточний номер ітерації.
//? Цикл не обов'язково містить ЛІЧИЛЬНИК,
//? і він не повинен бути один, умова виходу з циклу може
//? залежати від декількох змінних, що змінюються в циклі.






//! 1.Цикл while - цикл з передумовою
console.warn("https://ruslan379.github.io/course-fe-html-css/lesson-FE3_06/images/while.png");
//? — цикл, який виконується, доки правдива якась умова,
//? зазначена ДО його початку.
//? Ця умова перевіряється ДО виконання тіла циклу,
//? тому тіло може не виконатися жодного разу, 
//? якщо умова від самого початку - хибна.
// let counter = 3;
let counter = 4; //? після перевірки умови(хибна) - цикл НЕ виконається

while (counter < 4) {
    console.log("ТІЛО ЦИКЛУ --> counter(ДО):", counter);
    // counter += 1;
    counter = counter + 1;
    console.log("ТІЛО ЦИКЛУ --> counter(ПІСЛЯ):", counter);
};

console.log("____ ПОЗА ЦИКЛУ --> counter:", counter);
console.log("-----------------------------------------");



//? ПРИКЛАД:
let clientCounter = 26;
// clientCounter = 30; //? після перевірки умови(хибна) - цикл НЕ виконається
const maxClients = 26;

while (clientCounter < maxClients) {
    console.log("ТІЛО ЦИКЛУ --> clientCounter(ДО):", clientCounter);
    clientCounter += 1;
    console.log("ТІЛО ЦИКЛУ --> clientCounter(ПІСЛЯ):", clientCounter);
};
console.log("____ ПОЗА ЦИКЛУ --> clientCounter:", clientCounter);
console.log("-----------------------------------------");




//! 2.Цикл do...while - цикл з постумовою
console.warn("https://ruslan379.github.io/course-fe-html-css/lesson-FE3_06/images/do-while.png");
//? - цикл, в якому умова перевіряється ПІСЛЯ виконання тіла циклу.
//? З цього випливає, що тіло завжди виконується хоча б один раз.
let counter2 = 4;
// counter = 4; //? після перевірки умови(хибна) - цикл виконається ОДИН раз

do {
    console.log("ТІЛО ЦИКЛУ --> counter(ДО):", counter2);
    counter2 += 1;
    console.log("ТІЛО ЦИКЛУ --> counter(ПІСЛЯ):", counter2);
} while (counter2 < 4);

console.log("____ ПОЗА ЦИКЛУ --> counter:", counter2);
console.log("-----------------------------------------");


//? ПРИКЛАД:
// let password = "";

// do {
//     password = prompt("Введіть пароль довший 4-х символів");
// } while (password.length < 5);

// console.log("Ви ввели пароль: ", password);


//! 3.Цикл for - цикл з лічильником
//? - цикл, в якому певна змінна змінює своє значення
//? із заданого початкового до кінцевого значення
//? з деяким кроком, і для кожного значення цієї змінної
//? тіло циклу виконується один раз.
let initialization;
let condition;
let postExpression;

for (initialization; condition; postExpression) {
    // statements
}

//? Алгоритм виконання циклу for:

//? Ініціалізація(initialization) - виконується один раз до початку циклу.
//? Використовується для створення змінної - лічильника
//? і зазначення її початкового значення.

//? Умова(condition) - вираз, що оцінюється
//? перед кожною ітерацією(повторенням) циклу.
//? Тіло циклу виконується тільки тоді,
//? коли вираз приводиться до true.
//? Цикл завершується, якщо значення буде false.

//? Тіло(statements) - набір інструкцій для виконання на кожному повторенні.
//? Виконується, якщо вираз умови приводиться до true.

//? Пост - вираз(post - expression) - виконується в кінці
//? кожного повторення циклу, до перевірки умови.
//? Використовується для оновлення змінної - лічильника.

//? ПРИКЛАД-1:
for (let i = 0; i <= 20; i += 5) {
    console.log("Лічильник, i:", i);
};
console.log("-----------------");

//? ПРИКЛАД-2:
const target = 3;
let sum = 0;

for (let i = 0; i <= target; i = i + 1) {
    sum += i;
    console.log("Тіло for, i =", i);
    console.log("Тіло for, sum =", sum);
    console.log(". . . . . . . . .");
};

console.log("sum:", sum);
console.log("------------------");

//? ПРИКЛАД-3:
const max = 10;
for (let i = 0; i < max; i += 1) {
    console.log("i =", i);
    console.log(`${max} % ${i} = `, max % i);
};
console.log("-----------------");


//! 4.Інструкції break і continue

//! Оператор break
//? Перервати виконання циклу можна в будь-який момент. 
//? Для цього існує оператор break, 
//? який повністю припиняє виконання циклу 
//? і передає управління на рядок після його тіла.
for (let i = 0; i <= 5; i += 1) {
    console.log("i:", i);

    if (i === 3) {
        console.log("Знайшли число 3, перериваємо виконання циклу");
        break;
    }
};

console.log("Лог після циклу");
console.log("------------------");



//! Оператор continue
//? Перериває не увесь цикл, а тільки
//? виконання поточної ітерації.
//? Його використовують, якщо зрозуміло,
//? що на поточній ітерації циклу більше
//? немає що робити або взагалі не потрібно нічого робити,
//? і час переходити до наступної ітерації.
const number10 = 10;

for (let i = 0; i < number10; i += 1) {
    console.log("for --> i:", i);
    if (i % 2 === 0) {
        // console.log("if --> i:", i);
        continue;
    };

    console.log("парне i: ", i); // 1, 3, 5, 7, 9
    console.log(". . . . . . .");
};
//todo [1]
console.log(
    "%c [1] ",
    "color: yellow; background-color: #2274A5",
);

//? Вивести на екран всі числа від 1 до 10 за допомогою циклу while.
let start = 1;
const finish = 10;
while (start <= finish) {
    console.log("Результат:", start)
    start += 1;
}

//todo [2]
console.log(
    "%c [2] ",
    "color: yellow; background-color: #2274A5",
);
//? Вивести на екран всі парні числа від 2 до 20
//? за допомогою циклу for.
//? Якщо число не парне, пропустити його за допомогою continue.
const min2 = 2;
const max20 = 20;
for (let i = min2; i <= max20; i += 1) {
    if (i % 2 !== 0) {
        continue;
    }
    console.log("парне число:", i);
};
//todo [3]
console.log(
    "%c [3] ",
    "color: yellow; background-color: #2274A5",
);
//? Вивести на екран таблицю множення числа 7 за допомогою циклу for.
const number7 = 7;
for(let i = 1; i <= 10; i +=1 ){
    console.log(`${number7} * ${i} = ${number7 * i}`)
}
//todo [4]
console.log(
    "%c [4] ",
    "color: yellow; background-color: #2274A5",
);
//? Створити масив з числами від 1 до 5.
//? Вивести на екран кожен елемент масиву
//? за допомогою циклу while.

//todo [5]
console.log(
    "%c [5] ",
    "color: yellow; background-color: #2274A5",
);
//? Створити масив із числами від 1 до 10. 
//? За допомогою циклу for пройтися по масиву 
//? та вивести на екран всі числа, крім числа 7. 
//? Якщо зустрінете число 7, 
//? закінчити виконання циклу за допомогою оператора break.

console.log("---------------------------------------------");


//todo [6]
console.log(
    "%c [6] ",
    "color: yellow; background-color: #2274A5",
);
//? Створити скрипт, який виводить на екран всі числа, які менші за n.
//? Якщо зустрічається число, що більше або дорівнює n,
//? цикл повинен бути закінчений за допомогою break.
const n = 10;
for (let i = 0; i <= 20; i +=1){
    if(i >= n){
        break;
    };
    console.log(i)
}
// let t = 0;
// while (true) {
//     if(t >= n){
//         break;
//     };
//     console.log(t);
//     t += 1;
// }
//todo [7]
//todo [7]
console.log(
    "%c [7] ",
    "color: yellow; background-color: #2274A5",
);
//? За допомогою циклу while вивести на екран
//? всі числа від 1 до 20, крім чисел, кратних 3.
//? Якщо зустрінете число, кратне 3, цикл повинен
//? продовжити виконання за допомогою оператора continue.
let first = 1;
const last = 20; 
while (first <= last){
    if(first % 3 === 0){
        first += 1; 
        continue;
    };
    console.log(first);
    first += 1; 
}