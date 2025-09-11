//! ------------------------------------------------------------------------
//todo [1]
console.log(
    "%c [1] ",
    "color: yellow; background-color: #2274A5",
);
//? Використовуючи інструкцію switch:
//? Створіть змінну, що симулює вибір варіанта зі списку.
//? Виводьте повідомлення залежно від обраного варіанта:
//? "Кава", "Чай" або "Сік".
//? Використайте конструкцію switch.
//! Код виконаного завдання
let drink = "Кава"; 

switch (drink) {
    case "Кава":
        console.log("Ви вибрали каву.");
        break;
    case "Чай":
        console.log("Ви вибрали чай.");
        break;
    case "Сік":
        console.log("Ви вибрали сік.");
        break;
    default:
        console.log("Виберіть напій.");
}
console.log("---------------------------------------------");



//todo [2]
console.log(
    "%c [2] ",
    "color: yellow; background-color: #2274A5",
);
//? Використовуючи інструкцію switch:
//? Створіть змінну для зберігання введеного рядка,
//? який може бути днем тижня.
//? Якщо це робочий день — виведіть повідомлення про робочий день,
//? якщо вихідний — про вихідний.
//! Код виконаного завдання
let day = "Понеділок"; 

switch (day) {
    case "Понеділок":
    case "Вівторок":
    case "Середа":
    case "Четвер":
    case "П’ятниця":
        console.log("робочий день.");
        break;
    case "Субота":
    case "Неділя":
        console.log("вихідний день.");
        break;
    default:
        console.log("Будь ласка, введіть день тижня.");
}

console.log("---------------------------------------------");



//todo [3]
console.log(
    "%c [3] ",
    "color: yellow; background-color: #2274A5",
);
//? Використовуючи інструкцію switch:
//? Створіть змінну для зберігання номера місяця.
//? За номером місяця визначайте пору року і
//? виводьте відповідне повідомлення.
//! Код виконаного завдання
let month = 3;

switch (month) {
    case 12:
    case 1:
    case 2:
        console.log("Зима");
        break;
    case 3:
    case 4:
    case 5:
        console.log("Весна");
        break;
    case 6:
    case 7:
    case 8:
        console.log("Літо");
        break;
    case 9:
    case 10:
    case 11:
        console.log("Осінь");
        break;
    default:
        console.log("введіть число від 1 до 12.");
}
console.log("---------------------------------------------");



//todo [4]
console.log(
    "%c [4] ",
    "color: yellow; background-color: #2274A5",
);
//? Використовуючи інструкцію switch:
//? Створіть змінну для зберігання номера місяця.
//? За номером місяця визначайте
//? кількість днів у цьому місяці.
//! Код виконаного завдання
let dayMonth = 2; 

switch (dayMonth) {
    case 1:
    case 3:
    case 5:
    case 7:
    case 8:
    case 10:
    case 12:
    console.log("У цьому місяці 31 день.");
    break;
    case 4:
    case 6:
    case 9: 
    case 11:
    console.log("У цьому місяці 30 днів.");
    break;
    case 2:
        console.log("У цьому місяці 28 або 29 днів .");
        break;
    default:
        console.log("Будь ласка, введіть число від 1 до 12.");
}
console.log("---------------------------------------------");



//todo [5]
console.log(
    "%c [5] ",
    "color: yellow; background-color: #2274A5",
);
//? Використовуючи інструкцію switch:
//? Створіть змінну для зберігання назви кольору.
//? Виводьте повідомлення відповідно до вибраного кольору:
//? якщо "червоний" — "стоп",
//? "зелений" — "йти",
//? "жовтий" — "чекати".
//! Код виконаного завдання
let color = "червоний";

switch (color) {
    case "червоний":
    console.log("Стоп!");
    break;
    case "жовтий":
    console.log("Чекати");
    break;
    case "зелений":
    console.log("Йти");
    break;
    default:
    console.log("Введіть червоний, жовтий або зелений.");
}

console.log("---------------------------------------------");



//todo [6]
console.log(
    "%c [6] ",
    "color: yellow; background-color: #2274A5",
);
//? Використовуючи інструкцію switch:
//? Створіть змінні для зберігання двох чисел та
//? оператора (як у списку select).
//? Виконайте відповідну операцію та виведіть результат.
//?  У випадку ділення на нуль — виведіть попередження.
//! Код виконаного завдання
const firstNumber = 8;
const secondNumber = 4;
// const secondNumber = 0;

// const operator = "+";
// const operator = "-";
// const operator = "*";
const operator = "/";

let resultOfOperation;

switch (operator) {
    case "+":
        resultOfOperation = firstNumber + secondNumber;
        console.log(`Результат додавання: ${resultOfOperation}`);
        break;
    case "-":
        resultOfOperation = firstNumber - secondNumber;
        console.log(`Результат віднімання: ${resultOfOperation}`);
        break;
    case "*":
        resultOfOperation = firstNumber * secondNumber;
        console.log(`Результат множення: ${resultOfOperation}`);
        break;
    case "/":
        if (secondNumber !== 0) {
            resultOfOperation = firstNumber / secondNumber;
            console.log(`Результат ділення: ${resultOfOperation}`);
        } else {
            console.log("Помилка: Ділення на нуль неможливе.");
        }
        break;
    default:
        console.log("Будь ласка, використайте +, -, * або /.");
}

console.log("---------------------------------------------");
