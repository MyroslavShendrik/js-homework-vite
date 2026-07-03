import"./modulepreload-polyfill-3cfb730f.js";import{H as n}from"./handlebars-aa0ac26f.js";const e=`<div class="menu">
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
  </nav> --}}`;console.log("Star Wars");const l=document.querySelector("#container");console.log("cardTemplate:",e);const r={headerTitle:"Star Wars Fan Hub",headerMenu:["Про сайт","Всесвіт","Сила","Джедаї і Сітхи","Війни","Енциклопедія","Магазин"]},s=n.compile(e),a=s(r);console.log("markup:",a);l.innerHTML=a;
