import"./modulepreload-polyfill-3cfb730f.js";const s=document.getElementById("count"),l=document.getElementById("get-data"),c=document.getElementById("data-list"),r="https://swapi.dev/api",a="/people";l.addEventListener("click",i);function i(){u().then(t=>p(t)).catch(t=>console.log(t))}function u(){return fetch(h(r,a)).then(t=>t.json()).then(t=>t.results)}function h(t,n){const e=s.value||1,o=`${t}${n}/?page=${e}`;return console.log("url:",o),o}function d(t){return fetch(t).then(n=>n.json()).then(n=>n.name)}function p(t){c.innerHTML="";const n=t.map(e=>d(e.homeworld).then(o=>`
          <li>
            <h3>${e.name}</h3>
            <p>Gender: ${e.gender}</p>
            <p>Birth year: ${e.birth_year}</p>
            <p>Planet: ${o}</p>
          </li>
        `));Promise.all(n).then(e=>{c.innerHTML=e.join("")}).catch(e=>console.log(e))}
