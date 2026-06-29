import"./modulepreload-polyfill-3cfb730f.js";const h="http://localhost:3000/",g="posts",y=document.querySelector(".limit-input"),d=document.querySelector(".page-input"),v=document.querySelector(".search-input"),M=document.querySelector(".user-id-input"),B=document.querySelector(".title-input"),I=document.querySelector(".body-input"),j=document.querySelector(".fetch-btn"),s=document.querySelector(".posts-list"),w=document.querySelector(".total-posts"),N=document.querySelector(".current-page"),T=document.querySelector(".total-pages"),b=document.querySelector(".search-counter"),F=document.querySelector(".open-modal-btn"),A=document.querySelector(".close-modal-btn"),H=document.querySelector(".cancel-btn"),l=document.querySelector(".backdrop"),L=document.querySelector(".create-post-form"),i=document.querySelector(".confirm-backdrop"),D=document.querySelector(".confirm-btn"),_=document.querySelector(".reject-btn"),q=document.querySelector(".search-box"),$=document.querySelector(".info-box");q.hidden=!0;$.hidden=!0;let P=1,p=0,r=0,c=[],a=null,f=[];j.addEventListener("click",E);v.addEventListener("input",J);F.addEventListener("click",G);A.addEventListener("click",u);H.addEventListener("click",u);l.addEventListener("click",t=>{t.target===l&&u()});L.addEventListener("submit",V);D.addEventListener("click",X);_.addEventListener("click",S);i.addEventListener("click",t=>{t.target===i&&S()});//! ================= GET ALL POSTS =================
async function E(){const t=Number(y.value);let e=Number(d.value);if(t<1||t>10){alert("Кількість постів на сторінці повинна бути від 1 до 10");return}if(e<1){alert("Номер сторінки не може бути менше 1");return}try{const n=await fetch(`${h}${g}`);//! якщо я хочу то можу перенести код в catch
c=await n.json(),console.log("allPosts:",c),console.log("Кількість постів:",c.length),p=c.length,r=Math.ceil(p/t),e>r&&r>0&&(alert(`Сторінки № ${e} не існує.
Всього сторінок: ${r}.
Буде показана остання сторінка.`),e=r,d.value=r),P=e,f=O(c),R(),m(f),q.hidden=!1,$.hidden=!1,v.value="",b.textContent=""}catch(n){console.error("Помилка getAllPosts:",n),s.innerHTML=`
      <li>
        Помилка завантаження постів.
        Перевір, чи запущений json-server на http://localhost:3000
      </li>
    `}}//! ================= PAGINATION =================
function O(t){const e=Number(y.value),n=(P-1)*e,o=n+e;return t.slice(n,o)}//! ================= UPDATE INFO =================
function R(){w.textContent=p,N.textContent=P,T.textContent=r}//! ================= RENDER POSTS =================
function m(t,e=""){if(s.innerHTML="",t.length===0){s.innerHTML="<li>Пости не знайдені 😕</li>";return}//!var 1
//! var 2
const n=t.map(({id:o,userId:C,title:x,body:k})=>`<li class="list-item">
       <h3>${W(x,e)}</h3>
       <p><b>Post id:</b> ${o}</p>
       <p><b>Author id:</b> ${C}</p>
       <p>${k}</p> 
      </li>`).join("");s.insertAdjacentHTML("beforeend",n)}//! ================= SEARCH =================
function J(t){const e=t.target.value.toLowerCase().trim();console.log("Введене слово:",e),console.log("Кількість постів у allPosts:",c.length),K(e)}//! Пошук
function K(t){if(c.length===0){console.warn("Пости ще не завантажені.");return}if(t===""){m(postsForCurrentPage),b.textContent="";return}const e=f.filter(({title:n})=>n.toLowerCase().includes(t));console.log("Знайдені пости:",e),console.log("Кількість знайдених:",e.length),U(e.length),m(e,t)}//! ================= SEARCH COUNTER =================
function U(t){b.textContent=`Знайдено: ${t} ${z(t,["пост","пости","постів"])}`}//! ================= HIGHLIGHT TITLE =================
function W(t,e){if(!e)return t;const n=e.replace(/[.*+?^${}()|[\]\\]/g,"\\$&"),o=new RegExp(`(${n})`,"gi");return String(t).replace(o,'<span class="highlight">$1</span>')}//! ================= WORD FORM =================
function z(t,e){const n=Math.abs(t)%100,o=n%10;return n>10&&n<20?e[2]:o>1&&o<5?e[1]:o===1?e[0]:e[2]}//! ================= CREATE POST MODAL =================
function G(){l.classList.remove("is-hidden")}function u(){l.classList.add("is-hidden"),L.reset()}function Q(){i.classList.remove("is-hidden")}function S(){i.classList.add("is-hidden"),a=null}//! ================= CREATE POST =================
function V(t){t.preventDefault();const e=Number(M.value),n=B.value.trim(),o=I.value.trim();if(e<1||e>10){alert("Ідентифікатор автора повинен бути числом від 1 до 10");return}if(!n||!o){alert("Заповніть усі поля");return}a={userId:e,title:n,body:o},Q()}//! ================= POST REQUEST =================
async function X(){if(a)try{const t=await fetch(`${h}${g}`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(a)});if(!t.ok)throw new Error(`Помилка створення: ${t.status}`);const e=await t.json();S(),u(),alert(`Пост створено. Його id: ${e.id}`),await E()}catch(t){console.error("Помилка createPost:",t),alert("Не вдалося створити пост")}}//! ================= START =================
function Y(){const t=`${h}${g}?_page=${Number(d.value)}&_per_page=${Number(y.value)}`;console.log("url:",t)}Y();
