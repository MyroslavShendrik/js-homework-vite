import"./modulepreload-polyfill-3cfb730f.js";const i="https://jsonplaceholder.typicode.com/",o="posts",c=document.querySelector(".limit-input"),l=document.querySelector(".page-input"),s=document.querySelector(".fetch-btn"),r=document.querySelector(".posts-list");s.addEventListener("click",u);//! ================= MAIN FUNCTION =================
function u(){const t=Number(c.value),n=Number(l.value);if(t<1||n<1){alert("Введіть коректні значення");return}a(n,t).then(p).catch(e=>{console.error(e),r.innerHTML="<li>Помилка завантаження</li>"})}//! ================= FETCH =================
function a(t,n){return fetch(`${i}${o}?_page=${t}&_limit=${n}`).then(e=>{if(!e.ok)throw new Error("Network error");return e.json()})}//! ================= RENDER =================
function p(t){if(!Array.isArray(t)||t.length===0){r.innerHTML="<li>Немає постів</li>";return}const n=t.map(e=>`
        <li class="list-item">
          <h3>${e.title}</h3>
          <p>id: ${e.id}</p>
          <p>${e.body}</p>
        </li>
      `).join("");r.innerHTML=n}
