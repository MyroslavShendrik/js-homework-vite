//todo [1]
console.log(
    "%c [1] ",
    "color: yellow; background-color: #2274A5",
);
//? 🔸 Створити галерею зображень, яку можна прогортати
//? за допомогою клавіш клавіатури (наприклад, вліво / вправо)
//? ✴️ В HTML є такі елементи:


//! Код виконаного завдання
let currentIndex = 0;
const imageElements = document.querySelectorAll('.image');
console.log("imageElememts:", imageElements);
console.log("imageElememts.length:", imageElements.length);

function updateVisibleImage(index) {
  imageElements.forEach((img, i) => {
    img.style.display = i === index ? 'block' : 'none';
  });
}

updateVisibleImage(currentIndex);

document.addEventListener('keydown', (event) => {
  if (event.key === 'ArrowRight') {
    currentIndex = (currentIndex + 1) % imageElements.length;
    updateVisibleImage(currentIndex);
  } else if (event.key === 'ArrowLeft') {
    currentIndex = (currentIndex - 1 + imageElements.length) % imageElements.length;
    updateVisibleImage(currentIndex);
  }
});
console.log("--------------------------------------------------");
//todo [2]
console.log(
    "%c [2] ",
    "color: yellow; background-color: #2274A5",
);
//? 🔸 Напиши скрипт створення і очищення колекції елементів.
//? Користувач вводить кількість елементів в input 
//? і натискає кнопку Створити, після чого рендериться колекція. 
//? При натисканні на кнопку Очистити, колекція елементів очищається.
//? 🔸 Створи функцію createBoxes(amount), 
//? яка приймає 1 параметр amount - число.
//? Функція створює стільки div, 
//? скільки вказано в amount і додає їх в div#boxes.
//? 🔸 Кожен створений div:
//? - Має випадковий rgb колір фону
//? - Розміри найпершого div — 30px на 30px
//? - Кожен наступний div після першого, 
//?   повинен бути ширше і вище попереднього на 10px
//? 🔸 Створи функцію destroyBoxes(), яка очищає div#boxes.
//? ✴️ В HTML є такі елементи:
/*
<div id="controls">
    <input type="number" min="0" max="100" step="1" />
    <button type="button" data-action="render">Створити</button>
    <button type="button" data-action="destroy">Очистити</button>
</div>

<div id="boxes"></div>
*/
//! Код виконаного завдання
const input = document.querySelector('#controls input');
const renderBtn = document.querySelector('[data-action="render"]');
const destroyBtn = document.querySelector('[data-action="destroy"]');
const boxesContainer = document.querySelector('#boxes');

renderBtn.addEventListener('click', () => {
  const amount = Number(input.value);
  createBoxes(amount);
});

destroyBtn.addEventListener('click', destroyBoxes);
function createBoxes(amount) {
  destroyBoxes(); 

  const boxes = []; 
  let size = 30;

  for (let i = 0; i < amount; i++) {
    const box = document.createElement('div');
    console.log("box:",box)
    box.style.width = `${size}px`;
    box.style.height = `${size}px`;
    box.style.backgroundColor = getRandomColor();
    box.style.marginBottom = '5px';
    boxes.push(box);
    size += 10;
  }
  console.log("boxes:",boxes);
  boxesContainer.append(...boxes);
}
function destroyBoxes() {
  boxesContainer.innerHTML = '';
}
function getRandomColor() {
  const r = Math.floor(Math.random() * 256);
  const g = Math.floor(Math.random() * 256);
  const b = Math.floor(Math.random() * 256);
  return `rgb(${r}, ${g}, ${b})`;
}

console.log("--------------------------------------------------");
input.addEventListener("input", ()=>{
  console.log("action input:",typeof input.value);
})