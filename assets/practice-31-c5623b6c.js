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
new Promise((e,s)=>s("❌ ERROR from new Promise")).catch(e=>console.error("new Promise:",e));Promise.reject("❌❌ ERROR from from Promise.resolve").catch(e=>{console.error("Promise.resolve:",e),console.log("------------------------------------------------------------------------")});//! Код до рефакторингу
//! Виконаємо рефакторинг наступного коду:
const o=e=>e===""||e===void 0?{success:!1,message:"❌ Guest name must not be empty"}:{success:!0,message:`✅ Welcome ${e}`};setTimeout(()=>{console.warn("Код до рефакторингу:");const e=o("Mango");console.log("result:",e);//! {success: true, message: '✅ Welcome Mango'}
e.success?console.log(e.message):console.error(e.message)},0);//! ❌
setTimeout(()=>{const e=o("");console.log("result:",e);//! {success: false, message: '❌ Guest name must not be empty'}
if(e.success)console.log(e.message);else{console.error(e.message);//! ❌ Guest name must not be empty
console.log("------------------------------------------------------------------------")}},0);
