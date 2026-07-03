import"./modulepreload-polyfill-3cfb730f.js";const p="http://localhost:3000/",m="posts",q=document.querySelector(".limit-input"),u=document.querySelector(".page-input"),w=document.querySelector(".search-input"),T=document.querySelector(".user-id-input"),j=document.querySelector(".title-input"),D=document.querySelector(".body-input"),N=document.querySelector(".fetch-btn"),l=document.querySelector(".posts-list"),A=document.querySelector(".total-posts"),H=document.querySelector(".current-page"),F=document.querySelector(".total-pages"),E=document.querySelector(".search-counter"),R=document.querySelector(".open-modal-btn"),_=document.querySelector(".close-modal-btn"),O=document.querySelector(".cancel-btn"),h=document.querySelector(".backdrop"),k=document.querySelector(".create-post-form"),g=document.querySelector(".confirm-backdrop"),U=document.querySelector(".confirm-btn"),J=document.querySelector(".reject-btn"),B=document.querySelector(".search-box"),x=document.querySelector(".info-box"),y=document.querySelector(".prev-btn"),P=document.querySelector(".next-btn");B.hidden=!0;x.hidden=!0;y.hidden=!0;P.hidden=!0;let c=1,L=0,r=0,a=[],b=null,d=null,i=[];N.addEventListener("click",f);y.addEventListener("click",nt);P.addEventListener("click",ot);w.addEventListener("input",W);R.addEventListener("click",X);_.addEventListener("click",v);O.addEventListener("click",v);h.addEventListener("click",t=>{t.target===h&&v()});k.addEventListener("submit",Y);U.addEventListener("click",tt);J.addEventListener("click",S);g.addEventListener("click",t=>{t.target===g&&S()});l.addEventListener("click",st);//! ================= GET ALL POSTS =================
async function f(){const t=Number(q.value);let e=Number(u.value);if(console.log("limit:",t),t<1||t>10){alert("Кількість постів на сторінці повАинна бути від 1 до 10");return}if(e<1){alert("Номер сторінки не може бути менше 1");return}try{const n=ct();console.log("рядок запиту:",`${p}${m}?${n}`);const o=await fetch(`${p}${m}?${n}`);//! якщо я хочу то можу перенести код в catch
const s=await o.json();console.log("data:",s),a=s.data,i=a,L=s.items,r=s.pages,console.log("allPosts:",a),console.log("totalPosts:",L),console.log("totalPages:",r),e>r&&r>0&&(alert(`Сторінки № ${e} не існує.
Всього сторінок: ${r}.
Буде показана остання сторінка.`),e=r,u.value=r),c=e,console.log("currentPosts:",i);//! ?
K(),$(i),B.hidden=!1,x.hidden=!1,y.hidden=!1,P.hidden=!1,w.value="",E.textContent=""}catch(n){console.error("Помилка getAllPosts:",n),l.innerHTML=`
      <li>
        Помилка завантаження постів.
        Перевір, чи запущений json-server на http://localhost:3000
      </li>
    `}}//! ================= PAGINATION =================
//! ================= UPDATE INFO =================
function K(){A.textContent=L,H.textContent=c,F.textContent=r,rt()}//! ================= RENDER POSTS =================
function $(t,e=""){if(console.log("posts:",t),l.innerHTML="",t.length===0){l.innerHTML="<li>Пости не знайдені 😕</li>";return}//!var 1
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
    `).join("");l.insertAdjacentHTML("beforeend",n)}//! ================= SEARCH =================
function W(t){const e=t.target.value.toLowerCase().trim();console.log("Введене слово:",e),console.log("Кількість постів у allPosts:",a.length),z(e)}//! Пошук
function z(t){if(a.length===0){console.warn("Пости ще не завантажені.");return}if(t===""){$(i),E.textContent="";return}const e=i.filter(({title:n})=>n.toLowerCase().includes(t));console.log("Знайдені пости:",e),console.log("Кількість знайдених:",e.length),G(e.length),$(e,t)}//! ================= SEARCH COUNTER =================
function G(t){E.textContent=`Знайдено: ${t} ${V(t,["пост","пости","постів"])}`}//! ================= HIGHLIGHT TITLE =================
function Q(t,e){if(!e)return t;const n=e.replace(/[.*+?^${}()|[\]\\]/g,"\\$&"),o=new RegExp(`(${n})`,"gi");return String(t).replace(o,'<span class="highlight">$1</span>')}//! ================= WORD FORM =================
function V(t,e){const n=Math.abs(t)%100,o=n%10;return n>10&&n<20?e[2]:o>1&&o<5?e[1]:o===1?e[0]:e[2]}//! ================= CREATE POST MODAL =================
function X(){h.classList.remove("is-hidden")}function v(){h.classList.add("is-hidden"),k.reset()}function C(){g.classList.remove("is-hidden")}function S(){g.classList.add("is-hidden"),d=null,b=null}//! ================= CREATE POST =================
function Y(t){t.preventDefault();const e=Number(T.value),n=j.value.trim(),o=D.value.trim();if(e<1||e>10){alert("Ідентифікатор автора повинен бути числом від 1 до 10");return}if(!n||!o){alert("Заповніть усі поля");return}b={userId:e,title:n,body:o},C()}//! ================= POST REQUEST =================
async function Z(){if(b)try{const t=await fetch(`${p}${m}`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(b)});if(!t.ok)throw new Error(`Помилка створення: ${t.status}`);const e=await t.json();S(),v(),alert(`Пост створено. Його id: ${e.id}`),await f()}catch(t){console.error("Помилка createPost:",t),alert("Не вдалося створити пост")}}async function tt(){if(d!==null){await et(d);return}await Z()}async function et(t){try{const e=await fetch(`${p}${m}/${t}`,{method:"DELETE"});if(!e.ok)throw new Error(`Помилка видалення: ${e.status}`);d=null,S(),await f()}catch(e){console.error("Помилка deletePost:",e),alert("Не вдалося видалити пост.")}}async function nt(){c!==1&&(c--,u.value=c,await f())}async function ot(){c!==r&&(c++,u.value=c,await f())}function rt(){y.disabled=c===1,P.disabled=c===r||r===0}function ct(){return new URLSearchParams({_page:u.value,_per_page:q.value}).toString()}//! ================= CARD BUTTONS =================
function st(t){const e=t.target.closest(".edit-btn");if(e){const o=Number(e.dataset.id);console.log("Редагувати:",o);return}const n=t.target.closest(".delete-btn");if(n){d=Number(n.dataset.id),C();return}}//! ================= START =================
