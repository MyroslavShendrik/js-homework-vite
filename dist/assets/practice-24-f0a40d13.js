import"./modulepreload-polyfill-3cfb730f.js";//! Відкладене завантаження (з loading="lazy")
console.warn('Відкладене завантаження (з loading="lazy"):');//! Атрибут loading
console.log(`%c
    <img
        src="./my-image.jpg"
        alt="Image description"
        loading="lazy"
    />
    `,"color: blue; font-size: 18px");console.log("-------------------------------------------------------------------");//! Простий приклад використання Intersection Observer
console.warn("Простий приклад використання Intersection Observer:");const o=document.getElementById("target"),r=document.getElementById("scrollContainer");console.log("scrollContainer:",r);//!
const e=new IntersectionObserver(n=>{n.forEach(l=>{l.isIntersecting?(console.log("Елемент видно!"),o.style.background="lightgreen"):(console.log("Елемент пішов із зони видимості..."),o.style.background="yellow")})},{root:null,threshold:.5,rootMargin:"0px 0px -50% 0px"});console.log("observer:",e);//!
e.observe(o);
