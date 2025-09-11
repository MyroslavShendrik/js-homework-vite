const list = document.createElement("ul")
list.classList.add("list")
console.log("list:", list)
const body = document.querySelector("body");
body.prepend(list);
const elementFirst = document.createElement("li")
const elementSecond = document.createElement("li")
const elementThird = document.createElement("li")
const elementFour = document.createElement("li")
const elementFive = document.createElement("li")
elementFirst.textContent = "HTML"
elementSecond.textContent = "CSS"
elementThird.textContent = "JavaScript"
elementFour.textContent = "React"
elementFive.textContent = "idk"
list.append(elementFirst);
list.append(elementSecond);
list.append(elementThird);
list.append(elementFour);
list.append(elementFive);
elementFirst.style.color = "red";
elementSecond.style.color = "yellow";
elementThird.style.color = "green";
//! ------------------------------------------------- якщо елементів li більше 4, то елемент Node.js повинен бути 5. Інакше останнім.
const elemetNext = document.createElement("li");
elemetNext.textContent = "Node.js";
const items = list.querySelectorAll("li")
console.log(items)
const n = items.length;
console.log(n)
if (n > 4) {
    //! Домашнє завдання знайти 4 елемент. та додати новий елемень ПІСЛЯ 4!
     const fourthItem = items[3];
    fourthItem.after(elemetNext);
} else {
    list.append(elemetNext);
}


//! Видалення елементів
console.warn("Видалення елементів:");
console.log(
    `%c
    🔸 element.remove()
    `,
    'color: blue; font-size: 16px',
);
//? ✴️ Для того, щоб видалити елемент,
//? використовується метод ❗️remove()❗️. 
//? Він викликається на елементі elem, 
//? який необхідно видалити.
const text = document.querySelector('.text1');
text.remove();
console.log("--------------------------------------------------------------------------------------------");
// elementFirst.remove()
// list.remove()

//! Оптимізація роботи з DOM
//? ✴️ Сучасні браузери намагаються оптимізувати
//? процес відтворення сторінки без втручання розробника.
//? Проте, зміна DOM-дерева - це дорога операція,


//! Repaint 
console.warn("Repaint :");
//? ✴️ Repaint - відбувається,
//? коли зміни торкнулися стилів,
//? що впливають на зовнішній вигляд елемента,
//? але не на геометрію.
//? ✳️ Наприклад,
//? 🔸 opacity, 
//? 🔸 background-color, 
//? 🔸 visibility,
//? 🔸 outline. 
//? Браузер повторно створює елемент, 
//? з урахуванням нового стилю. 
//? Також перевіряється видимість інших елементів, 
//? один або більше можуть виявитися 
//? прихованими під елементом, 
//? що змінив зовнішній вигляд.
console.log(
    `%c
        ✴️ Repaint - відбувається,
    коли зміни торкнулися стилів,
    що впливають на зовнішній вигляд елемента,
    але не на геометрію.
        ✳️ Наприклад,
    🔸 opacity,
    🔸 background-color,
    🔸 visibility,
    🔸 outline.
    `,
    'color: blue; font-size: 16px',
);
console.log("--------------------------------------------------------------------------------------------");


//! Reflow
console.warn("Reflow:");
//? ✴️ Reflow - відбувається,
//? коли зміни впливають на:
//? 🔸 вміст,
//? 🔸 структуру документу,
//? 🔸 положення елементів.
//? Відбувається перерахунок позиціонування і розмірів,
//? що призводить до повторного створення частини
//? або всього документу.
//? Зміна розміру одного батьківського контейнера
//? вплине на всіх його дітей і предків.
//? ❗️Має значно більший вплив на продуктивність, ніж repaint❗️.
console.log(
    `%c
        ✴️ Reflow - відбувається,
    коли зміни впливають на:
    🔸 вміст,
    🔸 структуру документу,
    🔸 положення елементів.
        ✳️❗️Має значно більший вплив на продуктивність, ніж repaint❗️.
    `,
    'color: blue; font-size: 16px',
);
//? ✴️ Усі перераховані вище операції блокують браузер.
//? Сторінка не може виконувати жодні інші операції у той час,
//? коли відбувається reflow або repaint.
//? ✴️ Причинами можуть бути:
//? 🔸 Маніпуляції з DOM (додавання, видалення, зміна, перестановка елементів).
//? 🔸 Зміна вмісту, зокрема тексту в полях форм.
//? 🔸 Розрахунок або зміна CSS-властивостей.
//? 🔸 Додавання і видалення таблиць стилів.
//? 🔸 Маніпуляції з атрибутом class.
//? 🔸 Маніпуляції з вікном браузера (зміни розмірів, прокручування).
//? 🔸 Активація псевдокласів (наприклад, ':hover').
console.log("--------------------------------------------------------------------------------------------");



//! 3.Властивість innerHTML
//? ✴️ Ще один спосіб створити DOM-елементи
//? і помістити їх в дерево
//? - це використовувати рядки з тегами
//? і дозволити браузеру зробити всю важку роботу.
//? У такого підходу є свої плюси і мінуси.


//! Читання
console.warn("Читання:");
//? ✴️ Властивість innerHTML зберігає вміст елемента, 
//? включно з тегами, у вигляді рядка. 
//? Значення, що повертається, - це завжди валідний HTML-код.
const article31 = document.querySelector(".article31");
console.log("article.innerHTML:", article31.innerHTML);

const title31 = document.querySelector(".article31 .title31");
console.log("title31.innerHTML:", title31.innerHTML);
console.log("title31:", title31);


const text31 = document.querySelector(".article31 .text31");
console.log("text.innerHTML:", text31.innerHTML);

const link31 = document.querySelector(".article31 .link31");
console.log("link.innerHTML:", link31.innerHTML);
console.log("-----------------------------------------------------------------------------------------");

//! Зміна/видалення
console.warn("Зміна/видалення:");
//? ✴️ Властивість innerHTML доступна
//? і для читання, і для запису.
//? Якщо записати в неї рядок з HTML-тегами,
//? то браузер під час парсингу рядка
//? перетворить їх у валідні елементи і додасть в DOM-дерево.
console.log(
    `%c
    title32.innerHTML = '<span class="accent">Replacement</span>';
    `,
    'color: blue; font-size: 16px',
);
console.log(". . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .");
const title32 = document.querySelector(".article32 .title32");
const newMarkup = '<span class="accent">Replacement</span>'
title32.innerHTML = newMarkup;

const heading1 = document.createElement("h1");
console.log("heading:", heading1); //! <h1></h1>

heading1.textContent = "This is a heading";
heading1.style.color = "green";
console.log("heading1:", heading1);
const heading2 = '<section>< h3 class="title33" > ШАБЛОНІЗАЦІЯ</h3 ><h4>Popular technologies</h4><ul class="list33"><li class="list-item">item</li></ul></section > '

console.log("heading2:", heading2);
const box1 = document.getElementById("box1")
console.log("box1:", box1);
console.log("box1.innerHTML:",box1.innerHTML);
// box1.innerHTML = box1.innerHTML + heading2
// box1.innerHTML =heading2 + box1.innerHTML;
// box1.innerHTML = heading2;
box1.innerHTML += heading2;
const bodyBox = document.querySelector("body");
console.log("bodyBox:",bodyBox);
bodyBox.innerHTML = heading2 + bodyBox.innerHTML;
//? ✴️ Якщо у властивість innerHTML записати порожній рядок,
//? то вміст елемента буде очищено.
//? Це простий і швидкий спосіб видалення всього вмісту.
console.log(
    `%c
    link32.innerHTML = "";
    `,
    'color: blue; font-size: 16px',
);
console.log(". . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .");
const link32 = document.querySelector(".article32 .link32");
link32.innerHTML = "";
console.log("-----------------------------------------------------------------------------------------");

//! Шаблонізація
console.warn("Шаблонізація:");
//? ✴️ За такого підходу,
//? на відміну від document.createElement(),
//? ми не отримуємо посилання на створений DOM-елемент.
//? Це перший крок на шляху до шаблонізації
//? - створення великої кількості однотипної розмітки
//? з різними даними за наперед визначеним шаблоном.
//? Наприклад, як у списку товарів інтернет магазину тощо.
//? ✳️ Однотипна (шаблонна) розмітка
//? створюється із масиву даних.
//? Прийом полягає у перебиранні цього масиву
//? і складанні одного рядка з HTML-тегами,
//? який потім записуємо в innerHTML елемента.
// const technologies = ["HTML", "CSS", "JavaScript", "React", "Node"];
const technologies = ["C#", "C++", ".NET", "PHP", "Python", "Java", "SQL", "Django", "C", "iOS"];
const list33 = document.querySelector(".list33");

const markup = technologies
    .map((technology) => `<li class="list-item">${technology}</li>`)
    .join("");

//todo: У консолі бачимо один рядок з HTML-тегами:
console.log("markup:", markup);

//todo: Додаємо всю розмітку за одну операцію.
list33.innerHTML = markup;
console.log("-----------------------------------------------------------------------------------------");


//! Метод insertAdjacentHTML()
//? ✴️ Метод insertAdjacentHTML() - це сучасний метод для додавання рядка 
//? з HTML-тегами перед, після або всередину елемента. 
//? Вирішує проблему innerHTML пов'язану зі збереженням 
//? вмісту елемента під час додавання розмітки до вже існуючої.
console.log(
    `%c
    elem.insertAdjacentHTML(position, string);

        🔸 "beforebegin" - перед elem
        🔸 "afterbegin" - всередині elem, перед усіма дітьми
        🔸 "beforeend" - всередині elem, після усіх дітей
        🔸 "afterend" - після elem
    `,
    'color: blue; font-size: 16px',
);
//? ✴️ Аргумент position - це рядок,
//? позиція щодо елемента elem.
//? Приймає одне з чотирьох значень:
//? 🔸 "beforebegin" - перед elem
//? 🔸 "afterbegin" - всередині elem, перед усіма дітьми
//? 🔸 "beforeend" - всередині elem, після усіх дітей
//? 🔸 "afterend" - після elem
//? ✳️❗️❗️❗️ "beforebegin" і "afterend" працюють тільки тоді,
//? коли elem вже знаходиться в DOM-дереві.
console.log(". . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .");
const list4 = document.querySelector(".list4");

const newTechnologies = ["React", "TypeScript", "Node.js"];
const markup2 = newTechnologies
    .map((technology) => `<li class="list-item new">${technology}</li>`)
    .join("");

list4.insertAdjacentHTML("beforebegin", "<h3>Popular technologies</h3>");
list4.insertAdjacentHTML("afterbegin", '<li class="list-item new">C++</li>');
list4.insertAdjacentHTML("beforeend", markup2);
list4.insertAdjacentHTML("afterend", '<a class="link4" href="">Read more...</a>');
console.log("----------------------------------------------------------------------------------");
