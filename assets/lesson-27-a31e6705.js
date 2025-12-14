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
`,E=y.compile(b);localStorage.getItem("studentsList")?console.log("Наявність даних у localStorage:",localStorage.getItem("studentsList")):(localStorage.setItem("studentsList","[]"),console.log("Початковий стан localStorage:",localStorage.getItem("studentsList")));let t=JSON.parse(localStorage.getItem("studentsList")),l;const a=document.getElementById("modal-form"),c=document.getElementById("modal-confirm"),d=document.getElementById("students-list"),o=document.getElementById("student-form"),L=document.getElementById("confirm-text"),S=document.getElementById("btn-confirm-yes"),I=document.getElementById("btn-add-student"),i=document.getElementById("form-title"),u=document.getElementById("btn-close"),p=document.getElementById("btn-close-confirm");console.log("btnClose:",u);r(t);I.addEventListener("click",v);o.addEventListener("submit",C);d.addEventListener("click",N);S.addEventListener("click",A);u.addEventListener("click",()=>s(a));p.addEventListener("click",()=>s(c));function v(){g(),console.log("Перед додаванням студента, dataArray:",t),i.textContent="Нова картка студента",o.reset();//! додати цю логіку в кінці роботи форми 
//! editStudentId = null;
console.log("Відкрито форму для нового студента"),s(a)}function N(e){if(e.target.classList.contains("edit-btn")||e.target.classList.contains("delete-btn"))console.log("Клік по картці студента (редагування / видалення)"),l=Number(e.target.closest(".student-card").dataset.id),console.log("editStudentId:",l);else return;g(),console.log("Перед редагуванням/видаленням, dataArray:",t);const n=t.find(f=>f.id===l);console.log("currentStudent:",n),e.target.classList.contains("edit-btn")&&(i.textContent="Редагування студента",s(a),o.firstName.value=n.firstName,o.lastName.value=n.lastName,o.age.value=n.age,o.course.value=n.course,o.faculty.value=n.faculty),e.target.classList.contains("delete-btn")&&(console.log("Видалити картку студента"),L.textContent=`Видалити картку студента ${n.firstName}?`,s(c))}function C(e){e.preventDefault(),console.log("Перед збереженням, dataArray:",t);//! Заповнення форми var.1.0
let n={firstName:o.firstName.value,lastName:o.lastName.value,age:Number(o.age.value),course:Number(o.course.value),faculty:o.faculty.value};//! Заповнення форми var.1.1
//! Заповнення форми var.2
if(console.log("studentData:",n),i.textContent==="Редагування студента"){//! редагуємо існуючого студента
t[l]={...t[l],...n},console.log("Відредаговано студента:",t[l]);//! логіка додавання
}else{//! додаємо нового студента
n.id=t.length,console.log("editStudentId-ДОДАВАННЯ:",l),console.log("dataArray.length:",t.length),t.push(n),console.log("dataArray:",t),console.log("Додано студента:",n)}m(),r(t),s(a)}function A(){t.splice(l,1);//! var 2
console.log("dataArray:",t);for(let e=0;e<t.length;e++)t[e].id=e;console.log("editStudentId видалення:",l),m(),r(t),s(c)}function m(){localStorage.setItem("studentsList",JSON.stringify(t,null,2))}function g(){t=JSON.parse(localStorage.getItem("studentsList")),console.log("dataArray:",t)}function r(e){d.innerHTML="",console.log("Рендеримо dataArray:",e),e.forEach(n=>{d.insertAdjacentHTML("beforeend",E(n))})}function s(e){e.classList.toggle("hidden"),document.body.classList.toggle("no-scroll")}
