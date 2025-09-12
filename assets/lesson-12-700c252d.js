import"./modulepreload-polyfill-3cfb730f.js";console.log("%c [1] ","color: yellow; background-color: #2274A5");const r={name:"Mango",age:20,hobby:"html",premium:!0};r.mood="happy";r.hobby="skydiving";r.premium=!1;console.log(r);//! Код виконаного завдання
console.log("--------------------------------------------------");console.log("%c [2] ","color: yellow; background-color: #2274A5");//! Код виконаного завдання
const f=function(l){return Object.keys(l).length};//! Викличи функції для перевірки працездатності твоєї реалізації.
console.log(f({}));//! 0
console.log(f({name:"Mango",age:2}));//! 2
console.log("--------------------------------------------------");console.log("%c [3] ","color: yellow; background-color: #2274A5");//! Код виконаного завдання
const a=function(l){let n="",o=0;const t=Object.keys(l);for(const c of t)l[c]>o&&(o=l[c],n=c);for(const c of Object.entries(l)){console.log(c);const[s,i]=c;i>o&&(o=i,n=s)}for(const[c,s]of Object.entries(l))s>o&&(o=s,n=c);return n};//! Викличи функції для перевірки працездатності твоєї реалізації.
console.log(a({ann:29,david:35,helen:1,lorence:99}));//! lorence
console.log(a({poly:12,mango:17,ajax:4}));//! mango
console.log(a({lux:147,david:21,kiwi:19,chelsy:38}));//! lux
console.log("--------------------------------------------------");console.log("%c [4] ","color: yellow; background-color: #2274A5");//! Код виконаного завдання
const g=function(l){let n=0;for(let o of Object.values(l))n+=o;return n};//! Викличи функції для перевірки працездатності твоєї реалізації.
console.log(g({}));//! 0
console.log(g({mango:100,poly:150,alfred:80}));//! 330
console.log(g({kiwi:200,lux:50,chelsy:150}));//! 400
console.log("--------------------------------------------------");console.log("%c [5] ","color: yellow; background-color: #2274A5");//! Код виконаного завдання
const e=[{name:"Радар",price:1300,quantity:4},{name:"Сканер",price:2700,quantity:3},{name:"Дроїд",price:400,quantity:7},{name:"Захоплення",price:1200,quantity:2}],u=function(l,n){const o=[];for(const t of l)t[n]&&o.push(t[n]);return o};//! Викличи функції для перевірки працездатності твоєї реалізації.
console.log(u(e,"name1"));//! ['Радар', 'Сканер', 'Дроїд', 'Захоплення']
console.log(u(e,"quantity"));//! [4, 3, 7, 2]
console.log(u(e,"category"));//! []
console.log("--------------------------------------------------");console.log("%c [6] ","color: yellow; background-color: #2274A5");//! Код виконаного завдання
const y=function(l,n){for(const o of l)if(o.name===n)return o.price*o.quantity;return 0};//! Викличи функції для перевірки працездатності твоєї реалізації.
console.log(y(e,"Радар"));//! 5200
console.log(y(e,"Дроїд"));//! 2800
console.log("--------------------------------------------------");
