//todo [1]
console.log(
    "%c [1] ",
    "color: yellow; background-color: #2274A5",
);
//? Створити розмітку з кнопкою та текстовим полем. 
//? За допомогою JavaScript отримати доступ до кнопки 
//? та текстового поля за їх ідентифікаторами 
//? та змінити текст на кнопці на значення текстового поля.
//! Код виконаного завдання
// JavaScript
const input = document.getElementById("myInput");
const button = document.getElementById("myButton");
console.log("button:", button);
console.log("input:", input);
// button.textContent = input.textContent;
button.textContent = input.value;
console.log("input.value:", input.value);


console.log("--------------------------------------------------");



//todo [2]
console.log(
    "%c [2] ",
    "color: yellow; background-color: #2274A5",
);
//? Створити розмітку з заголовком та зображенням. 
//? За допомогою JavaScript отримати доступ до зображення 
//? та змінити значення атрибута "src" на шлях до іншого зображення.
//! Код виконаного завдання
const image = document.getElementById("myImage");

// image.src = "../images/image3.png"; //todo var1

image.setAttribute("src", "../images/image3.png"); //todo var2
console.log("--------------------------------------------------");



//todo [3]
console.log(
    "%c [3] ",
    "color: yellow; background-color: #2274A5",
);
//? Створити розмітку  з посиланням та зображенням. 
//? За допомогою JavaScript отримати доступ до посилання 
//? та змінити значення атрибута "href" на нову URL-адресу. 
//? Також отримати доступ до зображення 
//? та додати новий атрибут "alt" з описом зображення.
//! Код виконаного завдання
const link = document.getElementById("myLink");
link.href = "https://uk.wikipedia.org/wiki/%D0%92%D0%B5%D0%B1%D1%81%D0%B0%D0%B9%D1%82";

const img = document.getElementById("imgWithAlt");
img.setAttribute("alt", "Опис зображення");


console.log("--------------------------------------------------");



//todo [4]
console.log(
    "%c [4] ",
    "color: yellow; background-color: #2274A5",
);
//? Створити розмітку  зі списком елементів. 
//? За допомогою JavaScript отримати доступ 
//? до першого елемента списку 
//? та змінити його вміст на новий текст. 
//! Код виконаного завдання

const list = document.getElementById("myList");
list.children[0].textContent = "Новий 1"; //todo var1
list.firstElementChild.textContent ="Новий 2" //todo var2

console.log("--------------------------------------------------");
