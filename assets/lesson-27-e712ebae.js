import"./modulepreload-polyfill-3cfb730f.js";import{H as f}from"./handlebars-aa0ac26f.js";const S=`<li class="student-card" data-id="{{id}}">
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
`,y=f.compile(S);localStorage.getItem("studentsList")?console.log("Наявність даних у localStorage:",localStorage.getItem("studentsList")):(localStorage.setItem("studentsList","[]"),console.log("Початковий стан localStorage:",localStorage.getItem("studentsList")));let t=JSON.parse(localStorage.getItem("studentsList")),s;const d=document.getElementById("students-list"),c=document.getElementById("modal-form"),m=document.getElementById("modal-confirm"),l=document.getElementById("student-form"),E=document.getElementById("confirm-text"),b=document.getElementById("btn-confirm-yes"),L=document.getElementById("btn-add-student"),i=document.getElementById("form-title");r(t);L.addEventListener("click",p);l.addEventListener("submit",N);d.addEventListener("click",I);b.addEventListener("click",h);document.body.addEventListener("click",A);//! ChatGPT var 1
function p(){g(),console.log("Перед додаванням студента, dataArray:",t),i.textContent="Нова картка студента",l.reset();//! додати цю логіку в кінці роботи форми 
//! editStudentId = null;
console.log("Відкрито форму для нового студента"),a(c)}function I(e){if(e.target.classList.contains("edit-btn")||e.target.classList.contains("delete-btn"))console.log("Клік по картці студента (редагування / видалення)"),s=Number(e.target.closest(".student-card").dataset.id),console.log("editStudentId:",s);else return;g(),console.log("Перед редагуванням/видаленням, dataArray:",t);const n=t.find(o=>o.id===s);console.log("currentStudent:",n),e.target.classList.contains("edit-btn")&&(i.textContent="Редагування студента",a(c),l.firstName.value=n.firstName,l.lastName.value=n.lastName,l.age.value=n.age,l.course.value=n.course,l.faculty.value=n.faculty),e.target.classList.contains("delete-btn")&&(console.log("Видалити картку студента"),E.textContent=`Видалити картку студента ${n.firstName}?`,a(m))}function N(e){e.preventDefault(),console.log("Перед збереженням, dataArray:",t);const n=new FormData(l),o=Object.fromEntries(n.entries());if(o.age=Number(o.age),o.course=Number(o.course),i.textContent==="Редагування студента"){//! редагуємо існуючого студента
t[s]={...t[s],...o},console.log("Відредаговано студента:",t[s]);//! логіка додавання
}else{//! додаємо нового студента
o.id=t.length,console.log("editStudentId-ДОДАВАННЯ:",s),console.log("dataArray.length:",t.length),t.push(o),console.log("dataArray:",t),console.log("Додано студента:",o)}u(),r(t),a(c)}function h(){t.splice(s,1);//! var 2
console.log("dataArray:",t);for(let e=0;e<t.length;e++)t[e].id=e;console.log("editStudentId видалення:",s),u(),r(t),a(m)}function A(e){if(e.target.dataset.close!==void 0){const n=e.target.closest(".modal");a(n)}}function u(){localStorage.setItem("studentsList",JSON.stringify(t,null,2))}function g(){t=JSON.parse(localStorage.getItem("studentsList")),console.log("dataArray:",t)}function r(e){d.innerHTML="",console.log("Рендеримо dataArray:",e),e.forEach(n=>{d.insertAdjacentHTML("beforeend",y(n))})}function a(e){e.classList.toggle("hidden")}
