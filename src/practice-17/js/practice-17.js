//! Контекст виконання функції
console.warn("Контекст виконання функції:");
//? ✴️ Можна з упевненістю сказати, що ключове слово this
//? - це одна з найзаплутаніших концепцій JavaScript на старті навчання.
//? Новачки часто підставляють this методом наукового тику доти,
//? доки скрипт не спрацює.
//? ✳️ Контекст у JavaScript схожий на контекст у реченні:
//? 🔸 Петро біжить швидко, тому що ❗️Петро❗️ намагається зловити поїзд.
//? 🔸 Петро біжить швидко, тому що ✅він✅ намагається зловити поїзд.
//? ✳️ Друге речення звучить лаконічніше. 
//? Підмет речення - Петро, і ми можемо сказати, 
//? що контекст речення - це Петро, 
//? тому що він у центрі уваги у цей конкретний час у реченні. 
//? Навіть займенник «хто» стосується Петі.

//? ✳️ І так само об'єкт може бути поточним контекстом виконання функції.
console.log(
    `%c
    🔴 Петро біжить швидко, тому що ❗️Петро❗️ намагається зловити поїзд.
    `,
    'color: blue; font-size: 16px',
);

const petro1 = {
    username: "Petro",
    showName() {
        console.log(petro1.username);
    },
};
petro1.showName();
console.log(". . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .");
//? ✳️ Звернення до властивостей об'єкта
//? всередині методів, використовуючи ім'я самого об'єкта,
//? - аналогічно використанню Петро, замість він.
//? ✳️ Всередині функцій можна використовувати 
//? зарезервоване ключове слово this.
//? Під час виконання функції, в this записується 
//? посилання на об'єкт, в контексті якого вона була викликана. 
//? Таким чином, в тілі функції ми можемо отримати доступ 
//? до властивостей і методів цього об'єкта.
console.log(
    `%c
    🟢 Петро біжить швидко, тому що ✅він✅ намагається зловити поїзд.
    `,
    'color: blue; font-size: 16px',
);

const petro2 = {
    username: "Petro",
    showName() {
        console.log(this.username);
    },
};
petro2.showName();
console.log("---------------------------------------------------------------------------------------------");
//! Правила визначення this
console.warn("❗️Правила визначення this❗️:");
//? ✴️ Правило для визначення this
//? - значення контексту всередині функції (не стрілочної)
//? визначається на момент її виклику,
//? а не на момент її створення.
//? Тобто значення this визначається тим,
//? як (де) викликається функція,
//? а не тим, де вона була оголошена.
console.log(
    `%c
    Значення this визначається тим,
    як викликається функція,
    а не тим, де вона була оголошена.
    `,
    'color: red; font-size: 16px',
);
//! this у глобальній області видимості
console.warn("this у глобальній області видимості:");
//? ✴️ У глобальній області видимості,
//? якщо скрипт виконується не в суворому режимі,
//? this посилається на об'єкт ❗️window❗️.
//? В суворому режимі значення this,
//? в глобальній області видимості, буде ❗️undefined❗️.
function foo() {
    console.log("this in function foo():", this);
};
foo(); //! window без "use strict" або undefined з "use strict"
console.log("---------------------------------------------------------------------------------------------");

// <script src="./js/01-fe3-js_16.js" type="module" defer></script>
// <script src="./js/01-fe3-js_16.js"></script>

//! this в методі об'єкта
console.warn("this в методі об'єкта:");
//? ✴️ Якщо функція була викликана як метод об'єкта, 
//? то контекст буде посилатися на об'єкт, 
//? частиною якого є метод.
const petro = {
    username: "Petro",
    showThis() {
        console.log(this);
    },
    showName() {
        console.log(this.username);
    },
};

petro.showThis(); //! {username: "Petro", showThis: ƒ, showName: ƒ}
petro.showName(); //! 'petro'
console.log(". . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .");

console.warn("Приклад визначення this в методі об'єкта:");
//? ✴️ Розглянемо складніший приклад для
//? кращого розуміння визначення this.
//? 🔸 Спочатку створимо функцію в глобальній області видимості і викличемо її.
//? 🔸 Після чого, присвоїмо її у властивість об'єкта і викличемо як метод цього об'єкта.
function showThis() {
    console.log("this in showThis: ", this);
};
//todo: Викликаємо у глобальному контексті:
showThis(); //! this in showThis: undefined або Window
console.log("`  `  `  `  `  `  `  `  `  `  `");

//todo: Створюємо об'єкт user1:
const user1 = {
    username: "Mango",
};
console.log("user1:", user1); //! {username: 'Mango'}
console.log("`  `  `  `  `  `  `  `  `  `  `");

//todo: Записуємо посилання на функцію у властивість об'єкта
//todo: Зверніть увагу, що це не виклик - немає ():
user1.showContext = showThis;
console.log("user1:", user1); //! {username: 'Mango', showContext: ƒ}
console.log("`  `  `  `  `  `  `  `  `  `  `");

//todo: Викликаємо функцію в контексті об'єкта.
//todo: this буде вказувати на поточний об'єкт, в контексті
//todo: якого здійснюється виклик, а не на глобальний об'єкт.
user1.showContext(); //! this in showThis: {username: "Mango", showContext: ƒ}
console.log("---------------------------------------------------------------------------------------------");




//! Приклад визначення this в методі об'єкта всередині звичайної функції (не стрілочної)
console.warn("Приклад визначення this в методі об'єкта всередині звичайної функції (не стрілочної):");
//todo: Створюємо об'єкт user2:
const user2 = {
    username: "Mango",
    showThis2() {
        console.log("this in showThis2: ", this); //! {username: 'Mango', showThis2: ƒ}
        console.log("username in showThis2: ", this.username); //! Mango
        console.log("`  `  `  `  `  `  `  `  `  `  `");

        function foo() {
            console.log("this in function foo():", this); //! undefined
            // console.log("username by this in function foo(): ", this.username); //! ❌ Cannot read properties of undefined (reading 'username')
            console.log("username in function foo(): ", user2.username); //! ✅ Mango
        };
        foo(); //! window без "use strict" або undefined з "use strict"
    },
};
console.log("user2:", user2); //! {username: 'Mango', showThis2: ƒ}
console.log("`  `  `  `  `  `  `  `  `  `  `");

user2.showThis2();
//! this in showThis2: {username: 'Mango', showThis2: ƒ}
//! username in showThis2: Mango
//! `  `  `  `  `  `  `  `  `  `  `
//! this in function foo(): undefined
//! ❌ Cannot read properties of undefined (reading 'username')
//! username in function foo(): Mango
console.log("---------------------------------------------------------------------------------------------");





//! Правила визначення this у стрілочних функціях
console.warn("❗️Правила визначення this у стрілочних функціях❗️:");
//? ✴️ Стрілочні функції не мають свого this.
//? На відміну від звичайних функцій,
//? змінити значення this всередині стрілки
//? після її оголошення - неможливо.
//? ✴️ Значення this (контекст) всередині стрілки
//? визначається місцем її оголошення,
//? а не місцем виклику,
//? і посилається на контекст батьківської функції.
console.log(
    `%c
    Значення this всередині стрілки визначається
    місцем її оголошення, а не місцем виклику,
    і посилається на контекст батьківської функції.
    `,
    'color: red; font-size: 16px',
);
//? ✴️ У глобальній області видимості,
//? якщо скрипт виконується не в суворому режимі,
//? this посилається на об'єкт ❗️window❗️.
//? В суворому режимі значення this,
//? в глобальній області видимості, буде ❗️undefined❗️.
const showThisArrow = () => {
    console.log("this in showThis: ", this);
};
//todo: Викликаємо у глобальному контексті:
showThisArrow(); //! window без "use strict" або undefined з "use strict"
console.log("`  `  `  `  `  `  `  `  `  `  `");

//todo: Створюємо об'єкт user3:
const user3 = {
    username: "Mango",
};
console.log("user3:", user3); //! {username: 'Mango'}
console.log("`  `  `  `  `  `  `  `  `  `  `");

//todo: Записуємо посилання на функцію у властивість об'єкта
//todo: Зверніть увагу, що це не виклик - немає ():
user3.showContext = showThisArrow;
console.log("user3:", user3); //! {username: 'Mango', showContext: ƒ}
console.log("`  `  `  `  `  `  `  `  `  `  `");

//todo: Викликаємо функцію в контексті об'єкта.
//todo: this буде вказувати на глобальний об'єкт,
//todo: а не на поточний об'єкт, в контексті якого здійснюється виклик.
user3.showContext(); //! window без "use strict" або undefined з "use strict"
console.log("---------------------------------------------------------------------------------------------");

//! Приклад визначення this в методі об'єкта всередині стрілочної функції
console.warn("Приклад визначення this в методі об'єкта всередині стрілочної функції:");
//todo: Створюємо об'єкт user4:
const user4 = {
    username: "Mango",
    showThis4() {
        console.log("this in showThis4: ", this); //! {username: 'Mango', showThis4: ƒ}
        console.log("username in showThis2: ", this.username); //! Mango
        console.log("`  `  `  `  `  `  `  `  `  `  `");

        const foo = () => { 
            console.log("this in function foo():", this); //! {username: 'Mango', showThis4: ƒ}
            console.log("username by this in function foo():", this.username); //! Mango
            console.log("username in function foo():", user4.username); //! Mango
        };
        foo(); //! Mango
    },
};
console.log("user4:", user4); //! {username: 'Mango', showThis2: ƒ}
console.log("`  `  `  `  `  `  `  `  `  `  `  `  `  `  `");

user4.showThis4();
//! this in showThis4: {username: 'Mango', showThis4: ƒ}
//! username in showThis2: Mango
//!  `  `  `  `  `  `  `  `  `  `  `
//! this in function foo(): {username: 'Mango', showThis4: ƒ}
//! username by this in function foo(): Mango
//! username in function foo(): Mango
console.log("---------------------------------------------------------------------------------------------");




//! this в callback-функціях
console.warn("this в callback-функціях:");
//? ✴️ Передаючи методи об'єкта як колбек-функції, контекст не зберігається.
//? Колбек - це посилання на метод, яке присвоюється
//? як значення параметра, що викликається без об'єкта.
console.log(
    `%c
    ❗️ В callback-функціях контекст не зберігається.
    `,
    'color: red; font-size: 16px',
);
const customer = {
    firstName: "Jacob",
    lastName: "Mercer",
    getFullName() {
        return `${this.firstName} ${this.lastName}`;
    },
};

console.log(customer.getFullName());  //! Jacob Mercer

function makeMessage(callback) {
    //todo: callback() - це виклик методу getFullName без об'єкта
    console.log(`Обробляємо заявку від ${callback()}.`);
}

// makeMessage(customer.getFullName); //! ❌ Буде помилка у виклику функції

console.warn("Вирішення цієї проблеми здійснюється за допомогою метода bind() та методів функцій: \n https://textbook.edu.goit.global/javascript-yk5evp/v2/uk/docs/lesson-09/methods#%D0%BC%D0%B5%D1%82%D0%BE%D0%B4-bind-%D0%B8-%D0%BC%D0%B5%D1%82%D0%BE%D0%B4%D1%8B-%D0%BE%D0%B1%D1%8A%D0%B5%D0%BA%D1%82%D0%B0");
//? ✴️ Вирішення цієї проблеми здійснюється за допомогою метода bind() та методів функцій:
//? https://textbook.edu.goit.global/javascript-yk5evp/v2/uk/docs/lesson-09/methods#%D0%BC%D0%B5%D1%82%D0%BE%D0%B4-bind-%D0%B8-%D0%BC%D0%B5%D1%82%D0%BE%D0%B4%D1%8B-%D0%BE%D0%B1%D1%8A%D0%B5%D0%BA%D1%82%D0%B0
console.log("---------------------------------------------------------------------------------------------");






//! Процедурне програмування
console.warn(`Процедурне програмування: \n ${((window.location.href).split('/')).slice(0, -2).join('/') + '/'}${"lesson-FE3_16/images/procedural.png"}`);
//? ✴️ Процедурне програмування
//? - набір не пов'язаних явно функцій і змінних
//? для зберігання і обробки інформації.
//? Цей підхід - простий і прямолінійний,
//? і може використовуватись для задач,
//? в яких немає тісно пов'язаних сутностей (даних і функцій для їх обробки).
//? ✳️ Розглянемо приклад процедурного коду,
//? в якому є змінні і функція для підрахунку результату.
const baseSalary = 30000;
const overtime = 10;
const rate = 20;
console.log(`baseSalary_before: ${baseSalary}, overtime: ${overtime}, rate: ${rate},`);

const getWage = (baseSalary, overtime, rate) => {
    return baseSalary + overtime * rate;
};

console.log("baseSalary_after =", getWage(baseSalary, overtime, rate)); //! 30200
console.log("--------------------------------------------------------------------------------------");




//! Об'єктно-орієнтоване програмування (ООП)
console.warn(`Об'єктно-орієнтоване програмування (ООП): \n ${((window.location.href).split('/')).slice(0, -2).join('/') + '/'}${"lesson-FE3_16/images/oop.png"}`);
//? ✴️ Об'єктно-орієнтоване програмування (ООП)
//? - методологія, яка описує програму
//? як сукупність об'єктів,
//? кожен з яких містить дані (властивості)
//? і методи для взаємодії з ними.
//? ✳️ Розглянемо приклад,
//? в якому використовуємо ООП,
//? зібравши дані в об'єкт employee.
const employee = {
    baseSalary: 30000,
    overtime: 10,
    rate: 20,
    getWage() {
        return this.baseSalary + this.overtime * this.rate;
    },
};

console.log("baseSalary_OOP =", employee.getWage()); //! 30200
//? ✳️ За такого підходу у методі відсутні параметри,
//? використовуються властивості об'єкта,
//? які задаються на момент створення об'єкта
//? і можуть так само змінюватися іншими методами.
//? На виході отримуємо сутність з простим інтерфейсом,
//? що зменшує складність програми.


//? ✴️ З ідеологічної точки зору, 
//? ООП - це підхід до програмування як до моделювання, 
//? що вирішує основне завдання - структурування інформації 
//? з точки зору керованості, 
//? що суттєво покращує контроль процесу моделювання.
console.log(
    `%c
    ООП - це підхід до програмування як до моделювання,
    що вирішує основне завдання
    - структурування інформації з точки зору керованості,
    що суттєво покращує контроль процесу моделювання.
    `,
    'color: blue; font-size: 18px',
);
console.log("--------------------------------------------------------------------------------------");

//! 4.Прототипне наслідування.
console.warn(`Прототипне наслідування: \n ${(window.location.href.split('/')).slice(0, -2).join('/') + '/'}${"lesson-FE3_12/lesson-FE3_12.html"}`);
console.log(
    `%c
    прихована властивість [[Prototype]]
    у консолі браузера відображається як __proto__
    `,
    'color: blue; font-size: 18px',
);
//? ✴️ ООП в JavaScript побудовано на прототипному наслідуванні.
//? Об'єкти можна організувати у ланцюжки таким чином,
//? щоб здійснювався автоматичний пошук властивості в іншому об'єкті,
//? не знайденої в одному об'єкті.
//? Сполучною ланкою виступає
//? спеціальна прихована властивість [[Prototype]],
//? яка в консолі браузера відображається як __proto__.




//! Прототип (предок) об'єкта: методи Object.create() і isPrototypeOf(dog)
console.warn("Прототип (предок) об'єкта: методи Object.create() і isPrototypeOf(dog):");
//? ✴️ Метод Object.create() створює копію
//? старого об'єкту (прототипа або предока)
//? і повертає новий об'єкт, зв'язуючи його зі старим об'єктом.
//? ✳️ Метод Object.create(animal) створює і повертає новий об'єкт,
//? зв'язуючи його з об'єктом animal (прототипом або предоком).
const animal = {
    legs: 4,
};
console.log("animal:", animal); //! {legs: 4}

const dog = Object.create(animal);
dog.name = "Манго";

console.log("dog:", dog); //! {name: 'Манго', 🔻 [[Prototype]]: Object ▶️ legs:4}
console.log("animal.isPrototypeOf(dog):", animal.isPrototypeOf(dog)); //! true

//? ✴️ Об'єкт, на який вказує посилання в __proto__,
//? називається прототипом.
//? У нашому прикладі об'єкт animal
//? - це ❗️ПРОТОТИП❗️ (предок) для об'єкта dog.
//? ✴️ Метод ❗️isPrototypeOf()❗️ перевіряє,
//? чи є об'єкт animal прототипом для dog
//? і повертає true або false.
console.log("------------------------------------------------------------------------------");


//! Алгоритм роботи прототипа об'єкта
console.warn("Алгоритм роботи прототипа об'єкта:");
//? ✳️ Звернення dog.name працює очевидним чином 
//? - повертає власну властивість name об'єкта dog. 
console.log("dog.name:", dog.name); //! 'Манго'

//? ✳️ Звертаючись до dog.legs,
//? інтерпретатор шукає властивість legs в об'єкті dog,
//? не знаходить і продовжує пошук
//? в об'єкті за посиланням з dog.__ proto__,
//? тобто, у цьому випадку, в об'єкті animal - його прототипі.
console.log("dog.legs:", dog.legs); //! 4

//? ✴️ Тобто, прототип
//? - це резервне сховище властивостей і методів об'єкта,
//? автоматично використовується під час їх пошуку.
//? Об'єкт, який виступає прототипом,
//? може також мати свій прототип,
//? наступний - свій, і так далі.
//? Пошук властивості виконується до першого збігу.
//? Інтерпретатор шукає властивість за ім'ям в об'єкті,
//? якщо не знаходить,
//? то звертається до властивості __proto__,
//? тобто переходить за посиланням до об'єкта-прототипу,
//? а потім - до прототипу прототипу.
//? Якщо інтерпретатор дійде до кінця ланцюжка
//? і не знайде властивості з таким ім'ям, то поверне undefined.

//? ✳️⚠️ У специфікації властивість __proto__
//? позначена як [[Prototype]].
//? У цьому випадку важливі подвійні квадратні дужки,
//? вони вказують на те, що це внутрішня, службова властивість.
console.log("------------------------------------------------------------------------------");



//! Метод hasOwnProperty()
console.warn("Метод hasOwnProperty():");
//? ✳️ Після того як ми дізналися
//? про спосіб пошуку властивостей об'єкта,
//? повинно бути зрозуміло,
//? чому цикл for...in не розрізняє
//? властивості об'єкта і його прототипу.
console.log("dog:", dog); //! {name: 'Манго', 🔻 [[Prototype]]: Object ▶️ legs:4}
console.log("`  `  `  `  `  `  `  `");
for (const key in dog) {
    console.log(`${key}: ${dog[key]}`);
};
console.log(". . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .");


//? ✴️❗️ Саме тому ми використовуємо 
//? метод obj.hasOwnProperty(prop), 
//? який повертає true, 
//? якщо властивість prop належить об'єкту obj, 
//? а не його прототипу, 
//? інакше - false.
//? ✴️✅ Повертає true тільки для власних властивостей:
console.log('dog.hasOwnProperty("name"):', dog.hasOwnProperty("name")); //! true
console.log('dog.hasOwnProperty("legs"):', dog.hasOwnProperty("legs")); //! false
console.log("`  `  `  `  `  `  `  `  `  `  `  `");

//? ✴️✅✅ Повертаємо true тільки для власних властивостей
//? за допомогою Цикла for...in:
for (const key in dog) {
    //todo: Якщо це власна властивість - виконуємо тіло if
    if (dog.hasOwnProperty(key)) {
        console.log(`${key}: ${dog[key]}`); //! name: Манго
    };
    //todo: Якщо це невласна властивість - нічого не робимо
};
console.log(". . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .");




//? ✴️✅✅✅ Метод Object.keys(obj) також
//? поверне масив тільки ❗️ВЛАСНИХ❗️ ключів об'єкта obj,
//? тому, на практиці використовують саме його, а не for...in.
const dogKeys = Object.keys(dog);

console.log("dogKeys:", dogKeys); //! ['name']
console.log("------------------------------------------------------------------------------");





//! Сутності ООП
console.warn("Сутності ООП:");
//? ✴️ Уявіть собі, що ми проектуємо автомобіль.
//? У нього буде двигун, чотири колеса, бензобак тощо.
//? Автомобіль повинен мати можливість заводитися,
//? збільшувати і зменшувати швидкість.
//? Ми знаємо як взаємодіє двигун і колеса,
//? тобто за якими законами взаємодіють різні частини машини.


//! 1.Клас
console.warn("1.Клас:");
//? ✴️ Ми описуємо всі запчастини, з яких складається автомобіль,
//? тоді яким чином ці запчастини взаємодіють між собою
//? і що повинен зробити водій, щоб автомобіль
//? загальмував, увімкнулися фари тощо.
//? Результатом нашої роботи буде певний ескіз (шаблон, схема).
//? Ми тільки що розробили те, що в ООП називається класом.
//? ✳️ Клас - спосіб опису сутності, 
//? що визначає стан і поведінку, 
//? яка залежить від цього стану, 
//? а також правила для взаємодії з цією сутністю (контракт).
//? ✳️ У нашому випадку, клас визначає сутність - автомобіль.
//? Властивостями класу будуть двигун, колеса, фари тощо.
//? Методами класу будуть дії: відкрити двері, завести двигун, 
//? збільшити швидкість тощо.
class User {
    //todo: Тіло класу
};
console.log("User:", User); //! {}
console.log("--------------------------------------------------------------------------------------");



//! 2.Екземпляр (об'єкт)
console.warn("2.Екземпляр (об'єкт):");
//? ✳️ Ми спроектували креслення і автомобілі,
//? розроблені на підставі них, сходять з конвеєру.
//? Кожен з них точно повторює креслення,
//? усі системи взаємодіють саме так, як ми спроектували,
//? але кожний автомобіль - унікальний.
//? Вони всі мають номер кузова і двигуна,
//? але всі номери різні, автомобілі розрізняються за кольором,
//? оздобленням салону.
//? Кожен з цих автомобілів - є екземпляом класу.
//? ✴️ Екземпляр (об'єкт) - це окремий представник класу,
//? який має конкретний стан і поведінку,
//? що повністю визначається класом.
//? Це те, що створено за кресленням,
//? тобто на підставі опису з класу.
//? ✳️ Простіше кажучи, 
//? об'єкт має конкретні значення властивостей і методи,
//?  що працюють з цими властивостями на основі правил, 
//? заданих в класі. 
//? У цьому прикладі, якщо клас - це якийсь абстрактний автомобіль на кресленні, 
//? то об'єкт - це конкретний автомобіль, що стоїть у нас під вікнами.
const mango = new User();
console.log("mango:", mango); //! {}

const poly = new User();
console.log("poly:", poly); //! {}
console.log("--------------------------------------------------------------------------------------");



//! 3.Інтерфейс
console.warn("3.Інтерфейс:");
//? ✳️ Коли ми підходимо до автомата з кавою
//? або сідаємо за кермо автомобіля,
//? існує певний набір елементів управління,
//? з якими ми можемо взаємодіяти.
//? ✴️ Інтерфейс
//? - це набір властивостей і методів класу,
//? доступних для використання у роботі з екземпляром.
//? ✳️ По суті, інтерфейс описує ❗️КЛАС❗️,
//? чітко визначаючи усі можливі дії над ним.
//? ✳️ Гарний приклад інтерфейсу - панель приладів автомобіля, 
//? яка дозволяє викликати методи як-от збільшення швидкості, 
//? гальмування, повертання, перемикання передач, увімкнення фар тощо.
class Auto {
    //todo: Набір властивостей
    //todo: Набір методів для взаємодії з користувачем (інтерфейс)
};
console.log("Auto:", Auto); //! {}

const autoFirst = new Auto();
console.log("autoFirst:", autoFirst); //! {}

const autoSecond = new Auto();
console.log("autoSecond:", autoSecond); //! {}
console.log("--------------------------------------------------------------------------------------");


//! Конструктор класу
console.warn("Конструктор класу:");
//? ✴️ Для ініціалізації екземпляра в класі є метод constructor. 
//? Якщо він неоголошений, створюється конструктор за замовчуванням 
//? - порожня функція, яка не змінює екземпляр.
class User1 {
    //todo:  Синтаксис оголошення методу класу:
    constructor(n, e) {
        //todo: Ініціалізація властивостей екземпляра:
        this.name = n;
        this.email = e;
    };
};
console.log("User1:", User1); //!
console.log("`  `  `  `  `  `  `  `  `  `  `  `  `  `  `  `  `  `  `");

const mango1 = new User1("Манго", "mango@mail.com");
console.log("mango1:", mango1); //! User1 {name: 'Манго', email: 'mango@mail.com'}

const poly1 = new User1("Поли", "poly@mail.com");
console.log("poly1:", poly1); //! User1 {name: 'Поли', email: 'poly@mail.com'}
console.log("---------------------------------------------------------------------------------");
const mango2 = {
    name:"Манго",
    email:"mango@mail.com",
};
console.log("mango2:", mango2); //! mango {name: 'Манго', email: 'mango@mail.com'}


//! Об'єкт параметрів
console.warn("Об'єкт параметрів:");
//? ✴️ Клас може приймати велику кількість вхідних даних 
//? для властивостей майбутнього об'єкта. 
//? Тому, до них також можна застосувати патерн «Об'єкт параметрів», 
//? передаючи один об'єкт з логічно іменованими властивостями, 
//? замість непов'язаного набору аргументів.
class User2 {
    //todo: Синтаксис оголошення методу класу:
    //todo: Деструктуризуємо об'єкт:
    constructor({ name:n, email:e, phone:p})   {
        //todo: Ініціалізація властивостей екземпляра:
        this.name = n;
        this.email = e;
        this.phone = p;
    };
};

console.log("User2:", User2); //!
console.log("`  `  `  `  `  `  `  `  `  `  `  `  `  `  `  `  `  `  `");

const mango3 = new User2({
    name: "Манго",
    email: "mango@mail.com",
    phone: "111-11-11",
});
console.log("mango2:", mango3); //! User2 {name: 'Манго', email: 'mango@mail.com', phone: '111-11-11'}

const poly2 = new User2({
    name: "Поли",
    email: "poly@mail.com",
    phone: "222-22-22",
});
console.log("poly2:", poly2); //! User2 {name: 'Поли', email: 'poly@mail.com', phone: '222-22-22'}
console.log("---------------------------------------------------------------------------------");
const object1 = {
    name: "Поли",
    email: "poly@mail.com",
    phone: "222-22-22",
};
// const name = "Поли";
// const email = "poly@mail.com";
// const phone = "222-22-22";
const {name1, email1 , phone1} = object1;

//! Методи класу
console.warn("Методи класу:");
//? ✴️ Для роботи з властивостями майбутнього екземпляра 
//? використовуються методи класу - функції,
//? які будуть доступні екземпляру в його прототипі.
class User5 {
    //todo: Синтаксис оголошення методу класу:
    //todo: Деструктуризуємо об'єкт:
    constructor({ name, email, phone }) {
        //todo: Ініціалізація властивостей екземпляра:
        this.name = name;
        this.email = email;
        this.phone = phone;
    };

    //todo: Метод getEmail()
    getEmail() {
        return this.email;
    };

    //todo: Метод changeEmail()
    changeEmail(newEmail) {
        this.email = newEmail;
    };
};
console.log("User5:", User5); //!
console.log("`  `  `  `  `  `  `  `  `  `  `  `  `  `  `  `  `  `  `");

const mango4 = new User5({
    name: "Манго",
    email: "mango@mail.com",
    phone: "111-11-11",
});
console.log("mango1_before:", mango4); //! User1 {name: 'Манго', email: 'mango@mail.com', phone: '111-11-11'}
console.log("`  `  `  `  `  `  `  `  `  `  `  `  `  `  `  `  `  `  `  `  `  `  `  `  `  `  `  `  `");

console.log("email_before:", mango4.getEmail()); //! email_before: mango@mail.com
mango4.changeEmail("mango-NEW@mail.com");

console.log("email_after:", mango4.getEmail()); //! email_after: mango-NEW@mail.com
console.log("mango1_after:", mango4); //! User1 {name: 'Манго', email: 'mango-NEW@mail.com', phone: '111-11-11'}
console.log("---------------------------------------------------------------------------------------");


//! Приватні властивості та методи
console.warn("Приватні властивості та методи:");
//? ✴️ Інкапсуляція - це концепція,
//? що дозволяє приховати внутрішні деталі класу.
//? Користувач класу повинен отримувати доступ
//? тільки до публічного інтерфейсу
//? - набору публічних властивостей і методів класу.
//? ✳️ В класах інкапсуляція реалізується
//? приватними властивостями та методами,
//? доступ до яких можна отримати тільки всередині класу.
//? ✳️ Припустимо, що пошта користувача
//? повинна бути недоступною для прямої зміни зовні,
//? тобто - приватною.
//? Додаючи до імені властивості символ #,
//? ми робимо її приватною.
//? Оголошення приватної властивості
//? до ініціалізації в конструкторі - ❗️обов'язкове❗️.
class User4 {
    //todo: Необов'язкове оголошення публічних властивостей
    name;
    //todo: Обов'язкове оголошення приватних властивостей
    #email;

    //todo: Синтаксис оголошення методу класу:
    //todo: Деструктуризуємо об'єкт:
    constructor({ name, email, phone }) {
        //todo: Ініціалізація властивостей екземпляра:
        this.name = name;
        this.#email = email;
        this.phone = phone;
    };

    //todo: Метод getEmail()
    getEmail() {
        return this.#email;
    };

    //todo: Метод changeEmail()
    changeEmail(newEmail) {
        this.#email = newEmail;
    };

    //todo: Приватний метод #changePhonePrivat()
    #changePhonePrivat(newPhone) {
        this.phone = newPhone;
    };

    //todo: Публічний метод changePhonePublic()
    changePhonePublic(newPhone) {
        this.#changePhonePrivat(newPhone); //todo: Виклик приватного методу #changePhonePrivat() усередині класу.
    };
};
console.log("User4:", User4); //!
console.log("`  `  `  `  `  `  `  `  `  `  `  `  `  `  `  `  `  `  `");

const mango6 = new User4({
    name: "Манго",
    email: "mango@mail.com",
    phone: "111-11-11",
});
console.log("mango2_before:", mango6); //! User2 {name: 'Манго', email: 'mango@mail.com', phone: '111-11-11'}
console.log("`  `  `  `  `  `  `  `  `  `  `  `  `  `  `  `  `  `  `  `  `  `  `  `  `  `  `  `  `");

// console.log("mango2.#email:", mango2.#email); //! Виникне помилка: Private field '#email' must be declared in an enclosing class
console.log("email_before:", mango6.getEmail()); //! email_before: mango@mail.com

mango6.changeEmail("mango-NEW@mail.com");

console.log("email_after:", mango6.getEmail()); //! email_after: mango-NEW@mail.com
console.log("mango2_after1:", mango6); //! User2 {name: 'Манго', email: 'mango-NEW@mail.com', phone: '111-11-11'}
console.log(". . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .");

//todo: Виклик приватного методу #changePhone():
// mango2.#changePhonePrivat("333-33-33"); //! Виникне помилка: Private field '#changePhonePrivat' must be declared in an enclosing class
mango6.changePhonePublic("333-33-33"); 

console.log("mango2.phone:", mango6.phone); //! 333-33-33
console.log("mango2_after2:", mango6); //! User2 {name: 'Манго', email: 'mango-NEW@mail.com', phone: '333-33-33'}
console.log("---------------------------------------------------------------------------------------");



//! Геттери і сеттери
console.warn("Геттери і сеттери:");
//? ✴️ Геттери і сеттери
//? - це коротший синтаксис оголошення методів
//? для взаємодії з властивостями.
//? Геттер і сеттер імітують звичайну публічну ❗️ВЛАСТИВІСТЬ❗️ класу,
//? але дозволяють змінювати інші властивості зручнішим способом.
//? Геттер виконується при спробі отримати значення властивості,
//? а сеттер - при спробі його змінити.
//? ✳️ Геттери і сеттери доречно використовувати
//? для простих операцій читання і зміни значення властивостей,
//? особливо приватних, як їх публічний інтерфейс.
//? ❗️❗️❗️Для роботи з властивістю, яка зберігає масив або об'єкт,
//? вони не підійдуть.
class User6 {
    //todo: Обов'язкове оголошення приватних властивостей
    #email;

    //todo: Синтаксис оголошення методу класу:
    //todo: Деструктуризуємо об'єкт:
    constructor({ name, email, phone }) {
        //todo: Ініціалізація властивостей екземпляра:
        this.name = name;
        this.#email = email;
        this.phone = phone;
    };

    //todo: ❌ Метод getEmail()
    getEmail() {
        return this.#email;
    };

    //todo: ❌ Метод changeEmail()
    changeEmail(newEmail) {
        this.#email = newEmail;
    };

    //todo: ✅ Геттер email
    get email() {
        return this.#email;
    }

    //todo:✅ Сеттер email
    set email(newEmail) {
        if (newEmail === "") {
            console.error("Помилка! Пошта не може бути порожнім рядком!");
            return;
        };

        this.#email = newEmail;
    };
};
console.log("User6:", User6); //!
console.log("`  `  `  `  `  `  `  `  `  `  `  `  `  `  `  `  `  `  `");

const mango7 = new User6({
    name: "Манго",
    email: "mango@mail.com",
    phone: "111-11-11",
});
console.log("mango7_before:", mango7); //! User3 {name: 'Манго', phone: '111-11-11', #email: 'mango@mail.com'}
console.log("`  `  `  `  `  `  `  `  `  `  `  `  `  `  `  `  `  `  `  `  `  `  `  `  `  `  `  `  `");

//todo: ❌ Використання методів: getEmail() і changeEmail():
console.log("email_before1:", mango7.getEmail()); //! email_before: mango@mail.com
mango3.changeEmail("mango-NEW@mail.com");
console.log("email_after1:", mango7.getEmail()); //! email_after: mango-NEW@mail.com

//todo: ✅ Використання геттера і сеттера: get email() і set email():
//? ✳️ Ми оголосили геттер і сеттер email,
//? поставивши перед ім'ям властивості ключові слова get і set.
//? Всередині цих методів ми або повертаємо значення
//? приватної властивості #email, або змінюємо її значення.
//? Геттер і сеттер ❗️застосовуються в парі і повинні називатися однаково❗️.
console.log("email_before2:", mango7.email); //! email_after1: mango-NEW@mail.com
mango7.email = "mango-SET@mail.com";
console.log("email_after2:", mango7.email); //! email_after2: mango-SET@mail.com

console.log("mango3_after:", mango7); //! User3 {name: 'Манго', phone: '111-11-11', #email: 'mango-SET@mail.com'}
console.log(". . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . ."); 

//? ✳️ Ще одна перевага в тому, що це методи,
//? а значить, під час запису можна виконати додатковий код,
//? наприклад, з будь-якими перевірками,
//? на відміну від виконання цієї ж операції безпосередньо з властивістю.
mango7.email = ""; //! Помилка! Пошта не може бути порожнім рядком!
console.log("---------------------------------------------------------------------------------------");


//! Статичні властивості
console.warn("Статичні властивості:");
//? ✴️ Крім публічних і приватних властивостей майбутнього екземпляра,
//? в класі можна оголосити його власні властивості,
//? ❗️доступні тільки класові❗️, але не його екземплярам
//? - статичні властивості (static).
//? Вони корисні для зберігання інформації, що стосується класу.
//? ✳️ Додамо класу користувача приватну властивість
//? role - його роль, що визначає набір прав,
//? наприклад, адміністратор, редактор, звичайний користувач тощо.
//? Можливі ролі користувачів будемо зберігати
//? як статичну властивість Roles - об'єкт з властивостями.
//? ✴️ Статичні властивості оголошуються в тілі класу.
//? Перед ім'ям властивості додається ключове слово ❗️static❗️.
class User7 {
    //todo: Оголошення та ініціалізація статичної властивості:
    static Roles = {
        ADMIN: "admin",
        EDITOR: "editor",
    };

    #email;
    #role;

    constructor({ email, role }) {
        this.#email = email;
        this.#role = role;
    }

    get role() {
        return this.#role;
    }

    set role(newRole) {
        this.#role = newRole;
    }
};
console.log("User4:", User4); //!
console.log("`  `  `  `  `  `  `  `  `  `  `  `  `  `  `  `  `  `  `  `  `  `  `");

const mango8 = new User7({
    email: "mango@mail.com",
    role: User7.Roles.ADMIN,
});
console.log("mango4_before:", mango8); //! User4 {#email: 'mango@mail.com', #role: 'admin'}
console.log("`  `  `  `  `  `  `  `  `  `  `  `  `  `  `  `  `  `  `  `  `  `  `");

console.log("mango4.Roles:", mango8.Roles); //! undefined
console.log("User4.Roles:", User7.Roles); //! { ADMIN: "admin", EDITOR: "editor" }

console.log("mango4.role:", mango8.role); //! "admin"
mango8.role = User4.Roles.EDITOR;
console.log("mango4.role:", mango8.role); //! "editor"

console.log("mango4_after:", mango8); //! User4 {#email: 'mango@mail.com', #role: 'editor'}

//? ✳️ Статичні властивості також можуть бути приватними,
//? тобто доступними тільки всередині класу.
//? Для цього ім'я властивості повинно починатися з символу #,
//? так само, як приватні властивості.
//? Звернення до приватної статичної властивості за межами тіла класу викличе помилку.
console.log("---------------------------------------------------------------------------------------");


//! Статичні методи
console.warn("Статичні методи:");
//? ✴️ У класі можна оголосити не тільки методи майбутнього екземпляра,
//? а також методи, доступні тільки класу - статичні методи,
//? які можуть бути як публічні, так і приватні.
//? Синтаксис оголошення аналогічний статичним властивостям,
//? за винятком того, що значенням буде метод.
//? ✴️❗️❗️❗️ Особливість статичних методів у тому,
//? що під час їх виклику ключове слово this посилається на сам клас.
//? Це означає, що статичний метод може отримати доступ
//? до статичних властивостей класу, але не до властивостей екземпляра.
//? Логічно, тому що статичні методи викликає сам клас, а не його екземпляри.
class User5 {
    static #takenEmails = [];

    static isEmailTaken(email) {
        return User5.#takenEmails.includes(email);
    };

    #email;

    constructor({ email }) {
        this.#email = email;
        User5.#takenEmails.push(email);
    };
};
console.log("User5:", User5); //!
console.log("`  `  `  `  `  `  `  `  `  `  `  `  `  `  `  `  `");

const mango5 = new User5({ email: "mango@mail.com" });
console.log("mango5:", mango5); //! User5 {#email: 'mango@mail.com'}
console.log("`  `  `  `  `  `  `  `  `  `  `  `  `  `  `  `  `");

console.log("Чи є така пошта - poly@mail.com?", User5.isEmailTaken("poly@mail.com")); //! false
console.log("Чи є така пошта - mango@mail.com?", User5.isEmailTaken("mango@mail.com")); //! true
console.log("---------------------------------------------------------------------------------------");
