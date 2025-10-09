import"./modulepreload-polyfill-3cfb730f.js";//! Поняття функції
console.warn(`Поняття функції: 
 https://ruslan379.github.io/course-fe-html-css/lesson-FE3_09/images/function.png`);//! Функціональний вираз (function expression)
console.warn("Функціональний вираз (function expression):");let u=5;const f=function(){console.log("Це функція 'add'"),u=u*2};console.log("typeof add:",typeof f);//! function
console.log("add:",f);//! ƒ() { console.log("Це функція 'add'"); }
console.log("--------------------------------------------------------------------------");//! Виклик функції
console.warn("Виклик функції:");f();console.log("a:",u);console.log("--------------------------------------------------------------------------");//! Приклад створення та результат дії функції
console.warn("Приклад створення та результат дії функції:");const d=function(){return console.log("Змолов каву"),console.log("Нагрів воду"),console.log("Роблю каву"),"Кава"};d();console.log("`  `  `  `  `");console.log(d());console.log("--------------------------------------------------------------------------");//! Параметри та аргументи. 
console.warn("Параметри та аргументи:");const y=function(o,l,n){return console.log("Це функція 'add2'"),o+l+n};console.log("Виклик функції add2(1, 2, 3):",y(1,2,3));console.log("--------------------------------------------------------------------------");//! Приклад створення та результат дії функції з параметрами та аргументами
console.warn("Приклад створення та результат дії функції з параметрами та аргументами:");const p=function(o,l){return console.log("Змолов каву:",o),console.log("Нагрів воду:",l),console.log("Роблю каву..."),o+l};console.log("`  `  `  `  `");console.log(p("7 грам"," 30 мілілітрів"));console.log("--------------------------------------------------------------------------");const A=function(o,l,n){return console.log("Розбиваю яйця:",o),console.log("Додаю молоко:",l),console.log("Додаю сіль:",n),console.log("Збиваю вск"),console.log("Смажу омлет..."),o+" "+l+" "+n};console.log(A(3,"50мл","10грам"));//! Параметри за замовчуванням. 
console.warn("Параметри за замовчуванням:");const s=function(o=10,l=20,n=30){console.log("Це функція 'add3'");const r=o+l+n;return console.log("sum:",r),r};s(1,2,3);console.log("Виклик функції add3(1, 2, 3):",s(1,2,3));const h=s(1,2,3);console.log("result31:",h);console.log(". . . . . . . . . . . . . . . . . . . .");s();console.log("Виклик функції add3():",s());const V=s();console.log("result32:",V);console.log("Виклик функції add3():",s(1));console.log("--------------------------------------------------------------------------");//! Порядок виконання коду
console.warn("Порядок виконання коду:");console.warn("Приклад-1:");const t=function(o,l,n){console.log(`Результат множення дорівнює ${o*l*n}`)};console.log("Лог ДО виклику функції multiply");t(2,3,5);//! Результат множення дорівнює 30
console.log(t(2,3,5));//! //! Результат множення дорівнює 30 та undefined
console.log("Лог ПІСЛЯ виклику функції multiply");//! 'Лог ДО виклику функції multiply'
//! 'Результат множення дорівнює 30'
//! 'Результат множення дорівнює 30'
//!  undefined
//! 'Лог ПІСЛЯ виклику функції multiply'
console.log(". . . . . . . . . . . . . . . . . . . . . . . .  . .");console.warn("Приклад-2:");const v=function(){console.log("Почала виконуватися [fnA]"),x(),console.log("Продовжила виконуватися [fnA] після виходу з [fnB]")},x=function(){console.log("Виконується [fnB]")};console.log("Почав виконання [main]");v();console.log("Продовжив виконуватися [main] після виходу з [fnA]");//! 'Почав виконання [main]'
//! 'Почала виконуватися [fnA]'
//! 'Виконується [fnB]'
//! 'Продовжила виконуватися [fnA] після виходу з [fnB]'
//! 'Продовжив виконуватися [main] після виходу з [fnA]'
console.log("----------------------------------------------------");//! Стек викликів
console.warn(`Стек викликів: 
 https://ruslan379.github.io/course-fe-html-css/lesson-FE3_09/images/call-stack.png`);const k=function(){console.log("bar")},G=function(){console.log("baz")},R=function(){console.log("foo"),k(),G()};R();console.log("----------------------------------------------------");//! Приклад створення та результат дії функції з параметрами та аргументами
console.warn("Приклад створення та результат дії функції з параметрами та аргументами:");const w=function(o,l){return console.log("Змолов каву:",o),console.log("Нагрів воду:",l),console.log("Роблю каву..."),o+l};w("7 грам","30 мілілітрів");console.log("`  `  `  `  `");console.log(w("7 грам"," 30 мілілітрів"));console.log("--------------------------------------------------------------------------");const j=function(o,l){return F(o),K(l),console.log("Роблю каву..."),o+l},F=function(o){console.log("Змолов каву:",o)},K=function(o){console.log("Нагрів воду:",o)};console.log(j("7 грам"," 30 мілілітрів"));console.log(`%c 3.Псевдомасив arguments​.     
   Перетворення псевдомасиву. `,"color: white; background-color: #D33F49");//! Псевдомасив arguments
console.warn("Псевдомасив arguments:");console.log("return total --> multiply(1, 2, 3):",t(1,2,3));//!  6
console.log("----------------------------------------------");console.log("return total --> multiply(1, 2, 3, 4):",t(1,2,3));//!  24
console.log("----------------------------------------------");console.log("return total --> multiply(1, 2, 3, 4, 5):",t(1,2,3));//!  120
console.log("----------------------------------------------");function M(o,l,n){console.log(arguments),console.log(typeof arguments),console.log(arguments.length),console.log(arguments[0].toString())}M(1,2,3);//! Перетворення псевдомасиву
//! Array.from(arguments)
console.warn("Перетворення псевдомасиву методом Array.from(arguments):");const c=function(){const o=Array.from(arguments);return console.log("argsArray:",o),console.log(o.push("2")),console.log(o),o};c(10,20,30,40,50);//! [10, 20, 30, 40, 50]
console.log("return argsArray --> fnArray(10, 20, 30, 40, 50):",c(10,20,30,40,50));//! [10, 20, 30, 40, 50]
console.log("-------------------------------------------------------------------------------------------------------");c("Mango","Ajax","Poly","Kiwi");//! ['Mango', 'Ajax', 'Poly', 'Kiwi']
console.log('return argsArray --> fnArray("Mango", "Ajax", "Poly", "Kiwi"):',c("Mango","Ajax","Poly","Kiwi"));//! ['Mango', 'Ajax', 'Poly', 'Kiwi']
console.log("-------------------------------------------------------------------------------------------------------");c(!0,!1,null,void 0);//! [true, false, null, undefined]
console.log("return argsArray --> fnArray(true, false, null, undefined):",c(!0,!1,null,void 0));//! [true, false, null, undefined]
console.log("-------------------------------------------------------------------------------------------------------");//! ...(rest)
console.warn("Перетворення псевдомасиву операцією ...(rest):");const g=function(...o){return console.log("argsRest:",o),o};g(10,20,30,40,50);//! [10, 20, 30, 40, 50]
console.log("return argsRest --> fnRest(10, 20, 30, 40, 50):",g(10,20,30,40,50));//! [10, 20, 30, 40, 50]
console.log("-------------------------------------------------------------------------------------------------------");g("Mango","Ajax","Poly","Kiwi");//! ['Mango', 'Ajax', 'Poly', 'Kiwi']
console.log('return argsRest --> fnRest("Mango", "Ajax", "Poly", "Kiwi"):',g("Mango","Ajax","Poly","Kiwi"));//! ['Mango', 'Ajax', 'Poly', 'Kiwi']
console.log("-------------------------------------------------------------------------------------------------------");g(!0,!1,null,void 0);//! [true, false, null, undefined]
console.log("return argsRest --> fnRest(true, false, null, undefined):",g(!0,!1,null,void 0));//! [true, false, null, undefined]
console.log("-------------------------------------------------------------------------------------------------------");//! 4.Патерн «Раннє повернення» (Guard Clause)
console.warn("Функція, яка обробляє зняття коштів за допомогою if...else:");const N=function(o,l){console.log("amount:",o),console.log("balance:",l),o===0?console.log("0️⃣ Для проведення операції введіть суму більшу за нуль"):o>l?console.log("❌ Недостатньо коштів на рахунку"):console.log("✅ Операція зняття коштів проведена успішно"),console.log(". . . . . . . . . . . . . . . . . . . . . . . . . . . . .")};N(0,300);//! "Для проведення операції введіть суму більшу за нуль"
console.log("----------------------------------------------------------");console.warn(`Функція, яка обробляє зняття коштів 
  за допомогою патерну «Раннє повернення» :`);const i=function(o,l){if(console.log("amount:",o),console.log("balance:",l),o===0){console.log("0️⃣0️⃣ Для проведення операції введіть суму більшу за нуль"),console.log(". . . . . . . . . . . . . . . . . . . . . . . . . . . . .");return}if(o>l){console.log("❌❌ Недостатньо коштів на рахунку"),console.log(". . . . . . . . . . . . . . . . . . . . . . . . . . . . .");return}console.log("✅✅ Операція зняття коштів проведена"),console.log(". . . . . . . . . . . . . . . . . . . . . . . . . . . . .")};i(0,300);//! "Для проведення операції введіть суму більшу за нуль"
i(500,300);//! "Недостатньо коштів на рахунку"
i(100,300);//! "Операція зняття коштів проведена"
console.log("----------------------------------------------------------");//! 5.Оголошення функції (function declaration)
console.warn("Створення ти виклики функції (function declaration):");P();function P(){console.log("Це функція 'fnDeclaration'")}console.log(". . . . . . . . . . . . . . . . . . . . . . . . . . . ");console.warn("Створення ти виклики функції (function expression):");const D=function(){console.log("Це функція 'fnExpression'")};D();console.log("-----------------------------------------------------");console.log(`%c 6.Область видимості.                     
   Область видимості функції.             
   Пошук за ланцюжком областей видимості. `,"color: white; background-color: #D33F49");//! Область видимості
console.warn("Область видимості:");const a=100;console.log("Global --> globalValue:",a);//! 100
console.log(". .  . . . .  . . . . . . .");const E=function(){console.log("func --> globalValue:",a);//! 100
console.log("func --> funcValue:",20);//! 20
};E();console.log(". .  . . . .  . . . . . . .");for(let o=0;o<3;o++){console.log("i:",o),console.log("for --> globalValue:",a);//! 100
const l=30;console.log("for --> forValue:",l);//! 30
if(console.log(". .  . . . .  . . . . . . ."),o===2){console.log("if --> globalValue:",a);//! 100
console.log("if --> ifValue:",40);//! 40
console.log("if --> forValue:",l);//! 30
console.log(". .  . . . .  . . . . . . .")}}console.log("----------------------------------------");//! Область видимості функції
console.warn("Область видимості функції:");const m=100;console.log("Global --> value:",m);//! 100
console.log(". .  . . . .  . . . . . . . . . .");const B=function(){console.log("2.fooNew --> value:",50);//! 50
console.log("3.fooNew --> functionNewValue:",70);//! 70
};B();console.log(". .  . . . .  . . . . . . . . . .");console.log("Global --> value:",m);//! 100
console.log("----------------------------------------");//! Пошук за ланцюжком областей видимості
console.warn(`Пошук за ланцюжком областей видимості: 
 https://ruslan379.github.io/course-fe-html-css/lesson-FE3_09/images/scope-chain-search.png`);const _=10,z=function(){for(let l=0;l<5;l++)if(l===3){console.log("if --> a:",_);//! 10
console.log("if --> b:",20);//! 20
console.log("if --> c:",30);//! 30
console.log("if --> d:",40);//! 40
}};z();console.log("----------------------------------------");console.log("%c 7.Hoisting (Підняття змінних) ","color: white; background-color: #D33F49");//! 7.Hoisting (Підняття змінних)
//! Фаза компіляції
console.warn("Фаза компіляції, інтерпретації або оцінки (compile time, evaluation time):");console.log("Цього повідомлення не буде в консолі.");console.log(". . . . . . . . . . . . . . . . . . .");//! Фаза виконання
//! Підняття змінних (hoisting)
console.warn("Підняття змінних (hoisting) з var:");console.log("Global-1 --> valueVar:",e);//! undefined
e=5;console.log("Global-2 --> valueVar:",e);//! 5
{console.log("if-1 --> valueVar:",e);//! 5
var e=10;console.log("if-2 --> valueVar:",e);//! 10
}e=15;console.log("Global-3 -->valueVar:",e);//! 15
console.log(". . . . . . . . . . . . . . . . . . .");//! Ось тому ми використовуємо let або const
console.warn("Підняття змінних (hoisting) з let або const:");const b=5;console.log("Global-2 --> value:",b);//! 5
{console.log("if-2 --> value:",10);//! 10
}console.log("Global-3 --> value:",b);//! 5
console.log("----------------------------------------------");
