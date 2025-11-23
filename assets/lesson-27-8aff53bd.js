import"./modulepreload-polyfill-3cfb730f.js";import{H as y}from"./handlebars-aa0ac26f.js";const b=`<li class="student-card" data-id="{{id}}">
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
`,E=y.compile(b);localStorage.getItem("studentsList")?console.log("Наявність даних у localStorage:",localStorage.getItem("studentsList")):(localStorage.setItem("studentsList","[]"),console.log("Початковий стан localStorage:",localStorage.getItem("studentsList")));let t=JSON.parse(localStorage.getItem("studentsList")),l;const a=document.getElementById("modal-form"),c=document.getElementById("modal-confirm"),d=document.getElementById("students-list"),o=document.getElementById("student-form"),S=document.getElementById("confirm-text"),L=document.getElementById("btn-confirm-yes"),I=document.getElementById("btn-add-student"),i=document.getElementById("form-title"),u=document.getElementById("btn-close"),p=document.getElementById("btn-close-confirm");console.log("btnClose:",u);r(t);I.addEventListener("click",v);o.addEventListener("submit",C);d.addEventListener("click",N);L.addEventListener("click",A);u.addEventListener("click",()=>s(a));p.addEventListener("click",()=>s(c));function v(){g(),console.log("Перед додаванням студента, dataArray:",t),i.textContent="Нова картка студента",o.reset();//! додати цю логіку в кінці роботи форми 
//! editStudentId = null;
console.log("Відкрито форму для нового студента"),s(a)}function N(n){if(n.target.classList.contains("edit-btn")||n.target.classList.contains("delete-btn"))console.log("Клік по картці студента (редагування / видалення)"),l=Number(n.target.closest(".student-card").dataset.id),console.log("editStudentId:",l);else return;g(),console.log("Перед редагуванням/видаленням, dataArray:",t);const e=t.find(f=>f.id===l);console.log("currentStudent:",e),n.target.classList.contains("edit-btn")&&(i.textContent="Редагування студента",s(a),o.firstName.value=e.firstName,o.lastName.value=e.lastName,o.age.value=e.age,o.course.value=e.course,o.faculty.value=e.faculty),n.target.classList.contains("delete-btn")&&(console.log("Видалити картку студента"),S.textContent=`Видалити картку студента ${e.firstName}?`,s(c))}function C(n){n.preventDefault(),console.log("Перед збереженням, dataArray:",t);let e={};if(o.firstName.value=e.firstName,o.lastName.value=e.lastName,o.age.value=Number(e.age),o.course.value=Number(e.course),o.faculty.value=e.faculty,console.log("studentData:",e),i.textContent==="Редагування студента"){//! редагуємо існуючого студента
t[l]={...t[l],...e},console.log("Відредаговано студента:",t[l]);//! логіка додавання
}else{//! додаємо нового студента
e.id=t.length,console.log("editStudentId-ДОДАВАННЯ:",l),console.log("dataArray.length:",t.length),t.push(e),console.log("dataArray:",t),console.log("Додано студента:",e)}m(),r(t),s(a)}function A(){t.splice(l,1);//! var 2
console.log("dataArray:",t);for(let n=0;n<t.length;n++)t[n].id=n;console.log("editStudentId видалення:",l),m(),r(t),s(c)}function m(){localStorage.setItem("studentsList",JSON.stringify(t,null,2))}function g(){t=JSON.parse(localStorage.getItem("studentsList")),console.log("dataArray:",t)}function r(n){d.innerHTML="",console.log("Рендеримо dataArray:",n),n.forEach(e=>{d.insertAdjacentHTML("beforeend",E(e))})}function s(n){n.classList.toggle("hidden")}
