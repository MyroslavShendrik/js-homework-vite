
//todo [1]
console.log(
    "%c [1] ",
    "color: yellow; background-color: #2274A5",
);
//? Створити масив з трьох чисел.
//? Змінити значення другого елемента масиву на 10.
//! Код виконаного завдання
const array1 = [3, 6, 9];
console.log("array1:", array1);
array1[1] = 10;
console.log("array1:", array1);
console.log("---------------------------------------------");



//todo [2]
console.log(
    "%c [2] ",
    "color: yellow; background-color: #2274A5",
);
//? Створити масив із трьох рядків.
//? Додати до масиву ще одну рядків.
//! Код виконаного завдання
const array2 = ["Рядок1", "Рядок2", "Рядок3"];
console.log("array1:", array2);
array2[3] = "Рядок-4"; 
console.log("array1:", array2);
console.log("---------------------------------------------");



//todo [3]
console.log(
    "%c [3] ",
    "color: yellow; background-color: #2274A5",
);
//? Створити скрипт який поверне суму всіх чисел в масиві.
//! Код виконаного завдання
const array3 = [1, 2, 3, 4, 5];
console.log("array3:", array3);
let total = 0;
 for (let item of array3) {
     total += item;
};

console.log("total:", total);
console.log("---------------------------------------------");



//todo [4]
console.log(
    "%c [4] ",
    "color: yellow; background-color: #2274A5",
);
//? Створити масив з 5-ти чисел. 
//? Вивести на екран всі елементи масиву 
//? за допомогою циклу for.
//! Код виконаного завдання
const array4 = [3, 23, 11, 45, 56];
console.log("array4:", array4);
for (let i = 0; i < array4.length; i += 1) {
    console.log(`array4[${i}] :`, array4[i]);
};
console.log("---------------------------------------------");



//todo [5]
console.log(
    "%c [5] ",
    "color: yellow; background-color: #2274A5",
);
//? Створити масив із 5-ти рядків.
//? Вивести на екран кожен рядок з масиву,
//? який містить більше 5-ти символів.
//! Код виконаного завдання
const array5 = ["first", "second", "third", "fourth", "fifth"];
console.log("array5:", array5);
for (let i = 0; i < array5.length; i += 1) {
    if (array5[i].length <= 5) {
        continue;
    };
    console.log(` array5[${i}] 5-ти символів:`, array5[i]);
};
console.log(". . . . . . . . . . . . . . . . . . . . . . . . .");
console.log("---------------------------------------------");



//todo [6]
console.log(
    "%c [6] ",
    "color: yellow; background-color: #2274A5",
);
//? Створити масив з 10-ти чисел. 
//? Знайти та вивести на екран 
//? максимальне значення з масиву.
//! Код виконаного завдання
const array6 = [3, 59, 35, 4, 2, 124, 44, 9, 23, 33];
console.log("arr6:", array6);
let biggestNum;

biggestNum = array6[0];
for (let i = 0; i < array6.length; i += 1) {
     if (array6[i] > biggestNum) {
         biggestNum = array6[i];
     };
 };


console.log("Найбільше число:", biggestNum);
console.log("---------------------------------------------");


    //todo [7]
    console.log(
        "%c [7] ",
        "color: yellow; background-color: #2274A5",
    );
    //? Створити масив з 10-ти чисел. 
    //? Знайти всі парні числа в масиві 
    //? та вивести їх на екран.
    //! Код виконаного завдання
    const array7 = [4, 11, 44, 189, 44, 277, 420, 1597, 1584, 376];
    console.log("array7:", array7);
    let totalNum = 0;
    for (const item of array7) {
        if (item % 2 === 0) {
            console.log(`Число ${item} парне`);
            totalNum += item;
        };
    };
    console.log("Сума всіх парних чисел =", totalNum);
    console.log("---------------------------------------------");
