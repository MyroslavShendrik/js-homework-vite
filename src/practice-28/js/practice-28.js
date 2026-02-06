//! Приклад-1: setTimeout()
console.warn("Приклад-1: setTimeout():");
// const button = document.querySelector(".btn-set-interval");
// // button.addEventListener("click", onClick); //! буде помилка 
// const onClick = () => {
//     const timerId = setTimeout(() => {
//         console.log("Реакція на клік в кнопку <Click setInterval> через 5 секунд");
//     }, 5000);

//     console.log("timerId:", timerId);

//     //! Що спрацює раніше: console.warn() або setTimeout(() => {console.log()}, 5000);
//     // alert("⏳ Підтвердіть продовження віконання коду!"); //!
//     // console.warn("✅ Підтвердено продовження віконання коду!"); //!
// };

// button.addEventListener("click", onClick);
//! Приклад-2: setTimeout()
console.warn("Приклад-2: setTimeout():");
//? ✳️ Оскільки ми викликали clearTimeout(),
//? який виповниться раніше, ніж буде викликана функція greet(),
//? таймер з timerId буде видалений і
//? реєстрація відкладеного виклику greet() скасується.
//? Тому в консоль нічого не виведеться.
const greet = () => {
    console.log("Hello!");
    clearTimeout(timerId); //! ✅ Видалення таймера
};

// const timerId = setTimeout(greet, 2000);

//! ❌ Видалення таймера
// clearTimeout(timerId);
//! Таймер: setInterval()
//? ✴️ Метод setInterval() - це простий спосіб 
//? повторення коду знову і знову зі встановленим 
//? проміжком часу повторень. 
//? Синтаксис і параметри такі самі як у setTimeout(). 
//? На відміну від setTimeout(), інтервал запускає 
//? виконання функції не один раз, 
//? а регулярно повторює її через вказаний проміжок часу. 
//? Зупинити виконання можна викликом методу clearInterval(id).
//? ✳️ 

console.log(
    `%c
    const intervalId = setInterval(callback, delay, arg1, arg2, ...);
    `,
    'color: blue; font-size: 18px',
);
console.log("----------------------------------------------------------------------------------------------------");


//! Приклад-1: setInterval()
// console.warn("Приклад-1: setInterval():");
// const startBtn = document.querySelector(".btn-start");
// const stopBtn = document.querySelector(".btn-stop");
// let intervalId = null;

//! ✅ Старт таймера кнопкою
// startBtn.addEventListener("click", () => {
//     let counter = 0;
//     intervalId = setInterval(() => {
//         counter++; //! лічильник часу
//         console.log(`${counter} Генерація випадкового числа: ${Math.random()}, id: ${intervalId}`);
//         // clearTimeout(intervalId); //! ✅❌ Видалення/зупинення таймера

//         //! ✅❌ Видалення/зупинення таймера за умовою
//         const stopCounter = 10;
//         if (counter === stopCounter) {
//             clearTimeout(intervalId);
//             console.error(`Інтервал з ідентифікатором ${intervalId} зупинено на ${stopCounter}-ій секунді!`);
//         };
//     }, 1000);
// });

//! ✅❌ Видалення/зупинення таймера кнопкою
// stopBtn.addEventListener("click", () => {
//     clearInterval(intervalId);
//     console.warn(`Інтервал з ідентифікатором ${intervalId} зупинено!`);
// });

//! Приклад-1 таймера відкладеного старту з конспекту
console.warn("Приклад-1 таймера відкладеного старту з конспекту:")
console.log(
    `%c
    let seconds = 10;
    let timerId = setTimeout(
        function() {
            console.log("Time's up!");
        },
        seconds * 1000
    );
    `,
    'color: blue; font-size: 18px',
);
console.log(". . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .");
// let seconds = 10;
// let timerId = setTimeout(
//     function() {
//         console.log("Time's up!");
//     },
//     seconds * 1000
// );
console.log("----------------------------------------------------------------------------------------------------");
//! КРОК-1.1.Створюємо простий таймер відкладеного старту
console.warn("КРОК-1.1.Створюємо простий таймер відкладеного старту:")
console.log(
    `%c
    const timeBeforeStart = 3000; //! час до старту

    function timeСount() {
        console.log(
            "Спрацювала функція timeСount() через",
            timeBeforeStart/1000,
            "секунди"
        );
    };
    
    const timerId = setTimeout(timeСount, timeBeforeStart);
    `,
    'color: blue; font-size: 18px',
);
console.log(". . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .");
// const timeBeforeStart = 5000; //! час до старту

// function timeСount() {
//     console.log("Спрацювала функція timeСount() через", timeBeforeStart/1000, "секунди");
// };

// const timerId = setTimeout(timeСount, timeBeforeStart);
console.log("----------------------------------------------------------------------------------------------------");
//! КРОК-1.2.Зробимо таймер прямого відліку
console.warn("КРОК-1.2.Зробимо таймер прямого відліку:")
console.log(
    `%c
    let timerId;
    const timeBeforeStart = 1000; //! час між відліками
    const iterations = 10; //! кількість ітерацій

    for (let index = 1; index <= iterations; index++) {
    timerId = setTimeout(
        function timeСount() {
            console.log(
                index,
                "Спрацювала функція timeСount()"
            );
        }, index * timeBeforeStart);
    };
    `,
    'color: blue; font-size: 18px',
);
console.log(". . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .");
// let timerId;
// const timeBeforeStart = 1000; //! час між відліками
// const iterations = 10; //! кількість ітерацій

// for (let index = 1; index <= iterations; index++) {
//     timerId = setTimeout(
//         function timeСount() {
//             console.log(index, "Спрацювала функція timeСount()");
//         }, index * timeBeforeStart);
// };
console.log("----------------------------------------------------------------------------------------------------");
//! Тема: об'єкти
const bread1 ="родиний";
const bread2 = "батон";
const bread3 = "хлібці смаженні";
const bread4 = "сонячний";
//! об'єкт - це "коробка" в якій зберігаються речі однієї категорії 
const breads = {
    bread1: "родиний",
    bread2:"батон",
    bread3:"хлібці смаженні"
}
console.log("breads:",breads);
console.log("breads.bread1:",breads.bread1);
console.log("breads.bread2:",breads.bread2);
delete breads.bread2
console.log("breads:",breads);
breads.bread4 = "сонячний";
console.log("breads:",breads);
breads.bread4 = "КиївХліб";
console.log("breads:",breads);
const starWars = {
heroes:[
    "Дарт Вейдер",
    "Граф Дуку",
    "Люк Скайвокер",
    "Лея Органа",
    "Обі-Ван Кенобі"
    ],
    getHeroes() {
        console.log("✅ Цей метод буде повертати всіх героїв");
        console.log("✅ heroes:", starWars.heroes);
    },
    addHeroes(heroName) {
        console.log("Цей метод додає героя");
        starWars.heroes.push(heroName);
        console.log("this:", this);
        this.heroes.push(heroName);
    },
};
starWars.getHeroes();
starWars.addHeroes("Падме Амідала");
starWars.getHeroes();

console.log("----------------------------------------------------------------------------------------------------");

//! КРОК-1.3.Зробимо таймер зворотного відліку
//  let timerId;
// const timeBeforeStart = 1000; //! час між відліками
// const iterations = 0; //! кількість ітерацій

// for (let index = 10; index >= iterations; index--) {
//     timerId = setTimeout(
//         function timeСount() {
//             console.log(index, "Спрацювала функція timeСount()");
//         }, (10 - index) * timeBeforeStart);
// };

//! КРОК-1.4.Додамо умову зупинення таймеру
// let timerId;
// const timeBeforeStart = 1000; //! час між відліками const iterations = 10; //! кількість ітерацій
// const iterations = 0; //! кількість ітерацій
// const stopCounter = 5; //! кількість ітерацій до зупинення таймеру

// for (let index = 10; index >= iterations; index--) {
//     timerId = setTimeout(
//         function timeСount() {
//             console.log(index, "Спрацювала функція timeСount()");
//         }, (10 - index) * timeBeforeStart);

//                     if(index === stopCounter){
//                 clearTimeout(timerId);
//                 console.log("Примусове зупинення таймера");
//             };
// };
// let timerId;
// const timeBeforeStart = 1000; //! час між відліками
// const iterations = 10; //! кількість ітерацій
// const stopCounter = 5; //! кількість ітерацій до зупинення таймеру
// for (let index = 0; index < iterations; index++) {
//     timerId = setTimeout(
//         function timeСount() {
//             console.log((iterations - index), "Спрацювала функція timeСount()", "id:", timerId);
//             // clearTimeout(timerId); //! ✅❌ Видалення таймера - таймер видаляється після кожної ітерації
//             //! Умова зупинення таймеру:
//             if (index + 1 === stopCounter) {
//                 console.error(`Інтервал з ідентифікатором ${timerId} зупинено на ${index + 1}-ій ітерації!`);
//             };
//         }, index * timeBeforeStart);
    
//     // clearTimeout(timerId); //! ❌✅ Видалення таймера - таймер не спрацюэ зовсім

//     //! Умова зупинення таймеру:
//     if (index === stopCounter) {
//         clearTimeout(timerId);
//         break;
//     };
// };

//! КРОК-1.5.Додамо кнопки керування стартом та зупиненням таймеру
// const startBtn = document.getElementById("start-set-timeout");
// const stopBtn = document.getElementById("stop-set-timeout");

// let timerId;
// const timeBeforeStart = 1000; //! час між відліками
// const iterations = 10; //! кількість ітерацій
// const stopCounter = 5; //! кількість ітерацій до зупинення таймеру

//! ✅ Старт таймера кнопкою
// startBtn.addEventListener("click", () => {
//     for (let index = 0; index < iterations; index++) {
//         timerId = setTimeout(
//             function timeСount() {
//                 console.log((iterations - index), "Спрацювала функція timeСount()", "id:", timerId);

//                 //! Умова зупинення таймеру:
//                 if (index + 1 === stopCounter) {
//                     console.error(`Інтервал з ідентифікатором ${timerId} зупинено на ${index + 1}-ій ітерації!`);
//                 };
//             }, index * timeBeforeStart);

//         //! Умова зупинення таймеру:
//         if (index === stopCounter) {
//             clearTimeout(timerId);
//             return;
//         };
//         console.log("❗️❗️❗️ Кінець роботи циклу...");
//     };
// });

// //! ❌ Видалення/зупинення таймера кнопкою - НЕМОЖЛИВО❗️❗️❗️
// stopBtn.addEventListener("click", () => {
//     clearTimeout(timerId);
//     console.warn(`Інтервал з ідентифікатором ${timerId} зупинено!`);
// });
//! КРОК-2.1.Створюємо простий таймер(секундомір) та зупинимо його через 5 інтервалів(1 інтервал = 1 секунді)
// const timeBetweenCounts = 1000; //! час між відліками
// const stopCounter = 5; //! кількість інтервалів до зупинення таймеру

// function createInterval() {
//     const intervalId = setInterval(() => {
//         console.log(`⏱️ Відлік часу в секундах, id: ${intervalId}`);
//     }, timeBetweenCounts);

//     //! Умова зупинення таймеру:
//     setTimeout(() => {
//         clearInterval(intervalId);
//         console.error(`❌⏱️ Інтервал з ідентифікатором ${intervalId} зупинено!`);
//     }, timeBetweenCounts * stopCounter + 10);
// };
// createInterval()

//! КРОК-2.2.Додамо лічильник часу та умову зупинення таймеру
// const timeBetweenCounts = 5000; //! час між відліками
// const stopCounter = 5; //! кількість інтервалів до зупинення таймеру - умова зупинення таймеру

// function createInterval() {
//     let count = 0; //! початковий стан лічильник часу
//     const intervalId = setInterval(() => {
//         count ++;
//         console.log(`⏱️ ${count} - відлік часу в секундах, id: ${intervalId}`);

//         //! Умова зупинення таймеру:
//         if (count >= stopCounter) {
//             clearInterval(intervalId);
//             console.error(`🛑⏱️ Інтервал з ідентифікатором ${intervalId} зупинено!`);
//         };
//     }, timeBetweenCounts);
// };

// createInterval();

//! КРОК-2.3.Додамо інтерфейс керування таймером: 
//!  - введення інтервалу до зупинення таймеру (у секундах),
//!  - кнопки старту та зупинення таймеру.

const timeBetweenCounts = 1000; //! час між відліками
// const stopCounter = 10;
let stopCounter = null; //! кількість інтервалів до зупинення таймеру - умова зупинення таймеру
let intervalId = null; //! для видалення ідентифікатора кнопкою

const infoInput = document.getElementById("info-input");
const input = document.getElementById("stop-counter"); 
const startBtn = document.getElementById("start-set-interval"); //! кнопка <Start setInterval>
const stopBtn = document.getElementById("stop-set-interval"); //! кнопка <Stop setInterval>

//! Звук
const alert = document.getElementById('alert');
const beep = document.getElementById('beep');
const stop = document.getElementById('stop');
const final = document.getElementById('final');

function createInterval() {
    let count = 0; //! початковий стан лічильник часу для ПРЯМОГО відліку
    // let count = 100; //? початковий стан лічильник часу для ЗВОРОТНОГО відліку
    const countInitialReverse = count; //?  для ЗВОРОТНОГО відліку

    let stopCounter = parseInt(input.value);
    if (!stopCounter || stopCounter < 1 || stopCounter > 20) {
        infoInput.style.color = "red"
        infoInput.textContent = "Введіть число від 1 до 20!";
        console.error("Введіть число від 1 до 20!");
        alert.play(); //! Звук
        return;
    };
    console.log("Кількість ітерацій до зупинення (stopCounter):", stopCounter); //!

    intervalId = setInterval(() => {
        count++; //! для ПРЯМОГО відліку
        console.log(`⏱️ ${count} - відлік часу в секундах, id: ${intervalId}`);
        // count--; //?  для ЗВОРОТНОГО відліку
        beep.play(); //! Звук

        //! Умова зупинення таймеру:
        if (count >= stopCounter) { //! для ПРЯМОГО відліку
        // if (count <= countInitialReverse - stopCounter) { //?  для зворотного відліку
            clearInterval(intervalId);
            console.error(`🚫⏱️ Інтервал з ідентифікатором ${intervalId} зупинено на ${stopCounter}-ій ітерації!`);
            setTimeout(() => stop.play(), 300); //! Звук
        };
    }, timeBetweenCounts);
};

//! Старт таймера кнопкою <Start setInterval>
startBtn.addEventListener("click", createInterval);

//! Видалення/зупинення таймера кнопкою <Stop setInterval>
stopBtn.addEventListener("click", () => {
    clearInterval(intervalId);
    console.warn(`⚠️⏱️Інтервал з ідентифікатором ${intervalId} зупинено повністю!`);
    setTimeout(() => final.play(), 300); //! Звук
});
console.log("----------------------------------------------------------------------------------------------------");