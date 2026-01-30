import"./modulepreload-polyfill-3cfb730f.js";//! Приклад-1: setTimeout()
console.warn("Приклад-1: setTimeout():");const l=document.querySelector(".btn-set-interval"),s=()=>{const t=setTimeout(()=>{console.log("Реакція на клік в кнопку <Click setInterval> через 5 секунд")},5e3);console.log("timerId:",t);//! Що спрацює раніше: console.warn() або setTimeout(() => {console.log()}, 5000);
};l.addEventListener("click",s);//! Приклад-2: setTimeout()
console.warn("Приклад-2: setTimeout():");//! ❌ Видалення таймера
//! Таймер: setInterval()
console.log(`%c
    const intervalId = setInterval(callback, delay, arg1, arg2, ...);
    `,"color: blue; font-size: 18px");console.log("----------------------------------------------------------------------------------------------------");//! Приклад-1: setInterval()
console.warn("Приклад-1: setInterval():");const r=document.querySelector(".btn-start"),c=document.querySelector(".btn-stop");let o=null;//! ✅ Старт таймера кнопкою
r.addEventListener("click",()=>{let t=0;o=setInterval(()=>{t++;//! лічильник часу
console.log(`${t} Генерація випадкового числа: ${Math.random()}, id: ${o}`);//! ✅❌ Видалення/зупинення таймера за умовою
const n=10;t===n&&(clearTimeout(o),console.error(`Інтервал з ідентифікатором ${o} зупинено на ${n}-ій секунді!`))},1e3)});//! ✅❌ Видалення/зупинення таймера кнопкою
c.addEventListener("click",()=>{clearInterval(o),console.warn(`Інтервал з ідентифікатором ${o} зупинено!`)});//! Приклад-1 таймера відкладеного старту з конспекту
console.warn("Приклад-1 таймера відкладеного старту з конспекту:");console.log(`%c
    let seconds = 10;
    let timerId = setTimeout(
        function() {
            console.log("Time's up!");
        },
        seconds * 1000
    );
    `,"color: blue; font-size: 18px");console.log(". . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .");console.log("----------------------------------------------------------------------------------------------------");//! КРОК-1.1.Створюємо простий таймер відкладеного старту
console.warn("КРОК-1.1.Створюємо простий таймер відкладеного старту:");console.log(`%c
    const timeBeforeStart = 3000; //! час до старту

    function timeСount() {
        console.log(
            "Спрацювала функція timeСount() через",
            timeBeforeStart/1000,
            "секунди"
        );
    };
    
    const timerId = setTimeout(timeСount, timeBeforeStart);
    `,"color: blue; font-size: 18px");console.log(". . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .");console.log("----------------------------------------------------------------------------------------------------");//! КРОК-1.2.Зробимо таймер прямого відліку
console.warn("КРОК-1.2.Зробимо таймер прямого відліку:");console.log(`%c
    let timerId;
    const timeBeforeStart = 1000; //! час між відліками
    const iterations = 10; //! кількість ітерацій

    for (let index = 1; index <= iterations; index++) {
    timerId = setTimeout(
        function timeСount() {
            console.log(
                index,
                "Спрацювала функція timeСount()"
            );
        }, index * timeBeforeStart);
    };
    `,"color: blue; font-size: 18px");console.log(". . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .");console.log("----------------------------------------------------------------------------------------------------");//! об'єкт - це "коробка" в якій зберігаються речі однієї категорії 
const e={bread1:"родиний",bread2:"батон",bread3:"хлібці смаженні"};console.log("breads:",e);console.log("breads.bread1:",e.bread1);console.log("breads.bread2:",e.bread2);delete e.bread2;console.log("breads:",e);e.bread4="сонячний";console.log("breads:",e);e.bread4="КиївХліб";console.log("breads:",e);
