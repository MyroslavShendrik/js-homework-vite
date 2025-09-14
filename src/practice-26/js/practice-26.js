import Handlebars from "handlebars";
import сardTemplate from "../template.hbs?raw";

const data = {
  title: "Create content from Template and Data!",
  items: [
    "LoDash",
    "NanoID",
    "PNotify",
    "Chart.js",
    "BasicLightbox",
    "Handlebars",
  ],
};
const template = Handlebars.compile(сardTemplate);
console.log("temolate:", template);
const markup = template(data);
console.log("markup:", markup);
const container = document.querySelector("#menu-container");
container.innerHTML = markup;
