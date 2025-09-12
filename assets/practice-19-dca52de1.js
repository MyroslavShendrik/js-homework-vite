const e=document.createElement("ul");e.classList.add("list");console.log("list:",e);const L=document.querySelector("body");L.prepend(e);const s=document.createElement("li"),i=document.createElement("li"),r=document.createElement("li"),g=document.createElement("li"),u=document.createElement("li");s.textContent="HTML";i.textContent="CSS";r.textContent="JavaScript";g.textContent="React";u.textContent="idk";e.append(s);e.append(i);e.append(r);e.append(g);e.append(u);s.style.color="red";i.style.color="yellow";r.style.color="green";//! ------------------------------------------------- якщо елементів li більше 4, то елемент Node.js повинен бути 5. Інакше останнім.
const l=document.createElement("li");l.textContent="Node.js";const a=e.querySelectorAll("li");console.log(a);const p=a.length;console.log(p);if(p>4){//! Домашнє завдання знайти 4 елемент. та додати новий елемень ПІСЛЯ 4!
a[3].after(l)}else e.append(l);//! Видалення елементів
console.warn("Видалення елементів:");console.log(`%c
    🔸 element.remove()
    `,"color: blue; font-size: 16px");const b=document.querySelector(".text1");b.remove();console.log("--------------------------------------------------------------------------------------------");//! Оптимізація роботи з DOM
//! Repaint 
console.warn("Repaint :");console.log(`%c
        ✴️ Repaint - відбувається,
    коли зміни торкнулися стилів,
    що впливають на зовнішній вигляд елемента,
    але не на геометрію.
        ✳️ Наприклад,
    🔸 opacity,
    🔸 background-color,
    🔸 visibility,
    🔸 outline.
    `,"color: blue; font-size: 16px");console.log("--------------------------------------------------------------------------------------------");//! Reflow
console.warn("Reflow:");console.log(`%c
        ✴️ Reflow - відбувається,
    коли зміни впливають на:
    🔸 вміст,
    🔸 структуру документу,
    🔸 положення елементів.
        ✳️❗️Має значно більший вплив на продуктивність, ніж repaint❗️.
    `,"color: blue; font-size: 16px");console.log("--------------------------------------------------------------------------------------------");//! 3.Властивість innerHTML
//! Читання
console.warn("Читання:");const x=document.querySelector(".article31");console.log("article.innerHTML:",x.innerHTML);const T=document.querySelector(".article31 .title31");console.log("title31.innerHTML:",T.innerHTML);console.log("title31:",T);const H=document.querySelector(".article31 .text31");console.log("text.innerHTML:",H.innerHTML);const M=document.querySelector(".article31 .link31");console.log("link.innerHTML:",M.innerHTML);console.log("-----------------------------------------------------------------------------------------");//! Зміна/видалення
console.warn("Зміна/видалення:");console.log(`%c
    title32.innerHTML = '<span class="accent">Replacement</span>';
    `,"color: blue; font-size: 16px");console.log(". . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .");const h=document.querySelector(".article32 .title32"),f='<span class="accent">Replacement</span>';h.innerHTML=f;const n=document.createElement("h1");console.log("heading:",n);//! <h1></h1>
n.textContent="This is a heading";n.style.color="green";console.log("heading1:",n);const m='<section>< h3 class="title33" > ШАБЛОНІЗАЦІЯ</h3 ><h4>Popular technologies</h4><ul class="list33"><li class="list-item">item</li></ul></section > ';console.log("heading2:",m);const d=document.getElementById("box1");console.log("box1:",d);console.log("box1.innerHTML:",d.innerHTML);d.innerHTML+=m;const c=document.querySelector("body");console.log("bodyBox:",c);c.innerHTML=m+c.innerHTML;console.log(`%c
    link32.innerHTML = "";
    `,"color: blue; font-size: 16px");console.log(". . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .");const S=document.querySelector(".article32 .link32");S.innerHTML="";console.log("-----------------------------------------------------------------------------------------");//! Шаблонізація
console.warn("Шаблонізація:");const k=["C#","C++",".NET","PHP","Python","Java","SQL","Django","C","iOS"],w=document.querySelector(".list33"),y=k.map(o=>`<li class="list-item">${o}</li>`).join("");console.log("markup:",y);w.innerHTML=y;console.log("-----------------------------------------------------------------------------------------");//! Метод insertAdjacentHTML()
console.log(`%c
    elem.insertAdjacentHTML(position, string);

        🔸 "beforebegin" - перед elem
        🔸 "afterbegin" - всередині elem, перед усіма дітьми
        🔸 "beforeend" - всередині elem, після усіх дітей
        🔸 "afterend" - після elem
    `,"color: blue; font-size: 16px");console.log(". . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .");const t=document.querySelector(".list4"),q=["React","TypeScript","Node.js"],C=q.map(o=>`<li class="list-item new">${o}</li>`).join("");t.insertAdjacentHTML("beforebegin","<h3>Popular technologies</h3>");t.insertAdjacentHTML("afterbegin",'<li class="list-item new">C++</li>');t.insertAdjacentHTML("beforeend",C);t.insertAdjacentHTML("afterend",'<a class="link4" href="">Read more...</a>');console.log("----------------------------------------------------------------------------------");
