/************* TASK 1 *************/

const hInput = document.getElementById("h");
const mInput = document.getElementById("m");
const sInput = document.getElementById("s");

const timer1 = document.getElementById("timer1");
const msg = document.getElementById("msg");

const start1 = document.getElementById("start1");
const stop1 = document.getElementById("stop1");
const reset1 = document.getElementById("reset1");

let id1;
let total1 = 0;
let running1 = false;
let paused1 = false;

/* обмеження 0–59 */
[hInput, mInput, sInput].forEach(inp => {
  inp.addEventListener("input", () => {
    if (inp.value > 59) inp.value = 59;
    if (inp.value < 0) inp.value = 0;
  });
});

function lockInputs(state) {
  [hInput, mInput, sInput].forEach(inp => inp.disabled = state);
}

function updateDisplay(sec) {
  let h = Math.floor(sec / 3600);
  let m = Math.floor((sec % 3600) / 60);
  let s = sec % 60;

  timer1.textContent =
    `${String(h).padStart(2, "0")}:` +
    `${String(m).padStart(2, "0")}:` +
    `${String(s).padStart(2, "0")}`;
}

function runTimer() {
  id1 = setInterval(() => {
    total1--;
    updateDisplay(total1);

    if (total1 === halfTime) {
      msg.textContent = "Менше половини часу!";
    }

    if (total1 <= 0) {
      clearInterval(id1);
      running1 = false;
      paused1 = false;
      stop1.textContent = "STOP";
      lockInputs(false);
      msg.textContent = "Час вийшов!";
    }
  }, 1000);
}

let halfTime = 0;

/* START */
start1.onclick = () => {
  if (running1) return;

  total1 =
    +hInput.value * 3600 +
    +mInput.value * 60 +
    +sInput.value;

  if (total1 <= 0) return;

  running1 = true;
  paused1 = false;
  msg.textContent = "";

  halfTime = Math.floor(total1 / 2);

  lockInputs(true);
  runTimer();
};

/* STOP / CONTINUE */
stop1.onclick = () => {
  if (!running1) return;

  if (!paused1) {
    clearInterval(id1);
    paused1 = true;
    stop1.textContent = "CONTINUE";
    msg.textContent = "Пауза";
  } else {
    paused1 = false;
    stop1.textContent = "STOP";
    msg.textContent = "";
    runTimer();
  }
};

/* RESET */
reset1.onclick = () => {
  clearInterval(id1);
  running1 = false;
  paused1 = false;
  total1 = 0;

  updateDisplay(0);
  msg.textContent = "";
  stop1.textContent = "STOP";

  lockInputs(false);
};

/* початковий стан */
updateDisplay(0);



/******************** TASK 2 ********************/

const startBtn = document.getElementById("start2");
const stopBtn = document.getElementById("stop2");
const resetBtn = document.getElementById("reset2");

const timer2 = document.getElementById("timer2");
const stateMsg = document.getElementById("stateMsg");

let id2;
let time = 30000;
let running2 = false;

function updateTimer2() {
  timer2.textContent = (time / 1000).toFixed(2);
}

function setButtons2(start, stop, reset) {
  startBtn.disabled = !start;
  stopBtn.disabled = !stop;
  resetBtn.disabled = !reset;
}

startBtn.onclick = () => {
  if (running2) return;

  running2 = true;
  stateMsg.textContent = "";
  setButtons2(false, true, true);

  id2 = setInterval(() => {
    time -= 10;
    updateTimer2();

    if (time === 10000) {
      timer2.classList.add("warning");
      alarm?.play();
    }

    if (time <= 0) {
      clearInterval(id2);
      running2 = false;
      timer2.textContent = "0";
      timer2.classList.remove("warning");
      stateMsg.textContent = "Час вийшов!";
      setButtons2(true, false, true);
      alarm?.play();
    }
  }, 10);
};

stopBtn.onclick = () => {
  clearInterval(id2);
  running2 = false;
  stateMsg.textContent = "Таймер зупинено";
  setButtons2(true, false, true);
};

resetBtn.onclick = () => {
  clearInterval(id2);
  running2 = false;
  time = 30000;
  updateTimer2();
  timer2.classList.remove("warning");
  stateMsg.textContent = "";
  setButtons2(true, false, false);
};


/* Початковий стан */
updateDisplay1(0);
updateTimer2();
setButtons1(true, false, false);
setButtons2(true, false, false);
