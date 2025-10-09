import"./modulepreload-polyfill-3cfb730f.js";console.log("Practice-1 JS");//! Код виконаного завдання
const lo=16;console.log(lo);let c=null;console.log(typeof c);console.log(c);c=17;console.log(c);c=18;console.log(c);const E="Myroslav";console.log(E);console.log("------------");console.log("10");console.log(10);console.log("Myroslav");console.log(2008);console.log("------------");const eo=typeof c;console.log("typeMyAge:",eo);const no=typeof E;console.log("тип зміної myName:",no);const J=!0;console.log("стать чоловіча?:",J);const so=typeof J;console.log("тип змінної isMan :",so);console.log("lesson-2");const L=10;console.log("myNumber:",L);console.log("тип змінної myNumber:",typeof L);console.log("lesson-3");console.log(36);console.log(!0);console.log(!1);console.log(null);console.log(void 0);console.log('typeof "lesson-3":',"string");console.log("number");console.log("boolean");console.log("boolean");console.log("object");console.log("undefined");const _=5,h=7;let W;W=_+h;console.log("a + b =",W);console.log("a - b =",_-h);console.log(" b / a =",h/_);console.log(" b * a =",h*_);console.log("lesson 4");let T=+"5px";console.log('Number("5px"):',T);console.log("typeof toNumber:",typeof T);console.log('Number("5" * 2):',Number("5"*2));const co="5"*2;console.log('"5" * 2:',co);console.log('Number("5" + 2):',+"52");const go="52";console.log('"5" + 2:',go);const to=5+2;console.log("5 + 2:",to);const ro="5"-2;console.log('"5" - 2:',ro);const ao="5"/2;console.log('"5" / 2:',ao);const r="6",a=5;console.log(`h: ${r}, j: ${a}`);console.log("h:",r,",","j:",a);console.log("h > j:",r>a);console.log("h < j:",r<a);console.log("h <= j:",r<=a);console.log("h >= j:",r>=a);console.log('parseInt("5"):',parseInt("5"));console.log('Number("5"):',+"5");console.log('parseInt("5px"):',parseInt("5px"));console.log('Number("5px"):',+"5px");console.log('parseInt("=5px"):',parseInt("=5px"));console.log('parseInt("5m2sm"):',parseInt("5m2sm"));console.log('parseInt("5.5"):',parseInt("5.5"));console.log('parseFloat("5.5"):',parseFloat("5.5"));console.log('parseFloat("5.px"):',parseFloat("5.px"));console.log('Number("5.5"):',+"5.5");console.log('Number("5.5px"):',+"5.5px");console.log('Number.parseFloat("12.46qwe79"):',Number.parseFloat("12.46qwe79"));console.log('36 + "Привiт!":',"36Привiт!");console.log('isNaN(36 + "Привiт!"):',isNaN("36Привiт!"));console.log("isNaN(36):",isNaN(36));console.log('isNaN("36"):',isNaN("36"));//! Перевірка на NaN - метод Number.isNaN(val)
console.log('Number.isNaN("qwerty"):',Number.isNaN("qwerty"));console.log("Number.isNaN(36):",Number.isNaN(36));console.log("Number.isNaN(NaN):",Number.isNaN(NaN));let D=+"63";console.log('valueNaN = Number("qwerty"):',D);//! NaN
console.log("Number.isNaN(valueNaN):",Number.isNaN(D));//! true
console.log("Number.isNaN(NaN):",Number.isNaN(NaN));//! true
console.log("0.1 + 0.2 === 0.3:",.1+.2==.3);console.log("0.1 + 0.2 =",.1+.2);console.warn("Variant 1");console.log("0.1 * 10 + 0.2 * 10 =",.1*10+.2*10);//! 3
const io=(.1*10+.2*10)/10;console.log("(0.1 * 10 + 0.2 * 10) / 10 =",io);//! 0.3
//! Метод число.toFixed(digits)
console.warn("Variant 2");console.log("(0.1 + 0.2).toFixed(1) =",(.1+.2).toFixed(1));//! 0.3
console.log("(0.1 + 0.2).toFixed(17) =",(.1+.2).toFixed(17));//! 0.3000000000000004
console.log("------------- Приклади toFixed(): ------------");console.log("(5).toFixed(2) =",5 .toFixed(2));//! 5.00
console.log("(8.762195).toFixed(4) =",8.762195.toFixed(4));//! 8.7622
console.log("8.762195.toFixed(4) =",8.762195.toFixed(4));//! 8.7622
console.log("----------------------------------------------");console.log("lesson5");const uo="JavaScript";console.log("course1:",uo);//! JavaScript
const mo="JavaScript";console.log("course2:",mo);//! JavaScript
const po="JavaScript";console.log("course3:",po);//! JavaScript
//! Конкатенація рядків
const No="Mango is happy";console.log('("Mango " + "is " + "happy"):',No);//! "Mango is happy"
const yo=24,bo="Poly is "+yo+" years old!";console.log('("Poly is " + age + " years old!"):',bo);//! "Poly is 24 years old!"
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
const fo="Clinton Eastwood",_o=`Hello, ${fo}!`;console.log("message:",_o);console.log("---------------------------------------------------");const O="Mango",H=207;console.log(` Welcome ${O}, your room number is ${H}`);const ho="Welcome "+O+", your room number is "+H+"!";console.log("greeting1:",ho);console.log("%c 5.Спецсимволи ","color: white; background-color: #D33F49");//! Перенос рядка \n
console.log("%c Перенос рядка \\n ","color: yellow; background-color: #2274A5");const wo=`Hello!
my dear!
`;console.log(wo);console.log("----------");const So=`Hello! 
my dear!`;console.log(So);//! Табуляція(відступ) \t
console.log("%c Табуляція(відступ) \\t ","color: yellow; background-color: #2274A5");const ko=`Hello! 
	my dear 
		friend!`;console.log(ko);//! Зворотній слеш \\
console.log("%c Зворотній слеш \\\\ ","color: yellow; background-color: #2274A5");const Ao="Привіт, дорогий користувач\\відвідувач";console.log(Ao);//! Лапки \' \"
console.log(`%c Лапки \\' та \\" `,"color: yellow; background-color: #2274A5");const xo="Привіт, моя сім'я";console.log(xo);const Bo=`Привіт, моя "сім'я"`;console.log(Bo);//! Символи UTF-16: \uКОД, UTF-32: \u{КОД}
console.log("%c Символи UTF-16: \\uКОД, UTF-32: \\u{КОД} ","color: yellow; background-color: #2274A5");const Mo="This is my friend: 😍 ὠD";console.log(Mo);const Fo='Символ "копірайт":  ©';console.log(Fo);const vo='[UTF-16] Символ "копірайт": ©';console.log(vo);const Co='[UTF-32] Символ "копірайт": ©';console.log(Co);console.log("%c 3.Властивості та методи рядків ","color: white; background-color: #D33F49");//! Властивості та методи рядків
//! [1] .length
console.log("%c Властивість .length ","color: yellow; background-color: #2274A5");const $o="Live! Laugh! Love!";console.log("lifeMotto.length:",$o.length);//! 18
console.log('"Repair droid".length:',12);//! 12
console.log('"JavaScript is awesome".length:',21);//! 21
//! [2.1] string[index]
console.log("%c Індексація рядків: string[index] ","color: yellow; background-color: #2274A5");const n="JavaScript";console.log("myString:",n);//! "JavaScript"
console.log("myString.length:",n.length);//! 10
console.log("------------------------------");let Io=n[0];console.log("firstSymbol = myString[0]:",Io);//! "J"
let Uo=n[1];console.log("secondSymbol = myString[1]:",Uo);//! "a"
let jo=n[5];console.log("fiveSymbol = myString[5]:",jo);//! "c"
console.log("------------------------------");console.warn("Останній символ:");const Eo=n.length-1;console.log("lastElementIndex = myString.length - 1:",Eo);//! 9
const Jo=n[n.length-1];console.log("lastSymbol = myString[lastElementIndex]:",Jo);//! "t"
console.log("'4' + 2 + 1:","4"+(2+1));//! "43"
const Lo=n.charAt(6);console.log("sevenSymbol = myString[6]:",Lo);//! "r"
//! [4] toLowerCase() і toUpperCase()
console.log(`%c Зміна регістру:               
 toLowerCase() і toUpperCase() `,"color: yellow; background-color: #2274A5");const w="Live! Laugh! Love!";console.log("myLifeMotto до:",w);//! "Live! Laugh! Love!"
console.log("myLifeMotto.toLowerCase():",w.toLowerCase());//! "live! laugh! love!"
console.log("myLifeMotto.toUpperCase():",w.toUpperCase());//! "LIVE! LAUGH! LOVE!"
console.log("myLifeMotto після:",w);//! "Live! Laugh! Love!"
console.log("---------------------------------------------");console.warn("Використання toLowerCase() і toUpperCase():");console.log('"saMsUng" === "samsung":',!1);//! false
console.log('"saMsUng" === "SAMSUNG":',!1);//! false
console.log("---------------------------------------------");const M="SAMSUNG";console.log("BRAND_NAME:",M);//! "SAMSUNG"
const F="saMsUng";console.log("userInput:",F);//! "saMsUng"
console.log("userInput === BRAND_NAME:",F===M);//! false
console.log("---------------------------------------------");const R=F.toUpperCase();console.log("userInput.toUpperCase():",R);//! "SAMSUNG"
console.log("userInput.toUpperCase() === BRAND_NAME:",R===M);//! true
//! [5] indexOf()
console.log("%c Метод: indexOf() ","color: yellow; background-color: #2274A5");const v="Welcome to Bahamas!";console.log("message3:",v);//! "Welcome to Bahamas!" 
const Wo=v.indexOf("to");console.log('index = message3.indexOf("to"):',Wo);//! 8 
console.log('message3.indexOf("hello"):',v.indexOf("hello"));//! -1
console.log("---------------------------------------------");//! [6] includes()
console.log("%c Метод: includes() ","color: yellow; background-color: #2274A5");const d="Jacob Mercer";console.log("username:",d);//! "Jacob Mercer"
console.log('username.includes("Jacob"):',d.includes("Jacob"));//! true
console.log('username.includes("Jakob"):',d.includes("Jakob"));//! false
console.log('username.includes("Mercer"):',d.includes("Mercer"));//! true
console.log('username.includes("Jаcob"):',d.includes("Jаcob"));//! false (літера "а" - ураїньска)!!!
console.log("---------------------------------------------");//! [7] startsWith() і endsWith()
console.log("%c Методи: startsWith() і endsWith() ","color: yellow; background-color: #2274A5");const p="Hello, world!";console.log("myString2:",p);//! "Hello, world!"
console.log('myString2.startsWith("Hello"):',p.startsWith("Hello"));//! true
console.log('myString2.endsWith("world!"):',p.endsWith("world!"));//! true
console.log('myString2.startsWith("hello"):',p.startsWith("hello"));//! false
console.log('myString2.endsWith("World!):',p.endsWith("World!"));//! false
console.log("---------------------------------------------");//! [8] trim()
console.log("%c Метод: trim() ","color: yellow; background-color: #2274A5");const C="";console.log("emptyString:",C);console.log("emptyString.length:",C.length);const $="   ";console.log("emptyString2:",$);console.log("emptyString2.length:",$.length);console.log("emptyString === emptyString2 :",C===$);const S=" JavaScript    ";console.log(S);//! " JavaScript    "
console.log(`%c${S}`,"color: darkred; background-color: yellow");//! " JavaScript    "
console.log("input.length:",S.length);//! 15
console.log(". . . . . . . . .");const I=S.trim();console.log(I);//! "JavaScript"
console.log(`%c${I}`,"color: yellow; background-color: green");//! "JavaScript!"
console.log("trimmedInput.length:",I.length);//! 10
//! [9] padStart() і padEnd()
console.log("%c Методи: padStart() і padEnd() ","color: yellow; background-color: #2274A5");const y="JavaScript";console.log("input2:",y);//! "JavaScript"
console.log('input2.padEnd(20, "!"):',y.padEnd(20,"!"));//! JavaScript!!!!!!!!!!
console.log('input2.padEnd(input2.length + 1,"!"):',y.padEnd(y.length+1,"!"));//! JavaScript!
console.log("--------------------------------------------------");//! [10] replace() і replaceAll()
console.log("%c Методи: replace() і replaceAll() ","color: yellow; background-color: #2274A5");const q="script.js";console.log("jsFileName:",q);//! "script.js"
const To=q.replace(".js",".min.js");console.log('jsFileName.replace(".js", ".min.js"):',To);//! "script.min.js"
console.log("----------------------------------------------------");const G="styles.css, about.css, portfolio.css";console.log("cssFileNames:",G);//! "styles.css, about.css, portfolio.css"
const Do=G.replaceAll(".css",".min.css");console.log('cssFileNames.replaceAll(".css", ".min.css"):',Do);//! "styles.min.css, about.min.css, portfolio.min.css"
//! [11] slice()
console.log("%c Метод: slice() ","color: yellow; background-color: #2274A5");const e="Repair droid";console.log("productName:",e);//! "Repair droid"
console.log("productName.slice(0, 4):",e.slice(0,4));//! "Repa"
console.log("productName.slice(3, 9):",e.slice(3,9));//! "air dr"
console.log("productName.slice(0, productName.length):",e.slice(0,e.length));//! "Repair droid"
console.log("productName.slice(0, productName.length - 1):",e.slice(0,e.length-1));//! "Repair droi"
console.log("productName.slice(7, productName.length):",e.slice(7,e.length));//! "droid"
console.warn("Останній символ:");console.log("productName.slice(-1):",e.slice-1);//! "d"
console.warn("Від'ємні значення:");console.log("productName.slice(-5):",e.slice(-5));//! "droid"
console.log("productName.length:",e.length);//! 12
console.log("productName.length - 5 = 12 - 5 =",e.length-5);//! 7
console.log("productName.slice(7):",e.slice(7));//! "droid"
console.log("-------------------------------------------------------");//! практика 
console.log("%c [3] ","color: yellow; background-color: #2274A5");//! Код виконаного завдання
const P="William Bradley Pitt",Oo="my favorite actor's name",Ho=P.slice(-1).toUpperCase();console.log(`The last letter in ${Oo} ${P} is "${Ho}" `);//!  0, null, NaN, порожній рядок: "" (або ''), false, undefined
console.log("Boolean(0):",!!0);//! false
console.log("Boolean(null):",!!null);//! false
console.log("Boolean(NaN):",!!NaN);//! false 
console.log('Boolean(""):',!!"");//! false
console.log("Boolean(false):",!1);//! false
console.log("Boolean(undefined):",!!void 0);console.log("---------------------------");console.log('Boolean("   "):',!!"   ");//! true
console.log('Boolean("123"):',!!"123");//! true
console.log("Boolean(123):",!!123);//! true
console.log("Boolean(-123):",!!-123);//! true
console.log("Boolean(true):",!0);//! true
console.log("Boolean('false'):",!!"false");//! true 
//! 2-1.Логічне «І» (оператор &&)
console.log("%c 2-1.Логічне «І» (оператор &&) ","color: yellow; background-color: #2274A5");console.log("false && false:",!1);//! false
console.log("false && true:",!1);//! false
console.log("true && false:",!1);//! false
console.log("true && true:",!0);//! true
console.log("----------------------------");console.log("1 && 4:",4);//! 4
console.log("1 && 4 && 0:",0);//! 0
console.log('1 && 4 && "mango":',"mango");//! mango
console.log('1 && 4 && 0 && "mango":',0);//! 0
console.log('1 && 4 && "":',"");//! пустий рядок 
console.log('1 && "" && 4:',"");//! також пустий рядок
console.log("----------------------------");let l=20;const Ro=l>10&&l<30;console.log("num > 10 && num < 30:",Ro);//!true
const qo=l>10&&l<10;console.log("num > 10 && num < 10:",qo);//!false
//! 2-2.Логічне «АБО» (оператор ||)
console.log("%c 2-2.Логічне «АБО» (оператор ||) ","color: yellow; background-color: #2274A5");console.log("false || false:",!1);//! false
console.log("false || true:",!0);//! true
console.log("true || false:",!0);//! true
console.log("true || true:",!0);//! true
console.log("----------------------------");console.log("1 || 4:",1);//! 1
console.log("1 || 4 || 0:",1);//! 1
console.log('1 || 4 || "mango":',1);//! 1
console.log('1 || 4 || 0 || "mango":',1);//! 1
console.log('1 || 4 || "":',1);//! 1 
console.log('1 || "" || 4:',1);//! 1
console.log('"" || 1 || 4:',1);//! 1
console.log('false || 0 || "":',"");//! пустий рядок
console.log("----------------------------");l=20;const Go=l>10||l<30;console.log("num > 10 || num < 30:",Go);//! true
const Po=l>10||l<10;console.log("num > 10 || num < 10:",Po);//! true
//! 2-3.Логічне «НЕ» (оператор !)
console.log("%c 2-3.Логічне «НЕ» (оператор !) ","color: yellow; background-color: #2274A5");console.log("!false:",!0);//! true
console.log("!true:",!1);//! false
console.log("!!false:",!1);//! false
console.log("!!true:",!0);//! true 
console.log("----------------------------");console.log("!1:",!1);//! false
console.log("!0:",!0);//! true
console.log("----------------------------");console.log(!0);//! true
console.log("!(1 || 4):",!1);//! false
console.log("!(1 || 4 || 0):",!1);//! false
console.log('!(1 || 4 || "mango"):',!1);//! false
console.log('!(1 || 4 || 0 || "mango"):',!1);//! false
console.log('!(1 && 4 || 0 || "mango"):',!1);//! false
console.log('!(1 || 4 || ""):',!1);//! false
console.log('!(1 || "" || 4):',!1);//! false
console.log('!("" || 1 || 4)',!1);//! false
console.log('!(false || 0 || ""):',!0);//! true
console.log("-------------------------------");l=20;const Vo=l>10||l<30;console.log("!(num > 10 || num < 30):",!Vo);//! false
const zo=l>10||l<10;console.log("!(num > 10 || num < 10):",!zo);//! false
const Ko=!(l>10||l<10);console.log("!!(num > 10 || num < 10):",!Ko);//! true
console.log("-------------------------------");//! 2-4.Порядок обчислення
console.log("%c 2-4.Порядок обчислення ","color: yellow; background-color: #2274A5");console.log("false && (цей операнд не обчислюється)");console.log("true || (цей операнд не обчислюється)");console.log("---------------------------------------");//! УВАГА!
//! Приклад обчислення послідовності операторів && та || 
console.warn("Приклад обчислення послідовності операторів && та ||");console.log('1 && 4 || 0 && "mango":',4);//! 4
console.log("Крок_1 -> (1 && 4):",4);//! 4
console.log('Крок_2 -> (0 && "mango"):',0);//! 0
console.log("Крок_3 -> (4 || 0):",4);//! 4
console.log(". . . . . . . . . . . . . . . . . . . .");console.log('1 && "mango" || 1 && undefined:',"mango");//! "mango"
console.log('0 && 1 || 1 && "mango":',"mango");//! "mango"
console.log("---------------------------------------");console.log("_____________________________");let V=0;V=100;console.log("cost11:",V);//! 100
let Qo=0;console.log("cost12:",Qo);//! 0
console.log("-----------------------------");//! 3-2.Інструкція: «if...else»
console.log("%c 3-2.Інструкція: «if...else» ","color: yellow; background-color: #2274A5");console.warn("https://ruslan379.github.io/course-fe-html-css/lesson-FE3_04/images/02_instructions-if...else.jpg");console.log("тіло if");console.log("_____________________________");let z;z=100;console.log("cost21:",z);//! 100
let K;K=0;console.log("cost22:",K);//! 0
//! 3-3.Інструкція: «else...if»
console.log("%c 3-3.Інструкція: «else...if» ","color: yellow; background-color: #2274A5");console.warn("https://ruslan379.github.io/course-fe-html-css/lesson-FE3_04/images/03_instructions-else...if.jpg");console.log("_____________________________");let U;console.log(U);U=0;console.log("cost3:",U);//! 500
//! 4.Тернарний оператор
console.log("%c ПРИКЛАД-1 (if...else): ","color: yellow; background-color: #2274A5");let x;x="adult",console.log(x);console.log("type1:",x);//! "adult"
console.log("---------------------------------");console.log("%c ПРИКЛАД-2 (тернарний оператор): ","color: yellow; background-color: #2274A5");const Xo="adult";console.log("type2:",Xo);//! "adult"
console.log("---------------------------------");//! ПРАКТИКА-4 (Урок-04_JS)
//! Творчі завдання після логічних операторів
console.log("%c [1] ","color: yellow; background-color: #2274A5");const b=10,t=30,s=15;console.log(`Число ${s} входить у відрізок ДО ${b} `,b>s);console.log(`Число  ${s} входить у відрізок ПІСЛЯ ${t}? `,t<s);console.log(`Число  ${s} входить у відрізок ВІД ${b} ДО  ${t}? `,s<=t);console.log(`Число  ${s} входить у відрізок ДО ${b} або ПІСЛЯ  ${t}? `,s>t);console.log("------------------------------------------------------");console.log("Число <number> ...");//!lesson 10 
//! 1.Інструкція switch
const Q=400,X=50,Y=100,Z=200;console.log("valueOriginal:",Q);console.log(". . . . . . . . . . .");console.log("valueToCompare1:",X);console.log("valueToCompare2:",Y);console.log("valueToCompare3:",Z);switch(Q){case X:console.log("Спрацював код ПЕРШОГО блока");break;case Y:console.log("Спрацював код ДРУГОГО блока");break;case Z:console.log("Спрацював код ТРЕТЬОГО блока");break;default:console.warn("НЕ спрацював ЖОДЕН блок!")}console.log("----------------------------");let N;const Yo="personal";switch(Yo){case"free":N=0;break;case"pro":N=100;break;case"premium":N=500;break;default:console.log("Invalid subscription type")}console.log("cost:",N);//! 100
console.warn("https://ruslan379.github.io/course-fe-html-css/lesson-FE3_05/images/variable-scope.jpg");const f="global";{const o="block-A";console.log("Block scope A:",f);//! global 
console.log("Block scope A:",o);//! block-A
console.log("-----------------------");{const oo="block-B";console.log("Block scope B:",f);//! global 
console.log("Block scope B:",o);//! ? block-A
console.log("Block scope B:",oo);//! ?block-B
console.log("-----------------------")}}{const o="block-C";console.log("Block scope C:",f);//! global 
console.log("Block scope C:",o);//! block-C
console.log("-----------------------")}console.log("Block scope GLOBAL:",f);//! global
console.log("-----------------------");//!lesson11
//! Що таке ЦИКЛ?
//! 1.Цикл while - цикл з передумовою
console.warn("https://ruslan379.github.io/course-fe-html-css/lesson-FE3_06/images/while.png");let g=4;for(;g<4;)console.log("ТІЛО ЦИКЛУ --> counter(ДО):",g),g=g+1,console.log("ТІЛО ЦИКЛУ --> counter(ПІСЛЯ):",g);console.log("____ ПОЗА ЦИКЛУ --> counter:",g);console.log("-----------------------------------------");let u=26;const Zo=26;for(;u<Zo;)console.log("ТІЛО ЦИКЛУ --> clientCounter(ДО):",u),u+=1,console.log("ТІЛО ЦИКЛУ --> clientCounter(ПІСЛЯ):",u);console.log("____ ПОЗА ЦИКЛУ --> clientCounter:",u);console.log("-----------------------------------------");//! 2.Цикл do...while - цикл з постумовою
console.warn("https://ruslan379.github.io/course-fe-html-css/lesson-FE3_06/images/do-while.png");let m=4;do console.log("ТІЛО ЦИКЛУ --> counter(ДО):",m),m+=1,console.log("ТІЛО ЦИКЛУ --> counter(ПІСЛЯ):",m);while(m<4);console.log("____ ПОЗА ЦИКЛУ --> counter:",m);console.log("-----------------------------------------");for(let o=0;o<=20;o+=5)console.log("Лічильник, i:",o);console.log("-----------------");const ol=3;let B=0;for(let o=0;o<=ol;o=o+1)B+=o,console.log("Тіло for, i =",o),console.log("Тіло for, sum =",B),console.log(". . . . . . . . .");console.log("sum:",B);console.log("------------------");const k=10;for(let o=0;o<k;o+=1)console.log("i =",o),console.log(`${k} % ${o} = `,k%o);console.log("-----------------");//! 4.Інструкції break і continue
//! Оператор break
for(let o=0;o<=5;o+=1)if(console.log("i:",o),o===3){console.log("Знайшли число 3, перериваємо виконання циклу");break}console.log("Лог після циклу");console.log("------------------");//! Оператор continue
const ll=10;for(let o=0;o<ll;o+=1)console.log("for --> i:",o),o%2!==0&&(console.log("парне i: ",o),console.log(". . . . . . ."));console.log("%c [1] ","color: yellow; background-color: #2274A5");let A=1;const el=10;for(;A<=el;)console.log("Результат:",A),A+=1;console.log("%c [2] ","color: yellow; background-color: #2274A5");const nl=2,sl=20;for(let o=nl;o<=sl;o+=1)o%2===0&&console.log("парне число:",o);console.log("%c [3] ","color: yellow; background-color: #2274A5");const j=7;for(let o=1;o<=10;o+=1)console.log(`${j} * ${o} = ${j*o}`);console.log("%c [4] ","color: yellow; background-color: #2274A5");console.log("%c [5] ","color: yellow; background-color: #2274A5");console.log("---------------------------------------------");console.log("%c [6] ","color: yellow; background-color: #2274A5");const cl=10;for(let o=0;o<=20&&!(o>=cl);o+=1)console.log(o);console.log("%c [7] ","color: yellow; background-color: #2274A5");let i=1;const gl=20;for(;i<=gl;){if(i%3===0){i+=1;continue}console.log(i),i+=1}
