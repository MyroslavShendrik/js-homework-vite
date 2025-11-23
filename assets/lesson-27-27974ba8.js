import"./modulepreload-polyfill-3cfb730f.js";import{H as b}from"./handlebars-aa0ac26f.js";const E=`<li class="student-card" data-id="{{id}}">
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
`,y=b.compile(E);localStorage.getItem("studentsList")?console.log("Наявність даних у localStorage:",localStorage.getItem("studentsList")):(localStorage.setItem("studentsList","[]"),console.log("Початковий стан localStorage:",localStorage.getItem("studentsList")));let t=JSON.parse(localStorage.getItem("studentsList")),s;const d=document.getElementById("modal-form"),r=document.getElementById("modal-confirm"),c=document.getElementById("students-list"),l=document.getElementById("student-form"),S=document.getElementById("confirm-text"),L=document.getElementById("btn-confirm-yes"),I=document.getElementById("btn-add-student"),i=document.getElementById("form-title"),u=document.getElementById("btn-close"),p=document.getElementById("btn-close-confirm");console.log("btnClose:",u);m(t);I.addEventListener("click",N);l.addEventListener("submit",C);c.addEventListener("click",v);L.addEventListener("click",A);u.addEventListener("click",()=>a(d));p.addEventListener("click",()=>a(r));function N(){f(),console.log("Перед додаванням студента, dataArray:",t),i.textContent="Нова картка студента",l.reset();//! додати цю логіку в кінці роботи форми 
//! editStudentId = null;
console.log("Відкрито форму для нового студента"),a(d)}function v(e){if(e.target.classList.contains("edit-btn")||e.target.classList.contains("delete-btn"))console.log("Клік по картці студента (редагування / видалення)"),s=Number(e.target.closest(".student-card").dataset.id),console.log("editStudentId:",s);else return;f(),console.log("Перед редагуванням/видаленням, dataArray:",t);const n=t.find(o=>o.id===s);console.log("currentStudent:",n),e.target.classList.contains("edit-btn")&&(i.textContent="Редагування студента",a(d),l.firstName.value=n.firstName,l.lastName.value=n.lastName,l.age.value=n.age,l.course.value=n.course,l.faculty.value=n.faculty),e.target.classList.contains("delete-btn")&&(console.log("Видалити картку студента"),S.textContent=`Видалити картку студента ${n.firstName}?`,a(r))}function C(e){e.preventDefault(),console.log("Перед збереженням, dataArray:",t);const n=new FormData(l),o=Object.fromEntries(n.entries());if(o.age=Number(o.age),o.course=Number(o.course),i.textContent==="Редагування студента"){//! редагуємо існуючого студента
t[s]={...t[s],...o},console.log("Відредаговано студента:",t[s]);//! логіка додавання
}else{//! додаємо нового студента
o.id=t.length,console.log("editStudentId-ДОДАВАННЯ:",s),console.log("dataArray.length:",t.length),t.push(o),console.log("dataArray:",t),console.log("Додано студента:",o)}g(),m(t),a(d)}function A(){t.splice(s,1);//! var 2
console.log("dataArray:",t);for(let e=0;e<t.length;e++)t[e].id=e;console.log("editStudentId видалення:",s),g(),m(t),a(r)}function g(){localStorage.setItem("studentsList",JSON.stringify(t,null,2))}function f(){t=JSON.parse(localStorage.getItem("studentsList")),console.log("dataArray:",t)}function m(e){c.innerHTML="",console.log("Рендеримо dataArray:",e),e.forEach(n=>{c.insertAdjacentHTML("beforeend",y(n))})}function a(e){e.classList.toggle("hidden")}
