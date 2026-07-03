import"./modulepreload-polyfill-3cfb730f.js";const d="http://localhost:3000/",p="posts",S=document.querySelector(".limit-input"),l=document.querySelector(".page-input"),E=document.querySelector(".search-input"),T=document.querySelector(".user-id-input"),j=document.querySelector(".title-input"),N=document.querySelector(".body-input"),D=document.querySelector(".fetch-btn"),a=document.querySelector(".posts-list"),_=document.querySelector(".total-posts"),A=document.querySelector(".current-page"),H=document.querySelector(".total-pages"),L=document.querySelector(".search-counter"),F=document.querySelector(".open-modal-btn"),R=document.querySelector(".close-modal-btn"),O=document.querySelector(".cancel-btn"),h=document.querySelector(".backdrop"),q=document.querySelector(".create-post-form"),b=document.querySelector(".confirm-backdrop"),U=document.querySelector(".confirm-btn"),J=document.querySelector(".reject-btn"),w=document.querySelector(".search-box"),k=document.querySelector(".info-box"),B=document.querySelector(".prev-btn"),x=document.querySelector(".next-btn");w.hidden=!0;k.hidden=!0;let c=1,v=0,r=0,i=[],g=null,f=null,u=[];D.addEventListener("click",m);B.addEventListener("click",nt);x.addEventListener("click",ot);E.addEventListener("input",W);F.addEventListener("click",X);R.addEventListener("click",y);O.addEventListener("click",y);h.addEventListener("click",t=>{t.target===h&&y()});q.addEventListener("submit",Y);U.addEventListener("click",tt);J.addEventListener("click",P);b.addEventListener("click",t=>{t.target===b&&P()});a.addEventListener("click",st);//! ================= GET ALL POSTS =================
async function m(){const t=Number(S.value);let e=Number(l.value);if(console.log("limit:",t),t<1||t>10){alert("Кількість постів на сторінці повинна бути від 1 до 10");return}if(e<1){alert("Номер сторінки не може бути менше 1");return}try{const n=ct();console.log("рядок запиту:",`${d}${p}?${n}`);const o=await fetch(`${d}${p}?${n}`);//! якщо я хочу то можу перенести код в catch
const s=await o.json();console.log("data:",s),i=s.data,u=i,v=s.items,r=s.pages,console.log("allPosts:",i),console.log("totalPosts:",v),console.log("totalPages:",r),e>r&&r>0&&(alert(`Сторінки № ${e} не існує.
Всього сторінок: ${r}.
Буде показана остання сторінка.`),e=r,l.value=r),c=e,console.log("currentPosts:",u);//! ?
K(),$(u),w.hidden=!1,k.hidden=!1,E.value="",L.textContent=""}catch(n){console.error("Помилка getAllPosts:",n),a.innerHTML=`
      <li>
        Помилка завантаження постів.
        Перевір, чи запущений json-server на http://localhost:3000
      </li>
    `}}//! ================= PAGINATION =================
//! ================= UPDATE INFO =================
function K(){_.textContent=v,A.textContent=c,H.textContent=r,rt()}//! ================= RENDER POSTS =================
function $(t,e=""){if(console.log("posts:",t),a.innerHTML="",t.length===0){a.innerHTML="<li>Пости не знайдені 😕</li>";return}//!var 1
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
    `).join("");a.insertAdjacentHTML("beforeend",n)}//! ================= SEARCH =================
function W(t){const e=t.target.value.toLowerCase().trim();console.log("Введене слово:",e),console.log("Кількість постів у allPosts:",i.length),z(e)}//! Пошук
function z(t){if(i.length===0){console.warn("Пости ще не завантажені.");return}if(t===""){$(u),L.textContent="";return}const e=u.filter(({title:n})=>n.toLowerCase().includes(t));console.log("Знайдені пости:",e),console.log("Кількість знайдених:",e.length),G(e.length),$(e,t)}//! ================= SEARCH COUNTER =================
function G(t){L.textContent=`Знайдено: ${t} ${V(t,["пост","пости","постів"])}`}//! ================= HIGHLIGHT TITLE =================
function Q(t,e){if(!e)return t;const n=e.replace(/[.*+?^${}()|[\]\\]/g,"\\$&"),o=new RegExp(`(${n})`,"gi");return String(t).replace(o,'<span class="highlight">$1</span>')}//! ================= WORD FORM =================
function V(t,e){const n=Math.abs(t)%100,o=n%10;return n>10&&n<20?e[2]:o>1&&o<5?e[1]:o===1?e[0]:e[2]}//! ================= CREATE POST MODAL =================
function X(){h.classList.remove("is-hidden")}function y(){h.classList.add("is-hidden"),q.reset()}function C(){b.classList.remove("is-hidden")}function P(){b.classList.add("is-hidden"),f=null}//! ================= CREATE POST =================
function Y(t){t.preventDefault();const e=Number(T.value),n=j.value.trim(),o=N.value.trim();if(e<1||e>10){alert("Ідентифікатор автора повинен бути числом від 1 до 10");return}if(!n||!o){alert("Заповніть усі поля");return}g={userId:e,title:n,body:o},C()}//! ================= POST REQUEST =================
async function Z(){if(g)try{const t=await fetch(`${d}${p}`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(g)});if(!t.ok)throw new Error(`Помилка створення: ${t.status}`);const e=await t.json();g=null,P(),y(),alert(`Пост створено. Його id: ${e.id}`),await m()}catch(t){console.error("Помилка createPost:",t),alert("Не вдалося створити пост")}}async function tt(){if(f!==null){await et(f);return}await Z()}async function et(t){try{const e=await fetch(`${d}${p}/${t}`,{method:"DELETE"});if(!e.ok)throw new Error(`Помилка видалення: ${e.status}`);f=null,P(),await m()}catch(e){console.error("Помилка deletePost:",e),alert("Не вдалося видалити пост.")}}async function nt(){c!==1&&(c--,l.value=c,await m())}async function ot(){c!==r&&(c++,l.value=c,await m())}function rt(){B.disabled=c===1,x.disabled=c===r||r===0}function ct(){return new URLSearchParams({_page:l.value,_per_page:S.value}).toString()}//! ================= CARD BUTTONS =================
function st(t){const e=t.target.closest(".edit-btn");if(e){const o=Number(e.dataset.id);console.log("Редагувати:",o);return}const n=t.target.closest(".delete-btn");if(n){f=Number(n.dataset.id),C();return}}//! ================= START =================
function lt(){const t=`${d}${p}?_page=${Number(l.value)}&_per_page=${Number(S.value)}`;console.log("url:",t)}lt();
