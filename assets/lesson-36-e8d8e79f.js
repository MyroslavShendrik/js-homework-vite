import"./modulepreload-polyfill-3cfb730f.js";const P="http://localhost:3000/",S="posts",g=document.querySelector(".limit-input"),i=document.querySelector(".page-input"),v=document.querySelector(".search-input"),I=document.querySelector(".user-id-input"),N=document.querySelector(".title-input"),T=document.querySelector(".body-input"),A=document.querySelector(".fetch-btn"),p=document.querySelector(".posts-list"),_=document.querySelector(".total-posts"),F=document.querySelector(".current-page"),H=document.querySelector(".total-pages"),d=document.querySelector(".search-counter"),D=document.querySelector(".open-modal-btn"),R=document.querySelector(".close-modal-btn"),O=document.querySelector(".cancel-btn"),m=document.querySelector(".backdrop"),E=document.querySelector(".create-post-form"),f=document.querySelector(".confirm-backdrop"),U=document.querySelector(".confirm-btn"),J=document.querySelector(".reject-btn"),x=document.querySelector(".search-box"),C=document.querySelector(".info-box"),k=document.querySelector(".prev-btn"),B=document.querySelector(".next-btn");x.hidden=!0;C.hidden=!0;let c=1,b=0,r=0,l=[],h=null,s=[];A.addEventListener("click",M);k.addEventListener("click",tt);B.addEventListener("click",et);v.addEventListener("input",K);D.addEventListener("click",V);R.addEventListener("click",y);O.addEventListener("click",y);m.addEventListener("click",t=>{t.target===m&&y()});E.addEventListener("submit",Y);U.addEventListener("click",Z);J.addEventListener("click",$);f.addEventListener("click",t=>{t.target===f&&$()});//! ================= GET ALL POSTS =================
async function M(){const t=Number(g.value);let e=Number(i.value);if(t<1||t>10){alert("Кількість постів на сторінці повинна бути від 1 до 10");return}if(e<1){alert("Номер сторінки не може бути менше 1");return}try{const n=ot(),o=await fetch(`${P}${S}?${n}`);//! якщо я хочу то можу перенести код в catch
const a=await o.json();l=Array.isArray(a)?a:a.data||a.posts||[],console.log("allPosts:",l),console.log("Кількість постів:",l.length),b=l.length,r=Math.ceil(b/t),e>r&&r>0&&(alert(`Сторінки № ${e} не існує.
Всього сторінок: ${r}.
Буде показана остання сторінка.`),e=r,i.value=r),c=e,s=L(l),q(),u(s),x.hidden=!1,C.hidden=!1,v.value="",d.textContent=""}catch(n){console.error("Помилка getAllPosts:",n),p.innerHTML=`
      <li>
        Помилка завантаження постів.
        Перевір, чи запущений json-server на http://localhost:3000
      </li>
    `}}//! ================= PAGINATION =================
function L(t){Number(g.value),s=l,u(s)}//! ================= UPDATE INFO =================
function q(){_.textContent=b,F.textContent=c,H.textContent=r,nt()}//! ================= RENDER POSTS =================
function u(t,e=""){if(p.innerHTML="",t.length===0){p.innerHTML="<li>Пости не знайдені 😕</li>";return}//!var 1
//! var 2
const n=t.map(({id:o,userId:a,title:w,body:j})=>`<li class="list-item">
       <h3>${G(w,e)}</h3>
       <p><b>Post id:</b> ${o}</p>
       <p><b>Author id:</b> ${a}</p>
       <p>${j}</p> 
      </li>`).join("");p.insertAdjacentHTML("beforeend",n)}//! ================= SEARCH =================
function K(t){const e=t.target.value.toLowerCase().trim();console.log("Введене слово:",e),console.log("Кількість постів у allPosts:",l.length),W(e)}//! Пошук
function W(t){if(l.length===0){console.warn("Пости ще не завантажені.");return}if(t===""){u(s),d.textContent="";return}const e=s.filter(({title:n})=>n.toLowerCase().includes(t));console.log("Знайдені пости:",e),console.log("Кількість знайдених:",e.length),z(e.length),u(e,t)}//! ================= SEARCH COUNTER =================
function z(t){d.textContent=`Знайдено: ${t} ${Q(t,["пост","пости","постів"])}`}//! ================= HIGHLIGHT TITLE =================
function G(t,e){if(!e)return t;const n=e.replace(/[.*+?^${}()|[\]\\]/g,"\\$&"),o=new RegExp(`(${n})`,"gi");return String(t).replace(o,'<span class="highlight">$1</span>')}//! ================= WORD FORM =================
function Q(t,e){const n=Math.abs(t)%100,o=n%10;return n>10&&n<20?e[2]:o>1&&o<5?e[1]:o===1?e[0]:e[2]}//! ================= CREATE POST MODAL =================
function V(){m.classList.remove("is-hidden")}function y(){m.classList.add("is-hidden"),E.reset()}function X(){f.classList.remove("is-hidden")}function $(){f.classList.add("is-hidden"),h=null}//! ================= CREATE POST =================
function Y(t){t.preventDefault();const e=Number(I.value),n=N.value.trim(),o=T.value.trim();if(e<1||e>10){alert("Ідентифікатор автора повинен бути числом від 1 до 10");return}if(!n||!o){alert("Заповніть усі поля");return}h={userId:e,title:n,body:o},X()}//! ================= POST REQUEST =================
async function Z(){if(h)try{const t=await fetch(`${P}${S}`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(h)});if(!t.ok)throw new Error(`Помилка створення: ${t.status}`);const e=await t.json();$(),y(),alert(`Пост створено. Його id: ${e.id}`),await M()}catch(t){console.error("Помилка createPost:",t),alert("Не вдалося створити пост")}}function tt(){c!==1&&(c--,i.value=c,s=L(),q(),u(s),v.value="",d.textContent="")}function et(){c!==r&&(c++,i.value=c,s=L(),q(),u(s),v.value="",d.textContent="")}function nt(){k.disabled=c===1,B.disabled=c===r||r===0}function ot(){return new URLSearchParams({_page:i.value,_limit:g.value}).toString()}//! ================= START =================
function rt(){const t=`${P}${S}?_page=${Number(i.value)}&_per_page=${Number(g.value)}`;console.log("url:",t)}rt();
