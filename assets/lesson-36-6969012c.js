import"./modulepreload-polyfill-3cfb730f.js";const i="http://localhost:3000/",u="posts",C=document.querySelector(".limit-input"),y=document.querySelector(".page-input"),k=document.querySelector(".search-input"),B=document.querySelector(".user-id-input"),T=document.querySelector(".title-input"),M=document.querySelector(".body-input"),F=document.querySelector(".fetch-btn"),h=document.querySelector(".posts-list"),O=document.querySelector(".total-posts"),_=document.querySelector(".current-page"),J=document.querySelector(".total-pages"),w=document.querySelector(".search-counter"),K=document.querySelector(".open-modal-btn"),W=document.querySelector(".close-modal-btn"),z=document.querySelector(".cancel-btn"),$=document.querySelector(".backdrop"),I=document.querySelector(".create-post-form"),S=document.querySelector(".confirm-backdrop"),x=document.querySelector(".confirm-btn"),G=document.querySelector(".reject-btn"),j=document.querySelector(".confirm-modal h2"),N=document.querySelector(".confirm-modal p"),D=document.querySelector(".search-box"),A=document.querySelector(".info-box"),d=document.querySelector(".prev-btn"),f=document.querySelector(".next-btn");D.hidden=!0;A.hidden=!0;d.hidden=!0;f.hidden=!0;let c=1,L=0,r=0,g=[],b=null,m=null,l=null,a=[];F.addEventListener("click",p);d.addEventListener("click",st);f.addEventListener("click",lt);k.addEventListener("input",V);K.addEventListener("click",H);W.addEventListener("click",P);z.addEventListener("click",P);$.addEventListener("click",t=>{t.target===$&&P()});I.addEventListener("submit",et);x.addEventListener("click",rt);G.addEventListener("click",v);S.addEventListener("click",t=>{t.target===S&&v()});h.addEventListener("click",ut);//! ================= GET ALL POSTS =================
async function p(){const t=Number(C.value);let e=Number(y.value);if(console.log("limit:",t),t<1||t>10){alert("Кількість постів на сторінці повАинна бути від 1 до 10");return}if(e<1){alert("Номер сторінки не може бути менше 1");return}try{const n=it();console.log("рядок запиту:",`${i}${u}?${n}`);const o=await fetch(`${i}${u}?${n}`);//! якщо я хочу то можу перенести код в catch
const s=await o.json();console.log("data:",s),g=s.data,a=g,L=s.items,r=s.pages,console.log("allPosts:",g),console.log("totalPosts:",L),console.log("totalPages:",r),e>r&&r>0&&(alert(`Сторінки № ${e} не існує.
Всього сторінок: ${r}.
Буде показана остання сторінка.`),e=r,y.value=r),c=e,console.log("currentPosts:",a);//! ?
Q(),E(a),D.hidden=!1,A.hidden=!1,d.hidden=!1,f.hidden=!1,k.value="",w.textContent=""}catch(n){console.error("Помилка getAllPosts:",n),h.innerHTML=`
      <li>
        Помилка завантаження постів.
        Перевір, чи запущений json-server на http://localhost:3000
      </li>
    `}}//! ================= PAGINATION =================
//! ================= UPDATE INFO =================
function Q(){O.textContent=L,_.textContent=c,J.textContent=r,at()}//! ================= RENDER POSTS =================
function E(t,e=""){if(console.log("posts:",t),h.innerHTML="",t.length===0){h.innerHTML="<li>Пости не знайдені 😕</li>";return}//!var 1
//! var 2
const n=t.map(({id:o,userId:s,title:R,body:U})=>`
      <li class="list-item">

        <h3>${Z(R,e)}</h3>

        <p><b>Post id:</b> ${o}</p>

        <p><b>Author id:</b> ${s}</p>

        <p>${U}</p>

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
    `).join("");h.insertAdjacentHTML("beforeend",n)}//! ================= SEARCH =================
function V(t){const e=t.target.value.toLowerCase().trim();console.log("Введене слово:",e),console.log("Кількість постів у allPosts:",g.length),X(e)}//! Пошук
function X(t){if(g.length===0){console.warn("Пости ще не завантажені.");return}if(d.hidden=!0,f.hidden=!0,t===""){E(a),w.textContent="",d.hidden=!1,f.hidden=!1;return}const e=a.filter(({title:n})=>n.toLowerCase().includes(t));console.log("Знайдені пости:",e),console.log("Кількість знайдених:",e.length),Y(e.length),E(e,t)}//! ================= SEARCH COUNTER =================
function Y(t){w.textContent=`Знайдено: ${t} ${tt(t,["пост","пости","постів"])}`}//! ================= HIGHLIGHT TITLE =================
function Z(t,e){if(!e)return t;const n=e.replace(/[.*+?^${}()|[\]\\]/g,"\\$&"),o=new RegExp(`(${n})`,"gi");return String(t).replace(o,'<span class="highlight">$1</span>')}//! ================= WORD FORM =================
function tt(t,e){const n=Math.abs(t)%100,o=n%10;return n>10&&n<20?e[2]:o>1&&o<5?e[1]:o===1?e[0]:e[2]}//! ================= CREATE POST MODAL =================
function H(){$.classList.remove("is-hidden")}function P(){$.classList.add("is-hidden"),I.reset(),l=null}function q(t,e,n){j.textContent=t,N.textContent=e,x.textContent=n,S.classList.remove("is-hidden")}function v(){S.classList.add("is-hidden"),j.textContent="Підтвердження",N.textContent="Ви впевнені?",x.textContent="Підтвердити",m=null,b=null}//! ================= CREATE POST =================
function et(t){t.preventDefault();const e=Number(B.value),n=T.value.trim(),o=M.value.trim();if(e<1||e>10){alert("Ідентифікатор автора повинен бути числом від 1 до 10");return}if(!n||!o){alert("Заповніть усі поля");return}b={userId:e,title:n,body:o},l!==null?q("Редагування поста","Зберегти зміни?","Зберегти"):q("Створення поста","Ви дійсно хочете створити цей пост?","Створити")}//! ================= POST REQUEST =================
async function nt(){if(b)try{const t=await fetch(`${i}${u}`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(b)});if(!t.ok)throw new Error(`Помилка створення: ${t.status}`);const e=await t.json();v(),P(),alert(`Пост створено. Його id: ${e.id}`),await p()}catch(t){console.error("Помилка createPost:",t),alert("Не вдалося створити пост")}}async function ot(){try{const t=await fetch(`${i}${u}/${l}`,{method:"PUT",headers:{"Content-Type":"application/json"},body:JSON.stringify(b)});if(!t.ok)throw new Error(`Помилка редагування: ${t.status}`);v(),P(),l=null,await p()}catch(t){console.error("Помилка updatePost:",t),alert("Не вдалося оновити пост.")}}async function rt(){if(m!==null){await ct(m);return}if(l!==null){await ot();return}await nt()}async function ct(t){console.log("postId:",t),console.log("URL:",`${i}${u}/${t}`);try{const e=await fetch(`${i}${u}/${t}`,{method:"DELETE"});if(!e.ok)throw new Error(`Помилка видалення: ${e.status}`);m=null,v(),await p()}catch(e){console.error("Помилка deletePost:",e),alert("Не вдалося видалити пост.")}}async function st(){c!==1&&(c--,y.value=c,await p())}async function lt(){c!==r&&(c++,y.value=c,await p())}function at(){d.disabled=c===1,f.disabled=c===r||r===0}function it(){return new URLSearchParams({_page:y.value,_per_page:C.value}).toString()}//! ================= CARD BUTTONS =================
function ut(t){console.log("Edit натиснули");const e=t.target.closest(".edit-btn");if(e){l=Number(e.dataset.id),console.log(l),console.log(a);const o=a.find(({id:s})=>Number(s)===l);if(console.log(o),!o)return;B.value=o.userId,T.value=o.title,M.value=o.body,H();return}const n=t.target.closest(".delete-btn");if(n){m=Number(n.dataset.id),q("Видалення поста",`Видалити пост №${m}?`,"Видалити");return}}//! ================= START =================
