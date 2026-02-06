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
console.warn("Клас new Date(string):");const t=new Date("March 16, 2030");console.log(`teamMeetingDate = new Date("March 16, 2030"):
`,t);//! "Mon Mar 16 2030 00:00:00 GMT+0200 (Eastern European Standard Time)"
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
    `,"color: blue; font-size: 18px");const o=new Date("2030"),a=new Date("2030-03"),c=new Date("2030-03-16"),D=new Date("03/16/2030"),s=new Date("2030/03/16"),r=new Date("2030/3/16"),l=new Date("March 16, 2030"),w=new Date("16 March 2030"),u=new Date("March 16, 2030 14:25:00"),g=new Date("2030-03-16 14:25:00"),f=new Date("2030-03-16T14:25:00"),M=new Date("Sat Mar 16 2030 14:25:00 GMT+0200");console.log(`
`,o,`
`,a,`
`,c,`
`,D,`
`,s,`
`,r,`
`,l,`
`,w,`
`,u,`
`,g,`
`,f,`
`,`
`,M);console.log("------------------------------------------------------------------------------------");
