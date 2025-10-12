import"./modulepreload-polyfill-3cfb730f.js";import{H as y}from"./handlebars-b094548b.js";import"./_commonjsHelpers-725317a4.js";const E=`<li class="student-card" data-id="{{id}}">
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
`,N=y.compile(E);let s=[],m="",a=null,I=1;const c=document.getElementById("students-list"),u=document.getElementById("modal-form"),f=document.getElementById("modal-confirm"),d=document.getElementById("student-form"),L=document.getElementById("confirm-text"),B=document.getElementById("btn-confirm-yes");let i=null;document.getElementById("btn-add-student").addEventListener("click",()=>{b("Нова картка студента"),d.reset(),a=null,console.log(" Відкрито форму для нового студента")});d.addEventListener("submit",t=>{t.preventDefault();const o=new FormData(d),e=Object.fromEntries(o.entries());if(e.age=Number(e.age),e.course=Number(e.course),a!==null){const n=s.findIndex(l=>l.id===a);s[n]={...s[n],...e},console.log(" Відредаговано студента:",s[n]),a=null}else e.id=I++,s.push(e),console.log(" Додано студента:",e);p(),g(),r(u)});c.addEventListener("click",t=>{const o=t.target.closest(".student-card");if(!o)return;const e=Number(o.dataset.id),n=s.find(l=>l.id===e);t.target.classList.contains("edit-btn")&&(b("Редагування студента"),d.firstName.value=n.firstName,d.lastName.value=n.lastName,d.age.value=n.age,d.course.value=n.course,d.faculty.value=n.faculty,a=e),t.target.classList.contains("delete-btn")&&(i=e,L.textContent=`Видалити картку студента ${n.firstName}?`,v(f))});B.addEventListener("click",()=>{s=s.filter(t=>t.id!==i),i=null,p(),g(),r(f)});document.body.addEventListener("click",t=>{t.target.dataset.close!==void 0&&r(t.target.closest(".modal"))});function g(){c.innerHTML="",JSON.parse(m).forEach(o=>{c.insertAdjacentHTML("beforeend",N(o))})}function p(){m=JSON.stringify(s,null,2)}function b(t){document.getElementById("form-title").textContent=t,v(u)}function v(t){t.classList.remove("hidden")}function r(t){t.classList.add("hidden")}
