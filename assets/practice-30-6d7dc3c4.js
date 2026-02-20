import"./modulepreload-polyfill-3cfb730f.js";//! Стани промісу
console.warn(`Стани промісу​​: 
 ${window.location.href.split("/").slice(0,-2).join("/")+"/"}lesson-FE4_13/images/promise-states.png`);console.log(`%c
        📌 Проміс може бути у трьох станах:
    🔸 Очікування (pending) - початковий стан під час створення промісу.
    🔸 Виконано (fulfilled) - операція виконана успішно з будь-яким результатом.
    🔸 Відхилено (rejected) - операція відхилена з помилкою.
    `,"color: blue; font-size: 18px");console.log("--------------------------------------------------------------------------------------------------------------------------");//! ❌ ПРИКЛАД-1: Необхідність використання промісів
console.warn("❌ ПРИКЛАД-1: Необхідність використання промісів:");function s(){let o=null;return setTimeout(()=>{o={id:1,name:"Alex"},console.log("userData1:",o);//! {id: 1, name: 'Alex'}
},1e3),o}function l(){const o=s();console.log("userInfo1:",o);//! null
}l();console.log("-----------------------------------------------------------------------------------");//! ✅ ПРИКЛАД-2: Необхідність використання промісів
console.warn("✅ ПРИКЛАД-2: Необхідність використання промісів:");function t(o){setTimeout(()=>{o({id:1,name:"Alex"})},1e3)}function c(){t(o=>{console.log("userInfo2:",o);//! {id: 1, name: 'Alex'}
})}c();console.log("-----------------------------------------------------------------------------------");//! Створення промісу 
console.warn("Створення промісу:");console.warn(`Створення промісу​​: 
 ${window.location.href.split("/").slice(0,-2).join("/")+"/"}lesson-FE4_13/images/creating-promise.png`);console.log(`%c
    const promise = new Promise((resolve, reject) => {
        // Asynchronous operation
    });
    `,"color: blue; font-size: 18px");const n=new Promise((o,e)=>{setTimeout(()=>{o("✅ Success! Value passed to resolve function")},2e3)});console.log("promise ⏳:",n);//! Promise {<pending>}
setTimeout(()=>{console.log("promise_setTimeout:",n);//! Promise {<rejected>: '❌ Error! Error passed to reject function'}
},2500);console.log("-----------------------------------------------------------------------------------");
