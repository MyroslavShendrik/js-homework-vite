import { galleryItems } from './app.js';
import { openModal, closeModal } from './modal.js';
console.log("galleryItems:", galleryItems);
//? Створи галерею з можливістю кліка по її елементах
//? і перегляду повнорозмірного зображення в модальному вікні.
//? Прев'ю результату подивися за посиланням: https://monosnap.com/file/KKoRHdov8Thm2oWpzURSOg2L6iDCp3

//? ✴️ Розбий завдання на кілька підзадач:

//? 🔸•  Створення і рендер розмітки по масиву даних galleryItems з app.js і наданим шаблоном.
//? 🔸•  Реалізація делегування на галереї ul.js - gallery і отримання url великого зображення.
//? 🔸•  Відкриття модального вікна при натисканні на елементі галереї.
//? 🔸•  Підміна значення атрибута src елемента img.lightbox__image.
//? 🔸•  Закриття модального вікна при натисканні на кнопку button[data - action= ""close - lightbox"].
//? 🔸•  Очищення значення атрибута src елемента img.lightbox__image.
//?     Це необхідно для того, щоб при наступному відкритті модального вікна,
//?     поки вантажиться зображення, ми не бачили попереднє.

//? ✴️ Стартові файли
//? 🔸•  В папці src ти знайдеш стартові файли проєкту з базовою розміткою і готовими стилями:
//?     (https://github.com/goitacademy/javascript-homework/tree/main/homework-08/src).
//? 🔸•  В файлі app.js є масив об'єктів galleryItems, які містять інформацію про зображення:
//?     маленьке зображення, оригінальне і опис.

//? ✴️ Розмітка елемента галереї:

{/* <li class="gallery__item">
    <a
        class="gallery__link"
        href="https://cdn.pixabay.com/photo/2010/12/13/10/13/tulips-2546_1280.jpg"
    >
        <img
            class="gallery__image"
            src="https://cdn.pixabay.com/photo/2010/12/13/10/13/tulips-2546__340.jpg"
            data-source="https://cdn.pixabay.com/photo/2010/12/13/10/13/tulips-2546_1280.jpg"
            alt="Tulips"
        />
    </a>
</li> */}

//? Посилання на оригінальне зображення повинне зберігатися в data - атрибуті source на елементі img,
//? і вказуватися в hrefпосилання(це необхідно для доступності).

//? ❗️❗️❗️ ОБОВ’ЯЗКОВО:
//? 🔸•  Закриття модального вікна при натисканні на div.lightbox__overlay.
//? 🔸•  Закриття модального вікна після натискання клавіші ESC.
//? 🔸•  Перегортування зображень галереї у відкритому модальному вікні клавішами "вліво" і "вправо".
//! Код виконаного завдання:

const galCloseBtn = document.querySelector('.lightbox__close-btn');
const gal = document.querySelector('.js-gallery');
const box = document.querySelector('.js-lightbox');
const img = document.querySelector('.lightbox__image');
const clsBtn = document.querySelector('[data-action="close-lightbox"]');
const ov = document.querySelector('.lightbox__overlay');
const counter = document.querySelector('.lightbox__counter');
const caption = document.querySelector('.lightbox__caption');

let idx = -1;
galCloseBtn.addEventListener('click', close);
gal.innerHTML = galleryItems
  .map(
    (el, i) =>
      `<li class="gallery__item">
        <a class="gallery__link" href="${el.original}">
          <img
            class="gallery__image"
            src="${el.preview}"
            data-source="${el.original}"
            data-idx="${i}"
            alt="${el.description}"
          />
        </a>
      </li>`
  )
  .join('');

gal.addEventListener('click', (e) => {
  e.preventDefault();
  if (e.target.nodeName !== 'IMG') return;

  idx = Number(e.target.dataset.idx);
  changeImg();
  openModal(box);
});

function close() {
  closeModal(box, img);
  idx = -1;
}

clsBtn.addEventListener('click', close);
ov.addEventListener('click', close);
galCloseBtn.addEventListener('click', close);

window.addEventListener('keydown', (e) => {
  if (idx === -1) return;

  if (e.key === 'Escape') {
    close();
  }

  if (e.key === 'ArrowRight') {
    idx++;
    if (idx >= galleryItems.length) idx = 0;
    changeImg();
  }

  if (e.key === 'ArrowLeft') {
    idx--;
    if (idx < 0) idx = galleryItems.length - 1;
    changeImg();
  }
});

function changeImg() {
  img.src = galleryItems[idx].original;
  img.alt = galleryItems[idx].description;

  counter.textContent = `${idx + 1} / ${galleryItems.length}`;
  caption.textContent = galleryItems[idx].description;
}