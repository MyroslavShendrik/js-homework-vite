//todo [ДЗ] 
console.log(
    "%c [ДЗ] ",
    "color: yellow; background-color: #2274A5",
);
//? Є масив logins з логінами користувачів. 
//? Напиши скрипт додавання логіна в масив logins. 
//? Логін, який додається повинен:
//?  - проходити перевірку на довжину від 4 до 16-ти символів включно
//?  - бути унікальним, тобто бути відсутнім в масиві logins.
//? ⚠️ Розбий завдання на підзадачі за допомогою функцій.
//? 1️⃣ Напиши функцію isLoginValid(login), 
//? в якій перевір кількість символів параметра login 
//? і поверни true або false в залежності від того, 
//? чи потрапляє довжина параметра в заданий 
//? діапазон від 4-х до 16-ти символів включно.
//? 2️⃣ Напиши функцію isLoginUnique(allLogins, login), 
//? яка приймає список всіх логінів і логін, 
//? який додається, як параметри 
//? і перевіряє наявність login в массиве allLogins, 
//? повертає true якщо такого логіна ще немає і
//? false якщо логін вже використовується.
//? 3️⃣ Напиши функцію addLogin(allLogins, login) яка:
//?  - Приймає новий логін і масив всіх логінів як параметри
//?  - Перевіряє валідність логіна використовуючи допоміжну функцію isLoginValid
//?  - Якщо логін не валідний, припинити виконання функції addLogin 
//?    і повернути радок: 'Помилка! Логін повинен бути від 4 до 16 символів'
//?  - Якщо логін валідний, функція addLogin перевіряє унікальність логіна за допомогою функції isLoginUnique
//?  - Якщо isLoginUnique поверне false, тоді addLogin не додає логін в массив масив 
//?    і повертає рядок: 'Такий логін вже використовується!'
//?  - Якщо isLoginUnique поверне true, addLogin додає новий логін в logins 
//?    і повертає рядок: 'Логін успішно доданий!'
//? 🔔 Принцип єдиної відповідальності функції 
//?  — кожна функція робить щось одне. 
//? Це дозволяє перевикористати код і змінювати логіку роботи функції 
//? тільки в одному місці, не зачіпаючи роботу програми в цілому.
//? ❗️ ℹ️ ❓ Предикатні функції повертають тільки true або false. 
//?       Такі функції прийнято називати починаючи з is: 
//?       isLoginUnique і isLoginValid в нашому випадку.
//?        - isLoginUnique тільки перевіряє чи є такий логін в масиві і повертає true або false.
//?        - isLoginValid тільки перевіряє чи валідний логін і повертає true або false.
//? Не предикатна функція addLogin лише додає чи не додає логін в масив,
//? використовуючи, для перевірок умови додавання,
//? результати викликів інших предикатних функцій — isLoginUnique і isLoginValid. 
//! Код виконаного завдання

const logins = ["Mipkol", "Mipkolim"];
 const isLoginValid = function(login) {
    return login.length >= 4 && login.length <= 16;
}

const isLoginUnique = function(allLogins, login) {
    return !allLogins.includes(login);
}

const addLogin = function(allLogins, login) {
    if (!isLoginValid(login)) {
        return 'Логін повинен бути від 4 до 16 символів';
    }
    
    if (!isLoginUnique(allLogins, login)) {
        return 'Такий логін вже є';
    }
    
    allLogins.push(login);
    return 'Логін успішно доданий';
}
console.log(addLogin(logins, "Maxs"));
console.log(addLogin(logins, "Mipkol")); 
console.log(addLogin(logins, "Alg"));  
console.log(addLogin(logins, "4343434343434343434343434343434343434")); 
console.log("-------------------------------------------------");
const logins2 = ["Mipkol", "Mipkolim"];
console.log(addLogin2(logins2, "Maxs"));

function isLoginValid2(login2) {
    return login2.length >= 4 && login2.length <= 16;
}

function isLoginUnique2(allLogins2, login2) {
    return !allLogins2.includes(login2);
}

function addLogin2(allLogins2, login2) {
    if (!isLoginValid2(login2)) {
        return 'Логін повинен бути від 4 до 16 символів';
    }
    
    if (!isLoginUnique2(allLogins2, login2)) {
        return 'Такий логін вже є';
    }
    
    allLogins2.push(login2);
    return 'Логін успішно доданий';
}


//todo [1]
console.log(
    "%c [1] ",
    "color: yellow; background-color: #2274A5",
);
//? Напиши функцію logItems(array), 
//? яка отримує масив і використовує цикл for, 
//? який для кожного елемента масиву 
//? буде виводити в консоль повідомлення 
//? в форматі [номер елемента] - [значення елемента].
//? Нумерація повинна починатися з 1. 
//? Наприклад, для першого елемента масиву 
//? ['Mango', 'Poly', 'Ajax'] 
//? з індексом 0 буде виведено '1 - Mango', 
//? а для індексу 2 виведе '3 - Ajax'.
//! Код виконаного завдання
const array2 = ['Mango', 'Poly', 'Ajax'];

function logItems(array) {
  for (let i = 0; i < array.length; i++) {
    console.log(i + 1 + ' - ' + array[i]);
  }
}
logItems(array2);
  
console.log("--------------------------------------------------");


//todo [2]
console.log(
    "%c [2] ",
    "color: yellow; background-color: #2274A5",
);
//? Напиши скрипт підрахунку вартості гравірування прикрас. 
//? Для цього створи функцію 
//? calculateEngravingPrice(message, pricePerWord) 
//? приймаючу рядок (в рядку будуть тільки слова і прогалини) 
//? і ціну гравірування одного слова, 
//? і повертає ціну гравірування всіх слів в рядку.
//! Код виконаного завдання
//!var1
function calculateEngravingPrice(message, pricePerWord) {
    let letters = message.split(" ");
    return letters.length * pricePerWord;
  }
  
  console.log(calculateEngravingPrice("I love you Mom", 100));
  console.log("--------------------------------------------------");

//!var2

function messageSplit(message){
return message.split(" ");
};
function multiplyPrice(array, pricePerWord){
return array.length * pricePerWord;
};
function calculateEngravingPrice1(message, pricePerWord) {
    // const array3 = messageSplit(message);
    // console.log("array3:", array3);
    // const totalPrice = multiplyPrice(array3, pricePerWord );
    const totalPrice = multiplyPrice(messageSplit(message), pricePerWord );
    return totalPrice;
};
console.log(calculateEngravingPrice1("I love you Mom", 200));

console.log("--------------------------------------------------");


//todo [3]
console.log(
    "%c [3] ",
    "color: yellow; background-color: #2274A5",
);
//? Напиши функцію findLongestWord(string), 
//? яка приймає параметром довільний рядок 
//? (в рядку будуть тільки слова і прогалини) 
//? і повертає ПЕРШЕ найдовше слово в цьому рядку.
//! Код виконаного завдання
function findLongestWord(string) {
    const words = string.split(' ');
    let longestWord = '';
    for (const word of words) {
        if (word.length > longestWord.length) {
            longestWord = word;
        }
    }
    return longestWord;
}
console.log(findLongestWord("Це тестовий рядок з найдовшим словом")); 

console.log("--------------------------------------------------");


//todo [4]
console.log(
    "%c [4] ",
    "color: yellow; background-color: #2274A5",
);
//? Напиши функцію formatString(string) 
//? яка приймає рядок і форматує його якщо необхідно.
//?  - Якщо довжина рядка не перевищує 40 символів, 
//?    функція повертає її в початковому вигляді.
//?  - Якщо довжина більше 40 символів, 
//?    то функція обрізає рядок до 40-ка символів 
//?    і додає в кінець рядка три крапки '...', 
//?    після чого повертає укорочену версію.
//! Код виконаного завдання
function formatString(string) {
    // let result;
    // if (string.length > 40) {
    //   result = string.slice(0, 40) + '...';
    // } else{
    //     result = string; 
    // }
    // return result;
    return string.length > 40 ? string.slice(0, 40) + '...' : string; 
  }
  
  console.log(formatString("багато символів дуже багато символів я не знаю, що тут писати, 40 символів"));
  console.log(formatString("багато символів дуже багато символів я н"));
console.log("--------------------------------------------------");


//todo [5]
console.log(
    "%c [5] ",
    "color: yellow; background-color: #2274A5",
);
//? Напиши функцію checkForSpam(message),
//? приймаючу 1 параметр message — рядок.
//? Функція перевіряє її на вміст слів spam або sale.
//? Якщо знайшли заборонене слово,
//? то функція повертає true,
//? якщо заборонених слів немає функція повертає false.
//? Слова в рядку можуть бути в довільному регістрі.
//! Код виконаного завдання
function checkForSpam(message) {
    const lowerCaseMessage = message.toLowerCase();
    let banWord = false;
    if (lowerCaseMessage.includes('spam') || lowerCaseMessage.includes('sale')) {
        banWord = true;
    }
    return banWord;
}
console.log(checkForSpam("SPAM-атака"));
console.log(checkForSpam("SPaM-атака"));
console.log(checkForSpam("SALE"));
console.log(checkForSpam("SaLe"));
console.log(checkForSpam("Просто рядок"))
console.log("--------------------------------------------------");


//todo [6]
console.log(
    "%c [6] ",
    "color: yellow; background-color: #2274A5",
);
//? Напиши скрипт з наступним функціоналом:
//? При завантаженні сторінки користувачеві
//? пропонується в prompt ввести число.
//? Введення зберігається в змінну input
//? і додається в масив чисел numbers.
//? Операція введення числа користувачем
//? і збереження в масив триває до тих пор, пір,
//? поки користувач не натисне Cancel в prompt.
//? Після того як користувач припинив введення
//? натиснувши Cancel, якщо масив не порожній,
//? необхідно порахувати суму всіх елементів масиву
//? і записати її в змінну total.
//? Використовуй цикл for або for...of.
//? Після чого в консоль виведи рядок:
//? 'Загальна сума чисел дорівнює [сума]'.
//? ❗️ Робити перевірку того, що користувач ввів саме число,
//? а не довільний набір символів або пустий рядок, обов'язково.
//? В разі некоректного введення, показуй alert з текстом:
//? 'Було введено не число, спробуйте ще раз',
//? при цьому результат prompt
//? записувати в масив чисел не потрібно,
//? після чого знову користувачеві пропонується ввести число в prompt.
//! Код виконаного завдання
function getTotalSum() {
    let input;
    const numbers = [];

    while (true) {
        input = prompt("Введіть число або натисніть 'Відміна' для виходу")?.trim();
        if (input === undefined) {
            break;
        }

        const number = parseFloat(input);
        if (isNaN(number) || input === "") {
            alert("Помилка! Введіть коректне число.");
        } else {
            numbers.push(number);
        }
    }

    if (numbers.length > 0) {
        let total = numbers.reduce((sum, num) => sum + num, 0);
        return `Загальна сума введених чисел: ${total}`;
    } else {
        return "Не було введено жодного числа.";
    }
}

console.log(getTotalSum());
console.log("--------------------------------------------------");
//! Чому input - function?
//! number правильно використати 
//! перевірка на 292 рядку не працює 
//! isNan(Number()), Number.isNan()
