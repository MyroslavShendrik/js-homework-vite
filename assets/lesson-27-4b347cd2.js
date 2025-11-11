import"./modulepreload-polyfill-3cfb730f.js";import{H as p}from"./handlebars-aa0ac26f.js";const L=`<li class="student-card" data-id="{{id}}">
  <div class="student-info">
    <p><strong>{{firstName}} {{lastName}}</strong></p>
    <p><em>Вік:</em> {{age}}</p>
    <p><em>Курс:</em> {{course}}</p>
    <p><em>Факультет:</em> {{faculty}}</p>
  </div>
  <div class="student-actions">
    <button class="edit-btn">Edit</button>
    <button class="delete-btn">Delete</button>
  </div>
</li>
`,b=p.compile(L);//! --- АНАЛІЗ LOCALSTORAGE ---
localStorage.getItem("studentsList")?console.log("наявність даних в localStorage:",localStorage.getItem("studentsList")):(localStorage.setItem("studentsList","[]"),console.log("початковий стан localStorage:",localStorage.getItem("studentsList")));//! --- ОСНОВНІ ЗМІННІ ---
let e=JSON.parse(localStorage.getItem("studentsList")),c="",d=null,y=1,i=null;//! --- HTML-ЕЛЕМЕНТИ ---
const m=document.getElementById("students-list"),g=document.getElementById("modal-form"),f=document.getElementById("modal-confirm"),l=document.getElementById("student-form"),N=document.getElementById("confirm-text"),v=document.getElementById("btn-confirm-yes"),B=document.getElementById("btn-add-student");//! --- РЕНДЕР СПИСКУ СТУДЕНТІВ ПРИ ЗАПУСКУ ---
r(e);B.addEventListener("click",x);l.addEventListener("submit",t=>{t.preventDefault();const s=new FormData(l),n=Object.fromEntries(s.entries());if(n.age=Number(n.age),n.course=Number(n.course),d!==null){const o=e.findIndex(a=>a.id===d);//! забрати з локал сторедж найсвіжіші дані (забираю найостаннішу версію даних)
e=JSON.parse(localStorage.getItem("studentsList")),e[o]={...e[o],...n},console.log("Відредаговано студента:",e[o]),d=null}else n.id=y++,e.push(n),console.log("Додано студента:",n);E(),r(e),u(g)});m.addEventListener("click",t=>{const s=t.target.closest(".student-card");if(!s)return;const n=Number(s.dataset.id),o=e.find(a=>a.id===n);t.target.classList.contains("edit-btn")&&(S("Редагування студента"),l.firstName.value=o.firstName,l.lastName.value=o.lastName,l.age.value=o.age,l.course.value=o.course,l.faculty.value=o.faculty,d=n),t.target.classList.contains("delete-btn")&&(i=n,N.textContent=`Видалити картку студента ${o.firstName}?`,I(f))});v.addEventListener("click",()=>{e=e.filter(t=>t.id!==i),i=null,E(),r(e),u(f)});document.body.addEventListener("click",t=>{if(t.target.dataset.close!==void 0){const s=t.target.closest(".modal");u(s)}});function x(){S("Нова картка студента"),l.reset(),d=null,console.log("Відкрито форму для нового студента")}function E(){c=JSON.stringify(e,null,2),console.log("dataJSON:",c),localStorage.setItem("studentsList",c)}function r(t){m.innerHTML="",console.log("dataArray:",t),t.forEach(s=>{m.insertAdjacentHTML("beforeend",b(s))})}function S(t){const s=document.getElementById("form-title");s.textContent=t,I(g)}function I(t){t.classList.remove("hidden")}function u(t){t.classList.add("hidden")}
