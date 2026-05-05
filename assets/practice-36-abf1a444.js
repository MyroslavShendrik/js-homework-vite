import"./modulepreload-polyfill-3cfb730f.js";const t="http://localhost:3000/",s="users",n=`${t}${s}`;//! ================= READ (GET всі) =================
fetch(n).then(o=>o.json()).then(o=>console.log("GET all users:",o)).catch(o=>console.log(o));//! ================= READ (GET один) =================
