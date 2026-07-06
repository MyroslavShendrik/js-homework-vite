import"./modulepreload-polyfill-3cfb730f.js";const h="http://localhost:3000/",g="posts",q=document.querySelector(".limit-input"),f=document.querySelector(".page-input"),w=document.querySelector(".search-input"),T=document.querySelector(".user-id-input"),j=document.querySelector(".title-input"),D=document.querySelector(".body-input"),N=document.querySelector(".fetch-btn"),i=document.querySelector(".posts-list"),A=document.querySelector(".total-posts"),H=document.querySelector(".current-page"),F=document.querySelector(".total-pages"),E=document.querySelector(".search-counter"),R=document.querySelector(".open-modal-btn"),_=document.querySelector(".close-modal-btn"),O=document.querySelector(".cancel-btn"),b=document.querySelector(".backdrop"),k=document.querySelector(".create-post-form"),y=document.querySelector(".confirm-backdrop"),U=document.querySelector(".confirm-btn"),J=document.querySelector(".reject-btn"),B=document.querySelector(".search-box"),x=document.querySelector(".info-box"),l=document.querySelector(".prev-btn"),a=document.querySelector(".next-btn");B.hidden=!0;x.hidden=!0;l.hidden=!0;a.hidden=!0;let c=1,L=0,r=0,u=[],P=null,p=null,d=[];N.addEventListener("click",m);l.addEventListener("click",nt);a.addEventListener("click",ot);w.addEventListener("input",W);R.addEventListener("click",X);_.addEventListener("click",v);O.addEventListener("click",v);b.addEventListener("click",t=>{t.target===b&&v()});k.addEventListener("submit",Y);U.addEventListener("click",tt);J.addEventListener("click",S);y.addEventListener("click",t=>{t.target===y&&S()});i.addEventListener("click",st);//! ================= GET ALL POSTS =================
async function m(){const t=Number(q.value);let e=Number(f.value);if(console.log("limit:",t),t<1||t>10){alert("Кількість постів на сторінці повАинна бути від 1 до 10");return}if(e<1){alert("Номер сторінки не може бути менше 1");return}try{const n=ct();console.log("рядок запиту:",`${h}${g}?${n}`);const o=await fetch(`${h}${g}?${n}`);//! якщо я хочу то можу перенести код в catch
const s=await o.json();console.log("data:",s),u=s.data,d=u,L=s.items,r=s.pages,console.log("allPosts:",u),console.log("totalPosts:",L),console.log("totalPages:",r),e>r&&r>0&&(alert(`Сторінки № ${e} не існує.
Всього сторінок: ${r}.
Буде показана остання сторінка.`),e=r,f.value=r),c=e,console.log("currentPosts:",d);//! ?
K(),$(d),B.hidden=!1,x.hidden=!1,l.hidden=!1,a.hidden=!1,w.value="",E.textContent=""}catch(n){console.error("Помилка getAllPosts:",n),i.innerHTML=`
      <li>
        Помилка завантаження постів.
        Перевір, чи запущений json-server на http://localhost:3000
      </li>
    `}}//! ================= PAGINATION =================
//! ================= UPDATE INFO =================
function K(){A.textContent=L,H.textContent=c,F.textContent=r,rt()}//! ================= RENDER POSTS =================
function $(t,e=""){if(console.log("posts:",t),i.innerHTML="",t.length===0){i.innerHTML="<li>Пости не знайдені 😕</li>";return}//!var 1
//! var 2
const n=t.map(({id:o,userId:s,title:M,body:I})=>`
      <li class="list-item">

        <h3>${Q(M,e)}</h3>

        <p><b>Post id:</b> ${o}</p>

        <p><b>Author id:</b> ${s}</p>

        <p>${I}</p>

        <div class="card-buttons">

          <button
            class="edit-btn"
            data-id="${o}"
          >
            ✏️ Edit
          </button>

          <button
            class="delete-btn"
            data-id="${o}"
          >
            🗑 Delete
          </button>

        </div>

      </li>
    `).join("");i.insertAdjacentHTML("beforeend",n)}//! ================= SEARCH =================
function W(t){const e=t.target.value.toLowerCase().trim();console.log("Введене слово:",e),console.log("Кількість постів у allPosts:",u.length),z(e)}//! Пошук
function z(t){if(u.length===0){console.warn("Пости ще не завантажені.");return}if(l.hidden=!0,a.hidden=!0,t===""){$(d),E.textContent="",l.hidden=!1,a.hidden=!1;return}const e=d.filter(({title:n})=>n.toLowerCase().includes(t));console.log("Знайдені пости:",e),console.log("Кількість знайдених:",e.length),G(e.length),$(e,t)}//! ================= SEARCH COUNTER =================
function G(t){E.textContent=`Знайдено: ${t} ${V(t,["пост","пости","постів"])}`}//! ================= HIGHLIGHT TITLE =================
function Q(t,e){if(!e)return t;const n=e.replace(/[.*+?^${}()|[\]\\]/g,"\\$&"),o=new RegExp(`(${n})`,"gi");return String(t).replace(o,'<span class="highlight">$1</span>')}//! ================= WORD FORM =================
function V(t,e){const n=Math.abs(t)%100,o=n%10;return n>10&&n<20?e[2]:o>1&&o<5?e[1]:o===1?e[0]:e[2]}//! ================= CREATE POST MODAL =================
function X(){b.classList.remove("is-hidden")}function v(){b.classList.add("is-hidden"),k.reset()}function C(){y.classList.remove("is-hidden")}function S(){y.classList.add("is-hidden"),p=null,P=null}//! ================= CREATE POST =================
function Y(t){t.preventDefault();const e=Number(T.value),n=j.value.trim(),o=D.value.trim();if(e<1||e>10){alert("Ідентифікатор автора повинен бути числом від 1 до 10");return}if(!n||!o){alert("Заповніть усі поля");return}P={userId:e,title:n,body:o},C()}//! ================= POST REQUEST =================
async function Z(){if(P)try{const t=await fetch(`${h}${g}`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(P)});if(!t.ok)throw new Error(`Помилка створення: ${t.status}`);const e=await t.json();S(),v(),alert(`Пост створено. Його id: ${e.id}`),await m()}catch(t){console.error("Помилка createPost:",t),alert("Не вдалося створити пост")}}async function tt(){if(p!==null){await et(p);return}await Z()}async function et(t){try{const e=await fetch(`${h}${g}/${t}`,{method:"DELETE"});if(!e.ok)throw new Error(`Помилка видалення: ${e.status}`);p=null,S(),await m()}catch(e){console.error("Помилка deletePost:",e),alert("Не вдалося видалити пост.")}}async function nt(){c!==1&&(c--,f.value=c,await m())}async function ot(){c!==r&&(c++,f.value=c,await m())}function rt(){l.disabled=c===1,a.disabled=c===r||r===0}function ct(){return new URLSearchParams({_page:f.value,_per_page:q.value}).toString()}//! ================= CARD BUTTONS =================
function st(t){const e=t.target.closest(".edit-btn");if(e){const o=Number(e.dataset.id);console.log("Редагувати:",o);return}const n=t.target.closest(".delete-btn");if(n){p=Number(n.dataset.id),C();return}}//! ================= START =================
