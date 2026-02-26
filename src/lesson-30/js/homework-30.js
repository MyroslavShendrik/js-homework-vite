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