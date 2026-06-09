import"./modulepreload-polyfill-3cfb730f.js";const u=[{userId:10,id:91,title:"aut amet sed",body:`libero voluptate eveniet aperiam sed
sunt placeat suscipit molestias
similique fugit nam natus
expedita consequatur consequatur dolores quia eos et placeat`},{userId:10,id:92,title:"ratione ex tenetur perferendis",body:`aut et excepturi dicta laudantium sint rerum nihil
laudantium et at
a neque minima officia et similique libero et
commodi voluptate qui`},{userId:10,id:93,title:"beatae soluta recusandae",body:`dolorem quibusdam ducimus consequuntur dicta aut quo laboriosam
voluptatem quis enim recusandae ut sed sunt
nostrum est odit totam
sit error sed sunt eveniet provident qui nulla`},{userId:10,id:94,title:"qui qui voluptates illo iste minima",body:`aspernatur expedita soluta quo ab ut similique
expedita dolores amet
sed temporibus distinctio magnam saepe deleniti
omnis facilis nam ipsum natus sint similique omnis`},{userId:10,id:95,title:"id minus libero illum nam ad officiis",body:`earum voluptatem facere provident blanditiis velit laboriosam
pariatur accusamus odio saepe
cumque dolor qui a dicta ab doloribus consequatur omnis
corporis cupiditate eaque assumenda ad nesciunt`},{userId:10,id:96,title:"quaerat velit veniam amet cupiditate aut numquam ut sequi",body:`in non odio excepturi sint eum
labore voluptates vitae quia qui et
inventore itaque rerum
veniam non exercitationem delectus aut`},{userId:10,id:97,title:"quas fugiat ut perspiciatis vero provident",body:`eum non blanditiis soluta porro quibusdam voluptas
vel voluptatem qui placeat dolores qui velit aut
vel inventore aut cumque culpa explicabo aliquid at
perspiciatis est et voluptatem dignissimos dolor itaque sit nam`},{userId:10,id:98,title:"laboriosam dolor voluptates",body:`doloremque ex facilis sit sint culpa
soluta assumenda eligendi non ut eius
sequi ducimus vel quasi
veritatis est dolores`},{userId:10,id:99,title:"temporibus sit alias delectus eligendi possimus magni",body:`quo deleniti praesentium dicta non quod
aut est molestias
molestias et officia quis nihil
itaque dolorem quia`},{userId:10,id:100,title:"at nam consequatur ea labore ea harum",body:`cupiditate quo est a modi nesciunt soluta
ipsa voluptas error itaque dicta in
autem qui minus magnam et distinctio eum
accusamus ratione error aut`}];console.log("%c Пошук ПОСТІВ (карток) ","color: white; background-color: #D33F49");console.log("data:",u);//! пошук необхідних елементів 
const r=document.getElementById("search"),n=document.getElementById("cards"),l=document.getElementById("counter");//! Первинне відображення всіх карток
o(u);//! Cлухаємо введення даних в інпут
r.addEventListener("input",d);//! без debounce
//! блок функцій 
//! отримуэ дані з інпуту та передає їх далі 
function d(e){const t=e.target.value.toLowerCase().trim();console.log("value:",t),c(t)}//! Функція фільтрації карток
function c(e){//! отримати дані з фукції filtersInputData = keyword ✅
const t=u.filter(i=>i.title.toLowerCase().includes(e));s(t.length),o(t,e)}//! Функція оновлення лічильника
function s(e){l.textContent=`Знайдено: ${e} ${p(e,["картка","картки","карток"])}`}//! Функція для відображення карток після ДО та ПІСЛЯ фільтрації
function o(e,t=""){if(n.innerHTML="",e.length===0){n.innerHTML='<p class="empty">Нічого не знайдено... 😕</p>',s(0);return}e.forEach(i=>{const a=document.createElement("li");a.classList.add("card"),a.innerHTML=`
   <h3>${m(i.title,t)}</h3>
    <p>${i.body}</p>
    `,n.appendChild(a)})}//! Функція підсвічування тексту
function m(e,t){if(!t)return e;const i=new RegExp(`(${t})`,"gi");return e.replace(i,'<span class="highlight">$1</span>')}//! Функція для відмінювання слова “картка”
function p(e,t){const i=Math.abs(e)%100,a=i%10;return i>10&&i<20?t[2]:a>1&&a<5?t[1]:a===1?t[0]:t[2]}
