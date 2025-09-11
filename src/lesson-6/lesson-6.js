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
for (let i = 1; i <= 10; i += 1) {
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
const arrayNumberFive = [1, 2, 3, 4, 5];
console.log("arrayNumberFive:", arrayNumberFive);
for (let i = 0; i < arrayNumberFive.length; i += 1) {
    console.log(` ${i}: ${arrayNumberFive[i]}`)
};

let m = 0;
while (m < arrayNumberFive.length) {
    console.log(`${m + 1}: ${arrayNumberFive[m]}`);
    m += 1;
};

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
const arrayNumberTen = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
console.log("arrayNumberTen:", arrayNumberTen);
for (let i = 0; i < arrayNumberTen.length; i += 1){
    if (arrayNumberTen[i] === 7) break;
    console.log(`${i}: ${arrayNumberTen[i]}`);
};
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
for (let i = 0; i <= 20; i += 1) {
    if (i >= n) {
        break;
    };
    console.log(i)
};

let t = 0;
while (true) {
    if (t >= n) {
        break;
    };
    console.log(t);
    t += 1;
};

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
while (first <= last) {
    if (first % 3 === 0) {
        first += 1;
        continue;
    };
    console.log(first);
    first += 1;
}