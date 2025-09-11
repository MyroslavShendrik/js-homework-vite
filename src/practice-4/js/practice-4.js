console.log("lesson 4")
let toNumber1 = 5;
let toNumber = Number("5px");
console.log('Number("5px"):', toNumber);
console.log("typeof toNumber:", typeof toNumber);

console.log('Number("5" * 2):', Number("5" * 2));
const d = "5" * 2;
console.log('"5" * 2:', d);

console.log('Number("5" + 2):', Number("5" + 2));

const e = "5" + 2;
console.log('"5" + 2:', e );

const e1 = 5 + 2;
console.log('5 + 2:', e1 );

const f = "5" - 2;
console.log('"5" - 2:', f );
const g = "5" / 2;
console.log('"5" / 2:', g );

const h = "6";
const j = 5;
console.log(`h: ${h}, j: ${j}`);
console.log('h:', h , ",", "j:", j);
console.log('h > j:', h > j);
console.log('h < j:', h < j);
console.log('h <= j:', h <= j);
console.log('h >= j:', h >= j);

console.log('parseInt("5"):', parseInt("5"));
console.log('Number("5"):', Number("5"));

console.log('parseInt("5px"):', parseInt("5px"));
console.log('Number("5px"):', Number("5px"));

console.log('parseInt("=5px"):', parseInt("=5px"));

console.log('parseInt("5m2sm"):', parseInt("5m2sm"));

console.log('parseInt("5.5"):', parseInt("5.5"));

console.log('parseFloat("5.5"):', parseFloat("5.5"));

console.log('parseFloat("5.px"):', parseFloat("5.px"));

console.log('Number("5.5"):', Number("5.5"));
console.log('Number("5.5px"):', Number("5.5px"));

console.log('Number.parseFloat("12.46qwe79"):', Number.parseFloat("12.46qwe79"));

console.log('36 + "Привiт!":', 36 + "Привiт!");
console.log('isNaN(36 + "Привiт!"):', isNaN(36 + "Привiт!"));
console.log('isNaN(36):', isNaN(36));
console.log('isNaN("36"):', isNaN("36"));

//! Перевірка на NaN - метод Number.isNaN(val)
console.log('Number.isNaN("qwerty"):', Number.isNaN("qwerty"));
console.log('Number.isNaN(36):', Number.isNaN(36));
console.log('Number.isNaN(NaN):', Number.isNaN(NaN));

let valueNaN = Number("63");
console.log('valueNaN = Number("qwerty"):', valueNaN); //! NaN
console.log('Number.isNaN(valueNaN):', Number.isNaN(valueNaN)); //! true
console.log('Number.isNaN(NaN):', Number.isNaN(NaN)); //! true

console.log("0.1 + 0.2 === 0.3:", 0.1 + 0.2 === 0.3);
console.log("0.1 + 0.2 =", 0.1 + 0.2);

//? var. 1
//? Можна зробити їх цілими, помноживши кожне з них на число
//? N(10 або 100, в залежності від кількості знаків після коми),
//? скласти(додати) їх, а потім результат поділити також на N.
console.warn("Variant 1");
console.log("0.1 * 10 + 0.2 * 10 =", 0.1 * 10 + 0.2 * 10); //! 3
const result = (0.1 * 10 + 0.2 * 10) / 10;
console.log("(0.1 * 10 + 0.2 * 10) / 10 =", result); //! 0.3

//? var. 2
//! Метод число.toFixed(digits)
//? Cкласти(додати) числа, а результат скоротити до 
//? певного знаку після коми за допомогою методу toFixed().
console.warn("Variant 2");
console.log("(0.1 + 0.2).toFixed(1) =", (0.1 + 0.2).toFixed(1)); //! 0.3
console.log("(0.1 + 0.2).toFixed(17) =", (0.1 + 0.2).toFixed(17)); //! 0.3000000000000004
console.log("------------- Приклади toFixed(): ------------");
console.log("(5).toFixed(2) =", (5).toFixed(2));  //! 5.00
console.log("(8.762195).toFixed(4) =", (8.762195).toFixed(4));  //! 8.7622
console.log("8.762195.toFixed(4) =", 8.762195.toFixed(4));  //! 8.7622
console.log("----------------------------------------------");