import"./modulepreload-polyfill-3cfb730f.js";import{H as y}from"./handlebars-aa0ac26f.js";const I=`<li class="student-card" data-id="{{id}}">
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
`,N=y.compile(I);let d=[],m="",l=null,v=1,c=null;const i=document.getElementById("students-list"),u=document.getElementById("modal-form"),f=document.getElementById("modal-confirm"),o=document.getElementById("student-form"),L=document.getElementById("confirm-text"),S=document.getElementById("btn-confirm-yes");document.getElementById("btn-add-student").addEventListener("click",()=>{p("Нова картка студента"),o.reset(),l=null,console.log(" Відкрито форму для нового студента")});o.addEventListener("submit",t=>{t.preventDefault();const n=new FormData(o),e=Object.fromEntries(n.entries());if(e.age=Number(e.age),e.course=Number(e.course),l!==null){const s=d.findIndex(a=>a.id===l);d[s]={...d[s],...e},console.log(" Відредаговано студента:",d[s]),l=null}else e.id=v++,d.push(e),console.log(" Додано студента:",e);g(),E(),r(u)});i.addEventListener("click",t=>{const n=t.target.closest(".student-card");if(!n)return;const e=Number(n.dataset.id),s=d.find(a=>a.id===e);t.target.classList.contains("edit-btn")&&(p("Редагування студента"),o.firstName.value=s.firstName,o.lastName.value=s.lastName,o.age.value=s.age,o.course.value=s.course,o.faculty.value=s.faculty,l=e),t.target.classList.contains("delete-btn")&&(c=e,L.textContent=`Видалити картку студента ${s.firstName}?`,b(f))});S.addEventListener("click",()=>{d=d.filter(t=>t.id!==c),c=null,g(),E(),r(f)});document.body.addEventListener("click",t=>{if(t.target.dataset.close!==void 0){const n=t.target.closest(".modal");r(n)}});function E(){i.innerHTML="",JSON.parse(m).forEach(n=>{i.insertAdjacentHTML("beforeend",N(n))})}function g(){m=JSON.stringify(d,null,2)}function p(t){const n=document.getElementById("form-title");n.textContent=t,b(u)}function b(t){t.classList.remove("hidden")}function r(t){t.classList.add("hidden")}
