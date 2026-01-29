//! 1
// let count = 0;

// const intervalId = setInterval(() => {
//   count++;
//   console.log(`Повідомлення №${count}`);

//   if (count === 5) {
//     clearInterval(intervalId);
//     console.log("Інтервал зупинено");
//   }
// }, 1000);
//! 2
// const box = document.querySelector('.box');
// let size = 100;

// setInterval(() => {
//   size += 10;
//   box.style.width = size + 'px';
//   box.style.height = size + 'px';
//   box.style.backgroundColor = size % 20 === 0 ? 'red' : 'blue';
// }, 500);


//!3
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

//! 4 
// const time = Number(prompt("Введіть час у секундах"));

// setTimeout(() => {
//   alert(`Пройшло ${time} секунд!`);
// }, time * 1000);

