import"./modulepreload-polyfill-3cfb730f.js";console.log("lesson5");const N="JavaScript";console.log("course1:",N);//! JavaScript
const f="JavaScript";console.log("course2:",f);//! JavaScript
const w="JavaScript";console.log("course3:",w);//! JavaScript
//! Конкатенація рядків
const A="Mango is happy";console.log('("Mango " + "is " + "happy"):',A);//! "Mango is happy"
const M=24,k="Poly is "+M+" years old!";console.log('("Poly is " + age + " years old!"):',k);//! "Poly is 24 years old!"
console.log("'Mango' + 55:","Mango55");//! "Mango55"
console.log("'Mango' + true:","Mango"+!0);//! "Mangotrue"
console.log("---------------------------------------------------------");console.log("50 + 55:",50+55);//! "Mango55"
console.log("'50' + 55:","5055");//! "Mango55"
console.log("'Mango' + true:","Mango"+!0);//! "Mangotrue"
console.log("false + true:",!1+!0);//! "Mangotrue"
console.log("---------------------------------------------------------");console.log("1 + '2':","12");//! "12"
console.log("1 + '2' + 4:","124");//! "124"
console.log("1 + 2 + '4':",1+2+"4");//! "34"
//! ЯВНЕ - вбудована функція (або функція-конструктор) -> String(value)
console.log("%c ЯВНЕ приведення до рядка - String(value) ","color: yellow; background-color: #2274A5");console.log("String(5):",String(5));//! "5"
console.log("String('5'):","5");//! "5"
console.log("String(true):",String(!0));//! "true"
console.log("String(undefined):",String(void 0));//! "undefined"
console.log("String(null):",String(null));//! "null"
console.log("String(NaN):",String(NaN));//! "NaN"
//! ЯВНЕ - метод .toString()
console.log("%c ЯВНЕ приведення до рядка - .toString() ","color: yellow; background-color: #2274A5");console.log("(5).toString():",5 .toString());//! "5"
console.log("('5').toString():","5".toString());//! "5"
console.log("(true).toString:",(!0).toString());//! "true"
console.error("(undefined).toString: Cannot read properties of undefined (reading 'toString')");console.error("(null).toString: Cannot read properties of null (reading 'toString')");console.log("(NaN).toString:",NaN.toString());//! "NaN"
console.log("%c НЕЯВНЕ приведення до рядка - Конкатенація(+) ","color: yellow; background-color: #2274A5");console.log("'5' + 3:","53");//! "53"
console.log("3 + '5':","35");//! "35"
console.log("'5' + true:","5"+!0);//! "5true"
console.log("'5' + undefined:","5"+void 0);//! "5undefined"
console.log("5 + undefined:",5+void 0);//! NaN
console.log("'5' + null:","5"+null);//! "5null"
console.log("5 + null:",5+null);//! 5
console.log("null + undefined:",null+void 0);//! NaN
console.log("undefined + undefined:",void 0+void 0);//! NaN
console.log("null + null:",null+null);//! 0
console.log("null + true:",null+!0);//! 1
console.log("null + false:",null+!1);//! 0
console.log("-----------------------------------");console.log("%c 4.Шаблонні рядки та інтерполяція ${…} ","color: white; background-color: #D33F49");//! Шаблонні рядки та інтерполяція ${…}
const x="Clinton Eastwood",U=`Hello, ${x}!`;console.log("message:",U);console.log("---------------------------------------------------");const m="Mango",p=207;console.log(` Welcome ${m}, your room number is ${p}`);const v="Welcome "+m+", your room number is "+p+"!";console.log("greeting1:",v);console.log("%c 5.Спецсимволи ","color: white; background-color: #D33F49");//! Перенос рядка \n
console.log("%c Перенос рядка \\n ","color: yellow; background-color: #2274A5");const C=`Hello!
my dear!
`;console.log(C);console.log("----------");const F=`Hello! 
my dear!`;console.log(F);//! Табуляція(відступ) \t
console.log("%c Табуляція(відступ) \\t ","color: yellow; background-color: #2274A5");const J=`Hello! 
	my dear 
		friend!`;console.log(J);//! Зворотній слеш \\
console.log("%c Зворотній слеш \\\\ ","color: yellow; background-color: #2274A5");const W="Привіт, дорогий користувач\\відвідувач";console.log(W);//! Лапки \' \"
console.log(`%c Лапки \\' та \\" `,"color: yellow; background-color: #2274A5");const L="Привіт, моя сім'я";console.log(L);const E=`Привіт, моя "сім'я"`;console.log(E);//! Символи UTF-16: \uКОД, UTF-32: \u{КОД}
console.log("%c Символи UTF-16: \\uКОД, UTF-32: \\u{КОД} ","color: yellow; background-color: #2274A5");const I="This is my friend: 😍 ὠD";console.log(I);const D='Символ "копірайт":  ©';console.log(D);const $='[UTF-16] Символ "копірайт": ©';console.log($);const j='[UTF-32] Символ "копірайт": ©';console.log(j);console.log("%c 3.Властивості та методи рядків ","color: white; background-color: #D33F49");//! Властивості та методи рядків
//! [1] .length
console.log("%c Властивість .length ","color: yellow; background-color: #2274A5");const T="Live! Laugh! Love!";console.log("lifeMotto.length:",T.length);//! 18
console.log('"Repair droid".length:',12);//! 12
console.log('"JavaScript is awesome".length:',21);//! 21
//! [2.1] string[index]
console.log("%c Індексація рядків: string[index] ","color: yellow; background-color: #2274A5");const l="JavaScript";console.log("myString:",l);//! "JavaScript"
console.log("myString.length:",l.length);//! 10
console.log("------------------------------");let H=l[0];console.log("firstSymbol = myString[0]:",H);//! "J"
let R=l[1];console.log("secondSymbol = myString[1]:",R);//! "a"
let B=l[5];console.log("fiveSymbol = myString[5]:",B);//! "c"
console.log("------------------------------");console.warn("Останній символ:");const O=l.length-1;console.log("lastElementIndex = myString.length - 1:",O);//! 9
const _=l[l.length-1];console.log("lastSymbol = myString[lastElementIndex]:",_);//! "t"
console.log("'4' + 2 + 1:","4"+(2+1));//! "43"
const G=l.charAt(6);console.log("sevenSymbol = myString[6]:",G);//! "r"
//! [4] toLowerCase() і toUpperCase()
console.log(`%c Зміна регістру:               
 toLowerCase() і toUpperCase() `,"color: yellow; background-color: #2274A5");const s="Live! Laugh! Love!";console.log("myLifeMotto до:",s);//! "Live! Laugh! Love!"
console.log("myLifeMotto.toLowerCase():",s.toLowerCase());//! "live! laugh! love!"
console.log("myLifeMotto.toUpperCase():",s.toUpperCase());//! "LIVE! LAUGH! LOVE!"
console.log("myLifeMotto після:",s);//! "Live! Laugh! Love!"
console.log("---------------------------------------------");console.warn("Використання toLowerCase() і toUpperCase():");console.log('"saMsUng" === "samsung":',!1);//! false
console.log('"saMsUng" === "SAMSUNG":',!1);//! false
console.log("---------------------------------------------");const g="SAMSUNG";console.log("BRAND_NAME:",g);//! "SAMSUNG"
const r="saMsUng";console.log("userInput:",r);//! "saMsUng"
console.log("userInput === BRAND_NAME:",r===g);//! false
console.log("---------------------------------------------");const y=r.toUpperCase();console.log("userInput.toUpperCase():",y);//! "SAMSUNG"
console.log("userInput.toUpperCase() === BRAND_NAME:",y===g);//! true
//! [5] indexOf()
console.log("%c Метод: indexOf() ","color: yellow; background-color: #2274A5");const i="Welcome to Bahamas!";console.log("message3:",i);//! "Welcome to Bahamas!" 
const P=i.indexOf("to");console.log('index = message3.indexOf("to"):',P);//! 8 
console.log('message3.indexOf("hello"):',i.indexOf("hello"));//! -1
console.log("---------------------------------------------");//! [6] includes()
console.log("%c Метод: includes() ","color: yellow; background-color: #2274A5");const e="Jacob Mercer";console.log("username:",e);//! "Jacob Mercer"
console.log('username.includes("Jacob"):',e.includes("Jacob"));//! true
console.log('username.includes("Jakob"):',e.includes("Jakob"));//! false
console.log('username.includes("Mercer"):',e.includes("Mercer"));//! true
console.log('username.includes("Jаcob"):',e.includes("Jаcob"));//! false (літера "а" - ураїньска)!!!
console.log("---------------------------------------------");//! [7] startsWith() і endsWith()
console.log("%c Методи: startsWith() і endsWith() ","color: yellow; background-color: #2274A5");const n="Hello, world!";console.log("myString2:",n);//! "Hello, world!"
console.log('myString2.startsWith("Hello"):',n.startsWith("Hello"));//! true
console.log('myString2.endsWith("world!"):',n.endsWith("world!"));//! true
console.log('myString2.startsWith("hello"):',n.startsWith("hello"));//! false
console.log('myString2.endsWith("World!):',n.endsWith("World!"));//! false
console.log("---------------------------------------------");//! [8] trim()
console.log("%c Метод: trim() ","color: yellow; background-color: #2274A5");const a="";console.log("emptyString:",a);console.log("emptyString.length:",a.length);const u="   ";console.log("emptyString2:",u);console.log("emptyString2.length:",u.length);console.log("emptyString === emptyString2 :",a===u);const t=" JavaScript    ";console.log(t);//! " JavaScript    "
console.log(`%c${t}`,"color: darkred; background-color: yellow");//! " JavaScript    "
console.log("input.length:",t.length);//! 15
console.log(". . . . . . . . .");const d=t.trim();console.log(d);//! "JavaScript"
console.log(`%c${d}`,"color: yellow; background-color: green");//! "JavaScript!"
console.log("trimmedInput.length:",d.length);//! 10
//! [9] padStart() і padEnd()
console.log("%c Методи: padStart() і padEnd() ","color: yellow; background-color: #2274A5");const c="JavaScript";console.log("input2:",c);//! "JavaScript"
console.log('input2.padEnd(20, "!"):',c.padEnd(20,"!"));//! JavaScript!!!!!!!!!!
console.log('input2.padEnd(input2.length + 1,"!"):',c.padEnd(c.length+1,"!"));//! JavaScript!
console.log("--------------------------------------------------");//! [10] replace() і replaceAll()
console.log("%c Методи: replace() і replaceAll() ","color: yellow; background-color: #2274A5");const S="script.js";console.log("jsFileName:",S);//! "script.js"
const z=S.replace(".js",".min.js");console.log('jsFileName.replace(".js", ".min.js"):',z);//! "script.min.js"
console.log("----------------------------------------------------");const h="styles.css, about.css, portfolio.css";console.log("cssFileNames:",h);//! "styles.css, about.css, portfolio.css"
const q=h.replaceAll(".css",".min.css");console.log('cssFileNames.replaceAll(".css", ".min.css"):',q);//! "styles.min.css, about.min.css, portfolio.min.css"
//! [11] slice()
console.log("%c Метод: slice() ","color: yellow; background-color: #2274A5");const o="Repair droid";console.log("productName:",o);//! "Repair droid"
console.log("productName.slice(0, 4):",o.slice(0,4));//! "Repa"
console.log("productName.slice(3, 9):",o.slice(3,9));//! "air dr"
console.log("productName.slice(0, productName.length):",o.slice(0,o.length));//! "Repair droid"
console.log("productName.slice(0, productName.length - 1):",o.slice(0,o.length-1));//! "Repair droi"
console.log("productName.slice(7, productName.length):",o.slice(7,o.length));//! "droid"
console.warn("Останній символ:");console.log("productName.slice(-1):",o.slice-1);//! "d"
console.warn("Від'ємні значення:");console.log("productName.slice(-5):",o.slice(-5));//! "droid"
console.log("productName.length:",o.length);//! 12
console.log("productName.length - 5 = 12 - 5 =",o.length-5);//! 7
console.log("productName.slice(7):",o.slice(7));//! "droid"
console.log("-------------------------------------------------------");//! практика 
console.log("%c [3] ","color: yellow; background-color: #2274A5");//! Код виконаного завдання
const b="William Bradley Pitt",K="my favorite actor's name",Q=b.slice(-1).toUpperCase();console.log(`The last letter in ${K} ${b} is "${Q}" `);
