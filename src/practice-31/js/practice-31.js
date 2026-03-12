//! Статичні методи класу Promise
//? ✳️ У класі Promise існують 6 статичних методів.
//? Давайте розглянемо варіанти їх використання.
//? В одному випадку необхідно дочекатися виконання усіх відразу,
//? і тільки потім обробляти їх результат,
//? а в іншому — достатньо дочекатися виконання будь-якого,
//? проігнорувавши інші тощо.
//? Саме для цих випадків клас Promise має статичні методи
//? для роботи з одним або групою промісів.


//! Promise.all()
//? ✴️ Приймає масив промісів, очікує їх виконання і повертає проміс.
//? Якщо ❗️ВСІ❗️ проміси виконаються ❗️УСПІШНО❗️, проміс, що повертається,
//? перейде у стан fulfilled, а його значенням
//? буде масив результатів виконання кожного промісу.
//? У разі, коли ❗️ХОЧА Б ОДИН❗️ з промісів буде відхилений,
//? проміс, що повертається, перейде у стан rejected,
//? а його значенням буде помилка.
console.log(
    `%c
    Promise.all([promise1, promise2, promise3, ...])
    `,
    'color: blue; font-size: 18px',
);
//? ✳️ Напишемо функцію, яка приймає текст для resolve()
//? і затримку в мілісекундах,
//? а результатом свого виконання повертає проміс.
//? Потім створимо два проміси з різним часом затримки.
//? ✳️ Колбек методу then() буде викликаний через три секунди, 
//? тобто коли виконається проміс promiseB. 
//? Проміс promiseA виконається через одну секунду 
//? і просто чекатиме. 
//? Якщо будь-який з промісів буде відхилений, 
//? то буде викликаний колбек методу catch().
// const delayTime = 3000; //* ✅
// const delayTime = 2500; //! ❌

// const makePromise = (text, delay) => {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             if (delay <= delayTime) {
//                 resolve(text);
//             } else {
//                 reject("❌ Error!");
//             };
//         }, delay)  
//     });
// };

// // todo: var.1
// const promiseA = makePromise("promiseA value", 1000);
// const promiseB = makePromise("promiseB value", 3000);

// // todo: var.2
// // const promiseA = makePromise("promiseA value", 3000);
// // const promiseB = makePromise("promiseB value", 1000);

// //*
// // Promise.all([promiseA, promiseB])
// //     .then(value => console.log("✅ Promise.all([promiseA, promiseB]).then(value):", value)) //! ["promiseA value", "promiseB value"] (var.1, var.2)
// //     .catch(error => console.log(error)); //! ❌ Error!(var.1, var.2)

// // //todo: Виміряємо час роботи промісу:
// function promiseAll() {
// const start = Date.now();
// console.log("start:",start);
//     Promise.all([promiseA, promiseB])
//     .then(value => console.log("✅ Promise.all([promiseA, promiseB]).then(value):", value)) //! ["promiseA value", "promiseB value"] (var.1, var.2)
//     .catch(error => console.log(error)) //! ❌ Error!(var.1, var.2)
//     .finally(() => {
//         const end = Date.now()
//         const finalTime = end - start;
//         console.log("Time:",finalTime,"ms");
//     })
// };
// promiseAll();


//! Promise.race()
//? ✴️ Повертає виконаний або відхилений проміс,
//? залежно від того, з яким результатом завершиться ❗️«НАШВИДШИЙ»❗️ 
//? з переданих промісів, зі значенням або причиною його відхилення.
console.log(
    `%c
    Promise.race([promise1, promise2, promise3, ...])
    `,
    'color: blue; font-size: 18px',
);
//? ✳️ Коли хоча б один проміс з масиву виконається
//? або буде відхилений, проміс, що повертається,
//? перейде у стан resolved або rejected,
//? а всі інші будуть відкинуті.
// const delayTime = 3000; //* ✅
// const delayTime = 2500; //! ✅❌
// const delayTime = 500; //! ❌❌

// const makePromise = (text, delay) => {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             if (delay <= delayTime) {
//                 resolve(text);
//             } else {
//                 // reject("❌ Error!");
//                 reject({error: "❌ Error!", text});
//             };
//         }, delay)
//     });
// };

// // todo: var.1
// // const promiseA = makePromise("promiseA value", 1000);
// // const promiseB = makePromise("promiseB value", 3000);

// // todo: var.2
// const promiseA = makePromise("promiseA value", 3000);
// const promiseB = makePromise("promiseB value", 1000);

// //*
// // Promise.race([promiseA, promiseB])
// //     .then(value => console.log("✅ Promise.race([promiseA, promiseB]).then(value):", value)) //! "promiseA value"(var.1) або "promiseB value"(var.2)
// //     .catch(error => console.log(error)); //! "{error: '❌ Error!', text: 'promiseA value'}"(var.1) або "{error: '❌ Error!', text: 'promiseB value'}"(var.2)

//     function promiseAll() {
//  const start = Date.now();
//  console.log("start:",start);
//      Promise.race([promiseA, promiseB])
//      .then(value => console.log("✅ Promise.all([promiseA, promiseB]).then(value):", value)) //! ["promiseA value", "promiseB value"] (var.1, var.2)
//      .catch(error => console.log(error)) //! ❌ Error!(var.1, var.2)
//      .finally(() => {
//          const end = Date.now()
//         const finalTime = end - start; 
//          console.log("Time:",finalTime,"ms");
//     })
//  };
//  promiseAll();

//! Promise.any()
//? ✴️ Схожий на Promise.race, але чекає лише
//? на ❗️ПЕРШИЙ УСПІШНО ВИКОНАНИЙ перший❗️ проміс
//? і отримує його результат.
//? Якщо ж всі надані проміси завершуються з помилкою,
//? то повертається проміс, що завершується з помилкою
//? за допомогою AggregateError — спеціального об’єкта помилки
// (https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/AggregateError), 
//? який зберігає всі помилки промісів у своїй властивості errors.
console.log(
    `%c
    Promise.any([promise1, promise2, promise3, ...])
    `,
    'color: blue; font-size: 18px',
);
//? ✳️ Коли хоча б один проміс з масиву виконається
//? або буде відхилений, проміс, що повертається,
//? перейде у стан resolved або rejected,
//? а всі інші будуть відкинуті.
// const delayTime = 3000; //* ✅
// const delayTime = 2500; //! ✅❌
// const delayTime = 500; //! ❌❌

// const makePromise = (text, delay) => {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             if (delay <= delayTime) { 
//                 resolve(text);
//             } else {
//                 reject(new Error("❌ Помилка!"));
//             };
//         }, delay)
//     });
// };

// // todo: var.1
// // const promiseA = makePromise("promiseA value", 1000);
// // const promiseB = makePromise("promiseB value", 3000);

// // todo: var.2
// const promiseA = makePromise("promiseA value", 3000);
// const promiseB = makePromise("promiseB value", 1000);

// //*
// Promise.any([promiseA, promiseB])
//     .then(value => console.log("✅ Promise.any([promiseA, promiseB]).then(value):", value)) //! "promiseA value"(var.1) або "promiseB value"(var.2)
//     .catch(error => console.log(error.errors[0])); //! ❌ Error: ❌ Помилка! (var.1, var.2)

//! new Promise ----> Promise.resolve() і Promise.reject()
console.warn("new Promise ----> Promise.resolve() і Promise.reject():");
//? ✴️ Статичні методи для створення промісів,
//? що миттєво успішно виконуються або відхиляються.
//? Працюють аналогічно new Promise() за винятком
//? можливості вказати затримку, але мають коротший синтаксис.
//* ✅ Fulfilled promise
new Promise(resolve => resolve("✅ SUCCESS value from new Promise"))
    .then(value =>
    console.log("new Promise:", value)
);

Promise.resolve("✅✅ SUCCESS value from Promise.resolve")
    .then(value => {
        console.log("Promise.resolve:", value);
        console.log("typeof Promise.resolve:", typeof value); //! string
        console.log(". . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .");
    }
);

//! ❌ Rejected promise
new Promise((resolve, reject) => reject("❌ ERROR from new Promise"))
    .catch(error =>
    console.error("new Promise:", error)
);

Promise.reject("❌❌ ERROR from from Promise.resolve")
    .catch(error => {
        console.error("Promise.resolve:", error);
        console.log("------------------------------------------------------------------------");
    });
// console.log("------------------------------------------------------------------------");
//! Код до рефакторингу
//? ✳️ Ці методи використовуються для промісифікаціі функцій,
//? коли необхідно побудувати ланцюжок промісів
//? і вже є початкове значення.
//! Виконаємо рефакторинг наступного коду:
const makeGreeting = guestName => {
    if (guestName === "" || guestName === undefined) {
        return {
            success: false,
            message: "❌ Guest name must not be empty",
        };
    };

    return {
        success: true,
        message: `✅ Welcome ${guestName}`,
    };
};

//* ✅
setTimeout(() => {
    console.warn("Код до рефакторингу:");
    const result = makeGreeting("Mango");
    console.log("result:", result); //! {success: true, message: '✅ Welcome Mango'}

    if (result.success) {
        console.log(result.message); //* ✅ Welcome Mango
    } else {
        console.error(result.message);
    };
}, 0);

//! ❌
setTimeout(() => {
    const result = makeGreeting("");
    console.log("result:", result); //! {success: false, message: '❌ Guest name must not be empty'}

    if (result.success) {
        console.log(result.message);
    } else {
        console.error(result.message); //! ❌ Guest name must not be empty
        console.log("------------------------------------------------------------------------");
    };
}, 0);
// console.log("------------------------------------------------------------------------");
