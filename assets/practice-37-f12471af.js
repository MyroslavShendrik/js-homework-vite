import"./modulepreload-polyfill-3cfb730f.js";//! Асинхронні функції
console.warn("КРОК-1.Підтвердження прав доступу до сторінки:");console.log(`%c
    const fetchFriends = () => {
        return fetch("my-api.com/me").then(token => {
            console.log(token);
        });
    };
    `,"color: blue; font-size: 18px");console.warn("КРОК-2.Запит профілю користувача:");let e="${token}";//! для вірного відображення в console.log()
console.log(`%c
    const fetchFriends = () => {
        return fetch("my-api.com/me")
            .then(token => {
                return fetch('my-api.com/profile?token=${e}');
        })
        .then(user => {
            console.log(user.id);
        });
    };
    `,"color: blue; font-size: 18px");console.warn("КРОК-3.Запит списку друзів:");let n={id:"${user.id}"};//! для вірного відображення в console.log()
console.log(`%c
    const fetchFriends = () => {
        return fetch("my-api.com/me")
            .then(token => {
                return fetch('my-api.com/profile?token=${e}');
        })
        .then(user => {
            return fetch('my-api.com/users/${n.id}/friends');
        });
    };

    fetchFriends()
        .then(friends => console.log(friends))
        .catch(error => console.error(error));
    `,"color: blue; font-size: 18px");console.warn("КРОК-4.Код з асинхронними функціями:");console.log(`%c
    const fetchFriends = async () => {
        const token = await fetch("my-api.com/me");
        const user = await fetch('my-api.com/profile?token=${e}');
        const friends = await fetch('my-api.com/users/${n.id}/friends');
        return friends;
    };

    fetchFriends()
        .then(friends => console.log(friends))
        .catch(error => console.error(error));
        `,"color: darkgreen; font-size: 18px");console.log("-------------------------------------------------------------------------------------------------------------------");//! Синтаксис async/await
console.warn("Синтаксис async/await:");console.log(`%c
    const fetchUsers = async () => {
      const response = await fetch("https://jsonplaceholder.typicode.com/users");
      const users = await response.json();
      return users;
    };

    fetchUsers().then(users => console.log(users));
    `,"color: blue; font-size: 18px");console.log("--------------------------------------------------------------------------------------------------------------------------");//! Використання синтаксису async/await
console.warn("Використання синтаксису async/await:");console.log(`%c
    🔸 Оператор await можна використовувати тільки у тілі асинхронної (async) функції.
    🔸 Оператор await призупиняє функцію, доки проміс не виконається (fulfilled або rejected).
    🔸 Якщо проміс виконався успішно (fulfilled), оператор await поверне його значення.
    🔸 Якщо проміс був відхилений з помилкою (rejected), оператор await викине помилку.
    🔸 Асинхронна функція завжди повертає проміс, тому будь-яке значення, що повертається, буде його значенням.
    🔸 Якщо не вказати значення, що повертається, повернеться проміс зі значенням undefined.
    `,"color: blue; font-size: 18px");console.log("--------------------------------------------------------------------------------------------------------------------------");c();function c(){console.log("HELLO!!!")}const t=function(){console.log("Hello2!!!")};t();const r=o=>o;console.log("test3:",r("HELLO3!!!"));const l=o=>o+"!!!";console.log("test4:",l("HELLO4"));//! Приклади використання синтаксису async/await
console.warn("Приклади використання синтаксису async/await:");console.log(`%c
    //! Function declaration
    async function foo() {
      // ...
    }


    //! Functional expression
    const foo = async function () {
      // ...
    };


    //! Arrow function
    const foo = async () => {
      // ...
    };


    //! Object method
    const user = {
      async foo() {
        // ...
      },
    };


    //! Class method
    class User {
      async foo() {
        // ...
      }
    }
    `,"color: blue; font-size: 18px");console.log("--------------------------------------------------------------------------------------------------------------------------");//! ✳️ Синтаксис async/await:
const a=async()=>await(await fetch("https://jsonplaceholder.typicode.com/users")).json();a().then(o=>console.log("users:",o)).finally(()=>console.log("--------------------------------------------------------------------------------------------------------------------------"));//! users: (10)[{… }, {… }, {… }, {… }, {… }, {… }, {… }, {… }, {… }, {… }]
//! Обробка помилок в async/await. Варіант №1.
console.warn(`Варіант №1✅. 
  Якщо результат асинхронної функції (проміс) 
  НЕ використовується у зовнішньому коді:`);console.log(`%c
    const fetchUsers = async () => {
        try {
            const response = await fetch("https://jsonplaceholder.typicode.com/users");
            const users = await response.json();
            console.log("users:", users);
        } catch (error) {
            console.log(error.message);
        }
    };

    fetchUsers();
    `,"color: blue; font-size: 18px");const i=async()=>{try{const s=await(await fetch("https://jsonplaceholder.typicode.com/users")).json();console.log("users:",s),console.log("----------------------------------------------------------------------------------------------------------------------------------")}catch(o){console.log(o.message)}};i();
