import"./modulepreload-polyfill-3cfb730f.js";/* empty css              *///!завдання 1
//! код:
const m=document.querySelector(".slider__input"),l=document.querySelector(".slider__image");//! var1
const r=_.debounce(e=>{l.style.transform=`scale(${e/50})`},500);//! var2
//! картинка заповзає на повзунок 
m.addEventListener("input",e=>{r(e.target.value)});//!завдання 2
//! код:
const s=document.querySelector(".move-area"),t=document.getElementById("box");s.addEventListener("mousemove",_.debounce(e=>{const a=t.offsetWidth/2,c=s.clientWidth-t.offsetWidth,i=s.clientHeight-t.offsetHeight;let o=e.offsetX-a,n=e.offsetY-a;o=Math.max(0,Math.min(o,c)),n=Math.max(0,Math.min(n,i)),t.style.left=o+"px",t.style.top=n+"px"},100));//! квадрат вилазить за межі зони 
//! картинка знову вилазить на інші елементи
