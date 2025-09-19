import"./modulepreload-polyfill-3cfb730f.js";import{H as t}from"./handlebars-b094548b.js";import"./_commonjsHelpers-725317a4.js";const c=`<div class="menu">
  <h3 class="menu-title">{{title}}</h3>
  <ul class="menu-list">
    {{#each items}}
     <li class="menu-item">{{this}}</li>
    {{/each}}
  </ul>
</div>`,e={title:"Create content from Template and Data!",items:["LoDash","NanoID","PNotify","Chart.js","BasicLightbox","Handlebars"]};console.log(e);const n=t.compile(c);console.log("temolate:",n);const o=n(e);console.log("markup:",o);const l=document.querySelector("#menu-container");l.innerHTML=o;//! викоритсання шаблону за допомогою template
const s=document.querySelector("#menu-template").innerHTML.trim(),m=t.compile(s),a=m(e);console.log(`Вся розмітка (markup2): 
`,a);const r=document.querySelector("#menu-container");r.innerHTML+=a;
