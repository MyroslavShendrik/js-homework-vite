//! Поняття функції
console.warn("Поняття функції: \n https://ruslan379.github.io/course-fe-html-css/lesson-FE3_09/images/function.png");
//? Функція - це підпрограма, незалежна частина коду,
//? призначена для багаторазового виконання конкретної задачі
//? з різними початковими значеннями.
//? Функції дозволяють структурувати великі програми,
//? зменшують повторення та ізолюють код.
//? Функцію можна уявити у вигляді чорного ящика:
//? вона отримує щось на вході(дані) і повертає щось
//? на виході(результат виконання коду всередині неї).



//! Функціональний вираз (function expression)
console.warn("Функціональний вираз (function expression):");
//? Функціональний вираз(function expression) —
//? звичайне оголошення змінної, значення якої буде функція.
//? Має таку структуру:
//? - ключове слово const,
//? - ім'я функції — це дієслово,
//?   що відповідає на питання "Що зробити?"
//? - ключове слово function,
//? - пара круглих дужок(), в яких можуть бути параметри,
//? - тіло функції у фігурних дужках { }.
let a = 5;
const add = function () {
    console.log("Це функція 'add'");
    a = a * 2;
};
console.log("typeof add:", typeof add); //! function
console.log("add:", add); //! ƒ() { console.log("Це функція 'add'"); }
console.log("--------------------------------------------------------------------------");

//! Виклик функції
console.warn("Виклик функції:");
//? Функція викликається за допомогою
//? імені та круглих дужок,
//? всередині яких можуть бути передані аргументи.
add(); //todo: ▶️,❎ Викликає функцію, але ігнорує її результат.
// let  coffe = add()
// console.log("coffe:", coffe);
// console.log(add()); //todo: ▶️,✅ Викликає функцію та виводить її результат (undefined).

console.log("a:", a);
// const resultA = add(); //todo: ▶️, ✅➡️🅰️ Викликає функцію, а її результат записує у змінну <resultA>.
// console.log("resultA:", resultA); //todo: 🅰️➡️✅ Bиводить результат роботи функції (undefined) із змінної <resultA>.
console.log("--------------------------------------------------------------------------");

//! Приклад створення та результат дії функції
console.warn("Приклад створення та результат дії функції:");
const makingСoffee1 = function () {
    console.log("Змолов каву");
    console.log("Нагрів воду");
    console.log("Роблю каву");
    return "Кава";
};
makingСoffee1(); //todo: ▶️,❎ Викликає функцію, але ігнорує її результат.
console.log("`  `  `  `  `");

console.log(makingСoffee1()); //todo: ▶️,✅ Викликає функцію та виводить її результат ("Кава").
console.log("--------------------------------------------------------------------------");

//! Параметри та аргументи. 
console.warn("Параметри та аргументи:");
//? В круглих дужках після імені функції зазначаються ПАРАМЕТРИ
//? - перелік даних, які функція очікує на момент виклику.
//? При виклику функції за допомогою імені та круглих дужок,
//? всередині цих дужок можуть бути передані АРГУМЕНТИ.
const add2 = function (a, b, c) {
    console.log("Це функція 'add2'");
    // const sum = a + b + c;
    // console.log("sum:", sum);
    // return sum;
    return a + b + c;
};

// add2(1, 2, 3);
// add2(10, 20, 30);
console.log("Виклик функції add2(1, 2, 3):", add2(1, 2, 3));
// const result2 = add2(1, 2, 3);
// console.log("result2:", result2);
console.log("--------------------------------------------------------------------------");

//! Приклад створення та результат дії функції з параметрами та аргументами
console.warn("Приклад створення та результат дії функції з параметрами та аргументами:");
const makingСoffee2 = function (groundCoffee, water) {
    console.log("Змолов каву:", groundCoffee);
    console.log("Нагрів воду:", water);
    console.log("Роблю каву...");
    const coffee = groundCoffee + water;
    return coffee;
};
// makingСoffee2("7 грам", "30 мілілітрів"); //todo: ▶️,❎ Викликає функцію, але ігнорує її результат.
console.log("`  `  `  `  `");

console.log(makingСoffee2("7 грам", " 30 мілілітрів")); //todo: ▶️,✅ Викликає функцію та виводить її результат ("Кава").
console.log("--------------------------------------------------------------------------");

const makingOmelet = function (eggs, milk, salt) {
    console.log("Розбиваю яйця:", eggs);
    console.log("Додаю молоко:", milk);
    console.log("Додаю сіль:", salt);
    console.log("Збиваю вск");
    console.log("Смажу омлет...");
    // const omelet = eggs + milk + salt;
    // return omelet;
    return eggs + " " + milk + " " + salt;
}
console.log(makingOmelet(3, "50мл", "10грам"));

// console.log(omelet); //! error

//! Параметри за замовчуванням. 
console.warn("Параметри за замовчуванням:");
//? Іноді необхідно оголосити функцію,
//? у параметрів якої будуть значення,
//? відмінні від undefined,
//? навіть якщо для них не передали аргументи. 
// add3(1, 2, 3);
const add3 = function (a = 10, b = 20, c = 30) {
    console.log("Це функція 'add3'");
    const sum = a + b + c;
    console.log("sum:", sum);
    return sum;
};

add3(1, 2, 3);
console.log("Виклик функції add3(1, 2, 3):", add3(1, 2, 3));
const result31 = add3(1, 2, 3);
console.log("result31:", result31);
console.log(". . . . . . . . . . . . . . . . . . . .");

add3();
console.log("Виклик функції add3():", add3());
const result32 = add3();
console.log("result32:", result32);
console.log("Виклик функції add3():", add3(1));
console.log("--------------------------------------------------------------------------");
// console.log(el)
// const el = 36;
// console.log(el)

//! Порядок виконання коду
console.warn("Порядок виконання коду:");
//? Коли інтерпретатор зустрічає виклик функції (або методу),
//? він призупиняє виконання поточного коду
//? і починає виконувати код з тіла функції.
//? Після того як увесь код функції буде виконаний,
//? інтерпретатор виходить з тіла функції,
//? повертаючись у те місце, звідки прийшов,
//? і продовжує виконувати код, наступний після виклику функції.
//todo: Приклад-1
console.warn("Приклад-1:");
const multiply = function (x, y, z) {
    console.log(`Результат множення дорівнює ${x * y * z}`);
};

console.log("Лог ДО виклику функції multiply");
multiply(2, 3, 5); //! Результат множення дорівнює 30
console.log(multiply(2, 3, 5)); //! //! Результат множення дорівнює 30 та undefined
console.log("Лог ПІСЛЯ виклику функції multiply");

//todo-1: Послідовність логів в консолі:
//! 'Лог ДО виклику функції multiply'
//! 'Результат множення дорівнює 30'
//! 'Результат множення дорівнює 30'
//!  undefined
//! 'Лог ПІСЛЯ виклику функції multiply'
// console.log("----------------------------------------------------");
console.log(". . . . . . . . . . . . . . . . . . . . . . . .  . .");


//todo: Приклад-2
console.warn("Приклад-2:");
const fnA = function () {
    console.log('Почала виконуватися [fnA]');
    fnB();
    console.log('Продовжила виконуватися [fnA] після виходу з [fnB]');
};

const fnB = function () {
    console.log('Виконується [fnB]');
};

console.log('Почав виконання [main]');
fnA();
console.log('Продовжив виконуватися [main] після виходу з [fnA]');

//todo-2: Послідовність логів в консолі:
//! 'Почав виконання [main]'
//! 'Почала виконуватися [fnA]'
//! 'Виконується [fnB]'
//! 'Продовжила виконуватися [fnA] після виходу з [fnB]'
//! 'Продовжив виконуватися [main] після виходу з [fnA]'
console.log("----------------------------------------------------");


//! Стек викликів
console.warn("Стек викликів: \n https://ruslan379.github.io/course-fe-html-css/lesson-FE3_09/images/call-stack.png");
//? Стек викликів (call stack)
//? - це механізм для відстеження
//? поточного місцезнаходження інтерпретатора в коді,
//? який викликає декілька функцій.
//? Яка із функцій виконується на цей момент,
//? які функції викликаються всередині функції,
//? що виконується,
//? яка функція буде викликана наступною тощо.
const bar = function () {
    console.log("bar");
};

const baz = function () {
    console.log("baz");
};

const foo = function () {
    console.log("foo");
    bar();
    baz();
};

foo();
console.log("----------------------------------------------------");


//! Приклад створення та результат дії функції з параметрами та аргументами
console.warn("Приклад створення та результат дії функції з параметрами та аргументами:");
// let groundCoffee1 = "8грам";
// let hotWater;
// let coffee;
const makingСoffee3 = function (groundCoffee, hotWater) {
    console.log("Змолов каву:", groundCoffee);
    console.log("Нагрів воду:", hotWater);
    console.log("Роблю каву...");
    const coffee = groundCoffee + hotWater;
    return coffee;
};
makingСoffee3("7 грам", "30 мілілітрів"); //todo: ▶️,❎ Викликає функцію, але ігнорує її результат.
console.log("`  `  `  `  `");

console.log(makingСoffee3("7 грам", " 30 мілілітрів")); //todo: ▶️,✅ Викликає функцію та виводить її результат ("Кава").
console.log("--------------------------------------------------------------------------");
const makingСoffee4 = function (g, h) {
    groundCoffee(g)
    hotWater(h)
    console.log("Роблю каву...");
    const coffee = g + h;
    return coffee;
}
const groundCoffee = function (x) {
    // x = g, але g = 7грам, тому x = 7грам
    console.log("Змолов каву:", x);
}
const hotWater = function (y) {
    // y = h, але h = 30мілілітрів, тому y = 7грам
    console.log("Нагрів воду:", y);
}


console.log(makingСoffee4("7 грам", " 30 мілілітрів")); //todo: ▶️,✅ Викликає функцію та виводить її результат ("Кава").
console.log(
    '%c 3.Псевдомасив arguments​.     \n   Перетворення псевдомасиву. ',
    'color: white; background-color: #D33F49',
);

//! Псевдомасив arguments
console.warn("Псевдомасив arguments:");
//? Доступ до списку всіх аргументів можна отримати
//? за допомогою спеціальної змінної arguments,
//? яка доступна тільки всередині функції
//? і зберігає всі аргументи у якості псевдомасиву.
//? Псевдомасив arguments - колекція з властивістю length
//? і можливістю звернутися до елементу за індексом,
//? але відсутністю більшості методів для роботи з масивом.

const multiply1 = function () {
    let total = 1;
    for (const argument of arguments) {
        console.log("total:", total);
        console.log("argument:", argument);
        total *= argument;
        console.log("total * argument =", total);
        console.log(". . . . . . . . . . . . .");
    };
    return total;
};

console.log("return total --> multiply(1, 2, 3):", multiply(1, 2, 3)); //!  6
console.log("----------------------------------------------");
console.log("return total --> multiply(1, 2, 3, 4):", multiply(1, 2, 3, 4)); //!  24
console.log("----------------------------------------------");
console.log("return total --> multiply(1, 2, 3, 4, 5):", multiply(1, 2, 3, 4, 5)); //!  120
console.log("----------------------------------------------");
function func1(a, b, c){
    console.log(arguments);
    console.log(typeof arguments);
    console.log(arguments.length);
    console.log(arguments[0].toString())
}

func1(1,2,3);
//! Перетворення псевдомасиву
//? Зазвичай псевдомасив необхідно перетворити
//? у повноцінний масив, оскільки у псевдомасиву
//? відсутні методи масиву, наприклад slice() або includes().
//? На практиці застосовують декілька основних способів.
//! Array.from(arguments)
console.warn("Перетворення псевдомасиву методом Array.from(arguments):");
//? Використовуючи метод Array.from(),
//? можна створити масив із псевдомасиву.
const fnArray = function () {
    //todo: Змінна argsArray буде містити повноцінний масив
    const argsArray = Array.from(arguments);
    console.log("argsArray:", argsArray);   
    console.log(argsArray.push("2"))
    console.log(argsArray)
    // console.log(arguments.push("2"))
    return argsArray;
};
fnArray(10, 20, 30, 40, 50); //! [10, 20, 30, 40, 50]
console.log("return argsArray --> fnArray(10, 20, 30, 40, 50):", fnArray(10, 20, 30, 40, 50)); //! [10, 20, 30, 40, 50]
console.log("-------------------------------------------------------------------------------------------------------");
fnArray("Mango", "Ajax", "Poly", "Kiwi"); //! ['Mango', 'Ajax', 'Poly', 'Kiwi']
console.log('return argsArray --> fnArray("Mango", "Ajax", "Poly", "Kiwi"):', fnArray("Mango", "Ajax", "Poly", "Kiwi")); //! ['Mango', 'Ajax', 'Poly', 'Kiwi']
console.log("-------------------------------------------------------------------------------------------------------");
fnArray(true, false, null, undefined); //! [true, false, null, undefined]
console.log("return argsArray --> fnArray(true, false, null, undefined):", fnArray(true, false, null, undefined)); //! [true, false, null, undefined]
console.log("-------------------------------------------------------------------------------------------------------");


//! ...(rest)
console.warn("Перетворення псевдомасиву операцією ...(rest):");
//? Використовуючи операцію ... (rest), можна зібрати
//? будь-яку кількість елементів, у нашому випадку аргументів,
//? в масив, і зберегти його в змінну.
//? Збираємо всі аргументи, використовуючи операцію rest безпосередньо в підписі функції.
const fnRest = function (...a) {
    //todo: Змінна argsRest буде містити повноцінний масив
    console.log("argsRest:", a);
    return a;
};

fnRest(10, 20, 30, 40, 50); //! [10, 20, 30, 40, 50]
console.log("return argsRest --> fnRest(10, 20, 30, 40, 50):", fnRest(10, 20, 30, 40, 50)); //! [10, 20, 30, 40, 50]
console.log("-------------------------------------------------------------------------------------------------------");
fnRest("Mango", "Ajax", "Poly", "Kiwi"); //! ['Mango', 'Ajax', 'Poly', 'Kiwi']
console.log('return argsRest --> fnRest("Mango", "Ajax", "Poly", "Kiwi"):', fnRest("Mango", "Ajax", "Poly", "Kiwi")); //! ['Mango', 'Ajax', 'Poly', 'Kiwi']
console.log("-------------------------------------------------------------------------------------------------------");
fnRest(true, false, null, undefined); //! [true, false, null, undefined]
console.log("return argsRest --> fnRest(true, false, null, undefined):", fnRest(true, false, null, undefined)); //! [true, false, null, undefined]
console.log("-------------------------------------------------------------------------------------------------------");
//! 4.Патерн «Раннє повернення» (Guard Clause)
console.warn("Функція, яка обробляє зняття коштів за допомогою if...else:");
//? Створимо функцію, яка обробляє зняття коштів 
//? з особистого рахунку в банку. 
//? Вона отримує суму для зняття і поточний баланс рахунку,
//? після чого, залежно від умови, виконує необхідний блок коду.
const withdraw1 = function (amount, balance) {
    console.log("amount:", amount);
    console.log("balance:", balance);
    if (amount === 0) {
        console.log("0️⃣ Для проведення операції введіть суму більшу за нуль");
    } else if (amount > balance) {
        console.log("❌ Недостатньо коштів на рахунку");
    } else {
        console.log("✅ Операція зняття коштів проведена успішно");
    };
    console.log(". . . . . . . . . . . . . . . . . . . . . . . . . . . . .");
};

withdraw1(0, 300); //! "Для проведення операції введіть суму більшу за нуль"
// withdraw1(500, 300); //! "Недостатньо коштів на рахунку"
// withdraw1(100, 300); //! "Операція зняття коштів проведена успішно"
console.log("----------------------------------------------------------");


console.warn("Функція, яка обробляє зняття коштів \n  за допомогою патерну «Раннє повернення» :");
//todo: Патерн «Раннє повернення»
//? - це спосіб використовувати можливість
//? дострокового повернення з функції
//? за допомогою оператора return.
//? Використовуючи цей прийом, ми отримуємо чистіший,
//? плоскіший і зрозуміліший код, який простіше рефакторити.
const withdraw2 = function (amount, balance) {
    console.log("amount:", amount);
    console.log("balance:", balance);
    //todo:  Якщо умова виконується, викликається console.log
    //todo:  і вихід із функції. Код після тіла if не виконається.
    if (amount === 0) {
        console.log("0️⃣0️⃣ Для проведення операції введіть суму більшу за нуль");
        console.log(". . . . . . . . . . . . . . . . . . . . . . . . . . . . .");
        return;
    }; 
    //todo:  Якщо умова першого if не виконалась, його тіло пропускається
    //todo:  та інтерпретатор доходе до другого if.
    //todo:  Якщо умова виконується, викликається console.log і вихід із функції.
    //todo:  Код, що знаходиться після тіла if, не виконається.
    if (amount > balance) {
        console.log("❌❌ Недостатньо коштів на рахунку");
        console.log(". . . . . . . . . . . . . . . . . . . . . . . . . . . . .");
        return;
    };
    //todo:  Якщо жоден із попередніх if не виконався,
    //todo:  інтерпретатор доходить до цього коду і виконує його.
    console.log("✅✅ Операція зняття коштів проведена");
    console.log(". . . . . . . . . . . . . . . . . . . . . . . . . . . . .");
};

withdraw2(0, 300); //! "Для проведення операції введіть суму більшу за нуль"
withdraw2(500, 300); //! "Недостатньо коштів на рахунку"
withdraw2(100, 300); //! "Операція зняття коштів проведена"
console.log("----------------------------------------------------------");


//! 5.Оголошення функції (function declaration)
console.warn("Створення ти виклики функції (function declaration):");
//? Оголошення функції (function declaration)
//? - це Інший спосіб створити функцію використовуючи
//? ключове слово function на початку інструкції.
//? Особливістю такого синтаксису є те,
//? що функцію можна викликати як
//? ✅ ДО її оголошення(створення) в коді, так i
//? ✅ ПІСЛЯ її оголошення(створення).
fnDeclaration(); //todo✅: виклик  функції (function declaration) ДО її створення
function fnDeclaration() {
    console.log("Це функція 'fnDeclaration'");
};
// fnDeclaration(); //todo✅: виклик  функції (function declaration) ПІСЛЯ її створення
console.log(". . . . . . . . . . . . . . . . . . . . . . . . . . . ");

console.warn("Створення ти виклики функції (function expression):");
//? Функціональний вираз(function expression)
//? ❌ не можна викликати ДО місця його оголошення(створення),
//? ✅ тільки ПІСЛЯ місця його оголошення(створення),
//?  тому що це буквально оголошення const змінної.
// fnExpression(); //todo❌: виклик  функції (function expression) ДО її створення
const fnExpression = function () {
    console.log("Це функція 'fnExpression'");
};
fnExpression(); //todo✅: виклик  функції (function expression) ПІСЛЯ її створення
console.log("-----------------------------------------------------");


console.log(
    '%c 6.Область видимості.                     \n   Область видимості функції.             \n   Пошук за ланцюжком областей видимості. ',
    'color: white; background-color: #D33F49',
);

//! Область видимості
console.warn("Область видимості:");
//todo: Область видимості (scope)
//? — це незалежна від мови концепція,
//? яка описує доступність змінних у виконуваному коді.

//todo: Scope chain (ланцюжок областей видимості)
//? - області видимості утворюють ієрархію,
//? так що дочірні області мають доступ до змінних
//? з батьківських областей, але не навпаки.

//todo: Існує ДВІ області видимості:
//?    1. Г Л О Б А Л Ь Н А
//? - область видимості де знаходяться змінні,
//? оголошені на самому верхньому рівні,
//? тобто поза будь-яких конструкцій
//? на зразок if, while, for і функцій.

//?    2. Б Л О К О В А
//? - область видимості де знаходяться змінні,
//? оголошені всередині інструкцій
//? if, for, функцій та інших блоків коду,
//? взятих у фігурні дужки {},
//? знаходяться в блоковій області видимості
//? і доступні тільки всередині цього блоку коду
//? або у блоках, вкладених в нього.
const globalValue = 100;
console.log("Global --> globalValue:", globalValue); //! 100
console.log(". .  . . . .  . . . . . . .");

const func = function() {
    console.log("func --> globalValue:", globalValue); //! 100
    const funcValue = 20;
    console.log("func --> funcValue:", funcValue); //! 20
    // console.log("func --> forValue:", forValue); //! Uncaught ReferenceError: funcValue is not defined
    // console.log("func --> ifValue:", ifValue); //! Uncaught ReferenceError: funcValue is not defined
};
func();
console.log(". .  . . . .  . . . . . . .");

for (let i = 0; i < 3; i++) {
    console.log("i:", i); 
    console.log("for --> globalValue:", globalValue); //! 100
    const forValue = 30;
    console.log("for --> forValue:", forValue); //! 30
    // console.log("for --> funcValue:", funcValue); //! Uncaught ReferenceError: funcValue is not defined
    // console.log("for --> ifValue:", ifValue); //! Uncaught ReferenceError: funcValue is not defined
    console.log(". .  . . . .  . . . . . . .");

    if (i === 2) {
        console.log("if --> globalValue:", globalValue); //! 100
        const ifValue = 40;
        console.log("if --> ifValue:", ifValue); //! 40
        console.log("if --> forValue:", forValue); //! 30
        // console.log("if --> funcValue:", funcValue); //! Uncaught ReferenceError: funcValue is not defined
        console.log(". .  . . . .  . . . . . . .");
    };
};
console.log("----------------------------------------");


//! Область видимості функції
console.warn("Область видимості функції:");
//? Функції створюють власну локальну область видимості. 
//? Змінні, створені всередині функції, включаючи 
//? параметри, локальні всередині цієї функції 
//? і не доступні коду із зовні. 
//? Локальні змінні будуть створюватися кожен раз 
//? при виконанні функції, і їх окремі інкарнації 
//? ніяк один з одним не пов'язані.
const value = 100;
console.log("Global --> value:", value); //! 100
console.log(". .  . . . .  . . . . . . . . . .");

const fooNew = function () {
    // console.log("1.fooNew --> value:", value); //! 100
    const value = 50;
    console.log("2.fooNew --> value:", value); //! 50
    const functionNewValue = 70;
    console.log("3.fooNew --> functionNewValue:", functionNewValue); //! 70
};
fooNew();
console.log(". .  . . . .  . . . . . . . . . .");

console.log("Global --> value:", value); //! 100
// console.log("Global --> functionNewValue:", functionNewValue); //! Uncaught ReferenceError: functionNewValue is not defined
console.log("----------------------------------------");


//! Пошук за ланцюжком областей видимості
console.warn("Пошук за ланцюжком областей видимості: \n https://ruslan379.github.io/course-fe-html-css/lesson-FE3_09/images/scope-chain-search.png");
//? Інтерпретатор намагається спочатку знайти змінну 
//? в тій області видимості, в якій до неї звернулися. 
//? Якщо така змінна у локальній області видимості - відсутня, 
//? то він виходить назовні, на один рівень за одну спробу, 
//? доки не знайде значення або не дійде до 
//? найвищої області видимості (глобальної) і зрозуміє, 
//? що змінну з таким ідентифікатором неможливо знайти, 
//? тому що її просто не існує, у такому випадку виникне помилка того, 
//? що змінна не оголошена.
const a1 = 10;

const foo1 = function() {
    const b = 20;

    for (let i = 0; i < 5; i++) {
        const c = 30;

        if (i === 3) {
            const d = 40;
            console.log("if --> a:", a1); //! 10
            console.log("if --> b:", b); //! 20
            console.log("if --> c:", c); //! 30
            console.log("if --> d:", d); //! 40
        };
    };
};
foo1();
console.log("----------------------------------------");

console.log(
    '%c 7.Hoisting (Підняття змінних) ',
    'color: white; background-color: #D33F49',
);

//! 7.Hoisting (Підняття змінних)
//? У мовах програмування, в тому числі в JavaScript, код виконується у дві фази:

//! Фаза компіляції
console.warn("Фаза компіляції, інтерпретації або оцінки (compile time, evaluation time):");
//? Фаза компіляції, інтерпретації
//? або оцінки (compile time, evaluation time)
//? - підготовка перед виконанням коду,
//? перевірка валідності синтаксису вихідного коду.
console.log('Цього повідомлення не буде в консолі.');
// cons valueOne = 5; //! ❌ ПОМИЛКА компіляції!
console.log(". . . . . . . . . . . . . . . . . . .");

//! Фаза виконання
//? Фаза виконання (runtime) - скрипт починає виконуватися,
//? виконуються інструкції викликів функцій і оцінки виразів,
//? відбувається пошук необхідних ідентифікаторів
//? у відповідних областях видимості тощо.

//! Підняття змінних (hoisting)
console.warn("Підняття змінних (hoisting) з var:");
//? - це механізм інтерпретатора, який,
//? ДО фази виконання коду,
//? підіймає оголошення змінних
//? в початок області видимості (блочної або функції)
//? в якій вони були оголошені.
//todo: Саме тому працює function declaration
//todo: і так дивно поводяться змінні,
//todo: оголошені використовуючи var
//todo: - їх оголошення підіймаються
//todo: в початок області видимості функції
//todo: в якій вони були оголошені.
console.log("Global-1 --> valueVar:", valueVar); //! undefined
valueVar = 5;
console.log("Global-2 --> valueVar:", valueVar); //! 5

if (true) {
    console.log("if-1 --> valueVar:", valueVar); //! 5
    var valueVar = 10;
    console.log("if-2 --> valueVar:", valueVar); //! 10
};

valueVar = 15;
console.log("Global-3 -->valueVar:", valueVar); //! 15
console.log(". . . . . . . . . . . . . . . . . . .");


//! Ось тому ми використовуємо let або const
console.warn("Підняття змінних (hoisting) з let або const:");
//? Змінні оголошені використовуючи let або const
//? так само підіймаються, але при цьому
//? підкоряються блочні області видимості,
//? нічим не ініціалізуются за замовчуванням
//? і не доступні для звернення
//? до того місця в коді де були оголошені в коді.
//todo У кожній області видимості буде створена своя, незалежна змінна value:
// console.log("Global-1 --> value:", value); //! ❌ ПОМИЛКА інтерпретатора: ReferenceError: value is not defined
const value1 = 5;
console.log("Global-2 --> value:", value1); //! 5

if (true) {
    // console.log("if-1 --> value:", value1); //! ❌ ПОМИЛКА інтерпретатора: ReferenceError: value is not defined
    const value1 = 10;
    console.log("if-2 --> value:", value1); //! 10
};

console.log("Global-3 --> value:", value1); //! 5
console.log("----------------------------------------------");
