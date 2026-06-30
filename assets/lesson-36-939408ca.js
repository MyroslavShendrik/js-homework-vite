import"./modulepreload-polyfill-3cfb730f.js";const m="http://localhost:3000/",g="posts",S=document.querySelector(".limit-input"),i=document.querySelector(".page-input"),v=document.querySelector(".search-input"),I=document.querySelector(".user-id-input"),T=document.querySelector(".title-input"),A=document.querySelector(".body-input"),N=document.querySelector(".fetch-btn"),p=document.querySelector(".posts-list"),_=document.querySelector(".total-posts"),F=document.querySelector(".current-page"),H=document.querySelector(".total-pages"),d=document.querySelector(".search-counter"),D=document.querySelector(".open-modal-btn"),R=document.querySelector(".close-modal-btn"),O=document.querySelector(".cancel-btn"),h=document.querySelector(".backdrop"),q=document.querySelector(".create-post-form"),P=document.querySelector(".confirm-backdrop"),U=document.querySelector(".confirm-btn"),J=document.querySelector(".reject-btn"),E=document.querySelector(".search-box"),x=document.querySelector(".info-box"),C=document.querySelector(".prev-btn"),k=document.querySelector(".next-btn");E.hidden=!0;x.hidden=!0;let c=1,f=0,r=0,l=[],y=null,s=[];N.addEventListener("click",B);C.addEventListener("click",tt);k.addEventListener("click",et);v.addEventListener("input",K);D.addEventListener("click",V);R.addEventListener("click",b);O.addEventListener("click",b);h.addEventListener("click",t=>{t.target===h&&b()});q.addEventListener("submit",Y);U.addEventListener("click",Z);J.addEventListener("click",$);P.addEventListener("click",t=>{t.target===P&&$()});//! ================= GET ALL POSTS =================
async function B(){const t=Number(S.value);let e=Number(i.value);if(console.log("limit:",t),t<1||t>10){alert("Кількість постів на сторінці повинна бути від 1 до 10");return}if(e<1){alert("Номер сторінки не може бути менше 1");return}try{const n=ot();console.log("рядок запиту:",`${m}${g}?${n}`);const o=await fetch(`${m}${g}?${n}`);//! якщо я хочу то можу перенести код в catch
const a=await o.json();console.log("data:",a),console.log("!data.data!:",a.data),l=Array.isArray(a)?a:a.data||a.posts||[],console.log("allPosts:",l),console.log("Кількість постів:",l.length),f=l.length,console.log("!totalPosts!:",f),r=Math.ceil(f/t),console.log("totalPages:",r),e>r&&r>0&&(alert(`Сторінки № ${e} не існує.
Всього сторінок: ${r}.
Буде показана остання сторінка.`),e=r,i.value=r),c=e,console.log("currentPosts:",s);//! ? 
L(),u(l),E.hidden=!1,x.hidden=!1,v.value="",d.textContent=""}catch(n){console.error("Помилка getAllPosts:",n),p.innerHTML=`
      <li>
        Помилка завантаження постів.
        Перевір, чи запущений json-server на http://localhost:3000
      </li>
    `}}//! ================= PAGINATION =================
function M(t){console.log("posts:",t),s=t,console.log("currentPosts:",s),u(s)}//! ================= UPDATE INFO =================
function L(){_.textContent=f,F.textContent=c,H.textContent=r,nt()}//! ================= RENDER POSTS =================
function u(t,e=""){if(console.log("posts:",t),p.innerHTML="",t.length===0){p.innerHTML="<li>Пости не знайдені 😕</li>";return}//!var 1
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
function V(){h.classList.remove("is-hidden")}function b(){h.classList.add("is-hidden"),q.reset()}function X(){P.classList.remove("is-hidden")}function $(){P.classList.add("is-hidden"),y=null}//! ================= CREATE POST =================
function Y(t){t.preventDefault();const e=Number(I.value),n=T.value.trim(),o=A.value.trim();if(e<1||e>10){alert("Ідентифікатор автора повинен бути числом від 1 до 10");return}if(!n||!o){alert("Заповніть усі поля");return}y={userId:e,title:n,body:o},X()}//! ================= POST REQUEST =================
async function Z(){if(y)try{const t=await fetch(`${m}${g}`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(y)});if(!t.ok)throw new Error(`Помилка створення: ${t.status}`);const e=await t.json();$(),b(),alert(`Пост створено. Його id: ${e.id}`),await B()}catch(t){console.error("Помилка createPost:",t),alert("Не вдалося створити пост")}}function tt(){c!==1&&(c--,i.value=c,s=M(l),L(),u(s),v.value="",d.textContent="")}function et(){c!==r&&(c++,i.value=c,s=M(l),L(),u(s),v.value="",d.textContent="")}function nt(){C.disabled=c===1,k.disabled=c===r||r===0}function ot(){return new URLSearchParams({_page:i.value,_per_page:S.value}).toString()}//! ================= START =================
function rt(){const t=`${m}${g}?_page=${Number(i.value)}&_per_page=${Number(S.value)}`;console.log("url:",t)}rt();
