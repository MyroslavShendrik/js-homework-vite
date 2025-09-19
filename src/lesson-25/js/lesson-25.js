import "../css/style.css"
import Handlebars from "handlebars";
import {products} from "./data.js"
import cardTemplate from "../handlebars/lesson25.hbs?raw"

console.log("data:",products);
console.log("cardTemplate:",cardTemplate);
const container = document.querySelector('#products');
console.log("container:",container);

const template = Handlebars.compile(cardTemplate);
console.log("template;", template);
//! const markup = template(products); тут помилка
// container.innerHTML = markup;
//! var1
// const markup = products.map(product => template(product)).join('');
// console.log("markup:",markup);
// container.innerHTML = markup;
//! var2  
products.forEach(item => {
    console.log("item:", item);
    const markup = template(item);
    console.log("Вся розмітка (markup): \n", markup); //? Вся розмітка
    container.innerHTML += markup; //! Кожен раз ДОДАЄ нову картку
});
