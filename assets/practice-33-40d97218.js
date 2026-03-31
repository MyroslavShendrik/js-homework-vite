import"./modulepreload-polyfill-3cfb730f.js";//! Параметри рядка запиту
console.warn("Параметри рядка запиту:");console.log(`%c
    const url = "https://jsonplaceholder.typicode.com/users?_limit=5&_sort=name";
    `,"color: blue; font-size: 18px");const s=document.querySelector(".btn5"),r=document.querySelector(".user-list5");s.addEventListener("click",c);function c(){l().then(o=>a(o)).catch(o=>console.log(o))}function l(){return fetch("https://jsonplaceholder.typicode.com/users?_limit=5&_sort=name").then(o=>{if(!o.ok)throw new Error(o.status);return o.json()})}function a(o){const t=o.map(e=>`
                <li>
                    <p><b>Name</b>: ${e.name}</p>
                    <p><b>Email</b>: ${e.email}</p>
                    <p><b>Company</b>: ${e.company.name}</p>
                </li>
            `).join("");r.insertAdjacentHTML("beforeend",t),console.log("markup:",t),console.log("--------------------------------------------------------------------------------------------------------------------------")}//! Клас URLSearchParams
function i(){console.warn("Клас URLSearchParams:");const o="https://jsonplaceholder.typicode.com/",t="users";console.log("BaseURL:",o);//! "https://jsonplaceholder.typicode.com/"
const e=new URLSearchParams({_limit:5,_sort:"name"});console.log("searchParams.toString():",e.toString());//! "_limit=5&_sort=name"
const n=`${o}${t}?${e}`;console.log("url:",n);//! "https://jsonplaceholder.typicode.com/users?_limit=5&_sort=name"
return console.log("--------------------------------------------------------------------------------------------------------------------------"),n}i();
