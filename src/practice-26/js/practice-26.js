import Handlebars from "handlebars";
import сardTemplate from "../template.hbs?raw";
import {data} from "./data.js"
console.log(data);
// const data = {
//   title: "Create content from Template and Data!",
//   items: [
//     "LoDash",
//     "NanoID",
//     "PNotify",
//     "Chart.js",
//     "BasicLightbox",
//     "Handlebars",
//   ],
// };
const template = Handlebars.compile(сardTemplate);
console.log("temolate:", template);
const markup = template(data);
console.log("markup:", markup);
const container = document.querySelector("#menu-container");
container.innerHTML = markup;

//! викоритсання шаблону за допомогою template
const source = document.querySelector('#menu-template').innerHTML.trim();
const template2 = Handlebars.compile(source);
//? Створимо змінну markup, в яку запишемо
//? результат роботи функції-шаблону template.
const markup2 = template2(data);

console.log("Вся розмітка (markup2): \n", markup2); //? Вся розмітка
//? Приклад вище схожий на операцію «пошук-і заміна»: шаблон просто
//? замінив {{title}} значення властивості menuData.title.
//? Після чого результат потрапив спочатку текст <ul>,
//? потім виконався {{#each items}}, який послідовно
//? згенерував елементи списку, а потім список був закритий </ul>.


//? У js виберемо контейнер по id, після чого використовуючи
//? властивість innerHTML додємо туди наш рядок.

const menuСontainer = document.querySelector('#menu-container');
menuСontainer.innerHTML += markup2;

