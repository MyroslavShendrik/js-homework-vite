import"./modulepreload-polyfill-3cfb730f.js";const s=document.getElementById("data-list"),c=document.getElementById("get-data"),a=document.getElementById("count");c.addEventListener("click",l);const r="https://jsonplaceholder.typicode.com/",i="posts";function l(){u().then(t=>d(t)).catch(t=>console.log(t))}function d(t){const e=t.map(n=>`
        <li>
          <h3>${n.title}</h3>
          <p>${n.body}</p>
        </li>
      `).join("");s.innerHTML=e}function u(){return fetch(m(r,i,{_limit:a.value,_sort:"title"})).then(t=>t.json())}function m(t,e,n){const o=new URLSearchParams(n);return`${t}${e}?${o}`}
