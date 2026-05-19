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
    `,"color: blue; font-size: 18px");console.log("--------------------------------------------------------------------------------------------------------------------------");s();function s(){console.log("HELLO!!!")}const c=function(){console.log("Hello2!!!")};c();const t=o=>o;console.log("test3:",t("HELLO3!!!"));const r=o=>o+"!!!";console.log("test4:",r("HELLO4"));//! Приклади використання синтаксису async/await
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
    `,"color: blue; font-size: 18px");console.log("--------------------------------------------------------------------------------------------------------------------------");
