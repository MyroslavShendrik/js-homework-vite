import"./modulepreload-polyfill-3cfb730f.js";const a=document.querySelector("#parent-1"),i=document.querySelector("#child-1"),g=document.querySelector("#descendant-1");a.addEventListener("click",e=>{alert("PARENT-1 click"),console.log("PARENT-1 click");//! Властивості event.target​ та event.currentTarget
});i.addEventListener("click",e=>{alert("CHILD-1 click"),console.log("CHILD-1 click"),console.log("event.target: ",e.target);//! джерело події 
console.log("event.currentTarget: ",e.currentTarget);//! місце знаходження 
console.log(". . . . . . . . . . . . . . . . . . . . . . . . . . . . .")});g.addEventListener("click",()=>{alert("DESCENDANT-1 click"),console.log("DESCENDANT-1 click")});console.log(". . . . . . . . . . . . . . . . . . . . . . . . . . . . . .");console.log("-----------------------------------------------------------");//! Властивості event.target​ та event.currentTarget
console.warn("Властивості event.target​ та event.currentTarget​:");//! Припинення спливання​
console.warn("Припинення спливання​:");const d=document.querySelector("#parent-2"),r=document.querySelector("#child-2"),u=document.querySelector("#descendant-2");d.addEventListener("click",()=>{alert(`PARENT-2 click. 
 Це сповіщення не з'явиться при натисканні на Descendant-2, подія не дійде сюди!`),console.log("PARENT-2 click")});r.addEventListener("click",e=>{//! зупиняє обробку ВСІХ подій,
//! тобто зупиняє і спливання, і виклик інших оброблювачів на поточному елементі
e.stopPropagation();//! перешкоджає просуванню події далі
alert(`CHILD-2 click-1. 
 Це сповіщення не з'явиться при натисканні на Descendant-2, подія не дійде сюди!`),console.log("CHILD-2 click-1")});r.addEventListener("click",e=>{alert(`CHILD-2 click-2. 
 Це сповіщення не з'явиться при натисканні на Descendant-2, подія не дійде сюди!`),console.log("CHILD-2 click-2")});u.addEventListener("click",e=>{alert("DESCENDANT-2 click"),console.log("DESCENDANT-2 click")});console.log("------------------------------------------------------------------");//! Активний елемент (приклад-1 (до))​
console.warn("Активний елемент (приклад-1 (до))​​:");console.log("------------------------------------------------------------------");//! Делегування подій​
console.warn(`Делегування подій (до)​: 
 ${window.location.href.split("/").slice(0,-2).join("/")+"/"}lesson-FE4_01/images/before-delegation.webp`);console.warn(`Делегування подій (після)​: 
 ${window.location.href.split("/").slice(0,-2).join("/")+"/"}lesson-FE4_01/images/after-delegation.png`);console.log("--------------------------------------------------------------------");//! Активний елемент (приклад-2 (після))​
console.warn("Активний елемент (приклад-2 (після))​​​:");const s=document.querySelector("#buttons-box");//! 🔸1️⃣
console.log("Buttons box:",s);s.addEventListener("click",e=>{//! 🔸2️⃣
console.log("event.target:",e.target);//! 🔸3️⃣
switch(console.log(`Клік в ${e.target.textContent}`),console.log("event.target.tagName = ",e.target.tagName),e.target.tagName){case"DIV":console.log(`Клік в ${e.target.tagName} - Buttons box`);break;case"BUTTON":console.log(`Клік в ${e.target.textContent}`);break;default:console.warn("НЕ спрацював ЖОДЕН блок!")}e.target.classList.toggle("active");//! додаємо/прибираємо клас для стилізації активного елемента;
console.log(". . . . . . . . . . . . . . . . .")});console.log("--------------------------------------------------------------------");const n=document.querySelector(".color-palette");console.log(n);const l=document.querySelector(".output");function k(){const e="0123456789ABCDEF";let o="#";for(let t=0;t<6;t++)o+=e[Math.floor(Math.random()*16)];return o}function m(){const e=[];for(let o=0;o<60;o++){const t=k(),c=document.createElement("button");c.type="button",c.dataset.color=t,c.style.backgroundColor=t,c.classList.add("item"),e.push(c)}n.append(...e)}m();n.addEventListener("click",E);function E(e){if(console.log("event.target.nodeName = ",e.target.nodeName),e.target===e.currentTarget){console.log(e.target),console.log(e.currentTarget);return}const o=e.target.dataset.color;l.textContent=`Selected color: ${o}`,l.style.color=o,console.log(`Вибраний колір ${o}`)}
