import"./modulepreload-polyfill-3cfb730f.js";const d="http://localhost:3000/",m="posts",N=document.querySelector(".limit-input"),$=document.querySelector(".page-input"),T=document.querySelector(".search-input"),j=document.querySelector(".user-id-input"),A=document.querySelector(".title-input"),D=document.querySelector(".body-input"),z=document.querySelector(".fetch-btn"),h=document.querySelector(".posts-list"),G=document.querySelector(".total-posts"),Q=document.querySelector(".current-page"),V=document.querySelector(".total-pages"),I=document.querySelector(".search-counter"),X=document.querySelector(".open-modal-btn"),Y=document.querySelector(".close-modal-btn"),Z=document.querySelector(".cancel-btn"),w=document.querySelector(".backdrop"),H=document.querySelector(".create-post-form"),E=document.querySelector(".confirm-backdrop"),M=document.querySelector(".confirm-btn"),tt=document.querySelector(".reject-btn"),U=document.querySelector(".confirm-modal h2"),O=document.querySelector(".confirm-modal p"),R=document.querySelector(".search-box"),F=document.querySelector(".info-box"),g=document.querySelector(".prev-btn"),b=document.querySelector(".next-btn");R.hidden=!0;F.hidden=!0;g.hidden=!0;b.hidden=!0;let l=1,k=0,r=0,v=[],P=null,y=null,u=null,i=null,a=[];z.addEventListener("click",f);g.addEventListener("click",mt);b.addEventListener("click",ft);T.addEventListener("input",nt);X.addEventListener("click",J);Y.addEventListener("click",C);Z.addEventListener("click",C);w.addEventListener("click",t=>{t.target===w&&C()});H.addEventListener("submit",at);M.addEventListener("click",ut);tt.addEventListener("click",L);E.addEventListener("click",t=>{t.target===E&&L()});h.addEventListener("click",gt);h.addEventListener("submit",bt);//! ================= GET ALL POSTS =================
async function f(){const t=Number(N.value);let e=Number($.value);if(console.log("limit:",t),t<1||t>10){alert("Кількість постів на сторінці повАинна бути від 1 до 10");return}if(e<1){alert("Номер сторінки не може бути менше 1");return}try{const n=ht();console.log("рядок запиту:",`${d}${m}?${n}`);const o=await fetch(`${d}${m}?${n}`);//! якщо я хочу то можу перенести код в catch
const c=await o.json();console.log("data:",c),v=c.data,a=v,k=c.items,r=c.pages,console.log("allPosts:",v),console.log("totalPosts:",k),console.log("totalPages:",r),e>r&&r>0&&(alert(`Сторінки № ${e} не існує.
Всього сторінок: ${r}.
Буде показана остання сторінка.`),e=r,$.value=r),l=e,console.log("currentPosts:",a);//! ?
et(),S(a),R.hidden=!1,F.hidden=!1,g.hidden=!1,b.hidden=!1,T.value="",I.textContent=""}catch(n){console.error("Помилка getAllPosts:",n),h.innerHTML=`
      <li>
        Помилка завантаження постів.
        Перевір, чи запущений json-server на http://localhost:3000
      </li>
    `}}//! ================= PAGINATION =================
//! ================= UPDATE INFO =================
function et(){G.textContent=k,Q.textContent=l,V.textContent=r,pt()}//! ================= RENDER POSTS =================
function S(t,e=""){if(console.trace("renderPosts"),console.log("activeCommentPostId:",i),h.innerHTML="",!t.length){h.innerHTML="<li>Пости не знайдені 😕</li>";return}const n=t.map(({id:o,userId:c,title:s,body:p,comments:q=[]})=>{const x=q.length?q.map(({author:_,text:K,createdAt:W})=>`
                <li class="comment-item">
                  <b>${_}</b>
                  <span class="comment-date">${W}</span>
                  <p>${K}</p>
                </li>
              `).join(""):'<li class="empty-comments">Коментарів ще немає</li>';return console.log(typeof o,o,typeof i,i),`
<li class="list-item">

<h3>${ct(s,e)}</h3>

<p><b>Post id:</b> ${o}</p>

<p><b>Author id:</b> ${c}</p>

<p>${p}</p>

<div class="card-buttons">

<button
class="edit-btn"
data-id="${o}">
✏️ Edit
</button>

<button
class="delete-btn"
data-id="${o}">
🗑 Delete
</button>

<button
class="comment-btn"
data-id="${o}">
💬 Add comment
</button>

</div>

<div class="comments">

<h4>Comments</h4>

<ul>

${x}

</ul>

${i===o?`
<form class="comment-form" data-id="${o}">

<input
class="comment-author"
placeholder="Author"
required>

<textarea
class="comment-text"
placeholder="Comment"
required></textarea>

<div class="comment-buttons">

<button type="submit">
Save
</button>

<button
type="button"
class="cancel-comment">
Cancel
</button>

</div>

</form>
`:""}

</div>

</li>
`}).join("");h.innerHTML=n}//! ================= SEARCH =================
function nt(t){const e=t.target.value.toLowerCase().trim();console.log("Введене слово:",e),console.log("Кількість постів у allPosts:",v.length),ot(e)}//! Пошук
function ot(t){if(v.length===0){console.warn("Пости ще не завантажені.");return}if(g.hidden=!0,b.hidden=!0,t===""){S(a),I.textContent="",g.hidden=!1,b.hidden=!1;return}const e=a.filter(({title:n})=>n.toLowerCase().includes(t));console.log("Знайдені пости:",e),console.log("Кількість знайдених:",e.length),rt(e.length),S(e,t)}//! ================= SEARCH COUNTER =================
function rt(t){I.textContent=`Знайдено: ${t} ${st(t,["пост","пости","постів"])}`}//! ================= HIGHLIGHT TITLE =================
function ct(t,e){if(!e)return t;const n=e.replace(/[.*+?^${}()|[\]\\]/g,"\\$&"),o=new RegExp(`(${n})`,"gi");return String(t).replace(o,'<span class="highlight">$1</span>')}//! ================= WORD FORM =================
function st(t,e){const n=Math.abs(t)%100,o=n%10;return n>10&&n<20?e[2]:o>1&&o<5?e[1]:o===1?e[0]:e[2]}//! ================= CREATE POST MODAL =================
function J(){w.classList.remove("is-hidden")}function C(){w.classList.add("is-hidden"),H.reset(),u=null}function B(t,e,n){U.textContent=t,O.textContent=e,M.textContent=n,E.classList.remove("is-hidden")}function L(){E.classList.add("is-hidden"),U.textContent="Підтвердження",O.textContent="Ви впевнені?",M.textContent="Підтвердити",y=null,P=null}//! ================= CREATE POST =================
function at(t){t.preventDefault();const e=Number(j.value),n=A.value.trim(),o=D.value.trim();if(e<1||e>10){alert("Ідентифікатор автора повинен бути числом від 1 до 10");return}if(!n||!o){alert("Заповніть усі поля");return}P={userId:e,title:n,body:o},u!==null?B("Редагування поста","Зберегти зміни?","Зберегти"):B("Створення поста","Ви дійсно хочете створити цей пост?","Створити")}//! ================= POST REQUEST =================
async function lt(){if(P)try{const t=await fetch(`${d}${m}`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(P)});if(!t.ok)throw new Error(`Помилка створення: ${t.status}`);const e=await t.json();L(),C(),alert(`Пост створено. Його id: ${e.id}`),await f()}catch(t){console.error("Помилка createPost:",t),alert("Не вдалося створити пост")}}async function it(){try{const t=await fetch(`${d}${m}/${u}`,{method:"PUT",headers:{"Content-Type":"application/json"},body:JSON.stringify(P)});if(!t.ok)throw new Error(`Помилка редагування: ${t.status}`);L(),C(),u=null,await f()}catch(t){console.error("Помилка updatePost:",t),alert("Не вдалося оновити пост.")}}async function ut(){if(y!==null){await dt(y);return}if(u!==null){await it();return}await lt()}async function dt(t){console.log("postId:",t),console.log("URL:",`${d}${m}/${t}`);try{const e=await fetch(`${d}${m}/${t}`,{method:"DELETE"});if(!e.ok)throw new Error(`Помилка видалення: ${e.status}`);y=null,L(),await f()}catch(e){console.error("Помилка deletePost:",e),alert("Не вдалося видалити пост.")}}async function mt(){l!==1&&(l--,$.value=l,await f())}async function ft(){l!==r&&(l++,$.value=l,await f())}function pt(){g.disabled=l===1,b.disabled=l===r||r===0}function ht(){return new URLSearchParams({_page:$.value,_per_page:N.value}).toString()}//! ================= CARD BUTTONS =================
function gt(t){console.log("Edit натиснули");const e=t.target.closest(".edit-btn");if(e){u=Number(e.dataset.id),console.log(u),console.log(a);const s=a.find(({id:p})=>Number(p)===u);if(console.log(s),!s)return;j.value=s.userId,A.value=s.title,D.value=s.body,J();return}const n=t.target.closest(".delete-btn");if(n){y=Number(n.dataset.id),B("Видалення поста",`Видалити пост №${y}?`,"Видалити");return}const o=t.target.closest(".comment-btn");if(console.log("commentBtn:",o),o&&(console.log("ID =",o.dataset.id),i=Number(o.dataset.id),console.log("active =",i),S(a)),t.target.closest(".cancel-comment")){i=null,S(a,T.value.trim());return}}async function bt(t){t.preventDefault();const e=t.target;if(!e.classList.contains("comment-form"))return;const n=Number(e.dataset.id),o=e.querySelector(".comment-author").value.trim(),c=e.querySelector(".comment-text").value.trim();if(!o||!c){alert("Заповніть усі поля.");return}const s=a.find(({id:x})=>Number(x)===n);if(!s)return;const p=s.comments||[],q={id:Date.now(),author:o,text:c,createdAt:new Date().toLocaleString("uk-UA")};p.push(q),await yt(n,p)}async function yt(t,e){try{if(!(await fetch(`${d}${m}/${t}`,{method:"PATCH",headers:{"Content-Type":"application/json"},body:JSON.stringify({comments:e})})).ok)throw new Error("Помилка PATCH");i=null,await f()}catch(n){console.error(n),alert("Не вдалося додати коментар.")}}//! ================= START =================
