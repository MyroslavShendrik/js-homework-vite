import"./modulepreload-polyfill-3cfb730f.js";import{H as t}from"./handlebars-b094548b.js";import"./_commonjsHelpers-725317a4.js";const n=[{id:1,name:"Laptop",price:1500,description:"A high-performance laptop for all your needs."},{id:2,name:"Smartphone",price:700,description:"A modern smartphone with an excellent camera."},{id:3,name:"Headphones",price:200,description:"Noise-cancelling headphones for better focus."}],c=`<div class="card">
    <p><b>id:</b>{{id}}</p>
    <p><b>name:</b>{{name}}</p>
    <p><b>price:</b>{{price}}</p>
    <p><b>description:</b>{{description}}</p>
</div>`;console.log("data:",n);console.log("cardTemplate:",c);const p=document.querySelector("#products");console.log("container:",p);const r=t.compile(c);console.log("template;",r);//! const markup = template(products); тут помилка
//! var1
//! var2  
n.forEach(e=>{console.log("item:",e);const o=r(e);console.log(`Вся розмітка (markup): 
`,o),p.innerHTML+=o;//! Кожен раз ДОДАЄ нову картку
});
