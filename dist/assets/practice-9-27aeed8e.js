import"./modulepreload-polyfill-3cfb730f.js";//! Присвоєння за значенням
console.warn("Присвоєння за значенням:");let h=5,j=h;console.log("a:",h);//! 5
console.log("b:",j);//! 5
console.log(". . . .");h=10;console.log("a:",h);//! 10
console.log("b:",j);//! 5
console.log("--------------------------------------");//! Присвоєння за посиланням 
console.warn("Присвоєння за посиланням:");const r=["Mango"],u=r;console.log("arrA:",r);//! ['Mango']
console.log("arrB:",u);//! ['Mango']
console.log(". . . . . . . . . . . . . . . . . . . .");r[1]="Poly";console.log("arrA:",r);//! ['Mango', 'Poly']
console.log("arrB:",u);//! ['Mango', 'Poly']
console.log(". . . . . . . . . . . . . . . . . . . .");u.push("Ajax");console.log("arrA:",r);//! ['Mango', 'Poly', 'Ajax']
console.log("arrB:",u);//! ['Mango', 'Poly', 'Ajax']
console.log("--------------------------------------");//! Метод split()
console.warn("Метод split():");const P="Mango";console.log("string:",P);const x=P.split(" ");console.log('string.split(""):',x);//! ['M', 'a', 'n', 'g', 'o']
console.log(". . . . . . . . . . . . . . . . . . . . . . . . .");const M="JavaScript - це цікаво";console.log("message:",M);let t=M.split("");console.log('messageArr = message.split(" "):',t);//! ['JavaScript', '-', 'це', 'цікаво']
console.log("--------------------------------------------------------------------------");//! Метод join()
console.warn("Метод join():");t=["JavaScript","це","цікаво"];console.log("messageArr:",t);console.log('messageArr.join(""):',t.join(""));//! "JavaScriptцецікаво"
console.log('messageArr.join(" "):',t.join(" "));//! "JavaScript це цікаво"
console.log('messageArr.join("-"):',t.join("-"));//! "JavaScript-це-цікаво"
console.log("--------------------------------------------------------------------------");//! Метод indexOf()
console.warn("Метод indexOf():");let g=["Mango","Ajax","Poly","Kiwi","Poly"];console.log("clientsArr:",g);//! ['Mango', 'Ajax', 'Poly', 'Kiwi']
console.log('clientsArr.indexOf("Poly"):',g.indexOf("Poly"));//! 2
console.log('clientsArr.indexOf("Monkong"):',g.indexOf("Monkong"));//! -1
console.log("----------------------------------------------------");//! Метод includes()
console.warn("Метод includes():");g=["Mango","Ajax","Poly","Kiwi"];console.log("clientsArr:",g);//! ['Mango', 'Ajax', 'Poly', 'Kiwi']
console.log('clientsArr.includes("Poly"):',g.includes("Poly"));//! true
console.log('clientsArr.includes("Monkong"):',g.includes("Monkong"));//! false
console.log("----------------------------------------------------");//! 4.Методи push() і pop() та unshift() і shift()
console.warn(`Методи push() і pop() та unshift() і shift(): 
 https://ruslan379.github.io/course-fe-html-css/lesson-FE3_08/images/methods-push-pop-unshift-shift.jpg`);//! Метод push()
console.warn(`Метод push(): 
 https://ruslan379.github.io/course-fe-html-css/lesson-FE3_08/images/push.png`);const o=[];console.log("array:",o);//! []
console.log(". . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .");let e=o.push("first");console.log('array.push("first"):',o);//! ['first']
console.log("push:",e);//! 1
console.log(". . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .");e=o.push("second");console.log('array.push("second"):',o);//! ['first', 'second']
console.log("push:",e);//! 2
console.log(". . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .");e=o.push("third");console.log('array.push("third"):',o);//! ['first', 'second', 'third']
console.log("push:",e);//! 3
console.log(". . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .");e=o.push("fourth");console.log('array.push("fourth"):',o);//! ['first', 'second', 'third', 'fourth']
console.log("push:",e);//! 4
console.log(". . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .");e=o.push("fifth");console.log('array.push("fifth"):',o);//! ['first', 'second', 'third', 'fourth', 'fifth']
console.log("push:",e);//! 5
console.log("-------------------------------------------------------------------------------");//! Метод pop()
console.warn(`Метод pop(): 
 https://ruslan379.github.io/course-fe-html-css/lesson-FE3_08/images/pop.png`);console.log("array:",o);//! ['first', 'second', 'third', 'fourth', 'fifth']
console.log(". . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .");let l=o.pop();console.log("array.pop():",o);//! ['first', 'second', 'third', 'fourth']
console.log("pop:",l);//! 'fifth'
console.log(". . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .");l=o.pop();console.log("array.pop():",o);//! ['first', 'second', 'third']
console.log("pop:",l);//! 'fourth'
console.log(". . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .");l=o.pop();console.log("array.pop():",o);//! ['first', 'second']
console.log("pop:",l);//! 'third'
console.log(". . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .");l=o.pop();console.log("array.pop():",o);//! ['first']
console.log("pop:",l);//! 'second'
console.log(". . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .");l=o.pop();console.log("array.pop():",o);//! []
console.log("pop:",l);//! 'first'
console.log(". . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .");l=o.pop();console.log("array.pop():",o);//! []
console.log("pop:",l);//! undefined
console.log("-------------------------------------------------------------------------------");//! Метод unshift()
console.warn("Метод unshift():");console.log("array:",o);//! []
console.log(". . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .");let c=o.unshift("fifth");console.log('array.unshift("fifth"):',o);//! ['fifth']
console.log("unshift:",c);//! 1
console.log(". . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .");c=o.unshift("fourth");console.log('array.unshift("fourth"):',o);//! ['fourth', 'fifth']
console.log("unshift:",c);//! 2
console.log(". . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .");c=o.unshift("third");console.log('array.unshift("third"):',o);//! ['third', 'fourth', 'fifth']
console.log("unshift:",c);//! 3
console.log(". . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .");c=o.unshift("second");console.log('array.unshift("second"):',o);//! ['second', 'third', 'fourth', 'fifth']
console.log("unshift:",c);//! 4
console.log(". . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .");c=o.unshift("first");console.log('array.unshift("first"):',o);//! ['first', 'second', 'third', 'fourth', 'fifth']
console.log("unshift:",c);//! 5
console.log("-------------------------------------------------------------------------------");//! Метод shift()
console.warn("Метод shift():");console.log("array:",o);//! ['first', 'second', 'third', 'fourth', 'fifth']
console.log(". . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .");let s=o.shift();console.log("array.shift():",o);//! ['second', 'third', 'fourth', 'fifth']
console.log("shift:",s);//! 'first'
console.log(". . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .");s=o.shift();console.log("array.shift():",o);//! ['third', 'fourth', 'fifth']
console.log("shift:",s);//! 'second'
console.log(". . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .");s=o.shift();console.log("array.shift():",o);//! ['fourth', 'fifth']
console.log("shift:",s);//! 'third'
console.log(". . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .");s=o.shift();console.log("array.shift():",o);//! ['fifth']
console.log("shift:",s);//! 'fourth'
console.log(". . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .");s=o.shift();console.log("array.shift():",o);//! []
console.log("shift:",s);//! 'fifth'
console.log(". . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .");s=o.shift();console.log("array.shift():",o);//! []
console.log("shift:",s);//! undefined
console.log("-------------------------------------------------------------------------------");const y="Mango";console.log("string:",y);const a=y.split("");console.log('string.split(""):',a);//! ['M', 'a', 'n', 'g', 'o']
console.log("Що це?:",typeof a);console.log(". . . . . . . . . . . . . . . . . . . . . . . . .");const A=a.join("");console.log("перетворення на рядок:",A);console.log(". . . . . . . . . . . . . . . . . . . . . . . . .");const w=A.split("");w.push(1);console.log('arrToString2.split("")',w);console.log("stringToArr1:",a);console.log(". . . . . . . . . . . . . . . . . . . . . . . . .");console.log("порівняння рядків:",y===A);//! true 
console.log("порівняння масивів :",a===w);//! false
//! 5.Метод slice()
console.warn(`Метод slice(): 
 https://ruslan379.github.io/course-fe-html-css/lesson-FE3_08/images/slice.png`);const n=["Mango","Ajax","Poly","Kiwi"];console.log("clients:",n);//! ['Mango', 'Ajax', 'Poly', 'Kiwi']
const b=n.slice(1,3);console.log("clients.slice(1, 3):",b);//! ['Ajax', 'Poly']
console.log("--------------------------------------------------------------");const S=n.slice();console.log("clients.slice():",S);//! ['Mango', 'Ajax', 'Poly', 'Kiwi']
console.log("clientsSliceAll.push(2):",S.push(2));console.log("clientsSliceAll:",S);console.log("clients:",n);console.log("--------------------------------------------------------------");const k=n.slice(1);console.log("clients.slice(1):",k);//! ['Ajax', 'Poly', 'Kiwi']
console.log(". . . . . . . . . . . . . . . . . . . . . . . . . . . . .");const v=n.slice(3);console.log("clients.slice(3):",v);//! ['Kiwi']
console.log("--------------------------------------------------------------");const E=n.slice(void 0,2);console.log("clients.slice(undefined, 2):",E);//! ['Mango', 'Ajax']
console.log(". . . . . . . . . . . . . . . . . . . . . . . . . . . . .");const F=n.slice(void 0,3);console.log("clients.slice(undefined, 3):",F);//! ['Mango', 'Ajax', 'Poly']
console.log("--------------------------------------------------------------");const O=n.length;console.log("clients.length:",O);//! 4
console.log(". . . . . . . . . . . . . . . . . . . . . . . . . . . . .");const T=n.slice(-3,-1);console.log("clients.slice(-3, -1):",T);//! ['Ajax', 'Poly']
console.log(". . . . . . . . . . . . . . . . . . . . . . . . . . . . .");const B=n.slice(1,3);console.log("clients.slice(1, 3):",B);//! ['Ajax', 'Poly']
console.log("--------------------------------------------------------------");//! Метод splice()
//! Видалення елементів масиву за допомогою splice()
console.warn("splice() - видалення елементів масиву:");const m=[10,20,30,40,50];console.log("scores:",m);//! [10, 20, 30, 40, 50]
const J=m.splice(1,3);console.log("scores.splice(1, 3) --> scores:",m);//! [10, 50]
console.log("deletedScores:",J);//! [20, 30, 40]
console.log("-----------------------------------------------------------");//! Додавання елементів в масив за допомогою splice()
console.warn("splice() - додавання елементів в масив:");const C=["red","green","blue"];console.log("colors:",C);//! ['red', 'green', 'blue']
const K=C.splice(2,0,"yellow","pink");console.log('colors.splice(2, 0, "yellow", "pink") --> colors:',C);//! ['red', 'green', 'yellow', 'pink', 'blue']
console.log("colorsAdding:",K);//! []
console.log("-----------------------------------------------------------");//! Заміна елементів в масиві за допомогою splice()
console.warn("splice() - заміна елементів в масиві:");const i=["C","C++","Java","JavaScript"];console.log("languages:",i);//! ['C', 'C++', 'Java', 'JavaScript']
let p=i.splice(1,1,"Python");console.log('languages.splice(1, 1, "Python") --> languages:',i);//! ['C', 'Python', 'Java', 'JavaScript']
console.log("languagesReplacing:",p);//! []
console.log(". . . . . . . . . . . . . . . . . . . . . . . . . . . . . .");p=i.splice(2,1,"C#","Swift","Go");console.log('languages.splice(2, 1, "C#", "Swift", "Go") --> languages:',i);//! ['C', 'Python', 'C#', 'Swift', 'Go', 'JavaScript']
console.log("languagesReplacing:",p);//! []
console.log(". . . . . . . . . . . . . . . . . . . . . . . . . . . . . .");p=i.splice(2,3,"C Sharp");console.log('languages.splice(2, 3, "C Sharp") --> languages:',i);//! ['C', 'Python', 'C Sharp', 'JavaScript']
console.log("languagesReplacing:",p);//! []
console.log("-----------------------------------------------------------");//! 7.Метод concat()
const f=["Mango","Ajax","Poly","Kiwi"];console.log("oldClients:",f);//! ['Mango', 'Ajax', 'Poly', 'Kiwi']
const d=["Monkong","Singu"];console.log("newClients:",d);//! ['Monkong', 'Singu']
console.log(". . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .");const R=f.concat(d);console.log("oldClients.concat(newClients):",R);//! ['Mango', 'Ajax', 'Poly', 'Kiwi', 'Monkong', 'Singu']
console.log(". . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .");const _=d.concat(f);console.log("newClients.concat(oldClients):",_);//! ['Monkong', 'Singu', 'Mango', 'Ajax', 'Poly', 'Kiwi']
console.log(". . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .");console.log("oldClients:",f);//! ['Mango', 'Ajax', 'Poly', 'Kiwi']
console.log("newClients:",d);//! ['Monkong', 'Singu']
console.log("--------------------------------------------------------------");
