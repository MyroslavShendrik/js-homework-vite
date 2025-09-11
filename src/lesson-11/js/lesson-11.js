//? ❗️❗️❗️ Для виконання всіх завдань необхідно використати ключове слово this ❗️❗️❗️
//todo [1]
console.log(
  "%c [1] ",
  "color: yellow; background-color: #2274A5",
);
//? ✴️ Створіть об'єкт "bankAccount" з трьома властивостями:
//?  "ownerName", "accountNumber", "balance"
//? та додайте їм будь-яких логічних значень значень.
//? ✴️ За допомогою додавання властивостей
//? додайте до об'єкту метод "deposit",
//? який, використовуючи методи взаємодії з користувачем,
//? додає гроші на рахунок,
//? та виводить повідомлення про залишок на рахунку
//? дублюючи його в консоль.
//? ✴️ За допомогою додавання властивостей,
//? додайте до об'єкту метод "withdraw",
//? який, використовуючи методи взаємодії з користувачем,
//? дозволяє знімати гроші з рахунку,
//? якщо на рахунку достатньо коштів,
//? та виводить повідомлення про залишок на рахунку,
//? дублюючи його в консоль.
//? Якщо на рахунку не вистачає коштів, то він виводить повідомлення:
//? "⛔️ Недостатньо коштів на вашому рахунку!",
//? дублюючи його в консоль.
//? ✳️ За допомогою виклика методу "deposit" об'єкта "bankAccount" додай кошти на рахунок.
//? ✳️ За допомогою виклика методу "withdraw" об'єкта "bankAccount" зніми кошти з рахуноку.
//! Код виконаного завдання
let bankAccount = {
  ownerName: "Miroslav Shendryk",
  accountNumber: "123456789",
  balance: 5000,

  deposit() {
    let input = prompt("Введіть суму для поповнення:")?.trim();
    let amount = Number(input);
    if (!input || isNaN(amount) || amount <= 0) {
      alert("⛔️ Введіть коректне позитивне число!");
      console.log("⛔️ Некоректне значення для поповнення!");
      return;
    }
    this.balance += amount;
    alert(`✅ Кошти додано. Залишок на рахунку: ${this.balance} грн`);
    console.log(`✅ Кошти додано. Залишок на рахунку: ${this.balance} грн`);
  },

  withdraw() {
    let input = prompt("Введіть суму для зняття:")?.trim();
    let amount = Number(input);
    if (!input || isNaN(amount) || amount <= 0) {
      alert("⛔️ Введіть коректне позитивне число!");
      console.log("⛔️ Некоректне значення для зняття!");
      return;
    }
    if (this.balance >= amount) {
      this.balance -= amount;
      alert(`✅ Кошти знято. Залишок на рахунку: ${this.balance} грн`);
      console.log(`✅ Кошти знято. Залишок на рахунку: ${this.balance} грн`);
    } else {
      alert("⛔️ Недостатньо коштів на рахунку!");
      console.log("⛔️ Недостатньо коштів на рахунку!");
    }
  }
};

bankAccount.deposit();
bankAccount.withdraw();
// console.log("--------------------------------------------------");

//todo [2]
console.log(
  "%c [2] ",
  "color: yellow; background-color: #2274A5",
);


//? ✴️ Створіть об'єкт "weather" з трьома властивостями:
//? "temperature", "humidity", "windSpeed"  
//? та додайте їм будь-яких логічних значень значень.
//? ✴️ За допомогою додавання властивостей
//? додайте до об'єкту метод,
//? який, використовуючи методи взаємодії з користувачем, 
//? отримує значення температури та повертає "true",
//? якщо температура нижче 0 градусів Цельсія, 
//? та "false", якщо температура вище або дорівнює 0 градусів Цельсія. 
//? ✳️ Якщо метод повернув "true" вивести повідомлення 
//? “Температура нижче 0 градусів Цельсія” і навпаки, 
//? дублюючи ці повідомлення  в консоль.
//! Код виконаного завдання
const weather = {
  temperature: -9,
  humidity: "80%",
  windSpeed: "2 м/с",
};

weather.isTemperatureBelowZero = function () {
  let input = prompt("Введіть температуру в градусах Цельсія:").trim();
  console.log("Введено:", input);

  const newTemperature = Number(input);
  console.log("Перетворене число:", newTemperature);

  if (isNaN(newTemperature)) {
    alert("Будь ласка, введіть коректне числове значення.");
    console.log("Некоректне значення:", input);
    return;
  }

  if (newTemperature < 0) {
    alert("Температура нижче 0 градусів Цельсія");
    console.log("Температура нижче 0 градусів Цельсія");
    return true;
  } else {
    alert("Температура 0 градусів Цельсія або вище");
    console.log("Температура 0 градусів Цельсія або вище");
    return false;
  }
};

console.log("weather:", weather);
console.log("1️⃣ Temperature:", weather.temperature);
console.log(weather.isTemperatureBelowZero());







//todo [3]
console.log(
  "%c [3] ",
  "color: yellow; background-color: #2274A5",
);
//? Створіть об’єкт "user" з трьома властивостями:
//? "name", "email", "password"
//? та додайте їм будь-яких логічних значень значень.
//? ✴️ За допомогою додавання властивостей
//? додайте до об'єкту метод "login",
//? який буде перевіряти правильність
//? введеного name, email та password на такі умови:
//?  - ім'я <name> містить не менше 3 символів,
//?  - електронна пошта <email> містить символ @ та крапку після неї,
//?  - пароль <password> містить не менше 6 символів.
//? ❌ Якщо введені дані не пройшли ці перевірки
//? треба вивести в консоль відповідні повідомлення з помилками(помилкою).
//? ✅ Якщо ВСІ введені дані пройшли перевірки,
//? треба послідовно вивести в косоль значення ВСІХ цих даних.
//! Код виконаного завдання
let user = {
  name: "Miroslav",
  email: "miroslavShen23@gmail.com",
  password: "060408",
};

user.login = function () {
  let hasError = false;

  if (this.name.length < 3) {
    console.log("❌ Ім'я повинно містити щонайменше 3 символи");
    hasError = true;
  }

  if (!this.email.includes("@") || this.email.indexOf(".") < this.email.indexOf("@")) {
    console.log("❌ Електронна пошта повинна містити '@' та крапку після нього");
    hasError = true;
  }

  if (this.password.length < 6) {
    console.log("❌ Пароль повинен містити щонайменше 6 символів");
    hasError = true;
  }

  if (!hasError) {
    console.log("✅ Успішний вхід:");
    console.log("Ім'я:", this.name);
    console.log("Email:", this.email);
    console.log("Пароль:", this.password);
  }
};

user.login();


console.log("--------------------------------------------------");


//todo [4]
console.log(
  "%c [4] ",
  "color: yellow; background-color: #2274A5",
);
//? ✴️ Створіть об'єкт "movie" з чотирма властивостями:
//? "title", "director", "year", "rating".
//? ✴️ За допомогою додавання властивостей,
//? додайте до об'єкту метод,
//? який повертає "true",
//? якщо рейтинг фільму вище 8,
//? та "false",
//? якщо рейтинг фільму 8 або нижче.
//? Послідовно вивести значення ВСІХ властивостей в косоль
//? Якщо метод повернув "true",
//? то колір тексту поля title в консолі повинен бути зелений.
//? Якщо метод повернув "false",
//? то колір тексту поля title в консолі повинен бути червоний.
//! Код виконаного завдання
const movie = {
  title: "A Good Year",
  director: "Ridley Scott",
  year: 2006,
  rating: 7.1,
};


movie.isRatingMoreThanEight = function () {
  return this.rating > 8;
};

let isHighRated = movie.isRatingMoreThanEight();

console.log("Title:", movie.title);
console.log("Director:", movie.director);
console.log("Year:", movie.year);
console.log("Rating:", movie.rating);
if (isHighRated) {
  console.log("%cTitle: " + movie.title, "color: green;");
} else {
  console.log("%cTitle: " + movie.title, "color: red;");
}

console.log("--------------------------------------------------");
