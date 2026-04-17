import"./modulepreload-polyfill-3cfb730f.js";//! Пагінація
console.warn(`Вся колекція: 
 ${window.location.href.split("/").slice(0,-2).join("/")+"/"}lesson-FE4_17/images/no-pagination.png`);console.log("--------------------------------------------------------------");//! пошук довжини колекції 
const c=[5,7,9,15,16],l=[25,27,29,215,216,156,220],a=[35,37,39];function o(t){console.log("arr:",t);const n=t.length;return console.log("finalArray:",n),t.length}console.log(o(c));console.log(o(l));console.log(o(a));const i=document.getElementById("input-elements"),r=document.getElementById("input-pages");//!робимо пагінацію 
const u="https://jsonplaceholder.typicode.com/",m="posts";//!GET /posts?_page=1&_limit=25 - приклад запиту з урахуванням номера сторінки та кількості елементів на сторінці 
const p={_page:r.value||1,_limit:i.value||1};//! загальна кількість елементів / на кількість елементів на сторінці = кількість сторінок 
const g=document.getElementById("posts-list"),d=document.getElementById("button-fetch");d.addEventListener("click",h);//!Головна функція 
function h(){y().then(t=>f(t)).catch(t=>console.log(t))}function y(){return fetch(E(u,m,p)).then(t=>t.json())}function f(t){const n=t.map(e=>`
    <li class="list-item">
    <h3 class="list-title">${e.title}</h3>
    <p class="list-id"> id:${e.id} </p>
    <p class=list-text> ${e.body}</p>
    </li>
`).join("");g.innerHTML=n}function E(t,n,e){const s=new URLSearchParams(e);return console.log("searckParams:",s),`${t}${n}?${s}`}
