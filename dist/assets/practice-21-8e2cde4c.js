import"./modulepreload-polyfill-3cfb730f.js";//! Події клавіатури keydown і keyup
console.warn("Події клавіатури keydown і keyup​:");console.log(`%c
    document.addEventListener("keydown", event => {
        console.log("Keydown: ", event);
    });

    document.addEventListener("keyup", event => {
        console.log("Keyup: ", event);
    });
    `,"color: blue; font-size: 16px");console.log(". . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .");console.log("Натисни будь-яку клавішу");console.log("-----------------------------------------------------------------------------------------------------");//! Подія клавіатури - keypress
console.warn("Подія клавіатури - keypress​:");console.log(`%c
    document.addEventListener("keypress", event => {
        console.log("Keypress: ", event);
    });
    `,"color: darkred; font-size: 16px");console.log(". . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .");console.log("-----------------------------------------------------------------------------------------------------");//! Властивості key і code
console.warn("Властивості key і code​:");console.log("-----------------------------------------------------------------------------------------------------");//! Клавіші-модифікатори
console.warn("Клавіші-модифікатори​:");document.addEventListener("keydown",o=>{o.preventDefault(),(o.ctrlKey||o.metaKey)&&o.code==="KeyS"&&console.warn("«Ctrl + s» or «Command + s» combo")});console.log("-----------------------------------------------------------------------------------------------------");//! Події миші
console.warn(`Події миші: 
 https://uk.javascript.info/event-details`);console.log("---------------------------------------------------------------------------");//! Типи подій миші
console.warn("Типи подій миші:");console.log(`%c
    🔸 mousedown/mouseup
    🔸 mouseover/mouseout
    🔸 mousemove
    🔸 click
    🔸 dblclick
    🔸 contextmenu
    `,"color: blue; font-size: 16px");console.log(". . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . ");const e=document.querySelector(".my-button-1");console.log("myButton1:",e);e.addEventListener("contextmenu",c);function c(o){console.log("event.target:",o.target),console.log("event.currentTarget:",o.currentTarget),console.log("Клік правою кнопкою миші на <My button-1>")}console.log("---------------------------------------------------------------------------");//! Порядок подій
console.warn("Порядок подій:");console.log("---------------------------------------------------------------------------");//! Кнопка миші
console.warn("Кнопка миші:");console.log(`%c
    🔸 0 - ліва кнопка (основна)
    🔸 1 - середня кнопка (допоміжна)
    🔸 2 - права кнопка (другорядна)
    🔸 3 - кнопка X1 (назад)
    🔸 4 - кнопка X2 (вперед)
    `,"color: blue; font-size: 16px");console.log(". . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . ");const n=document.querySelector(".my-button-2");console.log("myButton2:",n);n.addEventListener("mousedown",s);function s(o){console.log("Клік кнопкою миші на <My button-2>"),console.log("event.button:",o.button),console.log(". . . . . . . . . . . . . . . . . .")}console.log("---------------------------------------------------------------------------");//! Координати: clientX/Y, pageX/Y
console.warn(`Координати clientX/Y і pageX/Y: 
 https://uk.javascript.info/coordinates`);//! Координати clientX/Y
console.warn("Координати clientX/Y:");const t=document.getElementById("output-window");console.log("currentMouseCoordinatesWindow:",t);document.addEventListener("mousemove",r);function r(o){t.textContent=`clientX: ${o.clientX}, clientY: ${o.clientY}`}console.log(". . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . ");//! Координати pageX/Y
console.warn("Координати pageX/Y:");const l=document.getElementById("output-document");console.log("currentMouseCoordinatesDocument:",l);document.addEventListener("mousemove",u);function u(o){l.textContent=`pageX: ${o.pageX}, pageY: ${o.pageY}`}console.log(". . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . ");//! Прокрутка (scroll)
console.warn("Прокрутка (scroll):");window.addEventListener("scroll",()=>{let o=window.scrollY||document.documentElement.scrollTop;document.getElementById("scroll-info").textContent=`Прокрутка: ${o}px`});console.log("---------------------------------------------------------------------------");
