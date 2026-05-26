//! Асинхронні функції
//? ✳️ Робота з бекендом може бути заплутаною
//? - після однієї асинхронної операції необхідно
//? зробити ще один запит на сервер на підставі
//? отриманих даних, і так кілька разів.
//? Наприклад, на сторінці профілю користувач
//? хоче подивитися список друзів.
//? Перше, що необхідно зробити
//? - підтвердити його права доступу до цієї сторінки на бекенді.
//? Для цього потрібно зробити запит до my-api.com/me.
//? Якщо бекенд дозволить доступ, у відповіді
//? ми отримаємо унікальний токен доступу до захищених ресурсів.
console.warn("КРОК-1.Підтвердження прав доступу до сторінки:");
console.log(
  `%c
    const fetchFriends = () => {
        return fetch("my-api.com/me").then(token => {
            console.log(token);
        });
    };
    `,
  "color: blue; font-size: 18px",
);

console.warn("КРОК-2.Запит профілю користувача:");
//? ✳️ Потім необхідно зробити запит профілю користувача
//? з my-api.com/profile, але профіль - неповний,
//? він містить тільки критично важливу інформацію:
//? ідентифікатор користувача без списку друзів.
let token = "${token}"; //! для вірного відображення в console.log()
console.log(
  `%c
    const fetchFriends = () => {
        return fetch("my-api.com/me")
            .then(token => {
                return fetch('my-api.com/profile?token=${token}');
        })
        .then(user => {
            console.log(user.id);
        });
    };
    `,
  "color: blue; font-size: 18px",
);

console.warn("КРОК-3.Запит списку друзів:");
//? ✳️ І тільки після цього можна зробити запит
//? списку друзів з my-api.com/users/:userId/friends.
let user = { id: "${user.id}" }; //! для вірного відображення в console.log()
console.log(
  `%c
    const fetchFriends = () => {
        return fetch("my-api.com/me")
            .then(token => {
                return fetch('my-api.com/profile?token=${token}');
        })
        .then(user => {
            return fetch('my-api.com/users/${user.id}/friends');
        });
    };

    fetchFriends()
        .then(friends => console.log(friends))
        .catch(error => console.error(error));
    `,
  "color: blue; font-size: 18px",
);

//? ✳️ В результаті отримуємо, не найзручніший
//? для читання код, хоча операції - порівняно прості.
//? Оскільки ми передаємо функції-обробники методу then(),
//? утворюються ялинкоподібні вкладеності.

console.warn("КРОК-4.Код з асинхронними функціями:");
//? ✴️ Асинхронні функції допомагають
//? позбавиться колбеків і вкладених конструкцій.
//? Водночас, вони відмінно працюють разом із
//? методами then() і catch(),
//? тому що гарантовано повертають проміс.
console.log(
  `%c
    const fetchFriends = async () => {
        const token = await fetch("my-api.com/me");
        const user = await fetch('my-api.com/profile?token=${token}');
        const friends = await fetch('my-api.com/users/${user.id}/friends');
        return friends;
    };

    fetchFriends()
        .then(friends => console.log(friends))
        .catch(error => console.error(error));
        `,
  "color: darkgreen; font-size: 18px",
);

console.log(
  "-------------------------------------------------------------------------------------------------------------------",
);

//! Синтаксис async/await
console.warn("Синтаксис async/await:");
//? ✴️ Асинхронні функції (async/await)
//? - зручний спосіб написання асинхронного коду,
//? який зовні стає схожим на синхронний.
//? В основі синтаксису async/await лежать проміси,
//? тому він не блокує основний потік виконання програми.
//? ✴️ Для оголошення асинхронної стрілочної функції,
//? перед списком параметрів додаємо ключове слово async.
//? Всередині неї можна використовувати оператор await
//? і праворуч від нього поставити щось, що поверне проміс.
//? Метод response.json() також повертає проміс, тому ставимо await.
console.log(
  `%c
    const fetchUsers = async () => {
      const response = await fetch("https://jsonplaceholder.typicode.com/users");
      const users = await response.json();
      return users;
    };

    fetchUsers().then(users => console.log(users));
    `,
  "color: blue; font-size: 18px",
);
console.log(
  "--------------------------------------------------------------------------------------------------------------------------",
);

//! Використання синтаксису async/await
console.warn("Використання синтаксису async/await:");
//? ✴️ Коли інтерпретатор зустрічає await,
//? він призупиняє виконання цієї функції (не тільки скрипта)
//? і чекає, доки не виконається проміс праворуч від await.
//? Щойно проміс виконався - виконання функції відновлюється
//? і на рядку нижче нам доступний результат асинхронної операції.
//?     📌 Використання синтаксису async/await:
//? 🔸 Оператор await можна використовувати тільки у тілі асинхронної (async) функції.
//? 🔸 Оператор await призупиняє функцію, доки проміс не виконається (fulfilled або rejected).
//? 🔸 Якщо проміс виконався успішно (fulfilled), оператор await поверне його значення.
//? 🔸 Якщо проміс був відхилений з помилкою (rejected), оператор await викине помилку.
//? 🔸 Асинхронна функція завжди повертає проміс, тому будь-яке значення, що повертається, буде його значенням.
//? 🔸 Якщо не вказати значення, що повертається, повернеться проміс зі значенням undefined.
console.log(
  `%c
    🔸 Оператор await можна використовувати тільки у тілі асинхронної (async) функції.
    🔸 Оператор await призупиняє функцію, доки проміс не виконається (fulfilled або rejected).
    🔸 Якщо проміс виконався успішно (fulfilled), оператор await поверне його значення.
    🔸 Якщо проміс був відхилений з помилкою (rejected), оператор await викине помилку.
    🔸 Асинхронна функція завжди повертає проміс, тому будь-яке значення, що повертається, буде його значенням.
    🔸 Якщо не вказати значення, що повертається, повернеться проміс зі значенням undefined.
    `,
  "color: blue; font-size: 18px",
);
console.log(
  "--------------------------------------------------------------------------------------------------------------------------",
);
test();
function test() {
  console.log("HELLO!!!");
}
// test();
// test2()
const test2 = function () {
  console.log("Hello2!!!");
};

test2();

const test3 = (a) => {
  return a;
};
// test3("HELLO3!!!")
console.log("test3:", test3("HELLO3!!!"));

const test4 = (a) => a + "!!!";

console.log("test4:", test4("HELLO4"));

//! Приклади використання синтаксису async/await
console.warn("Приклади використання синтаксису async/await:");
//? ✳️ Будь-яка функція може бути асинхронною,
//? чи то метод об'єкта, класу, колбек, оголошення
//? або інлайн функція.
//? Всі вони зможуть використовувати оператор await
//? і обов'язково повернуть проміс,
//? тому що будуть асинхронними функціями.
console.log(
  `%c
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
    `,
  "color: blue; font-size: 18px",
);
console.log(
  "--------------------------------------------------------------------------------------------------------------------------",
);

//! ✳️ Синтаксис async/await:
const fetchUsers = async () => {
  const response = await fetch("https://jsonplaceholder.typicode.com/users");
  const users1 = await response.json();
  return users1;
};

fetchUsers()
  .then((users1) => console.log("users1:", users1))
  .finally(() =>
    console.log(
      "--------------------------------------------------------------------------------------------------------------------------",
    ),
  );

//! users: (10)[{… }, {… }, {… }, {… }, {… }, {… }, {… }, {… }, {… }, {… }]
// console.log("--------------------------------------------------------------------------------------------------------------------------");

//! Обробка помилок в async/await. Варіант №1.
console.warn(
  `Варіант №1✅. \n  Якщо результат асинхронної функції (проміс) \n  НЕ використовується у зовнішньому коді:`,
);
//? ✴️ Якщо результат асинхронної функції (проміс)
//? не використовується у зовнішньому коді,
//? помилки обробляються в тілі функції конструкцією try...catch.
//? Значення параметра error в блоці catch - це помилка,
//? яку згенерує await, якщо проміс буде відхилений.
//? ✳️
console.log(
  `%c
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
    `,
  "color: blue; font-size: 18px",
);
const fetchUsers2 = async () => {
  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/users");
    const users = await response.json();
    console.log("users:", users);
    console.log(
      "----------------------------------------------------------------------------------------------------------------------------------",
    );
  } catch (error) {
    // console.log("додатковий консоль лог ")
    console.log("error:", error);
  }
};

fetchUsers2();
console.log(
  "----------------------------------------------------------------------------------------------------------------------------------",
);

console.log("1");
console.log("2");
console.log("3");
console.log("4");

//! Обробка помилок в async/await. Варіант №2.
//? ✴️ Якщо результат асинхронної функції (проміс)
//? використовується у зовнішньому (глобальному) коді,
//? тобто за межами інших асинхронних функцій,
//? помилки обробляються колбеком методом catch().
//? Значення параметра error в методі catch()
//? - це помилка, яку згенерує await, якщо проміс буде відхилений.
setTimeout(() => {
  console.warn(
    `Варіант №2✅. \n  Якщо результат асинхронної функції (проміс) \n  використовується у зовнішньому коді:`,
  );
  console.log(
    `%c
    const fetchUsers = async () => {
        const response = await fetch("https://jsonplaceholder.typicode.com/users");
        const users = await response.json();
        return users;
    };

    fetchUsers()
        .then(users => console.log("users:", users))
        .catch(error => console.log(error));
    `,
    "color: blue; font-size: 18px",
  );
  const fetchUsers = async () => {
    const response = await fetch("https://jsonplaceholder.typicode.com/users1");
    const users2 = await response.json();
    return users2;
  };

  fetchUsers()
    .then((users2) => console.log("users2:", users2))
    .catch((error) => console.log(error))
    .finally(() =>
      console.log(
        "----------------------------------------------------------------------------------------------------------------------------------",
      ),
    );
}, 200);
// console.log("----------------------------------------------------------------------------------------------------------------------------------");

//! Обробка помилок в async/await. Варіант №2-1❌.
//? ✴️ Так працювати не буде
//? - await можна використовувати
//? тільки в тілі асинхронної функції.
setTimeout(() => {
  console.warn(
    `Варіант №2-1❌. \n  Так працювати не буде \n  - await можна використовувати \n  тільки в тілі асинхронної функції:`,
  );
  console.error(
    `%c
    const fetchUsers = async () => {
        const response = await fetch("https://jsonplaceholder.typicode.com/users");
        const users = await response.json();
        return users;
    };

    //! ❌ SyntaxError: await is only valid in async function
    const users = await fetchUsers();
    `,
    "color: blue; font-size: 18px",
  );
  const fetchUsers = async () => {
    const response = await fetch("https://jsonplaceholder.typicode.com/users");
    const users = await response.json();
    return users;
  };

  //! ❌ SyntaxError: await is only valid in async function
  // const users = await fetchUsers();
  console.log(
    "----------------------------------------------------------------------------------------------------------------------------------",
  );
}, 500);
// console.log("----------------------------------------------------------------------------------------------------------------------------------");

//! Обробка помилок в async/await. Варіант №3.
//? ✴️ Якщо результат асинхронної функції
//? використовується в іншій асинхронній функції,
//? помилки обробляються конструкцією try...catch.
//? Значення параметра error в блоці catch - це помилка,
//? яку згенерує await, якщо проміс буде відхилений.
setTimeout(() => {
  console.warn(
    `Варіант №3✅. \n  Якщо результат асинхронної функції (проміс) \n  використовується в іншій асинхронній функції:`,
  );
  console.log(
    `%c
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
    `,
    "color: blue; font-size: 18px",
  );
  const fetchUsers = async () => {
    const response = await fetch("https://jsonplaceholder.typicode.com/users");
    const users3 = await response.json();
    return users3;
  };

  const doStuff = async () => {
    try {
      const users3 = await fetchUsers();
      console.log("users:", users3);
      console.log(
        "----------------------------------------------------------------------------------------------------------------------------------",
      );
    } catch (error) {
      console.log(error.message);
    }
  };

  doStuff();
}, 1000);
// console.log("----------------------------------------------------------------------------------------------------------------------------------");

//! Послідовні запити з async/await
console.warn(
  `Послідовні запити з async/await​​: \n ${window.location.href.split("/").slice(0, -2).join("/") + "/"}${"lesson-FE4_19/images/sequential-queries.jpg"}`,
);
//? ✴️ Якщо одночасно необхідно зробити декілька запитів,
//? використовувати синтаксис async/await потрібно дуже обережно.
//? У наступному прикладі будуть виконані три послідовних запити,
//? тому що виконання асинхронної функції призупиняється,
//? коли інтерпретатор зустрічає await.
//? Крім того, парс результатів запитів
//? також буде послідовний, що забере більше часу.
const fetchUsers1 = async () => {
  const baseUrl = "https://jsonplaceholder.typicode.com";
  const firstResponse = await fetch(`${baseUrl}/users/1`);
  const secondResponse = await fetch(`${baseUrl}/users/2`);
  const thirdResponse = await fetch(`${baseUrl}/users/3`);

  const firstUser = await firstResponse.json();
  const secondUser = await secondResponse.json();
  const thirdUser = await thirdResponse.json();

  // console.log(firstUser, secondUser, thirdUser);
  console.log("firstUser  1️⃣:", firstUser);
  console.log("secondUser 2️⃣:", secondUser);
  console.log("thirdUser  3️⃣:", thirdUser);
  console.log(
    "------------------------------------------------------------------------------------------------------------------------",
  );
};
fetchUsers1();
// console.log("----------------------------------------------------------------------------------------------------------");

//! Паралельні запити з async/await
//? ✴️ У попередньому прикладі всі запити робляться послідовно,
//? тому спробуємо запустити їх паралельно.
//? Для цього створюється масив промісів,
//? після чого використовується метод Promise.all(),
//? для очікування їх виконання.
//? Масив промісів створюється методами map(),
//? filter() тощо, залежно від завдання.
//? ✴️ За такого підходу, запити запускаються паралельно,
//? що економить час очікування їх виконання,
//? який дорівнює тривалості «найповільнішого» з них.
//? Такий прийом підходить тільки у разі,
//? якщо запити не залежать один від одного.
setTimeout(() => {
  console.warn(
    `Паралельні запити з async/await​​: \n ${window.location.href.split("/").slice(0, -2).join("/") + "/"}${"lesson-FE4_19/images/parallel-queries.jpg"}`,
  );
  const fetchUsers = async () => {
    const baseUrl = "https://jsonplaceholder.typicode.com";
    const userIds = [1, 2, 3];

    //! 1.Створюємо масив промісів
    const arrayOfPromises = userIds.map(async (userId) => {
      const response = await fetch(`${baseUrl}/users/${userId}`);
      return response.json();
    });
    console.log("arrayOfPromises:", arrayOfPromises);

    //! 2.Запускаємо усі проміси паралельно і чекаємо на їх завершення
    const users = await Promise.all(arrayOfPromises);
    console.log("All users 1️⃣2️⃣3️⃣:", users);
    console.log(
      "------------------------------------------------------------------------------------------------------------------------",
    );
  };
  fetchUsers();
}, 500);
// console.log("----------------------------------------------------------------------------------------------------------");

//! Приклад паралельних запитів з async/await та конструкцією try...catch
//? ✴️ Створимо приклад з кнопкою, клікаючи на яку, виконується запит,
//? і обробляє можливу помилку конструкцією try...catch.
//? Це стандартний AJAX-код з використанням асинхронних функцій.
// setTimeout(() => {
//     console.warn("Приклад паралельних запитів з async/await та конструкцією try...catch:");
//     const fetchUsersBtn = document.querySelector(".btn");
//     const userList = document.querySelector(".user-list");

//     fetchUsersBtn.addEventListener(
//         "click",
//         async () => {
//             try {
//                 const users = await fetchUsers();
//                 renderUserListItems(users);
//             } catch (error) {
//                 console.log(error.message);
//             }
//     });

//     //! Функція робить запити та повертає відповідь сервера
//     async function fetchUsers() {
//         const baseUrl = "https://jsonplaceholder.typicode.com";
//         const userIds = [1, 2, 3, 4, 5];
//         //! 1.Створюємо масив промісів
//         const arrayOfPromises = userIds.map(async (userId) => {
//             const response = await fetch(`${baseUrl}/users/${userId}`);
//             return response.json();
//         });
//         //! 2.Запускаємо усі проміси паралельно і чекаємо на їх завершення
//         const users = await Promise.all(arrayOfPromises);
//         console.log("All users 1️⃣2️⃣3️⃣4️⃣5️⃣:", users);
//         return users;
//     };

//     //! Функція будує розмітку
//     function renderUserListItems(users) {
//         const markup = users
//             .map(
//                 (user) =>
//                     `
//                         <li class="item">
//                             <p><b>Name</b>: ${user.name}</p>
//                             <p><b>Email</b>: ${user.email}</p>
//                             <p><b>Company</b>: ${user.company.name}</p>
//                         </li>
//                     `
//             )
//             .join("");
//         userList.innerHTML = markup;
//         console.log("------------------------------------------------------------------------------------------------------------------------");
//     }
// }, 700);

//! 1. додати цифровий input з обмеження введення чисел від 1 до 10
//! 2. після введення даних в цей input, при натисканні на кнопку fetch users
//! буде відображено кількість елементів відповідно веденого input числа
setTimeout(() => {
  console.warn("Приклад паралельних запитів з async/await та try...catch");

  const fetchUsersBtn = document.querySelector(".btn");
  const userList = document.querySelector(".user-list");
  const input = document.querySelector(".count-users");

  //! Зміна тексту кнопки
  input.addEventListener("input", () => {
    const inputValue = input.value;

    if (inputValue === "") {
      fetchUsersBtn.textContent = "Fetch users";
      return;
    }

    fetchUsersBtn.textContent = `Fetch ${inputValue} users`;
  });

  //! Клік по кнопці
  fetchUsersBtn.addEventListener("click", async () => {
    const inputValue = Number(input.value);

    //! Перевірка значення
    if (inputValue < 1 || inputValue > 10 || !inputValue) {
      alert("Введіть число від 1 до 10");

      return;
    }
    try {
      const users = await fetchUsers32(inputValue);

      renderUserListItems(users);
    } catch (error) {
      console.log(error.message);
    }
  });

  //! Функція отримує користувачів
  async function fetchUsers32(countUsers) {
    const baseUrl = "https://jsonplaceholder.typicode.com";

    //! Масив id
    const userIds = [];

    //! Заповнення масиву числами
    for (let i = 1; i <= countUsers; i++) {
      userIds.push(i);
    }

    console.log("userIds:", userIds);

    //! Масив промісів
    const arrayOfPromises = userIds.map(async (userId) => {
      const response = await fetch(`${baseUrl}/users/${userId}`);

      return response.json();
    });

    //! Чекаємо всі запити
    const users = await Promise.all(arrayOfPromises);

    console.log("Users:", users);

    return users;
  }

  //! Рендер розмітки
  function renderUserListItems(users) {
    const markup = users
      .map(
        (user) => `
                    <li class="item">
                        <p><b>Name</b>: ${user.name}</p>
                        <p><b>Email</b>: ${user.email}</p>
                        <p><b>Company</b>: ${user.company.name}</p>
                    </li>
                `,
      )
      .join("");

    userList.innerHTML = markup;

    console.log("--------------------------------------------------");
  }
}, 700);
