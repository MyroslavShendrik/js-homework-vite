import"./modulepreload-polyfill-3cfb730f.js";//! Ітерація по масиву
//! Використання циклу for
console.warn("Використання циклу for:");let e=["Mango","Ajax","Poly"];console.log("clients:",e);//! ['Mango', 'Poly', 'Ajax']
for(let o=0;o<e.length;o+=1)console.log(`clients[${o}]:`,e[o]);console.log("-----------------------------------------");//! Перевизначення елементів масиву
console.warn("Перевизначення елементів масиву за допомогою циклу for:");e=[0,1,2];for(let o=0;o<e.length;o+=1)e[o]=e[o]+o,console.log(`clients[${o}]:`,e[o]);console.log("clients:",e);//! ['Mango0', 'Ajax1', 'Poly2'] або [0, 2, 4]
console.log("---------------------------------------------");//! Використання циклу for...of​
console.warn("Використання циклу for...of​:");e=["Mango","Ajax","Poly"];console.log("clients:",e);//! ['Mango0', 'Ajax1', 'Poly2'] або [0, 2, 4]
for(const o of e)console.log("client:",o);console.log(". . . . . . . .");const i="Java Script";console.log("string:",i);//! 'Java Script'
for(const o of i)console.log("character:",o);console.log("-------------------------------------");//! Оператори break і continue​
console.warn("Оператори break і continue​​:");console.warn("ПРИКЛАД-1 (var.1):");const f=["Mango","Poly","Ajax"];console.log("clients1:",f);//! ['Mango', 'Poly', 'Ajax']
const y="Poly";console.log("clientNameToFind1:",y);//! 'Poly'
let g;for(const o of f){if(o===y){g="Клієнт з таким ім'ям є в базі даних!";break}g="Клієнт з таким ім'ям відсутній в базі даних!"}console.log(g);//! "Клієнт з таким ім'ям є в базі даних!"
console.log(". . . . . . . . . . . . . . . . . . .");console.warn("ПРИКЛАД-1 (var.2):");const m=["Mango","Poly","Ajax"];console.log("clients2:",m);//! ['Mango', 'Poly', 'Ajax']
const s="Ajax";console.log("clientNameToFind2:",s);//! 'Ajax'
let b="Клієнт з таким ім'ям відсутній в базі даних!";for(const o of m)if(o===s){b="Клієнт з таким ім'ям є в базі даних!",console.log(`Клієнт з ім'ям ${s} є в базі даних!`);break}console.log(b);//! "Клієнт з таким ім'ям є в базі даних!"
console.log("-------------------------------------");console.warn("ПРИКЛАД-2:");const r=[1,3,14,18,4,7,29,6,34];console.log("Масив чисел:",r);//! [1, 3, 14, 18, 4, 7, 29, 6, 34]
const t=15;console.log("Число для порівняння:",t);//! 15
for(let o=0;o<r.length;o+=1){if(r[o]<t)continue;console.log(`Число більше за ${t}: ${r[o]}`);//! 18, 29, 34
}//! Багатовимірні масиви
const n=[[1,2,3],[4,5,6],[7,8,9]];console.log("Багатовимірний масив [matrix]:",n);//! [Array(3), Array(3), Array(3)]
console.log("matrix[0][0]:",n[0][0]);//! 1
console.log("matrix[1][1]:",n[1][1]);//! 5
console.log("matrix[2][2]:",n[2][2]);//! 9
console.log("----------------------------------------------");let u=0;for(let o=0;o<n.length;o+=1){console.log(`Підмасив матриці matrix[${o}]:`,n[o]);for(let c=0;c<n[o].length;c+=1)console.log(`Елемент підмасив матриці matrix[${o}][${c}]:`,n[o][c]),u+=n[o][c]}console.log("Сума всіх елементів, <total> = ",u);//! 45
//! ПРАКТИКА-7 (Урок-07_JS)
console.log("%c [1] ","color: yellow; background-color: #2274A5");console.log("%c [1-1] ","color: #2274A5; background-color: yellow");//! Код виконаного завдання
const l=[6,"Mango",9,"Poly",3];console.log("array:",l);console.log("array[0]:",l[0]);console.log("array[1]:",l[1]);console.log("array[2]:",l[2]);console.log("array[3]:",l[3]);console.log("array[4]:",l[4]);console.log("-------------------------------------------");console.log("%c [1-2] ","color: #2274A5; background-color: yellow");//! Код виконаного завдання
l[1]+=1;l[2]+=1;console.log("array[1]:",l[1]);console.log("array[2]:",l[2]);console.log("array:",l);console.log("-------------------------------------------");console.log("%c [1-3] ","color: #2274A5; background-color: yellow");//! Код виконаного завдання
console.log("array.length:",l.length);console.log("-------------------------------------------");console.log("%c [1-4] ","color: #2274A5; background-color: yellow");//! Код виконаного завдання
console.log("array.length - 1 :",l.length-1);console.log("array[[array.length- 1]:",l[l.length-1]);console.log("-------------------------------------------");console.log("%c [2-1] ","color: #2274A5; background-color: yellow");//! Код виконаного завдання
for(let o=0;o<l.length;o+=1)console.log(`index: ${o} array: ${l[o]}`);console.log("array:",l);console.log("-------------------------------------------");console.log("%c [2-2] ","color: #2274A5; background-color: yellow");//! Код виконаного завдання
for(let o=0;o<l.length;o++)(o===1||o===2)&&(l[o]+=1,console.log(`array[1] ${l[o]}`));console.log("array:",l);console.log("-------------------------------------------");console.log("%c [2-3] ","color: #2274A5; background-color: yellow");//! Код виконаного завдання
let a=0;for(let o of l)console.log(`index: ${a} item ${o}`),a+=1;console.log("-------------------------------------------");console.log("%c [2-4] ","color: #2274A5; background-color: yellow");//! Код виконаного завдання
for(let o of l)if(typeof o=="number"){console.log(`item: ${o}`);break}console.log("-------------------------------------------");console.log("%c [2-5] ","color: #2274A5; background-color: yellow");//! Код виконаного завдання
for(let o of l)if(typeof o=="string"){console.log(`item: ${o}`);break}console.log("-------------------------------------------");console.log("%c [2-6] ","color: #2274A5; background-color: yellow");//! Код виконаного завдання
for(let o of l)typeof o=="number"&&console.log(`item: ${o}`);console.log("-------------------------------------------");console.log("%c [2-7] ","color: #2274A5; background-color: yellow");//! Код виконаного завдання
for(let o of l)typeof o=="string"&&console.log(`item: ${o}`);console.log("-------------------------------------------");console.log("%c [2-8] ","color: #2274A5; background-color: yellow");//! Код виконаного завдання
console.log("arrayBefore:",l);for(let o of l){if(typeof o=="number"){o=String(o)+1,console.log("item:",o);continue}console.log("item:",o)}console.log("arrayAfter:",l);console.log("-------------------------------------------");console.log("%c [2-9] ","color:rgb(18, 107, 158); background-color: yellow");//! Код виконаного завдання
console.log("старий масив:",l);for(let o=0;o<l.length;o+=1){if(typeof l[o]=="number"){l[o]=String(l[o])+1,console.log(`array[${o}]:`,l[o]);continue}console.log(`array[${o}]:`,l[o])}console.log("Оновлений масив:",l);console.log("-----------------------------------------------------");
