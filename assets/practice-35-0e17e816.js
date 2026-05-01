import"./modulepreload-polyfill-3cfb730f.js";//! Операції CRUD
//! Method  Description
//! Meтод GET. Операція READ. Читання
const t="posts";fetch(`https://jsonplaceholder.typicode.com/${t}`).then(o=>o.json()).then(o=>console.log("posts:",o)).catch(o=>console.log(o)).finally(()=>console.log(". . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . "));//! Змініть це число, щоб отримати різні публікації.
const e=9;setTimeout(()=>{fetch(`https://jsonplaceholder.typicode.com/${t}/${e}`).then(o=>o.json()).then(o=>console.log(`post №${e}:`,o)).catch(o=>console.log(o)).finally(()=>console.log("-----------------------------------------------------------------------------------------------------"))});//! Meтод POST. Операція CREATE. Створення
console.log(`%c
        📌 Відповідь сервера на POST:
    {
        "id": 101,
        "author": "Fay Rodis",
        "title": "Treatise on Inferno"
    }
    `,"color: blue; font-size: 18px");console.log(". . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .");console.warn(`URLSearchParams: 
 https://uk.javascript.info/url`);const n={author:"Fay Rodis",title:"Treatise on Inferno"},s={method:"POST",body:JSON.stringify(n),headers:{"Content-Type":"application/json; charset=UTF-8"}};fetch(`https://jsonplaceholder.typicode.com/${t}`,s).then(o=>o.json()).then(o=>console.log("Відповідь сервера на POST:",o)).catch(o=>console.log(o)).finally(()=>console.log("-------------------------------------------------------------------------------------------"));
