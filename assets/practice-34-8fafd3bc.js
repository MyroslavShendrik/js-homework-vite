import"./modulepreload-polyfill-3cfb730f.js";//! Пагінація
console.warn(`Вся колекція: 
 ${window.location.href.split("/").slice(0,-2).join("/")+"/"}lesson-FE4_17/images/no-pagination.png`);console.log("--------------------------------------------------------------");//! пошук довжини колекції 
const i=[5,7,9,15,16],r=[25,27,29,215,216,156,220],u=[35,37,39];function o(t){console.log("arr:",t);const n=t.length;return console.log("finalArray:",n),t.length}console.log(o(i));console.log(o(r));console.log(o(u));const c=document.getElementById("input-elements"),a=document.getElementById("input-pages");//!робимо пагінацію 
const m="https://jsonplaceholder.typicode.com/",g="posts";//!GET /posts?_page=1&_limit=25 - приклад запиту з урахуванням номера сторінки та кількості елементів на сторінці 
const p={_page:a.value||1,_limit:c.value||1};//! загальна кількість елементів / на кількість елементів на сторінці = кількість сторінок 
const d=document.getElementById("posts-list"),h=document.getElementById("button-fetch");h.addEventListener("click",y);//!Головна функція 
function y(){f().then(t=>E(t)).catch(t=>console.log(t))}function f(){return fetch(P(m,g,p)).then(t=>t.json())}function E(t){const n=t.map(e=>`
    <li class="list-item">
    <h3 class="list-title">${e.title}</h3>
    <p class="list-id"> id:${e.id} </p>
    <p class=list-text> ${e.body}</p>
    </li>
`).join("");d.innerHTML=n}function P(t,n,e){const s=new URLSearchParams(e);console.log("searchParams:",s),a.value,c.value;const l=`${t}${n}?${s}`;return console.log("url:",l),l}
