import"./modulepreload-polyfill-3cfb730f.js";//! Пагінація
console.warn(`Вся колекція: 
 ${window.location.href.split("/").slice(0,-2).join("/")+"/"}lesson-FE4_17/images/no-pagination.png`);console.log("--------------------------------------------------------------");//! пошук довжини колекції 
const g=[5,7,9,15,16],m=[25,27,29,215,216,156,220],p=[35,37,39];function s(e){console.log("arr:",e);const o=e.length;return console.log("finalArray:",o),e.length}console.log(s(g));console.log(s(m));console.log(s(p));const l=document.getElementById("input-elements"),t=document.getElementById("input-pages");console.log("input2:",t);const u=document.querySelector(".prev-btn");console.log("prevBtn:",u);const d=document.querySelector(".next-btn");console.log("nextBtn:",d);//!робимо пагінацію 
const v="https://jsonplaceholder.typicode.com/",h="posts";//!GET /posts?_page=1&_limit=25 - приклад запиту з урахуванням номера сторінки та кількості елементів на сторінці 
const y={_page:t.value||2,_limit:l.value||2};//! загальна кількість елементів / на кількість елементів на сторінці = кількість сторінок 
const f=document.getElementById("posts-list"),c=document.getElementById("button-fetch");//! блокуємо кнопку 
c.setAttribute("disabled","");//! розблокуємо кнопку 
c.removeAttribute("disabled");c.addEventListener("click",a);//!Головна функція 
function a(){if(l.value<1||t.value<1){alert("введіть коректні значення в полях вводу");return}b().then(e=>E(e)).catch(e=>console.log(e))}function b(){return fetch(P(v,h,y)).then(e=>e.json())}function E(e){const o=e.map(n=>`
    <li class="list-item">
    <h3 class="list-title">${n.title}</h3>
    <p class="list-id"> id:${n.id} </p>
    <p class=list-text> ${n.body}</p>
    </li>
`).join("");f.innerHTML=o}function P(e,o,n){n._page=t.value,n._limit=l.value;const i=new URLSearchParams(n);console.log("searchParams:",i),t.value,l.value;const r=`${e}${o}?${i}`;return console.log("url:",r),r}//! надати на кнопку слухача
//! при натисканні на кнопку value в input буде зменшуватися на 1
//! відати збільшені або зменьшині параметри в парамс 
//! сформувати новий URL з новими парамс 
//! зробити запит з новим URl
//! отримати дані у відповідь
//! відмалювати ці дані 
u.addEventListener("click",()=>{console.log("click in btn prev");let e=Number(t.value);e>1&&(e--,t.value=e,a())});d.addEventListener("click",()=>{let e=Number(t.value);e++,t.value=e,a()});//! робота з кнопкою fetch
//! якщо один з input немає значень,кнопка fetch не робить запит і виводить повідомлення, що некоректно вод даних
