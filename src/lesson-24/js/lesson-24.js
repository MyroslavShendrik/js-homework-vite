import { alert, notice, info, success, error } from '@pnotify/core';
import '@pnotify/core/dist/BrightTheme.css';
import '@pnotify/mobile/dist/PNotifyMobile.css';
import { Chart } from 'chart.js/auto';
import '../css/style.css';

const keyEl = document.getElementById('key');
const newGameBtn = document.getElementById('new-game');

let currentKey = '';

function randomKey() {
  const keys = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  return keys[Math.floor(Math.random() * keys.length)];
}

function newGame() {
  currentKey = randomKey();
  keyEl.textContent = currentKey;
}

document.addEventListener('keydown', (e) => {
  if (!currentKey) return;
  if (e.key.toUpperCase() === currentKey) {
    success({ text: `Правильно! Ви натиснули ${currentKey}` });
    newGame();
  } else {
    error({ text: `Неправильно! Ви натиснули ${e.key.toUpperCase()}` });
  }
});

newGameBtn.addEventListener('click', newGame);

newGame();


const chartData = {
  labels: ["1","2","3","4","5","6","7","8","9","10",
           "11","12","13","14","15","16","17","18","19","20",
           "21","22","23","24","25","26","27","28","29","30"],
  datasets: [{
    label: "Продажі за останній місяць",
    data: [150,220,180,200,250,300,280,350,400,380,
           420,450,500,550,600,650,700,750,800,850,
           900,950,1000,1050,1100,1150,1200,1250,1300,1350],
    borderColor: "#2196f3",
    backgroundColor: "rgba(33, 150, 243, 0.2)",
    borderWidth: 2,
    fill: true,
    tension: 0.3
  }]
};

const ctx = document.getElementById("sales-chart");
const salesChart = new Chart(ctx, {
  type: "line",
  data: chartData,
  options: {
    responsive: true,
    plugins: {
      legend: { position: "top" },
      title: {
        display: true,
        text: "Статистика продажів за останній місяць"
      }
    }
  }
});
