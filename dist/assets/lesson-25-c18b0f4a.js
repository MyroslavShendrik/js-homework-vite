import"./modulepreload-polyfill-3cfb730f.js";import{H as t}from"./handlebars-b094548b.js";import"./_commonjsHelpers-725317a4.js";const n=[{id:1,name:"Laptop",price:1500,description:"A high-performance laptop for all your needs."},{id:2,name:"Smartphone",price:700,description:"A modern smartphone with an excellent camera."},{id:3,name:"Headphones",price:200,description:"Noise-cancelling headphones for better focus."}],r=`<div class="card">\r
    <p><b>id:</b>{{id}}</p>\r
    <p><b>name:</b>{{name}}</p>\r
    <p><b>price:</b>{{price}}</p>\r
    <p><b>description:</b>{{description}}</p>\r
</div>`;console.log("data:",n);console.log("cardTemplate:",r);const c=document.querySelector("#products");console.log("container:",c);const p=t.compile(r);console.log("template;",p);//! const markup = template(products); тут помилка
//! var1
//! var2  
n.forEach(e=>{console.log("item:",e);const o=p(e);console.log(`Вся розмітка (markup): 
`,o),c.innerHTML+=o;//! Кожен раз ДОДАЄ нову картку
});
