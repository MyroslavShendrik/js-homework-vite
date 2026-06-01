
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
//! PUT (заміна всього ресурсу (користувача)):
async function updateUserPUT() {
    try{
        const updateUser = { id: 1, name: 'New name', email: 'new@example.com' };
   const response = await fetch("http://localhost:3000/users/1",
   {
   method: "PUT",
   body: JSON.stringify(updateUser),
   headers: {
     "Content-Type": "application/json; charset=UTF-8"
   }
   }
   );
   const data = await response.json();
   console.log("PUT(заміна всього ресурсу):", data);
    console.log("---------------------------------------------------------------------------------------------------------------",)
    } catch (error) {
        console.log("Помилка:", error);
    }
}
setTimeout(() => { updateUserPUT() }, 400);


// fetch(`${url}/hcTSSfzo8bo`, {
//   method: "PUT",
//   body: JSON.stringify(updatedUserPUT),
//   headers: {
//     "Content-Type": "application/json; charset=UTF-8"
//   }
// })
//   .then(res => res.json())
//   .then(data => console.log("PUT:", data))
//   .catch(err => console.log(err));
async function deleteUser()  {
    try{
        const response = await fetch("http://localhost:3000/users/1",
        {
            method: "DELETE" ,
        }
    );
    console.log("Delete(видалення користувача)");
    console.log("---------------------------------------------------------------------------------------------------------------",)
    } catch (error) {
        console.log("Error:",error)
    }
}
setTimeout(() =>{
    deleteUser();
}, 800);



//! PATCH (часткове оновлення користувача):
async function updateUserPATCH() {
  try {
    const updatedUser = {
      name: "Miroslav Updated",
    };

    const response = await fetch("http://localhost:3000/users/1", {
      method: "PATCH",
      body: JSON.stringify(updatedUser),
      headers: {
        "Content-Type": "application/json; charset=UTF-8",
      },
    });

    const data = await response.json();

    console.log("PATCH(часткове оновлення користувача):", data);
    console.log(
      "---------------------------------------------------------------------------------------------------------------"
    );
  } catch (error) {
    console.log("Помилка:", error);
  }
}

setTimeout(() => {
  updateUserPATCH();
}, 600);