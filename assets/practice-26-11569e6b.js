import"./modulepreload-polyfill-3cfb730f.js";import{H as n}from"./handlebars-aa0ac26f.js";const c=`<div class="menu">
  <h3 class="menu-title">{{title}}</h3>
  <ul class="menu-list">
    {{#each items}}
     <li class="menu-item">{{this}}</li>
    {{/each}}
  </ul>
</div>`,e={title:"Create content from Template and Data!",items:["LoDash","NanoID","PNotify","Chart.js","BasicLightbox","Handlebars"]};console.log(e);const t=n.compile(c);console.log("temolate:",t);const o=t(e);console.log("markup:",o);const l=document.querySelector("#menu-container");l.innerHTML=o;//! викоритсання шаблону за допомогою template
const s=document.querySelector("#menu-template").innerHTML.trim(),m=n.compile(s),a=m(e);console.log(`Вся розмітка (markup2): 
`,a);const r=document.querySelector("#menu-container");r.innerHTML+=a;
