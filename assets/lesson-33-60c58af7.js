import"./modulepreload-polyfill-3cfb730f.js";const s=document.getElementById("posts");function e(){l().then(t=>c(t)).catch(t=>console.log(t))}function c(t){const n=t.map(o=>`
           <div class="post-card">
             <h2>${o.title}</h2>
             <p>${o.body}</p>
           </div>
         `).join("");s.innerHTML=n}function l(){return fetch("https://jsonplaceholder.typicode.com/posts").then(t=>t.json())}e();
