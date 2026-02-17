/******************** TASK 1 ********************/

const hInput = document.getElementById("h");
const mInput = document.getElementById("m");
const sInput = document.getElementById("s");

const timer1 = document.getElementById("timer1");
const msg = document.getElementById("msg");

const start1 = document.getElementById("start1");
const stop1 = document.getElementById("stop1");
const reset1 = document.getElementById("reset1");

const alarm = document.getElementById("alarm"); // <audio id="alarm">

let id1;
let total1 = 0;
let running1 = false;

/* обмеження input */
[hInput, mInput, sInput].forEach(inp => {
  inp.addEventListener("input", () => {
    if (inp.value > 59) inp.value = 59;
    if (inp.value < 0) inp.value = 0;
  });
});

function lockInputs(state) {
  [hInput, mInput, sInput].forEach(inp => inp.disabled = state);
}

function setButtons1(start, stop, reset) {
  start1.disabled = !start;
  stop1.disabled = !stop;
  reset1.disabled = !reset;
}

function updateDisplay1(sec) {
  let h = Math.floor(sec / 3600);
  let m = Math.floor((sec % 3600) / 60);
  let s = sec % 60;

  timer1.textContent =
    `${String(h).padStart(2,"0")}:` +
    `${String(m).padStart(2,"0")}:` +
    `${String(s).padStart(2,"0")}`;
}

start1.onclick = () => {
  if (running1) return;

  total1 =
    +hInput.value * 3600 +
    +mInput.value * 60 +
    +sInput.value;

  if (total1 <= 0) return;

  running1 = true;
  msg.textContent = "";

  lockInputs(true);
  setButtons1(false, true, true);

  let half = Math.floor(total1 / 2);

  id1 = setInterval(() => {
    total1--;
    updateDisplay1(total1);

    if (total1 === half) {
      msg.textContent = "Менше половини часу!";
    }

    if (total1 <= 0) {
      clearInterval(id1);
      running1 = false;
      lockInputs(false);
      setButtons1(true, false, true);
      msg.textContent = "Час вийшов!";
      alarm?.play();
    }
  }, 1000);
};

stop1.onclick = () => {
  clearInterval(id1);
  running1 = false;
  lockInputs(false);
  setButtons1(true, false, true);
};

reset1.onclick = () => {
  clearInterval(id1);
  running1 = false;
  total1 = 0;
  updateDisplay1(0);
  msg.textContent = "";
  lockInputs(false);
  setButtons1(true, false, false);
};


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
