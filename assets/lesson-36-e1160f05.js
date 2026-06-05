import"./modulepreload-polyfill-3cfb730f.js";const r="https://jsonplaceholder.typicode.com/",c="posts",l=document.querySelector(".limit-input"),u=document.querySelector(".page-input"),p=document.querySelector(".fetch-btn"),n=document.querySelector(".posts-list"),m=document.querySelector(".total-posts"),h=document.querySelector(".current-page"),d=document.querySelector(".total-pages");let s=1,i=[];p.addEventListener("click",f);//! ================= INIT =================
y();//! ================= MAIN FUNCTION =================
function f(){const t=Number(l.value)||5,e=Number(u.value)||1;if(t<1||e<1){alert("Введіть коректні значення");return}s=e,a(),g(e,t).then(P).catch(o=>{console.error(o),n.innerHTML="<li>Помилка завантаження</li>"})}//! ================= FETCH POSTS =================
function g(t,e){return fetch(`${r}${c}?_page=${t}&_limit=${e}`).then(o=>{if(!o.ok)throw new Error("Network error");return o.json()})}//! ================= GET ALL POSTS =================
async function y(){try{const t=await fetch(`${r}${c}`);if(!t.ok)throw new Error("Network error");i=await t.json(),a()}catch(t){console.error(t)}}//! ================= INFO =================
function a(){const t=Number(l.value)||5,e=i.length,o=Math.ceil(e/t);m.textContent=e,h.textContent=s,d.textContent=o}//! ================= RENDER =================
function P(t){if(!Array.isArray(t)||t.length===0){n.innerHTML="<li>Немає постів</li>";return}const e=t.map(o=>`
        <li class="list-item">
          <h3>${o.title}</h3>
          <p>id: ${o.id}</p>
          <p>${o.body}</p>
        </li>
      `).join("");n.innerHTML=e}
