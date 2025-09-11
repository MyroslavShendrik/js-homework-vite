//todo [1]
console.log(
    "%c [1] ",
    "color: yellow; background-color: #2274A5",
);
//? Перетворюємо масив на рядок:
//? Напиши скрипт, який об'єднує всі елементи масиву [friends] в один рядок.
//? Або створи свій масив де елементів може бути довільна кількість. 
//? Нехай елементи массива в створеному рядку будут розділені комою.
//? Зроби два варіанта створеня такого рядку:
//?  - Спочатку за допомогою циклу for (var.1)
//?  - Потім за допомогою метода join() (var.2)
const friends = ['Mango', 'Poly', 'Kiwi', 'Ajax'];
let string = '';
console.log("string:", string);
console.log("friends:", friends);
console.log(". . . . . . . . . . . . . . . . . . . . . . . . .");

//todo: var.1 - через for
console.warn("var.1 - через for");
//! Код виконаного завдання
for (let i = 0; i < friends.length; i += 1) {
    string += friends[i] + ',';
}
console.log("Результат через for():", string);
//todo: var.2 - через join()
console.warn("var.2 - через join()");
//! Код виконаного завдання
string = friends.join(",");
console.log("Результат через join():", string);
console.log("--------------------------------------------------");



//todo [2]
console.log(
    "%c [2] ",
    "color: yellow; background-color: #2274A5",
);
//? Створюємо колекцією карток:
//? Використовуючи будь який з вивчених методів масивів
//? створи масив [cards] такий як в цьому прикладі:
//todo: cards = ['Картка-1', 'Картка-2', 'Картка-3', 'Картка-4', 'Картка-5'];
//? Можна використовувати будь-які з вивчених методів,
//? наприклад, рush(), splice(), concat() або інші методи
//! Код виконаного завдання
let cards = [];
// cards.push('Картка-1', 'Картка-2', 'Картка-3', 'Картка-4', 'Картка-5')
const n = 5;
for (let i = 1; i <= n; i += 1) {
    //    cards.push(`Картка-${i}`);
    cards = cards.concat([`Картка-${i}`]);
};
console.log("масив карток:", cards);
console.log("---------------------------------------------");



//todo [3]
console.log(
    "%c [3] ",
    "color: yellow; background-color: #2274A5",
);
//? Видаляємо картку за її їндексом:
//? Знайди їндекс цієї картки за допомогою метода indexOf():
const cardToRemove = 'Картка-3';
//? та видали її з існуючого вже масив [cards] за допомогою метода масиву.
//! Код виконаного завдання
const cards1 = ['Картка-1', 'Картка-2', 'Картка-3', 'Картка-4'];
const index = cards.indexOf(cardToRemove);
if (index !== -1) {
    cards1.splice(index, 1);
}
console.log("cards1:", cards1);
console.log("---------------------------------------------");



//todo [4]
console.log(
    "%c [4] ",
    "color: yellow; background-color: #2274A5",
);
//? Додаємо картку за її їндексом:
//? Додай таку картку: 
const cardToInsert = 'Картка-6';
//? в кінець існуючого вже масиву [cards]
//?  за допомогою будь-якого метода масиву.
//! Код виконаного завдання
const cards2 = ['Картка-1', 'Картка-2', 'Картка-3', 'Картка-4', 'Картка-5'];
cards2.push(cardToInsert);
console.log("cards2:", cards2);
console.log("---------------------------------------------");



//todo [5]
console.log(
    "%c [5] ",
    "color: yellow; background-color: #2274A5",
);
//? Оновлення картки за її їндексом:
//? Знайди таку картку в існуючому вже масиві [cards]:
const cardToUpdate = 'Картка-4';
//? Потім онови її, змінивши на таку картку:
const cardUpdate = 'Картка-4_new';
//! Код виконаного завдання
const cards3 = ['Картка-1', 'Картка-2', 'Картка-3', 'Картка-4', 'Картка-5',];

const index1 = cards3.indexOf(cardToUpdate);
console.log("index1:", index1 )
if (index1 !== -1) {
    // cards3[index1] = cardUpdate;
    cards3.splice(index1, 1 , cardUpdate);
    
}

console.log("cards3:", cards3);
console.log("---------------------------------------------");
