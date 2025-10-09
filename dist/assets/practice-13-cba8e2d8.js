import"./modulepreload-polyfill-3cfb730f.js";//! Перебирання об'єкта
//! Цикл for...in
console.warn("Приклад-1:");const t={0:2,1:21,2:34,thirt:89,4:144};console.log("object:",t);console.log("`  `  `  `  `  `  `  `  `  `  `  `  `  `  `  `");console.log(t.thirt);for(const o in t){console.log(`${o}: ${t[o]}`);//! ✅
}console.log(". . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .");console.warn("Приклад-21:");const s={title:"The Last Kingdom",author:"Bernard Cornwell",genres:["historical prose","adventure"],rating:8.38};console.log("book:",s);console.log("`  `  `  `  `  `  `  `  `  `  `  `  `  `  `  `  `  `");for(const o in s){//! Ключ
console.log("key:",o);//! Значення властивості з таким ключем
console.log("book[key]:",s[o]),console.log("`  `  `  `  `  `  `  `  `  `  `  `  `  `  `  `  `  `")}console.log("--------------------------------------------------------------------------------------------------");//! Методи об'єкта Object
//! Додавання методу (методів) -> Object.assign
console.warn("Object.assign - додавання методу (методів):");const l={books:["The Last Kingdom"],getBooks(){return this.books},addBook(o){this.books.push(o)},removeBook(o){const n=this.books.indexOf(o);this.books.splice(n,1)}};console.log("books_before:",l);Object.assign(l,{getBooks(){return this.books},addBook(o){this.books.push(o)},removeBook(o){const n=this.books.indexOf(o);this.books.splice(n,1)}});console.log("✅books_after-2:",l);console.log(". . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . ");l.addBook("The Mist");l.addBook("Dream Guardian");console.log("books_add:",l.getBooks());//! ['The Last Kingdom', 'The Mist', 'Dream Guardian']
l.removeBook("The Mist");console.log("books_remove:",l.getBooks());//! ['The Last Kingdom', 'Dream Guardian']
console.log("------------------------------------------------------------------------------------------------");//! Масив з ключами об'єкта -> Object.keys()
console.warn("Object.keys() - масив з ключами об'єкта:");let h={title:"The Last Kingdom",author:"Bernard Cornwell",genres:["historical prose","adventure"],rating:8.38};console.log("book:",h);let r=Object.keys(h);console.log("Object.keys(book):",r);//! ['title', 'author', 'genres', 'rating']
console.log(". . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . ");for(const o of r)console.log(`${o}: ${s[o]}`);console.log("------------------------------------------------------------------------------------------------");//! Масив зі значеннями властивостей -> Object.values()
console.warn("Object.values() - масив зі значеннями властивостей:");console.warn("Приклад використання Object.values():");const u={apples:6,grapes:3,bread:4,cheese:7};console.log("goods:",u);const w=Object.values(u);console.log("Object.values(goods):",w);//! [6, 3, 4, 7]
let y=0;for(const o of w)y+=o;console.log("total:",y);//! 20
console.log("------------------------------------------------------------------------------------------------");//! Масив масивів з ключами та значеннями їх властивостей -> Object.entries()
console.warn("Object.entries() - масив зі значеннями властивостей:");s={title:"The Last Kingdom",author:"Bernard Cornwell",rating:8.38};console.log("book:",s);r=Object.keys(s);console.log("Object.keys(book):",r);//! ['title', 'author', 'genres', 'rating']
values=Object.values(s);console.log("Object.values(book):",values);//! ['The Last Kingdom', 'Bernard Cornwell', 8.38]
const C=Object.entries(s);console.log("Object.entries(book):",C);//! [["title", "The Last Kingdom"], ["author", "Bernard Cornwell"], ["rating", 8.38]]
console.log("------------------------------------------------------------------------------------------------");//! Метод Object.create()
console.warn("Метод Object.create():");const O={legs:4};console.log("animal:",O);//! {legs: 4}
const e=Object.create(O);e.name="Манго";console.log("dog:",e);//! {name: 'Манго'}
console.log("dog.name:",e.name);//! 'Манго'
console.log("dog.legs:",e.legs);//! 4
console.log(". . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . ");//! Метод hasOwnProperty()
console.warn("Метод hasOwnProperty():");console.log('"name" in dog:',"name"in e);//! true
console.log('"legs" in dog:',"legs"in e);//! true
console.log("`  `  `  `  `  `  `  `");for(const o in e)console.log(`${o}: ${e[o]}`);console.log(". . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . ");console.log('dog.hasOwnProperty("name"):',e.hasOwnProperty("name"));//! true
console.log('dog.hasOwnProperty("legs"):',e.hasOwnProperty("legs"));//! false
console.log("`  `  `  `  `  `  `  `  `  `  `  `");for(const o in e)if(e.hasOwnProperty(o)){console.log(`${o}: ${e[o]}`);//! name: Манго
}console.log("------------------------------------------------------------------------------------------------");//! Операції spread і rest
//! Операція spread (розпорошення, розпилення або передача аргументів)
//! 1️⃣ Операція spread. Розпилення аргументів (передача аргументів)
console.warn(`Операція spread. 
  1️⃣ Розпилення аргументів (передача аргументів):`);let i=[18,14,12,21,17,29],p=Math.min(i);console.log("❌ min:",p);//! NaN
i=[18,14,12,21,17,29];p=Math.min(...i);console.log("✅ min:",p);//! 12
console.log(". . . . . . . . . . . . . . . . . . . . . . . . . . . . .");//! 2️⃣ Операція spread. Cтворення нового масиву (копія масиву)
console.warn(`Операція spread. 
  2️⃣ Cтворення нового масиву (копія масиву):`);const c=[14,-4,25,8,11];console.log("temps:",c);//! [14, -4, 25, 8, 11]
const k=c;console.log("tempsCopy:",k);k[0]=144;console.log("temps:",c);console.log("tempsCopy:",k);const b=[...c];console.log("copyTemps:",b);//! [144, -4, 25, 8, 11]
console.log("`  `  `  `  `  `  `  `  `  `  `  `  `");b[0]=0;console.log("temps:",c);//! [144, -4, 25, 8, 11]
console.log("copyTemps:",b);//! [0, -4, 25, 8, 11]
console.log(". . . . . . . . . . . . . . . . . . . . . . . . . . . . .");const d=[-14,-25,-11];console.log("lastWeekTemps:",d);//! [-14, -25, -11]
const m=[23,17,18];console.log("currentWeekTemps:",m);//! [23, 17, 18]
const N=d.concat(m);console.log("allTempsConcat",N);const $=[...d,...m];console.log("allTemps:",$);//! [-14, -25, -11, 23, 17, 18]
console.log(". . . . . . . . . . . . . . . . . . . . . . . . . . . . .");//! 3️⃣ Операція spread. Cтворення нового об'єкта (копія об'єкта)
console.warn(`Операція spread. 
  2️⃣ Cтворення нового об'єкта (копія об'єкта):`);const f={propA:5,propB:10},j={propC:15},P={...f,...j};console.log("third1:",P);//! {propA: 5, propB: 10, propC: 15}
const x={...j,...f};console.log("third2:",x);//! {propC: 15, propA: 5, propB: 10}
const T={propA:5,propB:10,propC:50},B={propC:15,propD:20},K={...T,...B};console.log("thirdNew:",K);//! {propA: 5, propB: 10, propC: 15, propD: 20}
const L={...B,...T};console.log("fourthNew:",L);//! {propA: 5, propB: 10, propC: 50, propD: 20}
console.log("---------------------------------------------------------");//! 🅰️ Операція rest (збирання всіх аргументів функції)
console.warn(`🅰️ Операція rest 
  (збирання всіх аргументів функції):`);function g(...o){console.log("args:",o)}g(1,2);g(1,2,3);g(1,2,3,4);g([1,2,3,4]);//! масив  масивів
console.log(". . . . . . . . . . . . . . . . . . . . . . . . . . . . .");//! 🅱️ Операція rest (збирання частини аргументів функції)
console.warn(`🅱️ Операція rest 
  (збирання частини аргументів функції):`);function a(o,n,...v){console.log("firstNumber:",o),console.log("secondNumber:",n),console.log("otherArgs:",v),console.log("`  `  `  `  `  `  `  `  `")}a(1,2);a(1,2,3);a(1,2,3,4);a([1,2,3,4]);//! ❓❓❓
console.log("---------------------------------------------------------");
