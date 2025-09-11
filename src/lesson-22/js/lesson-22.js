
//!завдання 1
//? Створіть слайдер на сторінці, який показує зображення.
//?  При переміщенні слайдера виконуйте деякі дії, наприклад, змінюйте розмір зображення.
//?  Використайте debounce для того, щоб ці дії виконувалися не занадто часто при швидкому
//?  переміщенні слайдера.

//! код:
const slider = document.querySelector('.slider__input');
const image = document.querySelector('.slider__image');
//! var1
const resizeImage = _.debounce((value) => {
  image.style.transform = `scale(${value / 50})`;
}, 500);
//! var2
// const resizeImage = () => {
//     const scaleValue = slider.value;
//     image.style.width = `${scaleValue}%`;
// };
// const debouncedResize = _.debounce(resizeImage, 300);
//! картинка заповзає на повзунок 
slider.addEventListener('input', (e) => {
  resizeImage(e.target.value);
});
//!завдання 2
//? Потрібно забезпечити плавне переміщення об'єкту при русі мишкою.
//? Рішення: використовуйте метод debounce з бібліотеки lodash.
//? Встановіть час затримки в мілісекундах, наприклад 100мс, і передайте функцію,
//? яка буде виконуватися при переміщенні мишкою.
//! код:
const area = document.querySelector('.move-area');
const box = document.getElementById('box');

area.addEventListener('mousemove', _.debounce((e) => {
  const boxHalf = box.offsetWidth / 2;
  const maxX = area.clientWidth - box.offsetWidth;
  const maxY = area.clientHeight - box.offsetHeight;

  let x = e.offsetX - boxHalf;
  let y = e.offsetY - boxHalf;


  x = Math.max(0, Math.min(x, maxX));
  y = Math.max(0, Math.min(y, maxY));

  box.style.left = x + 'px';
  box.style.top = y + 'px';
}, 100));
//! квадрат вилазить за межі зони 
//! картинка знову вилазить на інші елементи 
