//? ✴️ Проміс (Promise) – це Обіцянка.
//? ✳️ Розглянемо приклад обіцянки із життя.
//? Сім'я відпочиває на природі.
//? Вранці Тато йде на рибалку та обіцяє повернутися з рибою.
//? Мама чекає на нього до обіду і приймає таке рішення:
//? якщо Тато принесе рибу – то на обід буде рибна юшка.
//? Якщо Тато повернеться без риби, на обід Мама приготує борщ.
//? Обід відбудеться у будь-якому випадку, після того як повернеться Тато.
//? Після того, як Тато відправився на рибалку,
//? сім'я перебуває в стані очікування
//? і при цьому продовжує відпочивати – купатися, засмагати, грати в ігри.


//! Стани промісу
console.warn(`Стани промісу​​: \n ${((window.location.href).split('/')).slice(0, -2).join('/') + '/'}${"lesson-FE4_13/images/promise-states.png"}`);
//? ✴️ Promise (обіцянка, проміс) - об'єкт,
//? що представляє поточний стан асинхронної операції.
//? Це обгортка для значення, невідомого на момент створення промісу.
//? Дозволяє обробляти результати асинхронних операцій таким чином,
//? якби вони були синхронними: замість кінцевого результату
//? асинхронної операції, повертається своєрідна обіцянка
//? отримати результат у майбутньому.

//?     📌 Проміс може бути у трьох станах:
//? 🔸 Очікування (pending) - початковий стан під час створення промісу.
//? 🔸 Виконано (fulfilled) - операція виконана успішно з будь-яким результатом.
//? 🔸 Відхилено (rejected) - операція відхилена з помилкою.
console.log(
    `%c
        📌 Проміс може бути у трьох станах:
    🔸 Очікування (pending) - початковий стан під час створення промісу.
    🔸 Виконано (fulfilled) - операція виконана успішно з будь-яким результатом.
    🔸 Відхилено (rejected) - операція відхилена з помилкою.
    `,
    'color: blue; font-size: 18px',
);
//? ✴️ На момент створення проміс знаходиться в очікуванні (pending),
//? після чого може завершитися успішно (fulfilled),
//? повернувши результат (значення),
//? або з помилкою (rejected), повернувши причину.
//? Коли проміс переходить у стан fulfilled або rejected - це назавжди.

//?     📌 Відмінності промісу і callback-функці:
//? 🔸 Колбеки - це функції, обіцянки - це об'єкти.
//? 🔸 Колбеки передаються як аргументи з зовнішнього коду у внутрішній,
//?    а обіцянки повертаються з внутрішнього коду у зовнішній.
//? 🔸 Колбеки обробляють успішне або неуспішне завершення операції,
//?    обіцянки нічого не обробляють.
//? 🔸 Колбеки можуть обробляти декілька подій,
//?    обіцянки пов'язані тільки з однією подією.
console.log("--------------------------------------------------------------------------------------------------------------------------");


//! ❌ ПРИКЛАД-1: Необхідність використання промісів
console.warn("❌ ПРИКЛАД-1: Необхідність використання промісів:");
function fetchUserInfo1() {
    let userData1 = null;

    setTimeout(() => {
        // fetch() //! очікуємо дані з серверу
        const data1 = { id: 1, name: 'Alex' };
        // return data1; //! так не працює
        userData1 = data1;
        console.log("userData1:", userData1); //! {id: 1, name: 'Alex'}
    }, 1000);

    return userData1;
};

function run1() {
    const userInfo1 = fetchUserInfo1();
    console.log("userInfo1:", userInfo1); //! null
};

run1();
console.log("-----------------------------------------------------------------------------------");


//! ✅ ПРИКЛАД-2: Необхідність використання промісів
console.warn("✅ ПРИКЛАД-2: Необхідність використання промісів:");
function fetchUserInfo2(callback) {
    setTimeout(() => {
        // fetch() //! очікуємо дані з серверу
        const data2 = { id: 1, name: 'Alex' };
        callback(data2);
    }, 1000);
};

function run2() {
    fetchUserInfo2((userInfo2) => {
        console.log("userInfo2:", userInfo2); //! {id: 1, name: 'Alex'}
    });
};

run2();
console.log("-----------------------------------------------------------------------------------");


//! Створення промісу 
console.warn("Створення промісу:");
console.warn(`Створення промісу​​: \n ${((window.location.href).split('/')).slice(0, -2).join('/') + '/'}${"lesson-FE4_13/images/creating-promise.png"}`);

//? ✴️ Проміс створюється як екземпляр класу Promise,
//? який приймає функцію (executor) як аргумент
//? і відразу викликає її, ще до створення і повернення промісу.
console.log(
    `%c
    const promise = new Promise((resolve, reject) => {
        // Asynchronous operation
    });
    `,
    'color: blue; font-size: 18px',
);

//? ✴️ Функція executor повідомляє екземпляр (проміс),
//? коли і як операція, з якою він пов'язаний, буде завершена.
//? У ній можна виконувати будь-яку асинхронну операцію,
//? після завершення якої, потрібно викликати:
//? resolve() - у разі успішного виконання (стан fulfilled),
//? або reject() - у разі помилки (стан rejected).
//? Значення, що повертається цій функції, ігнорується.
//?     📌:
//? 🔸 resolve(value) - функція для виклику у разі успішної операції.
//?    Переданий їй аргумент буде значенням виконаного промісу.
//? 🔸 reject(error) - функція для виклику у разі помилки.
//?    Переданий їй аргумент буде значенням відхиленого промісу.

//todo: Змініть значення змінної isSuccess, щоб викликати resolve або reject:
// const isSuccess = true; //* ✅
// const isSuccess = false; //! ❌

// const promise = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         if (isSuccess) {
//             resolve("✅ Success! Value passed to resolve function");
//         } else {
//             reject("❌ Error! Error passed to reject function");
//         }
//     }, 2000);
// });

// //todo ⏳
// console.log("promise ⏳:", promise); //! Promise {<pending>}

//* ✅ або ❌
// setTimeout(() => {
//         console.log("promise_setTimeout:", promise);
//     //* Promise {<fulfilled>: '✅ Success! Value passed to resolve function'}
//     //? або
//     //! Promise {<rejected>: '❌ Error! Error passed to reject function'}
// }, 2500);

//? ✳️ У змінну promise буде записаний проміс (об'єкт) у стані pending, 
//? а через дві секунди, щойно буде викликаний resolve() або reject(), 
//? проміс перейде у стан fulfilled або rejected, і ми зможемо його обробити.
console.log("-----------------------------------------------------------------------------------");


//! Метод then()
console.warn(`Метод then()​​: \n ${((window.location.href).split('/')).slice(0, -2).join('/') + '/'}${"lesson-FE4_13/images/method-then.png"}`);
//? ✴️ Код, якому потрібно зробити щось асинхронно,
//? створює обіцянку і повертає її. Зовнішній код,
//? отримавши обіцянку, навішує на неї обробники.
//? Після завершення процесу асинхронний код переводить
//? обіцянку у стан fulfilled або rejected,
//? і автоматично викликаються обробники у зовнішньому коді.
//? ✴️ Метод then() приймає два аргументи 
//? - callback-функції, які будуть викликані, 
//? коли проміс змінить свій стан. 
//? Результат промісу, значення або помилку, 
//? вони отримають як аргументи.
console.log(
    `%c
    const promise = new Promise((resolve, reject) => {
      // Asynchronous operation
    });

    promise.then(onResolve, onReject);
    `,
    'color: blue; font-size: 18px',
);
//?     📌:
//? 🔸 onResolve(value) - буде викликана у разі успішного
//?    виконання промісу і отримає його результат як аргумент.
//? 🔸 onReject(error) - буде викликана у разі виконання
//?    промісу з помилкою і отримає її як аргумент.

//? ✳️ Якщо функції onResolve і onReject містять складну логіку,
//? їх, для зручності, оголошують як зовнішні функції
//? і передають в метод then() за ім'ям.
console.log("-----------------------------------------------------------------------------------");

//! ПРИКЛАД використання методу then()
// console.warn("ПРИКЛАД використання методу then():");
// //todo: Змініть значення змінної isSuccess, щоб викликати resolve або reject:
// const isSuccess = true; //* ✅
// // const isSuccess = false; //! ❌

// const promise = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         if (isSuccess) {
//             resolve("✅ Success! Value passed to resolve function");
//         } else {
//             reject("❌ Error! Error passed to reject function");
//         }
//     }, 2000);
// });

// //todo ⏳
// console.log("promise ⏳:", promise); //! Promise {<pending>}
// console.log(". . . . . . . . . . . . . . . . . .");

// promise.then(
//     //todo: onResolve виконається третім етапом або не виконається взагалі
//     value => {
//         console.log("Виклик onResolve всередині promise.then():");
//         console.log("promise_onResolve:", promise); //* Promise {<fulfilled>: '✅ Success! Value passed to resolve function'}
//         console.log("✅ value:", value); //* "✅ Success! Value passed to resolve function"
//     },
//     //todo: onReject виконається третім етапом або не виконається взагалі
//     error => {
//         console.log("Виклик onReject всередині promise.then():");
//         console.log("promise_onReject:", promise); //! Promise {<rejected>: '❌ Error! Error passed to reject function'}
//         console.log("❌ error:", error); //! "❌ Error! Error passed to reject function"
//     }
// );
console.log("-----------------------------------------------------------------------------------");


//! Метод catch()
console.warn(`Метод catch()​​: \n ${((window.location.href).split('/')).slice(0, -2).join('/') + '/'}${"lesson-FE4_13/images/method-catch.png"}`);
//? ✴️ На практиці в методі then() обробляють
//? тільки успішне виконання промісу,
//? а помилку його виконання у спеціальному
//? методі catch() для «відловлювання» помилок.
//? ✴️ Колбек-функція буде викликана у разі виконання
//? промісу з помилкою, і отримає її як аргумент.
console.log(
    `%c
    const promise = new Promise((resolve, reject) => {
      // Asynchronous operation
    });

    promise.catch(error => {
      // Promise rejected
    });
    `,
    'color: blue; font-size: 18px',
);
console.log("-----------------------------------------------------------------------------------");


//! ПРИКЛАД використання методу catch()
// console.warn("ПРИКЛАД використання методу catch():");
// //todo: Змініть значення змінної isSuccess, щоб викликати resolve або reject:
// const isSuccess  = true; //* ✅
// // const isSuccess = false; //! ❌

// const promise = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         if (isSuccess) {
//             resolve("✅ Success! Value passed to resolve function");
//         } else {
//             reject("❌ Error! Error passed to reject function");
//         }
//     }, 2000);
// });

// //todo ⏳
// console.log("promise ⏳:", promise); //! Promise {<pending>}
//     //todo: Виконається третім етапом якщо буде стан "Виконано (fulfilled)" або не виконається взагалі
// promise.then(value => {
//         console.log("Спрацював метод then():");
//         console.log("promise_then():", promise); //* Promise {<fulfilled>: '✅ Success! Value passed to resolve function'}
//         console.log("✅ value:", value); //* "✅ Success! Value passed to resolve function"
//     });
//     //todo: Виконається третім етапом якщо буде стан "Відхилено (rejected)" або не виконається взагалі
//     promise.catch(error => {
//         console.log("Спрацював метод catch():");
//         console.log("promise_catch():", promise); //! Promise {<rejected>: '❌ Error! Error passed to reject function'}
//         console.log("❌ error:", error); //! "❌ Error! Error passed to reject function"
//     });
// console.log("-----------------------------------------------------------------------------------");


//! Метод finally()
console.warn(`Метод finally()​​: \n ${((window.location.href).split('/')).slice(0, -2).join('/') + '/'}${"lesson-FE4_13/images/method-finally.png"}`);
//? ✴️ Цей метод може бути корисним,
//? якщо необхідно виконати код після того,
//? як обіцянка буде дозволена (fulfilled або rejected),
//? незалежно від результату.
//? Дозволяє уникнути дублювання коду в обробниках then() і catch().
//? ✴️ Колбек-функція не отримає жодних аргументів, 
//? оскільки неможливо визначити - виконана чи відхилена обіцянка. 
//? Тут буде виконуватися код, який необхідно запустити в будь-якому разі.
console.log(
    `%c
    const promise = new Promise((resolve, reject) => {
      // Asynchronous operation
    });

    promise.finally(() => {
      // Promise fulfilled or rejected
    });
    `,
    'color: blue; font-size: 18px',
);
console.log("-------------------------------------------------------------------------------------");


//! ПРИКЛАД використання методу finally()
console.warn("ПРИКЛАД використання методу finally():");
//todo: Змініть значення змінної isSuccess, щоб викликати resolve або reject:
// const isSuccess = true; //* ✅
// const isSuccess = false; //! ❌

// const promise = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         if (isSuccess) {
//             resolve("✅ Success! Value passed to resolve function");
//         } else {
//             reject("❌ Error! Error passed to reject function");
//         }
//     }, 2000);
// });

// //todo ⏳
// console.log("promise ⏳:", promise); //! Promise {<pending>}
//  //todo: Виконається третім етапом якщо буде стан "Виконано (fulfilled)" або не виконається взагалі
// promise.then(value => {
//         console.log("Спрацював метод then():");
//         console.log("promise_then():", promise); //* Promise {<fulfilled>: '✅ Success! Value passed to resolve function'}
//         console.log("✅ value:", value); //* "✅ Success! Value passed to resolve function"
//         console.log("⚠️ Promise settled...")
//     })
//     //todo: Виконається третім етапом якщо буде стан "Відхилено (rejected)" або не виконається взагалі
//     promise.catch(error => {
//         console.log("Спрацював метод catch():");
//         console.log("promise_catch():", promise); //! Promise {<rejected>: '❌ Error! Error passed to reject function'}
//         console.log("❌ error:", error); //! "❌ Error! Error passed to reject function"
//         console.log("⚠️ Promise settled...")
//     })
//     //todo: Виконається ОБОВ'ЯЗКОВО четвертим етапом незалежно від стану (fulfilled або rejected)
//     // promise.finally(() => console.log("⚠️ Promise settled...")); //todo: "⚠️ Promise settled..."
// console.log("-------------------------------------------------------------------------------------");

//! Ланцюжки промісів
console.warn(`Ланцюжки промісів​​: \n ${((window.location.href).split('/')).slice(0, -2).join('/') + '/'}${"lesson-FE4_13/images/promise-chain.png"}`);
//? ✴️ Метод then() результатом свого виконання повертає
//? ще один проміс, значенням якого буде те,
//? що поверне його callback-функція onResolve.
//? Це дозволяє будувати асинхронні ланцюжки з промісів.
//? ✴️ Оскільки метод then() повертає проміс,
//? перед його виконанням може минути деякий час,
//? тому ❗️ЧАСТИНА ЛАНЦЮЖКА, ЩО ЗАЛИШИЛАСЯ, БУДЕ ЧЕКАТИ❗️.
//? У разі виникнення помилки в будь-якому місці ланцюжка,
//? виконання всіх наступних then() скасовується,
//? а ❗️управління передається методу catch()❗️. 
//? Тому він знаходиться в кінці ланцюжка промісів.
const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve(5);
    }, 2000);
});

promise
    .then(value => {
        console.log("value_then-1:", value); //! 5
        return value * 2;
    })
    .then(value => {
        console.log("value_then-2:", value); //! 10
        return value * 3;
    })
    .then(value => {
        console.log("value_then-3:", value); //! 30
    })
    .catch(error => {
        console.log(error);
    })
    .finally(() => {
        console.log("Final task_метод finally()");
        console.log("--------------------------------------------------------------");
    });
// console.log("--------------------------------------------------------------");
