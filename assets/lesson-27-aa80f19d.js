import"./modulepreload-polyfill-3cfb730f.js";import{H as b}from"./handlebars-aa0ac26f.js";const I=`<li class="student-card" data-id="{{id}}">
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
`,N=b.compile(I);let n=[],a="",l=null,L=1,i=null;const r=document.getElementById("students-list"),f=document.getElementById("modal-form"),g=document.getElementById("modal-confirm"),o=document.getElementById("student-form"),S=document.getElementById("confirm-text"),v=document.getElementById("btn-confirm-yes");localStorage.getItem("studentsList")&&(a=localStorage.getItem("studentsList"),n=JSON.parse(a),m());document.getElementById("btn-add-student").addEventListener("click",()=>{p("Нова картка студента"),o.reset(),l=null,console.log(" Відкрито форму для нового студента")});o.addEventListener("submit",t=>{t.preventDefault();const s=new FormData(o),e=Object.fromEntries(s.entries());if(e.age=Number(e.age),e.course=Number(e.course),l!==null){const d=n.findIndex(c=>c.id===l);n[d]={...n[d],...e},console.log(" Відредаговано студента:",n[d]),l=null}else e.id=L++,n.push(e),console.log(" Додано студента:",e);E(),m(),u(f)});r.addEventListener("click",t=>{const s=t.target.closest(".student-card");if(!s)return;const e=Number(s.dataset.id),d=n.find(c=>c.id===e);t.target.classList.contains("edit-btn")&&(p("Редагування студента"),o.firstName.value=d.firstName,o.lastName.value=d.lastName,o.age.value=d.age,o.course.value=d.course,o.faculty.value=d.faculty,l=e),t.target.classList.contains("delete-btn")&&(i=e,S.textContent=`Видалити картку студента ${d.firstName}?`,y(g))});v.addEventListener("click",()=>{n=n.filter(t=>t.id!==i),i=null,E(),m(),u(g)});document.body.addEventListener("click",t=>{if(t.target.dataset.close!==void 0){const s=t.target.closest(".modal");u(s)}});function m(){r.innerHTML="",JSON.parse(a).forEach(s=>{r.insertAdjacentHTML("beforeend",N(s))})}function E(){a=JSON.stringify(n,null,2),console.log("dataJSON:",a),localStorage.setItem("studentsList",JSON.stringify(n))}function p(t){const s=document.getElementById("form-title");s.textContent=t,y(f)}function y(t){t.classList.remove("hidden")}function u(t){t.classList.add("hidden")}
