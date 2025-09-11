//! Ітерація по масиву
//? Для ітерації по масиву або перебору масиву, використовуються цикли


//! Використання циклу for
console.warn("Використання циклу for:");
//? Для доступу до елементів використовується
//? синтаксис квадратних дужок масив[індекс],
//? де індекс - це значення лічильника циклу
//? від 0 і до останнього індексу масиву,
//? тобто менше, але не дорівнює його довжині.
let clients = ["Mango", "Ajax", "Poly"];
console.log("clients:", clients); //! ['Mango', 'Poly', 'Ajax']

for (let i = 0; i < clients.length; i += 1) {
    console.log(`clients[${i}]:`, clients[i]);
};
console.log("-----------------------------------------");


//! Перевизначення елементів масиву
console.warn("Перевизначення елементів масиву за допомогою циклу for:");
//? За допомогою циклу for можна перевизначити всі елементи масиву.
clients = [0, 1, 2]; //todo: інший приклад масиву
for (let i = 0; i < clients.length; i += 1) {
    clients[i] = clients[i] + i;
    console.log(`clients[${i}]:`, clients[i]);
};
console.log("clients:", clients); //! ['Mango0', 'Ajax1', 'Poly2'] або [0, 2, 4]
console.log("---------------------------------------------");

//! Використання циклу for...of​
console.warn("Використання циклу for...of​:");
//? Конструкція for...of оголошує цикл, що перебирає
//? ітерабельні об'єкти, як-от масиви і рядки.
//? Тіло циклу буде виконуватися для значення кожного елемента.
//? Це хороша заміна циклу for,
//? якщо не потрібен доступ до лічильника ітерації.
//? variable — змінна,
//? яка буде зберігати значення елемента на кожній ітерації.
//? iterable — колекція,
//? яка містить ітерабельні(що можна порахувати) елементи, наприклад масив.


//todo: Використання циклу for...of​ для масиву
clients = ["Mango", "Ajax", "Poly"];
console.log("clients:", clients); //! ['Mango0', 'Ajax1', 'Poly2'] або [0, 2, 4]

for (const client of clients) {
    console.log(`client:`, client);
};
console.log(". . . . . . . .");

//todo: Використання циклу for...of​ для рядка
const string = "Java Script";
console.log("string:", string); //! 'Java Script'
for (const c of string) {
    console.log(`character:`, c);
};
console.log("-------------------------------------");


//! Оператори break і continue​
console.warn("Оператори break і continue​​:");
//todo: ПРИКЛАД-1:
//? Будемо шукати ім'я клієнта
//? в масиві імен, якщо знайшли - перериваємо цикл,
//? оскільки немає сенсу шукати далі, імена у нас унікальні.
//todo: ПРИКЛАД-1 (var.1)
console.warn("ПРИКЛАД-1 (var.1):");
const clients1 = ["Mango", "Poly", "Ajax"];
console.log("clients1:", clients1); //! ['Mango', 'Poly', 'Ajax']
const clientNameToFind1 = "Poly";
console.log("clientNameToFind1:", clientNameToFind1); //! 'Poly'

let message;

for (const client of clients1) {
    //? На кожній ітерації будемо перевіряти чи збігається елемент масиву з
    //? іменем клієнта. Якщо збігається - записуємо в message повідомлення
    //? про успіх і робимо break, щоб далі не шукати
    if (client === clientNameToFind1) {
        message = "Клієнт з таким ім'ям є в базі даних!";
        break;
    };
    //? Якщо вони не збігаються - записуємо в message повідомлення про відсутність імені
    message = "Клієнт з таким ім'ям відсутній в базі даних!";
};
console.log(message); //! "Клієнт з таким ім'ям є в базі даних!"
console.log(". . . . . . . . . . . . . . . . . . .");


//todo: ПРИКЛАД-1 (var.2)
console.warn("ПРИКЛАД-1 (var.2):");
//? Можна на початку задати message значення невдачі пошуку, 
//? а в циклі перезаписати його на успіх, якщо знайшли ім'я. 
//? Але break все одно нам знадобиться, оскільки, 
//? якщо у нас масив із 10000 клієнтів, 
//? а потрібний нам знаходиться на 2 позиції, 
//? то немає абсолютно жодного сенсу перебирати інші 9998 елементи.
const clients2 = ["Mango", "Poly", "Ajax"];
console.log("clients2:", clients2); //! ['Mango', 'Poly', 'Ajax']
const clientNameToFind2 = "Ajax";
console.log("clientNameToFind2:", clientNameToFind2); //! 'Ajax'
let message2 = "Клієнт з таким ім'ям відсутній в базі даних!";

for (const client of clients2) {
    if (client === clientNameToFind2) {
        message2 = "Клієнт з таким ім'ям є в базі даних!";
        console.log(`Клієнт з ім'ям ${clientNameToFind2} є в базі даних!`);
        break;
    }
    //? Якщо не збігається, то на цій ітерації нічого не робимо
};
console.log(message2); //! "Клієнт з таким ім'ям є в базі даних!"
console.log("-------------------------------------");


//todo: ПРИКЛАД-2:
console.warn("ПРИКЛАД-2:");
//? Використовуємо цикл для виведення
//? тільки чисел, більших за певне значення.
const numbers = [1, 3, 14, 18, 4, 7, 29, 6, 34];
console.log("Масив чисел:", numbers); //! [1, 3, 14, 18, 4, 7, 29, 6, 34]
const threshold = 15;
console.log("Число для порівняння:", threshold); //! 15

//? Для чисел, менших ніж порогове значення, спрацьовує continue, виконання тіла
//? припиняється і управління передається на наступну ітерацію.
for (let i = 0; i < numbers.length; i += 1) {
    if (numbers[i] < threshold) {
        continue;
    }
    console.log(`Число більше за ${threshold}: ${numbers[i]}`); //! 18, 29, 34
};


//! Багатовимірні масиви
//? Багатовимірні масиви
//? Масиви можуть містити інші масиви як елементи.
//? Це можна використовувати для створення матриць.
const matrix = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
];
console.log("Багатовимірний масив [matrix]:", matrix); //! [Array(3), Array(3), Array(3)]
console.log("matrix[0][0]:", matrix[0][0]); //! 1
console.log("matrix[1][1]:", matrix[1][1]); //! 5
console.log("matrix[2][2]:", matrix[2][2]); //! 9
console.log("----------------------------------------------");


//todo: ПРИКЛАД:
//? Використуємо вкладені цикли для того
//? щоб перебрати багатовимірний масив [matrix]
//? та знайти суму всіх його елементів.
let total = 0;

for (let i = 0; i < matrix.length; i += 1) {
    console.log(`Підмасив матриці matrix[${i}]:`, matrix[i]);

    for (let j = 0; j < matrix[i].length; j += 1) {
        console.log(`Елемент підмасив матриці matrix[${i}][${j}]:`, matrix[i][j]);
        total += matrix[i][j];
        // console.log("total in for:", total);
    }
}
console.log("Сума всіх елементів, <total> = ", total); //! 45
//! ПРАКТИКА-7 (Урок-07_JS)
//todo [1]
console.log(
    "%c [1] ",
    "color: yellow; background-color: #2274A5",
);
//? 1-1.Створити змінну <array> значення якої
//? є масив із п'яти елементів,
//? де упереміш присутні числа та рядки.
//? Вивести в консоль значення змінної <array>.
//? Вивести в консоль значення кожного єлемента змінної(масиву) <array>.
console.log(
    "%c [1-1] ",
    "color: #2274A5; background-color: yellow",
);
//! Код виконаного завдання
const array = [6, "Mango", 9, "Poly", 3];
console.log("array:", array);
console.log("array[0]:", array[0]);
console.log("array[1]:", array[1]);
console.log("array[2]:", array[2]);
console.log("array[3]:", array[3]);
console.log("array[4]:", array[4]);
console.log("-------------------------------------------");

//? 1-2.Додати до 2-го(другого) та 3-го(третього)
//? елемента 1 і вивести їх значення в консоль.
//? Вивести в консоль значення змінної(масиву) <array>.
console.log(
    "%c [1-2] ",
    "color: #2274A5; background-color: yellow",
);
//! Код виконаного завдання
array[1] += 1;
array[2] += 1;
console.log("array[1]:", array[1])
console.log("array[2]:", array[2])
console.log("array:", array);
console.log("-------------------------------------------");

//? 1-3.Виміряти довжину масиву [array]
//? та вивести це значення в консоль.
console.log(
    "%c [1-3] ",
    "color: #2274A5; background-color: yellow",
);
//! Код виконаного завдання
console.log("array.length:", array.length);
console.log("-------------------------------------------");

//? 1-4.Отримати индекс та значення
//? останнього елемента масиву <array>.
//? Вивести ці значення в консоль.
console.log(
    "%c [1-4] ",
    "color: #2274A5; background-color: yellow",
);
//! Код виконаного завдання
console.log("array.length - 1 :", array.length - 1);
console.log("array[[array.length- 1]:", array[array.length - 1])
console.log("-------------------------------------------");

//? 2-1.Вивести в консоль значення кожного
//? елемента масиву [array] за допомогою цикла for.
console.log(
    "%c [2-1] ",
    "color: #2274A5; background-color: yellow",
);
//! Код виконаного завдання
for (let i = 0; i < array.length; i += 1) {
    console.log(`index: ${i} array: ${array[i]}`);
};
console.log("array:", array);
console.log("-------------------------------------------");

//? 2-2.Додати до 2-го(другого) та 3-го(третього)
//? елемента 1 за допомогою цикла for
//? і вивести їх значення в консоль.
//? Вивести в консоль значення масиву [array].
console.log(
    "%c [2-2] ",
    "color: #2274A5; background-color: yellow",
);
//! Код виконаного завдання
for (let i = 0; i < array.length; i++) {
    if (i === 1 || i === 2) {
        array[i] += 1;
        console.log(`array[1] ${array[i]}`)
    };
};
console.log("array:", array);
console.log("-------------------------------------------");

//? 2-3.Вивести в консоль значення кожного
//? елемента масиву [array] за допомогою цикла for...of.
console.log(
    "%c [2-3] ",
    "color: #2274A5; background-color: yellow",
);
//! Код виконаного завдання
let index = 0;
for (let item of array) {
    console.log(`index: ${index} item ${item}`);
    index += 1;
}
console.log("-------------------------------------------");

//? 2-4.Знайти ПЕРШЕ ЧИСЛОВЕ значення
//? елемента масиву [array] за допомогою цикла for...of
//? та використовуючи оператор break.
//? Вивести це значення в консоль.
console.log(
    "%c [2-4] ",
    "color: #2274A5; background-color: yellow",
);
//! Код виконаного завдання
for (let item of array) {
    if (typeof item === "number") {
        console.log(`item: ${item}`)
        break;
    };
};
console.log("-------------------------------------------");

//? 2-5.Знайти ПЕРШЕ РЯДКОВЕ значення
//? елемента масиву [array] за допомогою цикла for...of
//? та використовуючи оператор break.
//? Вивести це значення в консоль.
console.log(
    "%c [2-5] ",
    "color: #2274A5; background-color: yellow",
);
//! Код виконаного завдання
for (let item of array) {
    if (typeof item === "string") {
        console.log(`item: ${item}`)
        break;
    };
};
console
console.log("-------------------------------------------");

//? 2-6.Знайти ВСІ ЧИСЛОВІ значення
//? елементів масиву [array] за допомогою цикла for...of
//? та використовуючи оператор continue.
//? Вивести ці значення в консоль.
console.log(
    "%c [2-6] ",
    "color: #2274A5; background-color: yellow",
);
//! Код виконаного завдання
for (let item of array) {
    if (typeof item !== "number") {
        continue;
    }
    console.log(`item: ${item}`)
}
console.log("-------------------------------------------");

//? 2-7.Знайти ВСІ РЯДКОВІ значення
//? елементів масиву [array] за допомогою цикла for...of
//? та використовуючи оператор continue.
//? Вивести ці значення в консоль.
console.log(
    "%c [2-7] ",
    "color: #2274A5; background-color: yellow",
);
//! Код виконаного завдання
for (let item of array) {
    if (typeof item !== "string") {
        continue;
    }
    console.log(`item: ${item}`)
}
console.log("-------------------------------------------");

//? 2-8.Знайти ВСІ тільки ЧИСЛОВІ значення
//? елемента масиву [array] за допомогою цикла for...of,
//? змінити їх тип на рядковий та додати 1.
//? Вивести ВСІ значення масиву [array] в консоль,
//? використовуючи оператор continue.
//? Вивести в консоль значення масиву [array].
console.log(
    "%c [2-8] ",
    "color: #2274A5; background-color: yellow",
);
//! Код виконаного завдання
console.log("arrayBefore:", array);

for (let item of array) {
    if (typeof item === "number") {
        item = String(item) + 1;
        console.log("item:", item);
        continue;
    };
    console.log("item:", item);
};

console.log("arrayAfter:", array);
console.log("-------------------------------------------");

//? 2-9.Знайти ВСІ тільки ЧИСЛОВІ значення
//? елемента масиву [array] за допомогою цикла for,
//? змінити їх тип на рядковий та додати 1.
//? Вивести ВСІ значення масиву [array] в консоль,
//? використовуючи оператор continue.
//? Вивести в консоль значення масиву [array].
console.log(
    "%c [2-9] ",
    "color:rgb(18, 107, 158); background-color: yellow",
);
//! Код виконаного завдання
console.log("старий масив:", array);
for (let i = 0; i < array.length; i += 1) {
    if (typeof array[i] === "number") {
        array[i] = String(array[i]) + 1;
        console.log(`array[${i}]:`, array[i]);
        continue;
    };
    console.log(`array[${i}]:`, array[i]);
};
console.log("Оновлений масив:", array);
console.log("-----------------------------------------------------");




