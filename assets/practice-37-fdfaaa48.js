import"./modulepreload-polyfill-3cfb730f.js";//! Асинхронні функції
console.warn("КРОК-1.Підтвердження прав доступу до сторінки:");console.log(`%c
    const fetchFriends = () => {
        return fetch("my-api.com/me").then(token => {
            console.log(token);
        });
    };
    `,"color: blue; font-size: 18px");console.warn("КРОК-2.Запит профілю користувача:");let i="${token}";//! для вірного відображення в console.log()
console.log(`%c
    const fetchFriends = () => {
        return fetch("my-api.com/me")
            .then(token => {
                return fetch('my-api.com/profile?token=${i}');
        })
        .then(user => {
            console.log(user.id);
        });
    };
    `,"color: blue; font-size: 18px");console.warn("КРОК-3.Запит списку друзів:");let f={id:"${user.id}"};//! для вірного відображення в console.log()
console.log(`%c
    const fetchFriends = () => {
        return fetch("my-api.com/me")
            .then(token => {
                return fetch('my-api.com/profile?token=${i}');
        })
        .then(user => {
            return fetch('my-api.com/users/${f.id}/friends');
        });
    };

    fetchFriends()
        .then(friends => console.log(friends))
        .catch(error => console.error(error));
    `,"color: blue; font-size: 18px");console.warn("КРОК-4.Код з асинхронними функціями:");console.log(`%c
    const fetchFriends = async () => {
        const token = await fetch("my-api.com/me");
        const user = await fetch('my-api.com/profile?token=${i}');
        const friends = await fetch('my-api.com/users/${f.id}/friends');
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
    `,"color: blue; font-size: 18px");console.log("--------------------------------------------------------------------------------------------------------------------------");h();function h(){console.log("HELLO!!!")}const d=function(){console.log("Hello2!!!")};d();const y=s=>s;console.log("test3:",y("HELLO3!!!"));const m=s=>s+"!!!";console.log("test4:",m("HELLO4"));//! Приклади використання синтаксису async/await
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
const g=async()=>await(await fetch("https://jsonplaceholder.typicode.com/users")).json();g().then(s=>console.log("users1:",s)).finally(()=>console.log("--------------------------------------------------------------------------------------------------------------------------"));//! users: (10)[{… }, {… }, {… }, {… }, {… }, {… }, {… }, {… }, {… }, {… }]
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
    `,"color: blue; font-size: 18px");const w=async()=>{try{const o=await(await fetch("https://jsonplaceholder.typicode.com/users")).json();console.log("users:",o),console.log("----------------------------------------------------------------------------------------------------------------------------------")}catch(s){console.log("error:",s)}};w();console.log("----------------------------------------------------------------------------------------------------------------------------------");console.log("1");console.log("2");console.log("3");console.log("4");//! Обробка помилок в async/await. Варіант №2.
setTimeout(()=>{console.warn(`Варіант №2✅. 
  Якщо результат асинхронної функції (проміс) 
  використовується у зовнішньому коді:`),console.log(`%c
    const fetchUsers = async () => {
        const response = await fetch("https://jsonplaceholder.typicode.com/users");
        const users = await response.json();
        return users;
    };

    fetchUsers()
        .then(users => console.log("users:", users))
        .catch(error => console.log(error));
    `,"color: blue; font-size: 18px"),(async()=>await(await fetch("https://jsonplaceholder.typicode.com/users1")).json())().then(o=>console.log("users2:",o)).catch(o=>console.log(o)).finally(()=>console.log("----------------------------------------------------------------------------------------------------------------------------------"))},200);//! Обробка помилок в async/await. Варіант №2-1❌.
setTimeout(()=>{console.warn(`Варіант №2-1❌. 
  Так працювати не буде 
  - await можна використовувати 
  тільки в тілі асинхронної функції:`),console.error(`%c
    const fetchUsers = async () => {
        const response = await fetch("https://jsonplaceholder.typicode.com/users");
        const users = await response.json();
        return users;
    };

    //! ❌ SyntaxError: await is only valid in async function
    const users = await fetchUsers();
    `,"color: blue; font-size: 18px");//! ❌ SyntaxError: await is only valid in async function
console.log("----------------------------------------------------------------------------------------------------------------------------------")},500);//! Обробка помилок в async/await. Варіант №3.
setTimeout(()=>{console.warn(`Варіант №3✅. 
  Якщо результат асинхронної функції (проміс) 
  використовується в іншій асинхронній функції:`),console.log(`%c
    const fetchUsers = async () => {
        const response = await fetch("https://jsonplaceholder.typicode.com/users");
        const users = await response.json();
        return users;
    };

    const doStuff = async () => {
        try {
            const users = await fetchUsers();
            console.log(users);
        } catch (error) {
            console.log(error.message);
        }
    };

    doStuff();
    `,"color: blue; font-size: 18px");const s=async()=>await(await fetch("https://jsonplaceholder.typicode.com/users")).json();(async()=>{try{const n=await s();console.log("users:",n),console.log("----------------------------------------------------------------------------------------------------------------------------------")}catch(n){console.log(n.message)}})()},1e3);//! Послідовні запити з async/await
console.warn(`Послідовні запити з async/await​​: 
 ${window.location.href.split("/").slice(0,-2).join("/")+"/"}lesson-FE4_19/images/sequential-queries.jpg`);const j=async()=>{const s="https://jsonplaceholder.typicode.com",o=await fetch(`${s}/users/1`),n=await fetch(`${s}/users/2`),c=await fetch(`${s}/users/3`),l=await o.json(),e=await n.json(),t=await c.json();console.log("firstUser  1️⃣:",l),console.log("secondUser 2️⃣:",e),console.log("thirdUser  3️⃣:",t),console.log("------------------------------------------------------------------------------------------------------------------------")};j();//! Паралельні запити з async/await
setTimeout(()=>{console.warn(`Паралельні запити з async/await​​: 
 ${window.location.href.split("/").slice(0,-2).join("/")+"/"}lesson-FE4_19/images/parallel-queries.jpg`),(async()=>{const o="https://jsonplaceholder.typicode.com",n=[1,2,3];//! 1.Створюємо масив промісів
const c=n.map(async e=>(await fetch(`${o}/users/${e}`)).json());console.log("arrayOfPromises:",c);//! 2.Запускаємо усі проміси паралельно і чекаємо на їх завершення
const l=await Promise.all(c);console.log("All users 1️⃣2️⃣3️⃣:",l),console.log("------------------------------------------------------------------------------------------------------------------------")})()},500);//! Приклад паралельних запитів з async/await та конструкцією try...catch
//! 1. додати цифровий input з обмеження введення чисел від 1 до 10
//! 2. після введення даних в цей input, при натисканні на кнопку fetch users 
//! буде відображено кількість елементів відповідно веденого input числа 
setTimeout(()=>{console.warn("Приклад паралельних запитів з async/await та try...catch");const s=document.querySelector(".btn"),o=document.querySelector(".user-list"),n=document.querySelector(".count-users");//! Зміна тексту кнопки
n.addEventListener("input",()=>{const e=n.value;if(e===""){s.textContent="Fetch users";return}s.textContent=`Fetch ${e} users`});//! Клік по кнопці
s.addEventListener("click",async()=>{try{const e=Number(n.value);//! Перевірка значення
if(e<1||e>10||!e){alert("Введіть число від 1 до 10");return}const t=await c(e);l(t)}catch(e){console.log(e.message)}});//! Функція отримує користувачів
async function c(e){const t="https://jsonplaceholder.typicode.com";//! Масив id
const r=[];//! Заповнення масиву числами
for(let a=1;a<=e;a++)r.push(a);console.log("userIds:",r);//! Масив промісів
const p=r.map(async a=>(await fetch(`${t}/users/${a}`)).json());//! Чекаємо всі запити
const u=await Promise.all(p);return console.log("Users:",u),u}//! Рендер розмітки
function l(e){const t=e.map(r=>`
                    <li class="item">
                        <p><b>Name</b>: ${r.name}</p>
                        <p><b>Email</b>: ${r.email}</p>
                        <p><b>Company</b>: ${r.company.name}</p>
                    </li>
                `).join("");o.innerHTML=t,console.log("--------------------------------------------------")}},700);
