import"./modulepreload-polyfill-3cfb730f.js";//! Метод JSON.stringify()
console.log(`%c
    JSON.stringify(object)
    `,"color: blue; font-size: 18px");console.log("--------------------------------------------------");const o={name:"Mango",age:3,isHappy:!0};console.log("dog1:",o);const n=JSON.stringify(o);console.log("dogJSON1:",n);//! "{"name":"Mango","age":3,"isHappy":true}"
console.log("--------------------------------------------------");const l={name:"Mango",age:3,isHappy:!0,bark(){console.log("Woof!")}},s=JSON.stringify(l);console.log("dogJSON2:",s);//! "{"name":"Mango","age":3,"isHappy":true}"
console.log("--------------------------------------------------");const g=JSON.stringify(()=>console.log("Well, this is awkward"));console.log("functionJSON:",g);//! undefined
console.log("--------------------------------------------------");
