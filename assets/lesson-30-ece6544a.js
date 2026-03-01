import"./modulepreload-polyfill-3cfb730f.js";//! <label class="input-label">
//!     Введіть майбутню дату<i>(більше від сьогоднішньої дати на 1 день)</i> :
//!     <input id="target-date" type="datetime-local">
//! </label>
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
//! new CountdownTimer({
//!     selector: '#timer-1',
//!     targetDate: new Date('Jul 17, 2019'),
//! });
class i{constructor({selector:e,targetDateInput:t,startBtn:s}){this.container=document.querySelector(e),this.input=document.querySelector(t),this.startBtn=document.querySelector(s),this.targetDate=null,this.intervalId=null,this.daysEl=this.container.querySelector('[data-value="days"]'),this.hoursEl=this.container.querySelector('[data-value="hours"]'),this.minsEl=this.container.querySelector('[data-value="mins"]'),this.secsEl=this.container.querySelector('[data-value="secs"]'),this.startBtn.addEventListener("click",()=>{this.handleStart()})}handleStart(){if(!this.input.value){alert("Оберіть дату!");return}const e=new Date(this.input.value).getTime(),t=Date.now();if(e-t<864e5){alert("Дата повинна бути мінімум на 1 день більше!");return}this.targetDate=e,this.intervalId&&clearInterval(this.intervalId),this.start()}start(){this.intervalId=setInterval(()=>{const e=Date.now(),t=this.targetDate-e;if(t<=0){clearInterval(this.intervalId),this.updateDisplay(0,0,0,0),alert("Час вийшов!");return}const s=Math.floor(t/(1e3*60*60*24)),a=Math.floor(t%(1e3*60*60*24)/(1e3*60*60)),n=Math.floor(t%(1e3*60*60)/(1e3*60)),r=Math.floor(t%(1e3*60)/1e3);this.updateDisplay(s,a,n,r)},1e3)}updateDisplay(e,t,s,a){this.daysEl.textContent=e,this.hoursEl.textContent=this.pad(t),this.minsEl.textContent=this.pad(s),this.secsEl.textContent=this.pad(a)}pad(e){return String(e).padStart(2,"0")}}new i({selector:"#timer-1",targetDateInput:"#target-date",startBtn:"#start-btn"});
