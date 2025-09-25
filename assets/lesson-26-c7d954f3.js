import"./modulepreload-polyfill-3cfb730f.js";import{H as m}from"./handlebars-b094548b.js";import"./_commonjsHelpers-725317a4.js";const f=`<li class="student-card" data-id="{{id}}">
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
`;let d=[],o="[]";const g=document.getElementById("btn-add-student"),b=document.getElementById("btn-cancel"),i=document.getElementById("form-area"),n=document.getElementById("student-form"),l=document.getElementById("students-list");let r=null;g.addEventListener("click",()=>{i.classList.remove("hidden"),n.reset(),r=null,document.getElementById("form-title").textContent="Нова картка студента"});b.addEventListener("click",()=>{i.classList.add("hidden"),n.reset()});n.addEventListener("submit",s=>{s.preventDefault();const a=new FormData(n),t=Object.fromEntries(a.entries());t.age=Number(t.age),t.course=Number(t.course);try{if(r){const e=d.findIndex(c=>c.id===r);d[e]={...d[e],...t},r=null}else t.id=Date.now(),d.push(t);o=JSON.stringify(d,null,2),u(),i.classList.add("hidden"),n.reset()}catch(e){alert("Помилка JSON: "+e.message)}});function u(){l.innerHTML="";try{const s=JSON.parse(o),a=m.compile(f);s.forEach(t=>{l.insertAdjacentHTML("beforeend",a(t))})}catch(s){console.error("JSON parse error:",s)}}l.addEventListener("click",s=>{const a=s.target.closest(".student-card");if(!a)return;const t=Number(a.dataset.id);if(s.target.classList.contains("delete-btn")&&confirm("Видалити картку?")&&(d=d.filter(e=>e.id!==t),o=JSON.stringify(d,null,2),u()),s.target.classList.contains("edit-btn")){const e=d.find(c=>c.id===t);e&&(i.classList.remove("hidden"),document.getElementById("form-title").textContent="Редагування студента",n.firstName.value=e.firstName,n.lastName.value=e.lastName,n.age.value=e.age,n.course.value=e.course,n.faculty.value=e.faculty,r=t)}});
