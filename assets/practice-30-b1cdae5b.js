import"./modulepreload-polyfill-3cfb730f.js";//! Стани промісу
console.warn(`Стани промісу​​: 
 ${window.location.href.split("/").slice(0,-2).join("/")+"/"}lesson-FE4_13/images/promise-states.png`);console.log(`%c
        📌 Проміс може бути у трьох станах:
    🔸 Очікування (pending) - початковий стан під час створення промісу.
    🔸 Виконано (fulfilled) - операція виконана успішно з будь-яким результатом.
    🔸 Відхилено (rejected) - операція відхилена з помилкою.
    `,"color: blue; font-size: 18px");console.log("--------------------------------------------------------------------------------------------------------------------------");//! ❌ ПРИКЛАД-1: Необхідність використання промісів
console.warn("❌ ПРИКЛАД-1: Необхідність використання промісів:");function n(){let o=null;return setTimeout(()=>{o={id:1,name:"Alex"},console.log("userData1:",o);//! {id: 1, name: 'Alex'}
},1e3),o}function s(){const o=n();console.log("userInfo1:",o);//! null
}s();console.log("-----------------------------------------------------------------------------------");//! ✅ ПРИКЛАД-2: Необхідність використання промісів
console.warn("✅ ПРИКЛАД-2: Необхідність використання промісів:");function l(o){setTimeout(()=>{o({id:1,name:"Alex"})},1e3)}function c(){l(o=>{console.log("userInfo2:",o);//! {id: 1, name: 'Alex'}
})}c();console.log("-----------------------------------------------------------------------------------");//! Створення промісу 
console.warn("Створення промісу:");console.warn(`Створення промісу​​: 
 ${window.location.href.split("/").slice(0,-2).join("/")+"/"}lesson-FE4_13/images/creating-promise.png`);console.log(`%c
    const promise = new Promise((resolve, reject) => {
        // Asynchronous operation
    });
    `,"color: blue; font-size: 18px");console.log("-----------------------------------------------------------------------------------");//! Метод then()
console.warn(`Метод then()​​: 
 ${window.location.href.split("/").slice(0,-2).join("/")+"/"}lesson-FE4_13/images/method-then.png`);console.log(`%c
    const promise = new Promise((resolve, reject) => {
      // Asynchronous operation
    });

    promise.then(onResolve, onReject);
    `,"color: blue; font-size: 18px");console.log("-----------------------------------------------------------------------------------");//! ПРИКЛАД використання методу then()
console.log("-----------------------------------------------------------------------------------");//! Метод catch()
console.warn(`Метод catch()​​: 
 ${window.location.href.split("/").slice(0,-2).join("/")+"/"}lesson-FE4_13/images/method-catch.png`);console.log(`%c
    const promise = new Promise((resolve, reject) => {
      // Asynchronous operation
    });

    promise.catch(error => {
      // Promise rejected
    });
    `,"color: blue; font-size: 18px");console.log("-----------------------------------------------------------------------------------");//! ПРИКЛАД використання методу catch()
//! Метод finally()
console.warn(`Метод finally()​​: 
 ${window.location.href.split("/").slice(0,-2).join("/")+"/"}lesson-FE4_13/images/method-finally.png`);console.log(`%c
    const promise = new Promise((resolve, reject) => {
      // Asynchronous operation
    });

    promise.finally(() => {
      // Promise fulfilled or rejected
    });
    `,"color: blue; font-size: 18px");console.log("-------------------------------------------------------------------------------------");//! ПРИКЛАД використання методу finally()
console.warn("ПРИКЛАД використання методу finally():");//! Ланцюжки промісів
console.warn(`Ланцюжки промісів​​: 
 ${window.location.href.split("/").slice(0,-2).join("/")+"/"}lesson-FE4_13/images/promise-chain.png`);const i=new Promise((o,e)=>{setTimeout(()=>{o(5)},2e3)});i.then(o=>{console.log("value_then-1:",o);//! 5
return o*2}).then(o=>{console.log("value_then-2:",o);//! 10
return o*3}).then(o=>{console.log("value_then-3:",o);//! 30
}).catch(o=>{console.log(o)}).finally(()=>{console.log("Final task_метод finally()"),console.log("--------------------------------------------------------------")});
