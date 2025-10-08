import"./modulepreload-polyfill-3cfb730f.js";import{H as v}from"./handlebars-b094548b.js";import"./_commonjsHelpers-725317a4.js";const E=`<li class="student-card" data-id="{{id}}">
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
`,I=v.compile(E);let o=[],i="",l=null,N=1;const r=document.getElementById("students-list"),u=document.getElementById("modal-form"),f=document.getElementById("modal-confirm"),s=document.getElementById("student-form"),L=document.getElementById("confirm-text"),x=document.getElementById("btn-confirm-yes");let c=null;console.log("typeof deleteId:",typeof c);document.getElementById("btn-add-student").addEventListener("click",()=>{b("Нова картка студента"),s.reset(),l=null,console.log(" Відкрито форму для нового студента")});s.addEventListener("submit",e=>{e.preventDefault();const d=new FormData(s),t=Object.fromEntries(d.entries());if(t.age=Number(t.age),t.course=Number(t.course),l){console.log("editID:",l);const n=o.findIndex(a=>a.id===l);o[n]={...o[n],...t},console.log(" Відредаговано студента:",o[n]),l=null}else t.id=N++,o.push(t),console.log(" Додано студента:",t);p(),g(),m(u)});r.addEventListener("click",e=>{const d=e.target.closest(".student-card");if(!d)return;const t=Number(d.id.replace("student-","")),n=o.find(a=>a.id===t);e.target.classList.contains("edit-btn")&&(console.log(" Клік по редагуванню:",n),b("Редагування студента"),s.firstName.value=n.firstName,s.lastName.value=n.lastName,s.age.value=n.age,s.course.value=n.course,s.faculty.value=n.faculty,l=t),e.target.classList.contains("delete-btn")&&(c=t,L.textContent=`Видалити картку студента ${d.querySelector("strong").textContent}?`,y(f),console.log(" Клік по видаленню студента:",n))});x.addEventListener("click",()=>{console.log(" Підтверджено видалення студента з id:",c),o=o.filter(e=>e.id!==c),p(),g(),m(f)});document.body.addEventListener("click",e=>{e.target.dataset.close!==void 0&&(m(e.target.closest(".modal")),console.log(" Закрито модалку"))});function g(){r.innerHTML="",JSON.parse(i).forEach(e=>{r.insertAdjacentHTML("beforeend",I(e))}),console.log(" Поточний список студентів:",JSON.parse(i))}function p(){i=JSON.stringify(o,null,2);//! розібратися що таке null 2 ;
}function b(e){document.getElementById("form-title").textContent=e,y(u),console.log(" Відкрито форму:",e)}function y(e){e.classList.remove("hidden"),console.log(" Модалка відкрита:",e.id)}function m(e){e.classList.add("hidden"),console.log(" Модалка закрита:",e.id)}
