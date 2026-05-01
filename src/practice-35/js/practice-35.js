//! Операції CRUD

//? ✴️ Для взаємодії з ресурсами бекенду
//? використовується чотири операції:
//? 🔸 створення (CREATE),
//? 🔸 читання (READ),
//? 🔸 оновлення (UPDATE)
//? 🔸 видалення (DELETE).
//? Для кожної з них визначений стандартний HTTP-метод.

//! Method  Description
//?     📌 ---:
//? 🔸 POST. Операція CREATE - створити новий ресурс.
//? 🔸 GET. Операція READ - отримати набір ресурсів
//?    або один ресурс за ідентифікатором.
//? 🔸 PUT і PATCH.  Операція UPDATE - оновити ресурс за ідентифікатором.
//? 🔸 DELETE. Операція DELETE - видалити ресурс за ідентифікатором


//? ✳️ Будемо робити запити до JSONPlaceholder API
//? (https://jsonplaceholder.typicode.com/),
//? який надає колекцію несправжніх постів 
//? в ресурсі /posts, представлених об'єктами
//? з властивостями id, author і body.


//! Meтод GET. Операція READ. Читання
//? ✴️ HTTP-метод GET використовується для отримання існуючих даних.
//? Метод fetch() повинен відправити на сервер GET-запит без тіла.
//? Бекенд, після отримання запиту, обробить його
//? і у відповіді поверне необхідні ресурси.
const EndPoint = "posts"
// const EndPoint = "users"

//? ✳️ Отримаємо масив усіх постів. 
//? З цією метою, звертаємося до ресурсу /posts, 
//? описаного в документації бекенду. 
//? Метод fetch() за замовчуванням робить GET-запит, 
//? тому необов'язково перевизначати опції запиту.
fetch(`https://jsonplaceholder.typicode.com/${EndPoint}`)
  .then(response => response.json())
  .then(posts => console.log("posts:", posts))
  .catch(error => console.log(error))
  .finally(() => console.log(". . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . "));


//? ✳️ Отримаємо один пост за ідентифікатором (властивість id),
//? додавши його до ресурсу /posts/:postId.
//? Остання частина цього шляху називається динамічний параметр
//? і в документації описується як /ресурс/:параметр.
//? Ресурс не змінюється - це шлях до цілої колекції,
//? а значення параметра змінюється для кожного її елемента.
//! Змініть це число, щоб отримати різні публікації.
const postId = 9;

setTimeout(() => {
  fetch(`https://jsonplaceholder.typicode.com/${EndPoint}/${postId}`)
    .then(response => response.json())
    .then(post => console.log(`post №${postId}:`, post))
    .catch(error => console.log(error))
    .finally(() => console.log("-----------------------------------------------------------------------------------------------------"));
});

//! Meтод POST. Операція CREATE. Створення
//? ✴️ Метод POST використовується для додавання нового ресурсу.
//? Метод fetch() повинен відправити POST-запит на сервер,
//? в тілі якого буде об'єкт з полями author і body,
//? ідентифікатор буде автоматично створений базою даних.
//? Результатом такого запиту буде об'єкт, доданий в базу даних.

//? ✳️ У відповідь, якщо все добре, отримаємо JSON з доданим id.
//? Ідентифікатор "id" буде унікальним для кожного об'єкта:
console.log(
    `%c
        📌 Відповідь сервера на POST:
    {
        "id": 101,
        "author": "Fay Rodis",
        "title": "Treatise on Inferno"
    }
    `,
    'color: blue; font-size: 18px',
);
console.log(". . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .");

//? 📌 Для відправлення POST запиту або запиту
//? з іншим методом, треба використати fetch параметри {options}:
//? 🔸 method — HTTP-метод, наприклад POST (використовується найчастіше),
//? 🔸 body — тіло запиту, значенням якого є щось одне із списку:
//?    - рядок (наприклад, у форматі JSON),
//?    - об’єкт FormData, для відправки даних як multipart/form-data,
//?    - Blob/BufferSource для відправлення бінарних даних,
//?    - URLSearchParams, для відправлення даних у кодуванні x-www-form-urlencoded (використовуєся рідко),
console.warn("URLSearchParams: \n https://uk.javascript.info/url");
//? 🔸 headers — заголовок, який вказує тип переданих даних в тілі запиту.

const requestBody = {
    author: "Fay Rodis",
    title: "Treatise on Inferno",
};

const options = {
    method: "POST", //! операція CREATE, створення
    body: JSON.stringify(requestBody), //! конвертація даних у JSON-формат
    headers: {
        "Content-Type": "application/json; charset=UTF-8",
    },
};

fetch(`https://jsonplaceholder.typicode.com/${EndPoint}`, options)
    .then(response => response.json())
    .then(post => console.log("Відповідь сервера на POST:", post))
    .catch(error => console.log(error))
    .finally(() => console.log("-------------------------------------------------------------------------------------------"));

//? ✳️ Робимо запит на створення поста,
//? звертаючись до ресурсу /posts,
//? але у налаштуваннях методу fetch()
//? змінюємо HTTP-метод на POST в об'єкті параметрів {options}.
//? Таким чином, бекенд знає, що потрібно
//? не прочитати вже існуючий,
//? а СТВОРИТИ новий ресурс в цій колекції.

//? ✳️ Тіло запиту body повинно бути рядком,
//? тому що протокол HTTP передає усе як текст.
//? При передачі складних типів даних,
//? їх обов'язково необхідно привести
//? до рядка методом JSON.stringify()
//? або задати інший тип (дивись вище).
//? Не забуваємо вказати заголовок Content-Type,
//? який уточнює для бекенду тип переданих даних.


//! Meтоди PUT і PATCH. Операція UPDATE. Оновлення
//? ✴️ Методи PUT і PATCH використовуються для оновлення існуючих даних.
//? Який метод використовувати, буде написано в документації бекенду.
//? Метод fetch() повинен відправити на сервер запит, в тілі якого
//? необхідно вказати об'єкт з полями для зміни. Шлях вказує,
//? в якій колекції і який елемент ми хочемо оновити.
//? Бекенд, після отримання запиту, обробить його і у відповіді
//? поверне оновлений ресурс.

//? 📌 Метод PATCH ЗАМІНЯЄ в існуючому ресурсі ТІЛЬКИ ТІ
//?     значення і властивості, які передані в тілі запиту.
//? 📌 Метод PUT ПОВНІСТЮ ЗАМІНЯЄ ВЕСЬ РЕСУРС
//?    переданими даними в тілі запиту.

//? ✳️ У відповідь, якщо все добре, отримаємо JSON з оновленим об'єктом:
console.log(
    `%c
        📌 Відповідь сервера на PATCH:
    {
        "id": 9,
        "author": "Fay Rodis",
        "title": "Treatise on Inferno",
        userId: 1,
        body: "consectetur animi nesciunt iure dolore\nenim quia ad\nveniam autem ut quam aut nobis\net est aut quod aut provident voluptas autem voluptas"
    }
    `,
    'color: blue; font-size: 18px',
);
console.log(". . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .");

console.log(
    `%c
        📌 Відповідь сервера на PUT:
    {
        "id": 9,
        "author": "Fay Rodis",
        "title": "Treatise on Inferno"
    }
    `,
    'color: blue; font-size: 18px',
);
console.log(". . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .");


const requestBody2 = {
    id: 9,
    author: "Fay Rodis",
    title: "Treatise on Inferno",
};

//? PATCH  або PUT:
const options2 = {
    // method: "PATCH", //! операція UPDATE, оновлення
    method: "PUT", //! операція UPDATE, оновлення
    body: JSON.stringify(requestBody2), //! конвертація даних у JSON-формат
    headers: {
        "Content-Type": "application/json; charset=UTF-8",
    },
};

fetch(`https://jsonplaceholder.typicode.com/posts/${requestBody2.id}`, options2)
    .then(response => response.json())
    .then(post => console.log(`Відповідь сервера на ${options2.method}:`, post))
    .catch(error => console.log(error))
    .finally(() => console.log("-----------------------------------------------------------------------------------------------------"));


    //! Meтод DELETE. Операція DELETE. Видалення
//? ✴️ Метод DELETE використовується для видалення існуючих даних. 
//? Метод fetch() повинен відправити на сервер DELETE-запит без тіла. 
//? Шлях вказує, в якій колекції і який елемент ми хочемо видалити. 
//? Бекенд, після отримання запиту, обробить його, 
//? видалить ресурс з колекції і у відповіді поверне статус результату.

//? ✳️ У відповідь, якщо все добре, отримаємо JSON з оновленим об'єктом:
console.log(
    `%c
        📌 Відповідь сервера на DELETE:
    Post deleted
    Status: 200
    `,
    'color: blue; font-size: 18px',
);
console.log(". . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .");

const postIdToDelete = 9;

const options3 = {
    method: "DELETE", //! операція DELETE, видалення
};

fetch(`https://jsonplaceholder.typicode.com/posts/${postIdToDelete}`, options3)
    // .then(response => console.log("Відповідь сервера на DELETE:", response))
    .then(response => console.log("Відповідь response.status на DELETE:", response.status))
    .catch(error => console.log(error))
    .finally(() => console.log("-----------------------------------------------------------------------------------------------------------------------------"));
