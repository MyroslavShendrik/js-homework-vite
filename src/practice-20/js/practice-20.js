//! Події
//? ✴️ Подія - це сигнал від браузера про те,
//? що на веб-сторінці щось відбулося.
//? Події використовуються для реакції
//? на дії користувача і виконання коду,
//? пов'язаного з певною подією.
//? Існує багато видів подій:
//? 🔸 миші,
//? 🔸 клавіатури,
//? 🔸 елементів форм,
//? 🔸 завантаження зображень,
//? 🔸 буфера обміну,
//? 🔸 зміни стадії CSS анімації або переходу,
//? 🔸 зміни розмірів вікна та багато інших.

//? ✳️ Одна дія може викликати декілька подій.
//? Наприклад, клік викликає спочатку mousedown,
//? а потім mouseup і click.
//? У тих випадках, коли одна дія генерує декілька подій,
//? їхній порядок фіксований.
//? Тобто обробники викликаються
//? у порядку mousedown → mouseup → click.

//! Метод addEventListener()​
console.warn("Метод addEventListener()​:");
//? ✴️ Для того, щоб елемент реагував на дії користувача,
//? до нього необхідно додати слухача (обробника) події.
//? Тобто функцію, яка буде викликана, щойно подія відбулася.
//? ✴️ Метод addEventListener()
//? - додає слухача події на елемент.
//? 🔸 event - ім'я події, рядок, наприклад "click".
//? 🔸 handler - колбек-функція, яка буде викликана під час настання події.
//? 🔸 options - необов'язковий об'єкт параметрів з розширеними налаштуваннями.
console.log(
    `%c
    🔹 елемент.слухач(подія, реакція на подію);
            ⬇️   ⬇️   ⬇️   ⬇️   ⬇️   ⬇️
    🔸 element.addEventListener(event, handler, options);
    `,
    'color: blue; font-size: 16px',
);
console.log(". . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .");

//todo:
const button1 = document.querySelector(".my-button-1");
console.log("button1:", button1);

button1.addEventListener(
    "click",
    () => {
        console.log("My button-1 was clicked");
    }
);
console.log(". . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .");

//? ✴️ Для колбека можна (і бажано)
//? використовувати окрему функцію
//? і передавати на неї посилання.
//? Іменована функція підвищує читабельність коду.
const button2 = document.querySelector(".my-button-2"); //! крок-1
console.log("button2:", button2);

const handleClick1 = () => {    //! крок-2 створення реакції на подію
    console.log("My button-2 was clicked");
    alert("My button-2 was clicked");
    button2.classList.toggle("accent");
};

button2.addEventListener("click", handleClick1); //! крок-3 створення слухача!


//? ✴️ На одному елементі може бути 
//? будь-яка кількість обробників подій, 
//? навіть подій одного типу. 
//? Колбек-функції будуть викликатися 
//? у порядку їх реєстрації в коді.
const button3 = document.querySelector(".my-button-3");
console.log("button3:", button3);

const firstCallback = () => console.log('First callback!');
const secondCallback = () => console.log('Second callback!');
const thirdCallback = () => console.log('Third callback!');

button3.addEventListener("click", firstCallback);
button3.addEventListener("click", secondCallback);
button3.addEventListener("click", thirdCallback);
console.log("---------------------------------------------------------------------------------");

console.log(". . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .");


//! Метод removeEventListener()​
console.warn("Метод removeEventListener()​​:");
//? ✴️ Видаляє слухача події з елемента.
//? Аргументи аналогічні методу addEventListener().
//? ✴️ Для видалення потрібно передати посилання 
//? саме на ту колбек-функцію, 
//? яка була призначена в addEventListener(). 
//? У такому разі, для колбеків 
//? використовують окрему функцію 
//? і передають її за ім'ям (посиланням).
console.log(
    `%c
    🔸 element.removeEventListener(event, handler, options);
    `,
    'color: blue; font-size: 16px',
);
console.log(". . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .");

const addListenerBtn = document.querySelector('.js-add');
const removeListenerBtn = document.querySelector('.js-remove');
const clickBtn = document.querySelector(".js-target-btn");

console.log("addListenerBtn:", addListenerBtn);
console.log("removeListenerBtn:", removeListenerBtn);
console.log("clickBtn:", clickBtn);

const handleClick2 = () => {
    console.log("click event listener callback");
    alert("click event listener callback");
    clickBtn.classList.toggle("accent");
};

addListenerBtn.addEventListener("click", () => {
    clickBtn.addEventListener("click", handleClick2);
    console.log("click event listener was added to clickBtn");
});

removeListenerBtn.addEventListener("click", () => {
    clickBtn.removeEventListener("click", handleClick2);
    console.log("click event listener was removed from clickBtn");
});
console.log("---------------------------------------------------------------------------------");

//! Об'єкт події
console.warn("Документація об'єкта події: \n http://devdocs.io/dom/event");
//? ✴️ Щоб обробити подію - недостатньо знати про те,
//? що це клік або натискання клавіші,
//? можуть знадобитися деталі.
//? Наприклад, поточне значення текстового поля,
//? елемент, на якому відбулася подія, вбудовані методи та інші.
//? ✴️ Кожна подія - це об'єкт,
//? який містить інформацію про деталі події
//? та автоматично передається першим аргументом
//? в обробник події.
//? Всі події відбуваються з базового класу Event.
const button4 = document.querySelector(".button4");
console.log("button4:", button4);

const handleClick4 = event => {
    console.log(event);
};

button4.addEventListener("click", handleClick4);
console.log(". . . . . . . . . . . . . . . . . . . . . . . . . . .");

//? ✴️ Параметр event - це і є об'єкт події,
//? який автоматично передається першим аргументом
//? під час виклику колбек-функції.
//? Ми можемо називати його як завгодно,
//? але, як правило, його оголошують як e, evt або event.
//? ✳️ Деякі властивості об'єкта події:
//? 🔸 event.type - тип події.
//? 🔸 event.target - це той елемент, на якому фактично відбулася подія
//?    (наприклад, клацання миші, натискання клавіші і т.д.).
//? 🔸 event.currentTarget - це той елемент, на якому обробник події був встановлений,
//?    тобто елемент, до якого прив'язана функція addEventListener
const button5 = document.querySelector(".button5");
console.log("button5:", button5);

const handleClick5 = event => {
    console.log(". . . . . . . . . . . . . . . . . . . . . . . . . . .");
    // console.log("event: ", event);
    console.log("event type(button5): ", event.type);
    console.log("event target(button5): ", event.target);
    console.log("event currentTarget(button5): ", event.currentTarget);
};

// button5.addEventListener("click", handleClick5); //! event.target завжди співпадає з event.currentTarget
console.log(". . . . . . . . . . . . . . . . . . . . . . . . . . .");

const parent = document.querySelector(".part_2.box");
console.log("parent:", parent);
console.log("parent.textContent:", parent.textContent);
console.log("parent.innerHTML:", parent.innerHTML)
const handleClick3 = event => {
    console.log(". . . . . . . . . . . . . . . . . . . . . . . . . . .");
    // console.log("event: ", event);
    console.log("event type(parent): ", event.type);
    console.log("event target(parent): ", event.target);
    console.log("event currentTarget(parent): ", event.currentTarget);
};

parent.addEventListener("click", handleClick3); //! event.target може не співпадати з event.currentTarget
console.log("-----------------------------------------------------");

//! Дії браузера за замовчуванням
console.warn("Дії браузера за замовчуванням:");
//? ✴️ Деякі події викликають дію браузера,
//? вбудовану за замовчуванням як реакція на певний тип події.
//? Наприклад, клік на посиланні
//? ініціює перехід на нову адресу, зазначену в href,
//? а відправлення форми перезавантажує сторінку.
//? Найчастіше ця поведінка небажана і її необхідно скасувати.
//? ✴️ Для скасування дії браузера за замовчуванням
//? в об'єкта події є стандартний метод ❗️preventDefault()❗️.
console.log(
    `%c
    🔸 event.preventDefault()
    `,
    'color: blue; font-size: 16px',
);
console.log(". . . . . . . . . . . . . . . . . . . .");


//! Подія submit
console.warn("Дії браузера за замовчуванням:");
//? ✴️ Виникає при відправці форми.
//? Його застосовують для валідації (перевірки)
//? форми перед відправкою.
//? Щоб відправити форму, у відвідувача є два способи:
//? 🔸 Натиснути кнопку з type =" submit "
//? 🔸 Натиснути кнопку Enter, перебуваючи в якомусь полі форми
//? ✴️ Який би спосіб не вибрав відвідувач 
//? - буде згенеровано подія submit. 
//? В обробнику цієї події можна перевірити дані, 
//? і виконати дії по результатах перевірки.
const form = document.querySelector(".register-form");

form.addEventListener("submit",getUserNamePasword);
console.log("---------------------------------------");
function getUserNamePasword(event) {
    event.preventDefault();
    const {
        elements: { username, password }
    } = event.currentTarget;
    console.log("Username:", username.value);
    console.log("Password:", password.value);
};


//! Подія submit​
console.warn("Подія submit​:");
//? ✴️ Відправлення форми відбувається під час кліку
//? по кнопці з атрибутом type="submit"
//? або натискання клавіші Enter,
//? перебуваючи в будь-якому її текстовому полі.
//? ✴️ Подію submit можна застосувати для
//? валідації (перевірки) форми перед відправленням,
//? оскільки на об'єкті події існує багато
//? корисних властивостей,
//? пов'язаних з елементами форми.
//? ✴️ Сабміт форми ❗️перезавантажує сторінку❗️,
//? тому не забувайте скасовувати
//? дію за замовчуванням методом ❗️preventDefault()❗️.
//?❗️ ✴️ Властивість elements DOM-елемента форми 
//?❗️ містить об'єкт з посиланнями на усі її елементи, 
//?❗️ які мають атрибут name. 
//?❗️ Тому в прикладі ми отримуємо значення полів, 
//?❗️ звертаючись до login.value і password.value.
const registerForm = document.querySelector(".form");
console.log("registerForm:", registerForm);

registerForm.addEventListener("submit", handleSubmit);

function handleSubmit(event) {
    event.preventDefault(); //todo: ❗️скасовує перезавантаження сторінки❗️
    console.log("event.currentTarget:", event.currentTarget);
        console.log("event.target:", event.target);
    const form = event.target;
    console.log("form = event.target:", form);
    const login = event.target.elements.userlogin.value;
    const password = form.elements.userpassword.value;

    if (login === "" || password === "") {
        return console.log("❗️❗️❗️ Please fill in all the fields!");
    }

    console.log(`Login: ${login}, Password: ${password}`);
    form.reset();
};
console.log("-------------------------------------------------------------------------------------------------------------");

//! Подія change​
console.warn("Подія change​​:");
//? ✴️ Відбувається після зміни елемента форми.
//? Для текстових полів або textarea
//? подія відбудеться не на кожному введенні символу,
//? а після втрати фокусу, що не завжди зручно.
//? Наприклад, доки ви набираєте щось у текстовому полі
//? - подія відсутня, але як тільки фокус пропав,
//? відбудеться подія change.
//? Для інших елементів, наприклад,
//? select, чекбоксів і радіо-кнопок,
//? подія change спрацьовує відразу під час вибору значення.
// todo: Приклад-1:
console.warn("Приклад-1​​:");
const input1 = document.querySelector(".input1");
console.log("input1:", input1);

input1.addEventListener("change", setInput);

function setInput(event) {
    const inputOptionValue = event.currentTarget.value;
    console.log("inputOptionValue:", inputOptionValue);

    input1.value = inputOptionValue + 1000;
};
// todo: Приклад-2:
console.warn("Приклад-2​​:");
const select = document.querySelector(".pizza-select");
const textOutput = document.querySelector(".text-output");
const valueOutput = document.querySelector(".value-output");

console.log("select:", select);
console.log("textOutput:", textOutput);
console.log("valueOutput:", valueOutput);

select.addEventListener("change", setOutput);

function setOutput(event) {
    const selectedOptionValue = event.currentTarget.value;
    const selectedOptionIndex = event.currentTarget.selectedIndex;
    const selectedOptionText = event.currentTarget.options[selectedOptionIndex].text;

    textOutput.textContent = selectedOptionText;
    valueOutput.textContent = selectedOptionValue;
};
console.log("-------------------------------------------------------------------------------------------------------------");
//! Подія input​​
console.warn("Подія input​​:");
//? ✴️ Відбувається тільки на текстових полях і textarea,
//? і створюється щоразу при зміні значення елемента,
//? не чекаючи втрати фокусу.
//? На практиці input - це найголовніша подія
//? для роботи з текстовими полями форми.
const textInput41 = document.querySelector(".text-input41");
const output = document.querySelector(".output");

console.log("textInput41:", textInput41);
console.log("output:", output);

const setTextFieldValue = (event) => {
    output.textContent = event.currentTarget.value;
};

textInput41.addEventListener("input", setTextFieldValue);
console.log("-------------------------------------------------------------------------------------------------------------");

console.log(". . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .");
//! Події focus і blur
console.warn("Події focus і blur​​:");
//? ✴️ Елемент отримує фокус під час кліку миші
//? або переходу клавішею Tab.
//? Момент отримання і втрати фокусу
//? - дуже важливий, отримуючи фокус,
//? ми можемо завантажити дані для автозаповнення,
//? почати відстежувати зміни тощо.
//? Під час втрати фокусу - перевірити введені дані.
//? ✴️ Під час фокусування елемента відбувається подія focus,
//? а коли фокус зникає,
//? наприклад, користувач клікає в іншому місці екрана,
//? відбувається подія blur.
//? Активувати або скасувати фокус можна програмно,
//? викликавши в коді для елемента однойменні методи focus() і blur().
const textInput42 = document.querySelector(".text-input42");
const setFocusBtn = document.querySelector('[data-action="set"]');
const removeFocusBtn = document.querySelector('[data-action="remove"]');

console.log("textInput42:", textInput42);
console.log("setFocusBtn:", setFocusBtn);
console.log("removeFocusBtn:", removeFocusBtn);

setFocusBtn.addEventListener("click", () => {
    textInput42.focus();
});

removeFocusBtn.addEventListener("click", () => {
    textInput42.blur();
});

textInput42.addEventListener("focus", () => {
    textInput42.value = "This input has focus";
});

textInput42.addEventListener("blur", () => {
    textInput42.value = "";
});
console.log("-------------------------------------------------------------------------------------------------------------");
