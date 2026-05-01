import"./modulepreload-polyfill-3cfb730f.js";//! Операції CRUD
//! Method  Description
//! Meтод GET. Операція READ. Читання
const e="posts";fetch(`https://jsonplaceholder.typicode.com/${e}`).then(o=>o.json()).then(o=>console.log("posts:",o)).catch(o=>console.log(o)).finally(()=>console.log(". . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . "));//! Змініть це число, щоб отримати різні публікації.
const t=9;setTimeout(()=>{fetch(`https://jsonplaceholder.typicode.com/${e}/${t}`).then(o=>o.json()).then(o=>console.log(`post №${t}:`,o)).catch(o=>console.log(o)).finally(()=>console.log("-----------------------------------------------------------------------------------------------------"))});//! Meтод POST. Операція CREATE. Створення
console.log(`%c
        📌 Відповідь сервера на POST:
    {
        "id": 101,
        "author": "Fay Rodis",
        "title": "Treatise on Inferno"
    }
    `,"color: blue; font-size: 18px");console.log(". . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .");console.warn(`URLSearchParams: 
 https://uk.javascript.info/url`);const l={author:"Fay Rodis",title:"Treatise on Inferno"},c={method:"POST",body:JSON.stringify(l),headers:{"Content-Type":"application/json; charset=UTF-8"}};fetch(`https://jsonplaceholder.typicode.com/${e}`,c).then(o=>o.json()).then(o=>console.log("Відповідь сервера на POST:",o)).catch(o=>console.log(o)).finally(()=>console.log("-------------------------------------------------------------------------------------------"));//! Meтоди PUT і PATCH. Операція UPDATE. Оновлення
console.log(`%c
        📌 Відповідь сервера на PATCH:
    {
        "id": 9,
        "author": "Fay Rodis",
        "title": "Treatise on Inferno",
        userId: 1,
        body: "consectetur animi nesciunt iure dolore
enim quia ad
veniam autem ut quam aut nobis
et est aut quod aut provident voluptas autem voluptas"
    }
    `,"color: blue; font-size: 18px");console.log(". . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .");console.log(`%c
        📌 Відповідь сервера на PUT:
    {
        "id": 9,
        "author": "Fay Rodis",
        "title": "Treatise on Inferno"
    }
    `,"color: blue; font-size: 18px");console.log(". . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .");const n={id:9,author:"Fay Rodis",title:"Treatise on Inferno"},s={method:"PUT",body:JSON.stringify(n),headers:{"Content-Type":"application/json; charset=UTF-8"}};fetch(`https://jsonplaceholder.typicode.com/posts/${n.id}`,s).then(o=>o.json()).then(o=>console.log(`Відповідь сервера на ${s.method}:`,o)).catch(o=>console.log(o)).finally(()=>console.log("-----------------------------------------------------------------------------------------------------"));//! Meтод DELETE. Операція DELETE. Видалення
console.log(`%c
        📌 Відповідь сервера на DELETE:
    Post deleted
    Status: 200
    `,"color: blue; font-size: 18px");console.log(". . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .");const a=9,i={method:"DELETE"};fetch(`https://jsonplaceholder.typicode.com/posts/${a}`,i).then(o=>console.log("Відповідь response.status на DELETE:",o.status)).catch(o=>console.log(o)).finally(()=>console.log("-----------------------------------------------------------------------------------------------------------------------------"));
