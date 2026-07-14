import"./modulepreload-polyfill-3cfb730f.js";const u="http://localhost:3000/",d="posts",z=`${u}${d}`,I=document.querySelector(".limit-input"),v=document.querySelector(".page-input"),M=document.querySelector(".search-input"),j=document.querySelector(".user-id-input"),A=document.querySelector(".title-input"),D=document.querySelector(".body-input"),G=document.querySelector(".fetch-btn"),h=document.querySelector(".posts-list"),Q=document.querySelector(".total-posts"),V=document.querySelector(".current-page"),X=document.querySelector(".total-pages"),T=document.querySelector(".search-counter"),Y=document.querySelector(".open-modal-btn"),Z=document.querySelector(".close-modal-btn"),tt=document.querySelector(".cancel-btn"),w=document.querySelector(".backdrop"),H=document.querySelector(".create-post-form"),E=document.querySelector(".confirm-backdrop"),N=document.querySelector(".confirm-btn"),et=document.querySelector(".reject-btn"),U=document.querySelector(".confirm-modal h2"),O=document.querySelector(".confirm-modal p"),R=document.querySelector(".search-box"),F=document.querySelector(".info-box"),g=document.querySelector(".prev-btn"),b=document.querySelector(".next-btn");R.hidden=!0;F.hidden=!0;g.hidden=!0;b.hidden=!0;let a=1,k=0,s=0,$=[],P=null,y=null,m=null,l=null,i=[];G.addEventListener("click",f);g.addEventListener("click",ft);b.addEventListener("click",pt);M.addEventListener("input",ot);Y.addEventListener("click",J);Z.addEventListener("click",C);tt.addEventListener("click",C);w.addEventListener("click",t=>{t.target===w&&C()});H.addEventListener("submit",lt);N.addEventListener("click",dt);et.addEventListener("click",L);E.addEventListener("click",t=>{t.target===E&&L()});h.addEventListener("click",bt);h.addEventListener("submit",yt);//! ================= GET ALL POSTS =================
async function f(){const t=Number(I.value);let e=Number(v.value);if(console.log("limit:",t),t<1||t>10){alert("Кількість постів на сторінці повАинна бути від 1 до 10");return}if(e<1){alert("Номер сторінки не може бути менше 1");return}try{const n=gt();console.log("рядок запиту:",`${u}${d}?${n}`);const o=await fetch(`${u}${d}?${n}`);//! якщо я хочу то можу перенести код в catch
const c=await o.json();console.log("data:",c),$=c.data.map(r=>({...r,id:Number(r.id)})),i=$,k=c.items,s=c.pages,console.log("allPosts:",$),console.log("totalPosts:",k),console.log("totalPages:",s),e>s&&s>0&&(alert(`Сторінки № ${e} не існує.
Всього сторінок: ${s}.
Буде показана остання сторінка.`),e=s,v.value=s),a=e,console.log("currentPosts:",i);//! ?
nt(),S(i),R.hidden=!1,F.hidden=!1,g.hidden=!1,b.hidden=!1,M.value="",T.textContent=""}catch(n){console.error("Помилка getAllPosts:",n),h.innerHTML=`
      <li>
        Помилка завантаження постів.
        Перевір, чи запущений json-server на http://localhost:3000
      </li>
    `}}//! ================= PAGINATION =================
//! ================= UPDATE INFO =================
function nt(){Q.textContent=k,V.textContent=a,X.textContent=s,ht()}//! ================= RENDER POSTS =================
function S(t,e=""){if(console.trace("renderPosts"),console.log("activeCommentPostId:",l),h.innerHTML="",!t.length){h.innerHTML="<li>Пости не знайдені 😕</li>";return}const n=t.map(({id:o,userId:c,title:r,body:p,comments:q=[]})=>{const x=q.length?q.map(({author:_,text:K,createdAt:W})=>`
                <li class="comment-item">
                  <b>${_}</b>
                  <span class="comment-date">${W}</span>
                  <p>${K}</p>
                </li>
              `).join(""):'<li class="empty-comments">Коментарів ще немає</li>';return console.log(typeof o,o,typeof l,l),`
<li class="list-item">

<h3>${st(r,e)}</h3>

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

${l===Number(o)?`
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
`}).join("");h.innerHTML=n,console.log(document.querySelector(".comment-form"))}//! ================= SEARCH =================
function ot(t){const e=t.target.value.toLowerCase().trim();console.log("Введене слово:",e),console.log("Кількість постів у allPosts:",$.length),rt(e)}//! Пошук
function rt(t){if($.length===0){console.warn("Пости ще не завантажені.");return}if(g.hidden=!0,b.hidden=!0,t===""){S(i),T.textContent="",g.hidden=!1,b.hidden=!1;return}const e=i.filter(({title:n})=>n.toLowerCase().includes(t));console.log("Знайдені пости:",e),console.log("Кількість знайдених:",e.length),ct(e.length),S(e,t)}//! ================= SEARCH COUNTER =================
function ct(t){T.textContent=`Знайдено: ${t} ${at(t,["пост","пости","постів"])}`}//! ================= HIGHLIGHT TITLE =================
function st(t,e){if(!e)return t;const n=e.replace(/[.*+?^${}()|[\]\\]/g,"\\$&"),o=new RegExp(`(${n})`,"gi");return String(t).replace(o,'<span class="highlight">$1</span>')}//! ================= WORD FORM =================
function at(t,e){const n=Math.abs(t)%100,o=n%10;return n>10&&n<20?e[2]:o>1&&o<5?e[1]:o===1?e[0]:e[2]}//! ================= CREATE POST MODAL =================
function J(){w.classList.remove("is-hidden")}function C(){w.classList.add("is-hidden"),H.reset(),m=null}function B(t,e,n){U.textContent=t,O.textContent=e,N.textContent=n,E.classList.remove("is-hidden")}function L(){E.classList.add("is-hidden"),U.textContent="Підтвердження",O.textContent="Ви впевнені?",N.textContent="Підтвердити",y=null,P=null}//! ================= CREATE POST =================
function lt(t){t.preventDefault();const e=Number(j.value),n=A.value.trim(),o=D.value.trim();if(e<1||e>10){alert("Ідентифікатор автора повинен бути числом від 1 до 10");return}if(!n||!o){alert("Заповніть усі поля");return}P={userId:e,title:n,body:o},m!==null?B("Редагування поста","Зберегти зміни?","Зберегти"):B("Створення поста","Ви дійсно хочете створити цей пост?","Створити")}//! ================= POST REQUEST =================
async function it(){if(P)try{const t=await fetch(`${u}${d}`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(P)});if(!t.ok)throw new Error(`Помилка створення: ${t.status}`);const e=await t.json();L(),C(),alert(`Пост створено. Його id: ${e.id}`),await f()}catch(t){console.error("Помилка createPost:",t),alert("Не вдалося створити пост")}}async function ut(){try{const t=await fetch(`${u}${d}/${m}`,{method:"PUT",headers:{"Content-Type":"application/json"},body:JSON.stringify(P)});if(!t.ok)throw new Error(`Помилка редагування: ${t.status}`);L(),C(),m=null,await f()}catch(t){console.error("Помилка updatePost:",t),alert("Не вдалося оновити пост.")}}async function dt(){if(y!==null){await mt(y);return}if(m!==null){await ut();return}await it()}async function mt(t){console.log("postId:",t),console.log("URL:",`${u}${d}/${t}`);try{const e=await fetch(`${u}${d}/${t}`,{method:"DELETE"});if(!e.ok)throw new Error(`Помилка видалення: ${e.status}`);y=null,L(),await f()}catch(e){console.error("Помилка deletePost:",e),alert("Не вдалося видалити пост.")}}async function ft(){a!==1&&(a--,v.value=a,await f())}async function pt(){a!==s&&(a++,v.value=a,await f())}function ht(){g.disabled=a===1,b.disabled=a===s||s===0}function gt(){return new URLSearchParams({_page:v.value,_per_page:I.value}).toString()}//! ================= CARD BUTTONS =================
function bt(t){const e=t.target.closest(".comment-btn");if(e){l=Number(e.dataset.id),console.log("Відкриваємо форму для",l),S(i),console.log("ПЕРЕД renderPosts",l);return}if(t.target.closest(".cancel-comment")){l=null,S(i);return}const o=t.target.closest(".edit-btn");if(o){m=Number(o.dataset.id);const r=i.find(({id:p})=>Number(p)===m);if(!r)return;j.value=r.userId,A.value=r.title,D.value=r.body,J();return}const c=t.target.closest(".delete-btn");c&&(y=Number(c.dataset.id),B("Видалення поста",`Видалити пост №${y}?`,"Видалити"))}async function yt(t){t.preventDefault();const e=t.target;//! можлива не потрібна 
if(!e.classList.contains("comment-form")){console.log("виходимо з функції  handleCommentSubmit");return}const n=Number(e.dataset.id),o=e.querySelector(".comment-author").value.trim(),c=e.querySelector(".comment-text").value.trim();if(!o||!c){alert("Заповніть усі поля.");return}const r=i.find(({id:x})=>Number(x)===n);if(!r)return;console.log("post.comments:",r.comments);const p=r.comments||[],q={id:Date.now(),author:o,text:c,createdAt:new Date().toLocaleString("uk-UA")};p.push(q),await $t(n,p)}async function $t(t,e){try{if(!(await fetch(`${z}/${t}`,{method:"PATCH",headers:{"Content-Type":"application/json"},body:JSON.stringify({comments:e})})).ok)throw new Error("Помилка PATCH");l=null,await f()}catch(n){console.error(n),alert("Не вдалося додати коментар.")}}//! ================= START =================
