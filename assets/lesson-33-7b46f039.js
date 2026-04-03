import"./modulepreload-polyfill-3cfb730f.js";const c=document.getElementById("posts"),r=document.getElementById("loadPosts"),l="https://jsonplaceholder.typicode.com/",a="posts",i={_limit:9,_sort:"title"};r.addEventListener("click",d);function d(){u().then(t=>m(t)).catch(t=>console.log(t))}function m(t){const o=t.map(n=>`
        <li>
          <h3>${n.title}</h3>
          <p>${n.body}</p>
        </li>
      `).join("");c.innerHTML=o}function u(){return fetch(h(l,a,i)).then(t=>t.json())}function h(t,o,n){const s=new URLSearchParams(n),e=`${t}${o}?${s}`;return console.log("url:",e),e}
