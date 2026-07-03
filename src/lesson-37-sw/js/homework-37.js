console.log("Star Wars");
import Handlebars from "handlebars";
import cardTemplate from "../templates/header.hbs?raw";
const div = document.querySelector("#container")
console.log("cardTemplate:",cardTemplate);
const header = {
  headerTitle: "Star Wars Fan Hub",
  headerMenu: [
    "Про сайт",
    "Всесвіт",
    "Сила",
    "Джедаї і Сітхи",
    "Війни",
    "Енциклопедія",
    "Магазин",
  ],
};

const template = Handlebars.compile(cardTemplate);
const markup = template(header);
console.log("markup:",markup);
div.innerHTML = markup