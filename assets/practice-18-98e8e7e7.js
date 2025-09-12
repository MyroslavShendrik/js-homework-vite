import"./modulepreload-polyfill-3cfb730f.js";console.warn(`Навігаця між вузлами DOM: 
 ${window.location.href.split("/").slice(0,-2).join("/")+"/"}lesson-FE3_17/images/dom-traversal.png`);console.log(`%c
    elem.parentNode - вибере батьківський elem.

    elem.childNodes - псевдомасив, зберігає всі дочірні елементи, включно з текстовими.
    elem.children - псевдомасив, зберігає тільки дочірні вузли-елементи, тобто ті, що відповідають тегам.

    elem.firstChild - вибере перший дочірній елемент всередині elem, включно з текстовими вузлами.
    elem.firstElementChild - вибере перший дочірній вузол-елемент всередині elem.
    elem.lastChild - вибере останній дочірній елемент всередині elem, включно з текстовими вузлами.
    elem.lastElementChild - вибере останній дочірній вузол-елемент всередині elem.

    elem.previousSibling - вибере елемент «зліва» (той, що вище) від elem (його попереднього сусіда).
    elem.previousElementSibling - вибере вузол-елемент «зліва» (той, що вище) від elem (його попереднього сусіда).
    elem.nextSibling - вибере елемент «праворуч» (той, що нижче) від elem (його наступного сусіда)
    elem.nextElementSibling - вибере вузол-елемент «праворуч» (той, що нижче) від elem (його наступного сусіда).
    `,"color: darkred; font-size: 16px");console.log("--------------------------------------------------------------------------------------------------------------------------------------------------------");//! Навігація або пошуку елементів в DOM-дереві
console.log("--------------------------------------------------------------------------------------------------------------------------------------------------------");//! Методи elem.querySelector* 
console.warn("Методи elem.querySelector*:");console.log(`%c
    element.querySelector(selector);
    `,"color: darkred; font-size: 16px");console.log(". . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .");console.log(`%c
    element.querySelectorAll(selector);

    `,"color: darkred; font-size: 16px");console.log("---------------------------------------------------------------------------------------------------------------------------------------------");const x=document.getElementById("menu");console.log("listWithId:",x);const b=document.querySelector(".menu");console.log("listWithClass = document.querySelector('.menu'):",b);console.log("`  `  `  `  `  `  `  `  `  `  `  `  `  `  `  `  `  `  `  `  `  `  `  `  `  `  `  `  `  `  `  `  `  `  `  `  `  `  `  `  `  `  `  `  `  `  `  `");const h=document.querySelectorAll("li");//! 10
console.log('menuItemsByTagName = document.querySelectorAll("li"):',h);const C=document.querySelectorAll(".menu-item");//! 3 
console.log('menuItemsByClass = document.querySelectorAll(".menu-item"):',C);console.log("`  `  `  `  `  `  `  `  `  `  `  `  `  `  `  `  `  `  `  `  `  `  `  `  `  `  `  `  `  `  `  `  `  `  `  `  `  `  `  `  `  `  `  `  `  `  `  `");const i=document.querySelector(".menu-item");i.style.color="tomato";console.log('firstMenuItem = document.querySelector(".menu-item"):',i);console.log("---------------------------------------------------------------------------------------------------------------------------------------------");const s=document.querySelectorAll(".menu-item");console.log("allMenuItem:",s);for(const y of s)y.style.color="green";console.log('alltMenuItem = document.querySelectorAll(".menu-item"):',s);//! Властивість textContent​
console.warn("Властивість textContent​:");const c=document.querySelector(".menu-item2");console.log("elementFirst:",c);//! <li class="menu-item2">logo</li>
const p=c.textContent;console.log("textElementFirst = elementFirst.textContent:",p);//! logo
console.log("`  `  `  `  `  `  `  `  `  `  `  `  `  `  `  `  `  `");const e=c.nextElementSibling;console.log("elementSecond.textContent:",e.textContent);//! home
console.log("`  `  `  `  `  `  `  `  `  `  `  `  `  `  `  `  `  `");e.textContent="HOME-page";console.log("elementSecond.textContent:",e.textContent);//! home
console.log("elementSecond = elementFirst.nextElementSibling:",e);//! <li class="menu-item2">HOME-page</li>
console.log("----------------------------------------------------------------------------------------------------------------------------------------");const m=document.querySelector(".box");console.log("boxElemet;",m);m.textContent="fun";console.log(m.textContent);//! Властивість classList
console.warn("Властивість classList:");console.log('elementSecond.classList.contains("menu-item"):',e.classList.contains("menu-item"));//! false
console.log('elementSecond.classList.contains("menu-item2"):',e.classList.contains("menu-item2"));//! true
console.log("`  `  `  `  `  `  `  `  `  `  `  `  `  `  `  `  `  `  `  `  `  `  `");e.classList.add("second");console.log('elementSecond.classList.contains("second"):',e.classList.contains("second"));//! true
console.log("elementSecond:",e);//! <li class="menu-item2 second">HOME-page</li>
console.log("`  `  `  `  `  `  `  `  `  `  `  `  `  `  `  `  `  `  `  `  `  `  `");e.classList.remove("second");console.log('elementSecond.classList.contains("second"):',e.classList.contains("second"));//! false
console.log("elementSecond:",e);//! <li class="menu-item2">HOME-page</li>
console.log("`  `  `  `  `  `  `  `  `  `  `  `  `  `  `  `  `  `  `  `  `  `  `");e.classList.toggle("second");console.log('elementSecond.classList.contains("second"):',e.classList.contains("second"));//! false або true
console.log("elementSecond:",e);//! <li class="menu-item2">HOME-page</li> або <li class="menu-item2 second">HOME-page</li>
console.log("`  `  `  `  `  `  `  `  `  `  `  `  `  `  `  `  `  `  `  `  `  `  `");e.classList.replace("second","secondNew");console.log('elementSecond.classList.contains("second"):',e.classList.contains("second"));//! false
console.log('elementSecond.classList.contains("secondNew"):',e.classList.contains("secondNew"));//! true
console.log("elementSecond:",e);//! <li class="menu-item2">HOME-page</li> або <li class="menu-item2 secondNew">HOME-page</li>
console.log("----------------------------------------------------------------------------------------------------------------------------------------");//! Властивість style
console.warn("Властивість style:");const o=document.querySelector(".menu-itemLast"),E=o.textContent;console.log("textElementLast = elementLast.textContent:",E);//! blog
o.style.fontSize="24px";o.style.textAlign="center";o.style.color="tomato";o.style.backgroundColor="teal";console.log("`  `  `  `  `  `  `  `  `  `  `  `  `  `  `  `  `");console.log("elementFirst:",o);//! <li class="menu-itemLast" style="font-size: 24px; text-align: center; color: tomato; background-color: teal;">blog</li>
console.log("elementLast.style:",o.style);//! CSSStyleDeclaration - inline styles object
console.log("----------------------------------------------------------------------------------------------------------------------------------------");//! Атрибути
console.warn("Атрибути:");const t=document.querySelector(".image");console.log('image.hasAttribute("src"):',t.hasAttribute("src"));//! true
console.log('image.getAttribute("alt"):',t.getAttribute("alt"));//! "Rocks and waterfall"
t.setAttribute("alt","Amazing nature");console.log('image.getAttribute("alt"):',t.getAttribute("alt"));//! Amazing nature
t.setAttribute("width","320");console.log('image.getAttribute("width"):',t.getAttribute("width"));//! 320
t.removeAttribute("height");console.log("image.attributes:",t.attributes);//! NamedNodeMap {0: class, 1: src, 2: alt, 3: width, class: class, src: src, alt: alt, width: width, length: 4}
console.log("---------------------------------------------------------------------------------------------------------------------------------");//! data-атрибути
console.warn("data-атрибути:");const L=document.querySelector('button[data-action="save"]');console.log("saveBtn.dataset.action:",L.dataset.action);//! "save"
const f=document.querySelector('button[data-action="close"]');console.log("closeBtn.dataset.action:",f.dataset.action);//! "close"
console.log("---------------------------------------------------------------------------------------------------------------------------------");//! Створення та видалення елементів
//! Створення елементів
console.warn("Створення елементів:");console.log(`%c
    🔸 document.createElement(tagName);
    `,"color: blue; font-size: 16px");console.log(". . . . . . . . . . . . . . . . . . . . . . . . . . .");const l=document.createElement("h1");console.log("heading:",l);//! <h1></h1>
l.textContent="This is a heading";l.style.color="green";console.log("heading:",l);//! <h1>This is a heading</h1>
const a=document.createElement("img");a.src="https://picsum.photos/id/17/320/240";a.alt="Nature";console.log("image:",a);//! <img src="https://picsum.photos/id/17/320/240" alt="Nature" />
console.log("--------------------------------------------------------------------------------------------");//! Додавання елементів
console.warn("Додавання елементів:");console.log(`%c
    🔸 element.append(el1, el2, ...) - після всіх дітей елемента
    🔸 element.prepend(el1, el2, ...) - перед усіма дітьми елемента
    🔸 element.after(el1, el2, ...) - після елемента
    🔸 element.before(el1, el2, ...) - перед елементом
    `,"color: blue; font-size: 16px");const n=document.querySelector(".usernames"),r=document.createElement("li");r.textContent="Poly-1";n.append(r);const g=document.createElement("li");g.textContent="Poly-2";n.appendChild(g);const d=document.createElement("li");d.textContent="Ajax";n.prepend(d);const u=document.createElement("a");u.textContent="Read more...";n.after(u);const S=document.createElement("h3");S.textContent="Usernames";n.before(S);console.log("--------------------------------------------------------------------------------------------");
