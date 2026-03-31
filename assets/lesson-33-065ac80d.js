import"./modulepreload-polyfill-3cfb730f.js";const n=document.getElementById("posts");fetch("https://jsonplaceholder.typicode.com/posts").then(t=>t.json()).then(t=>{const e=t.map(o=>`
          <div class="post-card">
            <h2>${o.title}</h2>
            <p>${o.body}</p>
          </div>
        `).join("");n.innerHTML=e}).catch(t=>{console.log("Помилка:",t)});
