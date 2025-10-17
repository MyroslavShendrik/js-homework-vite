console.log('Lesson-2 JS');
//todo [1]
//? Створити змінні для зберігання температури
//? за Цельсієм та Фаренгейтом.
//? Перевести температуру з Цельсія у Фаренгейти
//? за допомогою формули та вивести результат в консоль.
//! Код виконаного завдання
let celsius = 12;
let farhrenheit = (celsius * 9/5) + 32;
console.log(`farhrenheit: ${farhrenheit}`);

//todo [2]
//? Створити змінну для зберігання кількості днів у місяці.
//? Обчислити кількість годин та хвилин у цьому місяці за
//? допомогою оператора множення та вивести результат в консоль.
//! Код виконаного завдання
const daysInMonth = 30;
const hoursInMonth = daysInMonth * 24;
const minutesInMonth = hoursInMonth * 60;
console.log(`daysInMonth ${daysInMonth} `);
console.log(`hoursInMonth ${hoursInMonth}`);
console.log(`minutesInMonth ${minutesInMonth}`);

//todo [3]
//? Створити змінні для зберігання рівня здоров'я та енергії гравця в грі.
//? Зменшити рівень здоров'я та енергії гравця за допомогою
//? операторів віднімання та вивести результат в консоль.
//! Код виконаного завдання
let health = 100;
let energy = 100;
health -= 20;
energy -= 15;
console.log("health:", health);
console.log("energy:", energy);
//todo [4]
//? Створити змінну для зберігання суми покупки в магазині.
//? Застосувати знижку в розмірі 10 % до цієї суми за допомогою
//? оператора множення та вивести результат в консоль.
//! Код виконаного завдання
let money = 500;
let discount = money * 0.10;
let moneyDiscount = money - discount;
console.log("money", money, "грн");
console.log("discount:", discount, "грн");
console.log("moneyDiscount:", moneyDiscount, "грн");

//todo [5]
//? Створити змінну для зберігання числа з плаваючою комою.
//? Використати метод Math.floor() для округлення числа до
//? меншого та вивести результат в консоль.
//! Код виконаного завдання
let incompleteNumber = 9.76;
let roundedDown = Math.floor(incompleteNumber);
console.log( "roundedDown:", roundedDown);

//todo [6]
//? Створити змінну для зберігання рядка, який містить числа
//? з плаваючою комою.Використати метод parseFloat() для
//? перетворення рядка у десяткове число та вивести результат в консоль.
//! Код виконаного завдання
let numberString = "44.44";
let floatlNumber = Number.parseFloat(numberString);
console.log(floatlNumber);  


//todo [7]
//? Створити змінну для зберігання рядка, який містить ціле число.
//? Використати метод parseInt() для перетворення рядка у ціле число
//? та вивести результат в консоль.
//! Код виконаного завдання
let coolNumber = "321";
let parseNumber = Number.parseInt(coolNumber);
console.log(parseNumber);

//todo [8]
//? Створити змінну для зберігання числа.
//? Використати метод Math.sqrt() для обчислення
//? квадратного кореня числа та вивести результат в консоль.
//! Код виконаного завдання
let squareNumber = 64;
let mathSquare = Math.sqrt(squareNumber);
console.log(mathSquare);


//todo [9]
//? Створити змінні для зберігання цілочисельного значення
//? та рядка з числом у вигляді рядка.
//? Використати метод parseInt() для перетворення рядка
//? у ціле число та вивести результат в консоль.
//? Потім використати метод toString() для перетворення
//? цілочисельного значення у рядок та вивести результат в консоль.
//! Код виконаного завдання
let integerNumber = 65;
let stringNumber = "454";
let parsedNumber = parseInt(stringNumber);
console.log("parsedNumber:", parsedNumber);
let stringFromNumber = integerNumber.toString();
console.log("stringFromNumber:", stringFromNumber);