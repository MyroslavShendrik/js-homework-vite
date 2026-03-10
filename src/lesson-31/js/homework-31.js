// //todo: Завдання-1 (task-1)
// //*
// //? Напиши функцію delay(ms), яка повертає проміс,
// //? що переходить в стан "resolved" через ms мілісекунд.
// //? Значенням промісу, яке виповнилося має бути
// //? та кількість мілісекунд,
// //? яку передали під час виклику функції delay.
// //! Код виконаного завдання
// const delay = ms => {
//     //! Твій код
// };

// const logger1 = time => console.log(`Resolved after ${time}ms`);

// //! Виклич функції для перевірки
// delay(2000).then(logger1); //! Resolved after 2000ms
// delay(1000).then(logger1); //! Resolved after 1000ms
// delay(1500).then(logger1); //! Resolved after 1500ms




// //todo: Завдання-2 (task-2)
// //*
// //? Перепиши функцію toggleUserState() так, щоб
// //? вона не використовувала callback-функцію callback,
// //? а приймала всього два параметри
// //? allUsers і userName і повертала проміс.
// //! Код виконаного завдання
// const users = [
//     { name: 'Mango', active: true },
//     { name: 'Poly', active: false },
//     { name: 'Ajax', active: true },
//     { name: 'Lux', active: false },
// ];

// const toggleUserState = (allUsers, userName, callback) => {
//     const updatedUsers = allUsers.map(user =>
//         user.name === userName ? { ...user, active: !user.active } : user,
//     );

//     callback(updatedUsers);
// };

// const logger2 = updatedUsers => console.table(updatedUsers);

// //! Зараз працює так:
// toggleUserState(users, 'Mango', logger2);
// toggleUserState(users, 'Lux', logger2);

// //! Повинно працювати так:
// toggleUserState(users, 'Mango').then(logger2);
// toggleUserState(users, 'Lux').then(logger2);




// //todo: Завдання-3 (task-3)
// //*
// //? Перепиши функцію makeTransaction() так, щоб
// //? вона не використовувала callback-функції
// //? onSuccess і onError,
// //? а приймала всього один параметр transaction
// //? і повертала проміс.
// const randomIntegerFromInterval = (min, max) => {
//     return Math.floor(Math.random() * (max - min + 1) + min);
// };

// const makeTransaction = (transaction, onSuccess, onError) => {
//     const delay = randomIntegerFromInterval(200, 500);

//     setTimeout(() => {
//         const canProcess = Math.random() > 0.3;

//         if (canProcess) {
//             onSuccess(transaction.id, delay);
//         } else {
//             onError(transaction.id);
//         }
//     }, delay);
// };

// const logSuccess = (id, time) => {
//     console.log(`Transaction ${id} processed in ${time}ms`);
// };

// const logError = id => {
//     console.warn(`Error processing transaction ${id}. Please try again later.`);
// };

// //! Зараз працює так:
// makeTransaction({ id: 70, amount: 150 }, logSuccess, logError);
// makeTransaction({ id: 71, amount: 230 }, logSuccess, logError);
// makeTransaction({ id: 72, amount: 75 }, logSuccess, logError);
// makeTransaction({ id: 73, amount: 100 }, logSuccess, logError);

// //! Повинно працювати так:
// makeTransaction({ id: 70, amount: 150 })
//     .then(logSuccess)
//     .catch(logError);

// makeTransaction({ id: 71, amount: 230 })
//     .then(logSuccess)
//     .catch(logError);

// makeTransaction({ id: 72, amount: 75 })
//     .then(logSuccess)
//     .catch(logError);

// makeTransaction({ id: 73, amount: 100 })
//     .then(logSuccess)
//     .catch(logError);є



// //todo: Завдання-1 (task-1)
// Напиши функцію delay(ms), яка повертає проміс,
// що переходить в resolved через ms мілісекунд.

const delay = ms => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(ms);
        }, ms);
    });
};

const logger1 = time => console.log(`Resolved after ${time}ms`);

// Перевірка
delay(2000).then(logger1);
delay(1000).then(logger1);
delay(1500).then(logger1);



// //todo: Завдання-2 (task-2)
// Перепиши toggleUserState щоб вона повертала Promise

const users = [
    { name: 'Mango', active: true },
    { name: 'Poly', active: false },
    { name: 'Ajax', active: true },
    { name: 'Lux', active: false },
];

const toggleUserState = (allUsers, userName) => {
    return new Promise((resolve) => {

        const updatedUsers = allUsers.map(user =>
            user.name === userName
                ? { ...user, active: !user.active }
                : user
        );

        resolve(updatedUsers);
    });
};

const logger2 = updatedUsers => console.table(updatedUsers);

// Перевірка
toggleUserState(users, 'Mango').then(logger2);
toggleUserState(users, 'Lux').then(logger2);




// //todo: Завдання-3 (task-3)
// Перепиши makeTransaction щоб вона повертала Promise

const randomIntegerFromInterval = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1) + min);
};

const makeTransaction = (transaction) => {

    const delay = randomIntegerFromInterval(200, 500);

    return new Promise((resolve, reject) => {

        setTimeout(() => {

            const canProcess = Math.random() > 0.3;

            if (canProcess) {
                resolve([transaction.id, delay]);
            } else {
                reject(transaction.id);
            }

        }, delay);

    });
};

const logSuccess = ([id, time]) => {
    console.log(`Transaction ${id} processed in ${time}ms`);
};

const logError = id => {
    console.warn(`Error processing transaction ${id}. Please try again later.`);
};

// Перевірка
makeTransaction({ id: 70, amount: 150 })
    .then(logSuccess)
    .catch(logError);

makeTransaction({ id: 71, amount: 230 })
    .then(logSuccess)
    .catch(logError);

makeTransaction({ id: 72, amount: 75 })
    .then(logSuccess)
    .catch(logError);

makeTransaction({ id: 73, amount: 100 })
    .then(logSuccess)
    .catch(logError);