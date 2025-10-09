import"./modulepreload-polyfill-3cfb730f.js";console.log("lesson 4");let l=+"5px";console.log('Number("5px"):',l);console.log("typeof toNumber:",typeof l);console.log('Number("5" * 2):',Number("5"*2));const N="5"*2;console.log('"5" * 2:',N);console.log('Number("5" + 2):',+"52");const n="52";console.log('"5" + 2:',n);const c=5+2;console.log("5 + 2:",c);const r="5"-2;console.log('"5" - 2:',r);const a="5"/2;console.log('"5" / 2:',a);const o="6",e=5;console.log(`h: ${o}, j: ${e}`);console.log("h:",o,",","j:",e);console.log("h > j:",o>e);console.log("h < j:",o<e);console.log("h <= j:",o<=e);console.log("h >= j:",o>=e);console.log('parseInt("5"):',parseInt("5"));console.log('Number("5"):',+"5");console.log('parseInt("5px"):',parseInt("5px"));console.log('Number("5px"):',+"5px");console.log('parseInt("=5px"):',parseInt("=5px"));console.log('parseInt("5m2sm"):',parseInt("5m2sm"));console.log('parseInt("5.5"):',parseInt("5.5"));console.log('parseFloat("5.5"):',parseFloat("5.5"));console.log('parseFloat("5.px"):',parseFloat("5.px"));console.log('Number("5.5"):',+"5.5");console.log('Number("5.5px"):',+"5.5px");console.log('Number.parseFloat("12.46qwe79"):',Number.parseFloat("12.46qwe79"));console.log('36 + "Привiт!":',"36Привiт!");console.log('isNaN(36 + "Привiт!"):',isNaN("36Привiт!"));console.log("isNaN(36):",isNaN(36));console.log('isNaN("36"):',isNaN("36"));//! Перевірка на NaN - метод Number.isNaN(val)
console.log('Number.isNaN("qwerty"):',Number.isNaN("qwerty"));console.log("Number.isNaN(36):",Number.isNaN(36));console.log("Number.isNaN(NaN):",Number.isNaN(NaN));let s=+"63";console.log('valueNaN = Number("qwerty"):',s);//! NaN
console.log("Number.isNaN(valueNaN):",Number.isNaN(s));//! true
console.log("Number.isNaN(NaN):",Number.isNaN(NaN));//! true
console.log("0.1 + 0.2 === 0.3:",.1+.2==.3);console.log("0.1 + 0.2 =",.1+.2);console.warn("Variant 1");console.log("0.1 * 10 + 0.2 * 10 =",.1*10+.2*10);//! 3
const g=(.1*10+.2*10)/10;console.log("(0.1 * 10 + 0.2 * 10) / 10 =",g);//! 0.3
//! Метод число.toFixed(digits)
console.warn("Variant 2");console.log("(0.1 + 0.2).toFixed(1) =",(.1+.2).toFixed(1));//! 0.3
console.log("(0.1 + 0.2).toFixed(17) =",(.1+.2).toFixed(17));//! 0.3000000000000004
console.log("------------- Приклади toFixed(): ------------");console.log("(5).toFixed(2) =",5 .toFixed(2));//! 5.00
console.log("(8.762195).toFixed(4) =",8.762195.toFixed(4));//! 8.7622
console.log("8.762195.toFixed(4) =",8.762195.toFixed(4));//! 8.7622
console.log("----------------------------------------------");
