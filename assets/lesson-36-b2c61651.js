import"./modulepreload-polyfill-3cfb730f.js";const c="http://localhost:3000/",s="posts",i=document.querySelector(".limit-input"),l=document.querySelector(".page-input"),P=document.querySelector(".fetch-btn"),r=document.querySelector(".posts-list"),w=document.querySelector(".total-posts"),S=document.querySelector(".current-page"),b=document.querySelector(".total-pages"),q=document.querySelector(".open-modal-btn"),v=document.querySelector(".close-modal-btn"),u=document.querySelector(".backdrop"),d=document.querySelector(".create-post-form"),L=document.querySelector(".user-id-input"),$=document.querySelector(".title-input"),k=document.querySelector(".body-input");let p=1,a=[];//! ================= INIT =================
y();P.addEventListener("click",m);q.addEventListener("click",I);v.addEventListener("click",h);d.addEventListener("submit",N);//! ================= MAIN FUNCTION =================
async function m(){const t=Number(i.value)||5;let e=Number(l.value)||1;if(t<1||e<1){alert("Введіть коректні значення");return}const o=Math.ceil(a.length/t);e>o&&(alert(`Такої сторінки не існує.
Максимальна кількість сторінок: ${o}`),e=o,l.value=o),p=e,f();try{const n=await E(e,t);M(n.data)}catch(n){console.error(n),r.innerHTML="<li>Помилка завантаження</li>"}}//! ================= FETCH POSTS =================
async function E(t,e){const o=await fetch(`${c}${s}?_page=${t}&_per_page=${e}`);if(!o.ok)throw new Error("Network error");return o.json()}//! ================= GET COLLECTION INFO =================
async function y(){try{const t=await fetch(`${c}${s}`);if(!t.ok)throw new Error("Network error");a=await t.json(),f()}catch(t){console.error(t)}}//! ================= INFO =================
function f(){const t=Number(i.value)||5,e=a.length,o=Math.ceil(e/t);w.textContent=e,S.textContent=p,b.textContent=o}//! ================= RENDER =================
function M(t){if(!Array.isArray(t)||t.length===0){r.innerHTML="<li>Немає постів</li>";return}const e=t.map(o=>`
      <li class="list-item">
        <h3>${o.title}</h3>
        <p>id: ${o.id}</p>
        <p>${o.body}</p>
      </li>
    `).join("");r.innerHTML=e}//! ================= MODAL =================
function I(){u.classList.remove("is-hidden")}function h(){u.classList.add("is-hidden")}//! ================= CREATE POST =================
async function N(t){t.preventDefault();const e=Number(L.value),o=$.value.trim(),n=k.value.trim();if(!e||!o||!n){alert("Заповніть усі поля");return}try{await j({userId:e,title:o,body:n}),d.reset(),h(),await y(),await m(),alert("Пост успішно створений")}catch(g){console.error(g),alert("Помилка створення поста")}}//! ================= ADD POST =================
async function j(t){const e=await fetch(`${c}${s}`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(t)});if(!e.ok)throw new Error("Не вдалося створити пост");return e.json()}
