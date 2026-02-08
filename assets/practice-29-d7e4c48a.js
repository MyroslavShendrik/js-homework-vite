import"./modulepreload-polyfill-3cfb730f.js";console.log("practice 29");//! Дата і час
//! Клас new Date() (поточна дата)
console.warn("Клас new Date() (поточна дата):");console.log(`%c
    const date = new Date(); //! поточна дата
    `,"color: blue; font-size: 18px");const e=new Date;//! поточна дата
console.log("date:",e);//! "Thu Jul 24 2025 19:36:39 GMT+0300 (Восточная Европа, летнее время)"
console.log("typeof date:",typeof e);//! object
console.log(". . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .");console.log("date.toString():",e.toString());//! "Thu Jul 24 2025 19:36:39 GMT+0300 (Восточная Европа, летнее время)"
console.log("typeof date.toString():",typeof e.toString());//! string
console.log("------------------------------------------------------------------------------------");//! Клас new Date(string)
console.warn("Клас new Date(string):");const o=new Date("March 16, 2030");console.log(`teamMeetingDate = new Date("March 16, 2030"):
`,o);//! "Mon Mar 16 2030 00:00:00 GMT+0200 (Eastern European Standard Time)"
const n=new Date("March 16, 2030 14:25:00");console.log(`preciseTeamMeetingDate = new Date("March 16, 2030 14:25:00"):
`,n);//! "Mon Mar 16 2030 14:25:00 GMT+0200 (Eastern European Standard Time)"
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
    `,"color: blue; font-size: 18px");const a=new Date("2030"),s=new Date("2030-03"),c=new Date("2030-03-16"),D=new Date("03/16/2030"),r=new Date("2030/03/16"),l=new Date("2030/3/16"),w=new Date("March 16, 2030"),g=new Date("16 March 2030"),u=new Date("March 16, 2030 14:25:00"),p=new Date("2030-03-16 14:25:00"),i=new Date("2030-03-16T14:25:00"),f=new Date("Sat Mar 16 2030 14:25:00 GMT+0200");console.log(`
`,a,`
`,s,`
`,c,`
`,D,`
`,r,`
`,l,`
`,w,`
`,g,`
`,u,`
`,p,`
`,i,`
`,`
`,f);console.log("------------------------------------------------------------------------------------");//! Метод - Date.parse(string)
console.warn("Метод - Date.parse(string):");console.log(`%c
    Date.parse("2030-03-16T14:25:00.000+02:00");
    `,"color: blue; font-size: 18px");const t=Date.parse("2030-03-16T14:25:00.000+02:00");console.log('timestampDateParse = Date.parse("2030-03-16T14:25:00.000+02:00"):',t);//! 1899894300000 (timestamp)
console.log("typeof timestampDateParse:",typeof t);//! number
//! ✳️ Формат недійсний, повертає NaN:
const M=Date.parse("2030-03-16T14:25:00.000Z");console.log('timestampDateParseError = Date.parse("2030-03-16T14:25:00.000+Z"):',M);//! NaN
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
    `,"color: blue; font-size: 18px");console.log("------------------------------------------------------------------------------------");
