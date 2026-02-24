class CountdownTimer {
  constructor({ selector, targetDate }) {
    this.container = document.querySelector(selector);
    this.targetDate = targetDate;
    this.intervalId = null;

    this.daysEl = this.container.querySelector('[data-value="days"]');
    this.hoursEl = this.container.querySelector('[data-value="hours"]');
    this.minsEl = this.container.querySelector('[data-value="mins"]');
    this.secsEl = this.container.querySelector('[data-value="secs"]');
  }

  start() {
    this.intervalId = setInterval(() => {
      const now = new Date();
      const time = this.targetDate - now;

      if (time <= 0) {
        clearInterval(this.intervalId);
        alert("Час вийшов!");
        return;
      }

      const days = Math.floor(time / (1000 * 60 * 60 * 24));
      const hours = Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const mins = Math.floor((time % (1000 * 60 * 60)) / (1000 * 60));
      const secs = Math.floor((time % (1000 * 60)) / 1000);

      this.daysEl.textContent = days;
      this.hoursEl.textContent = this.pad(hours);
      this.minsEl.textContent = this.pad(mins);
      this.secsEl.textContent = this.pad(secs);

    }, 1000);
  }

  pad(value) {
    return String(value).padStart(2, '0');
  }
}

const input = document.getElementById('target-date');
const startBtn = document.getElementById('start-btn');

let timer;

startBtn.addEventListener('click', () => {
    console.log("input.value:",input.value);
  const selectedDate = new Date(input.value);
  // const selectedDate = Date.now(input.value); //! ERROR
//  const selectedDate = input.value.getTime();
  console.log("selectedDate:", selectedDate);
  // const now = new Date();
   const now = Date.now();
   console.log("now:",now);

  if (!input.value) {
    alert("Оберіть дату!");
    return;
  }

  if (selectedDate - now < 86400000) {
    alert("Дата повинна бути мінімум на 1 день більше!");
    return;
  }

  if (timer) {
    clearInterval(timer.intervalId);
  }

  timer = new CountdownTimer({
    selector: '#timer-1',
    targetDate: selectedDate,
  });

  timer.start();

});