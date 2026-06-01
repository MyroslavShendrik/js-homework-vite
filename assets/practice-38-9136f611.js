import"./modulepreload-polyfill-3cfb730f.js";console.log(`%c 5.Приклади CRUD HTTP-запитів з async/await   
   і try...catch та використанням json-server `,"color: white; background-color: #D33F49");//! Приклади CRUD HTTP-запитів з async/await та використанням json-server
console.warn(`Для демонстрації прикладів необхідно: 
  замінити всі дані в файлі db.json 
  на дані з файла db-start.json, 
  а потім запустити json-server за адресою: 
  http://localhost:3000`);//! GET (отримати всіх користувачів):
//! GET (отримати всіх користувачів):
async function s(){try{const e=await(await fetch("http://localhost:3000/users")).json();console.log("GET(отримати всіх користувачів):",e),console.log("---------------------------------------------------------------------------------------------------------------")}catch(o){console.log("Error:",o)}}setTimeout(()=>{s()},0);//! POST (створити нового користувача):
//! PUT (заміна всього ресурсу (користувача)):
async function n(){try{const t=await(await fetch("http://localhost:3000/users/1",{method:"PUT",body:JSON.stringify({id:1,name:"New name",email:"new@example.com"}),headers:{"Content-Type":"application/json; charset=UTF-8"}})).json();console.log("PUT(заміна всього ресурсу):",t),console.log("---------------------------------------------------------------------------------------------------------------")}catch(o){console.log("Помилка:",o)}}setTimeout(()=>{n()},400);async function c(){try{const o=await fetch("http://localhost:3000/users/1",{method:"DELETE"});console.log("Delete(видалення користувача)"),console.log("---------------------------------------------------------------------------------------------------------------")}catch(o){console.log("Error:",o)}}setTimeout(()=>{c()},800);//! PATCH (часткове оновлення користувача):
async function a(){try{const t=await(await fetch("http://localhost:3000/users/1",{method:"PATCH",body:JSON.stringify({name:"Miroslav Updated"}),headers:{"Content-Type":"application/json; charset=UTF-8"}})).json();console.log("PATCH(часткове оновлення користувача):",t),console.log("---------------------------------------------------------------------------------------------------------------")}catch(o){console.log("Помилка:",o)}}setTimeout(()=>{a()},600);
