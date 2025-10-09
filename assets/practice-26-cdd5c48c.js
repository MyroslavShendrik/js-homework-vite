import"./modulepreload-polyfill-3cfb730f.js";import{H as t}from"./handlebars-b094548b.js";import"./_commonjsHelpers-725317a4.js";const r=`<div class="menu">\r
  <h3 class="menu-title">{{title}}</h3>\r
  <ul class="menu-list">\r
    {{#each items}}\r
     <li class="menu-item">{{this}}</li>\r
    {{/each}}\r
  </ul>\r
</div>`,e={title:"Create content from Template and Data!",items:["LoDash","NanoID","PNotify","Chart.js","BasicLightbox","Handlebars"]};console.log(e);const n=t.compile(r);console.log("temolate:",n);const o=n(e);console.log("markup:",o);const c=document.querySelector("#menu-container");c.innerHTML=o;//! викоритсання шаблону за допомогою template
const l=document.querySelector("#menu-template").innerHTML.trim(),s=t.compile(l),a=s(e);console.log(`Вся розмітка (markup2): 
`,a);const m=document.querySelector("#menu-container");m.innerHTML+=a;
