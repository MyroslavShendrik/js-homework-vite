//! AJAX
console.log(
    `%c
    AJAX (Asynchronous JavaScript and XML)
    - метод отримання або відправлення даних
    з подальшим оновленням інтерфейсу за цими даними,
    без потреби перезавантаження сторінки.
    `,
    'color: blue; font-size: 18px',
);
//? ✴️ AJAX (Asynchronous JavaScript and XML)
//? - метод отримання або відправлення даних
//? з подальшим оновленням інтерфейсу за цими даними,
//? без потреби перезавантаження сторінки.
//? Завдяки цьому зменшується час відгуку
//? і веб-сторінка стає інтерактивнішою.
//? Цей процес можна розібрати
//? на прикладі завантаження даних:

//? 🔸 1. На веб-сторінці відбувається подія
//?       (сторінка завантажується, натискається
//?       кнопка «Показати більше»,
//?       відправляється форма тощо).
//? 🔸 2. На клієнті, за допомогою JavaScript,
//?       реакцією на цю подію буде виконуватися
//?       функція для роботи з сервером,
//?       де створюється і відправляється HTTP-запит.
//? 🔸 3. Сервер отримує і обробляє HTTP-запит,
//?       відправляючи назад у відповіді дані у форматі JSON.
//? 🔸 4. На клієнті, за допомогою JavaScript,
//?       відповідь від сервера обробляється,
//?       зчитуються дані і оновлюється інтерфейс.

//? ✳️ Незважаючи на те, що у назві технології присутній XML, 
//? в сучасному інтернеті його замінив JSON, а назву залишили 
//? як данину пам'яті. AJAX трактується як будь-яке спілкування 
//? з сервером без перезавантаження сторінки.
console.log("---------------------------------------------------------------------------------");

//! Fetch API​ 
//? ✴️ Інтерфейс, вбудований в браузер, доступний на об'єкті window,
//? який містить набір властивостей і методів для відправлення,
//? отримання та обробки ресурсів від сервера.
//? Метод fetch() надає сучасний інтерфейс для формування
//? запитів до сервера і побудований на промісах.
console.log(
    `%c
    fetch(url, options)
    `,
    'color: blue; font-size: 18px',
);
//? 🔸 url - шлях до даних на бекенді,
//?    які необхідно отримати,
//?    створити або змінити.
//?    Обов'язковий аргумент.
//? 🔸 options - об'єкт налаштувань запиту:
//?    метод (за замовчуванням GET),
//?    заголовки, тіло тощо.
//?    Необов'язковий аргумент.

//? ✳️ Для прикладу зробимо запити до https://jsonplaceholder.typicode.com
//? - публічного REST API для швидкого прототипування, 
//? який надає колекцію несправжніх користувачів в ресурсі /users.
console.log(
    `%c
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
    `,
    'color: blue; font-size: 18px',
);
console.log("------------------------------------------------------------------------------------");

//! Перевірка відповіді методу fetch()
console.warn("Перевірка відповіді методу fetch():");
//? ✴️ Значення промісу, який повертає метод fetch(),
//? - це об'єкт зі службовою інформацією про стан відповіді сервера.
//? Екземпляр класу Response містить різні методи і властивості.

//? ✳️ Залежно від типу отримуваного контенту, використовуються
//? різні методи для перетворення тіла відповіді у дані:
//? 🔸 json() - парсить дані в JSON-форматі.
//? 🔸 text() - парсить дані в простому текстовому форматі,
//?    наприклад .csv (табличні дані).
//? 🔸 blob() - парсить дані, що описують файл,
//?    наприклад, зображення, аудіо або відео.

//? ✳️ У першому методі then() виконується перевірка статусу відповіді 
//? і перетворення даних у правильний формат, або явне створення помилки, 
//? щоб обробити невдалий HTTP-запит в блоці catch(). 
console.log(
    `%c
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

    `,
    'color: blue; font-size: 18px',
);
fetch("https://jsonplaceholder.typicode.com/users")
    .then(response => {
        if (!response.ok) {
            throw new Error(response.status);
        };
        return response.json();
    })
    .then(data => {
        //! Data handling
        console.log("data:", data); //! масив об'єктів з користувачами
    })
    .catch(error => {
        //! Error handling
        console.log("error:", error);
    })
    .finally(() => console.log("------------------------------------------------------------------------------------"));

//? ✳️ Це необхідно для того, щоб fetch() правильно зреагував
//? на статус код 404, який, технічно, не є помилкою,
//? але для клієнта - це неуспішний результат.
// console.log("------------------------------------------------------------------------------------");
//!API 1
fetch("https://newsapi.org/v2/everything?q=tesla&from=2026-02-27&sortBy=publishedAt&apiKey=639ac27a9d1f4a569d7448e2fa14c42d ")
    .then(response => {
        if (!response.ok) {
            throw new Error(response.status);
        };
        return response.json();
    })
    .then(data => {
        //! Data handling
        console.log("data1:", data); //! масив об'єктів з користувачами
    })
    .catch(error => {
        //! Error handling
        console.log("error:", error);
    })
    .finally(() => console.log("------------------------------------------------------------------------------------"));
    //!API 2
    fetch("https://newsapi.org/v2/everything?q=apple&from=2026-03-26&to=2026-03-26&sortBy=popularity&apiKey=639ac27a9d1f4a569d7448e2fa14c42d")
    .then(response => {
        if (!response.ok) {
            throw new Error(response.status);
        };
        return response.json();
    })
    .then(data => {
        //! Data handling
        console.log("data2:", data); //! масив об'єктів з користувачами
    })
    .catch(error => {
        //! Error handling
        console.log("error:", error);
    })
    .finally(() => console.log("------------------------------------------------------------------------------------"));
    //!API 3
    fetch("https://newsapi.org/v2/top-headlines?sources=techcrunch&apiKey=639ac27a9d1f4a569d7448e2fa14c42d")
    .then(response => {
        if (!response.ok) {
            throw new Error(response.status);
        };
        return response.json();
    })
    .then(data => {
        //! Data handling
        console.log("data3:", data); //! масив об'єктів з користувачами
    })
    .catch(error => {
        //! Error handling
        console.log("error:", error);
    })
    .finally(() => console.log("------------------------------------------------------------------------------------"));

    //! Вкладка Network
setTimeout(() => {
    console.warn(`Вкладка Network-1​​: \n ${((window.location.href).split('/')).slice(0, -2).join('/') + '/'}${"lesson-FE4_16/images/network-tab-1.jpg"}`);
    console.warn(`Вкладка Network-2​​: \n ${((window.location.href).split('/')).slice(0, -2).join('/') + '/'}${"lesson-FE4_16/images/network-tab-2.png"}`);
    console.log("------------------------------------------------------------------------------------");
}, 200);
//? ✴️ В інструментах розробника на вкладці Network
//? відображаються всі HTTP-запити,
//? що виконуються на сторінці.
//? Вибравши фільтр Fetch/XHR,
//? залишаться тільки запити до бекенду. 
//? Після натискання кнопки в прикладі, 
//? через деякий час запит відобразиться у списку. 
//? Вибравши його, можна подивитися службову 
//? інформацію і тіло відповіді 
//? на підвкладках Headers, Preview і Response.
console.log("------------------------------------------------------------------------------------");


//! Помилка новачка
//? Розберемо поширену помилку при роботі з асинхронним кодом
//? - спробу використовувати дані HTTP-запиту поза колбеком методу then().
//? Новачок намагається записати «результат fetch» у зовнішню змінну
//? і використовувати її нижче у коді, відразу після виклику методу fetch():
console.log(
    `%c
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
    `,
    'color: blue; font-size: 18px',
);
let globalVariable; //! undefined

//! Ініціалізація отримання даних.
fetch("https://jsonplaceholder.typicode.com/users")
    .then(response => response.json())
    .then(users => {
        console.log("users inside then callback: ", users);

        //! Запис результату в глобальну змінну:
        globalVariable = users;

        //! Тут все гаразд, дані знаходяться в змінній:
        console.log("globalVariable всередині функції fetch callback: ", globalVariable);
        console.log("-------------------------------------------------------------------------------------------------------------");
    });

//! Тут немає асинхронних даних:
console.log("globalVariable поза fetch: ", globalVariable); //! undefined
console.log("-------------------------------------------------------------------------------------------------------------");

//! Робота з публічним REST API.
//? ✴️ Кожен бекенд унікальний, їх тисячі.
//? З іншого боку REST API побудовані
//? за стандартною архітектурою.
//? Це означає, що можна зрозуміти принцип їх роботи,
//? після чого, все що потрібно зробити
//? - це ознайомитися з документацією того бекенду,
//? який необхідно використовувати.
//? ✳️ Продовжимо працювати з API https://jsonplaceholder.typicode.com.
//? З документації беремо URL ресурсу для запиту 
//? інформації про колекції несправжніх користувачів.
console.log(
    `%c
    https://jsonplaceholder.typicode.com/users
    `,
    'color: blue; font-size: 18px',
);
//?     📌 Цей шлях складається з наступних частин::
//? 🔸 https://jsonplaceholder.typicode.com
//?    - це ендпоінт, базовий URL, точка входу в API.
//? 🔸 /users - ресурс, до якого ми звертаємося.

//? ✳️ По кліку на кнопку «Fetch users» 
//? зробимо GET-запит і виведемо 
//? список користувачів за отриманими даними.
const fetchUsersBtn = document.querySelector(".btn");
const userList = document.querySelector(".user-list");

fetchUsersBtn.addEventListener("click", fetchUsers);

function fetchUsers() {
    fetchData()
        .then((users) => renderUsers(users))
        .catch((error) => console.log(error));
};

function fetchData() {
    return fetch("https://jsonplaceholder.typicode.com/users")
        .then((response) => {
            if (!response.ok) {
                throw new Error(response.status);
            };
            // console.log("response.json():",response.json());
            return response.json();
        })
};

//todo: var.1
// function renderUsers(users) {
//     const markup = users
//         .map((user) => {
//             return `
//                 <li>
//                     <p><b>Name</b>: ${user.name}</p>
//                     <p><b>Email</b>: ${user.email}</p>
//                     <p><b>Company</b>: ${user.company.name}</p>
//                 </li>
//             `;
//         })
//         .join("");

//todo: var.2
function renderUsers(users) {
    console.log("users:",users);
    const markup = users
        .map(user =>
            `
                <li>
                    <p><b>Name</b>: ${user.name}</p>
                    <p><b>Email</b>: ${user.email}</p>
                    <p><b>Company</b>: ${user.company.name}</p>
                </li>
            `
        ).join("");
    userList.insertAdjacentHTML("beforeend", markup);
    console.log("markup:", markup);
    console.log("----------------------------------------------------------------------");
};
//? ✳️ Зверніть увагу на те, що функція fetchData() 
//? повертає проміс, тому до результату її виклику 
//? ми додаємо ланцюжок методів then() і catch().
// console.log("----------------------------------------------------------------------");
