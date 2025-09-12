import"./modulepreload-polyfill-3cfb730f.js";console.log("%c [1] ","color: yellow; background-color: #2274A5");//! Код виконаного завдання ⤵️
class c{constructor({login:e,email:s}){this.login=e,this.email=s}getInfo(){console.log(`Login: ${this.login}, Email: ${this.email}`)}}//! Код виконаного завдання ⤴️
console.log(c.prototype.getInfo);//! function
const p=new c({login:"Mangozedog",email:"mango@dog.woof"});p.getInfo();//! Login: Mangozedog, Email: mango@dog.woof
const h=new c({login:"Poly",email:"poly@mail.com"});h.getInfo();//! Login: Poly, Email: poly@mail.com
console.log("--------------------------------------------------");console.log("%c [2] ","color: yellow; background-color: #2274A5");//! Код виконаного завдання ⤵️
class a{constructor({name:e,age:s,followers:i}){this.name=e,this.age=s,this.followers=i}getInfo(){return`User ${this.name} is ${this.age} years old and has ${this.followers} followers`}}//! Код виконаного завдання ⤴️
const m=new a({name:"Mango",age:2,followers:20});console.log(m.getInfo());//! User Mango is 2 years old and has 20 followers
const u=new a({name:"Poly",age:3,followers:17});console.log(u.getInfo());//! User Poly is 3 years old and has 17 followers
console.log("--------------------------------------------------");console.log("%c [3] ","color: yellow; background-color: #2274A5");class f{constructor(e){this.items=e}getItems(){return this.items}addItem(e){this.items.push(e)}removeItem(e){const s=this.items.indexOf(e);s!==-1&&this.items.splice(s,1)}}//! Код виконаного завдання ⤴️
const t=new f(["Нанітоіди","Пролонгер","Залізні жупи","Антигравітатор"]),w=t.getItems();console.log(w);//! [ "Нанітоіди", "Пролонгер", "Залізні жупи", "Антигравітатор" ]
t.addItem("Дроїд");console.log(t.items);//! [ "Нанітоіди", "Пролонгер", "Залізні жупи", "Антигравітатор", "Дроїд" ]
t.removeItem("Пролонгер");console.log(t.items);//! [ "Нанітоіди", "Залізні жупи", "Антигравітатор", "Дроїд" ]
console.log("--------------------------------------------------");console.log("%c [4] ","color: yellow; background-color: #2274A5");//! Код виконаного завдання ⤵️
class v{constructor(e){this._value=e}get value(){return this._value}append(e){this._value+=e}prepend(e){this._value=e+this._value}pad(e){this._value=e+this._value+e}}//! Код виконаного завдання ⤴️
const l=new v(".");console.log(l.value);//! '.'
l.append("^");console.log(l.value);//! '.^'
l.prepend("^");console.log(l.value);//! '^.^'
l.pad("=");console.log(l.value);//! '=^.^='
console.log("--------------------------------------------------");console.log("%c [5] ","color: yellow; background-color: #2274A5");class r{static getSpecs(e){console.log(`maxSpeed: ${e.maxSpeed}, speed: ${e.speed}, isOn: ${e.isOn}, distance: ${e.distance}, price: ${e.price}`)}constructor({maxSpeed:e,speed:s=0,isOn:i=!1,distance:g=0,price:d}){this.speed=s,this.maxSpeed=e,this.price=d,this.isOn=i,this.distance=g}get price(){return this._price}set price(e){this._price=e}turnOn(){this.isOn=!0}turnOff(){this.isOn=!1,this.speed=0}accelerate(e){this.speed+e<=this.maxSpeed?this.speed+=e:(console.log("Speed exceeds maximum!"),this.speed+=e)}decelerate(e){this.speed-e>=0?this.speed-=e:this.speed=0}drive(e){if(this.isOn)this.distance+=e*this.speed;else{console.log("CAr is off");return}}}const o=new r({maxSpeed:200,price:2e3});o.turnOn();o.accelerate(50);o.drive(2);r.getSpecs(o);//! maxSpeed: 200, speed: 50, isOn: true, distance: 100, price: 2000
o.decelerate(20);o.drive(1);o.turnOff();r.getSpecs(o);//! maxSpeed: 200, speed: 0, isOn: false, distance: 130, price: 2000
console.log(o.price);//! 2000
o.price=4e3;console.log(o.price);//! 4000
console.log("--------------------------------------------------");
