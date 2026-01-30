//todo: Завдання-1 (task-1)
//* Завдання "Таймер інтервалу":
//? Створіть програму, яка виводить повідомлення
//? кожну секунду за допомогою setInterval.
//? Після 5 повідомлень зупиніть виконання
//? інтервалу за допомогою clearInterval.

//?

// ! 1
// let count = 0;

// const intervalId = setInterval(() => {
//   count++;
//   console.log(`Повідомлення №${count}`);

//   if (count === 5) {
//     clearInterval(intervalId);
//     console.log("Інтервал зупинено");
//   }
// }, 1000);
// //! var 1.1 таймер за допомогою setTimeout()
// let timerId;
// const timeBeforeStart = 1000; //! час між відліками
// const iterations = 10; //! кількість ітерацій

// for (let index = 1; index <= iterations; index++) {
//     timerId = setTimeout(
//         function timeСount() {
//             console.log(index, "Спрацювала функція timeСount()");
//         }, index * timeBeforeStart);
// };

//todo: Завдання-2 (task-2)
//* Завдання "Анімація елементів":
//? Створіть кілька елементів на сторінці
//? і реалізуйте просту анімацію, змінюючи їх розмір,
//? положення чи стилі через певний інтервал
//? за допомогою setInterval.
// const box = document.querySelector('.box');
// let size = 100;

// setInterval(() => {
//   size += 10;
//   box.style.width = size + 'px';
//   box.style.height = size + 'px';
//   box.style.backgroundColor = size % 20 === 0 ? 'red' : 'blue';
// }, 500);


//todo: Завдання-3 (task-3)
//* Завдання "Інтерактивна гра":
//? Створіть просту інтерактивну гру,
//? де гравець має натискати на елементи
//? на сторінці протягом певного інтервалу часу,
//? використовуючи setInterval.
//? Реалізуйте лічильник очок та відслідковуйте
//? кількість натисків гравця.

// const target = document.querySelector('.target');
// const scoreEl = document.querySelector('.score');
// let score = 0;

// target.addEventListener('click', () => {
//   score++;
//   scoreEl.textContent = score;
// });

// setInterval(() => {
//   const x = Math.random() * 300;
//   const y = Math.random() * 300;
//   target.style.transform = `translate(${x}px, ${y}px)`;
// }, 1000);

//todo: Завдання-4 (task-4)
//* Завдання "Контроль часу": 
//? Створіть програму, яка дозволяє користувачу 
//? встановити певний час (у секундах) за допомогою 
//? введення з клавіатури. 
//? Потім використовуйте setTimeout або setInterval, 
//? щоб після встановленого часу вивести повідомлення.

const time = Number(prompt("Введіть час у секундах"));

setTimeout(() => {
  alert(`Пройшло ${time} секунд!`);
}, time * 1000);

