import"./modulepreload-polyfill-3cfb730f.js";//! Імперативний код
console.warn(`Приклад «Імперативного коду»: 
 ${window.location.href.split("/").slice(0,-2).join("/")+"/"}lesson-FE3_14/images/imperative-programming-example.jpg`);console.warn("Приклад-1. Імперативний код:");const x={title:"The Last Kingdom",author:"Bernard Cornwell",genres:["historical prose","adventure"],isPublic:!0,rating:8.38};console.log("book:",x);console.log(`%c
                                                             
        const title = "The Last Kingdom";                    
        const author = "Bernard Cornwell";                   
        const genres = ["historical prose", "adventure"];    
        const isPublic = true;                               
        const rating = 8.38;                                 
                                                             `,"color: #ffff60; background-color: #ff7272");console.log(". . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .");console.warn("Приклад-2. Імперативний код:");console.log(`%c
                                                                      
        function calculateEngravingPrice(message, pricePerWord) {     
                                                                      
            let words = 0;                                            
            let inWord = false;                                       
                                                                      
            for (const character of message.trim()) {                 
                if (character !== ' ' && !inWord) {                   
                    words++;                                          
                    inWord = true;                                    
                } else if (character === ' ') {                       
                    inWord = false;                                   
                };                                                    
            };                                                        
                                                                      
            return words * pricePerWord;                              
        };                                                            
                                                                      `,"color: #ffff60; background-color: #00c1cf");function v(o,e){let l=0,s=!1;for(const n of o)n!==" "&&!s?(l++,s=!0):n===" "&&(s=!1);return l*e}console.log("Price:",v("Той, хто задоволений самим собою – багач",10));//! 70
console.log("-----------------------------------------------------------------------------------------------------------");//! Декларативний код
console.warn(`Приклад «Декларативного коду»: 
 ${window.location.href.split("/").slice(0,-2).join("/")+"/"}lesson-FE3_14/images/declarative-programming-example.jpg`);console.warn("Приклад-1. Декларативний код:");console.log(`%c
                                                                            
    const { title, author, genres, isPublic, rating, coverImage } = book;   
                                                                            `,"color: #21ff21; background-color: #ff7272");console.log(". . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .");console.warn("Приклад-2. Декларативний код:");console.log(`%c
                                                                      
        function calculateEngravingPrice(message, pricePerWord) {     
            return message.split(" ").length * pricePerWord;          
        };                                                            
                                                                      `,"color: #9bff9b; background-color: #00c1cf");function E(o,e){return o.split(" ").length*e}console.log("Price:",E("Той, хто задоволений самим собою – багач",10));//! 70
console.log("-----------------------------------------------------------------------------------------------------------");//! Функція з побічними ефектами
console.warn("Функція з побічними ефектами:");const y=(o,e)=>{for(let l=0;l<o.length;l+=1)o[l]=o[l]*e},c=[1,2,3,4,5];console.log("numbers_before:",c);//! [1, 2, 3, 4, 5]
y(c,2);console.log("numbers_after:",c);//! [2, 4, 6, 8, 10]
console.log(". . . . . . . . . . . . . . . . . . . .");//! Чиста функція
console.warn("Чиста функція:");const k=(o,e)=>{const l=[],s=[];for(let n=0;n<o.length;n+=1)l.push(o[n]*e);return o.forEach(n=>{s.push(n*e)}),{newArray1:l,newArray2:s}},f=[1,2,3,4,5];console.log("numbers2_before:",f);//! [1, 2, 3, 4, 5]
const C=k(f,2);console.log("numbers2_after:",f);//! [1, 2, 3, 4, 5]
console.log("doubledNumbers:",C);//! [2, 4, 6, 8, 10]
console.log("---------------------------------------");//! 4.Метод forEach
console.warn("Синтаксис методу forEach:");console.log(`%c
    масив.forEach(function callback(element, index, array) {
        // тіло колбек-функції
    });
    `,"color: blue; font-size: 18px");const u=[5,10,15,20,25];console.log("numbers:",c);console.log("`  `  `  `  `  `  `  `  `  `  `  `  `");console.warn("Функціональний forEach:");u.forEach(o=>console.log(o));console.log(". . . . . . . . . . . .");console.warn("Перебирання за допомогою Класичного for:");for(let o=0;o<u.length;o+=1)console.log(`Індекс: ${o}, значення: ${u[o]}`);console.log(". . . . . . . . . . . .");console.warn("Метод перебирання forEach (var.1):");c.forEach(function(o,e){console.log(`Індекс: ${e}, значення: ${o}`)});console.log(". . . . . . . . . . . .");console.warn("Метод перебирання forEach (var.2):");c.forEach((o,e)=>console.log(`index: ${e}, value: ${o}`));console.log("------------------------");//! Метод map()
console.warn("Синтаксис методу map():");console.log(`%c
    масив.map((element, index, array) => {
        // тіло колбек-функції
    });
    `,"color: blue; font-size: 18px");console.warn("Приклад використання метода map():");const a=["Земля","Марс","Венера","Юпітер"];console.log("planets_before:",a);//! ['Земля', 'Марс', 'Венера', 'Юпітер']
const P=a.map(o=>o.toUpperCase());console.log("planetsInUpperCase:",P);//! ['ЗЕМЛЯ', 'МАРС', 'ВЕНЕРА', 'ЮПІТЕР']
const M=a.map(o=>o.toLowerCase());console.log("planetsInLowerCase:",M);//! ['земля', 'марс', 'венера', 'юпітер']
console.log("planets_after:",a);//! ['Земля', 'Марс', 'Венера', 'Юпітер']
console.log(". . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .");//! Масив об'єктів
console.warn("Масив об'єктів:");const p=[{name:"Манго",score:83},{name:"Полі",score:59},{name:"Аякс",score:37},{name:"Ківі",score:94},{name:"Х'юстон",score:64}];console.log("students1:",p);console.log("`  `  `  `  `  `  `  `  `  `  `  `  `  `  `  `  `  `  `  `  `  `");const F=p.map(o=>o.name);console.log("names:",F);//! ['Манго', 'Полі', 'Аякс', 'Ківі', 'Х'юстон']
const I=p.map(o=>o.score);console.log("scores",I);console.log("------------------------------------------------------------------");//! Метод flatMap()
console.warn("Синтаксис методу flatMap():");console.log(`%c
    масив.flatMap((element, index, array) => {
        // тіло колбек-функції
    });
    `,"color: blue; font-size: 18px");console.warn("Приклад використання метода flatMap():");const d=[{name:"Манго",courses:["математика","фізика"]},{name:"Полі",courses:["інформатика","математика"]},{name:"Ківі",courses:["фізика","біологія"]}];console.log("students2:",d);console.log("`  `  `  `  `  `  `  `  `  `  `  `  `  `  `  `  `  `  `  `  `  `");const _=d.map(o=>o.courses);console.log("coursesByMap:",_);//! [['математика', 'фізика'], ['інформатика', 'математика'], ['фізика', 'біологія']]
const B=d.flatMap(o=>o.courses);console.log("coursesByFlatMap:",B);//! ['математика', 'фізика', 'інформатика', 'математика', 'фізика', 'біологія'];
console.log("------------------------------------------------------------------");//! 6.Метод filter()
console.warn("Синтаксис методу filter():");console.log(`%c
    масив.filter((element, index, array) => {
        // тіло колбек-функції
    });
    `,"color: blue; font-size: 18px");console.warn("Приклад використання метода filter():");const r=[51,-3,27,21,-68,42,-37];console.log("values_before:",r);//! [51, -3, 27, 21, -68, 42, -37]
const W=r.filter(o=>o>=0);console.log("positiveValues:",W);//! [51, 27, 21, 42]
const $=r.filter(o=>o<0);console.log("negativeValues:",$);//! [-3, -68, -37]
const z=r.filter(o=>o>1e3);console.log("bigValues:",z);//! []
console.log("values_after:",r);//! [51, -3, 27, 21, -68, 42, -37]
console.log(". . . . . . . . . . . . . . . . . . . . . . . . . . .");//! Фільтрація унікальних елементів​
console.warn("Фільтрація унікальних елементів:");const m=[{name:"Манго",courses:["математика","фізика"]},{name:"Полі",courses:["інформатика","математика"]},{name:"Ківі",courses:["фізика","біологія"]}];console.log("students:",m);console.log("`  `  `  `  `  `  `  `  `  `  `  `  `  `  `  `  `  `  `");const O=m.map(o=>o.courses);console.log("allCoursesByMap:",O);//! [['математика', 'фізика'], ['інформатика', 'математика'], ['фізика', 'біологія']];
const b=m.flatMap(o=>o.courses);console.log("allCourses:",b);//! ['математика', 'фізика', 'інформатика', 'математика', 'фізика', 'біологія'];
const L=b.filter((o,e,l)=>l.indexOf(o)===e);console.log("Масив унікальних курсів:",L);//! ['математика', 'фізика', 'інформатика', 'біологія']
console.log("----------------------------------------------------------------------------------------------");//! Масив об'єктів
console.warn("Масив об'єктів:");const w=50,h=80,t=[{name:"Манго",score:83},{name:"Полі",score:59},{name:"Аякс",score:37},{name:"Ківі",score:94},{name:"Х'юстон",score:64}];console.log("disciples:",t);console.log("`  `  `  `  `  `  `  `  `  `  `  `  `  `  `  `  `  `  `");const V=t.filter(o=>o.score>=h);console.log("Кращі учні:",V);//! Масив об'єктів з іменами Манго і Ківі
const j=t.filter(({score:o})=>o>=w&&o<h);console.log("Середні учні:",j);//! Масив об'єктів з іменами Полі і Х'юстон
const A=t.filter(o=>o.score<w);console.log("Гірші учні:",A);//! Масив з одним об'єктом Аякс
console.log("----------------------------------------------------------------------------------------------");//! Метод find()
console.warn("Синтаксис методу find():");console.log(`%c
    масив.find((element, index, array) => {
        // тіло колбек-функції
    });
    `,"color: blue; font-size: 18px");console.warn("Приклад використання метода find():");const i=[{label:"red",color:"#F44336"},{label:"green",color:"#4CAF50"},{label:"blue",color:"#2196F3"},{label:"pink",color:"#E91E63"},{label:"indigo",color:"#3F51B5"}];console.log("colorPickerOptions1:",i);console.log("`  `  `  `  `  `  `  `  `  `  `  `  `  `  `  `  `  `  `  `  `  `");console.log('Пошук за позначкою "blue:"',i.find(o=>o.label==="blue"));//! { label: 'blue', color: '#2196F3' }
console.log('Пошук за позначкою "pink:"',i.find(o=>o.label==="pink"));//! { label: 'pink', color: '#E91E63' }
console.log('Пошук за позначкою "white:"',i.find(o=>o.label==="white"));//! undefined
console.log("-------------------------------------------------------------------------");//! Метод findIndex()
console.warn("Синтаксис методу findIndex():");console.log(`%c
    масив.findIndex((element, index, array) => {
        // тіло колбек-функції
    });
    `,"color: blue; font-size: 18px");console.warn("Приклад використання метода findIndex():");const g=[{label:"red",color:"#F44336"},{label:"green",color:"#4CAF50"},{label:"blue",color:"#2196F3"},{label:"pink",color:"#E91E63"},{label:"indigo",color:"#3F51B5"}];console.log("colorPickerOptions2:",g);console.log("`  `  `  `  `  `  `  `  `  `  `  `  `  `  `  `  `  `  `  `  `  `");console.log('Індекс мітки "blue:"',g.findIndex(o=>o.label==="blue"));//! 2
console.log('Індекс мітки "pink:"',g.findIndex(o=>o.label==="pink"));//! 3
console.log('Індекс мітки "white:"',g.findIndex(o=>o.label==="white"));//! -1
console.log("-------------------------------------------------------------------------");//! Метод every()
console.warn("Синтаксис методу every():");console.log(`%c
    масив.every((element, index, array) => {
        // тіло колбек-функції
    });
    `,"color: blue; font-size: 18px");console.warn("Приклад використання метода every():");console.log("УСІ елементи [1, 2, 3, 4, 5] більші або дорівнюють нулю? -",[1,2,3,4,5].every(o=>o>=0));//! true
console.log("УСІ елементи [1, 2, 3, -10, 4, 5] більші або дорівнюють нулю? -",[1,2,3,-10,4,5].every(o=>o>=0));//! false
console.log("-----------------------------------------------------------------------------------------");//! Метод some()
console.warn("Синтаксис методу some():");console.log(`%c
    масив.some((element, index, array) => {
        // тіло колбек-функції
    });
    `,"color: blue; font-size: 18px");console.warn("Приклад використання метода some():");console.log("Чи є хоча б один елемент з [1, 2, 3, 4, 5], що більший або дорівнює нулю? -",[1,2,3,4,5].some(o=>o>=0));//! true
console.log("Чи є хоча б один елемент з [-7, -20, 3, -10, -14], що більший або дорівнює нулю? -",[-7,-20,3,-10,-14].some(o=>o>=0));//! true
console.log("Чи є хоча б один елемент з [1, 2, 3, 4, 5], що менший нуля? -",[1,2,3,4,5].some(o=>o<0));//! false
console.log("Чи є хоча б один елемент з [1, 2, 3, -10, 4, 5], що менший нуля? -",[1,2,3,-10,4,5].some(o=>o<0));//! true
console.log("-----------------------------------------------------------------------------------------");
