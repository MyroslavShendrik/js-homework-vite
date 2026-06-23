import"./modulepreload-polyfill-3cfb730f.js";const S="http://localhost:3000/",b="posts",L=document.querySelector(".limit-input"),P=document.querySelector(".page-input"),v=document.querySelector(".search-input"),k=document.querySelector(".user-id-input"),M=document.querySelector(".title-input"),I=document.querySelector(".body-input"),w=document.querySelector(".fetch-btn"),s=document.querySelector(".posts-list"),x=document.querySelector(".total-posts"),B=document.querySelector(".current-page"),T=document.querySelector(".total-pages"),f=document.querySelector(".search-counter"),j=document.querySelector(".open-modal-btn"),F=document.querySelector(".close-modal-btn"),N=document.querySelector(".cancel-btn"),l=document.querySelector(".backdrop"),q=document.querySelector(".create-post-form"),i=document.querySelector(".confirm-backdrop"),H=document.querySelector(".confirm-btn"),A=document.querySelector(".reject-btn");let g=1,p=0,c=0,r=[],a=null;w.addEventListener("click",h);v.addEventListener("input",O);j.addEventListener("click",W);F.addEventListener("click",u);N.addEventListener("click",u);l.addEventListener("click",t=>{t.target===l&&u()});q.addEventListener("submit",G);H.addEventListener("click",Q);A.addEventListener("click",y);i.addEventListener("click",t=>{t.target===i&&y()});//! ================= GET ALL POSTS =================
async function h(){const t=Number(L.value);let e=Number(P.value);if(t<1||t>10){alert("Кількість постів на сторінці повинна бути від 1 до 10");return}if(e<1){alert("Номер сторінки не може бути менше 1");return}try{const n=await fetch(`${S}${b}`);if(!n.ok)throw new Error(`Помилка сервера: ${n.status}`);r=await n.json(),console.log("allPosts:",r),console.log("Кількість постів:",r.length),p=r.length,c=Math.ceil(p/t),e>c&&c>0&&(alert(`Сторінки № ${e} не існує.
Всього сторінок: ${c}.
Буде показана остання сторінка.`),e=c,P.value=c),g=e;const o=E(r);D(),m(o),v.value="",f.textContent=""}catch(n){console.error("Помилка getAllPosts:",n),s.innerHTML=`
      <li>
        Помилка завантаження постів.
        Перевір, чи запущений json-server на http://localhost:3000
      </li>
    `}}//! ================= PAGINATION =================
function E(t){const e=Number(L.value),n=(g-1)*e,o=n+e;return t.slice(n,o)}//! ================= UPDATE INFO =================
function D(){x.textContent=p,B.textContent=g,T.textContent=c}//! ================= RENDER POSTS =================
function m(t,e=""){if(s.innerHTML="",t.length===0){s.innerHTML="<li>Пости не знайдені 😕</li>";return}t.forEach(({id:n,userId:o,title:$,body:C})=>{const d=document.createElement("li");d.classList.add("list-item"),d.innerHTML=`
      <h3>${K($,e)}</h3>
      <p><b>Post id:</b> ${n}</p>
      <p><b>Author id:</b> ${o}</p>
      <p>${C}</p>
    `,s.appendChild(d)})}//! ================= SEARCH =================
function O(t){const e=t.target.value.toLowerCase().trim();console.log("Введене слово:",e),console.log("Кількість постів у allPosts:",r.length),R(e)}//! Пошук 
function R(t){if(r.length===0){console.warn("Пости ще не завантажені.");return}if(t===""){const n=E(r);m(n),f.textContent="";return}const e=r.filter(({title:n})=>String(n).toLowerCase().includes(t));console.log("Знайдені пости:",e),console.log("Кількість знайдених:",e.length),J(e.length),m(e,t)}//! ================= SEARCH COUNTER =================
function J(t){f.textContent=`Знайдено: ${t} ${U(t,["пост","пости","постів"])}`}//! ================= HIGHLIGHT TITLE =================
function K(t,e){if(!e)return t;const n=e.replace(/[.*+?^${}()|[\]\\]/g,"\\$&"),o=new RegExp(`(${n})`,"gi");return String(t).replace(o,'<span class="highlight">$1</span>')}//! ================= WORD FORM =================
function U(t,e){const n=Math.abs(t)%100,o=n%10;return n>10&&n<20?e[2]:o>1&&o<5?e[1]:o===1?e[0]:e[2]}//! ================= CREATE POST MODAL =================
function W(){l.classList.remove("is-hidden")}function u(){l.classList.add("is-hidden"),q.reset()}function z(){i.classList.remove("is-hidden")}function y(){i.classList.add("is-hidden"),a=null}//! ================= CREATE POST =================
function G(t){t.preventDefault();const e=Number(k.value),n=M.value.trim(),o=I.value.trim();if(e<1||e>10){alert("Ідентифікатор автора повинен бути числом від 1 до 10");return}if(!n||!o){alert("Заповніть усі поля");return}a={userId:e,title:n,body:o},z()}//! ================= POST REQUEST =================
async function Q(){if(a)try{const t=await fetch(`${S}${b}`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(a)});if(!t.ok)throw new Error(`Помилка створення: ${t.status}`);const e=await t.json();y(),u(),alert(`Пост створено. Його id: ${e.id}`),await h()}catch(t){console.error("Помилка createPost:",t),alert("Не вдалося створити пост")}}//! ================= START =================
h();
