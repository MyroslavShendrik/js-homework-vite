import"./modulepreload-polyfill-3cfb730f.js";console.log("practice 29");//! Дата і час
//! Клас new Date() (поточна дата)
console.warn("Клас new Date() (поточна дата):");console.log(`%c
    const date = new Date(); //! поточна дата
    `,"color: blue; font-size: 18px");const s=new Date;//! поточна дата
console.log("date:",s);//! "Thu Jul 24 2025 19:36:39 GMT+0300 (Восточная Европа, летнее время)"
console.log("typeof date:",typeof s);//! object
console.log(". . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .");console.log("date.toString():",s.toString());//! "Thu Jul 24 2025 19:36:39 GMT+0300 (Восточная Европа, летнее время)"
console.log("typeof date.toString():",typeof s.toString());//! string
console.log("------------------------------------------------------------------------------------");//! Клас new Date(string)
console.warn("Клас new Date(string):");const i=new Date("March 16, 2030");console.log(`teamMeetingDate = new Date("March 16, 2030"):
`,i);//! "Mon Mar 16 2030 00:00:00 GMT+0200 (Eastern European Standard Time)"
const w=new Date("March 16, 2030 14:25:00");console.log(`preciseTeamMeetingDate = new Date("March 16, 2030 14:25:00"):
`,w);//! "Mon Mar 16 2030 14:25:00 GMT+0200 (Eastern European Standard Time)"
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
    `,"color: blue; font-size: 18px");const d=new Date("2030"),u=new Date("2030-03"),m=new Date("2030-03-16"),M=new Date("03/16/2030"),T=new Date("2030/03/16"),p=new Date("2030/3/16"),f=new Date("March 16, 2030"),S=new Date("16 March 2030"),y=new Date("March 16, 2030 14:25:00"),h=new Date("2030-03-16 14:25:00"),U=new Date("2030-03-16T14:25:00"),Y=new Date("Sat Mar 16 2030 14:25:00 GMT+0200");console.log(`
`,d,`
`,u,`
`,m,`
`,M,`
`,T,`
`,p,`
`,f,`
`,S,`
`,y,`
`,h,`
`,U,`
`,`
`,Y);console.log("------------------------------------------------------------------------------------");//! Метод - Date.parse(string)
console.warn("Метод - Date.parse(string):");console.log(`%c
    Date.parse("2030-03-16T14:25:00.000+02:00");
    `,"color: blue; font-size: 18px");const c=Date.parse("2030-03-16T14:25:00.000+02:00");console.log('timestampDateParse = Date.parse("2030-03-16T14:25:00.000+02:00"):',c);//! 1899894300000 (timestamp)
console.log("typeof timestampDateParse:",typeof c);//! number
//! ✳️ Формат недійсний, повертає NaN:
const x=Date.parse("2030-03-16T14:25:00.000Z");console.log('timestampDateParseError = Date.parse("2030-03-16T14:25:00.000+Z"):',x);//! NaN
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
    `,"color: blue; font-size: 18px");const C=new Date(2030,2,16,14,25,0,0);//! індекси місяців починаються з 0, тому 5-й місяць це липень.
console.log(`fullDate = new Date(2030, 2, 16, 14, 25, 0, 0):
`,C);//! "Sat Mar 16 2030 14:25:00 GMT+0200 (Восточная Европа, стандартное время)"
console.log("-------------------------------------------------------------------------");//! new Date(number)
console.warn("new Date(numder):");console.log(`%c
    - Дата початку відліку часу - 1 січня 1970 року,
    - Unix час,
    - timestamp.

    const startDate0 = new Date(0); 
    `,"color: blue; font-size: 18px");const z=new Date(0);//! дата початку відліку часу - 1 січня 1970 року - Unix час - timestamp
console.log("startDate0 = new Date(0):",z);//! Thu Jan 01 1970 03:00:00 GMT+0300 (Восточная Европа, стандартное время)
const H=new Date(1e3);//! Повертає числове значення цієї дати (timestamp) - кількість мілісекунд, що минула з півночі 1 січня 1970 року.
console.log("startDate1000 = new Date(1000):",H);//! Thu Jan 01 1970 03:00:01 GMT+0300 (Восточная Европа, стандартное время)
console.log("new Date(1899894300000):",new Date(18998943e5));//! Sat Mar 16 2030 19:25:00 GMT+0200 (Восточная Европа, стандартное время)
console.log("new Date(1753541240287):",new Date(1753541240287));//! Sat Jul 26 2025 17:47:20 GMT+0300 (Восточная Европа, летнее время)
console.log("--------------------------------------------------------------------------------------------------------");//! Date.now()
console.warn("Date.now():");console.log(`%c
    const date = Date.now();
    `,"color: blue; font-size: 18px");const l=Date.now();console.log("date = Date.now():",l);//! 1753541240287
console.log("typeof date:",typeof l);//! number
console.log("--------------------------------------------------------------------------------------------------------");const b=new Date(l);console.log("data2:",b);//! Методи new Date()
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
console.log("getTime():",e.getTime());console.log("------------------------------------------------------------------------------------------------------------------------");const F=Date.parse(e);console.log("timestampDateParse1:",F);console.log("date = Date.now():",l);//! Приклад форматування поточної дати
console.warn("Приклад форматування поточної дати:");const t=new Date;console.log(`Час в мс з початку епохи Unix: ${t.getTime()}`);let o=" Дата: ";o+=t.getDate()+"/";//! день
o+=t.getMonth()+1+"/";//! місяць
o+=t.getFullYear()+",";//! рік
o+=`
 День тижня: `+N(t.getDay())+",";//! день тижня
o+=`
 Час: `+t.getHours()+":";//! години
o+=t.getMinutes()+":";//! хвилини
o+=t.getSeconds()+":";//! секунди
o+=t.getMilliseconds()+"";//! мілісекунди
console.log(o);//! ...  значення будуть змінюватися
//! Дата: 27/7/2025,
//! День тижня: неділя,
//! Час: 17:3:41:541
function N(r){return["Неділя","Понеділок","Вівторок","Середа","Четверг","П'ятниця","Субота"][r]}console.log("------------------------------------------------------------------------------------------------------------------------");//! Геттери у форматі UTC
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
console.log("----------------------------------------------------------------------------------------------------------------------------");const g=new Date;console.log("newNowDay1:",g);const D=new Date;console.log("newNowDay2:",D);console.log("newNowDay1.getTime():",g.getTime());console.log("newNowDay2.getTime():",D.getTime());//! створення дати тайм-штамп
const P=Date.now();console.log("newNowDayUnix:",P);//! Форматування дати
const n=new Date;console.log("date6: ",n);//! Sat Mar 16 2030 14:25:00 GMT+0200 (Восточная Европа, стандартное время)
console.log("date6.toString():",n.toString());//! "Sat Mar 16 2030 14:25:00 GMT+0200 (Восточная Европа, стандартное время)"
console.log("date6.toTimeString():",n.toTimeString());//! "14:25:00 GMT+0200 (Восточная Европа, стандартное время)"
console.log("date6.toLocaleTimeString():",n.toLocaleTimeString());//! "14:25:00"
console.log("date6.toUTCString():",n.toUTCString());//! "Sat, 16 Mar 2030 12:25:00 GMT"
console.log("date6.todateString():",n.toDateString());//! "Sat Mar 16 2030"
console.log("date6.toISOString():",n.toISOString());//! "2030-03-16T12:25:00.000Z"
console.log("date6.toLocaleString():",n.toLocaleString());//! "16.03.2030, 14:25:00"
console.log("date6.getTime():",n.getTime());//! 1899894300000
console.log("-------------------------------------------------------------------------------------------");
