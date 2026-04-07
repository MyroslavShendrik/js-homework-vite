import"./modulepreload-polyfill-3cfb730f.js";const a=document.getElementById("count"),i=document.getElementById("get-data"),c=document.getElementById("data-list"),r="https://newsapi.org",l="/v2/everything";i.addEventListener("click",d);function d(){const t={q:"bitcoin",pageSize:parseInt(a.value),apiKey:"639ac27a9d1f4a569d7448e2fa14c42d"};u(t).then(n=>m(n)).catch(n=>console.log(n))}function u(e){return fetch(h(r,l,e)).then(t=>t.json()).then(t=>t.articles)}function h(e,t,n){const o=new URLSearchParams(n),s=`${e}${t}?${o}`;return console.log("url:",s),s}function m(e){c.innerHTML="";const t=e.map(n=>`
    <li>
      <h3>${n.title}</h3>
      <p>${n.description||"Немає опису"}</p>
    </li>
  `).join("");c.innerHTML=t}
