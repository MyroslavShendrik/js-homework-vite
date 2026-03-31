import"./modulepreload-polyfill-3cfb730f.js";const c=document.getElementById("posts"),r=document.getElementById("loadPosts");r.addEventListener("click",a);function a(){i().then(t=>l(t)).catch(t=>console.log(t))}function l(t){const n=t.map(o=>`
           <div class="post-card">
             <h2>${o.title}</h2>
             <p>${o.body}</p>
           </div>
         `).join("");c.innerHTML=n}function i(){return fetch(u(d,m,h)).then(t=>t.json())}const d="https://jsonplaceholder.typicode.com/",m="posts",h={_limit:9,_sort:"title"};function u(t,n,o){console.warn("Клас URLSearchParams:");const e=new URLSearchParams(o),s=`${t}${n}?${e}`;console.log("url:",s);//! "https://jsonplaceholder.typicode.com/users?_limit=5&_sort=name"
return console.log("--------------------------------------------------------------------------------------------------------------------------"),s}
