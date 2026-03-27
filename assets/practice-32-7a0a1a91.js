import"./modulepreload-polyfill-3cfb730f.js";//! AJAX
console.log(`%c
    AJAX (Asynchronous JavaScript and XML)
    - метод отримання або відправлення даних
    з подальшим оновленням інтерфейсу за цими даними,
    без потреби перезавантаження сторінки.
    `,"color: blue; font-size: 18px");console.log("---------------------------------------------------------------------------------");//! Fetch API​ 
console.log(`%c
    fetch(url, options)
    `,"color: blue; font-size: 18px");console.log(`%c
    fetch("https://jsonplaceholder.typicode.com/users")
        .then(response => {
          // Response handling
        })
        .then(data => {
          // Data handling
        })
        .catch(error => {
          // Error handling
        });
    `,"color: blue; font-size: 18px");console.log("------------------------------------------------------------------------------------");//! Перевірка відповіді методу fetch()
console.warn("Перевірка відповіді методу fetch():");console.log(`%c
    fetch("https://jsonplaceholder.typicode.com/users")
        .then(response => {
            if (!response.ok) {
                throw new Error(response.status);
            }
            return response.json();
        })
        .then(data => {
            // Data handling
            console.log("data:", data);
        })
        .catch(error => {
            // Error handling
        });

    `,"color: blue; font-size: 18px");fetch("https://jsonplaceholder.typicode.com/users").then(o=>{if(!o.ok)throw new Error(o.status);return o.json()}).then(o=>{//! Data handling
console.log("data:",o);//! масив об'єктів з користувачами
}).catch(o=>{//! Error handling
console.log("error:",o)}).finally(()=>console.log("------------------------------------------------------------------------------------"));//!API 1
fetch("https://newsapi.org/v2/everything?q=tesla&from=2026-02-27&sortBy=publishedAt&apiKey=639ac27a9d1f4a569d7448e2fa14c42d ").then(o=>{if(!o.ok)throw new Error(o.status);return o.json()}).then(o=>{//! Data handling
console.log("data1:",o);//! масив об'єктів з користувачами
}).catch(o=>{//! Error handling
console.log("error:",o)}).finally(()=>console.log("------------------------------------------------------------------------------------"));//!API 2
fetch("https://newsapi.org/v2/everything?q=apple&from=2026-03-26&to=2026-03-26&sortBy=popularity&apiKey=639ac27a9d1f4a569d7448e2fa14c42d").then(o=>{if(!o.ok)throw new Error(o.status);return o.json()}).then(o=>{//! Data handling
console.log("data2:",o);//! масив об'єктів з користувачами
}).catch(o=>{//! Error handling
console.log("error:",o)}).finally(()=>console.log("------------------------------------------------------------------------------------"));//!API 3
fetch("https://newsapi.org/v2/top-headlines?sources=techcrunch&apiKey=639ac27a9d1f4a569d7448e2fa14c42d").then(o=>{if(!o.ok)throw new Error(o.status);return o.json()}).then(o=>{//! Data handling
console.log("data3:",o);//! масив об'єктів з користувачами
}).catch(o=>{//! Error handling
console.log("error:",o)}).finally(()=>console.log("------------------------------------------------------------------------------------"));//! Вкладка Network
setTimeout(()=>{console.warn(`Вкладка Network-1​​: 
 ${window.location.href.split("/").slice(0,-2).join("/")+"/"}lesson-FE4_16/images/network-tab-1.jpg`),console.warn(`Вкладка Network-2​​: 
 ${window.location.href.split("/").slice(0,-2).join("/")+"/"}lesson-FE4_16/images/network-tab-2.png`),console.log("------------------------------------------------------------------------------------")},200);console.log("------------------------------------------------------------------------------------");//! Помилка новачка
console.log(`%c
    let globalVariable; //! undefined

    //! Ініціалізація отримання даних.
    fetch("https://jsonplaceholder.typicode.com/users")
        .then(response => response.json())
        .then(users => {
            console.log("users inside then callback: ", users);

            //! Запис результату в глобальну змінну:
            globalVariable = users;

            //! Тут все гаразд, дані знаходяться в змінній:
            console.log(
                "globalVariable всередині функції fetch callback:",
                globalVariable
            );
        });

    //! Тут немає асинхронних даних:
    console.log(
        "globalVariable поза fetch:",
        globalVariable
    ); //! undefined
    `,"color: blue; font-size: 18px");let l;//! undefined
//! Ініціалізація отримання даних.
fetch("https://jsonplaceholder.typicode.com/users").then(o=>o.json()).then(o=>{console.log("users inside then callback: ",o);//! Запис результату в глобальну змінну:
l=o;//! Тут все гаразд, дані знаходяться в змінній:
console.log("globalVariable всередині функції fetch callback: ",l),console.log("-------------------------------------------------------------------------------------------------------------")});//! Тут немає асинхронних даних:
console.log("globalVariable поза fetch: ",l);//! undefined
console.log("-------------------------------------------------------------------------------------------------------------");//! Робота з публічним REST API.
console.log(`%c
    https://jsonplaceholder.typicode.com/users
    `,"color: blue; font-size: 18px");const t=document.querySelector(".btn"),c=document.querySelector(".user-list");t.addEventListener("click",s);function s(){a().then(o=>r(o)).catch(o=>console.log(o))}function a(){return fetch("https://jsonplaceholder.typicode.com/users").then(o=>{if(!o.ok)throw new Error(o.status);return o.json()})}function r(o){console.log("users:",o);const n=o.map(e=>`
                <li>
                    <p><b>Name</b>: ${e.name}</p>
                    <p><b>Email</b>: ${e.email}</p>
                    <p><b>Company</b>: ${e.company.name}</p>
                </li>
            `).join("");c.insertAdjacentHTML("beforeend",n),console.log("markup:",n),console.log("----------------------------------------------------------------------")}
