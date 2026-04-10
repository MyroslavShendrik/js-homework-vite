import"./modulepreload-polyfill-3cfb730f.js";//! Параметри рядка запиту
console.warn("Параметри рядка запиту:");console.log(`%c
    const url = "https://jsonplaceholder.typicode.com/users?_limit=5&_sort=name";
    `,"color: blue; font-size: 18px");const c=document.querySelector(".btn5"),l=document.querySelector(".user-list5");c.addEventListener("click",r);function r(){a().then(e=>p(e)).catch(e=>console.log(e))}function a(){return fetch("https://jsonplaceholder.typicode.com/users?_limit=5&_sort=name").then(e=>{if(!e.ok)throw new Error(e.status);return e.json()})}function p(e){const n=e.map(o=>`
                <li>
                    <p><b>Name</b>: ${o.name}</p>
                    <p><b>Email</b>: ${o.email}</p>
                    <p><b>Company</b>: ${o.company.name}</p>
                </li>
            `).join("");l.insertAdjacentHTML("beforeend",n),console.log("markup:",n),console.log("--------------------------------------------------------------------------------------------------------------------------")}//! Клас URLSearchParams
function i(){console.warn("Клас URLSearchParams:");const e="https://jsonplaceholder.typicode.com/",n="users";console.log("BaseURL:",e);//! "https://jsonplaceholder.typicode.com/"
const o=new URLSearchParams({_limit:5,_sort:"name"});console.log("searchParams.toString():",o.toString());//! "_limit=5&_sort=name"
const t=`${e}${n}?${o}`;console.log("url:",t);//! "https://jsonplaceholder.typicode.com/users?_limit=5&_sort=name"
return console.log("--------------------------------------------------------------------------------------------------------------------------"),t}i();console.log("--------------------------------------------------------------------------------------------------------------------------");//! HTTP-заголовки
console.log(`%c
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
    `,"color: blue; font-size: 18px");const s=new Headers({"Content-Type":"application/json","X-Custom-Header":"custom value"});s.append("Content-Type","text/bash");s.append("X-Custom-Header","custom value");s.has("Content-Type");//! true
s.get("Content-Type");//! "text/bash"
s.set("Content-Type","application/json");s.delete("X-Custom-Header");console.log("----------------------------------------------------------------------------------");console.log(`%c
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
    `,"color: blue; font-size: 18px");fetch("https://jsonplaceholder.typicode.com/users",{headers:{Accept:"application/json"}}).then(e=>{//! логіка обробки відповіді
});console.log("----------------------------------------------------------------------------------");//! Крос-доменні запити
console.warn(`Крос-доменні запити: 
 ${window.location.href.split("/").slice(0,-2).join("/")+"/"}lesson-FE4_16/images/cors.png`);console.warn(`Request Headers: 
 ${window.location.href.split("/").slice(0,-2).join("/")+"/"}lesson-FE4_16/images/cors-request-headers.jpg`);console.log(`%c
    GET /users
    Host: jsonplaceholder.typicode.com
    Origin: http://127.0.0.1:5500
    `,"color: blue; font-size: 18px");console.warn(`Response Headers: 
 ${window.location.href.split("/").slice(0,-2).join("/")+"/"}lesson-FE4_16/images/cors-response-headers.jpg`);console.log(`%c
    # Private API
    Access-Control-Allow-Origin: http://127.0.0.1:5500

    # Public API
    Access-Control-Allow-Origin: *
    `,"color: blue; font-size: 18px");console.log("-----------------------------------------------------------------------------------");
