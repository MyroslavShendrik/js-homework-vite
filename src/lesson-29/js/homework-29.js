//todo: Завдання-1 (task-1)
//* Завдання "Годинний таймер зворотного відліку":
//? Створити таймер, який буде починати відлік
//? з 1 години та зменшувати час кожну хвилину.
//? При досягненні 30 хвилин, таймер повинен
//? відправляти повідомлення екран про те,
//? що залишилось менше половини часу.




//todo: Завдання-2 (task-2)
//* Завдання "Таймер зворотного відліку з блокуванням кнопки старту":
//? Створити таймер, який буде починати відлік 
//? з 30 секунд та зменшувати час кожну мілісекунду. 
//? При досягненні 10 секунд, таймер повинен 
//? відтворювати якусь анімацію, 
//? а при досягненні 0 секунд — виконувати певну дію, 
//? наприклад, робити кнопку почати знову активною.
/* ---------- TASK 1 ---------- */

const hInput = document.getElementById("h");
const mInput = document.getElementById("m");
const sInput = document.getElementById("s");
const timer1 = document.getElementById("timer1");
const msg = document.getElementById("msg");
const stop1 = document.getElementById("stop1");

let id1;

document.getElementById("start1").onclick = () => {
  clearInterval(id1);

  let total =
    +hInput.value * 3600 +
    +mInput.value * 60 +
    +sInput.value;

  id1 = setInterval(() => {
    total--;
   console.log("total:",total);
    let h = Math.floor(total / 3600);
    let m = Math.floor((total % 3600) / 60);
    let s = total % 60;

    timer1.textContent =
      `${String(h).padStart(2,"0")}:` +
      `${String(m).padStart(2,"0")}:` +
      `${String(s).padStart(2,"0")}`;

    if (total === 1800) {
      msg.textContent =
        "Залишилось менше половини часу!";
    }

    if (total <= 0) clearInterval(id1);
  }, 1000);
};

function stopInterval(){
  clearInterval(id1);
};
stop1.addEventListener("click",() => {
  clearInterval(id1);
  // timer1.textContent = "00:00:00"
});
/* ---------- TASK 2 ---------- */

const btn2 = document.getElementById("start2");
const timer2 = document.getElementById("timer2");

let id2;

btn2.onclick = () => {
  btn2.disabled = true;

  let time = 30000;

  id2 = setInterval(() => {
    time -= 10;

    timer2.textContent = (time / 1000).toFixed(2);

    if (time === 10000) {
      timer2.classList.add("warning");
    }

    if (time <= 0) {
      clearInterval(id2);
      btn2.disabled = false;
      timer2.classList.remove("warning");
      timer2.textContent = "0";
    }
  }, 10);
};
