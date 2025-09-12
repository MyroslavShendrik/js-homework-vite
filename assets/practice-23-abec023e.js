import"./modulepreload-polyfill-3cfb730f.js";//! Підключення бібліотеки Lodash
console.warn(`Бібліотека Lodash: 
 https://lodash.com`);console.warn(`Підключення бібліотеки Lodash: 
 https://www.jsdelivr.com/package/npm/lodash`);console.warn(`Підключення бібліотеки Lodash через CDN: 
 https://cdnjs.com/libraries/lodash.js`);console.log(`%c
    <script
        src="https://cdnjs.cloudflare.com/ajax/libs/lodash.js/4.17.21/lodash.min.js"
        integrity="sha512-WFN04846sdKMIP5LKNphMaWzU7YpMyCU245etK3g/2ARYbPK9Ub18eG+ljU96qKRCWh+quCY7yefSmlkQw1ANQ=="
        crossorigin="anonymous"
        referrerpolicy="no-referrer">
    <\/script>
    `,"color: blue; font-size: 18px");console.log("-------------------------------------------------------------------");//! Використання бібліотеки Lodash (документація)
console.warn(`Використання бібліотеки Lodash (документація)): 
 https://lodash.com/docs/4.17.15`);console.log("");console.log("%c “Math” Methods --> (_.add(augend, addend)) ","color: white; background-color:rgb(0, 136, 100)");console.warn(`Використання бібліотеки Lodash (“Math” Methods --> (_.add)): 
 https://lodash.com/docs/4.17.15#add`);const c=_.add(10,5);console.log("sum:",c);//! 15
const a=_.add(12,24);console.log("sum1:",a);//! 36
console.log(". . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .");console.log("%c “Object” Methods --> (_.findKey(object, [predicate=_.identity])) ","color: white; background-color:rgb(0, 136, 100)");console.warn(`Використання бібліотеки Lodash (“Object” Methods --> (_.findKey): 
 https://lodash.com/docs/4.17.15#findKey`);const r={barney:{age:36,active:!0},fred:{age:40,active:!1},pebbles:{age:1,active:!0}};console.log("Властивість, де age < 40:",_.findKey(r,function(l){return l.age<40}));//! 'barney' (порядок ітерації не гарантовано)
console.log(". . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .");console.log('%c “String” Methods --> _.startCase([string=""]) ',"color: white; background-color:rgb(0, 136, 100)");console.warn(`Використання бібліотеки Lodash (“String” Methods --> (.startCase): 
 https://lodash.com/docs/4.17.15#startCase`);const t=document.getElementById("start-case");console.log("startCase:",t);let s=t.textContent;console.log("startCase.textContent:",s);const n=_.startCase(s);console.log("_.startCase(startCase.textContent):",n);t.textContent=n;console.log("-------------------------------------------------------------------");console.log("%c 2.Балакучі події (Chatty events) ","color: white; background-color: #D33F49");//! Балакучі події (Chatty events)
console.warn("Балакучі події (Chatty events)​:");//! Подія "scroll"
console.warn('Подія "scroll​:');const d=document.querySelector(".output");let o=0;document.addEventListener("scroll",()=>{o+=1,d.textContent=o,console.log("scrollEventCounter:",o);//!
});console.log("-------------------------------------");//! Throttle (обмежувач частоти)
console.warn(`Throttle​​: 
 ${window.location.href.split("/").slice(0,-2).join("/")+"/"}lesson-FE4_02/images/throttle.png`);document.addEventListener("scroll",()=>{console.log("Виклик обробника прокрутки")});document.addEventListener("scroll",_.throttle(()=>{console.log("Виклик обробника прокрутки кожні 300ms")},300));console.log("-----------------------------------------------------------");//! Input (with debounce)
console.warn("Input (with debounce)​:");const e=document.querySelector(".input");console.log("input:",e);//!
e.addEventListener("input",_.debounce(()=>{console.log("Відправка запиту з debounce:",e.value)},500));
