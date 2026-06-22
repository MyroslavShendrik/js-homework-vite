import"./modulepreload-polyfill-3cfb730f.js";const v="http://localhost:3000/",L="posts",b=document.querySelector(".limit-input"),S=document.querySelector(".page-input"),P=document.querySelector(".search-input"),C=document.querySelector(".user-id-input"),k=document.querySelector(".title-input"),$=document.querySelector(".body-input"),w=document.querySelector(".fetch-btn"),d=document.querySelector(".posts-list"),M=document.querySelector(".total-posts"),I=document.querySelector(".current-page"),x=document.querySelector(".total-pages"),m=document.querySelector(".search-counter"),B=document.querySelector(".open-modal-btn"),j=document.querySelector(".close-modal-btn"),F=document.querySelector(".cancel-btn"),s=document.querySelector(".backdrop"),q=document.querySelector(".create-post-form"),i=document.querySelector(".confirm-backdrop"),T=document.querySelector(".confirm-btn"),N=document.querySelector(".reject-btn");let h=1,p=0,r=0,c=[],l=null;w.addEventListener("click",y);P.addEventListener("input",H);B.addEventListener("click",O);j.addEventListener("click",a);F.addEventListener("click",a);s.addEventListener("click",t=>{t.target===s&&a()});q.addEventListener("submit",R);T.addEventListener("click",U);N.addEventListener("click",g);i.addEventListener("click",t=>{t.target===i&&g()});//! ================= GET ALL POSTS =================
async function y(){const t=Number(b.value);let e=Number(S.value);if(t<1||t>10){alert("Кількість постів на сторінці повинна бути від 1 до 10");return}if(e<1){alert("Номер сторінки не може бути менше 1");return}try{const n=await fetch(`${v}${L}`);if(!n.ok)throw new Error(`Помилка сервера: ${n.status}`);c=await n.json(),p=c.length,r=Math.ceil(p/t),e>r&&r>0&&(alert(`Сторінки № ${e} не існує.
Всього сторінок: ${r}.
Буде показана остання сторінка.`),e=r,S.value=r),h=e;const o=E(c);D(),f(o),m.textContent="",P.value=""}catch(n){console.error(n),d.innerHTML=`
      <li>
        Помилка завантаження постів.
        Перевір, чи запущений json-server на http://localhost:3000
      </li>
    `}}//! ================= PAGINATION =================
function E(t){const e=Number(b.value),n=(h-1)*e,o=n+e;return t.slice(n,o)}//! ================= UPDATE INFO =================
function D(){M.textContent=p,I.textContent=h,x.textContent=r}//! ================= RENDER =================
function f(t){if(!t.length){d.innerHTML="<li>Пости не знайдені</li>";return}d.innerHTML=t.map(({id:e,userId:n,title:o,body:u})=>`
        <li class="list-item">
          <h3>${o}</h3>
          <p><b>Post id:</b> ${e}</p>
          <p><b>Author id:</b> ${n}</p>
          <p>${u}</p>
        </li>
      `).join("")}//! ================= SEARCH =================
function H(t){const e=t.target.value.toLowerCase().trim();if(!e){const o=E(c);f(o),m.textContent="";return}const n=c.filter(({title:o,body:u})=>o.toLowerCase().includes(e)||u.toLowerCase().includes(e));f(n),m.textContent=`Знайдено: ${n.length} ${A(n.length,["пост","пости","постів"])}`}//! ================= WORD FORM =================
function A(t,e){const n=t%10,o=t%100;return o>=11&&o<=14?e[2]:n===1?e[0]:n>=2&&n<=4?e[1]:e[2]}//! ================= CREATE POST MODAL =================
function O(){s.classList.remove("is-hidden")}function a(){s.classList.add("is-hidden"),q.reset()}function J(){i.classList.remove("is-hidden")}function g(){i.classList.add("is-hidden"),l=null}//! ================= CREATE POST =================
function R(t){t.preventDefault();const e=Number(C.value),n=k.value.trim(),o=$.value.trim();if(e<1||e>10){alert("Ідентифікатор автора повинен бути числом від 1 до 10");return}if(!n||!o){alert("Заповніть усі поля");return}l={userId:e,title:n,body:o},J()}//! ================= POST REQUEST =================
async function U(){if(l)try{const t=await fetch(`${v}${L}`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(l)});if(!t.ok)throw new Error(`Помилка створення: ${t.status}`);const e=await t.json();g(),a(),alert(`Пост створено. Його id: ${e.id}`),await y()}catch(t){console.error(t),alert("Не вдалося створити пост")}}//! ================= START =================
y();
