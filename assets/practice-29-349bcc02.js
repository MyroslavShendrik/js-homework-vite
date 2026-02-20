import"./modulepreload-polyfill-3cfb730f.js";console.log("practice 29");//! Дата і час
//! Клас new Date() (поточна дата)
console.warn("Клас new Date() (поточна дата):");console.log(`%c
    const date = new Date(); //! поточна дата
    `,"color: blue; font-size: 18px");const l=new Date;//! поточна дата
console.log("date:",l);//! "Thu Jul 24 2025 19:36:39 GMT+0300 (Восточная Европа, летнее время)"
console.log("typeof date:",typeof l);//! object
console.log(". . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .");console.log("date.toString():",l.toString());//! "Thu Jul 24 2025 19:36:39 GMT+0300 (Восточная Европа, летнее время)"
console.log("typeof date.toString():",typeof l.toString());//! string
console.log("------------------------------------------------------------------------------------");//! Клас new Date(string)
console.warn("Клас new Date(string):");const T=new Date("March 16, 2030");console.log(`teamMeetingDate = new Date("March 16, 2030"):
`,T);//! "Mon Mar 16 2030 00:00:00 GMT+0200 (Eastern European Standard Time)"
const f=new Date("March 16, 2030 14:25:00");console.log(`preciseTeamMeetingDate = new Date("March 16, 2030 14:25:00"):
`,f);//! "Mon Mar 16 2030 14:25:00 GMT+0200 (Eastern European Standard Time)"
console.log(". . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .");console.log(`%c
    Маємо майже однаковий результат:
    
    new Date("2030");
    new Date("2030-03");
    new Date("2030-03-16");
    new Date("03/16/2030");
    new Date("2030/03/16");
    new Date("2030/3/16");
    new Date("March 16, 2030");
    new Date("16 March 2030");
    new Date("March 16, 2030 14:25:00");
    new Date("2030-03-16 14:25:00");
    new Date("2030-03-16T14:25:00");

    new Date("Sat Mar 16 2030 19:25:00 GMT+0200");
    `,"color: blue; font-size: 18px");const p=new Date("2030"),S=new Date("2030-03"),y=new Date("2030-03-16"),h=new Date("03/16/2030"),U=new Date("2030/03/16"),Y=new Date("2030/3/16"),x=new Date("March 16, 2030"),C=new Date("16 March 2030"),z=new Date("March 16, 2030 14:25:00"),F=new Date("2030-03-16 14:25:00"),H=new Date("2030-03-16T14:25:00"),b=new Date("Sat Mar 16 2030 14:25:00 GMT+0200");console.log(`
`,p,`
`,S,`
`,y,`
`,h,`
`,U,`
`,Y,`
`,x,`
`,C,`
`,z,`
`,F,`
`,H,`
`,`
`,b);console.log("------------------------------------------------------------------------------------");//! Метод - Date.parse(string)
console.warn("Метод - Date.parse(string):");console.log(`%c
    Date.parse("2030-03-16T14:25:00.000+02:00");
    `,"color: blue; font-size: 18px");const r=Date.parse("2030-03-16T14:25:00.000+02:00");console.log('timestampDateParse = Date.parse("2030-03-16T14:25:00.000+02:00"):',r);//! 1899894300000 (timestamp)
console.log("typeof timestampDateParse:",typeof r);//! number
//! ✳️ Формат недійсний, повертає NaN:
const k=Date.parse("2030-03-16T14:25:00.000Z");console.log('timestampDateParseError = Date.parse("2030-03-16T14:25:00.000+Z"):',k);//! NaN
console.log(`%c
            Формат рядка:

        YYYY - MM - DDTHH: mm: ss.sssZ
    
    🔸 YYYY-MM-DD — це дата: рік-місяць-день.
    🔸 Символ "T" використовується як роздільник.
    🔸 HH:mm:ss.sss — це час:
       години, хвилини, секунди і мілісекунди.
    🔸 'Z' - необов’язкова частина яка позначає
       часовий пояс у форматі +-hh:mm.
       Одинична буква Z буде означати UTC+0.
    `,"color: blue; font-size: 18px");console.log("------------------------------------------------------------------------------------");//! Створення дати. 7 аргументів.
console.warn("Створення дати. 7 аргументів.:");console.log(`%c
    ❗️❗️❗️ Індекси місяців починаються з 0 ❗️❗️❗️

    const fullDate = new Date(
        year,
        month,
        date,
        hours,
        minutes,
        seconds,
        ms
    )
    `,"color: blue; font-size: 18px");const N=new Date(2030,2,16,14,25,0,0);//! індекси місяців починаються з 0, тому 5-й місяць це липень.
console.log(`fullDate = new Date(2030, 2, 16, 14, 25, 0, 0):
`,N);//! "Sat Mar 16 2030 14:25:00 GMT+0200 (Восточная Европа, стандартное время)"
console.log("-------------------------------------------------------------------------");//! new Date(number)
console.warn("new Date(numder):");console.log(`%c
    - Дата початку відліку часу - 1 січня 1970 року,
    - Unix час,
    - timestamp.

    const startDate0 = new Date(0); 
    `,"color: blue; font-size: 18px");const P=new Date(0);//! дата початку відліку часу - 1 січня 1970 року - Unix час - timestamp
console.log("startDate0 = new Date(0):",P);//! Thu Jan 01 1970 03:00:00 GMT+0300 (Восточная Европа, стандартное время)
const L=new Date(1e3);//! Повертає числове значення цієї дати (timestamp) - кількість мілісекунд, що минула з півночі 1 січня 1970 року.
console.log("startDate1000 = new Date(1000):",L);//! Thu Jan 01 1970 03:00:01 GMT+0300 (Восточная Европа, стандартное время)
console.log("new Date(1899894300000):",new Date(18998943e5));//! Sat Mar 16 2030 19:25:00 GMT+0200 (Восточная Европа, стандартное время)
console.log("new Date(1753541240287):",new Date(1753541240287));//! Sat Jul 26 2025 17:47:20 GMT+0300 (Восточная Европа, летнее время)
console.log("--------------------------------------------------------------------------------------------------------");//! Date.now()
console.warn("Date.now():");console.log(`%c
    const date = Date.now();
    `,"color: blue; font-size: 18px");const c=Date.now();console.log("date = Date.now():",c);//! 1753541240287
console.log("typeof date:",typeof c);//! number
console.log("--------------------------------------------------------------------------------------------------------");const Z=new Date(c);console.log("data2:",Z);//! Методи new Date()
//! Геттери
console.warn("Геттери:");console.log(`%c
    const date = new Date();
    ----------------------------------------------------------------------------
    date.getDate() - повертає день місяця від 1 до 31

    date.getDay() -  повертає день тижня від 0 до 6

    date.getMonth() - повертає місяць від 0 до 11

    date.getFullYear() - повертає рік з 4 цифр

    date.getHours() - повертає години

    date.getMinutes() - повертає хвилини

    date.getSeconds() - повертає секунди

    date.getMilliseconds() - повертає мілісекунди

    date.getTime() - повертає кількість мілісекунд минулих зі старту епохи Unix
    ----------------------------------------------------------------------------
    `,"color: blue; font-size: 18px");const e=new Date;console.log("date3: ",e);//! Sun Jul 27 2025 16:39:21 GMT+0300 (Восточная Европа, летнее время)
console.log(". . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .");console.log("date3.getDate(): ",e.getDate());//! 27
console.log("date3.getDay(): ",e.getDay());//! 0
console.log("date3.getMonth(): ",e.getMonth());//! 6
console.log("date3.getFullYear(): ",e.getFullYear());//! 2025
console.log("date3.getHours(): ",e.getHours());//! 16
console.log("date3.getMinutes(): ",e.getMinutes());//! 39
console.log("date3.getSeconds(): ",e.getSeconds());//! 21
console.log("date3.getMilliseconds(): ",e.getMilliseconds());//! 358
console.log("getTime():",e.getTime());console.log("------------------------------------------------------------------------------------------------------------------------");const $=Date.parse(e);console.log("timestampDateParse1:",$);console.log("date = Date.now():",c);//! Приклад форматування поточної дати
console.warn("Приклад форматування поточної дати:");const o=new Date;console.log(`Час в мс з початку епохи Unix: ${o.getTime()}`);let t=" Дата: ";t+=o.getDate()+"/";//! день
t+=o.getMonth()+1+"/";//! місяць
t+=o.getFullYear()+",";//! рік
t+=`
 День тижня: `+O(o.getDay())+",";//! день тижня
t+=`
 Час: `+o.getHours()+":";//! години
t+=o.getMinutes()+":";//! хвилини
t+=o.getSeconds()+":";//! секунди
t+=o.getMilliseconds()+"";//! мілісекунди
console.log(t);//! ...  значення будуть змінюватися
//! Дата: 27/7/2025,
//! День тижня: неділя,
//! Час: 17:3:41:541
function O(M){return["Неділя","Понеділок","Вівторок","Середа","Четверг","П'ятниця","Субота"][M]}console.log("------------------------------------------------------------------------------------------------------------------------");//! Геттери у форматі UTC
console.warn("Геттери у форматі UTC:");console.log(`%c
    const date = new Date();
    ----------------------------------------------------------------------------
    date.getUTCDate() - повертає день місяця від 1 до 31

    date.getUTCDay() -  повертає день тижня від 0 до 6

    date.getUTCMonth() - повертає місяць від 0 до 11

    date.getUTCFullYear() - повертає рік з 4 цифр

    date.getUTCHours() - повертає години

    date.getUTCMinutes() - повертає хвилини

    date.getUTCSeconds() - повертає секунди

    date.getUTCMilliseconds() - повертає мілісекунди
    ----------------------------------------------------------------------------
    `,"color: darkgreen; font-size: 18px");console.log("------------------------------------------------------------------------------------------------------------------------");//! Методи new Date(): Сеттери
console.log(`%c
    const date = new Date();
    -------------------------------------------------------------------------------
    date.setDate() - встановлює день місяця від 1 до 31

    date.setDay() -  встановлює день тижня від 0 до 6

    date.setMonth() - встановлює місяць від 0 до 11

    date.setFullYear() - встановлює рік з 4 цифр

    date.setHours() - встановлює години

    date.setMinutes() - встановлює хвилини

    date.setSeconds() - встановлює секунди

    date.setMilliseconds() - встановлює мілісекунди

    date.setTime() - встановлює кількість мілісекунд минулих зі старту епохи Unix
    -------------------------------------------------------------------------------
    `,"color: blue; font-size: 18px");const a=new Date("March 16, 2030 14:25:00");console.log("date4: ",a);//! Sat Mar 16 2030 14:25:00 GMT+0200 (Восточная Европа, стандартное время)
console.log(". . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .  . . . . . . . . . . . . . . .");console.log("date4.setMinutes(50):",a.setMinutes(50));//! 1899895800000
console.log("date4-->setMinutes(50): ",a);//! Sat Mar 16 2030 14:50:00 GMT+0200 (Восточная Европа, стандартное время)
console.log(". . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .  . . . . . . . . . . . . . . .");console.log("date4.setFullYear(2040, 4, 8):",a.setFullYear(2040,4,8));//! 2220090600000
console.log("date4-->setFullYear(2040, 4, 8): ",a);//! Tue May 08 2040 14:50:00 GMT+0300 (Восточная Европа, летнее время)
console.log(". . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .  . . . . . . . . . . . . . . .");console.log("date4.setTime():",a.setTime(33300906e5));//! 3330090600000
console.log("date4-->date.setTime(3330090600000): ",a);//! Thu Jul 11 2075 20:10:00 GMT+0300 (Восточная Европа, летнее время)
console.log("----------------------------------------------------------------------------------------------------------------------------");const D=new Date;console.log("newNowDay1:",D);const i=new Date;console.log("newNowDay2:",i);console.log("newNowDay1.getTime():",D.getTime());console.log("newNowDay2.getTime():",i.getTime());//! створення дати тайм-штамп
const E=Date.now();console.log("newNowDayUnix:",E);//! Форматування дати
const n=new Date;console.log("date6: ",n);//! Sat Mar 16 2030 14:25:00 GMT+0200 (Восточная Европа, стандартное время)
console.log("date6.toString():",n.toString());//! "Sat Mar 16 2030 14:25:00 GMT+0200 (Восточная Европа, стандартное время)"
console.log("date6.toTimeString():",n.toTimeString());//! "14:25:00 GMT+0200 (Восточная Европа, стандартное время)"
console.log("date6.toLocaleTimeString():",n.toLocaleTimeString());//! "14:25:00"
console.log("date6.toUTCString():",n.toUTCString());//! "Sat, 16 Mar 2030 12:25:00 GMT"
console.log("date6.todateString():",n.toDateString());//! "Sat Mar 16 2030"
console.log("date6.toISOString():",n.toISOString());//! "2030-03-16T12:25:00.000Z"
console.log("date6.toLocaleString():",n.toLocaleString());//! "16.03.2030, 14:25:00"
console.log("date6.getTime():",n.getTime());//! 1899894300000
console.log("-------------------------------------------------------------------------------------------");//! Новий стандарт форматування дати
console.warn("Новий стандарт форматування дати:");const w=new Date("March 16, 2030 14:25:00");console.log("date: ",l);//! Sat Mar 16 2030 14:25:00 GMT+0200 (Восточная Европа, стандартное время)
console.log(". . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .  . . . . . . . . . . . . . . .");const d={weekday:"long",year:"numeric",month:"short",day:"numeric",hour:"2-digit",minute:"2-digit"};//! Україна
const G=w.toLocaleString("Uk-uk",d);console.log("localeUk_Україна:",G);//! суботу, 16 бер. 2030 р., 14:25
console.log(". . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .  . . . . . . . . . . . . . . .");//! USA
const I=w.toLocaleString("en-US",d);console.log("localeUs_Україна:",I);//! Saturday, Mar 16, 2030, 02:25 PM
console.log("-------------------------------------------------------------------------------------------");//! Вимірювання часу за допомогою new Date()
console.warn("Вимірювання часу за допомогою new Date():");const s=new Date;console.log("start1:",s);console.log("start1:",typeof s);console.log("+start1:",+s);console.log("start1:",typeof+s);const g=new Date;console.log("end1:",g);console.log("+end1:",+g);console.log(`"9" - "6" = ${"9"-"6"}`);//! 3
console.log(`Цикл-1 зайняв ${g-s} мс`);console.log("---------------------------------------------------------------------------");//! Вимірювання часу за допомогою Date.now()
console.warn("Вимірювання часу за допомогою Date.now():");const u=Date.now();console.log("start2:",u);const m=Date.now();console.log("end2:",m);console.log(`Цикл-2 зайняв ${m-u} мс`);console.log("---------------------------------------------------------------------------");//! <label class="input-label">
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
Math.floor(time/(1e3*60*60*24));Math.floor(time%(1e3*60*60*24)/(1e3*60*60));Math.floor(time%(1e3*60*60)/(1e3*60));Math.floor(time%(1e3*60)/1e3);
