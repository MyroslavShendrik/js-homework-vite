import"./modulepreload-polyfill-3cfb730f.js";//! Стани промісу
console.warn(`Стани промісу​​: 
 ${window.location.href.split("/").slice(0,-2).join("/")+"/"}lesson-FE4_13/images/promise-states.png`);console.log(`%c
        📌 Проміс може бути у трьох станах:
    🔸 Очікування (pending) - початковий стан під час створення промісу.
    🔸 Виконано (fulfilled) - операція виконана успішно з будь-яким результатом.
    🔸 Відхилено (rejected) - операція відхилена з помилкою.
    `,"color: blue; font-size: 18px");console.log("--------------------------------------------------------------------------------------------------------------------------");//! ❌ ПРИКЛАД-1: Необхідність використання промісів
console.warn("❌ ПРИКЛАД-1: Необхідність використання промісів:");console.log("-----------------------------------------------------------------------------------");//! Створення промісу 
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
 ${window.location.href.split("/").slice(0,-2).join("/")+"/"}lesson-FE4_13/images/promise-chain.png`);const l=new Promise((o,n)=>{setTimeout(()=>{o(5)},2e3)});l.then(o=>{console.log("value_then-1:",o);//! 5
return o*2}).then(o=>{console.log("value_then-2:",o);//! 10
return o*3}).then(o=>{console.log("value_then-3:",o);//! 30
}).catch(o=>{console.log(o)}).finally(()=>{console.log("Final task_метод finally()"),console.log("--------------------------------------------------------------")});//! ПРИКЛАД-1: Асинхронна функція запиту на сервер з колбеками
console.warn("ПРИКЛАД-1: Асинхронна функція запиту на сервер з колбеками:");function s(o){setTimeout(()=>{o({id:1,name:"Alex-1"})},500)}function c(o){console.log("userInfo1:",o);//! {id: 1, name: 'Alex-1'}
console.log("---------------------------------------------------------------------")}function t(){s(c)}t();//! ПРИКЛАД-2: Промісифікована Асинхронна функція запиту на сервер
setTimeout(()=>{console.warn("ПРИКЛАД-2: Промісифікована Асинхронна функція:");function o(){return new Promise((e,r)=>{setTimeout(()=>{e({id:2,name:"Alex-2"})},700)})}function n(){o().then(e=>{console.log("userInfo2:",e);//! {id: 2, name: 'Alex-2'}
}).catch(e=>console.error(e)).finally(()=>{console.error("Операція завершена!"),console.log("---------------------------------------------------------------------")})}n()},1e3);//! ПРИКЛАД-3: Асинхронна функція запиту на сервер з неявним промісом
setTimeout(()=>{console.warn("ПРИКЛАД-3: Асинхронна функція запиту на сервер з неявним промісом:");function o(){const e=fetch("https://jsonplaceholder.typicode.com/photos");//! очікуємо дані з серверу
return e}function n(){o().then(e=>e.json()).then(e=>{console.log("data:",e);//! масив із 5000 об'єктів
}).catch(console.error).finally(()=>{console.error("Операція завершена - отримали дані із сервера!"),console.log("---------------------------------------------------------------------")})}n()},2e3);
