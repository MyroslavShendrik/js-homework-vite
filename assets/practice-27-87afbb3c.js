import"./modulepreload-polyfill-3cfb730f.js";//! Метод JSON.stringify()
console.log(`%c
    JSON.stringify(object)
    `,"color: blue; font-size: 18px");console.log("--------------------------------------------------");const g={name:"Mango",age:3,isHappy:!0};console.log("dog1:",g);const l=JSON.stringify(g);console.log("dogJSON1:",l);//! "{"name":"Mango","age":3,"isHappy":true}"
console.log("--------------------------------------------------");const c={name:"Mango",age:3,isHappy:!0,bark(){console.log("Woof!")}},t=JSON.stringify(c);console.log("dogJSON2:",t);//! "{"name":"Mango","age":3,"isHappy":true}"
console.log("--------------------------------------------------");const a=JSON.stringify(()=>console.log("Well, this is awkward"));console.log("functionJSON:",a);//! undefined
console.log("--------------------------------------------------");const s='{"name":"Mango","age":3,"isHappy":true}';console.log("dogJSON:",s);//! "{"name":"Mango","age":3,"isHappy":true}"
const n=JSON.parse(s);console.log("dog:",n);//! {name: "Mango", age: 3, isHappy: true}
console.log("dog.name:",n.name);//! "Mango"
console.log("--------------------------------------------------");const e=JSON.parse(l);console.log("dog1:",e);//! {"name": "Mango", age: 3, isHappy: true}
console.log("dog1.name:",e.name);//! "Mango"
console.log("dog === dog1:",n===e);//! false
console.log("--------------------------------------------------");//! Конструкція try...catch
console.warn("Конструкція try...catch:");console.log(`%c
    try {
        // Code that may throw a runtime error
    } catch (error) {
        // Error handling
    }
    `,"color: blue; font-size: 18px");console.log("-------------------------------------------------------------------------------");//! Приклад-1, парса рядка як невалідного JSON
console.warn("Приклад-1, парса рядка як невалідного JSON:");let r="oчікує JSON...";console.log("data:",r);//! цей код вже не виконається
try{const o=JSON.parse(l);console.log("data in try:",o);//! цей код вже не виконається, якщо є помилка
}catch(o){console.log(o.name);//! SyntaxError
console.log(o.message);//! Unexpected token 'W', "Well, this"... is not valid JSON
}console.log(". . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .");console.log("1️⃣✅ Ми бачимо це повідомлення, тому що обробили помилку парса в try...catch!");console.log("-------------------------------------------------------------------------------");
