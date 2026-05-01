import"./modulepreload-polyfill-3cfb730f.js";//! ================= БАЗА =================
const a="https://jsonplaceholder.typicode.com/",b="posts",u=document.getElementById("input-elements"),i=document.getElementById("input-pages"),o=document.getElementById("posts-list"),r=document.getElementById("button-fetch"),l=document.querySelector(".prev-btn"),s=document.querySelector(".next-btn");//! ================= СТАН КНОПОК =================
l.setAttribute("disabled","");s.setAttribute("disabled","");r.removeAttribute("disabled");//! ================= СЛУХАЧІ =================
r.addEventListener("click",c);l.addEventListener("click",()=>{let t=Number(i.value);t<=1||(t--,i.value=t,c())});s.addEventListener("click",()=>{let t=Number(i.value);t++,i.value=t,c()});//! ================= ГОЛОВНА ФУНКЦІЯ =================
function c(){const t=Number(u.value),n=Number(i.value);if(t<1||n<1){alert("введіть коректні значення в полях вводу");return}m(n,t).then(e=>{p(e),r.setAttribute("disabled",""),s.removeAttribute("disabled"),n>1?l.removeAttribute("disabled"):l.setAttribute("disabled","")}).catch(e=>console.log(e))}//! ================= FETCH =================
function m(t,n){const e=`${a}${b}?_page=${t}&_limit=${n}`;return console.log("url:",e),fetch(e).then(d=>d.json())}//! ================= РЕНДЕР =================
function p(t){if(!t.length){o.innerHTML="<p>Немає постів</p>",s.setAttribute("disabled","");return}const n=t.map(e=>`
    <li class="list-item">
      <h3 class="list-title">${e.title}</h3>
      <p class="list-id">id: ${e.id}</p>
      <p class="list-text">${e.body}</p>
    </li>
  `).join("");o.innerHTML=n,t.length<Number(u.value)?s.setAttribute("disabled",""):s.removeAttribute("disabled")}
