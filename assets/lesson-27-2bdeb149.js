import"./modulepreload-polyfill-3cfb730f.js";import{H as b}from"./handlebars-aa0ac26f.js";const p=`<li class="student-card" data-id="{{id}}">
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
`,L=b.compile(p);//! --- АНАЛІЗ LOCALSTORAGE ---
localStorage.getItem("studentsList")?console.log("наявність даних в localStorage:",localStorage.getItem("studentsList")):(localStorage.setItem("studentsList","[]"),console.log("початковий стан localStorage:",localStorage.getItem("studentsList")));//! --- ОСНОВНІ ЗМІННІ ---
let n=JSON.parse(localStorage.getItem("studentsList")),c="",d=null,y=1,i=null;//! --- HTML-ЕЛЕМЕНТИ ---
const m=document.getElementById("students-list"),f=document.getElementById("modal-form"),g=document.getElementById("modal-confirm"),l=document.getElementById("student-form"),N=document.getElementById("confirm-text"),v=document.getElementById("btn-confirm-yes"),B=document.getElementById("btn-add-student");//! --- РЕНДЕР СПИСКУ СТУДЕНТІВ ПРИ ЗАПУСКУ ---
r(n);B.addEventListener("click",x);l.addEventListener("submit",t=>{t.preventDefault();const s=new FormData(l),e=Object.fromEntries(s.entries());if(e.age=Number(e.age),e.course=Number(e.course),d!==null){const o=n.findIndex(a=>a.id===d);n[o]={...n[o],...e},console.log("Відредаговано студента:",n[o]),d=null}else e.id=y++,n.push(e),console.log("Додано студента:",e);E(),r(n),u(f)});m.addEventListener("click",t=>{const s=t.target.closest(".student-card");if(!s)return;const e=Number(s.dataset.id),o=n.find(a=>a.id===e);t.target.classList.contains("edit-btn")&&(S("Редагування студента"),l.firstName.value=o.firstName,l.lastName.value=o.lastName,l.age.value=o.age,l.course.value=o.course,l.faculty.value=o.faculty,d=e),t.target.classList.contains("delete-btn")&&(i=e,N.textContent=`Видалити картку студента ${o.firstName}?`,I(g))});v.addEventListener("click",()=>{n=n.filter(t=>t.id!==i),i=null,E(),r(n),u(g)});document.body.addEventListener("click",t=>{if(t.target.dataset.close!==void 0){const s=t.target.closest(".modal");u(s)}});function x(){S("Нова картка студента"),l.reset(),d=null,console.log("Відкрито форму для нового студента")}function E(){c=JSON.stringify(n,null,2),console.log("dataJSON:",c),localStorage.setItem("studentsList",c)}function r(t){m.innerHTML="",console.log("dataArray:",t),t.forEach(s=>{m.insertAdjacentHTML("beforeend",L(s))})}function S(t){const s=document.getElementById("form-title");s.textContent=t,I(f)}function I(t){t.classList.remove("hidden")}function u(t){t.classList.add("hidden")}
