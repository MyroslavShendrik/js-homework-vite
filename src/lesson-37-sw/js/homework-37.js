console.log("Star Wars");
import Handlebars from "handlebars";
import cardTemplate from "../templates/header.hbs?raw";
const div = document.querySelector("#container");
console.log("cardTemplate:", cardTemplate);
//!var1
// const header = {
//   headerTitle: "Star Wars Fan Hub",
//   headerMenu: [
//     "Про сайт",
//     "Всесвіт",
//     "Сила",
//     "Джедаї і Сітхи",
//     "Війни",
//     "Енциклопедія",
//     "Магазин",
//   ],
// };

// const template = Handlebars.compile(cardTemplate);
// const markup = template(header);
// console.log("markup:",markup);
// div.innerHTML = markup

//!var2
//! Створюємо рядок запиту,
const BaseURL = "http://localhost:3000/";
const EndPoint = "starWars";
const url = `${BaseURL}${EndPoint}`;
console.log("url:", url);

async function getPosts() {
  try {
    const response = await fetch(url);

    const data = await response.json();
    console.log("data:",data.page1.header);
    const template = Handlebars.compile(cardTemplate);
    const markup = template(data.page1.header);

    div.innerHTML = markup;
    
  } catch (error) {
    console.log(error);
  }
}
getPosts()