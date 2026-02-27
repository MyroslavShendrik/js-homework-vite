//todo: Завдання-1 (task-1)
//* Завдання: "Таймер зворотного відліку від майбутньої дати".
//? Створи плагін налаштовуваного таймера, який веде зворотний відлік
//? до попередньо визначеної дати.
//? Такий плагін може використовуватися в блогах і інтернет-магазинах
//? та на сторінках реєстрації подій, під час технічного обслуговування і т. д.

//? HTML-розмітка має інпут для введення майбутньої дати:
//! <label class="input-label">
//!     Введіть майбутню дату<i>(більше від сьогоднішньої дати на 1 день)</i> :
//!     <input id="target-date" type="datetime-local">
//! </label>

//? Плагін очікує наступну HTML-розмітку і показує чотири цифри:
//? дні,
//? години,
//? хвилини
//? секунди
//? в форматі XX:XX:XX:XX.
//? Кількість днів може складатися з більш ніж двох цифр.
//!<div class="timer" id="timer-1">
//!    <div class="field">
//!        <span class="label">Days</span>
//!        <span class="value" data-value="days">--</span>
//!
//!    </div>
//!    <div class="field">
//!        <span class="label">Hours</span>
//!        <span class="value" data-value="hours">--</span>
//!    </div>
//!    <div class="field">
//!        <span class="label">Minutes</span>
//!        <span class="value" data-value="mins">--</span>
//!    </div>
//!    <div class="field">
//!        <span class="label">Seconds</span>
//!        <span class="value" data-value="secs">--</span>
//!
//!    </div>
//!</div>

//? Плагін — це клас CountdownTimer,
//? екземпляр якого створює новий таймер з налаштуваннями:
//! new CountdownTimer({
//!     selector: '#timer-1',
//!     targetDate: new Date('Jul 17, 2019'),
//! });

//? Для підрахунку значень використовуй такі готові формули,
//? де time — різниця між targetDate і поточною датою nowDate:
/*
 * Дні, що залишилися: ділимо значення UTC на 1000 * 60 * 60 * 24, кількість
 * мілісекунд в один день (мілісекунди * секунди * хвилини * години)
 */
// const days = Math.floor(time / (1000 * 60 * 60 * 24));

/*
 * Решта годин: отримуємо залишок від попереднього розрахунку за допомогою оператора
 * залишку% і ділимо його на кількість мілісекунд в одній годині
 * (1000 * 60 * 60 = мілісекунди * хвилини * секунди)
 */
// const hours = Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));

/*
 * Решта хвилин: отримуємо хвилини, що залишилися і ділимо їх на кількість
 * мілісекунд в одній хвилині (1000 * 60 = мілісекунди * секунди)
 */
// const mins = Math.floor((time % (1000 * 60 * 60)) / (1000 * 60));

/*
 * Решта секунд: отримуємо секунди, які залишилися і ділимо їх на кількість
 * миллисекунд в одной секунде (1000)
//  */
// const secs = Math.floor((time % (1000 * 60)) / 1000);








class CountdownTimer {
  constructor({ selector, targetDate }) {
    this.container = document.querySelector(selector);
    this.targetDate = targetDate; // UNIX (number)
    this.intervalId = null;

    this.daysEl = this.container.querySelector('[data-value="days"]');
    this.hoursEl = this.container.querySelector('[data-value="hours"]');
    this.minsEl = this.container.querySelector('[data-value="mins"]');
    this.secsEl = this.container.querySelector('[data-value="secs"]');
  }

  start() {
    this.intervalId = setInterval(() => {

      const now = Date.now(); // ✅ UNIX
      const time = this.targetDate - now;

      if (time <= 0) {
        clearInterval(this.intervalId);
        this.updateDisplay(0, 0, 0, 0);
        alert("Час вийшов!");
        return;
      }

      const days = Math.floor(time / (1000 * 60 * 60 * 24));
      const hours = Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const mins = Math.floor((time % (1000 * 60 * 60)) / (1000 * 60));
      const secs = Math.floor((time % (1000 * 60)) / 1000);

      this.updateDisplay(days, hours, mins, secs);

    }, 1000);
  }

  updateDisplay(days, hours, mins, secs) {
    this.daysEl.textContent = days;
    this.hoursEl.textContent = this.pad(hours);
    this.minsEl.textContent = this.pad(mins);
    this.secsEl.textContent = this.pad(secs);
  }

  pad(value) {
    return String(value).padStart(2, '0');
  }
}


// =======================
// ЛОГІКА КНОПКИ
// =======================

const input = document.getElementById('target-date');
const startBtn = document.getElementById('start-btn');

let timer = null;

startBtn.addEventListener('click', () => {

  if (!input.value) {
    alert("Оберіть дату!");
    return;
  }

  // ✅ Перетворення input.value у UNIX (мілісекунди)
  const selectedDate = new Date(input.value).getTime();
  const now = Date.now();

  // Мінімум +1 день
  if (selectedDate - now < 86400000) {
    alert("Дата повинна бути мінімум на 1 день більше!");
    return;
  }

  // Якщо таймер вже існує — зупиняємо
  if (timer) {
    clearInterval(timer.intervalId);
  }

  // Створюємо новий таймер
  timer = new CountdownTimer({
    selector: '#timer-1',
    targetDate: selectedDate, // число (UNIX)
  });

  timer.start();

});