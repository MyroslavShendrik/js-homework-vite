import"./modulepreload-polyfill-3cfb730f.js";const f="http://localhost:3000/",g="posts",h=document.querySelector(".limit-input"),d=document.querySelector(".page-input"),v=document.querySelector(".search-input"),k=document.querySelector(".user-id-input"),M=document.querySelector(".title-input"),x=document.querySelector(".body-input"),I=document.querySelector(".fetch-btn"),s=document.querySelector(".posts-list"),j=document.querySelector(".total-posts"),w=document.querySelector(".current-page"),B=document.querySelector(".total-pages"),y=document.querySelector(".search-counter"),N=document.querySelector(".open-modal-btn"),T=document.querySelector(".close-modal-btn"),F=document.querySelector(".cancel-btn"),l=document.querySelector(".backdrop"),S=document.querySelector(".create-post-form"),i=document.querySelector(".confirm-backdrop"),A=document.querySelector(".confirm-btn"),H=document.querySelector(".reject-btn");let P=1,p=0,c=0,r=[],a=null;I.addEventListener("click",L);v.addEventListener("input",_);N.addEventListener("click",U);T.addEventListener("click",u);F.addEventListener("click",u);l.addEventListener("click",t=>{t.target===l&&u()});S.addEventListener("submit",z);A.addEventListener("click",G);H.addEventListener("click",b);i.addEventListener("click",t=>{t.target===i&&b()});//! ================= GET ALL POSTS =================
async function L(){const t=Number(h.value);let e=Number(d.value);if(t<1||t>10){alert("Кількість постів на сторінці повинна бути від 1 до 10");return}if(e<1){alert("Номер сторінки не може бути менше 1");return}try{const n=await fetch(`${f}${g}`);//! якщо я хочу то можу перенести код в catch
r=await n.json(),console.log("allPosts:",r),console.log("Кількість постів:",r.length),p=r.length,c=Math.ceil(p/t),e>c&&c>0&&(alert(`Сторінки № ${e} не існує.
Всього сторінок: ${c}.
Буде показана остання сторінка.`),e=c,d.value=c),P=e;const o=$(r);D(),m(o),v.value="",y.textContent=""}catch(n){console.error("Помилка getAllPosts:",n),s.innerHTML=`
      <li>
        Помилка завантаження постів.
        Перевір, чи запущений json-server на http://localhost:3000
      </li>
    `}}//! ================= PAGINATION =================
function $(t){const e=Number(h.value),n=(P-1)*e,o=n+e;return t.slice(n,o)}//! ================= UPDATE INFO =================
function D(){j.textContent=p,w.textContent=P,B.textContent=c}//! ================= RENDER POSTS =================
function m(t,e=""){if(s.innerHTML="",t.length===0){s.innerHTML="<li>Пости не знайдені 😕</li>";return}//!var 1 
//! var 2 
const n=t.map(({id:o,userId:q,title:E,body:C})=>`<li class="list-item">
       <h3>${J(E,e)}</h3>
       <p><b>Post id:</b> ${o}</p>
       <p><b>Author id:</b> ${q}</p>
       <p>${C}</p> 
      </li>`).join("");s.insertAdjacentHTML("beforeend",n)}//! ================= SEARCH =================
function _(t){const e=t.target.value.toLowerCase().trim();console.log("Введене слово:",e),console.log("Кількість постів у allPosts:",r.length),O(e)}//! Пошук 
function O(t){if(r.length===0){console.warn("Пости ще не завантажені.");return}if(t===""){const n=$(r);m(n),y.textContent="";return}const e=r.filter(({title:n})=>String(n).toLowerCase().includes(t));console.log("Знайдені пости:",e),console.log("Кількість знайдених:",e.length),R(e.length),m(e,t)}//! ================= SEARCH COUNTER =================
function R(t){y.textContent=`Знайдено: ${t} ${K(t,["пост","пости","постів"])}`}//! ================= HIGHLIGHT TITLE =================
function J(t,e){if(!e)return t;const n=e.replace(/[.*+?^${}()|[\]\\]/g,"\\$&"),o=new RegExp(`(${n})`,"gi");return String(t).replace(o,'<span class="highlight">$1</span>')}//! ================= WORD FORM =================
function K(t,e){const n=Math.abs(t)%100,o=n%10;return n>10&&n<20?e[2]:o>1&&o<5?e[1]:o===1?e[0]:e[2]}//! ================= CREATE POST MODAL =================
function U(){l.classList.remove("is-hidden")}function u(){l.classList.add("is-hidden"),S.reset()}function W(){i.classList.remove("is-hidden")}function b(){i.classList.add("is-hidden"),a=null}//! ================= CREATE POST =================
function z(t){t.preventDefault();const e=Number(k.value),n=M.value.trim(),o=x.value.trim();if(e<1||e>10){alert("Ідентифікатор автора повинен бути числом від 1 до 10");return}if(!n||!o){alert("Заповніть усі поля");return}a={userId:e,title:n,body:o},W()}//! ================= POST REQUEST =================
async function G(){if(a)try{const t=await fetch(`${f}${g}`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(a)});if(!t.ok)throw new Error(`Помилка створення: ${t.status}`);const e=await t.json();b(),u(),alert(`Пост створено. Його id: ${e.id}`),await L()}catch(t){console.error("Помилка createPost:",t),alert("Не вдалося створити пост")}}//! ================= START =================
function Q(){const t=`${f}${g}?_page=${Number(d.value)}&_per_page=${Number(h.value)}`;console.log("url:",t)}Q();
