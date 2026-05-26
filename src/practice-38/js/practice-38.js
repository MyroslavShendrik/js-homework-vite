
console.log(
  "%c 5.Приклади CRUD HTTP-запитів з async/await   \n   і try...catch та використанням json-server ",
  "color: white; background-color: #D33F49",
);

//! Приклади CRUD HTTP-запитів з async/await та використанням json-server
console.warn(
  "Для демонстрації прикладів необхідно: \n  замінити всі дані в файлі db.json \n  на дані з файла db-start.json, \n  а потім запустити json-server за адресою: \n  http://localhost:3000",
);
//! GET (отримати всіх користувачів):

//! GET (отримати всіх користувачів):
async function getUsers() {
  try {
    const response = await fetch("http://localhost:3000/users");
    const data = await response.json();
    console.log("GET(отримати всіх користувачів):", data);
    console.log(
      "---------------------------------------------------------------------------------------------------------------",
    );
  } catch (error) {
    console.log("Error:", error);
  }
}

setTimeout(() => {
  getUsers();
}, 0);

//! POST (створити нового користувача):
// async function createUser() {
//   try {
//     const newUser = {
//       name: "Miroslav",
//       email: "miroslavsendrik276@gmail.com",
//     };
//     const response = await fetch("http://localhost:3000/users", {
//       method: "POST",
//       body: JSON.stringify(newUser),
//       headers: {
//         "Content-Type": "application/json; charset=UTF-8",
//       },
//     });
//     const data = await response.json();
//     console.log("POST(створити нового коритсувача):", data);
//     console.log(
//       "---------------------------------------------------------------------------------------------------------------",
//     );
//   } catch (error) {
//     console.log("Помилка:", error);
//   }
// }
// setTimeout(() => {
//   createUser();
// }, 200);
