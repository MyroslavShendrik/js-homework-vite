//! 3.Ланцюжки методів
//? ✳️ У нас є масив об'єктів з іменами, балами і відвідуваними предметами кожного студента.
const students = [
    { name: "Манго", score: 83, courses: ["математика", "фізика"] },
    { name: "Полі", score: 59, courses: ["інформатика", "математика"] },
    { name: "Аякс", score: 37, courses: ["фізика", "біологія"] },
    { name: "Ківі", score: 94, courses: ["література", "інформатика"] },
];

//? ✳️ Необхідно отримати масив їхніх імен,
//? відсортованих за зростанням балів за тест.
//? З цією метою ми відсортуємо копію масиву методом sort(),
//? після чого методом map() створимо масив значень властивості name
//? з відсортованого масиву.
const sortedByAscendingScore = [...students].sort((a, b) => a.score - b.score);
const names1 = sortedByAscendingScore.map(student => student.name);

console.log("names1:", names1); //! ['Аякс', 'Полі', 'Манго', 'Ківі']
console.log(". . . . . . . . . . . . . . . . . . . . . . . . . . .");

//? ✳️ Проблема в тому, що у нас з'являються проміжні змінні
//? після кожної операції, крім фінальної.
//? Змінна sortedByAscendingScore - зайва
//? і необхідна тільки для зберігання проміжного результату.
//? ✳️ Позбутися таких «мертвих» змінних можна
//? за допомогою групування викликів методів у ланцюжку.
//? Кожний наступний метод буде виконуватися
//? на основі результату роботи попереднього.
//? 🔸 Робимо копію вихідного масиву перед сортуванням.
//? 🔸 На копії викликаємо метод sort().
//? 🔸 До результату роботи методу sort() застосовуємо метод map().
//? 🔸 Змінній names присвоюється результат роботи методу map().

const names2 = [...students]
    .sort((a, b) => a.score - b.score)
    .map(student => student.name);

console.log("names2:", names2); //! ['Аякс', 'Полі', 'Манго', 'Ківі']
console.log(". . . . . . . . . . . . . . . . . . . . . . . . . . .");

//? ✳️ Отримаємо масив унікальних відвідуваних предметів, відсортований за алфавітом.
//? 🔸 На вихідному масиві викликаємо flatMap() і робимо розгладжений масив усіх курсів.
//? 🔸 До результату методу flatMap() застосовуємо метод filter() для фільтрації унікальних елементів.
//? 🔸 На результаті методу filter() викликаємо sort().
//? 🔸 Змінній uniqueSortedCourses присвоюється результат роботи методу sort().
const uniqueSortedCourses = students
    .flatMap(student => student.courses)
    .filter((course, index, array) => array.indexOf(course) === index)
    .sort((a, b) => a.localeCompare(b));

console.log("uniqueSortedCourses:", uniqueSortedCourses);  //! ['біологія', 'інформатика', 'література', 'математика', 'фізика']
console.log("----------------------------------------------------------------------------------------------");

//? ✳️ Ланцюжок методів може бути довільної довжини,
//? але, зазвичай, не більше 2-3 операцій.
//? 🔷 По-перше, перебираючі методи використовуються
//? для порівняно простих операцій над колекцією.
//? 🔷 По-друге, виклик кожного наступного методу 
//? - це додаткове перебирання масиву, 
//? що за великої кількості, 
//? може позначитися на продуктивності.

//! 1.Метод reduce()
console.warn("Синтаксис методу reduce():");
//? ✴️ Метод reduce(callback, initialValue)
//? використовується для послідовної обробки кожного елемента масиву
//? із збереженням проміжного результату, як акумулятор.
//? Трохи складніший за інші методи для засвоєння,
//? але результат вартий того.
//? 🔸 Поелементо перебирає оригінальний масив.
//? 🔸 Не змінює оригінальний масив.
//? 🔸 Робить все, що завгодно.
//? 🔸 Повертає що завгодно.
//? ✳️ Аргументи колбек-функції - це:
//? 🔹 Перший параметр колбек-функції
//?    (previousValue) - це акумулятор, тобто проміжний результат.
//?    Значення, яке поверне колбек-функція на поточній ітерації,
//?    буде значенням цього параметра на наступній ітерації.
//? 🔹 наступний - значення поточного елемента element,
//? 🔹 його індекс index
//? 🔹 і власне вихідний масив array.
//? 🔹 Другий аргумент - необов'язкове початкове значення акумулятора
//?    - параметр initialValue.
console.log(
    `%c
    масив.reduce((previousValue, element, index, array) => {
        // тіло колбек-функції
    }, initialValue);
    `,
    'color: blue; font-size: 18px',
);

console.warn("Приклад використання метода reduce():");
//? ✳️ Найлегше уявити його роботу метода reduce()
//? на прикладі підрахунку суми елементів масиву.
//? ✳️ Спочатку метод reduce()
//? створює внутрішню змінну-акумулятор (previousValue)
//? і присвоює їй значення параметра initialValue
//? або першого елемента масиву, що перебирається,
//? якщо initialValue не задане.
//? 🔹 previousValue = initialValue = 0; (або previousValue = array(0) = 2).
//? Потім колбек - функція викликається для кожного елемента масиву.
//? Поточне значення параметра previousValue
//? - це те, що повернула колбек - функція на минулій ітерації.
//?     🔹 Ітерація 1 -> previousValue = 0 -> number = 2 -> return 0 + 2 -> return 2
//?     🔹 Ітерація 2 -> previousValue = 2 -> number = 7 -> return 2 + 7 -> return 9
//?     🔹 Ітерація 3 -> previousValue = 9 -> number = 3 -> return 9 + 3 -> return 12
//?     🔹 Ітерація 4 -> previousValue = 12 -> number = 14 -> return 12 + 14 -> return 26
//?     🔹 Ітерація 5 -> previousValue = 26 -> number = 6 -> return 26 + 6 -> return 32
//? Після завершення перебирання всього масиву, метод reduce() повертає значення акумулятора.
//?       Результат = 32
const array = [2, 7, 3, 14, 6];
const initialValue = 0 ;
console.log("array:", array);
console.log("`  `  `  `  `  `  `  `  `  `  `  `  `  `  `  `  `  `  `  `")

const total = array.reduce((previousValue, number, index) => {
    console.log(`Iteration-${index + 1}:  previousValue: ${previousValue},  number: ${number}  ->  return ${previousValue + number}`);
    return previousValue + number;
}, initialValue);

console.log("total:", total); //! 32
//? ✳️ Тобто метод reduce() використовується,
//? коли необхідно взяти «багато» і привести до «одного».
//? У повсякденних завданнях його застосування зводиться до роботи з числами.
console.log(". . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .")
;
//? ❗️❗️❗️ Важливий приклад вірного використання синтаксису метода reduce():
console.warn("Приклад-1: ВІРНЄ використання синтаксису метода reduce():");
//todo var.1
function example1(arr) {
    arr.reduce((acc, element, index) => {
        console.log(`Acc: ${acc}; Index-${index}:  Element: ${element}`);
    }, 15);
}
example1(["Робітник1", "Робітник2", "Робітник3"]);
console.log(". . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .");

console.warn("Приклад-2: ПОМИЛКОВЕ використання синтаксису метода reduce():");
//todo var.2 
function example2(arr) {
    arr.reduce((element, index) => {
        console.log(`Index-${index}:  Element: ${element}`); //todo var.2
    }, undefined);
};//! index:0 elemet:undefined 
example2(["Робітник1", "Робітник2", "Робітник3"]);
console.log("-------------------------------------------------------------");

//todo var1
const array1 = [2, 7, 3, 14, 6];
function sum1(arr){
    let total = 0;
for (const element of arr) {
// total += element
total = total + element 
} 
return total;
}
console.log("сума всіх чисел в масиві №1:", sum1(array1));
//todo var2 
function sum2(arr) {
const allTotal =  arr.reduce((total ,element) => { 
    // console.log(total)

return total + element;

//?     🔹 Ітерація 1 -> previousValue = 0 -> number = 2 -> return 0 + 2 -> return 2
//?     🔹 Ітерація 2 -> previousValue = 2 -> number = 7 -> return 2 + 7 -> return 9
//?     🔹 Ітерація 3 -> previousValue = 9 -> number = 3 -> return 9 + 3 -> return 12
//?     🔹 Ітерація 4 -> previousValue = 12 -> number = 14 -> return 12 + 14 -> return 26
//?     🔹 Ітерація 5 -> previousValue = 26 -> number = 6 -> return 26 + 6 -> return 32
}, 0);
console.log ("allTotal",allTotal)
return allTotal;

}

console.log("сума всіх чисел в масиві №2:", sum2(array1))
const allTotal1 = sum2(array1);
sum2(array1);
//! Метод sort()
console.warn("Синтаксис методу sort():");
//? ✴️ Метод sort() сортує елементи масиву,
//? але на відміну від інших методів перебирання,
//? він сортує вихідний масив.
//? 🔸 Поелементо перебирає оригінальний масив.
//? 🔸 Сортує і змінює вихідний (оригінальний) масив.
//? 🔸 Повертає змінений масив, тобто посилання на відсортований вихідний (оригінальний) масив.
//? 🔸 За замовчуванням сортує за зростанням.❗️
//? 🔸 Сортування відбувається шляхом приведення значень
//?    до рядка і порівняння порядкових номерів у таблиці Unicode.
console.log(
    `%c
    массив.sort();
    `,
    'color: blue; font-size: 18px',
);


console.warn("Приклад використання метода sort():");
//? ✳️ Такий масив чисел буде відсортований за зростанням:
const scores1 = [61, 19, 74, 35, 92, 56];
const copyScores1 = scores1; 
const copy1 = [...scores1];
console.log("scores1_before:", scores1); //! [61, 19, 74, 35, 92, 56]
// scores1.sort();
// copyScores1.sort();
copy1.sort()
console.log("copyScores:",copyScores1);//!  //! [61, 19, 74, 35, 92, 56]
console.log("scores1_after:", scores1); //! //! [61, 19, 74, 35, 92, 56]
console.log("copy1:",copy1);  //! [19, 35, 56, 61, 74, 92]
console.log(". . . . . . . . . . . . . . . . . . . . . . . . . . . . .");

//? ✳️ Тому, у наступній вправі ми розглянемо як задавати свій порядок сортування.
//? ✳️ Для прикладу, відсортуємо масив рядків за алфавітом:
// const students1 = ["Віка", "Андрій", "Олег", "Юля", "Борис", "Катя"];
const students1 = ["віка", "андрій", "Олег", "Юля", "борис", "Катя"];
console.log("students1_before:", students1); //! ['Віка', 'Андрій', 'Олег', 'Юля', 'Борис', 'Катя']
students1.sort();
console.log("students1_after:", students1); //! ['Андрій', 'Борис', 'Віка', 'Катя', 'Олег', 'Юля']
console.log(". . . . . . . . . . . . . . . . . . . . . . . . . . . . .");

//? ✳️ Але порядковий номер великих літер менший, ніж у малих:
const letters = ["b", "B", "a", "A", "c", "C"];
console.log("letters_before:", letters); //! ['b', 'B', 'a', 'A', 'c', 'C']
letters.sort();
console.log("letters_after:", letters);; //! ['A', 'B', 'C', 'a', 'b', 'c']
console.log(". . . . . . . . . . . . . . . . . . . . . . . . . . . . .");
//? ✴️ Через те, що сортується вихідний масив, 
//? порушується принцип чистоти функцій 
//? і не можна зручно створити декілька похідних колекцій 
//? на основі вихідної. 
//? Наприклад, створити колекцію, відсортовану за зростанням, 
//? а іншу - за спаданням. 
//? Тому перед сортуванням роблять 
//? повну копію вихідного масиву і сортують вже її.
const scores3 = [61, 19, 74, 35, 92, 56];
const ascendingScores3 = [...scores3].sort();

console.log("scores3:", scores3); //! [61, 19, 74, 35, 92, 56]
console.log("ascendingScores3:", ascendingScores3);  //! [19, 35, 56, 61, 74, 92]
console.log("-------------------------------------------------------------------------------");
//! Свій порядок сортування чисел
console.warn("Свій порядок сортування чисел:");
//? ✳️ Для зазначення свого порядку сортування методу sort(compareFunction)
//? потрібно передати колбек-функцію з двома параметрами.
//? Це функція порівняння (compare function),
//? порядок сортування залежить від її результату.
//? Метод sort() буде викликати її для двох довільних елементів.
console.log(
    `%c
    массив.sort((a, b) => {
        // тіло колбек-функції
    });
    `,
    'color: blue; font-size: 18px',
);
//? 🔸 a - перший елемент для порівняння.
//? 🔸 b - другий елемент для порівняння.
//? ✴️ Якщо виклик compareFunction(a, b)
//? повертає будь-яке від'ємне значення,
//? тобто a менше b,
//? сортування поставить a перед b.
//? Це сортування за зростанням.
//? ✳️ Якщо виклик compareFunction(a, b) поверне 0, 
//? сортування залишить a і b незмінними 
//? по відношенню один до одного, 
//? але відсортує їх по відношенню до всіх інших елементів. 
//? Але взагалі неважливо, що повертати, 
//? якщо їх взаємний порядок не має значення.
const scores4 = [27, 2, 41, 4, 7, 3, 75];
const ascendingScores4Old = [...scores4].sort();
const ascendingScores4New = [...scores4].sort((a, b) => a - b);
const descentingScores4New = [...scores4].sort((a, b) => b - a);

console.log("scores4:", scores4); //! [27, 2, 41, 4, 7, 3, 75]
console.log("ascendingScores4Old:", ascendingScores4Old);  //! [2, 27, 3, 4, 41, 7, 75]
console.log("ascendingScores4New:", ascendingScores4New);  //! [2, 3, 4, 7, 27, 41, 75]
console.log("descentingScores4New:", descentingScores4New);  //! [75, 41, 27, 7, 4, 3, 2]

//! Свій порядок сортування рядків
console.warn("Свій порядок сортування рядків:");
//? ✴️ Для сортування рядків в алфавітному порядку, 
//? за зростанням або спаданням, 
//? використовується метод рядків localeCompare().
console.log(
    `%c
    firstString.localeCompare(secondString)
    `,
    'color: blue; font-size: 18px',
);
console.log("-------------------------------------------------------------------------------");

//? ✳️ Він викликається на рядку,
//? який потрібно порівняти (firstString) з тим,
//? що був переданий йому як аргумент (secondString).
console.log('"a".localeCompare("b"):', "a".localeCompare("b")); //! -1
console.log('"b".localeCompare("a"):', "b".localeCompare("a")); //! 1
console.log('"a".localeCompare("a"):', "a".localeCompare("a")); //! 0
console.log('"b".localeCompare("b"):', "b".localeCompare("b")); //! 0
//? 🔸 Повертає від'ємне значення, якщо firstString повинен бути перед secondString.
//? 🔸 Повертає додатне значення більше нуля, якщо firstString повинен бути після secondString.
//? 🔸 Якщо рядки однакові, повертається нуль.
console.log("-------------------------------------------------------------------------------");

//? ✳️ Це зручно використовувати для сортування рядків,
//? оскільки метод sort() очікує такі самі значення від колбек-функції.
const students2 = ["Віка", "андрій", "Олег", "юля", "Борис", "катя"];
console.log("students2:", students2); //! ['Віка', 'андрій', 'Олег', 'юля', 'Борис', 'катя']

const inAlphabetOrder2Old = [...students2].sort();
console.log("inAlphabetOrder2Old:", inAlphabetOrder2Old); //! ['Борис', 'Віка', 'Олег', 'андрій', 'катя', 'юля']

const inAlphabetOrder2New = [...students2].sort((a, b) => a.localeCompare(b));
console.log("inAlphabetOrder2New:", inAlphabetOrder2New); //! ['андрій', 'Борис', 'Віка', 'катя', 'Олег', 'юля']

const inReversedOrder2New = [...students2].sort((a, b) => b.localeCompare(a));
console.log("inReversedOrder2New:", inReversedOrder2New); //! ['юля', 'Олег', 'катя', 'Віка', 'Борис', 'андрій']

//! Сортування об'єктів
console.warn("Сортування об'єктів:");
//? ✴️ Під час роботи з масивом об'єктів, 
//? сортування виконується за числовим 
//? або рядковим значенням певної властивості. 
//? Наприклад, у нас є група студентів з балами за тест. 
//? Необхідно відсортувати масив об'єктів за зростанням 
//? і спаданням кількості балів, і за ім'ям студента.
const students3 = [
    { name: "Манго", score: 83 },
    { name: "Полі", score: 59 },
    { name: "Аякс", score: 37 },
    { name: "Ківі", score: 94 },
];
console.log("students3:", students3);
console.log("`  `  `  `  `  `  `  `  `  `  `  `  `  `  `  `  `  `  `");

// const inAscendingScoreOrder = students3.sort(
//     (firstStudent, secondStudent) => firstStudent.score - secondStudent.score
// );
// console.log("inAscendingScoreOrder:", inAscendingScoreOrder); //! 

// const inDescendingScoreOrder = students3.sort(
//     (firstStudent, secondStudent) => secondStudent.score - firstStudent.score
// );
// console.log("inDescendingScoreOrder:", inDescendingScoreOrder); //!

const inAlphabeticalOrder = students3.sort((firstStudent, secondStudent) =>
    firstStudent.name.localeCompare(secondStudent.name)
);
console.log("inAlphabeticalOrder:", inAlphabeticalOrder); //! 
console.log("-------------------------------------------------------------------------------");

//! Метод toSorted()
console.warn("Синтаксис методу toSorted():");
//? ✴️ Метод toSorted() працює також як метод sort(),
//? але на відміну від метод sort()
//? він НЕ змінює вихідний (оригінальний) масив,
//? 🔸 Поелементо перебирає оригінальний масив.
//? 🔸 Не змінює оригінальний масив.
//? 🔸 Повертає НОВИЙ відсортований масив.
//? 🔸 За замовчуванням сортує за зростанням.❗️
//? 🔸 Сортування відбувається шляхом приведення значень
//?    до рядка і порівняння порядкових номерів у таблиці Unicode.
console.log(
    `%c
    массив.toSorted();
    `,
    'color: blue; font-size: 18px',
);
console.log(
    `%c
    массив.toSorted((a, b) => {
        // тіло колбек-функції
    });
    `,
    'color: blue; font-size: 18px',
);
//? 🔸 a - перший елемент для порівняння.
//? 🔸 b - другий елемент для порівняння.
//? ✴️ Якщо виклик compareFunction(a, b)
//? повертає будь-яке від'ємне значення,
//? тобто a менше b,
//? сортування поставить a перед b.
//? Це сортування за зростанням.
//? ✳️ Якщо виклик compareFunction(a, b) поверне 0, 
//? сортування залишить a і b незмінними 
//? по відношенню один до одного, 
//? але відсортує їх по відношенню до всіх інших елементів. 
//? Але взагалі неважливо, що повертати, 
//? якщо їх взаємний порядок не має значення.
const scores5 = [27, 2, 41, 4, 7, 3, 75];
console.log("scores5_before:", scores5); //! [27, 2, 41, 4, 7, 3, 75]
console.log("`  `  `  `  `  `  `  `  `  `  `  `  `  `  `  `  `");

const ascendingScores5 = scores5.toSorted((a, b) => a - b);
const descentingScores5 = scores5.toSorted((a, b) => b - a);

console.log("ascendingScores5:", ascendingScores5);  //! [2, 3, 4, 7, 27, 41, 75]
console.log("descentingScores5:", descentingScores5);  //! [75, 41, 27, 7, 4, 3, 2]

console.log("`  `  `  `  `  `  `  `  `  `  `  `  `  `  `  `  `");
console.log("scores5_after:", scores5); //! [27, 2, 41, 4, 7, 3, 75]
console.log("-------------------------------------------------------------------------------");
