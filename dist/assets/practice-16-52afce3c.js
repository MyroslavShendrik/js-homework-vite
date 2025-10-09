import"./modulepreload-polyfill-3cfb730f.js";//! 3.Ланцюжки методів
const g=[{name:"Манго",score:83,courses:["математика","фізика"]},{name:"Полі",score:59,courses:["інформатика","математика"]},{name:"Аякс",score:37,courses:["фізика","біологія"]},{name:"Ківі",score:94,courses:["література","інформатика"]}],S=[...g].sort((o,e)=>o.score-e.score),w=S.map(o=>o.name);console.log("names1:",w);//! ['Аякс', 'Полі', 'Манго', 'Ківі']
console.log(". . . . . . . . . . . . . . . . . . . . . . . . . . .");const C=[...g].sort((o,e)=>o.score-e.score).map(o=>o.name);console.log("names2:",C);//! ['Аякс', 'Полі', 'Манго', 'Ківі']
console.log(". . . . . . . . . . . . . . . . . . . . . . . . . . .");const O=g.flatMap(o=>o.courses).filter((o,e,s)=>s.indexOf(o)===e).sort((o,e)=>o.localeCompare(e));console.log("uniqueSortedCourses:",O);//! ['біологія', 'інформатика', 'література', 'математика', 'фізика']
console.log("----------------------------------------------------------------------------------------------");//! 1.Метод reduce()
console.warn("Синтаксис методу reduce():");console.log(`%c
    масив.reduce((previousValue, element, index, array) => {
        // тіло колбек-функції
    }, initialValue);
    `,"color: blue; font-size: 18px");console.warn("Приклад використання метода reduce():");const m=[2,7,3,14,6],x=0;console.log("array:",m);console.log("`  `  `  `  `  `  `  `  `  `  `  `  `  `  `  `  `  `  `  `");const y=m.reduce((o,e,s)=>(console.log(`Iteration-${s+1}:  previousValue: ${o},  number: ${e}  ->  return ${o+e}`),o+e),x);console.log("total:",y);//! 32
console.log(". . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .");console.warn("Приклад-1: ВІРНЄ використання синтаксису метода reduce():");function A(o){o.reduce((e,s,a)=>{console.log(`Acc: ${e}; Index-${a}:  Element: ${s}`)},15)}A(["Робітник1","Робітник2","Робітник3"]);console.log(". . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .");console.warn("Приклад-2: ПОМИЛКОВЕ використання синтаксису метода reduce():");function $(o){o.reduce((e,s)=>{console.log(`Index-${s}:  Element: ${e}`)},void 0)}$(["Робітник1","Робітник2","Робітник3"]);console.log("-------------------------------------------------------------");const l=[2,7,3,14,6];function N(o){let e=0;for(const s of o)e=e+s;return e}console.log("сума всіх чисел в масиві №1:",N(l));function d(o){const e=o.reduce((s,a)=>s+a,0);return console.log("allTotal",e),e}console.log("сума всіх чисел в масиві №2:",d(l));d(l);d(l);//! Метод sort()
console.warn("Синтаксис методу sort():");console.log(`%c
    массив.sort();
    `,"color: blue; font-size: 18px");console.warn("Приклад використання метода sort():");const n=[61,19,74,35,92,56],_=n,p=[...n];console.log("scores1_before:",n);//! [61, 19, 74, 35, 92, 56]
p.sort();console.log("copyScores:",_);//!  //! [61, 19, 74, 35, 92, 56]
console.log("scores1_after:",n);//! //! [61, 19, 74, 35, 92, 56]
console.log("copy1:",p);//! [19, 35, 56, 61, 74, 92]
console.log(". . . . . . . . . . . . . . . . . . . . . . . . . . . . .");const i=["віка","андрій","Олег","Юля","борис","Катя"];console.log("students1_before:",i);//! ['Віка', 'Андрій', 'Олег', 'Юля', 'Борис', 'Катя']
i.sort();console.log("students1_after:",i);//! ['Андрій', 'Борис', 'Віка', 'Катя', 'Олег', 'Юля']
console.log(". . . . . . . . . . . . . . . . . . . . . . . . . . . . .");const u=["b","B","a","A","c","C"];console.log("letters_before:",u);//! ['b', 'B', 'a', 'A', 'c', 'C']
u.sort();console.log("letters_after:",u);console.log(". . . . . . . . . . . . . . . . . . . . . . . . . . . . .");const b=[61,19,74,35,92,56],h=[...b].sort();console.log("scores3:",b);//! [61, 19, 74, 35, 92, 56]
console.log("ascendingScores3:",h);//! [19, 35, 56, 61, 74, 92]
console.log("-------------------------------------------------------------------------------");//! Свій порядок сортування чисел
console.warn("Свій порядок сортування чисел:");console.log(`%c
    массив.sort((a, b) => {
        // тіло колбек-функції
    });
    `,"color: blue; font-size: 18px");const c=[27,2,41,4,7,3,75],z=[...c].sort(),I=[...c].sort((o,e)=>o-e),q=[...c].sort((o,e)=>e-o);console.log("scores4:",c);//! [27, 2, 41, 4, 7, 3, 75]
console.log("ascendingScores4Old:",z);//! [2, 27, 3, 4, 41, 7, 75]
console.log("ascendingScores4New:",I);//! [2, 3, 4, 7, 27, 41, 75]
console.log("descentingScores4New:",q);//! [75, 41, 27, 7, 4, 3, 2]
//! Свій порядок сортування рядків
console.warn("Свій порядок сортування рядків:");console.log(`%c
    firstString.localeCompare(secondString)
    `,"color: blue; font-size: 18px");console.log("-------------------------------------------------------------------------------");console.log('"a".localeCompare("b"):',"a".localeCompare("b"));//! -1
console.log('"b".localeCompare("a"):',"b".localeCompare("a"));//! 1
console.log('"a".localeCompare("a"):',"a".localeCompare("a"));//! 0
console.log('"b".localeCompare("b"):',"b".localeCompare("b"));//! 0
console.log("-------------------------------------------------------------------------------");const r=["Віка","андрій","Олег","юля","Борис","катя"];console.log("students2:",r);//! ['Віка', 'андрій', 'Олег', 'юля', 'Борис', 'катя']
const v=[...r].sort();console.log("inAlphabetOrder2Old:",v);//! ['Борис', 'Віка', 'Олег', 'андрій', 'катя', 'юля']
const B=[...r].sort((o,e)=>o.localeCompare(e));console.log("inAlphabetOrder2New:",B);//! ['андрій', 'Борис', 'Віка', 'катя', 'Олег', 'юля']
const E=[...r].sort((o,e)=>e.localeCompare(o));console.log("inReversedOrder2New:",E);//! ['юля', 'Олег', 'катя', 'Віка', 'Борис', 'андрій']
//! Сортування об'єктів
console.warn("Сортування об'єктів:");const f=[{name:"Манго",score:83},{name:"Полі",score:59},{name:"Аякс",score:37},{name:"Ківі",score:94}];console.log("students3:",f);console.log("`  `  `  `  `  `  `  `  `  `  `  `  `  `  `  `  `  `  `");const R=f.sort((o,e)=>o.name.localeCompare(e.name));console.log("inAlphabeticalOrder:",R);//! 
console.log("-------------------------------------------------------------------------------");//! Метод toSorted()
console.warn("Синтаксис методу toSorted():");console.log(`%c
    массив.toSorted();
    `,"color: blue; font-size: 18px");console.log(`%c
    массив.toSorted((a, b) => {
        // тіло колбек-функції
    });
    `,"color: blue; font-size: 18px");const t=[27,2,41,4,7,3,75];console.log("scores5_before:",t);//! [27, 2, 41, 4, 7, 3, 75]
console.log("`  `  `  `  `  `  `  `  `  `  `  `  `  `  `  `  `");const T=t.toSorted((o,e)=>o-e),V=t.toSorted((o,e)=>e-o);console.log("ascendingScores5:",T);//! [2, 3, 4, 7, 27, 41, 75]
console.log("descentingScores5:",V);//! [75, 41, 27, 7, 4, 3, 2]
console.log("`  `  `  `  `  `  `  `  `  `  `  `  `  `  `  `  `");console.log("scores5_after:",t);//! [27, 2, 41, 4, 7, 3, 75]
console.log("-------------------------------------------------------------------------------");
