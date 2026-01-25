import"./modulepreload-polyfill-3cfb730f.js";//! Приклад-1: setTimeout()
console.warn("Приклад-1: setTimeout():");const n=document.querySelector(".btn-set-interval"),l=()=>{const t=setTimeout(()=>{console.log("Реакція на клік в кнопку <Click setInterval> через 5 секунд")},5e3);console.log("timerId:",t);//! Що спрацює раніше: console.warn() або setTimeout(() => {console.log()}, 5000);
};n.addEventListener("click",l);//! Приклад-2: setTimeout()
console.warn("Приклад-2: setTimeout():");const c=()=>{console.log("Hello!"),clearTimeout(r);//! ✅ Видалення таймера
},r=setTimeout(c,2e3);//! ❌ Видалення таймера
//! Таймер: setInterval()
console.log(`%c
    const intervalId = setInterval(callback, delay, arg1, arg2, ...);
    `,"color: blue; font-size: 18px");console.log("----------------------------------------------------------------------------------------------------");//! Приклад-1: setInterval()
console.warn("Приклад-1: setInterval():");const s=document.querySelector(".btn-start"),a=document.querySelector(".btn-stop");let e=null;//! ✅ Старт таймера кнопкою
s.addEventListener("click",()=>{let t=0;e=setInterval(()=>{t++;//! лічильник часу
console.log(`${t} Генерація випадкового числа: ${Math.random()}, id: ${e}`);//! ✅❌ Видалення/зупинення таймера за умовою
const o=10;t===o&&(clearTimeout(e),console.error(`Інтервал з ідентифікатором ${e} зупинено на ${o}-ій секунді!`))},1e3)});//! ✅❌ Видалення/зупинення таймера кнопкою
a.addEventListener("click",()=>{clearInterval(e),console.warn(`Інтервал з ідентифікатором ${e} зупинено!`)});
