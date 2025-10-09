import"./modulepreload-polyfill-3cfb730f.js";//! Визначення об'єкта
//! Створення об'єкта
console.warn("Створення об'єкта:");const k=[2,21,34,89,144],L=k[1];console.log(L);for(let o=0;o<k.length;o++){const t=k[o];console.log(`${o}: ${t}`)}console.log("array:",k);console.log(". . . . . . . . . . . . . . . . . . . . . . . .");let r={0:2,1:21,2:34,3:89,4:144};for(const o in r){console.log(`${o}: ${r[o]}`);//! ✅
}r={0:2,1:21,2:34,3:89,4:144};console.log("object:",r);console.log("typeof object:",typeof r);//! object
console.log("typeof null:","object");//! object
console.log(". . . . . . . . . . . . . . . . . . . . . . . .");const p={перший:2,другий:21,третій:34,четвертий:89,"п'ятий":144};console.log("object2:",p);console.log("bject.keys(object2):",Object.keys(p));//! ['перший', 'другий', 'третій', 'четвертий', "п'ятий"]
console.log(". . . . . . . . . . . . . . . . . . . . . . . .");const B={"п'ятий":144,четвертий:89,перший:2,третій:34,другий:21};console.log("object3:",B);console.log("bject.keys(object3):",Object.keys(B));//! ["п'ятий", 'четвертий', 'перший', 'третій', 'другий']
//! Послідовність запису властивостей може бути будь якою!
console.log(". . . . . . . . . . . . . . . . . . . . . . . .");const s=["adventure2","historical prose2"],y={title:"The Last Kingdom",author:"Bernard Cornwell",genres:["historical prose","adventure"],genres2:s,isPublic:!0,rating:8.38};console.log("book:",y);console.log("typeof book:",typeof y);//! object
console.log("typeof null:","object");console.log("----------------------------------------------------------------------------------------------------------");//! Доступ до властивостей
console.warn("Доступ до властивостей (var.1):");const c={title:"The Last Kingdom",author:"Bernard Cornwell",genres:["historical prose","adventure"],genres2:s,isPublic:!0,rating:8.38},P=c.title;console.log('book1["title"]:',P);//! 'The Last Kingdom'
const $=c.genres;console.log('book1["genres"]:',$);//! ['historical prose', 'adventurs']
const N=c.genres2;console.log('book1["genres2"]:',N);//! ['adventure2', 'historical prose2']
const H=c.price;console.log('book1["price"]:',H);//! undefined
const A="author",O=c[A];console.log("bookAuthor1:",O);//! 'Bernard Cornwell'
console.log(". . . . . . . . . . . . . . . . . . . . . . . .");console.warn("Доступ до властивостей (var.2):");const n={title:"The Last Kingdom",author:"Bernard Cornwell",genres:["historical prose","adventure"],genres2:s,isPublic:!0,rating:8.38},W=n.title;console.log("book2.title:",W);//! 'The Last Kingdom'
const _=n.genres;console.log("book2.genres:",_);//! ['historical prose', 'adventurs']
const D=n.genres2;console.log("book2.genres2:",D);//! ['adventure2', 'historical prose2']
const I=n.price;console.log("book2.price:",I);//! undefined
const M=n.propKey2;console.log("book2.propKey2:",M);//! undefined
console.log(". . . . . . . . . . . . . . . . . . . . . . . .");//! Звернення (доступ) до вкладених властивостей
console.warn("Звернення (доступ) до вкладених властивостей:");const S=n.genres2[0];console.log("book2.genres2[0]:",S);//! 'adventure2'
const x=n.genres[1];console.log("book2.genres[1]:",x);//! 'adventure'
console.log("----------------------------------------------------------------------------------------------------------");//! Видалення властивостей
console.warn("Видалення властивостей:");const w={title:"The Last Kingdom",author:"Bernard Cornwell",genres:["historical prose","adventure"],genres2:s,isPublic:!0,rating:8.38};delete w.genres2;console.log("book3:",w);console.log("----------------------------------------------------------------------------------------------------------");//! Зміна значення властивості
console.warn("Зміна значення властивостій:");const b={title:"The Last Kingdom",author:"Bernard Cornwell",genres:["historical prose","adventure"],genres2:s,isPublic:!0,rating:8.38};b.rating=9;b.isPublic=!1;b.genres.push("drama");console.log("book4:",b);console.log("----------------------------------------------------------------------------------------------------------");//! Створення (додавання) властивостей
console.warn("Створення (додавання ) властивостей:");const u={title:"The Last Kingdom",author:"Bernard Cornwell",genres:["historical prose","adventure"],genres2:s,isPublic:!0,rating:8.38},E=["ua","ru"];u.pageCount=836;u.originalLanguage="en";u.bookTranslations=E;console.log("book5:",u);console.log("----------------------------------------------------------------------------------------------------------");//! Обчислювані властивості
console.warn("Обчислювані властивості:");const v="name1",g={age1:60};g[v]="Juliette Binoche";console.log("user1[keyName1]:",g[v]);//! 'Juliette Binoche'
console.log("user1.keyName1:",g.keyName1);//! undefined
console.log("user1.name1:",g.name1);//! 'Juliette Binoche'
console.log("user1:",g);//! {age1: 60, name1: 'Juliette Binoche'}
console.log(". . . . . . . . . . . . . . . . . . . . . . . .");const F="name2",T={age2:60,[F]:"Russell Crowe"};console.log("user2.name2:",T.name2);//! 'Russell Crowe'
console.log("user2:",T);//! {age2: 60, name2: 'Russell Crowe'}
console.log("----------------------------------------------------------------------------------------------------------");//! Короткі властивості
console.warn("Короткі властивості:");const J="Anthony Hopkins",R=87,d={name3:J,age3:R};console.log("user3.name3:",d.name3);//! 'Anthony Hopkins'
console.log("user3.age3:",d.age3);//! 87
console.log("user3:",d);//! {name3: 'Anthony Hopkins', age3: 87}
console.log(". . . . . . . . . . . . . . . . . . . . . . . .");const U="Uma Thurman",q=54,h={name4:U,age4:q};console.log("user4.name4:",h.name4);//! 'Uma Thurman'
console.log("user4.age4:",h.age4);//! 54
console.log("user4:",h);//! {name4: 'Uma Thurman', age4: 54}
console.log("----------------------------------------------------------------------------------------------------------");const z=2008,Q="Kyiv",C=["football","walking"];console.log(C);const e={name:"Miroslav",dateOfBirtd:z};console.log("miroslav:",e);e.age=16;console.log("miroslav:",e);e.placeBorn=Q;console.log("miroslav:",e);e.myHobby=C;console.log("miroslav:",e);delete e.placeBorn;console.log("miroslav:",e);//! Методи об'єкта
const f={books:["The Last Kingdom","Dream Guardian"],getBooks(){console.log("✅ Цей метод буде повертати всі книги - властивість books"),console.log("✅ books:",f.books)},addBook(o){console.log(`✅ Цей метод буде додавати ${o} у властивість(масив) books`)}};f.getBooks();//! 'Цей метод буде повертати всі книги - властивість books'
f.addBook("НОВА КНИГА");//! 'Цей метод буде додавати НОВА КНИГА у властивість(масив) books'
console.log(". . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .");const V=["The Last Kingdom-2","Dream Guardian-2"];function X(){console.log("🚫 Цей метод буде повертати всі книги - властивість books2"),console.log("🚫 books2:",V)}function Y(o){console.log(`🚫 Цей метод буде додавати ${o} у властивість(масив) books2`)}X();//! 'Цей метод буде повертати всі книги - властивість books'
Y("НОВА КНИГА-2");//! 'Цей метод буде додавати НОВА КНИГА у властивість(масив) books2'
console.log("---------------------------------------------------------------------");//! Доступ до властивостей об'єкта в методах через this
const j={books:["The Last Kingdom"],getBooks(){console.log("🛑 books:",j.books),console.log(this),console.log("✅ books:",this.books)}};j.getBooks();//! {books: Array(1), getBooks: ƒ}
console.log(". . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .");console.warn(`Схема доступу до властивостей об'єкта в методах через this: 
 ${window.location.href.split("/").slice(0,-2).join("/")+"/"}lesson-FE3_11/images/this-keyword.jpg`);const l={books:["The Last Kingdom"],getBooks(){return this.books},addBook(o){this.books.push(o)},removeBook(o){const t=this.books.indexOf(o);this.books.splice(t,1)}};console.log("books_before:",l.getBooks());//! ['The Last Kingdom']
l.addBook("The Mist");l.addBook("Dream Guardian");console.log("books_add:",l.getBooks());//! ['The Last Kingdom', 'The Mist', 'Dream Guardian']
l.removeBook("The Mist");console.log("books_remove:",l.getBooks());//! ['The Last Kingdom', 'Dream Guardian']
console.log("---------------------------------------------------------------------");//! ПРАКТИКА-11 (Урок-11_JS)
console.log("%c [1] ","color: yellow; background-color: #2274A5");console.warn('Функція "Приготування кави":');let a,i,m;//! 1 - функція "Приготування меленої кави"
function Z(){return a="30 грам",console.log("1️⃣ Мелена кава є?",!!a),a}//! 2 - функція "Приготування окропу (гарячої води)".
function oo(){return i="250 мілілітрів",console.log("2️⃣ Окріп (гаряча вода) є?",!!i),i}//! 3 - функція "Приготування кави"
function eo(){return Z()?oo()?(m=a+i,m="✅ Кава готова!",m):"Потрібна гаряча вода!":"Потрібна мелена кава!"}console.log(eo());console.log("--------------------------------------------");//! Код виконаного завдання
console.warn(`Об'ект "Приготування кави":`);const no={makesGroundCoffee(o){return console.log("1️⃣ Мелена кава є?",!!o),o},makesHotWater(o){return console.log("2️⃣ Окріп (гаряча вода) є?",!!o),o},makingCoffee(o,t){const K=this.makesGroundCoffee(o),G=this.makesHotWater(t);return K+G}};console.log(no.makingCoffee("30gram","250 mililiters"));
