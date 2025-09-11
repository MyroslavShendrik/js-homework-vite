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

const text7= "[UTF-16] Символ \"копірайт\": \u00A9";
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
console.log("'4' + 2 + 1:",  '4' + (2 + 1)); //! "43"
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
console.log("emptyString === emptyString2 :", emptyString === emptyString2 )

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
console.log("productName.slice(-1):", productName.slice-(1)); //! "d"

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
  const myFavoriteActor ="William Bradley Pitt"; 
  const male = "my favorite actor's name"
  const lastCharacter = myFavoriteActor.slice(-1).toUpperCase();
  console.log(`The last letter in ${male} ${myFavoriteActor} is "${lastCharacter}" `)