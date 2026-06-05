import"./modulepreload-polyfill-3cfb730f.js";const s="http://localhost:3000/",l="posts",a=document.querySelector(".limit-input"),p=document.querySelector(".page-input"),d=document.querySelector(".fetch-btn"),n=document.querySelector(".posts-list"),g=document.querySelector(".total-posts"),m=document.querySelector(".current-page"),y=document.querySelector(".total-pages");let i=1,c=[];//! ================= INIT =================
P();d.addEventListener("click",f);//! ================= MAIN FUNCTION =================
async function f(){const t=Number(a.value)||5,e=Number(p.value)||1;if(t<1||e<1){alert("Введіть коректні значення");return}i=e,u();try{const o=await h(e,t);$(o.data)}catch(o){console.error(o),n.innerHTML="<li>Помилка завантаження</li>"}}//! ================= FETCH POSTS =================
async function h(t,e){const r=await(await fetch(`${s}${l}?_page=${t}&_per_page=${e}`)).json();return console.log("dataObject:",r),r}//! ================= GET ALL POSTS =================
async function P(){try{const t=await fetch(`${s}${l}`);if(!t.ok)throw new Error("Network error");c=await t.json(),console.log("allPosts:",c),u()}catch(t){console.error(t)}}//! ================= INFO =================
function u(){const t=Number(a.value)||5,e=c.length,o=Math.ceil(e/t);g.textContent=e,m.textContent=i,y.textContent=o}//! ================= RENDER =================
function $(t){if(console.log("posts:",t),!Array.isArray(t)||t.length===0){n.innerHTML="<li>Немає постів</li>";return}const e=t.map(o=>`
        <li class="list-item">
          <h3>${o.title}</h3>
          <p>id: ${o.id}</p>
          <p>${o.body}</p>
        </li>
      `).join("");n.innerHTML=e}
