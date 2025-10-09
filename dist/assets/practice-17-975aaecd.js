var J=Object.defineProperty;var q=(e,o,l)=>o in e?J(e,o,{enumerable:!0,configurable:!0,writable:!0,value:l}):e[o]=l;var P=(e,o,l)=>(q(e,typeof o!="symbol"?o+"":o,l),l),N=(e,o,l)=>{if(!o.has(e))throw TypeError("Cannot "+l)};var r=(e,o,l)=>(N(e,o,"read from private field"),l?l.call(e):o.get(e)),a=(e,o,l)=>{if(o.has(e))throw TypeError("Cannot add the same private member more than once");o instanceof WeakSet?o.add(e):o.set(e,l)},s=(e,o,l,c)=>(N(e,o,"write to private field"),c?c.call(e,l):o.set(e,l),l);var S=(e,o,l)=>(N(e,o,"access private method"),l);import"./modulepreload-polyfill-3cfb730f.js";//! Контекст виконання функції
console.warn("Контекст виконання функції:");console.log(`%c
    🔴 Петро біжить швидко, тому що ❗️Петро❗️ намагається зловити поїзд.
    `,"color: blue; font-size: 16px");const v={username:"Petro",showName(){console.log(v.username)}};v.showName();console.log(". . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .");console.log(`%c
    🟢 Петро біжить швидко, тому що ✅він✅ намагається зловити поїзд.
    `,"color: blue; font-size: 16px");const G={username:"Petro",showName(){console.log(this.username)}};G.showName();console.log("---------------------------------------------------------------------------------------------");//! Правила визначення this
console.warn("❗️Правила визначення this❗️:");console.log(`%c
    Значення this визначається тим,
    як викликається функція,
    а не тим, де вона була оголошена.
    `,"color: red; font-size: 16px");//! this у глобальній області видимості
console.warn("this у глобальній області видимості:");function H(){console.log("this in function foo():",this)}H();//! window без "use strict" або undefined з "use strict"
console.log("---------------------------------------------------------------------------------------------");//! this в методі об'єкта
console.warn("this в методі об'єкта:");const F={username:"Petro",showThis(){console.log(this)},showName(){console.log(this.username)}};F.showThis();//! {username: "Petro", showThis: ƒ, showName: ƒ}
F.showName();//! 'petro'
console.log(". . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .");console.warn("Приклад визначення this в методі об'єкта:");function j(){console.log("this in showThis: ",this)}j();//! this in showThis: undefined або Window
console.log("`  `  `  `  `  `  `  `  `  `  `");const _={username:"Mango"};console.log("user1:",_);//! {username: 'Mango'}
console.log("`  `  `  `  `  `  `  `  `  `  `");_.showContext=j;console.log("user1:",_);//! {username: 'Mango', showContext: ƒ}
console.log("`  `  `  `  `  `  `  `  `  `  `");_.showContext();//! this in showThis: {username: "Mango", showContext: ƒ}
console.log("---------------------------------------------------------------------------------------------");//! Приклад визначення this в методі об'єкта всередині звичайної функції (не стрілочної)
console.warn("Приклад визначення this в методі об'єкта всередині звичайної функції (не стрілочної):");const O={username:"Mango",showThis2(){console.log("this in showThis2: ",this);//! {username: 'Mango', showThis2: ƒ}
console.log("username in showThis2: ",this.username);//! Mango
console.log("`  `  `  `  `  `  `  `  `  `  `");function e(){console.log("this in function foo():",this);//! undefined
console.log("username in function foo(): ",O.username);//! ✅ Mango
}e();//! window без "use strict" або undefined з "use strict"
}};console.log("user2:",O);//! {username: 'Mango', showThis2: ƒ}
console.log("`  `  `  `  `  `  `  `  `  `  `");O.showThis2();//! this in showThis2: {username: 'Mango', showThis2: ƒ}
//! username in showThis2: Mango
//! `  `  `  `  `  `  `  `  `  `  `
//! this in function foo(): undefined
//! ❌ Cannot read properties of undefined (reading 'username')
//! username in function foo(): Mango
console.log("---------------------------------------------------------------------------------------------");//! Правила визначення this у стрілочних функціях
console.warn("❗️Правила визначення this у стрілочних функціях❗️:");console.log(`%c
    Значення this всередині стрілки визначається
    місцем її оголошення, а не місцем виклику,
    і посилається на контекст батьківської функції.
    `,"color: red; font-size: 16px");const z=()=>{console.log("this in showThis: ",globalThis)};z();//! window без "use strict" або undefined з "use strict"
console.log("`  `  `  `  `  `  `  `  `  `  `");const D={username:"Mango"};console.log("user3:",D);//! {username: 'Mango'}
console.log("`  `  `  `  `  `  `  `  `  `  `");D.showContext=z;console.log("user3:",D);//! {username: 'Mango', showContext: ƒ}
console.log("`  `  `  `  `  `  `  `  `  `  `");D.showContext();//! window без "use strict" або undefined з "use strict"
console.log("---------------------------------------------------------------------------------------------");//! Приклад визначення this в методі об'єкта всередині стрілочної функції
console.warn("Приклад визначення this в методі об'єкта всередині стрілочної функції:");const B={username:"Mango",showThis4(){console.log("this in showThis4: ",this);//! {username: 'Mango', showThis4: ƒ}
console.log("username in showThis2: ",this.username);//! Mango
console.log("`  `  `  `  `  `  `  `  `  `  `"),(()=>{console.log("this in function foo():",this);//! {username: 'Mango', showThis4: ƒ}
console.log("username by this in function foo():",this.username);//! Mango
console.log("username in function foo():",B.username);//! Mango
})();//! Mango
}};console.log("user4:",B);//! {username: 'Mango', showThis2: ƒ}
console.log("`  `  `  `  `  `  `  `  `  `  `  `  `  `  `");B.showThis4();//! this in showThis4: {username: 'Mango', showThis4: ƒ}
//! username in showThis2: Mango
//!  `  `  `  `  `  `  `  `  `  `  `
//! this in function foo(): {username: 'Mango', showThis4: ƒ}
//! username by this in function foo(): Mango
//! username in function foo(): Mango
console.log("---------------------------------------------------------------------------------------------");//! this в callback-функціях
console.warn("this в callback-функціях:");console.log(`%c
    ❗️ В callback-функціях контекст не зберігається.
    `,"color: red; font-size: 16px");const L={firstName:"Jacob",lastName:"Mercer",getFullName(){return`${this.firstName} ${this.lastName}`}};console.log(L.getFullName());//! Jacob Mercer
console.warn(`Вирішення цієї проблеми здійснюється за допомогою метода bind() та методів функцій: 
 https://textbook.edu.goit.global/javascript-yk5evp/v2/uk/docs/lesson-09/methods#%D0%BC%D0%B5%D1%82%D0%BE%D0%B4-bind-%D0%B8-%D0%BC%D0%B5%D1%82%D0%BE%D0%B4%D1%8B-%D0%BE%D0%B1%D1%8A%D0%B5%D0%BA%D1%82%D0%B0`);console.log("---------------------------------------------------------------------------------------------");//! Процедурне програмування
console.warn(`Процедурне програмування: 
 ${window.location.href.split("/").slice(0,-2).join("/")+"/"}lesson-FE3_16/images/procedural.png`);const A=3e4,M=10,C=20;console.log(`baseSalary_before: ${A}, overtime: ${M}, rate: ${C},`);const Q=(e,o,l)=>e+o*l;console.log("baseSalary_after =",Q(A,M,C));//! 30200
console.log("--------------------------------------------------------------------------------------");//! Об'єктно-орієнтоване програмування (ООП)
console.warn(`Об'єктно-орієнтоване програмування (ООП): 
 ${window.location.href.split("/").slice(0,-2).join("/")+"/"}lesson-FE3_16/images/oop.png`);const V={baseSalary:3e4,overtime:10,rate:20,getWage(){return this.baseSalary+this.overtime*this.rate}};console.log("baseSalary_OOP =",V.getWage());//! 30200
console.log(`%c
    ООП - це підхід до програмування як до моделювання,
    що вирішує основне завдання
    - структурування інформації з точки зору керованості,
    що суттєво покращує контроль процесу моделювання.
    `,"color: blue; font-size: 18px");console.log("--------------------------------------------------------------------------------------");//! 4.Прототипне наслідування.
console.warn(`Прототипне наслідування: 
 ${window.location.href.split("/").slice(0,-2).join("/")+"/"}lesson-FE3_12/lesson-FE3_12.html`);console.log(`%c
    прихована властивість [[Prototype]]
    у консолі браузера відображається як __proto__
    `,"color: blue; font-size: 18px");//! Прототип (предок) об'єкта: методи Object.create() і isPrototypeOf(dog)
console.warn("Прототип (предок) об'єкта: методи Object.create() і isPrototypeOf(dog):");const $={legs:4};console.log("animal:",$);//! {legs: 4}
const n=Object.create($);n.name="Манго";console.log("dog:",n);//! {name: 'Манго', 🔻 [[Prototype]]: Object ▶️ legs:4}
console.log("animal.isPrototypeOf(dog):",$.isPrototypeOf(n));//! true
console.log("------------------------------------------------------------------------------");//! Алгоритм роботи прототипа об'єкта
console.warn("Алгоритм роботи прототипа об'єкта:");console.log("dog.name:",n.name);//! 'Манго'
console.log("dog.legs:",n.legs);//! 4
console.log("------------------------------------------------------------------------------");//! Метод hasOwnProperty()
console.warn("Метод hasOwnProperty():");console.log("dog:",n);//! {name: 'Манго', 🔻 [[Prototype]]: Object ▶️ legs:4}
console.log("`  `  `  `  `  `  `  `");for(const e in n)console.log(`${e}: ${n[e]}`);console.log(". . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .");console.log('dog.hasOwnProperty("name"):',n.hasOwnProperty("name"));//! true
console.log('dog.hasOwnProperty("legs"):',n.hasOwnProperty("legs"));//! false
console.log("`  `  `  `  `  `  `  `  `  `  `  `");for(const e in n)if(n.hasOwnProperty(e)){console.log(`${e}: ${n[e]}`);//! name: Манго
}console.log(". . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .");const X=Object.keys(n);console.log("dogKeys:",X);//! ['name']
console.log("------------------------------------------------------------------------------");//! Сутності ООП
console.warn("Сутності ООП:");//! 1.Клас
console.warn("1.Клас:");class k{}console.log("User:",k);//! {}
console.log("--------------------------------------------------------------------------------------");//! 2.Екземпляр (об'єкт)
console.warn("2.Екземпляр (об'єкт):");const Y=new k;console.log("mango:",Y);//! {}
const Z=new k;console.log("poly:",Z);//! {}
console.log("--------------------------------------------------------------------------------------");//! 3.Інтерфейс
console.warn("3.Інтерфейс:");class x{}console.log("Auto:",x);//! {}
const oo=new x;console.log("autoFirst:",oo);//! {}
const eo=new x;console.log("autoSecond:",eo);//! {}
console.log("--------------------------------------------------------------------------------------");//! Конструктор класу
console.warn("Конструктор класу:");class U{constructor(o,l){this.name=o,this.email=l}}console.log("User1:",U);//!
console.log("`  `  `  `  `  `  `  `  `  `  `  `  `  `  `  `  `  `  `");const lo=new U("Манго","mango@mail.com");console.log("mango1:",lo);//! User1 {name: 'Манго', email: 'mango@mail.com'}
const no=new U("Поли","poly@mail.com");console.log("poly1:",no);//! User1 {name: 'Поли', email: 'poly@mail.com'}
console.log("---------------------------------------------------------------------------------");const so={name:"Манго",email:"mango@mail.com"};console.log("mango2:",so);//! mango {name: 'Манго', email: 'mango@mail.com'}
//! Об'єкт параметрів
console.warn("Об'єкт параметрів:");class R{constructor({name:o,email:l,phone:c}){this.name=o,this.email=l,this.phone=c}}console.log("User2:",R);//!
console.log("`  `  `  `  `  `  `  `  `  `  `  `  `  `  `  `  `  `  `");const W=new R({name:"Манго",email:"mango@mail.com",phone:"111-11-11"});console.log("mango2:",W);//! User2 {name: 'Манго', email: 'mango@mail.com', phone: '111-11-11'}
const co=new R({name:"Поли",email:"poly@mail.com",phone:"222-22-22"});console.log("poly2:",co);//! User2 {name: 'Поли', email: 'poly@mail.com', phone: '222-22-22'}
console.log("---------------------------------------------------------------------------------");console.log("mango1_before:",mango4);//! User1 {name: 'Манго', email: 'mango@mail.com', phone: '111-11-11'}
console.log("`  `  `  `  `  `  `  `  `  `  `  `  `  `  `  `  `  `  `  `  `  `  `  `  `  `  `  `  `");console.log("email_before:",mango4.getEmail());//! email_before: mango@mail.com
mango4.changeEmail("mango-NEW@mail.com");console.log("email_after:",mango4.getEmail());//! email_after: mango-NEW@mail.com
console.log("mango1_after:",mango4);//! User1 {name: 'Манго', email: 'mango-NEW@mail.com', phone: '111-11-11'}
console.log("---------------------------------------------------------------------------------------");//! Приватні властивості та методи
console.warn("Приватні властивості та методи:");var m,b,I;class T{constructor({name:o,email:l,phone:c}){a(this,b);P(this,"name");a(this,m,void 0);this.name=o,s(this,m,l),this.phone=c}getEmail(){return r(this,m)}changeEmail(o){s(this,m,o)}changePhonePublic(o){S(this,b,I).call(this,o)}}m=new WeakMap,b=new WeakSet,I=function(o){this.phone=o};console.log("User4:",T);//!
console.log("`  `  `  `  `  `  `  `  `  `  `  `  `  `  `  `  `  `  `");const g=new T({name:"Манго",email:"mango@mail.com",phone:"111-11-11"});console.log("mango2_before:",g);//! User2 {name: 'Манго', email: 'mango@mail.com', phone: '111-11-11'}
console.log("`  `  `  `  `  `  `  `  `  `  `  `  `  `  `  `  `  `  `  `  `  `  `  `  `  `  `  `  `");console.log("email_before:",g.getEmail());//! email_before: mango@mail.com
g.changeEmail("mango-NEW@mail.com");console.log("email_after:",g.getEmail());//! email_after: mango-NEW@mail.com
console.log("mango2_after1:",g);//! User2 {name: 'Манго', email: 'mango-NEW@mail.com', phone: '111-11-11'}
console.log(". . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .");g.changePhonePublic("333-33-33");console.log("mango2.phone:",g.phone);//! 333-33-33
console.log("mango2_after2:",g);//! User2 {name: 'Манго', email: 'mango-NEW@mail.com', phone: '333-33-33'}
console.log("---------------------------------------------------------------------------------------");//! Геттери і сеттери
console.warn("Геттери і сеттери:");var t;class K{constructor({name:o,email:l,phone:c}){a(this,t,void 0);this.name=o,s(this,t,l),this.phone=c}getEmail(){return r(this,t)}changeEmail(o){s(this,t,o)}get email(){return r(this,t)}set email(o){if(o===""){console.error("Помилка! Пошта не може бути порожнім рядком!");return}s(this,t,o)}}t=new WeakMap;console.log("User6:",K);//!
console.log("`  `  `  `  `  `  `  `  `  `  `  `  `  `  `  `  `  `  `");const i=new K({name:"Манго",email:"mango@mail.com",phone:"111-11-11"});console.log("mango7_before:",i);//! User3 {name: 'Манго', phone: '111-11-11', #email: 'mango@mail.com'}
console.log("`  `  `  `  `  `  `  `  `  `  `  `  `  `  `  `  `  `  `  `  `  `  `  `  `  `  `  `  `");console.log("email_before1:",i.getEmail());//! email_before: mango@mail.com
W.changeEmail("mango-NEW@mail.com");console.log("email_after1:",i.getEmail());//! email_after: mango-NEW@mail.com
console.log("email_before2:",i.email);//! email_after1: mango-NEW@mail.com
i.email="mango-SET@mail.com";console.log("email_after2:",i.email);//! email_after2: mango-SET@mail.com
console.log("mango3_after:",i);//! User3 {name: 'Манго', phone: '111-11-11', #email: 'mango-SET@mail.com'}
console.log(". . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .");i.email="";//! Помилка! Пошта не може бути порожнім рядком!
console.log("---------------------------------------------------------------------------------------");//! Статичні властивості
console.warn("Статичні властивості:");var E,h;class y{constructor({email:o,role:l}){a(this,E,void 0);a(this,h,void 0);s(this,E,o),s(this,h,l)}get role(){return r(this,h)}set role(o){s(this,h,o)}}E=new WeakMap,h=new WeakMap,P(y,"Roles",{ADMIN:"admin",EDITOR:"editor"});console.log("User4:",T);//!
console.log("`  `  `  `  `  `  `  `  `  `  `  `  `  `  `  `  `  `  `  `  `  `  `");const w=new y({email:"mango@mail.com",role:y.Roles.ADMIN});console.log("mango4_before:",w);//! User4 {#email: 'mango@mail.com', #role: 'admin'}
console.log("`  `  `  `  `  `  `  `  `  `  `  `  `  `  `  `  `  `  `  `  `  `  `");console.log("mango4.Roles:",w.Roles);//! undefined
console.log("User4.Roles:",y.Roles);//! { ADMIN: "admin", EDITOR: "editor" }
console.log("mango4.role:",w.role);//! "admin"
w.role=T.Roles.EDITOR;console.log("mango4.role:",w.role);//! "editor"
console.log("mango4_after:",w);//! User4 {#email: 'mango@mail.com', #role: 'editor'}
console.log("---------------------------------------------------------------------------------------");//! Статичні методи
console.warn("Статичні методи:");var p,d;const f=class f{constructor({email:o}){a(this,d,void 0);s(this,d,o),r(f,p).push(o)}static isEmailTaken(o){return r(f,p).includes(o)}};p=new WeakMap,d=new WeakMap,a(f,p,[]);let u=f;console.log("User5:",u);//!
console.log("`  `  `  `  `  `  `  `  `  `  `  `  `  `  `  `  `");const ao=new u({email:"mango@mail.com"});console.log("mango5:",ao);//! User5 {#email: 'mango@mail.com'}
console.log("`  `  `  `  `  `  `  `  `  `  `  `  `  `  `  `  `");console.log("Чи є така пошта - poly@mail.com?",u.isEmailTaken("poly@mail.com"));//! false
console.log("Чи є така пошта - mango@mail.com?",u.isEmailTaken("mango@mail.com"));//! true
console.log("---------------------------------------------------------------------------------------");
