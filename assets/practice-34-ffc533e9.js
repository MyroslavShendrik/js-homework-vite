import"./modulepreload-polyfill-3cfb730f.js";//! Пагінація
console.warn(`Вся колекція: 
 ${window.location.href.split("/").slice(0,-2).join("/")+"/"}lesson-FE4_17/images/no-pagination.png`);console.log("--------------------------------------------------------------");//! пошук довжини колекції 
const e=[5,7,9,15,16],l=[25,27,29,215,216,156,220],c=[35,37,39];function s(t){console.log("arr:",t);const o=t.length;return console.log("finalArray:",o),t.length}console.log(s(e));console.log(s(l));console.log(s(c));//!робимо пагінацію 
const i="https://jsonplaceholder.typicode.com/",a="posts";//! загальна кількість елементів / на кількість елементів на сторінці = кількість сторінок 
const r=document.getElementById("posts-list");//!Головна функція 
function g(){p().then(t=>h(t)).catch(t=>console.log(t))}function p(){return fetch(u(i,a)).then(t=>t.json())}function h(t){const o=t.map(n=>`
    <li class="list-item">
    <h3 class="list-title">${n.title}</h3>
    <p class="list-id"> id:${n.id} </p>
    <p class=list-text> ${n.body}</p>
    </li>
`).join("");r.innerHTML=o}function u(t,o){return`${t}${o}`}g();
