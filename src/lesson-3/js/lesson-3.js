console.log('Lesson-3 JS');
//todo [1]
console.log(
    "%c [1] ",
    "color: yellow; background-color: #2274A5",
);
//? Вивести result в консоль.
//? Перевірити тип змінної result = 5 + 5 + "5".
//! Код виконаного завдання
const result = 5 + 5 + "5";
console.log(result);
console.log("result:", typeof result)

//todo [2]
console.log(
    "%c [2] ",
    "color: yellow; background-color: #2274A5",
);
//? Створіть змінну <email> з вашою електронною адресою.
//? Напишіть скрипт, який перевіряє чи містить змінна email
//? символ @ і рахує загальну кількість символів.
//? Результат виведіть в консоль.
//! Код виконаного завдання
const email = "miroslavsendrik276@gmail.com"
console.log("чи є @?:", email.includes("@"));

//todo [3]
console.log(
    "%c [3] ",
    "color: yellow; background-color: #2274A5",
);
//? Записати в окремих змінних кожне слово: My, name, is.
//? Поєднати всі слова в змінну fullName.
//? До змінної fullName додати ‘Viktor’.
//? fullName вивести в консоль.
//! Код виконаного завдання
let My = "My";
let name1 = "name";
let is = "is";
let fullName = `${My} ${name1} ${is}`;
fullName += " Viktor";
console.log(fullName);
//todo [4]
console.log(
    "%c [4] ",
    "color: yellow; background-color: #2274A5",
);
//? Створіть змінну userName з ім’ям користувача
//? і змінну payment з сумою до оплати.
//? За допомогою шаблонного рядка виведіть на екран
//? через alert повідомлення на прикладі цього:
//? «Дякуємо, Олександро! До сплати 300 гривень»
//! Код виконаного завдання
const userName = "Олександро";
const payment = 300;
alert(`Дякуємо, ${userName}! До сплати ${payment} гривень`);