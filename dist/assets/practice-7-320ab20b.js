import"./modulepreload-polyfill-3cfb730f.js";//! Масиви. Створення масиву
console.warn("Створення масиву:");const t=[];console.log("arrayEmpty:",t);//! []
console.log("-----------------------------------------");const e=["Mango","Poly","Ajax"];console.log("clients:",e);//! ['Mango', 'Poly', 'Ajax']
console.log("typeof clients:",typeof e);//! object
console.log("typeof null:","object");//! object
console.log("-----------------------------------------");//! Доступ до елементів
console.warn(`Доступ до елементів: 
 https://ruslan379.github.io/course-fe-html-css/lesson-FE3_07/images/indexing-array-elements.jpg`);const o=["Mango","Poly","Ajax"];console.log("newClients:",o);//! ['Mango', 'Poly', 'Ajax']
console.log("newClients[0]:",o[0]);//! Mango
console.log("newClients[1]:",o[1]);//! Poly
console.log("newClients[2]:",o[2]);//! Ajax
console.log("---------------------------------------------------------");const g=[1,2,3,4,5,6,7];console.log("newNumbers:",g);//! [1, 2, 3, 4, 5, 6, 7]
const c=[!0,!1,!0,!1];console.log("newBooleans:",c);//! [true, false, true, false]
const i=["Mango",7,!1,void 0,null];console.log("differentDataTypes:",i);//! ['Mango', 7, false, undefined, null]
const l="Mango";console.log("string:",l);const a=l[0];console.log("stringEl1:",a);const r=l.length;console.log("stringLength:",r);o[0]="Kiwi";console.log("newClients:",o);const w=o.length;console.log("newClientsLength:",w);o.length=5;console.log("newClients:",o);console.log("newClients[4]:",o[4]);o.length=2;console.log("newClients:",o);//! Індекс останнього елемента
console.warn("Індекс останнього елемента:");const n=["Mango","Poly","Ajax"];console.log("allMyClients:",n);//! ['Mango', 'Poly', 'Ajax']
const s=n.length-1;console.log("Останній індекс:",s);//! 2
console.log("Останній єлемент:",n[s]);//! "Ajax"
console.log("Останній єлемент:",n[n.length-1]);//! "Ajax"
console.log("---------------------------------------------------------");
