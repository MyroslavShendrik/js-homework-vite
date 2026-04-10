import"./modulepreload-polyfill-3cfb730f.js";const r=document.getElementById("count"),d=document.getElementById("get-data"),l=document.getElementById("data-list"),p="https://swapi.dev/api",u="/people";d.addEventListener("click",m);function m(){h().then(t=>P(t)).catch(t=>console.log(t))}async function h(){const e=(await(await fetch(w(p,u))).json()).results,s=parseInt(r.value)||e.length,o=e.slice(0,s);return await Promise.all(o.map(async c=>{const i=await(await fetch(c.homeworld)).json();return{...c,homeworld:i.name}}))}function w(t,n){const e=`${t}${n}`;return console.log("url:",e),e}function P(t){l.innerHTML="";const n=t.map(({name:e,gender:s,birth_year:o,homeworld:a})=>`
    <li>
      <h3>${e}</h3>
      <p>Gender: ${s}</p>
      <p>Birth year: ${o}</p>
      <p>Planet: ${a}</p>
    </li>
  `).join("");l.innerHTML=n}
