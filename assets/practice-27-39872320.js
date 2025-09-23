import"./modulepreload-polyfill-3cfb730f.js";//! Метод JSON.stringify()
console.log(`%c
    JSON.stringify(object)
    `,"color: blue; font-size: 18px");console.log("--------------------------------------------------");const c={name:"Mango",age:3,isHappy:!0};console.log("dog1:",c);const n=JSON.stringify(c);console.log("dogJSON1:",n);//! "{"name":"Mango","age":3,"isHappy":true}"
console.log("--------------------------------------------------");const a={name:"Mango",age:3,isHappy:!0,bark(){console.log("Woof!")}},t=JSON.stringify(a);console.log("dogJSON2:",t);//! "{"name":"Mango","age":3,"isHappy":true}"
console.log("--------------------------------------------------");const r=JSON.stringify(()=>console.log("Well, this is awkward"));console.log("functionJSON:",r);//! undefined
console.log("--------------------------------------------------");const g='{"name":"Mango","age":3,"isHappy":true}';console.log("dogJSON:",g);//! "{"name":"Mango","age":3,"isHappy":true}"
const e=JSON.parse(g);console.log("dog:",e);//! {name: "Mango", age: 3, isHappy: true}
console.log("dog.name:",e.name);//! "Mango"
console.log("--------------------------------------------------");const s=JSON.parse(n);console.log("dog1:",s);//! {"name": "Mango", age: 3, isHappy: true}
console.log("dog1.name:",s.name);//! "Mango"
console.log("dog === dog1:",e===s);//! false
console.log("--------------------------------------------------");//! Конструкція try...catch
console.warn("Конструкція try...catch:");console.log(`%c
    try {
        // Code that may throw a runtime error
    } catch (error) {
        // Error handling
    }
    `,"color: blue; font-size: 18px");console.log("-------------------------------------------------------------------------------");//! Приклад-1, парса рядка як невалідного JSON
console.warn("Приклад-1, парса рядка як невалідного JSON:");let l="oчікує JSON...";console.log("data:",l);//! цей код вже не виконається
try{const o=JSON.parse(n);console.log("data in try:",o);//! цей код вже не виконається, якщо є помилка
}catch(o){console.log(o.name);//! SyntaxError
console.log(o.message);//! Unexpected token 'W', "Well, this"... is not valid JSON
}console.log(". . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .");console.log("1️⃣✅ Ми бачимо це повідомлення, тому що обробили помилку парса в try...catch!");console.log("-------------------------------------------------------------------------------");//! Приклад-2, парса рядка як валідного або невалідного JSON
console.warn("Приклад-2, парса рядка як валідного або невалідного JSON:");const d='{"username": "Mango"}';try{l=JSON.parse(d),console.log("data in try:",l);//! цей код вже не виконається, якщо є помилка
}catch(o){console.log(o.name);//! SyntaxError
console.log(o.message);//! Unexpected token 'W', "Well, this"... is not valid JSON
}console.log(". . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .");console.log("data:",l);//! {username: 'Mango'}, якщо - try(ВІРНО) або "oчікує JSON...", якщо - catch(ПОМИЛКА)
console.log("2️⃣✅ Ми бачимо ці повідомлення, тому що обробили помилку парса в try...catch!");console.log("-------------------------------------------------------------------------------");
