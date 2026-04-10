//! Параметри рядка запиту
console.warn("Параметри рядка запиту:");

//? ✴️ Параметри запиту дозволяють вказати бекенду додаткові критерії.
//? Наприклад, скільки елементів колекції ми хочемо отримати в запиті,
//? можливо, необхідно додати сортування за якоюсь властивістю об'єкта,
//? обмежити вибірку тощо. Список параметрів запиту, їх назви
//? і можливі значення залежать від бекенду і описані в документації.

//? ✴️ ❗️❗️❗️ Символ ? вказує на старт параметрів запиту.
//? Кожен параметр - це пара ім'я=значення.
//? Символ & використовується для зазначення смислового «І»,
//? розділяючи параметри в рядку запиту.
console.log(
    `%c
    const url = "https://jsonplaceholder.typicode.com/users?_limit=5&_sort=name";
    `,
    'color: blue; font-size: 18px',
);
//? ✳️ Такий GET-запит поверне масив із ❗️п'яти❗️ користувачів
//? (всього їх 10), відсортованих за ім'ям (поле name)
//? в алфавітному порядку.
//? Підкреслення в іменах параметрів специфічні
//? для цього бекенду, це не якийсь стандарт.
const getUsersBtn = document.querySelector(".btn5");
const userList = document.querySelector(".user-list5");

getUsersBtn.addEventListener("click", getUsers);

function getUsers() {
    fetchAllUsers()
        .then((users) => renderUsers(users))
        .catch((error) => console.log(error));
};

function fetchAllUsers() {
    return fetch("https://jsonplaceholder.typicode.com/users?_limit=5&_sort=name")
        .then((response) => {
            if (!response.ok) {
                throw new Error(response.status);
            };
            return response.json();
        })
};

function renderUsers(users) {
    const markup = users
        .map((user) => {
            return `
                <li>
                    <p><b>Name</b>: ${user.name}</p>
                    <p><b>Email</b>: ${user.email}</p>
                    <p><b>Company</b>: ${user.company.name}</p>
                </li>
            `;
        })
        .join("");
    userList.insertAdjacentHTML("beforeend", markup);
    console.log("markup:", markup);
    console.log("--------------------------------------------------------------------------------------------------------------------------");

// console.log("---------------------------------------------------------------------------------------
    }


    //! Клас URLSearchParams
//? ✴️ Параметрів може бути багато, і незручно складати
//? з них один довгий рядок як для читабельності,
//? так і для його подальшого редагування.
//? Під час складання рядків параметрів,
//? створюється екземпляр класу URLSearchParams
//? та ініціалізується об'єктом.
//? Результатом буде спеціальний об'єкт (ітератор)
//? з методами, який у рядковому перетворенні повертає
//? результат виклику методу toString() - своє рядкове відображення.
function createSearchParams() {
    console.warn("Клас URLSearchParams:");

    const BaseURL = "https://jsonplaceholder.typicode.com/";
    const endPoint = "users"
    console.log("BaseURL:", BaseURL); //! "https://jsonplaceholder.typicode.com/"

    const searchParams = new URLSearchParams(
        {
            _limit: 5,
            _sort: "name",
        }
    );
    console.log("searchParams.toString():", searchParams.toString()); //! "_limit=5&_sort=name"
    
    const url = `${BaseURL}${endPoint}?${searchParams}`;
    console.log("url:", url); //! "https://jsonplaceholder.typicode.com/users?_limit=5&_sort=name"
    console.log("--------------------------------------------------------------------------------------------------------------------------");
    return url;
};
createSearchParams();


//? ✳️ У рядковому вигляді властивості об'єкта 
//? стануть параметрами та їх значеннями. 
//? Параметри будуть розділені символом &. 
//? У разі інтерполяції значення в шаблонних рядках 
//? відбувається його неявне перетворення у рядок, 
//? тому не потрібно викликати метод toString() 
//? під час складання URL. 
//? Не забувайте вказувати початок рядка запиту символом ?.
console.log("--------------------------------------------------------------------------------------------------------------------------");
//! HTTP-заголовки
//? ✴️ Клас Headers дозволяє виконувати різні дії 
//? в заголовках HTTP-запиту і відповіді. 
//? До цих дій належать діставання, налаштування, 
//? додавання і видалення заголовків.
console.log(
    `%c
    const headers = new Headers(
        {
            "Content-Type": "application/json",
            "X-Custom-Header": "custom value",
        }
    );

    headers.append("Content-Type", "text/bash");
    headers.append("X-Custom-Header", "custom value");
    headers.has("Content-Type"); //! true
    headers.get("Content-Type"); //! "text/bash"
    headers.set("Content-Type", "application/json");
    headers.delete("X-Custom-Header");
    `,
    'color: blue; font-size: 18px',
);

const headers = new Headers({
    "Content-Type": "application/json",
    "X-Custom-Header": "custom value",
});

headers.append("Content-Type", "text/bash");
headers.append("X-Custom-Header", "custom value");
headers.has("Content-Type"); //! true
headers.get("Content-Type"); //! "text/bash"
headers.set("Content-Type", "application/json");
headers.delete("X-Custom-Header");
console.log("----------------------------------------------------------------------------------");




//? ✳️ На практиці для складання заголовків запиту,
//? як правило, використовують просто літерал об'єкта
//? з властивостями. У такому разі методів не буде,
//? що найчастіше і не потрібно:
const headersNext = {
    "Content-Type": "application/json",
    "X-Custom-Header": "custom value",
};

//? ✳️ Запит з використанням заголовків буде виглядати наступним чином:
console.log(
    `%c
    fetch(
        "https://jsonplaceholder.typicode.com/users",
        {
            headers: {
                Accept: "application/json",
            },
        }
    )
    .then(response => {
        //! логіка обробки відповіді
    });
    `,
    'color: blue; font-size: 18px',
);

fetch(
    "https://jsonplaceholder.typicode.com/users", 
    {
        headers: {
            Accept: "application/json",
        },
    }
)
.then(response => {
    //! логіка обробки відповіді
});

//? ✳️ Сучасні браузери додають багато заголовків за замовчуванням, 
//? залежно від операції і тіла запиту, тому немає потреби 
//? явно вказувати стандартні заголовки.
console.log("----------------------------------------------------------------------------------");





//! Крос-доменні запити
console.warn(`Крос-доменні запити: \n ${((window.location.href).split('/')).slice(0, -2).join('/') + '/'}${"lesson-FE4_16/images/cors.png"}`);
//? ✴️ За замовчуванням HTTP-запит можна робити тільки
//? в рамках поточного сайту.
//? При спробі запиту на інший домен, порт або протокол,
//? тобто виконати крос-доменний запит - браузер видає помилку.
//? Це зроблено з міркувань безпеки
//? і права доступу налаштовуються на бекенді.
//? Якщо бекенд не підтримує крос-доменні запити,
//? фронтенд-розробник нічого не зможе з цим зробити у своєму коді.

//? ✳️ Ця політика браузерів називається CORS
//? і розшифровується як Cross-Origin Resource Sharing,
//? де Origin - це і є домен, порт або протокол.
//? Дослівний переклад звучить як
//? «спільне використання ресурсів між різними джерелами».

//? ✴️ На кожному запиті браузер сам додає HTTP-заголовок Origin,
//? де вказує адресу веб-сторінки, яка хоче зробити HTTP-запит.
//? Наприклад, якщо ми робимо fetch-запит з веб-сторінки
//? http://127.0.0.1:5500 на https://jsonplaceholder.typicode.com/users,
//? то заголовки будуть наступними:
console.warn(`Request Headers: \n ${((window.location.href).split('/')).slice(0, -2).join('/') + '/'}${"lesson-FE4_16/images/cors-request-headers.jpg"}`);
console.log(
    `%c
    GET /users
    Host: jsonplaceholder.typicode.com
    Origin: http://127.0.0.1:5500
    `,
    'color: blue; font-size: 18px',
);

//? ✴️ Сервер перевіряє заголовок Origin і, якщо він підтримує крос-доменні запити,
//? додає у відповідь спеціальний HTTP-заголовок Access-Control-Allow-Origin:
console.warn(`Response Headers: \n ${((window.location.href).split('/')).slice(0, -2).join('/') + '/'}${"lesson-FE4_16/images/cors-response-headers.jpg"}`);
console.log(
    `%c
    # Private API
    Access-Control-Allow-Origin: http://127.0.0.1:5500

    # Public API
    Access-Control-Allow-Origin: *
    `,
    'color: blue; font-size: 18px',
);
//? ✴️ Значенням цього заголовка буде дозволене джерело (Origin).
//? У нашому випадку це повинен бути один сайт http://127.0.0.1:5500,
//? якщо бекенд приватний, або спецсимвол *, якщо бекенд публічний
//? - дозволяє робити запити кому завгодно.

//? ✳️ Тобто браузер - це певний посередник між JavaScript-кодом і бекендом. 
//? Він додає кожному запиту заголовок Origin з правильним значенням 
//? і перевіряє наявність заголовка Access-Control-Allow-Origin у відповіді. 
//? Якщо заголовок є і його значення підходить, виконається оригінальний запит 
//? і JavaScript-код отримає його результат, в іншому випадку буде помилка CORS.
console.log("-----------------------------------------------------------------------------------");
