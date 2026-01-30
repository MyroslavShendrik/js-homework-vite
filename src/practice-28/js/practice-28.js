//! Приклад-1: setTimeout()
console.warn("Приклад-1: setTimeout():");
const button = document.querySelector(".btn-set-interval");
// button.addEventListener("click", onClick); //! буде помилка 
const onClick = () => {
    const timerId = setTimeout(() => {
        console.log("Реакція на клік в кнопку <Click setInterval> через 5 секунд");
    }, 5000);

    console.log("timerId:", timerId);

    //! Що спрацює раніше: console.warn() або setTimeout(() => {console.log()}, 5000);
    // alert("⏳ Підтвердіть продовження віконання коду!"); //!
    // console.warn("✅ Підтвердено продовження віконання коду!"); //!
};

button.addEventListener("click", onClick);
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
console.warn("Приклад-1: setInterval():");
const startBtn = document.querySelector(".btn-start");
const stopBtn = document.querySelector(".btn-stop");
let intervalId = null;

//! ✅ Старт таймера кнопкою
startBtn.addEventListener("click", () => {
    let counter = 0;
    intervalId = setInterval(() => {
        counter++; //! лічильник часу
        console.log(`${counter} Генерація випадкового числа: ${Math.random()}, id: ${intervalId}`);
        // clearTimeout(intervalId); //! ✅❌ Видалення/зупинення таймера

        //! ✅❌ Видалення/зупинення таймера за умовою
        const stopCounter = 10;
        if (counter === stopCounter) {
            clearTimeout(intervalId);
            console.error(`Інтервал з ідентифікатором ${intervalId} зупинено на ${stopCounter}-ій секунді!`);
        };
    }, 1000);
});

//! ✅❌ Видалення/зупинення таймера кнопкою
stopBtn.addEventListener("click", () => {
    clearInterval(intervalId);
    console.warn(`Інтервал з ідентифікатором ${intervalId} зупинено!`);
});

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