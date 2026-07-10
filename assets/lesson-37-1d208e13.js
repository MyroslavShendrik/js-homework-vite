import"./modulepreload-polyfill-3cfb730f.js";import{H as t}from"./handlebars-aa0ac26f.js";const n=`<div class="menu">
  <h1 class="header__title">{{headerTitle}}</h1>
  <nav>
  <ul class="header__menu">
    {{#each headerMenu}} <li class="header__menu-item"><a href="./">{{this}}</a></li> {{/each}}
  </ul>
  </nav>
</div>

 {{!-- <h1 class="header__title">Star Wars Fan Hub</h1>
  <nav>
    <ul class="header__menu">
      <li class="header__menu-item"><a href="#about">Про сайт</a></li>
      <li class="header__menu-item"><a href="#universe">Всесвіт</a></li>
      <li class="header__menu-item"><a href="#force">Сила</a></li>
      <li class="header__menu-item"><a href="#jedi">Джедаї і Сітхи</a></li>
      <li class="header__menu-item"><a href="#wars">Війни</a></li>
      <li class="header__menu-item"><a href="encyclopedia.html">Енциклопедія</a></li>
      <li class="header__menu-item"><a href="shop.html">Магазин</a></li>
    </ul>
  </nav> --}}`;console.log("Star Wars");const r=document.querySelector("#container");console.log("cardTemplate:",n);//!var1
//!var2
//! Створюємо рядок запиту,
const c="http://localhost:3000/",o="starWars",s=`${c}${o}`;console.log("url:",s);async function i(){try{const a=await(await fetch(s)).json();console.log("data:",a.page1.header);const l=t.compile(n)(a.page1.header);r.innerHTML=l}catch(e){console.log(e)}}i();
