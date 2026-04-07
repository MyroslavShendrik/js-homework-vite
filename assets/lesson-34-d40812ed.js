import"./modulepreload-polyfill-3cfb730f.js";const a=document.getElementById("count"),i=document.getElementById("get-data"),s=document.getElementById("data-list"),p="https://swapi.dev/api",r="/people";i.addEventListener("click",u);function u(){parseInt(a.value),d().then(t=>h(t)).catch(t=>console.log(t))}function d(t){return fetch(m(p,r)).then(n=>n.json()).then(n=>n.results)}function m(t,n,o){const e=`${t}${n}`;return console.log("url:",e),e}function h(t){s.innerHTML="";const n=t.map(({name:o,gender:e,birth_year:c,homeworld:l})=>`
    <li>
      <h3>${o}</h3>
      <p>${e}</p>
      <p>${c}</p>
      <p>${l}</p>
    </li>
  `).join("");s.innerHTML=n}
