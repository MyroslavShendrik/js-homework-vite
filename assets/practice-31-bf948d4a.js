import"./modulepreload-polyfill-3cfb730f.js";//! Статичні методи класу Promise
//! Promise.all()
console.log(`%c
    Promise.all([promise1, promise2, promise3, ...])
    `,"color: blue; font-size: 18px");//! Promise.race()
console.log(`%c
    Promise.race([promise1, promise2, promise3, ...])
    `,"color: blue; font-size: 18px");//! Promise.any()
console.log(`%c
    Promise.any([promise1, promise2, promise3, ...])
    `,"color: blue; font-size: 18px");//! new Promise ----> Promise.resolve() і Promise.reject()
console.warn("new Promise ----> Promise.resolve() і Promise.reject():");new Promise(e=>e("✅ SUCCESS value from new Promise")).then(e=>console.log("new Promise:",e));Promise.resolve("✅✅ SUCCESS value from Promise.resolve").then(e=>{console.log("Promise.resolve:",e),console.log("typeof Promise.resolve:",typeof e);//! string
console.log(". . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .")});//! ❌ Rejected promise
new Promise((e,o)=>o("❌ ERROR from new Promise")).catch(e=>console.error("new Promise:",e));Promise.reject("❌❌ ERROR from from Promise.resolve").catch(e=>{console.error("Promise.resolve:",e),console.log("------------------------------------------------------------------------")});//! Код до рефакторингу
//! Виконаємо рефакторинг наступного коду:
const l=e=>e===""||e===void 0?{success:!1,message:"❌ Guest name must not be empty"}:{success:!0,message:`✅ Welcome ${e}`};setTimeout(()=>{console.warn("Код до рефакторингу:");const o=l("Mango");console.log("result:",o);//! {success: true, message: '✅ Welcome Mango'}
o.success?console.log(o.message):console.error(o.message)},0);//! ❌
setTimeout(()=>{const e=l("");console.log("result:",e);//! {success: false, message: '❌ Guest name must not be empty'}
if(e.success)console.log(e.message);else{console.error(e.message);//! ❌ Guest name must not be empty
console.log("------------------------------------------------------------------------")}},0);//! Код після рефакторингу (крок-1)
const n=(e,o,s)=>{if(e===""||e===void 0)return s("❌1️⃣ Guest name must not be empty");o(`✅1️⃣ Welcome ${e}`)};setTimeout(()=>{console.warn("Код після рефакторингу (крок-1):"),n("Mango",e=>console.log(e),e=>console.error(e))},0);//! ❌1️⃣
setTimeout(()=>{n("",e=>console.log(e),e=>{console.error(e);//! ❌1️⃣ Guest name must not be empty
console.log("------------------------------------------------------------------------")})},0);//! Код після рефакторингу (крок-2)
const m=e=>e===""||e===void 0?Promise.reject("❌2️⃣ Guest name must not be empty"):Promise.resolve(`✅2️⃣ Welcome ${e}`);setTimeout(()=>{console.warn("Код після рефакторингу (крок-2):"),m("Mango").then(e=>console.log(e)).catch(e=>console.error(e))},0);//! ❌2️⃣
setTimeout(()=>{m("").then(e=>console.log(e)).catch(e=>{console.error(e);//! ❌2️⃣ Guest name must not be empty
console.log("------------------------------------------------------------------------")})},0);//! Promise.allSettled(promises)
console.log(`%c
    const promiseA = makePromise("promiseA value", 1000); 
    const promiseB = makePromise("promiseB value", 3000); 
    const promiseC = makePromise("promiseС value", 2000);
    
    Promise.allSettled([promiseA, promiseB, promiseC])
    .then(value => console.log(value));
    `,"color: blue; font-size: 18px");console.log(". . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .");const i=2500,r=(e,o)=>new Promise((s,c)=>{setTimeout(()=>{o<=i?s(e):c("❌ Error!")},o)}),t=r("promiseA value",1e3),u=r("promiseB value",3e3);//! ❌
const a=r("promiseС value",2e3);Promise.allSettled([t,u,a]).then(e=>console.log(`Promise.allSettled([promiseA, promiseB, promiseC]).then(value):
`,e)).finally(()=>{console.log("-------------------------------------------------------------------------------------")});
